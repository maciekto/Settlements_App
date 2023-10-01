function O1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Kv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qv={exports:{}},iu={},qv={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),D1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),L1=Symbol.for("react.strict_mode"),F1=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),z1=Symbol.for("react.context"),j1=Symbol.for("react.forward_ref"),B1=Symbol.for("react.suspense"),W1=Symbol.for("react.memo"),$1=Symbol.for("react.lazy"),$p=Symbol.iterator;function V1(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var Xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,Zv={};function is(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Xv}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ey(){}ey.prototype=is.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Xv}var xf=bf.prototype=new ey;xf.constructor=bf;Jv(xf,is.prototype);xf.isPureReactComponent=!0;var Vp=Array.isArray,ty=Object.prototype.hasOwnProperty,Rf={current:null},ny={key:!0,ref:!0,__self:!0,__source:!0};function ry(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ty.call(e,r)&&!ny.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:Rf.current}}function H1(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function G1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hp=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G1(""+t.key):e.toString(36)}function ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case D1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tc(o,0):r,Vp(i)?(n="",t!=null&&(n=t.replace(Hp,"$&/")+"/"),ja(i,e,n,"",function(u){return u})):i!=null&&(Nf(i)&&(i=H1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+tc(s,a);o+=ja(s,e,n,l,i)}else if(l=V1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+tc(s,a++),o+=ja(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],i=0;return ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Ba={transition:null},K1={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Rf};Z.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!Nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=is;Z.Fragment=M1;Z.Profiler=F1;Z.PureComponent=bf;Z.StrictMode=L1;Z.Suspense=B1;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ty.call(e,l)&&!ny.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:z1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:U1,_context:t},t.Consumer=t};Z.createElement=ry;Z.createFactory=function(t){var e=ry.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:j1,render:t}};Z.isValidElement=Nf;Z.lazy=function(t){return{$$typeof:$1,_payload:{_status:-1,_result:t},_init:Y1}};Z.memo=function(t,e){return{$$typeof:W1,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return it.current.useCallback(t,e)};Z.useContext=function(t){return it.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return it.current.useDeferredValue(t)};Z.useEffect=function(t,e){return it.current.useEffect(t,e)};Z.useId=function(){return it.current.useId()};Z.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return it.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};Z.useRef=function(t){return it.current.useRef(t)};Z.useState=function(t){return it.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return it.current.useTransition()};Z.version="18.2.0";qv.exports=Z;var I=qv.exports;const su=Kv(I),Q1=O1({__proto__:null,default:su},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1=I,X1=Symbol.for("react.element"),J1=Symbol.for("react.fragment"),Z1=Object.prototype.hasOwnProperty,eS=q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tS={key:!0,ref:!0,__self:!0,__source:!0};function iy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Z1.call(e,r)&&!tS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:X1,type:t,key:s,ref:o,props:i,_owner:eS.current}}iu.Fragment=J1;iu.jsx=iy;iu.jsxs=iy;Qv.exports=iu;var A=Qv.exports,Qc={},sy={exports:{}},wt={},oy={exports:{}},ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var G=N.length;N.push(z);e:for(;0<G;){var ye=G-1>>>1,Ne=N[ye];if(0<i(Ne,z))N[ye]=z,N[G]=Ne,G=ye;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],G=N.pop();if(G!==z){N[0]=G;e:for(var ye=0,Ne=N.length,ai=Ne>>>1;ye<ai;){var ue=2*(ye+1)-1,an=N[ue],Gt=ue+1,li=N[Gt];if(0>i(an,G))Gt<Ne&&0>i(li,an)?(N[ye]=li,N[Gt]=G,ye=Gt):(N[ye]=an,N[ue]=G,ye=ue);else if(Gt<Ne&&0>i(li,G))N[ye]=li,N[Gt]=G,ye=Gt;else break e}}return z}function i(N,z){var G=N.sortIndex-z.sortIndex;return G!==0?G:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function p(N){if(_=!1,v(N),!y)if(n(l)!==null)y=!0,mt(C);else{var z=n(u);z!==null&&Ht(p,z.startTime-N)}}function C(N,z){y=!1,_&&(_=!1,m(P),P=-1),g=!0;var G=f;try{for(v(z),d=n(l);d!==null&&(!(d.expirationTime>z)||N&&!ze());){var ye=d.callback;if(typeof ye=="function"){d.callback=null,f=d.priorityLevel;var Ne=ye(d.expirationTime<=z);z=t.unstable_now(),typeof Ne=="function"?d.callback=Ne:d===n(l)&&r(l),v(z)}else r(l);d=n(l)}if(d!==null)var ai=!0;else{var ue=n(u);ue!==null&&Ht(p,ue.startTime-z),ai=!1}return ai}finally{d=null,f=G,g=!1}}var R=!1,b=null,P=-1,W=5,U=-1;function ze(){return!(t.unstable_now()-U<W)}function le(){if(b!==null){var N=t.unstable_now();U=N;var z=!0;try{z=b(!0,N)}finally{z?Vt():(R=!1,b=null)}}else R=!1}var Vt;if(typeof h=="function")Vt=function(){h(le)};else if(typeof MessageChannel<"u"){var On=new MessageChannel,Dn=On.port2;On.port1.onmessage=le,Vt=function(){Dn.postMessage(null)}}else Vt=function(){S(le,0)};function mt(N){b=N,R||(R=!0,Vt())}function Ht(N,z){P=S(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,mt(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var G=f;f=z;try{return N()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=f;f=N;try{return z()}finally{f=G}},t.unstable_scheduleCallback=function(N,z,G){var ye=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ye+G:ye):G=ye,N){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=G+Ne,N={id:c++,callback:z,priorityLevel:N,startTime:G,expirationTime:Ne,sortIndex:-1},G>ye?(N.sortIndex=G,e(u,N),n(l)===null&&N===n(u)&&(_?(m(P),P=-1):_=!0,Ht(p,G-ye))):(N.sortIndex=Ne,e(l,N),y||g||(y=!0,mt(C))),N},t.unstable_shouldYield=ze,t.unstable_wrapCallback=function(N){var z=f;return function(){var G=f;f=z;try{return N.apply(this,arguments)}finally{f=G}}}})(ay);oy.exports=ay;var nS=oy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=I,_t=nS;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uy=new Set,so={};function ii(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(so[t]=e,t=0;t<e.length;t++)uy.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,rS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Yp={};function iS(t){return qc.call(Yp,t)?!0:qc.call(Gp,t)?!1:rS.test(t)?Yp[t]=!0:(Gp[t]=!0,!1)}function sS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oS(t,e,n,r){if(e===null||typeof e>"u"||sS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Af);Ye[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Af);Ye[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Af);Ye[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Of(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,n,i,r)&&(n=null),r||i===null?iS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),fi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),dy=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),fy=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,nc;function Fs(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var rc=!1;function ic(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function aS(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case fi:return"Portal";case Xc:return"Profiler";case Df:return"StrictMode";case Jc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dy:return(t.displayName||"Context")+".Consumer";case cy:return(t._context.displayName||"Context")+".Provider";case Mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:ed(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return ed(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ed(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=hy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ha(t){t._valueTracker||(t._valueTracker=uS(t))}function py(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function td(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function my(t,e){e=e.checked,e!=null&&Of(t,"checked",e,!1)}function nd(t,e){my(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&rd(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rd(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Us(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function gy(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,yy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function _y(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function wy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_y(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dS=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(t,e){if(e){if(dS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ud=null,Pi=null,Ai=null;function Zp(t){if(t=Vo(t)){if(typeof ud!="function")throw Error(T(280));var e=t.stateNode;e&&(e=cu(e),ud(t.stateNode,t.type,e))}}function Ey(t){Pi?Ai?Ai.push(t):Ai=[t]:Pi=t}function Sy(){if(Pi){var t=Pi,e=Ai;if(Ai=Pi=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function Cy(t,e){return t(e)}function ky(){}var sc=!1;function Iy(t,e,n){if(sc)return t(e,n);sc=!0;try{return Cy(t,e,n)}finally{sc=!1,(Pi!==null||Ai!==null)&&(ky(),Sy())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var cd=!1;if(wn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){cd=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{cd=!1}function fS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $s=!1,sl=null,ol=!1,dd=null,hS={onError:function(t){$s=!0,sl=t}};function pS(t,e,n,r,i,s,o,a,l){$s=!1,sl=null,fS.apply(hS,arguments)}function mS(t,e,n,r,i,s,o,a,l){if(pS.apply(this,arguments),$s){if($s){var u=sl;$s=!1,sl=null}else throw Error(T(198));ol||(ol=!0,dd=u)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function em(t){if(si(t)!==t)throw Error(T(188))}function gS(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return em(i),t;if(s===r)return em(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function by(t){return t=gS(t),t!==null?xy(t):null}function xy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xy(t);if(e!==null)return e;t=t.sibling}return null}var Ry=_t.unstable_scheduleCallback,tm=_t.unstable_cancelCallback,vS=_t.unstable_shouldYield,yS=_t.unstable_requestPaint,Re=_t.unstable_now,_S=_t.unstable_getCurrentPriorityLevel,Uf=_t.unstable_ImmediatePriority,Ny=_t.unstable_UserBlockingPriority,al=_t.unstable_NormalPriority,wS=_t.unstable_LowPriority,Py=_t.unstable_IdlePriority,ou=null,Jt=null;function ES(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:kS,SS=Math.log,CS=Math.LN2;function kS(t){return t>>>=0,t===0?32:31-(SS(t)/CS|0)|0}var ma=64,ga=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zs(a):(s&=o,s!==0&&(r=zs(s)))}else o=n&~i,o!==0?r=zs(o):s!==0&&(r=zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function IS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=IS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ay(){var t=ma;return ma<<=1,!(ma&4194240)&&(ma=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function bS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Oy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dy,jf,My,Ly,Fy,hd=!1,va=[],qn=null,Xn=null,Jn=null,lo=new Map,uo=new Map,Wn=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nm(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vo(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RS(t,e,n,r,i){switch(e){case"focusin":return qn=Cs(qn,t,e,n,r,i),!0;case"dragenter":return Xn=Cs(Xn,t,e,n,r,i),!0;case"mouseover":return Jn=Cs(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,Cs(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,uo.set(s,Cs(uo.get(s)||null,t,e,n,r,i)),!0}return!1}function Uy(t){var e=Nr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=Ty(n),e!==null){t.blockedOn=e,Fy(t.priority,function(){My(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ld=r,n.target.dispatchEvent(r),ld=null}else return e=Vo(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function rm(t,e,n){Wa(t)&&n.delete(e)}function NS(){hd=!1,qn!==null&&Wa(qn)&&(qn=null),Xn!==null&&Wa(Xn)&&(Xn=null),Jn!==null&&Wa(Jn)&&(Jn=null),lo.forEach(rm),uo.forEach(rm)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,hd||(hd=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,NS)))}function co(t){function e(i){return ks(i,t)}if(0<va.length){ks(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&ks(qn,t),Xn!==null&&ks(Xn,t),Jn!==null&&ks(Jn,t),lo.forEach(e),uo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)Uy(n),n.blockedOn===null&&Wn.shift()}var Oi=Rn.ReactCurrentBatchConfig,ul=!0;function PS(t,e,n,r){var i=re,s=Oi.transition;Oi.transition=null;try{re=1,Bf(t,e,n,r)}finally{re=i,Oi.transition=s}}function AS(t,e,n,r){var i=re,s=Oi.transition;Oi.transition=null;try{re=4,Bf(t,e,n,r)}finally{re=i,Oi.transition=s}}function Bf(t,e,n,r){if(ul){var i=pd(t,e,n,r);if(i===null)gc(t,e,r,cl,n),nm(t,r);else if(RS(i,t,e,n,r))r.stopPropagation();else if(nm(t,r),e&4&&-1<xS.indexOf(t)){for(;i!==null;){var s=Vo(i);if(s!==null&&Dy(s),s=pd(t,e,n,r),s===null&&gc(t,e,r,cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gc(t,e,r,null,n)}}var cl=null;function pd(t,e,n,r){if(cl=null,t=Ff(r),t=Nr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function zy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_S()){case Uf:return 1;case Ny:return 4;case al:case wS:return 16;case Py:return 536870912;default:return 16}default:return 16}}var Yn=null,Wf=null,$a=null;function jy(){if($a)return $a;var t,e=Wf,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $a=i.slice(t,1<r?1-r:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function im(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:im,this.isPropagationStopped=im,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=Et(ss),$o=ke({},ss,{view:0,detail:0}),OS=Et($o),ac,lc,Is,au=ke({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(ac=t.screenX-Is.screenX,lc=t.screenY-Is.screenY):lc=ac=0,Is=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),sm=Et(au),DS=ke({},au,{dataTransfer:0}),MS=Et(DS),LS=ke({},$o,{relatedTarget:0}),uc=Et(LS),FS=ke({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Et(FS),zS=ke({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jS=Et(zS),BS=ke({},ss,{data:0}),om=Et(BS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VS[t])?!!e[t]:!1}function Vf(){return HS}var GS=ke({},$o,{key:function(t){if(t.key){var e=WS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=Et(GS),KS=ke({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=Et(KS),QS=ke({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),qS=Et(QS),XS=ke({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=Et(XS),ZS=ke({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=Et(ZS),tC=[9,13,27,32],Hf=wn&&"CompositionEvent"in window,Vs=null;wn&&"documentMode"in document&&(Vs=document.documentMode);var nC=wn&&"TextEvent"in window&&!Vs,By=wn&&(!Hf||Vs&&8<Vs&&11>=Vs),lm=String.fromCharCode(32),um=!1;function Wy(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function rC(t,e){switch(t){case"compositionend":return $y(e);case"keypress":return e.which!==32?null:(um=!0,lm);case"textInput":return t=e.data,t===lm&&um?null:t;default:return null}}function iC(t,e){if(pi)return t==="compositionend"||!Hf&&Wy(t,e)?(t=jy(),$a=Wf=Yn=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return By&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function Vy(t,e,n,r){Ey(r),e=dl(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,fo=null;function oC(t){t_(t,0)}function lu(t){var e=vi(t);if(py(e))return t}function aC(t,e){if(t==="change")return e}var Hy=!1;if(wn){var cc;if(wn){var dc="oninput"in document;if(!dc){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),dc=typeof dm.oninput=="function"}cc=dc}else cc=!1;Hy=cc&&(!document.documentMode||9<document.documentMode)}function fm(){Hs&&(Hs.detachEvent("onpropertychange",Gy),fo=Hs=null)}function Gy(t){if(t.propertyName==="value"&&lu(fo)){var e=[];Vy(e,fo,t,Ff(t)),Iy(oC,e)}}function lC(t,e,n){t==="focusin"?(fm(),Hs=e,fo=n,Hs.attachEvent("onpropertychange",Gy)):t==="focusout"&&fm()}function uC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(fo)}function cC(t,e){if(t==="click")return lu(e)}function dC(t,e){if(t==="input"||t==="change")return lu(e)}function fC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:fC;function ho(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,e){var n=hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function Yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ky(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hC(t){var e=Ky(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yy(n.ownerDocument.documentElement,n)){if(r!==null&&Gf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=pm(n,s);var o=pm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=wn&&"documentMode"in document&&11>=document.documentMode,mi=null,md=null,Gs=null,gd=!1;function mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gd||mi==null||mi!==il(r)||(r=mi,"selectionStart"in r&&Gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&ho(Gs,r)||(Gs=r,r=dl(md,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},fc={},Qy={};wn&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function uu(t){if(fc[t])return fc[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qy)return fc[t]=e[n];return t}var qy=uu("animationend"),Xy=uu("animationiteration"),Jy=uu("animationstart"),Zy=uu("transitionend"),e_=new Map,gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){e_.set(t,e),ii(e,[t])}for(var hc=0;hc<gm.length;hc++){var pc=gm[hc],mC=pc.toLowerCase(),gC=pc[0].toUpperCase()+pc.slice(1);_r(mC,"on"+gC)}_r(qy,"onAnimationEnd");_r(Xy,"onAnimationIteration");_r(Jy,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Zy,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function vm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mS(r,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vm(i,a,u),s=l}}}if(ol)throw t=dd,ol=!1,dd=null,t}function fe(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var r=t+"__bubble";n.has(r)||(n_(e,t,2,!1),n.add(r))}function mc(t,e,n){var r=0;e&&(r|=4),n_(n,t,r,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[wa]){t[wa]=!0,uy.forEach(function(n){n!=="selectionchange"&&(vC.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,mc("selectionchange",!1,e))}}function n_(t,e,n,r){switch(zy(e)){case 1:var i=PS;break;case 4:i=AS;break;default:i=Bf}n=i.bind(null,e,n,t),i=void 0,!cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Iy(function(){var u=s,c=Ff(n),d=[];e:{var f=e_.get(t);if(f!==void 0){var g=$f,y=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":g=YS;break;case"focusin":y="focus",g=uc;break;case"focusout":y="blur",g=uc;break;case"beforeblur":case"afterblur":g=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qS;break;case qy:case Xy:case Jy:g=US;break;case Zy:g=JS;break;case"scroll":g=OS;break;case"wheel":g=eC;break;case"copy":case"cut":case"paste":g=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=am}var _=(e&4)!==0,S=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,v;h!==null;){v=h;var p=v.stateNode;if(v.tag===5&&p!==null&&(v=p,m!==null&&(p=ao(h,m),p!=null&&_.push(mo(h,p,v)))),S)break;h=h.return}0<_.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ld&&(y=n.relatedTarget||n.fromElement)&&(Nr(y)||y[En]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Nr(y):null,y!==null&&(S=si(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=sm,p="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=am,p="onPointerLeave",m="onPointerEnter",h="pointer"),S=g==null?f:vi(g),v=y==null?f:vi(y),f=new _(p,h+"leave",g,n,c),f.target=S,f.relatedTarget=v,p=null,Nr(c)===u&&(_=new _(m,h+"enter",y,n,c),_.target=v,_.relatedTarget=S,p=_),S=p,g&&y)t:{for(_=g,m=y,h=0,v=_;v;v=ui(v))h++;for(v=0,p=m;p;p=ui(p))v++;for(;0<h-v;)_=ui(_),h--;for(;0<v-h;)m=ui(m),v--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=ui(_),m=ui(m)}_=null}else _=null;g!==null&&ym(d,f,g,_,!1),y!==null&&S!==null&&ym(d,S,y,_,!0)}}e:{if(f=u?vi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=aC;else if(cm(f))if(Hy)C=dC;else{C=uC;var R=lC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=cC);if(C&&(C=C(t,u))){Vy(d,C,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&rd(f,"number",f.value)}switch(R=u?vi(u):window,t){case"focusin":(cm(R)||R.contentEditable==="true")&&(mi=R,md=u,Gs=null);break;case"focusout":Gs=md=mi=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,mm(d,n,c);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":mm(d,n,c)}var b;if(Hf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pi?Wy(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(By&&n.locale!=="ko"&&(pi||P!=="onCompositionStart"?P==="onCompositionEnd"&&pi&&(b=jy()):(Yn=c,Wf="value"in Yn?Yn.value:Yn.textContent,pi=!0)),R=dl(u,P),0<R.length&&(P=new om(P,t,null,n,c),d.push({event:P,listeners:R}),b?P.data=b:(b=$y(n),b!==null&&(P.data=b)))),(b=nC?rC(t,n):iC(t,n))&&(u=dl(u,"onBeforeInput"),0<u.length&&(c=new om("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}t_(d,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):i||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yC=/\r\n?/g,_C=/\u0000|\uFFFD/g;function _m(t){return(typeof t=="string"?t:""+t).replace(yC,`
`).replace(_C,"")}function Ea(t,e,n){if(e=_m(e),_m(t)!==e&&n)throw Error(T(425))}function fl(){}var vd=null,yd=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(SC)}:wd;function SC(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),Qt="__reactFiber$"+os,go="__reactProps$"+os,En="__reactContainer$"+os,Ed="__reactEvents$"+os,CC="__reactListeners$"+os,kC="__reactHandles$"+os;function Nr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[Qt])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[Qt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function cu(t){return t[go]||null}var Sd=[],yi=-1;function wr(t){return{current:t}}function me(t){0>yi||(t.current=Sd[yi],Sd[yi]=null,yi--)}function de(t,e){yi++,Sd[yi]=t.current,t.current=e}var cr={},Ze=wr(cr),ct=wr(!1),Vr=cr;function $i(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function hl(){me(ct),me(Ze)}function Sm(t,e,n){if(Ze.current!==cr)throw Error(T(168));de(Ze,e),de(ct,n)}function r_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,lS(t)||"Unknown",i));return ke({},n,r)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Vr=Ze.current,de(Ze,t),de(ct,ct.current),!0}function Cm(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=r_(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,me(ct),me(Ze),de(Ze,t)):me(ct),de(ct,n)}var dn=null,du=!1,yc=!1;function i_(t){dn===null?dn=[t]:dn.push(t)}function IC(t){du=!0,i_(t)}function Er(){if(!yc&&dn!==null){yc=!0;var t=0,e=re;try{var n=dn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,du=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),Ry(Uf,Er),i}finally{re=e,yc=!1}}return null}var _i=[],wi=0,ml=null,gl=0,kt=[],It=0,Hr=null,fn=1,hn="";function Tr(t,e){_i[wi++]=gl,_i[wi++]=ml,ml=t,gl=e}function s_(t,e,n){kt[It++]=fn,kt[It++]=hn,kt[It++]=Hr,Hr=t;var r=fn;t=hn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-jt(e)+i|n<<i|r,hn=s+t}else fn=1<<s|n<<i|r,hn=t}function Yf(t){t.return!==null&&(Tr(t,1),s_(t,1,0))}function Kf(t){for(;t===ml;)ml=_i[--wi],_i[wi]=null,gl=_i[--wi],_i[wi]=null;for(;t===Hr;)Hr=kt[--It],kt[It]=null,hn=kt[--It],kt[It]=null,fn=kt[--It],kt[It]=null}var yt=null,vt=null,ve=!1,Mt=null;function o_(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,vt=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:fn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,vt=null,!0):!1;default:return!1}}function Cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kd(t){if(ve){var e=vt;if(e){var n=e;if(!km(t,e)){if(Cd(t))throw Error(T(418));e=Zn(n.nextSibling);var r=yt;e&&km(t,e)?o_(r,n):(t.flags=t.flags&-4097|2,ve=!1,yt=t)}}else{if(Cd(t))throw Error(T(418));t.flags=t.flags&-4097|2,ve=!1,yt=t}}}function Im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function Sa(t){if(t!==yt)return!1;if(!ve)return Im(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=vt)){if(Cd(t))throw a_(),Error(T(418));for(;e;)o_(t,e),e=Zn(e.nextSibling)}if(Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=yt?Zn(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=vt;t;)t=Zn(t.nextSibling)}function Vi(){vt=yt=null,ve=!1}function Qf(t){Mt===null?Mt=[t]:Mt.push(t)}var TC=Rn.ReactCurrentBatchConfig;function At(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vl=wr(null),yl=null,Ei=null,qf=null;function Xf(){qf=Ei=yl=null}function Jf(t){var e=vl.current;me(vl),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){yl=t,qf=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(yl===null)throw Error(T(308));Ei=t,yl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Pr=null;function Zf(t){Pr===null?Pr=[t]:Pr.push(t)}function l_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function Ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zf(t,n)}}function Tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=ke({},d,f);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=d}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var c_=new ly.Component().refs;function Td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=nr(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(Bt(e,t,i,r),Ha(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=nr(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(Bt(e,t,i,r),Ha(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=nr(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=er(t,i,r),e!==null&&(Bt(e,t,r,n),Ha(e,t,r))}};function xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,r)||!ho(i,s):!0}function d_(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=dt(e)?Vr:Ze.current,r=e.contextTypes,s=(r=r!=null)?$i(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function bd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=c_,eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=dt(e)?Vr:Ze.current,i.context=$i(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fu.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===c_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function f_(t){function e(m,h){if(t){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=rr(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,p){return h===null||h.tag!==6?(h=Ic(v,m.mode,p),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,p){var C=v.type;return C===hi?c(m,h,v.props.children,p,v.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&Nm(C)===h.type)?(p=i(h,v.props),p.ref=Ts(m,h,v),p.return=m,p):(p=Xa(v.type,v.key,v.props,null,m.mode,p),p.ref=Ts(m,h,v),p.return=m,p)}function u(m,h,v,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Tc(v,m.mode,p),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function c(m,h,v,p,C){return h===null||h.tag!==7?(h=jr(v,m.mode,p,C),h.return=m,h):(h=i(h,v),h.return=m,h)}function d(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ic(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fa:return v=Xa(h.type,h.key,h.props,null,m.mode,v),v.ref=Ts(m,null,h),v.return=m,v;case fi:return h=Tc(h,m.mode,v),h.return=m,h;case jn:var p=h._init;return d(m,p(h._payload),v)}if(Us(h)||Es(h))return h=jr(h,m.mode,v,null),h.return=m,h;Ca(m,h)}return null}function f(m,h,v,p){var C=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(m,h,""+v,p);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:return v.key===C?l(m,h,v,p):null;case fi:return v.key===C?u(m,h,v,p):null;case jn:return C=v._init,f(m,h,C(v._payload),p)}if(Us(v)||Es(v))return C!==null?null:c(m,h,v,p,null);Ca(m,v)}return null}function g(m,h,v,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(v)||null,a(h,m,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fa:return m=m.get(p.key===null?v:p.key)||null,l(h,m,p,C);case fi:return m=m.get(p.key===null?v:p.key)||null,u(h,m,p,C);case jn:var R=p._init;return g(m,h,v,R(p._payload),C)}if(Us(p)||Es(p))return m=m.get(v)||null,c(h,m,p,C,null);Ca(h,p)}return null}function y(m,h,v,p){for(var C=null,R=null,b=h,P=h=0,W=null;b!==null&&P<v.length;P++){b.index>P?(W=b,b=null):W=b.sibling;var U=f(m,b,v[P],p);if(U===null){b===null&&(b=W);break}t&&b&&U.alternate===null&&e(m,b),h=s(U,h,P),R===null?C=U:R.sibling=U,R=U,b=W}if(P===v.length)return n(m,b),ve&&Tr(m,P),C;if(b===null){for(;P<v.length;P++)b=d(m,v[P],p),b!==null&&(h=s(b,h,P),R===null?C=b:R.sibling=b,R=b);return ve&&Tr(m,P),C}for(b=r(m,b);P<v.length;P++)W=g(b,m,P,v[P],p),W!==null&&(t&&W.alternate!==null&&b.delete(W.key===null?P:W.key),h=s(W,h,P),R===null?C=W:R.sibling=W,R=W);return t&&b.forEach(function(ze){return e(m,ze)}),ve&&Tr(m,P),C}function _(m,h,v,p){var C=Es(v);if(typeof C!="function")throw Error(T(150));if(v=C.call(v),v==null)throw Error(T(151));for(var R=C=null,b=h,P=h=0,W=null,U=v.next();b!==null&&!U.done;P++,U=v.next()){b.index>P?(W=b,b=null):W=b.sibling;var ze=f(m,b,U.value,p);if(ze===null){b===null&&(b=W);break}t&&b&&ze.alternate===null&&e(m,b),h=s(ze,h,P),R===null?C=ze:R.sibling=ze,R=ze,b=W}if(U.done)return n(m,b),ve&&Tr(m,P),C;if(b===null){for(;!U.done;P++,U=v.next())U=d(m,U.value,p),U!==null&&(h=s(U,h,P),R===null?C=U:R.sibling=U,R=U);return ve&&Tr(m,P),C}for(b=r(m,b);!U.done;P++,U=v.next())U=g(b,m,P,U.value,p),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?P:U.key),h=s(U,h,P),R===null?C=U:R.sibling=U,R=U);return t&&b.forEach(function(le){return e(m,le)}),ve&&Tr(m,P),C}function S(m,h,v,p){if(typeof v=="object"&&v!==null&&v.type===hi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:e:{for(var C=v.key,R=h;R!==null;){if(R.key===C){if(C=v.type,C===hi){if(R.tag===7){n(m,R.sibling),h=i(R,v.props.children),h.return=m,m=h;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&Nm(C)===R.type){n(m,R.sibling),h=i(R,v.props),h.ref=Ts(m,R,v),h.return=m,m=h;break e}n(m,R);break}else e(m,R);R=R.sibling}v.type===hi?(h=jr(v.props.children,m.mode,p,v.key),h.return=m,m=h):(p=Xa(v.type,v.key,v.props,null,m.mode,p),p.ref=Ts(m,h,v),p.return=m,m=p)}return o(m);case fi:e:{for(R=v.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Tc(v,m.mode,p),h.return=m,m=h}return o(m);case jn:return R=v._init,S(m,h,R(v._payload),p)}if(Us(v))return y(m,h,v,p);if(Es(v))return _(m,h,v,p);Ca(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=Ic(v,m.mode,p),h.return=m,m=h),o(m)):n(m,h)}return S}var Hi=f_(!0),h_=f_(!1),Ho={},Zt=wr(Ho),vo=wr(Ho),yo=wr(Ho);function Ar(t){if(t===Ho)throw Error(T(174));return t}function th(t,e){switch(de(yo,e),de(vo,t),de(Zt,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}me(Zt),de(Zt,e)}function Gi(){me(Zt),me(vo),me(yo)}function p_(t){Ar(yo.current);var e=Ar(Zt.current),n=sd(e,t.type);e!==n&&(de(vo,t),de(Zt,n))}function nh(t){vo.current===t&&(me(Zt),me(vo))}var Ee=wr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function rh(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var Ga=Rn.ReactCurrentDispatcher,wc=Rn.ReactCurrentBatchConfig,Gr=0,Ce=null,De=null,Be=null,El=!1,Ys=!1,_o=0,bC=0;function Qe(){throw Error(T(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function sh(t,e,n,r,i,s){if(Gr=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?PC:AC,t=n(r,i),Ys){s=0;do{if(Ys=!1,_o=0,25<=s)throw Error(T(301));s+=1,Be=De=null,e.updateQueue=null,Ga.current=OC,t=n(r,i)}while(Ys)}if(Ga.current=Sl,e=De!==null&&De.next!==null,Gr=0,Be=De=Ce=null,El=!1,e)throw Error(T(300));return t}function oh(){var t=_o!==0;return _o=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ce.memoizedState=Be=t:Be=Be.next=t,Be}function Rt(){if(De===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Be===null?Ce.memoizedState:Be.next;if(e!==null)Be=e,De=t;else{if(t===null)throw Error(T(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Ce.memoizedState=Be=t:Be=Be.next=t}return Be}function wo(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=Rt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ce.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$t(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=Rt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function m_(){}function g_(t,e){var n=Ce,r=Rt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,ah(__.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Eo(9,y_.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(T(349));Gr&30||v_(n,e,i)}return i}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function y_(t,e,n,r){e.value=n,e.getSnapshot=r,w_(e)&&E_(t)}function __(t,e,n){return n(function(){w_(e)&&E_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function E_(t){var e=Sn(t,1);e!==null&&Bt(e,t,1,-1)}function Pm(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=NC.bind(null,Ce,t),[e.memoizedState,t]}function Eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S_(){return Rt().memoizedState}function Ya(t,e,n,r){var i=Kt();Ce.flags|=t,i.memoizedState=Eo(1|e,n,void 0,r===void 0?null:r)}function hu(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&ih(r,o.deps)){i.memoizedState=Eo(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=Eo(1|e,n,s,r)}function Am(t,e){return Ya(8390656,8,t,e)}function ah(t,e){return hu(2048,8,t,e)}function C_(t,e){return hu(4,2,t,e)}function k_(t,e){return hu(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,I_.bind(null,e,t),n)}function lh(){}function b_(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return Gr&21?($t(n,e)||(n=Ay(),Ce.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function xC(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=wc.transition;wc.transition={};try{t(!1),e()}finally{re=n,wc.transition=r}}function N_(){return Rt().memoizedState}function RC(t,e,n){var r=nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))A_(e,n);else if(n=l_(t,e,n,r),n!==null){var i=rt();Bt(n,t,r,i),O_(n,e,r)}}function NC(t,e,n){var r=nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))A_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$t(a,o)){var l=e.interleaved;l===null?(i.next=i,Zf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=l_(t,e,i,r),n!==null&&(i=rt(),Bt(n,t,r,i),O_(n,e,r))}}function P_(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function A_(t,e){Ys=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zf(t,n)}}var Sl={readContext:xt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},PC={readContext:xt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RC.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:lh,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=xC.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=Kt();if(ve){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Ve===null)throw Error(T(349));Gr&30||v_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Am(__.bind(null,r,s,t),[t]),r.flags|=2048,Eo(9,y_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Ve.identifierPrefix;if(ve){var n=hn,r=fn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AC={readContext:xt,useCallback:b_,useContext:xt,useEffect:ah,useImperativeHandle:T_,useInsertionEffect:C_,useLayoutEffect:k_,useMemo:x_,useReducer:Ec,useRef:S_,useState:function(){return Ec(wo)},useDebugValue:lh,useDeferredValue:function(t){var e=Rt();return R_(e,De.memoizedState,t)},useTransition:function(){var t=Ec(wo)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:N_,unstable_isNewReconciler:!1},OC={readContext:xt,useCallback:b_,useContext:xt,useEffect:ah,useImperativeHandle:T_,useInsertionEffect:C_,useLayoutEffect:k_,useMemo:x_,useReducer:Sc,useRef:S_,useState:function(){return Sc(wo)},useDebugValue:lh,useDeferredValue:function(t){var e=Rt();return De===null?e.memoizedState=t:R_(e,De.memoizedState,t)},useTransition:function(){var t=Sc(wo)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:N_,unstable_isNewReconciler:!1};function Yi(t,e){try{var n="",r=e;do n+=aS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DC=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,Ud=r),xd(t,e)},n}function M_(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Om(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KC.bind(null,t,e,n),e.then(t,t))}function Dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var MC=Rn.ReactCurrentOwner,lt=!1;function tt(t,e,n,r){e.child=t===null?h_(e,null,n,r):Hi(e,t.child,n,r)}function Lm(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=sh(t,e,n,r,s,i),n=oh(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ve&&n&&Yf(e),e.flags|=1,tt(t,e,r,i),e.child)}function Fm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,r,i)):(t=Xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ho(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return Rd(t,e,n,r,i)}function F_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ci,gt),gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Ci,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Ci,gt),gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Ci,gt),gt|=r;return tt(t,e,i,n),e.child}function U_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rd(t,e,n,r,i){var s=dt(n)?Vr:Ze.current;return s=$i(e,s),Di(e,i),n=sh(t,e,n,r,s,i),r=oh(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ve&&r&&Yf(e),e.flags|=1,tt(t,e,n,i),e.child)}function Um(t,e,n,r,i){if(dt(n)){var s=!0;pl(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ka(t,e),d_(e,n,r),bd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=dt(n)?Vr:Ze.current,u=$i(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rm(e,o,r,u),Bn=!1;var f=e.memoizedState;o.state=f,_l(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ct.current||Bn?(typeof c=="function"&&(Td(e,n,c,r),l=e.memoizedState),(a=Bn||xm(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:At(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xt(l):(l=dt(n)?Vr:Ze.current,l=$i(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Rm(e,o,r,l),Bn=!1,f=e.memoizedState,o.state=f,_l(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||ct.current||Bn?(typeof g=="function"&&(Td(e,n,g,r),y=e.memoizedState),(u=Bn||xm(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Nd(t,e,n,r,s,i)}function Nd(t,e,n,r,i,s){U_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Cm(e,n,!1),Cn(t,e,s);r=e.stateNode,MC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hi(e,t.child,null,s),e.child=Hi(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&Cm(e,n,!0),e.child}function z_(t){var e=t.stateNode;e.pendingContext?Sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sm(t,e.context,!1),th(t,e.containerInfo)}function zm(t,e,n,r,i){return Vi(),Qf(i),e.flags|=256,tt(t,e,n,r),e.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ee,i&1),t===null)return kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ad(n),e.memoizedState=Pd,t):uh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pd,r}return s=t.child,t=s.sibling,r=rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uh(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,r){return r!==null&&Qf(r),Hi(e,t.child,null,n),t=uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cc(Error(T(422))),ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hi(e,t.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=Pd,s);if(!(e.mode&1))return ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Cc(s,r,void 0),ka(t,e,o,r)}if(a=(o&t.childLanes)!==0,lt||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Bt(r,t,i,-1))}return mh(),r=Cc(Error(T(421))),ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Zn(i.nextSibling),yt=e,ve=!0,Mt=null,t!==null&&(kt[It++]=fn,kt[It++]=hn,kt[It++]=Hr,fn=t.id,hn=t.overflow,Hr=e),e=uh(e,r.children),e.flags|=4096,e)}function jm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Id(t.return,e,n)}function kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function B_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,n,e);else if(t.tag===19)jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FC(t,e,n){switch(e.tag){case 3:z_(e),Vi();break;case 5:p_(e);break;case 1:dt(e.type)&&pl(e);break;case 4:th(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(de(Ee,Ee.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);de(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return B_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return Cn(t,e,n)}var W_,Od,$_,V_;W_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};$_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ar(Zt.current);var s=null;switch(n){case"input":i=td(t,i),r=td(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=id(t,i),r=id(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}od(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};V_=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UC(t,e,n){var r=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return dt(e.type)&&hl(),qe(e),null;case 3:return r=e.stateNode,Gi(),me(ct),me(Ze),rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Bd(Mt),Mt=null))),Od(t,e),qe(e),null;case 5:nh(e);var i=Ar(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)$_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return qe(e),null}if(t=Ar(Zt.current),Sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[go]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)fe(js[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Qp(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Xp(r,s),fe("invalid",r)}od(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,a,t),i=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":ha(r),qp(r,s,!0);break;case"textarea":ha(r),Jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[go]=r,W_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ad(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)fe(js[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":Qp(t,r),i=td(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Xp(t,r),i=id(t,r),fe("invalid",t);break;default:i=r}od(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&Of(t,s,l,o))}switch(n){case"input":ha(t),qp(t,r,!1);break;case"textarea":ha(t),Jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)V_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Ar(yo.current),Ar(Zt.current),Sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:Ea(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return qe(e),null;case 13:if(me(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&vt!==null&&e.mode&1&&!(e.flags&128))a_(),Vi(),e.flags|=98560,s=!1;else if(s=Sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Qt]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else Mt!==null&&(Bd(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Fe===0&&(Fe=3):mh())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return Gi(),Od(t,e),t===null&&po(e.stateNode.containerInfo),qe(e),null;case 10:return Jf(e.type._context),qe(e),null;case 17:return dt(e.type)&&hl(),qe(e),null;case 19:if(me(Ee),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Ki&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return qe(e),null}else 2*Re()-s.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=Ee.current,de(Ee,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return ph(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gt&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function zC(t,e){switch(Kf(e),e.tag){case 1:return dt(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),me(ct),me(Ze),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nh(e),null;case 13:if(me(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(Ee),null;case 4:return Gi(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var Ia=!1,Xe=!1,jC=typeof WeakSet=="function"?WeakSet:Set,M=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Dd(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Bm=!1;function BC(t,e){if(vd=ul,t=Ky(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},ul=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,S=y.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:At(e.type,_),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(p){Ie(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=Bm,Bm=!1,y}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dd(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[go],delete e[Ed],delete e[CC],delete e[kC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G_(t){return t.tag===5||t.tag===3||t.tag===4}function Wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var He=null,Ot=!1;function Fn(t,e,n){for(n=n.child;n!==null;)Y_(t,e,n),n=n.sibling}function Y_(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:Xe||Si(n,e);case 6:var r=He,i=Ot;He=null,Fn(t,e,n),He=r,Ot=i,He!==null&&(Ot?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ot?(t=He,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),co(t)):vc(He,n.stateNode));break;case 4:r=He,i=Ot,He=n.stateNode.containerInfo,Ot=!0,Fn(t,e,n),He=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!Xe&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Fn(t,e,n),Xe=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function $m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jC),e.forEach(function(r){var i=qC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Ot=!1;break e;case 3:He=a.stateNode.containerInfo,Ot=!0;break e;case 4:He=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(He===null)throw Error(T(160));Y_(s,o,i),He=null,Ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K_(e,t),e=e.sibling}function K_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Yt(t),r&4){try{Ks(3,t,t.return),pu(3,t)}catch(_){Ie(t,t.return,_)}try{Ks(5,t,t.return)}catch(_){Ie(t,t.return,_)}}break;case 1:Pt(e,t),Yt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Pt(e,t),Yt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{oo(i,"")}catch(_){Ie(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&my(i,s),ad(a,o);var u=ad(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?wy(i,d):c==="dangerouslySetInnerHTML"?yy(i,d):c==="children"?oo(i,d):Of(i,c,d,u)}switch(a){case"input":nd(i,s);break;case"textarea":gy(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ni(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[go]=s}catch(_){Ie(t,t.return,_)}}break;case 6:if(Pt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ie(t,t.return,_)}}break;case 3:if(Pt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(_){Ie(t,t.return,_)}break;case 4:Pt(e,t),Yt(t);break;case 13:Pt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fh=Re())),r&4&&$m(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(u=Xe)||c,Pt(e,t),Xe=u):Pt(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ks(4,f,f.return);break;case 1:Si(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Ie(r,n,_)}}break;case 5:Si(f,f.return);break;case 22:if(f.memoizedState!==null){Hm(d);continue}}g!==null?(g.return=f,M=g):Hm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_y("display",o))}catch(_){Ie(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ie(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(e,t),Yt(t),r&4&&$m(t);break;case 21:break;default:Pt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G_(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var s=Wm(t);Fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wm(t);Ld(t,a,o);break;default:throw Error(T(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WC(t,e,n){M=t,Q_(t)}function Q_(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ia;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Xe;a=Ia;var u=Xe;if(Ia=o,(Xe=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Gm(i):l!==null?(l.return=o,M=l):Gm(i);for(;s!==null;)M=s,Q_(s),s=s.sibling;M=i,Ia=a,Xe=u}Vm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Vm(t)}}function Vm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&co(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Xe||e.flags&512&&Md(e)}catch(f){Ie(e,e.return,f)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Hm(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Gm(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{Md(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var $C=Math.ceil,Cl=Rn.ReactCurrentDispatcher,ch=Rn.ReactCurrentOwner,bt=Rn.ReactCurrentBatchConfig,ee=0,Ve=null,Ae=null,Ge=0,gt=0,Ci=wr(0),Fe=0,So=null,Yr=0,mu=0,dh=0,Qs=null,at=null,fh=0,Ki=1/0,cn=null,kl=!1,Ud=null,tr=null,Ta=!1,Kn=null,Il=0,qs=0,zd=null,Qa=-1,qa=0;function rt(){return ee&6?Re():Qa!==-1?Qa:Qa=Re()}function nr(t){return t.mode&1?ee&2&&Ge!==0?Ge&-Ge:TC.transition!==null?(qa===0&&(qa=Ay()),qa):(t=re,t!==0||(t=window.event,t=t===void 0?16:zy(t.type)),t):1}function Bt(t,e,n,r){if(50<qs)throw qs=0,zd=null,Error(T(185));Wo(t,n,r),(!(ee&2)||t!==Ve)&&(t===Ve&&(!(ee&2)&&(mu|=n),Fe===4&&$n(t,Ge)),ft(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ki=Re()+500,du&&Er()))}function ft(t,e){var n=t.callbackNode;TS(t,e);var r=ll(t,t===Ve?Ge:0);if(r===0)n!==null&&tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tm(n),e===1)t.tag===0?IC(Ym.bind(null,t)):i_(Ym.bind(null,t)),EC(function(){!(ee&6)&&Er()}),n=null;else{switch(Oy(r)){case 1:n=Uf;break;case 4:n=Ny;break;case 16:n=al;break;case 536870912:n=Py;break;default:n=al}n=r0(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(Qa=-1,qa=0,ee&6)throw Error(T(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=ll(t,t===Ve?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tl(t,r);else{e=r;var i=ee;ee|=2;var s=J_();(Ve!==t||Ge!==e)&&(cn=null,Ki=Re()+500,zr(t,e));do try{GC();break}catch(a){X_(t,a)}while(1);Xf(),Cl.current=s,ee=i,Ae!==null?e=0:(Ve=null,Ge=0,e=Fe)}if(e!==0){if(e===2&&(i=fd(t),i!==0&&(r=i,e=jd(t,i))),e===1)throw n=So,zr(t,0),$n(t,r),ft(t,Re()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!VC(i)&&(e=Tl(t,r),e===2&&(s=fd(t),s!==0&&(r=s,e=jd(t,s))),e===1))throw n=So,zr(t,0),$n(t,r),ft(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:br(t,at,cn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=fh+500-Re(),10<e)){if(ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wd(br.bind(null,t,at,cn),e);break}br(t,at,cn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$C(r/1960))-r,10<r){t.timeoutHandle=wd(br.bind(null,t,at,cn),r);break}br(t,at,cn);break;case 5:br(t,at,cn);break;default:throw Error(T(329))}}}return ft(t,Re()),t.callbackNode===n?q_.bind(null,t):null}function jd(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=at,at=n,e!==null&&Bd(e)),t}function Bd(t){at===null?at=t:at.push.apply(at,t)}function VC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~dh,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Ym(t){if(ee&6)throw Error(T(327));Mi();var e=ll(t,0);if(!(e&1))return ft(t,Re()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var r=fd(t);r!==0&&(e=r,n=jd(t,r))}if(n===1)throw n=So,zr(t,0),$n(t,e),ft(t,Re()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,at,cn),ft(t,Re()),null}function hh(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ki=Re()+500,du&&Er())}}function Kr(t){Kn!==null&&Kn.tag===0&&!(ee&6)&&Mi();var e=ee;ee|=1;var n=bt.transition,r=re;try{if(bt.transition=null,re=1,t)return t()}finally{re=r,bt.transition=n,ee=e,!(ee&6)&&Er()}}function ph(){gt=Ci.current,me(Ci)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:Gi(),me(ct),me(Ze),rh();break;case 5:nh(r);break;case 4:Gi();break;case 13:me(Ee);break;case 19:me(Ee);break;case 10:Jf(r.type._context);break;case 22:case 23:ph()}n=n.return}if(Ve=t,Ae=t=rr(t.current,null),Ge=gt=e,Fe=0,So=null,dh=mu=Yr=0,at=Qs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function X_(t,e){do{var n=Ae;try{if(Xf(),Ga.current=Sl,El){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(Gr=0,Be=De=Ce=null,Ys=!1,_o=0,ch.current=null,n===null||n.return===null){Fe=1,So=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Dm(o);if(g!==null){g.flags&=-257,Mm(g,o,a,s,e),g.mode&1&&Om(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Om(s,u,e),mh();break e}l=Error(T(426))}}else if(ve&&a.mode&1){var S=Dm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Mm(S,o,a,s,e),Qf(Yi(l,a));break e}}s=l=Yi(l,a),Fe!==4&&(Fe=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=D_(s,l,e);Tm(s,m);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tr===null||!tr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=M_(s,a,e);Tm(s,p);break e}}s=s.return}while(s!==null)}e0(n)}catch(C){e=C,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function J_(){var t=Cl.current;return Cl.current=Sl,t===null?Sl:t}function mh(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ve===null||!(Yr&268435455)&&!(mu&268435455)||$n(Ve,Ge)}function Tl(t,e){var n=ee;ee|=2;var r=J_();(Ve!==t||Ge!==e)&&(cn=null,zr(t,e));do try{HC();break}catch(i){X_(t,i)}while(1);if(Xf(),ee=n,Cl.current=r,Ae!==null)throw Error(T(261));return Ve=null,Ge=0,Fe}function HC(){for(;Ae!==null;)Z_(Ae)}function GC(){for(;Ae!==null&&!vS();)Z_(Ae)}function Z_(t){var e=n0(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?e0(t):Ae=e,ch.current=null}function e0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zC(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Ae=null;return}}else if(n=UC(n,e,gt),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Fe===0&&(Fe=5)}function br(t,e,n){var r=re,i=bt.transition;try{bt.transition=null,re=1,YC(t,e,n,r)}finally{bt.transition=i,re=r}return null}function YC(t,e,n,r){do Mi();while(Kn!==null);if(ee&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bS(t,s),t===Ve&&(Ae=Ve=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,r0(al,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=re;re=1;var a=ee;ee|=4,ch.current=null,BC(t,n),K_(n,t),hC(yd),ul=!!vd,yd=vd=null,t.current=n,WC(n),yS(),ee=a,re=o,bt.transition=s}else t.current=n;if(Ta&&(Ta=!1,Kn=t,Il=i),s=t.pendingLanes,s===0&&(tr=null),ES(n.stateNode),ft(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=Ud,Ud=null,t;return Il&1&&t.tag!==0&&Mi(),s=t.pendingLanes,s&1?t===zd?qs++:(qs=0,zd=t):qs=0,Er(),null}function Mi(){if(Kn!==null){var t=Oy(Il),e=bt.transition,n=re;try{if(bt.transition=null,re=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,Il=0,ee&6)throw Error(T(331));var i=ee;for(ee|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Ks(8,c,s)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,g=c.return;if(H_(c),c===u){M=null;break}if(f!==null){f.return=g,M=f;break}M=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var h=t.current;for(M=h;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=h;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pu(9,a)}}catch(C){Ie(a,a.return,C)}if(a===o){M=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,M=p;break e}M=a.return}}if(ee=i,Er(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{re=n,bt.transition=e}}return!1}function Km(t,e,n){e=Yi(n,e),e=D_(t,e,1),t=er(t,e,1),e=rt(),t!==null&&(Wo(t,1,e),ft(t,e))}function Ie(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=Yi(n,t),t=M_(e,t,1),e=er(e,t,1),t=rt(),e!==null&&(Wo(e,1,t),ft(e,t));break}}e=e.return}}function KC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Ge&n)===n&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>Re()-fh?zr(t,0):dh|=n),ft(t,e)}function t0(t,e){e===0&&(t.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var n=rt();t=Sn(t,e),t!==null&&(Wo(t,e,n),ft(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t0(t,n)}function qC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),t0(t,n)}var n0;n0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,FC(t,e,n);lt=!!(t.flags&131072)}else lt=!1,ve&&e.flags&1048576&&s_(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(t,e),t=e.pendingProps;var i=$i(e,Ze.current);Di(e,n),i=sh(null,e,r,t,i,n);var s=oh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eh(e),i.updater=fu,e.stateNode=i,i._reactInternals=e,bd(e,r,t,n),e=Nd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Yf(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JC(r),t=At(r,t),i){case 0:e=Rd(null,e,r,t,n);break e;case 1:e=Um(null,e,r,t,n);break e;case 11:e=Lm(null,e,r,t,n);break e;case 14:e=Fm(null,e,r,At(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Rd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Um(t,e,r,i,n);case 3:e:{if(z_(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u_(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(T(423)),e),e=zm(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(T(424)),e),e=zm(t,e,r,n,i);break e}else for(vt=Zn(e.stateNode.containerInfo.firstChild),yt=e,ve=!0,Mt=null,n=h_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){e=Cn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return p_(e),t===null&&kd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_d(r,i)?o=null:s!==null&&_d(r,s)&&(e.flags|=32),U_(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&kd(e),null;case 13:return j_(t,e,n);case 4:return th(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Lm(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(vl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ct.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Id(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=xt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),Fm(t,e,r,i,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Ka(t,e),e.tag=1,dt(r)?(t=!0,pl(e)):t=!1,Di(e,n),d_(e,r,i),bd(e,r,i,n),Nd(null,e,r,!0,t,n);case 19:return B_(t,e,n);case 22:return F_(t,e,n)}throw Error(T(156,e.tag))};function r0(t,e){return Ry(t,e)}function XC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new XC(t,e,n,r)}function gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JC(t){if(typeof t=="function")return gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mf)return 11;if(t===Lf)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return jr(n.children,i,s,e);case Df:o=8,i|=8;break;case Xc:return t=Tt(12,n,e,i|2),t.elementType=Xc,t.lanes=s,t;case Jc:return t=Tt(13,n,e,i),t.elementType=Jc,t.lanes=s,t;case Zc:return t=Tt(19,n,e,i),t.elementType=Zc,t.lanes=s,t;case fy:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cy:o=10;break e;case dy:o=9;break e;case Mf:o=11;break e;case Lf:o=14;break e;case jn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=fy,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vh(t,e,n,r,i,s,o,a,l){return t=new ZC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(s),t}function ek(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function i0(t){if(!t)return cr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(dt(n))return r_(t,n,e)}return e}function s0(t,e,n,r,i,s,o,a,l){return t=vh(n,r,!0,t,i,s,o,a,l),t.context=i0(null),n=t.current,r=rt(),i=nr(n),s=vn(r,i),s.callback=e??null,er(n,s,i),t.current.lanes=i,Wo(t,i,r),ft(t,r),t}function vu(t,e,n,r){var i=e.current,s=rt(),o=nr(i);return n=i0(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=er(i,e,o),t!==null&&(Bt(t,i,o,s),Ha(t,i,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yh(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function tk(){return null}var o0=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}yu.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));vu(t,e,null,null)};yu.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){vu(null,t,null,null)}),e[En]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ly();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&Uy(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function nk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bl(o);s.call(u)}}var o=s0(e,r,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[En]=o.current,po(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=bl(l);a.call(u)}}var l=vh(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[En]=l.current,po(t.nodeType===8?t.parentNode:t),Kr(function(){vu(e,l,n,r)}),l}function wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=bl(o);a.call(l)}}vu(e,o,t,i)}else o=nk(n,e,t,i,r);return bl(o)}Dy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(zf(e,n|1),ft(e,Re()),!(ee&6)&&(Ki=Re()+500,Er()))}break;case 13:Kr(function(){var r=Sn(t,1);if(r!==null){var i=rt();Bt(r,t,1,i)}}),yh(t,1)}};jf=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=rt();Bt(e,t,134217728,n)}yh(t,134217728)}};My=function(t){if(t.tag===13){var e=nr(t),n=Sn(t,e);if(n!==null){var r=rt();Bt(n,t,e,r)}yh(t,e)}};Ly=function(){return re};Fy=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};ud=function(t,e,n){switch(e){case"input":if(nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(T(90));py(r),nd(r,i)}}}break;case"textarea":gy(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};Cy=hh;ky=Kr;var rk={usingClientEntryPoint:!1,Events:[Vo,vi,cu,Ey,Sy,hh]},xs={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ik={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=by(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{ou=ba.inject(ik),Jt=ba}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(T(200));return ek(t,e,null,n)};wt.createRoot=function(t,e){if(!wh(t))throw Error(T(299));var n=!1,r="",i=o0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vh(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,po(t.nodeType===8?t.parentNode:t),new _h(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=by(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return Kr(t)};wt.hydrate=function(t,e,n){if(!_u(e))throw Error(T(200));return wu(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=o0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=s0(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};wt.render=function(t,e,n){if(!_u(e))throw Error(T(200));return wu(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!_u(t))throw Error(T(40));return t._reactRootContainer?(Kr(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};wt.unstable_batchedUpdates=hh;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return wu(t,e,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";function a0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0)}catch(t){console.error(t)}}a0(),sy.exports=wt;var sk=sy.exports,Xm=sk;Qc.createRoot=Xm.createRoot,Qc.hydrateRoot=Xm.hydrateRoot;/**
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
 */const l0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw as(e)},as=function(t){return new Error("Firebase Database ("+l0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const u0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ok=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ok(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new ak;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ak extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c0=function(t){const e=u0(t);return Eh.encodeByteArray(e,!0)},xl=function(t){return c0(t).replace(/\./g,"")},Rl=function(t){try{return Eh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lk(t){return d0(void 0,t)}function d0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uk(n)||(t[n]=d0(t[n],e[n]));return t}function uk(t){return t!=="__proto__"}/**
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
 */function ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dk=()=>ck().__FIREBASE_DEFAULTS__,fk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rl(t[1]);return e&&JSON.parse(e)},Sh=()=>{try{return dk()||fk()||hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},f0=t=>{var e,n;return(n=(e=Sh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pk=t=>{const e=f0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h0=()=>{var t;return(t=Sh())===null||t===void 0?void 0:t.config},p0=t=>{var e;return(e=Sh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Eu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function gk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vk(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g0(){return l0.NODE_ADMIN===!0}function yk(){try{return typeof indexedDB=="object"}catch{return!1}}function _k(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const wk="FirebaseError";class Sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wk,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ek(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sr(i,a,r)}}function Ek(t,e){return t.replace(Sk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sk=/\{\$([^}]+)}/g;/**
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
 */function Co(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
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
 */const v0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Co(Rl(s[0])||""),n=Co(Rl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ck=function(t){const e=v0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kk=function(t){const e=v0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jm(s)&&Jm(o)){if(!Pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jm(t){return t!==null&&typeof t=="object"}/**
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
 */function ls(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Ik{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Tk(t,e){const n=new bk(t,e);return n.subscribe.bind(n)}class bk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}function Su(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Rk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class Nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ak(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pk(t){return t===xr?void 0:t}function Ak(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Dk={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Mk=se.INFO,Lk={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Fk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Lk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kh{constructor(e){this.name=e,this._logLevel=Mk,this._logHandler=Fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Uk=(t,e)=>e.some(n=>t instanceof n);let Zm,eg;function zk(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jk(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y0=new WeakMap,$d=new WeakMap,_0=new WeakMap,xc=new WeakMap,Ih=new WeakMap;function Bk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&y0.set(n,t)}).catch(()=>{}),Ih.set(e,t),e}function Wk(t){if($d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$d.set(t,e)}let Vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $k(t){Vd=t(Vd)}function Vk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return _0.set(r,e.sort?e.sort():[e]),ir(r)}:jk().includes(t)?function(...e){return t.apply(Rc(this),e),ir(y0.get(this))}:function(...e){return ir(t.apply(Rc(this),e))}}function Hk(t){return typeof t=="function"?Vk(t):(t instanceof IDBTransaction&&Wk(t),Uk(t,zk())?new Proxy(t,Vd):t)}function ir(t){if(t instanceof IDBRequest)return Bk(t);if(xc.has(t))return xc.get(t);const e=Hk(t);return e!==t&&(xc.set(t,e),Ih.set(e,t)),e}const Rc=t=>Ih.get(t);function Gk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Yk=["get","getKey","getAll","getAllKeys","count"],Kk=["put","add","delete","clear"],Nc=new Map;function tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nc.get(e))return Nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nc.set(e,s),s}$k(t=>({...t,get:(e,n,r)=>tg(e,n)||t.get(e,n,r),has:(e,n)=>!!tg(e,n)||t.has(e,n)}));/**
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
 */class Qk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",ng="0.9.19";/**
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
 */const qr=new kh("@firebase/app"),Xk="@firebase/app-compat",Jk="@firebase/analytics-compat",Zk="@firebase/analytics",eI="@firebase/app-check-compat",tI="@firebase/app-check",nI="@firebase/auth",rI="@firebase/auth-compat",iI="@firebase/database",sI="@firebase/database-compat",oI="@firebase/functions",aI="@firebase/functions-compat",lI="@firebase/installations",uI="@firebase/installations-compat",cI="@firebase/messaging",dI="@firebase/messaging-compat",fI="@firebase/performance",hI="@firebase/performance-compat",pI="@firebase/remote-config",mI="@firebase/remote-config-compat",gI="@firebase/storage",vI="@firebase/storage-compat",yI="@firebase/firestore",_I="@firebase/firestore-compat",wI="firebase",EI="10.4.0";/**
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
 */const Gd="[DEFAULT]",SI={[Hd]:"fire-core",[Xk]:"fire-core-compat",[Zk]:"fire-analytics",[Jk]:"fire-analytics-compat",[tI]:"fire-app-check",[eI]:"fire-app-check-compat",[nI]:"fire-auth",[rI]:"fire-auth-compat",[iI]:"fire-rtdb",[sI]:"fire-rtdb-compat",[oI]:"fire-fn",[aI]:"fire-fn-compat",[lI]:"fire-iid",[uI]:"fire-iid-compat",[cI]:"fire-fcm",[dI]:"fire-fcm-compat",[fI]:"fire-perf",[hI]:"fire-perf-compat",[pI]:"fire-rc",[mI]:"fire-rc-compat",[gI]:"fire-gcs",[vI]:"fire-gcs-compat",[yI]:"fire-fst",[_I]:"fire-fst-compat","fire-js":"fire-js",[wI]:"fire-js-all"};/**
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
 */const Al=new Map,Yd=new Map;function CI(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qi(t){const e=t.name;if(Yd.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,t);for(const n of Al.values())CI(n,t);return!0}function Th(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new Go("app","Firebase",kI);/**
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
 */class II{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=EI;function w0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=h0()),!n)throw sr.create("no-options");const s=Al.get(i);if(s){if(Pl(n,s.options)&&Pl(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new Ok(i);for(const l of Yd.values())o.addComponent(l);const a=new II(n,r,o);return Al.set(i,a),a}function E0(t=Gd){const e=Al.get(t);if(!e&&t===Gd&&h0())return w0();if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){var r;let i=(r=SI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}qi(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const TI="firebase-heartbeat-database",bI=1,ko="firebase-heartbeat-store";let Pc=null;function S0(){return Pc||(Pc=Gk(TI,bI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ko)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function xI(t){try{return await(await S0()).transaction(ko).objectStore(ko).get(C0(t))}catch(e){if(e instanceof Sr)qr.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(n.message)}}}async function rg(t,e){try{const r=(await S0()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,C0(t)),await r.done}catch(n){if(n instanceof Sr)qr.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qr.warn(r.message)}}}function C0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RI=1024,NI=30*24*60*60*1e3;class PI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ig();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=NI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ig(),{heartbeatsToSend:n,unsentEntries:r}=AI(this._heartbeatsCache.heartbeats),i=xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ig(){return new Date().toISOString().substring(0,10)}function AI(t,e=RI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yk()?_k().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sg(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DI(t){qi(new Qr("platform-logger",e=>new Qk(e),"PRIVATE")),qi(new Qr("heartbeat",e=>new PI(e),"PRIVATE")),or(Hd,ng,t),or(Hd,ng,"esm2017"),or("fire-js","")}DI("");var MI="firebase",LI="10.4.0";/**
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
 */or(MI,LI,"app");const og="@firebase/database",ag="1.0.1";/**
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
 */let k0="";function FI(t){k0=t}/**
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
 */class UI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class zI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const I0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UI(e)}}catch{}return new zI},Or=I0("localStorage"),Kd=I0("sessionStorage");/**
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
 */const Li=new kh("@firebase/database"),jI=function(){let t=1;return function(){return t++}}(),T0=function(t){const e=Rk(t),n=new Ik;n.update(e);const r=n.digest();return Eh.encodeByteArray(r)},Yo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yo.apply(null,r):typeof r=="object"?e+=Me(r):e+=r,e+=" "}return e};let Br=null,lg=!0;const BI=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Li.logLevel=se.VERBOSE,Br=Li.log.bind(Li),e&&Kd.set("logging_enabled",!0)):typeof t=="function"?Br=t:(Br=null,Kd.remove("logging_enabled"))},Je=function(...t){if(lg===!0&&(lg=!1,Br===null&&Kd.get("logging_enabled")===!0&&BI(!0)),Br){const e=Yo.apply(null,t);Br(e)}},Ko=function(t){return function(...e){Je(t,...e)}},Qd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yo(...t);Li.error(e)},kn=function(...t){const e=`FIREBASE FATAL ERROR: ${Yo(...t)}`;throw Li.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+Yo(...t);Li.warn(e)},WI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$I=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xr="[MIN_NAME]",dr="[MAX_NAME]",cs=function(t,e){if(t===e)return 0;if(t===Xr||e===dr)return-1;if(e===Xr||t===dr)return 1;{const n=ug(t),r=ug(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},VI=function(t,e){return t===e?0:t<e?-1:1},Rs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},xh=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Me(e[r]),n+=":",n+=xh(t[e[r]]);return n+="}",n},b0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const x0=function(t){x(!bh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},HI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const KI=new RegExp("^-?(0*)\\d{1,10}$"),QI=-2147483648,qI=2147483647,ug=function(t){if(KI.test(t)){const e=Number(t);if(e>=QI&&e<=qI)return e}return null},ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},XI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class JI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ZI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Fi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fi.OWNER="owner";/**
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
 */const Rh="5",R0="v",N0="s",P0="r",A0="f",O0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,D0="ls",M0="p",qd="ac",L0="websocket",F0="long_polling";/**
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
 */class U0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function z0(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===L0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===F0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eT(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class tT{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lk(this.counters_)}}/**
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
 */const Ac={},Oc={};function Nh(t){const e=t.toString();return Ac[e]||(Ac[e]=new tT),Ac[e]}function nT(t,e){const n=t.toString();return Oc[n]||(Oc[n]=e()),Oc[n]}/**
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
 */class rT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ds(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cg="start",iT="close",sT="pLPCommand",oT="pRTLPCB",j0="id",B0="pw",W0="ser",aT="cb",lT="seg",uT="ts",cT="d",dT="dframe",$0=1870,V0=30,fT=$0-V0,hT=25e3,pT=3e4;class ki{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ko(e),this.stats_=Nh(n),this.urlFn=l=>(this.appCheckToken&&(l[qd]=this.appCheckToken),z0(n,F0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pT)),$I(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ph((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cg)this.id=a,this.password=l;else if(o===iT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[cg]="t",r[W0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[aT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[R0]=Rh,this.transportSessionId&&(r[N0]=this.transportSessionId),this.lastSessionId&&(r[D0]=this.lastSessionId),this.applicationId&&(r[M0]=this.applicationId),this.appCheckToken&&(r[qd]=this.appCheckToken),typeof location<"u"&&location.hostname&&O0.test(location.hostname)&&(r[P0]=A0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ki.forceAllow_=!0}static forceDisallow(){ki.forceDisallow_=!0}static isAvailable(){return ki.forceAllow_?!0:!ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HI()&&!GI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=c0(n),i=b0(r,fT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[dT]="t",r[j0]=e,r[B0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ph{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jI(),window[sT+this.uniqueCallbackIdentifier]=e,window[oT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ph.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[j0]=this.myID,e[B0]=this.myPW,e[W0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V0+r.length<=$0;){const o=this.pendingSegs.shift();r=r+"&"+lT+i+"="+o.seg+"&"+uT+i+"="+o.ts+"&"+cT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(hT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const mT=16384,gT=45e3;let Ol=null;typeof MozWebSocket<"u"?Ol=MozWebSocket:typeof WebSocket<"u"&&(Ol=WebSocket);class Lt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ko(this.connId),this.stats_=Nh(n),this.connURL=Lt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[R0]=Rh,typeof location<"u"&&location.hostname&&O0.test(location.hostname)&&(o[P0]=A0),n&&(o[N0]=n),r&&(o[D0]=r),i&&(o[qd]=i),s&&(o[M0]=s),z0(e,L0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Or.set("previous_websocket_failure",!0);try{let r;g0(),this.mySock=new Ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ol!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Or.isInMemoryStorage||Or.get("previous_websocket_failure")===!0}markConnectionHealthy(){Or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Co(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=b0(n,mT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
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
 */class Io{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ki,Lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Lt&&Lt.isAvailable();let r=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Lt];else{const i=this.transports_=[];for(const s of Io.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Io.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Io.globalTransportInitialized_=!1;/**
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
 */const vT=6e4,yT=5e3,_T=10*1024,wT=100*1024,Dc="t",dg="d",ET="s",fg="r",ST="e",hg="o",pg="a",mg="n",gg="p",CT="h";class kT{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ko("c:"+this.id+":"),this.transportManager_=new Io(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_T?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dc in e){const n=e[Dc];n===pg?this.upgradeIfSecondaryHealthy_():n===fg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rs("t",e),r=Rs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rs("t",e),r=Rs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rs(Dc,e);if(dg in e){const r=e[dg];if(n===CT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ET?this.onConnectionShutdown_(r):n===fg?this.onReset_(r):n===ST?Qd("Server Error: "+r):n===hg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rh!==r&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class H0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class G0{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Dl extends G0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ch()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vg=32,yg=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new ae("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function Y0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function K0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Q0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return nt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ah(t,e){if(fr(t)!==fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ft(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fr(t)>fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class TT{constructor(e,n){this.errorPrefix_=n,this.parts_=K0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cu(this.parts_[r]);q0(this)}}function bT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cu(e),q0(t)}function xT(t){const e=t.parts_.pop();t.byteLength_-=Cu(e),t.parts_.length>0&&(t.byteLength_-=1)}function q0(t){if(t.byteLength_>yg)throw new Error(t.errorPrefix_+"has a key path longer than "+yg+" bytes ("+t.byteLength_+").");if(t.parts_.length>vg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vg+") or object contains a cycle "+Rr(t))}function Rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Oh extends G0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Oh}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ns=1e3,RT=60*5*1e3,_g=30*1e3,NT=1.3,PT=3e4,AT="server_kill",wg=3;class yn extends H0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yn.nextPersistentConnectionId_++,this.log_=Ko("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ns,this.maxReconnectDelay_=RT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!g0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Me(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Eu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;yn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const r=Qi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_g)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ck(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qd("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PT&&(this.reconnectDelay_=Ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new kT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ht(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(AT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ht(d),l())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wd(this.interruptReasons_)&&(this.reconnectDelay_=Ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>xh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wg&&(this.reconnectDelay_=_g,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+k0.replace(/\./g,"-")]=1,Ch()?e["framework.cordova"]=1:m0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dl.getInstance().currentlyOnline();return Wd(this.interruptReasons_)&&e}}yn.nextPersistentConnectionId_=0;yn.nextConnectionId_=0;/**
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
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
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
 */class ku{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(Xr,e),i=new Q(Xr,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
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
 */let xa;class X0 extends ku{static get __EMPTY_NODE(){return xa}static set __EMPTY_NODE(e){xa=e}compare(e,n){return cs(e.name,n.name)}isDefinedOn(e){throw as("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(dr,xa)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,xa)}toString(){return".key"}}const Wr=new X0;/**
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
 */class Ra{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class OT{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ra(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ra(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ra(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new OT;/**
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
 */function DT(t,e){return cs(t.name,e.name)}function Dh(t,e){return cs(t,e)}/**
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
 */let Xd;function MT(t){Xd=t}const J0=function(t){return typeof t=="number"?"number:"+x0(t):"string:"+t},Z0=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else x(t===Xd||t.isEmpty(),"priority of unexpected type.");x(t===Xd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Eg;class je{constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Z0(this.priorityNode_)}static set __childrenNodeConstructor(e){Eg=e}static get __childrenNodeConstructor(){return Eg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:K(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+J0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=x0(this.value_):e+=this.value_,this.lazyHash_=T0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(n),s=je.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ew,tw;function LT(t){ew=t}function FT(t){tw=t}class UT extends ku{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?cs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(dr,new je("[PRIORITY-POST]",tw))}makePost(e,n){const r=ew(e);return new Q(n,new je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new UT;/**
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
 */const zT=Math.log(2);class jT{constructor(e){const n=s=>parseInt(Math.log(s)/zT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ml=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new We(f,d.node,We.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),_=i(g+1,u);return d=t[g],f=n?n(d):d,new We(f,d.node,We.BLACK,y,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,_){const S=d-y,m=d;d-=y;const h=i(S+1,m),v=t[S],p=n?n(v):v;g(new We(p,v.node,_,null,h))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),S=Math.pow(2,l.count-(y+1));_?f(S,We.BLACK):(f(S,We.BLACK),f(S,We.RED))}return c},o=new jT(t.length),a=s(o);return new ut(r||e,a)};/**
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
 */let Mc;const ci={};class pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ci&&Se,"ChildrenNode.ts has not been loaded"),Mc=Mc||new pn({".priority":ci},{".priority":Se}),Mc}get(e){const n=Qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ml(r,e.getCompare()):a=ci;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new pn(c,u)}addToIndexes(e,n){const r=Nl(this.indexes_,(i,s)=>{const o=Qi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===ci)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ml(a,o.getCompare())}else return ci;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new pn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Nl(this.indexes_,i=>{if(i===ci)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new pn(r,this.indexSet_)}}/**
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
 */let Ps;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Z0(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ps||(Ps=new B(new ut(Dh),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ps}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ps:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ps:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{x(K(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+J0(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":T0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qo?-1:0}withIndex(e){if(e===Wr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wr?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BT extends B{constructor(){super(new ut(Dh),B.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Qo=new BT;Object.defineProperties(Q,{MIN:{value:new Q(Xr,B.EMPTY_NODE)},MAX:{value:new Q(dr,Qo)}});X0.__EMPTY_NODE=B.EMPTY_NODE;je.__childrenNodeConstructor=B;MT(Qo);FT(Qo);/**
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
 */const WT=!0;function $e(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new je(n,$e(e))}if(!(t instanceof Array)&&WT){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=Ml(n,DT,o=>o.name,Dh);if(r){const o=Ml(n,Se.getCompare());return new B(s,$e(e),new pn({".priority":o},{".priority":Se}))}else return new B(s,$e(e),pn.Default)}else{let n=B.EMPTY_NODE;return pt(t,(r,i)=>{if(sn(t,r)&&r.substring(0,1)!=="."){const s=$e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority($e(e))}}LT($e);/**
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
 */class nw extends ku{constructor(e){super(),this.indexPath_=e,x(!J(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?cs(e.name,n.name):s}makePost(e,n){const r=$e(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Qo);return new Q(dr,e)}toString(){return K0(this.indexPath_,0).join("/")}}/**
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
 */class $T extends ku{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=$e(e);return new Q(n,r)}toString(){return".value"}}const rw=new $T;/**
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
 */function iw(t){return{type:"value",snapshotNode:t}}function Xi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function To(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Mh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(To(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xi(n,r)):o.trackChildChange(bo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(To(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bo(i,s,o))}else r.trackChildChange(Xi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class xo{constructor(e){this.indexedFilter_=new Mh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xo.getStartPost_(e),this.endPost_=xo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class HT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new Q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(bo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(To(n,d));const _=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Xi(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(To(u.name,u.node)),s.trackChildChange(Xi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
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
 */class Lh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Lh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GT(t){return t.loadsAllData()?new Mh(t.getIndex()):t.hasLimit()?new HT(t):new xo(t)}function YT(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function KT(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Sg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===rw?n="$value":t.index_===Wr?n="$key":(x(t.index_ instanceof nw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class Ll extends H0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ko("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ll.getListenId_(e,r),a={};this.listens_[o]=a;const l=Sg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Qi(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Sg(e._queryParams),r=e._path.toString(),i=new Eu;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ls(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Co(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class QT{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fl(){return{value:null,children:new Map}}function sw(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Fl());const i=t.children.get(r);e=ce(e),sw(i,e,n)}}function Jd(t,e,n){t.value!==null?n(e,t.value):qT(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);Jd(i,s,n)})}function qT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class XT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const kg=10*1e3,JT=30*1e3,ZT=5*60*1e3;class eb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XT(e);const r=kg+(JT-kg)*Math.random();Xs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&sn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZT))}}/**
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
 */var Ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function ow(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Uh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ul{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ut.ACK_USER_WRITE,this.source=ow()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new Ul(ne(),n,this.revert)}}else return x(K(this.path)===e,"operationForChild called for unrelated child."),new Ul(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ro{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Ro(this.source,ne()):new Ro(this.source,ce(this.path))}}/**
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
 */class Jr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ut.OVERWRITE}operationForChild(e){return J(this.path)?new Jr(this.source,ne(),this.snap.getImmediateChild(e)):new Jr(this.source,ce(this.path),this.snap)}}/**
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
 */class No{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ut.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Jr(this.source,ne(),n.value):new No(this.source,ne(),n)}else return x(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new No(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class hr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class tb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nb(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VT(o.childName,o.snapshotNode))}),As(t,i,"child_removed",e,r,n),As(t,i,"child_added",e,r,n),As(t,i,"child_moved",s,r,n),As(t,i,"child_changed",e,r,n),As(t,i,"value",e,r,n),i}function As(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ib(t,a,l)),o.forEach(a=>{const l=rb(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function rb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ib(t,e,n){if(e.childName==null||n.childName==null)throw as("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Iu(t,e){return{eventCache:t,serverCache:e}}function Js(t,e,n,r){return Iu(new hr(e,n,r),t.serverCache)}function aw(t,e,n,r){return Iu(t.eventCache,new hr(e,n,r))}function zl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Lc;const sb=()=>(Lc||(Lc=new ut(VI)),Lc);class he{constructor(e,n=sb()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return pt(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(J(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Le(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new he(null)}}set(e,n){if(J(e))return new he(n,this.children);{const r=K(e),s=(this.children.get(r)||new he(null)).set(ce(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(J(e))return n;{const r=K(e),s=(this.children.get(r)||new he(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Le(n,i),r):new he(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Wt{constructor(e){this.writeTree_=e}static empty(){return new Wt(new he(null))}}function Zs(t,e,n){if(J(e))return new Wt(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nt(i,e);return s=s.updateChild(o,n),new Wt(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new Wt(s)}}}function Ig(t,e,n){let r=t;return pt(n,(i,s)=>{r=Zs(r,Le(e,i),s)}),r}function Tg(t,e){if(J(e))return Wt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new Wt(n)}}function Zd(t,e){return oi(t,e)!=null}function oi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function bg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function ar(t,e){if(J(e))return t;{const n=oi(t,e);return n!=null?new Wt(new he(n)):new Wt(t.writeTree_.subtree(e))}}function ef(t){return t.writeTree_.isEmpty()}function Ji(t,e){return lw(ne(),t.writeTree_,e)}function lw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lw(Le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Le(t,".priority"),r)),n}}/**
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
 */function Tu(t,e){return fw(e,t)}function ob(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=r}function ab(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ub(a,r.path)?i=!1:Ft(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return cb(t),!0;if(r.snap)t.visibleWrites=Tg(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=Tg(t.visibleWrites,Le(r.path,l))})}return!0}else return!1}function ub(t,e){if(t.snap)return Ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ft(Le(t.path,n),e))return!0;return!1}function cb(t){t.visibleWrites=uw(t.allWrites,db,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function db(t){return t.visible}function uw(t,e,n){let r=Wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ft(n,o)?(a=nt(n,o),r=Zs(r,a,s.snap)):Ft(o,n)&&(a=nt(o,n),r=Zs(r,ne(),s.snap.getChild(a)));else if(s.children){if(Ft(n,o))a=nt(n,o),r=Ig(r,a,s.children);else if(Ft(o,n))if(a=nt(o,n),J(a))r=Ig(r,ne(),s.children);else{const l=Qi(s.children,K(a));if(l){const u=l.getChild(ce(a));r=Zs(r,ne(),u)}}}else throw as("WriteRecord should have .snap or .children")}}return r}function cw(t,e,n,r,i){if(!r&&!i){const s=oi(t.visibleWrites,e);if(s!=null)return s;{const o=ar(t.visibleWrites,e);if(ef(o))return n;if(n==null&&!Zd(o,ne()))return null;{const a=n||B.EMPTY_NODE;return Ji(o,a)}}}else{const s=ar(t.visibleWrites,e);if(!i&&ef(s))return n;if(!i&&n==null&&!Zd(s,ne()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ft(u.path,e)||Ft(e,u.path))},a=uw(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ji(a,l)}}}function fb(t,e,n){let r=B.EMPTY_NODE;const i=oi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ar(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Ji(ar(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),bg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ar(t.visibleWrites,e);return bg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function hb(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Le(e,n);if(Zd(t.visibleWrites,s))return null;{const o=ar(t.visibleWrites,s);return ef(o)?i.getChild(n):Ji(o,i.getChild(n))}}function pb(t,e,n,r){const i=Le(e,n),s=oi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ar(t.visibleWrites,i);return Ji(o,r.getNode().getImmediateChild(n))}else return null}function mb(t,e){return oi(t.visibleWrites,e)}function gb(t,e,n,r,i,s,o){let a;const l=ar(t.visibleWrites,e),u=oi(l,ne());if(u!=null)a=u;else if(n!=null)a=Ji(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function vb(){return{visibleWrites:Wt.empty(),allWrites:[],lastWriteId:-1}}function jl(t,e,n,r){return cw(t.writeTree,t.treePath,e,n,r)}function zh(t,e){return fb(t.writeTree,t.treePath,e)}function xg(t,e,n,r){return hb(t.writeTree,t.treePath,e,n,r)}function Bl(t,e){return mb(t.writeTree,Le(t.treePath,e))}function yb(t,e,n,r,i,s){return gb(t.writeTree,t.treePath,e,n,r,i,s)}function jh(t,e,n){return pb(t.writeTree,t.treePath,e,n)}function dw(t,e){return fw(Le(t.treePath,e),t.writeTree)}function fw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class _b{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,To(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Xi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bo(r,e.snapshotNode,i.oldSnap));else throw as("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wb{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hw=new wb;class Bh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new hr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zr(this.viewCache_),s=yb(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Eb(t){return{filter:t}}function Sb(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Cb(t,e,n,r,i){const s=new _b;let o,a;if(n.type===Ut.OVERWRITE){const u=n;u.source.fromUser?o=tf(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!J(u.path),o=Wl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Ut.MERGE){const u=n;u.source.fromUser?o=Ib(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=nf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Ut.ACK_USER_WRITE){const u=n;u.revert?o=xb(t,e,u.path,r,i,s):o=Tb(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Ut.LISTEN_COMPLETE)o=bb(t,e,n.path,r,s);else throw as("Unknown operation type: "+n.type);const l=s.getChanges();return kb(e,o,l),{viewCache:o,changes:l}}function kb(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(iw(zl(e)))}}function pw(t,e,n,r,i,s){const o=e.eventCache;if(Bl(r,n)!=null)return e;{let a,l;if(J(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zr(e),c=u instanceof B?u:B.EMPTY_NODE,d=zh(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=jl(r,Zr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){x(fr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=xg(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=xg(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=jh(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Js(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Wl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(J(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&fr(n)>1)return e;const y=ce(n),S=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),S):u=c.updateChild(l.getNode(),g,S,y,hw,null)}const d=aw(e,u,l.isFullyInitialized()||J(n),c.filtersNodes()),f=new Bh(i,d,s);return pw(t,d,n,i,f,a)}function tf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Bh(i,e,s);if(J(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Js(e,u,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Js(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),g=a.getNode().getImmediateChild(d);let y;if(J(f))y=r;else{const _=c.getCompleteChild(d);_!=null?Y0(f)===".priority"&&_.getChild(Q0(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=B.EMPTY_NODE}if(g.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=Js(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Rg(t,e){return t.eventCache.isCompleteForChild(e)}function Ib(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Le(n,l);Rg(e,K(c))&&(a=tf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Le(n,l);Rg(e,K(c))||(a=tf(t,a,c,u,i,s,o))}),a}function Ng(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function nf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;J(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=Ng(t,g,f);l=Wl(t,l,new ae(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),_=Ng(t,y,f);l=Wl(t,l,new ae(d),_,i,s,o,a)}}),l}function Tb(t,e,n,r,i,s,o){if(Bl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let u=new he(null);return l.getNode().forEachChild(Wr,(c,d)=>{u=u.set(new ae(c),d)}),nf(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,d)=>{const f=Le(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),nf(t,e,n,u,i,s,a,o)}}function bb(t,e,n,r,i){const s=e.serverCache,o=aw(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return pw(t,o,n,r,hw,i)}function xb(t,e,n,r,i,s){let o;if(Bl(r,n)!=null)return e;{const a=new Bh(r,e,i),l=e.eventCache.getNode();let u;if(J(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=jl(r,Zr(e));else{const d=e.serverCache.getNode();x(d instanceof B,"serverChildren would be complete if leaf node"),c=zh(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=K(n);let d=jh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,B.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jl(r,Zr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Bl(r,ne())!=null,Js(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Rb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Mh(r.getIndex()),s=GT(r);this.processor_=Eb(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),c=new hr(l,o.isFullyInitialized(),i.filtersNodes()),d=new hr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Iu(d,c),this.eventGenerator_=new tb(this.query_)}get query(){return this.query_}}function Nb(t){return t.viewCache_.serverCache.getNode()}function Pb(t){return zl(t.viewCache_)}function Ab(t,e){const n=Zr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Pg(t){return t.eventRegistrations_.length===0}function Ob(t,e){t.eventRegistrations_.push(e)}function Ag(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Og(t,e,n,r){e.type===Ut.MERGE&&e.source.queryId!==null&&(x(Zr(t.viewCache_),"We should always have a full cache before handling merges"),x(zl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Cb(t.processor_,i,e,n,r);return Sb(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,mw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Db(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(Xi(s,o))}),n.isFullyInitialized()&&r.push(iw(n.getNode())),mw(t,r,n.getNode(),e)}function mw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return nb(t.eventGenerator_,e,n,i)}/**
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
 */let $l;class gw{constructor(){this.views=new Map}}function Mb(t){x(!$l,"__referenceConstructor has already been defined"),$l=t}function Lb(){return x($l,"Reference.ts has not been loaded"),$l}function Fb(t){return t.views.size===0}function Wh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Og(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Og(o,e,n,r));return s}}function vw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=jl(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=zh(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const u=Iu(new hr(a,l,!1),new hr(r,i,!1));return new Rb(e,u)}return o}function Ub(t,e,n,r,i,s){const o=vw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ob(o,n),Db(o,n)}function zb(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=pr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ag(u,n,r)),Pg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ag(l,n,r)),Pg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!pr(t)&&s.push(new(Lb())(e._repo,e._path)),{removed:s,events:o}}function yw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function lr(t,e){let n=null;for(const r of t.views.values())n=n||Ab(r,e);return n}function _w(t,e){if(e._queryParams.loadsAllData())return bu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ww(t,e){return _w(t,e)!=null}function pr(t){return bu(t)!=null}function bu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vl;function jb(t){x(!Vl,"__referenceConstructor has already been defined"),Vl=t}function Bb(){return x(Vl,"Reference.ts has not been loaded"),Vl}let Wb=1;class Dg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=vb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ew(t,e,n,r,i){return ob(t.pendingWriteTree_,e,n,r,i),i?Xo(t,new Jr(ow(),e,n)):[]}function Dr(t,e,n=!1){const r=ab(t.pendingWriteTree_,e);if(lb(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(ne(),!0):pt(r.children,o=>{s=s.set(new ae(o),!0)}),Xo(t,new Ul(r.path,s,n))}else return[]}function qo(t,e,n){return Xo(t,new Jr(Fh(),e,n))}function $b(t,e,n){const r=he.fromObject(n);return Xo(t,new No(Fh(),e,r))}function Vb(t,e){return Xo(t,new Ro(Fh(),e))}function Hb(t,e,n){const r=Vh(t,n);if(r){const i=Hh(r),s=i.path,o=i.queryId,a=nt(s,e),l=new Ro(Uh(o),a);return Gh(t,s,l)}else return[]}function Hl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ww(o,e))){const l=zb(o,e,n,r);Fb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>pr(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=Kb(f);for(let y=0;y<g.length;++y){const _=g[y],S=_.query,m=Iw(t,_);t.listenProvider_.startListening(eo(S),Po(t,S),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(eo(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(xu(f));t.listenProvider_.stopListening(eo(f),g)}))}Qb(t,u)}return a}function Sw(t,e,n,r){const i=Vh(t,r);if(i!=null){const s=Hh(i),o=s.path,a=s.queryId,l=nt(o,e),u=new Jr(Uh(a),l,n);return Gh(t,o,u)}else return[]}function Gb(t,e,n,r){const i=Vh(t,r);if(i){const s=Hh(i),o=s.path,a=s.queryId,l=nt(o,e),u=he.fromObject(n),c=new No(Uh(a),l,u);return Gh(t,o,c)}else return[]}function rf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const y=nt(f,i);s=s||lr(g,y),o=o||pr(g)});let a=t.syncPointTree_.get(i);a?(o=o||pr(a),s=s||lr(a,ne())):(a=new gw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const _=lr(y,ne());_&&(s=s.updateImmediateChild(g,_))}));const u=ww(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=xu(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=qb();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=Tu(t.pendingWriteTree_,i);let d=Ub(a,e,n,c,s,l);if(!u&&!o&&!r){const f=_w(a,e);d=d.concat(Xb(t,e,f))}return d}function $h(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),u=lr(a,l);if(u)return u});return cw(i,e,s,n,!0)}function Yb(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=nt(u,n);r=r||lr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||lr(i,ne()):(i=new gw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new hr(r,!0,!1):null,a=Tu(t.pendingWriteTree_,e._path),l=vw(i,e,a,s?o.getNode():B.EMPTY_NODE,s);return Pb(l)}function Xo(t,e){return Cw(e,t.syncPointTree_,null,Tu(t.pendingWriteTree_,ne()))}function Cw(t,e,n,r){if(J(t.path))return kw(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=lr(i,ne()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=dw(r,o);s=s.concat(Cw(a,l,u,c))}return i&&(s=s.concat(Wh(i,t,r,n))),s}}function kw(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=lr(i,ne()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=dw(r,o),c=t.operationForChild(o);c&&(s=s.concat(kw(c,a,l,u)))}),i&&(s=s.concat(Wh(i,t,r,n))),s}function Iw(t,e){const n=e.query,r=Po(t,n);return{hashFn:()=>(Nb(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Hb(t,n._path,r):Vb(t,n._path);{const s=YI(i,n);return Hl(t,n,null,s)}}}}function Po(t,e){const n=xu(e);return t.queryToTagMap.get(n)}function xu(t){return t._path.toString()+"$"+t._queryIdentifier}function Vh(t,e){return t.tagToQueryMap.get(e)}function Hh(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function Gh(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=Tu(t.pendingWriteTree_,e);return Wh(r,n,i,null)}function Kb(t){return t.fold((e,n,r)=>{if(n&&pr(n))return[bu(n)];{let i=[];return n&&(i=yw(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function eo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Bb())(t._repo,t._path):t}function Qb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=xu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function qb(){return Wb++}function Xb(t,e,n){const r=e._path,i=Po(t,e),s=Iw(t,n),o=t.listenProvider_.startListening(eo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!pr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!J(u)&&c&&pr(c))return[bu(c).query];{let f=[];return c&&(f=f.concat(yw(c).map(g=>g.query))),pt(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(eo(c),Po(t,c))}}return o}/**
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
 */class Yh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yh(n)}node(){return this.node_}}class Kh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new Kh(this.syncTree_,n)}node(){return $h(this.syncTree_,this.path_)}}const Jb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Zb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ex(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Zb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},ex=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},tx=function(t,e,n,r){return Qh(e,new Kh(n,t),r)},Tw=function(t,e,n){return Qh(t,new Yh(e),n)};function Qh(t,e,n){const r=t.getPriority().val(),i=Mg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Mg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,$e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new je(i))),o.forEachChild(Se,(a,l)=>{const u=Qh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class qh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Xh(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=K(n);for(;i!==null;){const s=Qi(r.node.children,i)||{children:{},childCount:0};r=new qh(i,r,s),n=ce(n),i=K(n)}return r}function fs(t){return t.node.value}function bw(t,e){t.node.value=e,sf(t)}function xw(t){return t.node.childCount>0}function nx(t){return fs(t)===void 0&&!xw(t)}function Ru(t,e){pt(t.node.children,(n,r)=>{e(new qh(n,t,r))})}function Rw(t,e,n,r){n&&!r&&e(t),Ru(t,i=>{Rw(i,e,!0,r)}),n&&r&&e(t)}function rx(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Jo(t){return new ae(t.parent===null?t.name:Jo(t.parent)+"/"+t.name)}function sf(t){t.parent!==null&&ix(t.parent,t.name,t)}function ix(t,e,n){const r=nx(n),i=sn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,sf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sf(t))}/**
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
 */const sx=/[\[\].#$\/\u0000-\u001F\u007F]/,ox=/[\[\].#$\u0000-\u001F\u007F]/,Fc=10*1024*1024,Jh=function(t){return typeof t=="string"&&t.length!==0&&!sx.test(t)},Nw=function(t){return typeof t=="string"&&t.length!==0&&!ox.test(t)},ax=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nw(t)},Lg=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!bh(t)||t&&typeof t=="object"&&sn(t,".sv")},Nu=function(t,e,n,r){r&&e===void 0||Zh(Su(t,"value"),e,n)},Zh=function(t,e,n){const r=n instanceof ae?new TT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Rr(r)+" with contents = "+e.toString());if(bh(e))throw new Error(t+"contains "+e.toString()+" "+Rr(r));if(typeof e=="string"&&e.length>Fc/3&&Cu(e)>Fc)throw new Error(t+"contains a string greater than "+Fc+" utf8 bytes "+Rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Jh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bT(r,o),Zh(t,a,r),xT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Rr(r)+" in addition to actual children.")}},lx=function(t,e,n,r){if(!(r&&n===void 0)&&!Jh(n))throw new Error(Su(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Pw=function(t,e,n,r){if(!(r&&n===void 0)&&!Nw(n))throw new Error(Su(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ux=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pw(t,e,n,r)},cx=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ax(n))throw new Error(Su(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ep(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ah(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Aw(t,e,n){ep(t,n),Ow(t,r=>Ah(r,e))}function nn(t,e,n){ep(t,n),Ow(t,r=>Ft(r,e)||Ft(e,r))}function Ow(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Br&&Je("event: "+n.toString()),ds(r)}}}/**
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
 */const px="repo_interrupt",mx=25;class gx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fl(),this.transactionQueueTree_=new qh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vx(t,e,n){if(t.stats_=Nh(t.repoInfo_),t.forceRestClient_||XI())t.server_=new Ll(t.repoInfo_,(r,i,s,o)=>{Fg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ug(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new yn(t.repoInfo_,e,(r,i,s,o)=>{Fg(t,r,i,s,o)},r=>{Ug(t,r)},r=>{_x(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nT(t.repoInfo_,()=>new eb(t.stats_,t.server_)),t.infoData_=new QT,t.infoSyncTree_=new Dg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=qo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),np(t,"connected",!1),t.serverSyncTree_=new Dg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);nn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function yx(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tp(t){return Jb({timestamp:yx(t)})}function Fg(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Nl(n,u=>$e(u));o=Gb(t.serverSyncTree_,s,l,i)}else{const l=$e(n);o=Sw(t.serverSyncTree_,s,l,i)}else if(r){const l=Nl(n,u=>$e(u));o=$b(t.serverSyncTree_,s,l)}else{const l=$e(n);o=qo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Au(t,s)),nn(t.eventQueue_,a,o)}function Ug(t,e){np(t,"connected",e),e===!1&&Sx(t)}function _x(t,e){pt(e,(n,r)=>{np(t,n,r)})}function np(t,e,n){const r=new ae("/.info/"+e),i=$e(n);t.infoData_.updateSnapshot(r,i);const s=qo(t.infoSyncTree_,r,i);nn(t.eventQueue_,r,s)}function Dw(t){return t.nextWriteId_++}function wx(t,e,n){const r=Yb(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=$e(i).withIndex(e._queryParams.getIndex());rf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=qo(t.serverSyncTree_,e._path,s);else{const a=Po(t.serverSyncTree_,e);o=Sw(t.serverSyncTree_,e._path,s,a)}return nn(t.eventQueue_,e._path,o),Hl(t.serverSyncTree_,e,n,null,!0),s},i=>(Pu(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ex(t,e,n,r,i){Pu(t,"set",{path:e.toString(),value:n,priority:r});const s=tp(t),o=$e(n,r),a=$h(t.serverSyncTree_,e),l=Tw(o,a,s),u=Dw(t),c=Ew(t.serverSyncTree_,e,l,u,!0);ep(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||ht("set at "+e+" failed: "+f);const _=Dr(t.serverSyncTree_,u,!y);nn(t.eventQueue_,e,_),Ix(t,i,f,g)});const d=zw(t,e);Au(t,d),nn(t.eventQueue_,d,[])}function Sx(t){Pu(t,"onDisconnectEvents");const e=tp(t),n=Fl();Jd(t.onDisconnect_,ne(),(i,s)=>{const o=tx(i,s,t.serverSyncTree_,e);sw(n,i,o)});let r=[];Jd(n,ne(),(i,s)=>{r=r.concat(qo(t.serverSyncTree_,i,s));const o=zw(t,i);Au(t,o)}),t.onDisconnect_=Fl(),nn(t.eventQueue_,ne(),r)}function Cx(t,e,n){let r;K(e._path)===".info"?r=rf(t.infoSyncTree_,e,n):r=rf(t.serverSyncTree_,e,n),Aw(t.eventQueue_,e._path,r)}function zg(t,e,n){let r;K(e._path)===".info"?r=Hl(t.infoSyncTree_,e,n):r=Hl(t.serverSyncTree_,e,n),Aw(t.eventQueue_,e._path,r)}function kx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(px)}function Pu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function Ix(t,e,n,r){e&&ds(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Mw(t,e,n){return $h(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function rp(t,e=t.transactionQueueTree_){if(e||Ou(t,e),fs(e)){const n=Fw(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Tx(t,Jo(e),n)}else xw(e)&&Ru(e,n=>{rp(t,n)})}function Tx(t,e,n){const r=n.map(u=>u.currentWriteId),i=Mw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];x(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=nt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Pu(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Dr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ou(t,Xh(t.transactionQueueTree_,e)),rp(t,t.transactionQueueTree_),nn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)ds(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ht("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Au(t,e)}},o)}function Au(t,e){const n=Lw(t,e),r=Jo(n),i=Fw(t,n);return bx(t,i,r),r}function bx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=nt(n,l.path);let c=!1,d;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mx)c=!0,d="maxretry",i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Mw(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Zh("transaction failed: Data returned ",g,l.path);let y=$e(g);typeof g=="object"&&g!=null&&sn(g,".priority")||(y=y.updatePriority(f.getPriority()));const S=l.currentWriteId,m=tp(t),h=Tw(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=Dw(t),o.splice(o.indexOf(S),1),i=i.concat(Ew(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Dr(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0))}nn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ou(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ds(r[a]);rp(t,t.transactionQueueTree_)}function Lw(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&fs(r)===void 0;)r=Xh(r,n),e=ce(e),n=K(e);return r}function Fw(t,e){const n=[];return Uw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Uw(t,e,n){const r=fs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ru(e,i=>{Uw(t,i,n)})}function Ou(t,e){const n=fs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bw(e,n.length>0?n:void 0)}Ru(e,r=>{Ou(t,r)})}function zw(t,e){const n=Jo(Lw(t,e)),r=Xh(t.transactionQueueTree_,e);return rx(r,i=>{Uc(t,i)}),Uc(t,r),Rw(r,i=>{Uc(t,i)}),n}function Uc(t,e){const n=fs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bw(e,void 0):n.length=s+1,nn(t.eventQueue_,Jo(e),i);for(let o=0;o<r.length;o++)ds(r[o])}}/**
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
 */function xx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const jg=function(t,e){const n=Nx(t),r=n.namespace;n.domain==="firebase.com"&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||WI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new U0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},Nx=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=xx(t.substring(c,d)));const f=Rx(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class jw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class Bw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ww{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Zo{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:Y0(this._path)}get ref(){return new on(this._repo,this._path)}get _queryIdentifier(){const e=Cg(this._queryParams),n=xh(e);return n==="{}"?"default":n}get _queryObject(){return Cg(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Zo))return!1;const n=this._repo===e._repo,r=Ah(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IT(this._path)}}function $w(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Wr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Xr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==dr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Se){if(e!=null&&!Lg(e)||n!=null&&!Lg(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(x(t.getIndex()instanceof nw||t.getIndex()===rw,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Vw(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class on extends Zo{constructor(e,n){super(e,n,new Lh,!1)}get parent(){const e=Q0(this._path);return e===null?null:new on(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=es(this.ref,e);return new Zi(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Zi(i,es(this.ref,r),Se)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ip(t,e){return t=ot(t),t._checkNotDeleted("ref"),e!==void 0?es(t._root,e):t._root}function es(t,e){return t=ot(t),K(t._path)===null?ux("child","path",e,!1):Pw("child","path",e,!1),new on(t._repo,Le(t._path,e))}function Px(t,e){t=ot(t),cx("set",t._path),Nu("set",e,t._path,!1);const n=new Eu;return Ex(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hw(t){t=ot(t);const e=new Ww(()=>{}),n=new Du(e);return wx(t._repo,t,n).then(r=>new Zi(r,new on(t._repo,t._path),t._queryParams.getIndex()))}class Du{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new jw("value",this,new Zi(e.snapshotNode,new on(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Bw(this,e,n):null}matches(e){return e instanceof Du?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class sp{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Bw(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=es(new on(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new jw(e.type,this,new Zi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sp?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ax(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{zg(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Ww(n,s||void 0),a=e==="value"?new Du(o):new sp(e,o);return Cx(t._repo,t,a),()=>zg(t._repo,t,a)}function Ox(t,e,n,r){return Ax(t,"value",e,n,r)}class op{}class Dx extends op{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Nu("endAt",this._value,e._path,!0);const n=KT(e._queryParams,this._value,this._key);if(Vw(n),$w(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Zo(e._repo,e._path,n,e._orderByCalled)}}class Mx extends op{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Nu("startAt",this._value,e._path,!0);const n=YT(e._queryParams,this._value,this._key);if(Vw(n),$w(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Zo(e._repo,e._path,n,e._orderByCalled)}}class Lx extends op{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Nu("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Dx(this._value,this._key)._apply(new Mx(this._value,this._key)._apply(e))}}function Fx(t,e){return lx("equalTo","key",e,!0),new Lx(t,e)}function Ux(t,...e){let n=ot(t);for(const r of e)n=r._apply(n);return n}Mb(on);jb(on);/**
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
 */const zx="FIREBASE_DATABASE_EMULATOR_HOST",of={};let jx=!1;function Bx(t,e,n,r){t.repoInfo_=new U0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Wx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jg(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[zx]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=jg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Fi(Fi.OWNER):new ZI(t.name,t.options,e);dx("Invalid Firebase Database URL",o),J(o.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Vx(a,t,c,new JI(t.name,n));return new Hx(d,t)}function $x(t,e){const n=of[e];(!n||n[t.key]!==t)&&kn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kx(t),delete n[t.key]}function Vx(t,e,n,r){let i=of[e.name];i||(i={},of[e.name]=i);let s=i[t.toURLString()];return s&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new gx(t,jx,n,r),i[t.toURLString()]=s,s}class Hx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new on(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&($x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kn("Cannot call "+e+" on a deleted database.")}}function Gw(t=E0(),e){const n=Th(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=pk("database");r&&Gx(n,...r)}return n}function Gx(t,e,n,r={}){t=ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&kn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Fi(Fi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:mk(r.mockUserToken,t.app.options.projectId);s=new Fi(o)}Bx(i,e,n,s)}/**
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
 */function Yx(t){FI(us),qi(new Qr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Wx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),or(og,ag,t),or(og,ag,"esm2017")}yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yx();function ap(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kx=Yw,Kw=new Go("auth","Firebase",Yw());/**
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
 */const Gl=new kh("@firebase/auth");function Qx(t,...e){Gl.logLevel<=se.WARN&&Gl.warn(`Auth (${us}): ${t}`,...e)}function Ja(t,...e){Gl.logLevel<=se.ERROR&&Gl.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw lp(t,...e)}function en(t,...e){return lp(t,...e)}function Qw(t,e,n){const r=Object.assign(Object.assign({},Kx()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function qx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),Qw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kw.create(t,...e)}function H(t,e,...n){if(!t)throw lp(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ja(e),new Error(e)}function In(t,e){t||mn(e)}/**
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
 */function af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xx(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xx()||gk()||"connection"in navigator)?navigator.onLine:!0}function Zx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Ch()||m0()}get(){return Jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function up(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tR=new ea(3e4,6e4);function Xw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ta(t,e,n,r,i={}){return Jw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ls(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qw.fetch()(Zw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Jw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eR),e);try{const i=new rR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Na(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qw(t,c,u);rn(t,c)}}catch(i){if(i instanceof Sr)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function nR(t,e,n,r,i={}){const s=await ta(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?up(t.config,i):`${t.config.apiScheme}://${i}`}class rR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),tR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function iR(t,e){return ta(t,"POST","/v1/accounts:delete",e)}async function sR(t,e){return ta(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oR(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=cp(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(zc(i.auth_time)),issuedAtTime:to(zc(i.iat)),expirationTime:to(zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function cp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rl(n);return i?JSON.parse(i):(Ja("Failed to decode base64 JWT payload"),null)}catch(i){return Ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aR(t){const e=cp(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sr&&lR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class eE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ao(t,sR(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fR(s.providerUserInfo):[],a=dR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new eE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function cR(t){const e=ot(t);await Yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fR(t){return t.map(e=>{var{providerId:n}=e,r=ap(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hR(t,e){const n=await Jw(t,{},async()=>{const r=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oo;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Un(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oR(this,e)}reload(){return cR(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ao(this,iR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:p,isAnonymous:C,providerData:R,stsTokenManager:b}=n;H(v&&b,e,"internal-error");const P=Oo.fromJSON(this.name,b);H(typeof v=="string",e,"internal-error"),Un(d,e.name),Un(f,e.name),H(typeof p=="boolean",e,"internal-error"),H(typeof C=="boolean",e,"internal-error"),Un(g,e.name),Un(y,e.name),Un(_,e.name),Un(S,e.name),Un(m,e.name),Un(h,e.name);const W=new $r({uid:v,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:P,createdAt:m,lastLoginAt:h});return R&&Array.isArray(R)&&(W.providerData=R.map(U=>Object.assign({},U))),S&&(W._redirectEventId=S),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oo;i.updateFromServerResponse(n);const s=new $r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yl(s),s}}/**
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
 */const Wg=new Map;function gn(t){In(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
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
 */class tE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tE.type="NONE";const $g=tE;/**
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
 */function Za(t,e,n){return`firebase:${t}:${e}:${n}`}class Ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Za(this.userKey,i.apiKey,s),this.fullPersistenceKey=Za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ui(gn($g),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gn($g);const o=Za(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=$r._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ui(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ui(s,e,r))}}/**
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
 */function Vg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oE(e))return"Blackberry";if(aE(e))return"Webos";if(dp(e))return"Safari";if((e.includes("chrome/")||rE(e))&&!e.includes("edge/"))return"Chrome";if(sE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nE(t=et()){return/firefox\//i.test(t)}function dp(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rE(t=et()){return/crios\//i.test(t)}function iE(t=et()){return/iemobile/i.test(t)}function sE(t=et()){return/android/i.test(t)}function oE(t=et()){return/blackberry/i.test(t)}function aE(t=et()){return/webos/i.test(t)}function Mu(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pR(t=et()){var e;return Mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mR(){return vk()&&document.documentMode===10}function lE(t=et()){return Mu(t)||sE(t)||aE(t)||oE(t)||/windows phone/i.test(t)||iE(t)}function gR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function uE(t,e=[]){let n;switch(t){case"Browser":n=Vg(et());break;case"Worker":n=`${Vg(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class vR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yR(t,e={}){return ta(t,"GET","/v2/passwordPolicy",Xw(t,e))}/**
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
 */const _R=6;class wR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_R,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ER{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new vR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yR(this),n=new wR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Qx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lu(t){return ot(t)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tk(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function SR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function CR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SR().appendChild(r)})}function kR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function IR(t,e){const n=Th(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pl(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function TR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bR(t,e,n){const r=Lu(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cE(e),{host:o,port:a}=xR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RR()}function cE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xR(t){const e=cE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
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
 */async function zi(t,e){return nR(t,"POST","/v1/accounts:signInWithIdp",Xw(t,e))}/**
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
 */const NR="http://localhost";class ei extends dE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ap(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:NR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
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
 */class fp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class na extends fp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends na{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class qt extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
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
 */class Hn extends na{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class Gn extends na{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $r._fromIdTokenResponse(e,r,i),o=Yg(r);return new ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yg(r);return new ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kl extends Sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function fE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function PR(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
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
 */async function AR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ao(t,fE(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=cp(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
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
 */async function OR(t,e,n=!1){const r="signIn",i=await fE(t,r,e),s=await ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function DR(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function MR(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function hE(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function LR(t){return ot(t).signOut()}const Ql="__sak";/**
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
 */class pE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FR(){const t=et();return dp(t)||Mu(t)}const UR=1e3,zR=10;class mE extends pE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FR()&&gR(),this.fallbackToPolling=lE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mE.type="LOCAL";const jR=mE;/**
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
 */class gE extends pE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gE.type="SESSION";const vE=gE;/**
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
 */function BR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await BR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fu.receivers=[];/**
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
 */function hp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function $R(t){tn().location.href=t}/**
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
 */function yE(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function VR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GR(){return yE()?self:null}/**
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
 */const _E="firebaseLocalStorageDb",YR=1,ql="firebaseLocalStorage",wE="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uu(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function KR(){const t=indexedDB.deleteDatabase(_E);return new ra(t).toPromise()}function lf(){const t=indexedDB.open(_E,YR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ql,{keyPath:wE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ql)?e(r):(r.close(),await KR(),e(await lf()))})})}async function Kg(t,e,n){const r=Uu(t,!0).put({[wE]:e,value:n});return new ra(r).toPromise()}async function QR(t,e){const n=Uu(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=Uu(t,!0).delete(e);return new ra(n).toPromise()}const qR=800,XR=3;class EE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fu._getInstance(GR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VR(),!this.activeServiceWorker)return;this.sender=new WR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lf();return await Kg(e,Ql,"1"),await Qg(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uu(i,!1).getAll();return new ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}EE.type="LOCAL";const JR=EE;new ea(3e4,6e4);/**
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
 */function SE(t,e){return e?gn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pp extends dE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZR(t){return OR(t.auth,new pp(t),t.bypassAuthState)}function eN(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),AR(n,new pp(t),t.bypassAuthState)}async function tN(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),PR(n,new pp(t),t.bypassAuthState)}/**
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
 */class CE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZR;case"linkViaPopup":case"linkViaRedirect":return tN;case"reauthViaPopup":case"reauthViaRedirect":return eN;default:rn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nN=new ea(2e3,1e4);async function rN(t,e,n){const r=Lu(t);qx(t,e,fp);const i=SE(r,n);return new Mr(r,"signInViaPopup",e,i).executeNotNull()}class Mr extends CE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nN.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const iN="pendingRedirect",el=new Map;class sN extends CE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await oN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oN(t,e){const n=uN(e),r=lN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aN(t,e){el.set(t._key(),e)}function lN(t){return gn(t._redirectPersistence)}function uN(t){return Za(iN,t.config.apiKey,t.name)}async function cN(t,e,n=!1){const r=Lu(t),i=SE(r,e),o=await new sN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dN=10*60*1e3;class fN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dN&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kE(t);default:return!1}}/**
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
 */async function pN(t,e={}){return ta(t,"GET","/v1/projects",e)}/**
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
 */const mN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gN=/^https?/;async function vN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pN(t);for(const n of e)try{if(yN(n))return}catch{}rn(t,"unauthorized-domain")}function yN(t){const e=af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gN.test(n))return!1;if(mN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _N=new ea(3e4,6e4);function Xg(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wN(t){return new Promise((e,n)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(en(t,"network-request-failed"))},timeout:_N.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const a=kR("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},CR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tl=null,e})}let tl=null;function EN(t){return tl=tl||wN(t),tl}/**
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
 */const SN=new ea(5e3,15e3),CN="__/auth/iframe",kN="emulator/auth/iframe",IN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bN(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?up(e,kN):`https://${t.config.authDomain}/${CN}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=TN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ls(r).slice(1)}`}async function xN(t){const e=await EN(t),n=tn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:bN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{s(o)},SN.get());function l(){tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const RN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NN=500,PN=600,AN="_blank",ON="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DN(t,e,n,r=NN,i=PN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=et().toLowerCase();n&&(a=rE(u)?AN:n),nE(u)&&(e=e||ON,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(pR(u)&&a!=="_self")return MN(e||"",a),new Jg(null);const d=window.open(e||"",a,c);H(d,t,"popup-blocked");try{d.focus()}catch{}return new Jg(d)}function MN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LN="__/auth/handler",FN="emulator/auth/handler",UN=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof fp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof na){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${UN}=${encodeURIComponent(l)}`:"";return`${zN(t)}?${ls(a).slice(1)}${u}`}function zN({config:t}){return t.emulator?up(t,FN):`https://${t.authDomain}/${LN}`}/**
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
 */const jc="webStorageSupport";class jN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vE,this._completeRedirectFn=cN,this._overrideRedirectResult=aN}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,af(),i);return DN(e,o,hp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,af(),i);return $R(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xN(e),r=new fN(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lE()||dp()||Mu()}}const BN=jN;var ev="@firebase/auth",tv="1.3.0";/**
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
 */class WN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $N(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VN(t){qi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uE(t)},u=new ER(r,i,s,l);return TR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qi(new Qr("auth-internal",e=>{const n=Lu(e.getProvider("auth").getImmediate());return(r=>new WN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(ev,tv,$N(t)),or(ev,tv,"esm2017")}/**
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
 */const HN=5*60,GN=p0("authIdTokenMaxAge")||HN;let nv=null;const YN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GN)return;const i=n==null?void 0:n.token;nv!==i&&(nv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KN(t=E0()){const e=Th(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IR(t,{popupRedirectResolver:BN,persistence:[JR,jR,vE]}),r=p0("authTokenSyncURL");if(r){const s=YN(r);MR(n,s,()=>s(n.currentUser)),DR(n,o=>s(o))}const i=f0("auth");return i&&bR(n,`http://${i}`),n}VN("Browser");const QN={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com/"},IE=w0(QN),qN=Gw(IE),TE=ip(Gw()),bE=qN,mr=KN(IE);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we.apply(this,arguments)}var Pe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pe||(Pe={}));const rv="popstate";function XN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Do("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ti(i)}return ZN(e,n,null,t)}function X(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ns(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JN(){return Math.random().toString(36).substr(2,8)}function iv(t,e){return{usr:t.state,key:t.key,idx:e}}function Do(t,e,n,r){return n===void 0&&(n=null),we({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Nn(e):e,{state:n,key:e&&e.key||r||JN()})}function ti(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Nn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(we({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Pe.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:m})}function f(S,m){a=Pe.Push;let h=Do(_.location,S,m);n&&n(h,S),u=c()+1;let v=iv(h,u),p=_.createHref(h);try{o.pushState(v,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function g(S,m){a=Pe.Replace;let h=Do(_.location,S,m);n&&n(h,S),u=c();let v=iv(h,u),p=_.createHref(h);o.replaceState(v,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:ti(S);return X(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let _={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rv,d),l=S,()=>{i.removeEventListener(rv,d),l=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(S){return o.go(S)}};return _}var xe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xe||(xe={}));const eP=new Set(["lazy","caseSensitive","path","id","index","children"]);function tP(t){return t.index===!0}function uf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(X(i.index!==!0||!i.children,"Cannot specify children on an index route"),X(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),tP(i)){let l=we({},i,e(i),{id:a});return r[a]=l,l}else{let l=we({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=uf(i.children,e,o,r)),l}})}function Ii(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Nn(e):e,i=hs(r.pathname||"/",n);if(i==null)return null;let s=xE(t);rP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=fP(s[a],mP(i));return o}function nP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function xE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=_n([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:cP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of RE(s.path))i(s,o,l)}),e}function RE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function rP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iP=/^:\w+$/,sP=3,oP=2,aP=1,lP=10,uP=-2,sv=t=>t==="*";function cP(t,e){let n=t.split("/"),r=n.length;return n.some(sv)&&(r+=uP),e&&(r+=oP),n.filter(i=>!sv(i)).reduce((i,s)=>i+(iP.test(s)?sP:s===""?aP:lP),r)}function dP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function fP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=hP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:_n([i,c.pathname]),pathnameBase:_P(_n([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=_n([i,c.pathnameBase]))}return s}function hP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=pP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=gP(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function pP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ns(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mP(t){try{return decodeURI(t)}catch(e){return ns(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gP(t,e){try{return decodeURIComponent(t)}catch(n){return ns(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function hs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Nn(t):t;return{pathname:n?n.startsWith("/")?n:yP(n,e):e,search:wP(r),hash:EP(i)}}function yP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Nn(t):(i=we({},t),X(!i.pathname||!i.pathname.includes("?"),Bc("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),Bc("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),Bc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=vP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const _n=t=>t.join("/").replace(/\/\/+/g,"/"),_P=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,EP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class gp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function NE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const PE=["post","put","patch","delete"],SP=new Set(PE),CP=["get",...PE],kP=new Set(CP),IP=new Set([301,302,303,307,308]),TP=new Set([307,308]),Wc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},bP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Os={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},AE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xP=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function RP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;X(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=E=>({hasErrorBoundary:w(E)})}else i=xP;let s={},o=uf(t.routes,i,void 0,s),a,l=t.basename||"/",u=we({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,g=null,y=null,_=t.hydrationData!=null,S=Ii(o,t.history.location,l),m=null;if(S==null){let w=Ct(404,{pathname:t.history.location.pathname}),{matches:E,route:k}=hv(o);S=E,m={[k.id]:w}}let h=!S.some(w=>w.route.lazy)&&(!S.some(w=>w.route.loader)||t.hydrationData!=null),v,p={historyAction:t.history.action,location:t.history.location,matches:S,initialized:h,navigation:Wc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},C=Pe.Pop,R=!1,b,P=!1,W=!1,U=[],ze=[],le=new Map,Vt=0,On=-1,Dn=new Map,mt=new Set,Ht=new Map,N=new Map,z=new Map,G=!1;function ye(){return c=t.history.listen(w=>{let{action:E,location:k,delta:D}=w;if(G){G=!1;return}ns(z.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=zp({currentLocation:p.location,nextLocation:k,historyAction:E});if(V&&D!=null){G=!0,t.history.go(D*-1),ua(V,{state:"blocked",location:k,proceed(){ua(V,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(D)},reset(){let $=new Map(p.blockers);$.set(V,Os),ue({blockers:$})}});return}return Cr(E,k)}),p.initialized||Cr(Pe.Pop,p.location),v}function Ne(){c&&c(),d.clear(),b&&b.abort(),p.fetchers.forEach((w,E)=>Ku(E)),p.blockers.forEach((w,E)=>Up(E))}function ai(w){return d.add(w),()=>d.delete(w)}function ue(w){p=we({},p,w),d.forEach(E=>E(p))}function an(w,E){var k,D;let V=p.actionData!=null&&p.navigation.formMethod!=null&&Dt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((k=w.state)==null?void 0:k._isRedirect)!==!0,$;E.actionData?Object.keys(E.actionData).length>0?$=E.actionData:$=null:V?$=p.actionData:$=null;let Y=E.loaderData?fv(p.loaderData,E.loaderData,E.matches||[],E.errors):p.loaderData,j=p.blockers;j.size>0&&(j=new Map(j),j.forEach((_e,Ke)=>j.set(Ke,Os)));let F=R===!0||p.navigation.formMethod!=null&&Dt(p.navigation.formMethod)&&((D=w.state)==null?void 0:D._isRedirect)!==!0;a&&(o=a,a=void 0),P||C===Pe.Pop||(C===Pe.Push?t.history.push(w,w.state):C===Pe.Replace&&t.history.replace(w,w.state)),ue(we({},E,{actionData:$,loaderData:Y,historyAction:C,location:w,initialized:!0,navigation:Wc,revalidation:"idle",restoreScrollPosition:Bp(w,E.matches||p.matches),preventScrollReset:F,blockers:j})),C=Pe.Pop,R=!1,P=!1,W=!1,U=[],ze=[]}async function Gt(w,E){if(typeof w=="number"){t.history.go(w);return}let k=cf(p.location,p.matches,l,u.v7_prependBasename,w,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:D,submission:V,error:$}=ov(u.v7_normalizeFormMethod,!1,k,E),Y=p.location,j=Do(p.location,D,E&&E.state);j=we({},j,t.history.encodeLocation(j));let F=E&&E.replace!=null?E.replace:void 0,_e=Pe.Push;F===!0?_e=Pe.Replace:F===!1||V!=null&&Dt(V.formMethod)&&V.formAction===p.location.pathname+p.location.search&&(_e=Pe.Replace);let Ke=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,te=zp({currentLocation:Y,nextLocation:j,historyAction:_e});if(te){ua(te,{state:"blocked",location:j,proceed(){ua(te,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),Gt(w,E)},reset(){let oe=new Map(p.blockers);oe.set(te,Os),ue({blockers:oe})}});return}return await Cr(_e,j,{submission:V,pendingError:$,preventScrollReset:Ke,replace:E&&E.replace})}function li(){if(Yu(),ue({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Cr(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Cr(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Cr(w,E,k){b&&b.abort(),b=null,C=w,P=(k&&k.startUninterruptedRevalidation)===!0,N1(p.location,p.matches),R=(k&&k.preventScrollReset)===!0;let D=a||o,V=k&&k.overrideNavigation,$=Ii(D,E,l);if(!$){let oe=Ct(404,{pathname:E.pathname}),{matches:be,route:kr}=hv(D);Qu(),an(E,{matches:be,loaderData:{},errors:{[kr.id]:oe}});return}if(p.initialized&&!W&&DP(p.location,E)&&!(k&&k.submission&&Dt(k.submission.formMethod))){an(E,{matches:$});return}b=new AbortController;let Y=Ms(t.history,E,b.signal,k&&k.submission),j,F;if(k&&k.pendingError)F={[Ti($).route.id]:k.pendingError};else if(k&&k.submission&&Dt(k.submission.formMethod)){let oe=await C1(Y,E,k.submission,$,{replace:k.replace});if(oe.shortCircuited)return;j=oe.pendingActionData,F=oe.pendingActionError,V=$c(E,k.submission),Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:_e,loaderData:Ke,errors:te}=await k1(Y,E,$,V,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,j,F);_e||(b=null,an(E,we({matches:$},j?{actionData:j}:{},{loaderData:Ke,errors:te})))}async function C1(w,E,k,D,V){V===void 0&&(V={}),Yu();let $=UP(E,k);ue({navigation:$});let Y,j=ff(D,E);if(!j.route.action&&!j.route.lazy)Y={type:xe.error,error:Ct(405,{method:w.method,pathname:E.pathname,routeId:j.route.id})};else if(Y=await Ds("action",w,j,D,s,i,l),w.signal.aborted)return{shortCircuited:!0};if(ji(Y)){let F;return V&&V.replace!=null?F=V.replace:F=Y.location===p.location.pathname+p.location.search,await ys(p,Y,{submission:k,replace:F}),{shortCircuited:!0}}if(no(Y)){let F=Ti(D,j.route.id);return(V&&V.replace)!==!0&&(C=Pe.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:Y.error}}}if(Lr(Y))throw Ct(400,{type:"defer-action"});return{pendingActionData:{[j.route.id]:Y.data}}}async function k1(w,E,k,D,V,$,Y,j,F){let _e=D||$c(E,V),Ke=V||$||gv(_e),te=a||o,[oe,be]=av(t.history,p,k,Ke,E,W,U,ze,Ht,mt,te,l,j,F);if(Qu(ie=>!(k&&k.some(Nt=>Nt.route.id===ie))||oe&&oe.some(Nt=>Nt.route.id===ie)),On=++Vt,oe.length===0&&be.length===0){let ie=Lp();return an(E,we({matches:k,loaderData:{},errors:F||null},j?{actionData:j}:{},ie?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!P){be.forEach(Nt=>{let Ln=p.fetchers.get(Nt.key),ec=Ls(void 0,Ln?Ln.data:void 0);p.fetchers.set(Nt.key,ec)});let ie=j||p.actionData;ue(we({navigation:_e},ie?Object.keys(ie).length===0?{actionData:null}:{actionData:ie}:{},be.length>0?{fetchers:new Map(p.fetchers)}:{}))}be.forEach(ie=>{le.has(ie.key)&&Mn(ie.key),ie.controller&&le.set(ie.key,ie.controller)});let kr=()=>be.forEach(ie=>Mn(ie.key));b&&b.signal.addEventListener("abort",kr);let{results:Ir,loaderResults:_s,fetcherResults:qu}=await Dp(p.matches,k,oe,be,w);if(w.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",kr),be.forEach(ie=>le.delete(ie.key));let ln=pv(Ir);if(ln){if(ln.idx>=oe.length){let ie=be[ln.idx-oe.length].key;mt.add(ie)}return await ys(p,ln.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:un,errors:ca}=dv(p,k,oe,_s,F,be,qu,N);N.forEach((ie,Nt)=>{ie.subscribe(Ln=>{(Ln||ie.done)&&N.delete(Nt)})});let Xu=Lp(),Ju=Fp(On),Zu=Xu||Ju||be.length>0;return we({loaderData:un,errors:ca},Zu?{fetchers:new Map(p.fetchers)}:{})}function Op(w){return p.fetchers.get(w)||bP}function I1(w,E,k,D){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");le.has(w)&&Mn(w);let V=a||o,$=cf(p.location,p.matches,l,u.v7_prependBasename,k,E,D==null?void 0:D.relative),Y=Ii(V,$,l);if(!Y){la(w,E,Ct(404,{pathname:$}));return}let{path:j,submission:F,error:_e}=ov(u.v7_normalizeFormMethod,!0,$,D);if(_e){la(w,E,_e);return}let Ke=ff(Y,j);if(R=(D&&D.preventScrollReset)===!0,F&&Dt(F.formMethod)){T1(w,E,j,Ke,Y,F);return}Ht.set(w,{routeId:E,path:j}),b1(w,E,j,Ke,Y,F)}async function T1(w,E,k,D,V,$){if(Yu(),Ht.delete(w),!D.route.action&&!D.route.lazy){let Oe=Ct(405,{method:$.formMethod,pathname:k,routeId:E});la(w,E,Oe);return}let Y=p.fetchers.get(w),j=zP($,Y);p.fetchers.set(w,j),ue({fetchers:new Map(p.fetchers)});let F=new AbortController,_e=Ms(t.history,k,F.signal,$);le.set(w,F);let Ke=Vt,te=await Ds("action",_e,D,V,s,i,l);if(_e.signal.aborted){le.get(w)===F&&le.delete(w);return}if(ji(te))if(le.delete(w),On>Ke){let Oe=di(void 0);p.fetchers.set(w,Oe),ue({fetchers:new Map(p.fetchers)});return}else{mt.add(w);let Oe=Ls($);return p.fetchers.set(w,Oe),ue({fetchers:new Map(p.fetchers)}),ys(p,te,{fetcherSubmission:$})}if(no(te)){la(w,E,te.error);return}if(Lr(te))throw Ct(400,{type:"defer-action"});let oe=p.navigation.location||p.location,be=Ms(t.history,oe,F.signal),kr=a||o,Ir=p.navigation.state!=="idle"?Ii(kr,p.navigation.location,l):p.matches;X(Ir,"Didn't find any matches after fetcher action");let _s=++Vt;Dn.set(w,_s);let qu=Ls($,te.data);p.fetchers.set(w,qu);let[ln,un]=av(t.history,p,Ir,$,oe,W,U,ze,Ht,mt,kr,l,{[D.route.id]:te.data},void 0);un.filter(Oe=>Oe.key!==w).forEach(Oe=>{let ws=Oe.key,Wp=p.fetchers.get(ws),A1=Ls(void 0,Wp?Wp.data:void 0);p.fetchers.set(ws,A1),le.has(ws)&&Mn(ws),Oe.controller&&le.set(ws,Oe.controller)}),ue({fetchers:new Map(p.fetchers)});let ca=()=>un.forEach(Oe=>Mn(Oe.key));F.signal.addEventListener("abort",ca);let{results:Xu,loaderResults:Ju,fetcherResults:Zu}=await Dp(p.matches,Ir,ln,un,be);if(F.signal.aborted)return;F.signal.removeEventListener("abort",ca),Dn.delete(w),le.delete(w),un.forEach(Oe=>le.delete(Oe.key));let ie=pv(Xu);if(ie){if(ie.idx>=ln.length){let Oe=un[ie.idx-ln.length].key;mt.add(Oe)}return ys(p,ie.result)}let{loaderData:Nt,errors:Ln}=dv(p,p.matches,ln,Ju,void 0,un,Zu,N);if(p.fetchers.has(w)){let Oe=di(te.data);p.fetchers.set(w,Oe)}let ec=Fp(_s);p.navigation.state==="loading"&&_s>On?(X(C,"Expected pending action"),b&&b.abort(),an(p.navigation.location,{matches:Ir,loaderData:Nt,errors:Ln,fetchers:new Map(p.fetchers)})):(ue(we({errors:Ln,loaderData:fv(p.loaderData,Nt,Ir,Ln)},ec||un.length>0?{fetchers:new Map(p.fetchers)}:{})),W=!1)}async function b1(w,E,k,D,V,$){let Y=p.fetchers.get(w),j=Ls($,Y?Y.data:void 0);p.fetchers.set(w,j),ue({fetchers:new Map(p.fetchers)});let F=new AbortController,_e=Ms(t.history,k,F.signal);le.set(w,F);let Ke=Vt,te=await Ds("loader",_e,D,V,s,i,l);if(Lr(te)&&(te=await ME(te,_e.signal,!0)||te),le.get(w)===F&&le.delete(w),_e.signal.aborted)return;if(ji(te))if(On>Ke){let be=di(void 0);p.fetchers.set(w,be),ue({fetchers:new Map(p.fetchers)});return}else{mt.add(w),await ys(p,te);return}if(no(te)){let be=Ti(p.matches,E);p.fetchers.delete(w),ue({fetchers:new Map(p.fetchers),errors:{[be.route.id]:te.error}});return}X(!Lr(te),"Unhandled fetcher deferred data");let oe=di(te.data);p.fetchers.set(w,oe),ue({fetchers:new Map(p.fetchers)})}async function ys(w,E,k){let{submission:D,fetcherSubmission:V,replace:$}=k===void 0?{}:k;E.revalidate&&(W=!0);let Y=Do(w.location,E.location,{_isRedirect:!0});if(X(Y,"Expected a location on the redirect navigation"),n){let oe=!1;if(E.reloadDocument)oe=!0;else if(AE.test(E.location)){const be=t.history.createURL(E.location);oe=be.origin!==e.location.origin||hs(be.pathname,l)==null}if(oe){$?e.location.replace(E.location):e.location.assign(E.location);return}}b=null;let j=$===!0?Pe.Replace:Pe.Push,{formMethod:F,formAction:_e,formEncType:Ke}=w.navigation;!D&&!V&&F&&_e&&Ke&&(D=gv(w.navigation));let te=D||V;if(TP.has(E.status)&&te&&Dt(te.formMethod))await Cr(j,Y,{submission:we({},te,{formAction:E.location}),preventScrollReset:R});else{let oe=$c(Y,D);await Cr(j,Y,{overrideNavigation:oe,fetcherSubmission:V,preventScrollReset:R})}}async function Dp(w,E,k,D,V){let $=await Promise.all([...k.map(F=>Ds("loader",V,F,E,s,i,l)),...D.map(F=>F.matches&&F.match&&F.controller?Ds("loader",Ms(t.history,F.path,F.controller.signal),F.match,F.matches,s,i,l):{type:xe.error,error:Ct(404,{pathname:F.path})})]),Y=$.slice(0,k.length),j=$.slice(k.length);return await Promise.all([mv(w,k,Y,Y.map(()=>V.signal),!1,p.loaderData),mv(w,D.map(F=>F.match),j,D.map(F=>F.controller?F.controller.signal:null),!0)]),{results:$,loaderResults:Y,fetcherResults:j}}function Yu(){W=!0,U.push(...Qu()),Ht.forEach((w,E)=>{le.has(E)&&(ze.push(E),Mn(E))})}function la(w,E,k){let D=Ti(p.matches,E);Ku(w),ue({errors:{[D.route.id]:k},fetchers:new Map(p.fetchers)})}function Ku(w){let E=p.fetchers.get(w);le.has(w)&&!(E&&E.state==="loading"&&Dn.has(w))&&Mn(w),Ht.delete(w),Dn.delete(w),mt.delete(w),p.fetchers.delete(w)}function Mn(w){let E=le.get(w);X(E,"Expected fetch controller: "+w),E.abort(),le.delete(w)}function Mp(w){for(let E of w){let k=Op(E),D=di(k.data);p.fetchers.set(E,D)}}function Lp(){let w=[],E=!1;for(let k of mt){let D=p.fetchers.get(k);X(D,"Expected fetcher: "+k),D.state==="loading"&&(mt.delete(k),w.push(k),E=!0)}return Mp(w),E}function Fp(w){let E=[];for(let[k,D]of Dn)if(D<w){let V=p.fetchers.get(k);X(V,"Expected fetcher: "+k),V.state==="loading"&&(Mn(k),Dn.delete(k),E.push(k))}return Mp(E),E.length>0}function x1(w,E){let k=p.blockers.get(w)||Os;return z.get(w)!==E&&z.set(w,E),k}function Up(w){p.blockers.delete(w),z.delete(w)}function ua(w,E){let k=p.blockers.get(w)||Os;X(k.state==="unblocked"&&E.state==="blocked"||k.state==="blocked"&&E.state==="blocked"||k.state==="blocked"&&E.state==="proceeding"||k.state==="blocked"&&E.state==="unblocked"||k.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+E.state);let D=new Map(p.blockers);D.set(w,E),ue({blockers:D})}function zp(w){let{currentLocation:E,nextLocation:k,historyAction:D}=w;if(z.size===0)return;z.size>1&&ns(!1,"A router only supports one blocker at a time");let V=Array.from(z.entries()),[$,Y]=V[V.length-1],j=p.blockers.get($);if(!(j&&j.state==="proceeding")&&Y({currentLocation:E,nextLocation:k,historyAction:D}))return $}function Qu(w){let E=[];return N.forEach((k,D)=>{(!w||w(D))&&(k.cancel(),E.push(D),N.delete(D))}),E}function R1(w,E,k){if(f=w,y=E,g=k||null,!_&&p.navigation===Wc){_=!0;let D=Bp(p.location,p.matches);D!=null&&ue({restoreScrollPosition:D})}return()=>{f=null,y=null,g=null}}function jp(w,E){return g&&g(w,E.map(D=>nP(D,p.loaderData)))||w.key}function N1(w,E){if(f&&y){let k=jp(w,E);f[k]=y()}}function Bp(w,E){if(f){let k=jp(w,E),D=f[k];if(typeof D=="number")return D}return null}function P1(w){s={},a=uf(w,i,void 0,s)}return v={get basename(){return l},get state(){return p},get routes(){return o},initialize:ye,subscribe:ai,enableScrollRestoration:R1,navigate:Gt,fetch:I1,revalidate:li,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:Op,deleteFetcher:Ku,dispose:Ne,getBlocker:x1,deleteBlocker:Up,_internalFetchControllers:le,_internalActiveDeferreds:N,_internalSetRoutes:P1},v}function NP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function cf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=mp(i||".",zu(a).map(c=>c.pathnameBase),hs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!vp(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:_n([n,u.pathname])),ti(u)}function ov(t,e,n,r){if(!r||!NP(r))return{path:n};if(r.formMethod&&!FP(r.formMethod))return{path:n,error:Ct(405,{method:r.formMethod})};let i=()=>({path:n,error:Ct(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=DE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Dt(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,y)=>{let[_,S]=y;return""+g+_+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Dt(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}X(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=df(r.formData),u=r.formData;else if(r.body instanceof FormData)l=df(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=cv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=cv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Dt(c.formMethod))return{path:n,submission:c};let d=Nn(n);return e&&d.search&&vp(d.search)&&l.append("index",""),d.search="?"+l,{path:ti(d),submission:c}}function PP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function av(t,e,n,r,i,s,o,a,l,u,c,d,f,g){let y=g?Object.values(g)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),S=t.createURL(i),m=g?Object.keys(g)[0]:void 0,v=PP(n,m).filter((C,R)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(AP(e.loaderData,e.matches[R],C)||o.some(W=>W===C.route.id))return!0;let b=e.matches[R],P=C;return lv(C,we({currentUrl:_,currentParams:b.params,nextUrl:S,nextParams:P.params},r,{actionResult:y,defaultShouldRevalidate:s||_.pathname+_.search===S.pathname+S.search||_.search!==S.search||OE(b,P)}))}),p=[];return l.forEach((C,R)=>{if(!n.some(ze=>ze.route.id===C.routeId))return;let b=Ii(c,C.path,d);if(!b){p.push({key:R,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(R),W=ff(b,C.path),U=!1;u.has(R)?U=!1:a.includes(R)?U=!0:P&&P.state!=="idle"&&P.data===void 0?U=s:U=lv(W,we({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),U&&p.push({key:R,routeId:C.routeId,path:C.path,matches:b,match:W,controller:new AbortController})}),[v,p]}function AP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function OE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function lv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function uv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];X(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ns(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!eP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,we({},e(i),{lazy:void 0}))}async function Ds(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=y=>{let _,S=new Promise((m,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),S])};try{let y=n.route[t];if(n.route.lazy)if(y){let _,S=await Promise.all([d(y).catch(m=>{_=m}),uv(n.route,s,i)]);if(_)throw _;u=S[0]}else if(await uv(n.route,s,i),y=n.route[t],y)u=await d(y);else if(t==="action"){let _=new URL(e.url),S=_.pathname+_.search;throw Ct(405,{method:e.method,pathname:S,routeId:n.route.id})}else return{type:xe.data,data:void 0};else if(y)u=await d(y);else{let _=new URL(e.url),S=_.pathname+_.search;throw Ct(404,{pathname:S})}X(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=xe.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(LP(u)){let y=u.status;if(IP.has(y)){let m=u.headers.get("Location");if(X(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!AE.test(m))m=cf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let h=new URL(e.url),v=m.startsWith("//")?new URL(h.protocol+m):new URL(m),p=hs(v.pathname,o)!=null;v.origin===h.origin&&p&&(m=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:xe.redirect,status:y,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===xe.error?xe.error:xe.data,response:u};let _,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?_=await u.json():_=await u.text(),l===xe.error?{type:l,error:new gp(y,u.statusText,_),headers:u.headers}:{type:xe.data,data:_,statusCode:u.status,headers:u.headers}}if(l===xe.error)return{type:l,error:u};if(MP(u)){var f,g;return{type:xe.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((g=u.init)==null?void 0:g.headers)&&new Headers(u.init.headers)}}return{type:xe.data,data:u}}function Ms(t,e,n,r){let i=t.createURL(DE(e)).toString(),s={signal:n};if(r&&Dt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=df(r.formData):s.body=r.formData}return new Request(i,s)}function df(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function cv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function OP(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(X(!ji(c),"Cannot handle redirect results in processLoaderData"),no(c)){let g=Ti(t,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=y),s[f]=void 0,l||(l=!0,a=NE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Lr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function dv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=OP(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:g}=s[c];X(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(g&&g.signal.aborted))if(no(y)){let _=Ti(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=we({},u,{[_.route.id]:y.error})),t.fetchers.delete(d)}else if(ji(y))X(!1,"Unhandled fetcher revalidation redirect");else if(Lr(y))X(!1,"Unhandled fetcher deferred data");else{let _=di(y.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function fv(t,e,n,r){let i=we({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ti(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function hv(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ct(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new gp(t||500,o,new Error(a),!0)}function pv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ji(n))return{result:n,idx:e}}}function DE(t){let e=typeof t=="string"?Nn(t):t;return ti(we({},e,{hash:""}))}function DP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Lr(t){return t.type===xe.deferred}function no(t){return t.type===xe.error}function ji(t){return(t&&t.type)===xe.redirect}function MP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function LP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function FP(t){return kP.has(t.toLowerCase())}function Dt(t){return SP.has(t.toLowerCase())}async function mv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!OE(u,l)&&(s&&s[l.route.id])!==void 0;if(Lr(a)&&(i||c)){let d=r[o];X(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await ME(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function ME(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:xe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:xe.error,error:i}}return{type:xe.data,data:t.deferredData.data}}}function vp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ff(t,e){let n=typeof e=="string"?Nn(e).search:e.search;if(t[t.length-1].route.index&&vp(n||""))return t[t.length-1];let r=zu(t);return r[r.length-1]}function gv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function $c(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ls(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function zP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function di(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}const ju=I.createContext(null),LE=I.createContext(null),ps=I.createContext(null),Bu=I.createContext(null),Pn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),FE=I.createContext(null);function jP(t,e){let{relative:n}=e===void 0?{}:e;ia()||X(!1);let{basename:r,navigator:i}=I.useContext(ps),{hash:s,pathname:o,search:a}=zE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:_n([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ia(){return I.useContext(Bu)!=null}function Wu(){return ia()||X(!1),I.useContext(Bu).location}function UE(t){I.useContext(ps).static||I.useLayoutEffect(t)}function ms(){let{isDataRoute:t}=I.useContext(Pn);return t?tA():BP()}function BP(){ia()||X(!1);let t=I.useContext(ju),{basename:e,navigator:n}=I.useContext(ps),{matches:r}=I.useContext(Pn),{pathname:i}=Wu(),s=JSON.stringify(zu(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return UE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=mp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:_n([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const WP=I.createContext(null);function $P(t){let e=I.useContext(Pn).outlet;return e&&I.createElement(WP.Provider,{value:t},e)}function VP(){let{matches:t}=I.useContext(Pn),e=t[t.length-1];return e?e.params:{}}function zE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Pn),{pathname:i}=Wu(),s=JSON.stringify(zu(r).map(o=>o.pathnameBase));return I.useMemo(()=>mp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function HP(t,e,n){ia()||X(!1);let{navigator:r}=I.useContext(ps),{matches:i}=I.useContext(Pn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Wu(),u;if(e){var c;let _=typeof e=="string"?Nn(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||X(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=Ii(t,{pathname:f}),y=qP(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:_n([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:_n([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?I.createElement(Bu.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pe.Pop}},y):y}function GP(){let t=eA(),e=NE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const YP=I.createElement(GP,null);class KP extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Pn.Provider,{value:this.props.routeContext},I.createElement(FE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QP(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(ju);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Pn.Provider,{value:e},r)}function qP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||X(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||YP);let f=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=d:l.route.Component?y=I.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,I.createElement(QP,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(KP,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var jE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(jE||{}),Jl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Jl||{});function XP(t){let e=I.useContext(ju);return e||X(!1),e}function JP(t){let e=I.useContext(LE);return e||X(!1),e}function ZP(t){let e=I.useContext(Pn);return e||X(!1),e}function BE(t){let e=ZP(),n=e.matches[e.matches.length-1];return n.route.id||X(!1),n.route.id}function eA(){var t;let e=I.useContext(FE),n=JP(Jl.UseRouteError),r=BE(Jl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function tA(){let{router:t}=XP(jE.UseNavigateStable),e=BE(Jl.UseNavigateStable),n=I.useRef(!1);return UE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xl({fromRouteId:e},s)))},[t,e])}const nA="startTransition",vv=Q1[nA];function rA(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=I.useState(n.state),{v7_startTransition:o}=r||{},a=I.useCallback(d=>{o&&vv?vv(()=>s(d)):s(d)},[s,o]);I.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=I.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,g)=>n.navigate(d,{state:f,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(d,f,g)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[n]),u=n.basename||"/",c=I.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return I.createElement(I.Fragment,null,I.createElement(ju.Provider,{value:c},I.createElement(LE.Provider,{value:i},I.createElement(oA,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?I.createElement(iA,{routes:n.routes,state:i}):e))),null)}function iA(t){let{routes:e,state:n}=t;return HP(e,void 0,n)}function sA(t){return $P(t.context)}function oA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pe.Pop,navigator:s,static:o=!1}=t;ia()&&X(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Nn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=I.useMemo(()=>{let _=hs(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return y==null?null:I.createElement(ps.Provider,{value:l},I.createElement(Bu.Provider,{children:n,value:y}))}new Promise(()=>{});function aA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:I.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:I.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mo.apply(this,arguments)}function lA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cA(t,e){return t.button===0&&(!e||e==="_self")&&!uA(t)}const dA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function fA(t,e){return RP({basename:e==null?void 0:e.basename,future:Mo({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:XN({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||hA(),routes:t,mapRouteProperties:aA}).initialize()}function hA(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Mo({},e,{errors:pA(e.errors)})),e}function pA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new gp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const mA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vA=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=lA(e,dA),{basename:f}=I.useContext(ps),g,y=!1;if(typeof u=="string"&&gA.test(u)&&(g=u,mA))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),p=hs(v.pathname,f);v.origin===h.origin&&p!=null?u=p+v.search+v.hash:y=!0}catch{}let _=jP(u,{relative:i}),S=yA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(h){r&&r(h),h.defaultPrevented||S(h)}return I.createElement("a",Mo({},d,{href:g||_,onClick:y||s?r:m,ref:n,target:l}))});var yv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(yv||(yv={}));var _v;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_v||(_v={}));function yA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ms(),l=Wu(),u=zE(t,{relative:o});return I.useCallback(c=>{if(cA(c,n)){c.preventDefault();let d=r!==void 0?r:ti(l)===ti(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function yp({onClick:t,children:e,type:n}){const[r,i]=I.useState(null);return I.useEffect(()=>{n==="CTA"&&i("bg-slate-700 text-white")},[]),A.jsx("input",{type:"button",onClick:t,value:e,className:`h-12 p-2 border-2 border-slate-700 rounded-2xl mt-4 mb-4 cursor-pointer w-full ${r} `})}function _A({isMenuVisible:t}){const[e,n]=I.useState("animate-menuIn"),[r,i]=I.useState("hidden"),s=ms();function o(){LR(mr).then(()=>{s("/login")}).catch(a=>{console.log(a)})}return I.useEffect(()=>{t&&(n("animate-menuIn"),i("visible")),t||n("animate-menuOut")},[t]),A.jsxs("aside",{className:`${e} ${r} absolute right-0 top-0 w-96 h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `,children:[A.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full",children:[A.jsx("br",{}),A.jsx("br",{}),A.jsx("br",{})]}),A.jsxs("div",{className:"text-slate-700 w-full p-6 flex flex-col items-end bg-white",children:[A.jsx("p",{children:"Account"}),A.jsx("p",{children:"text2"})]}),A.jsx("div",{children:A.jsx("div",{className:"pl-6 pr-6 pb-4 w-full bg-white",children:A.jsx(yp,{onClick:o,type:"CTA",children:"Log out"})})}),A.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full",children:[A.jsx("br",{}),A.jsx("br",{}),A.jsx("br",{})]})]})}var wA={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},EA={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function wv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wv(Object(n),!0).forEach(function(r){Ue(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zl(t){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zl(t)}function SA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ev(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function CA(t,e,n){return e&&Ev(t.prototype,e),n&&Ev(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _p(t,e){return IA(t)||bA(t,e)||WE(t,e)||RA()}function sa(t){return kA(t)||TA(t)||WE(t)||xA()}function kA(t){if(Array.isArray(t))return hf(t)}function IA(t){if(Array.isArray(t))return t}function TA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bA(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function WE(t,e){if(t){if(typeof t=="string")return hf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hf(t,e)}}function hf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sv=function(){},wp={},$E={},VE=null,HE={mark:Sv,measure:Sv};try{typeof window<"u"&&(wp=window),typeof document<"u"&&($E=document),typeof MutationObserver<"u"&&(VE=MutationObserver),typeof performance<"u"&&(HE=performance)}catch{}var NA=wp.navigator||{},Cv=NA.userAgent,kv=Cv===void 0?"":Cv,gr=wp,ge=$E,Iv=VE,Pa=HE;gr.document;var An=!!ge.documentElement&&!!ge.head&&typeof ge.addEventListener=="function"&&typeof ge.createElement=="function",GE=~kv.indexOf("MSIE")||~kv.indexOf("Trident/"),Aa,Oa,Da,Ma,La,Tn="___FONT_AWESOME___",pf=16,YE="fa",KE="svg-inline--fa",ni="data-fa-i2svg",mf="data-fa-pseudo-element",PA="data-fa-pseudo-element-pending",Ep="data-prefix",Sp="data-icon",Tv="fontawesome-i2svg",AA="async",OA=["HTML","HEAD","STYLE","SCRIPT"],QE=function(){try{return!0}catch{return!1}}(),pe="classic",Te="sharp",Cp=[pe,Te];function oa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[pe]}})}var Lo=oa((Aa={},Ue(Aa,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ue(Aa,Te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Aa)),Fo=oa((Oa={},Ue(Oa,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ue(Oa,Te,{solid:"fass",regular:"fasr",light:"fasl"}),Oa)),Uo=oa((Da={},Ue(Da,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ue(Da,Te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Da)),DA=oa((Ma={},Ue(Ma,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ue(Ma,Te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ma)),MA=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,qE="fa-layers-text",LA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,FA=oa((La={},Ue(La,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ue(La,Te,{900:"fass",400:"fasr",300:"fasl"}),La)),XE=[1,2,3,4,5,6,7,8,9,10],UA=XE.concat([11,12,13,14,15,16,17,18,19,20]),zA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zo=new Set;Object.keys(Fo[pe]).map(zo.add.bind(zo));Object.keys(Fo[Te]).map(zo.add.bind(zo));var jA=[].concat(Cp,sa(zo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fr.GROUP,Fr.SWAP_OPACITY,Fr.PRIMARY,Fr.SECONDARY]).concat(XE.map(function(t){return"".concat(t,"x")})).concat(UA.map(function(t){return"w-".concat(t)})),ro=gr.FontAwesomeConfig||{};function BA(t){var e=ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function WA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ge&&typeof ge.querySelector=="function"){var $A=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$A.forEach(function(t){var e=_p(t,2),n=e[0],r=e[1],i=WA(BA(n));i!=null&&(ro[r]=i)})}var JE={styleDefault:"solid",familyDefault:"classic",cssPrefix:YE,replacementClass:KE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ro.familyPrefix&&(ro.cssPrefix=ro.familyPrefix);var rs=O(O({},JE),ro);rs.autoReplaceSvg||(rs.observeMutations=!1);var L={};Object.keys(JE).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){rs[t]=n,io.forEach(function(r){return r(L)})},get:function(){return rs[t]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){rs.cssPrefix=e,io.forEach(function(n){return n(L)})},get:function(){return rs.cssPrefix}});gr.FontAwesomeConfig=L;var io=[];function VA(t){return io.push(t),function(){io.splice(io.indexOf(t),1)}}var zn=pf,Xt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HA(t){if(!(!t||!An)){var e=ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ge.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ge.head.insertBefore(e,r),t}}var GA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jo(){for(var t=12,e="";t-- >0;)e+=GA[Math.random()*62|0];return e}function gs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function kp(t){return t.classList?gs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ZE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function YA(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ZE(t[n]),'" ')},"").trim()}function $u(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ip(t){return t.size!==Xt.size||t.x!==Xt.x||t.y!==Xt.y||t.rotate!==Xt.rotate||t.flipX||t.flipY}function KA(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function QA(t){var e=t.transform,n=t.width,r=n===void 0?pf:n,i=t.height,s=i===void 0?pf:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&GE?l+="translate(".concat(e.x/zn-r/2,"em, ").concat(e.y/zn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/zn,"em), calc(-50% + ").concat(e.y/zn,"em)) "):l+="translate(".concat(e.x/zn,"em, ").concat(e.y/zn,"em) "),l+="scale(".concat(e.size/zn*(e.flipX?-1:1),", ").concat(e.size/zn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var qA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function e1(){var t=YE,e=KE,n=L.cssPrefix,r=L.replacementClass,i=qA;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var bv=!1;function Vc(){L.autoAddCss&&!bv&&(HA(e1()),bv=!0)}var XA={mixout:function(){return{dom:{css:e1,insertCss:Vc}}},hooks:function(){return{beforeDOMElementCreation:function(){Vc()},beforeI2svg:function(){Vc()}}}},bn=gr||{};bn[Tn]||(bn[Tn]={});bn[Tn].styles||(bn[Tn].styles={});bn[Tn].hooks||(bn[Tn].hooks={});bn[Tn].shims||(bn[Tn].shims=[]);var zt=bn[Tn],t1=[],JA=function t(){ge.removeEventListener("DOMContentLoaded",t),eu=1,t1.map(function(e){return e()})},eu=!1;An&&(eu=(ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ge.readyState),eu||ge.addEventListener("DOMContentLoaded",JA));function ZA(t){An&&(eu?setTimeout(t,0):t1.push(t))}function aa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?ZE(t):"<".concat(e," ").concat(YA(r),">").concat(s.map(aa).join(""),"</").concat(e,">")}function xv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var eO=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Hc=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?eO(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function tO(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function gf(t){var e=tO(t);return e.length===1?e[0].toString(16):null}function nO(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Rv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function vf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Rv(e);typeof zt.hooks.addPack=="function"&&!i?zt.hooks.addPack(t,Rv(e)):zt.styles[t]=O(O({},zt.styles[t]||{}),s),t==="fas"&&vf("fa",e)}var Fa,Ua,za,bi=zt.styles,rO=zt.shims,iO=(Fa={},Ue(Fa,pe,Object.values(Uo[pe])),Ue(Fa,Te,Object.values(Uo[Te])),Fa),Tp=null,n1={},r1={},i1={},s1={},o1={},sO=(Ua={},Ue(Ua,pe,Object.keys(Lo[pe])),Ue(Ua,Te,Object.keys(Lo[Te])),Ua);function oO(t){return~jA.indexOf(t)}function aO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!oO(i)?i:null}var a1=function(){var e=function(s){return Hc(bi,function(o,a,l){return o[l]=Hc(a,s,{}),o},{})};n1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),r1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),o1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in bi||L.autoFetchSvg,r=Hc(rO,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});i1=r.names,s1=r.unicodes,Tp=Vu(L.styleDefault,{family:L.familyDefault})};VA(function(t){Tp=Vu(t.styleDefault,{family:L.familyDefault})});a1();function bp(t,e){return(n1[t]||{})[e]}function lO(t,e){return(r1[t]||{})[e]}function Ur(t,e){return(o1[t]||{})[e]}function l1(t){return i1[t]||{prefix:null,iconName:null}}function uO(t){var e=s1[t],n=bp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vr(){return Tp}var xp=function(){return{prefix:null,iconName:null,rest:[]}};function Vu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?pe:n,i=Lo[r][t],s=Fo[r][t]||Fo[r][i],o=t in zt.styles?t:null;return s||o||null}var Nv=(za={},Ue(za,pe,Object.keys(Uo[pe])),Ue(za,Te,Object.keys(Uo[Te])),za);function Hu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ue(e,pe,"".concat(L.cssPrefix,"-").concat(pe)),Ue(e,Te,"".concat(L.cssPrefix,"-").concat(Te)),e),o=null,a=pe;(t.includes(s[pe])||t.some(function(u){return Nv[pe].includes(u)}))&&(a=pe),(t.includes(s[Te])||t.some(function(u){return Nv[Te].includes(u)}))&&(a=Te);var l=t.reduce(function(u,c){var d=aO(L.cssPrefix,c);if(bi[c]?(c=iO[a].includes(c)?DA[a][c]:c,o=c,u.prefix=c):sO[a].indexOf(c)>-1?(o=c,u.prefix=Vu(c,{family:a})):d?u.iconName=d:c!==L.replacementClass&&c!==s[pe]&&c!==s[Te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?l1(u.iconName):{},g=Ur(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||g||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!bi.far&&bi.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},xp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Te&&(bi.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ur(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vr()||"fas"),l}var cO=function(){function t(){SA(this,t),this.definitions={}}return CA(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),vf(a,o[a]);var l=Uo[pe][a];l&&vf(l,o[a]),a1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Pv=[],xi={},Bi={},dO=Object.keys(Bi);function fO(t,e){var n=e.mixoutsTo;return Pv=t,xi={},Object.keys(Bi).forEach(function(r){dO.indexOf(r)===-1&&delete Bi[r]}),Pv.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){xi[o]||(xi[o]=[]),xi[o].push(s[o])})}r.provides&&r.provides(Bi)}),n}function yf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=xi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ri(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=xi[t]||[];i.forEach(function(s){s.apply(null,n)})}function xn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Bi[t]?Bi[t].apply(null,e):void 0}function _f(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||vr();if(e)return e=Ur(n,e)||e,xv(u1.definitions,n,e)||xv(zt.styles,n,e)}var u1=new cO,hO=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,ri("noAuto")},pO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return An?(ri("beforeI2svg",e),xn("pseudoElements2svg",e),xn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,ZA(function(){gO({autoReplaceSvgRoot:n}),ri("watch",e)})}},mO={icon:function(e){if(e===null)return null;if(Zl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ur(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Vu(e[0]);return{prefix:r,iconName:Ur(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(MA))){var i=Hu(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||vr(),iconName:Ur(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=vr();return{prefix:s,iconName:Ur(s,e)||e}}}},St={noAuto:hO,config:L,dom:pO,parse:mO,library:u1,findIconDefinition:_f,toHtml:aa},gO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ge:n;(Object.keys(zt.styles).length>0||L.autoFetchSvg)&&An&&L.autoReplaceSvg&&St.dom.i2svg({node:r})};function Gu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return aa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(An){var r=ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function vO(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ip(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=$u(O(O({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function yO(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function Rp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,y=r.found?r:n,_=y.width,S=y.height,m=i==="fak",h=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),v={children:[],attributes:O(O({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(S)})},p=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/S*16*.0625,"em")}:{};g&&(v.attributes[ni]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||jo())},children:[l]}),delete v.attributes.title);var C=O(O({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:O(O({},p),d.styles)}),R=r.found&&n.found?xn("generateAbstractMask",C)||{children:[],attributes:{}}:xn("generateAbstractIcon",C)||{children:[],attributes:{}},b=R.children,P=R.attributes;return C.children=b,C.attributes=P,a?yO(C):vO(C)}function Av(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ni]="");var c=O({},o.styles);Ip(i)&&(c.transform=QA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=$u(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function _O(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=$u(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gc=zt.styles;function wf(t){var e=t[0],n=t[1],r=t.slice(4),i=_p(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Fr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Fr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var wO={found:!1,width:512,height:512};function EO(t,e){!QE&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ef(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=vr()),new Promise(function(r,i){if(xn("missingIconAbstract"),n==="fa"){var s=l1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Gc[e]&&Gc[e][t]){var o=Gc[e][t];return r(wf(o))}EO(t,e),r(O(O({},wO),{},{icon:L.showMissingIcons&&t?xn("missingIconAbstract")||{}:{}}))})}var Ov=function(){},Sf=L.measurePerformance&&Pa&&Pa.mark&&Pa.measure?Pa:{mark:Ov,measure:Ov},Bs='FA "6.4.2"',SO=function(e){return Sf.mark("".concat(Bs," ").concat(e," begins")),function(){return c1(e)}},c1=function(e){Sf.mark("".concat(Bs," ").concat(e," ends")),Sf.measure("".concat(Bs," ").concat(e),"".concat(Bs," ").concat(e," begins"),"".concat(Bs," ").concat(e," ends"))},Np={begin:SO,end:c1},nl=function(){};function Dv(t){var e=t.getAttribute?t.getAttribute(ni):null;return typeof e=="string"}function CO(t){var e=t.getAttribute?t.getAttribute(Ep):null,n=t.getAttribute?t.getAttribute(Sp):null;return e&&n}function kO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function IO(){if(L.autoReplaceSvg===!0)return rl.replace;var t=rl[L.autoReplaceSvg];return t||rl.replace}function TO(t){return ge.createElementNS("http://www.w3.org/2000/svg",t)}function bO(t){return ge.createElement(t)}function d1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?TO:bO:n;if(typeof t=="string")return ge.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(d1(o,{ceFn:r}))}),i}function xO(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var rl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(d1(i),n)}),n.getAttribute(ni)===null&&L.keepOriginalSource){var r=ge.createComment(xO(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~kp(n).indexOf(L.replacementClass))return rl.replace(e);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return aa(a)}).join(`
`);n.setAttribute(ni,""),n.innerHTML=o}};function Mv(t){t()}function f1(t,e){var n=typeof e=="function"?e:nl;if(t.length===0)n();else{var r=Mv;L.mutateApproach===AA&&(r=gr.requestAnimationFrame||Mv),r(function(){var i=IO(),s=Np.begin("mutate");t.map(i),s(),n()})}}var Pp=!1;function h1(){Pp=!0}function Cf(){Pp=!1}var tu=null;function Lv(t){if(Iv&&L.observeMutations){var e=t.treeCallback,n=e===void 0?nl:e,r=t.nodeCallback,i=r===void 0?nl:r,s=t.pseudoElementsCallback,o=s===void 0?nl:s,a=t.observeMutationsRoot,l=a===void 0?ge:a;tu=new Iv(function(u){if(!Pp){var c=vr();gs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Dv(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Dv(d.target)&&~zA.indexOf(d.attributeName))if(d.attributeName==="class"&&CO(d.target)){var f=Hu(kp(d.target)),g=f.prefix,y=f.iconName;d.target.setAttribute(Ep,g||c),y&&d.target.setAttribute(Sp,y)}else kO(d.target)&&i(d.target)})}}),An&&tu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function RO(){tu&&tu.disconnect()}function NO(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function PO(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Hu(kp(t));return i.prefix||(i.prefix=vr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=lO(i.prefix,t.innerText)||bp(i.prefix,gf(t.innerText))),!i.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function AO(t){var e=gs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||jo()):(e["aria-hidden"]="true",e.focusable="false")),e}function OO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=PO(t),r=n.iconName,i=n.prefix,s=n.rest,o=AO(t),a=yf("parseNodeAttributes",{},t),l=e.styleParser?NO(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Xt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var DO=zt.styles;function p1(t){var e=L.autoReplaceSvg==="nest"?Fv(t,{styleParser:!1}):Fv(t);return~e.extra.classes.indexOf(qE)?xn("generateLayersText",t,e):xn("generateSvgReplacementMutation",t,e)}var yr=new Set;Cp.map(function(t){yr.add("fa-".concat(t))});Object.keys(Lo[pe]).map(yr.add.bind(yr));Object.keys(Lo[Te]).map(yr.add.bind(yr));yr=sa(yr);function Uv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!An)return Promise.resolve();var n=ge.documentElement.classList,r=function(d){return n.add("".concat(Tv,"-").concat(d))},i=function(d){return n.remove("".concat(Tv,"-").concat(d))},s=L.autoFetchSvg?yr:Cp.map(function(c){return"fa-".concat(c)}).concat(Object.keys(DO));s.includes("fa")||s.push("fa");var o=[".".concat(qE,":not([").concat(ni,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ni,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=gs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Np.begin("onTree"),u=a.reduce(function(c,d){try{var f=p1(d);f&&c.push(f)}catch(g){QE||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){f1(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function MO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;p1(t).then(function(n){n&&f1([n],e)})}function LO(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:_f(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:_f(i||{})),t(r,O(O({},n),{},{mask:i}))}}var FO=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Xt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,_=n.classes,S=_===void 0?[]:_,m=n.attributes,h=m===void 0?{}:m,v=n.styles,p=v===void 0?{}:v;if(e){var C=e.prefix,R=e.iconName,b=e.icon;return Gu(O({type:"icon"},e),function(){return ri("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(f?h["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||jo()):(h["aria-hidden"]="true",h.focusable="false")),Rp({icons:{main:wf(b),mask:l?wf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:R,transform:O(O({},Xt),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:h,styles:p,classes:S}})})}},UO={mixout:function(){return{icon:LO(FO)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Uv,n.nodeCallback=MO,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ge:r,s=n.callback,o=s===void 0?function(){}:s;return Uv(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,y){Promise.all([Ef(i,a),c.iconName?Ef(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var S=_p(_,2),m=S[0],h=S[1];g([n,Rp({icons:{main:m,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=$u(a);l.length>0&&(i.style=l);var u;return Ip(o)&&(u=xn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},zO={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Gu({type:"layer"},function(){ri("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(sa(s)).join(" ")},children:o}]})}}}},jO={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Gu({type:"counter",content:n},function(){return ri("beforeDOMElementCreation",{content:n,params:r}),_O({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(sa(a))}})})}}}},BO={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Xt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return Gu({type:"text",content:n},function(){return ri("beforeDOMElementCreation",{content:n,params:r}),Av({content:n,transform:O(O({},Xt),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(sa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(GE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Av({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},WO=new RegExp('"',"ug"),zv=[1105920,1112319];function $O(t){var e=t.replace(WO,""),n=nO(e,0),r=n>=zv[0]&&n<=zv[1],i=e.length===2?e[0]===e[1]:!1;return{value:gf(i?e[0]:e),isSecondary:r||i}}function jv(t,e){var n="".concat(PA).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=gs(t.children),o=s.filter(function(b){return b.getAttribute(mf)===e})[0],a=gr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(LA),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Te:pe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Fo[f][l[2].toLowerCase()]:FA[f][u],y=$O(d),_=y.value,S=y.isSecondary,m=l[0].startsWith("FontAwesome"),h=bp(g,_),v=h;if(m){var p=uO(_);p.iconName&&p.prefix&&(h=p.iconName,g=p.prefix)}if(h&&!S&&(!o||o.getAttribute(Ep)!==g||o.getAttribute(Sp)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var C=OO(),R=C.extra;R.attributes[mf]=e,Ef(h,g).then(function(b){var P=Rp(O(O({},C),{},{icons:{main:b,mask:xp()},prefix:g,iconName:v,extra:R,watchable:!0})),W=ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=P.map(function(U){return aa(U)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function VO(t){return Promise.all([jv(t,"::before"),jv(t,"::after")])}function HO(t){return t.parentNode!==document.head&&!~OA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(mf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Bv(t){if(An)return new Promise(function(e,n){var r=gs(t.querySelectorAll("*")).filter(HO).map(VO),i=Np.begin("searchPseudoElements");h1(),Promise.all(r).then(function(){i(),Cf(),e()}).catch(function(){i(),Cf(),n()})})}var GO={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ge:r;L.searchPseudoElements&&Bv(i)}}},Wv=!1,YO={mixout:function(){return{dom:{unwatch:function(){h1(),Wv=!0}}}},hooks:function(){return{bootstrap:function(){Lv(yf("mutationObserverCallbacks",{}))},noAuto:function(){RO()},watch:function(n){var r=n.observeMutationsRoot;Wv?Cf():Lv(yf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$v=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},KO={mixout:function(){return{parse:{transform:function(n){return $v(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=$v(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:O({},g.outer),children:[{tag:"g",attributes:O({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),g.path)}]}]}}}},Yc={x:0,y:0,width:"100%",height:"100%"};function Vv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function QO(t){return t.tag==="g"?t.children:[t]}var qO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Hu(i.split(" ").map(function(o){return o.trim()})):xp();return s.prefix||(s.prefix=vr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=KA({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:O(O({},Yc),{},{fill:"white"})},_=c.children?{children:c.children.map(Vv)}:{},S={tag:"g",attributes:O({},g.inner),children:[Vv(O({tag:c.tag,attributes:O(O({},c.attributes),g.path)},_))]},m={tag:"g",attributes:O({},g.outer),children:[S]},h="mask-".concat(a||jo()),v="clip-".concat(a||jo()),p={tag:"mask",attributes:O(O({},Yc),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:QO(f)},p]};return r.push(C,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Yc)}),{children:r,attributes:i}}}},XO={provides:function(e){var n=!1;gr.matchMedia&&(n=gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},JO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},ZO=[XA,UO,zO,jO,BO,GO,YO,KO,qO,XO,JO];fO(ZO,{mixoutsTo:St});St.noAuto;St.config;St.library;St.dom;var kf=St.parse;St.findIconDefinition;St.toHtml;var eD=St.icon;St.layer;St.text;St.counter;var m1={exports:{}},tD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nD=tD,rD=nD;function g1(){}function v1(){}v1.resetWarningCache=g1;var iD=function(){function t(r,i,s,o,a,l){if(l!==rD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:v1,resetWarningCache:g1};return n.PropTypes=n,n};m1.exports=iD();var sD=m1.exports;const q=Kv(sD);function Hv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hv(Object(n),!0).forEach(function(r){Ri(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nu(t){"@babel/helpers - typeof";return nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nu(t)}function Ri(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aD(t,e){if(t==null)return{};var n=oD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function If(t){return lD(t)||uD(t)||cD(t)||dD()}function lD(t){if(Array.isArray(t))return Tf(t)}function uD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cD(t,e){if(t){if(typeof t=="string")return Tf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tf(t,e)}}function Tf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,y=t.border,_=t.listItem,S=t.flip,m=t.size,h=t.rotation,v=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":y,"fa-li":_,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Ri(e,"fa-".concat(m),typeof m<"u"&&m!==null),Ri(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Ri(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Ri(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(C){return p[C]?C:null}).filter(function(C){return C})}function hD(t){return t=t-0,t===t}function y1(t){return hD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var pD=["style"];function mD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function gD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=y1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[mD(i)]=s:e[i]=s,e},{})}function _1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return _1(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=gD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[y1(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=aD(n,pD);return i.attrs.style=Qn(Qn({},i.attrs.style),o),t.apply(void 0,[e.tag,Qn(Qn({},i.attrs),a)].concat(If(r)))}var w1=!1;try{w1=!0}catch{}function vD(){if(!w1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Gv(t){if(t&&nu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kf.icon)return kf.icon(t);if(t===null)return null;if(t&&nu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ri({},t,e):{}}var vs=su.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Gv(n),c=Kc("classes",[].concat(If(fD(t)),If(s.split(" ")))),d=Kc("transform",typeof t.transform=="string"?kf.transform(t.transform):t.transform),f=Kc("mask",Gv(r)),g=eD(u,Qn(Qn(Qn(Qn({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return vD("Could not find icon",u),null;var y=g.abstract,_={ref:e};return Object.keys(t).forEach(function(S){vs.defaultProps.hasOwnProperty(S)||(_[S]=t[S])}),yD(y[0],_)});vs.displayName="FontAwesomeIcon";vs.propTypes={beat:q.bool,border:q.bool,beatFade:q.bool,bounce:q.bool,className:q.string,fade:q.bool,flash:q.bool,mask:q.oneOfType([q.object,q.array,q.string]),maskId:q.string,fixedWidth:q.bool,inverse:q.bool,flip:q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:q.oneOfType([q.object,q.array,q.string]),listItem:q.bool,pull:q.oneOf(["right","left"]),pulse:q.bool,rotation:q.oneOf([0,90,180,270]),shake:q.bool,size:q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:q.bool,spinPulse:q.bool,spinReverse:q.bool,symbol:q.oneOfType([q.bool,q.string]),title:q.string,titleId:q.string,transform:q.oneOfType([q.string,q.object]),swapOpacity:q.bool};vs.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var yD=_1.bind(null,su.createElement);function _D({handleMenu:t}){const[e,n]=I.useState(!1);function r(){t(),n(!0),setTimeout(()=>{n(!1)},1e3)}return A.jsx("div",{className:`${e?"animate-pulse":null} z-20 text-2xl grid place-items-center w-6 cursor-pointer`,onClick:r,children:A.jsx(vs,{icon:wA})})}function wD(){const[t,e]=I.useState(!1);function n(){e(!t)}return A.jsxs("nav",{className:"flex justify-between bg-slate-700 text-white relative p-6 rounded-b-2xl",children:[A.jsx(vA,{to:"/",children:"Settlements"}),A.jsx(_D,{handleMenu:n}),A.jsx(_A,{isMenuVisible:t})]})}function ED(){return A.jsx("div",{className:"p-6 rounded-t-2xl flex justify-center bg-slate-700 text-white h-16",children:"© Maciej Tomaszewski 2023"})}const E1=I.createContext(!1),S1=I.createContext(!1);function SD(){const t=Ux(ip(bE,"e"),Fx("siemanoid"));Ox(t,e=>{console.log(e),console.log(e.val())})}SD();async function ru(t,e){return await Hw(es(TE,"events/")).then(i=>{if(i.exists()){console.log("FIREBASE - Events exists");const s=i.val(),a=Object.values(Object.entries(s)).map(l=>({...l[1],id:l[0]}));if(e==="myEvents")return n(a);if(e==="participateEvents")return r(a)}return i.exists()||console.log("FIREBASE - Events not found in DB"),!1}).catch(i=>(console.error(i),!1));function n(i){return i.filter(o=>o.owner==t?o:!1)}function r(i){return i.filter(o=>o.users.includes(t)?o:!1)}}function CD(){const[t,e]=I.useState(!1),[n,r]=I.useState(!1);async function i(s){const o=await ru(s,"myEvents");o&&e(o);const a=await ru(s,"participateEvents");a&&r(a)}return I.useEffect(()=>{mr.currentUser!=null&&i(mr.currentUser.uid)},[]),A.jsx(E1.Provider,{value:t,children:A.jsx(S1.Provider,{value:n,children:A.jsxs("main",{className:"text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate",children:[A.jsx(wD,{}),A.jsx("main",{className:"p-6 w-full",children:A.jsx(sA,{})}),A.jsx(ED,{})]})})})}async function kD(t){return await Hw(es(TE,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function ID({uid:t,displayName:e,email:n,photoURL:r}){await Px(ip(bE,`users/${t}`),{displayName:e,email:n,photoUrl:r}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}function Ap({size:t}){const[e,n]=I.useState("text-2xl");return I.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),A.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:A.jsx(vs,{icon:EA,spin:!0})})}function TD(){const t=ms(),[e,n]=I.useState(!1);return I.useEffect(function(){hE(mr,async r=>{if(r){console.log("AUTH: Logged");const i=await kD(r);i&&n(i),i||await ID(r)}else t("/login")})},[]),e?A.jsx(CD,{}):A.jsx("div",{className:"h-screen",children:A.jsx(Ap,{size:"big"})})}function bD(){const t=ms();I.useEffect(()=>{hE(mr,n=>{t(n?"/":"/login")})},[]);function e(){const n=new qt;rN(mr,n).then(r=>{const i=qt.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return A.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:A.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",A.jsx("br",{}),A.jsx(yp,{onClick:e,type:"CTA",children:"Sign In With Google"})]})})}function xD({event:t}){const e=ms(),n=()=>{e(`/event/${t.id}`)};return A.jsxs("div",{onClick:n,className:"border-2 border-slate-700 p-4 rounded-2xl mt-2 mb-2 cursor-pointer",children:[A.jsx("p",{className:"text-sm text-slate-400",children:t.date}),A.jsxs("p",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function Yv({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(e===!1)return A.jsx(Ap,{size:"small"});if(e)return e.map(o=>A.jsx(xD,{event:o},o.id))},i=ms();function s(){i("/events/create")}return A.jsxs("div",{className:"w-full",children:[A.jsx("p",{children:t}),n?A.jsx(yp,{onClick:s,type:"CTA",children:"Add Event"}):null,r()]})}function RD(){const t=I.useContext(E1),e=I.useContext(S1);return I.useEffect(()=>{},[]),A.jsxs(A.Fragment,{children:[A.jsx(Yv,{buttonAddEvent:!0,title:"Your events",events:t}),A.jsx("br",{}),A.jsx(Yv,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}function ND(){return A.jsx("div",{children:"EventCreate"})}function PD(){const t=VP(),[e,n]=I.useState(!1);async function r(s){const o=await ru(s,"myEvents"),a=await ru(s,"participateEvents"),l=i(o,t.id),u=i(a,t.id);l!==!1&&n(l),u!==!1&&n(u)}function i(s,o){if(s!==!1&&o!==void 0){const a=s.filter(l=>l.id===o?l:null)[0];return a===void 0?!1:a}return!1}return I.useEffect(()=>{mr.currentUser!=null&&r(mr.currentUser.uid)},[]),e===!1?A.jsx(Ap,{size:"big"}):e?A.jsxs("div",{className:"border-2 border-slate-700 p-6 rounded-2xl",children:[A.jsxs("p",{children:["Event ID ",e.id]}),A.jsxs("p",{children:["Event Name ",e.name]}),A.jsxs("p",{children:["Owner ",e.owner]}),A.jsxs("div",{children:["Users",A.jsx("br",{}),e.users.map(s=>s)]})]}):A.jsx("div",{children:"Error occured"})}const AD=fA([{path:"/",element:A.jsx(TD,{}),children:[{path:"/",element:A.jsx(RD,{})},{path:"/event/:id",element:A.jsx(PD,{})},{path:"/events/create",element:A.jsx(ND,{})}]},{path:"/login",element:A.jsx(bD,{})}]);Qc.createRoot(document.getElementById("root")).render(A.jsx(su.StrictMode,{children:A.jsx(rA,{router:AD})}));
