function iC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function __(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w_={exports:{}},vc={},E_={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),sC=Symbol.for("react.portal"),oC=Symbol.for("react.fragment"),aC=Symbol.for("react.strict_mode"),lC=Symbol.for("react.profiler"),uC=Symbol.for("react.provider"),cC=Symbol.for("react.context"),dC=Symbol.for("react.forward_ref"),fC=Symbol.for("react.suspense"),hC=Symbol.for("react.memo"),pC=Symbol.for("react.lazy"),sg=Symbol.iterator;function mC(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,x_={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||S_}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b_(){}b_.prototype=Zs.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||S_}var Yh=Gh.prototype=new b_;Yh.constructor=Gh;C_(Yh,Zs.prototype);Yh.isPureReactComponent=!0;var og=Array.isArray,k_=Object.prototype.hasOwnProperty,Kh={current:null},I_={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k_.call(e,r)&&!I_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Va,type:t,key:s,ref:o,props:i,_owner:Kh.current}}function gC(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function vC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ag=/\/+/g;function fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vC(""+t.key):e.toString(36)}function Yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Va:case sC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fd(o,0):r,og(i)?(n="",t!=null&&(n=t.replace(ag,"$&/")+"/"),Yl(i,e,n,"",function(u){return u})):i!=null&&(qh(i)&&(i=gC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ag,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",og(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+fd(s,a);o+=Yl(s,e,n,l,i)}else if(l=mC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+fd(s,a++),o+=Yl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(t,e,n){if(t==null)return t;var r=[],i=0;return Yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Kl={transition:null},_C={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:Kh};de.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Zs;de.Fragment=oC;de.Profiler=lC;de.PureComponent=Gh;de.StrictMode=aC;de.Suspense=fC;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_C;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)k_.call(e,l)&&!I_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Va,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:cC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uC,_context:t},t.Consumer=t};de.createElement=T_;de.createFactory=function(t){var e=T_.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:dC,render:t}};de.isValidElement=qh;de.lazy=function(t){return{$$typeof:pC,_payload:{_status:-1,_result:t},_init:yC}};de.memo=function(t,e){return{$$typeof:hC,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(t,e){return Rt.current.useCallback(t,e)};de.useContext=function(t){return Rt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Rt.current.useEffect(t,e)};de.useId=function(){return Rt.current.useId()};de.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Rt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};de.useRef=function(t){return Rt.current.useRef(t)};de.useState=function(t){return Rt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Rt.current.useTransition()};de.version="18.2.0";E_.exports=de;var S=E_.exports;const Zt=__(S),wC=iC({__proto__:null,default:Zt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EC=S,SC=Symbol.for("react.element"),CC=Symbol.for("react.fragment"),xC=Object.prototype.hasOwnProperty,bC=EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kC={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xC.call(e,r)&&!kC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SC,type:t,key:s,ref:o,props:i,_owner:bC.current}}vc.Fragment=CC;vc.jsx=N_;vc.jsxs=N_;w_.exports=vc;var w=w_.exports,ff={},P_={exports:{}},Ht={},R_={exports:{}},A_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var q=F.length;F.push(Y);e:for(;0<q;){var pe=q-1>>>1,ve=F[pe];if(0<i(ve,Y))F[pe]=Y,F[q]=ve,q=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],q=F.pop();if(q!==Y){F[0]=q;e:for(var pe=0,ve=F.length,Cn=ve>>>1;pe<Cn;){var Kt=2*(pe+1)-1,li=F[Kt],zt=Kt+1,xe=F[zt];if(0>i(li,q))zt<ve&&0>i(xe,li)?(F[pe]=xe,F[zt]=q,pe=zt):(F[pe]=li,F[Kt]=q,pe=Kt);else if(zt<ve&&0>i(xe,q))F[pe]=xe,F[zt]=q,pe=zt;else break e}}return Y}function i(F,Y){var q=F.sortIndex-Y.sortIndex;return q!==0?q:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=F)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(F){if(_=!1,g(F),!v)if(n(l)!==null)v=!0,He(C);else{var Y=n(u);Y!==null&&Qe(p,Y.startTime-F)}}function C(F,Y){v=!1,_&&(_=!1,y(P),P=-1),m=!0;var q=f;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||F&&!Z());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,f=d.priorityLevel;var ve=pe(d.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),g(Y)}else r(l);d=n(l)}if(d!==null)var Cn=!0;else{var Kt=n(u);Kt!==null&&Qe(p,Kt.startTime-Y),Cn=!1}return Cn}finally{d=null,f=q,m=!1}}var N=!1,b=null,P=-1,U=5,M=-1;function Z(){return!(t.unstable_now()-M<U)}function Q(){if(b!==null){var F=t.unstable_now();M=F;var Y=!0;try{Y=b(!0,F)}finally{Y?ee():(N=!1,b=null)}}else N=!1}var ee;if(typeof h=="function")ee=function(){h(Q)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=Q,ee=function(){ae.postMessage(null)}}else ee=function(){x(Q,0)};function He(F){b=F,N||(N=!0,ee())}function Qe(F,Y){P=x(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,He(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return F()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=f;f=F;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(F,Y,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=q+ve,F={id:c++,callback:Y,priorityLevel:F,startTime:q,expirationTime:ve,sortIndex:-1},q>pe?(F.sortIndex=q,e(u,F),n(l)===null&&F===n(u)&&(_?(y(P),P=-1):_=!0,Qe(p,q-pe))):(F.sortIndex=ve,e(l,F),v||m||(v=!0,He(C))),F},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(F){var Y=f;return function(){var q=f;f=Y;try{return F.apply(this,arguments)}finally{f=q}}}})(A_);R_.exports=A_;var IC=R_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_=S,Wt=IC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D_=new Set,sa={};function Hi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(sa[t]=e,t=0;t<e.length;t++)D_.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,TC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},ug={};function NC(t){return hf.call(ug,t)?!0:hf.call(lg,t)?!1:TC.test(t)?ug[t]=!0:(lg[t]=!0,!1)}function PC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RC(t,e,n,r){if(e===null||typeof e>"u"||PC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){vt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];vt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){vt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){vt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){vt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){vt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){vt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){vt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){vt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);vt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);vt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Xh);vt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){vt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});vt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){vt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,r){var i=vt.hasOwnProperty(e)?vt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RC(e,n,i,r)&&(n=null),r||i===null?NC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=O_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),F_=Symbol.for("react.offscreen"),cg=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,hd;function Oo(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var pd=!1;function md(t,e){if(!t||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function AC(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=md(t.type,!1),t;case 11:return t=md(t.type.render,!1),t;case 1:return t=md(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case pf:return"Profiler";case Zh:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function OC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DC(t){var e=j_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=DC(t))}function U_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z_(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function _f(t,e){z_(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&wf(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wf(t,e,n){(e!=="number"||hu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Do(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function V_(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var El,B_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=El.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LC=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){LC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function W_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function H_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=W_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(MC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kf=null,Es=null,Ss=null;function mg(t){if(t=Wa(t)){if(typeof kf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Sc(e),kf(t.stateNode,t.type,e))}}function G_(t){Es?Ss?Ss.push(t):Ss=[t]:Es=t}function Y_(){if(Es){var t=Es,e=Ss;if(Ss=Es=null,mg(t),e)for(t=0;t<e.length;t++)mg(e[t])}}function K_(t,e){return t(e)}function q_(){}var gd=!1;function Q_(t,e,n){if(gd)return t(e,n);gd=!0;try{return K_(t,e,n)}finally{gd=!1,(Es!==null||Ss!==null)&&(q_(),Y_())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=Sc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var If=!1;if(tr)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){If=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{If=!1}function FC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,pu=null,mu=!1,Tf=null,jC={onError:function(t){Uo=!0,pu=t}};function UC(t,e,n,r,i,s,o,a,l){Uo=!1,pu=null,FC.apply(jC,arguments)}function zC(t,e,n,r,i,s,o,a,l){if(UC.apply(this,arguments),Uo){if(Uo){var u=pu;Uo=!1,pu=null}else throw Error(O(198));mu||(mu=!0,Tf=u)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gg(t){if(Gi(t)!==t)throw Error(O(188))}function VC(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gg(i),t;if(s===r)return gg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function J_(t){return t=VC(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var e0=Wt.unstable_scheduleCallback,vg=Wt.unstable_cancelCallback,$C=Wt.unstable_shouldYield,BC=Wt.unstable_requestPaint,qe=Wt.unstable_now,WC=Wt.unstable_getCurrentPriorityLevel,rp=Wt.unstable_ImmediatePriority,t0=Wt.unstable_UserBlockingPriority,gu=Wt.unstable_NormalPriority,HC=Wt.unstable_LowPriority,n0=Wt.unstable_IdlePriority,yc=null,Pn=null;function GC(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(yc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:qC,YC=Math.log,KC=Math.LN2;function qC(t){return t>>>=0,t===0?32:31-(YC(t)/KC|0)|0}var Sl=64,Cl=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lo(a):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function QC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r0(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function JC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function i0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,sp,o0,a0,l0,Pf=!1,xl=[],Lr=null,Mr=null,Fr=null,la=new Map,ua=new Map,xr=[],ZC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wa(e),e!==null&&sp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ex(t,e,n,r,i){switch(e){case"focusin":return Lr=yo(Lr,t,e,n,r,i),!0;case"dragenter":return Mr=yo(Mr,t,e,n,r,i),!0;case"mouseover":return Fr=yo(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,yo(la.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ua.set(s,yo(ua.get(s)||null,t,e,n,r,i)),!0}return!1}function u0(t){var e=mi(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=X_(n),e!==null){t.blockedOn=e,l0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bf=r,n.target.dispatchEvent(r),bf=null}else return e=Wa(n),e!==null&&sp(e),t.blockedOn=n,!1;e.shift()}return!0}function _g(t,e,n){ql(t)&&n.delete(e)}function tx(){Pf=!1,Lr!==null&&ql(Lr)&&(Lr=null),Mr!==null&&ql(Mr)&&(Mr=null),Fr!==null&&ql(Fr)&&(Fr=null),la.forEach(_g),ua.forEach(_g)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,tx)))}function ca(t){function e(i){return _o(i,t)}if(0<xl.length){_o(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&_o(Lr,t),Mr!==null&&_o(Mr,t),Fr!==null&&_o(Fr,t),la.forEach(e),ua.forEach(e),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&xr.shift()}var Cs=cr.ReactCurrentBatchConfig,yu=!0;function nx(t,e,n,r){var i=ye,s=Cs.transition;Cs.transition=null;try{ye=1,op(t,e,n,r)}finally{ye=i,Cs.transition=s}}function rx(t,e,n,r){var i=ye,s=Cs.transition;Cs.transition=null;try{ye=4,op(t,e,n,r)}finally{ye=i,Cs.transition=s}}function op(t,e,n,r){if(yu){var i=Rf(t,e,n,r);if(i===null)Id(t,e,r,_u,n),yg(t,r);else if(ex(i,t,e,n,r))r.stopPropagation();else if(yg(t,r),e&4&&-1<ZC.indexOf(t)){for(;i!==null;){var s=Wa(i);if(s!==null&&s0(s),s=Rf(t,e,n,r),s===null&&Id(t,e,r,_u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Id(t,e,r,null,n)}}var _u=null;function Rf(t,e,n,r){if(_u=null,t=np(r),t=mi(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _u=t,null}function c0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WC()){case rp:return 1;case t0:return 4;case gu:case HC:return 16;case n0:return 536870912;default:return 16}default:return 16}}var Nr=null,ap=null,Ql=null;function d0(){if(Ql)return Ql;var t,e=ap,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ql=i.slice(t,1<r?1-r:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function wg(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:wg,this.isPropagationStopped=wg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lp=Gt(eo),Ba=ze({},eo,{view:0,detail:0}),ix=Gt(Ba),yd,_d,wo,_c=ze({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(yd=t.screenX-wo.screenX,_d=t.screenY-wo.screenY):_d=yd=0,wo=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),Eg=Gt(_c),sx=ze({},_c,{dataTransfer:0}),ox=Gt(sx),ax=ze({},Ba,{relatedTarget:0}),wd=Gt(ax),lx=ze({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Gt(lx),cx=ze({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Gt(cx),fx=ze({},eo,{data:0}),Sg=Gt(fx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mx[t])?!!e[t]:!1}function up(){return gx}var vx=ze({},Ba,{key:function(t){if(t.key){var e=hx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=Gt(vx),_x=ze({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=Gt(_x),wx=ze({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),Ex=Gt(wx),Sx=ze({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Gt(Sx),xx=ze({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=Gt(xx),kx=[9,13,27,32],cp=tr&&"CompositionEvent"in window,zo=null;tr&&"documentMode"in document&&(zo=document.documentMode);var Ix=tr&&"TextEvent"in window&&!zo,f0=tr&&(!cp||zo&&8<zo&&11>=zo),xg=String.fromCharCode(32),bg=!1;function h0(t,e){switch(t){case"keyup":return kx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Tx(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(bg=!0,xg);case"textInput":return t=e.data,t===xg&&bg?null:t;default:return null}}function Nx(t,e){if(rs)return t==="compositionend"||!cp&&h0(t,e)?(t=d0(),Ql=ap=Nr=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f0&&e.locale!=="ko"?null:e.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Px[t.type]:e==="textarea"}function m0(t,e,n,r){G_(r),e=wu(e,"onChange"),0<e.length&&(n=new lp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,da=null;function Rx(t){k0(t,0)}function wc(t){var e=os(t);if(U_(e))return t}function Ax(t,e){if(t==="change")return e}var g0=!1;if(tr){var Ed;if(tr){var Sd="oninput"in document;if(!Sd){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),Sd=typeof Ig.oninput=="function"}Ed=Sd}else Ed=!1;g0=Ed&&(!document.documentMode||9<document.documentMode)}function Tg(){Vo&&(Vo.detachEvent("onpropertychange",v0),da=Vo=null)}function v0(t){if(t.propertyName==="value"&&wc(da)){var e=[];m0(e,da,t,np(t)),Q_(Rx,e)}}function Ox(t,e,n){t==="focusin"?(Tg(),Vo=e,da=n,Vo.attachEvent("onpropertychange",v0)):t==="focusout"&&Tg()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(da)}function Lx(t,e){if(t==="click")return wc(e)}function Mx(t,e){if(t==="input"||t==="change")return wc(e)}function Fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:Fx;function fa(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hf.call(e,i)||!En(t[i],e[i]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _0(){for(var t=window,e=hu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hu(t.document)}return e}function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=_0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pg(n,s);var o=Pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=tr&&"documentMode"in document&&11>=document.documentMode,is=null,Af=null,$o=null,Of=!1;function Rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||is==null||is!==hu(r)||(r=is,"selectionStart"in r&&dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&fa($o,r)||($o=r,r=wu(Af,"onSelect"),0<r.length&&(e=new lp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Cd={},w0={};tr&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Ec(t){if(Cd[t])return Cd[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return Cd[t]=e[n];return t}var E0=Ec("animationend"),S0=Ec("animationiteration"),C0=Ec("animationstart"),x0=Ec("transitionend"),b0=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){b0.set(t,e),Hi(e,[t])}for(var xd=0;xd<Ag.length;xd++){var bd=Ag[xd],zx=bd.toLowerCase(),Vx=bd[0].toUpperCase()+bd.slice(1);ii(zx,"on"+Vx)}ii(E0,"onAnimationEnd");ii(S0,"onAnimationIteration");ii(C0,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(x0,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zC(r,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Og(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Og(i,a,u),s=l}}}if(mu)throw t=Tf,mu=!1,Tf=null,t}function Ne(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(I0(e,t,2,!1),n.add(r))}function kd(t,e,n){var r=0;e&&(r|=4),I0(n,t,r,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[Il]){t[Il]=!0,D_.forEach(function(n){n!=="selectionchange"&&($x.has(n)||kd(n,!1,t),kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,kd("selectionchange",!1,e))}}function I0(t,e,n,r){switch(c0(e)){case 1:var i=nx;break;case 4:i=rx;break;default:i=op}n=i.bind(null,e,n,t),i=void 0,!If||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Q_(function(){var u=s,c=np(n),d=[];e:{var f=b0.get(t);if(f!==void 0){var m=lp,v=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":m=yx;break;case"focusin":v="focus",m=wd;break;case"focusout":v="blur",m=wd;break;case"beforeblur":case"afterblur":m=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ex;break;case E0:case S0:case C0:m=ux;break;case x0:m=Cx;break;case"scroll":m=ix;break;case"wheel":m=bx;break;case"copy":case"cut":case"paste":m=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cg}var _=(e&4)!==0,x=!_&&t==="scroll",y=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,y!==null&&(p=aa(h,y),p!=null&&_.push(pa(h,p,g)))),x)break;h=h.return}0<_.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==bf&&(v=n.relatedTarget||n.fromElement)&&(mi(v)||v[nr]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?mi(v):null,v!==null&&(x=Gi(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Eg,p="onMouseLeave",y="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Cg,p="onPointerLeave",y="onPointerEnter",h="pointer"),x=m==null?f:os(m),g=v==null?f:os(v),f=new _(p,h+"leave",m,n,c),f.target=x,f.relatedTarget=g,p=null,mi(c)===u&&(_=new _(y,h+"enter",v,n,c),_.target=g,_.relatedTarget=x,p=_),x=p,m&&v)t:{for(_=m,y=v,h=0,g=_;g;g=Xi(g))h++;for(g=0,p=y;p;p=Xi(p))g++;for(;0<h-g;)_=Xi(_),h--;for(;0<g-h;)y=Xi(y),g--;for(;h--;){if(_===y||y!==null&&_===y.alternate)break t;_=Xi(_),y=Xi(y)}_=null}else _=null;m!==null&&Dg(d,f,m,_,!1),v!==null&&x!==null&&Dg(d,x,v,_,!0)}}e:{if(f=u?os(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Ax;else if(kg(f))if(g0)C=Mx;else{C=Dx;var N=Ox}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Lx);if(C&&(C=C(t,u))){m0(d,C,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&wf(f,"number",f.value)}switch(N=u?os(u):window,t){case"focusin":(kg(N)||N.contentEditable==="true")&&(is=N,Af=u,$o=null);break;case"focusout":$o=Af=is=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,Rg(d,n,c);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":Rg(d,n,c)}var b;if(cp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else rs?h0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(f0&&n.locale!=="ko"&&(rs||P!=="onCompositionStart"?P==="onCompositionEnd"&&rs&&(b=d0()):(Nr=c,ap="value"in Nr?Nr.value:Nr.textContent,rs=!0)),N=wu(u,P),0<N.length&&(P=new Sg(P,t,null,n,c),d.push({event:P,listeners:N}),b?P.data=b:(b=p0(n),b!==null&&(P.data=b)))),(b=Ix?Tx(t,n):Nx(t,n))&&(u=wu(u,"onBeforeInput"),0<u.length&&(c=new Sg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}k0(d,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(pa(t,s,i)),s=aa(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=aa(n,s),l!=null&&o.unshift(pa(n,l,a))):i||(l=aa(n,s),l!=null&&o.push(pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Bx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function Lg(t){return(typeof t=="string"?t:""+t).replace(Bx,`
`).replace(Wx,"")}function Tl(t,e,n){if(e=Lg(e),Lg(t)!==e&&n)throw Error(O(425))}function Eu(){}var Df=null,Lf=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(Yx)}:Ff;function Yx(t){setTimeout(function(){throw t})}function Td(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),kn="__reactFiber$"+to,ma="__reactProps$"+to,nr="__reactContainer$"+to,jf="__reactEvents$"+to,Kx="__reactListeners$"+to,qx="__reactHandles$"+to;function mi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[kn])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[kn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Sc(t){return t[ma]||null}var Uf=[],as=-1;function si(t){return{current:t}}function Re(t){0>as||(t.current=Uf[as],Uf[as]=null,as--)}function Ie(t,e){as++,Uf[as]=t.current,t.current=e}var qr={},Ct=si(qr),Ft=si(!1),Ni=qr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Su(){Re(Ft),Re(Ct)}function jg(t,e,n){if(Ct.current!==qr)throw Error(O(168));Ie(Ct,e),Ie(Ft,n)}function T0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,OC(t)||"Unknown",i));return ze({},n,r)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Ni=Ct.current,Ie(Ct,t),Ie(Ft,Ft.current),!0}function Ug(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=T0(t,e,Ni),r.__reactInternalMemoizedMergedChildContext=t,Re(Ft),Re(Ct),Ie(Ct,t)):Re(Ft),Ie(Ft,n)}var Gn=null,Cc=!1,Nd=!1;function N0(t){Gn===null?Gn=[t]:Gn.push(t)}function Qx(t){Cc=!0,N0(t)}function oi(){if(!Nd&&Gn!==null){Nd=!0;var t=0,e=ye;try{var n=Gn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,Cc=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),e0(rp,oi),i}finally{ye=e,Nd=!1}}return null}var ls=[],us=0,xu=null,bu=0,Xt=[],Jt=0,Pi=null,Yn=1,Kn="";function di(t,e){ls[us++]=bu,ls[us++]=xu,xu=t,bu=e}function P0(t,e,n){Xt[Jt++]=Yn,Xt[Jt++]=Kn,Xt[Jt++]=Pi,Pi=t;var r=Yn;t=Kn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-vn(e)+i|n<<i|r,Kn=s+t}else Yn=1<<s|n<<i|r,Kn=t}function fp(t){t.return!==null&&(di(t,1),P0(t,1,0))}function hp(t){for(;t===xu;)xu=ls[--us],ls[us]=null,bu=ls[--us],ls[us]=null;for(;t===Pi;)Pi=Xt[--Jt],Xt[Jt]=null,Kn=Xt[--Jt],Xt[Jt]=null,Yn=Xt[--Jt],Xt[Jt]=null}var Bt=null,$t=null,Le=!1,fn=null;function R0(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,$t=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pi!==null?{id:Yn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,$t=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(Le){var e=$t;if(e){var n=e;if(!zg(t,e)){if(zf(t))throw Error(O(418));e=jr(n.nextSibling);var r=Bt;e&&zg(t,e)?R0(r,n):(t.flags=t.flags&-4097|2,Le=!1,Bt=t)}}else{if(zf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Le=!1,Bt=t}}}function Vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Nl(t){if(t!==Bt)return!1;if(!Le)return Vg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=$t)){if(zf(t))throw A0(),Error(O(418));for(;e;)R0(t,e),e=jr(e.nextSibling)}if(Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Bt?jr(t.stateNode.nextSibling):null;return!0}function A0(){for(var t=$t;t;)t=jr(t.nextSibling)}function Ms(){$t=Bt=null,Le=!1}function pp(t){fn===null?fn=[t]:fn.push(t)}var Xx=cr.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ku=si(null),Iu=null,cs=null,mp=null;function gp(){mp=cs=Iu=null}function vp(t){var e=ku.current;Re(ku),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){Iu=t,mp=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(mp!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Iu===null)throw Error(O(308));cs=t,Iu.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var gi=null;function yp(t){gi===null?gi=[t]:gi.push(t)}function O0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function _p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ip(t,n)}}function $g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=ze({},d,f);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=d}}function Bg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var L0=new O_.Component().refs;function Bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Vr(t),s=Jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(yn(e,t,i,r),Jl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Vr(t),s=Jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(yn(e,t,i,r),Jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Vr(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(yn(e,t,r,n),Jl(e,t,r))}};function Wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function M0(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=jt(e)?Ni:Ct.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=L0,_p(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=jt(e)?Ni:Ct.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xc.enqueueReplaceState(i,i.state,null),Tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===L0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Pl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gg(t){var e=t._init;return e(t._payload)}function F0(t){function e(y,h){if(t){var g=y.deletions;g===null?(y.deletions=[h],y.flags|=16):g.push(h)}}function n(y,h){if(!t)return null;for(;h!==null;)e(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=$r(y,h),y.index=0,y.sibling=null,y}function s(y,h,g){return y.index=g,t?(g=y.alternate,g!==null?(g=g.index,g<h?(y.flags|=2,h):g):(y.flags|=2,h)):(y.flags|=1048576,h)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,h,g,p){return h===null||h.tag!==6?(h=Md(g,y.mode,p),h.return=y,h):(h=i(h,g),h.return=y,h)}function l(y,h,g,p){var C=g.type;return C===ns?c(y,h,g.props.children,p,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sr&&Gg(C)===h.type)?(p=i(h,g.props),p.ref=Eo(y,h,g),p.return=y,p):(p=iu(g.type,g.key,g.props,null,y.mode,p),p.ref=Eo(y,h,g),p.return=y,p)}function u(y,h,g,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Fd(g,y.mode,p),h.return=y,h):(h=i(h,g.children||[]),h.return=y,h)}function c(y,h,g,p,C){return h===null||h.tag!==7?(h=ki(g,y.mode,p,C),h.return=y,h):(h=i(h,g),h.return=y,h)}function d(y,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Md(""+h,y.mode,g),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _l:return g=iu(h.type,h.key,h.props,null,y.mode,g),g.ref=Eo(y,null,h),g.return=y,g;case ts:return h=Fd(h,y.mode,g),h.return=y,h;case Sr:var p=h._init;return d(y,p(h._payload),g)}if(Do(h)||go(h))return h=ki(h,y.mode,g,null),h.return=y,h;Pl(y,h)}return null}function f(y,h,g,p){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(y,h,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _l:return g.key===C?l(y,h,g,p):null;case ts:return g.key===C?u(y,h,g,p):null;case Sr:return C=g._init,f(y,h,C(g._payload),p)}if(Do(g)||go(g))return C!==null?null:c(y,h,g,p,null);Pl(y,g)}return null}function m(y,h,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return y=y.get(g)||null,a(h,y,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _l:return y=y.get(p.key===null?g:p.key)||null,l(h,y,p,C);case ts:return y=y.get(p.key===null?g:p.key)||null,u(h,y,p,C);case Sr:var N=p._init;return m(y,h,g,N(p._payload),C)}if(Do(p)||go(p))return y=y.get(g)||null,c(h,y,p,C,null);Pl(h,p)}return null}function v(y,h,g,p){for(var C=null,N=null,b=h,P=h=0,U=null;b!==null&&P<g.length;P++){b.index>P?(U=b,b=null):U=b.sibling;var M=f(y,b,g[P],p);if(M===null){b===null&&(b=U);break}t&&b&&M.alternate===null&&e(y,b),h=s(M,h,P),N===null?C=M:N.sibling=M,N=M,b=U}if(P===g.length)return n(y,b),Le&&di(y,P),C;if(b===null){for(;P<g.length;P++)b=d(y,g[P],p),b!==null&&(h=s(b,h,P),N===null?C=b:N.sibling=b,N=b);return Le&&di(y,P),C}for(b=r(y,b);P<g.length;P++)U=m(b,y,P,g[P],p),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?P:U.key),h=s(U,h,P),N===null?C=U:N.sibling=U,N=U);return t&&b.forEach(function(Z){return e(y,Z)}),Le&&di(y,P),C}function _(y,h,g,p){var C=go(g);if(typeof C!="function")throw Error(O(150));if(g=C.call(g),g==null)throw Error(O(151));for(var N=C=null,b=h,P=h=0,U=null,M=g.next();b!==null&&!M.done;P++,M=g.next()){b.index>P?(U=b,b=null):U=b.sibling;var Z=f(y,b,M.value,p);if(Z===null){b===null&&(b=U);break}t&&b&&Z.alternate===null&&e(y,b),h=s(Z,h,P),N===null?C=Z:N.sibling=Z,N=Z,b=U}if(M.done)return n(y,b),Le&&di(y,P),C;if(b===null){for(;!M.done;P++,M=g.next())M=d(y,M.value,p),M!==null&&(h=s(M,h,P),N===null?C=M:N.sibling=M,N=M);return Le&&di(y,P),C}for(b=r(y,b);!M.done;P++,M=g.next())M=m(b,y,P,M.value,p),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?P:M.key),h=s(M,h,P),N===null?C=M:N.sibling=M,N=M);return t&&b.forEach(function(Q){return e(y,Q)}),Le&&di(y,P),C}function x(y,h,g,p){if(typeof g=="object"&&g!==null&&g.type===ns&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _l:e:{for(var C=g.key,N=h;N!==null;){if(N.key===C){if(C=g.type,C===ns){if(N.tag===7){n(y,N.sibling),h=i(N,g.props.children),h.return=y,y=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sr&&Gg(C)===N.type){n(y,N.sibling),h=i(N,g.props),h.ref=Eo(y,N,g),h.return=y,y=h;break e}n(y,N);break}else e(y,N);N=N.sibling}g.type===ns?(h=ki(g.props.children,y.mode,p,g.key),h.return=y,y=h):(p=iu(g.type,g.key,g.props,null,y.mode,p),p.ref=Eo(y,h,g),p.return=y,y=p)}return o(y);case ts:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(y,h.sibling),h=i(h,g.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else e(y,h);h=h.sibling}h=Fd(g,y.mode,p),h.return=y,y=h}return o(y);case Sr:return N=g._init,x(y,h,N(g._payload),p)}if(Do(g))return v(y,h,g,p);if(go(g))return _(y,h,g,p);Pl(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,g),h.return=y,y=h):(n(y,h),h=Md(g,y.mode,p),h.return=y,y=h),o(y)):n(y,h)}return x}var Fs=F0(!0),j0=F0(!1),Ha={},Rn=si(Ha),ga=si(Ha),va=si(Ha);function vi(t){if(t===Ha)throw Error(O(174));return t}function wp(t,e){switch(Ie(va,e),Ie(ga,t),Ie(Rn,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}Re(Rn),Ie(Rn,e)}function js(){Re(Rn),Re(ga),Re(va)}function U0(t){vi(va.current);var e=vi(Rn.current),n=Sf(e,t.type);e!==n&&(Ie(ga,t),Ie(Rn,n))}function Ep(t){ga.current===t&&(Re(Rn),Re(ga))}var je=si(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pd=[];function Sp(){for(var t=0;t<Pd.length;t++)Pd[t]._workInProgressVersionPrimary=null;Pd.length=0}var Zl=cr.ReactCurrentDispatcher,Rd=cr.ReactCurrentBatchConfig,Ri=0,Ue=null,tt=null,ut=null,Pu=!1,Bo=!1,ya=0,Jx=0;function _t(){throw Error(O(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function xp(t,e,n,r,i,s){if(Ri=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?nb:rb,t=n(r,i),Bo){s=0;do{if(Bo=!1,ya=0,25<=s)throw Error(O(301));s+=1,ut=tt=null,e.updateQueue=null,Zl.current=ib,t=n(r,i)}while(Bo)}if(Zl.current=Ru,e=tt!==null&&tt.next!==null,Ri=0,ut=tt=Ue=null,Pu=!1,e)throw Error(O(300));return t}function bp(){var t=ya!==0;return ya=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ue.memoizedState=ut=t:ut=ut.next=t,ut}function sn(){if(tt===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ut===null?Ue.memoizedState:ut.next;if(e!==null)ut=e,tt=t;else{if(t===null)throw Error(O(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ut===null?Ue.memoizedState=ut=t:ut=ut.next=t}return ut}function _a(t,e){return typeof e=="function"?e(t):e}function Ad(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ri&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ue.lanes|=c,Ai|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,En(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function z0(){}function V0(t,e){var n=Ue,r=sn(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,kp(W0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,wa(9,B0.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(O(349));Ri&30||$0(n,e,i)}return i}function $0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,r){e.value=n,e.getSnapshot=r,H0(e)&&G0(t)}function W0(t,e,n){return n(function(){H0(e)&&G0(t)})}function H0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function G0(t){var e=rr(t,1);e!==null&&yn(e,t,1,-1)}function Yg(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=tb.bind(null,Ue,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y0(){return sn().memoizedState}function eu(t,e,n,r){var i=bn();Ue.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function bc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,r!==null&&Cp(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function Kg(t,e){return eu(8390656,8,t,e)}function kp(t,e){return bc(2048,8,t,e)}function K0(t,e){return bc(4,2,t,e)}function q0(t,e){return bc(4,4,t,e)}function Q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,Q0.bind(null,e,t),n)}function Ip(){}function J0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ew(t,e,n){return Ri&21?(En(n,e)||(n=r0(),Ue.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function Zx(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ye=n,Rd.transition=r}}function tw(){return sn().memoizedState}function eb(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nw(t))rw(e,n);else if(n=O0(t,e,n,r),n!==null){var i=Nt();yn(n,t,r,i),iw(n,e,r)}}function tb(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nw(t))rw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,o)){var l=e.interleaved;l===null?(i.next=i,yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=O0(t,e,i,r),n!==null&&(i=Nt(),yn(n,t,r,i),iw(n,e,r))}}function nw(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function rw(t,e){Bo=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ip(t,n)}}var Ru={readContext:rn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},nb={readContext:rn,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eu(4194308,4,Q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return eu(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eb.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:Yg,useDebugValue:Ip,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=Yg(!1),e=t[0];return t=Zx.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=bn();if(Le){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),ft===null)throw Error(O(349));Ri&30||$0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kg(W0.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,B0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bn(),e=ft.identifierPrefix;if(Le){var n=Kn,r=Yn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rb={readContext:rn,useCallback:J0,useContext:rn,useEffect:kp,useImperativeHandle:X0,useInsertionEffect:K0,useLayoutEffect:q0,useMemo:Z0,useReducer:Ad,useRef:Y0,useState:function(){return Ad(_a)},useDebugValue:Ip,useDeferredValue:function(t){var e=sn();return ew(e,tt.memoizedState,t)},useTransition:function(){var t=Ad(_a)[0],e=sn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:V0,useId:tw,unstable_isNewReconciler:!1},ib={readContext:rn,useCallback:J0,useContext:rn,useEffect:kp,useImperativeHandle:X0,useInsertionEffect:K0,useLayoutEffect:q0,useMemo:Z0,useReducer:Od,useRef:Y0,useState:function(){return Od(_a)},useDebugValue:Ip,useDeferredValue:function(t){var e=sn();return tt===null?e.memoizedState=t:ew(e,tt.memoizedState,t)},useTransition:function(){var t=Od(_a)[0],e=sn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:V0,useId:tw,unstable_isNewReconciler:!1};function Us(t,e){try{var n="",r=e;do n+=AC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sb=typeof WeakMap=="function"?WeakMap:Map;function sw(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ou||(Ou=!0,th=r),Hf(t,e)},n}function ow(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hf(t,e),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_b.bind(null,t,e,n),e.then(t,t))}function Qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var ob=cr.ReactCurrentOwner,Lt=!1;function kt(t,e,n,r){e.child=t===null?j0(e,null,n,r):Fs(e,t.child,n,r)}function Jg(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=xp(t,e,n,r,s,i),n=bp(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Le&&n&&fp(e),e.flags|=1,kt(t,e,r,i),e.child)}function Zg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,aw(t,e,s,r,i)):(t=iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=$r(s,r),t.ref=e.ref,t.return=e,e.child=t}function aw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fa(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Gf(t,e,n,r,i)}function lw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(fs,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(fs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(fs,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(fs,Vt),Vt|=r;return kt(t,e,i,n),e.child}function uw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=jt(n)?Ni:Ct.current;return s=Ls(e,s),xs(e,i),n=xp(t,e,n,r,s,i),r=bp(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Le&&r&&fp(e),e.flags|=1,kt(t,e,n,i),e.child)}function ev(t,e,n,r,i){if(jt(n)){var s=!0;Cu(e)}else s=!1;if(xs(e,i),e.stateNode===null)tu(t,e),M0(e,n,r),Wf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=jt(n)?Ni:Ct.current,u=Ls(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hg(e,o,r,u),Cr=!1;var f=e.memoizedState;o.state=f,Tu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ft.current||Cr?(typeof c=="function"&&(Bf(e,n,c,r),l=e.memoizedState),(a=Cr||Wg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=jt(n)?Ni:Ct.current,l=Ls(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hg(e,o,r,l),Cr=!1,f=e.memoizedState,o.state=f,Tu(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||Ft.current||Cr?(typeof m=="function"&&(Bf(e,n,m,r),v=e.memoizedState),(u=Cr||Wg(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Yf(t,e,n,r,s,i)}function Yf(t,e,n,r,i,s){uw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ug(e,n,!1),ir(t,e,s);r=e.stateNode,ob.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Ug(e,n,!0),e.child}function cw(t){var e=t.stateNode;e.pendingContext?jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jg(t,e.context,!1),wp(t,e.containerInfo)}function tv(t,e,n,r,i){return Ms(),pp(i),e.flags|=256,kt(t,e,n,r),e.child}var Kf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function dw(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(je,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Kf,t):Tp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ab(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$r(a,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kf,r}return s=t.child,t=s.sibling,r=$r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tp(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rl(t,e,n,r){return r!==null&&pp(r),Fs(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ab(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dd(Error(O(422))),Rl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Kf,s);if(!(e.mode&1))return Rl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Dd(s,r,void 0),Rl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),yn(r,t,i,-1))}return Dp(),r=Dd(Error(O(421))),Rl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$t=jr(i.nextSibling),Bt=e,Le=!0,fn=null,t!==null&&(Xt[Jt++]=Yn,Xt[Jt++]=Kn,Xt[Jt++]=Pi,Yn=t.id,Kn=t.overflow,Pi=e),e=Tp(e,r.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$f(t.return,e,n)}function Ld(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ld(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ld(e,!0,n,null,s);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lb(t,e,n){switch(e.tag){case 3:cw(e),Ms();break;case 5:U0(e);break;case 1:jt(e.type)&&Cu(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?dw(t,e,n):(Ie(je,je.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Ie(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,lw(t,e,n)}return ir(t,e,n)}var hw,Qf,pw,mw;hw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qf=function(){};pw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vi(Rn.current);var s=null;switch(n){case"input":i=yf(t,i),r=yf(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=Ef(t,i),r=Ef(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eu)}Cf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mw=function(t,e,n,r){n!==r&&(e.flags|=4)};function So(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ub(t,e,n){var r=e.pendingProps;switch(hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return jt(e.type)&&Su(),wt(e),null;case 3:return r=e.stateNode,js(),Re(Ft),Re(Ct),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(ih(fn),fn=null))),Qf(t,e),wt(e),null;case 5:Ep(e);var i=vi(va.current);if(n=e.type,t!==null&&e.stateNode!=null)pw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return wt(e),null}if(t=vi(Rn.current),Nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[ma]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)Ne(Mo[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":dg(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":hg(r,s),Ne("invalid",r)}Cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":wl(r),fg(r,s,!0);break;case"textarea":wl(r),pg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[ma]=r,hw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)Ne(Mo[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":dg(t,r),i=yf(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":hg(t,r),i=Ef(t,r),Ne("invalid",t);break;default:i=r}Cf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",t):l!=null&&Jh(t,s,l,o))}switch(n){case"input":wl(t),fg(t,r,!1);break;case"textarea":wl(t),pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)mw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=vi(va.current),vi(Rn.current),Nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return wt(e),null;case 13:if(Re(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&$t!==null&&e.mode&1&&!(e.flags&128))A0(),Ms(),e.flags|=98560,s=!1;else if(s=Nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[kn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else fn!==null&&(ih(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?st===0&&(st=3):Dp())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return js(),Qf(t,e),t===null&&ha(e.stateNode.containerInfo),wt(e),null;case 10:return vp(e.type._context),wt(e),null;case 17:return jt(e.type)&&Su(),wt(e),null;case 19:if(Re(je),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)So(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,So(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>zs&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return wt(e),null}else 2*qe()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=je.current,Ie(je,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return Op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function cb(t,e){switch(hp(e),e.tag){case 1:return jt(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),Re(Ft),Re(Ct),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(Re(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(je),null;case 4:return js(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var Al=!1,Et=!1,db=typeof WeakSet=="function"?WeakSet:Set,$=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Xf(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var rv=!1;function fb(t,e){if(Df=yu,t=_0(),dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:t,selectionRange:n},yu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,x=v.memoizedState,y=e.stateNode,h=y.getSnapshotBeforeUpdate(e.elementType===e.type?_:un(e.type,_),x);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return v=rv,rv=!1,v}function Wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xf(e,n,s)}i=i.next}while(i!==r)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gw(t){var e=t.alternate;e!==null&&(t.alternate=null,gw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[ma],delete e[jf],delete e[Kx],delete e[qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vw(t){return t.tag===5||t.tag===3||t.tag===4}function iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eu));else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}var pt=null,cn=!1;function _r(t,e,n){for(n=n.child;n!==null;)yw(t,e,n),n=n.sibling}function yw(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:Et||ds(n,e);case 6:var r=pt,i=cn;pt=null,_r(t,e,n),pt=r,cn=i,pt!==null&&(cn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(cn?(t=pt,n=n.stateNode,t.nodeType===8?Td(t.parentNode,n):t.nodeType===1&&Td(t,n),ca(t)):Td(pt,n.stateNode));break;case 4:r=pt,i=cn,pt=n.stateNode.containerInfo,cn=!0,_r(t,e,n),pt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xf(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!Et&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,_r(t,e,n),Et=r):_r(t,e,n);break;default:_r(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new db),e.forEach(function(r){var i=Eb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,cn=!1;break e;case 3:pt=a.stateNode.containerInfo,cn=!0;break e;case 4:pt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(pt===null)throw Error(O(160));yw(s,o,i),pt=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_w(e,t),e=e.sibling}function _w(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),xn(t),r&4){try{Wo(3,t,t.return),kc(3,t)}catch(_){Ve(t,t.return,_)}try{Wo(5,t,t.return)}catch(_){Ve(t,t.return,_)}}break;case 1:ln(e,t),xn(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(ln(e,t),xn(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{oa(i,"")}catch(_){Ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z_(i,s),xf(a,o);var u=xf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?H_(i,d):c==="dangerouslySetInnerHTML"?B_(i,d):c==="children"?oa(i,d):Jh(i,c,d,u)}switch(a){case"input":_f(i,s);break;case"textarea":V_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ws(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[ma]=s}catch(_){Ve(t,t.return,_)}}break;case 6:if(ln(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ve(t,t.return,_)}}break;case 3:if(ln(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(_){Ve(t,t.return,_)}break;case 4:ln(e,t),xn(t);break;case 13:ln(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rp=qe())),r&4&&sv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,ln(e,t),Et=u):ln(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(d=$=c;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:Wo(4,f,f.return);break;case 1:ds(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ve(r,n,_)}}break;case 5:ds(f,f.return);break;case 22:if(f.memoizedState!==null){av(d);continue}}m!==null?(m.return=f,$=m):av(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=W_("display",o))}catch(_){Ve(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(e,t),xn(t),r&4&&sv(t);break;case 21:break;default:ln(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vw(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=iv(t);eh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iv(t);Zf(t,a,o);break;default:throw Error(O(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hb(t,e,n){$=t,ww(t)}function ww(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Al;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Al;var u=Et;if(Al=o,(Et=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?lv(i):l!==null?(l.return=o,$=l):lv(i);for(;s!==null;)$=s,ww(s),s=s.sibling;$=i,Al=a,Et=u}ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ov(t)}}function ov(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Et||e.flags&512&&Jf(e)}catch(f){Ve(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function av(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function lv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Jf(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Jf(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var pb=Math.ceil,Au=cr.ReactCurrentDispatcher,Np=cr.ReactCurrentOwner,nn=cr.ReactCurrentBatchConfig,he=0,ft=null,Ze=null,gt=0,Vt=0,fs=si(0),st=0,Ea=null,Ai=0,Ic=0,Pp=0,Ho=null,Dt=null,Rp=0,zs=1/0,Hn=null,Ou=!1,th=null,zr=null,Ol=!1,Pr=null,Du=0,Go=0,nh=null,nu=-1,ru=0;function Nt(){return he&6?qe():nu!==-1?nu:nu=qe()}function Vr(t){return t.mode&1?he&2&&gt!==0?gt&-gt:Xx.transition!==null?(ru===0&&(ru=r0()),ru):(t=ye,t!==0||(t=window.event,t=t===void 0?16:c0(t.type)),t):1}function yn(t,e,n,r){if(50<Go)throw Go=0,nh=null,Error(O(185));$a(t,n,r),(!(he&2)||t!==ft)&&(t===ft&&(!(he&2)&&(Ic|=n),st===4&&br(t,gt)),Ut(t,r),n===1&&he===0&&!(e.mode&1)&&(zs=qe()+500,Cc&&oi()))}function Ut(t,e){var n=t.callbackNode;XC(t,e);var r=vu(t,t===ft?gt:0);if(r===0)n!==null&&vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vg(n),e===1)t.tag===0?Qx(uv.bind(null,t)):N0(uv.bind(null,t)),Gx(function(){!(he&6)&&oi()}),n=null;else{switch(i0(r)){case 1:n=rp;break;case 4:n=t0;break;case 16:n=gu;break;case 536870912:n=n0;break;default:n=gu}n=Tw(n,Ew.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ew(t,e){if(nu=-1,ru=0,he&6)throw Error(O(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=vu(t,t===ft?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lu(t,r);else{e=r;var i=he;he|=2;var s=Cw();(ft!==t||gt!==e)&&(Hn=null,zs=qe()+500,bi(t,e));do try{vb();break}catch(a){Sw(t,a)}while(1);gp(),Au.current=s,he=i,Ze!==null?e=0:(ft=null,gt=0,e=st)}if(e!==0){if(e===2&&(i=Nf(t),i!==0&&(r=i,e=rh(t,i))),e===1)throw n=Ea,bi(t,0),br(t,r),Ut(t,qe()),n;if(e===6)br(t,r);else{if(i=t.current.alternate,!(r&30)&&!mb(i)&&(e=Lu(t,r),e===2&&(s=Nf(t),s!==0&&(r=s,e=rh(t,s))),e===1))throw n=Ea,bi(t,0),br(t,r),Ut(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:fi(t,Dt,Hn);break;case 3:if(br(t,r),(r&130023424)===r&&(e=Rp+500-qe(),10<e)){if(vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ff(fi.bind(null,t,Dt,Hn),e);break}fi(t,Dt,Hn);break;case 4:if(br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pb(r/1960))-r,10<r){t.timeoutHandle=Ff(fi.bind(null,t,Dt,Hn),r);break}fi(t,Dt,Hn);break;case 5:fi(t,Dt,Hn);break;default:throw Error(O(329))}}}return Ut(t,qe()),t.callbackNode===n?Ew.bind(null,t):null}function rh(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(bi(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&ih(e)),t}function ih(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function mb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Pp,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function uv(t){if(he&6)throw Error(O(327));bs();var e=vu(t,0);if(!(e&1))return Ut(t,qe()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=rh(t,r))}if(n===1)throw n=Ea,bi(t,0),br(t,e),Ut(t,qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,Dt,Hn),Ut(t,qe()),null}function Ap(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(zs=qe()+500,Cc&&oi())}}function Oi(t){Pr!==null&&Pr.tag===0&&!(he&6)&&bs();var e=he;he|=1;var n=nn.transition,r=ye;try{if(nn.transition=null,ye=1,t)return t()}finally{ye=r,nn.transition=n,he=e,!(he&6)&&oi()}}function Op(){Vt=fs.current,Re(fs)}function bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hx(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Su();break;case 3:js(),Re(Ft),Re(Ct),Sp();break;case 5:Ep(r);break;case 4:js();break;case 13:Re(je);break;case 19:Re(je);break;case 10:vp(r.type._context);break;case 22:case 23:Op()}n=n.return}if(ft=t,Ze=t=$r(t.current,null),gt=Vt=e,st=0,Ea=null,Pp=Ic=Ai=0,Dt=Ho=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function Sw(t,e){do{var n=Ze;try{if(gp(),Zl.current=Ru,Pu){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pu=!1}if(Ri=0,ut=tt=Ue=null,Bo=!1,ya=0,Np.current=null,n===null||n.return===null){st=1,Ea=e,Ze=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Qg(o);if(m!==null){m.flags&=-257,Xg(m,o,a,s,e),m.mode&1&&qg(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){qg(s,u,e),Dp();break e}l=Error(O(426))}}else if(Le&&a.mode&1){var x=Qg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Xg(x,o,a,s,e),pp(Us(l,a));break e}}s=l=Us(l,a),st!==4&&(st=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=sw(s,l,e);$g(s,y);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zr===null||!zr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=ow(s,a,e);$g(s,p);break e}}s=s.return}while(s!==null)}bw(n)}catch(C){e=C,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function Cw(){var t=Au.current;return Au.current=Ru,t===null?Ru:t}function Dp(){(st===0||st===3||st===2)&&(st=4),ft===null||!(Ai&268435455)&&!(Ic&268435455)||br(ft,gt)}function Lu(t,e){var n=he;he|=2;var r=Cw();(ft!==t||gt!==e)&&(Hn=null,bi(t,e));do try{gb();break}catch(i){Sw(t,i)}while(1);if(gp(),he=n,Au.current=r,Ze!==null)throw Error(O(261));return ft=null,gt=0,st}function gb(){for(;Ze!==null;)xw(Ze)}function vb(){for(;Ze!==null&&!$C();)xw(Ze)}function xw(t){var e=Iw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?bw(t):Ze=e,Np.current=null}function bw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cb(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Ze=null;return}}else if(n=ub(n,e,Vt),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);st===0&&(st=5)}function fi(t,e,n){var r=ye,i=nn.transition;try{nn.transition=null,ye=1,yb(t,e,n,r)}finally{nn.transition=i,ye=r}return null}function yb(t,e,n,r){do bs();while(Pr!==null);if(he&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JC(t,s),t===ft&&(Ze=ft=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,Tw(gu,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=ye;ye=1;var a=he;he|=4,Np.current=null,fb(t,n),_w(n,t),jx(Lf),yu=!!Df,Lf=Df=null,t.current=n,hb(n),BC(),he=a,ye=o,nn.transition=s}else t.current=n;if(Ol&&(Ol=!1,Pr=t,Du=i),s=t.pendingLanes,s===0&&(zr=null),GC(n.stateNode),Ut(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ou)throw Ou=!1,t=th,th=null,t;return Du&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===nh?Go++:(Go=0,nh=t):Go=0,oi(),null}function bs(){if(Pr!==null){var t=i0(Du),e=nn.transition,n=ye;try{if(nn.transition=null,ye=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Du=0,he&6)throw Error(O(331));var i=he;for(he|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Wo(8,c,s)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var f=c.sibling,m=c.return;if(gw(c),c===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,$=y;break e}$=s.return}}var h=t.current;for($=h;$!==null;){o=$;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,$=g;else e:for(o=h;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(C){Ve(a,a.return,C)}if(a===o){$=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,$=p;break e}$=a.return}}if(he=i,oi(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(yc,t)}catch{}r=!0}return r}finally{ye=n,nn.transition=e}}return!1}function cv(t,e,n){e=Us(n,e),e=sw(t,e,1),t=Ur(t,e,1),e=Nt(),t!==null&&($a(t,1,e),Ut(t,e))}function Ve(t,e,n){if(t.tag===3)cv(t,t,n);else for(;e!==null;){if(e.tag===3){cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){t=Us(n,t),t=ow(e,t,1),e=Ur(e,t,1),t=Nt(),e!==null&&($a(e,1,t),Ut(e,t));break}}e=e.return}}function _b(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(gt&n)===n&&(st===4||st===3&&(gt&130023424)===gt&&500>qe()-Rp?bi(t,0):Pp|=n),Ut(t,e)}function kw(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=Nt();t=rr(t,e),t!==null&&($a(t,e,n),Ut(t,n))}function wb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kw(t,n)}function Eb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),kw(t,n)}var Iw;Iw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,lb(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Le&&e.flags&1048576&&P0(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tu(t,e),t=e.pendingProps;var i=Ls(e,Ct.current);xs(e,n),i=xp(null,e,r,t,i,n);var s=bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Cu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_p(e),i.updater=xc,e.stateNode=i,i._reactInternals=e,Wf(e,r,t,n),e=Yf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&fp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Cb(r),t=un(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=ev(null,e,r,t,n);break e;case 11:e=Jg(null,e,r,t,n);break e;case 14:e=Zg(null,e,r,un(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),ev(t,e,r,i,n);case 3:e:{if(cw(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D0(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Us(Error(O(423)),e),e=tv(t,e,r,n,i);break e}else if(r!==i){i=Us(Error(O(424)),e),e=tv(t,e,r,n,i);break e}else for($t=jr(e.stateNode.containerInfo.firstChild),Bt=e,Le=!0,fn=null,n=j0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),r===i){e=ir(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return U0(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mf(r,i)?o=null:s!==null&&Mf(r,s)&&(e.flags|=32),uw(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return dw(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Jg(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(ku,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!Ft.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=rn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Zg(t,e,r,i,n);case 15:return aw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),tu(t,e),e.tag=1,jt(r)?(t=!0,Cu(e)):t=!1,xs(e,n),M0(e,r,i),Wf(e,r,i,n),Yf(null,e,r,!0,t,n);case 19:return fw(t,e,n);case 22:return lw(t,e,n)}throw Error(O(156,e.tag))};function Tw(t,e){return e0(t,e)}function Sb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new Sb(t,e,n,r)}function Lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cb(t){if(typeof t=="function")return Lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ep)return 11;if(t===tp)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return ki(n.children,i,s,e);case Zh:o=8,i|=8;break;case pf:return t=en(12,n,e,i|2),t.elementType=pf,t.lanes=s,t;case mf:return t=en(13,n,e,i),t.elementType=mf,t.lanes=s,t;case gf:return t=en(19,n,e,i),t.elementType=gf,t.lanes=s,t;case F_:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case M_:o=9;break e;case ep:o=11;break e;case tp:o=14;break e;case Sr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=en(22,t,r,e),t.elementType=F_,t.lanes=n,t.stateNode={isHidden:!1},t}function Md(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Fd(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mp(t,e,n,r,i,s,o,a,l){return t=new xb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_p(s),t}function bb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nw(t){if(!t)return qr;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(jt(n))return T0(t,n,e)}return e}function Pw(t,e,n,r,i,s,o,a,l){return t=Mp(n,r,!0,t,i,s,o,a,l),t.context=Nw(null),n=t.current,r=Nt(),i=Vr(n),s=Jn(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,$a(t,i,r),Ut(t,r),t}function Nc(t,e,n,r){var i=e.current,s=Nt(),o=Vr(i);return n=Nw(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(yn(t,i,o,s),Jl(t,i,o)),o}function Mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fp(t,e){dv(t,e),(t=t.alternate)&&dv(t,e)}function kb(){return null}var Rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}Pc.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Nc(t,e,null,null)};Pc.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oi(function(){Nc(null,t,null,null)}),e[nr]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&u0(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fv(){}function Ib(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mu(o);s.call(u)}}var o=Pw(e,r,t,0,null,!1,!1,"",fv);return t._reactRootContainer=o,t[nr]=o.current,ha(t.nodeType===8?t.parentNode:t),Oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Mu(l);a.call(u)}}var l=Mp(t,0,!1,null,null,!1,!1,"",fv);return t._reactRootContainer=l,t[nr]=l.current,ha(t.nodeType===8?t.parentNode:t),Oi(function(){Nc(e,l,n,r)}),l}function Ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Mu(o);a.call(l)}}Nc(e,o,t,i)}else o=Ib(n,e,t,i,r);return Mu(o)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(ip(e,n|1),Ut(e,qe()),!(he&6)&&(zs=qe()+500,oi()))}break;case 13:Oi(function(){var r=rr(t,1);if(r!==null){var i=Nt();yn(r,t,1,i)}}),Fp(t,1)}};sp=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=Nt();yn(e,t,134217728,n)}Fp(t,134217728)}};o0=function(t){if(t.tag===13){var e=Vr(t),n=rr(t,e);if(n!==null){var r=Nt();yn(n,t,e,r)}Fp(t,e)}};a0=function(){return ye};l0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};kf=function(t,e,n){switch(e){case"input":if(_f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sc(r);if(!i)throw Error(O(90));U_(r),_f(r,i)}}}break;case"textarea":V_(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};K_=Ap;q_=Oi;var Tb={usingClientEntryPoint:!1,Events:[Wa,os,Sc,G_,Y_,Ap]},Co={findFiberByHostInstance:mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nb={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J_(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{yc=Dl.inject(Nb),Pn=Dl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tb;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(O(200));return bb(t,e,null,n)};Ht.createRoot=function(t,e){if(!Up(t))throw Error(O(299));var n=!1,r="",i=Rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mp(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,ha(t.nodeType===8?t.parentNode:t),new jp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=J_(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Oi(t)};Ht.hydrate=function(t,e,n){if(!Rc(e))throw Error(O(200));return Ac(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pw(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,ha(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pc(e)};Ht.render=function(t,e,n){if(!Rc(e))throw Error(O(200));return Ac(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(O(40));return t._reactRootContainer?(Oi(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Ht.unstable_batchedUpdates=Ap;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Ac(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function Aw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Aw)}catch(t){console.error(t)}}Aw(),P_.exports=Ht;var Pb=P_.exports,hv=Pb;ff.createRoot=hv.createRoot,ff.hydrateRoot=hv.hydrateRoot;const Rb=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ab(t){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n=`${{}.PUBLIC_URL}/service-worker.js`;Rb?(Ob(n,t),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Ow(n,t)})}}function Ow(t,e){navigator.serviceWorker.register(t).then(n=>{n.onupdatefound=()=>{const r=n.installing;r!=null&&(r.onstatechange=()=>{r.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(n=>{console.error("Error during service worker registration:",n)})}function Ob(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");n.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(i=>{i.unregister().then(()=>{window.location.reload()})}):Ow(t,e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const Db="modulepreload",Lb=function(t){return"/"+t},pv={},Mb=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Lb(s),s in pv)return;pv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Db,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Fb=t=>{t&&t instanceof Function&&Mb(()=>import("./web-vitals-9f4c2f45.js"),[]).then(({getCLS:e,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{e(t),n(t),r(t),i(t),s(t)})};/**
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
 */const Dw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(t,e){if(!t)throw no(e)},no=function(t){return new Error("Firebase Database ("+Dw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Lw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Ub;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ub extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mw=function(t){const e=Lw(t);return zp.encodeByteArray(e,!0)},Fu=function(t){return Mw(t).replace(/\./g,"")},ju=function(t){try{return zp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zb(t){return Fw(void 0,t)}function Fw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vb(n)||(t[n]=Fw(t[n],e[n]));return t}function Vb(t){return t!=="__proto__"}/**
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
 */function $b(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bb=()=>$b().__FIREBASE_DEFAULTS__,Wb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ju(t[1]);return e&&JSON.parse(e)},Vp=()=>{try{return Bb()||Wb()||Hb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jw=t=>{var e,n;return(n=(e=Vp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gb=t=>{const e=jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uw=()=>{var t;return(t=Vp())===null||t===void 0?void 0:t.config},zw=t=>{var e;return(e=Vp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let Ga=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function Yb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),a].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function Kb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qb(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $w(){return Dw.NODE_ADMIN===!0}function Qb(){try{return typeof indexedDB=="object"}catch{return!1}}function Xb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jb="FirebaseError";class ai extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jb,Object.setPrototypeOf(this,ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Zb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ai(i,a,r)}}function Zb(t,e){return t.replace(ek,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ek=/\{\$([^}]+)}/g;/**
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
 */function Sa(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
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
 */const Bw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Sa(ju(s[0])||""),n=Sa(ju(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},tk=function(t){const e=Bw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nk=function(t){const e=Bw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mv(s)&&mv(o)){if(!zu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mv(t){return t!==null&&typeof t=="object"}/**
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
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class rk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ik(t,e){const n=new sk(t,e);return n.subscribe.bind(n)}class sk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ok(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jd),i.error===void 0&&(i.error=jd),i.complete===void 0&&(i.complete=jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ok(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jd(){}function Oc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ak=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class lk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ga;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ck(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uk(t){return t===hi?void 0:t}function ck(t){return t.instantiationMode==="EAGER"}/**
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
 */class dk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const fk={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},hk=we.INFO,pk={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},mk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bp{constructor(e){this.name=e,this._logLevel=hk,this._logHandler=mk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const gk=(t,e)=>e.some(n=>t instanceof n);let gv,vv;function vk(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yk(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ww=new WeakMap,oh=new WeakMap,Hw=new WeakMap,Ud=new WeakMap,Wp=new WeakMap;function _k(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ww.set(n,t)}).catch(()=>{}),Wp.set(e,t),e}function wk(t){if(oh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oh.set(t,e)}let ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ek(t){ah=t(ah)}function Sk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zd(this),e,...n);return Hw.set(r,e.sort?e.sort():[e]),Br(r)}:yk().includes(t)?function(...e){return t.apply(zd(this),e),Br(Ww.get(this))}:function(...e){return Br(t.apply(zd(this),e))}}function Ck(t){return typeof t=="function"?Sk(t):(t instanceof IDBTransaction&&wk(t),gk(t,vk())?new Proxy(t,ah):t)}function Br(t){if(t instanceof IDBRequest)return _k(t);if(Ud.has(t))return Ud.get(t);const e=Ck(t);return e!==t&&(Ud.set(t,e),Wp.set(e,t)),e}const zd=t=>Wp.get(t);function xk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const bk=["get","getKey","getAll","getAllKeys","count"],kk=["put","add","delete","clear"],Vd=new Map;function yv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vd.get(e))return Vd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vd.set(e,s),s}Ek(t=>({...t,get:(e,n,r)=>yv(e,n)||t.get(e,n,r),has:(e,n)=>!!yv(e,n)||t.has(e,n)}));/**
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
 */class Ik{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lh="@firebase/app",_v="0.9.20";/**
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
 */const Li=new Bp("@firebase/app"),Nk="@firebase/app-compat",Pk="@firebase/analytics-compat",Rk="@firebase/analytics",Ak="@firebase/app-check-compat",Ok="@firebase/app-check",Dk="@firebase/auth",Lk="@firebase/auth-compat",Mk="@firebase/database",Fk="@firebase/database-compat",jk="@firebase/functions",Uk="@firebase/functions-compat",zk="@firebase/installations",Vk="@firebase/installations-compat",$k="@firebase/messaging",Bk="@firebase/messaging-compat",Wk="@firebase/performance",Hk="@firebase/performance-compat",Gk="@firebase/remote-config",Yk="@firebase/remote-config-compat",Kk="@firebase/storage",qk="@firebase/storage-compat",Qk="@firebase/firestore",Xk="@firebase/firestore-compat",Jk="firebase",Zk="10.5.0";/**
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
 */const uh="[DEFAULT]",eI={[lh]:"fire-core",[Nk]:"fire-core-compat",[Rk]:"fire-analytics",[Pk]:"fire-analytics-compat",[Ok]:"fire-app-check",[Ak]:"fire-app-check-compat",[Dk]:"fire-auth",[Lk]:"fire-auth-compat",[Mk]:"fire-rtdb",[Fk]:"fire-rtdb-compat",[jk]:"fire-fn",[Uk]:"fire-fn-compat",[zk]:"fire-iid",[Vk]:"fire-iid-compat",[$k]:"fire-fcm",[Bk]:"fire-fcm-compat",[Wk]:"fire-perf",[Hk]:"fire-perf-compat",[Gk]:"fire-rc",[Yk]:"fire-rc-compat",[Kk]:"fire-gcs",[qk]:"fire-gcs-compat",[Qk]:"fire-fst",[Xk]:"fire-fst-compat","fire-js":"fire-js",[Jk]:"fire-js-all"};/**
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
 */const Vu=new Map,ch=new Map;function tI(t,e){try{t.container.addComponent(e)}catch(n){Li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(ch.has(e))return Li.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of Vu.values())tI(n,t);return!0}function Hp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new Ya("app","Firebase",nI);/**
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
 */class rI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const io=Zk;function Gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=Uw()),!n)throw Wr.create("no-options");const s=Vu.get(i);if(s){if(zu(n,s.options)&&zu(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new dk(i);for(const l of ch.values())o.addComponent(l);const a=new rI(n,r,o);return Vu.set(i,a),a}function Yw(t=uh){const e=Vu.get(t);if(!e&&t===uh&&Uw())return Gw();if(!e)throw Wr.create("no-app",{appName:t});return e}function Hr(t,e,n){var r;let i=(r=eI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Li.warn(a.join(" "));return}$s(new Di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iI="firebase-heartbeat-database",sI=1,Ca="firebase-heartbeat-store";let $d=null;function Kw(){return $d||($d=xk(iI,sI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ca)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),$d}async function oI(t){try{return await(await Kw()).transaction(Ca).objectStore(Ca).get(qw(t))}catch(e){if(e instanceof ai)Li.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Li.warn(n.message)}}}async function wv(t,e){try{const r=(await Kw()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,qw(t)),await r.done}catch(n){if(n instanceof ai)Li.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Li.warn(r.message)}}}function qw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aI=1024,lI=30*24*60*60*1e3;class uI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ev();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ev(),{heartbeatsToSend:n,unsentEntries:r}=cI(this._heartbeatsCache.heartbeats),i=Fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ev(){return new Date().toISOString().substring(0,10)}function cI(t,e=aI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qb()?Xb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fI(t){$s(new Di("platform-logger",e=>new Ik(e),"PRIVATE")),$s(new Di("heartbeat",e=>new uI(e),"PRIVATE")),Hr(lh,_v,t),Hr(lh,_v,"esm2017"),Hr("fire-js","")}fI("");var hI="firebase",pI="10.5.0";/**
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
 */Hr(hI,pI,"app");const Cv="@firebase/database",xv="1.0.1";/**
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
 */let Qw="";function mI(t){Qw=t}/**
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
 */class gI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Xw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gI(e)}}catch{}return new vI},yi=Xw("localStorage"),dh=Xw("sessionStorage");/**
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
 */const ks=new Bp("@firebase/database"),yI=function(){let t=1;return function(){return t++}}(),Jw=function(t){const e=ak(t),n=new rk;n.update(e);const r=n.digest();return zp.encodeByteArray(r)},Ka=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ka.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let Ii=null,bv=!0;const _I=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ks.logLevel=we.VERBOSE,Ii=ks.log.bind(ks),e&&dh.set("logging_enabled",!0)):typeof t=="function"?Ii=t:(Ii=null,dh.remove("logging_enabled"))},mt=function(...t){if(bv===!0&&(bv=!1,Ii===null&&dh.get("logging_enabled")===!0&&_I(!0)),Ii){const e=Ka.apply(null,t);Ii(e)}},qa=function(t){return function(...e){mt(t,...e)}},fh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ka(...t);ks.error(e)},sr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ka(...t)}`;throw ks.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+Ka(...t);ks.warn(e)},wI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bs="[MIN_NAME]",Mi="[MAX_NAME]",Yi=function(t,e){if(t===e)return 0;if(t===Bs||e===Mi)return-1;if(e===Bs||t===Mi)return 1;{const n=kv(t),r=kv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SI=function(t,e){return t===e?0:t<e?-1:1},xo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},Yp=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=Yp(t[e[r]]);return n+="}",n},Zw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const e1=function(t){L(!Gp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},CI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kI=new RegExp("^-?(0*)\\d{1,10}$"),II=-2147483648,TI=2147483647,kv=function(t){if(kI.test(t)){const e=Number(t);if(e>=II&&e<=TI)return e}return null},so=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class RI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class Is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Is.OWNER="owner";/**
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
 */const Kp="5",t1="v",n1="s",r1="r",i1="f",s1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,o1="ls",a1="p",hh="ac",l1="websocket",u1="long_polling";/**
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
 */class c1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function d1(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===l1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===u1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AI(t)&&(n.ns=t.namespace);const i=[];return yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class OI{constructor(){this.counters_={}}incrementCounter(e,n=1){Ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zb(this.counters_)}}/**
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
 */const Bd={},Wd={};function qp(t){const e=t.toString();return Bd[e]||(Bd[e]=new OI),Bd[e]}function DI(t,e){const n=t.toString();return Wd[n]||(Wd[n]=e()),Wd[n]}/**
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
 */class LI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&so(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Iv="start",MI="close",FI="pLPCommand",jI="pRTLPCB",f1="id",h1="pw",p1="ser",UI="cb",zI="seg",VI="ts",$I="d",BI="dframe",m1=1870,g1=30,WI=m1-g1,HI=25e3,GI=3e4;class hs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(e),this.stats_=qp(n),this.urlFn=l=>(this.appCheckToken&&(l[hh]=this.appCheckToken),d1(n,u1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GI)),EI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Iv)this.id=a,this.password=l;else if(o===MI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Iv]="t",r[p1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[UI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[t1]=Kp,this.transportSessionId&&(r[n1]=this.transportSessionId),this.lastSessionId&&(r[o1]=this.lastSessionId),this.applicationId&&(r[a1]=this.applicationId),this.appCheckToken&&(r[hh]=this.appCheckToken),typeof location<"u"&&location.hostname&&s1.test(location.hostname)&&(r[r1]=i1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hs.forceAllow_=!0}static forceDisallow(){hs.forceDisallow_=!0}static isAvailable(){return hs.forceAllow_?!0:!hs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CI()&&!xI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mw(n),i=Zw(r,WI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BI]="t",r[f1]=e,r[h1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yI(),window[FI+this.uniqueCallbackIdentifier]=e,window[jI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[f1]=this.myID,e[h1]=this.myPW,e[p1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+g1+r.length<=m1;){const o=this.pendingSegs.shift();r=r+"&"+zI+i+"="+o.seg+"&"+VI+i+"="+o.ts+"&"+$I+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const YI=16384,KI=45e3;let $u=null;typeof MozWebSocket<"u"?$u=MozWebSocket:typeof WebSocket<"u"&&($u=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=qp(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[t1]=Kp,typeof location<"u"&&location.hostname&&s1.test(location.hostname)&&(o[r1]=i1),n&&(o[n1]=n),r&&(o[o1]=r),i&&(o[hh]=i),s&&(o[a1]=s),d1(e,l1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yi.set("previous_websocket_failure",!0);try{let r;$w(),this.mySock=new $u(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&$u!==null&&!hn.forceDisallow_}static previouslyFailed(){return yi.isInMemoryStorage||yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){yi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zw(n,YI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
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
 */class xa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hs,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of xa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xa.globalTransportInitialized_=!1;/**
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
 */const qI=6e4,QI=5e3,XI=10*1024,JI=100*1024,Hd="t",Tv="d",ZI="s",Nv="r",eT="e",Pv="o",Rv="a",Av="n",Ov="p",tT="h";class nT{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new xa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hd in e){const n=e[Hd];n===Rv?this.upgradeIfSecondaryHealthy_():n===Nv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xo("t",e),r=xo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ov,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Av,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xo("t",e),r=xo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xo(Hd,e);if(Tv in e){const r=e[Tv];if(n===tT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Av){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZI?this.onConnectionShutdown_(r):n===Nv?this.onReset_(r):n===eT?fh("Server Error: "+r):n===Pv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kp!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(QI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ov,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class v1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class y1{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Bu extends y1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$p()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bu}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Dv=32,Lv=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qr(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function Xp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ba(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Tt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return Tt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iT(t,e){const n=ba(t,0),r=ba(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Yi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Jp(t,e){if(Qr(t)!==Qr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qr(t)>Qr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class sT{constructor(e,n){this.errorPrefix_=n,this.parts_=ba(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dc(this.parts_[r]);w1(this)}}function oT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dc(e),w1(t)}function aT(t){const e=t.parts_.pop();t.byteLength_-=Dc(e),t.parts_.length>0&&(t.byteLength_-=1)}function w1(t){if(t.byteLength_>Lv)throw new Error(t.errorPrefix_+"has a key path longer than "+Lv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dv+") or object contains a cycle "+pi(t))}function pi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Zp extends y1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zp}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bo=1e3,lT=60*5*1e3,Mv=30*1e3,uT=1.3,cT=3e4,dT="server_kill",Fv=3;class Zn extends v1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zn.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bo,this.maxReconnectDelay_=lT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$w())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(it(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ga,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ln(e,"w")){const r=Vs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fh("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cT&&(this.reconnectDelay_=bo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new nT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Pt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(dT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sh(this.interruptReasons_)&&(this.reconnectDelay_=bo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Yp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fv&&(this.reconnectDelay_=Mv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qw.replace(/\./g,"-")]=1,$p()?e["framework.cordova"]=1:Vw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bu.getInstance().currentlyOnline();return sh(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
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
 */class Lc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Bs,e),i=new oe(Bs,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Ll;class E1 extends Lc{static get __EMPTY_NODE(){return Ll}static set __EMPTY_NODE(e){Ll=e}compare(e,n){return Yi(e.name,n.name)}isDefinedOn(e){throw no("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Mi,Ll)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Ll)}toString(){return".key"}}const Ts=new E1;/**
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
 */class Ml{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ct.RED,this.left=i??Mt.EMPTY_NODE,this.right=s??Mt.EMPTY_NODE}copy(e,n,r,i,s){return new ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ct.RED=!0;ct.BLACK=!1;class fT{copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ct.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ct.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ml(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new fT;/**
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
 */function hT(t,e){return Yi(t.name,e.name)}function em(t,e){return Yi(t,e)}/**
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
 */let ph;function pT(t){ph=t}const S1=function(t){return typeof t=="number"?"number:"+e1(t):"string:"+t},C1=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ln(e,".sv"),"Priority must be a string or number.")}else L(t===ph||t.isEmpty(),"priority of unexpected type.");L(t===ph||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jv;class lt{constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),C1(this.priorityNode_)}static set __childrenNodeConstructor(e){jv=e}static get __childrenNodeConstructor(){return jv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:se(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Qr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+S1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=e1(this.value_):e+=this.value_,this.lazyHash_=Jw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=lt.VALUE_TYPE_ORDER.indexOf(n),s=lt.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let x1,b1;function mT(t){x1=t}function gT(t){b1=t}class vT extends Lc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Yi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Mi,new lt("[PRIORITY-POST]",b1))}makePost(e,n){const r=x1(e);return new oe(n,new lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new vT;/**
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
 */const yT=Math.log(2);class _T{constructor(e){const n=s=>parseInt(Math.log(s)/yT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ct(f,d.node,ct.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),_=i(m+1,u);return d=t[m],f=n?n(d):d,new ct(f,d.node,ct.BLACK,v,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,_){const x=d-v,y=d;d-=v;const h=i(x+1,y),g=t[x],p=n?n(g):g;m(new ct(p,g.node,_,null,h))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),x=Math.pow(2,l.count-(v+1));_?f(x,ct.BLACK):(f(x,ct.BLACK),f(x,ct.RED))}return c},o=new _T(t.length),a=s(o);return new Mt(r||e,a)};/**
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
 */let Gd;const Ji={};class qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Ji&&We,"ChildrenNode.ts has not been loaded"),Gd=Gd||new qn({".priority":Ji},{".priority":We}),Gd}get(e){const n=Vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return Ln(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Wu(r,e.getCompare()):a=Ji;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new qn(c,u)}addToIndexes(e,n){const r=Uu(this.indexes_,(i,s)=>{const o=Vs(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Wu(a,o.getCompare())}else return Ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new qn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Uu(this.indexes_,i=>{if(i===Ji)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new qn(r,this.indexSet_)}}/**
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
 */let ko;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&C1(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ko||(ko=new J(new Mt(em),null,qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ko}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ko:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ko:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{L(se(e)!==".priority"||Qr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+S1(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Jw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qa?-1:0}withIndex(e){if(e===Ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ts?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wT extends J{constructor(){super(new Mt(em),J.EMPTY_NODE,qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Qa=new wT;Object.defineProperties(oe,{MIN:{value:new oe(Bs,J.EMPTY_NODE)},MAX:{value:new oe(Mi,Qa)}});E1.__EMPTY_NODE=J.EMPTY_NODE;lt.__childrenNodeConstructor=J;pT(Qa);gT(Qa);/**
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
 */const ET=!0;function nt(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,nt(e))}if(!(t instanceof Array)&&ET){const n=[];let r=!1;if(yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=nt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=Wu(n,hT,o=>o.name,em);if(r){const o=Wu(n,We.getCompare());return new J(s,nt(e),new qn({".priority":o},{".priority":We}))}else return new J(s,nt(e),qn.Default)}else{let n=J.EMPTY_NODE;return yt(t,(r,i)=>{if(Ln(t,r)&&r.substring(0,1)!=="."){const s=nt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(nt(e))}}mT(nt);/**
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
 */class ST extends Lc{constructor(e){super(),this.indexPath_=e,L(!ce(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Yi(e.name,n.name):s}makePost(e,n){const r=nt(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Qa);return new oe(Mi,e)}toString(){return ba(this.indexPath_,0).join("/")}}/**
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
 */class CT extends Lc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Yi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=nt(e);return new oe(n,r)}toString(){return".value"}}const xT=new CT;/**
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
 */function k1(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ka(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ia(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class tm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ka(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Ia(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(ka(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ia(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ta{constructor(e){this.indexedFilter_=new tm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ta.getStartPost_(e),this.endPost_=Ta.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(We,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ia(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ka(n,d));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ws(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ka(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
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
 */class nm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bs}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new nm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IT(t){return t.loadsAllData()?new tm(t.getIndex()):t.hasLimit()?new kT(t):new Ta(t)}function Uv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===xT?n="$value":t.index_===Ts?n="$key":(L(t.index_ instanceof ST,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
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
 */class Hu extends v1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Hu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Uv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Vs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Hu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Uv(e._queryParams),r=e._path.toString(),i=new Ga;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Sa(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class TT{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gu(){return{value:null,children:new Map}}function I1(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Gu());const i=t.children.get(r);e=ke(e),I1(i,e,n)}}function mh(t,e,n){t.value!==null?n(e,t.value):NT(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);mh(i,s,n)})}function NT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class PT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Vv=10*1e3,RT=30*1e3,AT=5*60*1e3;class OT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PT(e);const r=Vv+(RT-Vv)*Math.random();Yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yt(e,(i,s)=>{s>0&&Ln(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*AT))}}/**
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
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function rm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function im(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Yu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=rm()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Yu(me(),n,this.revert)}}else return L(se(this.path)===e,"operationForChild called for unrelated child."),new Yu(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Na{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Na(this.source,me()):new Na(this.source,ke(this.path))}}/**
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
 */class Fi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return ce(this.path)?new Fi(this.source,me(),this.snap.getImmediateChild(e)):new Fi(this.source,ke(this.path),this.snap)}}/**
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
 */class Hs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Fi(this.source,me(),n.value):new Hs(this.source,me(),n)}else return L(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hs(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Xr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bT(o.childName,o.snapshotNode))}),Io(t,i,"child_removed",e,r,n),Io(t,i,"child_added",e,r,n),Io(t,i,"child_moved",s,r,n),Io(t,i,"child_changed",e,r,n),Io(t,i,"value",e,r,n),i}function Io(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>FT(t,a,l)),o.forEach(a=>{const l=MT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function MT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FT(t,e,n){if(e.childName==null||n.childName==null)throw no("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Mc(t,e){return{eventCache:t,serverCache:e}}function Ko(t,e,n,r){return Mc(new Xr(e,n,r),t.serverCache)}function T1(t,e,n,r){return Mc(t.eventCache,new Xr(e,n,r))}function Ku(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ji(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yd;const jT=()=>(Yd||(Yd=new Mt(SI)),Yd);class be{constructor(e,n=jT()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return yt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ce(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ke(e),n);return s!=null?{path:Be(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new be(null)}}set(e,n){if(ce(e))return new be(n,this.children);{const r=se(e),s=(this.children.get(r)||new be(null)).set(ke(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(ke(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(ce(e))return n;{const r=se(e),s=(this.children.get(r)||new be(null)).setTree(ke(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(ke(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(ke(e),Be(n,i),r):new be(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new be(null))}}function qo(t,e,n){if(ce(e))return new _n(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Tt(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function gh(t,e,n){let r=t;return yt(n,(i,s)=>{r=qo(r,Be(e,i),s)}),r}function $v(t,e){if(ce(e))return _n.empty();{const n=t.writeTree_.setTree(e,new be(null));return new _n(n)}}function vh(t,e){return Ki(t,e)!=null}function Ki(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Tt(n.path,e)):null}function Bv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Gr(t,e){if(ce(e))return t;{const n=Ki(t,e);return n!=null?new _n(new be(n)):new _n(t.writeTree_.subtree(e))}}function yh(t){return t.writeTree_.isEmpty()}function Gs(t,e){return N1(me(),t.writeTree_,e)}function N1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=N1(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
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
 */function Fc(t,e){return O1(e,t)}function UT(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qo(t.visibleWrites,e,n)),t.lastWriteId=r}function zT(t,e,n,r){L(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=gh(t.visibleWrites,e,n),t.lastWriteId=r}function VT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $T(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&BT(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return WT(t),!0;if(r.snap)t.visibleWrites=$v(t.visibleWrites,r.path);else{const a=r.children;yt(a,l=>{t.visibleWrites=$v(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function BT(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Be(t.path,n),e))return!0;return!1}function WT(t){t.visibleWrites=P1(t.allWrites,HT,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function HT(t){return t.visible}function P1(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=Tt(n,o),r=qo(r,a,s.snap)):tn(o,n)&&(a=Tt(o,n),r=qo(r,me(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=Tt(n,o),r=gh(r,a,s.children);else if(tn(o,n))if(a=Tt(o,n),ce(a))r=gh(r,me(),s.children);else{const l=Vs(s.children,se(a));if(l){const u=l.getChild(ke(a));r=qo(r,me(),u)}}}else throw no("WriteRecord should have .snap or .children")}}return r}function R1(t,e,n,r,i){if(!r&&!i){const s=Ki(t.visibleWrites,e);if(s!=null)return s;{const o=Gr(t.visibleWrites,e);if(yh(o))return n;if(n==null&&!vh(o,me()))return null;{const a=n||J.EMPTY_NODE;return Gs(o,a)}}}else{const s=Gr(t.visibleWrites,e);if(!i&&yh(s))return n;if(!i&&n==null&&!vh(s,me()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=P1(t.allWrites,o,e),l=n||J.EMPTY_NODE;return Gs(a,l)}}}function GT(t,e,n){let r=J.EMPTY_NODE;const i=Ki(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Gr(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Gs(Gr(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),Bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Gr(t.visibleWrites,e);return Bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function YT(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(vh(t.visibleWrites,s))return null;{const o=Gr(t.visibleWrites,s);return yh(o)?i.getChild(n):Gs(o,i.getChild(n))}}function KT(t,e,n,r){const i=Be(e,n),s=Ki(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Gr(t.visibleWrites,i);return Gs(o,r.getNode().getImmediateChild(n))}else return null}function qT(t,e){return Ki(t.visibleWrites,e)}function QT(t,e,n,r,i,s,o){let a;const l=Gr(t.visibleWrites,e),u=Ki(l,me());if(u!=null)a=u;else if(n!=null)a=Gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function XT(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function qu(t,e,n,r){return R1(t.writeTree,t.treePath,e,n,r)}function om(t,e){return GT(t.writeTree,t.treePath,e)}function Wv(t,e,n,r){return YT(t.writeTree,t.treePath,e,n,r)}function Qu(t,e){return qT(t.writeTree,Be(t.treePath,e))}function JT(t,e,n,r,i,s){return QT(t.writeTree,t.treePath,e,n,r,i,s)}function am(t,e,n){return KT(t.writeTree,t.treePath,e,n)}function A1(t,e){return O1(Be(t.treePath,e),t.writeTree)}function O1(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ZT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ia(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ka(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ia(r,e.snapshotNode,i.oldSnap));else throw no("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const D1=new eN;class lm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return am(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ji(this.viewCache_),s=JT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function tN(t){return{filter:t}}function nN(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rN(t,e,n,r,i){const s=new ZT;let o,a;if(n.type===mn.OVERWRITE){const u=n;u.source.fromUser?o=_h(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),o=Xu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===mn.MERGE){const u=n;u.source.fromUser?o=sN(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=wh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===mn.ACK_USER_WRITE){const u=n;u.revert?o=lN(t,e,u.path,r,i,s):o=oN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mn.LISTEN_COMPLETE)o=aN(t,e,n.path,r,s);else throw no("Unknown operation type: "+n.type);const l=s.getChanges();return iN(e,o,l),{viewCache:o,changes:l}}function iN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ku(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(k1(Ku(e)))}}function L1(t,e,n,r,i,s){const o=e.eventCache;if(Qu(r,n)!=null)return e;{let a,l;if(ce(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ji(e),c=u instanceof J?u:J.EMPTY_NODE,d=om(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=qu(r,ji(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){L(Qr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Wv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ke(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Wv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=am(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ko(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Xu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ce(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Qr(n)>1)return e;const v=ke(n),x=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),x):u=c.updateChild(l.getNode(),m,x,v,D1,null)}const d=T1(e,u,l.isFullyInitialized()||ce(n),c.filtersNodes()),f=new lm(i,d,s);return L1(t,d,n,i,f,a)}function _h(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new lm(i,e,s);if(ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ko(e,u,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ko(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ke(n),m=a.getNode().getImmediateChild(d);let v;if(ce(f))v=r;else{const _=c.getCompleteChild(d);_!=null?Xp(f)===".priority"&&_.getChild(_1(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=J.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=Ko(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hv(t,e){return t.eventCache.isCompleteForChild(e)}function sN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Be(n,l);Hv(e,se(c))&&(a=_h(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Be(n,l);Hv(e,se(c))||(a=_h(t,a,c,u,i,s,o))}),a}function Gv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function wh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ce(n)?u=r:u=new be(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=Gv(t,m,f);l=Xu(t,l,new Ee(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),_=Gv(t,v,f);l=Xu(t,l,new Ee(d),_,i,s,o,a)}}),l}function oN(t,e,n,r,i,s,o){if(Qu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let u=new be(null);return l.getNode().forEachChild(Ts,(c,d)=>{u=u.set(new Ee(c),d)}),wh(t,e,n,u,i,s,a,o)}else return e}else{let u=new be(null);return r.foreach((c,d)=>{const f=Be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),wh(t,e,n,u,i,s,a,o)}}function aN(t,e,n,r,i){const s=e.serverCache,o=T1(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return L1(t,o,n,r,D1,i)}function lN(t,e,n,r,i,s){let o;if(Qu(r,n)!=null)return e;{const a=new lm(r,e,i),l=e.eventCache.getNode();let u;if(ce(n)||se(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=qu(r,ji(e));else{const d=e.serverCache.getNode();L(d instanceof J,"serverChildren would be complete if leaf node"),c=om(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=se(n);let d=am(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ke(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,J.EMPTY_NODE,ke(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qu(r,ji(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Qu(r,me())!=null,Ko(e,u,o,t.filter.filtersNodes())}}/**
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
 */class uN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tm(r.getIndex()),s=IT(r);this.processor_=tN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),c=new Xr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Xr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Mc(d,c),this.eventGenerator_=new DT(this.query_)}get query(){return this.query_}}function cN(t){return t.viewCache_.serverCache.getNode()}function dN(t){return Ku(t.viewCache_)}function fN(t,e){const n=ji(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Yv(t){return t.eventRegistrations_.length===0}function hN(t,e){t.eventRegistrations_.push(e)}function Kv(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qv(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(L(ji(t.viewCache_),"We should always have a full cache before handling merges"),L(Ku(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rN(t.processor_,i,e,n,r);return nN(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,M1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function pN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(k1(n.getNode())),M1(t,r,n.getNode(),e)}function M1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return LT(t.eventGenerator_,e,n,i)}/**
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
 */let Ju;class F1{constructor(){this.views=new Map}}function mN(t){L(!Ju,"__referenceConstructor has already been defined"),Ju=t}function gN(){return L(Ju,"Reference.ts has not been loaded"),Ju}function vN(t){return t.views.size===0}function um(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),qv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qv(o,e,n,r));return s}}function j1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=qu(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=om(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const u=Mc(new Xr(a,l,!1),new Xr(r,i,!1));return new uN(e,u)}return o}function yN(t,e,n,r,i,s){const o=j1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hN(o,n),pN(o,n)}function _N(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Jr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Kv(u,n,r)),Yv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Kv(l,n,r)),Yv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Jr(t)&&s.push(new(gN())(e._repo,e._path)),{removed:s,events:o}}function U1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Yr(t,e){let n=null;for(const r of t.views.values())n=n||fN(r,e);return n}function z1(t,e){if(e._queryParams.loadsAllData())return jc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function V1(t,e){return z1(t,e)!=null}function Jr(t){return jc(t)!=null}function jc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zu;function wN(t){L(!Zu,"__referenceConstructor has already been defined"),Zu=t}function EN(){return L(Zu,"Reference.ts has not been loaded"),Zu}let SN=1;class Qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=XT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $1(t,e,n,r,i){return UT(t.pendingWriteTree_,e,n,r,i),i?oo(t,new Fi(rm(),e,n)):[]}function CN(t,e,n,r){zT(t.pendingWriteTree_,e,n,r);const i=be.fromObject(n);return oo(t,new Hs(rm(),e,i))}function Rr(t,e,n=!1){const r=VT(t.pendingWriteTree_,e);if($T(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(me(),!0):yt(r.children,o=>{s=s.set(new Ee(o),!0)}),oo(t,new Yu(r.path,s,n))}else return[]}function Xa(t,e,n){return oo(t,new Fi(im(),e,n))}function xN(t,e,n){const r=be.fromObject(n);return oo(t,new Hs(im(),e,r))}function bN(t,e){return oo(t,new Na(im(),e))}function kN(t,e,n){const r=dm(t,n);if(r){const i=fm(r),s=i.path,o=i.queryId,a=Tt(s,e),l=new Na(sm(o),a);return hm(t,s,l)}else return[]}function ec(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||V1(o,e))){const l=_N(o,e,n,r);vN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Jr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=NN(f);for(let v=0;v<m.length;++v){const _=m[v],x=_.query,y=G1(t,_);t.listenProvider_.startListening(Qo(x),Pa(t,x),y.hashFn,y.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qo(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Uc(f));t.listenProvider_.stopListening(Qo(f),m)}))}PN(t,u)}return a}function B1(t,e,n,r){const i=dm(t,r);if(i!=null){const s=fm(i),o=s.path,a=s.queryId,l=Tt(o,e),u=new Fi(sm(a),l,n);return hm(t,o,u)}else return[]}function IN(t,e,n,r){const i=dm(t,r);if(i){const s=fm(i),o=s.path,a=s.queryId,l=Tt(o,e),u=be.fromObject(n),c=new Hs(sm(a),l,u);return hm(t,o,c)}else return[]}function Eh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=Tt(f,i);s=s||Yr(m,v),o=o||Jr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Jr(a),s=s||Yr(a,me())):(a=new F1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=Yr(v,me());_&&(s=s.updateImmediateChild(m,_))}));const u=V1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Uc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=RN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=Fc(t.pendingWriteTree_,i);let d=yN(a,e,n,c,s,l);if(!u&&!o&&!r){const f=z1(a,e);d=d.concat(AN(t,e,f))}return d}function cm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Tt(o,e),u=Yr(a,l);if(u)return u});return R1(i,e,s,n,!0)}function TN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Tt(u,n);r=r||Yr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Yr(i,me()):(i=new F1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Xr(r,!0,!1):null,a=Fc(t.pendingWriteTree_,e._path),l=j1(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return dN(l)}function oo(t,e){return W1(e,t.syncPointTree_,null,Fc(t.pendingWriteTree_,me()))}function W1(t,e,n,r){if(ce(t.path))return H1(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=Yr(i,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=A1(r,o);s=s.concat(W1(a,l,u,c))}return i&&(s=s.concat(um(i,t,r,n))),s}}function H1(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=Yr(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=A1(r,o),c=t.operationForChild(o);c&&(s=s.concat(H1(c,a,l,u)))}),i&&(s=s.concat(um(i,t,r,n))),s}function G1(t,e){const n=e.query,r=Pa(t,n);return{hashFn:()=>(cN(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?kN(t,n._path,r):bN(t,n._path);{const s=bI(i,n);return ec(t,n,null,s)}}}}function Pa(t,e){const n=Uc(e);return t.queryToTagMap.get(n)}function Uc(t){return t._path.toString()+"$"+t._queryIdentifier}function dm(t,e){return t.tagToQueryMap.get(e)}function fm(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function hm(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=Fc(t.pendingWriteTree_,e);return um(r,n,i,null)}function NN(t){return t.fold((e,n,r)=>{if(n&&Jr(n))return[jc(n)];{let i=[];return n&&(i=U1(n)),yt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(EN())(t._repo,t._path):t}function PN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Uc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function RN(){return SN++}function AN(t,e,n){const r=e._path,i=Pa(t,e),s=G1(t,n),o=t.listenProvider_.startListening(Qo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!Jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ce(u)&&c&&Jr(c))return[jc(c).query];{let f=[];return c&&(f=f.concat(U1(c).map(m=>m.query))),yt(d,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Qo(c),Pa(t,c))}}return o}/**
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
 */class pm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pm(n)}node(){return this.node_}}class mm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new mm(this.syncTree_,n)}node(){return cm(this.syncTree_,this.path_)}}const ON=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xv=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return DN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LN(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},DN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},LN=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Y1=function(t,e,n,r){return gm(e,new mm(n,t),r)},K1=function(t,e,n){return gm(t,new pm(e),n)};function gm(t,e,n){const r=t.getPriority().val(),i=Xv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new lt(a,nt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new lt(i))),o.forEachChild(We,(a,l)=>{const u=gm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class vm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ym(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=se(n);for(;i!==null;){const s=Vs(r.node.children,i)||{children:{},childCount:0};r=new vm(i,r,s),n=ke(n),i=se(n)}return r}function ao(t){return t.node.value}function q1(t,e){t.node.value=e,Sh(t)}function Q1(t){return t.node.childCount>0}function MN(t){return ao(t)===void 0&&!Q1(t)}function zc(t,e){yt(t.node.children,(n,r)=>{e(new vm(n,t,r))})}function X1(t,e,n,r){n&&!r&&e(t),zc(t,i=>{X1(i,e,!0,r)}),n&&r&&e(t)}function FN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ja(t){return new Ee(t.parent===null?t.name:Ja(t.parent)+"/"+t.name)}function Sh(t){t.parent!==null&&jN(t.parent,t.name,t)}function jN(t,e,n){const r=MN(n),i=Ln(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Sh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sh(t))}/**
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
 */const UN=/[\[\].#$\/\u0000-\u001F\u007F]/,zN=/[\[\].#$\u0000-\u001F\u007F]/,Kd=10*1024*1024,_m=function(t){return typeof t=="string"&&t.length!==0&&!UN.test(t)},J1=function(t){return typeof t=="string"&&t.length!==0&&!zN.test(t)},VN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),J1(t)},$N=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gp(t)||t&&typeof t=="object"&&Ln(t,".sv")},BN=function(t,e,n,r){r&&e===void 0||Vc(Oc(t,"value"),e,n)},Vc=function(t,e,n){const r=n instanceof Ee?new sT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+pi(r));if(typeof e=="function")throw new Error(t+"contains a function "+pi(r)+" with contents = "+e.toString());if(Gp(e))throw new Error(t+"contains "+e.toString()+" "+pi(r));if(typeof e=="string"&&e.length>Kd/3&&Dc(e)>Kd)throw new Error(t+"contains a string greater than "+Kd+" utf8 bytes "+pi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!_m(o)))throw new Error(t+" contains an invalid key ("+o+") "+pi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oT(r,o),Vc(t,a,r),aT(r)}),i&&s)throw new Error(t+' contains ".value" child '+pi(r)+" in addition to actual children.")}},WN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ba(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!_m(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&tn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},HN=function(t,e,n,r){if(r&&e===void 0)return;const i=Oc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];yt(e,(o,a)=>{const l=new Ee(o);if(Vc(i,a,Be(n,l)),Xp(l)===".priority"&&!$N(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),WN(i,s)},Z1=function(t,e,n,r){if(!(r&&n===void 0)&&!J1(n))throw new Error(Oc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Z1(t,e,n,r)},eE=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},YN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_m(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VN(n))throw new Error(Oc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $c(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function tE(t,e,n){$c(t,n),nE(t,r=>Jp(r,e))}function on(t,e,n){$c(t,n),nE(t,r=>tn(r,e)||tn(e,r))}function nE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ii&&mt("event: "+n.toString()),so(r)}}}/**
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
 */const QN="repo_interrupt",XN=25;class JN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gu(),this.transactionQueueTree_=new vm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZN(t,e,n){if(t.stats_=qp(t.repoInfo_),t.forceRestClient_||NI())t.server_=new Hu(t.repoInfo_,(r,i,s,o)=>{Jv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(r,i,s,o)=>{Jv(t,r,i,s,o)},r=>{Zv(t,r)},r=>{tP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DI(t.repoInfo_,()=>new OT(t.stats_,t.server_)),t.infoData_=new TT,t.infoSyncTree_=new Qv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Xa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wm(t,"connected",!1),t.serverSyncTree_=new Qv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);on(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function eP(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bc(t){return ON({timestamp:eP(t)})}function Jv(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Uu(n,u=>nt(u));o=IN(t.serverSyncTree_,s,l,i)}else{const l=nt(n);o=B1(t.serverSyncTree_,s,l,i)}else if(r){const l=Uu(n,u=>nt(u));o=xN(t.serverSyncTree_,s,l)}else{const l=nt(n);o=Xa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ys(t,s)),on(t.eventQueue_,a,o)}function Zv(t,e){wm(t,"connected",e),e===!1&&sP(t)}function tP(t,e){yt(e,(n,r)=>{wm(t,n,r)})}function wm(t,e,n){const r=new Ee("/.info/"+e),i=nt(n);t.infoData_.updateSnapshot(r,i);const s=Xa(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function Em(t){return t.nextWriteId_++}function nP(t,e,n){const r=TN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=nt(i).withIndex(e._queryParams.getIndex());Eh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Xa(t.serverSyncTree_,e._path,s);else{const a=Pa(t.serverSyncTree_,e);o=B1(t.serverSyncTree_,e._path,s,a)}return on(t.eventQueue_,e._path,o),ec(t.serverSyncTree_,e,n,null,!0),s},i=>(Za(t,"get for query "+it(e)+" failed: "+i),Promise.reject(new Error(i))))}function rP(t,e,n,r,i){Za(t,"set",{path:e.toString(),value:n,priority:r});const s=Bc(t),o=nt(n,r),a=cm(t.serverSyncTree_,e),l=K1(o,a,s),u=Em(t),c=$1(t.serverSyncTree_,e,l,u,!0);$c(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||Pt("set at "+e+" failed: "+f);const _=Rr(t.serverSyncTree_,u,!v);on(t.eventQueue_,e,_),Ch(t,i,f,m)});const d=Cm(t,e);Ys(t,d),on(t.eventQueue_,d,[])}function iP(t,e,n,r){Za(t,"update",{path:e.toString(),value:n});let i=!0;const s=Bc(t),o={};if(yt(n,(a,l)=>{i=!1,o[a]=Y1(Be(e,a),nt(l),t.serverSyncTree_,s)}),i)mt("update() called with empty data.  Don't do anything."),Ch(t,r,"ok",void 0);else{const a=Em(t),l=CN(t.serverSyncTree_,e,o,a);$c(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Pt("update at "+e+" failed: "+u);const f=Rr(t.serverSyncTree_,a,!d),m=f.length>0?Ys(t,e):e;on(t.eventQueue_,m,f),Ch(t,r,u,c)}),yt(n,u=>{const c=Cm(t,Be(e,u));Ys(t,c)}),on(t.eventQueue_,e,[])}}function sP(t){Za(t,"onDisconnectEvents");const e=Bc(t),n=Gu();mh(t.onDisconnect_,me(),(i,s)=>{const o=Y1(i,s,t.serverSyncTree_,e);I1(n,i,o)});let r=[];mh(n,me(),(i,s)=>{r=r.concat(Xa(t.serverSyncTree_,i,s));const o=Cm(t,i);Ys(t,o)}),t.onDisconnect_=Gu(),on(t.eventQueue_,me(),r)}function oP(t,e,n){let r;se(e._path)===".info"?r=Eh(t.infoSyncTree_,e,n):r=Eh(t.serverSyncTree_,e,n),tE(t.eventQueue_,e._path,r)}function ey(t,e,n){let r;se(e._path)===".info"?r=ec(t.infoSyncTree_,e,n):r=ec(t.serverSyncTree_,e,n),tE(t.eventQueue_,e._path,r)}function aP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QN)}function Za(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function Ch(t,e,n,r){e&&so(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function rE(t,e,n){return cm(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Sm(t,e=t.transactionQueueTree_){if(e||Wc(t,e),ao(e)){const n=sE(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lP(t,Ja(e),n)}else Q1(e)&&zc(e,n=>{Sm(t,n)})}function lP(t,e,n){const r=n.map(u=>u.currentWriteId),i=rE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Tt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Za(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Rr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Wc(t,ym(t.transactionQueueTree_,e)),Sm(t,t.transactionQueueTree_),on(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)so(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ys(t,e)}},o)}function Ys(t,e){const n=iE(t,e),r=Ja(n),i=sE(t,n);return uP(t,i,r),r}function uP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Tt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Rr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XN)c=!0,d="maxretry",i=i.concat(Rr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=rE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Vc("transaction failed: Data returned ",m,l.path);let v=nt(m);typeof m=="object"&&m!=null&&Ln(m,".priority")||(v=v.updatePriority(f.getPriority()));const x=l.currentWriteId,y=Bc(t),h=K1(v,f,y);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=Em(t),o.splice(o.indexOf(x),1),i=i.concat($1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Rr(t.serverSyncTree_,x,!0))}else c=!0,d="nodata",i=i.concat(Rr(t.serverSyncTree_,l.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Wc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)so(r[a]);Sm(t,t.transactionQueueTree_)}function iE(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&ao(r)===void 0;)r=ym(r,n),e=ke(e),n=se(e);return r}function sE(t,e){const n=[];return oE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function oE(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);zc(e,i=>{oE(t,i,n)})}function Wc(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,q1(e,n.length>0?n:void 0)}zc(e,r=>{Wc(t,r)})}function Cm(t,e){const n=Ja(iE(t,e)),r=ym(t.transactionQueueTree_,e);return FN(r,i=>{qd(t,i)}),qd(t,r),X1(r,i=>{qd(t,i)}),n}function qd(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?q1(e,void 0):n.length=s+1,on(t.eventQueue_,Ja(e),i);for(let o=0;o<r.length;o++)so(r[o])}}/**
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
 */function cP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ty=function(t,e){const n=fP(t),r=n.namespace;n.domain==="firebase.com"&&sr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new c1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},fP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=cP(t.substring(c,d)));const f=dP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class aE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class lE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:Xp(this._path)}get ref(){return new Mn(this._repo,this._path)}get _queryIdentifier(){const e=zv(this._queryParams),n=Yp(e);return n==="{}"?"default":n}get _queryObject(){return zv(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof xm))return!1;const n=this._repo===e._repo,r=Jp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rT(this._path)}}class Mn extends xm{constructor(e,n){super(e,n,new nm,!1)}get parent(){const e=_1(this._path);return e===null?null:new Mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=Ra(this.ref,e);return new Ks(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ks(i,Ra(this.ref,r),We)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Je(t,e){return t=Ot(t),t._checkNotDeleted("ref"),e!==void 0?Ra(t._root,e):t._root}function Ra(t,e){return t=Ot(t),se(t._path)===null?GN("child","path",e,!1):Z1("child","path",e,!1),new Mn(t._repo,Be(t._path,e))}function hP(t){return eE("remove",t._path),Ar(t,null)}function Ar(t,e){t=Ot(t),eE("set",t._path),BN("set",e,t._path,!1);const n=new Ga;return rP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function qs(t,e){HN("update",e,t._path,!1);const n=new Ga;return iP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function pP(t){t=Ot(t);const e=new uE(()=>{}),n=new Hc(e);return nP(t._repo,t,n).then(r=>new Ks(r,new Mn(t._repo,t._path),t._queryParams.getIndex()))}class Hc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new aE("value",this,new Ks(e.snapshotNode,new Mn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lE(this,e,n):null}matches(e){return e instanceof Hc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class bm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lE(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=Ra(new Mn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new aE(e.type,this,new Ks(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{ey(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new uE(n,s||void 0),a=e==="value"?new Hc(o):new bm(e,o);return oP(t._repo,t,a),()=>ey(t._repo,t,a)}function Xo(t,e,n,r){return mP(t,"value",e,n,r)}function cE(t,...e){let n=Ot(t);for(const r of e)n=r._apply(n);return n}mN(Mn);wN(Mn);/**
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
 */const gP="FIREBASE_DATABASE_EMULATOR_HOST",xh={};let vP=!1;function yP(t,e,n,r){t.repoInfo_=new c1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _P(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ty(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[gP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=ty(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Is(Is.OWNER):new RI(t.name,t.options,e);YN("Invalid Firebase Database URL",o),ce(o.path)||sr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=EP(a,t,c,new PI(t.name,n));return new SP(d,t)}function wP(t,e){const n=xh[e];(!n||n[t.key]!==t)&&sr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aP(t),delete n[t.key]}function EP(t,e,n,r){let i=xh[e.name];i||(i={},xh[e.name]=i);let s=i[t.toURLString()];return s&&sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new JN(t,vP,n,r),i[t.toURLString()]=s,s}class SP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&sr("Cannot call "+e+" on a deleted database.")}}function dE(t=Yw(),e){const n=Hp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Gb("database");r&&CP(n,...r)}return n}function CP(t,e,n,r={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&sr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Is(Is.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Yb(r.mockUserToken,t.app.options.projectId);s=new Is(o)}yP(i,e,n,s)}/**
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
 */function xP(t){mI(io),$s(new Di("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _P(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Hr(Cv,xv,t),Hr(Cv,xv,"esm2017")}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xP();function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bP=fE,hE=new Ya("auth","Firebase",fE());/**
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
 */const tc=new Bp("@firebase/auth");function kP(t,...e){tc.logLevel<=we.WARN&&tc.warn(`Auth (${io}): ${t}`,...e)}function su(t,...e){tc.logLevel<=we.ERROR&&tc.error(`Auth (${io}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw Im(t,...e)}function An(t,...e){return Im(t,...e)}function pE(t,e,n){const r=Object.assign(Object.assign({},bP()),{[e]:n});return new Ya("auth","Firebase",r).create(e,{appName:t.name})}function IP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dn(t,"argument-error"),pE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hE.create(t,...e)}function re(t,e,...n){if(!t)throw Im(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw su(e),new Error(e)}function or(t,e){t||Qn(e)}/**
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
 */function bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TP(){return ny()==="http:"||ny()==="https:"}function ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TP()||Kb()||"connection"in navigator)?navigator.onLine:!0}function PP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class el{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=$p()||Vw()}get(){return NP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tm(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AP=new el(3e4,6e4);function gE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tl(t,e,n,r,i={}){return vE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mE.fetch()(yE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RP),e);try{const i=new DP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pE(t,c,u);Dn(t,c)}}catch(i){if(i instanceof ai)throw i;Dn(t,"network-request-failed",{message:String(i)})}}async function OP(t,e,n,r,i={}){const s=await tl(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tm(t.config,i):`${t.config.apiScheme}://${i}`}class DP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),AP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function LP(t,e){return tl(t,"POST","/v1/accounts:delete",e)}async function MP(t,e){return tl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FP(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),i=Nm(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(Qd(i.auth_time)),issuedAtTime:Jo(Qd(i.iat)),expirationTime:Jo(Qd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qd(t){return Number(t)*1e3}function Nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return su("JWT malformed, contained fewer than 3 sections"),null;try{const i=ju(n);return i?JSON.parse(i):(su("Failed to decode base64 JWT payload"),null)}catch(i){return su("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jP(t){const e=Nm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ai&&UP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _E{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Aa(t,MP(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BP(s.providerUserInfo):[],a=$P(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _E(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function VP(t){const e=Ot(t);await nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $P(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BP(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WP(t,e){const n=await vE(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Oa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oa;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oa,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function wr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ti{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _E(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FP(this,e)}reload(){return VP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Aa(this,LP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:N,stsTokenManager:b}=n;re(g&&b,e,"internal-error");const P=Oa.fromJSON(this.name,b);re(typeof g=="string",e,"internal-error"),wr(d,e.name),wr(f,e.name),re(typeof p=="boolean",e,"internal-error"),re(typeof C=="boolean",e,"internal-error"),wr(m,e.name),wr(v,e.name),wr(_,e.name),wr(x,e.name),wr(y,e.name),wr(h,e.name);const U=new Ti({uid:g,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:C,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:y,lastLoginAt:h});return N&&Array.isArray(N)&&(U.providerData=N.map(M=>Object.assign({},M))),x&&(U._redirectEventId=x),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oa;i.updateFromServerResponse(n);const s=new Ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nc(s),s}}/**
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
 */const ry=new Map;function Xn(t){or(t instanceof Function,"Expected a class definition");let e=ry.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ry.set(t,e),e)}/**
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
 */class wE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wE.type="NONE";const iy=wE;/**
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
 */function ou(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ou(this.userKey,i.apiKey,s),this.fullPersistenceKey=ou("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(Xn(iy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xn(iy);const o=ou(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ti._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ns(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ns(s,e,r))}}/**
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
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bE(e))return"Blackberry";if(kE(e))return"Webos";if(Pm(e))return"Safari";if((e.includes("chrome/")||SE(e))&&!e.includes("edge/"))return"Chrome";if(xE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EE(t=xt()){return/firefox\//i.test(t)}function Pm(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SE(t=xt()){return/crios\//i.test(t)}function CE(t=xt()){return/iemobile/i.test(t)}function xE(t=xt()){return/android/i.test(t)}function bE(t=xt()){return/blackberry/i.test(t)}function kE(t=xt()){return/webos/i.test(t)}function Gc(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HP(t=xt()){var e;return Gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GP(){return qb()&&document.documentMode===10}function IE(t=xt()){return Gc(t)||xE(t)||kE(t)||bE(t)||/windows phone/i.test(t)||CE(t)}function YP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function TE(t,e=[]){let n;switch(t){case"Browser":n=sy(xt());break;case"Worker":n=`${sy(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
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
 */class KP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qP(t,e={}){return tl(t,"GET","/v2/passwordPolicy",gE(t,e))}/**
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
 */const QP=6;class XP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class JP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new KP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ot(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qP(this),n=new XP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yc(t){return Ot(t)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=ik(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ZP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ZP().appendChild(r)})}function tR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nR(t,e){const n=Hp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zu(s,e??{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function rR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iR(t,e,n){const r=Yc(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=NE(e),{host:o,port:a}=sR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oR()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sR(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ay(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ay(o)}}}function ay(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class PE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}/**
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
 */async function Ps(t,e){return OP(t,"POST","/v1/accounts:signInWithIdp",gE(t,e))}/**
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
 */const aR="http://localhost";class Ui extends PE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:aR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
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
 */class Rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nl extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kr extends nl{constructor(){super("facebook.com")}static credential(e){return Ui._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
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
 */class In extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ui._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class Ir extends nl{constructor(){super("github.com")}static credential(e){return Ui._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
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
 */class Tr extends nl{constructor(){super("twitter.com")}static credential(e,n){return Ui._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
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
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ti._fromIdTokenResponse(e,r,i),o=ly(r);return new Qs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ly(r);return new Qs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ly(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rc extends ai{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rc(e,n,r,i)}}function RE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rc._fromErrorAndOperation(t,s,e,r):s})}async function lR(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",r)}/**
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
 */async function uR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Aa(t,RE(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Nm(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Qs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),s}}/**
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
 */async function cR(t,e,n=!1){const r="signIn",i=await RE(t,r,e),s=await Qs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dR(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function fR(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function AE(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}function hR(t){return Ot(t).signOut()}const ic="__sak";/**
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
 */class OE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pR(){const t=xt();return Pm(t)||Gc(t)}const mR=1e3,gR=10;class DE extends OE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pR()&&YP(),this.fallbackToPolling=IE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const vR=DE;/**
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
 */class LE extends OE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LE.type="SESSION";const ME=LE;/**
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
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
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
 */function Am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Am("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function On(){return window}function wR(t){On().location.href=t}/**
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
 */function FE(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CR(){return FE()?self:null}/**
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
 */const jE="firebaseLocalStorageDb",xR=1,sc="firebaseLocalStorage",UE="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qc(t,e){return t.transaction([sc],e?"readwrite":"readonly").objectStore(sc)}function bR(){const t=indexedDB.deleteDatabase(jE);return new rl(t).toPromise()}function kh(){const t=indexedDB.open(jE,xR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sc,{keyPath:UE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sc)?e(r):(r.close(),await bR(),e(await kh()))})})}async function uy(t,e,n){const r=qc(t,!0).put({[UE]:e,value:n});return new rl(r).toPromise()}async function kR(t,e){const n=qc(t,!1).get(e),r=await new rl(n).toPromise();return r===void 0?null:r.value}function cy(t,e){const n=qc(t,!0).delete(e);return new rl(n).toPromise()}const IR=800,TR=3;class zE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(CR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new _R(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await uy(e,ic,"1"),await cy(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qc(i,!1).getAll();return new rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zE.type="LOCAL";const NR=zE;new el(3e4,6e4);/**
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
 */function VE(t,e){return e?Xn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Om extends PE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PR(t){return cR(t.auth,new Om(t),t.bypassAuthState)}function RR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),uR(n,new Om(t),t.bypassAuthState)}async function AR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),lR(n,new Om(t),t.bypassAuthState)}/**
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
 */class $E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PR;case"linkViaPopup":case"linkViaRedirect":return AR;case"reauthViaPopup":case"reauthViaRedirect":return RR;default:Dn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OR=new el(2e3,1e4);async function DR(t,e,n){const r=Yc(t);IP(t,e,Rm);const i=VE(r,n);return new _i(r,"signInViaPopup",e,i).executeNotNull()}class _i extends $E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OR.get())};e()}}_i.currentPopupAction=null;/**
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
 */const LR="pendingRedirect",au=new Map;class MR extends $E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=au.get(this.auth._key());if(!e){try{const r=await FR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}au.set(this.auth._key(),e)}return this.bypassAuthState||au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FR(t,e){const n=zR(e),r=UR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jR(t,e){au.set(t._key(),e)}function UR(t){return Xn(t._redirectPersistence)}function zR(t){return ou(LR,t.config.apiKey,t.name)}async function VR(t,e,n=!1){const r=Yc(t),i=VE(r,e),o=await new MR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $R=10*60*1e3;class BR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$R&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(t);default:return!1}}/**
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
 */async function HR(t,e={}){return tl(t,"GET","/v1/projects",e)}/**
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
 */const GR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YR=/^https?/;async function KR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HR(t);for(const n of e)try{if(qR(n))return}catch{}Dn(t,"unauthorized-domain")}function qR(t){const e=bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YR.test(n))return!1;if(GR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QR=new el(3e4,6e4);function fy(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XR(t){return new Promise((e,n)=>{var r,i,s;function o(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),n(An(t,"network-request-failed"))},timeout:QR.get()})}if(!((i=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=On().gapi)===null||s===void 0)&&s.load)o();else{const a=tR("iframefcb");return On()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},eR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lu=null,e})}let lu=null;function JR(t){return lu=lu||XR(t),lu}/**
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
 */const ZR=new el(5e3,15e3),eA="__/auth/iframe",tA="emulator/auth/iframe",nA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tm(e,tA):`https://${t.config.authDomain}/${eA}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=rA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function sA(t){const e=await JR(t),n=On().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:iA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},ZR.get());function l(){On().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const oA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aA=500,lA=600,uA="_blank",cA="http://localhost";class hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dA(t,e,n,r=aA,i=lA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xt().toLowerCase();n&&(a=SE(u)?uA:n),EE(u)&&(e=e||cA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(HP(u)&&a!=="_self")return fA(e||"",a),new hy(null);const d=window.open(e||"",a,c);re(d,t,"popup-blocked");try{d.focus()}catch{}return new hy(d)}function fA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hA="__/auth/handler",pA="emulator/auth/handler",mA=encodeURIComponent("fac");async function py(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof Rm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof nl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${mA}=${encodeURIComponent(l)}`:"";return`${gA(t)}?${ro(a).slice(1)}${u}`}function gA({config:t}){return t.emulator?Tm(t,pA):`https://${t.authDomain}/${hA}`}/**
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
 */const Xd="webStorageSupport";class vA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ME,this._completeRedirectFn=VR,this._overrideRedirectResult=jR}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await py(e,n,r,bh(),i);return dA(e,o,Am())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await py(e,n,r,bh(),i);return wR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sA(e),r=new BR(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IE()||Pm()||Gc()}}const yA=vA;var my="@firebase/auth",gy="1.3.0";/**
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
 */class _A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EA(t){$s(new Di("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TE(t)},u=new JP(r,i,s,l);return rR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new Di("auth-internal",e=>{const n=Yc(e.getProvider("auth").getImmediate());return(r=>new _A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(my,gy,wA(t)),Hr(my,gy,"esm2017")}/**
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
 */const SA=5*60,CA=zw("authIdTokenMaxAge")||SA;let vy=null;const xA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CA)return;const i=n==null?void 0:n.token;vy!==i&&(vy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bA(t=Yw()){const e=Hp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nR(t,{popupRedirectResolver:yA,persistence:[NR,vR,ME]}),r=zw("authTokenSyncURL");if(r){const s=xA(r);fR(n,s,()=>s(n.currentUser)),dR(n,o=>s(o))}const i=jw("auth");return i&&iR(n,`http://${i}`),n}EA("Browser");const kA={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ"},WE=Gw(kA),IA=dE(WE),TA=Je(dE()),rt=IA,zi=bA(WE);/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const yy="popstate";function NA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Da("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$i(i)}return RA(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PA(){return Math.random().toString(36).substr(2,8)}function _y(t,e){return{usr:t.state,key:t.key,idx:e}}function Da(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?dr(e):e,{state:n,key:e&&e.key||r||PA()})}function $i(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function dr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function RA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ye.Pop;let x=c(),y=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:y})}function f(x,y){a=Ye.Push;let h=Da(_.location,x,y);n&&n(h,x),u=c()+1;let g=_y(h,u),p=_.createHref(h);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function m(x,y){a=Ye.Replace;let h=Da(_.location,x,y);n&&n(h,x),u=c();let g=_y(h,u),p=_.createHref(h);o.replaceState(g,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function v(x){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof x=="string"?x:$i(x);return ue(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let _={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yy,d),l=x,()=>{i.removeEventListener(yy,d),l=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let y=v(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:m,go(x){return o.go(x)}};return _}var Ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ke||(Ke={}));const AA=new Set(["lazy","caseSensitive","path","id","index","children"]);function OA(t){return t.index===!0}function Ih(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),OA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Ih(i.children,e,o,r)),l}})}function ps(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?dr(e):e,i=lo(r.pathname||"/",n);if(i==null)return null;let s=HE(t);LA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=WA(s[a],YA(i));return o}function DA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function HE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=er([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),HE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$A(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of GE(s.path))i(s,o,l)}),e}function GE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=GE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function LA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MA=/^:\w+$/,FA=3,jA=2,UA=1,zA=10,VA=-2,wy=t=>t==="*";function $A(t,e){let n=t.split("/"),r=n.length;return n.some(wy)&&(r+=VA),e&&(r+=jA),n.filter(i=>!wy(i)).reduce((i,s)=>i+(MA.test(s)?FA:s===""?UA:zA),r)}function BA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=HA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:er([i,c.pathname]),pathnameBase:XA(er([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=er([i,c.pathnameBase]))}return s}function HA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=KA(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function GA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function YA(t){try{return decodeURI(t)}catch(e){return Vi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KA(t,e){try{return decodeURIComponent(t)}catch(n){return Vi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?dr(t):t;return{pathname:n?n.startsWith("/")?n:QA(n,e):e,search:JA(r),hash:ZA(i)}}function QA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=dr(t):(i=Fe({},t),ue(!i.pathname||!i.pathname.includes("?"),Jd("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Jd("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Jd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=qA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),XA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Lm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function YE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const KE=["post","put","patch","delete"],e2=new Set(KE),t2=["get",...KE],n2=new Set(t2),r2=new Set([301,302,303,307,308]),i2=new Set([307,308]),Zd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},s2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},To={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},qE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o2=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),QE="remix-router-transitions";function a2(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=T=>({hasErrorBoundary:k(T)})}else i=o2;let s={},o=Ih(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,m=null,v=null,_=t.hydrationData!=null,x=ps(o,t.history.location,l),y=null;if(x==null){let k=qt(404,{pathname:t.history.location.pathname}),{matches:T,route:A}=Ty(o);x=T,y={[A.id]:k}}let h=!x.some(k=>k.route.lazy)&&(!x.some(k=>k.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:x,initialized:h,navigation:Zd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},C=Ye.Pop,N=!1,b,P=!1,U=new Map,M=null,Z=!1,Q=!1,ee=[],ge=[],ae=new Map,He=0,Qe=-1,F=new Map,Y=new Set,q=new Map,pe=new Map,ve=new Map,Cn=!1;function Kt(){if(c=t.history.listen(k=>{let{action:T,location:A,delta:V}=k;if(Cn){Cn=!1;return}Vi(ve.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=gl({currentLocation:p.location,nextLocation:A,historyAction:T});if(ne&&V!=null){Cn=!0,t.history.go(V*-1),vr(ne,{state:"blocked",location:A,proceed(){vr(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(V)},reset(){let te=new Map(p.blockers);te.set(ne,To),xe({blockers:te})}});return}return Un(T,A)}),n){y2(e,U);let k=()=>_2(e,U);e.addEventListener("pagehide",k),M=()=>e.removeEventListener("pagehide",k)}return p.initialized||Un(Ye.Pop,p.location),g}function li(){c&&c(),M&&M(),d.clear(),b&&b.abort(),p.fetchers.forEach((k,T)=>D(T)),p.blockers.forEach((k,T)=>qi(T))}function zt(k){return d.add(k),()=>d.delete(k)}function xe(k,T){p=Fe({},p,k),d.forEach(A=>A(p,{unstable_viewTransitionOpts:T}))}function jn(k,T){var A,V;let ne=p.actionData!=null&&p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((A=k.state)==null?void 0:A._isRedirect)!==!0,te;T.actionData?Object.keys(T.actionData).length>0?te=T.actionData:te=null:ne?te=p.actionData:te=null;let ie=T.loaderData?Iy(p.loaderData,T.loaderData,T.matches||[],T.errors):p.loaderData,X=p.blockers;X.size>0&&(X=new Map(X),X.forEach((Me,fe)=>X.set(fe,To)));let K=N===!0||p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&((V=k.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),Z||C===Ye.Pop||(C===Ye.Push?t.history.push(k,k.state):C===Ye.Replace&&t.history.replace(k,k.state));let Se;if(C===Ye.Pop){let Me=U.get(p.location.pathname);Me&&Me.has(k.pathname)?Se={currentLocation:p.location,nextLocation:k}:U.has(k.pathname)&&(Se={currentLocation:k,nextLocation:p.location})}else if(P){let Me=U.get(p.location.pathname);Me?Me.add(k.pathname):(Me=new Set([k.pathname]),U.set(p.location.pathname,Me)),Se={currentLocation:p.location,nextLocation:k}}xe(Fe({},T,{actionData:te,loaderData:ie,historyAction:C,location:k,initialized:!0,navigation:Zd,revalidation:"idle",restoreScrollPosition:rg(k,T.matches||p.matches),preventScrollReset:K,blockers:X}),Se),C=Ye.Pop,N=!1,P=!1,Z=!1,Q=!1,ee=[],ge=[]}async function fo(k,T){if(typeof k=="number"){t.history.go(k);return}let A=Th(p.location,p.matches,l,u.v7_prependBasename,k,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:V,submission:ne,error:te}=Ey(u.v7_normalizeFormMethod,!1,A,T),ie=p.location,X=Da(p.location,V,T&&T.state);X=Fe({},X,t.history.encodeLocation(X));let K=T&&T.replace!=null?T.replace:void 0,Se=Ye.Push;K===!0?Se=Ye.Replace:K===!1||ne!=null&&dn(ne.formMethod)&&ne.formAction===p.location.pathname+p.location.search&&(Se=Ye.Replace);let Me=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,fe=gl({currentLocation:ie,nextLocation:X,historyAction:Se});if(fe){vr(fe,{state:"blocked",location:X,proceed(){vr(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),fo(k,T)},reset(){let Ce=new Map(p.blockers);Ce.set(fe,To),xe({blockers:Ce})}});return}return await Un(Se,X,{submission:ne,pendingError:te,preventScrollReset:Me,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition})}function hl(){if(B(),xe({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Un(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Un(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Un(k,T,A){b&&b.abort(),b=null,C=k,Z=(A&&A.startUninterruptedRevalidation)===!0,tC(p.location,p.matches),N=(A&&A.preventScrollReset)===!0,P=(A&&A.enableViewTransition)===!0;let V=a||o,ne=A&&A.overrideNavigation,te=ps(V,T,l);if(!te){let Ce=qt(404,{pathname:T.pathname}),{matches:Ge,route:ui}=Ty(V);Qi(),jn(T,{matches:Ge,loaderData:{},errors:{[ui.id]:Ce}});return}if(p.initialized&&!Q&&f2(p.location,T)&&!(A&&A.submission&&dn(A.submission.formMethod))){jn(T,{matches:te});return}b=new AbortController;let ie=Po(t.history,T,b.signal,A&&A.submission),X,K;if(A&&A.pendingError)K={[ms(te).route.id]:A.pendingError};else if(A&&A.submission&&dn(A.submission.formMethod)){let Ce=await pl(ie,T,A.submission,te,{replace:A.replace});if(Ce.shortCircuited)return;X=Ce.pendingActionData,K=Ce.pendingActionError,ne=ef(T,A.submission),ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:Se,loaderData:Me,errors:fe}=await ml(ie,T,te,ne,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,X,K);Se||(b=null,jn(T,Fe({matches:te},X?{actionData:X}:{},{loaderData:Me,errors:fe})))}async function pl(k,T,A,V,ne){ne===void 0&&(ne={}),B();let te=g2(T,A);xe({navigation:te});let ie,X=Ph(V,T);if(!X.route.action&&!X.route.lazy)ie={type:Ke.error,error:qt(405,{method:k.method,pathname:T.pathname,routeId:X.route.id})};else if(ie=await No("action",k,X,V,s,i,l),k.signal.aborted)return{shortCircuited:!0};if(Rs(ie)){let K;return ne&&ne.replace!=null?K=ne.replace:K=ie.location===p.location.pathname+p.location.search,await I(p,ie,{submission:A,replace:K}),{shortCircuited:!0}}if(Zo(ie)){let K=ms(V,X.route.id);return(ne&&ne.replace)!==!0&&(C=Ye.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:ie.error}}}if(wi(ie))throw qt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:ie.data}}}async function ml(k,T,A,V,ne,te,ie,X,K){let Se=V||ef(T,ne),Me=ne||te||Ry(Se),fe=a||o,[Ce,Ge]=Sy(t.history,p,A,Me,T,Q,ee,ge,q,Y,fe,l,X,K);if(Qi(_e=>!(A&&A.some(an=>an.route.id===_e))||Ce&&Ce.some(an=>an.route.id===_e)),Qe=++He,Ce.length===0&&Ge.length===0){let _e=Oe();return jn(T,Fe({matches:A,loaderData:{},errors:K||null},X?{actionData:X}:{},_e?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!Z){Ge.forEach(an=>{let yr=p.fetchers.get(an.key),dd=Ro(void 0,yr?yr.data:void 0);p.fetchers.set(an.key,dd)});let _e=X||p.actionData;xe(Fe({navigation:Se},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Ge.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ge.forEach(_e=>{ae.has(_e.key)&&W(_e.key),_e.controller&&ae.set(_e.key,_e.controller)});let ui=()=>Ge.forEach(_e=>W(_e.key));b&&b.signal.addEventListener("abort",ui);let{results:ci,loaderResults:po,fetcherResults:ad}=await R(p.matches,A,Ce,Ge,k);if(k.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",ui),Ge.forEach(_e=>ae.delete(_e.key));let Vn=Ny(ci);if(Vn){if(Vn.idx>=Ce.length){let _e=Ge[Vn.idx-Ce.length].key;Y.add(_e)}return await I(p,Vn.result,{replace:ie}),{shortCircuited:!0}}let{loaderData:$n,errors:vl}=ky(p,A,Ce,po,K,Ge,ad,pe);pe.forEach((_e,an)=>{_e.subscribe(yr=>{(yr||_e.done)&&pe.delete(an)})});let ld=Oe(),ud=zn(Qe),cd=ld||ud||Ge.length>0;return Fe({loaderData:$n,errors:vl},cd?{fetchers:new Map(p.fetchers)}:{})}function id(k){return p.fetchers.get(k)||s2}function tg(k,T,A,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(k)&&W(k);let ne=a||o,te=Th(p.location,p.matches,l,u.v7_prependBasename,A,T,V==null?void 0:V.relative),ie=ps(ne,te,l);if(!ie){j(k,T,qt(404,{pathname:te}));return}let{path:X,submission:K,error:Se}=Ey(u.v7_normalizeFormMethod,!0,te,V);if(Se){j(k,T,Se);return}let Me=Ph(ie,X);if(N=(V&&V.preventScrollReset)===!0,K&&dn(K.formMethod)){ng(k,T,X,Me,ie,K);return}q.set(k,{routeId:T,path:X}),E(k,T,X,Me,ie,K)}async function ng(k,T,A,V,ne,te){if(B(),q.delete(k),!V.route.action&&!V.route.lazy){let et=qt(405,{method:te.formMethod,pathname:A,routeId:T});j(k,T,et);return}let ie=p.fetchers.get(k),X=v2(te,ie);p.fetchers.set(k,X),xe({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=Po(t.history,A,K.signal,te);ae.set(k,K);let Me=He,fe=await No("action",Se,V,ne,s,i,l);if(Se.signal.aborted){ae.get(k)===K&&ae.delete(k);return}if(Rs(fe))if(ae.delete(k),Qe>Me){let et=es(void 0);p.fetchers.set(k,et),xe({fetchers:new Map(p.fetchers)});return}else{Y.add(k);let et=Ro(te);return p.fetchers.set(k,et),xe({fetchers:new Map(p.fetchers)}),I(p,fe,{fetcherSubmission:te})}if(Zo(fe)){j(k,T,fe.error);return}if(wi(fe))throw qt(400,{type:"defer-action"});let Ce=p.navigation.location||p.location,Ge=Po(t.history,Ce,K.signal),ui=a||o,ci=p.navigation.state!=="idle"?ps(ui,p.navigation.location,l):p.matches;ue(ci,"Didn't find any matches after fetcher action");let po=++He;F.set(k,po);let ad=Ro(te,fe.data);p.fetchers.set(k,ad);let[Vn,$n]=Sy(t.history,p,ci,te,Ce,Q,ee,ge,q,Y,ui,l,{[V.route.id]:fe.data},void 0);$n.filter(et=>et.key!==k).forEach(et=>{let mo=et.key,ig=p.fetchers.get(mo),rC=Ro(void 0,ig?ig.data:void 0);p.fetchers.set(mo,rC),ae.has(mo)&&W(mo),et.controller&&ae.set(mo,et.controller)}),xe({fetchers:new Map(p.fetchers)});let vl=()=>$n.forEach(et=>W(et.key));K.signal.addEventListener("abort",vl);let{results:ld,loaderResults:ud,fetcherResults:cd}=await R(p.matches,ci,Vn,$n,Ge);if(K.signal.aborted)return;K.signal.removeEventListener("abort",vl),F.delete(k),ae.delete(k),$n.forEach(et=>ae.delete(et.key));let _e=Ny(ld);if(_e){if(_e.idx>=Vn.length){let et=$n[_e.idx-Vn.length].key;Y.add(et)}return I(p,_e.result)}let{loaderData:an,errors:yr}=ky(p,p.matches,Vn,ud,void 0,$n,cd,pe);if(p.fetchers.has(k)){let et=es(fe.data);p.fetchers.set(k,et)}let dd=zn(po);p.navigation.state==="loading"&&po>Qe?(ue(C,"Expected pending action"),b&&b.abort(),jn(p.navigation.location,{matches:ci,loaderData:an,errors:yr,fetchers:new Map(p.fetchers)})):(xe(Fe({errors:yr,loaderData:Iy(p.loaderData,an,ci,yr)},dd||$n.length>0?{fetchers:new Map(p.fetchers)}:{})),Q=!1)}async function E(k,T,A,V,ne,te){let ie=p.fetchers.get(k),X=Ro(te,ie?ie.data:void 0);p.fetchers.set(k,X),xe({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=Po(t.history,A,K.signal);ae.set(k,K);let Me=He,fe=await No("loader",Se,V,ne,s,i,l);if(wi(fe)&&(fe=await ZE(fe,Se.signal,!0)||fe),ae.get(k)===K&&ae.delete(k),Se.signal.aborted)return;if(Rs(fe))if(Qe>Me){let Ge=es(void 0);p.fetchers.set(k,Ge),xe({fetchers:new Map(p.fetchers)});return}else{Y.add(k),await I(p,fe);return}if(Zo(fe)){let Ge=ms(p.matches,T);p.fetchers.delete(k),xe({fetchers:new Map(p.fetchers),errors:{[Ge.route.id]:fe.error}});return}ue(!wi(fe),"Unhandled fetcher deferred data");let Ce=es(fe.data);p.fetchers.set(k,Ce),xe({fetchers:new Map(p.fetchers)})}async function I(k,T,A){let{submission:V,fetcherSubmission:ne,replace:te}=A===void 0?{}:A;T.revalidate&&(Q=!0);let ie=Da(k.location,T.location,{_isRedirect:!0});if(ue(ie,"Expected a location on the redirect navigation"),n){let Ce=!1;if(T.reloadDocument)Ce=!0;else if(qE.test(T.location)){const Ge=t.history.createURL(T.location);Ce=Ge.origin!==e.location.origin||lo(Ge.pathname,l)==null}if(Ce){te?e.location.replace(T.location):e.location.assign(T.location);return}}b=null;let X=te===!0?Ye.Replace:Ye.Push,{formMethod:K,formAction:Se,formEncType:Me}=k.navigation;!V&&!ne&&K&&Se&&Me&&(V=Ry(k.navigation));let fe=V||ne;if(i2.has(T.status)&&fe&&dn(fe.formMethod))await Un(X,ie,{submission:Fe({},fe,{formAction:T.location}),preventScrollReset:N});else{let Ce=ef(ie,V);await Un(X,ie,{overrideNavigation:Ce,fetcherSubmission:ne,preventScrollReset:N})}}async function R(k,T,A,V,ne){let te=await Promise.all([...A.map(K=>No("loader",ne,K,T,s,i,l)),...V.map(K=>K.matches&&K.match&&K.controller?No("loader",Po(t.history,K.path,K.controller.signal),K.match,K.matches,s,i,l):{type:Ke.error,error:qt(404,{pathname:K.path})})]),ie=te.slice(0,A.length),X=te.slice(A.length);return await Promise.all([Py(k,A,ie,ie.map(()=>ne.signal),!1,p.loaderData),Py(k,V.map(K=>K.match),X,V.map(K=>K.controller?K.controller.signal:null),!0)]),{results:te,loaderResults:ie,fetcherResults:X}}function B(){Q=!0,ee.push(...Qi()),q.forEach((k,T)=>{ae.has(T)&&(ge.push(T),W(T))})}function j(k,T,A){let V=ms(p.matches,T);D(k),xe({errors:{[V.route.id]:A},fetchers:new Map(p.fetchers)})}function D(k){let T=p.fetchers.get(k);ae.has(k)&&!(T&&T.state==="loading"&&F.has(k))&&W(k),q.delete(k),F.delete(k),Y.delete(k),p.fetchers.delete(k)}function W(k){let T=ae.get(k);ue(T,"Expected fetch controller: "+k),T.abort(),ae.delete(k)}function Te(k){for(let T of k){let A=id(T),V=es(A.data);p.fetchers.set(T,V)}}function Oe(){let k=[],T=!1;for(let A of Y){let V=p.fetchers.get(A);ue(V,"Expected fetcher: "+A),V.state==="loading"&&(Y.delete(A),k.push(A),T=!0)}return Te(k),T}function zn(k){let T=[];for(let[A,V]of F)if(V<k){let ne=p.fetchers.get(A);ue(ne,"Expected fetcher: "+A),ne.state==="loading"&&(W(A),F.delete(A),T.push(A))}return Te(T),T.length>0}function sd(k,T){let A=p.blockers.get(k)||To;return ve.get(k)!==T&&ve.set(k,T),A}function qi(k){p.blockers.delete(k),ve.delete(k)}function vr(k,T){let A=p.blockers.get(k)||To;ue(A.state==="unblocked"&&T.state==="blocked"||A.state==="blocked"&&T.state==="blocked"||A.state==="blocked"&&T.state==="proceeding"||A.state==="blocked"&&T.state==="unblocked"||A.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+T.state);let V=new Map(p.blockers);V.set(k,T),xe({blockers:V})}function gl(k){let{currentLocation:T,nextLocation:A,historyAction:V}=k;if(ve.size===0)return;ve.size>1&&Vi(!1,"A router only supports one blocker at a time");let ne=Array.from(ve.entries()),[te,ie]=ne[ne.length-1],X=p.blockers.get(te);if(!(X&&X.state==="proceeding")&&ie({currentLocation:T,nextLocation:A,historyAction:V}))return te}function Qi(k){let T=[];return pe.forEach((A,V)=>{(!k||k(V))&&(A.cancel(),T.push(V),pe.delete(V))}),T}function od(k,T,A){if(f=k,v=T,m=A||null,!_&&p.navigation===Zd){_=!0;let V=rg(p.location,p.matches);V!=null&&xe({restoreScrollPosition:V})}return()=>{f=null,v=null,m=null}}function ho(k,T){return m&&m(k,T.map(V=>DA(V,p.loaderData)))||k.key}function tC(k,T){if(f&&v){let A=ho(k,T);f[A]=v()}}function rg(k,T){if(f){let A=ho(k,T),V=f[A];if(typeof V=="number")return V}return null}function nC(k){s={},a=Ih(k,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},get window(){return e},initialize:Kt,subscribe:zt,enableScrollRestoration:od,navigate:fo,fetch:tg,revalidate:hl,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:id,deleteFetcher:D,dispose:li,getBlocker:sd,deleteBlocker:qi,_internalFetchControllers:ae,_internalActiveDeferreds:pe,_internalSetRoutes:nC},g}function l2(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Th(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Dm(i||".",Qc(a).map(c=>c.pathnameBase),lo(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Mm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:er([n,u.pathname])),$i(u)}function Ey(t,e,n,r){if(!r||!l2(r))return{path:n};if(r.formMethod&&!m2(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=JE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!dn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,v)=>{let[_,x]=v;return""+m+_+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!dn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Nh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Nh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=by(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=by(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(dn(c.formMethod))return{path:n,submission:c};let d=dr(n);return e&&d.search&&Mm(d.search)&&l.append("index",""),d.search="?"+l,{path:$i(d),submission:c}}function u2(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Sy(t,e,n,r,i,s,o,a,l,u,c,d,f,m){let v=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),x=t.createURL(i),y=m?Object.keys(m)[0]:void 0,g=u2(n,y).filter((C,N)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(c2(e.loaderData,e.matches[N],C)||o.some(U=>U===C.route.id))return!0;let b=e.matches[N],P=C;return Cy(C,Fe({currentUrl:_,currentParams:b.params,nextUrl:x,nextParams:P.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===x.pathname+x.search||_.search!==x.search||XE(b,P)}))}),p=[];return l.forEach((C,N)=>{if(!n.some(Z=>Z.route.id===C.routeId))return;let b=ps(c,C.path,d);if(!b){p.push({key:N,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(N),U=Ph(b,C.path),M=!1;u.has(N)?M=!1:a.includes(N)?M=!0:P&&P.state!=="idle"&&P.data===void 0?M=s:M=Cy(U,Fe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),M&&p.push({key:N,routeId:C.routeId,path:C.path,matches:b,match:U,controller:new AbortController})}),[g,p]}function c2(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function XE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Cy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function xy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Vi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!AA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function No(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=v=>{let _,x=new Promise((y,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),x])};try{let v=n.route[t];if(n.route.lazy)if(v){let _,x=await Promise.all([d(v).catch(y=>{_=y}),xy(n.route,s,i)]);if(_)throw _;u=x[0]}else if(await xy(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let _=new URL(e.url),x=_.pathname+_.search;throw qt(405,{method:e.method,pathname:x,routeId:n.route.id})}else return{type:Ke.data,data:void 0};else if(v)u=await d(v);else{let _=new URL(e.url),x=_.pathname+_.search;throw qt(404,{pathname:x})}ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ke.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(p2(u)){let v=u.status;if(r2.has(v)){let y=u.headers.get("Location");if(ue(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!qE.test(y))y=Th(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,y);else if(!a.isStaticRequest){let h=new URL(e.url),g=y.startsWith("//")?new URL(h.protocol+y):new URL(y),p=lo(g.pathname,o)!=null;g.origin===h.origin&&p&&(y=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",y),u;return{type:Ke.redirect,status:v,location:y,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ke.error?Ke.error:Ke.data,response:u};let _,x=u.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?_=await u.json():_=await u.text(),l===Ke.error?{type:l,error:new Lm(v,u.statusText,_),headers:u.headers}:{type:Ke.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ke.error)return{type:l,error:u};if(h2(u)){var f,m;return{type:Ke.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ke.data,data:u}}function Po(t,e,n,r){let i=t.createURL(JE(e)).toString(),s={signal:n};if(r&&dn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Nh(r.formData):s.body=r.formData}return new Request(i,s)}function Nh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function by(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function d2(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ue(!Rs(c),"Cannot handle redirect results in processLoaderData"),Zo(c)){let m=ms(t,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[f]=void 0,l||(l=!0,a=YE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else wi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function ky(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=d2(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(m&&m.signal.aborted))if(Zo(v)){let _=ms(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Fe({},u,{[_.route.id]:v.error})),t.fetchers.delete(d)}else if(Rs(v))ue(!1,"Unhandled fetcher revalidation redirect");else if(wi(v))ue(!1,"Unhandled fetcher deferred data");else{let _=es(v.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function Iy(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ms(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Ty(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Lm(t||500,o,new Error(a),!0)}function Ny(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Rs(n))return{result:n,idx:e}}}function JE(t){let e=typeof t=="string"?dr(t):t;return $i(Fe({},e,{hash:""}))}function f2(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function wi(t){return t.type===Ke.deferred}function Zo(t){return t.type===Ke.error}function Rs(t){return(t&&t.type)===Ke.redirect}function h2(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function p2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function m2(t){return n2.has(t.toLowerCase())}function dn(t){return e2.has(t.toLowerCase())}async function Py(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!XE(u,l)&&(s&&s[l.route.id])!==void 0;if(wi(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await ZE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function ZE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ke.error,error:i}}return{type:Ke.data,data:t.deferredData.data}}}function Mm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ph(t,e){let n=typeof e=="string"?dr(e).search:e.search;if(t[t.length-1].route.index&&Mm(n||""))return t[t.length-1];let r=Qc(t);return r[r.length-1]}function Ry(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ef(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function g2(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ro(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function v2(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function es(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function y2(t,e){try{let n=t.sessionStorage.getItem(QE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function _2(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(QE,JSON.stringify(n))}catch(r){Vi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oc.apply(this,arguments)}const Xc=S.createContext(null),eS=S.createContext(null),uo=S.createContext(null),Jc=S.createContext(null),fr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),tS=S.createContext(null);function w2(t,e){let{relative:n}=e===void 0?{}:e;il()||ue(!1);let{basename:r,navigator:i}=S.useContext(uo),{hash:s,pathname:o,search:a}=rS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:er([r,o])),i.createHref({pathname:l,search:a,hash:s})}function il(){return S.useContext(Jc)!=null}function Zc(){return il()||ue(!1),S.useContext(Jc).location}function nS(t){S.useContext(uo).static||S.useLayoutEffect(t)}function bt(){let{isDataRoute:t}=S.useContext(fr);return t?D2():E2()}function E2(){il()||ue(!1);let t=S.useContext(Xc),{basename:e,navigator:n}=S.useContext(uo),{matches:r}=S.useContext(fr),{pathname:i}=Zc(),s=JSON.stringify(Qc(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return nS(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Dm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:er([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const S2=S.createContext(null);function C2(t){let e=S.useContext(fr).outlet;return e&&S.createElement(S2.Provider,{value:t},e)}function Sn(){let{matches:t}=S.useContext(fr),e=t[t.length-1];return e?e.params:{}}function rS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(fr),{pathname:i}=Zc(),s=JSON.stringify(Qc(r).map(o=>o.pathnameBase));return S.useMemo(()=>Dm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function x2(t,e,n){il()||ue(!1);let{navigator:r}=S.useContext(uo),{matches:i}=S.useContext(fr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Zc(),u;if(e){var c;let _=typeof e=="string"?dr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ue(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=ps(t,{pathname:f}),v=N2(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:er([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:er([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?S.createElement(Jc.Provider,{value:{location:oc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ye.Pop}},v):v}function b2(){let t=O2(),e=YE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const k2=S.createElement(b2,null);class I2 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(fr.Provider,{value:this.props.routeContext},S.createElement(tS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T2(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(fr.Provider,{value:e},r)}function N2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||k2);let f=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=d:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(T2,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(I2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var iS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(iS||{}),ac=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ac||{});function P2(t){let e=S.useContext(Xc);return e||ue(!1),e}function R2(t){let e=S.useContext(eS);return e||ue(!1),e}function A2(t){let e=S.useContext(fr);return e||ue(!1),e}function sS(t){let e=A2(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function O2(){var t;let e=S.useContext(tS),n=R2(ac.UseRouteError),r=sS(ac.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function D2(){let{router:t}=P2(iS.UseNavigateStable),e=sS(ac.UseNavigateStable),n=S.useRef(!1);return nS(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oc({fromRouteId:e},s)))},[t,e])}function oS(t){return C2(t.context)}function L2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1}=t;il()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=dr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,v=S.useMemo(()=>{let _=lo(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return v==null?null:S.createElement(uo.Provider,{value:l},S.createElement(Jc.Provider,{children:n,value:v}))}new Promise(()=>{});function M2(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},La.apply(this,arguments)}function F2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function j2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function U2(t,e){return t.button===0&&(!e||e==="_self")&&!j2(t)}const z2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function V2(t,e){return a2({basename:e==null?void 0:e.basename,future:La({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:NA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||$2(),routes:t,mapRouteProperties:M2,window:e==null?void 0:e.window}).initialize()}function $2(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=La({},e,{errors:B2(e.errors)})),e}function B2(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Lm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const W2=S.createContext({isTransitioning:!1}),H2="startTransition",Ay=wC[H2];function G2(t){Ay?Ay(t):t()}class Y2{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function K2(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),[o,a]=S.useState(),[l,u]=S.useState({isTransitioning:!1}),[c,d]=S.useState(),[f,m]=S.useState(),[v,_]=S.useState(),{v7_startTransition:x}=r||{},y=S.useCallback(N=>{x?G2(N):N()},[x]),h=S.useCallback((N,b)=>{let{unstable_viewTransitionOpts:P}=b;!P||n.window==null||typeof n.window.document.startViewTransition!="function"?y(()=>s(N)):f&&c?(c.resolve(),f.skipTransition(),_({state:N,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(a(N),u({isTransitioning:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[y,f,c,n.window]);S.useLayoutEffect(()=>n.subscribe(h),[n,h]),S.useEffect(()=>{l.isTransitioning&&d(new Y2)},[l.isTransitioning]),S.useEffect(()=>{if(c&&o&&n.window){let N=o,b=c.promise,P=n.window.document.startViewTransition(async()=>{y(()=>s(N)),await b});P.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(P)}},[y,o,c,n.window]),S.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),S.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),_(void 0))},[l.isTransitioning,v]);let g=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:N=>n.navigate(N),push:(N,b,P)=>n.navigate(N,{state:b,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(N,b,P)=>n.navigate(N,{replace:!0,state:b,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[n]),p=n.basename||"/",C=S.useMemo(()=>({router:n,navigator:g,static:!1,basename:p}),[n,g,p]);return S.createElement(S.Fragment,null,S.createElement(Xc.Provider,{value:C},S.createElement(eS.Provider,{value:i},S.createElement(W2.Provider,{value:l},S.createElement(L2,{basename:p,location:i.location,navigationType:i.historyAction,navigator:g},i.initialized?S.createElement(q2,{routes:n.routes,state:i}):e)))),null)}function q2(t){let{routes:e,state:n}=t;return x2(e,void 0,n)}const Q2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aS=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=F2(e,z2),{basename:m}=S.useContext(uo),v,_=!1;if(typeof u=="string"&&X2.test(u)&&(v=u,Q2))try{let g=new URL(window.location.href),p=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=lo(p.pathname,m);p.origin===g.origin&&C!=null?u=C+p.search+p.hash:_=!0}catch{}let x=w2(u,{relative:i}),y=J2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||y(g)}return S.createElement("a",La({},f,{href:v||x,onClick:_||s?r:h,ref:n,target:l}))});var Oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Oy||(Oy={}));var Dy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function J2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=bt(),u=Zc(),c=rS(t,{relative:o});return S.useCallback(d=>{if(U2(d,n)){d.preventDefault();let f=r!==void 0?r:$i(u)===$i(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const Z2="/assets/logo_nav-e0cc088f.svg",lS="/assets/userIconDefault-0c6f2d29.jpg";function Zr({myUser:t,size:e="small",onClick:n}){const[r,i]=S.useState(null),s=bt(),o={small:"w-8",medium:"w-10",large:"w-12"};function a(){n&&n(),s(`/user/${t==null?void 0:t.uid}`),console.log(t)}return S.useEffect(()=>{i(o[e])},[r,e,t]),w.jsx("img",{onClick:a,className:`${r} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`,src:t!=null&&t.photoUrl?t==null?void 0:t.photoUrl:lS})}const As={displayName:"Name",photoUrl:"https://picsum.photos/200",email:"default@default.com",ownerOfEvents:["Initial"],participateOfEvents:["Initial"],uid:"defaultUID"},Fn=S.createContext(As);function eO(){S.useState(!1);const t=S.useContext(Fn);return w.jsxs("nav",{className:"flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[w.jsx(aS,{to:"/",children:w.jsx("img",{src:Z2,alt:"",className:"h-4"})}),w.jsx(Zr,{myUser:t})]})}const tO="/assets/home_icon-248acc6b.png";function nO(){const t=bt();return w.jsxs("div",{className:"flex gap-2 text-themeWhite items-center h-16  mb-4",children:[w.jsx("div",{className:"bg-themePrimary shadow-md text-sm rounded-2xl h-16 w-full flex items-center justify-center p-2",children:"® Maciej Tomaszewski 2023"}),w.jsx("div",{className:"bg-themePrimary shadow-md rounded-2xl h-16 w-24 flex items-center justify-center cursor-pointer",onClick:()=>t("/"),children:w.jsx("img",{src:tO,className:"w-5/12"})})]})}const uu={id:"defaultID",name:"defaultName",date:"25-01-2034",users:[{uid:"defaultUID",value:0,id:"defaultID"}],amount:77,whopaid:{uid:"defaultUID",value:0}},dt={id:"defaultID",name:"defaultName",owner:"defaultUID",date:"25-01-2034",users:["defaultUID"],payments:[uu]},hr=S.createContext([dt]),pr=S.createContext([dt]),mr=S.createContext([As]),rO=S.createContext([dt]);function iO({children:t}){const[e,n]=S.useState([dt]),[r,i]=S.useState([dt]),[s,o]=S.useState(As),[a,l]=S.useState([As]),[u,c]=S.useState([dt]);async function d(_){await Xo(Je(rt,`/users/${_}`),x=>{if(x.exists()){const y={...x.val(),uid:_};o(y)}})}async function f(){const _=cE(Je(rt,"users/"));await Xo(_,x=>{if(x.exists()){const h=Object.entries(x.val()).map(g=>({...g[1],uid:g[0]}));l(h)}else l([As])})}async function m(_,x){await Xo(Je(rt,`/events/${_}`),y=>{if(y.exists()){let h=function(p,C){if(console.log(C),p[0]===dt)return[C];if(p[0]!==dt){const N=p.filter(b=>b.id===_?null:b);return console.log(N),[...N,C]}return[dt]};const g=y.val();g.id=_,g.users!==void 0?g.users=Object.keys(g.users):g.users=[],g.payments!==void 0?g.payments=Object.values(g.payments):g.payments=[],x==="participateEvent"&&i(p=>h(p,g)),x==="ownerEvent"&&n(p=>h(p,g))}})}async function v(_){_.participateOfEvents.forEach(async x=>{m(x,"participateEvent")}),_.ownerOfEvents.forEach(async x=>{console.log(x),m(x,"ownerEvent")})}return S.useEffect(()=>{zi.currentUser!=null&&(n([dt]),i([dt]),s.uid==="defaultUID"&&d(zi.currentUser.uid),s.uid!=="defaultUID"&&v(s),f())},[s]),w.jsx(rO.Provider,{value:u,children:w.jsx(hr.Provider,{value:e,children:w.jsx(pr.Provider,{value:r,children:w.jsx(Fn.Provider,{value:s,children:w.jsx(mr.Provider,{value:a,children:w.jsx(w.Fragment,{children:t})})})})})})}function sO(){return w.jsxs("main",{className:"text-themePrimary max-w-full w-full grid h-screenIOs grid-rows-AppTemplate pl-4 pr-4",children:[w.jsxs(iO,{children:[w.jsx(eO,{}),w.jsx("main",{className:"mt-2 pt-4 mb-2 pb-4 w-full overflow-y-scroll",children:w.jsx(oS,{})})]}),w.jsx(nO,{})]})}async function oO(t){return await pP(Ra(TA,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function uS({uid:t,displayName:e,email:n,photoURL:r}){await Ar(Je(rt,`users/${t}`),{displayName:e,email:n,photoUrl:r,participateOfEvents:{0:"Initial"},ownerOfEvents:{0:"Initial"}}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var aO={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function Ly(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ly(Object(n),!0).forEach(function(r){ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ly(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lc(t){"@babel/helpers - typeof";return lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lc(t)}function lO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function My(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function uO(t,e,n){return e&&My(t.prototype,e),n&&My(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fm(t,e){return dO(t)||hO(t,e)||cS(t,e)||mO()}function sl(t){return cO(t)||fO(t)||cS(t)||pO()}function cO(t){if(Array.isArray(t))return Rh(t)}function dO(t){if(Array.isArray(t))return t}function fO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function cS(t,e){if(t){if(typeof t=="string")return Rh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rh(t,e)}}function Rh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fy=function(){},jm={},dS={},fS=null,hS={mark:Fy,measure:Fy};try{typeof window<"u"&&(jm=window),typeof document<"u"&&(dS=document),typeof MutationObserver<"u"&&(fS=MutationObserver),typeof performance<"u"&&(hS=performance)}catch{}var gO=jm.navigator||{},jy=gO.userAgent,Uy=jy===void 0?"":jy,ei=jm,Ae=dS,zy=fS,jl=hS;ei.document;var gr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",pS=~Uy.indexOf("MSIE")||~Uy.indexOf("Trident/"),Ul,zl,Vl,$l,Bl,ar="___FONT_AWESOME___",Ah=16,mS="fa",gS="svg-inline--fa",Bi="data-fa-i2svg",Oh="data-fa-pseudo-element",vO="data-fa-pseudo-element-pending",Um="data-prefix",zm="data-icon",Vy="fontawesome-i2svg",yO="async",_O=["HTML","HEAD","STYLE","SCRIPT"],vS=function(){try{return!0}catch{return!1}}(),Pe="classic",$e="sharp",Vm=[Pe,$e];function ol(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var Ma=ol((Ul={},ot(Ul,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ot(Ul,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ul)),Fa=ol((zl={},ot(zl,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ot(zl,$e,{solid:"fass",regular:"fasr",light:"fasl"}),zl)),ja=ol((Vl={},ot(Vl,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ot(Vl,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Vl)),wO=ol(($l={},ot($l,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ot($l,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),$l)),EO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yS="fa-layers-text",SO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CO=ol((Bl={},ot(Bl,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ot(Bl,$e,{900:"fass",400:"fasr",300:"fasl"}),Bl)),_S=[1,2,3,4,5,6,7,8,9,10],xO=_S.concat([11,12,13,14,15,16,17,18,19,20]),bO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ei={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ua=new Set;Object.keys(Fa[Pe]).map(Ua.add.bind(Ua));Object.keys(Fa[$e]).map(Ua.add.bind(Ua));var kO=[].concat(Vm,sl(Ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ei.GROUP,Ei.SWAP_OPACITY,Ei.PRIMARY,Ei.SECONDARY]).concat(_S.map(function(t){return"".concat(t,"x")})).concat(xO.map(function(t){return"w-".concat(t)})),ea=ei.FontAwesomeConfig||{};function IO(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function TO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var NO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];NO.forEach(function(t){var e=Fm(t,2),n=e[0],r=e[1],i=TO(IO(n));i!=null&&(ea[r]=i)})}var wS={styleDefault:"solid",familyDefault:"classic",cssPrefix:mS,replacementClass:gS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ea.familyPrefix&&(ea.cssPrefix=ea.familyPrefix);var Xs=z(z({},wS),ea);Xs.autoReplaceSvg||(Xs.observeMutations=!1);var G={};Object.keys(wS).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Xs[t]=n,ta.forEach(function(r){return r(G)})},get:function(){return Xs[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Xs.cssPrefix=e,ta.forEach(function(n){return n(G)})},get:function(){return Xs.cssPrefix}});ei.FontAwesomeConfig=G;var ta=[];function PO(t){return ta.push(t),function(){ta.splice(ta.indexOf(t),1)}}var Er=Ah,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RO(t){if(!(!t||!gr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var AO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function za(){for(var t=12,e="";t-- >0;)e+=AO[Math.random()*62|0];return e}function co(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $m(t){return t.classList?co(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ES(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ES(t[n]),'" ')},"").trim()}function ed(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Bm(t){return t.size!==Tn.size||t.x!==Tn.x||t.y!==Tn.y||t.rotate!==Tn.rotate||t.flipX||t.flipY}function DO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function LO(t){var e=t.transform,n=t.width,r=n===void 0?Ah:n,i=t.height,s=i===void 0?Ah:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&pS?l+="translate(".concat(e.x/Er-r/2,"em, ").concat(e.y/Er-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Er,"em), calc(-50% + ").concat(e.y/Er,"em)) "):l+="translate(".concat(e.x/Er,"em, ").concat(e.y/Er,"em) "),l+="scale(".concat(e.size/Er*(e.flipX?-1:1),", ").concat(e.size/Er*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var MO=`:root, :host {
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
}`;function SS(){var t=mS,e=gS,n=G.cssPrefix,r=G.replacementClass,i=MO;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var $y=!1;function tf(){G.autoAddCss&&!$y&&(RO(SS()),$y=!0)}var FO={mixout:function(){return{dom:{css:SS,insertCss:tf}}},hooks:function(){return{beforeDOMElementCreation:function(){tf()},beforeI2svg:function(){tf()}}}},lr=ei||{};lr[ar]||(lr[ar]={});lr[ar].styles||(lr[ar].styles={});lr[ar].hooks||(lr[ar].hooks={});lr[ar].shims||(lr[ar].shims=[]);var gn=lr[ar],CS=[],jO=function t(){Ae.removeEventListener("DOMContentLoaded",t),uc=1,CS.map(function(e){return e()})},uc=!1;gr&&(uc=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),uc||Ae.addEventListener("DOMContentLoaded",jO));function UO(t){gr&&(uc?setTimeout(t,0):CS.push(t))}function al(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?ES(t):"<".concat(e," ").concat(OO(r),">").concat(s.map(al).join(""),"</").concat(e,">")}function By(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zO=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},nf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?zO(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function VO(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Dh(t){var e=VO(t);return e.length===1?e[0].toString(16):null}function $O(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Wy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Lh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Wy(e);typeof gn.hooks.addPack=="function"&&!i?gn.hooks.addPack(t,Wy(e)):gn.styles[t]=z(z({},gn.styles[t]||{}),s),t==="fas"&&Lh("fa",e)}var Wl,Hl,Gl,gs=gn.styles,BO=gn.shims,WO=(Wl={},ot(Wl,Pe,Object.values(ja[Pe])),ot(Wl,$e,Object.values(ja[$e])),Wl),Wm=null,xS={},bS={},kS={},IS={},TS={},HO=(Hl={},ot(Hl,Pe,Object.keys(Ma[Pe])),ot(Hl,$e,Object.keys(Ma[$e])),Hl);function GO(t){return~kO.indexOf(t)}function YO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!GO(i)?i:null}var NS=function(){var e=function(s){return nf(gs,function(o,a,l){return o[l]=nf(a,s,{}),o},{})};xS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),bS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),TS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in gs||G.autoFetchSvg,r=nf(BO,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});kS=r.names,IS=r.unicodes,Wm=td(G.styleDefault,{family:G.familyDefault})};PO(function(t){Wm=td(t.styleDefault,{family:G.familyDefault})});NS();function Hm(t,e){return(xS[t]||{})[e]}function KO(t,e){return(bS[t]||{})[e]}function Si(t,e){return(TS[t]||{})[e]}function PS(t){return kS[t]||{prefix:null,iconName:null}}function qO(t){var e=IS[t],n=Hm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ti(){return Wm}var Gm=function(){return{prefix:null,iconName:null,rest:[]}};function td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,i=Ma[r][t],s=Fa[r][t]||Fa[r][i],o=t in gn.styles?t:null;return s||o||null}var Hy=(Gl={},ot(Gl,Pe,Object.keys(ja[Pe])),ot(Gl,$e,Object.keys(ja[$e])),Gl);function nd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ot(e,Pe,"".concat(G.cssPrefix,"-").concat(Pe)),ot(e,$e,"".concat(G.cssPrefix,"-").concat($e)),e),o=null,a=Pe;(t.includes(s[Pe])||t.some(function(u){return Hy[Pe].includes(u)}))&&(a=Pe),(t.includes(s[$e])||t.some(function(u){return Hy[$e].includes(u)}))&&(a=$e);var l=t.reduce(function(u,c){var d=YO(G.cssPrefix,c);if(gs[c]?(c=WO[a].includes(c)?wO[a][c]:c,o=c,u.prefix=c):HO[a].indexOf(c)>-1?(o=c,u.prefix=td(c,{family:a})):d?u.iconName=d:c!==G.replacementClass&&c!==s[Pe]&&c!==s[$e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?PS(u.iconName):{},m=Si(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!gs.far&&gs.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},Gm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===$e&&(gs.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=Si(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ti()||"fas"),l}var QO=function(){function t(){lO(this,t),this.definitions={}}return uO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),Lh(a,o[a]);var l=ja[Pe][a];l&&Lh(l,o[a]),NS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Gy=[],vs={},Os={},XO=Object.keys(Os);function JO(t,e){var n=e.mixoutsTo;return Gy=t,vs={},Object.keys(Os).forEach(function(r){XO.indexOf(r)===-1&&delete Os[r]}),Gy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),lc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){vs[o]||(vs[o]=[]),vs[o].push(s[o])})}r.provides&&r.provides(Os)}),n}function Mh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=vs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Wi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vs[t]||[];i.forEach(function(s){s.apply(null,n)})}function ur(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Os[t]?Os[t].apply(null,e):void 0}function Fh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ti();if(e)return e=Si(n,e)||e,By(RS.definitions,n,e)||By(gn.styles,n,e)}var RS=new QO,ZO=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Wi("noAuto")},eD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gr?(Wi("beforeI2svg",e),ur("pseudoElements2svg",e),ur("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,UO(function(){nD({autoReplaceSvgRoot:n}),Wi("watch",e)})}},tD={icon:function(e){if(e===null)return null;if(lc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Si(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=td(e[0]);return{prefix:r,iconName:Si(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(EO))){var i=nd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ti(),iconName:Si(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ti();return{prefix:s,iconName:Si(s,e)||e}}}},Yt={noAuto:ZO,config:G,dom:eD,parse:tD,library:RS,findIconDefinition:Fh,toHtml:al},nD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(gn.styles).length>0||G.autoFetchSvg)&&gr&&G.autoReplaceSvg&&Yt.dom.i2svg({node:r})};function rd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return al(r)})}}),Object.defineProperty(t,"node",{get:function(){if(gr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function rD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Bm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ed(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function iD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function Ym(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,v=r.found?r:n,_=v.width,x=v.height,y=i==="fak",h=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),g={children:[],attributes:z(z({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(x)})},p=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/x*16*.0625,"em")}:{};m&&(g.attributes[Bi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||za())},children:[l]}),delete g.attributes.title);var C=z(z({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},p),d.styles)}),N=r.found&&n.found?ur("generateAbstractMask",C)||{children:[],attributes:{}}:ur("generateAbstractIcon",C)||{children:[],attributes:{}},b=N.children,P=N.attributes;return C.children=b,C.attributes=P,a?iD(C):rD(C)}function Yy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Bi]="");var c=z({},o.styles);Bm(i)&&(c.transform=LO({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=ed(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function sD(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ed(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var rf=gn.styles;function jh(t){var e=t[0],n=t[1],r=t.slice(4),i=Fm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ei.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ei.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ei.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var oD={found:!1,width:512,height:512};function aD(t,e){!vS&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Uh(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=ti()),new Promise(function(r,i){if(ur("missingIconAbstract"),n==="fa"){var s=PS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&rf[e]&&rf[e][t]){var o=rf[e][t];return r(jh(o))}aD(t,e),r(z(z({},oD),{},{icon:G.showMissingIcons&&t?ur("missingIconAbstract")||{}:{}}))})}var Ky=function(){},zh=G.measurePerformance&&jl&&jl.mark&&jl.measure?jl:{mark:Ky,measure:Ky},Fo='FA "6.4.2"',lD=function(e){return zh.mark("".concat(Fo," ").concat(e," begins")),function(){return AS(e)}},AS=function(e){zh.mark("".concat(Fo," ").concat(e," ends")),zh.measure("".concat(Fo," ").concat(e),"".concat(Fo," ").concat(e," begins"),"".concat(Fo," ").concat(e," ends"))},Km={begin:lD,end:AS},cu=function(){};function qy(t){var e=t.getAttribute?t.getAttribute(Bi):null;return typeof e=="string"}function uD(t){var e=t.getAttribute?t.getAttribute(Um):null,n=t.getAttribute?t.getAttribute(zm):null;return e&&n}function cD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function dD(){if(G.autoReplaceSvg===!0)return du.replace;var t=du[G.autoReplaceSvg];return t||du.replace}function fD(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function hD(t){return Ae.createElement(t)}function OS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?fD:hD:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(OS(o,{ceFn:r}))}),i}function pD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var du={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(OS(i),n)}),n.getAttribute(Bi)===null&&G.keepOriginalSource){var r=Ae.createComment(pD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~$m(n).indexOf(G.replacementClass))return du.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return al(a)}).join(`
`);n.setAttribute(Bi,""),n.innerHTML=o}};function Qy(t){t()}function DS(t,e){var n=typeof e=="function"?e:cu;if(t.length===0)n();else{var r=Qy;G.mutateApproach===yO&&(r=ei.requestAnimationFrame||Qy),r(function(){var i=dD(),s=Km.begin("mutate");t.map(i),s(),n()})}}var qm=!1;function LS(){qm=!0}function Vh(){qm=!1}var cc=null;function Xy(t){if(zy&&G.observeMutations){var e=t.treeCallback,n=e===void 0?cu:e,r=t.nodeCallback,i=r===void 0?cu:r,s=t.pseudoElementsCallback,o=s===void 0?cu:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;cc=new zy(function(u){if(!qm){var c=ti();co(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!qy(d.addedNodes[0])&&(G.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&qy(d.target)&&~bO.indexOf(d.attributeName))if(d.attributeName==="class"&&uD(d.target)){var f=nd($m(d.target)),m=f.prefix,v=f.iconName;d.target.setAttribute(Um,m||c),v&&d.target.setAttribute(zm,v)}else cD(d.target)&&i(d.target)})}}),gr&&cc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mD(){cc&&cc.disconnect()}function gD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function vD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=nd($m(t));return i.prefix||(i.prefix=ti()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=KO(i.prefix,t.innerText)||Hm(i.prefix,Dh(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function yD(t){var e=co(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||za()):(e["aria-hidden"]="true",e.focusable="false")),e}function _D(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vD(t),r=n.iconName,i=n.prefix,s=n.rest,o=yD(t),a=Mh("parseNodeAttributes",{},t),l=e.styleParser?gD(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var wD=gn.styles;function MS(t){var e=G.autoReplaceSvg==="nest"?Jy(t,{styleParser:!1}):Jy(t);return~e.extra.classes.indexOf(yS)?ur("generateLayersText",t,e):ur("generateSvgReplacementMutation",t,e)}var ni=new Set;Vm.map(function(t){ni.add("fa-".concat(t))});Object.keys(Ma[Pe]).map(ni.add.bind(ni));Object.keys(Ma[$e]).map(ni.add.bind(ni));ni=sl(ni);function Zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(d){return n.add("".concat(Vy,"-").concat(d))},i=function(d){return n.remove("".concat(Vy,"-").concat(d))},s=G.autoFetchSvg?ni:Vm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wD));s.includes("fa")||s.push("fa");var o=[".".concat(yS,":not([").concat(Bi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Bi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=co(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Km.begin("onTree"),u=a.reduce(function(c,d){try{var f=MS(d);f&&c.push(f)}catch(m){vS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){DS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function ED(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;MS(t).then(function(n){n&&DS([n],e)})}function SD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Fh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fh(i||{})),t(r,z(z({},n),{},{mask:i}))}}var CD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Tn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,v=m===void 0?null:m,_=n.classes,x=_===void 0?[]:_,y=n.attributes,h=y===void 0?{}:y,g=n.styles,p=g===void 0?{}:g;if(e){var C=e.prefix,N=e.iconName,b=e.icon;return rd(z({type:"icon"},e),function(){return Wi("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?h["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(v||za()):(h["aria-hidden"]="true",h.focusable="false")),Ym({icons:{main:jh(b),mask:l?jh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:z(z({},Tn),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:h,styles:p,classes:x}})})}},xD={mixout:function(){return{icon:SD(CD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zy,n.nodeCallback=ED,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return Zy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,v){Promise.all([Uh(i,a),c.iconName?Uh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var x=Fm(_,2),y=x[0],h=x[1];m([n,Ym({icons:{main:y,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ed(a);l.length>0&&(i.style=l);var u;return Bm(o)&&(u=ur("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},bD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return rd({type:"layer"},function(){Wi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(sl(s)).join(" ")},children:o}]})}}}},kD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return rd({type:"counter",content:n},function(){return Wi("beforeDOMElementCreation",{content:n,params:r}),sD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(sl(a))}})})}}}},ID={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Tn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return rd({type:"text",content:n},function(){return Wi("beforeDOMElementCreation",{content:n,params:r}),Yy({content:n,transform:z(z({},Tn),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(G.cssPrefix,"-layers-text")].concat(sl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(pS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},TD=new RegExp('"',"ug"),e_=[1105920,1112319];function ND(t){var e=t.replace(TD,""),n=$O(e,0),r=n>=e_[0]&&n<=e_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Dh(i?e[0]:e),isSecondary:r||i}}function t_(t,e){var n="".concat(vO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=co(t.children),o=s.filter(function(b){return b.getAttribute(Oh)===e})[0],a=ei.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(SO),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Fa[f][l[2].toLowerCase()]:CO[f][u],v=ND(d),_=v.value,x=v.isSecondary,y=l[0].startsWith("FontAwesome"),h=Hm(m,_),g=h;if(y){var p=qO(_);p.iconName&&p.prefix&&(h=p.iconName,m=p.prefix)}if(h&&!x&&(!o||o.getAttribute(Um)!==m||o.getAttribute(zm)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=_D(),N=C.extra;N.attributes[Oh]=e,Uh(h,m).then(function(b){var P=Ym(z(z({},C),{},{icons:{main:b,mask:Gm()},prefix:m,iconName:g,extra:N,watchable:!0})),U=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=P.map(function(M){return al(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function PD(t){return Promise.all([t_(t,"::before"),t_(t,"::after")])}function RD(t){return t.parentNode!==document.head&&!~_O.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Oh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function n_(t){if(gr)return new Promise(function(e,n){var r=co(t.querySelectorAll("*")).filter(RD).map(PD),i=Km.begin("searchPseudoElements");LS(),Promise.all(r).then(function(){i(),Vh(),e()}).catch(function(){i(),Vh(),n()})})}var AD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=n_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;G.searchPseudoElements&&n_(i)}}},r_=!1,OD={mixout:function(){return{dom:{unwatch:function(){LS(),r_=!0}}}},hooks:function(){return{bootstrap:function(){Xy(Mh("mutationObserverCallbacks",{}))},noAuto:function(){mD()},watch:function(n){var r=n.observeMutationsRoot;r_?Vh():Xy(Mh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},i_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},DD={mixout:function(){return{parse:{transform:function(n){return i_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=i_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),m.path)}]}]}}}},sf={x:0,y:0,width:"100%",height:"100%"};function s_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function LD(t){return t.tag==="g"?t.children:[t]}var MD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?nd(i.split(" ").map(function(o){return o.trim()})):Gm();return s.prefix||(s.prefix=ti()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=DO({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:z(z({},sf),{},{fill:"white"})},_=c.children?{children:c.children.map(s_)}:{},x={tag:"g",attributes:z({},m.inner),children:[s_(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},_))]},y={tag:"g",attributes:z({},m.outer),children:[x]},h="mask-".concat(a||za()),g="clip-".concat(a||za()),p={tag:"mask",attributes:z(z({},sf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:LD(f)},p]};return r.push(C,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},sf)}),{children:r,attributes:i}}}},FD={provides:function(e){var n=!1;ei.matchMedia&&(n=ei.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},UD=[FO,xD,bD,kD,ID,AD,OD,DD,MD,FD,jD];JO(UD,{mixoutsTo:Yt});Yt.noAuto;Yt.config;Yt.library;Yt.dom;var $h=Yt.parse;Yt.findIconDefinition;Yt.toHtml;var zD=Yt.icon;Yt.layer;Yt.text;Yt.counter;var FS={exports:{}},VD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$D=VD,BD=$D;function jS(){}function US(){}US.resetWarningCache=jS;var WD=function(){function t(r,i,s,o,a,l){if(l!==BD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:US,resetWarningCache:jS};return n.PropTypes=n,n};FS.exports=WD();var HD=FS.exports;const le=__(HD);function o_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Or(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o_(Object(n),!0).forEach(function(r){ys(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dc(t){"@babel/helpers - typeof";return dc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dc(t)}function ys(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function GD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YD(t,e){if(t==null)return{};var n=GD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Bh(t){return KD(t)||qD(t)||QD(t)||XD()}function KD(t){if(Array.isArray(t))return Wh(t)}function qD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function QD(t,e){if(t){if(typeof t=="string")return Wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wh(t,e)}}function Wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function XD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,v=t.border,_=t.listItem,x=t.flip,y=t.size,h=t.rotation,g=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":v,"fa-li":_,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},ys(e,"fa-".concat(y),typeof y<"u"&&y!==null),ys(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ys(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ys(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(C){return p[C]?C:null}).filter(function(C){return C})}function ZD(t){return t=t-0,t===t}function zS(t){return ZD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var eL=["style"];function tL(t){return t.charAt(0).toUpperCase()+t.slice(1)}function nL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=zS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[tL(i)]=s:e[i]=s,e},{})}function VS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return VS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=nL(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[zS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=YD(n,eL);return i.attrs.style=Or(Or({},i.attrs.style),o),t.apply(void 0,[e.tag,Or(Or({},i.attrs),a)].concat(Bh(r)))}var $S=!1;try{$S=!0}catch{}function rL(){if(!$S&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function a_(t){if(t&&dc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if($h.icon)return $h.icon(t);if(t===null)return null;if(t&&dc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function of(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ys({},t,e):{}}var ll=Zt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=a_(n),c=of("classes",[].concat(Bh(JD(t)),Bh(s.split(" ")))),d=of("transform",typeof t.transform=="string"?$h.transform(t.transform):t.transform),f=of("mask",a_(r)),m=zD(u,Or(Or(Or(Or({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return rL("Could not find icon",u),null;var v=m.abstract,_={ref:e};return Object.keys(t).forEach(function(x){ll.defaultProps.hasOwnProperty(x)||(_[x]=t[x])}),iL(v[0],_)});ll.displayName="FontAwesomeIcon";ll.propTypes={beat:le.bool,border:le.bool,beatFade:le.bool,bounce:le.bool,className:le.string,fade:le.bool,flash:le.bool,mask:le.oneOfType([le.object,le.array,le.string]),maskId:le.string,fixedWidth:le.bool,inverse:le.bool,flip:le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:le.oneOfType([le.object,le.array,le.string]),listItem:le.bool,pull:le.oneOf(["right","left"]),pulse:le.bool,rotation:le.oneOf([0,90,180,270]),shake:le.bool,size:le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:le.bool,spinPulse:le.bool,spinReverse:le.bool,symbol:le.oneOfType([le.bool,le.string]),title:le.string,titleId:le.string,transform:le.oneOfType([le.string,le.object]),swapOpacity:le.bool};ll.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var iL=VS.bind(null,Zt.createElement);function ul({size:t}){const[e,n]=S.useState("text-2xl");return S.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),w.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:w.jsx(ll,{icon:aO,spin:!0})})}function sL(){const t=bt(),[e,n]=S.useState(!1);return S.useEffect(function(){AE(zi,async r=>{if(r){console.log("AUTH: Logged");const i=await oO(r);i&&n(i),i||await uS(r)}else t("/login")})},[]),e?w.jsx(sO,{}):w.jsx("div",{className:"h-screen",children:w.jsx(ul,{size:"big"})})}function St({onClick:t,children:e,variant:n,type:r="button",classNames:i=""}){const[s,o]=S.useState(null),[a,l]=S.useState("shadow-md"),u={cta:"bg-themePrimary text-themeWhite",base:"bg-themeWhite text-themePrimary border border-themeGray",outlined:"bg-themeWhite text-themePrimary",danger:"bg-themeDanger text-themeWhite"};S.useEffect(()=>{o(u[n])},[s]);function c(){l("shadow-sm"),setTimeout(()=>{l("shadow-md"),t&&t()},200)}return w.jsx("input",{type:r,onClick:()=>c(),value:e,className:`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-2 mb-2 cursor-pointer w-full ${s} ${a} hover:scale-100 transition-transform duration-200 ${i}`})}function oL(){const t=bt();S.useEffect(()=>{AE(zi,n=>{t(n?"/":"/login")})},[]);function e(){const n=new In;DR(zi,n).then(r=>{const i=In.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return w.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:w.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",w.jsx("br",{}),w.jsx(St,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function aL({event:t}){const e=bt(),n=()=>{e(`/event/${t.id}`)};return w.jsxs("div",{onClick:n,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:t.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function l_({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(console.log(),e===void 0)return w.jsx(ul,{size:"small"});if(console.log(e[0].name),e[0].name==="defaultName")return w.jsxs("div",{children:["U have zero of ",t]});if(e.length>0)return e.map(o=>w.jsx(aL,{event:o},o.id))},i=bt();function s(){i("/event/create")}return w.jsxs("div",{className:"w-full pb-2",children:[w.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?w.jsx(St,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function lL(){const t=S.useContext(hr),e=S.useContext(pr);return S.useEffect(()=>{},[]),w.jsxs("div",{className:"h-full w-full",children:[w.jsx(l_,{buttonAddEvent:!0,title:"Your events",events:t}),w.jsx("br",{}),w.jsx(l_,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var cl=t=>t.type==="checkbox",_s=t=>t instanceof Date,It=t=>t==null;const BS=t=>typeof t=="object";var at=t=>!It(t)&&!Array.isArray(t)&&BS(t)&&!_s(t),uL=t=>at(t)&&t.target?cl(t.target)?t.target.checked:t.target.value:t,cL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,dL=(t,e)=>t.has(cL(e)),fL=t=>{const e=t.constructor&&t.constructor.prototype;return at(e)&&e.hasOwnProperty("isPrototypeOf")},Qm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Wn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Qm&&(t instanceof Blob||t instanceof FileList))&&(n||at(t)))if(e=n?[]:{},!n&&!fL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Wn(t[r]));else return t;return e}var dl=t=>Array.isArray(t)?t.filter(Boolean):[],Xe=t=>t===void 0,H=(t,e,n)=>{if(!e||!at(t))return n;const r=dl(e.split(/[,[\].]+?/)).reduce((i,s)=>It(i)?i:i[s],t);return Xe(r)||r===t?Xe(t[e])?n:t[e]:r},Ci=t=>typeof t=="boolean";const u_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var hL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==pn.all&&(e._proxyFormState[o]=!r||pn.all),n&&(n[o]=!0),t[o]}});return i},Qt=t=>at(t)&&!Object.keys(t).length,pL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Qt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||pn.all))},af=t=>Array.isArray(t)?t:[t];function mL(t){const e=Zt.useRef(t);e.current=t,Zt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Nn=t=>typeof t=="string",gL=(t,e,n,r,i)=>Nn(t)?(r&&e.watch.add(t),H(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),H(n,s))):(r&&(e.watchAll=!0),n),Xm=t=>/^\w*$/.test(t),WS=t=>dl(t.replace(/["|']|\]/g,"").split(/\.|\[/));function De(t,e,n){let r=-1;const i=Xm(e)?[e]:WS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=at(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var vL=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Hh=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=H(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else at(o)&&Hh(o,e)}}};var c_=t=>({isOnSubmit:!t||t===pn.onSubmit,isOnBlur:t===pn.onBlur,isOnChange:t===pn.onChange,isOnAll:t===pn.all,isOnTouch:t===pn.onTouched}),d_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),yL=(t,e,n)=>{const r=dl(H(t,n));return De(r,"root",e[n]),De(t,n,r),t},Jm=t=>t.type==="file",Dr=t=>typeof t=="function",fc=t=>{if(!Qm)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},fu=t=>Nn(t),Zm=t=>t.type==="radio",hc=t=>t instanceof RegExp;const f_={value:!1,isValid:!1},h_={value:!0,isValid:!0};var HS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Xe(t[0].attributes.value)?Xe(t[0].value)||t[0].value===""?h_:{value:t[0].value,isValid:!0}:h_:f_}return f_};const p_={isValid:!1,value:null};var GS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,p_):p_;function m_(t,e,n="validate"){if(fu(t)||Array.isArray(t)&&t.every(fu)||Ci(t)&&!t)return{type:n,message:fu(t)?t:"",ref:e}}var Zi=t=>at(t)&&!hc(t)?t:{value:t,message:""},g_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:m,name:v,valueAsNumber:_,mount:x,disabled:y}=t._f,h=H(e,v);if(!x||y)return{};const g=o?o[0]:s,p=Q=>{r&&g.reportValidity&&(g.setCustomValidity(Ci(Q)?"":Q||""),g.reportValidity())},C={},N=Zm(s),b=cl(s),P=N||b,U=(_||Jm(s))&&Xe(s.value)&&Xe(h)||fc(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,M=vL.bind(null,v,n,C),Z=(Q,ee,ge,ae=Bn.maxLength,He=Bn.minLength)=>{const Qe=Q?ee:ge;C[v]={type:Q?ae:He,message:Qe,ref:s,...M(Q?ae:He,Qe)}};if(i?!Array.isArray(h)||!h.length:a&&(!P&&(U||It(h))||Ci(h)&&!h||b&&!HS(o).isValid||N&&!GS(o).isValid)){const{value:Q,message:ee}=fu(a)?{value:!!a,message:a}:Zi(a);if(Q&&(C[v]={type:Bn.required,message:ee,ref:g,...M(Bn.required,ee)},!n))return p(ee),C}if(!U&&(!It(c)||!It(d))){let Q,ee;const ge=Zi(d),ae=Zi(c);if(!It(h)&&!isNaN(h)){const He=s.valueAsNumber||h&&+h;It(ge.value)||(Q=He>ge.value),It(ae.value)||(ee=He<ae.value)}else{const He=s.valueAsDate||new Date(h),Qe=q=>new Date(new Date().toDateString()+" "+q),F=s.type=="time",Y=s.type=="week";Nn(ge.value)&&h&&(Q=F?Qe(h)>Qe(ge.value):Y?h>ge.value:He>new Date(ge.value)),Nn(ae.value)&&h&&(ee=F?Qe(h)<Qe(ae.value):Y?h<ae.value:He<new Date(ae.value))}if((Q||ee)&&(Z(!!Q,ge.message,ae.message,Bn.max,Bn.min),!n))return p(C[v].message),C}if((l||u)&&!U&&(Nn(h)||i&&Array.isArray(h))){const Q=Zi(l),ee=Zi(u),ge=!It(Q.value)&&h.length>+Q.value,ae=!It(ee.value)&&h.length<+ee.value;if((ge||ae)&&(Z(ge,Q.message,ee.message),!n))return p(C[v].message),C}if(f&&!U&&Nn(h)){const{value:Q,message:ee}=Zi(f);if(hc(Q)&&!h.match(Q)&&(C[v]={type:Bn.pattern,message:ee,ref:s,...M(Bn.pattern,ee)},!n))return p(ee),C}if(m){if(Dr(m)){const Q=await m(h,e),ee=m_(Q,g);if(ee&&(C[v]={...ee,...M(Bn.validate,ee.message)},!n))return p(ee.message),C}else if(at(m)){let Q={};for(const ee in m){if(!Qt(Q)&&!n)break;const ge=m_(await m[ee](h,e),g,ee);ge&&(Q={...ge,...M(ee,ge.message)},p(ge.message),n&&(C[v]=Q))}if(!Qt(Q)&&(C[v]={ref:g,...Q},!n))return C}}return p(!0),C};function _L(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Xe(t)?r++:t[e[r++]];return t}function wL(t){for(const e in t)if(t.hasOwnProperty(e)&&!Xe(t[e]))return!1;return!0}function ht(t,e){const n=Array.isArray(e)?e:Xm(e)?[e]:WS(e),r=n.length===1?t:_L(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(at(r)&&Qt(r)||Array.isArray(r)&&wL(r))&&ht(t,n.slice(0,-1)),t}function lf(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var pc=t=>It(t)||!BS(t);function xi(t,e){if(pc(t)||pc(e))return t===e;if(_s(t)&&_s(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(_s(s)&&_s(o)||at(s)&&at(o)||Array.isArray(s)&&Array.isArray(o)?!xi(s,o):s!==o)return!1}}return!0}var YS=t=>t.type==="select-multiple",EL=t=>Zm(t)||cl(t),uf=t=>fc(t)&&t.isConnected,KS=t=>{for(const e in t)if(Dr(t[e]))return!0;return!1};function mc(t,e={}){const n=Array.isArray(t);if(at(t)||n)for(const r in t)Array.isArray(t[r])||at(t[r])&&!KS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},mc(t[r],e[r])):It(t[r])||(e[r]=!0);return e}function qS(t,e,n){const r=Array.isArray(t);if(at(t)||r)for(const i in t)Array.isArray(t[i])||at(t[i])&&!KS(t[i])?Xe(e)||pc(n[i])?n[i]=Array.isArray(t[i])?mc(t[i],[]):{...mc(t[i])}:qS(t[i],It(e)?{}:e[i],n[i]):n[i]=!xi(t[i],e[i]);return n}var cf=(t,e)=>qS(t,e,mc(e)),QS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Xe(t)?t:e?t===""?NaN:t&&+t:n&&Nn(t)?new Date(t):r?r(t):t;function df(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Jm(e)?e.files:Zm(e)?GS(t.refs).value:YS(e)?[...e.selectedOptions].map(({value:n})=>n):cl(e)?HS(t.refs).value:QS(Xe(e.value)?t.ref.value:e.value,t)}var SL=(t,e,n,r)=>{const i={};for(const s of t){const o=H(e,s);o&&De(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Ao=t=>Xe(t)?t:hc(t)?t.source:at(t)?hc(t.value)?t.value.source:t.value:t,CL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function v_(t,e,n){const r=H(t,n);if(r||Xm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=H(e,s),a=H(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var xL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,bL=(t,e)=>!dl(H(t,e)).length&&ht(t,e);const kL={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function IL(t={},e){let n={...kL,...t},r={submitCount:0,isDirty:!1,isLoading:Dr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=at(n.defaultValues)||at(n.values)?Wn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Wn(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:lf(),array:lf(),state:lf()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,v=c_(n.mode),_=c_(n.reValidateMode),x=n.criteriaMode===pn.all,y=E=>I=>{clearTimeout(c),c=setTimeout(E,I)},h=async E=>{if(d.isValid||E){const I=n.resolver?Qt((await U()).errors):await Z(i,!0);I!==r.isValid&&f.state.next({isValid:I})}},g=E=>d.isValidating&&f.state.next({isValidating:E}),p=(E,I=[],R,B,j=!0,D=!0)=>{if(B&&R){if(a.action=!0,D&&Array.isArray(H(i,E))){const W=R(H(i,E),B.argA,B.argB);j&&De(i,E,W)}if(D&&Array.isArray(H(r.errors,E))){const W=R(H(r.errors,E),B.argA,B.argB);j&&De(r.errors,E,W),bL(r.errors,E)}if(d.touchedFields&&D&&Array.isArray(H(r.touchedFields,E))){const W=R(H(r.touchedFields,E),B.argA,B.argB);j&&De(r.touchedFields,E,W)}d.dirtyFields&&(r.dirtyFields=cf(s,o)),f.state.next({name:E,isDirty:ee(E,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else De(o,E,I)},C=(E,I)=>{De(r.errors,E,I),f.state.next({errors:r.errors})},N=(E,I,R,B)=>{const j=H(i,E);if(j){const D=H(o,E,Xe(R)?H(s,E):R);Xe(D)||B&&B.defaultChecked||I?De(o,E,I?D:df(j._f)):He(E,D),a.mount&&h()}},b=(E,I,R,B,j)=>{let D=!1,W=!1;const Te={name:E};if(!R||B){d.isDirty&&(W=r.isDirty,r.isDirty=Te.isDirty=ee(),D=W!==Te.isDirty);const Oe=xi(H(s,E),I);W=H(r.dirtyFields,E),Oe?ht(r.dirtyFields,E):De(r.dirtyFields,E,!0),Te.dirtyFields=r.dirtyFields,D=D||d.dirtyFields&&W!==!Oe}if(R){const Oe=H(r.touchedFields,E);Oe||(De(r.touchedFields,E,R),Te.touchedFields=r.touchedFields,D=D||d.touchedFields&&Oe!==R)}return D&&j&&f.state.next(Te),D?Te:{}},P=(E,I,R,B)=>{const j=H(r.errors,E),D=d.isValid&&Ci(I)&&r.isValid!==I;if(t.delayError&&R?(u=y(()=>C(E,R)),u(t.delayError)):(clearTimeout(c),u=null,R?De(r.errors,E,R):ht(r.errors,E)),(R?!xi(j,R):j)||!Qt(B)||D){const W={...B,...D&&Ci(I)?{isValid:I}:{},errors:r.errors,name:E};r={...r,...W},f.state.next(W)}g(!1)},U=async E=>n.resolver(o,n.context,SL(E||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),M=async E=>{const{errors:I}=await U(E);if(E)for(const R of E){const B=H(I,R);B?De(r.errors,R,B):ht(r.errors,R)}else r.errors=I;return I},Z=async(E,I,R={valid:!0})=>{for(const B in E){const j=E[B];if(j){const{_f:D,...W}=j;if(D){const Te=l.array.has(D.name),Oe=await g_(j,o,x,n.shouldUseNativeValidation&&!I,Te);if(Oe[D.name]&&(R.valid=!1,I))break;!I&&(H(Oe,D.name)?Te?yL(r.errors,Oe,D.name):De(r.errors,D.name,Oe[D.name]):ht(r.errors,D.name))}W&&await Z(W,I,R)}}return R.valid},Q=()=>{for(const E of l.unMount){const I=H(i,E);I&&(I._f.refs?I._f.refs.every(R=>!uf(R)):!uf(I._f.ref))&&zt(E)}l.unMount=new Set},ee=(E,I)=>(E&&I&&De(o,E,I),!xi(pe(),s)),ge=(E,I,R)=>gL(E,l,{...a.mount?o:Xe(I)?s:Nn(E)?{[E]:I}:I},R,I),ae=E=>dl(H(a.mount?o:s,E,t.shouldUnregister?H(s,E,[]):[])),He=(E,I,R={})=>{const B=H(i,E);let j=I;if(B){const D=B._f;D&&(!D.disabled&&De(o,E,QS(I,D)),j=fc(D.ref)&&It(I)?"":I,YS(D.ref)?[...D.ref.options].forEach(W=>W.selected=j.includes(W.value)):D.refs?cl(D.ref)?D.refs.length>1?D.refs.forEach(W=>(!W.defaultChecked||!W.disabled)&&(W.checked=Array.isArray(j)?!!j.find(Te=>Te===W.value):j===W.value)):D.refs[0]&&(D.refs[0].checked=!!j):D.refs.forEach(W=>W.checked=W.value===j):Jm(D.ref)?D.ref.value="":(D.ref.value=j,D.ref.type||f.values.next({name:E,values:{...o}})))}(R.shouldDirty||R.shouldTouch)&&b(E,j,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&q(E)},Qe=(E,I,R)=>{for(const B in I){const j=I[B],D=`${E}.${B}`,W=H(i,D);(l.array.has(E)||!pc(j)||W&&!W._f)&&!_s(j)?Qe(D,j,R):He(D,j,R)}},F=(E,I,R={})=>{const B=H(i,E),j=l.array.has(E),D=Wn(I);De(o,E,D),j?(f.array.next({name:E,values:{...o}}),(d.isDirty||d.dirtyFields)&&R.shouldDirty&&f.state.next({name:E,dirtyFields:cf(s,o),isDirty:ee(E,D)})):B&&!B._f&&!It(D)?Qe(E,D,R):He(E,D,R),d_(E,l)&&f.state.next({...r}),f.values.next({name:E,values:{...o}}),!a.mount&&e()},Y=async E=>{const I=E.target;let R=I.name,B=!0;const j=H(i,R),D=()=>I.type?df(j._f):uL(E);if(j){let W,Te;const Oe=D(),zn=E.type===u_.BLUR||E.type===u_.FOCUS_OUT,sd=!CL(j._f)&&!n.resolver&&!H(r.errors,R)&&!j._f.deps||xL(zn,H(r.touchedFields,R),r.isSubmitted,_,v),qi=d_(R,l,zn);De(o,R,Oe),zn?(j._f.onBlur&&j._f.onBlur(E),u&&u(0)):j._f.onChange&&j._f.onChange(E);const vr=b(R,Oe,zn,!1),gl=!Qt(vr)||qi;if(!zn&&f.values.next({name:R,type:E.type,values:{...o}}),sd)return d.isValid&&h(),gl&&f.state.next({name:R,...qi?{}:vr});if(!zn&&qi&&f.state.next({...r}),g(!0),n.resolver){const{errors:Qi}=await U([R]),od=v_(r.errors,i,R),ho=v_(Qi,i,od.name||R);W=ho.error,R=ho.name,Te=Qt(Qi)}else W=(await g_(j,o,x,n.shouldUseNativeValidation))[R],B=Number.isNaN(Oe)||Oe===H(o,R,Oe),B&&(W?Te=!1:d.isValid&&(Te=await Z(i,!0)));B&&(j._f.deps&&q(j._f.deps),P(R,Te,W,vr))}},q=async(E,I={})=>{let R,B;const j=af(E);if(g(!0),n.resolver){const D=await M(Xe(E)?E:j);R=Qt(D),B=E?!j.some(W=>H(D,W)):R}else E?(B=(await Promise.all(j.map(async D=>{const W=H(i,D);return await Z(W&&W._f?{[D]:W}:W)}))).every(Boolean),!(!B&&!r.isValid)&&h()):B=R=await Z(i);return f.state.next({...!Nn(E)||d.isValid&&R!==r.isValid?{}:{name:E},...n.resolver||!E?{isValid:R}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!B&&Hh(i,D=>D&&H(r.errors,D),E?j:l.mount),B},pe=E=>{const I={...s,...a.mount?o:{}};return Xe(E)?I:Nn(E)?H(I,E):E.map(R=>H(I,R))},ve=(E,I)=>({invalid:!!H((I||r).errors,E),isDirty:!!H((I||r).dirtyFields,E),isTouched:!!H((I||r).touchedFields,E),error:H((I||r).errors,E)}),Cn=E=>{E&&af(E).forEach(I=>ht(r.errors,I)),f.state.next({errors:E?r.errors:{}})},Kt=(E,I,R)=>{const B=(H(i,E,{_f:{}})._f||{}).ref;De(r.errors,E,{...I,ref:B}),f.state.next({name:E,errors:r.errors,isValid:!1}),R&&R.shouldFocus&&B&&B.focus&&B.focus()},li=(E,I)=>Dr(E)?f.values.subscribe({next:R=>E(ge(void 0,I),R)}):ge(E,I,!0),zt=(E,I={})=>{for(const R of E?af(E):l.mount)l.mount.delete(R),l.array.delete(R),I.keepValue||(ht(i,R),ht(o,R)),!I.keepError&&ht(r.errors,R),!I.keepDirty&&ht(r.dirtyFields,R),!I.keepTouched&&ht(r.touchedFields,R),!n.shouldUnregister&&!I.keepDefaultValue&&ht(s,R);f.values.next({values:{...o}}),f.state.next({...r,...I.keepDirty?{isDirty:ee()}:{}}),!I.keepIsValid&&h()},xe=({disabled:E,name:I,field:R,fields:B})=>{if(Ci(E)){const j=E?void 0:H(o,I,df(R?R._f:H(B,I)._f));De(o,I,j),b(I,j,!1,!1,!0)}},jn=(E,I={})=>{let R=H(i,E);const B=Ci(I.disabled);return De(i,E,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:E}},name:E,mount:!0,...I}}),l.mount.add(E),R?xe({field:R,disabled:I.disabled,name:E}):N(E,!0,I.value),{...B?{disabled:I.disabled}:{},...n.progressive?{required:!!I.required,min:Ao(I.min),max:Ao(I.max),minLength:Ao(I.minLength),maxLength:Ao(I.maxLength),pattern:Ao(I.pattern)}:{},name:E,onChange:Y,onBlur:Y,ref:j=>{if(j){jn(E,I),R=H(i,E);const D=Xe(j.value)&&j.querySelectorAll&&j.querySelectorAll("input,select,textarea")[0]||j,W=EL(D),Te=R._f.refs||[];if(W?Te.find(Oe=>Oe===D):D===R._f.ref)return;De(i,E,{_f:{...R._f,...W?{refs:[...Te.filter(uf),D,...Array.isArray(H(s,E))?[{}]:[]],ref:{type:D.type,name:E}}:{ref:D}}}),N(E,!1,void 0,D)}else R=H(i,E,{}),R._f&&(R._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(dL(l.array,E)&&a.action)&&l.unMount.add(E)}}},fo=()=>n.shouldFocusError&&Hh(i,E=>E&&H(r.errors,E),l.mount),hl=(E,I)=>async R=>{R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let B=Wn(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:j,values:D}=await U();r.errors=j,B=D}else await Z(i);ht(r.errors,"root"),Qt(r.errors)?(f.state.next({errors:{}}),await E(B,R)):(I&&await I({...r.errors},R),fo(),setTimeout(fo)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Un=(E,I={})=>{H(i,E)&&(Xe(I.defaultValue)?F(E,H(s,E)):(F(E,I.defaultValue),De(s,E,I.defaultValue)),I.keepTouched||ht(r.touchedFields,E),I.keepDirty||(ht(r.dirtyFields,E),r.isDirty=I.defaultValue?ee(E,H(s,E)):ee()),I.keepError||(ht(r.errors,E),d.isValid&&h()),f.state.next({...r}))},pl=(E,I={})=>{const R=E?Wn(E):s,B=Wn(R),j=E&&!Qt(E)?B:s;if(I.keepDefaultValues||(s=R),!I.keepValues){if(I.keepDirtyValues||m)for(const D of l.mount)H(r.dirtyFields,D)?De(j,D,H(o,D)):F(D,H(j,D));else{if(Qm&&Xe(E))for(const D of l.mount){const W=H(i,D);if(W&&W._f){const Te=Array.isArray(W._f.refs)?W._f.refs[0]:W._f.ref;if(fc(Te)){const Oe=Te.closest("form");if(Oe){Oe.reset();break}}}}i={}}o=t.shouldUnregister?I.keepDefaultValues?Wn(s):{}:Wn(j),f.array.next({values:{...j}}),f.values.next({values:{...j}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!I.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!xi(E,s)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&E?cf(s,E):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitSuccessful:I.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ml=(E,I)=>pl(Dr(E)?E(o):E,I);return{control:{register:jn,unregister:zt,getFieldState:ve,handleSubmit:hl,setError:Kt,_executeSchema:U,_getWatch:ge,_getDirty:ee,_updateValid:h,_removeUnmounted:Q,_updateFieldArray:p,_updateDisabledField:xe,_getFieldArray:ae,_reset:pl,_resetDefaultValues:()=>Dr(n.defaultValues)&&n.defaultValues().then(E=>{ml(E,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:E=>{r={...r,...E}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(E){a=E},get _defaultValues(){return s},get _names(){return l},set _names(E){l=E},get _formState(){return r},set _formState(E){r=E},get _options(){return n},set _options(E){n={...n,...E}}},trigger:q,register:jn,handleSubmit:hl,watch:li,setValue:F,getValues:pe,reset:ml,resetField:Un,clearErrors:Cn,unregister:zt,setError:Kt,setFocus:(E,I={})=>{const R=H(i,E),B=R&&R._f;if(B){const j=B.refs?B.refs[0]:B.ref;j.focus&&(j.focus(),I.shouldSelect&&j.select())}},getFieldState:ve}}function fl(t={}){const e=Zt.useRef(),n=Zt.useRef(),[r,i]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:Dr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Dr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...IL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,mL({subject:s._subjects.state,next:o=>{pL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Zt.useEffect(()=>{t.values&&!xi(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Zt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=hL(r,s),e.current}const wn=({type:t,placeholder:e,defaultValue:n,register:r,variant:i="base"})=>{const[s,o]=S.useState(null),a={base:"border-2 border-themeGray rounded-none",outline:"border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2",danger:"border-themeDanger rounded-2xl h-12 p-2 border-2 mt-2 mb-2",disabled:"border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2 bg-themeGray"};return S.useEffect(()=>{o(a[i])},[s,i]),w.jsx("input",{...r,defaultValue:n,type:t,step:"any",placeholder:e,className:`${s} w-full transition-transform duration-200`,disabled:i==="disabled"&&!0})};function TL({usersInput:t,resetField:e,setSelectedUsers:n,selectedUsers:r,variant:i}){const s=Sn(),o=S.useContext(mr),a=S.useContext(Fn),[l,u]=S.useState(void 0);function c(m){if(m===void 0){u(void 0);return}if(m.length===0){u(void 0);return}if(m.length>0){const v=o==null?void 0:o.filter(_=>{if(r!==void 0&&r.filter(h=>h===_.uid).length!==0||_.uid===(a==null?void 0:a.uid))return null;const x=_.email.includes(m);if(x===!1)return null;if(x===!0)return!0});u(v)}}function d(m){e("usersInput"),n(v=>v?[...v,m.uid]:[m.uid])}function f(m){const v=r==null?void 0:r.filter(_=>_!==(m==null?void 0:m.uid));n(v)}return S.useEffect(()=>{c(t)},[t,r]),w.jsxs(w.Fragment,{children:[w.jsx("div",{children:r?w.jsx("div",{className:`${r.length===0?"hidden":"visible"} border-themePrimary border-2 rounded-2xl p-2 mb-2`,children:r.map(m=>{const v=o==null?void 0:o.filter(_=>_.uid===m)[0];return v===void 0?w.jsx(w.Fragment,{children:"Error"}):w.jsx("div",{className:"flex gap-2 items-center pt-1 pb-1 flex-col",children:w.jsxs("div",{className:"flex gap-2  pt-1 pb-1 w-full",children:[w.jsxs("div",{className:"flex w-full gap-2",children:[w.jsx(Zr,{myUser:v,onClick:()=>f(v)}),w.jsxs("p",{className:"text-xs",children:[" ",v.email]})]}),w.jsx("div",{onClick:()=>f(v),className:"p-2 border-2 h-8 w-8 border-themePrimary rounded-full flex items-center justify-center cursor-pointer",children:w.jsx("div",{className:"w-4 h-[2px] bg-themeDanger"})})]})})})}):null}),w.jsxs("div",{className:`${l?"h-32 opacity-100 p-2":"h-0 opacity-0 p-0"} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`,children:[l!==void 0&&(l==null?void 0:l.length)>0?l.map(m=>w.jsxs("div",{onClick:()=>d(m),className:"flex gap-2 items-center p-1",children:[w.jsx(Zr,{myUser:m}),w.jsxs("p",{className:"text-xs",children:[" ",m.email]})]})):w.jsx("div",{className:"p-1 text-center grid items-center h-full",children:"User not found"}),w.jsx(aS,{to:`/event/${s.id}/createUser`,children:w.jsx(St,{variant:"cta",children:"Add new member"})})]})]})}function NL(){return new Date}function PL(t){return Math.floor(Math.random()*t)}function gc(){let t="id";const e=new Date;return t+=e.getFullYear(),t+=e.getMonth()+1,t+=e.getDate(),t+=e.getMinutes(),t+=e.getSeconds(),t+=e.getMilliseconds(),t+=PL(1e4),t}const eg=NL(),XS=eg.getFullYear();let na=`${eg.getMonth()+1}`;Number(na)<10&&(na=`0${na}`);let ra=`${eg.getDate()}`;Number(ra)<10&&(ra=`0${ra}`);function JS({type:t,currentEvent:e}){const n=bt(),r=S.useContext(mr),i=S.useContext(Fn),[s,o]=S.useState(void 0),{register:a,handleSubmit:l,watch:u,formState:{errors:c},resetField:d,setValue:f}=fl(),m=u("usersInput"),v=g=>{t==="create"&&_(g),t==="edit"&&x(g)},_=g=>{const p=gc();if(i===void 0){n("/login");return}let C={id:p,date:`${XS}-${na}-${ra}`,name:g.name,owner:i==null?void 0:i.uid,users:{}};s!==void 0&&s.length>0&&s.map(P=>{Object.defineProperty(C.users,P,{value:P,enumerable:!0}),y(P,p)}),Ar(Je(rt,"events/"+p),C);const N=i==null?void 0:i.ownerOfEvents.length;let b={};Object.defineProperty(b,N,{value:p,enumerable:!0}),qs(Je(rt,`users/${i.uid}/ownerOfEvents`),b),n("/event/"+p)},x=g=>{if(e===void 0)return;let p={...e,name:g.name,users:{}};s!==void 0&&s.length>0&&s.map(b=>{Object.defineProperty(p.users,b,{value:b,enumerable:!0})}),Ar(Je(rt,"events/"+e.id),p);const C=s==null?void 0:s.filter(b=>e.users.includes(b)?null:b);C==null||C.forEach(b=>{r==null||r.find(P=>{if(P.uid===b){let U=P.participateOfEvents;U.push(e.id);const M={};U.forEach((Z,Q)=>{Object.defineProperty(M,Q,{value:Z,enumerable:!0})}),Ar(Je(rt,`users/${b}/participateOfEvents`),M)}})}),e.users.filter(b=>s!=null&&s.includes(b)?null:b).forEach(b=>{const P=r==null?void 0:r.find(Z=>Z.uid===b?Z:!1),U=P==null?void 0:P.participateOfEvents.filter(Z=>Z===e.id?null:Z),M={};U==null||U.forEach((Z,Q)=>{Object.defineProperty(M,Q,{value:Z,enumerable:!0})}),Ar(Je(rt,`users/${b}/participateOfEvents`),M)}),n("/event/"+e.id)};function y(g,p){if(r===void 0)return;const N=r.filter(P=>P.uid===g)[0].participateOfEvents.length,b={};Object.defineProperty(b,N,{value:p,enumerable:!0}),console.log(b),qs(Je(rt,`users/${g}/participateOfEvents/`),b)}function h(){n(`/event/${e==null?void 0:e.id}/delete`)}return S.useEffect(()=>{t==="edit"&&e!==void 0&&(f("name",e.name),o([...e.users]))},[e]),w.jsxs("form",{onSubmit:l(v),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsxs("h1",{className:"mt-2 mb-2 font-bold text-xl",children:[t==="create"?"Create":null," ",t==="edit"?"Edit":null," Event"]}),w.jsxs("label",{children:[w.jsx(wn,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Event name",variant:c.name?"danger":"outline"}),c.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{children:[w.jsx(wn,{type:"text",defaultValue:"",register:a("usersInput"),placeholder:"Add users",variant:"outline"}),w.jsx(TL,{usersInput:m,resetField:d,setSelectedUsers:o,selectedUsers:s})]}),w.jsxs("div",{className:"self-end flex gap-4",children:[w.jsx(St,{variant:"outlined",type:"submit",children:"Submit"}),t==="edit"?w.jsx(St,{variant:"danger",onClick:h,type:"button",children:"Delete event"}):null]})]})}function RL(){return w.jsx("div",{className:"h-full",children:w.jsx(JS,{type:"create"})})}function ZS({children:t}){return w.jsx("div",{className:"w-full max-w-screen overflow-x-scroll p-2",children:w.jsxs("div",{className:"w-2 flex gap-2 ",children:[...t]})})}function ia({children:t,onClick:e}){return w.jsx("div",{onClick:e,className:"p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer",children:t})}const eC=S.createContext(void 0);function AL(){const t=Sn(),e=bt(),n=S.useContext(hr),r=S.useContext(pr),i=S.useContext(Fn),[s,o]=S.useState(void 0),[a,l]=S.useState(!1),[u,c]=S.useState([]),[d,f]=S.useState(void 0);function m(){if(i!==void 0){if(t.id===void 0){l("Event not Found");return}if(n){const g=v(n,t.id);g&&(o(g),f(i))}if(r){const g=v(r,t.id);g&&(o(g),_(g.owner))}}}function v(g,p){if(p===void 0)return!1;const C=g.filter(N=>N.id===p?N:null)[0];return C===void 0?!1:C}async function _(g){await Xo(Je(rt,`/users/${g}`),p=>{p.exists()&&f({...p.val(),uid:g})})}function x(g){const p=cE(Je(rt,`users/${g}`));Xo(p,C=>{C.exists()&&c(N=>[...N,{...C.val(),uid:g}])})}function y(){s==null||s.users.map(g=>{x(g)}),console.log(u)}function h(){e(`/event/${t.id}/edit`)}return S.useEffect(()=>{zi.currentUser!==null&&(m(),s&&u.length==0&&y())},[s,n,r,u]),s===void 0&&!a?w.jsx(ul,{size:"big"}):a!==!1?(console.log(a),w.jsx("div",{children:a})):s?w.jsxs("div",{className:"h-full",children:[w.jsxs("div",{className:"border-2 border-themePrimary p-2 pt-4 pb-4 rounded-2xl flex flex-col gap-4 mb-4",children:[w.jsxs("div",{className:"flex justify-between items-center pl-2 pr-2",children:[w.jsx("span",{className:"font-bold text-xl",children:s.name}),w.jsx(Zr,{myUser:d,size:"medium"})]}),w.jsx("div",{className:"flex gap-2 pl-2 pr-2",children:u.map((g,p)=>w.jsx(Zr,{myUser:g,size:"medium"},p))}),w.jsxs(ZS,{children:[w.jsx(ia,{onClick:()=>{e(`/event/${t.id}/`)},children:"Summary"}),w.jsx(ia,{onClick:()=>{e(`/event/${t.id}/payments`)},children:"Payments"}),w.jsx(ia,{onClick:h,children:"Edit Event"}),w.jsx(w.Fragment,{})]})]}),w.jsx(eC.Provider,{value:s,children:w.jsx(oS,{})})]}):w.jsx("div",{children:"Error not found"})}function Js({user:t,checked:e=!1,maxWFit:n=!1,border:r=!0}){return S.useEffect(()=>{},[e,t]),w.jsxs("div",{className:`${e?"bg-themeAccent":"bg-white"} ${n?"max-w-fit":""} ${r?"border-2 border-themePrimary pt-2 pb-2 pl-4 pr-4":""} flex items-center gap-2   rounded-2xl min-w-fit cursor-pointer`,children:[w.jsx(Zr,{myUser:t})," ",t.displayName]})}function OL(){const t=S.useContext(Fn);return console.log(t),w.jsxs(w.Fragment,{children:[w.jsxs("div",{children:[w.jsx(St,{variant:"cta",onClick:()=>{},children:"CTA"}),w.jsx(St,{variant:"outlined",onClick:()=>{},children:"Outlined"}),w.jsx(St,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx(St,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx("div",{className:"bg-themePrimary",children:w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]})}),w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]}),w.jsxs(ZS,{children:[w.jsx(ia,{children:"Pill"}),w.jsx(ia,{children:"Ale bang"})]})]}),w.jsx(Js,{user:t})]})}function DL(){const[t,e]=S.useState(dt),n=S.useContext(hr),r=S.useContext(pr),i=Sn(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{className:"h-full",children:w.jsx(JS,{type:"edit",currentEvent:t})})}function LL({currentEvent:t}){const e=S.useContext(mr),n=S.useContext(Fn),r=bt(),{register:i,handleSubmit:s,formState:{errors:o}}=fl(),a=u=>{if(t.id===u.eventName){const c=n.ownerOfEvents.indexOf(u.eventName);console.log(c);const d={};Object.defineProperty(d,c,{value:null,enumerable:!0}),qs(Je(rt,`users/${n.uid}/ownerOfEvents/`),d),t.users.forEach(f=>{l(f,t.id)}),hP(Je(rt,`events/${u.eventName}`)).then(()=>{r("/")})}};function l(u,c){if(e===void 0)return;const f=e.filter(v=>v.uid===u)[0].participateOfEvents.indexOf(c),m={};Object.defineProperty(m,f,{value:null,enumerable:!0}),qs(Je(rt,`users/${u}/participateOfEvents/`),m)}return w.jsxs("form",{onSubmit:s(a),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Delete Event"}),w.jsxs("p",{children:["Type event id to delete event ",w.jsx("span",{className:"text-themeDanger",children:t.id})]}),w.jsxs("label",{children:[w.jsx(wn,{type:"text",defaultValue:"",register:i("eventName",{required:!0}),placeholder:"Event id",variant:o.eventName?"danger":"outline"}),o.eventName&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsx(St,{variant:"danger",type:"submit",children:"Submit"})]})}function ML(){const[t,e]=S.useState(dt),n=S.useContext(hr),r=S.useContext(pr),i=Sn(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(LL,{currentEvent:t})})}function FL({eventID:t,payment:e}){const n=bt(),r=()=>{n(`/event/${t}/payment/${e.id}`)};return w.jsxs("div",{onClick:r,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:e.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",e.name]})]},"bang")}function jL({currentEvent:t}){console.log(t),console.log(dt),Sn();const e=()=>{if(t.id===dt.id)return w.jsx(ul,{size:"small"});if(t.payments)return t.payments.map(n=>(console.log(n),w.jsx(FL,{eventID:t.id,payment:n})))};return S.useEffect(()=>{},[t]),w.jsx("div",{className:"w-full",children:e()})}function UL(){const t=bt(),e=Sn(),n=S.useContext(hr),r=S.useContext(pr),[i,s]=S.useState(dt),[o,a]=S.useState(!1);function l(){if(e.id===void 0){a("Event not Found");return}if(n){const c=u(n,e.id);c&&s(c)}if(r){const c=u(r,e.id);c&&s(c)}}function u(c,d){if(d===void 0)return!1;const f=c.filter(m=>m.id===d?m:null)[0];return f===void 0?!1:f}return S.useEffect(()=>{l(),console.log(i)},[n,r,i]),w.jsxs("div",{className:"h-auto",children:[w.jsx(St,{variant:"cta",onClick:()=>t(`/event/${e.id}/payment/create`),children:"Add Payment"}),w.jsx(jL,{currentEvent:i}),o||null]})}function ri(t,e){const n=e.filter(r=>r.uid===t);return n.length>0?n[0]:As}function zL({currentEvent:t}){const e=S.useContext(mr),n=S.useContext(Fn),r=bt(),[i,s]=S.useState([]),[o,a]=S.useState({uid:t.owner,checked:!0,value:0}),{register:l,handleSubmit:u,watch:c,formState:{errors:d},setError:f,resetField:m,setValue:v}=fl(),_=c("amount"),x=async b=>{const P=gc(),U={date:`${XS}-${na}-${ra}`,id:P,amount:b.amount,name:b.name,users:{},whopaid:{uid:n.uid,value:o.value}};i!==void 0&&i.length>0&&i.map(Z=>{const Q={uid:Z.uid,value:Z.value,id:gc()};Z.checked&&Object.defineProperty(U.users,Z.uid,{value:Q,enumerable:!0})});let M=0;o.checked&&(M+=Number(o.value)),i.forEach(Z=>{Z.checked&&(console.log(Z.uid),M+=Number(Z.value))}),M!=Number(_)&&f("amount",{type:"focus"}),M==Number(_)&&(await qs(Je(rt,`events/${t.id}/payments/${P}`),U),r("/event/"+t.id))};function y(b){a({uid:o.uid,value:o.value,checked:!o.checked})}function h(b){a({uid:o.uid,value:b.target.value,checked:o.checked})}function g(b){s(P=>[...P.map(M=>M.uid===b.target.name?{uid:M.uid,checked:!M.checked,value:M.value}:M)])}function p(b){console.log("handleValue"),s(P=>[...P.map(M=>M.uid===b.target.name?{uid:M.uid,checked:M.checked,value:b.target.value}:M)])}function C(){console.log("setPaymentUsersOnStartup"),t.users.map(b=>{if(b==="defaultUID")return null;s(P=>P.filter(M=>{if(M.uid===b)return M}).length>0?[...P]:b===n.uid?[...P,{uid:t.owner,checked:!1,value:0}]:[...P,{uid:b,checked:!1,value:0}])})}function N(){a(()=>({uid:n.uid,checked:!0,value:0}))}return S.useEffect(()=>{C(),N()},[t,n]),w.jsxs("form",{onSubmit:u(x),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Add new Payment"}),w.jsxs("label",{children:[w.jsx(wn,{type:"number",defaultValue:"",register:l("amount",{required:!0}),placeholder:"Amount",variant:d.amount?"danger":"outline"}),d.amount&&w.jsx("span",{className:"text-themeDanger",children:"This field is required and General amount has to be the same as value of sum of all people included"})]}),w.jsxs("label",{children:[w.jsx(wn,{type:"text",defaultValue:"",register:l("name",{required:!0}),placeholder:"Payment Name",variant:d.name?"danger":"outline"}),d.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("div",{className:"flex justify-between mt-2 mb-2 gap-2",children:[w.jsxs("label",{className:"w-full",htmlFor:o.uid,children:[w.jsx("input",{type:"checkbox",name:o.uid,checked:o.checked,onChange:y,className:"w-4 hidden",id:o.uid}),w.jsx(Js,{user:ri(o.uid,e),checked:o.checked})]}),w.jsxs("label",{className:"flex items-center gap-2 border-2 border-themePrimary rounded-2xl pl-2 pr-2",children:["Amount",w.jsx("input",{type:"number",name:o.uid,value:o.value,onChange:h,step:"any",className:"w-16 focus-visible:outline-none  border-none pl-2 pr-2 rounded-2xl h-full"})]})]}),i.map((b,P)=>w.jsxs("div",{className:"flex justify-between mt-2 mb-2 gap-2",children:[w.jsxs("label",{className:"w-full",htmlFor:b.uid,children:[w.jsx("input",{type:"checkbox",name:b.uid,onChange:g,checked:b.checked,className:"w-4 hidden",id:b.uid}),w.jsx(Js,{user:ri(b.uid,e),checked:b.checked})]},P),w.jsxs("label",{className:"flex items-center gap-2 border-2 border-themePrimary rounded-2xl pl-2 pr-2",children:["Amount",w.jsx("input",{type:"number",name:b.uid,value:b.value,onChange:p,step:"any",className:"w-16 focus-visible:outline-none  border-none pl-2 pr-2 rounded-2xl h-full"})]})]})),w.jsx(St,{variant:"cta",type:"submit",children:"Submit"})]})}function VL(){const[t,e]=S.useState(dt),n=S.useContext(hr),r=S.useContext(pr),i=Sn(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(zL,{currentEvent:t})})}function $L(){const t=S.useContext(mr);S.useContext(Fn);const e=Sn();if(e.id==null)return;const n=ri(e.id,t),{register:r,handleSubmit:i,watch:s,formState:{errors:o},resetField:a,setValue:l}=fl(),u=c=>{const d={...n,phoneNumber:c.phoneNumber,displayName:c.name,bankAccountNumber:c.bankAccountNumber};qs(Je(rt,`users/${n.uid}`),d)};return w.jsxs("form",{onSubmit:i(u),children:[w.jsx(wn,{type:"text",placeholder:"Name",defaultValue:n.displayName=="Name"?"":n.displayName,register:r("name"),variant:"outline"}),w.jsx(wn,{type:"text",placeholder:"Phone number",defaultValue:`${n.phoneNumber?n.phoneNumber:""}`,register:r("phoneNumber"),variant:"outline"}),w.jsx(wn,{type:"text",placeholder:"Bank account number",defaultValue:`${n.bankAccountNumber?n.bankAccountNumber:""}`,register:r("bankAccountNumber"),variant:"outline"}),w.jsx(St,{variant:"cta",type:"submit",children:"Submit"})]})}function BL(){const t=S.useContext(mr),e=S.useContext(Fn),n=Sn();if(n.id==null)return;const r=ri(n.id,t),i=bt();function s(){hR(zi).then(()=>{i("/login")}).catch(a=>{console.log(a)})}const o=a=>{navigator.clipboard.writeText(a||"")};return S.useEffect(()=>{},[r,e]),w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"mb-8 flex flex-col gap-2 border-2 border-themePrimary rounded-2xl p-4",children:[w.jsx(Js,{user:r,border:!1}),w.jsxs("div",{title:`Click to copy ${r.phoneNumber}`,className:"cursor-pointer",onClick:()=>o(r.phoneNumber),children:["Phone number: ",r.phoneNumber]}),w.jsxs("div",{title:`Click to copy ${r.bankAccountNumber}`,className:"cursor-pointer",onClick:()=>o(r.bankAccountNumber),children:[" Bank Account: ",r.bankAccountNumber]})]}),e.uid===r.uid?w.jsx($L,{}):null,n.id==e.uid?w.jsx(St,{onClick:s,variant:"outlined",children:"Log out"}):null]})}function WL(){const t=S.useContext(mr);bt();const e=Sn(),n=S.useContext(hr),r=S.useContext(pr),[i,s]=S.useState(dt),[o,a]=S.useState(uu),[l,u]=S.useState(!1);function c(){if(e.id===void 0){u("Event not Found");return}if(n){const m=d(n,e.id);m&&s(m)}if(r){const m=d(r,e.id);m&&s(m)}}function d(m,v){if(v===void 0)return!1;const _=m.filter(x=>x.id===v?x:null)[0];return _===void 0?!1:_}function f(){i.payments.forEach(m=>{m.id===e.paymentId&&a(m)})}return S.useEffect(()=>{c(),i&&f()},[n,r,i,o]),o.id==uu.id?w.jsx(ul,{size:"big"}):o!=uu?w.jsxs("div",{className:"h-full",children:[w.jsxs("div",{className:"flex justify-between items-start mb-6 flex-col w-full gap-2 border-2 border-themePrimary rounded-2xl p-4",children:[w.jsx("div",{className:"text-themeSecondary",children:o.date}),w.jsx("div",{className:"font-bold text-xl w-full",children:o.name}),w.jsxs("div",{className:"font-bold",children:["Amount: ",o.amount]}),w.jsxs("div",{className:"flex gap-4",children:[w.jsxs("div",{children:[" ",w.jsx(Zr,{myUser:ri(o.whopaid.uid,t)})," ",`${o.whopaid.value}`," "]}),Object.values(o.users).map(m=>w.jsxs("div",{children:[w.jsx(Zr,{myUser:ri(m.uid,t)})," ",`${m.value}`]}))]})]}),w.jsx("div",{className:"flex gap-2"})]}):w.jsx("div",{children:"Error has occured"})}function HL(){const t=S.useContext(mr),e=S.useContext(eC),[n,r]=S.useState(!1),[i,s]=S.useState([]);function o(){e==null||e.payments.map(l=>{Object.values(l.users).forEach(c=>{s(d=>{if(d.filter(m=>m.paymentsIds.includes(c.id)).length>0)return[...d];{const m=d.map(_=>_.uid==c.uid&&_.payTo==l.whopaid.uid?{uid:_.uid,value:Number(_.value)+Number(c.value),payTo:_.payTo,paymentsIds:[..._.paymentsIds,c.id]}:_);let v=!0;for(let _=0;_<d.length;_++)d[_].value!==m[_].value&&(v=!1);return v?[...d,{uid:c.uid,value:Number(c.value),payTo:l.whopaid.uid,paymentsIds:[c.id]}]:[...m]}})})})}function a(){r(!0),i.forEach(l=>{i.forEach(u=>{if(l.uid===u.payTo&&l.payTo===u.uid){const c=Number(l.value)-Number(u.value);if(c>=0){const d={uid:l.uid,value:c,payTo:l.payTo,paymentsIds:[...l.paymentsIds,...u.paymentsIds]},f=i.map(_=>(_.payTo==d.payTo||_.payTo==d.uid)&&(_.uid==d.uid||_.uid==d.payTo)?(console.log(_),d):(console.log(_),_)),m=[];f.forEach((_,x)=>{f.forEach((y,h)=>{(x==h||_.paymentsIds!=y.paymentsIds)&&(m.includes(_)||m.push(_))})});const v=m.filter(_=>_.value!=0);s(v)}}})})}return S.useEffect(()=>{o()},[e]),w.jsxs(w.Fragment,{children:[n&&i.map((l,u)=>{const c=ri(l.uid,t),d=ri(l.payTo,t);return w.jsxs("div",{className:"border-2 border-themePrimary mb-3 rounded-2xl",children:[w.jsxs("div",{className:"p-2",children:["Settlement ",u+1]}),w.jsx("div",{className:"w-full h-[2px] bg-themePrimary"}),w.jsxs("div",{className:"p-2 flex flex-wrap items-center gap-2",children:[w.jsx(Js,{user:c,maxWFit:!0,border:!1})," ",w.jsx("p",{className:"font-bold text-themeDanger",children:`${l.value}`})," to ",w.jsx(Js,{user:d,maxWFit:!0,border:!1})]})]},u)}),n?null:w.jsx(St,{variant:"base",type:"button",onClick:a,children:"Show summary"})]})}function y_(t,e){console.log(t),console.log(e);const n=e.filter(r=>r.id===t);if(console.log(n[0]),n.length>1)throw new Error("There are more events with the same id");if(n.length===0)throw new Error(`Cannot find event with the id ${t}`);return n[0]}function GL(){const t=S.useContext(hr),e=S.useContext(pr),n=Sn(),r=bt(),{register:i,handleSubmit:s,watch:o,formState:{errors:a},resetField:l,setValue:u}=fl();o("userName"),o("userEmail");const c=async d=>{console.log(d);const f=gc(),m={uid:f,displayName:d.userName,email:d.userEmail,photoURL:lS},v={0:"Initial",1:`${n.id}`};let _=y_(`${n.id}`,t);if(_||(_=y_(`${n.id}`,e)),!_)throw new Error("Event does not exists");const x={..._,users:{}};_.users.forEach(y=>{Object.defineProperty(x.users,y,{value:y,enumerable:!0})}),Object.defineProperty(x.users,f,{value:f,enumerable:!0}),console.log(x),await uS(m),await Ar(Je(rt,`users/${f}/participateOfEvents`),v),await Ar(Je(rt,`events/${n.id}`),x),r(`/event/${n.id}`)};return S.useEffect(()=>{u("eventId",n.id!==null?`${n.id}`:"")},[n]),w.jsx("div",{className:"h-full",children:w.jsxs("form",{onSubmit:s(c),className:"flex h-full flex-col",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Create new member"}),w.jsxs("label",{children:[w.jsx(wn,{type:"text",defaultValue:"",register:i("eventId"),placeholder:"User name",variant:"disabled"}),a.eventId&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{children:[w.jsx(wn,{type:"text",defaultValue:"",register:i("userName",{required:!0}),placeholder:"User name",variant:a.userName?"danger":"outline"}),a.userName&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsx("label",{children:w.jsx(wn,{type:"text",defaultValue:"",register:i("userEmail"),placeholder:"User email",variant:"outline"})}),w.jsx("div",{className:"h-full"}),w.jsx("div",{className:"self-end flex gap-4 w-full",children:w.jsx(St,{variant:"outlined",type:"submit",children:"Submit"})})]})})}const YL=V2([{path:"/",element:w.jsx(sL,{}),children:[{path:"/",element:w.jsx(lL,{})},{path:"/event/:id",element:w.jsx(AL,{}),children:[{path:"/event/:id/payments",element:w.jsx(UL,{})},{path:"/event/:id/",element:w.jsx(HL,{})}]},{path:"/event/:id/createUser",element:w.jsx(GL,{})},{path:"/event/:id/edit",element:w.jsx(DL,{})},{path:"/event/:id/delete",element:w.jsx(ML,{})},{path:"/event/create",element:w.jsx(RL,{})},{path:"/event/:id/payment/create",element:w.jsx(VL,{})},{path:"/event/:id/payment/:paymentId",element:w.jsx(WL,{})},{path:"/user/:id",element:w.jsx(BL,{})}]},{path:"/login",element:w.jsx(oL,{})},{path:"/testing",element:w.jsx(OL,{})}]);ff.createRoot(document.getElementById("root")).render(w.jsx(Zt.StrictMode,{children:w.jsx(K2,{router:YL})}));Ab();Fb();
