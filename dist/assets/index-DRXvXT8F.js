var df=Object.defineProperty;var ff=(e,n,t)=>n in e?df(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Pi=(e,n,t)=>ff(e,typeof n!="symbol"?n+"":n,t);function pf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cu={exports:{}},Jo={},zu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),mf=Symbol.for("react.portal"),gf=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),kf=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Sf=Symbol.for("react.memo"),Pf=Symbol.for("react.lazy"),es=Symbol.iterator;function _f(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nu=Object.assign,Du={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Du,this.updater=t||Tu}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=Tt.prototype;function na(e,n,t){this.props=e,this.context=n,this.refs=Du,this.updater=t||Tu}var ta=na.prototype=new Mu;ta.constructor=na;Nu(ta,Tt.prototype);ta.isPureReactComponent=!0;var ns=Array.isArray,Ru=Object.prototype.hasOwnProperty,ra={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Ru.call(n,r)&&!ju.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:_r,type:e,key:i,ref:l,props:o,_owner:ra.current}}function Of(e,n){return{$$typeof:_r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function Ef(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ts=/\/+/g;function _i(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ef(""+e.key):n.toString(36)}function so(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _r:case mf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+_i(l,0):r,ns(o)?(t="",e!=null&&(t=e.replace(ts,"$&/")+"/"),so(o,n,t,"",function(u){return u})):o!=null&&(oa(o)&&(o=Of(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ts,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",ns(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+_i(i,a);l+=so(i,n,t,s,o)}else if(s=_f(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+_i(i,a++),l+=so(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Ar(e,n,t){if(e==null)return e;var r=[],o=0;return so(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Cf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},uo={transition:null},zf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:uo,ReactCurrentOwner:ra};function Au(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Ar,forEach:function(e,n,t){Ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ar(e,function(){n++}),n},toArray:function(e){return Ar(e,function(n){return n})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Tt;j.Fragment=gf;j.Profiler=yf;j.PureComponent=na;j.StrictMode=vf;j.Suspense=wf;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;j.act=Au;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nu({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=ra.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ru.call(n,s)&&!ju.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_r,type:e.type,key:o,ref:i,props:r,_owner:l}};j.createContext=function(e){return e={$$typeof:kf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bf,_context:e},e.Consumer=e};j.createElement=Lu;j.createFactory=function(e){var n=Lu.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:xf,render:e}};j.isValidElement=oa;j.lazy=function(e){return{$$typeof:Pf,_payload:{_status:-1,_result:e},_init:Cf}};j.memo=function(e,n){return{$$typeof:Sf,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=uo.transition;uo.transition={};try{e()}finally{uo.transition=n}};j.unstable_act=Au;j.useCallback=function(e,n){return pe.current.useCallback(e,n)};j.useContext=function(e){return pe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};j.useEffect=function(e,n){return pe.current.useEffect(e,n)};j.useId=function(){return pe.current.useId()};j.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return pe.current.useMemo(e,n)};j.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};j.useRef=function(e){return pe.current.useRef(e)};j.useState=function(e){return pe.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return pe.current.useTransition()};j.version="18.3.1";zu.exports=j;var xn=zu.exports;const A=hf(xn),rs=pf({__proto__:null,default:A},[xn]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=xn,Nf=Symbol.for("react.element"),Df=Symbol.for("react.fragment"),Mf=Object.prototype.hasOwnProperty,Rf=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jf={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Mf.call(n,r)&&!jf.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Nf,type:e,key:i,ref:l,props:o,_owner:Rf.current}}Jo.Fragment=Df;Jo.jsx=Fu;Jo.jsxs=Fu;Cu.exports=Jo;var z=Cu.exports,Iu={exports:{}},ze={},$u={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,N){var D=E.length;E.push(N);e:for(;0<D;){var X=D-1>>>1,ee=E[X];if(0<o(ee,N))E[X]=N,E[D]=ee,D=X;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],D=E.pop();if(D!==N){E[0]=D;e:for(var X=0,ee=E.length,jr=ee>>>1;X<jr;){var Ln=2*(X+1)-1,Si=E[Ln],An=Ln+1,Lr=E[An];if(0>o(Si,D))An<ee&&0>o(Lr,Si)?(E[X]=Lr,E[An]=D,X=An):(E[X]=Si,E[Ln]=D,X=Ln);else if(An<ee&&0>o(Lr,D))E[X]=Lr,E[An]=D,X=An;else break e}}return N}function o(E,N){var D=E.sortIndex-N.sortIndex;return D!==0?D:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,h=null,m=3,y=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var N=t(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=E)r(u),N.sortIndex=N.expirationTime,n(s,N);else break;N=t(u)}}function b(E){if(v=!1,p(E),!g)if(t(s)!==null)g=!0,xi(x);else{var N=t(u);N!==null&&wi(b,N.startTime-E)}}function x(E,N){g=!1,v&&(v=!1,f(S),S=-1),y=!0;var D=m;try{for(p(N),h=t(s);h!==null&&(!(h.expirationTime>N)||E&&!ke());){var X=h.callback;if(typeof X=="function"){h.callback=null,m=h.priorityLevel;var ee=X(h.expirationTime<=N);N=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===t(s)&&r(s),p(N)}else r(s);h=t(s)}if(h!==null)var jr=!0;else{var Ln=t(u);Ln!==null&&wi(b,Ln.startTime-N),jr=!1}return jr}finally{h=null,m=D,y=!1}}var P=!1,_=null,S=-1,T=5,M=-1;function ke(){return!(e.unstable_now()-M<T)}function Mt(){if(_!==null){var E=e.unstable_now();M=E;var N=!0;try{N=_(!0,E)}finally{N?Rt():(P=!1,_=null)}}else P=!1}var Rt;if(typeof c=="function")Rt=function(){c(Mt)};else if(typeof MessageChannel<"u"){var Ja=new MessageChannel,cf=Ja.port2;Ja.port1.onmessage=Mt,Rt=function(){cf.postMessage(null)}}else Rt=function(){w(Mt,0)};function xi(E){_=E,P||(P=!0,Rt())}function wi(E,N){S=w(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,xi(x))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var D=m;m=N;try{return E()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=m;m=E;try{return N()}finally{m=D}},e.unstable_scheduleCallback=function(E,N,D){var X=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?X+D:X):D=X,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=D+ee,E={id:d++,callback:N,priorityLevel:E,startTime:D,expirationTime:ee,sortIndex:-1},D>X?(E.sortIndex=D,n(u,E),t(s)===null&&E===t(u)&&(v?(f(S),S=-1):v=!0,wi(b,D-X))):(E.sortIndex=ee,n(s,E),g||y||(g=!0,xi(x))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var N=m;return function(){var D=m;m=N;try{return E.apply(this,arguments)}finally{m=D}}}})(Uu);$u.exports=Uu;var Lf=$u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af=xn,Oe=Lf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qu=new Set,lr={};function Jn(e,n){wt(e,n),wt(e+"Capture",n)}function wt(e,n){for(lr[e]=n,e=0;e<n.length;e++)qu.add(n[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Ff=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,os={},is={};function If(e){return tl.call(is,e)?!0:tl.call(os,e)?!1:Ff.test(e)?is[e]=!0:(os[e]=!0,!1)}function $f(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uf(e,n,t,r){if(n===null||typeof n>"u"||$f(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function la(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ia,la);le[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ia,la);le[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ia,la);le[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,n,t,r){var o=le.hasOwnProperty(n)?le[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Uf(n,t,o,r)&&(t=null),r||o===null?If(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var fn=Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fr=Symbol.for("react.element"),ot=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),Bu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),ls=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=ls&&e[ls]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Oi;function Ht(e){if(Oi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Oi=n&&n[1]||""}return`
`+Oi+e}var Ei=!1;function Ci(e,n){if(!e||Ei)return"";Ei=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ei=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ht(e):""}function qf(e){switch(e.tag){case 5:return Ht(e.type);case 16:return Ht("Lazy");case 13:return Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case it:return"Fragment";case ot:return"Portal";case rl:return"Profiler";case sa:return"StrictMode";case ol:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Bu:return(e._context.displayName||"Context")+".Provider";case ua:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ca:return n=e.displayName||null,n!==null?n:ll(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return ll(e(n))}catch{}}return null}function Bf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(n);case 8:return n===sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hf(e){var n=Wu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ir(e){e._valueTracker||(e._valueTracker=Hf(e))}function Qu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Wu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function as(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xu(e,n){n=n.checked,n!=null&&aa(e,"checked",n,!1)}function sl(e,n){Xu(e,n);var t=Tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ul(e,n.type,t):n.hasOwnProperty("defaultValue")&&ul(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ss(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ul(e,n,t){(n!=="number"||wo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Vt=Array.isArray;function gt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function cl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Vt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function Ku(e,n){var t=Tn(n.value),r=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function cs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Yu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vf=["Webkit","ms","Moz","O"];Object.keys(Yt).forEach(function(e){Vf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Yt[n]=Yt[e]})});function Zu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Yt.hasOwnProperty(e)&&Yt[e]?(""+n).trim():n+"px"}function Ju(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Zu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Wf=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,n){if(n){if(Wf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function pl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,vt=null,yt=null;function ds(e){if(e=Cr(e)){if(typeof ml!="function")throw Error(k(280));var n=e.stateNode;n&&(n=oi(n),ml(e.stateNode,e.type,n))}}function ec(e){vt?yt?yt.push(e):yt=[e]:vt=e}function nc(){if(vt){var e=vt,n=yt;if(yt=vt=null,ds(e),n)for(e=0;e<n.length;e++)ds(n[e])}}function tc(e,n){return e(n)}function rc(){}var zi=!1;function oc(e,n,t){if(zi)return e(n,t);zi=!0;try{return tc(e,n,t)}finally{zi=!1,(vt!==null||yt!==null)&&(rc(),nc())}}function sr(e,n){var t=e.stateNode;if(t===null)return null;var r=oi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var gl=!1;if(an)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{gl=!1}function Qf(e,n,t,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Gt=!1,So=null,Po=!1,vl=null,Xf={onError:function(e){Gt=!0,So=e}};function Kf(e,n,t,r,o,i,l,a,s){Gt=!1,So=null,Qf.apply(Xf,arguments)}function Yf(e,n,t,r,o,i,l,a,s){if(Kf.apply(this,arguments),Gt){if(Gt){var u=So;Gt=!1,So=null}else throw Error(k(198));Po||(Po=!0,vl=u)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ic(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fs(e){if(et(e)!==e)throw Error(k(188))}function Gf(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return fs(o),e;if(i===r)return fs(o),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function lc(e){return e=Gf(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ac(e);if(n!==null)return n;e=e.sibling}return null}var sc=Oe.unstable_scheduleCallback,ps=Oe.unstable_cancelCallback,Zf=Oe.unstable_shouldYield,Jf=Oe.unstable_requestPaint,K=Oe.unstable_now,ep=Oe.unstable_getCurrentPriorityLevel,fa=Oe.unstable_ImmediatePriority,uc=Oe.unstable_UserBlockingPriority,_o=Oe.unstable_NormalPriority,np=Oe.unstable_LowPriority,cc=Oe.unstable_IdlePriority,ei=null,Ge=null;function tp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:ip,rp=Math.log,op=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(rp(e)/op|0)|0}var Ur=64,qr=4194304;function Wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=Wt(a):(i&=l,i!==0&&(r=Wt(i)))}else l=t&~o,l!==0?r=Wt(l):i!==0&&(r=Wt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-He(n),o=1<<t,r|=e[t],n&=~o;return r}function lp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-He(i),a=1<<l,s=o[l];s===-1?(!(a&t)||a&r)&&(o[l]=lp(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function Ti(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-He(n),e[n]=t}function sp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-He(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function pa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-He(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var F=0;function fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,ha,hc,mc,gc,bl=!1,Br=[],wn=null,Sn=null,Pn=null,ur=new Map,cr=new Map,vn=[],up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,n){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ur.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(n.pointerId)}}function At(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Cr(n),n!==null&&ha(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function cp(e,n,t,r,o){switch(n){case"focusin":return wn=At(wn,e,n,t,r,o),!0;case"dragenter":return Sn=At(Sn,e,n,t,r,o),!0;case"mouseover":return Pn=At(Pn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,At(ur.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,cr.set(i,At(cr.get(i)||null,e,n,t,r,o)),!0}return!1}function vc(e){var n=Un(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=ic(t),n!==null){e.blockedOn=n,gc(e.priority,function(){hc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=kl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);hl=r,t.target.dispatchEvent(r),hl=null}else return n=Cr(t),n!==null&&ha(n),e.blockedOn=t,!1;n.shift()}return!0}function ms(e,n,t){co(e)&&t.delete(n)}function dp(){bl=!1,wn!==null&&co(wn)&&(wn=null),Sn!==null&&co(Sn)&&(Sn=null),Pn!==null&&co(Pn)&&(Pn=null),ur.forEach(ms),cr.forEach(ms)}function Ft(e,n){e.blockedOn===n&&(e.blockedOn=null,bl||(bl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,dp)))}function dr(e){function n(o){return Ft(o,e)}if(0<Br.length){Ft(Br[0],e);for(var t=1;t<Br.length;t++){var r=Br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&Ft(wn,e),Sn!==null&&Ft(Sn,e),Pn!==null&&Ft(Pn,e),ur.forEach(n),cr.forEach(n),t=0;t<vn.length;t++)r=vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)vc(t),t.blockedOn===null&&vn.shift()}var bt=fn.ReactCurrentBatchConfig,Eo=!0;function fp(e,n,t,r){var o=F,i=bt.transition;bt.transition=null;try{F=1,ma(e,n,t,r)}finally{F=o,bt.transition=i}}function pp(e,n,t,r){var o=F,i=bt.transition;bt.transition=null;try{F=4,ma(e,n,t,r)}finally{F=o,bt.transition=i}}function ma(e,n,t,r){if(Eo){var o=kl(e,n,t,r);if(o===null)$i(e,n,r,Co,t),hs(e,r);else if(cp(o,e,n,t,r))r.stopPropagation();else if(hs(e,r),n&4&&-1<up.indexOf(e)){for(;o!==null;){var i=Cr(o);if(i!==null&&pc(i),i=kl(e,n,t,r),i===null&&$i(e,n,r,Co,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else $i(e,n,r,null,t)}}var Co=null;function kl(e,n,t,r){if(Co=null,e=da(r),e=Un(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ic(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Co=e,null}function yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ep()){case fa:return 1;case uc:return 4;case _o:case np:return 16;case cc:return 536870912;default:return 16}default:return 16}}var bn=null,ga=null,fo=null;function bc(){if(fo)return fo;var e,n=ga,t=n.length,r,o="value"in bn?bn.value:bn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return fo=o.slice(e,1<r?1-r:void 0)}function po(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function gs(){return!1}function Te(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hr:gs,this.isPropagationStopped=gs,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Te(Nt),Er=W({},Nt,{view:0,detail:0}),hp=Te(Er),Ni,Di,It,ni=W({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(Ni=e.screenX-It.screenX,Di=e.screenY-It.screenY):Di=Ni=0,It=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),vs=Te(ni),mp=W({},ni,{dataTransfer:0}),gp=Te(mp),vp=W({},Er,{relatedTarget:0}),Mi=Te(vp),yp=W({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=Te(yp),kp=W({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xp=Te(kp),wp=W({},Nt,{data:0}),ys=Te(wp),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_p[e])?!!n[e]:!1}function ya(){return Op}var Ep=W({},Er,{key:function(e){if(e.key){var n=Sp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cp=Te(Ep),zp=W({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=Te(zp),Tp=W({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),Np=Te(Tp),Dp=W({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mp=Te(Dp),Rp=W({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Te(Rp),Lp=[9,13,27,32],ba=an&&"CompositionEvent"in window,Zt=null;an&&"documentMode"in document&&(Zt=document.documentMode);var Ap=an&&"TextEvent"in window&&!Zt,kc=an&&(!ba||Zt&&8<Zt&&11>=Zt),ks=" ",xs=!1;function xc(e,n){switch(e){case"keyup":return Lp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lt=!1;function Fp(e,n){switch(e){case"compositionend":return wc(n);case"keypress":return n.which!==32?null:(xs=!0,ks);case"textInput":return e=n.data,e===ks&&xs?null:e;default:return null}}function Ip(e,n){if(lt)return e==="compositionend"||!ba&&xc(e,n)?(e=bc(),fo=ga=bn=null,lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kc&&n.locale!=="ko"?null:n.data;default:return null}}var $p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$p[e.type]:n==="textarea"}function Sc(e,n,t,r){ec(r),n=zo(n,"onChange"),0<n.length&&(t=new va("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Jt=null,fr=null;function Up(e){Rc(e,0)}function ti(e){var n=ut(e);if(Qu(n))return e}function qp(e,n){if(e==="change")return n}var Pc=!1;if(an){var Ri;if(an){var ji="oninput"in document;if(!ji){var Ss=document.createElement("div");Ss.setAttribute("oninput","return;"),ji=typeof Ss.oninput=="function"}Ri=ji}else Ri=!1;Pc=Ri&&(!document.documentMode||9<document.documentMode)}function Ps(){Jt&&(Jt.detachEvent("onpropertychange",_c),fr=Jt=null)}function _c(e){if(e.propertyName==="value"&&ti(fr)){var n=[];Sc(n,fr,e,da(e)),oc(Up,n)}}function Bp(e,n,t){e==="focusin"?(Ps(),Jt=n,fr=t,Jt.attachEvent("onpropertychange",_c)):e==="focusout"&&Ps()}function Hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(fr)}function Vp(e,n){if(e==="click")return ti(n)}function Wp(e,n){if(e==="input"||e==="change")return ti(n)}function Qp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qe=typeof Object.is=="function"?Object.is:Qp;function pr(e,n){if(Qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!tl.call(n,o)||!Qe(e[o],n[o]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,n){var t=_s(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_s(t)}}function Oc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Oc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ec(){for(var e=window,n=wo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=wo(e.document)}return n}function ka(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Xp(e){var n=Ec(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Oc(t.ownerDocument.documentElement,t)){if(r!==null&&ka(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Os(t,i);var l=Os(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kp=an&&"documentMode"in document&&11>=document.documentMode,at=null,xl=null,er=null,wl=!1;function Es(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wl||at==null||at!==wo(r)||(r=at,"selectionStart"in r&&ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&pr(er,r)||(er=r,r=zo(xl,"onSelect"),0<r.length&&(n=new va("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=at)))}function Vr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var st={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},Li={},Cc={};an&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete st.animationend.animation,delete st.animationiteration.animation,delete st.animationstart.animation),"TransitionEvent"in window||delete st.transitionend.transition);function ri(e){if(Li[e])return Li[e];if(!st[e])return e;var n=st[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Cc)return Li[e]=n[t];return e}var zc=ri("animationend"),Tc=ri("animationiteration"),Nc=ri("animationstart"),Dc=ri("transitionend"),Mc=new Map,Cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,n){Mc.set(e,n),Jn(n,[e])}for(var Ai=0;Ai<Cs.length;Ai++){var Fi=Cs[Ai],Yp=Fi.toLowerCase(),Gp=Fi[0].toUpperCase()+Fi.slice(1);Mn(Yp,"on"+Gp)}Mn(zc,"onAnimationEnd");Mn(Tc,"onAnimationIteration");Mn(Nc,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Dc,"onTransitionEnd");wt("onMouseEnter",["mouseout","mouseover"]);wt("onMouseLeave",["mouseout","mouseover"]);wt("onPointerEnter",["pointerout","pointerover"]);wt("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));function zs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Yf(r,n,void 0,e),e.currentTarget=null}function Rc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;zs(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;zs(o,a,u),i=s}}}if(Po)throw e=vl,Po=!1,vl=null,e}function $(e,n){var t=n[El];t===void 0&&(t=n[El]=new Set);var r=e+"__bubble";t.has(r)||(jc(n,e,2,!1),t.add(r))}function Ii(e,n,t){var r=0;n&&(r|=4),jc(t,e,r,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Wr]){e[Wr]=!0,qu.forEach(function(t){t!=="selectionchange"&&(Zp.has(t)||Ii(t,!1,e),Ii(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,Ii("selectionchange",!1,n))}}function jc(e,n,t,r){switch(yc(n)){case 1:var o=fp;break;case 4:o=pp;break;default:o=ma}t=o.bind(null,n,t,e),o=void 0,!gl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function $i(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Un(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}oc(function(){var u=i,d=da(t),h=[];e:{var m=Mc.get(e);if(m!==void 0){var y=va,g=e;switch(e){case"keypress":if(po(t)===0)break e;case"keydown":case"keyup":y=Cp;break;case"focusin":g="focus",y=Mi;break;case"focusout":g="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Np;break;case zc:case Tc:case Nc:y=bp;break;case Dc:y=Mp;break;case"scroll":y=hp;break;case"wheel":y=jp;break;case"copy":case"cut":case"paste":y=xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bs}var v=(n&4)!==0,w=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var c=u,p;c!==null;){p=c;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,f!==null&&(b=sr(c,f),b!=null&&v.push(mr(c,b,p)))),w)break;c=c.return}0<v.length&&(m=new y(m,g,null,t,d),h.push({event:m,listeners:v}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==hl&&(g=t.relatedTarget||t.fromElement)&&(Un(g)||g[sn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=t.relatedTarget||t.toElement,y=u,g=g?Un(g):null,g!==null&&(w=et(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=vs,b="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=bs,b="onPointerLeave",f="onPointerEnter",c="pointer"),w=y==null?m:ut(y),p=g==null?m:ut(g),m=new v(b,c+"leave",y,t,d),m.target=w,m.relatedTarget=p,b=null,Un(d)===u&&(v=new v(f,c+"enter",g,t,d),v.target=p,v.relatedTarget=w,b=v),w=b,y&&g)n:{for(v=y,f=g,c=0,p=v;p;p=nt(p))c++;for(p=0,b=f;b;b=nt(b))p++;for(;0<c-p;)v=nt(v),c--;for(;0<p-c;)f=nt(f),p--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break n;v=nt(v),f=nt(f)}v=null}else v=null;y!==null&&Ts(h,m,y,v,!1),g!==null&&w!==null&&Ts(h,w,g,v,!0)}}e:{if(m=u?ut(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var x=qp;else if(ws(m))if(Pc)x=Wp;else{x=Hp;var P=Bp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=Vp);if(x&&(x=x(e,u))){Sc(h,x,t,d);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&ul(m,"number",m.value)}switch(P=u?ut(u):window,e){case"focusin":(ws(P)||P.contentEditable==="true")&&(at=P,xl=u,er=null);break;case"focusout":er=xl=at=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,Es(h,t,d);break;case"selectionchange":if(Kp)break;case"keydown":case"keyup":Es(h,t,d)}var _;if(ba)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else lt?xc(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(kc&&t.locale!=="ko"&&(lt||S!=="onCompositionStart"?S==="onCompositionEnd"&&lt&&(_=bc()):(bn=d,ga="value"in bn?bn.value:bn.textContent,lt=!0)),P=zo(u,S),0<P.length&&(S=new ys(S,e,null,t,d),h.push({event:S,listeners:P}),_?S.data=_:(_=wc(t),_!==null&&(S.data=_)))),(_=Ap?Fp(e,t):Ip(e,t))&&(u=zo(u,"onBeforeInput"),0<u.length&&(d=new ys("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:u}),d.data=_))}Rc(h,n)})}function mr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function zo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=sr(e,t),i!=null&&r.unshift(mr(e,i,o)),i=sr(e,n),i!=null&&r.push(mr(e,i,o))),e=e.return}return r}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ts(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=sr(t,i),s!=null&&l.unshift(mr(t,s,a))):o||(s=sr(t,i),s!=null&&l.push(mr(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Jp=/\r\n?/g,eh=/\u0000|\uFFFD/g;function Ns(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace(eh,"")}function Qr(e,n,t){if(n=Ns(n),Ns(e)!==n&&t)throw Error(k(425))}function To(){}var Sl=null,Pl=null;function _l(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(rh)}:Ol;function rh(e){setTimeout(function(){throw e})}function Ui(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),dr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);dr(n)}function _n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Dt=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Dt,gr="__reactProps$"+Dt,sn="__reactContainer$"+Dt,El="__reactEvents$"+Dt,oh="__reactListeners$"+Dt,ih="__reactHandles$"+Dt;function Un(e){var n=e[Ye];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sn]||t[Ye]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ms(e);e!==null;){if(t=e[Ye])return t;e=Ms(e)}return n}e=t,t=e.parentNode}return null}function Cr(e){return e=e[Ye]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function oi(e){return e[gr]||null}var Cl=[],ct=-1;function Rn(e){return{current:e}}function U(e){0>ct||(e.current=Cl[ct],Cl[ct]=null,ct--)}function I(e,n){ct++,Cl[ct]=e.current,e.current=n}var Nn={},ce=Rn(Nn),ve=Rn(!1),Wn=Nn;function St(e,n){var t=e.type.contextTypes;if(!t)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function ye(e){return e=e.childContextTypes,e!=null}function No(){U(ve),U(ce)}function Rs(e,n,t){if(ce.current!==Nn)throw Error(k(168));I(ce,n),I(ve,t)}function Lc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,Bf(e)||"Unknown",o));return W({},t,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Wn=ce.current,I(ce,e),I(ve,ve.current),!0}function js(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Lc(e,n,Wn),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(ce),I(ce,e)):U(ve),I(ve,t)}var nn=null,ii=!1,qi=!1;function Ac(e){nn===null?nn=[e]:nn.push(e)}function lh(e){ii=!0,Ac(e)}function jn(){if(!qi&&nn!==null){qi=!0;var e=0,n=F;try{var t=nn;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}nn=null,ii=!1}catch(o){throw nn!==null&&(nn=nn.slice(e+1)),sc(fa,jn),o}finally{F=n,qi=!1}}return null}var dt=[],ft=0,Mo=null,Ro=0,Ne=[],De=0,Qn=null,tn=1,rn="";function Fn(e,n){dt[ft++]=Ro,dt[ft++]=Mo,Mo=e,Ro=n}function Fc(e,n,t){Ne[De++]=tn,Ne[De++]=rn,Ne[De++]=Qn,Qn=e;var r=tn;e=rn;var o=32-He(r)-1;r&=~(1<<o),t+=1;var i=32-He(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,tn=1<<32-He(n)+o|t<<o|r,rn=i+e}else tn=1<<i|t<<o|r,rn=e}function xa(e){e.return!==null&&(Fn(e,1),Fc(e,1,0))}function wa(e){for(;e===Mo;)Mo=dt[--ft],dt[ft]=null,Ro=dt[--ft],dt[ft]=null;for(;e===Qn;)Qn=Ne[--De],Ne[De]=null,rn=Ne[--De],Ne[De]=null,tn=Ne[--De],Ne[De]=null}var _e=null,Se=null,B=!1,Ue=null;function Ic(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ls(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Se=_n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:tn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Se=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(B){var n=Se;if(n){var t=n;if(!Ls(e,n)){if(zl(e))throw Error(k(418));n=_n(t.nextSibling);var r=_e;n&&Ls(e,n)?Ic(r,t):(e.flags=e.flags&-4097|2,B=!1,_e=e)}}else{if(zl(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,_e=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Xr(e){if(e!==_e)return!1;if(!B)return As(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_l(e.type,e.memoizedProps)),n&&(n=Se)){if(zl(e))throw $c(),Error(k(418));for(;n;)Ic(e,n),n=_n(n.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=_n(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=_e?_n(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=Se;e;)e=_n(e.nextSibling)}function Pt(){Se=_e=null,B=!1}function Sa(e){Ue===null?Ue=[e]:Ue.push(e)}var ah=fn.ReactCurrentBatchConfig;function $t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Kr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fs(e){var n=e._init;return n(e._payload)}function Uc(e){function n(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=zn(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,b){return c===null||c.tag!==6?(c=Ki(p,f.mode,b),c.return=f,c):(c=o(c,p),c.return=f,c)}function s(f,c,p,b){var x=p.type;return x===it?d(f,c,p.props.children,b,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===mn&&Fs(x)===c.type)?(b=o(c,p.props),b.ref=$t(f,c,p),b.return=f,b):(b=ko(p.type,p.key,p.props,null,f.mode,b),b.ref=$t(f,c,p),b.return=f,b)}function u(f,c,p,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yi(p,f.mode,b),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function d(f,c,p,b,x){return c===null||c.tag!==7?(c=Vn(p,f.mode,b,x),c.return=f,c):(c=o(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ki(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Fr:return p=ko(c.type,c.key,c.props,null,f.mode,p),p.ref=$t(f,null,c),p.return=f,p;case ot:return c=Yi(c,f.mode,p),c.return=f,c;case mn:var b=c._init;return h(f,b(c._payload),p)}if(Vt(c)||jt(c))return c=Vn(c,f.mode,p,null),c.return=f,c;Kr(f,c)}return null}function m(f,c,p,b){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:a(f,c,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fr:return p.key===x?s(f,c,p,b):null;case ot:return p.key===x?u(f,c,p,b):null;case mn:return x=p._init,m(f,c,x(p._payload),b)}if(Vt(p)||jt(p))return x!==null?null:d(f,c,p,b,null);Kr(f,p)}return null}function y(f,c,p,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(p)||null,a(c,f,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fr:return f=f.get(b.key===null?p:b.key)||null,s(c,f,b,x);case ot:return f=f.get(b.key===null?p:b.key)||null,u(c,f,b,x);case mn:var P=b._init;return y(f,c,p,P(b._payload),x)}if(Vt(b)||jt(b))return f=f.get(p)||null,d(c,f,b,x,null);Kr(c,b)}return null}function g(f,c,p,b){for(var x=null,P=null,_=c,S=c=0,T=null;_!==null&&S<p.length;S++){_.index>S?(T=_,_=null):T=_.sibling;var M=m(f,_,p[S],b);if(M===null){_===null&&(_=T);break}e&&_&&M.alternate===null&&n(f,_),c=i(M,c,S),P===null?x=M:P.sibling=M,P=M,_=T}if(S===p.length)return t(f,_),B&&Fn(f,S),x;if(_===null){for(;S<p.length;S++)_=h(f,p[S],b),_!==null&&(c=i(_,c,S),P===null?x=_:P.sibling=_,P=_);return B&&Fn(f,S),x}for(_=r(f,_);S<p.length;S++)T=y(_,f,S,p[S],b),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?S:T.key),c=i(T,c,S),P===null?x=T:P.sibling=T,P=T);return e&&_.forEach(function(ke){return n(f,ke)}),B&&Fn(f,S),x}function v(f,c,p,b){var x=jt(p);if(typeof x!="function")throw Error(k(150));if(p=x.call(p),p==null)throw Error(k(151));for(var P=x=null,_=c,S=c=0,T=null,M=p.next();_!==null&&!M.done;S++,M=p.next()){_.index>S?(T=_,_=null):T=_.sibling;var ke=m(f,_,M.value,b);if(ke===null){_===null&&(_=T);break}e&&_&&ke.alternate===null&&n(f,_),c=i(ke,c,S),P===null?x=ke:P.sibling=ke,P=ke,_=T}if(M.done)return t(f,_),B&&Fn(f,S),x;if(_===null){for(;!M.done;S++,M=p.next())M=h(f,M.value,b),M!==null&&(c=i(M,c,S),P===null?x=M:P.sibling=M,P=M);return B&&Fn(f,S),x}for(_=r(f,_);!M.done;S++,M=p.next())M=y(_,f,S,M.value,b),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?S:M.key),c=i(M,c,S),P===null?x=M:P.sibling=M,P=M);return e&&_.forEach(function(Mt){return n(f,Mt)}),B&&Fn(f,S),x}function w(f,c,p,b){if(typeof p=="object"&&p!==null&&p.type===it&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Fr:e:{for(var x=p.key,P=c;P!==null;){if(P.key===x){if(x=p.type,x===it){if(P.tag===7){t(f,P.sibling),c=o(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===mn&&Fs(x)===P.type){t(f,P.sibling),c=o(P,p.props),c.ref=$t(f,P,p),c.return=f,f=c;break e}t(f,P);break}else n(f,P);P=P.sibling}p.type===it?(c=Vn(p.props.children,f.mode,b,p.key),c.return=f,f=c):(b=ko(p.type,p.key,p.props,null,f.mode,b),b.ref=$t(f,c,p),b.return=f,f=b)}return l(f);case ot:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Yi(p,f.mode,b),c.return=f,f=c}return l(f);case mn:return P=p._init,w(f,c,P(p._payload),b)}if(Vt(p))return g(f,c,p,b);if(jt(p))return v(f,c,p,b);Kr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(f,c.sibling),c=o(c,p),c.return=f,f=c):(t(f,c),c=Ki(p,f.mode,b),c.return=f,f=c),l(f)):t(f,c)}return w}var _t=Uc(!0),qc=Uc(!1),jo=Rn(null),Lo=null,pt=null,Pa=null;function _a(){Pa=pt=Lo=null}function Oa(e){var n=jo.current;U(jo),e._currentValue=n}function Nl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function kt(e,n){Lo=e,Pa=pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:n,next:null},pt===null){if(Lo===null)throw Error(k(308));pt=e,Lo.dependencies={lanes:0,firstContext:e}}else pt=pt.next=e;return n}var qn=null;function Ea(e){qn===null?qn=[e]:qn.push(e)}function Bc(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ea(n)):(t.next=o.next,o.next=t),n.interleaved=t,un(e,r)}function un(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var gn=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function On(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,un(e,t)}return o=r.interleaved,o===null?(n.next=n,Ea(r)):(n.next=o.next,o.next=n),r.interleaved=n,un(e,t)}function ho(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pa(e,t)}}function Is(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ao(e,n,t,r){var o=e.updateQueue;gn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,d=u=s=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(m=n,y=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(y,h,m);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(y,h,m):g,m==null)break e;h=W({},h,m);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,s=h):d=d.next=y,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Kn|=l,e.lanes=l,e.memoizedState=h}}function $s(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var zr={},Ze=Rn(zr),vr=Rn(zr),yr=Rn(zr);function Bn(e){if(e===zr)throw Error(k(174));return e}function za(e,n){switch(I(yr,n),I(vr,e),I(Ze,zr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:dl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=dl(n,e)}U(Ze),I(Ze,n)}function Ot(){U(Ze),U(vr),U(yr)}function Vc(e){Bn(yr.current);var n=Bn(Ze.current),t=dl(n,e.type);n!==t&&(I(vr,e),I(Ze,t))}function Ta(e){vr.current===e&&(U(Ze),U(vr))}var H=Rn(0);function Fo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=[];function Na(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var mo=fn.ReactCurrentDispatcher,Hi=fn.ReactCurrentBatchConfig,Xn=0,V=null,G=null,ne=null,Io=!1,nr=!1,br=0,sh=0;function ae(){throw Error(k(321))}function Da(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qe(e[t],n[t]))return!1;return!0}function Ma(e,n,t,r,o,i){if(Xn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mo.current=e===null||e.memoizedState===null?fh:ph,e=t(r,o),nr){i=0;do{if(nr=!1,br=0,25<=i)throw Error(k(301));i+=1,ne=G=null,n.updateQueue=null,mo.current=hh,e=t(r,o)}while(nr)}if(mo.current=$o,n=G!==null&&G.next!==null,Xn=0,ne=G=V=null,Io=!1,n)throw Error(k(300));return e}function Ra(){var e=br!==0;return br=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?V.memoizedState=ne=e:ne=ne.next=e,ne}function Le(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=ne===null?V.memoizedState:ne.next;if(n!==null)ne=n,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},ne===null?V.memoizedState=ne=e:ne=ne.next=e}return ne}function kr(e,n){return typeof n=="function"?n(e):n}function Vi(e){var n=Le(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=G,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Xn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,V.lanes|=d,Kn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Qe(r,n.memoizedState)||(ge=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,V.lanes|=i,Kn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wi(e){var n=Le(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Qe(i,n.memoizedState)||(ge=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Wc(){}function Qc(e,n){var t=V,r=Le(),o=n(),i=!Qe(r.memoizedState,o);if(i&&(r.memoizedState=o,ge=!0),r=r.queue,ja(Yc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,xr(9,Kc.bind(null,t,r,o,n),void 0,null),te===null)throw Error(k(349));Xn&30||Xc(t,n,o)}return o}function Xc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Kc(e,n,t,r){n.value=t,n.getSnapshot=r,Gc(n)&&Zc(e)}function Yc(e,n,t){return t(function(){Gc(n)&&Zc(e)})}function Gc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qe(e,t)}catch{return!0}}function Zc(e){var n=un(e,1);n!==null&&Ve(n,e,1,-1)}function Us(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},n.queue=e,e=e.dispatch=dh.bind(null,V,e),[n.memoizedState,e]}function xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Jc(){return Le().memoizedState}function go(e,n,t,r){var o=Ke();V.flags|=e,o.memoizedState=xr(1|n,t,void 0,r===void 0?null:r)}function li(e,n,t,r){var o=Le();r=r===void 0?null:r;var i=void 0;if(G!==null){var l=G.memoizedState;if(i=l.destroy,r!==null&&Da(r,l.deps)){o.memoizedState=xr(n,t,i,r);return}}V.flags|=e,o.memoizedState=xr(1|n,t,i,r)}function qs(e,n){return go(8390656,8,e,n)}function ja(e,n){return li(2048,8,e,n)}function ed(e,n){return li(4,2,e,n)}function nd(e,n){return li(4,4,e,n)}function td(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rd(e,n,t){return t=t!=null?t.concat([e]):null,li(4,4,td.bind(null,n,e),t)}function La(){}function od(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Da(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function id(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Da(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ld(e,n,t){return Xn&21?(Qe(t,n)||(t=dc(),V.lanes|=t,Kn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=t)}function uh(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),n()}finally{F=t,Hi.transition=r}}function ad(){return Le().memoizedState}function ch(e,n,t){var r=Cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},sd(e))ud(n,t);else if(t=Bc(e,n,t,r),t!==null){var o=fe();Ve(t,e,r,o),cd(t,n,r)}}function dh(e,n,t){var r=Cn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(sd(e))ud(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,Qe(a,l)){var s=n.interleaved;s===null?(o.next=o,Ea(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Bc(e,n,o,r),t!==null&&(o=fe(),Ve(t,e,r,o),cd(t,n,r))}}function sd(e){var n=e.alternate;return e===V||n!==null&&n===V}function ud(e,n){nr=Io=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function cd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pa(e,t)}}var $o={readContext:je,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},fh={readContext:je,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:qs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,go(4194308,4,td.bind(null,n,e),t)},useLayoutEffect:function(e,n){return go(4194308,4,e,n)},useInsertionEffect:function(e,n){return go(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ch.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:Us,useDebugValue:La,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Us(!1),n=e[0];return e=uh.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,o=Ke();if(B){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),te===null)throw Error(k(349));Xn&30||Xc(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,qs(Yc.bind(null,r,i,e),[e]),r.flags|=2048,xr(9,Kc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ke(),n=te.identifierPrefix;if(B){var t=rn,r=tn;t=(r&~(1<<32-He(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=br++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=sh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ph={readContext:je,useCallback:od,useContext:je,useEffect:ja,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:nd,useMemo:id,useReducer:Vi,useRef:Jc,useState:function(){return Vi(kr)},useDebugValue:La,useDeferredValue:function(e){var n=Le();return ld(n,G.memoizedState,e)},useTransition:function(){var e=Vi(kr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Wc,useSyncExternalStore:Qc,useId:ad,unstable_isNewReconciler:!1},hh={readContext:je,useCallback:od,useContext:je,useEffect:ja,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:nd,useMemo:id,useReducer:Wi,useRef:Jc,useState:function(){return Wi(kr)},useDebugValue:La,useDeferredValue:function(e){var n=Le();return G===null?n.memoizedState=e:ld(n,G.memoizedState,e)},useTransition:function(){var e=Wi(kr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Wc,useSyncExternalStore:Qc,useId:ad,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Dl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ai={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=fe(),o=Cn(e),i=ln(r,o);i.payload=n,t!=null&&(i.callback=t),n=On(e,i,o),n!==null&&(Ve(n,e,o,r),ho(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=fe(),o=Cn(e),i=ln(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=On(e,i,o),n!==null&&(Ve(n,e,o,r),ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=fe(),r=Cn(e),o=ln(t,r);o.tag=2,n!=null&&(o.callback=n),n=On(e,o,r),n!==null&&(Ve(n,e,r,t),ho(n,e,r))}};function Bs(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!pr(t,r)||!pr(o,i):!0}function dd(e,n,t){var r=!1,o=Nn,i=n.contextType;return typeof i=="object"&&i!==null?i=je(i):(o=ye(n)?Wn:ce.current,r=n.contextTypes,i=(r=r!=null)?St(e,o):Nn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ai,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Hs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ai.enqueueReplaceState(n,n.state,null)}function Ml(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ca(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=je(i):(i=ye(n)?Wn:ce.current,o.context=St(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Dl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ai.enqueueReplaceState(o,o.state,null),Ao(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n){try{var t="",r=n;do t+=qf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Qi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Rl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function fd(e,n,t){t=ln(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qo||(qo=!0,Hl=r),Rl(e,n)},t}function pd(e,n,t){t=ln(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Rl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Rl(e,n),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Vs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new mh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=zh.bind(null,e,n,t),n.then(e,e))}function Ws(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qs(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ln(-1,1),n.tag=2,On(t,n,1))),t.lanes|=1),e)}var gh=fn.ReactCurrentOwner,ge=!1;function de(e,n,t,r){n.child=e===null?qc(n,null,t,r):_t(n,e.child,t,r)}function Xs(e,n,t,r,o){t=t.render;var i=n.ref;return kt(n,o),r=Ma(e,n,t,r,i,o),t=Ra(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,cn(e,n,o)):(B&&t&&xa(n),n.flags|=1,de(e,n,r,o),n.child)}function Ks(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Ha(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,hd(e,n,i,r,o)):(e=ko(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:pr,t(l,r)&&e.ref===n.ref)return cn(e,n,o)}return n.flags|=1,e=zn(i,r),e.ref=n.ref,e.return=n,n.child=e}function hd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(pr(i,r)&&e.ref===n.ref)if(ge=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,cn(e,n,o)}return jl(e,n,t,r,o)}function md(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(mt,we),we|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(mt,we),we|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,I(mt,we),we|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,I(mt,we),we|=r;return de(e,n,o,t),n.child}function gd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function jl(e,n,t,r,o){var i=ye(t)?Wn:ce.current;return i=St(n,i),kt(n,o),t=Ma(e,n,t,r,i,o),r=Ra(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,cn(e,n,o)):(B&&r&&xa(n),n.flags|=1,de(e,n,t,o),n.child)}function Ys(e,n,t,r,o){if(ye(t)){var i=!0;Do(n)}else i=!1;if(kt(n,o),n.stateNode===null)vo(e,n),dd(n,t,r),Ml(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=je(u):(u=ye(t)?Wn:ce.current,u=St(n,u));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Hs(n,l,r,u),gn=!1;var m=n.memoizedState;l.state=m,Ao(n,r,l,o),s=n.memoizedState,a!==r||m!==s||ve.current||gn?(typeof d=="function"&&(Dl(n,t,d,r),s=n.memoizedState),(a=gn||Bs(n,t,a,r,m,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Hc(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ie(n.type,a),l.props=u,h=n.pendingProps,m=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=je(s):(s=ye(t)?Wn:ce.current,s=St(n,s));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Hs(n,l,r,s),gn=!1,m=n.memoizedState,l.state=m,Ao(n,r,l,o);var g=n.memoizedState;a!==h||m!==g||ve.current||gn?(typeof y=="function"&&(Dl(n,t,y,r),g=n.memoizedState),(u=gn||Bs(n,t,u,r,m,g,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ll(e,n,t,r,i,o)}function Ll(e,n,t,r,o,i){gd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&js(n,t,!1),cn(e,n,i);r=n.stateNode,gh.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=_t(n,e.child,null,i),n.child=_t(n,null,a,i)):de(e,n,a,i),n.memoizedState=r.state,o&&js(n,t,!0),n.child}function vd(e){var n=e.stateNode;n.pendingContext?Rs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Rs(e,n.context,!1),za(e,n.containerInfo)}function Gs(e,n,t,r,o){return Pt(),Sa(o),n.flags|=256,de(e,n,t,r),n.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,n,t){var r=n.pendingProps,o=H.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),I(H,o&1),e===null)return Tl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ci(l,r,0,null),e=Vn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Fl(t),n.memoizedState=Al,e):Aa(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return vh(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=zn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=zn(a,i):(i=Vn(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?Fl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Al,r}return i=e.child,e=i.sibling,r=zn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Aa(e,n){return n=ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Yr(e,n,t,r){return r!==null&&Sa(r),_t(n,e.child,null,t),e=Aa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vh(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Qi(Error(k(422))),Yr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=ci({mode:"visible",children:r.children},o,0,null),i=Vn(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&_t(n,e.child,null,l),n.child.memoizedState=Fl(l),n.memoizedState=Al,i);if(!(n.mode&1))return Yr(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Qi(i,r,void 0),Yr(e,n,l,r)}if(a=(l&e.childLanes)!==0,ge||a){if(r=te,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,un(e,o),Ve(r,e,o,-1))}return Ba(),r=Qi(Error(k(421))),Yr(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Th.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Se=_n(o.nextSibling),_e=n,B=!0,Ue=null,e!==null&&(Ne[De++]=tn,Ne[De++]=rn,Ne[De++]=Qn,tn=e.id,rn=e.overflow,Qn=n),n=Aa(n,r.children),n.flags|=4096,n)}function Zs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Nl(e.return,n,t)}function Xi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function bd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(de(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,t,n);else if(e.tag===19)Zs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Fo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Xi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Fo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Xi(n,!0,t,null,i);break;case"together":Xi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Kn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function yh(e,n,t){switch(n.tag){case 3:vd(n),Pt();break;case 5:Vc(n);break;case 1:ye(n.type)&&Do(n);break;case 4:za(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;I(jo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?yd(e,n,t):(I(H,H.current&1),e=cn(e,n,t),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return bd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,md(e,n,t)}return cn(e,n,t)}var kd,Il,xd,wd;kd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Il=function(){};xd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Bn(Ze.current);var i=null;switch(t){case"input":o=al(e,o),r=al(e,r),i=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":o=cl(e,o),r=cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=To)}fl(t,r);var l;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&$("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};wd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ut(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function bh(e,n,t){var r=n.pendingProps;switch(wa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ye(n.type)&&No(),se(n),null;case 3:return r=n.stateNode,Ot(),U(ve),U(ce),Na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ue!==null&&(Ql(Ue),Ue=null))),Il(e,n),se(n),null;case 5:Ta(n);var o=Bn(yr.current);if(t=n.type,e!==null&&n.stateNode!=null)xd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return se(n),null}if(e=Bn(Ze.current),Xr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ye]=n,r[gr]=i,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(o=0;o<Qt.length;o++)$(Qt[o],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":as(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":us(r,i),$("invalid",r)}fl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),o=["children",""+a]):lr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&$("scroll",r)}switch(t){case"input":Ir(r),ss(r,i,!0);break;case"textarea":Ir(r),cs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=To)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ye]=n,e[gr]=r,kd(e,n,!1,!1),n.stateNode=e;e:{switch(l=pl(t,r),t){case"dialog":$("cancel",e),$("close",e),o=r;break;case"iframe":case"object":case"embed":$("load",e),o=r;break;case"video":case"audio":for(o=0;o<Qt.length;o++)$(Qt[o],e);o=r;break;case"source":$("error",e),o=r;break;case"img":case"image":case"link":$("error",e),$("load",e),o=r;break;case"details":$("toggle",e),o=r;break;case"input":as(e,r),o=al(e,r),$("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":us(e,r),o=cl(e,r),$("invalid",e);break;default:o=r}fl(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ju(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gu(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&ar(e,s):typeof s=="number"&&ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&$("scroll",e):s!=null&&aa(e,i,s,l))}switch(t){case"input":Ir(e),ss(e,r,!1);break;case"textarea":Ir(e),cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=To)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)wd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Bn(yr.current),Bn(Ze.current),Xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ye]=n,(i=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ye]=n,n.stateNode=r}return se(n),null;case 13:if(U(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Se!==null&&n.mode&1&&!(n.flags&128))$c(),Pt(),n.flags|=98560,i=!1;else if(i=Xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ye]=n}else Pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),i=!1}else Ue!==null&&(Ql(Ue),Ue=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):Ba())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return Ot(),Il(e,n),e===null&&hr(n.stateNode.containerInfo),se(n),null;case 10:return Oa(n.type._context),se(n),null;case 17:return ye(n.type)&&No(),se(n),null;case 19:if(U(H),i=n.memoizedState,i===null)return se(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)Ut(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Fo(e),l!==null){for(n.flags|=128,Ut(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(H,H.current&1|2),n.child}e=e.sibling}i.tail!==null&&K()>Ct&&(n.flags|=128,r=!0,Ut(i,!1),n.lanes=4194304)}else{if(!r)if(e=Fo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ut(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!B)return se(n),null}else 2*K()-i.renderingStartTime>Ct&&t!==1073741824&&(n.flags|=128,r=!0,Ut(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=K(),n.sibling=null,t=H.current,I(H,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return qa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?we&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function kh(e,n){switch(wa(n),n.tag){case 1:return ye(n.type)&&No(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ot(),U(ve),U(ce),Na(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ta(n),null;case 13:if(U(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(H),null;case 4:return Ot(),null;case 10:return Oa(n.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var Gr=!1,ue=!1,xh=typeof WeakSet=="function"?WeakSet:Set,O=null;function ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function $l(e,n,t){try{t()}catch(r){Q(e,n,r)}}var Js=!1;function wh(e,n){if(Sl=Eo,e=Ec(),ka(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,u=0,d=0,h=e,m=null;n:for(;;){for(var y;h!==t||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===e)break n;if(m===t&&++u===o&&(a=l),m===i&&++d===r&&(s=l),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pl={focusedElem:e,selectionRange:t},Eo=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?v:Ie(n.type,v),w);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){Q(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return g=Js,Js=!1,g}function tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$l(n,t,i)}o=o.next}while(o!==r)}}function si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ul(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Sd(e){var n=e.alternate;n!==null&&(e.alternate=null,Sd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[gr],delete n[El],delete n[oh],delete n[ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=To));else if(r!==4&&(e=e.child,e!==null))for(ql(e,n,t),e=e.sibling;e!==null;)ql(e,n,t),e=e.sibling}function Bl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bl(e,n,t),e=e.sibling;e!==null;)Bl(e,n,t),e=e.sibling}var oe=null,$e=!1;function pn(e,n,t){for(t=t.child;t!==null;)_d(e,n,t),t=t.sibling}function _d(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ei,t)}catch{}switch(t.tag){case 5:ue||ht(t,n);case 6:var r=oe,o=$e;oe=null,pn(e,n,t),oe=r,$e=o,oe!==null&&($e?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&($e?(e=oe,t=t.stateNode,e.nodeType===8?Ui(e.parentNode,t):e.nodeType===1&&Ui(e,t),dr(e)):Ui(oe,t.stateNode));break;case 4:r=oe,o=$e,oe=t.stateNode.containerInfo,$e=!0,pn(e,n,t),oe=r,$e=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$l(t,n,l),o=o.next}while(o!==r)}pn(e,n,t);break;case 1:if(!ue&&(ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Q(t,n,a)}pn(e,n,t);break;case 21:pn(e,n,t);break;case 22:t.mode&1?(ue=(r=ue)||t.memoizedState!==null,pn(e,n,t),ue=r):pn(e,n,t);break;default:pn(e,n,t)}}function nu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new xh),n.forEach(function(r){var o=Nh.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,$e=!1;break e;case 3:oe=a.stateNode.containerInfo,$e=!0;break e;case 4:oe=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(oe===null)throw Error(k(160));_d(i,l,o),oe=null,$e=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Q(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Od(n,e),n=n.sibling}function Od(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),Xe(e),r&4){try{tr(3,e,e.return),si(3,e)}catch(v){Q(e,e.return,v)}try{tr(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:Ae(n,e),Xe(e),r&512&&t!==null&&ht(t,t.return);break;case 5:if(Ae(n,e),Xe(e),r&512&&t!==null&&ht(t,t.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(v){Q(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xu(o,i),pl(a,l);var u=pl(a,i);for(l=0;l<s.length;l+=2){var d=s[l],h=s[l+1];d==="style"?Ju(o,h):d==="dangerouslySetInnerHTML"?Gu(o,h):d==="children"?ar(o,h):aa(o,d,h,u)}switch(a){case"input":sl(o,i);break;case"textarea":Ku(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?gt(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?gt(o,!!i.multiple,i.defaultValue,!0):gt(o,!!i.multiple,i.multiple?[]:"",!1))}o[gr]=i}catch(v){Q(e,e.return,v)}}break;case 6:if(Ae(n,e),Xe(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Q(e,e.return,v)}}break;case 3:if(Ae(n,e),Xe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:Ae(n,e),Xe(e);break;case 13:Ae(n,e),Xe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||($a=K())),r&4&&nu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ue=(u=ue)||d,Ae(n,e),ue=u):Ae(n,e),Xe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(h=O=d;O!==null;){switch(m=O,y=m.child,m.tag){case 0:case 11:case 14:case 15:tr(4,m,m.return);break;case 1:ht(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(v){Q(r,t,v)}}break;case 5:ht(m,m.return);break;case 22:if(m.memoizedState!==null){ru(h);continue}}y!==null?(y.return=m,O=y):ru(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Zu("display",l))}catch(v){Q(e,e.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Q(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(n,e),Xe(e),r&4&&nu(e);break;case 21:break;default:Ae(n,e),Xe(e)}}function Xe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Pd(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=eu(e);Bl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=eu(e);ql(e,a,l);break;default:throw Error(k(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sh(e,n,t){O=e,Ed(e)}function Ed(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Gr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ue;a=Gr;var u=ue;if(Gr=l,(ue=s)&&!u)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?ou(o):s!==null?(s.return=l,O=s):ou(o);for(;i!==null;)O=i,Ed(i),i=i.sibling;O=o,Gr=a,ue=u}tu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):tu(e)}}function tu(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ue||si(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ue)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&$s(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$s(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&dr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ue||n.flags&512&&Ul(n)}catch(m){Q(n,n.return,m)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function ru(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function ou(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{si(4,n)}catch(s){Q(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Q(n,o,s)}}var i=n.return;try{Ul(n)}catch(s){Q(n,i,s)}break;case 5:var l=n.return;try{Ul(n)}catch(s){Q(n,l,s)}}}catch(s){Q(n,n.return,s)}if(n===e){O=null;break}var a=n.sibling;if(a!==null){a.return=n.return,O=a;break}O=n.return}}var Ph=Math.ceil,Uo=fn.ReactCurrentDispatcher,Fa=fn.ReactCurrentOwner,Re=fn.ReactCurrentBatchConfig,L=0,te=null,Y=null,ie=0,we=0,mt=Rn(0),Z=0,wr=null,Kn=0,ui=0,Ia=0,rr=null,me=null,$a=0,Ct=1/0,en=null,qo=!1,Hl=null,En=null,Zr=!1,kn=null,Bo=0,or=0,Vl=null,yo=-1,bo=0;function fe(){return L&6?K():yo!==-1?yo:yo=K()}function Cn(e){return e.mode&1?L&2&&ie!==0?ie&-ie:ah.transition!==null?(bo===0&&(bo=dc()),bo):(e=F,e!==0||(e=window.event,e=e===void 0?16:yc(e.type)),e):1}function Ve(e,n,t,r){if(50<or)throw or=0,Vl=null,Error(k(185));Or(e,t,r),(!(L&2)||e!==te)&&(e===te&&(!(L&2)&&(ui|=t),Z===4&&yn(e,ie)),be(e,r),t===1&&L===0&&!(n.mode&1)&&(Ct=K()+500,ii&&jn()))}function be(e,n){var t=e.callbackNode;ap(e,n);var r=Oo(e,e===te?ie:0);if(r===0)t!==null&&ps(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ps(t),n===1)e.tag===0?lh(iu.bind(null,e)):Ac(iu.bind(null,e)),th(function(){!(L&6)&&jn()}),t=null;else{switch(fc(r)){case 1:t=fa;break;case 4:t=uc;break;case 16:t=_o;break;case 536870912:t=cc;break;default:t=_o}t=jd(t,Cd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cd(e,n){if(yo=-1,bo=0,L&6)throw Error(k(327));var t=e.callbackNode;if(xt()&&e.callbackNode!==t)return null;var r=Oo(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ho(e,r);else{n=r;var o=L;L|=2;var i=Td();(te!==e||ie!==n)&&(en=null,Ct=K()+500,Hn(e,n));do try{Eh();break}catch(a){zd(e,a)}while(!0);_a(),Uo.current=i,L=o,Y!==null?n=0:(te=null,ie=0,n=Z)}if(n!==0){if(n===2&&(o=yl(e),o!==0&&(r=o,n=Wl(e,o))),n===1)throw t=wr,Hn(e,0),yn(e,r),be(e,K()),t;if(n===6)yn(e,r);else{if(o=e.current.alternate,!(r&30)&&!_h(o)&&(n=Ho(e,r),n===2&&(i=yl(e),i!==0&&(r=i,n=Wl(e,i))),n===1))throw t=wr,Hn(e,0),yn(e,r),be(e,K()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:In(e,me,en);break;case 3:if(yn(e,r),(r&130023424)===r&&(n=$a+500-K(),10<n)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ol(In.bind(null,e,me,en),n);break}In(e,me,en);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-He(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ph(r/1960))-r,10<r){e.timeoutHandle=Ol(In.bind(null,e,me,en),r);break}In(e,me,en);break;case 5:In(e,me,en);break;default:throw Error(k(329))}}}return be(e,K()),e.callbackNode===t?Cd.bind(null,e):null}function Wl(e,n){var t=rr;return e.current.memoizedState.isDehydrated&&(Hn(e,n).flags|=256),e=Ho(e,n),e!==2&&(n=me,me=t,n!==null&&Ql(n)),e}function Ql(e){me===null?me=e:me.push.apply(me,e)}function _h(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Qe(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yn(e,n){for(n&=~Ia,n&=~ui,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-He(n),r=1<<t;e[t]=-1,n&=~r}}function iu(e){if(L&6)throw Error(k(327));xt();var n=Oo(e,0);if(!(n&1))return be(e,K()),null;var t=Ho(e,n);if(e.tag!==0&&t===2){var r=yl(e);r!==0&&(n=r,t=Wl(e,r))}if(t===1)throw t=wr,Hn(e,0),yn(e,n),be(e,K()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,In(e,me,en),be(e,K()),null}function Ua(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(Ct=K()+500,ii&&jn())}}function Yn(e){kn!==null&&kn.tag===0&&!(L&6)&&xt();var n=L;L|=1;var t=Re.transition,r=F;try{if(Re.transition=null,F=1,e)return e()}finally{F=r,Re.transition=t,L=n,!(L&6)&&jn()}}function qa(){we=mt.current,U(mt)}function Hn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,nh(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:Ot(),U(ve),U(ce),Na();break;case 5:Ta(r);break;case 4:Ot();break;case 13:U(H);break;case 19:U(H);break;case 10:Oa(r.type._context);break;case 22:case 23:qa()}t=t.return}if(te=e,Y=e=zn(e.current,null),ie=we=n,Z=0,wr=null,Ia=ui=Kn=0,me=rr=null,qn!==null){for(n=0;n<qn.length;n++)if(t=qn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}qn=null}return e}function zd(e,n){do{var t=Y;try{if(_a(),mo.current=$o,Io){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Io=!1}if(Xn=0,ne=G=V=null,nr=!1,br=0,Fa.current=null,t===null||t.return===null){Z=1,wr=n,Y=null;break}e:{var i=e,l=t.return,a=t,s=n;if(n=ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Ws(l);if(y!==null){y.flags&=-257,Qs(y,l,a,i,n),y.mode&1&&Vs(i,u,n),n=y,s=u;var g=n.updateQueue;if(g===null){var v=new Set;v.add(s),n.updateQueue=v}else g.add(s);break e}else{if(!(n&1)){Vs(i,u,n),Ba();break e}s=Error(k(426))}}else if(B&&a.mode&1){var w=Ws(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qs(w,l,a,i,n),Sa(Et(s,a));break e}}i=s=Et(s,a),Z!==4&&(Z=2),rr===null?rr=[i]:rr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=fd(i,s,n);Is(i,f);break e;case 1:a=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(En===null||!En.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var b=pd(i,a,n);Is(i,b);break e}}i=i.return}while(i!==null)}Dd(t)}catch(x){n=x,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Td(){var e=Uo.current;return Uo.current=$o,e===null?$o:e}function Ba(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Kn&268435455)&&!(ui&268435455)||yn(te,ie)}function Ho(e,n){var t=L;L|=2;var r=Td();(te!==e||ie!==n)&&(en=null,Hn(e,n));do try{Oh();break}catch(o){zd(e,o)}while(!0);if(_a(),L=t,Uo.current=r,Y!==null)throw Error(k(261));return te=null,ie=0,Z}function Oh(){for(;Y!==null;)Nd(Y)}function Eh(){for(;Y!==null&&!Zf();)Nd(Y)}function Nd(e){var n=Rd(e.alternate,e,we);e.memoizedProps=e.pendingProps,n===null?Dd(e):Y=n,Fa.current=null}function Dd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=kh(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(t=bh(t,n,we),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);Z===0&&(Z=5)}function In(e,n,t){var r=F,o=Re.transition;try{Re.transition=null,F=1,Ch(e,n,t,r)}finally{Re.transition=o,F=r}return null}function Ch(e,n,t,r){do xt();while(kn!==null);if(L&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(sp(e,i),e===te&&(Y=te=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Zr||(Zr=!0,jd(_o,function(){return xt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var l=F;F=1;var a=L;L|=4,Fa.current=null,wh(e,t),Od(t,e),Xp(Pl),Eo=!!Sl,Pl=Sl=null,e.current=t,Sh(t),Jf(),L=a,F=l,Re.transition=i}else e.current=t;if(Zr&&(Zr=!1,kn=e,Bo=o),i=e.pendingLanes,i===0&&(En=null),tp(t.stateNode),be(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(qo)throw qo=!1,e=Hl,Hl=null,e;return Bo&1&&e.tag!==0&&xt(),i=e.pendingLanes,i&1?e===Vl?or++:(or=0,Vl=e):or=0,jn(),null}function xt(){if(kn!==null){var e=fc(Bo),n=Re.transition,t=F;try{if(Re.transition=null,F=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,Bo=0,L&6)throw Error(k(331));var o=L;for(L|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:tr(8,d,i)}var h=d.child;if(h!==null)h.return=d,O=h;else for(;O!==null;){d=O;var m=d.sibling,y=d.return;if(Sd(d),d===u){O=null;break}if(m!==null){m.return=y,O=m;break}O=y}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,O=f;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,O=p;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:si(9,a)}}catch(x){Q(a,a.return,x)}if(a===l){O=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,O=b;break e}O=a.return}}if(L=o,jn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{F=t,Re.transition=n}}return!1}function lu(e,n,t){n=Et(t,n),n=fd(e,n,1),e=On(e,n,1),n=fe(),e!==null&&(Or(e,1,n),be(e,n))}function Q(e,n,t){if(e.tag===3)lu(e,e,t);else for(;n!==null;){if(n.tag===3){lu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=Et(t,e),e=pd(n,e,1),n=On(n,e,1),e=fe(),n!==null&&(Or(n,1,e),be(n,e));break}}n=n.return}}function zh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=fe(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(ie&t)===t&&(Z===4||Z===3&&(ie&130023424)===ie&&500>K()-$a?Hn(e,0):Ia|=t),be(e,n)}function Md(e,n){n===0&&(e.mode&1?(n=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):n=1);var t=fe();e=un(e,n),e!==null&&(Or(e,n,t),be(e,t))}function Th(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Md(e,t)}function Nh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Md(e,t)}var Rd;Rd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ge=!1,yh(e,n,t);ge=!!(e.flags&131072)}else ge=!1,B&&n.flags&1048576&&Fc(n,Ro,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;vo(e,n),e=n.pendingProps;var o=St(n,ce.current);kt(n,t),o=Ma(null,n,r,e,o,t);var i=Ra();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(i=!0,Do(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ca(n),o.updater=ai,n.stateNode=o,o._reactInternals=n,Ml(n,r,e,t),n=Ll(null,n,r,!0,i,t)):(n.tag=0,B&&i&&xa(n),de(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(vo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Mh(r),e=Ie(r,e),o){case 0:n=jl(null,n,r,e,t);break e;case 1:n=Ys(null,n,r,e,t);break e;case 11:n=Xs(null,n,r,e,t);break e;case 14:n=Ks(null,n,r,Ie(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),jl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),Ys(e,n,r,o,t);case 3:e:{if(vd(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Hc(e,n),Ao(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Et(Error(k(423)),n),n=Gs(e,n,r,t,o);break e}else if(r!==o){o=Et(Error(k(424)),n),n=Gs(e,n,r,t,o);break e}else for(Se=_n(n.stateNode.containerInfo.firstChild),_e=n,B=!0,Ue=null,t=qc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Pt(),r===o){n=cn(e,n,t);break e}de(e,n,r,t)}n=n.child}return n;case 5:return Vc(n),e===null&&Tl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,_l(r,o)?l=null:i!==null&&_l(r,i)&&(n.flags|=32),gd(e,n),de(e,n,l,t),n.child;case 6:return e===null&&Tl(n),null;case 13:return yd(e,n,t);case 4:return za(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_t(n,null,r,t):de(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),Xs(e,n,r,o,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,I(jo,r._currentValue),r._currentValue=l,i!==null)if(Qe(i.value,l)){if(i.children===o.children&&!ve.current){n=cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ln(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Nl(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Nl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}de(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,kt(n,t),o=je(o),r=r(o),n.flags|=1,de(e,n,r,t),n.child;case 14:return r=n.type,o=Ie(r,n.pendingProps),o=Ie(r.type,o),Ks(e,n,r,o,t);case 15:return hd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ie(r,o),vo(e,n),n.tag=1,ye(r)?(e=!0,Do(n)):e=!1,kt(n,t),dd(n,r,o),Ml(n,r,o,t),Ll(null,n,r,!0,e,t);case 19:return bd(e,n,t);case 22:return md(e,n,t)}throw Error(k(156,n.tag))};function jd(e,n){return sc(e,n)}function Dh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new Dh(e,n,t,r)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mh(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===ca)return 14}return 2}function zn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ko(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")Ha(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case it:return Vn(t.children,o,i,n);case sa:l=8,o|=8;break;case rl:return e=Me(12,t,n,o|2),e.elementType=rl,e.lanes=i,e;case ol:return e=Me(13,t,n,o),e.elementType=ol,e.lanes=i,e;case il:return e=Me(19,t,n,o),e.elementType=il,e.lanes=i,e;case Vu:return ci(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bu:l=10;break e;case Hu:l=9;break e;case ua:l=11;break e;case ca:l=14;break e;case mn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Me(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Vn(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function ci(e,n,t,r){return e=Me(22,e,r,n),e.elementType=Vu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ki(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function Yi(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rh(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Va(e,n,t,r,o,i,l,a,s){return e=new Rh(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Me(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(i),e}function jh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ld(e){if(!e)return Nn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ye(t))return Lc(e,t,n)}return n}function Ad(e,n,t,r,o,i,l,a,s){return e=Va(t,r,!0,e,o,i,l,a,s),e.context=Ld(null),t=e.current,r=fe(),o=Cn(t),i=ln(r,o),i.callback=n??null,On(t,i,o),e.current.lanes=o,Or(e,o,r),be(e,r),e}function di(e,n,t,r){var o=n.current,i=fe(),l=Cn(o);return t=Ld(t),n.context===null?n.context=t:n.pendingContext=t,n=ln(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=On(o,n,l),e!==null&&(Ve(e,o,l,i),ho(e,o,l)),l}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Wa(e,n){au(e,n),(e=e.alternate)&&au(e,n)}function Lh(){return null}var Fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qa(e){this._internalRoot=e}fi.prototype.render=Qa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));di(e,n,null,null)};fi.prototype.unmount=Qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){di(null,e,null,null)}),n[sn]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var n=mc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vn.length&&n!==0&&n<vn[t].priority;t++);vn.splice(t,0,e),t===0&&vc(e)}};function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function su(){}function Ah(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Vo(l);i.call(u)}}var l=Ad(n,r,e,0,null,!1,!1,"",su);return e._reactRootContainer=l,e[sn]=l.current,hr(e.nodeType===8?e.parentNode:e),Yn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Vo(s);a.call(u)}}var s=Va(e,0,!1,null,null,!1,!1,"",su);return e._reactRootContainer=s,e[sn]=s.current,hr(e.nodeType===8?e.parentNode:e),Yn(function(){di(n,s,t,r)}),s}function hi(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Vo(l);a.call(s)}}di(n,l,e,o)}else l=Ah(t,n,e,o,r);return Vo(l)}pc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Wt(n.pendingLanes);t!==0&&(pa(n,t|1),be(n,K()),!(L&6)&&(Ct=K()+500,jn()))}break;case 13:Yn(function(){var r=un(e,1);if(r!==null){var o=fe();Ve(r,e,1,o)}}),Wa(e,1)}};ha=function(e){if(e.tag===13){var n=un(e,134217728);if(n!==null){var t=fe();Ve(n,e,134217728,t)}Wa(e,134217728)}};hc=function(e){if(e.tag===13){var n=Cn(e),t=un(e,n);if(t!==null){var r=fe();Ve(t,e,n,r)}Wa(e,n)}};mc=function(){return F};gc=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};ml=function(e,n,t){switch(n){case"input":if(sl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=oi(r);if(!o)throw Error(k(90));Qu(r),sl(r,o)}}}break;case"textarea":Ku(e,t);break;case"select":n=t.value,n!=null&&gt(e,!!t.multiple,n,!1)}};tc=Ua;rc=Yn;var Fh={usingClientEntryPoint:!1,Events:[Cr,ut,oi,ec,nc,Ua]},qt={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ih={bundleType:qt.bundleType,version:qt.version,rendererPackageName:qt.rendererPackageName,rendererConfig:qt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lc(e),e===null?null:e.stateNode},findFiberByHostInstance:qt.findFiberByHostInstance||Lh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{ei=Jr.inject(Ih),Ge=Jr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fh;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(n))throw Error(k(200));return jh(e,n,null,t)};ze.createRoot=function(e,n){if(!Xa(e))throw Error(k(299));var t=!1,r="",o=Fd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Va(e,1,!1,null,null,t,!1,r,o),e[sn]=n.current,hr(e.nodeType===8?e.parentNode:e),new Qa(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=lc(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Yn(e)};ze.hydrate=function(e,n,t){if(!pi(n))throw Error(k(200));return hi(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!Xa(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Fd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ad(n,null,e,1,t??null,o,!1,i,l),e[sn]=n.current,hr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new fi(n)};ze.render=function(e,n,t){if(!pi(n))throw Error(k(200));return hi(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!pi(e))throw Error(k(40));return e._reactRootContainer?(Yn(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};ze.unstable_batchedUpdates=Ua;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pi(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return hi(e,n,t,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Id)}catch(e){console.error(e)}}Id(),Iu.exports=ze;var $h=Iu.exports,$d,uu=$h;$d=uu.createRoot,uu.hydrateRoot;var Ud={exports:{}},qd={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=xn;function Uh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qh=typeof Object.is=="function"?Object.is:Uh,Bh=Tr.useSyncExternalStore,Hh=Tr.useRef,Vh=Tr.useEffect,Wh=Tr.useMemo,Qh=Tr.useDebugValue;qd.useSyncExternalStoreWithSelector=function(e,n,t,r,o){var i=Hh(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=Wh(function(){function s(y){if(!u){if(u=!0,d=y,y=r(y),o!==void 0&&l.hasValue){var g=l.value;if(o(g,y))return h=g}return h=y}if(g=h,qh(d,y))return g;var v=r(y);return o!==void 0&&o(g,v)?g:(d=y,h=v)}var u=!1,d,h,m=t===void 0?null:t;return[function(){return s(n())},m===null?void 0:function(){return s(m())}]},[n,t,r,o]);var a=Bh(e,i[0],i[1]);return Vh(function(){l.hasValue=!0,l.value=a},[a]),Qh(a),a};Ud.exports=qd;var Xh=Ud.exports,Pe="default"in rs?A:rs,cu=Symbol.for("react-redux-context"),du=typeof globalThis<"u"?globalThis:{};function Kh(){if(!Pe.createContext)return{};const e=du[cu]??(du[cu]=new Map);let n=e.get(Pe.createContext);return n||(n=Pe.createContext(null),e.set(Pe.createContext,n)),n}var Dn=Kh(),Yh=()=>{throw new Error("uSES not initialized!")};function Ka(e=Dn){return function(){return Pe.useContext(e)}}var Bd=Ka(),Hd=Yh,Gh=e=>{Hd=e},Zh=(e,n)=>e===n;function Jh(e=Dn){const n=e===Dn?Bd:Ka(e),t=(r,o={})=>{const{equalityFn:i=Zh,devModeChecks:l={}}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:s,getServerState:u,stabilityCheck:d,identityFunctionCheck:h}=n();Pe.useRef(!0);const m=Pe.useCallback({[r.name](g){return r(g)}}[r.name],[r,d,l.stabilityCheck]),y=Hd(s.addNestedSub,a.getState,u||a.getState,m,i);return Pe.useDebugValue(y),y};return Object.assign(t,{withTypes:()=>t}),t}var Wo=Jh();function e0(e){e()}function n0(){let e=null,n=null;return{clear(){e=null,n=null},notify(){e0(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const o=n={callback:t,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var fu={notify(){},get:()=>[]};function t0(e,n){let t,r=fu,o=0,i=!1;function l(v){d();const w=r.subscribe(v);let f=!1;return()=>{f||(f=!0,w(),h())}}function a(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return i}function d(){o++,t||(t=e.subscribe(s),r=n0())}function h(){o--,t&&o===0&&(t(),t=void 0,r.clear(),r=fu)}function m(){i||(i=!0,d())}function y(){i&&(i=!1,h())}const g={addNestedSub:l,notifyNestedSubs:a,handleChangeWrapper:s,isSubscribed:u,trySubscribe:m,tryUnsubscribe:y,getListeners:()=>r};return g}var r0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o0=typeof navigator<"u"&&navigator.product==="ReactNative",i0=r0||o0?Pe.useLayoutEffect:Pe.useEffect;function l0({store:e,context:n,children:t,serverState:r,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const l=Pe.useMemo(()=>{const u=t0(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,r,o,i]),a=Pe.useMemo(()=>e.getState(),[e]);i0(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,a]);const s=n||Dn;return Pe.createElement(s.Provider,{value:l},t)}var a0=l0;function Vd(e=Dn){const n=e===Dn?Bd:Ka(e),t=()=>{const{store:r}=n();return r};return Object.assign(t,{withTypes:()=>t}),t}var s0=Vd();function u0(e=Dn){const n=e===Dn?s0:Vd(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var mi=u0();Gh(Xh.useSyncExternalStoreWithSelector);function re(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var c0=typeof Symbol=="function"&&Symbol.observable||"@@observable",pu=c0,Gi=()=>Math.random().toString(36).substring(7).split("").join("."),d0={INIT:`@@redux/INIT${Gi()}`,REPLACE:`@@redux/REPLACE${Gi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Gi()}`},Qo=d0;function Ya(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Wd(e,n,t){if(typeof e!="function")throw new Error(re(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(re(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(re(1));return t(Wd)(e,n)}let r=e,o=n,i=new Map,l=i,a=0,s=!1;function u(){l===i&&(l=new Map,i.forEach((w,f)=>{l.set(f,w)}))}function d(){if(s)throw new Error(re(3));return o}function h(w){if(typeof w!="function")throw new Error(re(4));if(s)throw new Error(re(5));let f=!0;u();const c=a++;return l.set(c,w),function(){if(f){if(s)throw new Error(re(6));f=!1,u(),l.delete(c),i=null}}}function m(w){if(!Ya(w))throw new Error(re(7));if(typeof w.type>"u")throw new Error(re(8));if(typeof w.type!="string")throw new Error(re(17));if(s)throw new Error(re(9));try{s=!0,o=r(o,w)}finally{s=!1}return(i=l).forEach(c=>{c()}),w}function y(w){if(typeof w!="function")throw new Error(re(10));r=w,m({type:Qo.REPLACE})}function g(){const w=h;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(re(11));function c(){const b=f;b.next&&b.next(d())}return c(),{unsubscribe:w(c)}},[pu](){return this}}}return m({type:Qo.INIT}),{dispatch:m,subscribe:h,getState:d,replaceReducer:y,[pu]:g}}function f0(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:Qo.INIT})>"u")throw new Error(re(12));if(typeof t(void 0,{type:Qo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(re(13))})}function p0(e){const n=Object.keys(e),t={};for(let i=0;i<n.length;i++){const l=n[i];typeof e[l]=="function"&&(t[l]=e[l])}const r=Object.keys(t);let o;try{f0(t)}catch(i){o=i}return function(l={},a){if(o)throw o;let s=!1;const u={};for(let d=0;d<r.length;d++){const h=r[d],m=t[h],y=l[h],g=m(y,a);if(typeof g>"u")throw a&&a.type,new Error(re(14));u[h]=g,s=s||g!==y}return s=s||r.length!==Object.keys(l).length,s?u:l}}function Xo(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...r)=>n(t(...r)))}function h0(...e){return n=>(t,r)=>{const o=n(t,r);let i=()=>{throw new Error(re(15))};const l={getState:o.getState,dispatch:(s,...u)=>i(s,...u)},a=e.map(s=>s(l));return i=Xo(...a)(o.dispatch),{...o,dispatch:i}}}function m0(e){return Ya(e)&&"type"in e&&typeof e.type=="string"}var Qd=Symbol.for("immer-nothing"),hu=Symbol.for("immer-draftable"),Ee=Symbol.for("immer-state");function qe(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zt=Object.getPrototypeOf;function Gn(e){return!!e&&!!e[Ee]}function dn(e){var n;return e?Xd(e)||Array.isArray(e)||!!e[hu]||!!((n=e.constructor)!=null&&n[hu])||vi(e)||yi(e):!1}var g0=Object.prototype.constructor.toString();function Xd(e){if(!e||typeof e!="object")return!1;const n=zt(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===g0}function Ko(e,n){gi(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function gi(e){const n=e[Ee];return n?n.type_:Array.isArray(e)?1:vi(e)?2:yi(e)?3:0}function Xl(e,n){return gi(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Kd(e,n,t){const r=gi(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function v0(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function vi(e){return e instanceof Map}function yi(e){return e instanceof Set}function $n(e){return e.copy_||e.base_}function Kl(e,n){if(vi(e))return new Map(e);if(yi(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Xd(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[Ee];let o=Reflect.ownKeys(r);for(let i=0;i<o.length;i++){const l=o[i],a=r[l];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[l]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[l]})}return Object.create(zt(e),r)}else{const r=zt(e);if(r!==null&&t)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function Ga(e,n=!1){return bi(e)||Gn(e)||!dn(e)||(gi(e)>1&&(e.set=e.add=e.clear=e.delete=y0),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>Ga(r,!0))),e}function y0(){qe(2)}function bi(e){return Object.isFrozen(e)}var b0={};function Zn(e){const n=b0[e];return n||qe(0,e),n}var Sr;function Yd(){return Sr}function k0(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function mu(e,n){n&&(Zn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Yl(e){Gl(e),e.drafts_.forEach(x0),e.drafts_=null}function Gl(e){e===Sr&&(Sr=e.parent_)}function gu(e){return Sr=k0(Sr,e)}function x0(e){const n=e[Ee];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function vu(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[Ee].modified_&&(Yl(n),qe(4)),dn(e)&&(e=Yo(n,e),n.parent_||Go(n,e)),n.patches_&&Zn("Patches").generateReplacementPatches_(t[Ee].base_,e,n.patches_,n.inversePatches_)):e=Yo(n,t,[]),Yl(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Qd?e:void 0}function Yo(e,n,t){if(bi(n))return n;const r=n[Ee];if(!r)return Ko(n,(o,i)=>yu(e,r,n,o,i,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Go(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let i=o,l=!1;r.type_===3&&(i=new Set(o),o.clear(),l=!0),Ko(i,(a,s)=>yu(e,r,o,a,s,t,l)),Go(e,o,!1),t&&e.patches_&&Zn("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function yu(e,n,t,r,o,i,l){if(Gn(o)){const a=i&&n&&n.type_!==3&&!Xl(n.assigned_,r)?i.concat(r):void 0,s=Yo(e,o,a);if(Kd(t,r,s),Gn(s))e.canAutoFreeze_=!1;else return}else l&&t.add(o);if(dn(o)&&!bi(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Yo(e,o),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Go(e,o)}}function Go(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ga(n,t)}function w0(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Yd(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=Za;t&&(o=[r],i=Pr);const{revoke:l,proxy:a}=Proxy.revocable(o,i);return r.draft_=a,r.revoke_=l,a}var Za={get(e,n){if(n===Ee)return e;const t=$n(e);if(!Xl(t,n))return S0(e,t,n);const r=t[n];return e.finalized_||!dn(r)?r:r===Zi(e.base_,n)?(Ji(e),e.copy_[n]=Jl(r,e)):r},has(e,n){return n in $n(e)},ownKeys(e){return Reflect.ownKeys($n(e))},set(e,n,t){const r=Gd($n(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const o=Zi($n(e),n),i=o==null?void 0:o[Ee];if(i&&i.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(v0(t,o)&&(t!==void 0||Xl(e.base_,n)))return!0;Ji(e),Zl(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Zi(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,Ji(e),Zl(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=$n(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){qe(11)},getPrototypeOf(e){return zt(e.base_)},setPrototypeOf(){qe(12)}},Pr={};Ko(Za,(e,n)=>{Pr[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Pr.deleteProperty=function(e,n){return Pr.set.call(this,e,n,void 0)};Pr.set=function(e,n,t){return Za.set.call(this,e[0],n,t,e[0])};function Zi(e,n){const t=e[Ee];return(t?$n(t):e)[n]}function S0(e,n,t){var o;const r=Gd(n,t);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function Gd(e,n){if(!(n in e))return;let t=zt(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=zt(t)}}function Zl(e){e.modified_||(e.modified_=!0,e.parent_&&Zl(e.parent_))}function Ji(e){e.copy_||(e.copy_=Kl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var P0=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const i=t;t=n;const l=this;return function(s=i,...u){return l.produce(s,d=>t.call(this,d,...u))}}typeof t!="function"&&qe(6),r!==void 0&&typeof r!="function"&&qe(7);let o;if(dn(n)){const i=gu(this),l=Jl(n,void 0);let a=!0;try{o=t(l),a=!1}finally{a?Yl(i):Gl(i)}return mu(i,r),vu(o,i)}else if(!n||typeof n!="object"){if(o=t(n),o===void 0&&(o=n),o===Qd&&(o=void 0),this.autoFreeze_&&Ga(o,!0),r){const i=[],l=[];Zn("Patches").generateReplacementPatches_(n,o,i,l),r(i,l)}return o}else qe(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(l,...a)=>this.produceWithPatches(l,s=>n(s,...a));let r,o;return[this.produce(n,t,(l,a)=>{r=l,o=a}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){dn(e)||qe(8),Gn(e)&&(e=_0(e));const n=gu(this),t=Jl(e,void 0);return t[Ee].isManual_=!0,Gl(n),t}finishDraft(e,n){const t=e&&e[Ee];(!t||!t.isManual_)&&qe(9);const{scope_:r}=t;return mu(r,n),vu(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const o=n[t];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}t>-1&&(n=n.slice(t+1));const r=Zn("Patches").applyPatches_;return Gn(e)?r(e,n):this.produce(e,o=>r(o,n))}};function Jl(e,n){const t=vi(e)?Zn("MapSet").proxyMap_(e,n):yi(e)?Zn("MapSet").proxySet_(e,n):w0(e,n);return(n?n.scope_:Yd()).drafts_.push(t),t}function _0(e){return Gn(e)||qe(10,e),Zd(e)}function Zd(e){if(!dn(e)||bi(e))return e;const n=e[Ee];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=Kl(e,n.scope_.immer_.useStrictShallowCopy_)}else t=Kl(e,!0);return Ko(t,(r,o)=>{Kd(t,r,Zd(o))}),n&&(n.finalized_=!1),t}var Ce=new P0,Jd=Ce.produce;Ce.produceWithPatches.bind(Ce);Ce.setAutoFreeze.bind(Ce);Ce.setUseStrictShallowCopy.bind(Ce);Ce.applyPatches.bind(Ce);Ce.createDraft.bind(Ce);Ce.finishDraft.bind(Ce);function ef(e){return({dispatch:t,getState:r})=>o=>i=>typeof i=="function"?i(t,r,e):o(i)}var O0=ef(),E0=ef,C0=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Xo:Xo.apply(null,arguments)},z0=e=>e&&typeof e.match=="function";function ir(e,n){function t(...r){if(n){let o=n(...r);if(!o)throw new Error(We(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:r[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=r=>m0(r)&&r.type===e,t}var nf=class Xt extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Xt.prototype)}static get[Symbol.species](){return Xt}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Xt(...n[0].concat(this)):new Xt(...n.concat(this))}};function bu(e){return dn(e)?Jd(e,()=>{}):e}function ku(e,n,t){if(e.has(n)){let o=e.get(n);return t.update&&(o=t.update(o,n,e),e.set(n,o)),o}if(!t.insert)throw new Error(We(10));const r=t.insert(n,e);return e.set(n,r),r}function T0(e){return typeof e=="boolean"}var N0=()=>function(n){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=n??{};let l=new nf;return t&&(T0(t)?l.push(O0):l.push(E0(t.extraArgument))),l},D0="RTK_autoBatch",tf=e=>n=>{setTimeout(n,e)},M0=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:tf(10),R0=(e={type:"raf"})=>n=>(...t)=>{const r=n(...t);let o=!0,i=!1,l=!1;const a=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?M0:e.type==="callback"?e.queueNotification:tf(e.timeout),u=()=>{l=!1,i&&(i=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const h=()=>o&&d(),m=r.subscribe(h);return a.add(d),()=>{m(),a.delete(d)}},dispatch(d){var h;try{return o=!((h=d==null?void 0:d.meta)!=null&&h[D0]),i=!o,i&&(l||(l=!0,s(u))),r.dispatch(d)}finally{o=!0}}})},j0=e=>function(t){const{autoBatch:r=!0}=t??{};let o=new nf(e);return r&&o.push(R0(typeof r=="object"?r:void 0)),o};function L0(e){const n=N0(),{reducer:t=void 0,middleware:r,devTools:o=!0,preloadedState:i=void 0,enhancers:l=void 0}=e||{};let a;if(typeof t=="function")a=t;else if(Ya(t))a=p0(t);else throw new Error(We(1));let s;typeof r=="function"?s=r(n):s=n();let u=Xo;o&&(u=C0({trace:!1,...typeof o=="object"&&o}));const d=h0(...s),h=j0(d);let m=typeof l=="function"?l(h):h();const y=u(...m);return Wd(a,i,y)}function rf(e){const n={},t=[];let r;const o={addCase(i,l){const a=typeof i=="string"?i:i.type;if(!a)throw new Error(We(28));if(a in n)throw new Error(We(29));return n[a]=l,o},addMatcher(i,l){return t.push({matcher:i,reducer:l}),o},addDefaultCase(i){return r=i,o}};return e(o),[n,t,r]}function A0(e){return typeof e=="function"}function F0(e,n){let[t,r,o]=rf(n),i;if(A0(e))i=()=>bu(e());else{const a=bu(e);i=()=>a}function l(a=i(),s){let u=[t[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[o]),u.reduce((d,h)=>{if(h)if(Gn(d)){const y=h(d,s);return y===void 0?d:y}else{if(dn(d))return Jd(d,m=>h(m,s));{const m=h(d,s);if(m===void 0){if(d===null)return d;throw new Error(We(9))}return m}}return d},a)}return l.getInitialState=i,l}var I0=(e,n)=>z0(e)?e.match(n):e(n);function $0(...e){return n=>e.some(t=>I0(t,n))}var U0="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",q0=(e=21)=>{let n="",t=e;for(;t--;)n+=U0[Math.random()*64|0];return n},B0=["name","message","stack","code"],el=class{constructor(e,n){Pi(this,"_type");this.payload=e,this.meta=n}},xu=class{constructor(e,n){Pi(this,"_type");this.payload=e,this.meta=n}},H0=e=>{if(typeof e=="object"&&e!==null){const n={};for(const t of B0)typeof e[t]=="string"&&(n[t]=e[t]);return n}return{message:String(e)}},V0=(()=>{function e(n,t,r){const o=ir(n+"/fulfilled",(s,u,d,h)=>({payload:s,meta:{...h||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),i=ir(n+"/pending",(s,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:s,requestStatus:"pending"}})),l=ir(n+"/rejected",(s,u,d,h,m)=>({payload:h,error:(r&&r.serializeError||H0)(s||"Rejected"),meta:{...m||{},arg:d,requestId:u,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(s==null?void 0:s.name)==="AbortError",condition:(s==null?void 0:s.name)==="ConditionError"}}));function a(s){return(u,d,h)=>{const m=r!=null&&r.idGenerator?r.idGenerator(s):q0(),y=new AbortController;let g,v;function w(c){v=c,y.abort()}const f=async function(){var b,x;let c;try{let P=(b=r==null?void 0:r.condition)==null?void 0:b.call(r,s,{getState:d,extra:h});if(Q0(P)&&(P=await P),P===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const _=new Promise((S,T)=>{g=()=>{T({name:"AbortError",message:v||"Aborted"})},y.signal.addEventListener("abort",g)});u(i(m,s,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:m,arg:s},{getState:d,extra:h}))),c=await Promise.race([_,Promise.resolve(t(s,{dispatch:u,getState:d,extra:h,requestId:m,signal:y.signal,abort:w,rejectWithValue:(S,T)=>new el(S,T),fulfillWithValue:(S,T)=>new xu(S,T)})).then(S=>{if(S instanceof el)throw S;return S instanceof xu?o(S.payload,m,s,S.meta):o(S,m,s)})])}catch(P){c=P instanceof el?l(null,m,s,P.payload,P.meta):l(P,m,s)}finally{g&&y.signal.removeEventListener("abort",g)}return r&&!r.dispatchConditionRejection&&l.match(c)&&c.meta.condition||u(c),c}();return Object.assign(f,{abort:w,requestId:m,arg:s,unwrap(){return f.then(W0)}})}}return Object.assign(a,{pending:i,rejected:l,fulfilled:o,settled:$0(l,o),typePrefix:n})}return e.withTypes=()=>e,e})();function W0(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Q0(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var X0=Symbol.for("rtk-slice-createasyncthunk");function K0(e,n){return`${e}/${n}`}function Y0({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[X0];return function(o){const{name:i,reducerPath:l=i}=o;if(!i)throw new Error(We(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(J0()):o.reducers)||{},s=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(p,b){const x=typeof p=="string"?p:p.type;if(!x)throw new Error(We(12));if(x in u.sliceCaseReducersByType)throw new Error(We(13));return u.sliceCaseReducersByType[x]=b,d},addMatcher(p,b){return u.sliceMatchers.push({matcher:p,reducer:b}),d},exposeAction(p,b){return u.actionCreators[p]=b,d},exposeCaseReducer(p,b){return u.sliceCaseReducersByName[p]=b,d}};s.forEach(p=>{const b=a[p],x={reducerName:p,type:K0(i,p),createNotation:typeof o.reducers=="function"};nm(b)?rm(x,b,d,n):em(x,b,d)});function h(){const[p={},b=[],x=void 0]=typeof o.extraReducers=="function"?rf(o.extraReducers):[o.extraReducers],P={...p,...u.sliceCaseReducersByType};return F0(o.initialState,_=>{for(let S in P)_.addCase(S,P[S]);for(let S of u.sliceMatchers)_.addMatcher(S.matcher,S.reducer);for(let S of b)_.addMatcher(S.matcher,S.reducer);x&&_.addDefaultCase(x)})}const m=p=>p,y=new Map;let g;function v(p,b){return g||(g=h()),g(p,b)}function w(){return g||(g=h()),g.getInitialState()}function f(p,b=!1){function x(_){let S=_[p];return typeof S>"u"&&b&&(S=w()),S}function P(_=m){const S=ku(y,b,{insert:()=>new WeakMap});return ku(S,_,{insert:()=>{const T={};for(const[M,ke]of Object.entries(o.selectors??{}))T[M]=G0(ke,_,w,b);return T}})}return{reducerPath:p,getSelectors:P,get selectors(){return P(x)},selectSlice:x}}const c={name:i,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...f(l),injectInto(p,{reducerPath:b,...x}={}){const P=b??l;return p.inject({reducerPath:P,reducer:v},x),{...c,...f(P,!0)}}};return c}}function G0(e,n,t,r){function o(i,...l){let a=n(i);return typeof a>"u"&&r&&(a=t()),e(a,...l)}return o.unwrapped=e,o}var Z0=Y0();function J0(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function em({type:e,reducerName:n,createNotation:t},r,o){let i,l;if("reducer"in r){if(t&&!tm(r))throw new Error(We(17));i=r.reducer,l=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(n,i).exposeAction(n,l?ir(e,l):ir(e))}function nm(e){return e._reducerDefinitionType==="asyncThunk"}function tm(e){return e._reducerDefinitionType==="reducerWithPrepare"}function rm({type:e,reducerName:n},t,r,o){if(!o)throw new Error(We(18));const{payloadCreator:i,fulfilled:l,pending:a,rejected:s,settled:u,options:d}=t,h=o(e,i,d);r.exposeAction(n,h),l&&r.addCase(h.fulfilled,l),a&&r.addCase(h.pending,a),s&&r.addCase(h.rejected,s),u&&r.addMatcher(h.settled,u),r.exposeCaseReducer(n,{fulfilled:l||eo,pending:a||eo,rejected:s||eo,settled:u||eo})}function eo(){}function We(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const om=[{id:"1",title:"Oceans 8",category:"Comedy",likes:4,dislikes:1},{id:"2",title:"Midnight Sun",category:"Comedy",likes:2,dislikes:0},{id:"3",title:"Les indestructibles 2",category:"Animation",likes:3,dislikes:1},{id:"4",title:"Sans un bruit",category:"Thriller",likes:6,dislikes:6},{id:"5",title:"Creed II",category:"Drame",likes:16,dislikes:2},{id:"6",title:"Pulp Fiction",category:"Thriller",likes:11,dislikes:3},{id:"7",title:"Pulp Fiction",category:"Thriller",likes:12333,dislikes:32},{id:"8",title:"Seven",category:"Thriller",likes:2,dislikes:1},{id:"9",title:"Inception",category:"Thriller",likes:2,dislikes:1},{id:"10",title:"Gone Girl",category:"Thriller",likes:22,dislikes:12}],im=new Promise((e,n)=>setTimeout(e,100,om)),lm=()=>"#"+Math.floor(Math.random()*16777215).toString(16),tt=(e,n)=>e.slice().sort((t,r)=>n==="titleAsc"?t.title.localeCompare(r.title):n==="titleDesc"?r.title.localeCompare(t.title):n==="likesAsc"?t.likes-r.likes:n==="likesDesc"?r.likes-t.likes:0),xo=V0("movies/fetchMovies",async()=>await new Promise(n=>{setTimeout(()=>{n(im)},3e3)})),of=Z0({name:"movies",initialState:{list:[],filteredList:[],categories:[],selectedCategories:[],currentPage:1,itemsPerPage:4,loading:!1,error:null,sortBy:"titleAsc"},reducers:{deleteMovie:(e,n)=>{const t=e.list.filter(r=>r.id!==n.payload);e.list=t,e.filteredList=tt(t.filter(r=>e.selectedCategories.length===0||e.selectedCategories.includes(r.category)),e.sortBy),e.categories=[...new Set(t.map(r=>r.category))],e.currentPage=1},toggleLike:(e,n)=>{const t=e.list.map(r=>r.id===n.payload?r.liked?{...r,likes:r.likes-1,liked:!1}:r.disliked?{...r,dislikes:r.dislikes-1,disliked:!1,likes:r.likes+1,liked:!0}:{...r,likes:r.likes+1,liked:!0}:r);e.list=t,e.filteredList=tt(t.filter(r=>e.selectedCategories.length===0||e.selectedCategories.includes(r.category)),e.sortBy)},toggleDislike:(e,n)=>{const t=e.list.map(r=>r.id===n.payload?r.disliked?{...r,dislikes:r.dislikes-1,disliked:!1}:r.liked?{...r,likes:r.likes-1,liked:!1,dislikes:r.dislikes+1,disliked:!0}:{...r,dislikes:r.dislikes+1,disliked:!0}:r);e.list=t,e.filteredList=tt(t.filter(r=>e.selectedCategories.length===0||e.selectedCategories.includes(r.category)),e.sortBy)},setCategories:(e,n)=>{e.categories=n.payload},setSelectedCategories:(e,n)=>{e.selectedCategories=n.payload,e.filteredList=tt(e.list.filter(t=>e.selectedCategories.length===0||e.selectedCategories.includes(t.category)),e.sortBy),e.currentPage=1},setItemsPerPage:(e,n)=>{e.itemsPerPage=n.payload,e.currentPage=1},setCurrentPage:(e,n)=>{e.currentPage=n.payload},setSortBy:(e,n)=>{e.sortBy=n.payload,e.filteredList=tt(e.filteredList,e.sortBy)}},extraReducers:e=>{e.addCase(xo.pending,n=>{n.loading=!0,n.error=null}).addCase(xo.fulfilled,(n,t)=>{const r=t.payload;n.list=r.map(o=>({...o,liked:!1,disliked:!1,backgroundColor:lm()})),n.filteredList=tt(n.list,n.sortBy),n.categories=[...new Set(r.map(o=>o.category))],n.loading=!1}).addCase(xo.rejected,(n,t)=>{n.loading=!1,n.error=t.error.message})}}),{deleteMovie:am,toggleLike:sm,toggleDislike:um,setCategories:Vm,setSelectedCategories:cm,setItemsPerPage:dm,setCurrentPage:fm,setSortBy:pm}=of.actions,hm=of.reducer,mm=L0({reducer:{movies:hm}});function lf({children:e,...n}){return z.jsx("svg",{...n,children:e})}function gm({like:e=!1}){return z.jsx(lf,{width:"1.6065rem",height:"1.9644rem",viewBox:"0 0 16.065 19.644",children:z.jsx("g",{id:"dislike-svgrepo-com",transform:"translate(35.647 19.144) rotate(180)",children:z.jsx("path",{id:"Path_1","data-name":"Path 1",d:"M23.176,2.23a.407.407,0,0,1-.161.062l-2.58.393a.414.414,0,0,0-.353.4v7.132c0,.108,2.98,1.843,3.857,2.693,1.11,1.077,1.9,3.1,3.036,4.858a1.681,1.681,0,0,0,1.392.872,1.525,1.525,0,0,0,1.295-2.154,16.306,16.306,0,0,0-1.245-3.085,1.124,1.124,0,0,1,.982-1.671h4.377c1.684,0,1.637-2.351.764-3.039a.4.4,0,0,1-.1-.5A1.827,1.827,0,0,0,33.9,5.932a.407.407,0,0,1-.188-.531c.338-.7.289-2.156-.778-2.44a.408.408,0,0,1-.3-.447c.081-.637-.045-1.864-2.042-2.363A5.32,5.32,0,0,0,29.29,0,11.613,11.613,0,0,0,23.176,2.23Z",transform:"translate(0 0)",fill:e?"green":"#fff",stroke:"#707070","stroke-width":"1"})})})}function vm({dislike:e=!1}){return z.jsx(lf,{width:"1.6065rem",height:"1.9644rem",viewBox:"0 0 16.065 19.644",children:z.jsx("g",{id:"dislike-svgrepo-com",transform:"translate(-19.582 0.5)",children:z.jsx("path",{id:"Path_1","data-name":"Path 1",d:"M23.176,2.23a.407.407,0,0,1-.161.062l-2.58.393a.414.414,0,0,0-.353.4v7.132c0,.108,2.98,1.843,3.857,2.693,1.11,1.077,1.9,3.1,3.036,4.858a1.681,1.681,0,0,0,1.392.872,1.525,1.525,0,0,0,1.295-2.154,16.306,16.306,0,0,0-1.245-3.085,1.124,1.124,0,0,1,.982-1.671h4.377c1.684,0,1.637-2.351.764-3.039a.4.4,0,0,1-.1-.5A1.827,1.827,0,0,0,33.9,5.932a.407.407,0,0,1-.188-.531c.338-.7.289-2.156-.778-2.44a.408.408,0,0,1-.3-.447c.081-.637-.045-1.864-2.042-2.363A5.32,5.32,0,0,0,29.29,0,11.613,11.613,0,0,0,23.176,2.23Z",transform:"translate(0 0)",fill:e?"red":"#fff",stroke:"#707070","stroke-width":"1"})})})}function ym({id:e,title:n,category:t,likes:r,dislikes:o,liked:i,disliked:l,backgroundColor:a,onDelete:s}){const u=mi(),d=()=>{u(sm(e))},h=()=>{u(um(e))},m=()=>{window.confirm("Are you sure you want to delete this movie?")&&s()};return z.jsxs("div",{className:"card",children:[z.jsx("div",{className:"card__poster",style:{backgroundColor:a},children:z.jsx("button",{className:"delete",onClick:m,children:"X"})}),z.jsx("h3",{className:"movie__title",children:n}),z.jsx("p",{className:"movie__category",children:t}),z.jsxs("div",{className:"appreciation",children:[z.jsxs("button",{className:"like__wrapper}",onClick:d,children:[z.jsx(gm,{like:i}),z.jsx("p",{className:"like__number",children:r})]}),z.jsxs("button",{className:"like__wrapper}",onClick:h,children:[z.jsx(vm,{dislike:l}),z.jsx("p",{className:"dislike__number",children:o})]})]})]})}function bm(){const e=mi(),n=Wo(o=>o.movies.categories),t=Wo(o=>o.movies.selectedCategories),r=o=>{const i=o.target.value,l=o.target.checked?[...t,i]:t.filter(a=>a!==i);e(cm(l))};return z.jsxs("div",{className:"category__filter",children:[z.jsx("p",{children:"CATEGORY"}),n.map(o=>z.jsx("div",{className:"category__option",children:z.jsxs("label",{children:[z.jsx("input",{type:"checkbox",value:o,checked:t.includes(o),onChange:r}),o]})},o))]})}function km(){const e=mi(),{currentPage:n,itemsPerPage:t,filteredList:r}=Wo(a=>a.movies),o=Math.ceil(r.length/t),i=a=>{e(fm(a))},l=a=>{e(dm(Number(a.target.value)))};return z.jsxs("div",{className:"pagination",children:[z.jsx("button",{disabled:n===1,onClick:()=>i(n-1),children:"Previous"}),z.jsxs("span",{children:["Page ",n," of ",o]}),z.jsx("button",{disabled:n===o,onClick:()=>i(n+1),children:"Next"}),z.jsxs("select",{value:t,onChange:l,children:[z.jsx("option",{value:4,children:"4 items per page"}),z.jsx("option",{value:8,children:"8 items per page"}),z.jsx("option",{value:12,children:"12 items per page"})]})]})}function J(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}J(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var R=function(){return R=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},R.apply(this,arguments)};function Zo(e){return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zo(e)}var xm=/^\s+/,wm=/\s+$/;function C(e,n){if(n=n||{},(e=e||"")instanceof C)return e;if(!(this instanceof C))return new C(e,n);var t=function(r){var o={r:0,g:0,b:0},i=1,l=null,a=null,s=null,u=!1,d=!1;typeof r=="string"&&(r=function(g){g=g.replace(xm,"").replace(wm,"").toLowerCase();var v,w=!1;if(ea[g])g=ea[g],w=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(v=Fe.rgb.exec(g))?{r:v[1],g:v[2],b:v[3]}:(v=Fe.rgba.exec(g))?{r:v[1],g:v[2],b:v[3],a:v[4]}:(v=Fe.hsl.exec(g))?{h:v[1],s:v[2],l:v[3]}:(v=Fe.hsla.exec(g))?{h:v[1],s:v[2],l:v[3],a:v[4]}:(v=Fe.hsv.exec(g))?{h:v[1],s:v[2],v:v[3]}:(v=Fe.hsva.exec(g))?{h:v[1],s:v[2],v:v[3],a:v[4]}:(v=Fe.hex8.exec(g))?{r:xe(v[1]),g:xe(v[2]),b:xe(v[3]),a:Eu(v[4]),format:w?"name":"hex8"}:(v=Fe.hex6.exec(g))?{r:xe(v[1]),g:xe(v[2]),b:xe(v[3]),format:w?"name":"hex"}:(v=Fe.hex4.exec(g))?{r:xe(v[1]+""+v[1]),g:xe(v[2]+""+v[2]),b:xe(v[3]+""+v[3]),a:Eu(v[4]+""+v[4]),format:w?"name":"hex8"}:(v=Fe.hex3.exec(g))?{r:xe(v[1]+""+v[1]),g:xe(v[2]+""+v[2]),b:xe(v[3]+""+v[3]),format:w?"name":"hex"}:!1}(r)),Zo(r)=="object"&&(Je(r.r)&&Je(r.g)&&Je(r.b)?(h=r.r,m=r.g,y=r.b,o={r:255*q(h,255),g:255*q(m,255),b:255*q(y,255)},u=!0,d=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Je(r.h)&&Je(r.s)&&Je(r.v)?(l=Kt(r.s),a=Kt(r.v),o=function(g,v,w){g=6*q(g,360),v=q(v,100),w=q(w,100);var f=Math.floor(g),c=g-f,p=w*(1-v),b=w*(1-c*v),x=w*(1-(1-c)*v),P=f%6,_=[w,b,p,p,x,w][P],S=[x,w,w,b,p,p][P],T=[p,p,x,w,w,b][P];return{r:255*_,g:255*S,b:255*T}}(r.h,l,a),u=!0,d="hsv"):Je(r.h)&&Je(r.s)&&Je(r.l)&&(l=Kt(r.s),s=Kt(r.l),o=function(g,v,w){var f,c,p;function b(_,S,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?_+6*(S-_)*T:T<.5?S:T<2/3?_+(S-_)*(2/3-T)*6:_}if(g=q(g,360),v=q(v,100),w=q(w,100),v===0)f=c=p=w;else{var x=w<.5?w*(1+v):w+v-w*v,P=2*w-x;f=b(P,x,g+1/3),c=b(P,x,g),p=b(P,x,g-1/3)}return{r:255*f,g:255*c,b:255*p}}(r.h,l,s),u=!0,d="hsl"),r.hasOwnProperty("a")&&(i=r.a));var h,m,y;return i=af(i),{ok:u,format:r.format||d,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function wu(e,n,t){e=q(e,255),n=q(n,255),t=q(t,255);var r,o,i=Math.max(e,n,t),l=Math.min(e,n,t),a=(i+l)/2;if(i==l)r=o=0;else{var s=i-l;switch(o=a>.5?s/(2-i-l):s/(i+l),i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l:a}}function Su(e,n,t){e=q(e,255),n=q(n,255),t=q(t,255);var r,o,i=Math.max(e,n,t),l=Math.min(e,n,t),a=i,s=i-l;if(o=i===0?0:s/i,i==l)r=0;else{switch(i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:a}}function Pu(e,n,t,r){var o=[Be(Math.round(e).toString(16)),Be(Math.round(n).toString(16)),Be(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function _u(e,n,t,r){return[Be(sf(r)),Be(Math.round(e).toString(16)),Be(Math.round(n).toString(16)),Be(Math.round(t).toString(16))].join("")}function Sm(e,n){n=n===0?0:n||10;var t=C(e).toHsl();return t.s-=n/100,t.s=ki(t.s),C(t)}function Pm(e,n){n=n===0?0:n||10;var t=C(e).toHsl();return t.s+=n/100,t.s=ki(t.s),C(t)}function _m(e){return C(e).desaturate(100)}function Om(e,n){n=n===0?0:n||10;var t=C(e).toHsl();return t.l+=n/100,t.l=ki(t.l),C(t)}function Em(e,n){n=n===0?0:n||10;var t=C(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),C(t)}function Cm(e,n){n=n===0?0:n||10;var t=C(e).toHsl();return t.l-=n/100,t.l=ki(t.l),C(t)}function zm(e,n){var t=C(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,C(t)}function Tm(e){var n=C(e).toHsl();return n.h=(n.h+180)%360,C(n)}function Ou(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=C(e).toHsl(),r=[C(e)],o=360/n,i=1;i<n;i++)r.push(C({h:(t.h+i*o)%360,s:t.s,l:t.l}));return r}function Nm(e){var n=C(e).toHsl(),t=n.h;return[C(e),C({h:(t+72)%360,s:n.s,l:n.l}),C({h:(t+216)%360,s:n.s,l:n.l})]}function Dm(e,n,t){n=n||6,t=t||30;var r=C(e).toHsl(),o=360/t,i=[C(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(C(r));return i}function Mm(e,n){n=n||6;for(var t=C(e).toHsv(),r=t.h,o=t.s,i=t.v,l=[],a=1/n;n--;)l.push(C({h:r,s:o,v:i})),i=(i+a)%1;return l}C.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=af(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Su(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Su(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=wu(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=wu(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Pu(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,i){var l=[Be(Math.round(n).toString(16)),Be(Math.round(t).toString(16)),Be(Math.round(r).toString(16)),Be(sf(o))];return i&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)&&l[3].charAt(0)==l[3].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0)+l[3].charAt(0):l.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*q(this._r,255))+"%",g:Math.round(100*q(this._g,255))+"%",b:Math.round(100*q(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*q(this._r,255))+"%, "+Math.round(100*q(this._g,255))+"%, "+Math.round(100*q(this._b,255))+"%)":"rgba("+Math.round(100*q(this._r,255))+"%, "+Math.round(100*q(this._g,255))+"%, "+Math.round(100*q(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Rm[Pu(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+_u(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=C(e);t="#"+_u(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return C(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(Om,arguments)},brighten:function(){return this._applyModification(Em,arguments)},darken:function(){return this._applyModification(Cm,arguments)},desaturate:function(){return this._applyModification(Sm,arguments)},saturate:function(){return this._applyModification(Pm,arguments)},greyscale:function(){return this._applyModification(_m,arguments)},spin:function(){return this._applyModification(zm,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(Dm,arguments)},complement:function(){return this._applyCombination(Tm,arguments)},monochromatic:function(){return this._applyCombination(Mm,arguments)},splitcomplement:function(){return this._applyCombination(Nm,arguments)},triad:function(){return this._applyCombination(Ou,[3])},tetrad:function(){return this._applyCombination(Ou,[4])}},C.fromRatio=function(e,n){if(Zo(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:Kt(e[r]));e=t}return C(e,n)},C.equals=function(e,n){return!(!e||!n)&&C(e).toRgbString()==C(n).toRgbString()},C.random=function(){return C.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},C.mix=function(e,n,t){t=t===0?0:t||50;var r=C(e).toRgb(),o=C(n).toRgb(),i=t/100;return C({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},C.readability=function(e,n){var t=C(e),r=C(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},C.isReadable=function(e,n,t){var r,o,i=C.readability(e,n);switch(o=!1,(r=function(l){var a,s;return a=((l=l||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(l.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:a,size:s}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},C.mostReadable=function(e,n,t){var r,o,i,l,a=null,s=0;o=(t=t||{}).includeFallbackColors,i=t.level,l=t.size;for(var u=0;u<n.length;u++)(r=C.readability(e,n[u]))>s&&(s=r,a=C(n[u]));return C.isReadable(e,a,{level:i,size:l})||!o?a:(t.includeFallbackColors=!1,C.mostReadable(e,["#fff","#000"],t))};var ea=C.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Rm=C.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(ea);function af(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function q(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function ki(e){return Math.min(1,Math.max(0,e))}function xe(e){return parseInt(e,16)}function Be(e){return e.length==1?"0"+e:""+e}function Kt(e){return e<=1&&(e=100*e+"%"),e}function sf(e){return Math.round(255*parseFloat(e)).toString(16)}function Eu(e){return xe(e)/255}var hn,no,to,Fe=(no="[\\s|\\(]+("+(hn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+hn+")[,|\\s]+("+hn+")\\s*\\)?",to="[\\s|\\(]+("+hn+")[,|\\s]+("+hn+")[,|\\s]+("+hn+")[,|\\s]+("+hn+")\\s*\\)?",{CSS_UNIT:new RegExp(hn),rgb:new RegExp("rgb"+no),rgba:new RegExp("rgba"+to),hsl:new RegExp("hsl"+no),hsla:new RegExp("hsla"+to),hsv:new RegExp("hsv"+no),hsva:new RegExp("hsva"+to),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Je(e){return!!Fe.CSS_UNIT.exec(e)}var Nr=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:n}},Dr=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var i=t.fontSize;o=function(l,a){var s={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&a.indexOf(u)<0&&(s[u]=l[u]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(u=Object.getOwnPropertySymbols(l);d<u.length;d++)a.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(l,u[d])&&(s[u[d]]=l[u[d]])}return s}(t,["fontSize"]),r=i}return{fontSize:r,styles:o}},jm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Mr=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,i=e.style;return t?A.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:R(R(R({},o&&jm),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof t=="string"&&t.length?t:"loading"):null},on="rgb(50, 205, 50)";function Rr(e,n){n===void 0&&(n=0);var t=[];return function r(o,i){return i===void 0&&(i=0),t.push.apply(t,o),t.length<i&&r(t,i),t.slice(0,i)}(e,n)}J(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);C(on).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});J(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});J(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var ro=Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}),Lm=function(e){var n,t=Dr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,l=Nr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,a=function(u){var d={},h=ro.length;if(u instanceof Array){for(var m=Rr(u,h),y=0;y<m.length&&!(y>=4);y++)d[ro[y]]=m[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<h;g++)d[ro[g]]=u}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),g=0;g<h;g++)d[ro[g]]=on}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?4.3:2.9;return A.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:R(R(R(R(R({},o&&{fontSize:o}),l&&{"--rli-animation-duration":l}),i&&{"--rli-animation-function":i}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},A.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},A.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),A.createElement(Mr,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function nl(e){return e&&e.Math===Math&&e}J(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var rt=nl(typeof window=="object"&&window)||nl(typeof self=="object"&&self)||nl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function uf(){var e,n;return!((e=rt==null?void 0:rt.crypto)===null||e===void 0)&&e.randomUUID?rt.crypto.randomUUID():!((n=rt==null?void 0:rt.btoa)===null||n===void 0)&&n.name?rt.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var oo=Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}),Am=function(e){var n,t=Dr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,l=Nr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var d={},h=oo.length;if(u instanceof Array){for(var m=Rr(u,h),y=0;y<m.length&&!(y>=4);y++)d[oo[y]]=m[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<h;g++)d[oo[g]]=u}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),g=0;g<h;g++)d[oo[g]]=on}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return A.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:R(R(R(R(R({},o&&{fontSize:o}),l&&{"--rli-animation-duration":l}),i&&{"--rli-animation-function":i}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,d){var h=function(g,v,w){if(v===16){var f=360*g/v,c=v-g,p=Number.parseFloat(w)/v*c*-1;return{transform:"rotate(".concat(f,"deg)"),animationDelay:"".concat(p,"s")}}return{transform:"",animationDelay:""}}(d,s,l),m=h.animationDelay,y=h.transform;return A.createElement("span",{key:uf(),className:"rli-d-i-b dot-shape-holder",style:y?{transform:y}:void 0},A.createElement("span",{className:"dot",style:m?{animationDelay:m}:void 0}))}),A.createElement(Mr,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};J(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var io=Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")}),Fm=function(e){var n,t=Dr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,l=Nr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var d={},h=io.length;if(u instanceof Array){for(var m=Rr(u,h),y=0;y<m.length&&!(y>=4);y++)d[io[y]]=m[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<h;g++)d[io[g]]=u}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),g=0;g<h;g++)d[io[g]]=on}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return A.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:R(R(R(R(R({},o&&{fontSize:o}),l&&{"--rli-animation-duration":l}),i&&{"--rli-animation-function":i}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,d){return A.createElement("span",{key:uf(),className:"rli-d-i-b spoke",style:Im(d,s,l)})})),A.createElement(Mr,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function Im(e,n,t){if(n===16){var r=n-e,o=Number.parseFloat(t)/n;return{transform:"rotate(".concat(360*e/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}J(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var lo=Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),$m=function(e){var n,t=Dr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,l=Nr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var d={},h=lo.length;if(u instanceof Array){for(var m=Rr(u,h),y=0;y<m.length&&!(y>=4);y++)d[lo[y]]=m[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<h;g++)d[lo[g]]=u}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),g=0;g<h;g++)d[lo[g]]=on}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return A.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:R(R(R(R(R({},o&&{fontSize:o}),l&&{"--rli-animation-duration":l}),i&&{"--rli-animation-function":i}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},A.createElement("span",{className:"rli-d-i-b annulus-sectors",style:R({},s&&{borderWidth:s})}),A.createElement(Mr,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};J(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Bt=Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),ao=function(e){return e===void 0&&(e=1),.25*e},Um=function(e){var n,t=Dr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,l=Nr(e==null?void 0:e.speedPlus,"1s").animationPeriod,a=function(u){var d={},h=Bt.length;if(u instanceof Array){for(var m=Rr(u,h),y=0;y<m.length&&!(y>=4);y++){var g=Bt[y];try{if(!(f=C(m[y])).isValid())throw new Error("Invalid Color: ".concat(f.getOriginalInput()));var v=f.setAlpha(ao(f.getAlpha())).toRgbString(),w=m[y];d[g[0]]=v,d[g[1]]=w}catch{w=on,v=(f=C(on)).setAlpha(ao(f.getAlpha())).toRgbString(),d[g[0]]=v,d[g[1]]=w}}return d}try{var f=C(u);if(typeof u!="string")throw new Error("Color String expected");if(!f.isValid())throw new Error("Invalid Color: ".concat(f.getOriginalInput()));w=u,v=f.setAlpha(ao(f.getAlpha())).toRgbString();for(var c=0;c<h;c++)d[(g=Bt[c])[0]]=v,d[g[1]]=w}catch(p){for(p instanceof Error?console.warn("[".concat(p.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),w=on,v=(f=C(on)).setAlpha(ao(f.getAlpha())).toRgbString(),c=0;c<Bt.length;c++)d[(g=Bt[c])[0]]=v,d[g[1]]=w}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return A.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:R(R(R(R(R({},o&&{fontSize:o}),l&&{"--rli-animation-duration":l}),i&&{"--rli-animation-function":i}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},A.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:R({},s&&{borderWidth:s})}),A.createElement(Mr,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},qm=function(e){var n=Object(e).variant,t=n===void 0?"disc":n;return t==="dotted"?A.createElement(Am,R({},e)):t==="spokes"?A.createElement(Fm,R({},e)):t==="disc"?A.createElement(Lm,R({},e)):t==="split-disc"?A.createElement($m,R({},e)):t==="track-disc"?A.createElement(Um,R({},e)):null};J(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});J(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});J(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});J(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});J(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});J(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});J(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});J(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});J(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});J(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});J(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});function Bm(){const e=mi(),{filteredList:n,currentPage:t,itemsPerPage:r,loading:o,error:i,sortBy:l}=Wo(y=>y.movies),[a,s]=xn.useState(l),u=(t-1)*r,d=n.slice(u,u+r);xn.useEffect(()=>{e(xo())},[e]),xn.useEffect(()=>{e(pm(a))},[a,e]);const h=y=>{e(am(y))},m=y=>{const g=y.target.value;s(g)};return o?z.jsx("div",{className:"loading",children:z.jsx(qm,{color:"#32cd32",size:"medium",text:"",textColor:""})}):i?z.jsxs("div",{children:["Error: ",i]}):z.jsxs("div",{className:"container",children:[z.jsxs("h1",{className:"title",children:["Latest from the",z.jsx("br",{}),"world of film."]}),z.jsxs("div",{className:"sortings",children:[z.jsx("h2",{className:"list__title",children:"Movies"}),z.jsx(km,{})]}),z.jsxs("div",{className:"sub__sortings",children:[z.jsx(bm,{}),z.jsxs("div",{className:"sort__wrapper",children:[z.jsxs("div",{className:"label__wrapper",children:[z.jsx("p",{className:"label__tag",children:"Results :"}),z.jsxs("p",{className:"label__content",children:["[",n.length,"]"]})]}),z.jsxs("div",{className:"sort__options",children:[z.jsx("label",{htmlFor:"sort",children:"Sort By:"}),z.jsxs("select",{id:"sort",value:a,onChange:m,children:[z.jsx("option",{value:"titleAsc",children:"Title Ascending"}),z.jsx("option",{value:"titleDesc",children:"Title Descending"}),z.jsx("option",{value:"likesAsc",children:"Likes Ascending"}),z.jsx("option",{value:"likesDesc",children:"Likes Descending"})]})]})]})]}),z.jsx("div",{className:"card__list",children:d.map(y=>z.jsx(ym,{id:y.id,title:y.title,category:y.category,likes:y.likes,dislikes:y.dislikes,liked:y.liked,disliked:y.disliked,backgroundColor:y.backgroundColor,onDelete:()=>h(y.id)},y.id))})]})}$d(document.getElementById("root")).render(z.jsx(a0,{store:mm,children:z.jsx(Bm,{})}));
