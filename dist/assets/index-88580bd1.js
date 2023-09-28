function I0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function T0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cm={exports:{}},Zl={},Im={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),k0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),P0=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),O0=Symbol.for("react.suspense"),L0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),$h=Symbol.iterator;function b0(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var Tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},km=Object.assign,Rm={};function Ni(t,e,n){this.props=t,this.context=e,this.refs=Rm,this.updater=n||Tm}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nm(){}Nm.prototype=Ni.prototype;function Kc(t,e,n){this.props=t,this.context=e,this.refs=Rm,this.updater=n||Tm}var qc=Kc.prototype=new Nm;qc.constructor=Kc;km(qc,Ni.prototype);qc.isPureReactComponent=!0;var Gh=Array.isArray,Pm=Object.prototype.hasOwnProperty,Qc={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pm.call(e,r)&&!xm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:to,type:t,key:s,ref:o,props:i,_owner:Qc.current}}function F0(t,e){return{$$typeof:to,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yc(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function U0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kh=/\/+/g;function Wa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U0(""+t.key):e.toString(36)}function Vo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case to:case k0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wa(o,0):r,Gh(i)?(n="",t!=null&&(n=t.replace(Kh,"$&/")+"/"),Vo(i,e,n,"",function(u){return u})):i!=null&&(Yc(i)&&(i=F0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Wa(s,l);o+=Vo(s,e,n,a,i)}else if(a=b0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Wa(s,l++),o+=Vo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var r=[],i=0;return Vo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},Ho={transition:null},j0={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Qc};Y.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Yc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Ni;Y.Fragment=R0;Y.Profiler=P0;Y.PureComponent=Kc;Y.StrictMode=N0;Y.Suspense=O0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=km({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Pm.call(e,a)&&!xm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:to,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:A0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x0,_context:t},t.Consumer=t};Y.createElement=Am;Y.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:D0,render:t}};Y.isValidElement=Yc;Y.lazy=function(t){return{$$typeof:M0,_payload:{_status:-1,_result:t},_init:z0}};Y.memo=function(t,e){return{$$typeof:L0,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return Xe.current.useCallback(t,e)};Y.useContext=function(t){return Xe.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};Y.useEffect=function(t,e){return Xe.current.useEffect(t,e)};Y.useId=function(){return Xe.current.useId()};Y.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Xe.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};Y.useRef=function(t){return Xe.current.useRef(t)};Y.useState=function(t){return Xe.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return Xe.current.useTransition()};Y.version="18.2.0";Im.exports=Y;var N=Im.exports;const Dm=T0(N),B0=I0({__proto__:null,default:Dm},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=N,V0=Symbol.for("react.element"),H0=Symbol.for("react.fragment"),$0=Object.prototype.hasOwnProperty,G0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K0={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$0.call(e,r)&&!K0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:V0,type:t,key:s,ref:o,props:i,_owner:G0.current}}Zl.Fragment=H0;Zl.jsx=Om;Zl.jsxs=Om;Cm.exports=Zl;var z=Cm.exports,Au={},Lm={exports:{}},ft={},Mm={exports:{}},bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,M){var V=x.length;x.push(M);e:for(;0<V;){var fe=V-1>>>1,Ie=x[fe];if(0<i(Ie,M))x[fe]=M,x[V]=Ie,V=fe;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var M=x[0],V=x.pop();if(V!==M){x[0]=V;e:for(var fe=0,Ie=x.length,Mr=Ie>>>1;fe<Mr;){var oe=2*(fe+1)-1,qt=x[oe],Ft=oe+1,br=x[Ft];if(0>i(qt,V))Ft<Ie&&0>i(br,qt)?(x[fe]=br,x[Ft]=V,fe=Ft):(x[fe]=qt,x[oe]=V,fe=oe);else if(Ft<Ie&&0>i(br,V))x[fe]=br,x[Ft]=V,fe=Ft;else break e}}return M}function i(x,M){var V=x.sortIndex-M.sortIndex;return V!==0?V:x.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,v=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=x)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function p(x){if(y=!1,g(x),!v)if(n(a)!==null)v=!0,at(C);else{var M=n(u);M!==null&&bt(p,M.startTime-x)}}function C(x,M){v=!1,y&&(y=!1,m(A),A=-1),_=!0;var V=h;try{for(g(M),d=n(a);d!==null&&(!(d.expirationTime>M)||x&&!De());){var fe=d.callback;if(typeof fe=="function"){d.callback=null,h=d.priorityLevel;var Ie=fe(d.expirationTime<=M);M=t.unstable_now(),typeof Ie=="function"?d.callback=Ie:d===n(a)&&r(a),g(M)}else r(a);d=n(a)}if(d!==null)var Mr=!0;else{var oe=n(u);oe!==null&&bt(p,oe.startTime-M),Mr=!1}return Mr}finally{d=null,h=V,_=!1}}var P=!1,R=null,A=-1,$=5,U=-1;function De(){return!(t.unstable_now()-U<$)}function se(){if(R!==null){var x=t.unstable_now();U=x;var M=!0;try{M=R(!0,x)}finally{M?Mt():(P=!1,R=null)}}else P=!1}var Mt;if(typeof f=="function")Mt=function(){f(se)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,yn=vn.port2;vn.port1.onmessage=se,Mt=function(){yn.postMessage(null)}}else Mt=function(){I(se,0)};function at(x){R=x,P||(P=!0,Mt())}function bt(x,M){A=I(function(){x(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,at(C))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var V=h;h=M;try{return x()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,M){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var V=h;h=x;try{return M()}finally{h=V}},t.unstable_scheduleCallback=function(x,M,V){var fe=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?fe+V:fe):V=fe,x){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=V+Ie,x={id:c++,callback:M,priorityLevel:x,startTime:V,expirationTime:Ie,sortIndex:-1},V>fe?(x.sortIndex=V,e(u,x),n(a)===null&&x===n(u)&&(y?(m(A),A=-1):y=!0,bt(p,V-fe))):(x.sortIndex=Ie,e(a,x),v||_||(v=!0,at(C))),x},t.unstable_shouldYield=De,t.unstable_wrapCallback=function(x){var M=h;return function(){var V=h;h=M;try{return x.apply(this,arguments)}finally{h=V}}}})(bm);Mm.exports=bm;var q0=Mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=N,ht=q0;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,Cs={};function Dr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(Cs[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,Q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qh={},Qh={};function Y0(t){return Du.call(Qh,t)?!0:Du.call(qh,t)?!1:Q0.test(t)?Qh[t]=!0:(qh[t]=!0,!1)}function X0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J0(t,e,n,r){if(e===null||typeof e>"u"||X0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xc=/[\-:]([a-z])/g;function Jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xc,Jc);je[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xc,Jc);je[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xc,Jc);je[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zc(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J0(e,n,i,r)&&(n=null),r||i===null?Y0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pn=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Bm=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function Wi(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Va;function is(t){if(Va===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Va=e&&e[1]||""}return`
`+Va+t}var Ha=!1;function $a(t,e){if(!t||Ha)return"";Ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ha=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function Z0(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=$a(t.type,!1),t;case 11:return t=$a(t.type.render,!1),t;case 1:return t=$a(t.type,!0),t;default:return""}}function bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case jr:return"Portal";case Ou:return"Profiler";case ed:return"StrictMode";case Lu:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jm:return(t.displayName||"Context")+".Consumer";case zm:return(t._context.displayName||"Context")+".Provider";case td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nd:return e=t.displayName||null,e!==null?e:bu(t.type)||"Memo";case In:e=t._payload,t=t._init;try{return bu(t(e))}catch{}}return null}function ew(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bu(e);case 8:return e===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tw(t){var e=Wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=tw(t))}function Vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&Zc(t,"checked",e,!1)}function Uu(t,e){Hm(t,e);var n=Gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ss(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gn(n)}}function $m(t,e){var n=Gn(e.value),r=Gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var as={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nw=["Webkit","ms","Moz","O"];Object.keys(as).forEach(function(t){nw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),as[e]=as[t]})});function qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||as.hasOwnProperty(t)&&as[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rw=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(rw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $u=null,ni=null,ri=null;function tf(t){if(t=io(t)){if(typeof $u!="function")throw Error(T(280));var e=t.stateNode;e&&(e=ia(e),$u(t.stateNode,t.type,e))}}function Ym(t){ni?ri?ri.push(t):ri=[t]:ni=t}function Xm(){if(ni){var t=ni,e=ri;if(ri=ni=null,tf(t),e)for(t=0;t<e.length;t++)tf(e[t])}}function Jm(t,e){return t(e)}function Zm(){}var Ga=!1;function eg(t,e,n){if(Ga)return t(e,n);Ga=!0;try{return Jm(t,e,n)}finally{Ga=!1,(ni!==null||ri!==null)&&(Zm(),Xm())}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var r=ia(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Gu=!1;if(an)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Gu=!1}function iw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var us=!1,ol=null,ll=!1,Ku=null,sw={onError:function(t){us=!0,ol=t}};function ow(t,e,n,r,i,s,o,l,a){us=!1,ol=null,iw.apply(sw,arguments)}function lw(t,e,n,r,i,s,o,l,a){if(ow.apply(this,arguments),us){if(us){var u=ol;us=!1,ol=null}else throw Error(T(198));ll||(ll=!0,Ku=u)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nf(t){if(Or(t)!==t)throw Error(T(188))}function aw(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nf(i),t;if(s===r)return nf(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function ng(t){return t=aw(t),t!==null?rg(t):null}function rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rg(t);if(e!==null)return e;t=t.sibling}return null}var ig=ht.unstable_scheduleCallback,rf=ht.unstable_cancelCallback,uw=ht.unstable_shouldYield,cw=ht.unstable_requestPaint,Ce=ht.unstable_now,dw=ht.unstable_getCurrentPriorityLevel,id=ht.unstable_ImmediatePriority,sg=ht.unstable_UserBlockingPriority,al=ht.unstable_NormalPriority,hw=ht.unstable_LowPriority,og=ht.unstable_IdlePriority,ea=null,Wt=null;function fw(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:gw,pw=Math.log,mw=Math.LN2;function gw(t){return t>>>=0,t===0?32:31-(pw(t)/mw|0)|0}var Ro=64,No=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=os(l):(s&=o,s!==0&&(r=os(s)))}else o=n&~i,o!==0?r=os(o):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-At(e),i=1<<n,r|=t[n],e&=~i;return r}function _w(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-At(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=_w(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lg(){var t=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),t}function Ka(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function no(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-At(e),t[e]=n}function yw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-At(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-At(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ug,od,cg,dg,hg,Qu=!1,Po=[],On=null,Ln=null,Mn=null,ks=new Map,Rs=new Map,kn=[],ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sf(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=io(e),e!==null&&od(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ew(t,e,n,r,i){switch(e){case"focusin":return On=Hi(On,t,e,n,r,i),!0;case"dragenter":return Ln=Hi(Ln,t,e,n,r,i),!0;case"mouseover":return Mn=Hi(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ks.set(s,Hi(ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rs.set(s,Hi(Rs.get(s)||null,t,e,n,r,i)),!0}return!1}function fg(t){var e=ur(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=tg(n),e!==null){t.blockedOn=e,hg(t.priority,function(){cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hu=r,n.target.dispatchEvent(r),Hu=null}else return e=io(n),e!==null&&od(e),t.blockedOn=n,!1;e.shift()}return!0}function of(t,e,n){$o(t)&&n.delete(e)}function Sw(){Qu=!1,On!==null&&$o(On)&&(On=null),Ln!==null&&$o(Ln)&&(Ln=null),Mn!==null&&$o(Mn)&&(Mn=null),ks.forEach(of),Rs.forEach(of)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Sw)))}function Ns(t){function e(i){return $i(i,t)}if(0<Po.length){$i(Po[0],t);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&$i(On,t),Ln!==null&&$i(Ln,t),Mn!==null&&$i(Mn,t),ks.forEach(e),Rs.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)fg(n),n.blockedOn===null&&kn.shift()}var ii=pn.ReactCurrentBatchConfig,cl=!0;function Cw(t,e,n,r){var i=ee,s=ii.transition;ii.transition=null;try{ee=1,ld(t,e,n,r)}finally{ee=i,ii.transition=s}}function Iw(t,e,n,r){var i=ee,s=ii.transition;ii.transition=null;try{ee=4,ld(t,e,n,r)}finally{ee=i,ii.transition=s}}function ld(t,e,n,r){if(cl){var i=Yu(t,e,n,r);if(i===null)ru(t,e,r,dl,n),sf(t,r);else if(Ew(i,t,e,n,r))r.stopPropagation();else if(sf(t,r),e&4&&-1<ww.indexOf(t)){for(;i!==null;){var s=io(i);if(s!==null&&ug(s),s=Yu(t,e,n,r),s===null&&ru(t,e,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ru(t,e,r,null,n)}}var dl=null;function Yu(t,e,n,r){if(dl=null,t=rd(r),t=ur(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dw()){case id:return 1;case sg:return 4;case al:case hw:return 16;case og:return 536870912;default:return 16}default:return 16}}var An=null,ad=null,Go=null;function mg(){if(Go)return Go;var t,e=ad,n=e.length,r,i="value"in An?An.value:An.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Go=i.slice(t,1<r?1-r:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function lf(){return!1}function pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xo:lf,this.isPropagationStopped=lf,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),e}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=pt(Pi),ro=ve({},Pi,{view:0,detail:0}),Tw=pt(ro),qa,Qa,Gi,ta=ve({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(qa=t.screenX-Gi.screenX,Qa=t.screenY-Gi.screenY):Qa=qa=0,Gi=t),qa)},movementY:function(t){return"movementY"in t?t.movementY:Qa}}),af=pt(ta),kw=ve({},ta,{dataTransfer:0}),Rw=pt(kw),Nw=ve({},ro,{relatedTarget:0}),Ya=pt(Nw),Pw=ve({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),xw=pt(Pw),Aw=ve({},Pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dw=pt(Aw),Ow=ve({},Pi,{data:0}),uf=pt(Ow),Lw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bw[t])?!!e[t]:!1}function cd(){return Fw}var Uw=ve({},ro,{key:function(t){if(t.key){var e=Lw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zw=pt(Uw),jw=ve({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=pt(jw),Bw=ve({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),Ww=pt(Bw),Vw=ve({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hw=pt(Vw),$w=ve({},ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gw=pt($w),Kw=[9,13,27,32],dd=an&&"CompositionEvent"in window,cs=null;an&&"documentMode"in document&&(cs=document.documentMode);var qw=an&&"TextEvent"in window&&!cs,gg=an&&(!dd||cs&&8<cs&&11>=cs),df=String.fromCharCode(32),hf=!1;function _g(t,e){switch(t){case"keyup":return Kw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Qw(t,e){switch(t){case"compositionend":return vg(e);case"keypress":return e.which!==32?null:(hf=!0,df);case"textInput":return t=e.data,t===df&&hf?null:t;default:return null}}function Yw(t,e){if(Wr)return t==="compositionend"||!dd&&_g(t,e)?(t=mg(),Go=ad=An=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gg&&e.locale!=="ko"?null:e.data;default:return null}}var Xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xw[t.type]:e==="textarea"}function yg(t,e,n,r){Ym(r),e=hl(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ds=null,Ps=null;function Jw(t){xg(t,0)}function na(t){var e=$r(t);if(Vm(e))return t}function Zw(t,e){if(t==="change")return e}var wg=!1;if(an){var Xa;if(an){var Ja="oninput"in document;if(!Ja){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Ja=typeof pf.oninput=="function"}Xa=Ja}else Xa=!1;wg=Xa&&(!document.documentMode||9<document.documentMode)}function mf(){ds&&(ds.detachEvent("onpropertychange",Eg),Ps=ds=null)}function Eg(t){if(t.propertyName==="value"&&na(Ps)){var e=[];yg(e,Ps,t,rd(t)),eg(Jw,e)}}function eE(t,e,n){t==="focusin"?(mf(),ds=e,Ps=n,ds.attachEvent("onpropertychange",Eg)):t==="focusout"&&mf()}function tE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na(Ps)}function nE(t,e){if(t==="click")return na(e)}function rE(t,e){if(t==="input"||t==="change")return na(e)}function iE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:iE;function xs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Du.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,e){var n=gf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function Sg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cg(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sE(t){var e=Cg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sg(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_f(n,s);var o=_f(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oE=an&&"documentMode"in document&&11>=document.documentMode,Vr=null,Xu=null,hs=null,Ju=!1;function vf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||Vr==null||Vr!==sl(r)||(r=Vr,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&xs(hs,r)||(hs=r,r=hl(Xu,"onSelect"),0<r.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vr)))}function Ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Za={},Ig={};an&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ra(t){if(Za[t])return Za[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return Za[t]=e[n];return t}var Tg=ra("animationend"),kg=ra("animationiteration"),Rg=ra("animationstart"),Ng=ra("transitionend"),Pg=new Map,yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){Pg.set(t,e),Dr(e,[t])}for(var eu=0;eu<yf.length;eu++){var tu=yf[eu],lE=tu.toLowerCase(),aE=tu[0].toUpperCase()+tu.slice(1);Xn(lE,"on"+aE)}Xn(Tg,"onAnimationEnd");Xn(kg,"onAnimationIteration");Xn(Rg,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(Ng,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lw(r,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;wf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;wf(i,l,u),s=a}}}if(ll)throw t=Ku,ll=!1,Ku=null,t}function ue(t,e){var n=e[rc];n===void 0&&(n=e[rc]=new Set);var r=t+"__bubble";n.has(r)||(Ag(e,t,2,!1),n.add(r))}function nu(t,e,n){var r=0;e&&(r|=4),Ag(n,t,r,e)}var Do="_reactListening"+Math.random().toString(36).slice(2);function As(t){if(!t[Do]){t[Do]=!0,Um.forEach(function(n){n!=="selectionchange"&&(uE.has(n)||nu(n,!1,t),nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Do]||(e[Do]=!0,nu("selectionchange",!1,e))}}function Ag(t,e,n,r){switch(pg(e)){case 1:var i=Cw;break;case 4:i=Iw;break;default:i=ld}n=i.bind(null,e,n,t),i=void 0,!Gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ru(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ur(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}eg(function(){var u=s,c=rd(n),d=[];e:{var h=Pg.get(t);if(h!==void 0){var _=ud,v=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":_=zw;break;case"focusin":v="focus",_=Ya;break;case"focusout":v="blur",_=Ya;break;case"beforeblur":case"afterblur":_=Ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Ww;break;case Tg:case kg:case Rg:_=xw;break;case Ng:_=Hw;break;case"scroll":_=Tw;break;case"wheel":_=Gw;break;case"copy":case"cut":case"paste":_=Dw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=cf}var y=(e&4)!==0,I=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,m!==null&&(p=Ts(f,m),p!=null&&y.push(Ds(f,p,g)))),I)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Hu&&(v=n.relatedTarget||n.fromElement)&&(ur(v)||v[un]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?ur(v):null,v!==null&&(I=Or(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=af,p="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=cf,p="onPointerLeave",m="onPointerEnter",f="pointer"),I=_==null?h:$r(_),g=v==null?h:$r(v),h=new y(p,f+"leave",_,n,c),h.target=I,h.relatedTarget=g,p=null,ur(c)===u&&(y=new y(m,f+"enter",v,n,c),y.target=g,y.relatedTarget=I,p=y),I=p,_&&v)t:{for(y=_,m=v,f=0,g=y;g;g=Fr(g))f++;for(g=0,p=m;p;p=Fr(p))g++;for(;0<f-g;)y=Fr(y),f--;for(;0<g-f;)m=Fr(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Fr(y),m=Fr(m)}y=null}else y=null;_!==null&&Ef(d,h,_,y,!1),v!==null&&I!==null&&Ef(d,I,v,y,!0)}}e:{if(h=u?$r(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=Zw;else if(ff(h))if(wg)C=rE;else{C=tE;var P=eE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=nE);if(C&&(C=C(t,u))){yg(d,C,n,c);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&zu(h,"number",h.value)}switch(P=u?$r(u):window,t){case"focusin":(ff(P)||P.contentEditable==="true")&&(Vr=P,Xu=u,hs=null);break;case"focusout":hs=Xu=Vr=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,vf(d,n,c);break;case"selectionchange":if(oE)break;case"keydown":case"keyup":vf(d,n,c)}var R;if(dd)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Wr?_g(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(gg&&n.locale!=="ko"&&(Wr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Wr&&(R=mg()):(An=c,ad="value"in An?An.value:An.textContent,Wr=!0)),P=hl(u,A),0<P.length&&(A=new uf(A,t,null,n,c),d.push({event:A,listeners:P}),R?A.data=R:(R=vg(n),R!==null&&(A.data=R)))),(R=qw?Qw(t,n):Yw(t,n))&&(u=hl(u,"onBeforeInput"),0<u.length&&(c=new uf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}xg(d,e)})}function Ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ts(t,n),s!=null&&r.unshift(Ds(t,s,i)),s=Ts(t,e),s!=null&&r.push(Ds(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ts(n,s),a!=null&&o.unshift(Ds(n,a,l))):i||(a=Ts(n,s),a!=null&&o.push(Ds(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cE=/\r\n?/g,dE=/\u0000|\uFFFD/g;function Sf(t){return(typeof t=="string"?t:""+t).replace(cE,`
`).replace(dE,"")}function Oo(t,e,n){if(e=Sf(e),Sf(t)!==e&&n)throw Error(T(425))}function fl(){}var Zu=null,ec=null;function tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,hE=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(t){return Cf.resolve(null).then(t).catch(pE)}:nc;function pE(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ns(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ns(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function If(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xi=Math.random().toString(36).slice(2),jt="__reactFiber$"+xi,Os="__reactProps$"+xi,un="__reactContainer$"+xi,rc="__reactEvents$"+xi,mE="__reactListeners$"+xi,gE="__reactHandles$"+xi;function ur(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[un]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=If(t);t!==null;){if(n=t[jt])return n;t=If(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[jt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function ia(t){return t[Os]||null}var ic=[],Gr=-1;function Jn(t){return{current:t}}function de(t){0>Gr||(t.current=ic[Gr],ic[Gr]=null,Gr--)}function ae(t,e){Gr++,ic[Gr]=t.current,t.current=e}var Kn={},Ge=Jn(Kn),nt=Jn(!1),wr=Kn;function pi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rt(t){return t=t.childContextTypes,t!=null}function pl(){de(nt),de(Ge)}function Tf(t,e,n){if(Ge.current!==Kn)throw Error(T(168));ae(Ge,e),ae(nt,n)}function Dg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,ew(t)||"Unknown",i));return ve({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,wr=Ge.current,ae(Ge,t),ae(nt,nt.current),!0}function kf(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Dg(t,e,wr),r.__reactInternalMemoizedMergedChildContext=t,de(nt),de(Ge),ae(Ge,t)):de(nt),ae(nt,n)}var Jt=null,sa=!1,su=!1;function Og(t){Jt===null?Jt=[t]:Jt.push(t)}function _E(t){sa=!0,Og(t)}function Zn(){if(!su&&Jt!==null){su=!0;var t=0,e=ee;try{var n=Jt;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jt=null,sa=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(t+1)),ig(id,Zn),i}finally{ee=e,su=!1}}return null}var Kr=[],qr=0,gl=null,_l=0,gt=[],_t=0,Er=null,Zt=1,en="";function sr(t,e){Kr[qr++]=_l,Kr[qr++]=gl,gl=t,_l=e}function Lg(t,e,n){gt[_t++]=Zt,gt[_t++]=en,gt[_t++]=Er,Er=t;var r=Zt;t=en;var i=32-At(r)-1;r&=~(1<<i),n+=1;var s=32-At(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zt=1<<32-At(e)+i|n<<i|r,en=s+t}else Zt=1<<s|n<<i|r,en=t}function fd(t){t.return!==null&&(sr(t,1),Lg(t,1,0))}function pd(t){for(;t===gl;)gl=Kr[--qr],Kr[qr]=null,_l=Kr[--qr],Kr[qr]=null;for(;t===Er;)Er=gt[--_t],gt[_t]=null,en=gt[--_t],gt[_t]=null,Zt=gt[--_t],gt[_t]=null}var dt=null,ct=null,he=!1,Rt=null;function Mg(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dt=t,ct=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dt=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dt=t,ct=null,!0):!1;default:return!1}}function sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oc(t){if(he){var e=ct;if(e){var n=e;if(!Rf(t,e)){if(sc(t))throw Error(T(418));e=bn(n.nextSibling);var r=dt;e&&Rf(t,e)?Mg(r,n):(t.flags=t.flags&-4097|2,he=!1,dt=t)}}else{if(sc(t))throw Error(T(418));t.flags=t.flags&-4097|2,he=!1,dt=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dt=t}function Lo(t){if(t!==dt)return!1;if(!he)return Nf(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tc(t.type,t.memoizedProps)),e&&(e=ct)){if(sc(t))throw bg(),Error(T(418));for(;e;)Mg(t,e),e=bn(e.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=dt?bn(t.stateNode.nextSibling):null;return!0}function bg(){for(var t=ct;t;)t=bn(t.nextSibling)}function mi(){ct=dt=null,he=!1}function md(t){Rt===null?Rt=[t]:Rt.push(t)}var vE=pn.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vl=Jn(null),yl=null,Qr=null,gd=null;function _d(){gd=Qr=yl=null}function vd(t){var e=vl.current;de(vl),t._currentValue=e}function lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){yl=t,gd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(gd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(yl===null)throw Error(T(308));Qr=t,yl.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var cr=null;function yd(t){cr===null?cr=[t]:cr.push(t)}function Fg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yd(e)):(n.next=i.next,i.next=n),e.interleaved=n,cn(t,r)}function cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tn=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cn(t,n)}return i=r.interleaved,i===null?(e.next=e,yd(r)):(e.next=i.next,i.next=e),r.interleaved=e,cn(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sd(t,n)}}function Pf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var i=t.updateQueue;Tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,d,h):v,h==null)break e;d=ve({},d,h);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=d}}function xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var zg=new Fm.Component().refs;function ac(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oa={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=zn(t),s=sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Dt(e,t,i,r),qo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=zn(t),s=sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Dt(e,t,i,r),qo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=zn(t),i=sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fn(t,i,r),e!==null&&(Dt(e,t,r,n),qo(e,t,r))}};function Af(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xs(n,r)||!xs(i,s):!0}function jg(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=rt(e)?wr:Ge.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Df(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oa.enqueueReplaceState(e,e.state,null)}function uc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zg,wd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=rt(e)?wr:Ge.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ac(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oa.enqueueReplaceState(i,i.state,null),wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===zg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Mo(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Of(t){var e=t._init;return e(t._payload)}function Bg(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=jn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,p){return f===null||f.tag!==6?(f=hu(g,m.mode,p),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,p){var C=g.type;return C===Br?c(m,f,g.props.children,p,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===In&&Of(C)===f.type)?(p=i(f,g.props),p.ref=Ki(m,f,g),p.return=m,p):(p=el(g.type,g.key,g.props,null,m.mode,p),p.ref=Ki(m,f,g),p.return=m,p)}function u(m,f,g,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=fu(g,m.mode,p),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,p,C){return f===null||f.tag!==7?(f=_r(g,m.mode,p,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=hu(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return g=el(f.type,f.key,f.props,null,m.mode,g),g.ref=Ki(m,null,f),g.return=m,g;case jr:return f=fu(f,m.mode,g),f.return=m,f;case In:var p=f._init;return d(m,p(f._payload),g)}if(ss(f)||Wi(f))return f=_r(f,m.mode,g,null),f.return=m,f;Mo(m,f)}return null}function h(m,f,g,p){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,f,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return g.key===C?a(m,f,g,p):null;case jr:return g.key===C?u(m,f,g,p):null;case In:return C=g._init,h(m,f,C(g._payload),p)}if(ss(g)||Wi(g))return C!==null?null:c(m,f,g,p,null);Mo(m,g)}return null}function _(m,f,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(g)||null,l(f,m,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:return m=m.get(p.key===null?g:p.key)||null,a(f,m,p,C);case jr:return m=m.get(p.key===null?g:p.key)||null,u(f,m,p,C);case In:var P=p._init;return _(m,f,g,P(p._payload),C)}if(ss(p)||Wi(p))return m=m.get(g)||null,c(f,m,p,C,null);Mo(f,p)}return null}function v(m,f,g,p){for(var C=null,P=null,R=f,A=f=0,$=null;R!==null&&A<g.length;A++){R.index>A?($=R,R=null):$=R.sibling;var U=h(m,R,g[A],p);if(U===null){R===null&&(R=$);break}t&&R&&U.alternate===null&&e(m,R),f=s(U,f,A),P===null?C=U:P.sibling=U,P=U,R=$}if(A===g.length)return n(m,R),he&&sr(m,A),C;if(R===null){for(;A<g.length;A++)R=d(m,g[A],p),R!==null&&(f=s(R,f,A),P===null?C=R:P.sibling=R,P=R);return he&&sr(m,A),C}for(R=r(m,R);A<g.length;A++)$=_(R,m,A,g[A],p),$!==null&&(t&&$.alternate!==null&&R.delete($.key===null?A:$.key),f=s($,f,A),P===null?C=$:P.sibling=$,P=$);return t&&R.forEach(function(De){return e(m,De)}),he&&sr(m,A),C}function y(m,f,g,p){var C=Wi(g);if(typeof C!="function")throw Error(T(150));if(g=C.call(g),g==null)throw Error(T(151));for(var P=C=null,R=f,A=f=0,$=null,U=g.next();R!==null&&!U.done;A++,U=g.next()){R.index>A?($=R,R=null):$=R.sibling;var De=h(m,R,U.value,p);if(De===null){R===null&&(R=$);break}t&&R&&De.alternate===null&&e(m,R),f=s(De,f,A),P===null?C=De:P.sibling=De,P=De,R=$}if(U.done)return n(m,R),he&&sr(m,A),C;if(R===null){for(;!U.done;A++,U=g.next())U=d(m,U.value,p),U!==null&&(f=s(U,f,A),P===null?C=U:P.sibling=U,P=U);return he&&sr(m,A),C}for(R=r(m,R);!U.done;A++,U=g.next())U=_(R,m,A,U.value,p),U!==null&&(t&&U.alternate!==null&&R.delete(U.key===null?A:U.key),f=s(U,f,A),P===null?C=U:P.sibling=U,P=U);return t&&R.forEach(function(se){return e(m,se)}),he&&sr(m,A),C}function I(m,f,g,p){if(typeof g=="object"&&g!==null&&g.type===Br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:e:{for(var C=g.key,P=f;P!==null;){if(P.key===C){if(C=g.type,C===Br){if(P.tag===7){n(m,P.sibling),f=i(P,g.props.children),f.return=m,m=f;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===In&&Of(C)===P.type){n(m,P.sibling),f=i(P,g.props),f.ref=Ki(m,P,g),f.return=m,m=f;break e}n(m,P);break}else e(m,P);P=P.sibling}g.type===Br?(f=_r(g.props.children,m.mode,p,g.key),f.return=m,m=f):(p=el(g.type,g.key,g.props,null,m.mode,p),p.ref=Ki(m,f,g),p.return=m,m=p)}return o(m);case jr:e:{for(P=g.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=fu(g,m.mode,p),f.return=m,m=f}return o(m);case In:return P=g._init,I(m,f,P(g._payload),p)}if(ss(g))return v(m,f,g,p);if(Wi(g))return y(m,f,g,p);Mo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=hu(g,m.mode,p),f.return=m,m=f),o(m)):n(m,f)}return I}var gi=Bg(!0),Wg=Bg(!1),so={},Vt=Jn(so),Ls=Jn(so),Ms=Jn(so);function dr(t){if(t===so)throw Error(T(174));return t}function Ed(t,e){switch(ae(Ms,e),ae(Ls,t),ae(Vt,so),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}de(Vt),ae(Vt,e)}function _i(){de(Vt),de(Ls),de(Ms)}function Vg(t){dr(Ms.current);var e=dr(Vt.current),n=Bu(e,t.type);e!==n&&(ae(Ls,t),ae(Vt,n))}function Sd(t){Ls.current===t&&(de(Vt),de(Ls))}var ge=Jn(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function Cd(){for(var t=0;t<ou.length;t++)ou[t]._workInProgressVersionPrimary=null;ou.length=0}var Qo=pn.ReactCurrentDispatcher,lu=pn.ReactCurrentBatchConfig,Sr=0,_e=null,Ne=null,Le=null,Sl=!1,fs=!1,bs=0,yE=0;function We(){throw Error(T(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function Td(t,e,n,r,i,s){if(Sr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?CE:IE,t=n(r,i),fs){s=0;do{if(fs=!1,bs=0,25<=s)throw Error(T(301));s+=1,Le=Ne=null,e.updateQueue=null,Qo.current=TE,t=n(r,i)}while(fs)}if(Qo.current=Cl,e=Ne!==null&&Ne.next!==null,Sr=0,Le=Ne=_e=null,Sl=!1,e)throw Error(T(300));return t}function kd(){var t=bs!==0;return bs=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?_e.memoizedState=Le=t:Le=Le.next=t,Le}function Et(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Le===null?_e.memoizedState:Le.next;if(e!==null)Le=e,Ne=t;else{if(t===null)throw Error(T(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?_e.memoizedState=Le=t:Le=Le.next=t}return Le}function Fs(t,e){return typeof e=="function"?e(t):e}function au(t){var e=Et(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Sr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,_e.lanes|=c,Cr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Lt(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uu(t){var e=Et(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Lt(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hg(){}function $g(t,e){var n=_e,r=Et(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,Rd(qg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Us(9,Kg.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(T(349));Sr&30||Gg(n,e,i)}return i}function Gg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,r){e.value=n,e.getSnapshot=r,Qg(e)&&Yg(t)}function qg(t,e,n){return n(function(){Qg(e)&&Yg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Yg(t){var e=cn(t,1);e!==null&&Dt(e,t,1,-1)}function Lf(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:t},e.queue=t,t=t.dispatch=SE.bind(null,_e,t),[e.memoizedState,t]}function Us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xg(){return Et().memoizedState}function Yo(t,e,n,r){var i=zt();_e.flags|=t,i.memoizedState=Us(1|e,n,void 0,r===void 0?null:r)}function la(t,e,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Id(r,o.deps)){i.memoizedState=Us(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Us(1|e,n,s,r)}function Mf(t,e){return Yo(8390656,8,t,e)}function Rd(t,e){return la(2048,8,t,e)}function Jg(t,e){return la(4,2,t,e)}function Zg(t,e){return la(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,la(4,4,e_.bind(null,e,t),n)}function Nd(){}function n_(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return Sr&21?(Lt(n,e)||(n=lg(),_e.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function wE(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=lu.transition;lu.transition={};try{t(!1),e()}finally{ee=n,lu.transition=r}}function s_(){return Et().memoizedState}function EE(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))l_(e,n);else if(n=Fg(t,e,n,r),n!==null){var i=Ye();Dt(n,t,r,i),a_(n,e,r)}}function SE(t,e,n){var r=zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))l_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Lt(l,o)){var a=e.interleaved;a===null?(i.next=i,yd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Fg(t,e,i,r),n!==null&&(i=Ye(),Dt(n,t,r,i),a_(n,e,r))}}function o_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function l_(t,e){fs=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sd(t,n)}}var Cl={readContext:wt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},CE={readContext:wt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:Mf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EE.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Lf,useDebugValue:Nd,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Lf(!1),e=t[0];return t=wE.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=zt();if(he){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Fe===null)throw Error(T(349));Sr&30||Gg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mf(qg.bind(null,r,s,t),[t]),r.flags|=2048,Us(9,Kg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Fe.identifierPrefix;if(he){var n=en,r=Zt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IE={readContext:wt,useCallback:n_,useContext:wt,useEffect:Rd,useImperativeHandle:t_,useInsertionEffect:Jg,useLayoutEffect:Zg,useMemo:r_,useReducer:au,useRef:Xg,useState:function(){return au(Fs)},useDebugValue:Nd,useDeferredValue:function(t){var e=Et();return i_(e,Ne.memoizedState,t)},useTransition:function(){var t=au(Fs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Hg,useSyncExternalStore:$g,useId:s_,unstable_isNewReconciler:!1},TE={readContext:wt,useCallback:n_,useContext:wt,useEffect:Rd,useImperativeHandle:t_,useInsertionEffect:Jg,useLayoutEffect:Zg,useMemo:r_,useReducer:uu,useRef:Xg,useState:function(){return uu(Fs)},useDebugValue:Nd,useDeferredValue:function(t){var e=Et();return Ne===null?e.memoizedState=t:i_(e,Ne.memoizedState,t)},useTransition:function(){var t=uu(Fs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Hg,useSyncExternalStore:$g,useId:s_,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=Z0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kE=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tl||(Tl=!0,wc=r),cc(t,e)},n}function c_(t,e,n){n=sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cc(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jE.bind(null,t,e,n),e.then(t,t))}function Ff(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var RE=pn.ReactCurrentOwner,et=!1;function qe(t,e,n,r){e.child=t===null?Wg(e,null,n,r):gi(e,t.child,n,r)}function zf(t,e,n,r,i){n=n.render;var s=e.ref;return si(e,i),r=Td(t,e,n,r,s,i),n=kd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dn(t,e,i)):(he&&n&&fd(e),e.flags|=1,qe(t,e,r,i),e.child)}function jf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,r,i)):(t=el(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(o,r)&&t.ref===e.ref)return dn(t,e,i)}return e.flags|=1,t=jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xs(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,dn(t,e,i)}return dc(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Xr,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Xr,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Xr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Xr,ut),ut|=r;return qe(t,e,i,n),e.child}function f_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dc(t,e,n,r,i){var s=rt(n)?wr:Ge.current;return s=pi(e,s),si(e,i),n=Td(t,e,n,r,s,i),r=kd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dn(t,e,i)):(he&&r&&fd(e),e.flags|=1,qe(t,e,n,i),e.child)}function Bf(t,e,n,r,i){if(rt(n)){var s=!0;ml(e)}else s=!1;if(si(e,i),e.stateNode===null)Xo(t,e),jg(e,n,r),uc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=rt(n)?wr:Ge.current,u=pi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Df(e,o,r,u),Tn=!1;var h=e.memoizedState;o.state=h,wl(e,r,o,i),a=e.memoizedState,l!==r||h!==a||nt.current||Tn?(typeof c=="function"&&(ac(e,n,c,r),a=e.memoizedState),(l=Tn||Af(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ug(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:It(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=wt(a):(a=rt(n)?wr:Ge.current,a=pi(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Df(e,o,r,a),Tn=!1,h=e.memoizedState,o.state=h,wl(e,r,o,i);var v=e.memoizedState;l!==d||h!==v||nt.current||Tn?(typeof _=="function"&&(ac(e,n,_,r),v=e.memoizedState),(u=Tn||Af(e,n,u,r,h,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return hc(t,e,n,r,s,i)}function hc(t,e,n,r,i,s){f_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kf(e,n,!1),dn(t,e,s);r=e.stateNode,RE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,l,s)):qe(t,e,l,s),e.memoizedState=r.state,i&&kf(e,n,!0),e.child}function p_(t){var e=t.stateNode;e.pendingContext?Tf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tf(t,e.context,!1),Ed(t,e.containerInfo)}function Wf(t,e,n,r,i){return mi(),md(i),e.flags|=256,qe(t,e,n,r),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function pc(t){return{baseLanes:t,cachePool:null,transitions:null}}function m_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ge,i&1),t===null)return oc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ca(o,r,0,null),t=_r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pc(n),e.memoizedState=fc,t):Pd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=jn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=jn(l,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fc,r}return s=t.child,t=s.sibling,r=jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pd(t,e){return e=ca({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,r){return r!==null&&md(r),gi(e,t.child,null,n),t=Pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cu(Error(T(422))),bo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ca({mode:"visible",children:r.children},i,0,null),s=_r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,o),e.child.memoizedState=pc(o),e.memoizedState=fc,s);if(!(e.mode&1))return bo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(T(419)),r=cu(s,r,void 0),bo(t,e,o,r)}if(l=(o&t.childLanes)!==0,et||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cn(t,i),Dt(r,t,i,-1))}return Md(),r=cu(Error(T(421))),bo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=bn(i.nextSibling),dt=e,he=!0,Rt=null,t!==null&&(gt[_t++]=Zt,gt[_t++]=en,gt[_t++]=Er,Zt=t.id,en=t.overflow,Er=e),e=Pd(e,r.children),e.flags|=4096,e)}function Vf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lc(t.return,e,n)}function du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vf(t,n,e);else if(t.tag===19)Vf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}du(e,!0,n,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PE(t,e,n){switch(e.tag){case 3:p_(e),mi();break;case 5:Vg(e);break;case 1:rt(e.type)&&ml(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?m_(t,e,n):(ae(ge,ge.current&1),t=dn(t,e,n),t!==null?t.sibling:null);ae(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return dn(t,e,n)}var __,mc,v_,y_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mc=function(){};v_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dr(Vt.current);var s=null;switch(n){case"input":i=Fu(t,i),r=Fu(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=ju(t,i),r=ju(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Wu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cs.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ue("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function qi(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xE(t,e,n){var r=e.pendingProps;switch(pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(e),null;case 1:return rt(e.type)&&pl(),Ve(e),null;case 3:return r=e.stateNode,_i(),de(nt),de(Ge),Cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(Cc(Rt),Rt=null))),mc(t,e),Ve(e),null;case 5:Sd(e);var i=dr(Ms.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Ve(e),null}if(t=dr(Vt.current),Lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[Os]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)ue(ls[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Xh(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Zh(r,s),ue("invalid",r)}Wu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Oo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Oo(r.textContent,l,t),i=["children",""+l]):Cs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":To(r),Jh(r,s,!0);break;case"textarea":To(r),ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jt]=e,t[Os]=r,__(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vu(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)ue(ls[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Xh(t,r),i=Fu(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Zh(t,r),i=ju(t,r),ue("invalid",t);break;default:i=r}Wu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Qm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Km(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Is(t,a):typeof a=="number"&&Is(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ue("scroll",t):a!=null&&Zc(t,s,a,o))}switch(n){case"input":To(t),Jh(t,r,!1);break;case"textarea":To(t),ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ve(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=dr(Ms.current),dr(Vt.current),Lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=dt,t!==null))switch(t.tag){case 3:Oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return Ve(e),null;case 13:if(de(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&ct!==null&&e.mode&1&&!(e.flags&128))bg(),mi(),e.flags|=98560,s=!1;else if(s=Lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[jt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ve(e),s=!1}else Rt!==null&&(Cc(Rt),Rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Ae===0&&(Ae=3):Md())),e.updateQueue!==null&&(e.flags|=4),Ve(e),null);case 4:return _i(),mc(t,e),t===null&&As(e.stateNode.containerInfo),Ve(e),null;case 10:return vd(e.type._context),Ve(e),null;case 17:return rt(e.type)&&pl(),Ve(e),null;case 19:if(de(ge),s=e.memoizedState,s===null)return Ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qi(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,qi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>yi&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Ve(e),null}else 2*Ce()-s.renderingStartTime>yi&&n!==1073741824&&(e.flags|=128,r=!0,qi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ge.current,ae(ge,r?n&1|2:n&1),e):(Ve(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(Ve(e),e.subtreeFlags&6&&(e.flags|=8192)):Ve(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function AE(t,e){switch(pd(e),e.tag){case 1:return rt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(),de(nt),de(Ge),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(de(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ge),null;case 4:return _i(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Fo=!1,He=!1,DE=typeof WeakSet=="function"?WeakSet:Set,O=null;function Yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function gc(t,e,n){try{n()}catch(r){ye(t,e,r)}}var Hf=!1;function OE(t,e){if(Zu=cl,t=Cg(),hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ec={focusedElem:t,selectionRange:n},cl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,I=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:It(e.type,y),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(p){ye(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=Hf,Hf=!1,v}function ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gc(e,n,s)}i=i.next}while(i!==r)}}function aa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _c(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w_(t){var e=t.alternate;e!==null&&(t.alternate=null,w_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[Os],delete e[rc],delete e[mE],delete e[gE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function $f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(vc(t,e,n),t=t.sibling;t!==null;)vc(t,e,n),t=t.sibling}function yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}var Ue=null,Tt=!1;function Sn(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 5:He||Yr(n,e);case 6:var r=Ue,i=Tt;Ue=null,Sn(t,e,n),Ue=r,Tt=i,Ue!==null&&(Tt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Tt?(t=Ue,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),Ns(t)):iu(Ue,n.stateNode));break;case 4:r=Ue,i=Tt,Ue=n.stateNode.containerInfo,Tt=!0,Sn(t,e,n),Ue=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gc(n,e,o),i=i.next}while(i!==r)}Sn(t,e,n);break;case 1:if(!He&&(Yr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,e,l)}Sn(t,e,n);break;case 21:Sn(t,e,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Sn(t,e,n),He=r):Sn(t,e,n);break;default:Sn(t,e,n)}}function Gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DE),e.forEach(function(r){var i=WE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Tt=!1;break e;case 3:Ue=l.stateNode.containerInfo,Tt=!0;break e;case 4:Ue=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(Ue===null)throw Error(T(160));S_(s,o,i),Ue=null,Tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ye(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C_(e,t),e=e.sibling}function C_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),Ut(t),r&4){try{ps(3,t,t.return),aa(3,t)}catch(y){ye(t,t.return,y)}try{ps(5,t,t.return)}catch(y){ye(t,t.return,y)}}break;case 1:Ct(e,t),Ut(t),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Ct(e,t),Ut(t),r&512&&n!==null&&Yr(n,n.return),t.flags&32){var i=t.stateNode;try{Is(i,"")}catch(y){ye(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hm(i,s),Vu(l,o);var u=Vu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Qm(i,d):c==="dangerouslySetInnerHTML"?Km(i,d):c==="children"?Is(i,d):Zc(i,c,d,u)}switch(l){case"input":Uu(i,s);break;case"textarea":$m(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ti(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?ti(i,!!s.multiple,s.defaultValue,!0):ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[Os]=s}catch(y){ye(t,t.return,y)}}break;case 6:if(Ct(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ye(t,t.return,y)}}break;case 3:if(Ct(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ns(e.containerInfo)}catch(y){ye(t,t.return,y)}break;case 4:Ct(e,t),Ut(t);break;case 13:Ct(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dd=Ce())),r&4&&Gf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(He=(u=He)||c,Ct(e,t),He=u):Ct(e,t),Ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(h=O,_=h.child,h.tag){case 0:case 11:case 14:case 15:ps(4,h,h.return);break;case 1:Yr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ye(r,n,y)}}break;case 5:Yr(h,h.return);break;case 22:if(h.memoizedState!==null){qf(d);continue}}_!==null?(_.return=h,O=_):qf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=qm("display",o))}catch(y){ye(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ye(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ct(e,t),Ut(t),r&4&&Gf(t);break;case 21:break;default:Ct(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Is(i,""),r.flags&=-33);var s=$f(t);yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$f(t);vc(t,l,o);break;default:throw Error(T(161))}}catch(a){ye(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LE(t,e,n){O=t,I_(t)}function I_(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||He;l=Fo;var u=He;if(Fo=o,(He=a)&&!u)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?Qf(i):a!==null?(a.return=o,O=a):Qf(i);for(;s!==null;)O=s,I_(s),s=s.sibling;O=i,Fo=l,He=u}Kf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Kf(t)}}function Kf(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:He||aa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ns(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}He||e.flags&512&&_c(e)}catch(h){ye(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function qf(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Qf(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{aa(4,e)}catch(a){ye(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ye(e,i,a)}}var s=e.return;try{_c(e)}catch(a){ye(e,s,a)}break;case 5:var o=e.return;try{_c(e)}catch(a){ye(e,o,a)}}}catch(a){ye(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var ME=Math.ceil,Il=pn.ReactCurrentDispatcher,xd=pn.ReactCurrentOwner,yt=pn.ReactCurrentBatchConfig,X=0,Fe=null,ke=null,ze=0,ut=0,Xr=Jn(0),Ae=0,zs=null,Cr=0,ua=0,Ad=0,ms=null,Ze=null,Dd=0,yi=1/0,Xt=null,Tl=!1,wc=null,Un=null,Uo=!1,Dn=null,kl=0,gs=0,Ec=null,Jo=-1,Zo=0;function Ye(){return X&6?Ce():Jo!==-1?Jo:Jo=Ce()}function zn(t){return t.mode&1?X&2&&ze!==0?ze&-ze:vE.transition!==null?(Zo===0&&(Zo=lg()),Zo):(t=ee,t!==0||(t=window.event,t=t===void 0?16:pg(t.type)),t):1}function Dt(t,e,n,r){if(50<gs)throw gs=0,Ec=null,Error(T(185));no(t,n,r),(!(X&2)||t!==Fe)&&(t===Fe&&(!(X&2)&&(ua|=n),Ae===4&&Rn(t,ze)),it(t,r),n===1&&X===0&&!(e.mode&1)&&(yi=Ce()+500,sa&&Zn()))}function it(t,e){var n=t.callbackNode;vw(t,e);var r=ul(t,t===Fe?ze:0);if(r===0)n!==null&&rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rf(n),e===1)t.tag===0?_E(Yf.bind(null,t)):Og(Yf.bind(null,t)),fE(function(){!(X&6)&&Zn()}),n=null;else{switch(ag(r)){case 1:n=id;break;case 4:n=sg;break;case 16:n=al;break;case 536870912:n=og;break;default:n=al}n=D_(n,T_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function T_(t,e){if(Jo=-1,Zo=0,X&6)throw Error(T(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=ul(t,t===Fe?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rl(t,r);else{e=r;var i=X;X|=2;var s=R_();(Fe!==t||ze!==e)&&(Xt=null,yi=Ce()+500,gr(t,e));do try{UE();break}catch(l){k_(t,l)}while(1);_d(),Il.current=s,X=i,ke!==null?e=0:(Fe=null,ze=0,e=Ae)}if(e!==0){if(e===2&&(i=qu(t),i!==0&&(r=i,e=Sc(t,i))),e===1)throw n=zs,gr(t,0),Rn(t,r),it(t,Ce()),n;if(e===6)Rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!bE(i)&&(e=Rl(t,r),e===2&&(s=qu(t),s!==0&&(r=s,e=Sc(t,s))),e===1))throw n=zs,gr(t,0),Rn(t,r),it(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:or(t,Ze,Xt);break;case 3:if(Rn(t,r),(r&130023424)===r&&(e=Dd+500-Ce(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nc(or.bind(null,t,Ze,Xt),e);break}or(t,Ze,Xt);break;case 4:if(Rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-At(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ME(r/1960))-r,10<r){t.timeoutHandle=nc(or.bind(null,t,Ze,Xt),r);break}or(t,Ze,Xt);break;case 5:or(t,Ze,Xt);break;default:throw Error(T(329))}}}return it(t,Ce()),t.callbackNode===n?T_.bind(null,t):null}function Sc(t,e){var n=ms;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&Cc(e)),t}function Cc(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function bE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e){for(e&=~Ad,e&=~ua,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-At(e),r=1<<n;t[n]=-1,e&=~r}}function Yf(t){if(X&6)throw Error(T(327));oi();var e=ul(t,0);if(!(e&1))return it(t,Ce()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=qu(t);r!==0&&(e=r,n=Sc(t,r))}if(n===1)throw n=zs,gr(t,0),Rn(t,e),it(t,Ce()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,Ze,Xt),it(t,Ce()),null}function Od(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(yi=Ce()+500,sa&&Zn())}}function Ir(t){Dn!==null&&Dn.tag===0&&!(X&6)&&oi();var e=X;X|=1;var n=yt.transition,r=ee;try{if(yt.transition=null,ee=1,t)return t()}finally{ee=r,yt.transition=n,X=e,!(X&6)&&Zn()}}function Ld(){ut=Xr.current,de(Xr)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hE(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:_i(),de(nt),de(Ge),Cd();break;case 5:Sd(r);break;case 4:_i();break;case 13:de(ge);break;case 19:de(ge);break;case 10:vd(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(Fe=t,ke=t=jn(t.current,null),ze=ut=e,Ae=0,zs=null,Ad=ua=Cr=0,Ze=ms=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cr=null}return t}function k_(t,e){do{var n=ke;try{if(_d(),Qo.current=Cl,Sl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(Sr=0,Le=Ne=_e=null,fs=!1,bs=0,xd.current=null,n===null||n.return===null){Ae=1,zs=e,ke=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ze,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Ff(o);if(_!==null){_.flags&=-257,Uf(_,o,l,s,e),_.mode&1&&bf(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){bf(s,u,e),Md();break e}a=Error(T(426))}}else if(he&&l.mode&1){var I=Ff(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Uf(I,o,l,s,e),md(vi(a,l));break e}}s=a=vi(a,l),Ae!==4&&(Ae=2),ms===null?ms=[s]:ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=u_(s,a,e);Pf(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Un===null||!Un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=c_(s,l,e);Pf(s,p);break e}}s=s.return}while(s!==null)}P_(n)}catch(C){e=C,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function R_(){var t=Il.current;return Il.current=Cl,t===null?Cl:t}function Md(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Fe===null||!(Cr&268435455)&&!(ua&268435455)||Rn(Fe,ze)}function Rl(t,e){var n=X;X|=2;var r=R_();(Fe!==t||ze!==e)&&(Xt=null,gr(t,e));do try{FE();break}catch(i){k_(t,i)}while(1);if(_d(),X=n,Il.current=r,ke!==null)throw Error(T(261));return Fe=null,ze=0,Ae}function FE(){for(;ke!==null;)N_(ke)}function UE(){for(;ke!==null&&!uw();)N_(ke)}function N_(t){var e=A_(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?P_(t):ke=e,xd.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AE(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,ke=null;return}}else if(n=xE(n,e,ut),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ae===0&&(Ae=5)}function or(t,e,n){var r=ee,i=yt.transition;try{yt.transition=null,ee=1,zE(t,e,n,r)}finally{yt.transition=i,ee=r}return null}function zE(t,e,n,r){do oi();while(Dn!==null);if(X&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yw(t,s),t===Fe&&(ke=Fe=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,D_(al,function(){return oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=ee;ee=1;var l=X;X|=4,xd.current=null,OE(t,n),C_(n,t),sE(ec),cl=!!Zu,ec=Zu=null,t.current=n,LE(n),cw(),X=l,ee=o,yt.transition=s}else t.current=n;if(Uo&&(Uo=!1,Dn=t,kl=i),s=t.pendingLanes,s===0&&(Un=null),fw(n.stateNode),it(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tl)throw Tl=!1,t=wc,wc=null,t;return kl&1&&t.tag!==0&&oi(),s=t.pendingLanes,s&1?t===Ec?gs++:(gs=0,Ec=t):gs=0,Zn(),null}function oi(){if(Dn!==null){var t=ag(kl),e=yt.transition,n=ee;try{if(yt.transition=null,ee=16>t?16:t,Dn===null)var r=!1;else{if(t=Dn,Dn=null,kl=0,X&6)throw Error(T(331));var i=X;for(X|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:ps(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var h=c.sibling,_=c.return;if(w_(c),c===u){O=null;break}if(h!==null){h.return=_,O=h;break}O=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ps(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:aa(9,l)}}catch(C){ye(l,l.return,C)}if(l===o){O=null;break e}var p=l.sibling;if(p!==null){p.return=l.return,O=p;break e}O=l.return}}if(X=i,Zn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(ea,t)}catch{}r=!0}return r}finally{ee=n,yt.transition=e}}return!1}function Xf(t,e,n){e=vi(n,e),e=u_(t,e,1),t=Fn(t,e,1),e=Ye(),t!==null&&(no(t,1,e),it(t,e))}function ye(t,e,n){if(t.tag===3)Xf(t,t,n);else for(;e!==null;){if(e.tag===3){Xf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=vi(n,t),t=c_(e,t,1),e=Fn(e,t,1),t=Ye(),e!==null&&(no(e,1,t),it(e,t));break}}e=e.return}}function jE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(ze&n)===n&&(Ae===4||Ae===3&&(ze&130023424)===ze&&500>Ce()-Dd?gr(t,0):Ad|=n),it(t,e)}function x_(t,e){e===0&&(t.mode&1?(e=No,No<<=1,!(No&130023424)&&(No=4194304)):e=1);var n=Ye();t=cn(t,e),t!==null&&(no(t,e,n),it(t,n))}function BE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x_(t,n)}function WE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),x_(t,n)}var A_;A_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,PE(t,e,n);et=!!(t.flags&131072)}else et=!1,he&&e.flags&1048576&&Lg(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xo(t,e),t=e.pendingProps;var i=pi(e,Ge.current);si(e,n),i=Td(null,e,r,t,i,n);var s=kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rt(r)?(s=!0,ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wd(e),i.updater=oa,e.stateNode=i,i._reactInternals=e,uc(e,r,t,n),e=hc(null,e,r,!0,s,n)):(e.tag=0,he&&s&&fd(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HE(r),t=It(r,t),i){case 0:e=dc(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=zf(null,e,r,t,n);break e;case 14:e=jf(null,e,r,It(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),dc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Bf(t,e,r,i,n);case 3:e:{if(p_(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ug(t,e),wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(T(423)),e),e=Wf(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(T(424)),e),e=Wf(t,e,r,n,i);break e}else for(ct=bn(e.stateNode.containerInfo.firstChild),dt=e,he=!0,Rt=null,n=Wg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=dn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Vg(e),t===null&&oc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tc(r,i)?o=null:s!==null&&tc(r,s)&&(e.flags|=32),f_(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&oc(e),null;case 13:return m_(t,e,n);case 4:return Ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),zf(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(vl,r._currentValue),r._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===i.children&&!nt.current){e=dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=sn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),lc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,si(e,n),i=wt(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),jf(t,e,r,i,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Xo(t,e),e.tag=1,rt(r)?(t=!0,ml(e)):t=!1,si(e,n),jg(e,r,i),uc(e,r,i,n),hc(null,e,r,!0,t,n);case 19:return g_(t,e,n);case 22:return h_(t,e,n)}throw Error(T(156,e.tag))};function D_(t,e){return ig(t,e)}function VE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new VE(t,e,n,r)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HE(t){if(typeof t=="function")return bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===td)return 11;if(t===nd)return 14}return 2}function jn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return _r(n.children,i,s,e);case ed:o=8,i|=8;break;case Ou:return t=vt(12,n,e,i|2),t.elementType=Ou,t.lanes=s,t;case Lu:return t=vt(13,n,e,i),t.elementType=Lu,t.lanes=s,t;case Mu:return t=vt(19,n,e,i),t.elementType=Mu,t.lanes=s,t;case Bm:return ca(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zm:o=10;break e;case jm:o=9;break e;case td:o=11;break e;case nd:o=14;break e;case In:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _r(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function ca(t,e,n,r){return t=vt(22,t,r,e),t.elementType=Bm,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,i,s,o,l,a){return t=new $E(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function GE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return Kn;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(rt(n))return Dg(t,n,e)}return e}function L_(t,e,n,r,i,s,o,l,a){return t=Fd(n,r,!0,t,i,s,o,l,a),t.context=O_(null),n=t.current,r=Ye(),i=zn(n),s=sn(r,i),s.callback=e??null,Fn(n,s,i),t.current.lanes=i,no(t,i,r),it(t,r),t}function da(t,e,n,r){var i=e.current,s=Ye(),o=zn(i);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fn(i,e,o),t!==null&&(Dt(t,i,o,s),qo(t,i,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){Jf(t,e),(t=t.alternate)&&Jf(t,e)}function KE(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}ha.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));da(t,e,null,null)};ha.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){da(null,t,null,null)}),e[un]=null}};function ha(t){this._internalRoot=t}ha.prototype.unstable_scheduleHydration=function(t){if(t){var e=dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&fg(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zf(){}function qE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Nl(o);s.call(u)}}var o=L_(e,r,t,0,null,!1,!1,"",Zf);return t._reactRootContainer=o,t[un]=o.current,As(t.nodeType===8?t.parentNode:t),Ir(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Nl(a);l.call(u)}}var a=Fd(t,0,!1,null,null,!1,!1,"",Zf);return t._reactRootContainer=a,t[un]=a.current,As(t.nodeType===8?t.parentNode:t),Ir(function(){da(e,a,n,r)}),a}function pa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Nl(o);l.call(a)}}da(e,o,t,i)}else o=qE(n,e,t,i,r);return Nl(o)}ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(sd(e,n|1),it(e,Ce()),!(X&6)&&(yi=Ce()+500,Zn()))}break;case 13:Ir(function(){var r=cn(t,1);if(r!==null){var i=Ye();Dt(r,t,1,i)}}),Ud(t,1)}};od=function(t){if(t.tag===13){var e=cn(t,134217728);if(e!==null){var n=Ye();Dt(e,t,134217728,n)}Ud(t,134217728)}};cg=function(t){if(t.tag===13){var e=zn(t),n=cn(t,e);if(n!==null){var r=Ye();Dt(n,t,e,r)}Ud(t,e)}};dg=function(){return ee};hg=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};$u=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ia(r);if(!i)throw Error(T(90));Vm(r),Uu(r,i)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};Jm=Od;Zm=Ir;var QE={usingClientEntryPoint:!1,Events:[io,$r,ia,Ym,Xm,Od]},Qi={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YE={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ng(t),t===null?null:t.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{ea=zo.inject(YE),Wt=zo}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(T(200));return GE(t,e,null,n)};ft.createRoot=function(t,e){if(!jd(t))throw Error(T(299));var n=!1,r="",i=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,i),t[un]=e.current,As(t.nodeType===8?t.parentNode:t),new zd(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=ng(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return Ir(t)};ft.hydrate=function(t,e,n){if(!fa(e))throw Error(T(200));return pa(null,t,e,!0,n)};ft.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,i,!1,s,o),t[un]=e.current,As(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ha(e)};ft.render=function(t,e,n){if(!fa(e))throw Error(T(200));return pa(null,t,e,!1,n)};ft.unmountComponentAtNode=function(t){if(!fa(t))throw Error(T(40));return t._reactRootContainer?(Ir(function(){pa(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1};ft.unstable_batchedUpdates=Od;ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fa(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return pa(t,e,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),Lm.exports=ft;var XE=Lm.exports,ep=XE;Au.createRoot=ep.createRoot,Au.hydrateRoot=ep.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw Ai(e)},Ai=function(t){return new Error("Firebase Database ("+F_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new ZE;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z_=function(t){const e=U_(t);return Bd.encodeByteArray(e,!0)},Pl=function(t){return z_(t).replace(/\./g,"")},xl=function(t){try{return Bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t){return j_(void 0,t)}function j_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tS(n)||(t[n]=j_(t[n],e[n]));return t}function tS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=()=>nS().__FIREBASE_DEFAULTS__,iS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xl(t[1]);return e&&JSON.parse(e)},Wd=()=>{try{return rS()||iS()||sS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=Wd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oS=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},W_=()=>{var t;return(t=Wd())===null||t===void 0?void 0:t.config},V_=t=>{var e;return(e=Wd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Pl(JSON.stringify(n)),Pl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function aS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $_(){return F_.NODE_ADMIN===!0}function cS(){try{return typeof indexedDB=="object"}catch{return!1}}function dS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hS,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new er(i,l,r)}}function fS(t,e){return t.replace(pS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=js(xl(s[0])||""),n=js(xl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},mS=function(t){const e=G_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gS=function(t){const e=G_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ic(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tp(s)&&tp(o)){if(!Dl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function vS(t,e){const n=new yS(t,e);return n.subscribe.bind(n)}class yS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pu),i.error===void 0&&(i.error=pu),i.complete===void 0&&(i.complete=pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pu(){}function Hd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ga=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ma;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IS(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(t){return t===lr?void 0:t}function IS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const kS={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},RS=ne.INFO,NS={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},PS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=RS,this._logHandler=PS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const xS=(t,e)=>e.some(n=>t instanceof n);let np,rp;function AS(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DS(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K_=new WeakMap,Tc=new WeakMap,q_=new WeakMap,mu=new WeakMap,Gd=new WeakMap;function OS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K_.set(n,t)}).catch(()=>{}),Gd.set(e,t),e}function LS(t){if(Tc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MS(t){kc=t(kc)}function bS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gu(this),e,...n);return q_.set(r,e.sort?e.sort():[e]),Bn(r)}:DS().includes(t)?function(...e){return t.apply(gu(this),e),Bn(K_.get(this))}:function(...e){return Bn(t.apply(gu(this),e))}}function FS(t){return typeof t=="function"?bS(t):(t instanceof IDBTransaction&&LS(t),xS(t,AS())?new Proxy(t,kc):t)}function Bn(t){if(t instanceof IDBRequest)return OS(t);if(mu.has(t))return mu.get(t);const e=FS(t);return e!==t&&(mu.set(t,e),Gd.set(e,t)),e}const gu=t=>Gd.get(t);function US(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Bn(o.result),a.oldVersion,a.newVersion,Bn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const zS=["get","getKey","getAll","getAllKeys","count"],jS=["put","add","delete","clear"],_u=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_u.get(e))return _u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return _u.set(e,s),s}MS(t=>({...t,get:(e,n,r)=>ip(e,n)||t.get(e,n,r),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",sp="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new $d("@firebase/app"),VS="@firebase/app-compat",HS="@firebase/analytics-compat",$S="@firebase/analytics",GS="@firebase/app-check-compat",KS="@firebase/app-check",qS="@firebase/auth",QS="@firebase/auth-compat",YS="@firebase/database",XS="@firebase/database-compat",JS="@firebase/functions",ZS="@firebase/functions-compat",eC="@firebase/installations",tC="@firebase/installations-compat",nC="@firebase/messaging",rC="@firebase/messaging-compat",iC="@firebase/performance",sC="@firebase/performance-compat",oC="@firebase/remote-config",lC="@firebase/remote-config-compat",aC="@firebase/storage",uC="@firebase/storage-compat",cC="@firebase/firestore",dC="@firebase/firestore-compat",hC="firebase",fC="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",pC={[Rc]:"fire-core",[VS]:"fire-core-compat",[$S]:"fire-analytics",[HS]:"fire-analytics-compat",[KS]:"fire-app-check",[GS]:"fire-app-check-compat",[qS]:"fire-auth",[QS]:"fire-auth-compat",[YS]:"fire-rtdb",[XS]:"fire-rtdb-compat",[JS]:"fire-fn",[ZS]:"fire-fn-compat",[eC]:"fire-iid",[tC]:"fire-iid-compat",[nC]:"fire-fcm",[rC]:"fire-fcm-compat",[iC]:"fire-perf",[sC]:"fire-perf-compat",[oC]:"fire-rc",[lC]:"fire-rc-compat",[aC]:"fire-gcs",[uC]:"fire-gcs-compat",[cC]:"fire-fst",[dC]:"fire-fst-compat","fire-js":"fire-js",[hC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map,Pc=new Map;function mC(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(Pc.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of Ol.values())mC(n,t);return!0}function Kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new oo("app","Firebase",gC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=fC;function Q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=W_()),!n)throw Wn.create("no-options");const s=Ol.get(i);if(s){if(Dl(n,s.options)&&Dl(r,s.config))return s;throw Wn.create("duplicate-app",{appName:i})}const o=new TS(i);for(const a of Pc.values())o.addComponent(a);const l=new _C(n,r,o);return Ol.set(i,l),l}function Y_(t=Nc){const e=Ol.get(t);if(!e&&t===Nc&&W_())return Q_();if(!e)throw Wn.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let i=(r=pC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(l.join(" "));return}Ei(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="firebase-heartbeat-database",yC=1,Bs="firebase-heartbeat-store";let vu=null;function X_(){return vu||(vu=US(vC,yC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bs)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),vu}async function wC(t){try{return await(await X_()).transaction(Bs).objectStore(Bs).get(J_(t))}catch(e){if(e instanceof er)kr.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function op(t,e){try{const r=(await X_()).transaction(Bs,"readwrite");await r.objectStore(Bs).put(e,J_(t)),await r.done}catch(n){if(n instanceof er)kr.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=1024,SC=30*24*60*60*1e3;class CC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=SC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lp(),{heartbeatsToSend:n,unsentEntries:r}=IC(this._heartbeatsCache.heartbeats),i=Pl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lp(){return new Date().toISOString().substring(0,10)}function IC(t,e=EC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ap(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cS()?dS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ap(t){return Pl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t){Ei(new Tr("platform-logger",e=>new BS(e),"PRIVATE")),Ei(new Tr("heartbeat",e=>new CC(e),"PRIVATE")),Vn(Rc,sp,t),Vn(Rc,sp,"esm2017"),Vn("fire-js","")}kC("");var RC="firebase",NC="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(RC,NC,"app");const up="@firebase/database",cp="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_="";function PC(t){Z_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:js(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xC(e)}}catch{}return new AC},hr=ev("localStorage"),xc=ev("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new $d("@firebase/database"),DC=function(){let t=1;return function(){return t++}}(),tv=function(t){const e=ES(t),n=new _S;n.update(e);const r=n.digest();return Bd.encodeByteArray(r)},lo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=lo.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let vr=null,dp=!0;const OC=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(li.logLevel=ne.VERBOSE,vr=li.log.bind(li),e&&xc.set("logging_enabled",!0)):typeof t=="function"?vr=t:(vr=null,xc.remove("logging_enabled"))},$e=function(...t){if(dp===!0&&(dp=!1,vr===null&&xc.get("logging_enabled")===!0&&OC(!0)),vr){const e=lo.apply(null,t);vr(e)}},ao=function(t){return function(...e){$e(t,...e)}},Ac=function(...t){const e="FIREBASE INTERNAL ERROR: "+lo(...t);li.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${lo(...t)}`;throw li.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+lo(...t);li.warn(e)},LC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Rr="[MAX_NAME]",Li=function(t,e){if(t===e)return 0;if(t===Si||e===Rr)return-1;if(e===Si||t===Rr)return 1;{const n=hp(t),r=hp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bC=function(t,e){return t===e?0:t<e?-1:1},Yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},qd=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=qd(t[e[r]]);return n+="}",n},rv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iv=function(t){k(!nv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},FC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jC=new RegExp("^-?(0*)\\d{1,10}$"),BC=-2147483648,WC=2147483647,hp=function(t){if(jC.test(t)){const e=Number(t);if(e>=BC&&e<=WC)return e}return null},Mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},VC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class ai{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ai.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="5",sv="v",ov="s",lv="r",av="f",uv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cv="ls",dv="p",Dc="ac",hv="websocket",fv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mv(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===hv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GC(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.counters_={}}incrementCounter(e,n=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu={},wu={};function Yd(t){const e=t.toString();return yu[e]||(yu[e]=new KC),yu[e]}function qC(t,e){const n=t.toString();return wu[n]||(wu[n]=e()),wu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Mi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="start",YC="close",XC="pLPCommand",JC="pRTLPCB",gv="id",_v="pw",vv="ser",ZC="cb",eI="seg",tI="ts",nI="d",rI="dframe",yv=1870,wv=30,iI=yv-wv,sI=25e3,oI=3e4;class Jr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ao(e),this.stats_=Yd(n),this.urlFn=a=>(this.appCheckToken&&(a[Dc]=this.appCheckToken),mv(n,fv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oI)),MC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fp)this.id=l,this.password=a;else if(o===YC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[fp]="t",r[vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[sv]=Qd,this.transportSessionId&&(r[ov]=this.transportSessionId),this.lastSessionId&&(r[cv]=this.lastSessionId),this.applicationId&&(r[dv]=this.applicationId),this.appCheckToken&&(r[Dc]=this.appCheckToken),typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(r[lv]=av);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!FC()&&!UC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=z_(n),i=rv(r,iI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[rI]="t",r[gv]=e,r[_v]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=DC(),window[XC+this.uniqueCallbackIdentifier]=e,window[JC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){$e("frame writing exception"),l.stack&&$e(l.stack),$e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gv]=this.myID,e[_v]=this.myPW,e[vv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wv+r.length<=yv;){const o=this.pendingSegs.shift();r=r+"&"+eI+i+"="+o.seg+"&"+tI+i+"="+o.ts+"&"+nI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(sI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=16384,aI=45e3;let Ll=null;typeof MozWebSocket<"u"?Ll=MozWebSocket:typeof WebSocket<"u"&&(Ll=WebSocket);class Nt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ao(this.connId),this.stats_=Yd(n),this.connURL=Nt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[sv]=Qd,typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(o[lv]=av),n&&(o[ov]=n),r&&(o[cv]=r),i&&(o[Dc]=i),s&&(o[dv]=s),mv(e,hv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hr.set("previous_websocket_failure",!0);try{let r;$_(),this.mySock=new Ll(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ll!==null&&!Nt.forceDisallow_}static previouslyFailed(){return hr.isInMemoryStorage||hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=js(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rv(n,lI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jr,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nt&&Nt.isAvailable();let r=n&&!Nt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nt];else{const i=this.transports_=[];for(const s of Ws.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ws.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ws.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=6e4,cI=5e3,dI=10*1024,hI=100*1024,Eu="t",pp="d",fI="s",mp="r",pI="e",gp="o",_p="a",vp="n",yp="p",mI="h";class gI{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ao("c:"+this.id+":"),this.transportManager_=new Ws(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Eu in e){const n=e[Eu];n===_p?this.upgradeIfSecondaryHealthy_():n===mp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_p,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yi(Eu,e);if(pp in e){const r=e[pp];if(n===mI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fI?this.onConnectionShutdown_(r):n===mp?this.onReset_(r):n===pI?Ac("Server Error: "+r):n===gp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qd!==r&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Sv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ml}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=32,Ep=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ie("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function Cv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _I(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Iv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ie(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return Qe(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kv(t,e){if(qn(t)!==qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qn(t)>qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class vI{constructor(e,n){this.errorPrefix_=n,this.parts_=Iv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ga(this.parts_[r]);Rv(this)}}function yI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ga(e),Rv(t)}function wI(t){const e=t.parts_.pop();t.byteLength_-=ga(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rv(t){if(t.byteLength_>Ep)throw new Error(t.errorPrefix_+"has a key path longer than "+Ep+" bytes ("+t.byteLength_+").");if(t.parts_.length>wp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wp+") or object contains a cycle "+ar(t))}function ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Sv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Jd}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=1e3,EI=60*5*1e3,Sp=30*1e3,SI=1.3,CI=3e4,II="server_kill",Cp=3;class on extends Ev{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=on.nextPersistentConnectionId_++,this.log_=ao("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xi,this.maxReconnectDelay_=EI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ml.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ma,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;on.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mn(e,"w")){const r=wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ac("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CI&&(this.reconnectDelay_=Xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new gI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{st(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(II)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&st(d),a())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ic(this.interruptReasons_)&&(this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>qd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){$e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cp&&(this.reconnectDelay_=Sp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Z_.replace(/\./g,"-")]=1,Vd()?e["framework.cordova"]=1:H_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ml.getInstance().currentlyOnline();return Ic(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(Si,e),i=new G(Si,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class Nv extends _a{static get __EMPTY_NODE(){return jo}static set __EMPTY_NODE(e){jo=e}compare(e,n){return Li(e.name,n.name)}isDefinedOn(e){throw Ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Rr,jo)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,jo)}toString(){return".key"}}const ui=new Nv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??tt.EMPTY_NODE,this.right=s??tt.EMPTY_NODE}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class TI{copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tt{constructor(e,n=tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bo(this.root_,null,this.comparator_,!0,e)}}tt.EMPTY_NODE=new TI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){return Li(t.name,e.name)}function Zd(t,e){return Li(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc;function RI(t){Oc=t}const Pv=function(t){return typeof t=="number"?"number:"+iv(t):"string:"+t},xv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else k(t===Oc||t.isEmpty(),"priority of unexpected type.");k(t===Oc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ip;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ip=e}static get __childrenNodeConstructor(){return Ip}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:Q(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iv(this.value_):e+=this.value_,this.lazyHash_=tv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),s=Oe.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av,Dv;function NI(t){Av=t}function PI(t){Dv=t}class xI extends _a{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Li(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Rr,new Oe("[PRIORITY-POST]",Dv))}makePost(e,n){const r=Av(e);return new G(n,new Oe("[PRIORITY-POST]",r))}toString(){return".priority"}}const we=new xI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=Math.log(2);class DI{constructor(e){const n=s=>parseInt(Math.log(s)/AI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new Me(h,d.node,Me.BLACK,null,null);{const _=parseInt(c/2,10)+a,v=i(a,_),y=i(_+1,u);return d=t[_],h=n?n(d):d,new Me(h,d.node,Me.BLACK,v,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(v,y){const I=d-v,m=d;d-=v;const f=i(I+1,m),g=t[I],p=n?n(g):g;_(new Me(p,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),I=Math.pow(2,a.count-(v+1));y?h(I,Me.BLACK):(h(I,Me.BLACK),h(I,Me.RED))}return c},o=new DI(t.length),l=s(o);return new tt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;const Ur={};class tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Ur&&we,"ChildrenNode.ts has not been loaded"),Su=Su||new tn({".priority":Ur},{".priority":we}),Su}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tt?n:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=bl(r,e.getCompare()):l=Ur;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new tn(c,u)}addToIndexes(e,n){const r=Al(this.indexes_,(i,s)=>{const o=wi(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Ur)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(G.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),bl(l,o.getCompare())}else return Ur;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new G(e.name,l))),a.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Al(this.indexes_,i=>{if(i===Ur)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&xv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ji||(Ji=new F(new tt(Zd),null,tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ji}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ji:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ji:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{k(Q(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(we,(o,l)=>{n[o]=l.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pv(this.getPriority().val())+":"),this.forEachChild(we,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uo?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(we),i=n.getIterator(we);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OI extends F{constructor(){super(new tt(Zd),F.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const uo=new OI;Object.defineProperties(G,{MIN:{value:new G(Si,F.EMPTY_NODE)},MAX:{value:new G(Rr,uo)}});Nv.__EMPTY_NODE=F.EMPTY_NODE;Oe.__childrenNodeConstructor=F;RI(uo);PI(uo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=!0;function be(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,be(e))}if(!(t instanceof Array)&&LI){const n=[];let r=!1;if(ot(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=be(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new G(o,a)))}}),n.length===0)return F.EMPTY_NODE;const s=bl(n,kI,o=>o.name,Zd);if(r){const o=bl(n,we.getCompare());return new F(s,be(e),new tn({".priority":o},{".priority":we}))}else return new F(s,be(e),tn.Default)}else{let n=F.EMPTY_NODE;return ot(t,(r,i)=>{if(mn(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}NI(be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI extends _a{constructor(e){super(),this.indexPath_=e,k(!q(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Li(e.name,n.name):s}makePost(e,n){const r=be(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,uo);return new G(Rr,e)}toString(){return Iv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI extends _a{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Li(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=be(e);return new G(n,r)}toString(){return".value"}}const FI=new bI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){return{type:"value",snapshotNode:t}}function Ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Vs(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ci(n,r)):o.trackChildChange(Hs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(we,(i,s)=>{n.hasChild(i)||r.trackChildChange(Vs(i,s))}),n.isLeafNode()||n.forEachChild(we,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Hs(i,s,o))}else r.trackChildChange(Ci(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.indexedFilter_=new eh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(we,(o,l)=>{s.matches(new G(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new G(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Hs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Vs(n,d));const y=l.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ci(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Vs(u.name,u.node)),s.trackChildChange(Ci(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new th;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jI(t){return t.loadsAllData()?new eh(t.getIndex()):t.hasLimit()?new zI(t):new $s(t)}function Tp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===FI?n="$value":t.index_===ui?n="$key":(k(t.index_ instanceof MI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Ev{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ao("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Tp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),wi(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Fl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Tp(e._queryParams),r=e._path.toString(),i=new ma;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Di(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=js(l.responseText)}catch{st("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return{value:null,children:new Map}}function Lv(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,Ul());const i=t.children.get(r);e=le(e),Lv(i,e,n)}}function Lc(t,e,n){t.value!==null?n(e,t.value):WI(t,(r,i)=>{const s=new ie(e.toString()+"/"+r);Lc(i,s,n)})}function WI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=10*1e3,HI=30*1e3,$I=5*60*1e3;class GI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VI(e);const r=Rp+(HI-Rp)*Math.random();_s(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*$I))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function Mv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xt.ACK_USER_WRITE,this.source=Mv()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new zl(Z(),n,this.revert)}}else return k(Q(this.path)===e,"operationForChild called for unrelated child."),new zl(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Gs(this.source,Z()):new Gs(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xt.OVERWRITE}operationForChild(e){return q(this.path)?new Nr(this.source,Z(),this.snap.getImmediateChild(e)):new Nr(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Nr(this.source,Z(),n.value):new Ks(this.source,Z(),n)}else return k(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ks(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(UI(o.childName,o.snapshotNode))}),Zi(t,i,"child_removed",e,r,n),Zi(t,i,"child_added",e,r,n),Zi(t,i,"child_moved",s,r,n),Zi(t,i,"child_changed",e,r,n),Zi(t,i,"value",e,r,n),i}function Zi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>YI(t,l,a)),o.forEach(l=>{const a=QI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function QI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YI(t,e,n){if(e.childName==null||n.childName==null)throw Ai("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t,e){return{eventCache:t,serverCache:e}}function vs(t,e,n,r){return va(new Qn(e,n,r),t.serverCache)}function bv(t,e,n,r){return va(t.eventCache,new Qn(e,n,r))}function jl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;const XI=()=>(Cu||(Cu=new tt(bC)),Cu);class ce{constructor(e,n=XI()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return ot(e,(r,i)=>{n=n.set(new ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:xe(new ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new ce(null)}}set(e,n){if(q(e))return new ce(n,this.children);{const r=Q(e),s=(this.children.get(r)||new ce(null)).set(le(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(q(e))return n;{const r=Q(e),s=(this.children.get(r)||new ce(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(le(e),xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),xe(n,i),r):new ce(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new ce(null))}}function ys(t,e,n){if(q(e))return new Ot(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Qe(i,e);return s=s.updateChild(o,n),new Ot(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new Ot(s)}}}function Np(t,e,n){let r=t;return ot(n,(i,s)=>{r=ys(r,xe(e,i),s)}),r}function Pp(t,e){if(q(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Ot(n)}}function Mc(t,e){return Lr(t,e)!=null}function Lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function xp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function Hn(t,e){if(q(e))return t;{const n=Lr(t,e);return n!=null?new Ot(new ce(n)):new Ot(t.writeTree_.subtree(e))}}function bc(t){return t.writeTree_.isEmpty()}function Ii(t,e){return Fv(Z(),t.writeTree_,e)}function Fv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Fv(xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e){return Bv(e,t)}function JI(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ys(t.visibleWrites,e,n)),t.lastWriteId=r}function ZI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function eT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&tT(l,r.path)?i=!1:Pt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return nT(t),!0;if(r.snap)t.visibleWrites=Pp(t.visibleWrites,r.path);else{const l=r.children;ot(l,a=>{t.visibleWrites=Pp(t.visibleWrites,xe(r.path,a))})}return!0}else return!1}function tT(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(xe(t.path,n),e))return!0;return!1}function nT(t){t.visibleWrites=Uv(t.allWrites,rT,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rT(t){return t.visible}function Uv(t,e,n){let r=Ot.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Pt(n,o)?(l=Qe(n,o),r=ys(r,l,s.snap)):Pt(o,n)&&(l=Qe(o,n),r=ys(r,Z(),s.snap.getChild(l)));else if(s.children){if(Pt(n,o))l=Qe(n,o),r=Np(r,l,s.children);else if(Pt(o,n))if(l=Qe(o,n),q(l))r=Np(r,Z(),s.children);else{const a=wi(s.children,Q(l));if(a){const u=a.getChild(le(l));r=ys(r,Z(),u)}}}else throw Ai("WriteRecord should have .snap or .children")}}return r}function zv(t,e,n,r,i){if(!r&&!i){const s=Lr(t.visibleWrites,e);if(s!=null)return s;{const o=Hn(t.visibleWrites,e);if(bc(o))return n;if(n==null&&!Mc(o,Z()))return null;{const l=n||F.EMPTY_NODE;return Ii(o,l)}}}else{const s=Hn(t.visibleWrites,e);if(!i&&bc(s))return n;if(!i&&n==null&&!Mc(s,Z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Pt(u.path,e)||Pt(e,u.path))},l=Uv(t.allWrites,o,e),a=n||F.EMPTY_NODE;return Ii(l,a)}}}function iT(t,e,n){let r=F.EMPTY_NODE;const i=Lr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Hn(t.visibleWrites,e);return n.forEachChild(we,(o,l)=>{const a=Ii(Hn(s,new ie(o)),l);r=r.updateImmediateChild(o,a)}),xp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Hn(t.visibleWrites,e);return xp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function sT(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=xe(e,n);if(Mc(t.visibleWrites,s))return null;{const o=Hn(t.visibleWrites,s);return bc(o)?i.getChild(n):Ii(o,i.getChild(n))}}function oT(t,e,n,r){const i=xe(e,n),s=Lr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Hn(t.visibleWrites,i);return Ii(o,r.getNode().getImmediateChild(n))}else return null}function lT(t,e){return Lr(t.visibleWrites,e)}function aT(t,e,n,r,i,s,o){let l;const a=Hn(t.visibleWrites,e),u=Lr(a,Z());if(u!=null)l=u;else if(n!=null)l=Ii(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function uT(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Bl(t,e,n,r){return zv(t.writeTree,t.treePath,e,n,r)}function ih(t,e){return iT(t.writeTree,t.treePath,e)}function Ap(t,e,n,r){return sT(t.writeTree,t.treePath,e,n,r)}function Wl(t,e){return lT(t.writeTree,xe(t.treePath,e))}function cT(t,e,n,r,i,s){return aT(t.writeTree,t.treePath,e,n,r,i,s)}function sh(t,e,n){return oT(t.writeTree,t.treePath,e,n)}function jv(t,e){return Bv(xe(t.treePath,e),t.writeTree)}function Bv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Hs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Vs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ci(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Hs(r,e.snapshotNode,i.oldSnap));else throw Ai("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Wv=new hT;class oh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),s=cT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){return{filter:t}}function pT(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mT(t,e,n,r,i){const s=new dT;let o,l;if(n.type===xt.OVERWRITE){const u=n;u.source.fromUser?o=Fc(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!q(u.path),o=Vl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===xt.MERGE){const u=n;u.source.fromUser?o=_T(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Uc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===xt.ACK_USER_WRITE){const u=n;u.revert?o=wT(t,e,u.path,r,i,s):o=vT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===xt.LISTEN_COMPLETE)o=yT(t,e,n.path,r,s);else throw Ai("Unknown operation type: "+n.type);const a=s.getChanges();return gT(e,o,a),{viewCache:o,changes:a}}function gT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=jl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ov(jl(e)))}}function Vv(t,e,n,r,i,s){const o=e.eventCache;if(Wl(r,n)!=null)return e;{let l,a;if(q(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pr(e),c=u instanceof F?u:F.EMPTY_NODE,d=ih(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Bl(r,Pr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Q(n);if(u===".priority"){k(qn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Ap(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=le(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Ap(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=sh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return vs(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Vl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(q(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=Q(n);if(!a.isCompleteForPath(n)&&qn(n)>1)return e;const v=le(n),I=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=c.updatePriority(a.getNode(),I):u=c.updateChild(a.getNode(),_,I,v,Wv,null)}const d=bv(e,u,a.isFullyInitialized()||q(n),c.filtersNodes()),h=new oh(i,d,s);return Vv(t,d,n,i,h,l)}function Fc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new oh(i,e,s);if(q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=vs(e,u,!0,t.filter.filtersNodes());else{const d=Q(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=vs(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=le(n),_=l.getNode().getImmediateChild(d);let v;if(q(h))v=r;else{const y=c.getCompleteChild(d);y!=null?Cv(h)===".priority"&&y.getChild(Tv(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=F.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,h,c,o);a=vs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Dp(t,e){return t.eventCache.isCompleteForChild(e)}function _T(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=xe(n,a);Dp(e,Q(c))&&(l=Fc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=xe(n,a);Dp(e,Q(c))||(l=Fc(t,l,c,u,i,s,o))}),l}function Op(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Uc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;q(n)?u=r:u=new ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=Op(t,_,h);a=Vl(t,a,new ie(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=Op(t,v,h);a=Vl(t,a,new ie(d),y,i,s,o,l)}}),a}function vT(t,e,n,r,i,s,o){if(Wl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Vl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(q(n)){let u=new ce(null);return a.getNode().forEachChild(ui,(c,d)=>{u=u.set(new ie(c),d)}),Uc(t,e,n,u,i,s,l,o)}else return e}else{let u=new ce(null);return r.foreach((c,d)=>{const h=xe(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Uc(t,e,n,u,i,s,l,o)}}function yT(t,e,n,r,i){const s=e.serverCache,o=bv(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return Vv(t,o,n,r,Wv,i)}function wT(t,e,n,r,i,s){let o;if(Wl(r,n)!=null)return e;{const l=new oh(r,e,i),a=e.eventCache.getNode();let u;if(q(n)||Q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Bl(r,Pr(e));else{const d=e.serverCache.getNode();k(d instanceof F,"serverChildren would be complete if leaf node"),c=ih(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=Q(n);let d=sh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,le(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,F.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bl(r,Pr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Wl(r,Z())!=null,vs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new eh(r.getIndex()),s=jI(r);this.processor_=fT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,l.getNode(),null),c=new Qn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Qn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=va(d,c),this.eventGenerator_=new KI(this.query_)}get query(){return this.query_}}function ST(t){return t.viewCache_.serverCache.getNode()}function CT(t){return jl(t.viewCache_)}function IT(t,e){const n=Pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function Lp(t){return t.eventRegistrations_.length===0}function TT(t,e){t.eventRegistrations_.push(e)}function Mp(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bp(t,e,n,r){e.type===xt.MERGE&&e.source.queryId!==null&&(k(Pr(t.viewCache_),"We should always have a full cache before handling merges"),k(jl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=mT(t.processor_,i,e,n,r);return pT(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Hv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function kT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(s,o)=>{r.push(Ci(s,o))}),n.isFullyInitialized()&&r.push(Ov(n.getNode())),Hv(t,r,n.getNode(),e)}function Hv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return qI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;class $v{constructor(){this.views=new Map}}function RT(t){k(!Hl,"__referenceConstructor has already been defined"),Hl=t}function NT(){return k(Hl,"Reference.ts has not been loaded"),Hl}function PT(t){return t.views.size===0}function lh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),bp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bp(o,e,n,r));return s}}function Gv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Bl(n,i?r:null),a=!1;l?a=!0:r instanceof F?(l=ih(n,r),a=!1):(l=F.EMPTY_NODE,a=!1);const u=va(new Qn(l,a,!1),new Qn(r,i,!1));return new ET(e,u)}return o}function xT(t,e,n,r,i,s){const o=Gv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),TT(o,n),kT(o,n)}function AT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Yn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Mp(u,n,r)),Lp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Mp(a,n,r)),Lp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Yn(t)&&s.push(new(NT())(e._repo,e._path)),{removed:s,events:o}}function Kv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $n(t,e){let n=null;for(const r of t.views.values())n=n||IT(r,e);return n}function qv(t,e){if(e._queryParams.loadsAllData())return wa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Qv(t,e){return qv(t,e)!=null}function Yn(t){return wa(t)!=null}function wa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;function DT(t){k(!$l,"__referenceConstructor has already been defined"),$l=t}function OT(){return k($l,"Reference.ts has not been loaded"),$l}let LT=1;class Fp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=uT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yv(t,e,n,r,i){return JI(t.pendingWriteTree_,e,n,r,i),i?ho(t,new Nr(Mv(),e,n)):[]}function fr(t,e,n=!1){const r=ZI(t.pendingWriteTree_,e);if(eT(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(Z(),!0):ot(r.children,o=>{s=s.set(new ie(o),!0)}),ho(t,new zl(r.path,s,n))}else return[]}function co(t,e,n){return ho(t,new Nr(nh(),e,n))}function MT(t,e,n){const r=ce.fromObject(n);return ho(t,new Ks(nh(),e,r))}function bT(t,e){return ho(t,new Gs(nh(),e))}function FT(t,e,n){const r=uh(t,n);if(r){const i=ch(r),s=i.path,o=i.queryId,l=Qe(s,e),a=new Gs(rh(o),l);return dh(t,s,a)}else return[]}function Xv(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Qv(o,e))){const a=AT(o,e,n,r);PT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Yn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=BT(h);for(let v=0;v<_.length;++v){const y=_[v],I=y.query,m=ty(t,y);t.listenProvider_.startListening(ws(I),qs(t,I),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(ws(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Ea(h));t.listenProvider_.stopListening(ws(h),_)}))}WT(t,u)}return l}function Jv(t,e,n,r){const i=uh(t,r);if(i!=null){const s=ch(i),o=s.path,l=s.queryId,a=Qe(o,e),u=new Nr(rh(l),a,n);return dh(t,o,u)}else return[]}function UT(t,e,n,r){const i=uh(t,r);if(i){const s=ch(i),o=s.path,l=s.queryId,a=Qe(o,e),u=ce.fromObject(n),c=new Ks(rh(l),a,u);return dh(t,o,c)}else return[]}function zT(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=Qe(h,i);s=s||$n(_,v),o=o||Yn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Yn(l),s=s||$n(l,Z())):(l=new $v,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=$n(v,Z());y&&(s=s.updateImmediateChild(_,y))}));const u=Qv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ea(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=VT();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=ya(t.pendingWriteTree_,i);let d=xT(l,e,n,c,s,a);if(!u&&!o&&!r){const h=qv(l,e);d=d.concat(HT(t,e,h))}return d}function ah(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Qe(o,e),u=$n(l,a);if(u)return u});return zv(i,e,s,n,!0)}function jT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Qe(u,n);r=r||$n(c,d)});let i=t.syncPointTree_.get(n);i?r=r||$n(i,Z()):(i=new $v,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qn(r,!0,!1):null,l=ya(t.pendingWriteTree_,e._path),a=Gv(i,e,l,s?o.getNode():F.EMPTY_NODE,s);return CT(a)}function ho(t,e){return Zv(e,t.syncPointTree_,null,ya(t.pendingWriteTree_,Z()))}function Zv(t,e,n,r){if(q(t.path))return ey(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=$n(i,Z()));let s=[];const o=Q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=jv(r,o);s=s.concat(Zv(l,a,u,c))}return i&&(s=s.concat(lh(i,t,r,n))),s}}function ey(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=$n(i,Z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=jv(r,o),c=t.operationForChild(o);c&&(s=s.concat(ey(c,l,a,u)))}),i&&(s=s.concat(lh(i,t,r,n))),s}function ty(t,e){const n=e.query,r=qs(t,n);return{hashFn:()=>(ST(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?FT(t,n._path,r):bT(t,n._path);{const s=zC(i,n);return Xv(t,n,null,s)}}}}function qs(t,e){const n=Ea(e);return t.queryToTagMap.get(n)}function Ea(t){return t._path.toString()+"$"+t._queryIdentifier}function uh(t,e){return t.tagToQueryMap.get(e)}function ch(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function dh(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=ya(t.pendingWriteTree_,e);return lh(r,n,i,null)}function BT(t){return t.fold((e,n,r)=>{if(n&&Yn(n))return[wa(n)];{let i=[];return n&&(i=Kv(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function ws(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(OT())(t._repo,t._path):t}function WT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ea(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function VT(){return LT++}function HT(t,e,n){const r=e._path,i=qs(t,e),s=ty(t,n),o=t.listenProvider_.startListening(ws(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!Yn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!q(u)&&c&&Yn(c))return[wa(c).query];{let h=[];return c&&(h=h.concat(Kv(c).map(_=>_.query))),ot(d,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(ws(c),qs(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hh(n)}node(){return this.node_}}class fh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new fh(this.syncTree_,n)}node(){return ah(this.syncTree_,this.path_)}}const $T=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Up=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KT(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},KT=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},qT=function(t,e,n,r){return ph(e,new fh(n,t),r)},ny=function(t,e,n){return ph(t,new hh(e),n)};function ph(t,e,n){const r=t.getPriority().val(),i=Up(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Up(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Oe(l,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Oe(i))),o.forEachChild(we,(l,a)=>{const u=ph(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function gh(t,e){let n=e instanceof ie?e:new ie(e),r=t,i=Q(n);for(;i!==null;){const s=wi(r.node.children,i)||{children:{},childCount:0};r=new mh(i,r,s),n=le(n),i=Q(n)}return r}function bi(t){return t.node.value}function ry(t,e){t.node.value=e,zc(t)}function iy(t){return t.node.childCount>0}function QT(t){return bi(t)===void 0&&!iy(t)}function Sa(t,e){ot(t.node.children,(n,r)=>{e(new mh(n,t,r))})}function sy(t,e,n,r){n&&!r&&e(t),Sa(t,i=>{sy(i,e,!0,r)}),n&&r&&e(t)}function YT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fo(t){return new ie(t.parent===null?t.name:fo(t.parent)+"/"+t.name)}function zc(t){t.parent!==null&&XT(t.parent,t.name,t)}function XT(t,e,n){const r=QT(n),i=mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=/[\[\].#$\/\u0000-\u001F\u007F]/,ZT=/[\[\].#$\u0000-\u001F\u007F]/,Iu=10*1024*1024,oy=function(t){return typeof t=="string"&&t.length!==0&&!JT.test(t)},ly=function(t){return typeof t=="string"&&t.length!==0&&!ZT.test(t)},ek=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ly(t)},tk=function(t,e,n,r){r&&e===void 0||_h(Hd(t,"value"),e,n)},_h=function(t,e,n){const r=n instanceof ie?new vI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+ar(r)+" with contents = "+e.toString());if(nv(e))throw new Error(t+"contains "+e.toString()+" "+ar(r));if(typeof e=="string"&&e.length>Iu/3&&ga(e)>Iu)throw new Error(t+"contains a string greater than "+Iu+" utf8 bytes "+ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!oy(o)))throw new Error(t+" contains an invalid key ("+o+") "+ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yI(r,o),_h(t,l,r),wI(r)}),i&&s)throw new Error(t+' contains ".value" child '+ar(r)+" in addition to actual children.")}},ay=function(t,e,n,r){if(!(r&&n===void 0)&&!ly(n))throw new Error(Hd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ay(t,e,n,r)},rk=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ik=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ek(n))throw new Error(Hd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uy(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gt(t,e,n){uy(t,n),ok(t,r=>Pt(r,e)||Pt(e,r))}function ok(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(lk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();vr&&$e("event: "+n.toString()),Mi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="repo_interrupt",uk=25;class ck{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ul(),this.transactionQueueTree_=new mh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dk(t,e,n){if(t.stats_=Yd(t.repoInfo_),t.forceRestClient_||VC())t.server_=new Fl(t.repoInfo_,(r,i,s,o)=>{zp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,i,s,o)=>{zp(t,r,i,s,o)},r=>{jp(t,r)},r=>{fk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=qC(t.repoInfo_,()=>new GI(t.stats_,t.server_)),t.infoData_=new BI,t.infoSyncTree_=new Fp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=co(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),yh(t,"connected",!1),t.serverSyncTree_=new Fp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Gt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hk(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vh(t){return $T({timestamp:hk(t)})}function zp(t,e,n,r,i){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Al(n,u=>be(u));o=UT(t.serverSyncTree_,s,a,i)}else{const a=be(n);o=Jv(t.serverSyncTree_,s,a,i)}else if(r){const a=Al(n,u=>be(u));o=MT(t.serverSyncTree_,s,a)}else{const a=be(n);o=co(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ia(t,s)),Gt(t.eventQueue_,l,o)}function jp(t,e){yh(t,"connected",e),e===!1&&gk(t)}function fk(t,e){ot(e,(n,r)=>{yh(t,n,r)})}function yh(t,e,n){const r=new ie("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=co(t.infoSyncTree_,r,i);Gt(t.eventQueue_,r,s)}function cy(t){return t.nextWriteId_++}function pk(t,e,n){const r=jT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=be(i).withIndex(e._queryParams.getIndex());zT(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=co(t.serverSyncTree_,e._path,s);else{const l=qs(t.serverSyncTree_,e);o=Jv(t.serverSyncTree_,e._path,s,l)}return Gt(t.eventQueue_,e._path,o),Xv(t.serverSyncTree_,e,n,null,!0),s},i=>(Ca(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function mk(t,e,n,r,i){Ca(t,"set",{path:e.toString(),value:n,priority:r});const s=vh(t),o=be(n,r),l=ah(t.serverSyncTree_,e),a=ny(o,l,s),u=cy(t),c=Yv(t.serverSyncTree_,e,a,u,!0);uy(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||st("set at "+e+" failed: "+h);const y=fr(t.serverSyncTree_,u,!v);Gt(t.eventQueue_,e,y),vk(t,i,h,_)});const d=my(t,e);Ia(t,d),Gt(t.eventQueue_,d,[])}function gk(t){Ca(t,"onDisconnectEvents");const e=vh(t),n=Ul();Lc(t.onDisconnect_,Z(),(i,s)=>{const o=qT(i,s,t.serverSyncTree_,e);Lv(n,i,o)});let r=[];Lc(n,Z(),(i,s)=>{r=r.concat(co(t.serverSyncTree_,i,s));const o=my(t,i);Ia(t,o)}),t.onDisconnect_=Ul(),Gt(t.eventQueue_,Z(),r)}function _k(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ak)}function Ca(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$e(n,...e)}function vk(t,e,n,r){e&&Mi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dy(t,e,n){return ah(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function wh(t,e=t.transactionQueueTree_){if(e||Ta(t,e),bi(e)){const n=fy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yk(t,fo(e),n)}else iy(e)&&Sa(e,n=>{wh(t,n)})}function yk(t,e,n){const r=n.map(u=>u.currentWriteId),i=dy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Qe(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ca(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(fr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ta(t,gh(t.transactionQueueTree_,e)),wh(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Mi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{st("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ia(t,e)}},o)}function Ia(t,e){const n=hy(t,e),r=fo(n),i=fy(t,n);return wk(t,i,r),r}function wk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Qe(n,a.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(fr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=uk)c=!0,d="maxretry",i=i.concat(fr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=dy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){_h("transaction failed: Data returned ",_,a.path);let v=be(_);typeof _=="object"&&_!=null&&mn(_,".priority")||(v=v.updatePriority(h.getPriority()));const I=a.currentWriteId,m=vh(t),f=ny(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=cy(t),o.splice(o.indexOf(I),1),i=i.concat(Yv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(fr(t.serverSyncTree_,I,!0))}else c=!0,d="nodata",i=i.concat(fr(t.serverSyncTree_,a.currentWriteId,!0))}Gt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ta(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Mi(r[l]);wh(t,t.transactionQueueTree_)}function hy(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&bi(r)===void 0;)r=gh(r,n),e=le(e),n=Q(e);return r}function fy(t,e){const n=[];return py(t,e,n),n.sort((r,i)=>r.order-i.order),n}function py(t,e,n){const r=bi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sa(e,i=>{py(t,i,n)})}function Ta(t,e){const n=bi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ry(e,n.length>0?n:void 0)}Sa(e,r=>{Ta(t,r)})}function my(t,e){const n=fo(hy(t,e)),r=gh(t.transactionQueueTree_,e);return YT(r,i=>{Tu(t,i)}),Tu(t,r),sy(r,i=>{Tu(t,i)}),n}function Tu(t,e){const n=bi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ry(e,void 0):n.length=s+1,Gt(t.eventQueue_,fo(e),i);for(let o=0;o<r.length;o++)Mi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Sk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bp=function(t,e){const n=Ck(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ie(n.pathString)}},Ck=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=Ek(t.substring(c,d)));const h=Sk(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class Tk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:Cv(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=kp(this._queryParams),n=qd(e);return n==="{}"?"default":n}get _queryObject(){return kp(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Eh))return!1;const n=this._repo===e._repo,r=kv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_I(this._path)}}class gn extends Eh{constructor(e,n){super(e,n,new th,!1)}get parent(){const e=Tv(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),r=Ys(this.ref,e);return new Qs(this._node.getChild(n),r,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Qs(i,Ys(this.ref,r),we)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gy(t,e){return t=lt(t),t._checkNotDeleted("ref"),e!==void 0?Ys(t._root,e):t._root}function Ys(t,e){return t=lt(t),Q(t._path)===null?nk("child","path",e,!1):ay("child","path",e,!1),new gn(t._repo,xe(t._path,e))}function Rk(t,e){t=lt(t),rk("set",t._path),tk("set",e,t._path,!1);const n=new ma;return mk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _y(t){t=lt(t);const e=new kk(()=>{}),n=new Sh(e);return pk(t._repo,t,n).then(r=>new Qs(r,new gn(t._repo,t._path),t._queryParams.getIndex()))}class Sh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ik("value",this,new Qs(e.snapshotNode,new gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Tk(this,e,n):null}matches(e){return e instanceof Sh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}RT(gn);DT(gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="FIREBASE_DATABASE_EMULATOR_HOST",jc={};let Pk=!1;function xk(t,e,n,r){t.repoInfo_=new pv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Ak(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Nk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Bp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new ai(ai.OWNER):new $C(t.name,t.options,e);ik("Invalid Firebase Database URL",o),q(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ok(l,t,c,new HC(t.name,n));return new Lk(d,t)}function Dk(t,e){const n=jc[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_k(t),delete n[t.key]}function Ok(t,e,n,r){let i=jc[e.name];i||(i={},jc[e.name]=i);let s=i[t.toURLString()];return s&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ck(t,Pk,n,r),i[t.toURLString()]=s,s}class Lk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function vy(t=Y_(),e){const n=Kd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=oS("database");r&&Mk(n,...r)}return n}function Mk(t,e,n,r={}){t=lt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ai(ai.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:lS(r.mockUserToken,t.app.options.projectId);s=new ai(o)}xk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){PC(Oi),Ei(new Tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ak(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Vn(up,cp,t),Vn(up,cp,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bk();function Ch(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=yy,wy=new oo("auth","Firebase",yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new $d("@firebase/auth");function Uk(t,...e){Gl.logLevel<=ne.WARN&&Gl.warn(`Auth (${Oi}): ${t}`,...e)}function tl(t,...e){Gl.logLevel<=ne.ERROR&&Gl.error(`Auth (${Oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Ih(t,...e)}function Ht(t,...e){return Ih(t,...e)}function Ey(t,e,n){const r=Object.assign(Object.assign({},Fk()),{[e]:n});return new oo("auth","Firebase",r).create(e,{appName:t.name})}function zk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),Ey(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ih(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wy.create(t,...e)}function W(t,e,...n){if(!t)throw Ih(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function fn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jk(){return Wp()==="http:"||Wp()==="https:"}function Wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||aS()||"connection"in navigator)?navigator.onLine:!0}function Wk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vd()||H_()}get(){return Bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new po(3e4,6e4);function Cy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mo(t,e,n,r,i={}){return Iy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Di(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Sy.fetch()(Ty(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Iy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vk),e);try{const i=new Gk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Wo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ey(t,c,u);Kt(t,c)}}catch(i){if(i instanceof er)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function $k(t,e,n,r,i={}){const s=await mo(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ty(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Th(t.config,i):`${t.config.apiScheme}://${i}`}class Gk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),Hk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){return mo(t,"POST","/v1/accounts:delete",e)}async function qk(t,e){return mo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=kh(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Es(ku(i.auth_time)),issuedAtTime:Es(ku(i.iat)),expirationTime:Es(ku(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ku(t){return Number(t)*1e3}function kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=xl(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yk(t){const e=kh(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&Xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xs(t,qk(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t1(s.providerUserInfo):[],l=e1(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ky(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Zk(t){const e=lt(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t1(t){return t.map(e=>{var{providerId:n}=e,r=Ch(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e){const n=await Iy(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ty(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Sy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Js;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ky(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qk(this,e)}reload(){return Zk(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,Kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:P,stsTokenManager:R}=n;W(g&&R,e,"internal-error");const A=Js.fromJSON(this.name,R);W(typeof g=="string",e,"internal-error"),Cn(d,e.name),Cn(h,e.name),W(typeof p=="boolean",e,"internal-error"),W(typeof C=="boolean",e,"internal-error"),Cn(_,e.name),Cn(v,e.name),Cn(y,e.name),Cn(I,e.name),Cn(m,e.name),Cn(f,e.name);const $=new yr({uid:g,auth:e,email:h,emailVerified:p,displayName:d,isAnonymous:C,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:A,createdAt:m,lastLoginAt:f});return P&&Array.isArray(P)&&($.providerData=P.map(U=>Object.assign({},U))),I&&($._redirectEventId=I),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Js;i.updateFromServerResponse(n);const s=new yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Map;function rn(t){fn(t instanceof Function,"Expected a class definition");let e=Vp.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ry.type="NONE";const Hp=Ry;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(rn(Hp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(Hp);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=yr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ci(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dy(e))return"Blackberry";if(Oy(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||Py(e))&&!e.includes("edge/"))return"Chrome";if(Ay(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ny(t=Ke()){return/firefox\//i.test(t)}function Rh(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Py(t=Ke()){return/crios\//i.test(t)}function xy(t=Ke()){return/iemobile/i.test(t)}function Ay(t=Ke()){return/android/i.test(t)}function Dy(t=Ke()){return/blackberry/i.test(t)}function Oy(t=Ke()){return/webos/i.test(t)}function ka(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r1(t=Ke()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i1(){return uS()&&document.documentMode===10}function Ly(t=Ke()){return ka(t)||Ay(t)||Oy(t)||Dy(t)||/windows phone/i.test(t)||xy(t)}function s1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t,e=[]){let n;switch(t){case"Browser":n=$p(Ke());break;case"Worker":n=`${$p(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e={}){return mo(t,"GET","/v2/passwordPolicy",Cy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=6;class u1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:a1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gp(this),this.idTokenSubscription=new Gp(this),this.beforeStateQueue=new o1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l1(this),n=new u1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=My(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Uk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ra(t){return lt(t)}class Gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=vS(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function h1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",d1().appendChild(r)})}function f1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e){const n=Kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dl(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function m1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g1(t,e,n){const r=Ra(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=by(e),{host:o,port:l}=_1(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||v1()}function by(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _1(t){const e=by(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kp(o)}}}function Kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return $k(t,"POST","/v1/accounts:signInWithIdp",Cy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="http://localhost";class xr extends Fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ch(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:y1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends go{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends go{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends go{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yr._fromIdTokenResponse(e,r,i),o=qp(r);return new Ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qp(r);return new Ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function Uy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function w1(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xs(t,Uy(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=kh(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),Ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e,n=!1){const r="signIn",i=await Uy(t,r,e),s=await Ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function C1(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function I1(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function zy(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function T1(t){return lt(t).signOut()}const Ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){const t=Ke();return Rh(t)||ka(t)}const R1=1e3,N1=10;class By extends jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=k1()&&s1(),this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);i1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,N1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}By.type="LOCAL";const P1=By;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wy.type="SESSION";const Vy=Wy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await x1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ph("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function D1(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function O1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M1(){return Hy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="firebaseLocalStorageDb",b1=1,Yl="firebaseLocalStorage",Gy="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function F1(){const t=indexedDB.deleteDatabase($y);return new _o(t).toPromise()}function Wc(){const t=indexedDB.open($y,b1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:Gy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await F1(),e(await Wc()))})})}async function Qp(t,e,n){const r=Pa(t,!0).put({[Gy]:e,value:n});return new _o(r).toPromise()}async function U1(t,e){const n=Pa(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Yp(t,e){const n=Pa(t,!0).delete(e);return new _o(n).toPromise()}const z1=800,j1=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>j1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(M1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O1(),!this.activeServiceWorker)return;this.sender=new A1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await Qp(e,Ql,"1"),await Yp(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>U1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pa(i,!1).getAll();return new _o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const B1=Ky;new po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e){return e?rn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends Fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function W1(t){return S1(t.auth,new xh(t),t.bypassAuthState)}function V1(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),E1(n,new xh(t),t.bypassAuthState)}async function H1(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),w1(n,new xh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W1;case"linkViaPopup":case"linkViaRedirect":return H1;case"reauthViaPopup":case"reauthViaRedirect":return V1;default:Kt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new po(2e3,1e4);async function G1(t,e,n){const r=Ra(t);zk(t,e,Nh);const i=qy(r,n);return new pr(r,"signInViaPopup",e,i).executeNotNull()}class pr extends Qy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$1.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="pendingRedirect",rl=new Map;class q1 extends Qy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await Q1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q1(t,e){const n=J1(e),r=X1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Y1(t,e){rl.set(t._key(),e)}function X1(t){return rn(t._redirectPersistence)}function J1(t){return nl(K1,t.config.apiKey,t.name)}async function Z1(t,e,n=!1){const r=Ra(t),i=qy(r,e),o=await new q1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=10*60*1e3;class tR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e={}){return mo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sR=/^https?/;async function oR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rR(t);for(const n of e)try{if(lR(n))return}catch{}Kt(t,"unauthorized-domain")}function lR(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sR.test(n))return!1;if(iR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new po(3e4,6e4);function Jp(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uR(t){return new Promise((e,n)=>{var r,i,s;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(Ht(t,"network-request-failed"))},timeout:aR.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const l=f1("iframefcb");return $t()[l]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},h1(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw il=null,e})}let il=null;function cR(t){return il=il||uR(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=new po(5e3,15e3),hR="__/auth/iframe",fR="emulator/auth/iframe",pR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gR(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,fR):`https://${t.config.authDomain}/${hR}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=mR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Di(r).slice(1)}`}async function _R(t){const e=await cR(t),n=$t().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:gR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=$t().setTimeout(()=>{s(o)},dR.get());function a(){$t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,wR=600,ER="_blank",SR="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=yR,i=wR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},vR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ke().toLowerCase();n&&(l=Py(u)?ER:n),Ny(u)&&(e=e||SR,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(r1(u)&&l!=="_self")return IR(e||"",l),new Zp(null);const d=window.open(e||"",l,c);W(d,t,"popup-blocked");try{d.focus()}catch{}return new Zp(d)}function IR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="__/auth/handler",kR="emulator/auth/handler",RR=encodeURIComponent("fac");async function em(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof Nh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ic(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof go){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${RR}=${encodeURIComponent(a)}`:"";return`${NR(t)}?${Di(l).slice(1)}${u}`}function NR({config:t}){return t.emulator?Th(t,kR):`https://${t.authDomain}/${TR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="webStorageSupport";class PR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vy,this._completeRedirectFn=Z1,this._overrideRedirectResult=Y1}async _openPopup(e,n,r,i){var s;fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await em(e,n,r,Bc(),i);return CR(e,o,Ph())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await em(e,n,r,Bc(),i);return D1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _R(e),r=new tR(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ru,{type:Ru},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ru];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ly()||Rh()||ka()}}const xR=PR;var tm="@firebase/auth",nm="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OR(t){Ei(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:My(t)},u=new c1(r,i,s,a);return m1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new Tr("auth-internal",e=>{const n=Ra(e.getProvider("auth").getImmediate());return(r=>new AR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(tm,nm,DR(t)),Vn(tm,nm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=5*60,MR=V_("authIdTokenMaxAge")||LR;let rm=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MR)return;const i=n==null?void 0:n.token;rm!==i&&(rm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FR(t=Y_()){const e=Kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p1(t,{popupRedirectResolver:xR,persistence:[B1,P1,Vy]}),r=V_("authTokenSyncURL");if(r){const s=bR(r);I1(n,s,()=>s(n.currentUser)),C1(n,o=>s(o))}const i=B_("auth");return i&&g1(n,`http://${i}`),n}OR("Browser");const UR={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com/"},Xy=Q_(UR),zR=vy(Xy),Jy=gy(vy()),jR=zR,ki=FR(Xy);async function BR(t){return await _y(Ys(Jy,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function WR({uid:t,displayName:e,email:n,photoURL:r}){await Rk(gy(jR,`users/${t}`),{displayName:e,email:n,photoUrl:r}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}async function im(t,e){return await _y(Ys(Jy,"events/")).then(i=>{if(i.exists()){console.log("FIREBASE - Events exists");const s=i.val(),o=Object.values(s);if(e==="myEvents")return n(o);if(e==="participateEvents")return r(o)}return i.exists()||console.log("FIREBASE - Events not found in DB"),!1}).catch(i=>(console.error(i),!1));function n(i){return i.filter(o=>o.owner==t?o:!1)}function r(i){return i.filter(o=>o.users.includes(t)?o:!1)}}/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function me(){return me=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},me.apply(this,arguments)}var Te;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Te||(Te={}));const sm="popstate";function VR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Zs("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ar(i)}return $R(e,n,null,t)}function K(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ri(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HR(){return Math.random().toString(36).substr(2,8)}function om(t,e){return{usr:t.state,key:t.key,idx:e}}function Zs(t,e,n,r){return n===void 0&&(n=null),me({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_n(e):e,{state:n,key:e&&e.key||r||HR()})}function Ar(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _n(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $R(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Te.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(me({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Te.Pop;let I=c(),m=I==null?null:I-u;u=I,a&&a({action:l,location:y.location,delta:m})}function h(I,m){l=Te.Push;let f=Zs(y.location,I,m);n&&n(f,I),u=c()+1;let g=om(f,u),p=y.createHref(f);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&a&&a({action:l,location:y.location,delta:1})}function _(I,m){l=Te.Replace;let f=Zs(y.location,I,m);n&&n(f,I),u=c();let g=om(f,u),p=y.createHref(f);o.replaceState(g,"",p),s&&a&&a({action:l,location:y.location,delta:0})}function v(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Ar(I);return K(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return l},get location(){return t(i,o)},listen(I){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(sm,d),a=I,()=>{i.removeEventListener(sm,d),a=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let m=v(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:_,go(I){return o.go(I)}};return y}var Se;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Se||(Se={}));const GR=new Set(["lazy","caseSensitive","path","id","index","children"]);function KR(t){return t.index===!0}function Vc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(K(i.index!==!0||!i.children,"Cannot specify children on an index route"),K(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),KR(i)){let a=me({},i,e(i),{id:l});return r[l]=a,a}else{let a=me({},i,e(i),{id:l,children:void 0});return r[l]=a,i.children&&(a.children=Vc(i.children,e,o,r)),a}})}function Zr(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_n(e):e,i=Fi(r.pathname||"/",n);if(i==null)return null;let s=Zy(t);QR(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=iN(s[l],lN(i));return o}function qR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Zy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(K(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ln([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(K(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zy(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:nN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of e0(s.path))i(s,o,a)}),e}function e0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=e0(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function QR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YR=/^:\w+$/,XR=3,JR=2,ZR=1,eN=10,tN=-2,lm=t=>t==="*";function nN(t,e){let n=t.split("/"),r=n.length;return n.some(lm)&&(r+=tN),e&&(r+=JR),n.filter(i=>!lm(i)).reduce((i,s)=>i+(YR.test(s)?XR:s===""?ZR:eN),r)}function rN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function iN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=sN({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:ln([i,c.pathname]),pathnameBase:dN(ln([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ln([i,c.pathnameBase]))}return s}function sN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=aN(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function oN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ri(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lN(t){try{return decodeURI(t)}catch(e){return Ri(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function aN(t,e){try{return decodeURIComponent(t)}catch(n){return Ri(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Fi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_n(t):t;return{pathname:n?n.startsWith("/")?n:cN(n,e):e,search:hN(r),hash:fN(i)}}function cN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xa(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ah(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_n(t):(i=me({},t),K(!i.pathname||!i.pathname.includes("?"),Nu("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),Nu("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),Nu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=uN(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),dN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Dh{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function t0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n0=["post","put","patch","delete"],pN=new Set(n0),mN=["get",...n0],gN=new Set(mN),_N=new Set([301,302,303,307,308]),vN=new Set([307,308]),Pu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yN={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},es={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wN=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function EN(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;K(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=E=>({hasErrorBoundary:w(E)})}else i=wN;let s={},o=Vc(t.routes,i,void 0,s),l,a=t.basename||"/",u=me({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,h=null,_=null,v=null,y=t.hydrationData!=null,I=Zr(o,t.history.location,a),m=null;if(I==null){let w=mt(404,{pathname:t.history.location.pathname}),{matches:E,route:S}=mm(o);I=E,m={[S.id]:w}}let f=!I.some(w=>w.route.lazy)&&(!I.some(w=>w.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:I,initialized:f,navigation:Pu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},C=Te.Pop,P=!1,R,A=!1,$=!1,U=[],De=[],se=new Map,Mt=0,vn=-1,yn=new Map,at=new Set,bt=new Map,x=new Map,M=new Map,V=!1;function fe(){return c=t.history.listen(w=>{let{action:E,location:S,delta:D}=w;if(V){V=!1;return}Ri(M.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Bh({currentLocation:p.location,nextLocation:S,historyAction:E});if(B&&D!=null){V=!0,t.history.go(D*-1),Eo(B,{state:"blocked",location:S,proceed(){Eo(B,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),t.history.go(D)},reset(){let j=new Map(p.blockers);j.set(B,es),oe({blockers:j})}});return}return nr(E,S)}),p.initialized||nr(Te.Pop,p.location),g}function Ie(){c&&c(),d.clear(),R&&R.abort(),p.fetchers.forEach((w,E)=>Ma(E)),p.blockers.forEach((w,E)=>jh(E))}function Mr(w){return d.add(w),()=>d.delete(w)}function oe(w){p=me({},p,w),d.forEach(E=>E(p))}function qt(w,E){var S,D;let B=p.actionData!=null&&p.navigation.formMethod!=null&&kt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((S=w.state)==null?void 0:S._isRedirect)!==!0,j;E.actionData?Object.keys(E.actionData).length>0?j=E.actionData:j=null:B?j=p.actionData:j=null;let H=E.loaderData?pm(p.loaderData,E.loaderData,E.matches||[],E.errors):p.loaderData,b=p.blockers;b.size>0&&(b=new Map(b),b.forEach((pe,Be)=>b.set(Be,es)));let L=P===!0||p.navigation.formMethod!=null&&kt(p.navigation.formMethod)&&((D=w.state)==null?void 0:D._isRedirect)!==!0;l&&(o=l,l=void 0),A||C===Te.Pop||(C===Te.Push?t.history.push(w,w.state):C===Te.Replace&&t.history.replace(w,w.state)),oe(me({},E,{actionData:j,loaderData:H,historyAction:C,location:w,initialized:!0,navigation:Pu,revalidation:"idle",restoreScrollPosition:Vh(w,E.matches||p.matches),preventScrollReset:L,blockers:b})),C=Te.Pop,P=!1,A=!1,$=!1,U=[],De=[]}async function Ft(w,E){if(typeof w=="number"){t.history.go(w);return}let S=Hc(p.location,p.matches,a,u.v7_prependBasename,w,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:D,submission:B,error:j}=am(u.v7_normalizeFormMethod,!1,S,E),H=p.location,b=Zs(p.location,D,E&&E.state);b=me({},b,t.history.encodeLocation(b));let L=E&&E.replace!=null?E.replace:void 0,pe=Te.Push;L===!0?pe=Te.Replace:L===!1||B!=null&&kt(B.formMethod)&&B.formAction===p.location.pathname+p.location.search&&(pe=Te.Replace);let Be=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,J=Bh({currentLocation:H,nextLocation:b,historyAction:pe});if(J){Eo(J,{state:"blocked",location:b,proceed(){Eo(J,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),Ft(w,E)},reset(){let re=new Map(p.blockers);re.set(J,es),oe({blockers:re})}});return}return await nr(pe,b,{submission:B,pendingError:j,preventScrollReset:Be,replace:E&&E.replace})}function br(){if(La(),oe({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){nr(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}nr(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function nr(w,E,S){R&&R.abort(),R=null,C=w,A=(S&&S.startUninterruptedRevalidation)===!0,E0(p.location,p.matches),P=(S&&S.preventScrollReset)===!0;let D=l||o,B=S&&S.overrideNavigation,j=Zr(D,E,a);if(!j){let re=mt(404,{pathname:E.pathname}),{matches:Ee,route:rr}=mm(D);ba(),qt(E,{matches:Ee,loaderData:{},errors:{[rr.id]:re}});return}if(p.initialized&&!$&&kN(p.location,E)&&!(S&&S.submission&&kt(S.submission.formMethod))){qt(E,{matches:j});return}R=new AbortController;let H=ns(t.history,E,R.signal,S&&S.submission),b,L;if(S&&S.pendingError)L={[ei(j).route.id]:S.pendingError};else if(S&&S.submission&&kt(S.submission.formMethod)){let re=await p0(H,E,S.submission,j,{replace:S.replace});if(re.shortCircuited)return;b=re.pendingActionData,L=re.pendingActionError,B=xu(E,S.submission),H=new Request(H.url,{signal:H.signal})}let{shortCircuited:pe,loaderData:Be,errors:J}=await m0(H,E,j,B,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,b,L);pe||(R=null,qt(E,me({matches:j},b?{actionData:b}:{},{loaderData:Be,errors:J})))}async function p0(w,E,S,D,B){B===void 0&&(B={}),La();let j=xN(E,S);oe({navigation:j});let H,b=Gc(D,E);if(!b.route.action&&!b.route.lazy)H={type:Se.error,error:mt(405,{method:w.method,pathname:E.pathname,routeId:b.route.id})};else if(H=await ts("action",w,b,D,s,i,a),w.signal.aborted)return{shortCircuited:!0};if(hi(H)){let L;return B&&B.replace!=null?L=B.replace:L=H.location===p.location.pathname+p.location.search,await zi(p,H,{submission:S,replace:L}),{shortCircuited:!0}}if(Ss(H)){let L=ei(D,b.route.id);return(B&&B.replace)!==!0&&(C=Te.Push),{pendingActionData:{},pendingActionError:{[L.route.id]:H.error}}}if(mr(H))throw mt(400,{type:"defer-action"});return{pendingActionData:{[b.route.id]:H.data}}}async function m0(w,E,S,D,B,j,H,b,L){let pe=D||xu(E,B),Be=B||j||vm(pe),J=l||o,[re,Ee]=um(t.history,p,S,Be,E,$,U,De,bt,at,J,a,b,L);if(ba(te=>!(S&&S.some(St=>St.route.id===te))||re&&re.some(St=>St.route.id===te)),vn=++Mt,re.length===0&&Ee.length===0){let te=Uh();return qt(E,me({matches:S,loaderData:{},errors:L||null},b?{actionData:b}:{},te?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!A){Ee.forEach(St=>{let En=p.fetchers.get(St.key),Ba=rs(void 0,En?En.data:void 0);p.fetchers.set(St.key,Ba)});let te=b||p.actionData;oe(me({navigation:pe},te?Object.keys(te).length===0?{actionData:null}:{actionData:te}:{},Ee.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ee.forEach(te=>{se.has(te.key)&&wn(te.key),te.controller&&se.set(te.key,te.controller)});let rr=()=>Ee.forEach(te=>wn(te.key));R&&R.signal.addEventListener("abort",rr);let{results:ir,loaderResults:ji,fetcherResults:Fa}=await bh(p.matches,S,re,Ee,w);if(w.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",rr),Ee.forEach(te=>se.delete(te.key));let Qt=gm(ir);if(Qt){if(Qt.idx>=re.length){let te=Ee[Qt.idx-re.length].key;at.add(te)}return await zi(p,Qt.result,{replace:H}),{shortCircuited:!0}}let{loaderData:Yt,errors:So}=fm(p,S,re,ji,L,Ee,Fa,x);x.forEach((te,St)=>{te.subscribe(En=>{(En||te.done)&&x.delete(St)})});let Ua=Uh(),za=zh(vn),ja=Ua||za||Ee.length>0;return me({loaderData:Yt,errors:So},ja?{fetchers:new Map(p.fetchers)}:{})}function Mh(w){return p.fetchers.get(w)||yN}function g0(w,E,S,D){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(w)&&wn(w);let B=l||o,j=Hc(p.location,p.matches,a,u.v7_prependBasename,S,E,D==null?void 0:D.relative),H=Zr(B,j,a);if(!H){wo(w,E,mt(404,{pathname:j}));return}let{path:b,submission:L,error:pe}=am(u.v7_normalizeFormMethod,!0,j,D);if(pe){wo(w,E,pe);return}let Be=Gc(H,b);if(P=(D&&D.preventScrollReset)===!0,L&&kt(L.formMethod)){_0(w,E,b,Be,H,L);return}bt.set(w,{routeId:E,path:b}),v0(w,E,b,Be,H,L)}async function _0(w,E,S,D,B,j){if(La(),bt.delete(w),!D.route.action&&!D.route.lazy){let Re=mt(405,{method:j.formMethod,pathname:S,routeId:E});wo(w,E,Re);return}let H=p.fetchers.get(w),b=AN(j,H);p.fetchers.set(w,b),oe({fetchers:new Map(p.fetchers)});let L=new AbortController,pe=ns(t.history,S,L.signal,j);se.set(w,L);let Be=Mt,J=await ts("action",pe,D,B,s,i,a);if(pe.signal.aborted){se.get(w)===L&&se.delete(w);return}if(hi(J))if(se.delete(w),vn>Be){let Re=zr(void 0);p.fetchers.set(w,Re),oe({fetchers:new Map(p.fetchers)});return}else{at.add(w);let Re=rs(j);return p.fetchers.set(w,Re),oe({fetchers:new Map(p.fetchers)}),zi(p,J,{fetcherSubmission:j})}if(Ss(J)){wo(w,E,J.error);return}if(mr(J))throw mt(400,{type:"defer-action"});let re=p.navigation.location||p.location,Ee=ns(t.history,re,L.signal),rr=l||o,ir=p.navigation.state!=="idle"?Zr(rr,p.navigation.location,a):p.matches;K(ir,"Didn't find any matches after fetcher action");let ji=++Mt;yn.set(w,ji);let Fa=rs(j,J.data);p.fetchers.set(w,Fa);let[Qt,Yt]=um(t.history,p,ir,j,re,$,U,De,bt,at,rr,a,{[D.route.id]:J.data},void 0);Yt.filter(Re=>Re.key!==w).forEach(Re=>{let Bi=Re.key,Hh=p.fetchers.get(Bi),C0=rs(void 0,Hh?Hh.data:void 0);p.fetchers.set(Bi,C0),se.has(Bi)&&wn(Bi),Re.controller&&se.set(Bi,Re.controller)}),oe({fetchers:new Map(p.fetchers)});let So=()=>Yt.forEach(Re=>wn(Re.key));L.signal.addEventListener("abort",So);let{results:Ua,loaderResults:za,fetcherResults:ja}=await bh(p.matches,ir,Qt,Yt,Ee);if(L.signal.aborted)return;L.signal.removeEventListener("abort",So),yn.delete(w),se.delete(w),Yt.forEach(Re=>se.delete(Re.key));let te=gm(Ua);if(te){if(te.idx>=Qt.length){let Re=Yt[te.idx-Qt.length].key;at.add(Re)}return zi(p,te.result)}let{loaderData:St,errors:En}=fm(p,p.matches,Qt,za,void 0,Yt,ja,x);if(p.fetchers.has(w)){let Re=zr(J.data);p.fetchers.set(w,Re)}let Ba=zh(ji);p.navigation.state==="loading"&&ji>vn?(K(C,"Expected pending action"),R&&R.abort(),qt(p.navigation.location,{matches:ir,loaderData:St,errors:En,fetchers:new Map(p.fetchers)})):(oe(me({errors:En,loaderData:pm(p.loaderData,St,ir,En)},Ba||Yt.length>0?{fetchers:new Map(p.fetchers)}:{})),$=!1)}async function v0(w,E,S,D,B,j){let H=p.fetchers.get(w),b=rs(j,H?H.data:void 0);p.fetchers.set(w,b),oe({fetchers:new Map(p.fetchers)});let L=new AbortController,pe=ns(t.history,S,L.signal);se.set(w,L);let Be=Mt,J=await ts("loader",pe,D,B,s,i,a);if(mr(J)&&(J=await o0(J,pe.signal,!0)||J),se.get(w)===L&&se.delete(w),pe.signal.aborted)return;if(hi(J))if(vn>Be){let Ee=zr(void 0);p.fetchers.set(w,Ee),oe({fetchers:new Map(p.fetchers)});return}else{at.add(w),await zi(p,J);return}if(Ss(J)){let Ee=ei(p.matches,E);p.fetchers.delete(w),oe({fetchers:new Map(p.fetchers),errors:{[Ee.route.id]:J.error}});return}K(!mr(J),"Unhandled fetcher deferred data");let re=zr(J.data);p.fetchers.set(w,re),oe({fetchers:new Map(p.fetchers)})}async function zi(w,E,S){let{submission:D,fetcherSubmission:B,replace:j}=S===void 0?{}:S;E.revalidate&&($=!0);let H=Zs(w.location,E.location,{_isRedirect:!0});if(K(H,"Expected a location on the redirect navigation"),n){let re=!1;if(E.reloadDocument)re=!0;else if(r0.test(E.location)){const Ee=t.history.createURL(E.location);re=Ee.origin!==e.location.origin||Fi(Ee.pathname,a)==null}if(re){j?e.location.replace(E.location):e.location.assign(E.location);return}}R=null;let b=j===!0?Te.Replace:Te.Push,{formMethod:L,formAction:pe,formEncType:Be}=w.navigation;!D&&!B&&L&&pe&&Be&&(D=vm(w.navigation));let J=D||B;if(vN.has(E.status)&&J&&kt(J.formMethod))await nr(b,H,{submission:me({},J,{formAction:E.location}),preventScrollReset:P});else{let re=xu(H,D);await nr(b,H,{overrideNavigation:re,fetcherSubmission:B,preventScrollReset:P})}}async function bh(w,E,S,D,B){let j=await Promise.all([...S.map(L=>ts("loader",B,L,E,s,i,a)),...D.map(L=>L.matches&&L.match&&L.controller?ts("loader",ns(t.history,L.path,L.controller.signal),L.match,L.matches,s,i,a):{type:Se.error,error:mt(404,{pathname:L.path})})]),H=j.slice(0,S.length),b=j.slice(S.length);return await Promise.all([_m(w,S,H,H.map(()=>B.signal),!1,p.loaderData),_m(w,D.map(L=>L.match),b,D.map(L=>L.controller?L.controller.signal:null),!0)]),{results:j,loaderResults:H,fetcherResults:b}}function La(){$=!0,U.push(...ba()),bt.forEach((w,E)=>{se.has(E)&&(De.push(E),wn(E))})}function wo(w,E,S){let D=ei(p.matches,E);Ma(w),oe({errors:{[D.route.id]:S},fetchers:new Map(p.fetchers)})}function Ma(w){let E=p.fetchers.get(w);se.has(w)&&!(E&&E.state==="loading"&&yn.has(w))&&wn(w),bt.delete(w),yn.delete(w),at.delete(w),p.fetchers.delete(w)}function wn(w){let E=se.get(w);K(E,"Expected fetch controller: "+w),E.abort(),se.delete(w)}function Fh(w){for(let E of w){let S=Mh(E),D=zr(S.data);p.fetchers.set(E,D)}}function Uh(){let w=[],E=!1;for(let S of at){let D=p.fetchers.get(S);K(D,"Expected fetcher: "+S),D.state==="loading"&&(at.delete(S),w.push(S),E=!0)}return Fh(w),E}function zh(w){let E=[];for(let[S,D]of yn)if(D<w){let B=p.fetchers.get(S);K(B,"Expected fetcher: "+S),B.state==="loading"&&(wn(S),yn.delete(S),E.push(S))}return Fh(E),E.length>0}function y0(w,E){let S=p.blockers.get(w)||es;return M.get(w)!==E&&M.set(w,E),S}function jh(w){p.blockers.delete(w),M.delete(w)}function Eo(w,E){let S=p.blockers.get(w)||es;K(S.state==="unblocked"&&E.state==="blocked"||S.state==="blocked"&&E.state==="blocked"||S.state==="blocked"&&E.state==="proceeding"||S.state==="blocked"&&E.state==="unblocked"||S.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+E.state);let D=new Map(p.blockers);D.set(w,E),oe({blockers:D})}function Bh(w){let{currentLocation:E,nextLocation:S,historyAction:D}=w;if(M.size===0)return;M.size>1&&Ri(!1,"A router only supports one blocker at a time");let B=Array.from(M.entries()),[j,H]=B[B.length-1],b=p.blockers.get(j);if(!(b&&b.state==="proceeding")&&H({currentLocation:E,nextLocation:S,historyAction:D}))return j}function ba(w){let E=[];return x.forEach((S,D)=>{(!w||w(D))&&(S.cancel(),E.push(D),x.delete(D))}),E}function w0(w,E,S){if(h=w,v=E,_=S||null,!y&&p.navigation===Pu){y=!0;let D=Vh(p.location,p.matches);D!=null&&oe({restoreScrollPosition:D})}return()=>{h=null,v=null,_=null}}function Wh(w,E){return _&&_(w,E.map(D=>qR(D,p.loaderData)))||w.key}function E0(w,E){if(h&&v){let S=Wh(w,E);h[S]=v()}}function Vh(w,E){if(h){let S=Wh(w,E),D=h[S];if(typeof D=="number")return D}return null}function S0(w){s={},l=Vc(w,i,void 0,s)}return g={get basename(){return a},get state(){return p},get routes(){return o},initialize:fe,subscribe:Mr,enableScrollRestoration:w0,navigate:Ft,fetch:g0,revalidate:br,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:Mh,deleteFetcher:Ma,dispose:Ie,getBlocker:y0,deleteBlocker:jh,_internalFetchControllers:se,_internalActiveDeferreds:x,_internalSetRoutes:S0},g}function SN(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Hc(t,e,n,r,i,s,o){let l,a;if(s!=null&&o!=="path"){l=[];for(let c of e)if(l.push(c),c.route.id===s){a=c;break}}else l=e,a=e[e.length-1];let u=Ah(i||".",xa(l).map(c=>c.pathnameBase),Fi(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&a&&a.route.index&&!Oh(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:ln([n,u.pathname])),Ar(u)}function am(t,e,n,r){if(!r||!SN(r))return{path:n};if(r.formMethod&&!PN(r.formMethod))return{path:n,error:mt(405,{method:r.formMethod})};let i=()=>({path:n,error:mt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=s0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!kt(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,v)=>{let[y,I]=v;return""+_+y+"="+I+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!kt(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}K(typeof FormData=="function","FormData is not available in this environment");let a,u;if(r.formData)a=$c(r.formData),u=r.formData;else if(r.body instanceof FormData)a=$c(r.body),u=r.body;else if(r.body instanceof URLSearchParams)a=r.body,u=hm(a);else if(r.body==null)a=new URLSearchParams,u=new FormData;else try{a=new URLSearchParams(r.body),u=hm(a)}catch{return i()}let c={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(kt(c.formMethod))return{path:n,submission:c};let d=_n(n);return e&&d.search&&Oh(d.search)&&a.append("index",""),d.search="?"+a,{path:Ar(d),submission:c}}function CN(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function um(t,e,n,r,i,s,o,l,a,u,c,d,h,_){let v=_?Object.values(_)[0]:h?Object.values(h)[0]:void 0,y=t.createURL(e.location),I=t.createURL(i),m=_?Object.keys(_)[0]:void 0,g=CN(n,m).filter((C,P)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(IN(e.loaderData,e.matches[P],C)||o.some($=>$===C.route.id))return!0;let R=e.matches[P],A=C;return cm(C,me({currentUrl:y,currentParams:R.params,nextUrl:I,nextParams:A.params},r,{actionResult:v,defaultShouldRevalidate:s||y.pathname+y.search===I.pathname+I.search||y.search!==I.search||i0(R,A)}))}),p=[];return a.forEach((C,P)=>{if(!n.some(De=>De.route.id===C.routeId))return;let R=Zr(c,C.path,d);if(!R){p.push({key:P,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(P),$=Gc(R,C.path),U=!1;u.has(P)?U=!1:l.includes(P)?U=!0:A&&A.state!=="idle"&&A.data===void 0?U=s:U=cm($,me({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:I,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),U&&p.push({key:P,routeId:C.routeId,path:C.path,matches:R,match:$,controller:new AbortController})}),[g,p]}function IN(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function i0(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function cm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function dm(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];K(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";Ri(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!GR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,me({},e(i),{lazy:void 0}))}async function ts(t,e,n,r,i,s,o,l){l===void 0&&(l={});let a,u,c,d=v=>{let y,I=new Promise((m,f)=>y=f);return c=()=>y(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:l.requestContext}),I])};try{let v=n.route[t];if(n.route.lazy)if(v){let y,I=await Promise.all([d(v).catch(m=>{y=m}),dm(n.route,s,i)]);if(y)throw y;u=I[0]}else if(await dm(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let y=new URL(e.url),I=y.pathname+y.search;throw mt(405,{method:e.method,pathname:I,routeId:n.route.id})}else return{type:Se.data,data:void 0};else if(v)u=await d(v);else{let y=new URL(e.url),I=y.pathname+y.search;throw mt(404,{pathname:I})}K(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){a=Se.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(NN(u)){let v=u.status;if(_N.has(v)){let m=u.headers.get("Location");if(K(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!r0.test(m))m=Hc(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!l.isStaticRequest){let f=new URL(e.url),g=m.startsWith("//")?new URL(f.protocol+m):new URL(m),p=Fi(g.pathname,o)!=null;g.origin===f.origin&&p&&(m=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Se.redirect,status:v,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:a===Se.error?Se.error:Se.data,response:u};let y,I=u.headers.get("Content-Type");return I&&/\bapplication\/json\b/.test(I)?y=await u.json():y=await u.text(),a===Se.error?{type:a,error:new Dh(v,u.statusText,y),headers:u.headers}:{type:Se.data,data:y,statusCode:u.status,headers:u.headers}}if(a===Se.error)return{type:a,error:u};if(RN(u)){var h,_;return{type:Se.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Se.data,data:u}}function ns(t,e,n,r){let i=t.createURL(s0(e)).toString(),s={signal:n};if(r&&kt(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=$c(r.formData):s.body=r.formData}return new Request(i,s)}function $c(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function hm(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function TN(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(K(!hi(c),"Cannot handle redirect results in processLoaderData"),Ss(c)){let _=ei(t,h),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=v),s[h]=void 0,a||(a=!0,l=t0(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else mr(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(l=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function fm(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=TN(e,n,r,i,l);for(let c=0;c<s.length;c++){let{key:d,match:h,controller:_}=s[c];K(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(_&&_.signal.aborted))if(Ss(v)){let y=ei(t.matches,h==null?void 0:h.route.id);u&&u[y.route.id]||(u=me({},u,{[y.route.id]:v.error})),t.fetchers.delete(d)}else if(hi(v))K(!1,"Unhandled fetcher revalidation redirect");else if(mr(v))K(!1,"Unhandled fetcher deferred data");else{let y=zr(v.data);t.fetchers.set(d,y)}}return{loaderData:a,errors:u}}function pm(t,e,n,r){let i=me({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ei(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function mm(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function mt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Dh(t||500,o,new Error(l),!0)}function gm(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(hi(n))return{result:n,idx:e}}}function s0(t){let e=typeof t=="string"?_n(t):t;return Ar(me({},e,{hash:""}))}function kN(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function mr(t){return t.type===Se.deferred}function Ss(t){return t.type===Se.error}function hi(t){return(t&&t.type)===Se.redirect}function RN(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function NN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function PN(t){return gN.has(t.toLowerCase())}function kt(t){return pN.has(t.toLowerCase())}async function _m(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(d=>d.route.id===a.route.id),c=u!=null&&!i0(u,a)&&(s&&s[a.route.id])!==void 0;if(mr(l)&&(i||c)){let d=r[o];K(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await o0(l,d,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function o0(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Se.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Se.error,error:i}}return{type:Se.data,data:t.deferredData.data}}}function Oh(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Gc(t,e){let n=typeof e=="string"?_n(e).search:e.search;if(t[t.length-1].route.index&&Oh(n||""))return t[t.length-1];let r=xa(t);return r[r.length-1]}function vm(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function xu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xN(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function rs(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function AN(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function zr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}const Aa=N.createContext(null),l0=N.createContext(null),Ui=N.createContext(null),Da=N.createContext(null),tr=N.createContext({outlet:null,matches:[],isDataRoute:!1}),a0=N.createContext(null);function DN(t,e){let{relative:n}=e===void 0?{}:e;vo()||K(!1);let{basename:r,navigator:i}=N.useContext(Ui),{hash:s,pathname:o,search:l}=c0(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:ln([r,o])),i.createHref({pathname:a,search:l,hash:s})}function vo(){return N.useContext(Da)!=null}function Oa(){return vo()||K(!1),N.useContext(Da).location}function u0(t){N.useContext(Ui).static||N.useLayoutEffect(t)}function yo(){let{isDataRoute:t}=N.useContext(tr);return t?GN():ON()}function ON(){vo()||K(!1);let t=N.useContext(Aa),{basename:e,navigator:n}=N.useContext(Ui),{matches:r}=N.useContext(tr),{pathname:i}=Oa(),s=JSON.stringify(xa(r).map(a=>a.pathnameBase)),o=N.useRef(!1);return u0(()=>{o.current=!0}),N.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=Ah(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ln([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const LN=N.createContext(null);function MN(t){let e=N.useContext(tr).outlet;return e&&N.createElement(LN.Provider,{value:t},e)}function c0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=N.useContext(tr),{pathname:i}=Oa(),s=JSON.stringify(xa(r).map(o=>o.pathnameBase));return N.useMemo(()=>Ah(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function bN(t,e,n){vo()||K(!1);let{navigator:r}=N.useContext(Ui),{matches:i}=N.useContext(tr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Oa(),u;if(e){var c;let y=typeof e=="string"?_n(e):e;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||K(!1),u=y}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",_=Zr(t,{pathname:h}),v=BN(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ln([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:ln([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?N.createElement(Da.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Te.Pop}},v):v}function FN(){let t=$N(),e=t0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,s)}const UN=N.createElement(FN,null);class zN extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?N.createElement(tr.Provider,{value:this.props.routeContext},N.createElement(a0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jN(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Aa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(tr.Provider,{value:e},r)}function BN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||K(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||UN);let h=e.concat(s.slice(0,u+1)),_=()=>{let v;return c?v=d:a.route.Component?v=N.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,N.createElement(jN,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?N.createElement(zN,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var d0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(d0||{}),Jl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Jl||{});function WN(t){let e=N.useContext(Aa);return e||K(!1),e}function VN(t){let e=N.useContext(l0);return e||K(!1),e}function HN(t){let e=N.useContext(tr);return e||K(!1),e}function h0(t){let e=HN(),n=e.matches[e.matches.length-1];return n.route.id||K(!1),n.route.id}function $N(){var t;let e=N.useContext(a0),n=VN(Jl.UseRouteError),r=h0(Jl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function GN(){let{router:t}=WN(d0.UseNavigateStable),e=h0(Jl.UseNavigateStable),n=N.useRef(!1);return u0(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xl({fromRouteId:e},s)))},[t,e])}const KN="startTransition",ym=B0[KN];function qN(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=N.useState(n.state),{v7_startTransition:o}=r||{},l=N.useCallback(d=>{o&&ym?ym(()=>s(d)):s(d)},[s,o]);N.useLayoutEffect(()=>n.subscribe(l),[n,l]);let a=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,h,_)=>n.navigate(d,{state:h,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(d,h,_)=>n.navigate(d,{replace:!0,state:h,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),u=n.basename||"/",c=N.useMemo(()=>({router:n,navigator:a,static:!1,basename:u}),[n,a,u]);return N.createElement(N.Fragment,null,N.createElement(Aa.Provider,{value:c},N.createElement(l0.Provider,{value:i},N.createElement(XN,{basename:u,location:i.location,navigationType:i.historyAction,navigator:a},i.initialized?N.createElement(QN,{routes:n.routes,state:i}):e))),null)}function QN(t){let{routes:e,state:n}=t;return bN(e,void 0,n)}function YN(t){return MN(t.context)}function XN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Te.Pop,navigator:s,static:o=!1}=t;vo()&&K(!1);let l=e.replace(/^\/*/,"/"),a=N.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=_n(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:_="default"}=r,v=N.useMemo(()=>{let y=Fi(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:_},navigationType:i}},[l,u,c,d,h,_,i]);return v==null?null:N.createElement(Ui.Provider,{value:a},N.createElement(Da.Provider,{children:n,value:v}))}new Promise(()=>{});function JN(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:N.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:N.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eo.apply(this,arguments)}function ZN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tP(t,e){return t.button===0&&(!e||e==="_self")&&!eP(t)}const nP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function rP(t,e){return EN({basename:e==null?void 0:e.basename,future:eo({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:VR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||iP(),routes:t,mapRouteProperties:JN}).initialize()}function iP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=eo({},e,{errors:sP(e.errors)})),e}function sP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Dh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const oP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aP=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=ZN(e,nP),{basename:h}=N.useContext(Ui),_,v=!1;if(typeof u=="string"&&lP.test(u)&&(_=u,oP))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),p=Fi(g.pathname,h);g.origin===f.origin&&p!=null?u=p+g.search+g.hash:v=!0}catch{}let y=DN(u,{relative:i}),I=uP(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||I(f)}return N.createElement("a",eo({},d,{href:_||y,onClick:v||s?r:m,ref:n,target:a}))});var wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(wm||(wm={}));var Em;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Em||(Em={}));function uP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=yo(),a=Oa(),u=c0(t,{relative:o});return N.useCallback(c=>{if(tP(c,n)){c.preventDefault();let d=r!==void 0?r:Ar(a)===Ar(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}function Lh({onClick:t,children:e,type:n}){const[r,i]=N.useState(null);return N.useEffect(()=>{n==="CTA"&&i("bg-slate-700 text-white")},[]),z.jsx("input",{type:"button",onClick:t,value:e,className:`h-12 p-2 border-2 border-slate-700 rounded-2xl mt-4 mb-4 cursor-pointer w-full ${r} `})}function f0(){return z.jsx("div",{className:"p-6 rounded-t-2xl flex justify-center bg-slate-700 text-white",children:"© Maciej Tomaszewski 2023"})}function cP(){const t=yo();function e(){T1(ki).then(()=>{t("/login")}).catch(s=>{console.log(s)})}const[n,r]=N.useState(!1);function i(){r(!n)}return z.jsxs("nav",{className:"flex justify-between bg-slate-700 text-white relative p-6 rounded-b-2xl",children:[z.jsx(aP,{to:"/",children:"Settlements"}),z.jsx("div",{onClick:i,children:"BURGER MENU"}),z.jsxs("aside",{className:`${n?"visible":"hidden"}  absolute right-0 top-0 w-96 h-screenIOs bg-white grid grid-rows-AppTemplate z-10`,children:[z.jsx("div",{className:"text-right p-6 bg-slate-700 rounded-b-2xl w-full",children:z.jsx("div",{onClick:i,children:"CLOSE MENU"})}),z.jsxs("div",{className:"text-slate-700 w-full p-6 flex flex-col items-end",children:[z.jsx("p",{children:"Account"}),z.jsx("p",{children:"text2"})]}),z.jsxs("div",{children:[z.jsx("div",{className:"pl-6 pr-6 pb-4 w-full",children:z.jsx(Lh,{onClick:e,type:"CTA",children:"Log out"})}),z.jsx(f0,{})]})]})]})}function dP(){return z.jsxs("main",{className:"text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate",children:[z.jsx(cP,{}),z.jsx("main",{className:"p-6",children:z.jsx(YN,{})}),z.jsx(f0,{})]})}function hP(){const t=yo(),[e,n]=N.useState(!1);return N.useEffect(function(){zy(ki,async r=>{if(r){console.log("AUTH: Logged");const i=await BR(r);i&&n(i),i||await WR(r)}else t("/login")})},[]),e?z.jsx(dP,{}):z.jsx("div",{className:"w-full h-screen flex justify-center items-center",children:"LOADING"})}function fP(){const t=yo();N.useEffect(()=>{zy(ki,n=>{t(n?"/":"/login")})},[]);function e(){const n=new Bt;G1(ki,n).then(r=>{const i=Bt.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return z.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:z.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",z.jsx("br",{}),z.jsx(Lh,{onClick:e,type:"CTA",children:"Sign In With Google"})]})})}function pP({event:t}){return z.jsxs("div",{className:"border-2 border-slate-700 p-4 rounded-2xl mt-2 mb-2",children:[t.name,z.jsx("br",{}),t.owner,z.jsx("br",{}),t.date]},"bang")}function Sm({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(e===!1)return z.jsx("div",{children:"loading"});if(e)return e.map(o=>z.jsx(pP,{event:o}))},i=yo();function s(){i("/events/create")}return z.jsxs("div",{children:[z.jsx("p",{children:t}),n?z.jsx(Lh,{onClick:s,type:"CTA",children:"Add Event"}):null,r()]})}function mP(){const[t,e]=N.useState(!1),[n,r]=N.useState(!1);async function i(s){const o=await im(s,"myEvents");o&&e(o);const l=await im(s,"participateEvents");l&&r(l)}return N.useEffect(()=>{ki.currentUser!=null&&i(ki.currentUser.uid)},[]),z.jsxs(z.Fragment,{children:[z.jsx(Sm,{buttonAddEvent:!0,title:"Your events",events:t}),z.jsx("br",{}),z.jsx(Sm,{buttonAddEvent:!1,title:"Events you participate in",events:n})]})}function gP(){return z.jsx("div",{children:"EventCreate"})}const _P=rP([{path:"/",element:z.jsx(hP,{}),children:[{path:"/",element:z.jsx(mP,{})},{path:"/events/create",element:z.jsx(gP,{})}]},{path:"/login",element:z.jsx(fP,{})}]);Au.createRoot(document.getElementById("root")).render(z.jsx(Dm.StrictMode,{children:z.jsx(qN,{router:_P})}));
