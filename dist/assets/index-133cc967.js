function eC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var __={exports:{}},mc={},w_={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),tC=Symbol.for("react.portal"),nC=Symbol.for("react.fragment"),rC=Symbol.for("react.strict_mode"),iC=Symbol.for("react.profiler"),sC=Symbol.for("react.provider"),oC=Symbol.for("react.context"),aC=Symbol.for("react.forward_ref"),lC=Symbol.for("react.suspense"),uC=Symbol.for("react.memo"),cC=Symbol.for("react.lazy"),sg=Symbol.iterator;function dC(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var E_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S_=Object.assign,C_={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||E_}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k_(){}k_.prototype=Zs.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||E_}var Yh=Gh.prototype=new k_;Yh.constructor=Gh;S_(Yh,Zs.prototype);Yh.isPureReactComponent=!0;var og=Array.isArray,x_=Object.prototype.hasOwnProperty,Kh={current:null},b_={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x_.call(e,r)&&!b_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Va,type:t,key:s,ref:o,props:i,_owner:Kh.current}}function fC(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function hC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ag=/\/+/g;function dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hC(""+t.key):e.toString(36)}function Gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Va:case tC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dd(o,0):r,og(i)?(n="",t!=null&&(n=t.replace(ag,"$&/")+"/"),Gl(i,e,n,"",function(u){return u})):i!=null&&(qh(i)&&(i=fC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ag,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",og(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+dd(s,a);o+=Gl(s,e,n,l,i)}else if(l=dC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+dd(s,a++),o+=Gl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],i=0;return Gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Yl={transition:null},mC={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Kh};de.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Zs;de.Fragment=nC;de.Profiler=iC;de.PureComponent=Gh;de.StrictMode=rC;de.Suspense=lC;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mC;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=S_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x_.call(e,l)&&!b_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Va,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:oC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sC,_context:t},t.Consumer=t};de.createElement=I_;de.createFactory=function(t){var e=I_.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:aC,render:t}};de.isValidElement=qh;de.lazy=function(t){return{$$typeof:cC,_payload:{_status:-1,_result:t},_init:pC}};de.memo=function(t,e){return{$$typeof:uC,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(t,e){return Nt.current.useCallback(t,e)};de.useContext=function(t){return Nt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Nt.current.useEffect(t,e)};de.useId=function(){return Nt.current.useId()};de.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Nt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};de.useRef=function(t){return Nt.current.useRef(t)};de.useState=function(t){return Nt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Nt.current.useTransition()};de.version="18.2.0";w_.exports=de;var S=w_.exports;const Zt=y_(S),gC=eC({__proto__:null,default:Zt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vC=S,yC=Symbol.for("react.element"),_C=Symbol.for("react.fragment"),wC=Object.prototype.hasOwnProperty,EC=vC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SC={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wC.call(e,r)&&!SC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yC,type:t,key:s,ref:o,props:i,_owner:EC.current}}mc.Fragment=_C;mc.jsx=T_;mc.jsxs=T_;__.exports=mc;var w=__.exports,df={},N_={exports:{}},Ht={},P_={exports:{}},R_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var q=F.length;F.push(Y);e:for(;0<q;){var pe=q-1>>>1,ve=F[pe];if(0<i(ve,Y))F[pe]=Y,F[q]=ve,q=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],q=F.pop();if(q!==Y){F[0]=q;e:for(var pe=0,ve=F.length,En=ve>>>1;pe<En;){var Kt=2*(pe+1)-1,ai=F[Kt],zt=Kt+1,ke=F[zt];if(0>i(ai,q))zt<ve&&0>i(ke,ai)?(F[pe]=ke,F[zt]=q,pe=zt):(F[pe]=ai,F[Kt]=q,pe=Kt);else if(zt<ve&&0>i(ke,q))F[pe]=ke,F[zt]=q,pe=zt;else break e}}return Y}function i(F,Y){var q=F.sortIndex-Y.sortIndex;return q!==0?q:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,y=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=F)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(F){if(_=!1,g(F),!y)if(n(l)!==null)y=!0,He(C);else{var Y=n(u);Y!==null&&Qe(p,Y.startTime-F)}}function C(F,Y){y=!1,_&&(_=!1,v(P),P=-1),m=!0;var q=f;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||F&&!Z());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,f=d.priorityLevel;var ve=pe(d.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),g(Y)}else r(l);d=n(l)}if(d!==null)var En=!0;else{var Kt=n(u);Kt!==null&&Qe(p,Kt.startTime-Y),En=!1}return En}finally{d=null,f=q,m=!1}}var N=!1,k=null,P=-1,U=5,M=-1;function Z(){return!(t.unstable_now()-M<U)}function Q(){if(k!==null){var F=t.unstable_now();M=F;var Y=!0;try{Y=k(!0,F)}finally{Y?ee():(N=!1,k=null)}}else N=!1}var ee;if(typeof h=="function")ee=function(){h(Q)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=Q,ee=function(){ae.postMessage(null)}}else ee=function(){x(Q,0)};function He(F){k=F,N||(N=!0,ee())}function Qe(F,Y){P=x(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,He(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return F()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=f;f=F;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(F,Y,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=q+ve,F={id:c++,callback:Y,priorityLevel:F,startTime:q,expirationTime:ve,sortIndex:-1},q>pe?(F.sortIndex=q,e(u,F),n(l)===null&&F===n(u)&&(_?(v(P),P=-1):_=!0,Qe(p,q-pe))):(F.sortIndex=ve,e(l,F),y||m||(y=!0,He(C))),F},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(F){var Y=f;return function(){var q=f;f=Y;try{return F.apply(this,arguments)}finally{f=q}}}})(R_);P_.exports=R_;var CC=P_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=S,Wt=CC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O_=new Set,sa={};function Wi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(sa[t]=e,t=0;t<e.length;t++)O_.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,kC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lg={},ug={};function xC(t){return ff.call(ug,t)?!0:ff.call(lg,t)?!1:kC.test(t)?ug[t]=!0:(lg[t]=!0,!1)}function bC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IC(t,e,n,r){if(e===null||typeof e>"u"||bC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){vt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];vt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){vt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){vt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){vt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){vt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){vt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){vt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){vt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);vt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Xh);vt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Xh);vt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){vt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});vt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){vt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,r){var i=vt.hasOwnProperty(e)?vt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IC(e,n,i,r)&&(n=null),r||i===null?xC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),D_=Symbol.for("react.provider"),L_=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),M_=Symbol.for("react.offscreen"),cg=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,fd;function Oo(t){if(fd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fd=e&&e[1]||""}return`
`+fd+t}var hd=!1;function pd(t,e){if(!t||hd)return"";hd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function TC(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case hf:return"Profiler";case Zh:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L_:return(t.displayName||"Context")+".Consumer";case D_:return(t._context.displayName||"Context")+".Provider";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function NC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PC(t){var e=F_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=PC(t))}function j_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U_(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function yf(t,e){U_(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Do(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function z_(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,$_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RC=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){RC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function B_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function W_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=B_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(AC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,Es=null,Ss=null;function mg(t){if(t=Wa(t)){if(typeof xf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=wc(e),xf(t.stateNode,t.type,e))}}function H_(t){Es?Ss?Ss.push(t):Ss=[t]:Es=t}function G_(){if(Es){var t=Es,e=Ss;if(Ss=Es=null,mg(t),e)for(t=0;t<e.length;t++)mg(e[t])}}function Y_(t,e){return t(e)}function K_(){}var md=!1;function q_(t,e,n){if(md)return t(e,n);md=!0;try{return Y_(t,e,n)}finally{md=!1,(Es!==null||Ss!==null)&&(K_(),G_())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var bf=!1;if(Zn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{bf=!1}function OC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,hu=null,pu=!1,If=null,DC={onError:function(t){Uo=!0,hu=t}};function LC(t,e,n,r,i,s,o,a,l){Uo=!1,hu=null,OC.apply(DC,arguments)}function MC(t,e,n,r,i,s,o,a,l){if(LC.apply(this,arguments),Uo){if(Uo){var u=hu;Uo=!1,hu=null}else throw Error(O(198));pu||(pu=!0,If=u)}}function Hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gg(t){if(Hi(t)!==t)throw Error(O(188))}function FC(t){var e=t.alternate;if(!e){if(e=Hi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gg(i),t;if(s===r)return gg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function X_(t){return t=FC(t),t!==null?J_(t):null}function J_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J_(t);if(e!==null)return e;t=t.sibling}return null}var Z_=Wt.unstable_scheduleCallback,vg=Wt.unstable_cancelCallback,jC=Wt.unstable_shouldYield,UC=Wt.unstable_requestPaint,qe=Wt.unstable_now,zC=Wt.unstable_getCurrentPriorityLevel,rp=Wt.unstable_ImmediatePriority,e0=Wt.unstable_UserBlockingPriority,mu=Wt.unstable_NormalPriority,VC=Wt.unstable_LowPriority,t0=Wt.unstable_IdlePriority,gc=null,Tn=null;function $C(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:HC,BC=Math.log,WC=Math.LN2;function HC(t){return t>>>=0,t===0?32:31-(BC(t)/WC|0)|0}var El=64,Sl=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lo(a):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function GC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=GC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function KC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,sp,s0,o0,a0,Nf=!1,Cl=[],Rr=null,Ar=null,Or=null,la=new Map,ua=new Map,Er=[],qC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wa(e),e!==null&&sp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QC(t,e,n,r,i){switch(e){case"focusin":return Rr=yo(Rr,t,e,n,r,i),!0;case"dragenter":return Ar=yo(Ar,t,e,n,r,i),!0;case"mouseover":return Or=yo(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,yo(la.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ua.set(s,yo(ua.get(s)||null,t,e,n,r,i)),!0}return!1}function l0(t){var e=pi(t.target);if(e!==null){var n=Hi(e);if(n!==null){if(e=n.tag,e===13){if(e=Q_(n),e!==null){t.blockedOn=e,a0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=Wa(n),e!==null&&sp(e),t.blockedOn=n,!1;e.shift()}return!0}function _g(t,e,n){Kl(t)&&n.delete(e)}function XC(){Nf=!1,Rr!==null&&Kl(Rr)&&(Rr=null),Ar!==null&&Kl(Ar)&&(Ar=null),Or!==null&&Kl(Or)&&(Or=null),la.forEach(_g),ua.forEach(_g)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,XC)))}function ca(t){function e(i){return _o(i,t)}if(0<Cl.length){_o(Cl[0],t);for(var n=1;n<Cl.length;n++){var r=Cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&_o(Rr,t),Ar!==null&&_o(Ar,t),Or!==null&&_o(Or,t),la.forEach(e),ua.forEach(e),n=0;n<Er.length;n++)r=Er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Er.length&&(n=Er[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&Er.shift()}var Cs=lr.ReactCurrentBatchConfig,vu=!0;function JC(t,e,n,r){var i=ye,s=Cs.transition;Cs.transition=null;try{ye=1,op(t,e,n,r)}finally{ye=i,Cs.transition=s}}function ZC(t,e,n,r){var i=ye,s=Cs.transition;Cs.transition=null;try{ye=4,op(t,e,n,r)}finally{ye=i,Cs.transition=s}}function op(t,e,n,r){if(vu){var i=Pf(t,e,n,r);if(i===null)bd(t,e,r,yu,n),yg(t,r);else if(QC(i,t,e,n,r))r.stopPropagation();else if(yg(t,r),e&4&&-1<qC.indexOf(t)){for(;i!==null;){var s=Wa(i);if(s!==null&&i0(s),s=Pf(t,e,n,r),s===null&&bd(t,e,r,yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bd(t,e,r,null,n)}}var yu=null;function Pf(t,e,n,r){if(yu=null,t=np(r),t=pi(t),t!==null)if(e=Hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zC()){case rp:return 1;case e0:return 4;case mu:case VC:return 16;case t0:return 536870912;default:return 16}default:return 16}}var br=null,ap=null,ql=null;function c0(){if(ql)return ql;var t,e=ap,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ql=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function wg(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:wg,this.isPropagationStopped=wg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lp=Gt(eo),Ba=ze({},eo,{view:0,detail:0}),ek=Gt(Ba),vd,yd,wo,vc=ze({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(vd=t.screenX-wo.screenX,yd=t.screenY-wo.screenY):yd=vd=0,wo=t),vd)},movementY:function(t){return"movementY"in t?t.movementY:yd}}),Eg=Gt(vc),tk=ze({},vc,{dataTransfer:0}),nk=Gt(tk),rk=ze({},Ba,{relatedTarget:0}),_d=Gt(rk),ik=ze({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),sk=Gt(ik),ok=ze({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ak=Gt(ok),lk=ze({},eo,{data:0}),Sg=Gt(lk),uk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ck={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dk[t])?!!e[t]:!1}function up(){return fk}var hk=ze({},Ba,{key:function(t){if(t.key){var e=uk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ck[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pk=Gt(hk),mk=ze({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=Gt(mk),gk=ze({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),vk=Gt(gk),yk=ze({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),_k=Gt(yk),wk=ze({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ek=Gt(wk),Sk=[9,13,27,32],cp=Zn&&"CompositionEvent"in window,zo=null;Zn&&"documentMode"in document&&(zo=document.documentMode);var Ck=Zn&&"TextEvent"in window&&!zo,d0=Zn&&(!cp||zo&&8<zo&&11>=zo),kg=String.fromCharCode(32),xg=!1;function f0(t,e){switch(t){case"keyup":return Sk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function kk(t,e){switch(t){case"compositionend":return h0(e);case"keypress":return e.which!==32?null:(xg=!0,kg);case"textInput":return t=e.data,t===kg&&xg?null:t;default:return null}}function xk(t,e){if(ns)return t==="compositionend"||!cp&&f0(t,e)?(t=c0(),ql=ap=br=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var bk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bk[t.type]:e==="textarea"}function p0(t,e,n,r){H_(r),e=_u(e,"onChange"),0<e.length&&(n=new lp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,da=null;function Ik(t){x0(t,0)}function yc(t){var e=ss(t);if(j_(e))return t}function Tk(t,e){if(t==="change")return e}var m0=!1;if(Zn){var wd;if(Zn){var Ed="oninput"in document;if(!Ed){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),Ed=typeof Ig.oninput=="function"}wd=Ed}else wd=!1;m0=wd&&(!document.documentMode||9<document.documentMode)}function Tg(){Vo&&(Vo.detachEvent("onpropertychange",g0),da=Vo=null)}function g0(t){if(t.propertyName==="value"&&yc(da)){var e=[];p0(e,da,t,np(t)),q_(Ik,e)}}function Nk(t,e,n){t==="focusin"?(Tg(),Vo=e,da=n,Vo.attachEvent("onpropertychange",g0)):t==="focusout"&&Tg()}function Pk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(da)}function Rk(t,e){if(t==="click")return yc(e)}function Ak(t,e){if(t==="input"||t==="change")return yc(e)}function Ok(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:Ok;function fa(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y0(){for(var t=window,e=fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fu(t.document)}return e}function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dk(t){var e=y0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(r!==null&&dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pg(n,s);var o=Pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lk=Zn&&"documentMode"in document&&11>=document.documentMode,rs=null,Rf=null,$o=null,Af=!1;function Rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||rs==null||rs!==fu(r)||(r=rs,"selectionStart"in r&&dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&fa($o,r)||($o=r,r=_u(Rf,"onSelect"),0<r.length&&(e=new lp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Sd={},_0={};Zn&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function _c(t){if(Sd[t])return Sd[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return Sd[t]=e[n];return t}var w0=_c("animationend"),E0=_c("animationiteration"),S0=_c("animationstart"),C0=_c("transitionend"),k0=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){k0.set(t,e),Wi(e,[t])}for(var Cd=0;Cd<Ag.length;Cd++){var kd=Ag[Cd],Mk=kd.toLowerCase(),Fk=kd[0].toUpperCase()+kd.slice(1);ti(Mk,"on"+Fk)}ti(w0,"onAnimationEnd");ti(E0,"onAnimationIteration");ti(S0,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(C0,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MC(r,e,void 0,t),t.currentTarget=null}function x0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Og(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Og(i,a,u),s=l}}}if(pu)throw t=If,pu=!1,If=null,t}function Ne(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(b0(e,t,2,!1),n.add(r))}function xd(t,e,n){var r=0;e&&(r|=4),b0(n,t,r,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[bl]){t[bl]=!0,O_.forEach(function(n){n!=="selectionchange"&&(jk.has(n)||xd(n,!1,t),xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bl]||(e[bl]=!0,xd("selectionchange",!1,e))}}function b0(t,e,n,r){switch(u0(e)){case 1:var i=JC;break;case 4:i=ZC;break;default:i=op}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}q_(function(){var u=s,c=np(n),d=[];e:{var f=k0.get(t);if(f!==void 0){var m=lp,y=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":m=pk;break;case"focusin":y="focus",m=_d;break;case"focusout":y="blur",m=_d;break;case"beforeblur":case"afterblur":m=_d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=nk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vk;break;case w0:case E0:case S0:m=sk;break;case C0:m=_k;break;case"scroll":m=ek;break;case"wheel":m=Ek;break;case"copy":case"cut":case"paste":m=ak;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cg}var _=(e&4)!==0,x=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,v!==null&&(p=aa(h,v),p!=null&&_.push(pa(h,p,g)))),x)break;h=h.return}0<_.length&&(f=new m(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==kf&&(y=n.relatedTarget||n.fromElement)&&(pi(y)||y[er]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?pi(y):null,y!==null&&(x=Hi(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Eg,p="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Cg,p="onPointerLeave",v="onPointerEnter",h="pointer"),x=m==null?f:ss(m),g=y==null?f:ss(y),f=new _(p,h+"leave",m,n,c),f.target=x,f.relatedTarget=g,p=null,pi(c)===u&&(_=new _(v,h+"enter",y,n,c),_.target=g,_.relatedTarget=x,p=_),x=p,m&&y)t:{for(_=m,v=y,h=0,g=_;g;g=Qi(g))h++;for(g=0,p=v;p;p=Qi(p))g++;for(;0<h-g;)_=Qi(_),h--;for(;0<g-h;)v=Qi(v),g--;for(;h--;){if(_===v||v!==null&&_===v.alternate)break t;_=Qi(_),v=Qi(v)}_=null}else _=null;m!==null&&Dg(d,f,m,_,!1),y!==null&&x!==null&&Dg(d,x,y,_,!0)}}e:{if(f=u?ss(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Tk;else if(bg(f))if(m0)C=Ak;else{C=Pk;var N=Nk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Rk);if(C&&(C=C(t,u))){p0(d,C,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&_f(f,"number",f.value)}switch(N=u?ss(u):window,t){case"focusin":(bg(N)||N.contentEditable==="true")&&(rs=N,Rf=u,$o=null);break;case"focusout":$o=Rf=rs=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Rg(d,n,c);break;case"selectionchange":if(Lk)break;case"keydown":case"keyup":Rg(d,n,c)}var k;if(cp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ns?f0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(d0&&n.locale!=="ko"&&(ns||P!=="onCompositionStart"?P==="onCompositionEnd"&&ns&&(k=c0()):(br=c,ap="value"in br?br.value:br.textContent,ns=!0)),N=_u(u,P),0<N.length&&(P=new Sg(P,t,null,n,c),d.push({event:P,listeners:N}),k?P.data=k:(k=h0(n),k!==null&&(P.data=k)))),(k=Ck?kk(t,n):xk(t,n))&&(u=_u(u,"onBeforeInput"),0<u.length&&(c=new Sg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}x0(d,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(pa(t,s,i)),s=aa(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=aa(n,s),l!=null&&o.unshift(pa(n,l,a))):i||(l=aa(n,s),l!=null&&o.push(pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Uk=/\r\n?/g,zk=/\u0000|\uFFFD/g;function Lg(t){return(typeof t=="string"?t:""+t).replace(Uk,`
`).replace(zk,"")}function Il(t,e,n){if(e=Lg(e),Lg(t)!==e&&n)throw Error(O(425))}function wu(){}var Of=null,Df=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,Vk=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,$k=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(Bk)}:Mf;function Bk(t){setTimeout(function(){throw t})}function Id(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),kn="__reactFiber$"+to,ma="__reactProps$"+to,er="__reactContainer$"+to,Ff="__reactEvents$"+to,Wk="__reactListeners$"+to,Hk="__reactHandles$"+to;function pi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[kn])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[kn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function wc(t){return t[ma]||null}var jf=[],os=-1;function ni(t){return{current:t}}function Re(t){0>os||(t.current=jf[os],jf[os]=null,os--)}function Ie(t,e){os++,jf[os]=t.current,t.current=e}var Gr={},St=ni(Gr),Ft=ni(!1),Ti=Gr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Eu(){Re(Ft),Re(St)}function jg(t,e,n){if(St.current!==Gr)throw Error(O(168));Ie(St,e),Ie(Ft,n)}function I0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,NC(t)||"Unknown",i));return ze({},n,r)}function Su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ti=St.current,Ie(St,t),Ie(Ft,Ft.current),!0}function Ug(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=I0(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,Re(Ft),Re(St),Ie(St,t)):Re(Ft),Ie(Ft,n)}var Wn=null,Ec=!1,Td=!1;function T0(t){Wn===null?Wn=[t]:Wn.push(t)}function Gk(t){Ec=!0,T0(t)}function ri(){if(!Td&&Wn!==null){Td=!0;var t=0,e=ye;try{var n=Wn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,Ec=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),Z_(rp,ri),i}finally{ye=e,Td=!1}}return null}var as=[],ls=0,Cu=null,ku=0,Xt=[],Jt=0,Ni=null,Hn=1,Gn="";function ci(t,e){as[ls++]=ku,as[ls++]=Cu,Cu=t,ku=e}function N0(t,e,n){Xt[Jt++]=Hn,Xt[Jt++]=Gn,Xt[Jt++]=Ni,Ni=t;var r=Hn;t=Gn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-vn(e)+i|n<<i|r,Gn=s+t}else Hn=1<<s|n<<i|r,Gn=t}function fp(t){t.return!==null&&(ci(t,1),N0(t,1,0))}function hp(t){for(;t===Cu;)Cu=as[--ls],as[ls]=null,ku=as[--ls],as[ls]=null;for(;t===Ni;)Ni=Xt[--Jt],Xt[Jt]=null,Gn=Xt[--Jt],Xt[Jt]=null,Hn=Xt[--Jt],Xt[Jt]=null}var Bt=null,$t=null,Le=!1,fn=null;function P0(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,$t=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:Hn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,$t=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(Le){var e=$t;if(e){var n=e;if(!zg(t,e)){if(Uf(t))throw Error(O(418));e=Dr(n.nextSibling);var r=Bt;e&&zg(t,e)?P0(r,n):(t.flags=t.flags&-4097|2,Le=!1,Bt=t)}}else{if(Uf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Le=!1,Bt=t}}}function Vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Tl(t){if(t!==Bt)return!1;if(!Le)return Vg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=$t)){if(Uf(t))throw R0(),Error(O(418));for(;e;)P0(t,e),e=Dr(e.nextSibling)}if(Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Bt?Dr(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=$t;t;)t=Dr(t.nextSibling)}function Ms(){$t=Bt=null,Le=!1}function pp(t){fn===null?fn=[t]:fn.push(t)}var Yk=lr.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xu=ni(null),bu=null,us=null,mp=null;function gp(){mp=us=bu=null}function vp(t){var e=xu.current;Re(xu),t._currentValue=e}function Vf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){bu=t,mp=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(mp!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(bu===null)throw Error(O(308));us=t,bu.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var mi=null;function yp(t){mi===null?mi=[t]:mi.push(t)}function A0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function _p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ip(t,n)}}function $g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Iu(t,e,n,r){var i=t.updateQueue;wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=ze({},d,f);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ri|=o,t.lanes=o,t.memoizedState=d}}function Bg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var D0=new A_.Component().refs;function $f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Fr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(yn(e,t,i,r),Xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Fr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(yn(e,t,i,r),Xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Fr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(yn(e,t,r,n),Xl(e,t,r))}};function Wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function L0(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=jt(e)?Ti:St.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Bf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=D0,_p(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=jt(e)?Ti:St.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($f(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===D0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Nl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gg(t){var e=t._init;return e(t._payload)}function M0(t){function e(v,h){if(t){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=jr(v,h),v.index=0,v.sibling=null,v}function s(v,h,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,g,p){return h===null||h.tag!==6?(h=Ld(g,v.mode,p),h.return=v,h):(h=i(h,g),h.return=v,h)}function l(v,h,g,p){var C=g.type;return C===ts?c(v,h,g.props.children,p,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Gg(C)===h.type)?(p=i(h,g.props),p.ref=Eo(v,h,g),p.return=v,p):(p=ru(g.type,g.key,g.props,null,v.mode,p),p.ref=Eo(v,h,g),p.return=v,p)}function u(v,h,g,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Md(g,v.mode,p),h.return=v,h):(h=i(h,g.children||[]),h.return=v,h)}function c(v,h,g,p,C){return h===null||h.tag!==7?(h=xi(g,v.mode,p,C),h.return=v,h):(h=i(h,g),h.return=v,h)}function d(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ld(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yl:return g=ru(h.type,h.key,h.props,null,v.mode,g),g.ref=Eo(v,null,h),g.return=v,g;case es:return h=Md(h,v.mode,g),h.return=v,h;case _r:var p=h._init;return d(v,p(h._payload),g)}if(Do(h)||go(h))return h=xi(h,v.mode,g,null),h.return=v,h;Nl(v,h)}return null}function f(v,h,g,p){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,h,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yl:return g.key===C?l(v,h,g,p):null;case es:return g.key===C?u(v,h,g,p):null;case _r:return C=g._init,f(v,h,C(g._payload),p)}if(Do(g)||go(g))return C!==null?null:c(v,h,g,p,null);Nl(v,g)}return null}function m(v,h,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return v=v.get(g)||null,a(h,v,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yl:return v=v.get(p.key===null?g:p.key)||null,l(h,v,p,C);case es:return v=v.get(p.key===null?g:p.key)||null,u(h,v,p,C);case _r:var N=p._init;return m(v,h,g,N(p._payload),C)}if(Do(p)||go(p))return v=v.get(g)||null,c(h,v,p,C,null);Nl(h,p)}return null}function y(v,h,g,p){for(var C=null,N=null,k=h,P=h=0,U=null;k!==null&&P<g.length;P++){k.index>P?(U=k,k=null):U=k.sibling;var M=f(v,k,g[P],p);if(M===null){k===null&&(k=U);break}t&&k&&M.alternate===null&&e(v,k),h=s(M,h,P),N===null?C=M:N.sibling=M,N=M,k=U}if(P===g.length)return n(v,k),Le&&ci(v,P),C;if(k===null){for(;P<g.length;P++)k=d(v,g[P],p),k!==null&&(h=s(k,h,P),N===null?C=k:N.sibling=k,N=k);return Le&&ci(v,P),C}for(k=r(v,k);P<g.length;P++)U=m(k,v,P,g[P],p),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?P:U.key),h=s(U,h,P),N===null?C=U:N.sibling=U,N=U);return t&&k.forEach(function(Z){return e(v,Z)}),Le&&ci(v,P),C}function _(v,h,g,p){var C=go(g);if(typeof C!="function")throw Error(O(150));if(g=C.call(g),g==null)throw Error(O(151));for(var N=C=null,k=h,P=h=0,U=null,M=g.next();k!==null&&!M.done;P++,M=g.next()){k.index>P?(U=k,k=null):U=k.sibling;var Z=f(v,k,M.value,p);if(Z===null){k===null&&(k=U);break}t&&k&&Z.alternate===null&&e(v,k),h=s(Z,h,P),N===null?C=Z:N.sibling=Z,N=Z,k=U}if(M.done)return n(v,k),Le&&ci(v,P),C;if(k===null){for(;!M.done;P++,M=g.next())M=d(v,M.value,p),M!==null&&(h=s(M,h,P),N===null?C=M:N.sibling=M,N=M);return Le&&ci(v,P),C}for(k=r(v,k);!M.done;P++,M=g.next())M=m(k,v,P,M.value,p),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?P:M.key),h=s(M,h,P),N===null?C=M:N.sibling=M,N=M);return t&&k.forEach(function(Q){return e(v,Q)}),Le&&ci(v,P),C}function x(v,h,g,p){if(typeof g=="object"&&g!==null&&g.type===ts&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case yl:e:{for(var C=g.key,N=h;N!==null;){if(N.key===C){if(C=g.type,C===ts){if(N.tag===7){n(v,N.sibling),h=i(N,g.props.children),h.return=v,v=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Gg(C)===N.type){n(v,N.sibling),h=i(N,g.props),h.ref=Eo(v,N,g),h.return=v,v=h;break e}n(v,N);break}else e(v,N);N=N.sibling}g.type===ts?(h=xi(g.props.children,v.mode,p,g.key),h.return=v,v=h):(p=ru(g.type,g.key,g.props,null,v.mode,p),p.ref=Eo(v,h,g),p.return=v,v=p)}return o(v);case es:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(v,h.sibling),h=i(h,g.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=Md(g,v.mode,p),h.return=v,v=h}return o(v);case _r:return N=g._init,x(v,h,N(g._payload),p)}if(Do(g))return y(v,h,g,p);if(go(g))return _(v,h,g,p);Nl(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,g),h.return=v,v=h):(n(v,h),h=Ld(g,v.mode,p),h.return=v,v=h),o(v)):n(v,h)}return x}var Fs=M0(!0),F0=M0(!1),Ha={},Nn=ni(Ha),ga=ni(Ha),va=ni(Ha);function gi(t){if(t===Ha)throw Error(O(174));return t}function wp(t,e){switch(Ie(va,e),Ie(ga,t),Ie(Nn,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}Re(Nn),Ie(Nn,e)}function js(){Re(Nn),Re(ga),Re(va)}function j0(t){gi(va.current);var e=gi(Nn.current),n=Ef(e,t.type);e!==n&&(Ie(ga,t),Ie(Nn,n))}function Ep(t){ga.current===t&&(Re(Nn),Re(ga))}var je=ni(0);function Tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function Sp(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var Jl=lr.ReactCurrentDispatcher,Pd=lr.ReactCurrentBatchConfig,Pi=0,Ue=null,et=null,at=null,Nu=!1,Bo=!1,ya=0,Kk=0;function _t(){throw Error(O(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(Pi=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?Jk:Zk,t=n(r,i),Bo){s=0;do{if(Bo=!1,ya=0,25<=s)throw Error(O(301));s+=1,at=et=null,e.updateQueue=null,Jl.current=ex,t=n(r,i)}while(Bo)}if(Jl.current=Pu,e=et!==null&&et.next!==null,Pi=0,at=et=Ue=null,Nu=!1,e)throw Error(O(300));return t}function xp(){var t=ya!==0;return ya=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Ue.memoizedState=at=t:at=at.next=t,at}function sn(){if(et===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Ue.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(O(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Ue.memoizedState=at=t:at=at.next=t}return at}function _a(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ue.lanes|=c,Ri|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,Ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function U0(){}function z0(t,e){var n=Ue,r=sn(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,bp(B0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,wa(9,$0.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(O(349));Pi&30||V0(n,e,i)}return i}function V0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $0(t,e,n,r){e.value=n,e.getSnapshot=r,W0(e)&&H0(t)}function B0(t,e,n){return n(function(){W0(e)&&H0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function H0(t){var e=tr(t,1);e!==null&&yn(e,t,1,-1)}function Yg(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=Xk.bind(null,Ue,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G0(){return sn().memoizedState}function Zl(t,e,n,r){var i=Cn();Ue.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function Cc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Cp(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function Kg(t,e){return Zl(8390656,8,t,e)}function bp(t,e){return Cc(2048,8,t,e)}function Y0(t,e){return Cc(4,2,t,e)}function K0(t,e){return Cc(4,4,t,e)}function q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,q0.bind(null,e,t),n)}function Ip(){}function X0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function J0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Z0(t,e,n){return Pi&21?(wn(n,e)||(n=n0(),Ue.lanes|=n,Ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function qk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{ye=n,Pd.transition=r}}function ew(){return sn().memoizedState}function Qk(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tw(t))nw(e,n);else if(n=A0(t,e,n,r),n!==null){var i=It();yn(n,t,r,i),rw(n,e,r)}}function Xk(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tw(t))nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=A0(t,e,i,r),n!==null&&(i=It(),yn(n,t,r,i),rw(n,e,r))}}function tw(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function nw(t,e){Bo=Nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ip(t,n)}}var Pu={readContext:rn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Jk={readContext:rn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qk.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Yg,useDebugValue:Ip,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Yg(!1),e=t[0];return t=qk.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=Cn();if(Le){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),dt===null)throw Error(O(349));Pi&30||V0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kg(B0.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,$0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=dt.identifierPrefix;if(Le){var n=Gn,r=Hn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zk={readContext:rn,useCallback:X0,useContext:rn,useEffect:bp,useImperativeHandle:Q0,useInsertionEffect:Y0,useLayoutEffect:K0,useMemo:J0,useReducer:Rd,useRef:G0,useState:function(){return Rd(_a)},useDebugValue:Ip,useDeferredValue:function(t){var e=sn();return Z0(e,et.memoizedState,t)},useTransition:function(){var t=Rd(_a)[0],e=sn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:z0,useId:ew,unstable_isNewReconciler:!1},ex={readContext:rn,useCallback:X0,useContext:rn,useEffect:bp,useImperativeHandle:Q0,useInsertionEffect:Y0,useLayoutEffect:K0,useMemo:J0,useReducer:Ad,useRef:G0,useState:function(){return Ad(_a)},useDebugValue:Ip,useDeferredValue:function(t){var e=sn();return et===null?e.memoizedState=t:Z0(e,et.memoizedState,t)},useTransition:function(){var t=Ad(_a)[0],e=sn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:z0,useId:ew,unstable_isNewReconciler:!1};function Us(t,e){try{var n="",r=e;do n+=TC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tx=typeof WeakMap=="function"?WeakMap:Map;function iw(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Au||(Au=!0,eh=r),Wf(t,e)},n}function sw(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mx.bind(null,t,e,n),e.then(t,t))}function Qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var nx=lr.ReactCurrentOwner,Dt=!1;function kt(t,e,n,r){e.child=t===null?F0(e,null,n,r):Fs(e,t.child,n,r)}function Jg(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=kp(t,e,n,r,s,i),n=xp(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Le&&n&&fp(e),e.flags|=1,kt(t,e,r,i),e.child)}function Zg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ow(t,e,s,r,i)):(t=ru(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ow(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fa(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return Hf(t,e,n,r,i)}function aw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ds,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(ds,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(ds,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(ds,Vt),Vt|=r;return kt(t,e,i,n),e.child}function lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hf(t,e,n,r,i){var s=jt(n)?Ti:St.current;return s=Ls(e,s),ks(e,i),n=kp(t,e,n,r,s,i),r=xp(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Le&&r&&fp(e),e.flags|=1,kt(t,e,n,i),e.child)}function ev(t,e,n,r,i){if(jt(n)){var s=!0;Su(e)}else s=!1;if(ks(e,i),e.stateNode===null)eu(t,e),L0(e,n,r),Bf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=jt(n)?Ti:St.current,u=Ls(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hg(e,o,r,u),wr=!1;var f=e.memoizedState;o.state=f,Iu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ft.current||wr?(typeof c=="function"&&($f(e,n,c,r),l=e.memoizedState),(a=wr||Wg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,O0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=jt(n)?Ti:St.current,l=Ls(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hg(e,o,r,l),wr=!1,f=e.memoizedState,o.state=f,Iu(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Ft.current||wr?(typeof m=="function"&&($f(e,n,m,r),y=e.memoizedState),(u=wr||Wg(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Gf(t,e,n,r,s,i)}function Gf(t,e,n,r,i,s){lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ug(e,n,!1),nr(t,e,s);r=e.stateNode,nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Ug(e,n,!0),e.child}function uw(t){var e=t.stateNode;e.pendingContext?jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jg(t,e.context,!1),wp(t,e.containerInfo)}function tv(t,e,n,r,i){return Ms(),pp(i),e.flags|=256,kt(t,e,n,r),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function cw(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(je,i&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kf(n),e.memoizedState=Yf,t):Tp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tp(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,r){return r!==null&&pp(r),Fs(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Od(Error(O(422))),Pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=Kf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return Pl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Od(s,r,void 0),Pl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),yn(r,t,i,-1))}return Dp(),r=Od(Error(O(421))),Pl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$t=Dr(i.nextSibling),Bt=e,Le=!0,fn=null,t!==null&&(Xt[Jt++]=Hn,Xt[Jt++]=Gn,Xt[Jt++]=Ni,Hn=t.id,Gn=t.overflow,Ni=e),e=Tp(e,r.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vf(t.return,e,n)}function Dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dd(e,!0,n,null,s);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ix(t,e,n){switch(e.tag){case 3:uw(e),Ms();break;case 5:j0(e);break;case 1:jt(e.type)&&Su(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?cw(t,e,n):(Ie(je,je.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ie(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,aw(t,e,n)}return nr(t,e,n)}var fw,qf,hw,pw;fw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qf=function(){};hw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(Nn.current);var s=null;switch(n){case"input":i=vf(t,i),r=vf(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=wf(t,i),r=wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wu)}Sf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function So(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sx(t,e,n){var r=e.pendingProps;switch(hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return jt(e.type)&&Eu(),wt(e),null;case 3:return r=e.stateNode,js(),Re(Ft),Re(St),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(rh(fn),fn=null))),qf(t,e),wt(e),null;case 5:Ep(e);var i=gi(va.current);if(n=e.type,t!==null&&e.stateNode!=null)hw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return wt(e),null}if(t=gi(Nn.current),Tl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[ma]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)Ne(Mo[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":dg(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":hg(r,s),Ne("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,a,t),i=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":_l(r),fg(r,s,!0);break;case"textarea":_l(r),pg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[ma]=r,fw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cf(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)Ne(Mo[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":dg(t,r),i=vf(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":hg(t,r),i=wf(t,r),Ne("invalid",t);break;default:i=r}Sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?W_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",t):l!=null&&Jh(t,s,l,o))}switch(n){case"input":_l(t),fg(t,r,!1);break;case"textarea":_l(t),pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=gi(va.current),gi(Nn.current),Tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return wt(e),null;case 13:if(Re(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&$t!==null&&e.mode&1&&!(e.flags&128))R0(),Ms(),e.flags|=98560,s=!1;else if(s=Tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[kn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else fn!==null&&(rh(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?rt===0&&(rt=3):Dp())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return js(),qf(t,e),t===null&&ha(e.stateNode.containerInfo),wt(e),null;case 10:return vp(e.type._context),wt(e),null;case 17:return jt(e.type)&&Eu(),wt(e),null;case 19:if(Re(je),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)So(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tu(t),o!==null){for(e.flags|=128,So(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>zs&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return wt(e),null}else 2*qe()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=je.current,Ie(je,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return Op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function ox(t,e){switch(hp(e),e.tag){case 1:return jt(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),Re(Ft),Re(St),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(Re(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(je),null;case 4:return js(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var Rl=!1,Et=!1,ax=typeof WeakSet=="function"?WeakSet:Set,$=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Qf(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var rv=!1;function lx(t,e){if(Of=vu,t=y0(),dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},vu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,x=y.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:un(e.type,_),x);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=rv,rv=!1,y}function Wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qf(e,n,s)}i=i.next}while(i!==r)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mw(t){var e=t.alternate;e!==null&&(t.alternate=null,mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[ma],delete e[Ff],delete e[Wk],delete e[Hk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gw(t){return t.tag===5||t.tag===3||t.tag===4}function iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}var ht=null,cn=!1;function gr(t,e,n){for(n=n.child;n!==null;)vw(t,e,n),n=n.sibling}function vw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Et||cs(n,e);case 6:var r=ht,i=cn;ht=null,gr(t,e,n),ht=r,cn=i,ht!==null&&(cn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(cn?(t=ht,n=n.stateNode,t.nodeType===8?Id(t.parentNode,n):t.nodeType===1&&Id(t,n),ca(t)):Id(ht,n.stateNode));break;case 4:r=ht,i=cn,ht=n.stateNode.containerInfo,cn=!0,gr(t,e,n),ht=r,cn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qf(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!Et&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,gr(t,e,n),Et=r):gr(t,e,n);break;default:gr(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ax),e.forEach(function(r){var i=vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,cn=!1;break e;case 3:ht=a.stateNode.containerInfo,cn=!0;break e;case 4:ht=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(ht===null)throw Error(O(160));vw(s,o,i),ht=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yw(e,t),e=e.sibling}function yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),Sn(t),r&4){try{Wo(3,t,t.return),kc(3,t)}catch(_){Ve(t,t.return,_)}try{Wo(5,t,t.return)}catch(_){Ve(t,t.return,_)}}break;case 1:ln(e,t),Sn(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(ln(e,t),Sn(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{oa(i,"")}catch(_){Ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&U_(i,s),Cf(a,o);var u=Cf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?W_(i,d):c==="dangerouslySetInnerHTML"?$_(i,d):c==="children"?oa(i,d):Jh(i,c,d,u)}switch(a){case"input":yf(i,s);break;case"textarea":z_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ws(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[ma]=s}catch(_){Ve(t,t.return,_)}}break;case 6:if(ln(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ve(t,t.return,_)}}break;case 3:if(ln(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(_){Ve(t,t.return,_)}break;case 4:ln(e,t),Sn(t);break;case 13:ln(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rp=qe())),r&4&&sv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,ln(e,t),Et=u):ln(e,t),Sn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(d=$=c;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:Wo(4,f,f.return);break;case 1:cs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Ve(r,n,_)}}break;case 5:cs(f,f.return);break;case 22:if(f.memoizedState!==null){av(d);continue}}m!==null?(m.return=f,$=m):av(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=B_("display",o))}catch(_){Ve(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(e,t),Sn(t),r&4&&sv(t);break;case 21:break;default:ln(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gw(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=iv(t);Zf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iv(t);Jf(t,a,o);break;default:throw Error(O(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ux(t,e,n){$=t,_w(t)}function _w(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Rl;var u=Et;if(Rl=o,(Et=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?lv(i):l!==null?(l.return=o,$=l):lv(i);for(;s!==null;)$=s,_w(s),s=s.sibling;$=i,Rl=a,Et=u}ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ov(t)}}function ov(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Et||e.flags&512&&Xf(e)}catch(f){Ve(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function av(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function lv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Xf(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Xf(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var cx=Math.ceil,Ru=lr.ReactCurrentDispatcher,Np=lr.ReactCurrentOwner,nn=lr.ReactCurrentBatchConfig,he=0,dt=null,Je=null,gt=0,Vt=0,ds=ni(0),rt=0,Ea=null,Ri=0,xc=0,Pp=0,Ho=null,Ot=null,Rp=0,zs=1/0,Bn=null,Au=!1,eh=null,Mr=null,Al=!1,Ir=null,Ou=0,Go=0,th=null,tu=-1,nu=0;function It(){return he&6?qe():tu!==-1?tu:tu=qe()}function Fr(t){return t.mode&1?he&2&&gt!==0?gt&-gt:Yk.transition!==null?(nu===0&&(nu=n0()),nu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function yn(t,e,n,r){if(50<Go)throw Go=0,th=null,Error(O(185));$a(t,n,r),(!(he&2)||t!==dt)&&(t===dt&&(!(he&2)&&(xc|=n),rt===4&&Sr(t,gt)),Ut(t,r),n===1&&he===0&&!(e.mode&1)&&(zs=qe()+500,Ec&&ri()))}function Ut(t,e){var n=t.callbackNode;YC(t,e);var r=gu(t,t===dt?gt:0);if(r===0)n!==null&&vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vg(n),e===1)t.tag===0?Gk(uv.bind(null,t)):T0(uv.bind(null,t)),$k(function(){!(he&6)&&ri()}),n=null;else{switch(r0(r)){case 1:n=rp;break;case 4:n=e0;break;case 16:n=mu;break;case 536870912:n=t0;break;default:n=mu}n=Iw(n,ww.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ww(t,e){if(tu=-1,nu=0,he&6)throw Error(O(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var r=gu(t,t===dt?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Du(t,r);else{e=r;var i=he;he|=2;var s=Sw();(dt!==t||gt!==e)&&(Bn=null,zs=qe()+500,ki(t,e));do try{hx();break}catch(a){Ew(t,a)}while(1);gp(),Ru.current=s,he=i,Je!==null?e=0:(dt=null,gt=0,e=rt)}if(e!==0){if(e===2&&(i=Tf(t),i!==0&&(r=i,e=nh(t,i))),e===1)throw n=Ea,ki(t,0),Sr(t,r),Ut(t,qe()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!dx(i)&&(e=Du(t,r),e===2&&(s=Tf(t),s!==0&&(r=s,e=nh(t,s))),e===1))throw n=Ea,ki(t,0),Sr(t,r),Ut(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:di(t,Ot,Bn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Rp+500-qe(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mf(di.bind(null,t,Ot,Bn),e);break}di(t,Ot,Bn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cx(r/1960))-r,10<r){t.timeoutHandle=Mf(di.bind(null,t,Ot,Bn),r);break}di(t,Ot,Bn);break;case 5:di(t,Ot,Bn);break;default:throw Error(O(329))}}}return Ut(t,qe()),t.callbackNode===n?ww.bind(null,t):null}function nh(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Du(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&rh(e)),t}function rh(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function dx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Pp,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function uv(t){if(he&6)throw Error(O(327));xs();var e=gu(t,0);if(!(e&1))return Ut(t,qe()),null;var n=Du(t,e);if(t.tag!==0&&n===2){var r=Tf(t);r!==0&&(e=r,n=nh(t,r))}if(n===1)throw n=Ea,ki(t,0),Sr(t,e),Ut(t,qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,di(t,Ot,Bn),Ut(t,qe()),null}function Ap(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(zs=qe()+500,Ec&&ri())}}function Ai(t){Ir!==null&&Ir.tag===0&&!(he&6)&&xs();var e=he;he|=1;var n=nn.transition,r=ye;try{if(nn.transition=null,ye=1,t)return t()}finally{ye=r,nn.transition=n,he=e,!(he&6)&&ri()}}function Op(){Vt=ds.current,Re(ds)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vk(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eu();break;case 3:js(),Re(Ft),Re(St),Sp();break;case 5:Ep(r);break;case 4:js();break;case 13:Re(je);break;case 19:Re(je);break;case 10:vp(r.type._context);break;case 22:case 23:Op()}n=n.return}if(dt=t,Je=t=jr(t.current,null),gt=Vt=e,rt=0,Ea=null,Pp=xc=Ri=0,Ot=Ho=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function Ew(t,e){do{var n=Je;try{if(gp(),Jl.current=Pu,Nu){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nu=!1}if(Pi=0,at=et=Ue=null,Bo=!1,ya=0,Np.current=null,n===null||n.return===null){rt=1,Ea=e,Je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Qg(o);if(m!==null){m.flags&=-257,Xg(m,o,a,s,e),m.mode&1&&qg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){qg(s,u,e),Dp();break e}l=Error(O(426))}}else if(Le&&a.mode&1){var x=Qg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Xg(x,o,a,s,e),pp(Us(l,a));break e}}s=l=Us(l,a),rt!==4&&(rt=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=iw(s,l,e);$g(s,v);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mr===null||!Mr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=sw(s,a,e);$g(s,p);break e}}s=s.return}while(s!==null)}kw(n)}catch(C){e=C,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function Sw(){var t=Ru.current;return Ru.current=Pu,t===null?Pu:t}function Dp(){(rt===0||rt===3||rt===2)&&(rt=4),dt===null||!(Ri&268435455)&&!(xc&268435455)||Sr(dt,gt)}function Du(t,e){var n=he;he|=2;var r=Sw();(dt!==t||gt!==e)&&(Bn=null,ki(t,e));do try{fx();break}catch(i){Ew(t,i)}while(1);if(gp(),he=n,Ru.current=r,Je!==null)throw Error(O(261));return dt=null,gt=0,rt}function fx(){for(;Je!==null;)Cw(Je)}function hx(){for(;Je!==null&&!jC();)Cw(Je)}function Cw(t){var e=bw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?kw(t):Je=e,Np.current=null}function kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ox(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=sx(n,e,Vt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function di(t,e,n){var r=ye,i=nn.transition;try{nn.transition=null,ye=1,px(t,e,n,r)}finally{nn.transition=i,ye=r}return null}function px(t,e,n,r){do xs();while(Ir!==null);if(he&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KC(t,s),t===dt&&(Je=dt=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,Iw(mu,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=ye;ye=1;var a=he;he|=4,Np.current=null,lx(t,n),yw(n,t),Dk(Df),vu=!!Of,Df=Of=null,t.current=n,ux(n),UC(),he=a,ye=o,nn.transition=s}else t.current=n;if(Al&&(Al=!1,Ir=t,Ou=i),s=t.pendingLanes,s===0&&(Mr=null),$C(n.stateNode),Ut(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,t=eh,eh=null,t;return Ou&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===th?Go++:(Go=0,th=t):Go=0,ri(),null}function xs(){if(Ir!==null){var t=r0(Ou),e=nn.transition,n=ye;try{if(nn.transition=null,ye=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,Ou=0,he&6)throw Error(O(331));var i=he;for(he|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Wo(8,c,s)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var f=c.sibling,m=c.return;if(mw(c),c===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var h=t.current;for($=h;$!==null;){o=$;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,$=g;else e:for(o=h;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(C){Ve(a,a.return,C)}if(a===o){$=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,$=p;break e}$=a.return}}if(he=i,ri(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{ye=n,nn.transition=e}}return!1}function cv(t,e,n){e=Us(n,e),e=iw(t,e,1),t=Lr(t,e,1),e=It(),t!==null&&($a(t,1,e),Ut(t,e))}function Ve(t,e,n){if(t.tag===3)cv(t,t,n);else for(;e!==null;){if(e.tag===3){cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){t=Us(n,t),t=sw(e,t,1),e=Lr(e,t,1),t=It(),e!==null&&($a(e,1,t),Ut(e,t));break}}e=e.return}}function mx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(gt&n)===n&&(rt===4||rt===3&&(gt&130023424)===gt&&500>qe()-Rp?ki(t,0):Pp|=n),Ut(t,e)}function xw(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=It();t=tr(t,e),t!==null&&($a(t,e,n),Ut(t,n))}function gx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xw(t,n)}function vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),xw(t,n)}var bw;bw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,ix(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Le&&e.flags&1048576&&N0(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eu(t,e),t=e.pendingProps;var i=Ls(e,St.current);ks(e,n),i=kp(null,e,r,t,i,n);var s=xp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_p(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,Bf(e,r,t,n),e=Gf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&fp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_x(r),t=un(r,t),i){case 0:e=Hf(null,e,r,t,n);break e;case 1:e=ev(null,e,r,t,n);break e;case 11:e=Jg(null,e,r,t,n);break e;case 14:e=Zg(null,e,r,un(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Hf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),ev(t,e,r,i,n);case 3:e:{if(uw(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,O0(t,e),Iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Us(Error(O(423)),e),e=tv(t,e,r,n,i);break e}else if(r!==i){i=Us(Error(O(424)),e),e=tv(t,e,r,n,i);break e}else for($t=Dr(e.stateNode.containerInfo.firstChild),Bt=e,Le=!0,fn=null,n=F0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),r===i){e=nr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return j0(e),t===null&&zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lf(r,i)?o=null:s!==null&&Lf(r,s)&&(e.flags|=32),lw(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return cw(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Jg(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(xu,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Ft.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=rn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Zg(t,e,r,i,n);case 15:return ow(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),eu(t,e),e.tag=1,jt(r)?(t=!0,Su(e)):t=!1,ks(e,n),L0(e,r,i),Bf(e,r,i,n),Gf(null,e,r,!0,t,n);case 19:return dw(t,e,n);case 22:return aw(t,e,n)}throw Error(O(156,e.tag))};function Iw(t,e){return Z_(t,e)}function yx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new yx(t,e,n,r)}function Lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _x(t){if(typeof t=="function")return Lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ep)return 11;if(t===tp)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ru(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return xi(n.children,i,s,e);case Zh:o=8,i|=8;break;case hf:return t=en(12,n,e,i|2),t.elementType=hf,t.lanes=s,t;case pf:return t=en(13,n,e,i),t.elementType=pf,t.lanes=s,t;case mf:return t=en(19,n,e,i),t.elementType=mf,t.lanes=s,t;case M_:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D_:o=10;break e;case L_:o=9;break e;case ep:o=11;break e;case tp:o=14;break e;case _r:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xi(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=en(22,t,r,e),t.elementType=M_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ld(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mp(t,e,n,r,i,s,o,a,l){return t=new wx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_p(s),t}function Ex(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Tw(t){if(!t)return Gr;t=t._reactInternals;e:{if(Hi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(jt(n))return I0(t,n,e)}return e}function Nw(t,e,n,r,i,s,o,a,l){return t=Mp(n,r,!0,t,i,s,o,a,l),t.context=Tw(null),n=t.current,r=It(),i=Fr(n),s=Qn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,$a(t,i,r),Ut(t,r),t}function Ic(t,e,n,r){var i=e.current,s=It(),o=Fr(i);return n=Tw(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(yn(t,i,o,s),Xl(t,i,o)),o}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fp(t,e){dv(t,e),(t=t.alternate)&&dv(t,e)}function Sx(){return null}var Pw=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}Tc.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Ic(t,e,null,null)};Tc.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ai(function(){Ic(null,t,null,null)}),e[er]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Er.length&&e!==0&&e<Er[n].priority;n++);Er.splice(n,0,t),n===0&&l0(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fv(){}function Cx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Lu(o);s.call(u)}}var o=Nw(e,r,t,0,null,!1,!1,"",fv);return t._reactRootContainer=o,t[er]=o.current,ha(t.nodeType===8?t.parentNode:t),Ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Lu(l);a.call(u)}}var l=Mp(t,0,!1,null,null,!1,!1,"",fv);return t._reactRootContainer=l,t[er]=l.current,ha(t.nodeType===8?t.parentNode:t),Ai(function(){Ic(e,l,n,r)}),l}function Pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Lu(o);a.call(l)}}Ic(e,o,t,i)}else o=Cx(n,e,t,i,r);return Lu(o)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(ip(e,n|1),Ut(e,qe()),!(he&6)&&(zs=qe()+500,ri()))}break;case 13:Ai(function(){var r=tr(t,1);if(r!==null){var i=It();yn(r,t,1,i)}}),Fp(t,1)}};sp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=It();yn(e,t,134217728,n)}Fp(t,134217728)}};s0=function(t){if(t.tag===13){var e=Fr(t),n=tr(t,e);if(n!==null){var r=It();yn(n,t,e,r)}Fp(t,e)}};o0=function(){return ye};a0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};xf=function(t,e,n){switch(e){case"input":if(yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wc(r);if(!i)throw Error(O(90));j_(r),yf(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};Y_=Ap;K_=Ai;var kx={usingClientEntryPoint:!1,Events:[Wa,ss,wc,H_,G_,Ap]},Co={findFiberByHostInstance:pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xx={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{gc=Ol.inject(xx),Tn=Ol}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(O(200));return Ex(t,e,null,n)};Ht.createRoot=function(t,e){if(!Up(t))throw Error(O(299));var n=!1,r="",i=Pw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mp(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,ha(t.nodeType===8?t.parentNode:t),new jp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Ai(t)};Ht.hydrate=function(t,e,n){if(!Nc(e))throw Error(O(200));return Pc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nw(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,ha(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tc(e)};Ht.render=function(t,e,n){if(!Nc(e))throw Error(O(200));return Pc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(O(40));return t._reactRootContainer?(Ai(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Ht.unstable_batchedUpdates=Ap;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Pc(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function Rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw)}catch(t){console.error(t)}}Rw(),N_.exports=Ht;var bx=N_.exports,hv=bx;df.createRoot=hv.createRoot,df.hydrateRoot=hv.hydrateRoot;const Ix=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Tx(t){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n=`${{}.PUBLIC_URL}/service-worker.js`;Ix?(Nx(n,t),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Aw(n,t)})}}function Aw(t,e){navigator.serviceWorker.register(t).then(n=>{n.onupdatefound=()=>{const r=n.installing;r!=null&&(r.onstatechange=()=>{r.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(n=>{console.error("Error during service worker registration:",n)})}function Nx(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");n.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(i=>{i.unregister().then(()=>{window.location.reload()})}):Aw(t,e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const Px="modulepreload",Rx=function(t){return"/"+t},pv={},Ax=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Rx(s),s in pv)return;pv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Px,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Ox=t=>{t&&t instanceof Function&&Ax(()=>import("./web-vitals-9f4c2f45.js"),[]).then(({getCLS:e,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{e(t),n(t),r(t),i(t),s(t)})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw no(e)},no=function(t){return new Error("Firebase Database ("+Ow.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Lx;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lw=function(t){const e=Dw(t);return zp.encodeByteArray(e,!0)},Mu=function(t){return Lw(t).replace(/\./g,"")},Fu=function(t){try{return zp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){return Mw(void 0,t)}function Mw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Fx(n)||(t[n]=Mw(t[n],e[n]));return t}function Fx(t){return t!=="__proto__"}/**
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
 */function jx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ux=()=>jx().__FIREBASE_DEFAULTS__,zx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fu(t[1]);return e&&JSON.parse(e)},Vp=()=>{try{return Ux()||zx()||Vx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fw=t=>{var e,n;return(n=(e=Vp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$x=t=>{const e=Fw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jw=()=>{var t;return(t=Vp())===null||t===void 0?void 0:t.config},Uw=t=>{var e;return(e=Vp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Wx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hx(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vw(){return Ow.NODE_ADMIN===!0}function Gx(){try{return typeof indexedDB=="object"}catch{return!1}}function Yx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="FirebaseError";class ii extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kx,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ii(i,a,r)}}function qx(t,e){return t.replace(Qx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Sa(Fu(s[0])||""),n=Sa(Fu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Xx=function(t){const e=$w(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Jx=function(t){const e=$w(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ju(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Uu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mv(s)&&mv(o)){if(!Uu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function eb(t,e){const n=new tb(t,e);return n.subscribe.bind(n)}class tb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fd),i.error===void 0&&(i.error=Fd),i.complete===void 0&&(i.complete=Fd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fd(){}function Rc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Oi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fi="[DEFAULT]";/**
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
 */class ib{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ga;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ob(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sb(t){return t===fi?void 0:t}function ob(t){return t.instantiationMode==="EAGER"}/**
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
 */class ab{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ib(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const lb={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},ub=we.INFO,cb={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},db=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bp{constructor(e){this.name=e,this._logLevel=ub,this._logHandler=db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const fb=(t,e)=>e.some(n=>t instanceof n);let gv,vv;function hb(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pb(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bw=new WeakMap,sh=new WeakMap,Ww=new WeakMap,jd=new WeakMap,Wp=new WeakMap;function mb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bw.set(n,t)}).catch(()=>{}),Wp.set(e,t),e}function gb(t){if(sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sh.set(t,e)}let oh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vb(t){oh=t(oh)}function yb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),Ur(r)}:pb().includes(t)?function(...e){return t.apply(Ud(this),e),Ur(Bw.get(this))}:function(...e){return Ur(t.apply(Ud(this),e))}}function _b(t){return typeof t=="function"?yb(t):(t instanceof IDBTransaction&&gb(t),fb(t,hb())?new Proxy(t,oh):t)}function Ur(t){if(t instanceof IDBRequest)return mb(t);if(jd.has(t))return jd.get(t);const e=_b(t);return e!==t&&(jd.set(t,e),Wp.set(e,t)),e}const Ud=t=>Wp.get(t);function wb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Eb=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],zd=new Map;function yv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Sb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Eb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zd.set(e,s),s}vb(t=>({...t,get:(e,n,r)=>yv(e,n)||t.get(e,n,r),has:(e,n)=>!!yv(e,n)||t.has(e,n)}));/**
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
 */class Cb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",_v="0.9.20";/**
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
 */const Di=new Bp("@firebase/app"),xb="@firebase/app-compat",bb="@firebase/analytics-compat",Ib="@firebase/analytics",Tb="@firebase/app-check-compat",Nb="@firebase/app-check",Pb="@firebase/auth",Rb="@firebase/auth-compat",Ab="@firebase/database",Ob="@firebase/database-compat",Db="@firebase/functions",Lb="@firebase/functions-compat",Mb="@firebase/installations",Fb="@firebase/installations-compat",jb="@firebase/messaging",Ub="@firebase/messaging-compat",zb="@firebase/performance",Vb="@firebase/performance-compat",$b="@firebase/remote-config",Bb="@firebase/remote-config-compat",Wb="@firebase/storage",Hb="@firebase/storage-compat",Gb="@firebase/firestore",Yb="@firebase/firestore-compat",Kb="firebase",qb="10.5.0";/**
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
 */const lh="[DEFAULT]",Qb={[ah]:"fire-core",[xb]:"fire-core-compat",[Ib]:"fire-analytics",[bb]:"fire-analytics-compat",[Nb]:"fire-app-check",[Tb]:"fire-app-check-compat",[Pb]:"fire-auth",[Rb]:"fire-auth-compat",[Ab]:"fire-rtdb",[Ob]:"fire-rtdb-compat",[Db]:"fire-fn",[Lb]:"fire-fn-compat",[Mb]:"fire-iid",[Fb]:"fire-iid-compat",[jb]:"fire-fcm",[Ub]:"fire-fcm-compat",[zb]:"fire-perf",[Vb]:"fire-perf-compat",[$b]:"fire-rc",[Bb]:"fire-rc-compat",[Wb]:"fire-gcs",[Hb]:"fire-gcs-compat",[Gb]:"fire-fst",[Yb]:"fire-fst-compat","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const zu=new Map,uh=new Map;function Xb(t,e){try{t.container.addComponent(e)}catch(n){Di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(uh.has(e))return Di.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,t);for(const n of zu.values())Xb(n,t);return!0}function Hp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Jb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zr=new Ya("app","Firebase",Jb);/**
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
 */class Zb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const io=qb;function Hw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=jw()),!n)throw zr.create("no-options");const s=zu.get(i);if(s){if(Uu(n,s.options)&&Uu(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new ab(i);for(const l of uh.values())o.addComponent(l);const a=new Zb(n,r,o);return zu.set(i,a),a}function Gw(t=lh){const e=zu.get(t);if(!e&&t===lh&&jw())return Hw();if(!e)throw zr.create("no-app",{appName:t});return e}function Vr(t,e,n){var r;let i=(r=Qb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Di.warn(a.join(" "));return}$s(new Oi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const eI="firebase-heartbeat-database",tI=1,Ca="firebase-heartbeat-store";let Vd=null;function Yw(){return Vd||(Vd=wb(eI,tI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ca)}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),Vd}async function nI(t){try{return await(await Yw()).transaction(Ca).objectStore(Ca).get(Kw(t))}catch(e){if(e instanceof ii)Di.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Di.warn(n.message)}}}async function wv(t,e){try{const r=(await Yw()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,Kw(t)),await r.done}catch(n){if(n instanceof ii)Di.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Di.warn(r.message)}}}function Kw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rI=1024,iI=30*24*60*60*1e3;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ev();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=iI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ev(),{heartbeatsToSend:n,unsentEntries:r}=oI(this._heartbeatsCache.heartbeats),i=Mu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ev(){return new Date().toISOString().substring(0,10)}function oI(t,e=rI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gx()?Yx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lI(t){$s(new Oi("platform-logger",e=>new Cb(e),"PRIVATE")),$s(new Oi("heartbeat",e=>new sI(e),"PRIVATE")),Vr(ah,_v,t),Vr(ah,_v,"esm2017"),Vr("fire-js","")}lI("");var uI="firebase",cI="10.5.0";/**
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
 */Vr(uI,cI,"app");const Cv="@firebase/database",kv="1.0.1";/**
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
 */let qw="";function dI(t){qw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fI(e)}}catch{}return new hI},vi=Qw("localStorage"),ch=Qw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Bp("@firebase/database"),pI=function(){let t=1;return function(){return t++}}(),Xw=function(t){const e=rb(t),n=new Zx;n.update(e);const r=n.digest();return zp.encodeByteArray(r)},Ka=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ka.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let bi=null,xv=!0;const mI=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(bs.logLevel=we.VERBOSE,bi=bs.log.bind(bs),e&&ch.set("logging_enabled",!0)):typeof t=="function"?bi=t:(bi=null,ch.remove("logging_enabled"))},pt=function(...t){if(xv===!0&&(xv=!1,bi===null&&ch.get("logging_enabled")===!0&&mI(!0)),bi){const e=Ka.apply(null,t);bi(e)}},qa=function(t){return function(...e){pt(t,...e)}},dh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ka(...t);bs.error(e)},rr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ka(...t)}`;throw bs.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+Ka(...t);bs.warn(e)},gI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bs="[MIN_NAME]",Li="[MAX_NAME]",Gi=function(t,e){if(t===e)return 0;if(t===Bs||e===Li)return-1;if(e===Bs||t===Li)return 1;{const n=bv(t),r=bv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},yI=function(t,e){return t===e?0:t<e?-1:1},ko=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Yp=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=Yp(t[e[r]]);return n+="}",n},Jw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zw=function(t){L(!Gp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},_I=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const SI=new RegExp("^-?(0*)\\d{1,10}$"),CI=-2147483648,kI=2147483647,bv=function(t){if(SI.test(t)){const e=Number(t);if(e>=CI&&e<=kI)return e}return null},so=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},xI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class Is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Is.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="5",e1="v",t1="s",n1="r",r1="f",i1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s1="ls",o1="p",fh="ac",a1="websocket",l1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function c1(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===a1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===l1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TI(t)&&(n.ns=t.namespace);const i=[];return yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Mx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={},Bd={};function qp(t){const e=t.toString();return $d[e]||($d[e]=new NI),$d[e]}function PI(t,e){const n=t.toString();return Bd[n]||(Bd[n]=e()),Bd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&so(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="start",AI="close",OI="pLPCommand",DI="pRTLPCB",d1="id",f1="pw",h1="ser",LI="cb",MI="seg",FI="ts",jI="d",UI="dframe",p1=1870,m1=30,zI=p1-m1,VI=25e3,$I=3e4;class fs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(e),this.stats_=qp(n),this.urlFn=l=>(this.appCheckToken&&(l[fh]=this.appCheckToken),c1(n,l1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new RI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($I)),vI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Iv)this.id=a,this.password=l;else if(o===AI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Iv]="t",r[h1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[e1]=Kp,this.transportSessionId&&(r[t1]=this.transportSessionId),this.lastSessionId&&(r[s1]=this.lastSessionId),this.applicationId&&(r[o1]=this.applicationId),this.appCheckToken&&(r[fh]=this.appCheckToken),typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(r[n1]=r1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fs.forceAllow_=!0}static forceDisallow(){fs.forceDisallow_=!0}static isAvailable(){return fs.forceAllow_?!0:!fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_I()&&!wI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Lw(n),i=Jw(r,zI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UI]="t",r[d1]=e,r[f1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pI(),window[OI+this.uniqueCallbackIdentifier]=e,window[DI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[d1]=this.myID,e[f1]=this.myPW,e[h1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+m1+r.length<=p1;){const o=this.pendingSegs.shift();r=r+"&"+MI+i+"="+o.seg+"&"+FI+i+"="+o.ts+"&"+jI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(VI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=16384,WI=45e3;let Vu=null;typeof MozWebSocket<"u"?Vu=MozWebSocket:typeof WebSocket<"u"&&(Vu=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=qp(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[e1]=Kp,typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(o[n1]=r1),n&&(o[t1]=n),r&&(o[s1]=r),i&&(o[fh]=i),s&&(o[o1]=s),c1(e,a1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vi.set("previous_websocket_failure",!0);try{let r;Vw(),this.mySock=new Vu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vu!==null&&!hn.forceDisallow_}static previouslyFailed(){return vi.isInMemoryStorage||vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){vi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jw(n,BI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fs,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of ka.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ka.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=6e4,GI=5e3,YI=10*1024,KI=100*1024,Wd="t",Tv="d",qI="s",Nv="r",QI="e",Pv="o",Rv="a",Av="n",Ov="p",XI="h";class JI{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new ka(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wd in e){const n=e[Wd];n===Rv?this.upgradeIfSecondaryHealthy_():n===Nv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ko("t",e),r=ko("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ov,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Av,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ko("t",e),r=ko("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ko(Wd,e);if(Tv in e){const r=e[Tv];if(n===XI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Av){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qI?this.onConnectionShutdown_(r):n===Nv?this.onReset_(r):n===QI?dh("Server Error: "+r):n===Pv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kp!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ov,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends v1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$p()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $u}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=32,Lv=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yr(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function Xp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function y1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return bt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eT(t,e){const n=xa(t,0),r=xa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Gi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Jp(t,e){if(Yr(t)!==Yr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Yr(t)>Yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tT{constructor(e,n){this.errorPrefix_=n,this.parts_=xa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ac(this.parts_[r]);_1(this)}}function nT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ac(e),_1(t)}function rT(t){const e=t.parts_.pop();t.byteLength_-=Ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function _1(t){if(t.byteLength_>Lv)throw new Error(t.errorPrefix_+"has a key path longer than "+Lv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dv+") or object contains a cycle "+hi(t))}function hi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp extends v1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zp}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=1e3,iT=60*5*1e3,Mv=30*1e3,sT=1.3,oT=3e4,aT="server_kill",Fv=3;class Xn extends g1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xo,this.maxReconnectDelay_=iT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Vw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$u.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ga,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const r=Vs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Xx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dh("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oT&&(this.reconnectDelay_=xo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new JI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Tt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(aT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Tt(d),l())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ih(this.interruptReasons_)&&(this.reconnectDelay_=xo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Yp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fv&&(this.reconnectDelay_=Mv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qw.replace(/\./g,"-")]=1,$p()?e["framework.cordova"]=1:zw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$u.getInstance().currentlyOnline();return ih(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Oc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Bs,e),i=new oe(Bs,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class w1 extends Oc{static get __EMPTY_NODE(){return Dl}static set __EMPTY_NODE(e){Dl=e}compare(e,n){return Gi(e.name,n.name)}isDefinedOn(e){throw no("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Li,Dl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Dl)}toString(){return".key"}}const Ts=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??Lt.EMPTY_NODE,this.right=s??Lt.EMPTY_NODE}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Lt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class lT{copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Lt{constructor(e,n=Lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ll(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ll(this.root_,null,this.comparator_,!0,e)}}Lt.EMPTY_NODE=new lT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e){return Gi(t.name,e.name)}function em(t,e){return Gi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh;function cT(t){hh=t}const E1=function(t){return typeof t=="number"?"number:"+Zw(t):"string:"+t},S1=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else L(t===hh||t.isEmpty(),"priority of unexpected type.");L(t===hh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jv;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),S1(this.priorityNode_)}static set __childrenNodeConstructor(e){jv=e}static get __childrenNodeConstructor(){return jv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:se(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+E1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zw(this.value_):e+=this.value_,this.lazyHash_=Xw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(n),s=ot.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C1,k1;function dT(t){C1=t}function fT(t){k1=t}class hT extends Oc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Gi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Li,new ot("[PRIORITY-POST]",k1))}makePost(e,n){const r=C1(e);return new oe(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new hT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=Math.log(2);class mT{constructor(e){const n=s=>parseInt(Math.log(s)/pT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new lt(f,d.node,lt.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),_=i(m+1,u);return d=t[m],f=n?n(d):d,new lt(f,d.node,lt.BLACK,y,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,_){const x=d-y,v=d;d-=y;const h=i(x+1,v),g=t[x],p=n?n(g):g;m(new lt(p,g.node,_,null,h))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));_?f(x,lt.BLACK):(f(x,lt.BLACK),f(x,lt.RED))}return c},o=new mT(t.length),a=s(o);return new Lt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd;const Xi={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Xi&&We,"ChildrenNode.ts has not been loaded"),Hd=Hd||new Yn({".priority":Xi},{".priority":We}),Hd}get(e){const n=Vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Lt?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Bu(r,e.getCompare()):a=Xi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Yn(c,u)}addToIndexes(e,n){const r=ju(this.indexes_,(i,s)=>{const o=Vs(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Xi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Bu(a,o.getCompare())}else return Xi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ju(this.indexes_,i=>{if(i===Xi)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&S1(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bo||(bo=new J(new Lt(em),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bo}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bo:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?bo:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{L(se(e)!==".priority"||Yr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+E1(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qa?-1:0}withIndex(e){if(e===Ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ts?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gT extends J{constructor(){super(new Lt(em),J.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Qa=new gT;Object.defineProperties(oe,{MIN:{value:new oe(Bs,J.EMPTY_NODE)},MAX:{value:new oe(Li,Qa)}});w1.__EMPTY_NODE=J.EMPTY_NODE;ot.__childrenNodeConstructor=J;cT(Qa);fT(Qa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=!0;function tt(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,tt(e))}if(!(t instanceof Array)&&vT){const n=[];let r=!1;if(yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=Bu(n,uT,o=>o.name,em);if(r){const o=Bu(n,We.getCompare());return new J(s,tt(e),new Yn({".priority":o},{".priority":We}))}else return new J(s,tt(e),Yn.Default)}else{let n=J.EMPTY_NODE;return yt(t,(r,i)=>{if(On(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}dT(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT extends Oc{constructor(e){super(),this.indexPath_=e,L(!ce(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Gi(e.name,n.name):s}makePost(e,n){const r=tt(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Qa);return new oe(Li,e)}toString(){return xa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T extends Oc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Gi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=tt(e);return new oe(n,r)}toString(){return".value"}}const wT=new _T;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ba(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ia(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ET(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ba(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Ia(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(ba(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ia(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ST{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ia(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ba(n,d));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ws(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ba(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bs}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Li}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new nm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CT(t){return t.loadsAllData()?new tm(t.getIndex()):t.hasLimit()?new ST(t):new Ta(t)}function Uv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===wT?n="$value":t.index_===Ts?n="$key":(L(t.index_ instanceof yT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends g1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Wu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Uv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Vs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Wu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Uv(e._queryParams),r=e._path.toString(),i=new Ga;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Sa(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){return{value:null,children:new Map}}function b1(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Hu());const i=t.children.get(r);e=be(e),b1(i,e,n)}}function ph(t,e,n){t.value!==null?n(e,t.value):xT(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);ph(i,s,n)})}function xT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=10*1e3,IT=30*1e3,TT=5*60*1e3;class NT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bT(e);const r=Vv+(IT-Vv)*Math.random();Yo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yt(e,(i,s)=>{s>0&&On(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*TT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=rm()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Gu(me(),n,this.revert)}}else return L(se(this.path)===e,"operationForChild called for unrelated child."),new Gu(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Na(this.source,me()):new Na(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return ce(this.path)?new Mi(this.source,me(),this.snap.getImmediateChild(e)):new Mi(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Mi(this.source,me(),n.value):new Hs(this.source,me(),n)}else return L(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hs(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function RT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ET(o.childName,o.snapshotNode))}),Io(t,i,"child_removed",e,r,n),Io(t,i,"child_added",e,r,n),Io(t,i,"child_moved",s,r,n),Io(t,i,"child_changed",e,r,n),Io(t,i,"value",e,r,n),i}function Io(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>OT(t,a,l)),o.forEach(a=>{const l=AT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function AT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function OT(t,e,n){if(e.childName==null||n.childName==null)throw no("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){return{eventCache:t,serverCache:e}}function Ko(t,e,n,r){return Dc(new Kr(e,n,r),t.serverCache)}function I1(t,e,n,r){return Dc(t.eventCache,new Kr(e,n,r))}function Yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd;const DT=()=>(Gd||(Gd=new Lt(yI)),Gd);class xe{constructor(e,n=DT()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return yt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ce(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:Be(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new xe(null)}}set(e,n){if(ce(e))return new xe(n,this.children);{const r=se(e),s=(this.children.get(r)||new xe(null)).set(be(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(ce(e))return n;{const r=se(e),s=(this.children.get(r)||new xe(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(be(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),Be(n,i),r):new xe(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new xe(null))}}function qo(t,e,n){if(ce(e))return new _n(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function mh(t,e,n){let r=t;return yt(n,(i,s)=>{r=qo(r,Be(e,i),s)}),r}function $v(t,e){if(ce(e))return _n.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new _n(n)}}function gh(t,e){return Yi(t,e)!=null}function Yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function Bv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function $r(t,e){if(ce(e))return t;{const n=Yi(t,e);return n!=null?new _n(new xe(n)):new _n(t.writeTree_.subtree(e))}}function vh(t){return t.writeTree_.isEmpty()}function Gs(t,e){return T1(me(),t.writeTree_,e)}function T1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=T1(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){return A1(e,t)}function LT(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qo(t.visibleWrites,e,n)),t.lastWriteId=r}function MT(t,e,n,r){L(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=mh(t.visibleWrites,e,n),t.lastWriteId=r}function FT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UT(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return zT(t),!0;if(r.snap)t.visibleWrites=$v(t.visibleWrites,r.path);else{const a=r.children;yt(a,l=>{t.visibleWrites=$v(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function UT(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Be(t.path,n),e))return!0;return!1}function zT(t){t.visibleWrites=N1(t.allWrites,VT,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VT(t){return t.visible}function N1(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=bt(n,o),r=qo(r,a,s.snap)):tn(o,n)&&(a=bt(o,n),r=qo(r,me(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=bt(n,o),r=mh(r,a,s.children);else if(tn(o,n))if(a=bt(o,n),ce(a))r=mh(r,me(),s.children);else{const l=Vs(s.children,se(a));if(l){const u=l.getChild(be(a));r=qo(r,me(),u)}}}else throw no("WriteRecord should have .snap or .children")}}return r}function P1(t,e,n,r,i){if(!r&&!i){const s=Yi(t.visibleWrites,e);if(s!=null)return s;{const o=$r(t.visibleWrites,e);if(vh(o))return n;if(n==null&&!gh(o,me()))return null;{const a=n||J.EMPTY_NODE;return Gs(o,a)}}}else{const s=$r(t.visibleWrites,e);if(!i&&vh(s))return n;if(!i&&n==null&&!gh(s,me()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=N1(t.allWrites,o,e),l=n||J.EMPTY_NODE;return Gs(a,l)}}}function $T(t,e,n){let r=J.EMPTY_NODE;const i=Yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$r(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Gs($r(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),Bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$r(t.visibleWrites,e);return Bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function BT(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(gh(t.visibleWrites,s))return null;{const o=$r(t.visibleWrites,s);return vh(o)?i.getChild(n):Gs(o,i.getChild(n))}}function WT(t,e,n,r){const i=Be(e,n),s=Yi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$r(t.visibleWrites,i);return Gs(o,r.getNode().getImmediateChild(n))}else return null}function HT(t,e){return Yi(t.visibleWrites,e)}function GT(t,e,n,r,i,s,o){let a;const l=$r(t.visibleWrites,e),u=Yi(l,me());if(u!=null)a=u;else if(n!=null)a=Gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function YT(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Ku(t,e,n,r){return P1(t.writeTree,t.treePath,e,n,r)}function om(t,e){return $T(t.writeTree,t.treePath,e)}function Wv(t,e,n,r){return BT(t.writeTree,t.treePath,e,n,r)}function qu(t,e){return HT(t.writeTree,Be(t.treePath,e))}function KT(t,e,n,r,i,s){return GT(t.writeTree,t.treePath,e,n,r,i,s)}function am(t,e,n){return WT(t.writeTree,t.treePath,e,n)}function R1(t,e){return A1(Be(t.treePath,e),t.writeTree)}function A1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ia(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ba(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ia(r,e.snapshotNode,i.oldSnap));else throw no("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const O1=new QT;class lm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return am(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fi(this.viewCache_),s=KT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){return{filter:t}}function JT(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZT(t,e,n,r,i){const s=new qT;let o,a;if(n.type===mn.OVERWRITE){const u=n;u.source.fromUser?o=yh(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),o=Qu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===mn.MERGE){const u=n;u.source.fromUser?o=tN(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=_h(t,e,u.path,u.children,r,i,a,s))}else if(n.type===mn.ACK_USER_WRITE){const u=n;u.revert?o=iN(t,e,u.path,r,i,s):o=nN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mn.LISTEN_COMPLETE)o=rN(t,e,n.path,r,s);else throw no("Unknown operation type: "+n.type);const l=s.getChanges();return eN(e,o,l),{viewCache:o,changes:l}}function eN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(x1(Yu(e)))}}function D1(t,e,n,r,i,s){const o=e.eventCache;if(qu(r,n)!=null)return e;{let a,l;if(ce(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Fi(e),c=u instanceof J?u:J.EMPTY_NODE,d=om(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ku(r,Fi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){L(Yr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Wv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=be(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Wv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=am(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ko(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Qu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ce(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Yr(n)>1)return e;const y=be(n),x=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),x):u=c.updateChild(l.getNode(),m,x,y,O1,null)}const d=I1(e,u,l.isFullyInitialized()||ce(n),c.filtersNodes()),f=new lm(i,d,s);return D1(t,d,n,i,f,a)}function yh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new lm(i,e,s);if(ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ko(e,u,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ko(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),m=a.getNode().getImmediateChild(d);let y;if(ce(f))y=r;else{const _=c.getCompleteChild(d);_!=null?Xp(f)===".priority"&&_.getChild(y1(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=J.EMPTY_NODE}if(m.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=Ko(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hv(t,e){return t.eventCache.isCompleteForChild(e)}function tN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Be(n,l);Hv(e,se(c))&&(a=yh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Be(n,l);Hv(e,se(c))||(a=yh(t,a,c,u,i,s,o))}),a}function Gv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _h(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ce(n)?u=r:u=new xe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=Gv(t,m,f);l=Qu(t,l,new Ee(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),_=Gv(t,y,f);l=Qu(t,l,new Ee(d),_,i,s,o,a)}}),l}function nN(t,e,n,r,i,s,o){if(qu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let u=new xe(null);return l.getNode().forEachChild(Ts,(c,d)=>{u=u.set(new Ee(c),d)}),_h(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((c,d)=>{const f=Be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),_h(t,e,n,u,i,s,a,o)}}function rN(t,e,n,r,i){const s=e.serverCache,o=I1(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return D1(t,o,n,r,O1,i)}function iN(t,e,n,r,i,s){let o;if(qu(r,n)!=null)return e;{const a=new lm(r,e,i),l=e.eventCache.getNode();let u;if(ce(n)||se(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ku(r,Fi(e));else{const d=e.serverCache.getNode();L(d instanceof J,"serverChildren would be complete if leaf node"),c=om(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=se(n);let d=am(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,be(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,J.EMPTY_NODE,be(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ku(r,Fi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||qu(r,me())!=null,Ko(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tm(r.getIndex()),s=CT(r);this.processor_=XT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),c=new Kr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Kr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Dc(d,c),this.eventGenerator_=new PT(this.query_)}get query(){return this.query_}}function oN(t){return t.viewCache_.serverCache.getNode()}function aN(t){return Yu(t.viewCache_)}function lN(t,e){const n=Fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Yv(t){return t.eventRegistrations_.length===0}function uN(t,e){t.eventRegistrations_.push(e)}function Kv(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qv(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(L(Fi(t.viewCache_),"We should always have a full cache before handling merges"),L(Yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ZT(t.processor_,i,e,n,r);return JT(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,L1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(x1(n.getNode())),L1(t,r,n.getNode(),e)}function L1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return RT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;class M1{constructor(){this.views=new Map}}function dN(t){L(!Xu,"__referenceConstructor has already been defined"),Xu=t}function fN(){return L(Xu,"Reference.ts has not been loaded"),Xu}function hN(t){return t.views.size===0}function um(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),qv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qv(o,e,n,r));return s}}function F1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ku(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=om(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const u=Dc(new Kr(a,l,!1),new Kr(r,i,!1));return new sN(e,u)}return o}function pN(t,e,n,r,i,s){const o=F1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uN(o,n),cN(o,n)}function mN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=qr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Kv(u,n,r)),Yv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Kv(l,n,r)),Yv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!qr(t)&&s.push(new(fN())(e._repo,e._path)),{removed:s,events:o}}function j1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Br(t,e){let n=null;for(const r of t.views.values())n=n||lN(r,e);return n}function U1(t,e){if(e._queryParams.loadsAllData())return Mc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function z1(t,e){return U1(t,e)!=null}function qr(t){return Mc(t)!=null}function Mc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju;function gN(t){L(!Ju,"__referenceConstructor has already been defined"),Ju=t}function vN(){return L(Ju,"Reference.ts has not been loaded"),Ju}let yN=1;class Qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=YT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function V1(t,e,n,r,i){return LT(t.pendingWriteTree_,e,n,r,i),i?oo(t,new Mi(rm(),e,n)):[]}function _N(t,e,n,r){MT(t.pendingWriteTree_,e,n,r);const i=xe.fromObject(n);return oo(t,new Hs(rm(),e,i))}function Tr(t,e,n=!1){const r=FT(t.pendingWriteTree_,e);if(jT(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(me(),!0):yt(r.children,o=>{s=s.set(new Ee(o),!0)}),oo(t,new Gu(r.path,s,n))}else return[]}function Xa(t,e,n){return oo(t,new Mi(im(),e,n))}function wN(t,e,n){const r=xe.fromObject(n);return oo(t,new Hs(im(),e,r))}function EN(t,e){return oo(t,new Na(im(),e))}function SN(t,e,n){const r=dm(t,n);if(r){const i=fm(r),s=i.path,o=i.queryId,a=bt(s,e),l=new Na(sm(o),a);return hm(t,s,l)}else return[]}function Zu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||z1(o,e))){const l=mN(o,e,n,r);hN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>qr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=xN(f);for(let y=0;y<m.length;++y){const _=m[y],x=_.query,v=H1(t,_);t.listenProvider_.startListening(Qo(x),Pa(t,x),v.hashFn,v.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Qo(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Fc(f));t.listenProvider_.stopListening(Qo(f),m)}))}bN(t,u)}return a}function $1(t,e,n,r){const i=dm(t,r);if(i!=null){const s=fm(i),o=s.path,a=s.queryId,l=bt(o,e),u=new Mi(sm(a),l,n);return hm(t,o,u)}else return[]}function CN(t,e,n,r){const i=dm(t,r);if(i){const s=fm(i),o=s.path,a=s.queryId,l=bt(o,e),u=xe.fromObject(n),c=new Hs(sm(a),l,u);return hm(t,o,c)}else return[]}function wh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const y=bt(f,i);s=s||Br(m,y),o=o||qr(m)});let a=t.syncPointTree_.get(i);a?(o=o||qr(a),s=s||Br(a,me())):(a=new M1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=Br(y,me());_&&(s=s.updateImmediateChild(m,_))}));const u=z1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Fc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=IN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=Lc(t.pendingWriteTree_,i);let d=pN(a,e,n,c,s,l);if(!u&&!o&&!r){const f=U1(a,e);d=d.concat(TN(t,e,f))}return d}function cm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),u=Br(a,l);if(u)return u});return P1(i,e,s,n,!0)}function kN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=bt(u,n);r=r||Br(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Br(i,me()):(i=new M1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Kr(r,!0,!1):null,a=Lc(t.pendingWriteTree_,e._path),l=F1(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return aN(l)}function oo(t,e){return B1(e,t.syncPointTree_,null,Lc(t.pendingWriteTree_,me()))}function B1(t,e,n,r){if(ce(t.path))return W1(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=Br(i,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=R1(r,o);s=s.concat(B1(a,l,u,c))}return i&&(s=s.concat(um(i,t,r,n))),s}}function W1(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=Br(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=R1(r,o),c=t.operationForChild(o);c&&(s=s.concat(W1(c,a,l,u)))}),i&&(s=s.concat(um(i,t,r,n))),s}function H1(t,e){const n=e.query,r=Pa(t,n);return{hashFn:()=>(oN(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?SN(t,n._path,r):EN(t,n._path);{const s=EI(i,n);return Zu(t,n,null,s)}}}}function Pa(t,e){const n=Fc(e);return t.queryToTagMap.get(n)}function Fc(t){return t._path.toString()+"$"+t._queryIdentifier}function dm(t,e){return t.tagToQueryMap.get(e)}function fm(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function hm(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=Lc(t.pendingWriteTree_,e);return um(r,n,i,null)}function xN(t){return t.fold((e,n,r)=>{if(n&&qr(n))return[Mc(n)];{let i=[];return n&&(i=j1(n)),yt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vN())(t._repo,t._path):t}function bN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function IN(){return yN++}function TN(t,e,n){const r=e._path,i=Pa(t,e),s=H1(t,n),o=t.listenProvider_.startListening(Qo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ce(u)&&c&&qr(c))return[Mc(c).query];{let f=[];return c&&(f=f.concat(j1(c).map(m=>m.query))),yt(d,(m,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Qo(c),Pa(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pm(n)}node(){return this.node_}}class mm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new mm(this.syncTree_,n)}node(){return cm(this.syncTree_,this.path_)}}const NN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xv=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return PN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return RN(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},PN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},RN=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},G1=function(t,e,n,r){return gm(e,new mm(n,t),r)},Y1=function(t,e,n){return gm(t,new pm(e),n)};function gm(t,e,n){const r=t.getPriority().val(),i=Xv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ot(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ot(i))),o.forEachChild(We,(a,l)=>{const u=gm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ym(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=se(n);for(;i!==null;){const s=Vs(r.node.children,i)||{children:{},childCount:0};r=new vm(i,r,s),n=be(n),i=se(n)}return r}function ao(t){return t.node.value}function K1(t,e){t.node.value=e,Eh(t)}function q1(t){return t.node.childCount>0}function AN(t){return ao(t)===void 0&&!q1(t)}function jc(t,e){yt(t.node.children,(n,r)=>{e(new vm(n,t,r))})}function Q1(t,e,n,r){n&&!r&&e(t),jc(t,i=>{Q1(i,e,!0,r)}),n&&r&&e(t)}function ON(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ja(t){return new Ee(t.parent===null?t.name:Ja(t.parent)+"/"+t.name)}function Eh(t){t.parent!==null&&DN(t.parent,t.name,t)}function DN(t,e,n){const r=AN(n),i=On(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Eh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Eh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=/[\[\].#$\/\u0000-\u001F\u007F]/,MN=/[\[\].#$\u0000-\u001F\u007F]/,Yd=10*1024*1024,_m=function(t){return typeof t=="string"&&t.length!==0&&!LN.test(t)},X1=function(t){return typeof t=="string"&&t.length!==0&&!MN.test(t)},FN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),X1(t)},jN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gp(t)||t&&typeof t=="object"&&On(t,".sv")},UN=function(t,e,n,r){r&&e===void 0||Uc(Rc(t,"value"),e,n)},Uc=function(t,e,n){const r=n instanceof Ee?new tT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hi(r));if(typeof e=="function")throw new Error(t+"contains a function "+hi(r)+" with contents = "+e.toString());if(Gp(e))throw new Error(t+"contains "+e.toString()+" "+hi(r));if(typeof e=="string"&&e.length>Yd/3&&Ac(e)>Yd)throw new Error(t+"contains a string greater than "+Yd+" utf8 bytes "+hi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!_m(o)))throw new Error(t+" contains an invalid key ("+o+") "+hi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nT(r,o),Uc(t,a,r),rT(r)}),i&&s)throw new Error(t+' contains ".value" child '+hi(r)+" in addition to actual children.")}},zN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=xa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!_m(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&tn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},VN=function(t,e,n,r){if(r&&e===void 0)return;const i=Rc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];yt(e,(o,a)=>{const l=new Ee(o);if(Uc(i,a,Be(n,l)),Xp(l)===".priority"&&!jN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),zN(i,s)},J1=function(t,e,n,r){if(!(r&&n===void 0)&&!X1(n))throw new Error(Rc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$N=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),J1(t,e,n,r)},Z1=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},BN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_m(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!FN(n))throw new Error(Rc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function eE(t,e,n){zc(t,n),tE(t,r=>Jp(r,e))}function on(t,e,n){zc(t,n),tE(t,r=>tn(r,e)||tn(e,r))}function tE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(HN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bi&&pt("event: "+n.toString()),so(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="repo_interrupt",YN=25;class KN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hu(),this.transactionQueueTree_=new vm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qN(t,e,n){if(t.stats_=qp(t.repoInfo_),t.forceRestClient_||xI())t.server_=new Wu(t.repoInfo_,(r,i,s,o)=>{Jv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(r,i,s,o)=>{Jv(t,r,i,s,o)},r=>{Zv(t,r)},r=>{XN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PI(t.repoInfo_,()=>new NT(t.stats_,t.server_)),t.infoData_=new kT,t.infoSyncTree_=new Qv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Xa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wm(t,"connected",!1),t.serverSyncTree_=new Qv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);on(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function QN(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return NN({timestamp:QN(t)})}function Jv(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ju(n,u=>tt(u));o=CN(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=$1(t.serverSyncTree_,s,l,i)}else if(r){const l=ju(n,u=>tt(u));o=wN(t.serverSyncTree_,s,l)}else{const l=tt(n);o=Xa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ys(t,s)),on(t.eventQueue_,a,o)}function Zv(t,e){wm(t,"connected",e),e===!1&&tP(t)}function XN(t,e){yt(e,(n,r)=>{wm(t,n,r)})}function wm(t,e,n){const r=new Ee("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Xa(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function Em(t){return t.nextWriteId_++}function JN(t,e,n){const r=kN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=tt(i).withIndex(e._queryParams.getIndex());wh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Xa(t.serverSyncTree_,e._path,s);else{const a=Pa(t.serverSyncTree_,e);o=$1(t.serverSyncTree_,e._path,s,a)}return on(t.eventQueue_,e._path,o),Zu(t.serverSyncTree_,e,n,null,!0),s},i=>(Za(t,"get for query "+nt(e)+" failed: "+i),Promise.reject(new Error(i))))}function ZN(t,e,n,r,i){Za(t,"set",{path:e.toString(),value:n,priority:r});const s=Vc(t),o=tt(n,r),a=cm(t.serverSyncTree_,e),l=Y1(o,a,s),u=Em(t),c=V1(t.serverSyncTree_,e,l,u,!0);zc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const y=f==="ok";y||Tt("set at "+e+" failed: "+f);const _=Tr(t.serverSyncTree_,u,!y);on(t.eventQueue_,e,_),Sh(t,i,f,m)});const d=Cm(t,e);Ys(t,d),on(t.eventQueue_,d,[])}function eP(t,e,n,r){Za(t,"update",{path:e.toString(),value:n});let i=!0;const s=Vc(t),o={};if(yt(n,(a,l)=>{i=!1,o[a]=G1(Be(e,a),tt(l),t.serverSyncTree_,s)}),i)pt("update() called with empty data.  Don't do anything."),Sh(t,r,"ok",void 0);else{const a=Em(t),l=_N(t.serverSyncTree_,e,o,a);zc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Tt("update at "+e+" failed: "+u);const f=Tr(t.serverSyncTree_,a,!d),m=f.length>0?Ys(t,e):e;on(t.eventQueue_,m,f),Sh(t,r,u,c)}),yt(n,u=>{const c=Cm(t,Be(e,u));Ys(t,c)}),on(t.eventQueue_,e,[])}}function tP(t){Za(t,"onDisconnectEvents");const e=Vc(t),n=Hu();ph(t.onDisconnect_,me(),(i,s)=>{const o=G1(i,s,t.serverSyncTree_,e);b1(n,i,o)});let r=[];ph(n,me(),(i,s)=>{r=r.concat(Xa(t.serverSyncTree_,i,s));const o=Cm(t,i);Ys(t,o)}),t.onDisconnect_=Hu(),on(t.eventQueue_,me(),r)}function nP(t,e,n){let r;se(e._path)===".info"?r=wh(t.infoSyncTree_,e,n):r=wh(t.serverSyncTree_,e,n),eE(t.eventQueue_,e._path,r)}function ey(t,e,n){let r;se(e._path)===".info"?r=Zu(t.infoSyncTree_,e,n):r=Zu(t.serverSyncTree_,e,n),eE(t.eventQueue_,e._path,r)}function rP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GN)}function Za(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function Sh(t,e,n,r){e&&so(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nE(t,e,n){return cm(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Sm(t,e=t.transactionQueueTree_){if(e||$c(t,e),ao(e)){const n=iE(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iP(t,Ja(e),n)}else q1(e)&&jc(e,n=>{Sm(t,n)})}function iP(t,e,n){const r=n.map(u=>u.currentWriteId),i=nE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=bt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Za(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Tr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();$c(t,ym(t.transactionQueueTree_,e)),Sm(t,t.transactionQueueTree_),on(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)so(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ys(t,e)}},o)}function Ys(t,e){const n=rE(t,e),r=Ja(n),i=iE(t,n);return sP(t,i,r),r}function sP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YN)c=!0,d="maxretry",i=i.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=nE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Uc("transaction failed: Data returned ",m,l.path);let y=tt(m);typeof m=="object"&&m!=null&&On(m,".priority")||(y=y.updatePriority(f.getPriority()));const x=l.currentWriteId,v=Vc(t),h=Y1(y,f,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=Em(t),o.splice(o.indexOf(x),1),i=i.concat(V1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Tr(t.serverSyncTree_,x,!0))}else c=!0,d="nodata",i=i.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}$c(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)so(r[a]);Sm(t,t.transactionQueueTree_)}function rE(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&ao(r)===void 0;)r=ym(r,n),e=be(e),n=se(e);return r}function iE(t,e){const n=[];return sE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sE(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);jc(e,i=>{sE(t,i,n)})}function $c(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,K1(e,n.length>0?n:void 0)}jc(e,r=>{$c(t,r)})}function Cm(t,e){const n=Ja(rE(t,e)),r=ym(t.transactionQueueTree_,e);return ON(r,i=>{Kd(t,i)}),Kd(t,r),Q1(r,i=>{Kd(t,i)}),n}function Kd(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Tr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?K1(e,void 0):n.length=s+1,on(t.eventQueue_,Ja(e),i);for(let o=0;o<r.length;o++)so(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function aP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ty=function(t,e){const n=lP(t),r=n.namespace;n.domain==="firebase.com"&&rr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&rr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new u1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},lP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=oP(t.substring(c,d)));const f=aP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class aE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class km{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:Xp(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=zv(this._queryParams),n=Yp(e);return n==="{}"?"default":n}get _queryObject(){return zv(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof km))return!1;const n=this._repo===e._repo,r=Jp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZI(this._path)}}class Dn extends km{constructor(e,n){super(e,n,new nm,!1)}get parent(){const e=y1(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=Ra(this.ref,e);return new Ks(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ks(i,Ra(this.ref,r),We)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ct(t,e){return t=Rt(t),t._checkNotDeleted("ref"),e!==void 0?Ra(t._root,e):t._root}function Ra(t,e){return t=Rt(t),se(t._path)===null?$N("child","path",e,!1):J1("child","path",e,!1),new Dn(t._repo,Be(t._path,e))}function uP(t){return Z1("remove",t._path),hs(t,null)}function hs(t,e){t=Rt(t),Z1("set",t._path),UN("set",e,t._path,!1);const n=new Ga;return ZN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function qs(t,e){VN("update",e,t._path,!1);const n=new Ga;return eP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function cP(t){t=Rt(t);const e=new lE(()=>{}),n=new Bc(e);return JN(t._repo,t,n).then(r=>new Ks(r,new Dn(t._repo,t._path),t._queryParams.getIndex()))}class Bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new oE("value",this,new Ks(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new aE(this,e,n):null}matches(e){return e instanceof Bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new aE(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=Ra(new Dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new oE(e.type,this,new Ks(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{ey(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new lE(n,s||void 0),a=e==="value"?new Bc(o):new xm(e,o);return nP(t._repo,t,a),()=>ey(t._repo,t,a)}function Xo(t,e,n,r){return dP(t,"value",e,n,r)}function uE(t,...e){let n=Rt(t);for(const r of e)n=r._apply(n);return n}dN(Dn);gN(Dn);/**
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
 */const fP="FIREBASE_DATABASE_EMULATOR_HOST",Ch={};let hP=!1;function pP(t,e,n,r){t.repoInfo_=new u1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function mP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||rr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ty(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[fP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=ty(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Is(Is.OWNER):new II(t.name,t.options,e);BN("Invalid Firebase Database URL",o),ce(o.path)||rr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=vP(a,t,c,new bI(t.name,n));return new yP(d,t)}function gP(t,e){const n=Ch[e];(!n||n[t.key]!==t)&&rr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rP(t),delete n[t.key]}function vP(t,e,n,r){let i=Ch[e.name];i||(i={},Ch[e.name]=i);let s=i[t.toURLString()];return s&&rr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new KN(t,hP,n,r),i[t.toURLString()]=s,s}class yP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rr("Cannot call "+e+" on a deleted database.")}}function cE(t=Gw(),e){const n=Hp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=$x("database");r&&_P(n,...r)}return n}function _P(t,e,n,r={}){t=Rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&rr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&rr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Is(Is.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Bx(r.mockUserToken,t.app.options.projectId);s=new Is(o)}pP(i,e,n,s)}/**
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
 */function wP(t){dI(io),$s(new Oi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return mP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Vr(Cv,kv,t),Vr(Cv,kv,"esm2017")}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wP();function bm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EP=dE,fE=new Ya("auth","Firebase",dE());/**
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
 */const ec=new Bp("@firebase/auth");function SP(t,...e){ec.logLevel<=we.WARN&&ec.warn(`Auth (${io}): ${t}`,...e)}function iu(t,...e){ec.logLevel<=we.ERROR&&ec.error(`Auth (${io}): ${t}`,...e)}/**
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
 */function An(t,...e){throw Im(t,...e)}function Pn(t,...e){return Im(t,...e)}function hE(t,e,n){const r=Object.assign(Object.assign({},EP()),{[e]:n});return new Ya("auth","Firebase",r).create(e,{appName:t.name})}function CP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),hE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fE.create(t,...e)}function re(t,e,...n){if(!t)throw Im(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw iu(e),new Error(e)}function ir(t,e){t||Kn(e)}/**
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
 */function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kP(){return ny()==="http:"||ny()==="https:"}function ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kP()||Wx()||"connection"in navigator)?navigator.onLine:!0}function bP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class el{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=$p()||zw()}get(){return xP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TP=new el(3e4,6e4);function mE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tl(t,e,n,r,i={}){return gE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pE.fetch()(vE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function gE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IP),e);try{const i=new PP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ml(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hE(t,c,u);An(t,c)}}catch(i){if(i instanceof ii)throw i;An(t,"network-request-failed",{message:String(i)})}}async function NP(t,e,n,r,i={}){const s=await tl(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tm(t.config,i):`${t.config.apiScheme}://${i}`}class PP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),TP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function RP(t,e){return tl(t,"POST","/v1/accounts:delete",e)}async function AP(t,e){return tl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OP(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=Nm(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(qd(i.auth_time)),issuedAtTime:Jo(qd(i.iat)),expirationTime:Jo(qd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qd(t){return Number(t)*1e3}function Nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return iu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fu(n);return i?JSON.parse(i):(iu("Failed to decode base64 JWT payload"),null)}catch(i){return iu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DP(t){const e=Nm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ii&&LP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Aa(t,AP(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UP(s.providerUserInfo):[],a=jP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function FP(t){const e=Rt(t);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UP(t){return t.map(e=>{var{providerId:n}=e,r=bm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zP(t,e){const n=await gE(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Oa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oa;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oa,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function vr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OP(this,e)}reload(){return FP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Aa(this,RP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:N,stsTokenManager:k}=n;re(g&&k,e,"internal-error");const P=Oa.fromJSON(this.name,k);re(typeof g=="string",e,"internal-error"),vr(d,e.name),vr(f,e.name),re(typeof p=="boolean",e,"internal-error"),re(typeof C=="boolean",e,"internal-error"),vr(m,e.name),vr(y,e.name),vr(_,e.name),vr(x,e.name),vr(v,e.name),vr(h,e.name);const U=new Ii({uid:g,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:v,lastLoginAt:h});return N&&Array.isArray(N)&&(U.providerData=N.map(M=>Object.assign({},M))),x&&(U._redirectEventId=x),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oa;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tc(s),s}}/**
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
 */const ry=new Map;function qn(t){ir(t instanceof Function,"Expected a class definition");let e=ry.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ry.set(t,e),e)}/**
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
 */class _E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_E.type="NONE";const iy=_E;/**
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
 */function su(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=su(this.userKey,i.apiKey,s),this.fullPersistenceKey=su("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(qn(iy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qn(iy);const o=su(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ii._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ns(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ns(s,e,r))}}/**
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
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kE(e))return"Blackberry";if(xE(e))return"Webos";if(Pm(e))return"Safari";if((e.includes("chrome/")||EE(e))&&!e.includes("edge/"))return"Chrome";if(CE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wE(t=Ct()){return/firefox\//i.test(t)}function Pm(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EE(t=Ct()){return/crios\//i.test(t)}function SE(t=Ct()){return/iemobile/i.test(t)}function CE(t=Ct()){return/android/i.test(t)}function kE(t=Ct()){return/blackberry/i.test(t)}function xE(t=Ct()){return/webos/i.test(t)}function Wc(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VP(t=Ct()){var e;return Wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $P(){return Hx()&&document.documentMode===10}function bE(t=Ct()){return Wc(t)||CE(t)||xE(t)||kE(t)||/windows phone/i.test(t)||SE(t)}function BP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function IE(t,e=[]){let n;switch(t){case"Browser":n=sy(Ct());break;case"Worker":n=`${sy(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
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
 */class WP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HP(t,e={}){return tl(t,"GET","/v2/passwordPolicy",mE(t,e))}/**
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
 */const GP=6;class YP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class KP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HP(this),n=new YP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hc(t){return Rt(t)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=eb(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function QP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qP().appendChild(r)})}function XP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function JP(t,e){const n=Hp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Uu(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function ZP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eR(t,e,n){const r=Hc(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=TE(e),{host:o,port:a}=tR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nR()}function TE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tR(t){const e=TE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ay(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ay(o)}}}function ay(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class NE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
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
 */async function Ps(t,e){return NP(t,"POST","/v1/accounts:signInWithIdp",mE(t,e))}/**
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
 */const rR="http://localhost";class ji extends NE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:rR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
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
 */class Cr extends nl{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
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
 */class xn extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class kr extends nl{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class xr extends nl{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=ly(r);return new Qs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ly(r);return new Qs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ly(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class nc extends ii{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nc(e,n,r,i)}}function PE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(t,s,e,r):s})}async function iR(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",r)}/**
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
 */async function sR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Aa(t,PE(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Nm(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Qs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
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
 */async function oR(t,e,n=!1){const r="signIn",i=await PE(t,r,e),s=await Qs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function aR(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function lR(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function RE(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function uR(t){return Rt(t).signOut()}const rc="__sak";/**
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
 */class AE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cR(){const t=Ct();return Pm(t)||Wc(t)}const dR=1e3,fR=10;class OE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cR()&&BP(),this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$P()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OE.type="LOCAL";const hR=OE;/**
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
 */class DE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DE.type="SESSION";const LE=DE;/**
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
 */function pR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
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
 */class mR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Am("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function gR(t){Rn().location.href=t}/**
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
 */function ME(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function vR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _R(){return ME()?self:null}/**
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
 */const FE="firebaseLocalStorageDb",wR=1,ic="firebaseLocalStorage",jE="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function ER(){const t=indexedDB.deleteDatabase(FE);return new rl(t).toPromise()}function xh(){const t=indexedDB.open(FE,wR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ic,{keyPath:jE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ic)?e(r):(r.close(),await ER(),e(await xh()))})})}async function uy(t,e,n){const r=Yc(t,!0).put({[jE]:e,value:n});return new rl(r).toPromise()}async function SR(t,e){const n=Yc(t,!1).get(e),r=await new rl(n).toPromise();return r===void 0?null:r.value}function cy(t,e){const n=Yc(t,!0).delete(e);return new rl(n).toPromise()}const CR=800,kR=3;class UE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ME()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(_R()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vR(),!this.activeServiceWorker)return;this.sender=new mR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await uy(e,rc,"1"),await cy(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yc(i,!1).getAll();return new rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UE.type="LOCAL";const xR=UE;new el(3e4,6e4);/**
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
 */function zE(t,e){return e?qn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Om extends NE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bR(t){return oR(t.auth,new Om(t),t.bypassAuthState)}function IR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),sR(n,new Om(t),t.bypassAuthState)}async function TR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),iR(n,new Om(t),t.bypassAuthState)}/**
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
 */class VE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bR;case"linkViaPopup":case"linkViaRedirect":return TR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:An(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NR=new el(2e3,1e4);async function PR(t,e,n){const r=Hc(t);CP(t,e,Rm);const i=zE(r,n);return new yi(r,"signInViaPopup",e,i).executeNotNull()}class yi extends VE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NR.get())};e()}}yi.currentPopupAction=null;/**
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
 */const RR="pendingRedirect",ou=new Map;class AR extends VE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ou.get(this.auth._key());if(!e){try{const r=await OR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ou.set(this.auth._key(),e)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OR(t,e){const n=MR(e),r=LR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DR(t,e){ou.set(t._key(),e)}function LR(t){return qn(t._redirectPersistence)}function MR(t){return su(RR,t.config.apiKey,t.name)}async function FR(t,e,n=!1){const r=Hc(t),i=zE(r,e),o=await new AR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jR=10*60*1e3;class UR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$E(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jR&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $E({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $E(t);default:return!1}}/**
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
 */async function VR(t,e={}){return tl(t,"GET","/v1/projects",e)}/**
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
 */const $R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BR=/^https?/;async function WR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VR(t);for(const n of e)try{if(HR(n))return}catch{}An(t,"unauthorized-domain")}function HR(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BR.test(n))return!1;if($R.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GR=new el(3e4,6e4);function fy(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YR(t){return new Promise((e,n)=>{var r,i,s;function o(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),n(Pn(t,"network-request-failed"))},timeout:GR.get()})}if(!((i=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rn().gapi)===null||s===void 0)&&s.load)o();else{const a=XP("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},QP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw au=null,e})}let au=null;function KR(t){return au=au||YR(t),au}/**
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
 */const qR=new el(5e3,15e3),QR="__/auth/iframe",XR="emulator/auth/iframe",JR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tm(e,XR):`https://${t.config.authDomain}/${QR}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=ZR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function tA(t){const e=await KR(t),n=Rn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:eA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Rn().setTimeout(()=>{s(o)},qR.get());function l(){Rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const nA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,iA=600,sA="_blank",oA="http://localhost";class hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aA(t,e,n,r=rA,i=iA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=EE(u)?sA:n),wE(u)&&(e=e||oA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(VP(u)&&a!=="_self")return lA(e||"",a),new hy(null);const d=window.open(e||"",a,c);re(d,t,"popup-blocked");try{d.focus()}catch{}return new hy(d)}function lA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uA="__/auth/handler",cA="emulator/auth/handler",dA=encodeURIComponent("fac");async function py(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof Rm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof nl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${dA}=${encodeURIComponent(l)}`:"";return`${fA(t)}?${ro(a).slice(1)}${u}`}function fA({config:t}){return t.emulator?Tm(t,cA):`https://${t.authDomain}/${uA}`}/**
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
 */const Qd="webStorageSupport";class hA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=FR,this._overrideRedirectResult=DR}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await py(e,n,r,kh(),i);return aA(e,o,Am())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await py(e,n,r,kh(),i);return gR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tA(e),r=new UR(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qd,{type:Qd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qd];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bE()||Pm()||Wc()}}const pA=hA;var my="@firebase/auth",gy="1.3.0";/**
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
 */class mA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vA(t){$s(new Oi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IE(t)},u=new KP(r,i,s,l);return ZP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new Oi("auth-internal",e=>{const n=Hc(e.getProvider("auth").getImmediate());return(r=>new mA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(my,gy,gA(t)),Vr(my,gy,"esm2017")}/**
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
 */const yA=5*60,_A=Uw("authIdTokenMaxAge")||yA;let vy=null;const wA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_A)return;const i=n==null?void 0:n.token;vy!==i&&(vy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function EA(t=Gw()){const e=Hp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JP(t,{popupRedirectResolver:pA,persistence:[xR,hR,LE]}),r=Uw("authTokenSyncURL");if(r){const s=wA(r);lR(n,s,()=>s(n.currentUser)),aR(n,o=>s(o))}const i=Fw("auth");return i&&eR(n,`http://${i}`),n}vA("Browser");const SA={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ"},BE=Hw(SA),CA=cE(BE),kA=ct(cE()),mt=CA,Ui=EA(BE);/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const yy="popstate";function xA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Da("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vi(i)}return IA(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bA(){return Math.random().toString(36).substr(2,8)}function _y(t,e){return{usr:t.state,key:t.key,idx:e}}function Da(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ur(e):e,{state:n,key:e&&e.key||r||bA()})}function Vi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ur(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ye.Pop;let x=c(),v=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:v})}function f(x,v){a=Ye.Push;let h=Da(_.location,x,v);n&&n(h,x),u=c()+1;let g=_y(h,u),p=_.createHref(h);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function m(x,v){a=Ye.Replace;let h=Da(_.location,x,v);n&&n(h,x),u=c();let g=_y(h,u),p=_.createHref(h);o.replaceState(g,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function y(x){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof x=="string"?x:Vi(x);return ue(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let _={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yy,d),l=x,()=>{i.removeEventListener(yy,d),l=null}},createHref(x){return e(i,x)},createURL:y,encodeLocation(x){let v=y(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(x){return o.go(x)}};return _}var Ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ke||(Ke={}));const TA=new Set(["lazy","caseSensitive","path","id","index","children"]);function NA(t){return t.index===!0}function bh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),NA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=bh(i.children,e,o,r)),l}})}function ps(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ur(e):e,i=lo(r.pathname||"/",n);if(i==null)return null;let s=WE(t);RA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zA(s[a],BA(i));return o}function PA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function WE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),WE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:jA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of HE(s.path))i(s,o,l)}),e}function HE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=HE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function RA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:UA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AA=/^:\w+$/,OA=3,DA=2,LA=1,MA=10,FA=-2,wy=t=>t==="*";function jA(t,e){let n=t.split("/"),r=n.length;return n.some(wy)&&(r+=FA),e&&(r+=DA),n.filter(i=>!wy(i)).reduce((i,s)=>i+(AA.test(s)?OA:s===""?LA:MA),r)}function UA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:YA(Jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return s}function VA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$A(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=WA(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BA(t){try{return decodeURI(t)}catch(e){return zi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function WA(t,e){try{return decodeURIComponent(t)}catch(n){return zi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function lo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ur(t):t;return{pathname:n?n.startsWith("/")?n:GA(n,e):e,search:KA(r),hash:qA(i)}}function GA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ur(t):(i=Fe({},t),ue(!i.pathname||!i.pathname.includes("?"),Xd("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Xd("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Xd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=HA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Jn=t=>t.join("/").replace(/\/\/+/g,"/"),YA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Lm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function GE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const YE=["post","put","patch","delete"],QA=new Set(YE),XA=["get",...YE],JA=new Set(XA),ZA=new Set([301,302,303,307,308]),e2=new Set([307,308]),Jd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},t2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},To={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},KE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n2=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),qE="remix-router-transitions";function r2(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;i=T=>({hasErrorBoundary:b(T)})}else i=n2;let s={},o=bh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,m=null,y=null,_=t.hydrationData!=null,x=ps(o,t.history.location,l),v=null;if(x==null){let b=qt(404,{pathname:t.history.location.pathname}),{matches:T,route:A}=Ty(o);x=T,v={[A.id]:b}}let h=!x.some(b=>b.route.lazy)&&(!x.some(b=>b.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:x,initialized:h,navigation:Jd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},C=Ye.Pop,N=!1,k,P=!1,U=new Map,M=null,Z=!1,Q=!1,ee=[],ge=[],ae=new Map,He=0,Qe=-1,F=new Map,Y=new Set,q=new Map,pe=new Map,ve=new Map,En=!1;function Kt(){if(c=t.history.listen(b=>{let{action:T,location:A,delta:V}=b;if(En){En=!1;return}zi(ve.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=ml({currentLocation:p.location,nextLocation:A,historyAction:T});if(ne&&V!=null){En=!0,t.history.go(V*-1),pr(ne,{state:"blocked",location:A,proceed(){pr(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(V)},reset(){let te=new Map(p.blockers);te.set(ne,To),ke({blockers:te})}});return}return Fn(T,A)}),n){p2(e,U);let b=()=>m2(e,U);e.addEventListener("pagehide",b),M=()=>e.removeEventListener("pagehide",b)}return p.initialized||Fn(Ye.Pop,p.location),g}function ai(){c&&c(),M&&M(),d.clear(),k&&k.abort(),p.fetchers.forEach((b,T)=>D(T)),p.blockers.forEach((b,T)=>Ki(T))}function zt(b){return d.add(b),()=>d.delete(b)}function ke(b,T){p=Fe({},p,b),d.forEach(A=>A(p,{unstable_viewTransitionOpts:T}))}function Mn(b,T){var A,V;let ne=p.actionData!=null&&p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((A=b.state)==null?void 0:A._isRedirect)!==!0,te;T.actionData?Object.keys(T.actionData).length>0?te=T.actionData:te=null:ne?te=p.actionData:te=null;let ie=T.loaderData?Iy(p.loaderData,T.loaderData,T.matches||[],T.errors):p.loaderData,X=p.blockers;X.size>0&&(X=new Map(X),X.forEach((Me,fe)=>X.set(fe,To)));let K=N===!0||p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&((V=b.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),Z||C===Ye.Pop||(C===Ye.Push?t.history.push(b,b.state):C===Ye.Replace&&t.history.replace(b,b.state));let Se;if(C===Ye.Pop){let Me=U.get(p.location.pathname);Me&&Me.has(b.pathname)?Se={currentLocation:p.location,nextLocation:b}:U.has(b.pathname)&&(Se={currentLocation:b,nextLocation:p.location})}else if(P){let Me=U.get(p.location.pathname);Me?Me.add(b.pathname):(Me=new Set([b.pathname]),U.set(p.location.pathname,Me)),Se={currentLocation:p.location,nextLocation:b}}ke(Fe({},T,{actionData:te,loaderData:ie,historyAction:C,location:b,initialized:!0,navigation:Jd,revalidation:"idle",restoreScrollPosition:rg(b,T.matches||p.matches),preventScrollReset:K,blockers:X}),Se),C=Ye.Pop,N=!1,P=!1,Z=!1,Q=!1,ee=[],ge=[]}async function fo(b,T){if(typeof b=="number"){t.history.go(b);return}let A=Ih(p.location,p.matches,l,u.v7_prependBasename,b,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:V,submission:ne,error:te}=Ey(u.v7_normalizeFormMethod,!1,A,T),ie=p.location,X=Da(p.location,V,T&&T.state);X=Fe({},X,t.history.encodeLocation(X));let K=T&&T.replace!=null?T.replace:void 0,Se=Ye.Push;K===!0?Se=Ye.Replace:K===!1||ne!=null&&dn(ne.formMethod)&&ne.formAction===p.location.pathname+p.location.search&&(Se=Ye.Replace);let Me=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,fe=ml({currentLocation:ie,nextLocation:X,historyAction:Se});if(fe){pr(fe,{state:"blocked",location:X,proceed(){pr(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),fo(b,T)},reset(){let Ce=new Map(p.blockers);Ce.set(fe,To),ke({blockers:Ce})}});return}return await Fn(Se,X,{submission:ne,pendingError:te,preventScrollReset:Me,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition})}function fl(){if(B(),ke({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Fn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Fn(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Fn(b,T,A){k&&k.abort(),k=null,C=b,Z=(A&&A.startUninterruptedRevalidation)===!0,XS(p.location,p.matches),N=(A&&A.preventScrollReset)===!0,P=(A&&A.enableViewTransition)===!0;let V=a||o,ne=A&&A.overrideNavigation,te=ps(V,T,l);if(!te){let Ce=qt(404,{pathname:T.pathname}),{matches:Ge,route:li}=Ty(V);qi(),Mn(T,{matches:Ge,loaderData:{},errors:{[li.id]:Ce}});return}if(p.initialized&&!Q&&l2(p.location,T)&&!(A&&A.submission&&dn(A.submission.formMethod))){Mn(T,{matches:te});return}k=new AbortController;let ie=Po(t.history,T,k.signal,A&&A.submission),X,K;if(A&&A.pendingError)K={[ms(te).route.id]:A.pendingError};else if(A&&A.submission&&dn(A.submission.formMethod)){let Ce=await hl(ie,T,A.submission,te,{replace:A.replace});if(Ce.shortCircuited)return;X=Ce.pendingActionData,K=Ce.pendingActionError,ne=Zd(T,A.submission),ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:Se,loaderData:Me,errors:fe}=await pl(ie,T,te,ne,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,X,K);Se||(k=null,Mn(T,Fe({matches:te},X?{actionData:X}:{},{loaderData:Me,errors:fe})))}async function hl(b,T,A,V,ne){ne===void 0&&(ne={}),B();let te=f2(T,A);ke({navigation:te});let ie,X=Nh(V,T);if(!X.route.action&&!X.route.lazy)ie={type:Ke.error,error:qt(405,{method:b.method,pathname:T.pathname,routeId:X.route.id})};else if(ie=await No("action",b,X,V,s,i,l),b.signal.aborted)return{shortCircuited:!0};if(Rs(ie)){let K;return ne&&ne.replace!=null?K=ne.replace:K=ie.location===p.location.pathname+p.location.search,await I(p,ie,{submission:A,replace:K}),{shortCircuited:!0}}if(Zo(ie)){let K=ms(V,X.route.id);return(ne&&ne.replace)!==!0&&(C=Ye.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:ie.error}}}if(_i(ie))throw qt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:ie.data}}}async function pl(b,T,A,V,ne,te,ie,X,K){let Se=V||Zd(T,ne),Me=ne||te||Ry(Se),fe=a||o,[Ce,Ge]=Sy(t.history,p,A,Me,T,Q,ee,ge,q,Y,fe,l,X,K);if(qi(_e=>!(A&&A.some(an=>an.route.id===_e))||Ce&&Ce.some(an=>an.route.id===_e)),Qe=++He,Ce.length===0&&Ge.length===0){let _e=Oe();return Mn(T,Fe({matches:A,loaderData:{},errors:K||null},X?{actionData:X}:{},_e?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!Z){Ge.forEach(an=>{let mr=p.fetchers.get(an.key),cd=Ro(void 0,mr?mr.data:void 0);p.fetchers.set(an.key,cd)});let _e=X||p.actionData;ke(Fe({navigation:Se},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Ge.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ge.forEach(_e=>{ae.has(_e.key)&&W(_e.key),_e.controller&&ae.set(_e.key,_e.controller)});let li=()=>Ge.forEach(_e=>W(_e.key));k&&k.signal.addEventListener("abort",li);let{results:ui,loaderResults:po,fetcherResults:od}=await R(p.matches,A,Ce,Ge,b);if(b.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",li),Ge.forEach(_e=>ae.delete(_e.key));let Un=Ny(ui);if(Un){if(Un.idx>=Ce.length){let _e=Ge[Un.idx-Ce.length].key;Y.add(_e)}return await I(p,Un.result,{replace:ie}),{shortCircuited:!0}}let{loaderData:zn,errors:gl}=by(p,A,Ce,po,K,Ge,od,pe);pe.forEach((_e,an)=>{_e.subscribe(mr=>{(mr||_e.done)&&pe.delete(an)})});let ad=Oe(),ld=jn(Qe),ud=ad||ld||Ge.length>0;return Fe({loaderData:zn,errors:gl},ud?{fetchers:new Map(p.fetchers)}:{})}function rd(b){return p.fetchers.get(b)||t2}function tg(b,T,A,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(b)&&W(b);let ne=a||o,te=Ih(p.location,p.matches,l,u.v7_prependBasename,A,T,V==null?void 0:V.relative),ie=ps(ne,te,l);if(!ie){j(b,T,qt(404,{pathname:te}));return}let{path:X,submission:K,error:Se}=Ey(u.v7_normalizeFormMethod,!0,te,V);if(Se){j(b,T,Se);return}let Me=Nh(ie,X);if(N=(V&&V.preventScrollReset)===!0,K&&dn(K.formMethod)){ng(b,T,X,Me,ie,K);return}q.set(b,{routeId:T,path:X}),E(b,T,X,Me,ie,K)}async function ng(b,T,A,V,ne,te){if(B(),q.delete(b),!V.route.action&&!V.route.lazy){let Ze=qt(405,{method:te.formMethod,pathname:A,routeId:T});j(b,T,Ze);return}let ie=p.fetchers.get(b),X=h2(te,ie);p.fetchers.set(b,X),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=Po(t.history,A,K.signal,te);ae.set(b,K);let Me=He,fe=await No("action",Se,V,ne,s,i,l);if(Se.signal.aborted){ae.get(b)===K&&ae.delete(b);return}if(Rs(fe))if(ae.delete(b),Qe>Me){let Ze=Zi(void 0);p.fetchers.set(b,Ze),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(b);let Ze=Ro(te);return p.fetchers.set(b,Ze),ke({fetchers:new Map(p.fetchers)}),I(p,fe,{fetcherSubmission:te})}if(Zo(fe)){j(b,T,fe.error);return}if(_i(fe))throw qt(400,{type:"defer-action"});let Ce=p.navigation.location||p.location,Ge=Po(t.history,Ce,K.signal),li=a||o,ui=p.navigation.state!=="idle"?ps(li,p.navigation.location,l):p.matches;ue(ui,"Didn't find any matches after fetcher action");let po=++He;F.set(b,po);let od=Ro(te,fe.data);p.fetchers.set(b,od);let[Un,zn]=Sy(t.history,p,ui,te,Ce,Q,ee,ge,q,Y,li,l,{[V.route.id]:fe.data},void 0);zn.filter(Ze=>Ze.key!==b).forEach(Ze=>{let mo=Ze.key,ig=p.fetchers.get(mo),ZS=Ro(void 0,ig?ig.data:void 0);p.fetchers.set(mo,ZS),ae.has(mo)&&W(mo),Ze.controller&&ae.set(mo,Ze.controller)}),ke({fetchers:new Map(p.fetchers)});let gl=()=>zn.forEach(Ze=>W(Ze.key));K.signal.addEventListener("abort",gl);let{results:ad,loaderResults:ld,fetcherResults:ud}=await R(p.matches,ui,Un,zn,Ge);if(K.signal.aborted)return;K.signal.removeEventListener("abort",gl),F.delete(b),ae.delete(b),zn.forEach(Ze=>ae.delete(Ze.key));let _e=Ny(ad);if(_e){if(_e.idx>=Un.length){let Ze=zn[_e.idx-Un.length].key;Y.add(Ze)}return I(p,_e.result)}let{loaderData:an,errors:mr}=by(p,p.matches,Un,ld,void 0,zn,ud,pe);if(p.fetchers.has(b)){let Ze=Zi(fe.data);p.fetchers.set(b,Ze)}let cd=jn(po);p.navigation.state==="loading"&&po>Qe?(ue(C,"Expected pending action"),k&&k.abort(),Mn(p.navigation.location,{matches:ui,loaderData:an,errors:mr,fetchers:new Map(p.fetchers)})):(ke(Fe({errors:mr,loaderData:Iy(p.loaderData,an,ui,mr)},cd||zn.length>0?{fetchers:new Map(p.fetchers)}:{})),Q=!1)}async function E(b,T,A,V,ne,te){let ie=p.fetchers.get(b),X=Ro(te,ie?ie.data:void 0);p.fetchers.set(b,X),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=Po(t.history,A,K.signal);ae.set(b,K);let Me=He,fe=await No("loader",Se,V,ne,s,i,l);if(_i(fe)&&(fe=await JE(fe,Se.signal,!0)||fe),ae.get(b)===K&&ae.delete(b),Se.signal.aborted)return;if(Rs(fe))if(Qe>Me){let Ge=Zi(void 0);p.fetchers.set(b,Ge),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(b),await I(p,fe);return}if(Zo(fe)){let Ge=ms(p.matches,T);p.fetchers.delete(b),ke({fetchers:new Map(p.fetchers),errors:{[Ge.route.id]:fe.error}});return}ue(!_i(fe),"Unhandled fetcher deferred data");let Ce=Zi(fe.data);p.fetchers.set(b,Ce),ke({fetchers:new Map(p.fetchers)})}async function I(b,T,A){let{submission:V,fetcherSubmission:ne,replace:te}=A===void 0?{}:A;T.revalidate&&(Q=!0);let ie=Da(b.location,T.location,{_isRedirect:!0});if(ue(ie,"Expected a location on the redirect navigation"),n){let Ce=!1;if(T.reloadDocument)Ce=!0;else if(KE.test(T.location)){const Ge=t.history.createURL(T.location);Ce=Ge.origin!==e.location.origin||lo(Ge.pathname,l)==null}if(Ce){te?e.location.replace(T.location):e.location.assign(T.location);return}}k=null;let X=te===!0?Ye.Replace:Ye.Push,{formMethod:K,formAction:Se,formEncType:Me}=b.navigation;!V&&!ne&&K&&Se&&Me&&(V=Ry(b.navigation));let fe=V||ne;if(e2.has(T.status)&&fe&&dn(fe.formMethod))await Fn(X,ie,{submission:Fe({},fe,{formAction:T.location}),preventScrollReset:N});else{let Ce=Zd(ie,V);await Fn(X,ie,{overrideNavigation:Ce,fetcherSubmission:ne,preventScrollReset:N})}}async function R(b,T,A,V,ne){let te=await Promise.all([...A.map(K=>No("loader",ne,K,T,s,i,l)),...V.map(K=>K.matches&&K.match&&K.controller?No("loader",Po(t.history,K.path,K.controller.signal),K.match,K.matches,s,i,l):{type:Ke.error,error:qt(404,{pathname:K.path})})]),ie=te.slice(0,A.length),X=te.slice(A.length);return await Promise.all([Py(b,A,ie,ie.map(()=>ne.signal),!1,p.loaderData),Py(b,V.map(K=>K.match),X,V.map(K=>K.controller?K.controller.signal:null),!0)]),{results:te,loaderResults:ie,fetcherResults:X}}function B(){Q=!0,ee.push(...qi()),q.forEach((b,T)=>{ae.has(T)&&(ge.push(T),W(T))})}function j(b,T,A){let V=ms(p.matches,T);D(b),ke({errors:{[V.route.id]:A},fetchers:new Map(p.fetchers)})}function D(b){let T=p.fetchers.get(b);ae.has(b)&&!(T&&T.state==="loading"&&F.has(b))&&W(b),q.delete(b),F.delete(b),Y.delete(b),p.fetchers.delete(b)}function W(b){let T=ae.get(b);ue(T,"Expected fetch controller: "+b),T.abort(),ae.delete(b)}function Te(b){for(let T of b){let A=rd(T),V=Zi(A.data);p.fetchers.set(T,V)}}function Oe(){let b=[],T=!1;for(let A of Y){let V=p.fetchers.get(A);ue(V,"Expected fetcher: "+A),V.state==="loading"&&(Y.delete(A),b.push(A),T=!0)}return Te(b),T}function jn(b){let T=[];for(let[A,V]of F)if(V<b){let ne=p.fetchers.get(A);ue(ne,"Expected fetcher: "+A),ne.state==="loading"&&(W(A),F.delete(A),T.push(A))}return Te(T),T.length>0}function id(b,T){let A=p.blockers.get(b)||To;return ve.get(b)!==T&&ve.set(b,T),A}function Ki(b){p.blockers.delete(b),ve.delete(b)}function pr(b,T){let A=p.blockers.get(b)||To;ue(A.state==="unblocked"&&T.state==="blocked"||A.state==="blocked"&&T.state==="blocked"||A.state==="blocked"&&T.state==="proceeding"||A.state==="blocked"&&T.state==="unblocked"||A.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+T.state);let V=new Map(p.blockers);V.set(b,T),ke({blockers:V})}function ml(b){let{currentLocation:T,nextLocation:A,historyAction:V}=b;if(ve.size===0)return;ve.size>1&&zi(!1,"A router only supports one blocker at a time");let ne=Array.from(ve.entries()),[te,ie]=ne[ne.length-1],X=p.blockers.get(te);if(!(X&&X.state==="proceeding")&&ie({currentLocation:T,nextLocation:A,historyAction:V}))return te}function qi(b){let T=[];return pe.forEach((A,V)=>{(!b||b(V))&&(A.cancel(),T.push(V),pe.delete(V))}),T}function sd(b,T,A){if(f=b,y=T,m=A||null,!_&&p.navigation===Jd){_=!0;let V=rg(p.location,p.matches);V!=null&&ke({restoreScrollPosition:V})}return()=>{f=null,y=null,m=null}}function ho(b,T){return m&&m(b,T.map(V=>PA(V,p.loaderData)))||b.key}function XS(b,T){if(f&&y){let A=ho(b,T);f[A]=y()}}function rg(b,T){if(f){let A=ho(b,T),V=f[A];if(typeof V=="number")return V}return null}function JS(b){s={},a=bh(b,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},get window(){return e},initialize:Kt,subscribe:zt,enableScrollRestoration:sd,navigate:fo,fetch:tg,revalidate:fl,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:rd,deleteFetcher:D,dispose:ai,getBlocker:id,deleteBlocker:Ki,_internalFetchControllers:ae,_internalActiveDeferreds:pe,_internalSetRoutes:JS},g}function i2(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Ih(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Dm(i||".",Kc(a).map(c=>c.pathnameBase),lo(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Mm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Jn([n,u.pathname])),Vi(u)}function Ey(t,e,n,r){if(!r||!i2(r))return{path:n};if(r.formMethod&&!d2(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=XE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!dn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[_,x]=y;return""+m+_+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!dn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Th(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Th(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=xy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=xy(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(dn(c.formMethod))return{path:n,submission:c};let d=ur(n);return e&&d.search&&Mm(d.search)&&l.append("index",""),d.search="?"+l,{path:Vi(d),submission:c}}function s2(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Sy(t,e,n,r,i,s,o,a,l,u,c,d,f,m){let y=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),x=t.createURL(i),v=m?Object.keys(m)[0]:void 0,g=s2(n,v).filter((C,N)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(o2(e.loaderData,e.matches[N],C)||o.some(U=>U===C.route.id))return!0;let k=e.matches[N],P=C;return Cy(C,Fe({currentUrl:_,currentParams:k.params,nextUrl:x,nextParams:P.params},r,{actionResult:y,defaultShouldRevalidate:s||_.pathname+_.search===x.pathname+x.search||_.search!==x.search||QE(k,P)}))}),p=[];return l.forEach((C,N)=>{if(!n.some(Z=>Z.route.id===C.routeId))return;let k=ps(c,C.path,d);if(!k){p.push({key:N,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(N),U=Nh(k,C.path),M=!1;u.has(N)?M=!1:a.includes(N)?M=!0:P&&P.state!=="idle"&&P.data===void 0?M=s:M=Cy(U,Fe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),M&&p.push({key:N,routeId:C.routeId,path:C.path,matches:k,match:U,controller:new AbortController})}),[g,p]}function o2(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function QE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Cy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function ky(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";zi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!TA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function No(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=y=>{let _,x=new Promise((v,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),x])};try{let y=n.route[t];if(n.route.lazy)if(y){let _,x=await Promise.all([d(y).catch(v=>{_=v}),ky(n.route,s,i)]);if(_)throw _;u=x[0]}else if(await ky(n.route,s,i),y=n.route[t],y)u=await d(y);else if(t==="action"){let _=new URL(e.url),x=_.pathname+_.search;throw qt(405,{method:e.method,pathname:x,routeId:n.route.id})}else return{type:Ke.data,data:void 0};else if(y)u=await d(y);else{let _=new URL(e.url),x=_.pathname+_.search;throw qt(404,{pathname:x})}ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Ke.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(c2(u)){let y=u.status;if(ZA.has(y)){let v=u.headers.get("Location");if(ue(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!KE.test(v))v=Ih(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let h=new URL(e.url),g=v.startsWith("//")?new URL(h.protocol+v):new URL(v),p=lo(g.pathname,o)!=null;g.origin===h.origin&&p&&(v=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:Ke.redirect,status:y,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ke.error?Ke.error:Ke.data,response:u};let _,x=u.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?_=await u.json():_=await u.text(),l===Ke.error?{type:l,error:new Lm(y,u.statusText,_),headers:u.headers}:{type:Ke.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ke.error)return{type:l,error:u};if(u2(u)){var f,m;return{type:Ke.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ke.data,data:u}}function Po(t,e,n,r){let i=t.createURL(XE(e)).toString(),s={signal:n};if(r&&dn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Th(r.formData):s.body=r.formData}return new Request(i,s)}function Th(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function xy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function a2(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ue(!Rs(c),"Cannot handle redirect results in processLoaderData"),Zo(c)){let m=ms(t,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=y),s[f]=void 0,l||(l=!0,a=GE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else _i(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function by(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=a2(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(m&&m.signal.aborted))if(Zo(y)){let _=ms(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Fe({},u,{[_.route.id]:y.error})),t.fetchers.delete(d)}else if(Rs(y))ue(!1,"Unhandled fetcher revalidation redirect");else if(_i(y))ue(!1,"Unhandled fetcher deferred data");else{let _=Zi(y.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function Iy(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ms(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Ty(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Lm(t||500,o,new Error(a),!0)}function Ny(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Rs(n))return{result:n,idx:e}}}function XE(t){let e=typeof t=="string"?ur(t):t;return Vi(Fe({},e,{hash:""}))}function l2(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function _i(t){return t.type===Ke.deferred}function Zo(t){return t.type===Ke.error}function Rs(t){return(t&&t.type)===Ke.redirect}function u2(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function c2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function d2(t){return JA.has(t.toLowerCase())}function dn(t){return QA.has(t.toLowerCase())}async function Py(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!QE(u,l)&&(s&&s[l.route.id])!==void 0;if(_i(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await JE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function JE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ke.error,error:i}}return{type:Ke.data,data:t.deferredData.data}}}function Mm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Nh(t,e){let n=typeof e=="string"?ur(e).search:e.search;if(t[t.length-1].route.index&&Mm(n||""))return t[t.length-1];let r=Kc(t);return r[r.length-1]}function Ry(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Zd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function f2(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ro(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function h2(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Zi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function p2(t,e){try{let n=t.sessionStorage.getItem(qE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function m2(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(qE,JSON.stringify(n))}catch(r){zi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sc.apply(this,arguments)}const qc=S.createContext(null),ZE=S.createContext(null),uo=S.createContext(null),Qc=S.createContext(null),cr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),eS=S.createContext(null);function g2(t,e){let{relative:n}=e===void 0?{}:e;il()||ue(!1);let{basename:r,navigator:i}=S.useContext(uo),{hash:s,pathname:o,search:a}=nS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function il(){return S.useContext(Qc)!=null}function Xc(){return il()||ue(!1),S.useContext(Qc).location}function tS(t){S.useContext(uo).static||S.useLayoutEffect(t)}function At(){let{isDataRoute:t}=S.useContext(cr);return t?P2():v2()}function v2(){il()||ue(!1);let t=S.useContext(qc),{basename:e,navigator:n}=S.useContext(uo),{matches:r}=S.useContext(cr),{pathname:i}=Xc(),s=JSON.stringify(Kc(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return tS(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Dm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Jn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const y2=S.createContext(null);function _2(t){let e=S.useContext(cr).outlet;return e&&S.createElement(y2.Provider,{value:t},e)}function dr(){let{matches:t}=S.useContext(cr),e=t[t.length-1];return e?e.params:{}}function nS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(cr),{pathname:i}=Xc(),s=JSON.stringify(Kc(r).map(o=>o.pathnameBase));return S.useMemo(()=>Dm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function w2(t,e,n){il()||ue(!1);let{navigator:r}=S.useContext(uo),{matches:i}=S.useContext(cr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Xc(),u;if(e){var c;let _=typeof e=="string"?ur(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ue(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=ps(t,{pathname:f}),y=x2(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Jn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Jn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?S.createElement(Qc.Provider,{value:{location:sc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ye.Pop}},y):y}function E2(){let t=N2(),e=GE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const S2=S.createElement(E2,null);class C2 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(cr.Provider,{value:this.props.routeContext},S.createElement(eS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k2(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(cr.Provider,{value:e},r)}function x2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||S2);let f=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=d:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(k2,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(C2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var rS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rS||{}),oc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(oc||{});function b2(t){let e=S.useContext(qc);return e||ue(!1),e}function I2(t){let e=S.useContext(ZE);return e||ue(!1),e}function T2(t){let e=S.useContext(cr);return e||ue(!1),e}function iS(t){let e=T2(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function N2(){var t;let e=S.useContext(eS),n=I2(oc.UseRouteError),r=iS(oc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function P2(){let{router:t}=b2(rS.UseNavigateStable),e=iS(oc.UseNavigateStable),n=S.useRef(!1);return tS(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sc({fromRouteId:e},s)))},[t,e])}function sS(t){return _2(t.context)}function R2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1}=t;il()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ur(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,y=S.useMemo(()=>{let _=lo(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return y==null?null:S.createElement(uo.Provider,{value:l},S.createElement(Qc.Provider,{children:n,value:y}))}new Promise(()=>{});function A2(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},La.apply(this,arguments)}function O2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function D2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function L2(t,e){return t.button===0&&(!e||e==="_self")&&!D2(t)}const M2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function F2(t,e){return r2({basename:e==null?void 0:e.basename,future:La({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:xA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||j2(),routes:t,mapRouteProperties:A2,window:e==null?void 0:e.window}).initialize()}function j2(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=La({},e,{errors:U2(e.errors)})),e}function U2(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Lm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const z2=S.createContext({isTransitioning:!1}),V2="startTransition",Ay=gC[V2];function $2(t){Ay?Ay(t):t()}class B2{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function W2(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),[o,a]=S.useState(),[l,u]=S.useState({isTransitioning:!1}),[c,d]=S.useState(),[f,m]=S.useState(),[y,_]=S.useState(),{v7_startTransition:x}=r||{},v=S.useCallback(N=>{x?$2(N):N()},[x]),h=S.useCallback((N,k)=>{let{unstable_viewTransitionOpts:P}=k;!P||n.window==null||typeof n.window.document.startViewTransition!="function"?v(()=>s(N)):f&&c?(c.resolve(),f.skipTransition(),_({state:N,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(a(N),u({isTransitioning:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[v,f,c,n.window]);S.useLayoutEffect(()=>n.subscribe(h),[n,h]),S.useEffect(()=>{l.isTransitioning&&d(new B2)},[l.isTransitioning]),S.useEffect(()=>{if(c&&o&&n.window){let N=o,k=c.promise,P=n.window.document.startViewTransition(async()=>{v(()=>s(N)),await k});P.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(P)}},[v,o,c,n.window]),S.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),S.useEffect(()=>{!l.isTransitioning&&y&&(a(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),_(void 0))},[l.isTransitioning,y]);let g=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:N=>n.navigate(N),push:(N,k,P)=>n.navigate(N,{state:k,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(N,k,P)=>n.navigate(N,{replace:!0,state:k,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[n]),p=n.basename||"/",C=S.useMemo(()=>({router:n,navigator:g,static:!1,basename:p}),[n,g,p]);return S.createElement(S.Fragment,null,S.createElement(qc.Provider,{value:C},S.createElement(ZE.Provider,{value:i},S.createElement(z2.Provider,{value:l},S.createElement(R2,{basename:p,location:i.location,navigationType:i.historyAction,navigator:g},i.initialized?S.createElement(H2,{routes:n.routes,state:i}):e)))),null)}function H2(t){let{routes:e,state:n}=t;return w2(e,void 0,n)}const G2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K2=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=O2(e,M2),{basename:m}=S.useContext(uo),y,_=!1;if(typeof u=="string"&&Y2.test(u)&&(y=u,G2))try{let g=new URL(window.location.href),p=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=lo(p.pathname,m);p.origin===g.origin&&C!=null?u=C+p.search+p.hash:_=!0}catch{}let x=g2(u,{relative:i}),v=q2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||v(g)}return S.createElement("a",La({},f,{href:y||x,onClick:_||s?r:h,ref:n,target:l}))});var Oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Oy||(Oy={}));var Dy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function q2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=At(),u=Xc(),c=nS(t,{relative:o});return S.useCallback(d=>{if(L2(d,n)){d.preventDefault();let f=r!==void 0?r:Vi(u)===Vi(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const Q2="/assets/logo_nav-e0cc088f.svg",X2="/assets/userIconDefault-0c6f2d29.jpg";function Qr({myUser:t,size:e="small",onClick:n}){const[r,i]=S.useState(null),s=At(),o={small:"w-8",medium:"w-10",large:"w-12"};function a(){n&&n(),s(`/user/${t==null?void 0:t.uid}`),console.log(t)}return S.useEffect(()=>{i(o[e])},[r,e,t]),w.jsx("img",{onClick:a,className:`${r} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`,src:t!=null&&t.photoUrl?t==null?void 0:t.photoUrl:X2})}const As={displayName:"Name",photoUrl:"https://picsum.photos/200",email:"default@default.com",ownerOfEvents:["Initial"],participateOfEvents:["Initial"],uid:"defaultUID"},Ln=S.createContext(As);function J2(){S.useState(!1);const t=S.useContext(Ln);return w.jsxs("nav",{className:"flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[w.jsx(K2,{to:"/",children:w.jsx("img",{src:Q2,alt:"",className:"h-4"})}),w.jsx(Qr,{myUser:t})]})}const Z2="/assets/home_icon-248acc6b.png";function eO(){const t=At();return w.jsxs("div",{className:"flex gap-2 text-themeWhite items-center h-16  mb-4",children:[w.jsx("div",{className:"bg-themePrimary shadow-md text-sm rounded-2xl h-16 w-full flex items-center justify-center p-2",children:"® Maciej Tomaszewski 2023"}),w.jsx("div",{className:"bg-themePrimary shadow-md rounded-2xl h-16 w-24 flex items-center justify-center cursor-pointer",onClick:()=>t("/"),children:w.jsx("img",{src:Z2,className:"w-5/12"})})]})}const lu={id:"defaultID",name:"defaultName",date:"25-01-2034",users:[{uid:"defaultUID",value:0,id:"defaultID"}],amount:77,whopaid:{uid:"defaultUID",value:0}},ut={id:"defaultID",name:"defaultName",owner:"defaultUID",date:"25-01-2034",users:["defaultUID"],payments:[lu]},si=S.createContext([ut]),oi=S.createContext([ut]),fr=S.createContext([As]),tO=S.createContext([ut]);function nO({children:t}){const[e,n]=S.useState([ut]),[r,i]=S.useState([ut]),[s,o]=S.useState(As),[a,l]=S.useState([As]),[u,c]=S.useState([ut]);async function d(_){await Xo(ct(mt,`/users/${_}`),x=>{if(x.exists()){const v={...x.val(),uid:_};o(v)}})}async function f(){const _=uE(ct(mt,"users/"));await Xo(_,x=>{if(x.exists()){const h=Object.entries(x.val()).map(g=>({...g[1],uid:g[0]}));l(h)}else l([As])})}async function m(_,x){await Xo(ct(mt,`/events/${_}`),v=>{if(v.exists()){let h=function(p,C){if(console.log(C),p[0]===ut)return[C];if(p[0]!==ut){const N=p.filter(k=>k.id===_?null:k);return console.log(N),[...N,C]}return[ut]};const g=v.val();g.id=_,g.users!==void 0?g.users=Object.keys(g.users):g.users=[],g.payments!==void 0?g.payments=Object.values(g.payments):g.payments=[],x==="participateEvent"&&i(p=>h(p,g)),x==="ownerEvent"&&n(p=>h(p,g))}})}async function y(_){_.participateOfEvents.forEach(async x=>{m(x,"participateEvent")}),_.ownerOfEvents.forEach(async x=>{console.log(x),m(x,"ownerEvent")})}return S.useEffect(()=>{Ui.currentUser!=null&&(n([ut]),i([ut]),s.uid==="defaultUID"&&d(Ui.currentUser.uid),s.uid!=="defaultUID"&&y(s),f())},[s]),w.jsx(tO.Provider,{value:u,children:w.jsx(si.Provider,{value:e,children:w.jsx(oi.Provider,{value:r,children:w.jsx(Ln.Provider,{value:s,children:w.jsx(fr.Provider,{value:a,children:w.jsx(w.Fragment,{children:t})})})})})})}function rO(){return w.jsxs("main",{className:"text-themePrimary max-w-full w-full grid h-screenIOs grid-rows-AppTemplate pl-4 pr-4",children:[w.jsxs(nO,{children:[w.jsx(J2,{}),w.jsx("main",{className:"mt-2 pt-4 mb-2 pb-4 w-full overflow-y-scroll",children:w.jsx(sS,{})})]}),w.jsx(eO,{})]})}async function iO(t){return await cP(Ra(kA,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function sO({uid:t,displayName:e,email:n,photoURL:r}){await hs(ct(mt,`users/${t}`),{displayName:e,email:n,photoUrl:r,participateOfEvents:{0:"Initial"},ownerOfEvents:{0:"Initial"}}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var oO={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function Ly(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ly(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ly(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ac(t){"@babel/helpers - typeof";return ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ac(t)}function aO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function My(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function lO(t,e,n){return e&&My(t.prototype,e),n&&My(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fm(t,e){return cO(t)||fO(t,e)||oS(t,e)||pO()}function sl(t){return uO(t)||dO(t)||oS(t)||hO()}function uO(t){if(Array.isArray(t))return Ph(t)}function cO(t){if(Array.isArray(t))return t}function dO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function oS(t,e){if(t){if(typeof t=="string")return Ph(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ph(t,e)}}function Ph(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function hO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fy=function(){},jm={},aS={},lS=null,uS={mark:Fy,measure:Fy};try{typeof window<"u"&&(jm=window),typeof document<"u"&&(aS=document),typeof MutationObserver<"u"&&(lS=MutationObserver),typeof performance<"u"&&(uS=performance)}catch{}var mO=jm.navigator||{},jy=mO.userAgent,Uy=jy===void 0?"":jy,Xr=jm,Ae=aS,zy=lS,Fl=uS;Xr.document;var hr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",cS=~Uy.indexOf("MSIE")||~Uy.indexOf("Trident/"),jl,Ul,zl,Vl,$l,sr="___FONT_AWESOME___",Rh=16,dS="fa",fS="svg-inline--fa",$i="data-fa-i2svg",Ah="data-fa-pseudo-element",gO="data-fa-pseudo-element-pending",Um="data-prefix",zm="data-icon",Vy="fontawesome-i2svg",vO="async",yO=["HTML","HEAD","STYLE","SCRIPT"],hS=function(){try{return!0}catch{return!1}}(),Pe="classic",$e="sharp",Vm=[Pe,$e];function ol(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var Ma=ol((jl={},it(jl,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(jl,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),jl)),Fa=ol((Ul={},it(Ul,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(Ul,$e,{solid:"fass",regular:"fasr",light:"fasl"}),Ul)),ja=ol((zl={},it(zl,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(zl,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zl)),_O=ol((Vl={},it(Vl,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(Vl,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Vl)),wO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,pS="fa-layers-text",EO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,SO=ol(($l={},it($l,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it($l,$e,{900:"fass",400:"fasr",300:"fasl"}),$l)),mS=[1,2,3,4,5,6,7,8,9,10],CO=mS.concat([11,12,13,14,15,16,17,18,19,20]),kO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ua=new Set;Object.keys(Fa[Pe]).map(Ua.add.bind(Ua));Object.keys(Fa[$e]).map(Ua.add.bind(Ua));var xO=[].concat(Vm,sl(Ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wi.GROUP,wi.SWAP_OPACITY,wi.PRIMARY,wi.SECONDARY]).concat(mS.map(function(t){return"".concat(t,"x")})).concat(CO.map(function(t){return"w-".concat(t)})),ea=Xr.FontAwesomeConfig||{};function bO(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function IO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var TO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];TO.forEach(function(t){var e=Fm(t,2),n=e[0],r=e[1],i=IO(bO(n));i!=null&&(ea[r]=i)})}var gS={styleDefault:"solid",familyDefault:"classic",cssPrefix:dS,replacementClass:fS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ea.familyPrefix&&(ea.cssPrefix=ea.familyPrefix);var Xs=z(z({},gS),ea);Xs.autoReplaceSvg||(Xs.observeMutations=!1);var G={};Object.keys(gS).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Xs[t]=n,ta.forEach(function(r){return r(G)})},get:function(){return Xs[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Xs.cssPrefix=e,ta.forEach(function(n){return n(G)})},get:function(){return Xs.cssPrefix}});Xr.FontAwesomeConfig=G;var ta=[];function NO(t){return ta.push(t),function(){ta.splice(ta.indexOf(t),1)}}var yr=Rh,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function PO(t){if(!(!t||!hr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var RO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function za(){for(var t=12,e="";t-- >0;)e+=RO[Math.random()*62|0];return e}function co(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $m(t){return t.classList?co(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function vS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function AO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(vS(t[n]),'" ')},"").trim()}function Jc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Bm(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function OO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function DO(t){var e=t.transform,n=t.width,r=n===void 0?Rh:n,i=t.height,s=i===void 0?Rh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&cS?l+="translate(".concat(e.x/yr-r/2,"em, ").concat(e.y/yr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/yr,"em), calc(-50% + ").concat(e.y/yr,"em)) "):l+="translate(".concat(e.x/yr,"em, ").concat(e.y/yr,"em) "),l+="scale(".concat(e.size/yr*(e.flipX?-1:1),", ").concat(e.size/yr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var LO=`:root, :host {
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
}`;function yS(){var t=dS,e=fS,n=G.cssPrefix,r=G.replacementClass,i=LO;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var $y=!1;function ef(){G.autoAddCss&&!$y&&(PO(yS()),$y=!0)}var MO={mixout:function(){return{dom:{css:yS,insertCss:ef}}},hooks:function(){return{beforeDOMElementCreation:function(){ef()},beforeI2svg:function(){ef()}}}},or=Xr||{};or[sr]||(or[sr]={});or[sr].styles||(or[sr].styles={});or[sr].hooks||(or[sr].hooks={});or[sr].shims||(or[sr].shims=[]);var gn=or[sr],_S=[],FO=function t(){Ae.removeEventListener("DOMContentLoaded",t),lc=1,_S.map(function(e){return e()})},lc=!1;hr&&(lc=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),lc||Ae.addEventListener("DOMContentLoaded",FO));function jO(t){hr&&(lc?setTimeout(t,0):_S.push(t))}function al(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?vS(t):"<".concat(e," ").concat(AO(r),">").concat(s.map(al).join(""),"</").concat(e,">")}function By(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var UO=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},tf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?UO(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function zO(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Oh(t){var e=zO(t);return e.length===1?e[0].toString(16):null}function VO(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Wy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Dh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Wy(e);typeof gn.hooks.addPack=="function"&&!i?gn.hooks.addPack(t,Wy(e)):gn.styles[t]=z(z({},gn.styles[t]||{}),s),t==="fas"&&Dh("fa",e)}var Bl,Wl,Hl,gs=gn.styles,$O=gn.shims,BO=(Bl={},it(Bl,Pe,Object.values(ja[Pe])),it(Bl,$e,Object.values(ja[$e])),Bl),Wm=null,wS={},ES={},SS={},CS={},kS={},WO=(Wl={},it(Wl,Pe,Object.keys(Ma[Pe])),it(Wl,$e,Object.keys(Ma[$e])),Wl);function HO(t){return~xO.indexOf(t)}function GO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!HO(i)?i:null}var xS=function(){var e=function(s){return tf(gs,function(o,a,l){return o[l]=tf(a,s,{}),o},{})};wS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),ES=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),kS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in gs||G.autoFetchSvg,r=tf($O,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});SS=r.names,CS=r.unicodes,Wm=Zc(G.styleDefault,{family:G.familyDefault})};NO(function(t){Wm=Zc(t.styleDefault,{family:G.familyDefault})});xS();function Hm(t,e){return(wS[t]||{})[e]}function YO(t,e){return(ES[t]||{})[e]}function Ei(t,e){return(kS[t]||{})[e]}function bS(t){return SS[t]||{prefix:null,iconName:null}}function KO(t){var e=CS[t],n=Hm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jr(){return Wm}var Gm=function(){return{prefix:null,iconName:null,rest:[]}};function Zc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,i=Ma[r][t],s=Fa[r][t]||Fa[r][i],o=t in gn.styles?t:null;return s||o||null}var Hy=(Hl={},it(Hl,Pe,Object.keys(ja[Pe])),it(Hl,$e,Object.keys(ja[$e])),Hl);function ed(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},it(e,Pe,"".concat(G.cssPrefix,"-").concat(Pe)),it(e,$e,"".concat(G.cssPrefix,"-").concat($e)),e),o=null,a=Pe;(t.includes(s[Pe])||t.some(function(u){return Hy[Pe].includes(u)}))&&(a=Pe),(t.includes(s[$e])||t.some(function(u){return Hy[$e].includes(u)}))&&(a=$e);var l=t.reduce(function(u,c){var d=GO(G.cssPrefix,c);if(gs[c]?(c=BO[a].includes(c)?_O[a][c]:c,o=c,u.prefix=c):WO[a].indexOf(c)>-1?(o=c,u.prefix=Zc(c,{family:a})):d?u.iconName=d:c!==G.replacementClass&&c!==s[Pe]&&c!==s[$e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?bS(u.iconName):{},m=Ei(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!gs.far&&gs.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},Gm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===$e&&(gs.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ei(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Jr()||"fas"),l}var qO=function(){function t(){aO(this,t),this.definitions={}}return lO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),Dh(a,o[a]);var l=ja[Pe][a];l&&Dh(l,o[a]),xS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Gy=[],vs={},Os={},QO=Object.keys(Os);function XO(t,e){var n=e.mixoutsTo;return Gy=t,vs={},Object.keys(Os).forEach(function(r){QO.indexOf(r)===-1&&delete Os[r]}),Gy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ac(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){vs[o]||(vs[o]=[]),vs[o].push(s[o])})}r.provides&&r.provides(Os)}),n}function Lh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=vs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Bi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vs[t]||[];i.forEach(function(s){s.apply(null,n)})}function ar(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Os[t]?Os[t].apply(null,e):void 0}function Mh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Jr();if(e)return e=Ei(n,e)||e,By(IS.definitions,n,e)||By(gn.styles,n,e)}var IS=new qO,JO=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Bi("noAuto")},ZO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hr?(Bi("beforeI2svg",e),ar("pseudoElements2svg",e),ar("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,jO(function(){tD({autoReplaceSvgRoot:n}),Bi("watch",e)})}},eD={icon:function(e){if(e===null)return null;if(ac(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ei(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Zc(e[0]);return{prefix:r,iconName:Ei(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(wO))){var i=ed(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Jr(),iconName:Ei(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Jr();return{prefix:s,iconName:Ei(s,e)||e}}}},Yt={noAuto:JO,config:G,dom:ZO,parse:eD,library:IS,findIconDefinition:Mh,toHtml:al},tD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(gn.styles).length>0||G.autoFetchSvg)&&hr&&G.autoReplaceSvg&&Yt.dom.i2svg({node:r})};function td(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return al(r)})}}),Object.defineProperty(t,"node",{get:function(){if(hr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function nD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Bm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Jc(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function rD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function Ym(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,y=r.found?r:n,_=y.width,x=y.height,v=i==="fak",h=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),g={children:[],attributes:z(z({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(x)})},p=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/x*16*.0625,"em")}:{};m&&(g.attributes[$i]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||za())},children:[l]}),delete g.attributes.title);var C=z(z({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},p),d.styles)}),N=r.found&&n.found?ar("generateAbstractMask",C)||{children:[],attributes:{}}:ar("generateAbstractIcon",C)||{children:[],attributes:{}},k=N.children,P=N.attributes;return C.children=k,C.attributes=P,a?rD(C):nD(C)}function Yy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[$i]="");var c=z({},o.styles);Bm(i)&&(c.transform=DO({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Jc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function iD(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Jc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var nf=gn.styles;function Fh(t){var e=t[0],n=t[1],r=t.slice(4),i=Fm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(wi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(wi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(wi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var sD={found:!1,width:512,height:512};function oD(t,e){!hS&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jh(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Jr()),new Promise(function(r,i){if(ar("missingIconAbstract"),n==="fa"){var s=bS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&nf[e]&&nf[e][t]){var o=nf[e][t];return r(Fh(o))}oD(t,e),r(z(z({},sD),{},{icon:G.showMissingIcons&&t?ar("missingIconAbstract")||{}:{}}))})}var Ky=function(){},Uh=G.measurePerformance&&Fl&&Fl.mark&&Fl.measure?Fl:{mark:Ky,measure:Ky},Fo='FA "6.4.2"',aD=function(e){return Uh.mark("".concat(Fo," ").concat(e," begins")),function(){return TS(e)}},TS=function(e){Uh.mark("".concat(Fo," ").concat(e," ends")),Uh.measure("".concat(Fo," ").concat(e),"".concat(Fo," ").concat(e," begins"),"".concat(Fo," ").concat(e," ends"))},Km={begin:aD,end:TS},uu=function(){};function qy(t){var e=t.getAttribute?t.getAttribute($i):null;return typeof e=="string"}function lD(t){var e=t.getAttribute?t.getAttribute(Um):null,n=t.getAttribute?t.getAttribute(zm):null;return e&&n}function uD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function cD(){if(G.autoReplaceSvg===!0)return cu.replace;var t=cu[G.autoReplaceSvg];return t||cu.replace}function dD(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function fD(t){return Ae.createElement(t)}function NS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?dD:fD:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(NS(o,{ceFn:r}))}),i}function hD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var cu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(NS(i),n)}),n.getAttribute($i)===null&&G.keepOriginalSource){var r=Ae.createComment(hD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~$m(n).indexOf(G.replacementClass))return cu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return al(a)}).join(`
`);n.setAttribute($i,""),n.innerHTML=o}};function Qy(t){t()}function PS(t,e){var n=typeof e=="function"?e:uu;if(t.length===0)n();else{var r=Qy;G.mutateApproach===vO&&(r=Xr.requestAnimationFrame||Qy),r(function(){var i=cD(),s=Km.begin("mutate");t.map(i),s(),n()})}}var qm=!1;function RS(){qm=!0}function zh(){qm=!1}var uc=null;function Xy(t){if(zy&&G.observeMutations){var e=t.treeCallback,n=e===void 0?uu:e,r=t.nodeCallback,i=r===void 0?uu:r,s=t.pseudoElementsCallback,o=s===void 0?uu:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;uc=new zy(function(u){if(!qm){var c=Jr();co(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!qy(d.addedNodes[0])&&(G.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&qy(d.target)&&~kO.indexOf(d.attributeName))if(d.attributeName==="class"&&lD(d.target)){var f=ed($m(d.target)),m=f.prefix,y=f.iconName;d.target.setAttribute(Um,m||c),y&&d.target.setAttribute(zm,y)}else uD(d.target)&&i(d.target)})}}),hr&&uc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pD(){uc&&uc.disconnect()}function mD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function gD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ed($m(t));return i.prefix||(i.prefix=Jr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=YO(i.prefix,t.innerText)||Hm(i.prefix,Oh(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function vD(t){var e=co(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||za()):(e["aria-hidden"]="true",e.focusable="false")),e}function yD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gD(t),r=n.iconName,i=n.prefix,s=n.rest,o=vD(t),a=Lh("parseNodeAttributes",{},t),l=e.styleParser?mD(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var _D=gn.styles;function AS(t){var e=G.autoReplaceSvg==="nest"?Jy(t,{styleParser:!1}):Jy(t);return~e.extra.classes.indexOf(pS)?ar("generateLayersText",t,e):ar("generateSvgReplacementMutation",t,e)}var Zr=new Set;Vm.map(function(t){Zr.add("fa-".concat(t))});Object.keys(Ma[Pe]).map(Zr.add.bind(Zr));Object.keys(Ma[$e]).map(Zr.add.bind(Zr));Zr=sl(Zr);function Zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(d){return n.add("".concat(Vy,"-").concat(d))},i=function(d){return n.remove("".concat(Vy,"-").concat(d))},s=G.autoFetchSvg?Zr:Vm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(_D));s.includes("fa")||s.push("fa");var o=[".".concat(pS,":not([").concat($i,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat($i,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=co(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Km.begin("onTree"),u=a.reduce(function(c,d){try{var f=AS(d);f&&c.push(f)}catch(m){hS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){PS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function wD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;AS(t).then(function(n){n&&PS([n],e)})}function ED(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Mh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Mh(i||{})),t(r,z(z({},n),{},{mask:i}))}}var SD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,y=m===void 0?null:m,_=n.classes,x=_===void 0?[]:_,v=n.attributes,h=v===void 0?{}:v,g=n.styles,p=g===void 0?{}:g;if(e){var C=e.prefix,N=e.iconName,k=e.icon;return td(z({type:"icon"},e),function(){return Bi("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?h["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(y||za()):(h["aria-hidden"]="true",h.focusable="false")),Ym({icons:{main:Fh(k),mask:l?Fh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:z(z({},bn),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:h,styles:p,classes:x}})})}},CD={mixout:function(){return{icon:ED(SD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zy,n.nodeCallback=wD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return Zy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,y){Promise.all([jh(i,a),c.iconName?jh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var x=Fm(_,2),v=x[0],h=x[1];m([n,Ym({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Jc(a);l.length>0&&(i.style=l);var u;return Bm(o)&&(u=ar("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},kD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return td({type:"layer"},function(){Bi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(sl(s)).join(" ")},children:o}]})}}}},xD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return td({type:"counter",content:n},function(){return Bi("beforeDOMElementCreation",{content:n,params:r}),iD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(sl(a))}})})}}}},bD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?bn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return td({type:"text",content:n},function(){return Bi("beforeDOMElementCreation",{content:n,params:r}),Yy({content:n,transform:z(z({},bn),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(G.cssPrefix,"-layers-text")].concat(sl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(cS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},ID=new RegExp('"',"ug"),e_=[1105920,1112319];function TD(t){var e=t.replace(ID,""),n=VO(e,0),r=n>=e_[0]&&n<=e_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Oh(i?e[0]:e),isSecondary:r||i}}function t_(t,e){var n="".concat(gO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=co(t.children),o=s.filter(function(k){return k.getAttribute(Ah)===e})[0],a=Xr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(EO),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Fa[f][l[2].toLowerCase()]:SO[f][u],y=TD(d),_=y.value,x=y.isSecondary,v=l[0].startsWith("FontAwesome"),h=Hm(m,_),g=h;if(v){var p=KO(_);p.iconName&&p.prefix&&(h=p.iconName,m=p.prefix)}if(h&&!x&&(!o||o.getAttribute(Um)!==m||o.getAttribute(zm)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=yD(),N=C.extra;N.attributes[Ah]=e,jh(h,m).then(function(k){var P=Ym(z(z({},C),{},{icons:{main:k,mask:Gm()},prefix:m,iconName:g,extra:N,watchable:!0})),U=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=P.map(function(M){return al(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ND(t){return Promise.all([t_(t,"::before"),t_(t,"::after")])}function PD(t){return t.parentNode!==document.head&&!~yO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ah)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function n_(t){if(hr)return new Promise(function(e,n){var r=co(t.querySelectorAll("*")).filter(PD).map(ND),i=Km.begin("searchPseudoElements");RS(),Promise.all(r).then(function(){i(),zh(),e()}).catch(function(){i(),zh(),n()})})}var RD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=n_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;G.searchPseudoElements&&n_(i)}}},r_=!1,AD={mixout:function(){return{dom:{unwatch:function(){RS(),r_=!0}}}},hooks:function(){return{bootstrap:function(){Xy(Lh("mutationObserverCallbacks",{}))},noAuto:function(){pD()},watch:function(n){var r=n.observeMutationsRoot;r_?zh():Xy(Lh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},i_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},OD={mixout:function(){return{parse:{transform:function(n){return i_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=i_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),m.path)}]}]}}}},rf={x:0,y:0,width:"100%",height:"100%"};function s_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function DD(t){return t.tag==="g"?t.children:[t]}var LD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ed(i.split(" ").map(function(o){return o.trim()})):Gm();return s.prefix||(s.prefix=Jr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=OO({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:z(z({},rf),{},{fill:"white"})},_=c.children?{children:c.children.map(s_)}:{},x={tag:"g",attributes:z({},m.inner),children:[s_(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},_))]},v={tag:"g",attributes:z({},m.outer),children:[x]},h="mask-".concat(a||za()),g="clip-".concat(a||za()),p={tag:"mask",attributes:z(z({},rf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:DD(f)},p]};return r.push(C,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},rf)}),{children:r,attributes:i}}}},MD={provides:function(e){var n=!1;Xr.matchMedia&&(n=Xr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},FD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},jD=[MO,CD,kD,xD,bD,RD,AD,OD,LD,MD,FD];XO(jD,{mixoutsTo:Yt});Yt.noAuto;Yt.config;Yt.library;Yt.dom;var Vh=Yt.parse;Yt.findIconDefinition;Yt.toHtml;var UD=Yt.icon;Yt.layer;Yt.text;Yt.counter;var OS={exports:{}},zD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",VD=zD,$D=VD;function DS(){}function LS(){}LS.resetWarningCache=DS;var BD=function(){function t(r,i,s,o,a,l){if(l!==$D){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:LS,resetWarningCache:DS};return n.PropTypes=n,n};OS.exports=BD();var WD=OS.exports;const le=y_(WD);function o_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Nr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o_(Object(n),!0).forEach(function(r){ys(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cc(t){"@babel/helpers - typeof";return cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cc(t)}function ys(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function HD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GD(t,e){if(t==null)return{};var n=HD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function $h(t){return YD(t)||KD(t)||qD(t)||QD()}function YD(t){if(Array.isArray(t))return Bh(t)}function KD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qD(t,e){if(t){if(typeof t=="string")return Bh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bh(t,e)}}function Bh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,y=t.border,_=t.listItem,x=t.flip,v=t.size,h=t.rotation,g=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":y,"fa-li":_,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},ys(e,"fa-".concat(v),typeof v<"u"&&v!==null),ys(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ys(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ys(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(C){return p[C]?C:null}).filter(function(C){return C})}function JD(t){return t=t-0,t===t}function MS(t){return JD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ZD=["style"];function eL(t){return t.charAt(0).toUpperCase()+t.slice(1)}function tL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=MS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[eL(i)]=s:e[i]=s,e},{})}function FS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return FS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=tL(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[MS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=GD(n,ZD);return i.attrs.style=Nr(Nr({},i.attrs.style),o),t.apply(void 0,[e.tag,Nr(Nr({},i.attrs),a)].concat($h(r)))}var jS=!1;try{jS=!0}catch{}function nL(){if(!jS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function a_(t){if(t&&cc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vh.icon)return Vh.icon(t);if(t===null)return null;if(t&&cc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function sf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ys({},t,e):{}}var ll=Zt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=a_(n),c=sf("classes",[].concat($h(XD(t)),$h(s.split(" ")))),d=sf("transform",typeof t.transform=="string"?Vh.transform(t.transform):t.transform),f=sf("mask",a_(r)),m=UD(u,Nr(Nr(Nr(Nr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return nL("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(t).forEach(function(x){ll.defaultProps.hasOwnProperty(x)||(_[x]=t[x])}),rL(y[0],_)});ll.displayName="FontAwesomeIcon";ll.propTypes={beat:le.bool,border:le.bool,beatFade:le.bool,bounce:le.bool,className:le.string,fade:le.bool,flash:le.bool,mask:le.oneOfType([le.object,le.array,le.string]),maskId:le.string,fixedWidth:le.bool,inverse:le.bool,flip:le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:le.oneOfType([le.object,le.array,le.string]),listItem:le.bool,pull:le.oneOf(["right","left"]),pulse:le.bool,rotation:le.oneOf([0,90,180,270]),shake:le.bool,size:le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:le.bool,spinPulse:le.bool,spinReverse:le.bool,symbol:le.oneOfType([le.bool,le.string]),title:le.string,titleId:le.string,transform:le.oneOfType([le.string,le.object]),swapOpacity:le.bool};ll.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rL=FS.bind(null,Zt.createElement);function ul({size:t}){const[e,n]=S.useState("text-2xl");return S.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),w.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:w.jsx(ll,{icon:oO,spin:!0})})}function iL(){const t=At(),[e,n]=S.useState(!1);return S.useEffect(function(){RE(Ui,async r=>{if(r){console.log("AUTH: Logged");const i=await iO(r);i&&n(i),i||await sO(r)}else t("/login")})},[]),e?w.jsx(rO,{}):w.jsx("div",{className:"h-screen",children:w.jsx(ul,{size:"big"})})}function Mt({onClick:t,children:e,variant:n,type:r="button"}){const[i,s]=S.useState(null),[o,a]=S.useState("shadow-md"),l={cta:"bg-themePrimary text-themeWhite",base:"bg-themeWhite text-themePrimary border border-themeGray",outlined:"bg-themeWhite text-themePrimary",danger:"bg-themeDanger text-themeWhite"};S.useEffect(()=>{s(l[n])},[i]);function u(){a("shadow-sm"),setTimeout(()=>{a("shadow-md"),t&&t()},200)}return w.jsx("input",{type:r,onClick:()=>u(),value:e,className:`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-2 mb-2 cursor-pointer w-full ${i} ${o} hover:scale-100 transition-transform duration-200`})}function sL(){const t=At();S.useEffect(()=>{RE(Ui,n=>{t(n?"/":"/login")})},[]);function e(){const n=new xn;PR(Ui,n).then(r=>{const i=xn.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return w.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:w.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",w.jsx("br",{}),w.jsx(Mt,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function oL({event:t}){const e=At(),n=()=>{e(`/event/${t.id}`)};return w.jsxs("div",{onClick:n,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:t.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function l_({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(console.log(),e===void 0)return w.jsx(ul,{size:"small"});if(console.log(e[0].name),e[0].name==="defaultName")return w.jsxs("div",{children:["U have zero of ",t]});if(e.length>0)return e.map(o=>w.jsx(oL,{event:o},o.id))},i=At();function s(){i("/event/create")}return w.jsxs("div",{className:"w-full pb-2",children:[w.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?w.jsx(Mt,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function aL(){const t=S.useContext(si),e=S.useContext(oi);return S.useEffect(()=>{},[]),w.jsxs("div",{className:"h-full w-full",children:[w.jsx(l_,{buttonAddEvent:!0,title:"Your events",events:t}),w.jsx("br",{}),w.jsx(l_,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var cl=t=>t.type==="checkbox",_s=t=>t instanceof Date,xt=t=>t==null;const US=t=>typeof t=="object";var st=t=>!xt(t)&&!Array.isArray(t)&&US(t)&&!_s(t),lL=t=>st(t)&&t.target?cl(t.target)?t.target.checked:t.target.value:t,uL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,cL=(t,e)=>t.has(uL(e)),dL=t=>{const e=t.constructor&&t.constructor.prototype;return st(e)&&e.hasOwnProperty("isPrototypeOf")},Qm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $n(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Qm&&(t instanceof Blob||t instanceof FileList))&&(n||st(t)))if(e=n?[]:{},!n&&!dL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=$n(t[r]));else return t;return e}var dl=t=>Array.isArray(t)?t.filter(Boolean):[],Xe=t=>t===void 0,H=(t,e,n)=>{if(!e||!st(t))return n;const r=dl(e.split(/[,[\].]+?/)).reduce((i,s)=>xt(i)?i:i[s],t);return Xe(r)||r===t?Xe(t[e])?n:t[e]:r},Si=t=>typeof t=="boolean";const u_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Vn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var fL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==pn.all&&(e._proxyFormState[o]=!r||pn.all),n&&(n[o]=!0),t[o]}});return i},Qt=t=>st(t)&&!Object.keys(t).length,hL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Qt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||pn.all))},of=t=>Array.isArray(t)?t:[t];function pL(t){const e=Zt.useRef(t);e.current=t,Zt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var In=t=>typeof t=="string",mL=(t,e,n,r,i)=>In(t)?(r&&e.watch.add(t),H(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),H(n,s))):(r&&(e.watchAll=!0),n),Xm=t=>/^\w*$/.test(t),zS=t=>dl(t.replace(/["|']|\]/g,"").split(/\.|\[/));function De(t,e,n){let r=-1;const i=Xm(e)?[e]:zS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=st(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var gL=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Wh=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=H(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else st(o)&&Wh(o,e)}}};var c_=t=>({isOnSubmit:!t||t===pn.onSubmit,isOnBlur:t===pn.onBlur,isOnChange:t===pn.onChange,isOnAll:t===pn.all,isOnTouch:t===pn.onTouched}),d_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),vL=(t,e,n)=>{const r=dl(H(t,n));return De(r,"root",e[n]),De(t,n,r),t},Jm=t=>t.type==="file",Pr=t=>typeof t=="function",dc=t=>{if(!Qm)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},du=t=>In(t),Zm=t=>t.type==="radio",fc=t=>t instanceof RegExp;const f_={value:!1,isValid:!1},h_={value:!0,isValid:!0};var VS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Xe(t[0].attributes.value)?Xe(t[0].value)||t[0].value===""?h_:{value:t[0].value,isValid:!0}:h_:f_}return f_};const p_={isValid:!1,value:null};var $S=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,p_):p_;function m_(t,e,n="validate"){if(du(t)||Array.isArray(t)&&t.every(du)||Si(t)&&!t)return{type:n,message:du(t)?t:"",ref:e}}var Ji=t=>st(t)&&!fc(t)?t:{value:t,message:""},g_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:m,name:y,valueAsNumber:_,mount:x,disabled:v}=t._f,h=H(e,y);if(!x||v)return{};const g=o?o[0]:s,p=Q=>{r&&g.reportValidity&&(g.setCustomValidity(Si(Q)?"":Q||""),g.reportValidity())},C={},N=Zm(s),k=cl(s),P=N||k,U=(_||Jm(s))&&Xe(s.value)&&Xe(h)||dc(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,M=gL.bind(null,y,n,C),Z=(Q,ee,ge,ae=Vn.maxLength,He=Vn.minLength)=>{const Qe=Q?ee:ge;C[y]={type:Q?ae:He,message:Qe,ref:s,...M(Q?ae:He,Qe)}};if(i?!Array.isArray(h)||!h.length:a&&(!P&&(U||xt(h))||Si(h)&&!h||k&&!VS(o).isValid||N&&!$S(o).isValid)){const{value:Q,message:ee}=du(a)?{value:!!a,message:a}:Ji(a);if(Q&&(C[y]={type:Vn.required,message:ee,ref:g,...M(Vn.required,ee)},!n))return p(ee),C}if(!U&&(!xt(c)||!xt(d))){let Q,ee;const ge=Ji(d),ae=Ji(c);if(!xt(h)&&!isNaN(h)){const He=s.valueAsNumber||h&&+h;xt(ge.value)||(Q=He>ge.value),xt(ae.value)||(ee=He<ae.value)}else{const He=s.valueAsDate||new Date(h),Qe=q=>new Date(new Date().toDateString()+" "+q),F=s.type=="time",Y=s.type=="week";In(ge.value)&&h&&(Q=F?Qe(h)>Qe(ge.value):Y?h>ge.value:He>new Date(ge.value)),In(ae.value)&&h&&(ee=F?Qe(h)<Qe(ae.value):Y?h<ae.value:He<new Date(ae.value))}if((Q||ee)&&(Z(!!Q,ge.message,ae.message,Vn.max,Vn.min),!n))return p(C[y].message),C}if((l||u)&&!U&&(In(h)||i&&Array.isArray(h))){const Q=Ji(l),ee=Ji(u),ge=!xt(Q.value)&&h.length>+Q.value,ae=!xt(ee.value)&&h.length<+ee.value;if((ge||ae)&&(Z(ge,Q.message,ee.message),!n))return p(C[y].message),C}if(f&&!U&&In(h)){const{value:Q,message:ee}=Ji(f);if(fc(Q)&&!h.match(Q)&&(C[y]={type:Vn.pattern,message:ee,ref:s,...M(Vn.pattern,ee)},!n))return p(ee),C}if(m){if(Pr(m)){const Q=await m(h,e),ee=m_(Q,g);if(ee&&(C[y]={...ee,...M(Vn.validate,ee.message)},!n))return p(ee.message),C}else if(st(m)){let Q={};for(const ee in m){if(!Qt(Q)&&!n)break;const ge=m_(await m[ee](h,e),g,ee);ge&&(Q={...ge,...M(ee,ge.message)},p(ge.message),n&&(C[y]=Q))}if(!Qt(Q)&&(C[y]={ref:g,...Q},!n))return C}}return p(!0),C};function yL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Xe(t)?r++:t[e[r++]];return t}function _L(t){for(const e in t)if(t.hasOwnProperty(e)&&!Xe(t[e]))return!1;return!0}function ft(t,e){const n=Array.isArray(e)?e:Xm(e)?[e]:zS(e),r=n.length===1?t:yL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(st(r)&&Qt(r)||Array.isArray(r)&&_L(r))&&ft(t,n.slice(0,-1)),t}function af(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var hc=t=>xt(t)||!US(t);function Ci(t,e){if(hc(t)||hc(e))return t===e;if(_s(t)&&_s(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(_s(s)&&_s(o)||st(s)&&st(o)||Array.isArray(s)&&Array.isArray(o)?!Ci(s,o):s!==o)return!1}}return!0}var BS=t=>t.type==="select-multiple",wL=t=>Zm(t)||cl(t),lf=t=>dc(t)&&t.isConnected,WS=t=>{for(const e in t)if(Pr(t[e]))return!0;return!1};function pc(t,e={}){const n=Array.isArray(t);if(st(t)||n)for(const r in t)Array.isArray(t[r])||st(t[r])&&!WS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},pc(t[r],e[r])):xt(t[r])||(e[r]=!0);return e}function HS(t,e,n){const r=Array.isArray(t);if(st(t)||r)for(const i in t)Array.isArray(t[i])||st(t[i])&&!WS(t[i])?Xe(e)||hc(n[i])?n[i]=Array.isArray(t[i])?pc(t[i],[]):{...pc(t[i])}:HS(t[i],xt(e)?{}:e[i],n[i]):n[i]=!Ci(t[i],e[i]);return n}var uf=(t,e)=>HS(t,e,pc(e)),GS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Xe(t)?t:e?t===""?NaN:t&&+t:n&&In(t)?new Date(t):r?r(t):t;function cf(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Jm(e)?e.files:Zm(e)?$S(t.refs).value:BS(e)?[...e.selectedOptions].map(({value:n})=>n):cl(e)?VS(t.refs).value:GS(Xe(e.value)?t.ref.value:e.value,t)}var EL=(t,e,n,r)=>{const i={};for(const s of t){const o=H(e,s);o&&De(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Ao=t=>Xe(t)?t:fc(t)?t.source:st(t)?fc(t.value)?t.value.source:t.value:t,SL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function v_(t,e,n){const r=H(t,n);if(r||Xm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=H(e,s),a=H(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var CL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,kL=(t,e)=>!dl(H(t,e)).length&&ft(t,e);const xL={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function bL(t={},e){let n={...xL,...t},r={submitCount:0,isDirty:!1,isLoading:Pr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=st(n.defaultValues)||st(n.values)?$n(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:$n(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:af(),array:af(),state:af()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,y=c_(n.mode),_=c_(n.reValidateMode),x=n.criteriaMode===pn.all,v=E=>I=>{clearTimeout(c),c=setTimeout(E,I)},h=async E=>{if(d.isValid||E){const I=n.resolver?Qt((await U()).errors):await Z(i,!0);I!==r.isValid&&f.state.next({isValid:I})}},g=E=>d.isValidating&&f.state.next({isValidating:E}),p=(E,I=[],R,B,j=!0,D=!0)=>{if(B&&R){if(a.action=!0,D&&Array.isArray(H(i,E))){const W=R(H(i,E),B.argA,B.argB);j&&De(i,E,W)}if(D&&Array.isArray(H(r.errors,E))){const W=R(H(r.errors,E),B.argA,B.argB);j&&De(r.errors,E,W),kL(r.errors,E)}if(d.touchedFields&&D&&Array.isArray(H(r.touchedFields,E))){const W=R(H(r.touchedFields,E),B.argA,B.argB);j&&De(r.touchedFields,E,W)}d.dirtyFields&&(r.dirtyFields=uf(s,o)),f.state.next({name:E,isDirty:ee(E,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else De(o,E,I)},C=(E,I)=>{De(r.errors,E,I),f.state.next({errors:r.errors})},N=(E,I,R,B)=>{const j=H(i,E);if(j){const D=H(o,E,Xe(R)?H(s,E):R);Xe(D)||B&&B.defaultChecked||I?De(o,E,I?D:cf(j._f)):He(E,D),a.mount&&h()}},k=(E,I,R,B,j)=>{let D=!1,W=!1;const Te={name:E};if(!R||B){d.isDirty&&(W=r.isDirty,r.isDirty=Te.isDirty=ee(),D=W!==Te.isDirty);const Oe=Ci(H(s,E),I);W=H(r.dirtyFields,E),Oe?ft(r.dirtyFields,E):De(r.dirtyFields,E,!0),Te.dirtyFields=r.dirtyFields,D=D||d.dirtyFields&&W!==!Oe}if(R){const Oe=H(r.touchedFields,E);Oe||(De(r.touchedFields,E,R),Te.touchedFields=r.touchedFields,D=D||d.touchedFields&&Oe!==R)}return D&&j&&f.state.next(Te),D?Te:{}},P=(E,I,R,B)=>{const j=H(r.errors,E),D=d.isValid&&Si(I)&&r.isValid!==I;if(t.delayError&&R?(u=v(()=>C(E,R)),u(t.delayError)):(clearTimeout(c),u=null,R?De(r.errors,E,R):ft(r.errors,E)),(R?!Ci(j,R):j)||!Qt(B)||D){const W={...B,...D&&Si(I)?{isValid:I}:{},errors:r.errors,name:E};r={...r,...W},f.state.next(W)}g(!1)},U=async E=>n.resolver(o,n.context,EL(E||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),M=async E=>{const{errors:I}=await U(E);if(E)for(const R of E){const B=H(I,R);B?De(r.errors,R,B):ft(r.errors,R)}else r.errors=I;return I},Z=async(E,I,R={valid:!0})=>{for(const B in E){const j=E[B];if(j){const{_f:D,...W}=j;if(D){const Te=l.array.has(D.name),Oe=await g_(j,o,x,n.shouldUseNativeValidation&&!I,Te);if(Oe[D.name]&&(R.valid=!1,I))break;!I&&(H(Oe,D.name)?Te?vL(r.errors,Oe,D.name):De(r.errors,D.name,Oe[D.name]):ft(r.errors,D.name))}W&&await Z(W,I,R)}}return R.valid},Q=()=>{for(const E of l.unMount){const I=H(i,E);I&&(I._f.refs?I._f.refs.every(R=>!lf(R)):!lf(I._f.ref))&&zt(E)}l.unMount=new Set},ee=(E,I)=>(E&&I&&De(o,E,I),!Ci(pe(),s)),ge=(E,I,R)=>mL(E,l,{...a.mount?o:Xe(I)?s:In(E)?{[E]:I}:I},R,I),ae=E=>dl(H(a.mount?o:s,E,t.shouldUnregister?H(s,E,[]):[])),He=(E,I,R={})=>{const B=H(i,E);let j=I;if(B){const D=B._f;D&&(!D.disabled&&De(o,E,GS(I,D)),j=dc(D.ref)&&xt(I)?"":I,BS(D.ref)?[...D.ref.options].forEach(W=>W.selected=j.includes(W.value)):D.refs?cl(D.ref)?D.refs.length>1?D.refs.forEach(W=>(!W.defaultChecked||!W.disabled)&&(W.checked=Array.isArray(j)?!!j.find(Te=>Te===W.value):j===W.value)):D.refs[0]&&(D.refs[0].checked=!!j):D.refs.forEach(W=>W.checked=W.value===j):Jm(D.ref)?D.ref.value="":(D.ref.value=j,D.ref.type||f.values.next({name:E,values:{...o}})))}(R.shouldDirty||R.shouldTouch)&&k(E,j,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&q(E)},Qe=(E,I,R)=>{for(const B in I){const j=I[B],D=`${E}.${B}`,W=H(i,D);(l.array.has(E)||!hc(j)||W&&!W._f)&&!_s(j)?Qe(D,j,R):He(D,j,R)}},F=(E,I,R={})=>{const B=H(i,E),j=l.array.has(E),D=$n(I);De(o,E,D),j?(f.array.next({name:E,values:{...o}}),(d.isDirty||d.dirtyFields)&&R.shouldDirty&&f.state.next({name:E,dirtyFields:uf(s,o),isDirty:ee(E,D)})):B&&!B._f&&!xt(D)?Qe(E,D,R):He(E,D,R),d_(E,l)&&f.state.next({...r}),f.values.next({name:E,values:{...o}}),!a.mount&&e()},Y=async E=>{const I=E.target;let R=I.name,B=!0;const j=H(i,R),D=()=>I.type?cf(j._f):lL(E);if(j){let W,Te;const Oe=D(),jn=E.type===u_.BLUR||E.type===u_.FOCUS_OUT,id=!SL(j._f)&&!n.resolver&&!H(r.errors,R)&&!j._f.deps||CL(jn,H(r.touchedFields,R),r.isSubmitted,_,y),Ki=d_(R,l,jn);De(o,R,Oe),jn?(j._f.onBlur&&j._f.onBlur(E),u&&u(0)):j._f.onChange&&j._f.onChange(E);const pr=k(R,Oe,jn,!1),ml=!Qt(pr)||Ki;if(!jn&&f.values.next({name:R,type:E.type,values:{...o}}),id)return d.isValid&&h(),ml&&f.state.next({name:R,...Ki?{}:pr});if(!jn&&Ki&&f.state.next({...r}),g(!0),n.resolver){const{errors:qi}=await U([R]),sd=v_(r.errors,i,R),ho=v_(qi,i,sd.name||R);W=ho.error,R=ho.name,Te=Qt(qi)}else W=(await g_(j,o,x,n.shouldUseNativeValidation))[R],B=Number.isNaN(Oe)||Oe===H(o,R,Oe),B&&(W?Te=!1:d.isValid&&(Te=await Z(i,!0)));B&&(j._f.deps&&q(j._f.deps),P(R,Te,W,pr))}},q=async(E,I={})=>{let R,B;const j=of(E);if(g(!0),n.resolver){const D=await M(Xe(E)?E:j);R=Qt(D),B=E?!j.some(W=>H(D,W)):R}else E?(B=(await Promise.all(j.map(async D=>{const W=H(i,D);return await Z(W&&W._f?{[D]:W}:W)}))).every(Boolean),!(!B&&!r.isValid)&&h()):B=R=await Z(i);return f.state.next({...!In(E)||d.isValid&&R!==r.isValid?{}:{name:E},...n.resolver||!E?{isValid:R}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!B&&Wh(i,D=>D&&H(r.errors,D),E?j:l.mount),B},pe=E=>{const I={...s,...a.mount?o:{}};return Xe(E)?I:In(E)?H(I,E):E.map(R=>H(I,R))},ve=(E,I)=>({invalid:!!H((I||r).errors,E),isDirty:!!H((I||r).dirtyFields,E),isTouched:!!H((I||r).touchedFields,E),error:H((I||r).errors,E)}),En=E=>{E&&of(E).forEach(I=>ft(r.errors,I)),f.state.next({errors:E?r.errors:{}})},Kt=(E,I,R)=>{const B=(H(i,E,{_f:{}})._f||{}).ref;De(r.errors,E,{...I,ref:B}),f.state.next({name:E,errors:r.errors,isValid:!1}),R&&R.shouldFocus&&B&&B.focus&&B.focus()},ai=(E,I)=>Pr(E)?f.values.subscribe({next:R=>E(ge(void 0,I),R)}):ge(E,I,!0),zt=(E,I={})=>{for(const R of E?of(E):l.mount)l.mount.delete(R),l.array.delete(R),I.keepValue||(ft(i,R),ft(o,R)),!I.keepError&&ft(r.errors,R),!I.keepDirty&&ft(r.dirtyFields,R),!I.keepTouched&&ft(r.touchedFields,R),!n.shouldUnregister&&!I.keepDefaultValue&&ft(s,R);f.values.next({values:{...o}}),f.state.next({...r,...I.keepDirty?{isDirty:ee()}:{}}),!I.keepIsValid&&h()},ke=({disabled:E,name:I,field:R,fields:B})=>{if(Si(E)){const j=E?void 0:H(o,I,cf(R?R._f:H(B,I)._f));De(o,I,j),k(I,j,!1,!1,!0)}},Mn=(E,I={})=>{let R=H(i,E);const B=Si(I.disabled);return De(i,E,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:E}},name:E,mount:!0,...I}}),l.mount.add(E),R?ke({field:R,disabled:I.disabled,name:E}):N(E,!0,I.value),{...B?{disabled:I.disabled}:{},...n.progressive?{required:!!I.required,min:Ao(I.min),max:Ao(I.max),minLength:Ao(I.minLength),maxLength:Ao(I.maxLength),pattern:Ao(I.pattern)}:{},name:E,onChange:Y,onBlur:Y,ref:j=>{if(j){Mn(E,I),R=H(i,E);const D=Xe(j.value)&&j.querySelectorAll&&j.querySelectorAll("input,select,textarea")[0]||j,W=wL(D),Te=R._f.refs||[];if(W?Te.find(Oe=>Oe===D):D===R._f.ref)return;De(i,E,{_f:{...R._f,...W?{refs:[...Te.filter(lf),D,...Array.isArray(H(s,E))?[{}]:[]],ref:{type:D.type,name:E}}:{ref:D}}}),N(E,!1,void 0,D)}else R=H(i,E,{}),R._f&&(R._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(cL(l.array,E)&&a.action)&&l.unMount.add(E)}}},fo=()=>n.shouldFocusError&&Wh(i,E=>E&&H(r.errors,E),l.mount),fl=(E,I)=>async R=>{R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let B=$n(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:j,values:D}=await U();r.errors=j,B=D}else await Z(i);ft(r.errors,"root"),Qt(r.errors)?(f.state.next({errors:{}}),await E(B,R)):(I&&await I({...r.errors},R),fo(),setTimeout(fo)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Fn=(E,I={})=>{H(i,E)&&(Xe(I.defaultValue)?F(E,H(s,E)):(F(E,I.defaultValue),De(s,E,I.defaultValue)),I.keepTouched||ft(r.touchedFields,E),I.keepDirty||(ft(r.dirtyFields,E),r.isDirty=I.defaultValue?ee(E,H(s,E)):ee()),I.keepError||(ft(r.errors,E),d.isValid&&h()),f.state.next({...r}))},hl=(E,I={})=>{const R=E?$n(E):s,B=$n(R),j=E&&!Qt(E)?B:s;if(I.keepDefaultValues||(s=R),!I.keepValues){if(I.keepDirtyValues||m)for(const D of l.mount)H(r.dirtyFields,D)?De(j,D,H(o,D)):F(D,H(j,D));else{if(Qm&&Xe(E))for(const D of l.mount){const W=H(i,D);if(W&&W._f){const Te=Array.isArray(W._f.refs)?W._f.refs[0]:W._f.ref;if(dc(Te)){const Oe=Te.closest("form");if(Oe){Oe.reset();break}}}}i={}}o=t.shouldUnregister?I.keepDefaultValues?$n(s):{}:$n(j),f.array.next({values:{...j}}),f.values.next({values:{...j}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!I.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!Ci(E,s)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&E?uf(s,E):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitSuccessful:I.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},pl=(E,I)=>hl(Pr(E)?E(o):E,I);return{control:{register:Mn,unregister:zt,getFieldState:ve,handleSubmit:fl,setError:Kt,_executeSchema:U,_getWatch:ge,_getDirty:ee,_updateValid:h,_removeUnmounted:Q,_updateFieldArray:p,_updateDisabledField:ke,_getFieldArray:ae,_reset:hl,_resetDefaultValues:()=>Pr(n.defaultValues)&&n.defaultValues().then(E=>{pl(E,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:E=>{r={...r,...E}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(E){a=E},get _defaultValues(){return s},get _names(){return l},set _names(E){l=E},get _formState(){return r},set _formState(E){r=E},get _options(){return n},set _options(E){n={...n,...E}}},trigger:q,register:Mn,handleSubmit:fl,watch:ai,setValue:F,getValues:pe,reset:pl,resetField:Fn,clearErrors:En,unregister:zt,setError:Kt,setFocus:(E,I={})=>{const R=H(i,E),B=R&&R._f;if(B){const j=B.refs?B.refs[0]:B.ref;j.focus&&(j.focus(),I.shouldSelect&&j.select())}},getFieldState:ve}}function nd(t={}){const e=Zt.useRef(),n=Zt.useRef(),[r,i]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:Pr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Pr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...bL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,pL({subject:s._subjects.state,next:o=>{hL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Zt.useEffect(()=>{t.values&&!Ci(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Zt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=fL(r,s),e.current}const Wr=({type:t,placeholder:e,defaultValue:n,register:r,variant:i="base"})=>{const[s,o]=S.useState(null),a={base:"border-2 border-themeGray rounded-none",outline:"border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2",danger:"border-themeDanger rounded-2xl h-12 p-2 border-2 mt-2 mb-2"};return S.useEffect(()=>{o(a[i])},[s,i]),w.jsx("input",{...r,defaultValue:n,type:t,step:"any",placeholder:e,className:`${s} w-full transition-transform duration-200 `})};function IL({usersInput:t,resetField:e,setSelectedUsers:n,selectedUsers:r,variant:i}){const s=S.useContext(fr),o=S.useContext(Ln),[a,l]=S.useState(void 0);function u(f){if(f===void 0){l(void 0);return}if(f.length===0){l(void 0);return}if(f.length>0){const m=s==null?void 0:s.filter(y=>{if(r!==void 0&&r.filter(v=>v===y.uid).length!==0||y.uid===(o==null?void 0:o.uid))return null;const _=y.email.includes(f);if(_===!1)return null;if(_===!0)return!0});l(m)}}function c(f){e("usersInput"),n(m=>m?[...m,f.uid]:[f.uid])}function d(f){const m=r==null?void 0:r.filter(y=>y!==(f==null?void 0:f.uid));n(m)}return S.useEffect(()=>{u(t)},[t,r]),w.jsxs(w.Fragment,{children:[w.jsx("div",{children:r?w.jsx("div",{className:`${r.length===0?"hidden":"visible"} border-themePrimary border-2 rounded-2xl p-2 mb-2`,children:r.map(f=>{const m=s==null?void 0:s.filter(y=>y.uid===f)[0];return m===void 0?w.jsx(w.Fragment,{children:"Error"}):w.jsx("div",{className:"flex gap-2 items-center pt-1 pb-1 flex-col",children:w.jsxs("div",{className:"flex gap-2  pt-1 pb-1 w-full",children:[w.jsxs("div",{className:"flex w-full gap-2",children:[w.jsx(Qr,{myUser:m,onClick:()=>d(m)}),w.jsxs("p",{className:"text-xs",children:[" ",m.email]})]}),w.jsx("div",{onClick:()=>d(m),className:"p-2 border-2 h-8 w-8 border-themePrimary rounded-full flex items-center justify-center cursor-pointer",children:w.jsx("div",{className:"w-4 h-[2px] bg-themeDanger"})})]})})})}):null}),w.jsx("div",{className:`${a?"h-16 opacity-100 p-2":"h-0 opacity-0 p-0"} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`,children:a!==void 0&&(a==null?void 0:a.length)>0?a.map(f=>w.jsxs("div",{onClick:()=>c(f),className:"flex gap-2 items-center p-1",children:[w.jsx(Qr,{myUser:f}),w.jsxs("p",{className:"text-xs",children:[" ",f.email]})]})):w.jsx("div",{className:"p-1 text-center grid items-center h-full",children:"User not found"})})]})}function TL(){return new Date}function NL(t){return Math.floor(Math.random()*t)}function Hh(){let t="id";const e=new Date;return t+=e.getFullYear(),t+=e.getMonth()+1,t+=e.getDate(),t+=e.getMinutes(),t+=e.getSeconds(),t+=e.getMilliseconds(),t+=NL(1e4),t}const eg=TL(),YS=eg.getFullYear();let na=`${eg.getMonth()+1}`;Number(na)<10&&(na=`0${na}`);let ra=`${eg.getDate()}`;Number(ra)<10&&(ra=`0${ra}`);function KS({type:t,currentEvent:e}){const n=At(),r=S.useContext(fr),i=S.useContext(Ln),[s,o]=S.useState(void 0),{register:a,handleSubmit:l,watch:u,formState:{errors:c},resetField:d,setValue:f}=nd(),m=u("usersInput"),y=g=>{t==="create"&&_(g),t==="edit"&&x(g)},_=g=>{const p=Hh();if(i===void 0){n("/login");return}let C={id:p,date:`${YS}-${na}-${ra}`,name:g.name,owner:i==null?void 0:i.uid,users:{}};s!==void 0&&s.length>0&&s.map(P=>{Object.defineProperty(C.users,P,{value:P,enumerable:!0}),v(P,p)}),hs(ct(mt,"events/"+p),C);const N=i==null?void 0:i.ownerOfEvents.length;let k={};Object.defineProperty(k,N,{value:p,enumerable:!0}),qs(ct(mt,`users/${i.uid}/ownerOfEvents`),k),n("/event/"+p)},x=g=>{if(e===void 0)return;let p={...e,name:g.name,users:{}};s!==void 0&&s.length>0&&s.map(k=>{Object.defineProperty(p.users,k,{value:k,enumerable:!0})}),hs(ct(mt,"events/"+e.id),p);const C=s==null?void 0:s.filter(k=>e.users.includes(k)?null:k);C==null||C.forEach(k=>{r==null||r.find(P=>{if(P.uid===k){let U=P.participateOfEvents;U.push(e.id);const M={};U.forEach((Z,Q)=>{Object.defineProperty(M,Q,{value:Z,enumerable:!0})}),hs(ct(mt,`users/${k}/participateOfEvents`),M)}})}),e.users.filter(k=>s!=null&&s.includes(k)?null:k).forEach(k=>{const P=r==null?void 0:r.find(Z=>Z.uid===k?Z:!1),U=P==null?void 0:P.participateOfEvents.filter(Z=>Z===e.id?null:Z),M={};U==null||U.forEach((Z,Q)=>{Object.defineProperty(M,Q,{value:Z,enumerable:!0})}),hs(ct(mt,`users/${k}/participateOfEvents`),M)}),n("/event/"+e.id)};function v(g,p){if(r===void 0)return;const N=r.filter(P=>P.uid===g)[0].participateOfEvents.length,k={};Object.defineProperty(k,N,{value:p,enumerable:!0}),console.log(k),qs(ct(mt,`users/${g}/participateOfEvents/`),k)}function h(){n(`/event/${e==null?void 0:e.id}/delete`)}return S.useEffect(()=>{t==="edit"&&e!==void 0&&(f("name",e.name),o([...e.users]))},[e]),w.jsxs("form",{onSubmit:l(y),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsxs("h1",{className:"mt-2 mb-2 font-bold text-xl",children:[t==="create"?"Create":null," ",t==="edit"?"Edit":null," Event"]}),w.jsxs("label",{children:[w.jsx(Wr,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Event name",variant:c.name?"danger":"outline"}),c.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{children:[w.jsx(Wr,{type:"text",defaultValue:"",register:a("usersInput"),placeholder:"Add users",variant:"outline"}),w.jsx(IL,{usersInput:m,resetField:d,setSelectedUsers:o,selectedUsers:s})]}),w.jsxs("div",{className:"self-end flex gap-4",children:[w.jsx(Mt,{variant:"outlined",type:"submit",children:"Submit"}),t==="edit"?w.jsx(Mt,{variant:"danger",onClick:h,type:"button",children:"Delete event"}):null]})]})}function PL(){return w.jsx("div",{className:"h-full",children:w.jsx(KS,{type:"create"})})}function qS({children:t}){return w.jsx("div",{className:"w-full max-w-screen overflow-x-scroll p-2",children:w.jsxs("div",{className:"w-2 flex gap-2 ",children:[...t]})})}function ia({children:t,onClick:e}){return w.jsx("div",{onClick:e,className:"p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer",children:t})}const QS=S.createContext(void 0);function RL(){const t=dr(),e=At(),n=S.useContext(si),r=S.useContext(oi),i=S.useContext(Ln),[s,o]=S.useState(void 0),[a,l]=S.useState(!1),[u,c]=S.useState([]),[d,f]=S.useState(void 0);function m(){if(i!==void 0){if(t.id===void 0){l("Event not Found");return}if(n){const g=y(n,t.id);g&&(o(g),f(i))}if(r){const g=y(r,t.id);g&&(o(g),_(g.owner))}}}function y(g,p){if(p===void 0)return!1;const C=g.filter(N=>N.id===p?N:null)[0];return C===void 0?!1:C}async function _(g){await Xo(ct(mt,`/users/${g}`),p=>{p.exists()&&f({...p.val(),uid:g})})}function x(g){const p=uE(ct(mt,`users/${g}`));Xo(p,C=>{C.exists()&&c(N=>[...N,{...C.val(),uid:g}])})}function v(){s==null||s.users.map(g=>{x(g)}),console.log(u)}function h(){e(`/event/${t.id}/edit`)}return S.useEffect(()=>{Ui.currentUser!==null&&(m(),s&&u.length==0&&v())},[s,n,r,u]),s===void 0&&!a?w.jsx(ul,{size:"big"}):a!==!1?(console.log(a),w.jsx("div",{children:a})):s?w.jsxs("div",{className:"h-full",children:[w.jsxs("div",{className:"border-2 border-themePrimary p-2 pt-4 pb-4 rounded-2xl flex flex-col gap-4 mb-4",children:[w.jsxs("div",{className:"flex justify-between items-center pl-2 pr-2",children:[w.jsx("span",{className:"font-bold text-xl",children:s.name}),w.jsx(Qr,{myUser:d,size:"medium"})]}),w.jsx("div",{className:"flex gap-2 pl-2 pr-2",children:u.map((g,p)=>w.jsx(Qr,{myUser:g,size:"medium"},p))}),w.jsxs(qS,{children:[w.jsx(ia,{onClick:()=>{e(`/event/${t.id}/`)},children:"Summary"}),w.jsx(ia,{onClick:()=>{e(`/event/${t.id}/payments`)},children:"Payments"}),w.jsx(ia,{onClick:h,children:"Edit Event"}),w.jsx(w.Fragment,{})]})]}),w.jsx(QS.Provider,{value:s,children:w.jsx(sS,{})})]}):w.jsx("div",{children:"Error not found"})}function Js({user:t,checked:e=!1,maxWFit:n=!1,border:r=!0}){return S.useEffect(()=>{},[e,t]),w.jsxs("div",{className:`${e?"bg-themeAccent":"bg-white"} ${n?"max-w-fit":""} ${r?"border-2 border-themePrimary pt-2 pb-2 pl-4 pr-4":""} flex items-center gap-2   rounded-2xl min-w-fit cursor-pointer`,children:[w.jsx(Qr,{myUser:t})," ",t.displayName]})}function AL(){const t=S.useContext(Ln);return console.log(t),w.jsxs(w.Fragment,{children:[w.jsxs("div",{children:[w.jsx(Mt,{variant:"cta",onClick:()=>{},children:"CTA"}),w.jsx(Mt,{variant:"outlined",onClick:()=>{},children:"Outlined"}),w.jsx(Mt,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx(Mt,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx("div",{className:"bg-themePrimary",children:w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]})}),w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]}),w.jsxs(qS,{children:[w.jsx(ia,{children:"Pill"}),w.jsx(ia,{children:"Ale bang"})]})]}),w.jsx(Js,{user:t})]})}function OL(){const[t,e]=S.useState(ut),n=S.useContext(si),r=S.useContext(oi),i=dr(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{className:"h-full",children:w.jsx(KS,{type:"edit",currentEvent:t})})}function DL({currentEvent:t}){const e=S.useContext(fr),n=S.useContext(Ln),r=At(),{register:i,handleSubmit:s,formState:{errors:o}}=nd(),a=u=>{if(t.id===u.eventName){const c=n.ownerOfEvents.indexOf(u.eventName);console.log(c);const d={};Object.defineProperty(d,c,{value:null,enumerable:!0}),qs(ct(mt,`users/${n.uid}/ownerOfEvents/`),d),t.users.forEach(f=>{l(f,t.id)}),uP(ct(mt,`events/${u.eventName}`)).then(()=>{r("/")})}};function l(u,c){if(e===void 0)return;const f=e.filter(y=>y.uid===u)[0].participateOfEvents.indexOf(c),m={};Object.defineProperty(m,f,{value:null,enumerable:!0}),qs(ct(mt,`users/${u}/participateOfEvents/`),m)}return w.jsxs("form",{onSubmit:s(a),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Delete Event"}),w.jsxs("p",{children:["Type event id to delete event ",w.jsx("span",{className:"text-themeDanger",children:t.id})]}),w.jsxs("label",{children:[w.jsx(Wr,{type:"text",defaultValue:"",register:i("eventName",{required:!0}),placeholder:"Event id",variant:o.eventName?"danger":"outline"}),o.eventName&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsx(Mt,{variant:"danger",type:"submit",children:"Submit"})]})}function LL(){const[t,e]=S.useState(ut),n=S.useContext(si),r=S.useContext(oi),i=dr(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(DL,{currentEvent:t})})}function ML({eventID:t,payment:e}){const n=At(),r=()=>{n(`/event/${t}/payment/${e.id}`)};return w.jsxs("div",{onClick:r,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:e.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",e.name]})]},"bang")}function FL({currentEvent:t}){console.log(t),console.log(ut),dr();const e=()=>{if(t.id===ut.id)return w.jsx(ul,{size:"small"});if(t.payments)return t.payments.map(n=>(console.log(n),w.jsx(ML,{eventID:t.id,payment:n})))};return S.useEffect(()=>{},[t]),w.jsx("div",{className:"w-full",children:e()})}function jL(){const t=At(),e=dr(),n=S.useContext(si),r=S.useContext(oi),[i,s]=S.useState(ut),[o,a]=S.useState(!1);function l(){if(e.id===void 0){a("Event not Found");return}if(n){const c=u(n,e.id);c&&s(c)}if(r){const c=u(r,e.id);c&&s(c)}}function u(c,d){if(d===void 0)return!1;const f=c.filter(m=>m.id===d?m:null)[0];return f===void 0?!1:f}return S.useEffect(()=>{l(),console.log(i)},[n,r,i]),w.jsxs("div",{className:"h-auto",children:[w.jsx(Mt,{variant:"cta",onClick:()=>t(`/event/${e.id}/payment/create`),children:"Add Payment"}),w.jsx(FL,{currentEvent:i}),o||null]})}function ei(t,e){const n=e.filter(r=>r.uid===t);return n.length>0?n[0]:As}function UL({currentEvent:t}){const e=S.useContext(fr),n=S.useContext(Ln),r=At(),[i,s]=S.useState([]),[o,a]=S.useState({uid:t.owner,checked:!0,value:0}),{register:l,handleSubmit:u,watch:c,formState:{errors:d},setError:f,resetField:m,setValue:y}=nd(),_=c("amount"),x=async k=>{const P=Hh(),U={date:`${YS}-${na}-${ra}`,id:P,amount:k.amount,name:k.name,users:{},whopaid:{uid:n.uid,value:o.value}};i!==void 0&&i.length>0&&i.map(Z=>{const Q={uid:Z.uid,value:Z.value,id:Hh()};Z.checked&&Object.defineProperty(U.users,Z.uid,{value:Q,enumerable:!0})});let M=0;o.checked&&(M+=Number(o.value)),i.forEach(Z=>{Z.checked&&(console.log(Z.uid),M+=Number(Z.value))}),M!=Number(_)&&f("amount",{type:"focus"}),M==Number(_)&&(await qs(ct(mt,`events/${t.id}/payments/${P}`),U),r("/event/"+t.id))};function v(k){a({uid:o.uid,value:o.value,checked:!o.checked})}function h(k){a({uid:o.uid,value:k.target.value,checked:o.checked})}function g(k){s(P=>[...P.map(M=>M.uid===k.target.name?{uid:M.uid,checked:!M.checked,value:M.value}:M)])}function p(k){console.log("handleValue"),s(P=>[...P.map(M=>M.uid===k.target.name?{uid:M.uid,checked:M.checked,value:k.target.value}:M)])}function C(){console.log("setPaymentUsersOnStartup"),t.users.map(k=>{if(k==="defaultUID")return null;s(P=>P.filter(M=>{if(M.uid===k)return M}).length>0?[...P]:k===n.uid?[...P,{uid:t.owner,checked:!1,value:0}]:[...P,{uid:k,checked:!1,value:0}])})}function N(){a(()=>({uid:n.uid,checked:!0,value:0}))}return S.useEffect(()=>{C(),N()},[t,n]),w.jsxs("form",{onSubmit:u(x),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Add new Payment"}),w.jsxs("label",{children:[w.jsx(Wr,{type:"number",defaultValue:"",register:l("amount",{required:!0}),placeholder:"Amount",variant:d.amount?"danger":"outline"}),d.amount&&w.jsx("span",{className:"text-themeDanger",children:"This field is required and General amount has to be the same as value of sum of all people included"})]}),w.jsxs("label",{children:[w.jsx(Wr,{type:"text",defaultValue:"",register:l("name",{required:!0}),placeholder:"Payment Name",variant:d.name?"danger":"outline"}),d.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("div",{className:"flex justify-between mt-2 mb-2 gap-2",children:[w.jsxs("label",{className:"w-full",htmlFor:o.uid,children:[w.jsx("input",{type:"checkbox",name:o.uid,checked:o.checked,onChange:v,className:"w-4 hidden",id:o.uid}),w.jsx(Js,{user:ei(o.uid,e),checked:o.checked})]}),w.jsxs("label",{className:"flex items-center gap-2 border-2 border-themePrimary rounded-2xl pl-2 pr-2",children:["Amount",w.jsx("input",{type:"number",name:o.uid,value:o.value,onChange:h,step:"any",className:"w-16 focus-visible:outline-none  border-none pl-2 pr-2 rounded-2xl h-full"})]})]}),i.map((k,P)=>w.jsxs("div",{className:"flex justify-between mt-2 mb-2 gap-2",children:[w.jsxs("label",{className:"w-full",htmlFor:k.uid,children:[w.jsx("input",{type:"checkbox",name:k.uid,onChange:g,checked:k.checked,className:"w-4 hidden",id:k.uid}),w.jsx(Js,{user:ei(k.uid,e),checked:k.checked})]},P),w.jsxs("label",{className:"flex items-center gap-2 border-2 border-themePrimary rounded-2xl pl-2 pr-2",children:["Amount",w.jsx("input",{type:"number",name:k.uid,value:k.value,onChange:p,step:"any",className:"w-16 focus-visible:outline-none  border-none pl-2 pr-2 rounded-2xl h-full"})]})]})),w.jsx(Mt,{variant:"cta",type:"submit",children:"Submit"})]})}function zL(){const[t,e]=S.useState(ut),n=S.useContext(si),r=S.useContext(oi),i=dr(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(UL,{currentEvent:t})})}function VL(){const t=S.useContext(fr);S.useContext(Ln);const e=dr();if(e.id==null)return;const n=ei(e.id,t),{register:r,handleSubmit:i,watch:s,formState:{errors:o},resetField:a,setValue:l}=nd(),u=c=>{const d={...n,phoneNumber:c.phoneNumber,displayName:c.name,bankAccountNumber:c.bankAccountNumber};qs(ct(mt,`users/${n.uid}`),d)};return w.jsxs("form",{onSubmit:i(u),children:[w.jsx(Wr,{type:"text",placeholder:"Name",defaultValue:n.displayName=="Name"?"":n.displayName,register:r("name"),variant:"outline"}),w.jsx(Wr,{type:"text",placeholder:"Phone number",defaultValue:`${n.phoneNumber?n.phoneNumber:""}`,register:r("phoneNumber"),variant:"outline"}),w.jsx(Wr,{type:"text",placeholder:"Bank account number",defaultValue:`${n.bankAccountNumber?n.bankAccountNumber:""}`,register:r("bankAccountNumber"),variant:"outline"}),w.jsx(Mt,{variant:"cta",type:"submit",children:"Submit"})]})}function $L(){const t=S.useContext(fr),e=S.useContext(Ln),n=dr();if(n.id==null)return;const r=ei(n.id,t),i=At();function s(){uR(Ui).then(()=>{i("/login")}).catch(a=>{console.log(a)})}const o=a=>{navigator.clipboard.writeText(a||"")};return S.useEffect(()=>{},[r,e]),w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"mb-8 flex flex-col gap-2 border-2 border-themePrimary rounded-2xl p-4",children:[w.jsx(Js,{user:r,border:!1}),w.jsxs("div",{title:`Click to copy ${r.phoneNumber}`,className:"cursor-pointer",onClick:()=>o(r.phoneNumber),children:["Phone number: ",r.phoneNumber]}),w.jsxs("div",{title:`Click to copy ${r.bankAccountNumber}`,className:"cursor-pointer",onClick:()=>o(r.bankAccountNumber),children:[" Bank Account: ",r.bankAccountNumber]})]}),e.uid===r.uid?w.jsx(VL,{}):null,n.id==e.uid?w.jsx(Mt,{onClick:s,variant:"outlined",children:"Log out"}):null]})}function BL(){const t=S.useContext(fr);At();const e=dr(),n=S.useContext(si),r=S.useContext(oi),[i,s]=S.useState(ut),[o,a]=S.useState(lu),[l,u]=S.useState(!1);function c(){if(e.id===void 0){u("Event not Found");return}if(n){const m=d(n,e.id);m&&s(m)}if(r){const m=d(r,e.id);m&&s(m)}}function d(m,y){if(y===void 0)return!1;const _=m.filter(x=>x.id===y?x:null)[0];return _===void 0?!1:_}function f(){i.payments.forEach(m=>{m.id===e.paymentId&&a(m)})}return S.useEffect(()=>{c(),i&&f()},[n,r,i,o]),o.id==lu.id?w.jsx(ul,{size:"big"}):o!=lu?w.jsxs("div",{className:"h-full",children:[w.jsxs("div",{className:"flex justify-between items-start mb-6 flex-col w-full gap-2 border-2 border-themePrimary rounded-2xl p-4",children:[w.jsx("div",{className:"text-themeSecondary",children:o.date}),w.jsx("div",{className:"font-bold text-xl w-full",children:o.name}),w.jsxs("div",{className:"font-bold",children:["Amount: ",o.amount]}),w.jsxs("div",{className:"flex gap-4",children:[w.jsxs("div",{children:[" ",w.jsx(Qr,{myUser:ei(o.whopaid.uid,t)})," ",`${o.whopaid.value}`," "]}),Object.values(o.users).map(m=>w.jsxs("div",{children:[w.jsx(Qr,{myUser:ei(m.uid,t)})," ",`${m.value}`]}))]})]}),w.jsx("div",{className:"flex gap-2"})]}):w.jsx("div",{children:"Error has occured"})}function WL(){const t=S.useContext(fr),e=S.useContext(QS),[n,r]=S.useState(!1),[i,s]=S.useState([]);function o(){e==null||e.payments.map(l=>{Object.values(l.users).forEach(c=>{s(d=>{if(d.filter(m=>m.paymentsIds.includes(c.id)).length>0)return[...d];{const m=d.map(_=>_.uid==c.uid&&_.payTo==l.whopaid.uid?{uid:_.uid,value:Number(_.value)+Number(c.value),payTo:_.payTo,paymentsIds:[..._.paymentsIds,c.id]}:_);let y=!0;for(let _=0;_<d.length;_++)d[_].value!==m[_].value&&(y=!1);return y?[...d,{uid:c.uid,value:Number(c.value),payTo:l.whopaid.uid,paymentsIds:[c.id]}]:[...m]}})})})}function a(){r(!0),i.forEach(l=>{i.forEach(u=>{if(l.uid===u.payTo&&l.payTo===u.uid){const c=Number(l.value)-Number(u.value);if(c>=0){const d={uid:l.uid,value:c,payTo:l.payTo,paymentsIds:[...l.paymentsIds,...u.paymentsIds]},f=i.map(_=>(_.payTo==d.payTo||_.payTo==d.uid)&&(_.uid==d.uid||_.uid==d.payTo)?(console.log(_),d):(console.log(_),_)),m=[];f.forEach((_,x)=>{f.forEach((v,h)=>{(x==h||_.paymentsIds!=v.paymentsIds)&&(m.includes(_)||m.push(_))})});const y=m.filter(_=>_.value!=0);s(y)}}})})}return S.useEffect(()=>{o()},[e]),w.jsxs(w.Fragment,{children:[n&&i.map((l,u)=>{const c=ei(l.uid,t),d=ei(l.payTo,t);return w.jsxs("div",{className:"border-2 border-themePrimary mb-3 rounded-2xl",children:[w.jsxs("div",{className:"p-2",children:["Settlement ",u+1]}),w.jsx("div",{className:"w-full h-[2px] bg-themePrimary"}),w.jsxs("div",{className:"p-2 flex flex-wrap items-center gap-2",children:[w.jsx(Js,{user:c,maxWFit:!0,border:!1})," ",w.jsx("p",{className:"font-bold text-themeDanger",children:`${l.value}`})," to ",w.jsx(Js,{user:d,maxWFit:!0,border:!1})]})]},u)}),n?null:w.jsx(Mt,{variant:"base",type:"button",onClick:a,children:"Show summary"})]})}const HL=F2([{path:"/",element:w.jsx(iL,{}),children:[{path:"/",element:w.jsx(aL,{})},{path:"/event/:id",element:w.jsx(RL,{}),children:[{path:"/event/:id/payments",element:w.jsx(jL,{})},{path:"/event/:id/",element:w.jsx(WL,{})}]},{path:"/event/:id/edit",element:w.jsx(OL,{})},{path:"/event/:id/delete",element:w.jsx(LL,{})},{path:"/event/create",element:w.jsx(PL,{})},{path:"/event/:id/payment/create",element:w.jsx(zL,{})},{path:"/event/:id/payment/:paymentId",element:w.jsx(BL,{})},{path:"/user/:id",element:w.jsx($L,{})}]},{path:"/login",element:w.jsx(sL,{})},{path:"/testing",element:w.jsx(AL,{})}]);df.createRoot(document.getElementById("root")).render(w.jsx(Zt.StrictMode,{children:w.jsx(W2,{router:HL})}));Tx();Ox();
