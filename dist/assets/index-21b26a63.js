function PS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t_={exports:{}},Xu={},n_={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),AS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),DS=Symbol.for("react.strict_mode"),LS=Symbol.for("react.profiler"),MS=Symbol.for("react.provider"),FS=Symbol.for("react.context"),US=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),zS=Symbol.for("react.memo"),BS=Symbol.for("react.lazy"),zm=Symbol.iterator;function VS(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var r_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,s_={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o_(){}o_.prototype=Ds.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}var bh=Ih.prototype=new o_;bh.constructor=Ih;i_(bh,Ds.prototype);bh.isPureReactComponent=!0;var Bm=Array.isArray,a_=Object.prototype.hasOwnProperty,xh={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a_.call(e,r)&&!l_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wa,type:t,key:s,ref:o,props:i,_owner:xh.current}}function WS(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Th(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function $S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vm=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$S(""+t.key):e.toString(36)}function Nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case AS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gc(o,0):r,Bm(i)?(n="",t!=null&&(n=t.replace(Vm,"$&/")+"/"),Nl(i,e,n,"",function(u){return u})):i!=null&&(Th(i)&&(i=WS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gc(s,a);o+=Nl(s,e,n,l,i)}else if(l=VS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gc(s,a++),o+=Nl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var r=[],i=0;return Nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Rl={transition:null},GS={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:xh};ue.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Ds;ue.Fragment=OS;ue.Profiler=LS;ue.PureComponent=Ih;ue.StrictMode=DS;ue.Suspense=jS;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a_.call(e,l)&&!l_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:wa,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:FS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MS,_context:t},t.Consumer=t};ue.createElement=u_;ue.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:US,render:t}};ue.isValidElement=Th;ue.lazy=function(t){return{$$typeof:BS,_payload:{_status:-1,_result:t},_init:HS}};ue.memo=function(t,e){return{$$typeof:zS,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return kt.current.useCallback(t,e)};ue.useContext=function(t){return kt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return kt.current.useEffect(t,e)};ue.useId=function(){return kt.current.useId()};ue.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return kt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ue.useRef=function(t){return kt.current.useRef(t)};ue.useState=function(t){return kt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return kt.current.useTransition()};ue.version="18.2.0";n_.exports=ue;var x=n_.exports;const Yt=e_(x),YS=PS({__proto__:null,default:Yt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=x,qS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,JS=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qS,type:t,key:s,ref:o,props:i,_owner:JS.current}}Xu.Fragment=QS;Xu.jsx=c_;Xu.jsxs=c_;t_.exports=Xu;var A=t_.exports,Gd={},d_={exports:{}},zt={},f_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var J=L.length;L.push(Y);e:for(;0<J;){var Se=J-1>>>1,Le=L[Se];if(0<i(Le,Y))L[Se]=Y,L[J]=Le,J=Se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Y=L[0],J=L.pop();if(J!==Y){L[0]=J;e:for(var Se=0,Le=L.length,sr=Le>>>1;Se<sr;){var pe=2*(Se+1)-1,Jt=L[pe],xt=pe+1,Pn=L[xt];if(0>i(Jt,J))xt<Le&&0>i(Pn,Jt)?(L[Se]=Pn,L[xt]=J,Se=xt):(L[Se]=Jt,L[pe]=J,Se=pe);else if(xt<Le&&0>i(Pn,J))L[Se]=Pn,L[xt]=J,Se=xt;else break e}}return Y}function i(L,Y){var J=L.sortIndex-Y.sortIndex;return J!==0?J:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=L)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(L){if(w=!1,v(L),!y)if(n(l)!==null)y=!0,Ee(S);else{var Y=n(u);Y!==null&&$e(p,Y.startTime-L)}}function S(L,Y){y=!1,w&&(w=!1,m(M),M=-1),g=!0;var J=f;try{for(v(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||L&&!ge());){var Se=d.callback;if(typeof Se=="function"){d.callback=null,f=d.priorityLevel;var Le=Se(d.expirationTime<=Y);Y=t.unstable_now(),typeof Le=="function"?d.callback=Le:d===n(l)&&r(l),v(Y)}else r(l);d=n(l)}if(d!==null)var sr=!0;else{var pe=n(u);pe!==null&&$e(p,pe.startTime-Y),sr=!1}return sr}finally{d=null,f=J,g=!1}}var P=!1,T=null,M=-1,$=5,H=-1;function ge(){return!(t.unstable_now()-H<$)}function G(){if(T!==null){var L=t.unstable_now();H=L;var Y=!0;try{Y=T(!0,L)}finally{Y?Z():(P=!1,T=null)}}else P=!1}var Z;if(typeof h=="function")Z=function(){h(G)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,De=he.port2;he.port1.onmessage=G,Z=function(){De.postMessage(null)}}else Z=function(){I(G,0)};function Ee(L){T=L,P||(P=!0,Z())}function $e(L,Y){M=I(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Ee(S))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var J=f;f=Y;try{return L()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=f;f=L;try{return Y()}finally{f=J}},t.unstable_scheduleCallback=function(L,Y,J){var Se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Se+J:Se):J=Se,L){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=J+Le,L={id:c++,callback:Y,priorityLevel:L,startTime:J,expirationTime:Le,sortIndex:-1},J>Se?(L.sortIndex=J,e(u,L),n(l)===null&&L===n(u)&&(w?(m(M),M=-1):w=!0,$e(p,J-Se))):(L.sortIndex=Le,e(l,L),y||g||(y=!0,Ee(S))),L},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(L){var Y=f;return function(){var J=f;f=Y;try{return L.apply(this,arguments)}finally{f=J}}}})(h_);f_.exports=h_;var eC=f_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_=x,jt=eC;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Fo={};function Oi(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Fo[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,tC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},$m={};function nC(t){return Yd.call($m,t)?!0:Yd.call(Wm,t)?!1:tC.test(t)?$m[t]=!0:(Wm[t]=!0,!1)}function rC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iC(t,e,n,r){if(e===null||typeof e>"u"||rC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Rh);ft[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Rh);ft[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Rh);ft[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iC(e,n,i,r)&&(n=null),r||i===null?nC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),v_=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),y_=Symbol.for("react.offscreen"),Hm=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Yc;function mo(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var Kc=!1;function qc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function sC(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case Bi:return"Portal";case Kd:return"Profiler";case Ah:return"StrictMode";case qd:return"Suspense";case Qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v_:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function oC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function __(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aC(t){var e=__(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=aC(t))}function w_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=__(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jd(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function Zd(t,e){E_(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(go(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function S_(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lC=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){lC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function I_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function b_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uC=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(uC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function Lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var af=null,as=null,ls=null;function Qm(t){if(t=Ca(t)){if(typeof af!="function")throw Error(R(280));var e=t.stateNode;e&&(e=nc(e),af(t.stateNode,t.type,e))}}function x_(t){as?ls?ls.push(t):ls=[t]:as=t}function T_(){if(as){var t=as,e=ls;if(ls=as=null,Qm(t),e)for(t=0;t<e.length;t++)Qm(e[t])}}function N_(t,e){return t(e)}function R_(){}var Qc=!1;function P_(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return N_(t,e,n)}finally{Qc=!1,(as!==null||ls!==null)&&(R_(),T_())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var lf=!1;if(Gn)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{lf=!1}function cC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,ql=null,Ql=!1,uf=null,dC={onError:function(t){Eo=!0,ql=t}};function fC(t,e,n,r,i,s,o,a,l){Eo=!1,ql=null,cC.apply(dC,arguments)}function hC(t,e,n,r,i,s,o,a,l){if(fC.apply(this,arguments),Eo){if(Eo){var u=ql;Eo=!1,ql=null}else throw Error(R(198));Ql||(Ql=!0,uf=u)}}function Di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(Di(t)!==t)throw Error(R(188))}function pC(t){var e=t.alternate;if(!e){if(e=Di(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xm(i),t;if(s===r)return Xm(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function O_(t){return t=pC(t),t!==null?D_(t):null}function D_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D_(t);if(e!==null)return e;t=t.sibling}return null}var L_=jt.unstable_scheduleCallback,Jm=jt.unstable_cancelCallback,mC=jt.unstable_shouldYield,gC=jt.unstable_requestPaint,Ye=jt.unstable_now,vC=jt.unstable_getCurrentPriorityLevel,Mh=jt.unstable_ImmediatePriority,M_=jt.unstable_UserBlockingPriority,Xl=jt.unstable_NormalPriority,yC=jt.unstable_LowPriority,F_=jt.unstable_IdlePriority,Ju=null,Cn=null;function _C(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:SC,wC=Math.log,EC=Math.LN2;function SC(t){return t>>>=0,t===0?32:31-(wC(t)/EC|0)|0}var il=64,sl=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vo(a):(s&=o,s!==0&&(r=vo(s)))}else o=n&~i,o!==0?r=vo(o):s!==0&&(r=vo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hn(e),i=1<<n,r|=t[n],e&=~i;return r}function CC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=CC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U_(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hn(e),t[e]=n}function IC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function j_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z_,Uh,B_,V_,W_,df=!1,ol=[],Er=null,Sr=null,Cr=null,zo=new Map,Bo=new Map,fr=[],bC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xC(t,e,n,r,i){switch(e){case"focusin":return Er=Zs(Er,t,e,n,r,i),!0;case"dragenter":return Sr=Zs(Sr,t,e,n,r,i),!0;case"mouseover":return Cr=Zs(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,Zs(zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bo.set(s,Zs(Bo.get(s)||null,t,e,n,r,i)),!0}return!1}function $_(t){var e=ei(t.target);if(e!==null){var n=Di(e);if(n!==null){if(e=n.tag,e===13){if(e=A_(n),e!==null){t.blockedOn=e,W_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);of=r,n.target.dispatchEvent(r),of=null}else return e=Ca(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){Pl(t)&&n.delete(e)}function TC(){df=!1,Er!==null&&Pl(Er)&&(Er=null),Sr!==null&&Pl(Sr)&&(Sr=null),Cr!==null&&Pl(Cr)&&(Cr=null),zo.forEach(eg),Bo.forEach(eg)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,TC)))}function Vo(t){function e(i){return eo(i,t)}if(0<ol.length){eo(ol[0],t);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&eo(Er,t),Sr!==null&&eo(Sr,t),Cr!==null&&eo(Cr,t),zo.forEach(e),Bo.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)$_(n),n.blockedOn===null&&fr.shift()}var us=tr.ReactCurrentBatchConfig,Zl=!0;function NC(t,e,n,r){var i=me,s=us.transition;us.transition=null;try{me=1,jh(t,e,n,r)}finally{me=i,us.transition=s}}function RC(t,e,n,r){var i=me,s=us.transition;us.transition=null;try{me=4,jh(t,e,n,r)}finally{me=i,us.transition=s}}function jh(t,e,n,r){if(Zl){var i=ff(t,e,n,r);if(i===null)ad(t,e,r,eu,n),Zm(t,r);else if(xC(i,t,e,n,r))r.stopPropagation();else if(Zm(t,r),e&4&&-1<bC.indexOf(t)){for(;i!==null;){var s=Ca(i);if(s!==null&&z_(s),s=ff(t,e,n,r),s===null&&ad(t,e,r,eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var eu=null;function ff(t,e,n,r){if(eu=null,t=Lh(r),t=ei(t),t!==null)if(e=Di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function H_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vC()){case Mh:return 1;case M_:return 4;case Xl:case yC:return 16;case F_:return 536870912;default:return 16}default:return 16}}var vr=null,zh=null,Al=null;function G_(){if(Al)return Al;var t,e=zh,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Al=i.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function tg(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:tg,this.isPropagationStopped=tg,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=Bt(Ls),Sa=Be({},Ls,{view:0,detail:0}),PC=Bt(Sa),Jc,Zc,to,Zu=Be({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Jc=t.screenX-to.screenX,Zc=t.screenY-to.screenY):Zc=Jc=0,to=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),ng=Bt(Zu),AC=Be({},Zu,{dataTransfer:0}),OC=Bt(AC),DC=Be({},Sa,{relatedTarget:0}),ed=Bt(DC),LC=Be({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),MC=Bt(LC),FC=Be({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UC=Bt(FC),jC=Be({},Ls,{data:0}),rg=Bt(jC),zC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VC[t])?!!e[t]:!1}function Vh(){return WC}var $C=Be({},Sa,{key:function(t){if(t.key){var e=zC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HC=Bt($C),GC=Be({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=Bt(GC),YC=Be({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),KC=Bt(YC),qC=Be({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),QC=Bt(qC),XC=Be({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JC=Bt(XC),ZC=[9,13,27,32],Wh=Gn&&"CompositionEvent"in window,So=null;Gn&&"documentMode"in document&&(So=document.documentMode);var ek=Gn&&"TextEvent"in window&&!So,Y_=Gn&&(!Wh||So&&8<So&&11>=So),sg=String.fromCharCode(32),og=!1;function K_(t,e){switch(t){case"keyup":return ZC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function tk(t,e){switch(t){case"compositionend":return q_(e);case"keypress":return e.which!==32?null:(og=!0,sg);case"textInput":return t=e.data,t===sg&&og?null:t;default:return null}}function nk(t,e){if(Wi)return t==="compositionend"||!Wh&&K_(t,e)?(t=G_(),Al=zh=vr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y_&&e.locale!=="ko"?null:e.data;default:return null}}var rk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rk[t.type]:e==="textarea"}function Q_(t,e,n,r){x_(r),e=tu(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Co=null,Wo=null;function ik(t){a0(t,0)}function ec(t){var e=Gi(t);if(w_(e))return t}function sk(t,e){if(t==="change")return e}var X_=!1;if(Gn){var td;if(Gn){var nd="oninput"in document;if(!nd){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),nd=typeof lg.oninput=="function"}td=nd}else td=!1;X_=td&&(!document.documentMode||9<document.documentMode)}function ug(){Co&&(Co.detachEvent("onpropertychange",J_),Wo=Co=null)}function J_(t){if(t.propertyName==="value"&&ec(Wo)){var e=[];Q_(e,Wo,t,Lh(t)),P_(ik,e)}}function ok(t,e,n){t==="focusin"?(ug(),Co=e,Wo=n,Co.attachEvent("onpropertychange",J_)):t==="focusout"&&ug()}function ak(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Wo)}function lk(t,e){if(t==="click")return ec(e)}function uk(t,e){if(t==="input"||t==="change")return ec(e)}function ck(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:ck;function $o(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yd.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,e){var n=cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function Z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e0(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dk(t){var e=e0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z_(n.ownerDocument.documentElement,n)){if(r!==null&&$h(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dg(n,s);var o=dg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fk=Gn&&"documentMode"in document&&11>=document.documentMode,$i=null,hf=null,ko=null,pf=!1;function fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||$i==null||$i!==Kl(r)||(r=$i,"selectionStart"in r&&$h(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&$o(ko,r)||(ko=r,r=tu(hf,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},rd={},t0={};Gn&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function tc(t){if(rd[t])return rd[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t0)return rd[t]=e[n];return t}var n0=tc("animationend"),r0=tc("animationiteration"),i0=tc("animationstart"),s0=tc("transitionend"),o0=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){o0.set(t,e),Oi(e,[t])}for(var id=0;id<hg.length;id++){var sd=hg[id],hk=sd.toLowerCase(),pk=sd[0].toUpperCase()+sd.slice(1);Wr(hk,"on"+pk)}Wr(n0,"onAnimationEnd");Wr(r0,"onAnimationIteration");Wr(i0,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(s0,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mk=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hC(r,e,void 0,t),t.currentTarget=null}function a0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pg(i,a,u),s=l}}}if(Ql)throw t=uf,Ql=!1,uf=null,t}function Ie(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var r=t+"__bubble";n.has(r)||(l0(e,t,2,!1),n.add(r))}function od(t,e,n){var r=0;e&&(r|=4),l0(n,t,r,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[ul]){t[ul]=!0,m_.forEach(function(n){n!=="selectionchange"&&(mk.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,od("selectionchange",!1,e))}}function l0(t,e,n,r){switch(H_(e)){case 1:var i=NC;break;case 4:i=RC;break;default:i=jh}n=i.bind(null,e,n,t),i=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ei(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}P_(function(){var u=s,c=Lh(n),d=[];e:{var f=o0.get(t);if(f!==void 0){var g=Bh,y=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":g=HC;break;case"focusin":y="focus",g=ed;break;case"focusout":y="blur",g=ed;break;case"beforeblur":case"afterblur":g=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=OC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=KC;break;case n0:case r0:case i0:g=MC;break;case s0:g=QC;break;case"scroll":g=PC;break;case"wheel":g=JC;break;case"copy":case"cut":case"paste":g=UC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ig}var w=(e&4)!==0,I=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,v;h!==null;){v=h;var p=v.stateNode;if(v.tag===5&&p!==null&&(v=p,m!==null&&(p=jo(h,m),p!=null&&w.push(Go(h,p,v)))),I)break;h=h.return}0<w.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==of&&(y=n.relatedTarget||n.fromElement)&&(ei(y)||y[Yn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?ei(y):null,y!==null&&(I=Di(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=ng,p="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=ig,p="onPointerLeave",m="onPointerEnter",h="pointer"),I=g==null?f:Gi(g),v=y==null?f:Gi(y),f=new w(p,h+"leave",g,n,c),f.target=I,f.relatedTarget=v,p=null,ei(c)===u&&(w=new w(m,h+"enter",y,n,c),w.target=v,w.relatedTarget=I,p=w),I=p,g&&y)t:{for(w=g,m=y,h=0,v=w;v;v=Fi(v))h++;for(v=0,p=m;p;p=Fi(p))v++;for(;0<h-v;)w=Fi(w),h--;for(;0<v-h;)m=Fi(m),v--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=Fi(w),m=Fi(m)}w=null}else w=null;g!==null&&mg(d,f,g,w,!1),y!==null&&I!==null&&mg(d,I,y,w,!0)}}e:{if(f=u?Gi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=sk;else if(ag(f))if(X_)S=uk;else{S=ak;var P=ok}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=lk);if(S&&(S=S(t,u))){Q_(d,S,n,c);break e}P&&P(t,f,u),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&ef(f,"number",f.value)}switch(P=u?Gi(u):window,t){case"focusin":(ag(P)||P.contentEditable==="true")&&($i=P,hf=u,ko=null);break;case"focusout":ko=hf=$i=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,fg(d,n,c);break;case"selectionchange":if(fk)break;case"keydown":case"keyup":fg(d,n,c)}var T;if(Wh)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Wi?K_(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Y_&&n.locale!=="ko"&&(Wi||M!=="onCompositionStart"?M==="onCompositionEnd"&&Wi&&(T=G_()):(vr=c,zh="value"in vr?vr.value:vr.textContent,Wi=!0)),P=tu(u,M),0<P.length&&(M=new rg(M,t,null,n,c),d.push({event:M,listeners:P}),T?M.data=T:(T=q_(n),T!==null&&(M.data=T)))),(T=ek?tk(t,n):nk(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(c=new rg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}a0(d,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jo(t,n),s!=null&&r.unshift(Go(t,s,i)),s=jo(t,e),s!=null&&r.push(Go(t,s,i))),t=t.return}return r}function Fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=jo(n,s),l!=null&&o.unshift(Go(n,l,a))):i||(l=jo(n,s),l!=null&&o.push(Go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gk=/\r\n?/g,vk=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(gk,`
`).replace(vk,"")}function cl(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(R(425))}function nu(){}var mf=null,gf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,_k=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(wk)}:yf;function wk(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),_n="__reactFiber$"+Ms,Yo="__reactProps$"+Ms,Yn="__reactContainer$"+Ms,_f="__reactEvents$"+Ms,Ek="__reactListeners$"+Ms,Sk="__reactHandles$"+Ms;function ei(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[_n])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[_n]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function nc(t){return t[Yo]||null}var wf=[],Yi=-1;function $r(t){return{current:t}}function Te(t){0>Yi||(t.current=wf[Yi],wf[Yi]=null,Yi--)}function ke(t,e){Yi++,wf[Yi]=t.current,t.current=e}var Lr={},yt=$r(Lr),Pt=$r(!1),vi=Lr;function _s(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function ru(){Te(Pt),Te(yt)}function _g(t,e,n){if(yt.current!==Lr)throw Error(R(168));ke(yt,e),ke(Pt,n)}function u0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,oC(t)||"Unknown",i));return Be({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,vi=yt.current,ke(yt,t),ke(Pt,Pt.current),!0}function wg(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=u0(t,e,vi),r.__reactInternalMemoizedMergedChildContext=t,Te(Pt),Te(yt),ke(yt,t)):Te(Pt),ke(Pt,n)}var Fn=null,rc=!1,ud=!1;function c0(t){Fn===null?Fn=[t]:Fn.push(t)}function Ck(t){rc=!0,c0(t)}function Hr(){if(!ud&&Fn!==null){ud=!0;var t=0,e=me;try{var n=Fn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,rc=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),L_(Mh,Hr),i}finally{me=e,ud=!1}}return null}var Ki=[],qi=0,su=null,ou=0,Ht=[],Gt=0,yi=null,Un=1,jn="";function Qr(t,e){Ki[qi++]=ou,Ki[qi++]=su,su=t,ou=e}function d0(t,e,n){Ht[Gt++]=Un,Ht[Gt++]=jn,Ht[Gt++]=yi,yi=t;var r=Un;t=jn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Un=1<<32-hn(e)+i|n<<i|r,jn=s+t}else Un=1<<s|n<<i|r,jn=t}function Hh(t){t.return!==null&&(Qr(t,1),d0(t,1,0))}function Gh(t){for(;t===su;)su=Ki[--qi],Ki[qi]=null,ou=Ki[--qi],Ki[qi]=null;for(;t===yi;)yi=Ht[--Gt],Ht[Gt]=null,jn=Ht[--Gt],Ht[Gt]=null,Un=Ht[--Gt],Ht[Gt]=null}var Ut=null,Ft=null,Oe=!1,an=null;function f0(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:Un,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Ft=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sf(t){if(Oe){var e=Ft;if(e){var n=e;if(!Eg(t,e)){if(Ef(t))throw Error(R(418));e=kr(n.nextSibling);var r=Ut;e&&Eg(t,e)?f0(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Ut=t)}}else{if(Ef(t))throw Error(R(418));t.flags=t.flags&-4097|2,Oe=!1,Ut=t}}}function Sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function dl(t){if(t!==Ut)return!1;if(!Oe)return Sg(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Ft)){if(Ef(t))throw h0(),Error(R(418));for(;e;)f0(t,e),e=kr(e.nextSibling)}if(Sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Ut?kr(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=Ft;t;)t=kr(t.nextSibling)}function ws(){Ft=Ut=null,Oe=!1}function Yh(t){an===null?an=[t]:an.push(t)}var kk=tr.ReactCurrentBatchConfig;function rn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var au=$r(null),lu=null,Qi=null,Kh=null;function qh(){Kh=Qi=lu=null}function Qh(t){var e=au.current;Te(au),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){lu=t,Kh=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(Kh!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(lu===null)throw Error(R(308));Qi=t,lu.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var ti=null;function Xh(t){ti===null?ti=[t]:ti.push(t)}function p0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}function Cg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=Be({},d,f);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wi|=o,t.lanes=o,t.memoizedState=d}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var g0=new p_.Component().refs;function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?Di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=xr(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(pn(e,t,i,r),Dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=xr(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(pn(e,t,i,r),Dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=xr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(pn(e,t,r,n),Dl(e,t,r))}};function Ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function v0(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=At(e)?vi:yt.current,r=e.contextTypes,s=(r=r!=null)?_s(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function If(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=g0,Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=At(e)?vi:yt.current,i.context=_s(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ic.enqueueReplaceState(i,i.state,null),uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===g0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function y0(t){function e(m,h){if(t){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Tr(m,h),m.index=0,m.sibling=null,m}function s(m,h,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,v,p){return h===null||h.tag!==6?(h=gd(v,m.mode,p),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,p){var S=v.type;return S===Vi?c(m,h,v.props.children,p,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cr&&xg(S)===h.type)?(p=i(h,v.props),p.ref=no(m,h,v),p.return=m,p):(p=zl(v.type,v.key,v.props,null,m.mode,p),p.ref=no(m,h,v),p.return=m,p)}function u(m,h,v,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=vd(v,m.mode,p),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function c(m,h,v,p,S){return h===null||h.tag!==7?(h=hi(v,m.mode,p,S),h.return=m,h):(h=i(h,v),h.return=m,h)}function d(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=gd(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tl:return v=zl(h.type,h.key,h.props,null,m.mode,v),v.ref=no(m,null,h),v.return=m,v;case Bi:return h=vd(h,m.mode,v),h.return=m,h;case cr:var p=h._init;return d(m,p(h._payload),v)}if(go(h)||Xs(h))return h=hi(h,m.mode,v,null),h.return=m,h;fl(m,h)}return null}function f(m,h,v,p){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,h,""+v,p);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tl:return v.key===S?l(m,h,v,p):null;case Bi:return v.key===S?u(m,h,v,p):null;case cr:return S=v._init,f(m,h,S(v._payload),p)}if(go(v)||Xs(v))return S!==null?null:c(m,h,v,p,null);fl(m,v)}return null}function g(m,h,v,p,S){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(v)||null,a(h,m,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tl:return m=m.get(p.key===null?v:p.key)||null,l(h,m,p,S);case Bi:return m=m.get(p.key===null?v:p.key)||null,u(h,m,p,S);case cr:var P=p._init;return g(m,h,v,P(p._payload),S)}if(go(p)||Xs(p))return m=m.get(v)||null,c(h,m,p,S,null);fl(h,p)}return null}function y(m,h,v,p){for(var S=null,P=null,T=h,M=h=0,$=null;T!==null&&M<v.length;M++){T.index>M?($=T,T=null):$=T.sibling;var H=f(m,T,v[M],p);if(H===null){T===null&&(T=$);break}t&&T&&H.alternate===null&&e(m,T),h=s(H,h,M),P===null?S=H:P.sibling=H,P=H,T=$}if(M===v.length)return n(m,T),Oe&&Qr(m,M),S;if(T===null){for(;M<v.length;M++)T=d(m,v[M],p),T!==null&&(h=s(T,h,M),P===null?S=T:P.sibling=T,P=T);return Oe&&Qr(m,M),S}for(T=r(m,T);M<v.length;M++)$=g(T,m,M,v[M],p),$!==null&&(t&&$.alternate!==null&&T.delete($.key===null?M:$.key),h=s($,h,M),P===null?S=$:P.sibling=$,P=$);return t&&T.forEach(function(ge){return e(m,ge)}),Oe&&Qr(m,M),S}function w(m,h,v,p){var S=Xs(v);if(typeof S!="function")throw Error(R(150));if(v=S.call(v),v==null)throw Error(R(151));for(var P=S=null,T=h,M=h=0,$=null,H=v.next();T!==null&&!H.done;M++,H=v.next()){T.index>M?($=T,T=null):$=T.sibling;var ge=f(m,T,H.value,p);if(ge===null){T===null&&(T=$);break}t&&T&&ge.alternate===null&&e(m,T),h=s(ge,h,M),P===null?S=ge:P.sibling=ge,P=ge,T=$}if(H.done)return n(m,T),Oe&&Qr(m,M),S;if(T===null){for(;!H.done;M++,H=v.next())H=d(m,H.value,p),H!==null&&(h=s(H,h,M),P===null?S=H:P.sibling=H,P=H);return Oe&&Qr(m,M),S}for(T=r(m,T);!H.done;M++,H=v.next())H=g(T,m,M,H.value,p),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?M:H.key),h=s(H,h,M),P===null?S=H:P.sibling=H,P=H);return t&&T.forEach(function(G){return e(m,G)}),Oe&&Qr(m,M),S}function I(m,h,v,p){if(typeof v=="object"&&v!==null&&v.type===Vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case tl:e:{for(var S=v.key,P=h;P!==null;){if(P.key===S){if(S=v.type,S===Vi){if(P.tag===7){n(m,P.sibling),h=i(P,v.props.children),h.return=m,m=h;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cr&&xg(S)===P.type){n(m,P.sibling),h=i(P,v.props),h.ref=no(m,P,v),h.return=m,m=h;break e}n(m,P);break}else e(m,P);P=P.sibling}v.type===Vi?(h=hi(v.props.children,m.mode,p,v.key),h.return=m,m=h):(p=zl(v.type,v.key,v.props,null,m.mode,p),p.ref=no(m,h,v),p.return=m,m=p)}return o(m);case Bi:e:{for(P=v.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=vd(v,m.mode,p),h.return=m,m=h}return o(m);case cr:return P=v._init,I(m,h,P(v._payload),p)}if(go(v))return y(m,h,v,p);if(Xs(v))return w(m,h,v,p);fl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=gd(v,m.mode,p),h.return=m,m=h),o(m)):n(m,h)}return I}var Es=y0(!0),_0=y0(!1),ka={},kn=$r(ka),Ko=$r(ka),qo=$r(ka);function ni(t){if(t===ka)throw Error(R(174));return t}function Zh(t,e){switch(ke(qo,e),ke(Ko,t),ke(kn,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}Te(kn),ke(kn,e)}function Ss(){Te(kn),Te(Ko),Te(qo)}function w0(t){ni(qo.current);var e=ni(kn.current),n=nf(e,t.type);e!==n&&(ke(Ko,t),ke(kn,n))}function ep(t){Ko.current===t&&(Te(kn),Te(Ko))}var Ue=$r(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function tp(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var Ll=tr.ReactCurrentDispatcher,dd=tr.ReactCurrentBatchConfig,_i=0,ze=null,Je=null,st=null,du=!1,Io=!1,Qo=0,Ik=0;function pt(){throw Error(R(321))}function np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function rp(t,e,n,r,i,s){if(_i=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?Nk:Rk,t=n(r,i),Io){s=0;do{if(Io=!1,Qo=0,25<=s)throw Error(R(301));s+=1,st=Je=null,e.updateQueue=null,Ll.current=Pk,t=n(r,i)}while(Io)}if(Ll.current=fu,e=Je!==null&&Je.next!==null,_i=0,st=Je=ze=null,du=!1,e)throw Error(R(300));return t}function ip(){var t=Qo!==0;return Qo=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?ze.memoizedState=st=t:st=st.next=t,st}function Xt(){if(Je===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=st===null?ze.memoizedState:st.next;if(e!==null)st=e,Je=t;else{if(t===null)throw Error(R(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},st===null?ze.memoizedState=st=t:st=st.next=t}return st}function Xo(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((_i&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ze.lanes|=c,wi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function E0(){}function S0(t,e){var n=ze,r=Xt(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,sp(I0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Jo(9,k0.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(R(349));_i&30||C0(n,e,i)}return i}function C0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,r){e.value=n,e.getSnapshot=r,b0(e)&&x0(t)}function I0(t,e,n){return n(function(){b0(e)&&x0(t)})}function b0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function x0(t){var e=Kn(t,1);e!==null&&pn(e,t,1,-1)}function Tg(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=Tk.bind(null,ze,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T0(){return Xt().memoizedState}function Ml(t,e,n,r){var i=yn();ze.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&np(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}ze.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function Ng(t,e){return Ml(8390656,8,t,e)}function sp(t,e){return sc(2048,8,t,e)}function N0(t,e){return sc(4,2,t,e)}function R0(t,e){return sc(4,4,t,e)}function P0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A0(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,P0.bind(null,e,t),n)}function op(){}function O0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function L0(t,e,n){return _i&21?(gn(n,e)||(n=U_(),ze.lanes|=n,wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function bk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=dd.transition;dd.transition={};try{t(!1),e()}finally{me=n,dd.transition=r}}function M0(){return Xt().memoizedState}function xk(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F0(t))U0(e,n);else if(n=p0(t,e,n,r),n!==null){var i=Ct();pn(n,t,r,i),j0(n,e,r)}}function Tk(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F0(t))U0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,Xh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=p0(t,e,i,r),n!==null&&(i=Ct(),pn(n,t,r,i),j0(n,e,r))}}function F0(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function U0(t,e){Io=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}var fu={readContext:Qt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},Nk={readContext:Qt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,P0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xk.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:op,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=bk.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=yn();if(Oe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),lt===null)throw Error(R(349));_i&30||C0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ng(I0.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,k0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=lt.identifierPrefix;if(Oe){var n=jn,r=Un;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ik++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rk={readContext:Qt,useCallback:O0,useContext:Qt,useEffect:sp,useImperativeHandle:A0,useInsertionEffect:N0,useLayoutEffect:R0,useMemo:D0,useReducer:fd,useRef:T0,useState:function(){return fd(Xo)},useDebugValue:op,useDeferredValue:function(t){var e=Xt();return L0(e,Je.memoizedState,t)},useTransition:function(){var t=fd(Xo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:E0,useSyncExternalStore:S0,useId:M0,unstable_isNewReconciler:!1},Pk={readContext:Qt,useCallback:O0,useContext:Qt,useEffect:sp,useImperativeHandle:A0,useInsertionEffect:N0,useLayoutEffect:R0,useMemo:D0,useReducer:hd,useRef:T0,useState:function(){return hd(Xo)},useDebugValue:op,useDeferredValue:function(t){var e=Xt();return Je===null?e.memoizedState=t:L0(e,Je.memoizedState,t)},useTransition:function(){var t=hd(Xo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:E0,useSyncExternalStore:S0,useId:M0,unstable_isNewReconciler:!1};function Cs(t,e){try{var n="",r=e;do n+=sC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ak=typeof WeakMap=="function"?WeakMap:Map;function z0(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,Mf=r),bf(t,e)},n}function B0(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ak;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gk.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var Ok=tr.ReactCurrentOwner,Nt=!1;function wt(t,e,n,r){e.child=t===null?_0(e,null,n,r):Es(e,t.child,n,r)}function Og(t,e,n,r,i){n=n.render;var s=e.ref;return cs(e,i),r=rp(t,e,n,r,s,i),n=ip(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Oe&&n&&Hh(e),e.flags|=1,wt(t,e,r,i),e.child)}function Dg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V0(t,e,s,r,i)):(t=zl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function V0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return xf(t,e,n,r,i)}function W0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Ji,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Ji,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(Ji,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(Ji,Mt),Mt|=r;return wt(t,e,i,n),e.child}function $0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,r,i){var s=At(n)?vi:yt.current;return s=_s(e,s),cs(e,i),n=rp(t,e,n,r,s,i),r=ip(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Oe&&r&&Hh(e),e.flags|=1,wt(t,e,n,i),e.child)}function Lg(t,e,n,r,i){if(At(n)){var s=!0;iu(e)}else s=!1;if(cs(e,i),e.stateNode===null)Fl(t,e),v0(e,n,r),If(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qt(u):(u=At(n)?vi:yt.current,u=_s(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bg(e,o,r,u),dr=!1;var f=e.memoizedState;o.state=f,uu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Pt.current||dr?(typeof c=="function"&&(kf(e,n,c,r),l=e.memoizedState),(a=dr||Ig(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:rn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qt(l):(l=At(n)?vi:yt.current,l=_s(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&bg(e,o,r,l),dr=!1,f=e.memoizedState,o.state=f,uu(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Pt.current||dr?(typeof g=="function"&&(kf(e,n,g,r),y=e.memoizedState),(u=dr||Ig(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Tf(t,e,n,r,s,i)}function Tf(t,e,n,r,i,s){$0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wg(e,n,!1),qn(t,e,s);r=e.stateNode,Ok.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&wg(e,n,!0),e.child}function H0(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),Zh(t,e.containerInfo)}function Mg(t,e,n,r,i){return ws(),Yh(i),e.flags|=256,wt(t,e,n,r),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function G0(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Ue,i&1),t===null)return Sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,r,0,null),t=hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rf(n),e.memoizedState=Nf,t):ap(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Dk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nf,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ap(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&Yh(r),Es(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(R(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lc({mode:"visible",children:r.children},i,0,null),s=hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=Nf,s);if(!(e.mode&1))return hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=pd(s,r,void 0),hl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Nt||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),pn(r,t,i,-1))}return hp(),r=pd(Error(R(421))),hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Yk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=kr(i.nextSibling),Ut=e,Oe=!0,an=null,t!==null&&(Ht[Gt++]=Un,Ht[Gt++]=jn,Ht[Gt++]=yi,Un=t.id,jn=t.overflow,yi=e),e=ap(e,r.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cf(t.return,e,n)}function md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Y0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,s);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lk(t,e,n){switch(e.tag){case 3:H0(e),ws();break;case 5:w0(e);break;case 1:At(e.type)&&iu(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?G0(t,e,n):(ke(Ue,Ue.current&1),t=qn(t,e,n),t!==null?t.sibling:null);ke(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,W0(t,e,n)}return qn(t,e,n)}var K0,Pf,q0,Q0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};q0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(kn.current);var s=null;switch(n){case"input":i=Jd(t,i),r=Jd(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=tf(t,i),r=tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}rf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Q0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mk(t,e,n){var r=e.pendingProps;switch(Gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return At(e.type)&&ru(),mt(e),null;case 3:return r=e.stateNode,Ss(),Te(Pt),Te(yt),tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(jf(an),an=null))),Pf(t,e),mt(e),null;case 5:ep(e);var i=ni(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return mt(e),null}if(t=ni(kn.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)Ie(yo[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Gm(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Km(r,s),Ie("invalid",r)}rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(r.textContent,a,t),i=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":nl(r),Ym(r,s,!0);break;case"textarea":nl(r),qm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Yo]=r,K0(t,e,!1,!1),e.stateNode=t;e:{switch(o=sf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)Ie(yo[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Gm(t,r),i=Jd(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Km(t,r),i=tf(t,r),Ie("invalid",t);break;default:i=r}rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&Ph(t,s,l,o))}switch(n){case"input":nl(t),Ym(t,r,!1);break;case"textarea":nl(t),qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=ni(qo.current),ni(kn.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:cl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return mt(e),null;case 13:if(Te(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Ft!==null&&e.mode&1&&!(e.flags&128))h0(),ws(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[_n]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else an!==null&&(jf(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?tt===0&&(tt=3):hp())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Ss(),Pf(t,e),t===null&&Ho(e.stateNode.containerInfo),mt(e),null;case 10:return Qh(e.type._context),mt(e),null;case 17:return At(e.type)&&ru(),mt(e),null;case 19:if(Te(Ue),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>ks&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return mt(e),null}else 2*Ye()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Ue.current,ke(Ue,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return fp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Fk(t,e){switch(Gh(e),e.tag){case 1:return At(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),Te(Pt),Te(yt),tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ep(e),null;case 13:if(Te(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ue),null;case 4:return Ss(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return fp(),null;case 24:return null;default:return null}}var pl=!1,gt=!1,Uk=typeof WeakSet=="function"?WeakSet:Set,B=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Af(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Ug=!1;function jk(t,e){if(mf=Zl,t=e0(),$h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},Zl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,I=y.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:rn(e.type,w),I);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return y=Ug,Ug=!1,y}function bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Af(e,n,s)}i=i.next}while(i!==r)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X0(t){var e=t.alternate;e!==null&&(t.alternate=null,X0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Yo],delete e[_f],delete e[Ek],delete e[Sk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J0(t){return t.tag===5||t.tag===3||t.tag===4}function jg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var ct=null,sn=!1;function ar(t,e,n){for(n=n.child;n!==null;)Z0(t,e,n),n=n.sibling}function Z0(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:gt||Xi(n,e);case 6:var r=ct,i=sn;ct=null,ar(t,e,n),ct=r,sn=i,ct!==null&&(sn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(sn?(t=ct,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),Vo(t)):ld(ct,n.stateNode));break;case 4:r=ct,i=sn,ct=n.stateNode.containerInfo,sn=!0,ar(t,e,n),ct=r,sn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Af(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!gt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,ar(t,e,n),gt=r):ar(t,e,n);break;default:ar(t,e,n)}}function zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uk),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,sn=!1;break e;case 3:ct=a.stateNode.containerInfo,sn=!0;break e;case 4:ct=a.stateNode.containerInfo,sn=!0;break e}a=a.return}if(ct===null)throw Error(R(160));Z0(s,o,i),ct=null,sn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ew(e,t),e=e.sibling}function ew(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),vn(t),r&4){try{bo(3,t,t.return),oc(3,t)}catch(w){Ve(t,t.return,w)}try{bo(5,t,t.return)}catch(w){Ve(t,t.return,w)}}break;case 1:nn(e,t),vn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(nn(e,t),vn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Uo(i,"")}catch(w){Ve(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&E_(i,s),sf(a,o);var u=sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?b_(i,d):c==="dangerouslySetInnerHTML"?k_(i,d):c==="children"?Uo(i,d):Ph(i,c,d,u)}switch(a){case"input":Zd(i,s);break;case"textarea":S_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yo]=s}catch(w){Ve(t,t.return,w)}}break;case 6:if(nn(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ve(t,t.return,w)}}break;case 3:if(nn(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(w){Ve(t,t.return,w)}break;case 4:nn(e,t),vn(t);break;case 13:nn(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cp=Ye())),r&4&&zg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(u=gt)||c,nn(e,t),gt=u):nn(e,t),vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(f=B,g=f.child,f.tag){case 0:case 11:case 14:case 15:bo(4,f,f.return);break;case 1:Xi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Ve(r,n,w)}}break;case 5:Xi(f,f.return);break;case 22:if(f.memoizedState!==null){Vg(d);continue}}g!==null?(g.return=f,B=g):Vg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=I_("display",o))}catch(w){Ve(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ve(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:nn(e,t),vn(t),r&4&&zg(t);break;case 21:break;default:nn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var s=jg(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jg(t);Df(t,a,o);break;default:throw Error(R(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zk(t,e,n){B=t,tw(t)}function tw(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||gt;a=pl;var u=gt;if(pl=o,(gt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?Wg(i):l!==null?(l.return=o,B=l):Wg(i);for(;s!==null;)B=s,tw(s),s=s.sibling;B=i,pl=a,gt=u}Bg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Bg(t)}}function Bg(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}gt||e.flags&512&&Of(e)}catch(f){Ve(e,e.return,f)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Vg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Wg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Of(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var Bk=Math.ceil,hu=tr.ReactCurrentDispatcher,lp=tr.ReactCurrentOwner,qt=tr.ReactCurrentBatchConfig,ce=0,lt=null,Qe=null,dt=0,Mt=0,Ji=$r(0),tt=0,Zo=null,wi=0,ac=0,up=0,xo=null,Tt=null,cp=0,ks=1/0,Mn=null,pu=!1,Mf=null,br=null,ml=!1,yr=null,mu=0,To=0,Ff=null,Ul=-1,jl=0;function Ct(){return ce&6?Ye():Ul!==-1?Ul:Ul=Ye()}function xr(t){return t.mode&1?ce&2&&dt!==0?dt&-dt:kk.transition!==null?(jl===0&&(jl=U_()),jl):(t=me,t!==0||(t=window.event,t=t===void 0?16:H_(t.type)),t):1}function pn(t,e,n,r){if(50<To)throw To=0,Ff=null,Error(R(185));Ea(t,n,r),(!(ce&2)||t!==lt)&&(t===lt&&(!(ce&2)&&(ac|=n),tt===4&&hr(t,dt)),Ot(t,r),n===1&&ce===0&&!(e.mode&1)&&(ks=Ye()+500,rc&&Hr()))}function Ot(t,e){var n=t.callbackNode;kC(t,e);var r=Jl(t,t===lt?dt:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?Ck($g.bind(null,t)):c0($g.bind(null,t)),_k(function(){!(ce&6)&&Hr()}),n=null;else{switch(j_(r)){case 1:n=Mh;break;case 4:n=M_;break;case 16:n=Xl;break;case 536870912:n=F_;break;default:n=Xl}n=uw(n,nw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nw(t,e){if(Ul=-1,jl=0,ce&6)throw Error(R(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Jl(t,t===lt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var i=ce;ce|=2;var s=iw();(lt!==t||dt!==e)&&(Mn=null,ks=Ye()+500,fi(t,e));do try{$k();break}catch(a){rw(t,a)}while(1);qh(),hu.current=s,ce=i,Qe!==null?e=0:(lt=null,dt=0,e=tt)}if(e!==0){if(e===2&&(i=cf(t),i!==0&&(r=i,e=Uf(t,i))),e===1)throw n=Zo,fi(t,0),hr(t,r),Ot(t,Ye()),n;if(e===6)hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vk(i)&&(e=gu(t,r),e===2&&(s=cf(t),s!==0&&(r=s,e=Uf(t,s))),e===1))throw n=Zo,fi(t,0),hr(t,r),Ot(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Xr(t,Tt,Mn);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=cp+500-Ye(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yf(Xr.bind(null,t,Tt,Mn),e);break}Xr(t,Tt,Mn);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bk(r/1960))-r,10<r){t.timeoutHandle=yf(Xr.bind(null,t,Tt,Mn),r);break}Xr(t,Tt,Mn);break;case 5:Xr(t,Tt,Mn);break;default:throw Error(R(329))}}}return Ot(t,Ye()),t.callbackNode===n?nw.bind(null,t):null}function Uf(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(fi(t,e).flags|=256),t=gu(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&jf(e)),t}function jf(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function Vk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~up,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hn(e),r=1<<n;t[n]=-1,e&=~r}}function $g(t){if(ce&6)throw Error(R(327));ds();var e=Jl(t,0);if(!(e&1))return Ot(t,Ye()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=cf(t);r!==0&&(e=r,n=Uf(t,r))}if(n===1)throw n=Zo,fi(t,0),hr(t,e),Ot(t,Ye()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Tt,Mn),Ot(t,Ye()),null}function dp(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(ks=Ye()+500,rc&&Hr())}}function Ei(t){yr!==null&&yr.tag===0&&!(ce&6)&&ds();var e=ce;ce|=1;var n=qt.transition,r=me;try{if(qt.transition=null,me=1,t)return t()}finally{me=r,qt.transition=n,ce=e,!(ce&6)&&Hr()}}function fp(){Mt=Ji.current,Te(Ji)}function fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(Gh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:Ss(),Te(Pt),Te(yt),tp();break;case 5:ep(r);break;case 4:Ss();break;case 13:Te(Ue);break;case 19:Te(Ue);break;case 10:Qh(r.type._context);break;case 22:case 23:fp()}n=n.return}if(lt=t,Qe=t=Tr(t.current,null),dt=Mt=e,tt=0,Zo=null,up=ac=wi=0,Tt=xo=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function rw(t,e){do{var n=Qe;try{if(qh(),Ll.current=fu,du){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}du=!1}if(_i=0,st=Je=ze=null,Io=!1,Qo=0,lp.current=null,n===null||n.return===null){tt=1,Zo=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Pg(o);if(g!==null){g.flags&=-257,Ag(g,o,a,s,e),g.mode&1&&Rg(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Rg(s,u,e),hp();break e}l=Error(R(426))}}else if(Oe&&a.mode&1){var I=Pg(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ag(I,o,a,s,e),Yh(Cs(l,a));break e}}s=l=Cs(l,a),tt!==4&&(tt=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=z0(s,l,e);Cg(s,m);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(br===null||!br.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=B0(s,a,e);Cg(s,p);break e}}s=s.return}while(s!==null)}ow(n)}catch(S){e=S,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(1)}function iw(){var t=hu.current;return hu.current=fu,t===null?fu:t}function hp(){(tt===0||tt===3||tt===2)&&(tt=4),lt===null||!(wi&268435455)&&!(ac&268435455)||hr(lt,dt)}function gu(t,e){var n=ce;ce|=2;var r=iw();(lt!==t||dt!==e)&&(Mn=null,fi(t,e));do try{Wk();break}catch(i){rw(t,i)}while(1);if(qh(),ce=n,hu.current=r,Qe!==null)throw Error(R(261));return lt=null,dt=0,tt}function Wk(){for(;Qe!==null;)sw(Qe)}function $k(){for(;Qe!==null&&!mC();)sw(Qe)}function sw(t){var e=lw(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?ow(t):Qe=e,lp.current=null}function ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fk(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Qe=null;return}}else if(n=Mk(n,e,Mt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);tt===0&&(tt=5)}function Xr(t,e,n){var r=me,i=qt.transition;try{qt.transition=null,me=1,Hk(t,e,n,r)}finally{qt.transition=i,me=r}return null}function Hk(t,e,n,r){do ds();while(yr!==null);if(ce&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IC(t,s),t===lt&&(Qe=lt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,uw(Xl,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=me;me=1;var a=ce;ce|=4,lp.current=null,jk(t,n),ew(n,t),dk(gf),Zl=!!mf,gf=mf=null,t.current=n,zk(n),gC(),ce=a,me=o,qt.transition=s}else t.current=n;if(ml&&(ml=!1,yr=t,mu=i),s=t.pendingLanes,s===0&&(br=null),_C(n.stateNode),Ot(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,t=Mf,Mf=null,t;return mu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Ff?To++:(To=0,Ff=t):To=0,Hr(),null}function ds(){if(yr!==null){var t=j_(mu),e=qt.transition,n=me;try{if(qt.transition=null,me=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,mu=0,ce&6)throw Error(R(331));var i=ce;for(ce|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:bo(8,c,s)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var f=c.sibling,g=c.return;if(X0(c),c===u){B=null;break}if(f!==null){f.return=g,B=f;break}B=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var h=t.current;for(B=h;B!==null;){o=B;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,B=v;else e:for(o=h;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(S){Ve(a,a.return,S)}if(a===o){B=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,B=p;break e}B=a.return}}if(ce=i,Hr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Ju,t)}catch{}r=!0}return r}finally{me=n,qt.transition=e}}return!1}function Hg(t,e,n){e=Cs(n,e),e=z0(t,e,1),t=Ir(t,e,1),e=Ct(),t!==null&&(Ea(t,1,e),Ot(t,e))}function Ve(t,e,n){if(t.tag===3)Hg(t,t,n);else for(;e!==null;){if(e.tag===3){Hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Cs(n,t),t=B0(e,t,1),e=Ir(e,t,1),t=Ct(),e!==null&&(Ea(e,1,t),Ot(e,t));break}}e=e.return}}function Gk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(dt&n)===n&&(tt===4||tt===3&&(dt&130023424)===dt&&500>Ye()-cp?fi(t,0):up|=n),Ot(t,e)}function aw(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=Ct();t=Kn(t,e),t!==null&&(Ea(t,e,n),Ot(t,n))}function Yk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aw(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),aw(t,n)}var lw;lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,Lk(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Oe&&e.flags&1048576&&d0(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fl(t,e),t=e.pendingProps;var i=_s(e,yt.current);cs(e,n),i=rp(null,e,r,t,i,n);var s=ip();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(s=!0,iu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jh(e),i.updater=ic,e.stateNode=i,i._reactInternals=e,If(e,r,t,n),e=Tf(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&Hh(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qk(r),t=rn(r,t),i){case 0:e=xf(null,e,r,t,n);break e;case 1:e=Lg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Dg(null,e,r,rn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Lg(t,e,r,i,n);case 3:e:{if(H0(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,m0(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Cs(Error(R(423)),e),e=Mg(t,e,r,n,i);break e}else if(r!==i){i=Cs(Error(R(424)),e),e=Mg(t,e,r,n,i);break e}else for(Ft=kr(e.stateNode.containerInfo.firstChild),Ut=e,Oe=!0,an=null,n=_0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),r===i){e=qn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return w0(e),t===null&&Sf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(e.flags|=32),$0(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Sf(e),null;case 13:return G0(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Og(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(au,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Pt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cs(e,n),i=Qt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Dg(t,e,r,i,n);case 15:return V0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Fl(t,e),e.tag=1,At(r)?(t=!0,iu(e)):t=!1,cs(e,n),v0(e,r,i),If(e,r,i,n),Tf(null,e,r,!0,t,n);case 19:return Y0(t,e,n);case 22:return W0(t,e,n)}throw Error(R(156,e.tag))};function uw(t,e){return L_(t,e)}function qk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new qk(t,e,n,r)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===Dh)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return hi(n.children,i,s,e);case Ah:o=8,i|=8;break;case Kd:return t=Kt(12,n,e,i|2),t.elementType=Kd,t.lanes=s,t;case qd:return t=Kt(13,n,e,i),t.elementType=qd,t.lanes=s,t;case Qd:return t=Kt(19,n,e,i),t.elementType=Qd,t.lanes=s,t;case y_:return lc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:o=10;break e;case v_:o=9;break e;case Oh:o=11;break e;case Dh:o=14;break e;case cr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hi(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function lc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=y_,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mp(t,e,n,r,i,s,o,a,l){return t=new Xk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function Jk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cw(t){if(!t)return Lr;t=t._reactInternals;e:{if(Di(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(At(n))return u0(t,n,e)}return e}function dw(t,e,n,r,i,s,o,a,l){return t=mp(n,r,!0,t,i,s,o,a,l),t.context=cw(null),n=t.current,r=Ct(),i=xr(n),s=Wn(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,Ea(t,i,r),Ot(t,r),t}function uc(t,e,n,r){var i=e.current,s=Ct(),o=xr(i);return n=cw(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(pn(t,i,o,s),Dl(t,i,o)),o}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gp(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function Zk(){return null}var fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}cc.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));uc(t,e,null,null)};cc.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){uc(null,t,null,null)}),e[Yn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=V_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&$_(t)}};function yp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function eI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vu(o);s.call(u)}}var o=dw(e,r,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[Yn]=o.current,Ho(t.nodeType===8?t.parentNode:t),Ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vu(l);a.call(u)}}var l=mp(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=l,t[Yn]=l.current,Ho(t.nodeType===8?t.parentNode:t),Ei(function(){uc(e,l,n,r)}),l}function fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vu(o);a.call(l)}}uc(e,o,t,i)}else o=eI(n,e,t,i,r);return vu(o)}z_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(Fh(e,n|1),Ot(e,Ye()),!(ce&6)&&(ks=Ye()+500,Hr()))}break;case 13:Ei(function(){var r=Kn(t,1);if(r!==null){var i=Ct();pn(r,t,1,i)}}),gp(t,1)}};Uh=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=Ct();pn(e,t,134217728,n)}gp(t,134217728)}};B_=function(t){if(t.tag===13){var e=xr(t),n=Kn(t,e);if(n!==null){var r=Ct();pn(n,t,e,r)}gp(t,e)}};V_=function(){return me};W_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};af=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nc(r);if(!i)throw Error(R(90));w_(r),Zd(r,i)}}}break;case"textarea":S_(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};N_=dp;R_=Ei;var tI={usingClientEntryPoint:!1,Events:[Ca,Gi,nc,x_,T_,dp]},io={findFiberByHostInstance:ei,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nI={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=O_(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||Zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Ju=gl.inject(nI),Cn=gl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tI;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yp(e))throw Error(R(200));return Jk(t,e,null,n)};zt.createRoot=function(t,e){if(!yp(t))throw Error(R(299));var n=!1,r="",i=fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mp(t,1,!1,null,null,n,!1,r,i),t[Yn]=e.current,Ho(t.nodeType===8?t.parentNode:t),new vp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=O_(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Ei(t)};zt.hydrate=function(t,e,n){if(!dc(e))throw Error(R(200));return fc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!yp(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dw(e,null,t,1,n??null,i,!1,s,o),t[Yn]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cc(e)};zt.render=function(t,e,n){if(!dc(e))throw Error(R(200));return fc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!dc(t))throw Error(R(40));return t._reactRootContainer?(Ei(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};zt.unstable_batchedUpdates=dp;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return fc(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hw)}catch(t){console.error(t)}}hw(),d_.exports=zt;var rI=d_.exports,Kg=rI;Gd.createRoot=Kg.createRoot,Gd.hydrateRoot=Kg.hydrateRoot;/**
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
 */const pw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(t,e){if(!t)throw Fs(e)},Fs=function(t){return new Error("Firebase Database ("+pw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new sI;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gw=function(t){const e=mw(t);return _p.encodeByteArray(e,!0)},yu=function(t){return gw(t).replace(/\./g,"")},_u=function(t){try{return _p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oI(t){return vw(void 0,t)}function vw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aI(n)||(t[n]=vw(t[n],e[n]));return t}function aI(t){return t!=="__proto__"}/**
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
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>lI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_u(t[1]);return e&&JSON.parse(e)},wp=()=>{try{return uI()||cI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yw=t=>{var e,n;return(n=(e=wp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fI=t=>{const e=yw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_w=()=>{var t;return(t=wp())===null||t===void 0?void 0:t.config},ww=t=>{var e;return(e=wp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),a].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sw(){return pw.NODE_ADMIN===!0}function gI(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const yI="FirebaseError";class Gr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yI,Object.setPrototypeOf(this,Gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ia.prototype.create)}}class Ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_I(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gr(i,a,r)}}function _I(t,e){return t.replace(wI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wI=/\{\$([^}]+)}/g;/**
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
 */function ea(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
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
 */const Cw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ea(_u(s[0])||""),n=ea(_u(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},EI=function(t){const e=Cw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SI=function(t){const e=Cw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Is(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qg(s)&&qg(o)){if(!Eu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qg(t){return t!==null&&typeof t=="object"}/**
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
 */function Us(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class CI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kI(t,e){const n=new II(t,e);return n.subscribe.bind(n)}class II{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yd),i.error===void 0&&(i.error=yd),i.complete===void 0&&(i.complete=yd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yd(){}function pc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class TI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RI(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===Jr?void 0:t}function RI(t){return t.instantiationMode==="EAGER"}/**
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
 */class PI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const AI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},OI=ye.INFO,DI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},LI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sp{constructor(e){this.name=e,this._logLevel=OI,this._logHandler=LI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const MI=(t,e)=>e.some(n=>t instanceof n);let Qg,Xg;function FI(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kw=new WeakMap,Bf=new WeakMap,Iw=new WeakMap,_d=new WeakMap,Cp=new WeakMap;function jI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kw.set(n,t)}).catch(()=>{}),Cp.set(e,t),e}function zI(t){if(Bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bf.set(t,e)}let Vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){Vf=t(Vf)}function VI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wd(this),e,...n);return Iw.set(r,e.sort?e.sort():[e]),Nr(r)}:UI().includes(t)?function(...e){return t.apply(wd(this),e),Nr(kw.get(this))}:function(...e){return Nr(t.apply(wd(this),e))}}function WI(t){return typeof t=="function"?VI(t):(t instanceof IDBTransaction&&zI(t),MI(t,FI())?new Proxy(t,Vf):t)}function Nr(t){if(t instanceof IDBRequest)return jI(t);if(_d.has(t))return _d.get(t);const e=WI(t);return e!==t&&(_d.set(t,e),Cp.set(e,t)),e}const wd=t=>Cp.get(t);function $I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const HI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],Ed=new Map;function Jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ed.set(e,s),s}BI(t=>({...t,get:(e,n,r)=>Jg(e,n)||t.get(e,n,r),has:(e,n)=>!!Jg(e,n)||t.has(e,n)}));/**
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
 */class YI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wf="@firebase/app",Zg="0.9.19";/**
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
 */const Ci=new Sp("@firebase/app"),qI="@firebase/app-compat",QI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eb="@firebase/auth",tb="@firebase/auth-compat",nb="@firebase/database",rb="@firebase/database-compat",ib="@firebase/functions",sb="@firebase/functions-compat",ob="@firebase/installations",ab="@firebase/installations-compat",lb="@firebase/messaging",ub="@firebase/messaging-compat",cb="@firebase/performance",db="@firebase/performance-compat",fb="@firebase/remote-config",hb="@firebase/remote-config-compat",pb="@firebase/storage",mb="@firebase/storage-compat",gb="@firebase/firestore",vb="@firebase/firestore-compat",yb="firebase",_b="10.4.0";/**
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
 */const $f="[DEFAULT]",wb={[Wf]:"fire-core",[qI]:"fire-core-compat",[XI]:"fire-analytics",[QI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eb]:"fire-auth",[tb]:"fire-auth-compat",[nb]:"fire-rtdb",[rb]:"fire-rtdb-compat",[ib]:"fire-fn",[sb]:"fire-fn-compat",[ob]:"fire-iid",[ab]:"fire-iid-compat",[lb]:"fire-fcm",[ub]:"fire-fcm-compat",[cb]:"fire-perf",[db]:"fire-perf-compat",[fb]:"fire-rc",[hb]:"fire-rc-compat",[pb]:"fire-gcs",[mb]:"fire-gcs-compat",[gb]:"fire-fst",[vb]:"fire-fst-compat","fire-js":"fire-js",[yb]:"fire-js-all"};/**
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
 */const Su=new Map,Hf=new Map;function Eb(t,e){try{t.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(Hf.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Hf.set(e,t);for(const n of Su.values())Eb(n,t);return!0}function kp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rr=new Ia("app","Firebase",Sb);/**
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
 */class Cb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const js=_b;function bw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$f,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=_w()),!n)throw Rr.create("no-options");const s=Su.get(i);if(s){if(Eu(n,s.options)&&Eu(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new PI(i);for(const l of Hf.values())o.addComponent(l);const a=new Cb(n,r,o);return Su.set(i,a),a}function xw(t=$f){const e=Su.get(t);if(!e&&t===$f&&_w())return bw();if(!e)throw Rr.create("no-app",{appName:t});return e}function Pr(t,e,n){var r;let i=(r=wb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(a.join(" "));return}bs(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kb="firebase-heartbeat-database",Ib=1,ta="firebase-heartbeat-store";let Sd=null;function Tw(){return Sd||(Sd=$I(kb,Ib,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ta)}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Sd}async function bb(t){try{return await(await Tw()).transaction(ta).objectStore(ta).get(Nw(t))}catch(e){if(e instanceof Gr)Ci.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function ev(t,e){try{const r=(await Tw()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,Nw(t)),await r.done}catch(n){if(n instanceof Gr)Ci.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function Nw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xb=1024,Tb=30*24*60*60*1e3;class Nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Tb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tv(),{heartbeatsToSend:n,unsentEntries:r}=Rb(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tv(){return new Date().toISOString().substring(0,10)}function Rb(t,e=xb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gI()?vI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nv(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ab(t){bs(new Si("platform-logger",e=>new YI(e),"PRIVATE")),bs(new Si("heartbeat",e=>new Nb(e),"PRIVATE")),Pr(Wf,Zg,t),Pr(Wf,Zg,"esm2017"),Pr("fire-js","")}Ab("");var Ob="firebase",Db="10.4.0";/**
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
 */Pr(Ob,Db,"app");const rv="@firebase/database",iv="1.0.1";/**
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
 */let Rw="";function Lb(t){Rw=t}/**
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
 */class Mb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Fb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Pw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mb(e)}}catch{}return new Fb},ri=Pw("localStorage"),Gf=Pw("sessionStorage");/**
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
 */const fs=new Sp("@firebase/database"),Ub=function(){let t=1;return function(){return t++}}(),Aw=function(t){const e=xI(t),n=new CI;n.update(e);const r=n.digest();return _p.encodeByteArray(r)},ba=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ba.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let pi=null,sv=!0;const jb=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fs.logLevel=ye.VERBOSE,pi=fs.log.bind(fs),e&&Gf.set("logging_enabled",!0)):typeof t=="function"?pi=t:(pi=null,Gf.remove("logging_enabled"))},vt=function(...t){if(sv===!0&&(sv=!1,pi===null&&Gf.get("logging_enabled")===!0&&jb(!0)),pi){const e=ba.apply(null,t);pi(e)}},xa=function(t){return function(...e){vt(t,...e)}},Yf=function(...t){const e="FIREBASE INTERNAL ERROR: "+ba(...t);fs.error(e)},Qn=function(...t){const e=`FIREBASE FATAL ERROR: ${ba(...t)}`;throw fs.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+ba(...t);fs.warn(e)},zb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ip=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ki="[MIN_NAME]",Mr="[MAX_NAME]",zs=function(t,e){if(t===e)return 0;if(t===ki||e===Mr)return-1;if(e===ki||t===Mr)return 1;{const n=ov(t),r=ov(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Vb=function(t,e){return t===e?0:t<e?-1:1},so=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},bp=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=bp(t[e[r]]);return n+="}",n},Ow=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dw=function(t){D(!Ip(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Wb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$b=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Gb=new RegExp("^-?(0*)\\d{1,10}$"),Yb=-2147483648,Kb=2147483647,ov=function(t){if(Gb.test(t)){const e=Number(t);if(e>=Yb&&e<=Kb)return e}return null},Bs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},qb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},No=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Qb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Xb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hs.OWNER="owner";/**
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
 */const xp="5",Lw="v",Mw="s",Fw="r",Uw="f",jw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zw="ls",Bw="p",Kf="ac",Vw="websocket",Ww="long_polling";/**
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
 */class $w{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Hw(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===Vw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ww)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jb(t)&&(n.ns=t.namespace);const i=[];return Lt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Zb{constructor(){this.counters_={}}incrementCounter(e,n=1){Nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oI(this.counters_)}}/**
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
 */const Cd={},kd={};function Tp(t){const e=t.toString();return Cd[e]||(Cd[e]=new Zb),Cd[e]}function ex(t,e){const n=t.toString();return kd[n]||(kd[n]=e()),kd[n]}/**
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
 */class tx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Bs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const av="start",nx="close",rx="pLPCommand",ix="pRTLPCB",Gw="id",Yw="pw",Kw="ser",sx="cb",ox="seg",ax="ts",lx="d",ux="dframe",qw=1870,Qw=30,cx=qw-Qw,dx=25e3,fx=3e4;class Zi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xa(e),this.stats_=Tp(n),this.urlFn=l=>(this.appCheckToken&&(l[Kf]=this.appCheckToken),Hw(n,Ww,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fx)),Bb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Np((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===av)this.id=a,this.password=l;else if(o===nx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[av]="t",r[Kw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Lw]=xp,this.transportSessionId&&(r[Mw]=this.transportSessionId),this.lastSessionId&&(r[zw]=this.lastSessionId),this.applicationId&&(r[Bw]=this.applicationId),this.appCheckToken&&(r[Kf]=this.appCheckToken),typeof location<"u"&&location.hostname&&jw.test(location.hostname)&&(r[Fw]=Uw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wb()&&!$b()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gw(n),i=Ow(r,cx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ux]="t",r[Gw]=e,r[Yw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Np{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ub(),window[rx+this.uniqueCallbackIdentifier]=e,window[ix+this.uniqueCallbackIdentifier]=n,this.myIFrame=Np.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gw]=this.myID,e[Yw]=this.myPW,e[Kw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qw+r.length<=qw;){const o=this.pendingSegs.shift();r=r+"&"+ox+i+"="+o.seg+"&"+ax+i+"="+o.ts+"&"+lx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const hx=16384,px=45e3;let Cu=null;typeof MozWebSocket<"u"?Cu=MozWebSocket:typeof WebSocket<"u"&&(Cu=WebSocket);class ln{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xa(this.connId),this.stats_=Tp(n),this.connURL=ln.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Lw]=xp,typeof location<"u"&&location.hostname&&jw.test(location.hostname)&&(o[Fw]=Uw),n&&(o[Mw]=n),r&&(o[zw]=r),i&&(o[Kf]=i),s&&(o[Bw]=s),Hw(e,Vw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ri.set("previous_websocket_failure",!0);try{let r;Sw(),this.mySock=new Cu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Cu!==null&&!ln.forceDisallow_}static previouslyFailed(){return ri.isInMemoryStorage||ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ea(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ow(n,hx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(px))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ln.responsesRequiredToBeHealthy=2;ln.healthyTimeout=3e4;/**
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
 */class na{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zi,ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ln&&ln.isAvailable();let r=n&&!ln.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ln];else{const i=this.transports_=[];for(const s of na.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);na.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}na.globalTransportInitialized_=!1;/**
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
 */const mx=6e4,gx=5e3,vx=10*1024,yx=100*1024,Id="t",lv="d",_x="s",uv="r",wx="e",cv="o",dv="a",fv="n",hv="p",Ex="h";class Sx{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xa("c:"+this.id+":"),this.transportManager_=new na(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=No(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Id in e){const n=e[Id];n===dv?this.upgradeIfSecondaryHealthy_():n===uv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=so("t",e),r=so("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=so("t",e),r=so("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=so(Id,e);if(lv in e){const r=e[lv];if(n===Ex){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_x?this.onConnectionShutdown_(r):n===uv?this.onReset_(r):n===wx?Yf("Server Error: "+r):n===cv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xp!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),No(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):No(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Jw{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ku extends Jw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ep()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ku}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pv=32,mv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new _e("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function Zw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Cx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function eE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function et(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return St(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rp(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kx{constructor(e,n){this.errorPrefix_=n,this.parts_=eE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=mc(this.parts_[r]);nE(this)}}function Ix(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mc(e),nE(t)}function bx(t){const e=t.parts_.pop();t.byteLength_-=mc(e),t.parts_.length>0&&(t.byteLength_-=1)}function nE(t){if(t.byteLength_>mv)throw new Error(t.errorPrefix_+"has a key path longer than "+mv+" bytes ("+t.byteLength_+").");if(t.parts_.length>pv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pv+") or object contains a cycle "+Zr(t))}function Zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Pp extends Jw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Pp}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const oo=1e3,xx=60*5*1e3,gv=30*1e3,Tx=1.3,Nx=3e4,Rx="server_kill",vv=3;class $n extends Xw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oo,this.maxReconnectDelay_=xx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Sw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ku.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ze(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new hc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nn(e,"w")){const r=Is(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=EI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yf("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nx&&(this.reconnectDelay_=oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Tx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Sx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Dt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Dt(d),l())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zf(this.interruptReasons_)&&(this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>bp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vv&&(this.reconnectDelay_=gv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rw.replace(/\./g,"-")]=1,Ep()?e["framework.cordova"]=1:Ew()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ku.getInstance().currentlyOnline();return zf(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class gc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(ki,e),i=new oe(ki,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
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
 */let vl;class rE extends gc{static get __EMPTY_NODE(){return vl}static set __EMPTY_NODE(e){vl=e}compare(e,n){return zs(e.name,n.name)}isDefinedOn(e){throw Fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Mr,vl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,vl)}toString(){return".key"}}const mi=new rE;/**
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
 */class yl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??Rt.EMPTY_NODE,this.right=s??Rt.EMPTY_NODE}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class Px{copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,n=Rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yl(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new Px;/**
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
 */function Ax(t,e){return zs(t.name,e.name)}function Ap(t,e){return zs(t,e)}/**
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
 */let qf;function Ox(t){qf=t}const iE=function(t){return typeof t=="number"?"number:"+Dw(t):"string:"+t},sE=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nn(e,".sv"),"Priority must be a string or number.")}else D(t===qf||t.isEmpty(),"priority of unexpected type.");D(t===qf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yv;class it{constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sE(this.priorityNode_)}static set __childrenNodeConstructor(e){yv=e}static get __childrenNodeConstructor(){return yv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dw(this.value_):e+=this.value_,this.lazyHash_=Aw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=it.VALUE_TYPE_ORDER.indexOf(n),s=it.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let oE,aE;function Dx(t){oE=t}function Lx(t){aE=t}class Mx extends gc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Mr,new it("[PRIORITY-POST]",aE))}makePost(e,n){const r=oE(e);return new oe(n,new it("[PRIORITY-POST]",r))}toString(){return".priority"}}const je=new Mx;/**
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
 */const Fx=Math.log(2);class Ux{constructor(e){const n=s=>parseInt(Math.log(s)/Fx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Iu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ot(f,d.node,ot.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),w=i(g+1,u);return d=t[g],f=n?n(d):d,new ot(f,d.node,ot.BLACK,y,w)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,w){const I=d-y,m=d;d-=y;const h=i(I+1,m),v=t[I],p=n?n(v):v;g(new ot(p,v.node,w,null,h))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(y+1));w?f(I,ot.BLACK):(f(I,ot.BLACK),f(I,ot.RED))}return c},o=new Ux(t.length),a=s(o);return new Rt(r||e,a)};/**
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
 */let bd;const Ui={};class zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Ui&&je,"ChildrenNode.ts has not been loaded"),bd=bd||new zn({".priority":Ui},{".priority":je}),bd}get(e){const n=Is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rt?n:null}hasIndex(e){return Nn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Iu(r,e.getCompare()):a=Ui;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new zn(c,u)}addToIndexes(e,n){const r=wu(this.indexes_,(i,s)=>{const o=Is(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Iu(a,o.getCompare())}else return Ui;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=wu(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new zn(r,this.indexSet_)}}/**
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
 */let ao;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sE(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ao||(ao=new X(new Rt(Ap),null,zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ao}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ao:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ao:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{D(ie(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(je,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iE(this.getPriority().val())+":"),this.forEachChild(je,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Aw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ta?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(je),i=n.getIterator(je);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jx extends X{constructor(){super(new Rt(Ap),X.EMPTY_NODE,zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Ta=new jx;Object.defineProperties(oe,{MIN:{value:new oe(ki,X.EMPTY_NODE)},MAX:{value:new oe(Mr,Ta)}});rE.__EMPTY_NODE=X.EMPTY_NODE;it.__childrenNodeConstructor=X;Ox(Ta);Lx(Ta);/**
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
 */const zx=!0;function at(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,at(e))}if(!(t instanceof Array)&&zx){const n=[];let r=!1;if(Lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=Iu(n,Ax,o=>o.name,Ap);if(r){const o=Iu(n,je.getCompare());return new X(s,at(e),new zn({".priority":o},{".priority":je}))}else return new X(s,at(e),zn.Default)}else{let n=X.EMPTY_NODE;return Lt(t,(r,i)=>{if(Nn(t,r)&&r.substring(0,1)!=="."){const s=at(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(at(e))}}Dx(at);/**
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
 */class Op extends gc{constructor(e){super(),this.indexPath_=e,D(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zs(e.name,n.name):s}makePost(e,n){const r=at(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Ta);return new oe(Mr,e)}toString(){return eE(this.indexPath_,0).join("/")}}/**
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
 */class Bx extends gc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=at(e);return new oe(n,r)}toString(){return".value"}}const lE=new Bx;/**
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
 */function uE(t){return{type:"value",snapshotNode:t}}function xs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ra(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ia(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Dp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ra(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xs(n,r)):o.trackChildChange(ia(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(je,(i,s)=>{n.hasChild(i)||r.trackChildChange(ra(i,s))}),n.isLeafNode()||n.forEachChild(je,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ia(i,s,o))}else r.trackChildChange(xs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sa{constructor(e){this.indexedFilter_=new Dp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sa.getStartPost_(e),this.endPost_=sa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(je,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Wx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new sa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ia(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ra(n,d));const w=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(xs(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ra(u.name,u.node)),s.trackChildChange(xs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
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
 */class Lp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ki}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new Lp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $x(t){return t.loadsAllData()?new Dp(t.getIndex()):t.hasLimit()?new Wx(t):new sa(t)}function Hx(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Gx(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Yx(t,e){const n=t.copy();return n.index_=e,n}function _v(t){const e={};if(t.isDefault())return e;let n;if(t.index_===je?n="$priority":t.index_===lE?n="$value":t.index_===mi?n="$key":(D(t.index_ instanceof Op,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==je&&(e.i=t.index_.toString()),e}/**
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
 */class bu extends Xw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bu.getListenId_(e,r),a={};this.listens_[o]=a;const l=_v(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Is(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=bu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=_v(e._queryParams),r=e._path.toString(),i=new hc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Us(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Kx{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function xu(){return{value:null,children:new Map}}function cE(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,xu());const i=t.children.get(r);e=Ce(e),cE(i,e,n)}}function Qf(t,e,n){t.value!==null?n(e,t.value):qx(t,(r,i)=>{const s=new _e(e.toString()+"/"+r);Qf(i,s,n)})}function qx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Qx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Lt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ev=10*1e3,Xx=30*1e3,Jx=5*60*1e3;class Zx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Qx(e);const r=Ev+(Xx-Ev)*Math.random();No(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Lt(e,(i,s)=>{s>0&&Nn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),No(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jx))}}/**
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
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function dE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Tu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=dn.ACK_USER_WRITE,this.source=dE()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Tu(fe(),n,this.revert)}}else return D(ie(this.path)===e,"operationForChild called for unrelated child."),new Tu(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class oa{constructor(e,n){this.source=e,this.path=n,this.type=dn.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new oa(this.source,fe()):new oa(this.source,Ce(this.path))}}/**
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
 */class Ii{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=dn.OVERWRITE}operationForChild(e){return se(this.path)?new Ii(this.source,fe(),this.snap.getImmediateChild(e)):new Ii(this.source,Ce(this.path),this.snap)}}/**
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
 */class aa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=dn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Ii(this.source,fe(),n.value):new aa(this.source,fe(),n)}else return D(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new aa(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ur{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class eT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Vx(o.childName,o.snapshotNode))}),lo(t,i,"child_removed",e,r,n),lo(t,i,"child_added",e,r,n),lo(t,i,"child_moved",s,r,n),lo(t,i,"child_changed",e,r,n),lo(t,i,"value",e,r,n),i}function lo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>rT(t,a,l)),o.forEach(a=>{const l=nT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function nT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rT(t,e,n){if(e.childName==null||n.childName==null)throw Fs("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function vc(t,e){return{eventCache:t,serverCache:e}}function Ro(t,e,n,r){return vc(new Ur(e,n,r),t.serverCache)}function fE(t,e,n,r){return vc(t.eventCache,new Ur(e,n,r))}function Nu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xd;const iT=()=>(xd||(xd=new Rt(Vb)),xd);class be{constructor(e,n=iT()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return Lt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(se(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:et(new _e(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new be(null)}}set(e,n){if(se(e))return new be(n,this.children);{const r=ie(e),s=(this.children.get(r)||new be(null)).set(Ce(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(se(e))return n;{const r=ie(e),s=(this.children.get(r)||new be(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(et(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),et(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),et(n,i),r):new be(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(et(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new be(null))}}function Po(t,e,n){if(se(e))return new mn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=St(i,e);return s=s.updateChild(o,n),new mn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new mn(s)}}}function Sv(t,e,n){let r=t;return Lt(n,(i,s)=>{r=Po(r,et(e,i),s)}),r}function Cv(t,e){if(se(e))return mn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new mn(n)}}function Xf(t,e){return Li(t,e)!=null}function Li(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function kv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Ar(t,e){if(se(e))return t;{const n=Li(t,e);return n!=null?new mn(new be(n)):new mn(t.writeTree_.subtree(e))}}function Jf(t){return t.writeTree_.isEmpty()}function Ts(t,e){return hE(fe(),t.writeTree_,e)}function hE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=hE(et(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(et(t,".priority"),r)),n}}/**
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
 */function yc(t,e){return vE(e,t)}function sT(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Po(t.visibleWrites,e,n)),t.lastWriteId=r}function oT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lT(a,r.path)?i=!1:cn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return uT(t),!0;if(r.snap)t.visibleWrites=Cv(t.visibleWrites,r.path);else{const a=r.children;Lt(a,l=>{t.visibleWrites=Cv(t.visibleWrites,et(r.path,l))})}return!0}else return!1}function lT(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(et(t.path,n),e))return!0;return!1}function uT(t){t.visibleWrites=pE(t.allWrites,cT,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cT(t){return t.visible}function pE(t,e,n){let r=mn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)cn(n,o)?(a=St(n,o),r=Po(r,a,s.snap)):cn(o,n)&&(a=St(o,n),r=Po(r,fe(),s.snap.getChild(a)));else if(s.children){if(cn(n,o))a=St(n,o),r=Sv(r,a,s.children);else if(cn(o,n))if(a=St(o,n),se(a))r=Sv(r,fe(),s.children);else{const l=Is(s.children,ie(a));if(l){const u=l.getChild(Ce(a));r=Po(r,fe(),u)}}}else throw Fs("WriteRecord should have .snap or .children")}}return r}function mE(t,e,n,r,i){if(!r&&!i){const s=Li(t.visibleWrites,e);if(s!=null)return s;{const o=Ar(t.visibleWrites,e);if(Jf(o))return n;if(n==null&&!Xf(o,fe()))return null;{const a=n||X.EMPTY_NODE;return Ts(o,a)}}}else{const s=Ar(t.visibleWrites,e);if(!i&&Jf(s))return n;if(!i&&n==null&&!Xf(s,fe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(cn(u.path,e)||cn(e,u.path))},a=pE(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Ts(a,l)}}}function dT(t,e,n){let r=X.EMPTY_NODE;const i=Li(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(je,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ar(t.visibleWrites,e);return n.forEachChild(je,(o,a)=>{const l=Ts(Ar(s,new _e(o)),a);r=r.updateImmediateChild(o,l)}),kv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ar(t.visibleWrites,e);return kv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fT(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=et(e,n);if(Xf(t.visibleWrites,s))return null;{const o=Ar(t.visibleWrites,s);return Jf(o)?i.getChild(n):Ts(o,i.getChild(n))}}function hT(t,e,n,r){const i=et(e,n),s=Li(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ar(t.visibleWrites,i);return Ts(o,r.getNode().getImmediateChild(n))}else return null}function pT(t,e){return Li(t.visibleWrites,e)}function mT(t,e,n,r,i,s,o){let a;const l=Ar(t.visibleWrites,e),u=Li(l,fe());if(u!=null)a=u;else if(n!=null)a=Ts(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function gT(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function Ru(t,e,n,r){return mE(t.writeTree,t.treePath,e,n,r)}function Up(t,e){return dT(t.writeTree,t.treePath,e)}function Iv(t,e,n,r){return fT(t.writeTree,t.treePath,e,n,r)}function Pu(t,e){return pT(t.writeTree,et(t.treePath,e))}function vT(t,e,n,r,i,s){return mT(t.writeTree,t.treePath,e,n,r,i,s)}function jp(t,e,n){return hT(t.writeTree,t.treePath,e,n)}function gE(t,e){return vE(et(t.treePath,e),t.writeTree)}function vE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class yT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ia(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ra(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,xs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ia(r,e.snapshotNode,i.oldSnap));else throw Fs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _T{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const yE=new _T;class zp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),s=vT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function wT(t){return{filter:t}}function ET(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ST(t,e,n,r,i){const s=new yT;let o,a;if(n.type===dn.OVERWRITE){const u=n;u.source.fromUser?o=Zf(t,e,u.path,u.snap,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!se(u.path),o=Au(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===dn.MERGE){const u=n;u.source.fromUser?o=kT(t,e,u.path,u.children,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=eh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===dn.ACK_USER_WRITE){const u=n;u.revert?o=xT(t,e,u.path,r,i,s):o=IT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===dn.LISTEN_COMPLETE)o=bT(t,e,n.path,r,s);else throw Fs("Unknown operation type: "+n.type);const l=s.getChanges();return CT(e,o,l),{viewCache:o,changes:l}}function CT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Nu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(uE(Nu(e)))}}function _E(t,e,n,r,i,s){const o=e.eventCache;if(Pu(r,n)!=null)return e;{let a,l;if(se(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=bi(e),c=u instanceof X?u:X.EMPTY_NODE,d=Up(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ru(r,bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ie(n);if(u===".priority"){D(Fr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Iv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Iv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=jp(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ro(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Au(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(se(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=ie(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const y=Ce(n),I=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),I):u=c.updateChild(l.getNode(),g,I,y,yE,null)}const d=fE(e,u,l.isFullyInitialized()||se(n),c.filtersNodes()),f=new zp(i,d,s);return _E(t,d,n,i,f,a)}function Zf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new zp(i,e,s);if(se(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ro(e,u,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ro(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Ce(n),g=a.getNode().getImmediateChild(d);let y;if(se(f))y=r;else{const w=c.getCompleteChild(d);w!=null?Zw(f)===".priority"&&w.getChild(tE(f)).isEmpty()?y=w:y=w.updateChild(f,r):y=X.EMPTY_NODE}if(g.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=Ro(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function bv(t,e){return t.eventCache.isCompleteForChild(e)}function kT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=et(n,l);bv(e,ie(c))&&(a=Zf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=et(n,l);bv(e,ie(c))||(a=Zf(t,a,c,u,i,s,o))}),a}function xv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function eh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;se(n)?u=r:u=new be(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=xv(t,g,f);l=Au(t,l,new _e(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),w=xv(t,y,f);l=Au(t,l,new _e(d),w,i,s,o,a)}}),l}function IT(t,e,n,r,i,s,o){if(Pu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Au(t,e,n,l.getNode().getChild(n),i,s,a,o);if(se(n)){let u=new be(null);return l.getNode().forEachChild(mi,(c,d)=>{u=u.set(new _e(c),d)}),eh(t,e,n,u,i,s,a,o)}else return e}else{let u=new be(null);return r.foreach((c,d)=>{const f=et(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),eh(t,e,n,u,i,s,a,o)}}function bT(t,e,n,r,i){const s=e.serverCache,o=fE(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return _E(t,o,n,r,yE,i)}function xT(t,e,n,r,i,s){let o;if(Pu(r,n)!=null)return e;{const a=new zp(r,e,i),l=e.eventCache.getNode();let u;if(se(n)||ie(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ru(r,bi(e));else{const d=e.serverCache.getNode();D(d instanceof X,"serverChildren would be complete if leaf node"),c=Up(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ie(n);let d=jp(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,X.EMPTY_NODE,Ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ru(r,bi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Pu(r,fe())!=null,Ro(e,u,o,t.filter.filtersNodes())}}/**
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
 */class TT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Dp(r.getIndex()),s=$x(r);this.processor_=wT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),c=new Ur(l,o.isFullyInitialized(),i.filtersNodes()),d=new Ur(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=vc(d,c),this.eventGenerator_=new eT(this.query_)}get query(){return this.query_}}function NT(t){return t.viewCache_.serverCache.getNode()}function RT(t){return Nu(t.viewCache_)}function PT(t,e){const n=bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Tv(t){return t.eventRegistrations_.length===0}function AT(t,e){t.eventRegistrations_.push(e)}function Nv(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Rv(t,e,n,r){e.type===dn.MERGE&&e.source.queryId!==null&&(D(bi(t.viewCache_),"We should always have a full cache before handling merges"),D(Nu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ST(t.processor_,i,e,n,r);return ET(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function OT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(je,(s,o)=>{r.push(xs(s,o))}),n.isFullyInitialized()&&r.push(uE(n.getNode())),wE(t,r,n.getNode(),e)}function wE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tT(t.eventGenerator_,e,n,i)}/**
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
 */let Ou;class EE{constructor(){this.views=new Map}}function DT(t){D(!Ou,"__referenceConstructor has already been defined"),Ou=t}function LT(){return D(Ou,"Reference.ts has not been loaded"),Ou}function MT(t){return t.views.size===0}function Bp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),Rv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Rv(o,e,n,r));return s}}function SE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ru(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=Up(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=vc(new Ur(a,l,!1),new Ur(r,i,!1));return new TT(e,u)}return o}function FT(t,e,n,r,i,s){const o=SE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),AT(o,n),OT(o,n)}function UT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=jr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Nv(u,n,r)),Tv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Nv(l,n,r)),Tv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!jr(t)&&s.push(new(LT())(e._repo,e._path)),{removed:s,events:o}}function CE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Or(t,e){let n=null;for(const r of t.views.values())n=n||PT(r,e);return n}function kE(t,e){if(e._queryParams.loadsAllData())return _c(t);{const r=e._queryIdentifier;return t.views.get(r)}}function IE(t,e){return kE(t,e)!=null}function jr(t){return _c(t)!=null}function _c(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Du;function jT(t){D(!Du,"__referenceConstructor has already been defined"),Du=t}function zT(){return D(Du,"Reference.ts has not been loaded"),Du}let BT=1;class Pv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=gT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bE(t,e,n,r,i){return sT(t.pendingWriteTree_,e,n,r,i),i?Ra(t,new Ii(dE(),e,n)):[]}function ii(t,e,n=!1){const r=oT(t.pendingWriteTree_,e);if(aT(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(fe(),!0):Lt(r.children,o=>{s=s.set(new _e(o),!0)}),Ra(t,new Tu(r.path,s,n))}else return[]}function Na(t,e,n){return Ra(t,new Ii(Mp(),e,n))}function VT(t,e,n){const r=be.fromObject(n);return Ra(t,new aa(Mp(),e,r))}function WT(t,e){return Ra(t,new oa(Mp(),e))}function $T(t,e,n){const r=Wp(t,n);if(r){const i=$p(r),s=i.path,o=i.queryId,a=St(s,e),l=new oa(Fp(o),a);return Hp(t,s,l)}else return[]}function Lu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||IE(o,e))){const l=UT(o,e,n,r);MT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>jr(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=YT(f);for(let y=0;y<g.length;++y){const w=g[y],I=w.query,m=RE(t,w);t.listenProvider_.startListening(Ao(I),la(t,I),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ao(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(wc(f));t.listenProvider_.stopListening(Ao(f),g)}))}KT(t,u)}return a}function xE(t,e,n,r){const i=Wp(t,r);if(i!=null){const s=$p(i),o=s.path,a=s.queryId,l=St(o,e),u=new Ii(Fp(a),l,n);return Hp(t,o,u)}else return[]}function HT(t,e,n,r){const i=Wp(t,r);if(i){const s=$p(i),o=s.path,a=s.queryId,l=St(o,e),u=be.fromObject(n),c=new aa(Fp(a),l,u);return Hp(t,o,c)}else return[]}function th(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const y=St(f,i);s=s||Or(g,y),o=o||jr(g)});let a=t.syncPointTree_.get(i);a?(o=o||jr(a),s=s||Or(a,fe())):(a=new EE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const w=Or(y,fe());w&&(s=s.updateImmediateChild(g,w))}));const u=IE(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=wc(e);D(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=qT();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=yc(t.pendingWriteTree_,i);let d=FT(a,e,n,c,s,l);if(!u&&!o&&!r){const f=kE(a,e);d=d.concat(QT(t,e,f))}return d}function Vp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=St(o,e),u=Or(a,l);if(u)return u});return mE(i,e,s,n,!0)}function GT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=St(u,n);r=r||Or(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Or(i,fe()):(i=new EE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ur(r,!0,!1):null,a=yc(t.pendingWriteTree_,e._path),l=SE(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return RT(l)}function Ra(t,e){return TE(e,t.syncPointTree_,null,yc(t.pendingWriteTree_,fe()))}function TE(t,e,n,r){if(se(t.path))return NE(t,e,n,r);{const i=e.get(fe());n==null&&i!=null&&(n=Or(i,fe()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=gE(r,o);s=s.concat(TE(a,l,u,c))}return i&&(s=s.concat(Bp(i,t,r,n))),s}}function NE(t,e,n,r){const i=e.get(fe());n==null&&i!=null&&(n=Or(i,fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=gE(r,o),c=t.operationForChild(o);c&&(s=s.concat(NE(c,a,l,u)))}),i&&(s=s.concat(Bp(i,t,r,n))),s}function RE(t,e){const n=e.query,r=la(t,n);return{hashFn:()=>(NT(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?$T(t,n._path,r):WT(t,n._path);{const s=Hb(i,n);return Lu(t,n,null,s)}}}}function la(t,e){const n=wc(e);return t.queryToTagMap.get(n)}function wc(t){return t._path.toString()+"$"+t._queryIdentifier}function Wp(t,e){return t.tagToQueryMap.get(e)}function $p(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Hp(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=yc(t.pendingWriteTree_,e);return Bp(r,n,i,null)}function YT(t){return t.fold((e,n,r)=>{if(n&&jr(n))return[_c(n)];{let i=[];return n&&(i=CE(n)),Lt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ao(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zT())(t._repo,t._path):t}function KT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=wc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function qT(){return BT++}function QT(t,e,n){const r=e._path,i=la(t,e),s=RE(t,n),o=t.listenProvider_.startListening(Ao(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)D(!jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!se(u)&&c&&jr(c))return[_c(c).query];{let f=[];return c&&(f=f.concat(CE(c).map(g=>g.query))),Lt(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ao(c),la(t,c))}}return o}/**
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
 */class Gp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gp(n)}node(){return this.node_}}class Yp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=et(this.path_,e);return new Yp(this.syncTree_,n)}node(){return Vp(this.syncTree_,this.path_)}}const XT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Av=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZT(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},ZT=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eN=function(t,e,n,r){return Kp(e,new Yp(n,t),r)},PE=function(t,e,n){return Kp(t,new Gp(e),n)};function Kp(t,e,n){const r=t.getPriority().val(),i=Av(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Av(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new it(a,at(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new it(i))),o.forEachChild(je,(a,l)=>{const u=Kp(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class qp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Qp(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=ie(n);for(;i!==null;){const s=Is(r.node.children,i)||{children:{},childCount:0};r=new qp(i,r,s),n=Ce(n),i=ie(n)}return r}function Vs(t){return t.node.value}function AE(t,e){t.node.value=e,nh(t)}function OE(t){return t.node.childCount>0}function tN(t){return Vs(t)===void 0&&!OE(t)}function Ec(t,e){Lt(t.node.children,(n,r)=>{e(new qp(n,t,r))})}function DE(t,e,n,r){n&&!r&&e(t),Ec(t,i=>{DE(i,e,!0,r)}),n&&r&&e(t)}function nN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pa(t){return new _e(t.parent===null?t.name:Pa(t.parent)+"/"+t.name)}function nh(t){t.parent!==null&&rN(t.parent,t.name,t)}function rN(t,e,n){const r=tN(n),i=Nn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,nh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nh(t))}/**
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
 */const iN=/[\[\].#$\/\u0000-\u001F\u007F]/,sN=/[\[\].#$\u0000-\u001F\u007F]/,Td=10*1024*1024,Xp=function(t){return typeof t=="string"&&t.length!==0&&!iN.test(t)},LE=function(t){return typeof t=="string"&&t.length!==0&&!sN.test(t)},oN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),LE(t)},Ov=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ip(t)||t&&typeof t=="object"&&Nn(t,".sv")},Sc=function(t,e,n,r){r&&e===void 0||Jp(pc(t,"value"),e,n)},Jp=function(t,e,n){const r=n instanceof _e?new kx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zr(r)+" with contents = "+e.toString());if(Ip(e))throw new Error(t+"contains "+e.toString()+" "+Zr(r));if(typeof e=="string"&&e.length>Td/3&&mc(e)>Td)throw new Error(t+"contains a string greater than "+Td+" utf8 bytes "+Zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Xp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ix(r,o),Jp(t,a,r),bx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Zr(r)+" in addition to actual children.")}},aN=function(t,e,n,r){if(!(r&&n===void 0)&&!Xp(n))throw new Error(pc(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Zp=function(t,e,n,r){if(!(r&&n===void 0)&&!LE(n))throw new Error(pc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zp(t,e,n,r)},uN=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oN(n))throw new Error(pc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class dN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function em(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Rp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ME(t,e,n){em(t,n),FE(t,r=>Rp(r,e))}function xn(t,e,n){em(t,n),FE(t,r=>cn(r,e)||cn(e,r))}function FE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(fN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();pi&&vt("event: "+n.toString()),Bs(r)}}}/**
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
 */const hN="repo_interrupt",pN=25;class mN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xu(),this.transactionQueueTree_=new qp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gN(t,e,n){if(t.stats_=Tp(t.repoInfo_),t.forceRestClient_||qb())t.server_=new bu(t.repoInfo_,(r,i,s,o)=>{Dv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Lv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{Dv(t,r,i,s,o)},r=>{Lv(t,r)},r=>{yN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ex(t.repoInfo_,()=>new Zx(t.stats_,t.server_)),t.infoData_=new Kx,t.infoSyncTree_=new Pv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Na(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nm(t,"connected",!1),t.serverSyncTree_=new Pv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);xn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function vN(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tm(t){return XT({timestamp:vN(t)})}function Dv(t,e,n,r,i){t.dataUpdateCount++;const s=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=wu(n,u=>at(u));o=HT(t.serverSyncTree_,s,l,i)}else{const l=at(n);o=xE(t.serverSyncTree_,s,l,i)}else if(r){const l=wu(n,u=>at(u));o=VT(t.serverSyncTree_,s,l)}else{const l=at(n);o=Na(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=kc(t,s)),xn(t.eventQueue_,a,o)}function Lv(t,e){nm(t,"connected",e),e===!1&&EN(t)}function yN(t,e){Lt(e,(n,r)=>{nm(t,n,r)})}function nm(t,e,n){const r=new _e("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(r,i);const s=Na(t.infoSyncTree_,r,i);xn(t.eventQueue_,r,s)}function UE(t){return t.nextWriteId_++}function _N(t,e,n){const r=GT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=at(i).withIndex(e._queryParams.getIndex());th(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Na(t.serverSyncTree_,e._path,s);else{const a=la(t.serverSyncTree_,e);o=xE(t.serverSyncTree_,e._path,s,a)}return xn(t.eventQueue_,e._path,o),Lu(t.serverSyncTree_,e,n,null,!0),s},i=>(Cc(t,"get for query "+Ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function wN(t,e,n,r,i){Cc(t,"set",{path:e.toString(),value:n,priority:r});const s=tm(t),o=at(n,r),a=Vp(t.serverSyncTree_,e),l=PE(o,a,s),u=UE(t),c=bE(t.serverSyncTree_,e,l,u,!0);em(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||Dt("set at "+e+" failed: "+f);const w=ii(t.serverSyncTree_,u,!y);xn(t.eventQueue_,e,w),kN(t,i,f,g)});const d=WE(t,e);kc(t,d),xn(t.eventQueue_,d,[])}function EN(t){Cc(t,"onDisconnectEvents");const e=tm(t),n=xu();Qf(t.onDisconnect_,fe(),(i,s)=>{const o=eN(i,s,t.serverSyncTree_,e);cE(n,i,o)});let r=[];Qf(n,fe(),(i,s)=>{r=r.concat(Na(t.serverSyncTree_,i,s));const o=WE(t,i);kc(t,o)}),t.onDisconnect_=xu(),xn(t.eventQueue_,fe(),r)}function SN(t,e,n){let r;ie(e._path)===".info"?r=th(t.infoSyncTree_,e,n):r=th(t.serverSyncTree_,e,n),ME(t.eventQueue_,e._path,r)}function Mv(t,e,n){let r;ie(e._path)===".info"?r=Lu(t.infoSyncTree_,e,n):r=Lu(t.serverSyncTree_,e,n),ME(t.eventQueue_,e._path,r)}function CN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hN)}function Cc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function kN(t,e,n,r){e&&Bs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function jE(t,e,n){return Vp(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function rm(t,e=t.transactionQueueTree_){if(e||Ic(t,e),Vs(e)){const n=BE(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&IN(t,Pa(e),n)}else OE(e)&&Ec(e,n=>{rm(t,n)})}function IN(t,e,n){const r=n.map(u=>u.currentWriteId),i=jE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];D(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=St(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Cc(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ii(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ic(t,Qp(t.transactionQueueTree_,e)),rm(t,t.transactionQueueTree_),xn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Bs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Dt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}kc(t,e)}},o)}function kc(t,e){const n=zE(t,e),r=Pa(n),i=BE(t,n);return bN(t,i,r),r}function bN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=St(n,l.path);let c=!1,d;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ii(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pN)c=!0,d="maxretry",i=i.concat(ii(t.serverSyncTree_,l.currentWriteId,!0));else{const f=jE(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Jp("transaction failed: Data returned ",g,l.path);let y=at(g);typeof g=="object"&&g!=null&&Nn(g,".priority")||(y=y.updatePriority(f.getPriority()));const I=l.currentWriteId,m=tm(t),h=PE(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=UE(t),o.splice(o.indexOf(I),1),i=i.concat(bE(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ii(t.serverSyncTree_,I,!0))}else c=!0,d="nodata",i=i.concat(ii(t.serverSyncTree_,l.currentWriteId,!0))}xn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ic(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Bs(r[a]);rm(t,t.transactionQueueTree_)}function zE(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Vs(r)===void 0;)r=Qp(r,n),e=Ce(e),n=ie(e);return r}function BE(t,e){const n=[];return VE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function VE(t,e,n){const r=Vs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ec(e,i=>{VE(t,i,n)})}function Ic(t,e){const n=Vs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,AE(e,n.length>0?n:void 0)}Ec(e,r=>{Ic(t,r)})}function WE(t,e){const n=Pa(zE(t,e)),r=Qp(t.transactionQueueTree_,e);return nN(r,i=>{Nd(t,i)}),Nd(t,r),DE(r,i=>{Nd(t,i)}),n}function Nd(t,e){const n=Vs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?AE(e,void 0):n.length=s+1,xn(t.eventQueue_,Pa(e),i);for(let o=0;o<r.length;o++)Bs(r[o])}}/**
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
 */function xN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function TN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fv=function(t,e){const n=NN(t),r=n.namespace;n.domain==="firebase.com"&&Qn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $w(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},NN=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=xN(t.substring(c,d)));const f=TN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class $E{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class HE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class GE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ws{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:Zw(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=wv(this._queryParams),n=bp(e);return n==="{}"?"default":n}get _queryObject(){return wv(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof Ws))return!1;const n=this._repo===e._repo,r=Rp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cx(this._path)}}function RN(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function im(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===mi){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ki)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Mr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===je){if(e!=null&&!Ov(e)||n!=null&&!Ov(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(D(t.getIndex()instanceof Op||t.getIndex()===lE,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function YE(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Rn extends Ws{constructor(e,n){super(e,n,new Lp,!1)}get parent(){const e=tE(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ns{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=ua(this.ref,e);return new Ns(this._node.getChild(n),r,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ns(i,ua(this.ref,r),je)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xi(t,e){return t=bt(t),t._checkNotDeleted("ref"),e!==void 0?ua(t._root,e):t._root}function ua(t,e){return t=bt(t),ie(t._path)===null?lN("child","path",e,!1):Zp("child","path",e,!1),new Rn(t._repo,et(t._path,e))}function PN(t,e){t=bt(t),uN("set",t._path),Sc("set",e,t._path,!1);const n=new hc;return wN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function AN(t){t=bt(t);const e=new GE(()=>{}),n=new bc(e);return _N(t._repo,t,n).then(r=>new Ns(r,new Rn(t._repo,t._path),t._queryParams.getIndex()))}class bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $E("value",this,new Ns(e.snapshotNode,new Rn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new HE(this,e,n):null}matches(e){return e instanceof bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class sm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new HE(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const r=ua(new Rn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new $E(e.type,this,new Ns(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ON(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Mv(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new GE(n,s||void 0),a=e==="value"?new bc(o):new sm(e,o);return SN(t._repo,t,a),()=>Mv(t._repo,t,a)}function ca(t,e,n,r){return ON(t,"value",e,n,r)}class xc{}class DN extends xc{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Sc("endAt",this._value,e._path,!0);const n=Gx(e._queryParams,this._value,this._key);if(YE(n),im(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ws(e._repo,e._path,n,e._orderByCalled)}}class LN extends xc{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Sc("startAt",this._value,e._path,!0);const n=Hx(e._queryParams,this._value,this._key);if(YE(n),im(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ws(e._repo,e._path,n,e._orderByCalled)}}class MN extends xc{constructor(e){super(),this._path=e}_apply(e){RN(e,"orderByChild");const n=new _e(this._path);if(se(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Op(n),i=Yx(e._queryParams,r);return im(i),new Ws(e._repo,e._path,i,!0)}}function FN(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Zp("orderByChild","path",t,!1),new MN(t)}class UN extends xc{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Sc("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new DN(this._value,this._key)._apply(new LN(this._value,this._key)._apply(e))}}function jN(t,e){return aN("equalTo","key",e,!0),new UN(t,e)}function KE(t,...e){let n=bt(t);for(const r of e)n=r._apply(n);return n}DT(Rn);jT(Rn);/**
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
 */const zN="FIREBASE_DATABASE_EMULATOR_HOST",rh={};let BN=!1;function VN(t,e,n,r){t.repoInfo_=new $w(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function WN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[zN]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Fv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new hs(hs.OWNER):new Xb(t.name,t.options,e);cN("Invalid Firebase Database URL",o),se(o.path)||Qn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=HN(a,t,c,new Qb(t.name,n));return new GN(d,t)}function $N(t,e){const n=rh[e];(!n||n[t.key]!==t)&&Qn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CN(t),delete n[t.key]}function HN(t,e,n,r){let i=rh[e.name];i||(i={},rh[e.name]=i);let s=i[t.toURLString()];return s&&Qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mN(t,BN,n,r),i[t.toURLString()]=s,s}class GN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&($N(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qn("Cannot call "+e+" on a deleted database.")}}function qE(t=xw(),e){const n=kp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=fI("database");r&&YN(n,...r)}return n}function YN(t,e,n,r={}){t=bt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new hs(hs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hI(r.mockUserToken,t.app.options.projectId);s=new hs(o)}VN(i,e,n,s)}/**
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
 */function KN(t){Lb(js),bs(new Si("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return WN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pr(rv,iv,t),Pr(rv,iv,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KN();function om(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function QE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qN=QE,XE=new Ia("auth","Firebase",QE());/**
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
 */const Mu=new Sp("@firebase/auth");function QN(t,...e){Mu.logLevel<=ye.WARN&&Mu.warn(`Auth (${js}): ${t}`,...e)}function Bl(t,...e){Mu.logLevel<=ye.ERROR&&Mu.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw am(t,...e)}function In(t,...e){return am(t,...e)}function JE(t,e,n){const r=Object.assign(Object.assign({},qN()),{[e]:n});return new Ia("auth","Firebase",r).create(e,{appName:t.name})}function XN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),JE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XE.create(t,...e)}function ne(t,e,...n){if(!t)throw am(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Xn(t,e){t||Bn(e)}/**
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
 */function ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JN(){return Uv()==="http:"||Uv()==="https:"}function Uv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JN()||pI()||"connection"in navigator)?navigator.onLine:!0}function eR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ep()||Ew()}get(){return ZN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lm(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ZE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nR=new Aa(3e4,6e4);function e1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oa(t,e,n,r,i={}){return t1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Us(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ZE.fetch()(n1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function t1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tR),e);try{const i=new iR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _l(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _l(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw JE(t,c,u);Tn(t,c)}}catch(i){if(i instanceof Gr)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function rR(t,e,n,r,i={}){const s=await Oa(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function n1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lm(t.config,i):`${t.config.apiScheme}://${i}`}class iR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),nR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=In(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function sR(t,e){return Oa(t,"POST","/v1/accounts:delete",e)}async function oR(t,e){return Oa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aR(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=um(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(Rd(i.auth_time)),issuedAtTime:Oo(Rd(i.iat)),expirationTime:Oo(Rd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rd(t){return Number(t)*1e3}function um(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=_u(n);return i?JSON.parse(i):(Bl("Failed to decode base64 JWT payload"),null)}catch(i){return Bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lR(t){const e=um(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function da(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gr&&uR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class r1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await da(t,oR(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hR(s.providerUserInfo):[],a=fR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new r1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function dR(t){const e=bt(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hR(t){return t.map(e=>{var{providerId:n}=e,r=om(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pR(t,e){const n=await t1(t,{},async()=>{const r=Us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=n1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ZE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fa;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fa,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
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
 */function lr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=om(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new r1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await da(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aR(this,e)}reload(){return dR(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await da(this,sR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:p,isAnonymous:S,providerData:P,stsTokenManager:T}=n;ne(v&&T,e,"internal-error");const M=fa.fromJSON(this.name,T);ne(typeof v=="string",e,"internal-error"),lr(d,e.name),lr(f,e.name),ne(typeof p=="boolean",e,"internal-error"),ne(typeof S=="boolean",e,"internal-error"),lr(g,e.name),lr(y,e.name),lr(w,e.name),lr(I,e.name),lr(m,e.name),lr(h,e.name);const $=new gi({uid:v,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:M,createdAt:m,lastLoginAt:h});return P&&Array.isArray(P)&&($.providerData=P.map(H=>Object.assign({},H))),I&&($._redirectEventId=I),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new fa;i.updateFromServerResponse(n);const s=new gi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(s),s}}/**
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
 */const jv=new Map;function Vn(t){Xn(t instanceof Function,"Expected a class definition");let e=jv.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jv.set(t,e),e)}/**
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
 */class i1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i1.type="NONE";const zv=i1;/**
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
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(Vn(zv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vn(zv);const o=Vl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=gi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ps(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ps(s,e,r))}}/**
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
 */function Bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u1(e))return"Blackberry";if(c1(e))return"Webos";if(cm(e))return"Safari";if((e.includes("chrome/")||o1(e))&&!e.includes("edge/"))return"Chrome";if(l1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s1(t=_t()){return/firefox\//i.test(t)}function cm(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o1(t=_t()){return/crios\//i.test(t)}function a1(t=_t()){return/iemobile/i.test(t)}function l1(t=_t()){return/android/i.test(t)}function u1(t=_t()){return/blackberry/i.test(t)}function c1(t=_t()){return/webos/i.test(t)}function Tc(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mR(t=_t()){var e;return Tc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gR(){return mI()&&document.documentMode===10}function d1(t=_t()){return Tc(t)||l1(t)||c1(t)||u1(t)||/windows phone/i.test(t)||a1(t)}function vR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function f1(t,e=[]){let n;switch(t){case"Browser":n=Bv(_t());break;case"Worker":n=`${Bv(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class yR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _R(t,e={}){return Oa(t,"GET","/v2/passwordPolicy",e1(t,e))}/**
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
 */const wR=6;class ER{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class SR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new yR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _R(this),n=new ER(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nc(t){return bt(t)}class Vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function CR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=In("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CR().appendChild(r)})}function IR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bR(t,e){const n=kp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eu(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function xR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TR(t,e,n){const r=Nc(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=h1(e),{host:o,port:a}=NR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RR()}function h1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NR(t){const e=h1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wv(o)}}}function Wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class p1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}/**
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
 */async function ms(t,e){return rR(t,"POST","/v1/accounts:signInWithIdp",e1(t,e))}/**
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
 */const PR="http://localhost";class Ti extends p1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=om(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:PR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Us(n)}return e}}/**
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
 */class dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends Da{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class wn extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class mr extends Da{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class gr extends Da{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
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
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gi._fromIdTokenResponse(e,r,i),o=$v(r);return new Rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$v(r);return new Rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $v(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uu extends Gr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uu(e,n,r,i)}}function m1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(t,s,e,r):s})}async function AR(t,e,n=!1){const r=await da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
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
 */async function OR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await da(t,m1(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=um(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),Rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
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
 */async function DR(t,e,n=!1){const r="signIn",i=await m1(t,r,e),s=await Rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function LR(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function MR(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}function g1(t,e,n,r){return bt(t).onAuthStateChanged(e,n,r)}function FR(t){return bt(t).signOut()}const ju="__sak";/**
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
 */class v1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function UR(){const t=_t();return cm(t)||Tc(t)}const jR=1e3,zR=10;class y1 extends v1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UR()&&vR(),this.fallbackToPolling=d1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y1.type="LOCAL";const BR=y1;/**
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
 */class _1 extends v1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_1.type="SESSION";const w1=_1;/**
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
 */function VR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await VR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
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
 */function fm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function $R(t){bn().location.href=t}/**
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
 */function E1(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function HR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YR(){return E1()?self:null}/**
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
 */const S1="firebaseLocalStorageDb",KR=1,zu="firebaseLocalStorage",C1="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function qR(){const t=indexedDB.deleteDatabase(S1);return new La(t).toPromise()}function sh(){const t=indexedDB.open(S1,KR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zu,{keyPath:C1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zu)?e(r):(r.close(),await qR(),e(await sh()))})})}async function Hv(t,e,n){const r=Pc(t,!0).put({[C1]:e,value:n});return new La(r).toPromise()}async function QR(t,e){const n=Pc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=Pc(t,!0).delete(e);return new La(n).toPromise()}const XR=800,JR=3;class k1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(YR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HR(),!this.activeServiceWorker)return;this.sender=new WR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sh();return await Hv(e,ju,"1"),await Gv(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pc(i,!1).getAll();return new La(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k1.type="LOCAL";const ZR=k1;new Aa(3e4,6e4);/**
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
 */function I1(t,e){return e?Vn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hm extends p1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eP(t){return DR(t.auth,new hm(t),t.bypassAuthState)}function tP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),OR(n,new hm(t),t.bypassAuthState)}async function nP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),AR(n,new hm(t),t.bypassAuthState)}/**
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
 */class b1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:Tn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rP=new Aa(2e3,1e4);async function iP(t,e,n){const r=Nc(t);XN(t,e,dm);const i=I1(r,n);return new si(r,"signInViaPopup",e,i).executeNotNull()}class si extends b1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=fm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}si.currentPopupAction=null;/**
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
 */const sP="pendingRedirect",Wl=new Map;class oP extends b1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await aP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aP(t,e){const n=cP(e),r=uP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lP(t,e){Wl.set(t._key(),e)}function uP(t){return Vn(t._redirectPersistence)}function cP(t){return Vl(sP,t.config.apiKey,t.name)}async function dP(t,e,n=!1){const r=Nc(t),i=I1(r,e),o=await new oP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fP=10*60*1e3;class hP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yv(e))}saveEventToCache(e){this.cachedEventUids.add(Yv(e)),this.lastProcessedEventTime=Date.now()}}function Yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x1(t);default:return!1}}/**
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
 */async function mP(t,e={}){return Oa(t,"GET","/v1/projects",e)}/**
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
 */const gP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vP=/^https?/;async function yP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mP(t);for(const n of e)try{if(_P(n))return}catch{}Tn(t,"unauthorized-domain")}function _P(t){const e=ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vP.test(n))return!1;if(gP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wP=new Aa(3e4,6e4);function Kv(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EP(t){return new Promise((e,n)=>{var r,i,s;function o(){Kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kv(),n(In(t,"network-request-failed"))},timeout:wP.get()})}if(!((i=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bn().gapi)===null||s===void 0)&&s.load)o();else{const a=IR("iframefcb");return bn()[a]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},kR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $l=null,e})}let $l=null;function SP(t){return $l=$l||EP(t),$l}/**
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
 */const CP=new Aa(5e3,15e3),kP="__/auth/iframe",IP="emulator/auth/iframe",bP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TP(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lm(e,IP):`https://${t.config.authDomain}/${kP}`,r={apiKey:e.apiKey,appName:t.name,v:js},i=xP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Us(r).slice(1)}`}async function NP(t){const e=await SP(t),n=bn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:TP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),a=bn().setTimeout(()=>{s(o)},CP.get());function l(){bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const RP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PP=500,AP=600,OP="_blank",DP="http://localhost";class qv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LP(t,e,n,r=PP,i=AP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_t().toLowerCase();n&&(a=o1(u)?OP:n),s1(u)&&(e=e||DP,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(mR(u)&&a!=="_self")return MP(e||"",a),new qv(null);const d=window.open(e||"",a,c);ne(d,t,"popup-blocked");try{d.focus()}catch{}return new qv(d)}function MP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const FP="__/auth/handler",UP="emulator/auth/handler",jP=encodeURIComponent("fac");async function Qv(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:i};if(e instanceof dm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Da){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${jP}=${encodeURIComponent(l)}`:"";return`${zP(t)}?${Us(a).slice(1)}${u}`}function zP({config:t}){return t.emulator?lm(t,UP):`https://${t.authDomain}/${FP}`}/**
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
 */const Pd="webStorageSupport";class BP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w1,this._completeRedirectFn=dP,this._overrideRedirectResult=lP}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qv(e,n,r,ih(),i);return LP(e,o,fm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qv(e,n,r,ih(),i);return $R(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NP(e),r=new hP(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pd,{type:Pd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pd];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d1()||cm()||Tc()}}const VP=BP;var Xv="@firebase/auth",Jv="1.3.0";/**
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
 */class WP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HP(t){bs(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f1(t)},u=new SR(r,i,s,l);return xR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new Si("auth-internal",e=>{const n=Nc(e.getProvider("auth").getImmediate());return(r=>new WP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(Xv,Jv,$P(t)),Pr(Xv,Jv,"esm2017")}/**
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
 */const GP=5*60,YP=ww("authIdTokenMaxAge")||GP;let Zv=null;const KP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YP)return;const i=n==null?void 0:n.token;Zv!==i&&(Zv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qP(t=xw()){const e=kp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bR(t,{popupRedirectResolver:VP,persistence:[ZR,BR,w1]}),r=ww("authTokenSyncURL");if(r){const s=KP(r);MR(n,s,()=>s(n.currentUser)),LR(n,o=>s(o))}const i=yw("auth");return i&&TR(n,`http://${i}`),n}HP("Browser");const QP={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com/"},T1=bw(QP),XP=qE(T1),JP=xi(qE()),Ps=XP,Ni=qP(T1);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var Ke;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ke||(Ke={}));const ey="popstate";function ZP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ha("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ri(i)}return tA(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function As(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eA(){return Math.random().toString(36).substr(2,8)}function ty(t,e){return{usr:t.state,key:t.key,idx:e}}function ha(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?nr(e):e,{state:n,key:e&&e.key||r||eA()})}function Ri(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function nr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ke.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ke.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:w.location,delta:m})}function f(I,m){a=Ke.Push;let h=ha(w.location,I,m);n&&n(h,I),u=c()+1;let v=ty(h,u),p=w.createHref(h);try{o.pushState(v,"",p)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(p)}s&&l&&l({action:a,location:w.location,delta:1})}function g(I,m){a=Ke.Replace;let h=ha(w.location,I,m);n&&n(h,I),u=c();let v=ty(h,u),p=w.createHref(h);o.replaceState(v,"",p),s&&l&&l({action:a,location:w.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof I=="string"?I:Ri(I);return le(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let w={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ey,d),l=I,()=>{i.removeEventListener(ey,d),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(I){return o.go(I)}};return w}var Ge;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ge||(Ge={}));const nA=new Set(["lazy","caseSensitive","path","id","index","children"]);function rA(t){return t.index===!0}function oh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(le(i.index!==!0||!i.children,"Cannot specify children on an index route"),le(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),rA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=oh(i.children,e,o,r)),l}})}function es(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?nr(e):e,i=$s(r.pathname||"/",n);if(i==null)return null;let s=N1(t);sA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=pA(s[a],vA(i));return o}function iA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function N1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Hn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),N1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:fA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of R1(s.path))i(s,o,l)}),e}function R1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=R1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oA=/^:\w+$/,aA=3,lA=2,uA=1,cA=10,dA=-2,ny=t=>t==="*";function fA(t,e){let n=t.split("/"),r=n.length;return n.some(ny)&&(r+=dA),e&&(r+=lA),n.filter(i=>!ny(i)).reduce((i,s)=>i+(oA.test(s)?aA:s===""?uA:cA),r)}function hA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function pA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=mA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Hn([i,c.pathname]),pathnameBase:EA(Hn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Hn([i,c.pathnameBase]))}return s}function mA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=yA(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function gA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),As(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vA(t){try{return decodeURI(t)}catch(e){return As(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yA(t,e){try{return decodeURIComponent(t)}catch(n){return As(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function $s(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function _A(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?nr(t):t;return{pathname:n?n.startsWith("/")?n:wA(n,e):e,search:SA(r),hash:CA(i)}}function wA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ad(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ac(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=nr(t):(i=Fe({},t),le(!i.pathname||!i.pathname.includes("?"),Ad("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Ad("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Ad("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=_A(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Hn=t=>t.join("/").replace(/\/\/+/g,"/"),EA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class mm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function P1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const A1=["post","put","patch","delete"],kA=new Set(A1),IA=["get",...A1],bA=new Set(IA),xA=new Set([301,302,303,307,308]),TA=new Set([307,308]),Od={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},NA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},uo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},O1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RA=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function PA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;le(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let E=t.detectErrorBoundary;i=k=>({hasErrorBoundary:E(k)})}else i=RA;let s={},o=oh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,g=null,y=null,w=t.hydrationData!=null,I=es(o,t.history.location,l),m=null;if(I==null){let E=Wt(404,{pathname:t.history.location.pathname}),{matches:k,route:N}=cy(o);I=k,m={[N.id]:E}}let h=!I.some(E=>E.route.lazy)&&(!I.some(E=>E.route.loader)||t.hydrationData!=null),v,p={historyAction:t.history.action,location:t.history.location,matches:I,initialized:h,navigation:Od,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=Ke.Pop,P=!1,T,M=!1,$=!1,H=[],ge=[],G=new Map,Z=0,he=-1,De=new Map,Ee=new Set,$e=new Map,L=new Map,Y=new Map,J=!1;function Se(){return c=t.history.listen(E=>{let{action:k,location:N,delta:z}=E;if(J){J=!1;return}As(Y.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let te=Ka({currentLocation:p.location,nextLocation:N,historyAction:k});if(te&&z!=null){J=!0,t.history.go(z*-1),en(te,{state:"blocked",location:N,proceed(){en(te,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),t.history.go(z)},reset(){let ee=new Map(p.blockers);ee.set(te,uo),pe({blockers:ee})}});return}return Zt(k,N)}),p.initialized||Zt(Ke.Pop,p.location),v}function Le(){c&&c(),d.clear(),T&&T.abort(),p.fetchers.forEach((E,k)=>b(k)),p.blockers.forEach((E,k)=>Pe(k))}function sr(E){return d.add(E),()=>d.delete(E)}function pe(E){p=Fe({},p,E),d.forEach(k=>k(p))}function Jt(E,k){var N,z;let te=p.actionData!=null&&p.navigation.formMethod!=null&&on(p.navigation.formMethod)&&p.navigation.state==="loading"&&((N=E.state)==null?void 0:N._isRedirect)!==!0,ee;k.actionData?Object.keys(k.actionData).length>0?ee=k.actionData:ee=null:te?ee=p.actionData:ee=null;let re=k.loaderData?uy(p.loaderData,k.loaderData,k.matches||[],k.errors):p.loaderData,Q=p.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((Me,ht)=>Q.set(ht,uo)));let q=P===!0||p.navigation.formMethod!=null&&on(p.navigation.formMethod)&&((z=E.state)==null?void 0:z._isRedirect)!==!0;a&&(o=a,a=void 0),M||S===Ke.Pop||(S===Ke.Push?t.history.push(E,E.state):S===Ke.Replace&&t.history.replace(E,E.state)),pe(Fe({},k,{actionData:ee,loaderData:re,historyAction:S,location:E,initialized:!0,navigation:Od,revalidation:"idle",restoreScrollPosition:Xa(E,k.matches||p.matches),preventScrollReset:q,blockers:Q})),S=Ke.Pop,P=!1,M=!1,$=!1,H=[],ge=[]}async function xt(E,k){if(typeof E=="number"){t.history.go(E);return}let N=ah(p.location,p.matches,l,u.v7_prependBasename,E,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:z,submission:te,error:ee}=ry(u.v7_normalizeFormMethod,!1,N,k),re=p.location,Q=ha(p.location,z,k&&k.state);Q=Fe({},Q,t.history.encodeLocation(Q));let q=k&&k.replace!=null?k.replace:void 0,Me=Ke.Push;q===!0?Me=Ke.Replace:q===!1||te!=null&&on(te.formMethod)&&te.formAction===p.location.pathname+p.location.search&&(Me=Ke.Replace);let ht=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,de=Ka({currentLocation:re,nextLocation:Q,historyAction:Me});if(de){en(de,{state:"blocked",location:Q,proceed(){en(de,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),xt(E,k)},reset(){let we=new Map(p.blockers);we.set(de,uo),pe({blockers:we})}});return}return await Zt(Me,Q,{submission:te,pendingError:ee,preventScrollReset:ht,replace:k&&k.replace})}function Pn(){if(_(),pe({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Zt(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Zt(S||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Zt(E,k,N){T&&T.abort(),T=null,S=E,M=(N&&N.startUninterruptedRevalidation)===!0,Qa(p.location,p.matches),P=(N&&N.preventScrollReset)===!0;let z=a||o,te=N&&N.overrideNavigation,ee=es(z,k,l);if(!ee){let we=Wt(404,{pathname:k.pathname}),{matches:He,route:Kr}=cy(z);Yr(),Jt(k,{matches:He,loaderData:{},errors:{[Kr.id]:we}});return}if(p.initialized&&!$&&MA(p.location,k)&&!(N&&N.submission&&on(N.submission.formMethod))){Jt(k,{matches:ee});return}T=new AbortController;let re=fo(t.history,k,T.signal,N&&N.submission),Q,q;if(N&&N.pendingError)q={[ts(ee).route.id]:N.pendingError};else if(N&&N.submission&&on(N.submission.formMethod)){let we=await Wa(re,k,N.submission,ee,{replace:N.replace});if(we.shortCircuited)return;Q=we.pendingActionData,q=we.pendingActionError,te=Dd(k,N.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:Me,loaderData:ht,errors:de}=await $a(re,k,ee,te,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,Q,q);Me||(T=null,Jt(k,Fe({matches:ee},Q?{actionData:Q}:{},{loaderData:ht,errors:de})))}async function Wa(E,k,N,z,te){te===void 0&&(te={}),_();let ee=zA(k,N);pe({navigation:ee});let re,Q=uh(z,k);if(!Q.route.action&&!Q.route.lazy)re={type:Ge.error,error:Wt(405,{method:E.method,pathname:k.pathname,routeId:Q.route.id})};else if(re=await co("action",E,Q,z,s,i,l),E.signal.aborted)return{shortCircuited:!0};if(gs(re)){let q;return te&&te.replace!=null?q=te.replace:q=re.location===p.location.pathname+p.location.search,await Mi(p,re,{submission:N,replace:q}),{shortCircuited:!0}}if(Do(re)){let q=ts(z,Q.route.id);return(te&&te.replace)!==!0&&(S=Ke.Push),{pendingActionData:{},pendingActionError:{[q.route.id]:re.error}}}if(oi(re))throw Wt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:re.data}}}async function $a(E,k,N,z,te,ee,re,Q,q){let Me=z||Dd(k,te),ht=te||ee||hy(Me),de=a||o,[we,He]=iy(t.history,p,N,ht,k,$,H,ge,$e,Ee,de,l,Q,q);if(Yr(ve=>!(N&&N.some(tn=>tn.route.id===ve))||we&&we.some(tn=>tn.route.id===ve)),he=++Z,we.length===0&&He.length===0){let ve=O();return Jt(k,Fe({matches:N,loaderData:{},errors:q||null},Q?{actionData:Q}:{},ve?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!M){He.forEach(tn=>{let or=p.fetchers.get(tn.key),Hc=ho(void 0,or?or.data:void 0);p.fetchers.set(tn.key,Hc)});let ve=Q||p.actionData;pe(Fe({navigation:Me},ve?Object.keys(ve).length===0?{actionData:null}:{actionData:ve}:{},He.length>0?{fetchers:new Map(p.fetchers)}:{}))}He.forEach(ve=>{G.has(ve.key)&&U(ve.key),ve.controller&&G.set(ve.key,ve.controller)});let Kr=()=>He.forEach(ve=>U(ve.key));T&&T.signal.addEventListener("abort",Kr);let{results:qr,loaderResults:qs,fetcherResults:Bc}=await zc(p.matches,N,we,He,E);if(E.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",Kr),He.forEach(ve=>G.delete(ve.key));let An=dy(qr);if(An){if(An.idx>=we.length){let ve=He[An.idx-we.length].key;Ee.add(ve)}return await Mi(p,An.result,{replace:re}),{shortCircuited:!0}}let{loaderData:On,errors:Za}=ly(p,N,we,qs,q,He,Bc,L);L.forEach((ve,tn)=>{ve.subscribe(or=>{(or||ve.done)&&L.delete(tn)})});let Vc=O(),Wc=K(he),$c=Vc||Wc||He.length>0;return Fe({loaderData:On,errors:Za},$c?{fetchers:new Map(p.fetchers)}:{})}function Ha(E){return p.fetchers.get(E)||NA}function Ga(E,k,N,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");G.has(E)&&U(E);let te=a||o,ee=ah(p.location,p.matches,l,u.v7_prependBasename,N,k,z==null?void 0:z.relative),re=es(te,ee,l);if(!re){C(E,k,Wt(404,{pathname:ee}));return}let{path:Q,submission:q,error:Me}=ry(u.v7_normalizeFormMethod,!0,ee,z);if(Me){C(E,k,Me);return}let ht=uh(re,Q);if(P=(z&&z.preventScrollReset)===!0,q&&on(q.formMethod)){Ya(E,k,Q,ht,re,q);return}$e.set(E,{routeId:k,path:Q}),Um(E,k,Q,ht,re,q)}async function Ya(E,k,N,z,te,ee){if(_(),$e.delete(E),!z.route.action&&!z.route.lazy){let Xe=Wt(405,{method:ee.formMethod,pathname:N,routeId:k});C(E,k,Xe);return}let re=p.fetchers.get(E),Q=BA(ee,re);p.fetchers.set(E,Q),pe({fetchers:new Map(p.fetchers)});let q=new AbortController,Me=fo(t.history,N,q.signal,ee);G.set(E,q);let ht=Z,de=await co("action",Me,z,te,s,i,l);if(Me.signal.aborted){G.get(E)===q&&G.delete(E);return}if(gs(de))if(G.delete(E),he>ht){let Xe=zi(void 0);p.fetchers.set(E,Xe),pe({fetchers:new Map(p.fetchers)});return}else{Ee.add(E);let Xe=ho(ee);return p.fetchers.set(E,Xe),pe({fetchers:new Map(p.fetchers)}),Mi(p,de,{fetcherSubmission:ee})}if(Do(de)){C(E,k,de.error);return}if(oi(de))throw Wt(400,{type:"defer-action"});let we=p.navigation.location||p.location,He=fo(t.history,we,q.signal),Kr=a||o,qr=p.navigation.state!=="idle"?es(Kr,p.navigation.location,l):p.matches;le(qr,"Didn't find any matches after fetcher action");let qs=++Z;De.set(E,qs);let Bc=ho(ee,de.data);p.fetchers.set(E,Bc);let[An,On]=iy(t.history,p,qr,ee,we,$,H,ge,$e,Ee,Kr,l,{[z.route.id]:de.data},void 0);On.filter(Xe=>Xe.key!==E).forEach(Xe=>{let Qs=Xe.key,jm=p.fetchers.get(Qs),RS=ho(void 0,jm?jm.data:void 0);p.fetchers.set(Qs,RS),G.has(Qs)&&U(Qs),Xe.controller&&G.set(Qs,Xe.controller)}),pe({fetchers:new Map(p.fetchers)});let Za=()=>On.forEach(Xe=>U(Xe.key));q.signal.addEventListener("abort",Za);let{results:Vc,loaderResults:Wc,fetcherResults:$c}=await zc(p.matches,qr,An,On,He);if(q.signal.aborted)return;q.signal.removeEventListener("abort",Za),De.delete(E),G.delete(E),On.forEach(Xe=>G.delete(Xe.key));let ve=dy(Vc);if(ve){if(ve.idx>=An.length){let Xe=On[ve.idx-An.length].key;Ee.add(Xe)}return Mi(p,ve.result)}let{loaderData:tn,errors:or}=ly(p,p.matches,An,Wc,void 0,On,$c,L);if(p.fetchers.has(E)){let Xe=zi(de.data);p.fetchers.set(E,Xe)}let Hc=K(qs);p.navigation.state==="loading"&&qs>he?(le(S,"Expected pending action"),T&&T.abort(),Jt(p.navigation.location,{matches:qr,loaderData:tn,errors:or,fetchers:new Map(p.fetchers)})):(pe(Fe({errors:or,loaderData:uy(p.loaderData,tn,qr,or)},Hc||On.length>0?{fetchers:new Map(p.fetchers)}:{})),$=!1)}async function Um(E,k,N,z,te,ee){let re=p.fetchers.get(E),Q=ho(ee,re?re.data:void 0);p.fetchers.set(E,Q),pe({fetchers:new Map(p.fetchers)});let q=new AbortController,Me=fo(t.history,N,q.signal);G.set(E,q);let ht=Z,de=await co("loader",Me,z,te,s,i,l);if(oi(de)&&(de=await M1(de,Me.signal,!0)||de),G.get(E)===q&&G.delete(E),Me.signal.aborted)return;if(gs(de))if(he>ht){let He=zi(void 0);p.fetchers.set(E,He),pe({fetchers:new Map(p.fetchers)});return}else{Ee.add(E),await Mi(p,de);return}if(Do(de)){let He=ts(p.matches,k);p.fetchers.delete(E),pe({fetchers:new Map(p.fetchers),errors:{[He.route.id]:de.error}});return}le(!oi(de),"Unhandled fetcher deferred data");let we=zi(de.data);p.fetchers.set(E,we),pe({fetchers:new Map(p.fetchers)})}async function Mi(E,k,N){let{submission:z,fetcherSubmission:te,replace:ee}=N===void 0?{}:N;k.revalidate&&($=!0);let re=ha(E.location,k.location,{_isRedirect:!0});if(le(re,"Expected a location on the redirect navigation"),n){let we=!1;if(k.reloadDocument)we=!0;else if(O1.test(k.location)){const He=t.history.createURL(k.location);we=He.origin!==e.location.origin||$s(He.pathname,l)==null}if(we){ee?e.location.replace(k.location):e.location.assign(k.location);return}}T=null;let Q=ee===!0?Ke.Replace:Ke.Push,{formMethod:q,formAction:Me,formEncType:ht}=E.navigation;!z&&!te&&q&&Me&&ht&&(z=hy(E.navigation));let de=z||te;if(TA.has(k.status)&&de&&on(de.formMethod))await Zt(Q,re,{submission:Fe({},de,{formAction:k.location}),preventScrollReset:P});else{let we=Dd(re,z);await Zt(Q,re,{overrideNavigation:we,fetcherSubmission:te,preventScrollReset:P})}}async function zc(E,k,N,z,te){let ee=await Promise.all([...N.map(q=>co("loader",te,q,k,s,i,l)),...z.map(q=>q.matches&&q.match&&q.controller?co("loader",fo(t.history,q.path,q.controller.signal),q.match,q.matches,s,i,l):{type:Ge.error,error:Wt(404,{pathname:q.path})})]),re=ee.slice(0,N.length),Q=ee.slice(N.length);return await Promise.all([fy(E,N,re,re.map(()=>te.signal),!1,p.loaderData),fy(E,z.map(q=>q.match),Q,z.map(q=>q.controller?q.controller.signal:null),!0)]),{results:ee,loaderResults:re,fetcherResults:Q}}function _(){$=!0,H.push(...Yr()),$e.forEach((E,k)=>{G.has(k)&&(ge.push(k),U(k))})}function C(E,k,N){let z=ts(p.matches,k);b(E),pe({errors:{[z.route.id]:N},fetchers:new Map(p.fetchers)})}function b(E){let k=p.fetchers.get(E);G.has(E)&&!(k&&k.state==="loading"&&De.has(E))&&U(E),$e.delete(E),De.delete(E),Ee.delete(E),p.fetchers.delete(E)}function U(E){let k=G.get(E);le(k,"Expected fetch controller: "+E),k.abort(),G.delete(E)}function F(E){for(let k of E){let N=Ha(k),z=zi(N.data);p.fetchers.set(k,z)}}function O(){let E=[],k=!1;for(let N of Ee){let z=p.fetchers.get(N);le(z,"Expected fetcher: "+N),z.state==="loading"&&(Ee.delete(N),E.push(N),k=!0)}return F(E),k}function K(E){let k=[];for(let[N,z]of De)if(z<E){let te=p.fetchers.get(N);le(te,"Expected fetcher: "+N),te.state==="loading"&&(U(N),De.delete(N),k.push(N))}return F(k),k.length>0}function Re(E,k){let N=p.blockers.get(E)||uo;return Y.get(E)!==k&&Y.set(E,k),N}function Pe(E){p.blockers.delete(E),Y.delete(E)}function en(E,k){let N=p.blockers.get(E)||uo;le(N.state==="unblocked"&&k.state==="blocked"||N.state==="blocked"&&k.state==="blocked"||N.state==="blocked"&&k.state==="proceeding"||N.state==="blocked"&&k.state==="unblocked"||N.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+k.state);let z=new Map(p.blockers);z.set(E,k),pe({blockers:z})}function Ka(E){let{currentLocation:k,nextLocation:N,historyAction:z}=E;if(Y.size===0)return;Y.size>1&&As(!1,"A router only supports one blocker at a time");let te=Array.from(Y.entries()),[ee,re]=te[te.length-1],Q=p.blockers.get(ee);if(!(Q&&Q.state==="proceeding")&&re({currentLocation:k,nextLocation:N,historyAction:z}))return ee}function Yr(E){let k=[];return L.forEach((N,z)=>{(!E||E(z))&&(N.cancel(),k.push(z),L.delete(z))}),k}function Ks(E,k,N){if(f=E,y=k,g=N||null,!w&&p.navigation===Od){w=!0;let z=Xa(p.location,p.matches);z!=null&&pe({restoreScrollPosition:z})}return()=>{f=null,y=null,g=null}}function qa(E,k){return g&&g(E,k.map(z=>iA(z,p.loaderData)))||E.key}function Qa(E,k){if(f&&y){let N=qa(E,k);f[N]=y()}}function Xa(E,k){if(f){let N=qa(E,k),z=f[N];if(typeof z=="number")return z}return null}function Ja(E){s={},a=oh(E,i,void 0,s)}return v={get basename(){return l},get state(){return p},get routes(){return o},initialize:Se,subscribe:sr,enableScrollRestoration:Ks,navigate:xt,fetch:Ga,revalidate:Pn,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:Ha,deleteFetcher:b,dispose:Le,getBlocker:Re,deleteBlocker:Pe,_internalFetchControllers:G,_internalActiveDeferreds:L,_internalSetRoutes:Ja},v}function AA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function ah(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=pm(i||".",Ac(a).map(c=>c.pathnameBase),$s(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!gm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Hn([n,u.pathname])),Ri(u)}function ry(t,e,n,r){if(!r||!AA(r))return{path:n};if(r.formMethod&&!jA(r.formMethod))return{path:n,error:Wt(405,{method:r.formMethod})};let i=()=>({path:n,error:Wt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=L1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!on(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,y)=>{let[w,I]=y;return""+g+w+"="+I+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!on(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}le(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=lh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=lh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=ay(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=ay(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(on(c.formMethod))return{path:n,submission:c};let d=nr(n);return e&&d.search&&gm(d.search)&&l.append("index",""),d.search="?"+l,{path:Ri(d),submission:c}}function OA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function iy(t,e,n,r,i,s,o,a,l,u,c,d,f,g){let y=g?Object.values(g)[0]:f?Object.values(f)[0]:void 0,w=t.createURL(e.location),I=t.createURL(i),m=g?Object.keys(g)[0]:void 0,v=OA(n,m).filter((S,P)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(DA(e.loaderData,e.matches[P],S)||o.some($=>$===S.route.id))return!0;let T=e.matches[P],M=S;return sy(S,Fe({currentUrl:w,currentParams:T.params,nextUrl:I,nextParams:M.params},r,{actionResult:y,defaultShouldRevalidate:s||w.pathname+w.search===I.pathname+I.search||w.search!==I.search||D1(T,M)}))}),p=[];return l.forEach((S,P)=>{if(!n.some(ge=>ge.route.id===S.routeId))return;let T=es(c,S.path,d);if(!T){p.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let M=e.fetchers.get(P),$=uh(T,S.path),H=!1;u.has(P)?H=!1:a.includes(P)?H=!0:M&&M.state!=="idle"&&M.data===void 0?H=s:H=sy($,Fe({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:I,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),H&&p.push({key:P,routeId:S.routeId,path:S.path,matches:T,match:$,controller:new AbortController})}),[v,p]}function DA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function D1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function sy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function oy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];le(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";As(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!nA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function co(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=y=>{let w,I=new Promise((m,h)=>w=h);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),I])};try{let y=n.route[t];if(n.route.lazy)if(y){let w,I=await Promise.all([d(y).catch(m=>{w=m}),oy(n.route,s,i)]);if(w)throw w;u=I[0]}else if(await oy(n.route,s,i),y=n.route[t],y)u=await d(y);else if(t==="action"){let w=new URL(e.url),I=w.pathname+w.search;throw Wt(405,{method:e.method,pathname:I,routeId:n.route.id})}else return{type:Ge.data,data:void 0};else if(y)u=await d(y);else{let w=new URL(e.url),I=w.pathname+w.search;throw Wt(404,{pathname:I})}le(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Ge.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(UA(u)){let y=u.status;if(xA.has(y)){let m=u.headers.get("Location");if(le(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!O1.test(m))m=ah(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let h=new URL(e.url),v=m.startsWith("//")?new URL(h.protocol+m):new URL(m),p=$s(v.pathname,o)!=null;v.origin===h.origin&&p&&(m=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Ge.redirect,status:y,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ge.error?Ge.error:Ge.data,response:u};let w,I=u.headers.get("Content-Type");return I&&/\bapplication\/json\b/.test(I)?w=await u.json():w=await u.text(),l===Ge.error?{type:l,error:new mm(y,u.statusText,w),headers:u.headers}:{type:Ge.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Ge.error)return{type:l,error:u};if(FA(u)){var f,g;return{type:Ge.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((g=u.init)==null?void 0:g.headers)&&new Headers(u.init.headers)}}return{type:Ge.data,data:u}}function fo(t,e,n,r){let i=t.createURL(L1(e)).toString(),s={signal:n};if(r&&on(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=lh(r.formData):s.body=r.formData}return new Request(i,s)}function lh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ay(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function LA(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(le(!gs(c),"Cannot handle redirect results in processLoaderData"),Do(c)){let g=ts(t,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=y),s[f]=void 0,l||(l=!0,a=P1(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else oi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function ly(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=LA(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:g}=s[c];le(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(g&&g.signal.aborted))if(Do(y)){let w=ts(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=Fe({},u,{[w.route.id]:y.error})),t.fetchers.delete(d)}else if(gs(y))le(!1,"Unhandled fetcher revalidation redirect");else if(oi(y))le(!1,"Unhandled fetcher deferred data");else{let w=zi(y.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function uy(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ts(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function cy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Wt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new mm(t||500,o,new Error(a),!0)}function dy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(gs(n))return{result:n,idx:e}}}function L1(t){let e=typeof t=="string"?nr(t):t;return Ri(Fe({},e,{hash:""}))}function MA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function oi(t){return t.type===Ge.deferred}function Do(t){return t.type===Ge.error}function gs(t){return(t&&t.type)===Ge.redirect}function FA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function UA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function jA(t){return bA.has(t.toLowerCase())}function on(t){return kA.has(t.toLowerCase())}async function fy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!D1(u,l)&&(s&&s[l.route.id])!==void 0;if(oi(a)&&(i||c)){let d=r[o];le(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await M1(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function M1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ge.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ge.error,error:i}}return{type:Ge.data,data:t.deferredData.data}}}function gm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function uh(t,e){let n=typeof e=="string"?nr(e).search:e.search;if(t[t.length-1].route.index&&gm(n||""))return t[t.length-1];let r=Ac(t);return r[r.length-1]}function hy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Dd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function zA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ho(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function BA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function zi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}const Oc=x.createContext(null),F1=x.createContext(null),Hs=x.createContext(null),Dc=x.createContext(null),rr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),U1=x.createContext(null);function VA(t,e){let{relative:n}=e===void 0?{}:e;Ma()||le(!1);let{basename:r,navigator:i}=x.useContext(Hs),{hash:s,pathname:o,search:a}=z1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Hn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ma(){return x.useContext(Dc)!=null}function Lc(){return Ma()||le(!1),x.useContext(Dc).location}function j1(t){x.useContext(Hs).static||x.useLayoutEffect(t)}function Gs(){let{isDataRoute:t}=x.useContext(rr);return t?rO():WA()}function WA(){Ma()||le(!1);let t=x.useContext(Oc),{basename:e,navigator:n}=x.useContext(Hs),{matches:r}=x.useContext(rr),{pathname:i}=Lc(),s=JSON.stringify(Ac(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return j1(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=pm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Hn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const $A=x.createContext(null);function HA(t){let e=x.useContext(rr).outlet;return e&&x.createElement($A.Provider,{value:t},e)}function GA(){let{matches:t}=x.useContext(rr),e=t[t.length-1];return e?e.params:{}}function z1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(rr),{pathname:i}=Lc(),s=JSON.stringify(Ac(r).map(o=>o.pathnameBase));return x.useMemo(()=>pm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function YA(t,e,n){Ma()||le(!1);let{navigator:r}=x.useContext(Hs),{matches:i}=x.useContext(rr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Lc(),u;if(e){var c;let w=typeof e=="string"?nr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||le(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=es(t,{pathname:f}),y=JA(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Hn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Hn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&y?x.createElement(Dc.Provider,{value:{location:Bu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ke.Pop}},y):y}function KA(){let t=nO(),e=P1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,s)}const qA=x.createElement(KA,null);class QA extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(rr.Provider,{value:this.props.routeContext},x.createElement(U1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function XA(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(rr.Provider,{value:e},r)}function JA(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||le(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||qA);let f=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=d:l.route.Component?y=x.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,x.createElement(XA,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(QA,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var B1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(B1||{}),Vu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vu||{});function ZA(t){let e=x.useContext(Oc);return e||le(!1),e}function eO(t){let e=x.useContext(F1);return e||le(!1),e}function tO(t){let e=x.useContext(rr);return e||le(!1),e}function V1(t){let e=tO(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function nO(){var t;let e=x.useContext(U1),n=eO(Vu.UseRouteError),r=V1(Vu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function rO(){let{router:t}=ZA(B1.UseNavigateStable),e=V1(Vu.UseNavigateStable),n=x.useRef(!1);return j1(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bu({fromRouteId:e},s)))},[t,e])}const iO="startTransition",py=YS[iO];function sO(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=x.useState(n.state),{v7_startTransition:o}=r||{},a=x.useCallback(d=>{o&&py?py(()=>s(d)):s(d)},[s,o]);x.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,g)=>n.navigate(d,{state:f,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(d,f,g)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[n]),u=n.basename||"/",c=x.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return x.createElement(x.Fragment,null,x.createElement(Oc.Provider,{value:c},x.createElement(F1.Provider,{value:i},x.createElement(lO,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?x.createElement(oO,{routes:n.routes,state:i}):e))),null)}function oO(t){let{routes:e,state:n}=t;return YA(e,void 0,n)}function aO(t){return HA(t.context)}function lO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ke.Pop,navigator:s,static:o=!1}=t;Ma()&&le(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=nr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=x.useMemo(()=>{let w=$s(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return y==null?null:x.createElement(Hs.Provider,{value:l},x.createElement(Dc.Provider,{children:n,value:y}))}new Promise(()=>{});function uO(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:x.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:x.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}function cO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fO(t,e){return t.button===0&&(!e||e==="_self")&&!dO(t)}const hO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function pO(t,e){return PA({basename:e==null?void 0:e.basename,future:pa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:ZP({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||mO(),routes:t,mapRouteProperties:uO}).initialize()}function mO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=pa({},e,{errors:gO(e.errors)})),e}function gO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new mm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const vO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_O=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=cO(e,hO),{basename:f}=x.useContext(Hs),g,y=!1;if(typeof u=="string"&&yO.test(u)&&(g=u,vO))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),p=$s(v.pathname,f);v.origin===h.origin&&p!=null?u=p+v.search+v.hash:y=!0}catch{}let w=VA(u,{relative:i}),I=wO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(h){r&&r(h),h.defaultPrevented||I(h)}return x.createElement("a",pa({},d,{href:g||w,onClick:y||s?r:m,ref:n,target:l}))});var my;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(my||(my={}));var gy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gy||(gy={}));function wO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Gs(),l=Lc(),u=z1(t,{relative:o});return x.useCallback(c=>{if(fO(c,n)){c.preventDefault();let d=r!==void 0?r:Ri(l)===Ri(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function ai({onClick:t,children:e,variant:n}){const[r,i]=x.useState(null),[s,o]=x.useState("shadow-lg"),a={cta:"bg-themeBlue text-white",base:"bg-white text-themeBlue border border-slate-50",outlined:"bg-white text-themeBlue"};x.useEffect(()=>{i(a[n])},[r]);function l(){o("shadow-sm"),setTimeout(()=>{o("shadow-lg"),t()},200)}return A.jsx("input",{type:"button",onClick:()=>l(),value:e,className:`h-12 p-2 border-2 border-themeBlue rounded-2xl mt-4 mb-4 cursor-pointer w-full ${r} ${s}  transition-shadow duration-200`})}function EO({isMenuVisible:t}){const[e,n]=x.useState("animate-menuIn"),[r,i]=x.useState("hidden"),s=Gs();function o(){FR(Ni).then(()=>{s("/login")}).catch(a=>{console.log(a)})}return x.useEffect(()=>{t&&(i("visible"),n("animate-menuIn")),t||(n("animate-menuOut"),setTimeout(()=>{i("hidden")},400))},[t]),A.jsxs("aside",{className:`${e} ${r} absolute right-0 -top-4 w-96 h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `,children:[A.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[A.jsx("br",{}),A.jsx("br",{}),A.jsx("br",{})]}),A.jsxs("div",{className:"text-slate-700 w-full p-6 flex flex-col items-end bg-white rounded-2xl border-2 border-slate-50 shadow-md",children:[A.jsx("p",{children:"Account"}),A.jsx("p",{children:"text2"}),A.jsx(ai,{onClick:o,variant:"cta",children:"Log out"})]}),A.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[A.jsx("br",{}),A.jsx("br",{}),A.jsx("br",{})]})]})}const vm=x.createContext(void 0);function SO({handleMenu:t}){const[e,n]=x.useState(!1),r=x.useContext(vm);function i(){t(),n(!0),setTimeout(()=>{n(!1)},300)}return A.jsx("div",{className:`${e?"animate-pulse":null} z-20 text-2xl grid place-items-center w-8 cursor-pointer`,onClick:i,children:A.jsx("img",{className:"rounded-full border border-slate-700 w-full",src:r==null?void 0:r.photoUrl})})}function CO(){const[t,e]=x.useState(!1);function n(){e(!t)}return A.jsxs("nav",{className:"flex justify-between items-center bg-themeBlue text-white relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[A.jsx(_O,{to:"/",children:"Home"}),A.jsx(SO,{handleMenu:n}),A.jsx(EO,{isMenuVisible:t})]})}function kO(){return A.jsx("div",{className:"p-6 flex justify-center items-center bg-themeBlue text-white h-16 shadow-md rounded-2xl mb-4",children:"© Maciej Tomaszewski 2023"})}const ym=x.createContext(void 0),_m=x.createContext(void 0);function IO({children:t}){const[e,n]=x.useState(),[r,i]=x.useState(),[s,o]=x.useState(void 0);async function a(c){await ca(xi(Ps,`/users/${c}`),d=>{d.exists()&&o(d.val())})}async function l(c,d){await ca(xi(Ps,`/events/${c}`),f=>{if(f.exists()){let g=function(w,I){if(w===void 0)return[I];if(w!==void 0)return w.map(h=>h.id===c?I:h)};const y=f.val();y.id=c,y.users=Object.keys(y.users),d==="participateEvent"&&i(w=>g(w,y)),d==="ownerEvent"&&n(w=>g(w,y))}})}async function u(c){console.log(c),c.participateOfEvents.forEach(async d=>{l(d,"participateEvent")}),c.ownerOfEvents.forEach(async d=>{l(d,"ownerEvent")})}return x.useEffect(()=>{Ni.currentUser!=null&&(s===void 0&&a(Ni.currentUser.uid),s!==void 0&&u(s))},[s]),A.jsx(ym.Provider,{value:e,children:A.jsx(_m.Provider,{value:r,children:A.jsx(vm.Provider,{value:s,children:A.jsx(A.Fragment,{children:t})})})})}function bO(){return A.jsxs("main",{className:"text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate",children:[A.jsxs(IO,{children:[A.jsx(CO,{}),A.jsx("main",{className:"pt-6 pb-6 w-full",children:A.jsx(aO,{})})]}),A.jsx(kO,{})]})}async function xO(t){return await AN(ua(JP,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function TO({uid:t,displayName:e,email:n,photoURL:r}){await PN(xi(Ps,`users/${t}`),{displayName:e,email:n,photoUrl:r}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var NO={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vy(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wu(t){"@babel/helpers - typeof";return Wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wu(t)}function RO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function PO(t,e,n){return e&&yy(t.prototype,e),n&&yy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wm(t,e){return OO(t)||LO(t,e)||W1(t,e)||FO()}function Fa(t){return AO(t)||DO(t)||W1(t)||MO()}function AO(t){if(Array.isArray(t))return ch(t)}function OO(t){if(Array.isArray(t))return t}function DO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function W1(t,e){if(t){if(typeof t=="string")return ch(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ch(t,e)}}function ch(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function MO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _y=function(){},Em={},$1={},H1=null,G1={mark:_y,measure:_y};try{typeof window<"u"&&(Em=window),typeof document<"u"&&($1=document),typeof MutationObserver<"u"&&(H1=MutationObserver),typeof performance<"u"&&(G1=performance)}catch{}var UO=Em.navigator||{},wy=UO.userAgent,Ey=wy===void 0?"":wy,zr=Em,Ne=$1,Sy=H1,wl=G1;zr.document;var ir=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",Y1=~Ey.indexOf("MSIE")||~Ey.indexOf("Trident/"),El,Sl,Cl,kl,Il,Jn="___FONT_AWESOME___",dh=16,K1="fa",q1="svg-inline--fa",Pi="data-fa-i2svg",fh="data-fa-pseudo-element",jO="data-fa-pseudo-element-pending",Sm="data-prefix",Cm="data-icon",Cy="fontawesome-i2svg",zO="async",BO=["HTML","HEAD","STYLE","SCRIPT"],Q1=function(){try{return!0}catch{return!1}}(),xe="classic",We="sharp",km=[xe,We];function Ua(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xe]}})}var ma=Ua((El={},nt(El,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),nt(El,We,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),El)),ga=Ua((Sl={},nt(Sl,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(Sl,We,{solid:"fass",regular:"fasr",light:"fasl"}),Sl)),va=Ua((Cl={},nt(Cl,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(Cl,We,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Cl)),VO=Ua((kl={},nt(kl,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(kl,We,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kl)),WO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,X1="fa-layers-text",$O=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,HO=Ua((Il={},nt(Il,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(Il,We,{900:"fass",400:"fasr",300:"fasl"}),Il)),J1=[1,2,3,4,5,6,7,8,9,10],GO=J1.concat([11,12,13,14,15,16,17,18,19,20]),YO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],li={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ya=new Set;Object.keys(ga[xe]).map(ya.add.bind(ya));Object.keys(ga[We]).map(ya.add.bind(ya));var KO=[].concat(km,Fa(ya),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",li.GROUP,li.SWAP_OPACITY,li.PRIMARY,li.SECONDARY]).concat(J1.map(function(t){return"".concat(t,"x")})).concat(GO.map(function(t){return"w-".concat(t)})),Lo=zr.FontAwesomeConfig||{};function qO(t){var e=Ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function QO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ne&&typeof Ne.querySelector=="function"){var XO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];XO.forEach(function(t){var e=wm(t,2),n=e[0],r=e[1],i=QO(qO(n));i!=null&&(Lo[r]=i)})}var Z1={styleDefault:"solid",familyDefault:"classic",cssPrefix:K1,replacementClass:q1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Lo.familyPrefix&&(Lo.cssPrefix=Lo.familyPrefix);var Os=j(j({},Z1),Lo);Os.autoReplaceSvg||(Os.observeMutations=!1);var W={};Object.keys(Z1).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(n){Os[t]=n,Mo.forEach(function(r){return r(W)})},get:function(){return Os[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){Os.cssPrefix=e,Mo.forEach(function(n){return n(W)})},get:function(){return Os.cssPrefix}});zr.FontAwesomeConfig=W;var Mo=[];function JO(t){return Mo.push(t),function(){Mo.splice(Mo.indexOf(t),1)}}var ur=dh,En={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ZO(t){if(!(!t||!ir)){var e=Ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ne.head.insertBefore(e,r),t}}var eD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _a(){for(var t=12,e="";t-- >0;)e+=eD[Math.random()*62|0];return e}function Ys(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Im(t){return t.classList?Ys(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function eS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(eS(t[n]),'" ')},"").trim()}function Mc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function bm(t){return t.size!==En.size||t.x!==En.x||t.y!==En.y||t.rotate!==En.rotate||t.flipX||t.flipY}function nD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function rD(t){var e=t.transform,n=t.width,r=n===void 0?dh:n,i=t.height,s=i===void 0?dh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Y1?l+="translate(".concat(e.x/ur-r/2,"em, ").concat(e.y/ur-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ur,"em), calc(-50% + ").concat(e.y/ur,"em)) "):l+="translate(".concat(e.x/ur,"em, ").concat(e.y/ur,"em) "),l+="scale(".concat(e.size/ur*(e.flipX?-1:1),", ").concat(e.size/ur*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var iD=`:root, :host {
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
}`;function tS(){var t=K1,e=q1,n=W.cssPrefix,r=W.replacementClass,i=iD;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ky=!1;function Ld(){W.autoAddCss&&!ky&&(ZO(tS()),ky=!0)}var sD={mixout:function(){return{dom:{css:tS,insertCss:Ld}}},hooks:function(){return{beforeDOMElementCreation:function(){Ld()},beforeI2svg:function(){Ld()}}}},Zn=zr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var fn=Zn[Jn],nS=[],oD=function t(){Ne.removeEventListener("DOMContentLoaded",t),$u=1,nS.map(function(e){return e()})},$u=!1;ir&&($u=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),$u||Ne.addEventListener("DOMContentLoaded",oD));function aD(t){ir&&($u?setTimeout(t,0):nS.push(t))}function ja(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?eS(t):"<".concat(e," ").concat(tD(r),">").concat(s.map(ja).join(""),"</").concat(e,">")}function Iy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lD=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Md=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?lD(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function uD(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function hh(t){var e=uD(t);return e.length===1?e[0].toString(16):null}function cD(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function by(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ph(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=by(e);typeof fn.hooks.addPack=="function"&&!i?fn.hooks.addPack(t,by(e)):fn.styles[t]=j(j({},fn.styles[t]||{}),s),t==="fas"&&ph("fa",e)}var bl,xl,Tl,ns=fn.styles,dD=fn.shims,fD=(bl={},nt(bl,xe,Object.values(va[xe])),nt(bl,We,Object.values(va[We])),bl),xm=null,rS={},iS={},sS={},oS={},aS={},hD=(xl={},nt(xl,xe,Object.keys(ma[xe])),nt(xl,We,Object.keys(ma[We])),xl);function pD(t){return~KO.indexOf(t)}function mD(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!pD(i)?i:null}var lS=function(){var e=function(s){return Md(ns,function(o,a,l){return o[l]=Md(a,s,{}),o},{})};rS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),iS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),aS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ns||W.autoFetchSvg,r=Md(dD,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});sS=r.names,oS=r.unicodes,xm=Fc(W.styleDefault,{family:W.familyDefault})};JO(function(t){xm=Fc(t.styleDefault,{family:W.familyDefault})});lS();function Tm(t,e){return(rS[t]||{})[e]}function gD(t,e){return(iS[t]||{})[e]}function ui(t,e){return(aS[t]||{})[e]}function uS(t){return sS[t]||{prefix:null,iconName:null}}function vD(t){var e=oS[t],n=Tm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Br(){return xm}var Nm=function(){return{prefix:null,iconName:null,rest:[]}};function Fc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xe:n,i=ma[r][t],s=ga[r][t]||ga[r][i],o=t in fn.styles?t:null;return s||o||null}var xy=(Tl={},nt(Tl,xe,Object.keys(va[xe])),nt(Tl,We,Object.keys(va[We])),Tl);function Uc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},nt(e,xe,"".concat(W.cssPrefix,"-").concat(xe)),nt(e,We,"".concat(W.cssPrefix,"-").concat(We)),e),o=null,a=xe;(t.includes(s[xe])||t.some(function(u){return xy[xe].includes(u)}))&&(a=xe),(t.includes(s[We])||t.some(function(u){return xy[We].includes(u)}))&&(a=We);var l=t.reduce(function(u,c){var d=mD(W.cssPrefix,c);if(ns[c]?(c=fD[a].includes(c)?VO[a][c]:c,o=c,u.prefix=c):hD[a].indexOf(c)>-1?(o=c,u.prefix=Fc(c,{family:a})):d?u.iconName=d:c!==W.replacementClass&&c!==s[xe]&&c!==s[We]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?uS(u.iconName):{},g=ui(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||g||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ns.far&&ns.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},Nm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===We&&(ns.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=ui(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Br()||"fas"),l}var yD=function(){function t(){RO(this,t),this.definitions={}}return PO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),ph(a,o[a]);var l=va[xe][a];l&&ph(l,o[a]),lS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Ty=[],rs={},vs={},_D=Object.keys(vs);function wD(t,e){var n=e.mixoutsTo;return Ty=t,rs={},Object.keys(vs).forEach(function(r){_D.indexOf(r)===-1&&delete vs[r]}),Ty.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Wu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){rs[o]||(rs[o]=[]),rs[o].push(s[o])})}r.provides&&r.provides(vs)}),n}function mh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=rs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ai(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=rs[t]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vs[t]?vs[t].apply(null,e):void 0}function gh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Br();if(e)return e=ui(n,e)||e,Iy(cS.definitions,n,e)||Iy(fn.styles,n,e)}var cS=new yD,ED=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Ai("noAuto")},SD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ir?(Ai("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,aD(function(){kD({autoReplaceSvgRoot:n}),Ai("watch",e)})}},CD={icon:function(e){if(e===null)return null;if(Wu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ui(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Fc(e[0]);return{prefix:r,iconName:ui(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(WO))){var i=Uc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Br(),iconName:ui(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Br();return{prefix:s,iconName:ui(s,e)||e}}}},Vt={noAuto:ED,config:W,dom:SD,parse:CD,library:cS,findIconDefinition:gh,toHtml:ja},kD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ne:n;(Object.keys(fn.styles).length>0||W.autoFetchSvg)&&ir&&W.autoReplaceSvg&&Vt.dom.i2svg({node:r})};function jc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ja(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ir){var r=Ne.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function ID(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(bm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Mc(j(j({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function bD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function Rm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,y=r.found?r:n,w=y.width,I=y.height,m=i==="fak",h=[W.replacementClass,s?"".concat(W.cssPrefix,"-").concat(s):""].filter(function($){return d.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(d.classes).join(" "),v={children:[],attributes:j(j({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(I)})},p=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/I*16*.0625,"em")}:{};g&&(v.attributes[Pi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||_a())},children:[l]}),delete v.attributes.title);var S=j(j({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:j(j({},p),d.styles)}),P=r.found&&n.found?er("generateAbstractMask",S)||{children:[],attributes:{}}:er("generateAbstractIcon",S)||{children:[],attributes:{}},T=P.children,M=P.attributes;return S.children=T,S.attributes=M,a?bD(S):ID(S)}function Ny(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=j(j(j({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Pi]="");var c=j({},o.styles);bm(i)&&(c.transform=rD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Mc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function xD(t){var e=t.content,n=t.title,r=t.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Mc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fd=fn.styles;function vh(t){var e=t[0],n=t[1],r=t.slice(4),i=wm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(li.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(li.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(li.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var TD={found:!1,width:512,height:512};function ND(t,e){!Q1&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function yh(t,e){var n=e;return e==="fa"&&W.styleDefault!==null&&(e=Br()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=uS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fd[e]&&Fd[e][t]){var o=Fd[e][t];return r(vh(o))}ND(t,e),r(j(j({},TD),{},{icon:W.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}var Ry=function(){},_h=W.measurePerformance&&wl&&wl.mark&&wl.measure?wl:{mark:Ry,measure:Ry},_o='FA "6.4.2"',RD=function(e){return _h.mark("".concat(_o," ").concat(e," begins")),function(){return dS(e)}},dS=function(e){_h.mark("".concat(_o," ").concat(e," ends")),_h.measure("".concat(_o," ").concat(e),"".concat(_o," ").concat(e," begins"),"".concat(_o," ").concat(e," ends"))},Pm={begin:RD,end:dS},Hl=function(){};function Py(t){var e=t.getAttribute?t.getAttribute(Pi):null;return typeof e=="string"}function PD(t){var e=t.getAttribute?t.getAttribute(Sm):null,n=t.getAttribute?t.getAttribute(Cm):null;return e&&n}function AD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function OD(){if(W.autoReplaceSvg===!0)return Gl.replace;var t=Gl[W.autoReplaceSvg];return t||Gl.replace}function DD(t){return Ne.createElementNS("http://www.w3.org/2000/svg",t)}function LD(t){return Ne.createElement(t)}function fS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?DD:LD:n;if(typeof t=="string")return Ne.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(fS(o,{ceFn:r}))}),i}function MD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Gl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(fS(i),n)}),n.getAttribute(Pi)===null&&W.keepOriginalSource){var r=Ne.createComment(MD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Im(n).indexOf(W.replacementClass))return Gl.replace(e);var i=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===W.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ja(a)}).join(`
`);n.setAttribute(Pi,""),n.innerHTML=o}};function Ay(t){t()}function hS(t,e){var n=typeof e=="function"?e:Hl;if(t.length===0)n();else{var r=Ay;W.mutateApproach===zO&&(r=zr.requestAnimationFrame||Ay),r(function(){var i=OD(),s=Pm.begin("mutate");t.map(i),s(),n()})}}var Am=!1;function pS(){Am=!0}function wh(){Am=!1}var Hu=null;function Oy(t){if(Sy&&W.observeMutations){var e=t.treeCallback,n=e===void 0?Hl:e,r=t.nodeCallback,i=r===void 0?Hl:r,s=t.pseudoElementsCallback,o=s===void 0?Hl:s,a=t.observeMutationsRoot,l=a===void 0?Ne:a;Hu=new Sy(function(u){if(!Am){var c=Br();Ys(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Py(d.addedNodes[0])&&(W.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&W.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Py(d.target)&&~YO.indexOf(d.attributeName))if(d.attributeName==="class"&&PD(d.target)){var f=Uc(Im(d.target)),g=f.prefix,y=f.iconName;d.target.setAttribute(Sm,g||c),y&&d.target.setAttribute(Cm,y)}else AD(d.target)&&i(d.target)})}}),ir&&Hu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function FD(){Hu&&Hu.disconnect()}function UD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function jD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Uc(Im(t));return i.prefix||(i.prefix=Br()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=gD(i.prefix,t.innerText)||Tm(i.prefix,hh(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function zD(t){var e=Ys(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||_a()):(e["aria-hidden"]="true",e.focusable="false")),e}function BD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:En,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=jD(t),r=n.iconName,i=n.prefix,s=n.rest,o=zD(t),a=mh("parseNodeAttributes",{},t),l=e.styleParser?UD(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:En,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var VD=fn.styles;function mS(t){var e=W.autoReplaceSvg==="nest"?Dy(t,{styleParser:!1}):Dy(t);return~e.extra.classes.indexOf(X1)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}var Vr=new Set;km.map(function(t){Vr.add("fa-".concat(t))});Object.keys(ma[xe]).map(Vr.add.bind(Vr));Object.keys(ma[We]).map(Vr.add.bind(Vr));Vr=Fa(Vr);function Ly(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ir)return Promise.resolve();var n=Ne.documentElement.classList,r=function(d){return n.add("".concat(Cy,"-").concat(d))},i=function(d){return n.remove("".concat(Cy,"-").concat(d))},s=W.autoFetchSvg?Vr:km.map(function(c){return"fa-".concat(c)}).concat(Object.keys(VD));s.includes("fa")||s.push("fa");var o=[".".concat(X1,":not([").concat(Pi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Pi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ys(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Pm.begin("onTree"),u=a.reduce(function(c,d){try{var f=mS(d);f&&c.push(f)}catch(g){Q1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){hS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function WD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mS(t).then(function(n){n&&hS([n],e)})}function $D(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:gh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:gh(i||{})),t(r,j(j({},n),{},{mask:i}))}}var HD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?En:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,w=n.classes,I=w===void 0?[]:w,m=n.attributes,h=m===void 0?{}:m,v=n.styles,p=v===void 0?{}:v;if(e){var S=e.prefix,P=e.iconName,T=e.icon;return jc(j({type:"icon"},e),function(){return Ai("beforeDOMElementCreation",{iconDefinition:e,params:n}),W.autoA11y&&(f?h["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(y||_a()):(h["aria-hidden"]="true",h.focusable="false")),Rm({icons:{main:vh(T),mask:l?vh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:P,transform:j(j({},En),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:h,styles:p,classes:I}})})}},GD={mixout:function(){return{icon:$D(HD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ly,n.nodeCallback=WD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ne:r,s=n.callback,o=s===void 0?function(){}:s;return Ly(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,y){Promise.all([yh(i,a),c.iconName?yh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var I=wm(w,2),m=I[0],h=I[1];g([n,Rm({icons:{main:m,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Mc(a);l.length>0&&(i.style=l);var u;return bm(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},YD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return jc({type:"layer"},function(){Ai("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Fa(s)).join(" ")},children:o}]})}}}},KD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return jc({type:"counter",content:n},function(){return Ai("beforeDOMElementCreation",{content:n,params:r}),xD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Fa(a))}})})}}}},qD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?En:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return jc({type:"text",content:n},function(){return Ai("beforeDOMElementCreation",{content:n,params:r}),Ny({content:n,transform:j(j({},En),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Fa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Y1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return W.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ny({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},QD=new RegExp('"',"ug"),My=[1105920,1112319];function XD(t){var e=t.replace(QD,""),n=cD(e,0),r=n>=My[0]&&n<=My[1],i=e.length===2?e[0]===e[1]:!1;return{value:hh(i?e[0]:e),isSecondary:r||i}}function Fy(t,e){var n="".concat(jO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ys(t.children),o=s.filter(function(T){return T.getAttribute(fh)===e})[0],a=zr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match($O),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?We:xe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ga[f][l[2].toLowerCase()]:HO[f][u],y=XD(d),w=y.value,I=y.isSecondary,m=l[0].startsWith("FontAwesome"),h=Tm(g,w),v=h;if(m){var p=vD(w);p.iconName&&p.prefix&&(h=p.iconName,g=p.prefix)}if(h&&!I&&(!o||o.getAttribute(Sm)!==g||o.getAttribute(Cm)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var S=BD(),P=S.extra;P.attributes[fh]=e,yh(h,g).then(function(T){var M=Rm(j(j({},S),{},{icons:{main:T,mask:Nm()},prefix:g,iconName:v,extra:P,watchable:!0})),$=Ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=M.map(function(H){return ja(H)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function JD(t){return Promise.all([Fy(t,"::before"),Fy(t,"::after")])}function ZD(t){return t.parentNode!==document.head&&!~BO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Uy(t){if(ir)return new Promise(function(e,n){var r=Ys(t.querySelectorAll("*")).filter(ZD).map(JD),i=Pm.begin("searchPseudoElements");pS(),Promise.all(r).then(function(){i(),wh(),e()}).catch(function(){i(),wh(),n()})})}var eL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Uy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ne:r;W.searchPseudoElements&&Uy(i)}}},jy=!1,tL={mixout:function(){return{dom:{unwatch:function(){pS(),jy=!0}}}},hooks:function(){return{bootstrap:function(){Oy(mh("mutationObserverCallbacks",{}))},noAuto:function(){FD()},watch:function(n){var r=n.observeMutationsRoot;jy?wh():Oy(mh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},nL={mixout:function(){return{parse:{transform:function(n){return zy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=zy(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:j({},g.outer),children:[{tag:"g",attributes:j({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),g.path)}]}]}}}},Ud={x:0,y:0,width:"100%",height:"100%"};function By(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rL(t){return t.tag==="g"?t.children:[t]}var iL={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Uc(i.split(" ").map(function(o){return o.trim()})):Nm();return s.prefix||(s.prefix=Br()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=nD({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:j(j({},Ud),{},{fill:"white"})},w=c.children?{children:c.children.map(By)}:{},I={tag:"g",attributes:j({},g.inner),children:[By(j({tag:c.tag,attributes:j(j({},c.attributes),g.path)},w))]},m={tag:"g",attributes:j({},g.outer),children:[I]},h="mask-".concat(a||_a()),v="clip-".concat(a||_a()),p={tag:"mask",attributes:j(j({},Ud),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:rL(f)},p]};return r.push(S,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Ud)}),{children:r,attributes:i}}}},sL={provides:function(e){var n=!1;zr.matchMedia&&(n=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},oL={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},aL=[sD,GD,YD,KD,qD,eL,tL,nL,iL,sL,oL];wD(aL,{mixoutsTo:Vt});Vt.noAuto;Vt.config;Vt.library;Vt.dom;var Eh=Vt.parse;Vt.findIconDefinition;Vt.toHtml;var lL=Vt.icon;Vt.layer;Vt.text;Vt.counter;var gS={exports:{}},uL="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cL=uL,dL=cL;function vS(){}function yS(){}yS.resetWarningCache=vS;var fL=function(){function t(r,i,s,o,a,l){if(l!==dL){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yS,resetWarningCache:vS};return n.PropTypes=n,n};gS.exports=fL();var hL=gS.exports;const ae=e_(hL);function Vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function _r(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vy(Object(n),!0).forEach(function(r){is(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gu(t){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(t)}function is(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function mL(t,e){if(t==null)return{};var n=pL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Sh(t){return gL(t)||vL(t)||yL(t)||_L()}function gL(t){if(Array.isArray(t))return Ch(t)}function vL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yL(t,e){if(t){if(typeof t=="string")return Ch(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ch(t,e)}}function Ch(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wL(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,y=t.border,w=t.listItem,I=t.flip,m=t.size,h=t.rotation,v=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":y,"fa-li":w,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},is(e,"fa-".concat(m),typeof m<"u"&&m!==null),is(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),is(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),is(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(S){return p[S]?S:null}).filter(function(S){return S})}function EL(t){return t=t-0,t===t}function _S(t){return EL(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var SL=["style"];function CL(t){return t.charAt(0).toUpperCase()+t.slice(1)}function kL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=_S(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[CL(i)]=s:e[i]=s,e},{})}function wS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return wS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=kL(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[_S(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=mL(n,SL);return i.attrs.style=_r(_r({},i.attrs.style),o),t.apply(void 0,[e.tag,_r(_r({},i.attrs),a)].concat(Sh(r)))}var ES=!1;try{ES=!0}catch{}function IL(){if(!ES&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Wy(t){if(t&&Gu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Eh.icon)return Eh.icon(t);if(t===null)return null;if(t&&Gu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function jd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?is({},t,e):{}}var za=Yt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Wy(n),c=jd("classes",[].concat(Sh(wL(t)),Sh(s.split(" ")))),d=jd("transform",typeof t.transform=="string"?Eh.transform(t.transform):t.transform),f=jd("mask",Wy(r)),g=lL(u,_r(_r(_r(_r({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return IL("Could not find icon",u),null;var y=g.abstract,w={ref:e};return Object.keys(t).forEach(function(I){za.defaultProps.hasOwnProperty(I)||(w[I]=t[I])}),bL(y[0],w)});za.displayName="FontAwesomeIcon";za.propTypes={beat:ae.bool,border:ae.bool,beatFade:ae.bool,bounce:ae.bool,className:ae.string,fade:ae.bool,flash:ae.bool,mask:ae.oneOfType([ae.object,ae.array,ae.string]),maskId:ae.string,fixedWidth:ae.bool,inverse:ae.bool,flip:ae.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ae.oneOfType([ae.object,ae.array,ae.string]),listItem:ae.bool,pull:ae.oneOf(["right","left"]),pulse:ae.bool,rotation:ae.oneOf([0,90,180,270]),shake:ae.bool,size:ae.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ae.bool,spinPulse:ae.bool,spinReverse:ae.bool,symbol:ae.oneOfType([ae.bool,ae.string]),title:ae.string,titleId:ae.string,transform:ae.oneOfType([ae.string,ae.object]),swapOpacity:ae.bool};za.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var bL=wS.bind(null,Yt.createElement);function Om({size:t}){const[e,n]=x.useState("text-2xl");return x.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),A.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:A.jsx(za,{icon:NO,spin:!0})})}function xL(){const t=Gs(),[e,n]=x.useState(!1);return x.useEffect(function(){g1(Ni,async r=>{if(r){console.log("AUTH: Logged");const i=await xO(r);i&&n(i),i||await TO(r)}else t("/login")})},[]),e?A.jsx(bO,{}):A.jsx("div",{className:"h-screen",children:A.jsx(Om,{size:"big"})})}function TL(){const t=Gs();x.useEffect(()=>{g1(Ni,n=>{t(n?"/":"/login")})},[]);function e(){const n=new wn;iP(Ni,n).then(r=>{const i=wn.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return A.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:A.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",A.jsx("br",{}),A.jsx(ai,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function NL({event:t}){const e=Gs(),n=()=>{e(`/event/${t.id}`)};return A.jsxs("div",{onClick:n,className:"border-2 border-themeBlue p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-white",children:[A.jsx("p",{className:"text-sm text-slate-400",children:t.date}),A.jsxs("p",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function $y({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(e===void 0)return A.jsx(Om,{size:"small"});if(e)return e.map(o=>A.jsx(NL,{event:o},o.id))},i=Gs();function s(){i("/events/create")}return A.jsxs("div",{className:"w-full p-6 rounded-2xl shadow-sm border-2 border-gray-50",children:[A.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?A.jsx(ai,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function RL(){const t=x.useContext(ym),e=x.useContext(_m);return x.useEffect(()=>{},[]),A.jsxs(A.Fragment,{children:[A.jsx($y,{buttonAddEvent:!0,title:"Your events",events:t}),A.jsx("br",{}),A.jsx($y,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var Ba=t=>t.type==="checkbox",ss=t=>t instanceof Date,Et=t=>t==null;const SS=t=>typeof t=="object";var rt=t=>!Et(t)&&!Array.isArray(t)&&SS(t)&&!ss(t),PL=t=>rt(t)&&t.target?Ba(t.target)?t.target.checked:t.target.value:t,AL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,OL=(t,e)=>t.has(AL(e)),DL=t=>{const e=t.constructor&&t.constructor.prototype;return rt(e)&&e.hasOwnProperty("isPrototypeOf")},Dm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ln(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Dm&&(t instanceof Blob||t instanceof FileList))&&(n||rt(t)))if(e=n?[]:{},!n&&!DL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Ln(t[r]));else return t;return e}var Va=t=>Array.isArray(t)?t.filter(Boolean):[],qe=t=>t===void 0,V=(t,e,n)=>{if(!e||!rt(t))return n;const r=Va(e.split(/[,[\].]+?/)).reduce((i,s)=>Et(i)?i:i[s],t);return qe(r)||r===t?qe(t[e])?n:t[e]:r},ci=t=>typeof t=="boolean";const Hy={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},un={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Yt.createContext(null);var LL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==un.all&&(e._proxyFormState[o]=!r||un.all),n&&(n[o]=!0),t[o]}});return i},$t=t=>rt(t)&&!Object.keys(t).length,ML=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return $t(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||un.all))},zd=t=>Array.isArray(t)?t:[t];function FL(t){const e=Yt.useRef(t);e.current=t,Yt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Sn=t=>typeof t=="string",UL=(t,e,n,r,i)=>Sn(t)?(r&&e.watch.add(t),V(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),V(n,s))):(r&&(e.watchAll=!0),n),Lm=t=>/^\w*$/.test(t),CS=t=>Va(t.replace(/["|']|\]/g,"").split(/\.|\[/));function Ae(t,e,n){let r=-1;const i=Lm(e)?[e]:CS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=rt(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var jL=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const kh=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=V(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else rt(o)&&kh(o,e)}}};var Gy=t=>({isOnSubmit:!t||t===un.onSubmit,isOnBlur:t===un.onBlur,isOnChange:t===un.onChange,isOnAll:t===un.all,isOnTouch:t===un.onTouched}),Yy=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),zL=(t,e,n)=>{const r=Va(V(t,n));return Ae(r,"root",e[n]),Ae(t,n,r),t},Mm=t=>t.type==="file",wr=t=>typeof t=="function",Yu=t=>{if(!Dm)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Yl=t=>Sn(t),Fm=t=>t.type==="radio",Ku=t=>t instanceof RegExp;const Ky={value:!1,isValid:!1},qy={value:!0,isValid:!0};var kS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!qe(t[0].attributes.value)?qe(t[0].value)||t[0].value===""?qy:{value:t[0].value,isValid:!0}:qy:Ky}return Ky};const Qy={isValid:!1,value:null};var IS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,Qy):Qy;function Xy(t,e,n="validate"){if(Yl(t)||Array.isArray(t)&&t.every(Yl)||ci(t)&&!t)return{type:n,message:Yl(t)?t:"",ref:e}}var ji=t=>rt(t)&&!Ku(t)?t:{value:t,message:""},Jy=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:g,name:y,valueAsNumber:w,mount:I,disabled:m}=t._f,h=V(e,y);if(!I||m)return{};const v=o?o[0]:s,p=G=>{r&&v.reportValidity&&(v.setCustomValidity(ci(G)?"":G||""),v.reportValidity())},S={},P=Fm(s),T=Ba(s),M=P||T,$=(w||Mm(s))&&qe(s.value)&&qe(h)||Yu(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,H=jL.bind(null,y,n,S),ge=(G,Z,he,De=Dn.maxLength,Ee=Dn.minLength)=>{const $e=G?Z:he;S[y]={type:G?De:Ee,message:$e,ref:s,...H(G?De:Ee,$e)}};if(i?!Array.isArray(h)||!h.length:a&&(!M&&($||Et(h))||ci(h)&&!h||T&&!kS(o).isValid||P&&!IS(o).isValid)){const{value:G,message:Z}=Yl(a)?{value:!!a,message:a}:ji(a);if(G&&(S[y]={type:Dn.required,message:Z,ref:v,...H(Dn.required,Z)},!n))return p(Z),S}if(!$&&(!Et(c)||!Et(d))){let G,Z;const he=ji(d),De=ji(c);if(!Et(h)&&!isNaN(h)){const Ee=s.valueAsNumber||h&&+h;Et(he.value)||(G=Ee>he.value),Et(De.value)||(Z=Ee<De.value)}else{const Ee=s.valueAsDate||new Date(h),$e=J=>new Date(new Date().toDateString()+" "+J),L=s.type=="time",Y=s.type=="week";Sn(he.value)&&h&&(G=L?$e(h)>$e(he.value):Y?h>he.value:Ee>new Date(he.value)),Sn(De.value)&&h&&(Z=L?$e(h)<$e(De.value):Y?h<De.value:Ee<new Date(De.value))}if((G||Z)&&(ge(!!G,he.message,De.message,Dn.max,Dn.min),!n))return p(S[y].message),S}if((l||u)&&!$&&(Sn(h)||i&&Array.isArray(h))){const G=ji(l),Z=ji(u),he=!Et(G.value)&&h.length>+G.value,De=!Et(Z.value)&&h.length<+Z.value;if((he||De)&&(ge(he,G.message,Z.message),!n))return p(S[y].message),S}if(f&&!$&&Sn(h)){const{value:G,message:Z}=ji(f);if(Ku(G)&&!h.match(G)&&(S[y]={type:Dn.pattern,message:Z,ref:s,...H(Dn.pattern,Z)},!n))return p(Z),S}if(g){if(wr(g)){const G=await g(h,e),Z=Xy(G,v);if(Z&&(S[y]={...Z,...H(Dn.validate,Z.message)},!n))return p(Z.message),S}else if(rt(g)){let G={};for(const Z in g){if(!$t(G)&&!n)break;const he=Xy(await g[Z](h,e),v,Z);he&&(G={...he,...H(Z,he.message)},p(he.message),n&&(S[y]=G))}if(!$t(G)&&(S[y]={ref:v,...G},!n))return S}}return p(!0),S};function BL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=qe(t)?r++:t[e[r++]];return t}function VL(t){for(const e in t)if(t.hasOwnProperty(e)&&!qe(t[e]))return!1;return!0}function ut(t,e){const n=Array.isArray(e)?e:Lm(e)?[e]:CS(e),r=n.length===1?t:BL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(rt(r)&&$t(r)||Array.isArray(r)&&VL(r))&&ut(t,n.slice(0,-1)),t}function Bd(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var qu=t=>Et(t)||!SS(t);function di(t,e){if(qu(t)||qu(e))return t===e;if(ss(t)&&ss(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ss(s)&&ss(o)||rt(s)&&rt(o)||Array.isArray(s)&&Array.isArray(o)?!di(s,o):s!==o)return!1}}return!0}var bS=t=>t.type==="select-multiple",WL=t=>Fm(t)||Ba(t),Vd=t=>Yu(t)&&t.isConnected,xS=t=>{for(const e in t)if(wr(t[e]))return!0;return!1};function Qu(t,e={}){const n=Array.isArray(t);if(rt(t)||n)for(const r in t)Array.isArray(t[r])||rt(t[r])&&!xS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Qu(t[r],e[r])):Et(t[r])||(e[r]=!0);return e}function TS(t,e,n){const r=Array.isArray(t);if(rt(t)||r)for(const i in t)Array.isArray(t[i])||rt(t[i])&&!xS(t[i])?qe(e)||qu(n[i])?n[i]=Array.isArray(t[i])?Qu(t[i],[]):{...Qu(t[i])}:TS(t[i],Et(e)?{}:e[i],n[i]):n[i]=!di(t[i],e[i]);return n}var Wd=(t,e)=>TS(t,e,Qu(e)),NS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>qe(t)?t:e?t===""?NaN:t&&+t:n&&Sn(t)?new Date(t):r?r(t):t;function $d(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Mm(e)?e.files:Fm(e)?IS(t.refs).value:bS(e)?[...e.selectedOptions].map(({value:n})=>n):Ba(e)?kS(t.refs).value:NS(qe(e.value)?t.ref.value:e.value,t)}var $L=(t,e,n,r)=>{const i={};for(const s of t){const o=V(e,s);o&&Ae(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},po=t=>qe(t)?t:Ku(t)?t.source:rt(t)?Ku(t.value)?t.value.source:t.value:t,HL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function Zy(t,e,n){const r=V(t,n);if(r||Lm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=V(e,s),a=V(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var GL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,YL=(t,e)=>!Va(V(t,e)).length&&ut(t,e);const KL={mode:un.onSubmit,reValidateMode:un.onChange,shouldFocusError:!0};function qL(t={},e){let n={...KL,...t},r={submitCount:0,isDirty:!1,isLoading:wr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=rt(n.defaultValues)||rt(n.values)?Ln(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Ln(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Bd(),array:Bd(),state:Bd()},g=t.resetOptions&&t.resetOptions.keepDirtyValues,y=Gy(n.mode),w=Gy(n.reValidateMode),I=n.criteriaMode===un.all,m=_=>C=>{clearTimeout(c),c=setTimeout(_,C)},h=async _=>{if(d.isValid||_){const C=n.resolver?$t((await $()).errors):await ge(i,!0);C!==r.isValid&&f.state.next({isValid:C})}},v=_=>d.isValidating&&f.state.next({isValidating:_}),p=(_,C=[],b,U,F=!0,O=!0)=>{if(U&&b){if(a.action=!0,O&&Array.isArray(V(i,_))){const K=b(V(i,_),U.argA,U.argB);F&&Ae(i,_,K)}if(O&&Array.isArray(V(r.errors,_))){const K=b(V(r.errors,_),U.argA,U.argB);F&&Ae(r.errors,_,K),YL(r.errors,_)}if(d.touchedFields&&O&&Array.isArray(V(r.touchedFields,_))){const K=b(V(r.touchedFields,_),U.argA,U.argB);F&&Ae(r.touchedFields,_,K)}d.dirtyFields&&(r.dirtyFields=Wd(s,o)),f.state.next({name:_,isDirty:Z(_,C),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ae(o,_,C)},S=(_,C)=>{Ae(r.errors,_,C),f.state.next({errors:r.errors})},P=(_,C,b,U)=>{const F=V(i,_);if(F){const O=V(o,_,qe(b)?V(s,_):b);qe(O)||U&&U.defaultChecked||C?Ae(o,_,C?O:$d(F._f)):Ee(_,O),a.mount&&h()}},T=(_,C,b,U,F)=>{let O=!1,K=!1;const Re={name:_};if(!b||U){d.isDirty&&(K=r.isDirty,r.isDirty=Re.isDirty=Z(),O=K!==Re.isDirty);const Pe=di(V(s,_),C);K=V(r.dirtyFields,_),Pe?ut(r.dirtyFields,_):Ae(r.dirtyFields,_,!0),Re.dirtyFields=r.dirtyFields,O=O||d.dirtyFields&&K!==!Pe}if(b){const Pe=V(r.touchedFields,_);Pe||(Ae(r.touchedFields,_,b),Re.touchedFields=r.touchedFields,O=O||d.touchedFields&&Pe!==b)}return O&&F&&f.state.next(Re),O?Re:{}},M=(_,C,b,U)=>{const F=V(r.errors,_),O=d.isValid&&ci(C)&&r.isValid!==C;if(t.delayError&&b?(u=m(()=>S(_,b)),u(t.delayError)):(clearTimeout(c),u=null,b?Ae(r.errors,_,b):ut(r.errors,_)),(b?!di(F,b):F)||!$t(U)||O){const K={...U,...O&&ci(C)?{isValid:C}:{},errors:r.errors,name:_};r={...r,...K},f.state.next(K)}v(!1)},$=async _=>n.resolver(o,n.context,$L(_||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),H=async _=>{const{errors:C}=await $(_);if(_)for(const b of _){const U=V(C,b);U?Ae(r.errors,b,U):ut(r.errors,b)}else r.errors=C;return C},ge=async(_,C,b={valid:!0})=>{for(const U in _){const F=_[U];if(F){const{_f:O,...K}=F;if(O){const Re=l.array.has(O.name),Pe=await Jy(F,o,I,n.shouldUseNativeValidation&&!C,Re);if(Pe[O.name]&&(b.valid=!1,C))break;!C&&(V(Pe,O.name)?Re?zL(r.errors,Pe,O.name):Ae(r.errors,O.name,Pe[O.name]):ut(r.errors,O.name))}K&&await ge(K,C,b)}}return b.valid},G=()=>{for(const _ of l.unMount){const C=V(i,_);C&&(C._f.refs?C._f.refs.every(b=>!Vd(b)):!Vd(C._f.ref))&&xt(_)}l.unMount=new Set},Z=(_,C)=>(_&&C&&Ae(o,_,C),!di(Se(),s)),he=(_,C,b)=>UL(_,l,{...a.mount?o:qe(C)?s:Sn(_)?{[_]:C}:C},b,C),De=_=>Va(V(a.mount?o:s,_,t.shouldUnregister?V(s,_,[]):[])),Ee=(_,C,b={})=>{const U=V(i,_);let F=C;if(U){const O=U._f;O&&(!O.disabled&&Ae(o,_,NS(C,O)),F=Yu(O.ref)&&Et(C)?"":C,bS(O.ref)?[...O.ref.options].forEach(K=>K.selected=F.includes(K.value)):O.refs?Ba(O.ref)?O.refs.length>1?O.refs.forEach(K=>(!K.defaultChecked||!K.disabled)&&(K.checked=Array.isArray(F)?!!F.find(Re=>Re===K.value):F===K.value)):O.refs[0]&&(O.refs[0].checked=!!F):O.refs.forEach(K=>K.checked=K.value===F):Mm(O.ref)?O.ref.value="":(O.ref.value=F,O.ref.type||f.values.next({name:_,values:{...o}})))}(b.shouldDirty||b.shouldTouch)&&T(_,F,b.shouldTouch,b.shouldDirty,!0),b.shouldValidate&&J(_)},$e=(_,C,b)=>{for(const U in C){const F=C[U],O=`${_}.${U}`,K=V(i,O);(l.array.has(_)||!qu(F)||K&&!K._f)&&!ss(F)?$e(O,F,b):Ee(O,F,b)}},L=(_,C,b={})=>{const U=V(i,_),F=l.array.has(_),O=Ln(C);Ae(o,_,O),F?(f.array.next({name:_,values:{...o}}),(d.isDirty||d.dirtyFields)&&b.shouldDirty&&f.state.next({name:_,dirtyFields:Wd(s,o),isDirty:Z(_,O)})):U&&!U._f&&!Et(O)?$e(_,O,b):Ee(_,O,b),Yy(_,l)&&f.state.next({...r}),f.values.next({name:_,values:{...o}}),!a.mount&&e()},Y=async _=>{const C=_.target;let b=C.name,U=!0;const F=V(i,b),O=()=>C.type?$d(F._f):PL(_);if(F){let K,Re;const Pe=O(),en=_.type===Hy.BLUR||_.type===Hy.FOCUS_OUT,Ka=!HL(F._f)&&!n.resolver&&!V(r.errors,b)&&!F._f.deps||GL(en,V(r.touchedFields,b),r.isSubmitted,w,y),Yr=Yy(b,l,en);Ae(o,b,Pe),en?(F._f.onBlur&&F._f.onBlur(_),u&&u(0)):F._f.onChange&&F._f.onChange(_);const Ks=T(b,Pe,en,!1),qa=!$t(Ks)||Yr;if(!en&&f.values.next({name:b,type:_.type,values:{...o}}),Ka)return d.isValid&&h(),qa&&f.state.next({name:b,...Yr?{}:Ks});if(!en&&Yr&&f.state.next({...r}),v(!0),n.resolver){const{errors:Qa}=await $([b]),Xa=Zy(r.errors,i,b),Ja=Zy(Qa,i,Xa.name||b);K=Ja.error,b=Ja.name,Re=$t(Qa)}else K=(await Jy(F,o,I,n.shouldUseNativeValidation))[b],U=Number.isNaN(Pe)||Pe===V(o,b,Pe),U&&(K?Re=!1:d.isValid&&(Re=await ge(i,!0)));U&&(F._f.deps&&J(F._f.deps),M(b,Re,K,Ks))}},J=async(_,C={})=>{let b,U;const F=zd(_);if(v(!0),n.resolver){const O=await H(qe(_)?_:F);b=$t(O),U=_?!F.some(K=>V(O,K)):b}else _?(U=(await Promise.all(F.map(async O=>{const K=V(i,O);return await ge(K&&K._f?{[O]:K}:K)}))).every(Boolean),!(!U&&!r.isValid)&&h()):U=b=await ge(i);return f.state.next({...!Sn(_)||d.isValid&&b!==r.isValid?{}:{name:_},...n.resolver||!_?{isValid:b}:{},errors:r.errors,isValidating:!1}),C.shouldFocus&&!U&&kh(i,O=>O&&V(r.errors,O),_?F:l.mount),U},Se=_=>{const C={...s,...a.mount?o:{}};return qe(_)?C:Sn(_)?V(C,_):_.map(b=>V(C,b))},Le=(_,C)=>({invalid:!!V((C||r).errors,_),isDirty:!!V((C||r).dirtyFields,_),isTouched:!!V((C||r).touchedFields,_),error:V((C||r).errors,_)}),sr=_=>{_&&zd(_).forEach(C=>ut(r.errors,C)),f.state.next({errors:_?r.errors:{}})},pe=(_,C,b)=>{const U=(V(i,_,{_f:{}})._f||{}).ref;Ae(r.errors,_,{...C,ref:U}),f.state.next({name:_,errors:r.errors,isValid:!1}),b&&b.shouldFocus&&U&&U.focus&&U.focus()},Jt=(_,C)=>wr(_)?f.values.subscribe({next:b=>_(he(void 0,C),b)}):he(_,C,!0),xt=(_,C={})=>{for(const b of _?zd(_):l.mount)l.mount.delete(b),l.array.delete(b),C.keepValue||(ut(i,b),ut(o,b)),!C.keepError&&ut(r.errors,b),!C.keepDirty&&ut(r.dirtyFields,b),!C.keepTouched&&ut(r.touchedFields,b),!n.shouldUnregister&&!C.keepDefaultValue&&ut(s,b);f.values.next({values:{...o}}),f.state.next({...r,...C.keepDirty?{isDirty:Z()}:{}}),!C.keepIsValid&&h()},Pn=({disabled:_,name:C,field:b,fields:U})=>{if(ci(_)){const F=_?void 0:V(o,C,$d(b?b._f:V(U,C)._f));Ae(o,C,F),T(C,F,!1,!1,!0)}},Zt=(_,C={})=>{let b=V(i,_);const U=ci(C.disabled);return Ae(i,_,{...b||{},_f:{...b&&b._f?b._f:{ref:{name:_}},name:_,mount:!0,...C}}),l.mount.add(_),b?Pn({field:b,disabled:C.disabled,name:_}):P(_,!0,C.value),{...U?{disabled:C.disabled}:{},...n.progressive?{required:!!C.required,min:po(C.min),max:po(C.max),minLength:po(C.minLength),maxLength:po(C.maxLength),pattern:po(C.pattern)}:{},name:_,onChange:Y,onBlur:Y,ref:F=>{if(F){Zt(_,C),b=V(i,_);const O=qe(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,K=WL(O),Re=b._f.refs||[];if(K?Re.find(Pe=>Pe===O):O===b._f.ref)return;Ae(i,_,{_f:{...b._f,...K?{refs:[...Re.filter(Vd),O,...Array.isArray(V(s,_))?[{}]:[]],ref:{type:O.type,name:_}}:{ref:O}}}),P(_,!1,void 0,O)}else b=V(i,_,{}),b._f&&(b._f.mount=!1),(n.shouldUnregister||C.shouldUnregister)&&!(OL(l.array,_)&&a.action)&&l.unMount.add(_)}}},Wa=()=>n.shouldFocusError&&kh(i,_=>_&&V(r.errors,_),l.mount),$a=(_,C)=>async b=>{b&&(b.preventDefault&&b.preventDefault(),b.persist&&b.persist());let U=Ln(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:F,values:O}=await $();r.errors=F,U=O}else await ge(i);ut(r.errors,"root"),$t(r.errors)?(f.state.next({errors:{}}),await _(U,b)):(C&&await C({...r.errors},b),Wa(),setTimeout(Wa)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:$t(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Ha=(_,C={})=>{V(i,_)&&(qe(C.defaultValue)?L(_,V(s,_)):(L(_,C.defaultValue),Ae(s,_,C.defaultValue)),C.keepTouched||ut(r.touchedFields,_),C.keepDirty||(ut(r.dirtyFields,_),r.isDirty=C.defaultValue?Z(_,V(s,_)):Z()),C.keepError||(ut(r.errors,_),d.isValid&&h()),f.state.next({...r}))},Ga=(_,C={})=>{const b=_?Ln(_):s,U=Ln(b),F=_&&!$t(_)?U:s;if(C.keepDefaultValues||(s=b),!C.keepValues){if(C.keepDirtyValues||g)for(const O of l.mount)V(r.dirtyFields,O)?Ae(F,O,V(o,O)):L(O,V(F,O));else{if(Dm&&qe(_))for(const O of l.mount){const K=V(i,O);if(K&&K._f){const Re=Array.isArray(K._f.refs)?K._f.refs[0]:K._f.ref;if(Yu(Re)){const Pe=Re.closest("form");if(Pe){Pe.reset();break}}}}i={}}o=t.shouldUnregister?C.keepDefaultValues?Ln(s):{}:Ln(F),f.array.next({values:{...F}}),f.values.next({values:{...F}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!C.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:C.keepSubmitCount?r.submitCount:0,isDirty:C.keepDirty?r.isDirty:!!(C.keepDefaultValues&&!di(_,s)),isSubmitted:C.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:C.keepDirtyValues?r.dirtyFields:C.keepDefaultValues&&_?Wd(s,_):{},touchedFields:C.keepTouched?r.touchedFields:{},errors:C.keepErrors?r.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ya=(_,C)=>Ga(wr(_)?_(o):_,C);return{control:{register:Zt,unregister:xt,getFieldState:Le,handleSubmit:$a,setError:pe,_executeSchema:$,_getWatch:he,_getDirty:Z,_updateValid:h,_removeUnmounted:G,_updateFieldArray:p,_updateDisabledField:Pn,_getFieldArray:De,_reset:Ga,_resetDefaultValues:()=>wr(n.defaultValues)&&n.defaultValues().then(_=>{Ya(_,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:_=>{r={...r,..._}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(_){a=_},get _defaultValues(){return s},get _names(){return l},set _names(_){l=_},get _formState(){return r},set _formState(_){r=_},get _options(){return n},set _options(_){n={...n,..._}}},trigger:J,register:Zt,handleSubmit:$a,watch:Jt,setValue:L,getValues:Se,reset:Ya,resetField:Ha,clearErrors:sr,unregister:xt,setError:pe,setFocus:(_,C={})=>{const b=V(i,_),U=b&&b._f;if(U){const F=U.refs?U.refs[0]:U.ref;F.focus&&(F.focus(),C.shouldSelect&&F.select())}},getFieldState:Le}}function QL(t={}){const e=Yt.useRef(),n=Yt.useRef(),[r,i]=Yt.useState({isDirty:!1,isValidating:!1,isLoading:wr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:wr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...qL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,FL({subject:s._subjects.state,next:o=>{ML(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Yt.useEffect(()=>{t.values&&!di(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Yt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=LL(r,s),e.current}function Hd({type:t,placeholder:e,defaultValue:n,register:r}){return A.jsx("input",{...r,defaultValue:n,type:t,placeholder:e,className:"h-12 p-2 border-2 border-slate-700 rounded-2xl mt-2 mb-2 w-full"})}function XL(){const{register:t,handleSubmit:e,watch:n,formState:{errors:r}}=QL(),i=u=>console.log(u),[s,o]=x.useState(void 0),a=n("Users");async function l(u){const c=KE(xi(Ps,"users/"),FN("email"),jN(u));await ca(c,d=>{if(d.exists()){console.log(d.val());let f=Object.values(d.val());console.log(f),o(f[0])}else o(void 0)})}return x.useEffect(()=>{l(a)},[a]),console.log(),A.jsxs("main",{className:"h-full border-2 border-slate-700 rounded-2xl p-4",children:[A.jsx("p",{className:"text-lg font-bold pb-2",children:"Create new Event"}),A.jsxs("form",{onSubmit:e(i),children:[A.jsx(Hd,{type:"text",defaultValue:"Event name",register:t("EventName"),placeholder:"Event name"}),A.jsxs("label",{className:"relative block",children:[A.jsx(Hd,{type:"text",defaultValue:"",register:t("Users",{required:!0}),placeholder:"Add users"}),A.jsx("div",{className:`${a?"h-14 opacity-100 p2":"h-0 opacity-0 p-0"} w-full bg-white absolute top-16 rounded-2xl border-2 border-slate-700 p-2 shadow-2xl transition-all duration-1000 flex items-center`,children:s!==void 0?A.jsxs("div",{className:"flex gap-4 items-center",children:[s.displayName,A.jsx("img",{src:s.photoUrl,className:"w-8 rounded-2xl"})]}):A.jsx("div",{children:"Not found"})})]}),r.Users&&A.jsx("span",{children:"This field is required"}),A.jsx("div",{className:"h-96 w-full"}),A.jsx(Hd,{type:"submit",placeholder:"",defaultValue:"Submit",register:null})]})]})}function JL(){const t=GA(),e=x.useContext(ym),n=x.useContext(_m),r=x.useContext(vm),[i,s]=x.useState(void 0),[o,a]=x.useState(!1),[l,u]=x.useState([]),[c,d]=x.useState(void 0);function f(){if(r!==void 0){if(t.id===void 0){a("Event not Found");return}if(e){const m=g(e,t.id);m&&(s(m),d(r))}if(n){const m=g(n,t.id);m&&(s(m),y(m.owner))}}}function g(m,h){if(h===void 0)return!1;const v=m.filter(p=>p.id===h?p:null)[0];return v===void 0?!1:v}async function y(m){await ca(xi(Ps,`/users/${m}`),h=>{h.exists()&&d(h.val())})}function w(m){const h=KE(xi(Ps,`users/${m}`));ca(h,v=>{v.exists()&&u(p=>[...p,v.val()])})}function I(){i==null||i.users.map(m=>{w(m)}),console.log(l)}return x.useEffect(()=>{Ni.currentUser!==null&&(f(),i&&l.length==0&&I())},[i,e,n,l]),i===void 0&&!o?A.jsx(Om,{size:"big"}):o!==!1?(console.log(o),A.jsx("div",{children:o})):i?A.jsxs("div",{className:"border-2 border-slate-700 p-6 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between items-center mb-6",children:[A.jsx("span",{className:"font-bold text-2xl",children:i.name}),A.jsx("img",{className:"rounded-full w-10 border border-slate-700",src:c==null?void 0:c.photoUrl})]}),A.jsx("div",{className:"flex gap-2",children:l.map(m=>A.jsx("img",{src:m.photoUrl,alt:"",className:"rounded-full w-10"}))})]}):A.jsx("div",{children:"Error not found"})}function ZL(){return A.jsxs("div",{children:[A.jsx(ai,{variant:"cta",onClick:()=>{},children:"CTA"}),A.jsx(ai,{variant:"outlined",onClick:()=>{},children:"Outlined"}),A.jsx(ai,{variant:"base",onClick:()=>{},children:"Base"}),A.jsx(ai,{variant:"base",onClick:()=>{},children:"Base"})]})}const eM=pO([{path:"/",element:A.jsx(xL,{}),children:[{path:"/",element:A.jsx(RL,{})},{path:"/event/:id",element:A.jsx(JL,{})},{path:"/events/create",element:A.jsx(XL,{})}]},{path:"/login",element:A.jsx(TL,{})},{path:"/testing",element:A.jsx(ZL,{})}]);Gd.createRoot(document.getElementById("root")).render(A.jsx(Yt.StrictMode,{children:A.jsx(sO,{router:eM})}));
