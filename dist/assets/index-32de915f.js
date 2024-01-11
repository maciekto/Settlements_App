function ZS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function v_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var y_={exports:{}},pc={},__={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),eC=Symbol.for("react.portal"),tC=Symbol.for("react.fragment"),nC=Symbol.for("react.strict_mode"),rC=Symbol.for("react.profiler"),iC=Symbol.for("react.provider"),sC=Symbol.for("react.context"),oC=Symbol.for("react.forward_ref"),aC=Symbol.for("react.suspense"),lC=Symbol.for("react.memo"),uC=Symbol.for("react.lazy"),ig=Symbol.iterator;function cC(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E_=Object.assign,S_={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||w_}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C_(){}C_.prototype=Ys.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||w_}var Hh=Wh.prototype=new C_;Hh.constructor=Wh;E_(Hh,Ys.prototype);Hh.isPureReactComponent=!0;var sg=Array.isArray,k_=Object.prototype.hasOwnProperty,Gh={current:null},x_={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k_.call(e,r)&&!x_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ja,type:t,key:s,ref:o,props:i,_owner:Gh.current}}function dC(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function fC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var og=/\/+/g;function ud(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fC(""+t.key):e.toString(36)}function Wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case eC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ud(o,0):r,sg(i)?(n="",t!=null&&(n=t.replace(og,"$&/")+"/"),Wl(i,e,n,"",function(u){return u})):i!=null&&(Yh(i)&&(i=dC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(og,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ud(s,a);o+=Wl(s,e,n,l,i)}else if(l=cC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ud(s,a++),o+=Wl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(t,e,n){if(t==null)return t;var r=[],i=0;return Wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Hl={transition:null},pC={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Gh};de.Children={map:ml,forEach:function(t,e,n){ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ml(t,function(){e++}),e},toArray:function(t){return ml(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Ys;de.Fragment=tC;de.Profiler=rC;de.PureComponent=Wh;de.StrictMode=nC;de.Suspense=aC;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pC;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)k_.call(e,l)&&!x_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ja,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:sC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iC,_context:t},t.Consumer=t};de.createElement=b_;de.createFactory=function(t){var e=b_.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:oC,render:t}};de.isValidElement=Yh;de.lazy=function(t){return{$$typeof:uC,_payload:{_status:-1,_result:t},_init:hC}};de.memo=function(t,e){return{$$typeof:lC,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(t,e){return Nt.current.useCallback(t,e)};de.useContext=function(t){return Nt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Nt.current.useEffect(t,e)};de.useId=function(){return Nt.current.useId()};de.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Nt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};de.useRef=function(t){return Nt.current.useRef(t)};de.useState=function(t){return Nt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Nt.current.useTransition()};de.version="18.2.0";__.exports=de;var S=__.exports;const Zt=v_(S),mC=ZS({__proto__:null,default:Zt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gC=S,vC=Symbol.for("react.element"),yC=Symbol.for("react.fragment"),_C=Object.prototype.hasOwnProperty,wC=gC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EC={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_C.call(e,r)&&!EC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vC,type:t,key:s,ref:o,props:i,_owner:wC.current}}pc.Fragment=yC;pc.jsx=I_;pc.jsxs=I_;y_.exports=pc;var w=y_.exports,uf={},T_={exports:{}},Ht={},N_={exports:{}},P_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var q=F.length;F.push(Y);e:for(;0<q;){var pe=q-1>>>1,ve=F[pe];if(0<i(ve,Y))F[pe]=Y,F[q]=ve,q=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],q=F.pop();if(q!==Y){F[0]=q;e:for(var pe=0,ve=F.length,En=ve>>>1;pe<En;){var Kt=2*(pe+1)-1,ti=F[Kt],jt=Kt+1,ke=F[jt];if(0>i(ti,q))jt<ve&&0>i(ke,ti)?(F[pe]=ke,F[jt]=q,pe=jt):(F[pe]=ti,F[Kt]=q,pe=Kt);else if(jt<ve&&0>i(ke,q))F[pe]=ke,F[jt]=q,pe=jt;else break e}}return Y}function i(F,Y){var q=F.sortIndex-Y.sortIndex;return q!==0?q:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,y=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=F)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(F){if(_=!1,g(F),!y)if(n(l)!==null)y=!0,He(C);else{var Y=n(u);Y!==null&&Qe(p,Y.startTime-F)}}function C(F,Y){y=!1,_&&(_=!1,v(P),P=-1),m=!0;var q=f;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||F&&!Z());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,f=d.priorityLevel;var ve=pe(d.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),g(Y)}else r(l);d=n(l)}if(d!==null)var En=!0;else{var Kt=n(u);Kt!==null&&Qe(p,Kt.startTime-Y),En=!1}return En}finally{d=null,f=q,m=!1}}var N=!1,k=null,P=-1,j=5,M=-1;function Z(){return!(t.unstable_now()-M<j)}function Q(){if(k!==null){var F=t.unstable_now();M=F;var Y=!0;try{Y=k(!0,F)}finally{Y?ee():(N=!1,k=null)}}else N=!1}var ee;if(typeof h=="function")ee=function(){h(Q)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=Q,ee=function(){ae.postMessage(null)}}else ee=function(){b(Q,0)};function He(F){k=F,N||(N=!0,ee())}function Qe(F,Y){P=b(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,He(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return F()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=f;f=F;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(F,Y,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=q+ve,F={id:c++,callback:Y,priorityLevel:F,startTime:q,expirationTime:ve,sortIndex:-1},q>pe?(F.sortIndex=q,e(u,F),n(l)===null&&F===n(u)&&(_?(v(P),P=-1):_=!0,Qe(p,q-pe))):(F.sortIndex=ve,e(l,F),y||m||(y=!0,He(C))),F},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(F){var Y=f;return function(){var q=f;f=Y;try{return F.apply(this,arguments)}finally{f=q}}}})(P_);N_.exports=P_;var SC=N_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=S,Wt=SC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A_=new Set,ea={};function Ui(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(ea[t]=e,t=0;t<e.length;t++)A_.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,CC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ag={},lg={};function kC(t){return cf.call(lg,t)?!0:cf.call(ag,t)?!1:CC.test(t)?lg[t]=!0:(ag[t]=!0,!1)}function xC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bC(t,e,n,r){if(e===null||typeof e>"u"||xC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kh=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kh,qh);mt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kh,qh);mt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kh,qh);mt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qh(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bC(e,n,i,r)&&(n=null),r||i===null?kC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),O_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),L_=Symbol.for("react.offscreen"),ug=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=ug&&t[ug]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,cd;function To(t){if(cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+t}var dd=!1;function fd(t,e){if(!t||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function IC(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=fd(t.type,!1),t;case 11:return t=fd(t.type.render,!1),t;case 1:return t=fd(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Qi:return"Portal";case df:return"Profiler";case Xh:return"StrictMode";case ff:return"Suspense";case hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D_:return(t.displayName||"Context")+".Consumer";case O_:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function TC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NC(t){var e=M_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=NC(t))}function F_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=M_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U_(t,e){e=e.checked,e!=null&&Qh(t,"checked",e,!1)}function gf(t,e){U_(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(No(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function j_(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,V_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PC=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){PC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function $_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function B_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wf(t,e){if(e){if(RC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cf=null,vs=null,ys=null;function pg(t){if(t=$a(t)){if(typeof Cf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=_c(e),Cf(t.stateNode,t.type,e))}}function W_(t){vs?ys?ys.push(t):ys=[t]:vs=t}function H_(){if(vs){var t=vs,e=ys;if(ys=vs=null,pg(t),e)for(t=0;t<e.length;t++)pg(e[t])}}function G_(t,e){return t(e)}function Y_(){}var hd=!1;function K_(t,e,n){if(hd)return t(e,n);hd=!0;try{return G_(t,e,n)}finally{hd=!1,(vs!==null||ys!==null)&&(Y_(),H_())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var kf=!1;if(Jn)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){kf=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{kf=!1}function AC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Do=!1,du=null,fu=!1,xf=null,OC={onError:function(t){Do=!0,du=t}};function DC(t,e,n,r,i,s,o,a,l){Do=!1,du=null,AC.apply(OC,arguments)}function LC(t,e,n,r,i,s,o,a,l){if(DC.apply(this,arguments),Do){if(Do){var u=du;Do=!1,du=null}else throw Error(O(198));fu||(fu=!0,xf=u)}}function ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mg(t){if(ji(t)!==t)throw Error(O(188))}function MC(t){var e=t.alternate;if(!e){if(e=ji(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mg(i),t;if(s===r)return mg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function Q_(t){return t=MC(t),t!==null?X_(t):null}function X_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X_(t);if(e!==null)return e;t=t.sibling}return null}var J_=Wt.unstable_scheduleCallback,gg=Wt.unstable_cancelCallback,FC=Wt.unstable_shouldYield,UC=Wt.unstable_requestPaint,qe=Wt.unstable_now,jC=Wt.unstable_getCurrentPriorityLevel,tp=Wt.unstable_ImmediatePriority,Z_=Wt.unstable_UserBlockingPriority,hu=Wt.unstable_NormalPriority,zC=Wt.unstable_LowPriority,e0=Wt.unstable_IdlePriority,mc=null,Tn=null;function VC(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:WC,$C=Math.log,BC=Math.LN2;function WC(t){return t>>>=0,t===0?32:31-($C(t)/BC|0)|0}var _l=64,wl=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Po(a):(s&=o,s!==0&&(r=Po(s)))}else o=n&~i,o!==0?r=Po(o):s!==0&&(r=Po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function HC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=HC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t0(){var t=_l;return _l<<=1,!(_l&4194240)&&(_l=64),t}function pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function YC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function n0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r0,rp,i0,s0,o0,If=!1,El=[],Tr=null,Nr=null,Pr=null,ra=new Map,ia=new Map,yr=[],KC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qC(t,e,n,r,i){switch(e){case"focusin":return Tr=ho(Tr,t,e,n,r,i),!0;case"dragenter":return Nr=ho(Nr,t,e,n,r,i),!0;case"mouseover":return Pr=ho(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ra.set(s,ho(ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ia.set(s,ho(ia.get(s)||null,t,e,n,r,i)),!0}return!1}function a0(t){var e=li(t.target);if(e!==null){var n=ji(e);if(n!==null){if(e=n.tag,e===13){if(e=q_(n),e!==null){t.blockedOn=e,o0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sf=r,n.target.dispatchEvent(r),Sf=null}else return e=$a(n),e!==null&&rp(e),t.blockedOn=n,!1;e.shift()}return!0}function yg(t,e,n){Gl(t)&&n.delete(e)}function QC(){If=!1,Tr!==null&&Gl(Tr)&&(Tr=null),Nr!==null&&Gl(Nr)&&(Nr=null),Pr!==null&&Gl(Pr)&&(Pr=null),ra.forEach(yg),ia.forEach(yg)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,If||(If=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,QC)))}function sa(t){function e(i){return po(i,t)}if(0<El.length){po(El[0],t);for(var n=1;n<El.length;n++){var r=El[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&po(Tr,t),Nr!==null&&po(Nr,t),Pr!==null&&po(Pr,t),ra.forEach(e),ia.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)a0(n),n.blockedOn===null&&yr.shift()}var _s=ar.ReactCurrentBatchConfig,mu=!0;function XC(t,e,n,r){var i=ye,s=_s.transition;_s.transition=null;try{ye=1,ip(t,e,n,r)}finally{ye=i,_s.transition=s}}function JC(t,e,n,r){var i=ye,s=_s.transition;_s.transition=null;try{ye=4,ip(t,e,n,r)}finally{ye=i,_s.transition=s}}function ip(t,e,n,r){if(mu){var i=Tf(t,e,n,r);if(i===null)kd(t,e,r,gu,n),vg(t,r);else if(qC(i,t,e,n,r))r.stopPropagation();else if(vg(t,r),e&4&&-1<KC.indexOf(t)){for(;i!==null;){var s=$a(i);if(s!==null&&r0(s),s=Tf(t,e,n,r),s===null&&kd(t,e,r,gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kd(t,e,r,null,n)}}var gu=null;function Tf(t,e,n,r){if(gu=null,t=ep(r),t=li(t),t!==null)if(e=ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=q_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gu=t,null}function l0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jC()){case tp:return 1;case Z_:return 4;case hu:case zC:return 16;case e0:return 536870912;default:return 16}default:return 16}}var Cr=null,sp=null,Yl=null;function u0(){if(Yl)return Yl;var t,e=sp,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yl=i.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function _g(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sl:_g,this.isPropagationStopped=_g,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=Gt(Ks),Va=ze({},Ks,{view:0,detail:0}),ZC=Gt(Va),md,gd,mo,gc=ze({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(md=t.screenX-mo.screenX,gd=t.screenY-mo.screenY):gd=md=0,mo=t),md)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),wg=Gt(gc),ek=ze({},gc,{dataTransfer:0}),tk=Gt(ek),nk=ze({},Va,{relatedTarget:0}),vd=Gt(nk),rk=ze({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),ik=Gt(rk),sk=ze({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ok=Gt(sk),ak=ze({},Ks,{data:0}),Eg=Gt(ak),lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ck={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ck[t])?!!e[t]:!1}function ap(){return dk}var fk=ze({},Va,{key:function(t){if(t.key){var e=lk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hk=Gt(fk),pk=ze({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=Gt(pk),mk=ze({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),gk=Gt(mk),vk=ze({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),yk=Gt(vk),_k=ze({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wk=Gt(_k),Ek=[9,13,27,32],lp=Jn&&"CompositionEvent"in window,Lo=null;Jn&&"documentMode"in document&&(Lo=document.documentMode);var Sk=Jn&&"TextEvent"in window&&!Lo,c0=Jn&&(!lp||Lo&&8<Lo&&11>=Lo),Cg=String.fromCharCode(32),kg=!1;function d0(t,e){switch(t){case"keyup":return Ek.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function Ck(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(kg=!0,Cg);case"textInput":return t=e.data,t===Cg&&kg?null:t;default:return null}}function kk(t,e){if(Ji)return t==="compositionend"||!lp&&d0(t,e)?(t=u0(),Yl=sp=Cr=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var xk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xk[t.type]:e==="textarea"}function h0(t,e,n,r){W_(r),e=vu(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,oa=null;function bk(t){k0(t,0)}function vc(t){var e=ts(t);if(F_(e))return t}function Ik(t,e){if(t==="change")return e}var p0=!1;if(Jn){var yd;if(Jn){var _d="oninput"in document;if(!_d){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),_d=typeof bg.oninput=="function"}yd=_d}else yd=!1;p0=yd&&(!document.documentMode||9<document.documentMode)}function Ig(){Mo&&(Mo.detachEvent("onpropertychange",m0),oa=Mo=null)}function m0(t){if(t.propertyName==="value"&&vc(oa)){var e=[];h0(e,oa,t,ep(t)),K_(bk,e)}}function Tk(t,e,n){t==="focusin"?(Ig(),Mo=e,oa=n,Mo.attachEvent("onpropertychange",m0)):t==="focusout"&&Ig()}function Nk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(oa)}function Pk(t,e){if(t==="click")return vc(e)}function Rk(t,e){if(t==="input"||t==="change")return vc(e)}function Ak(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:Ak;function aa(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cf.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function Tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ng(t,e){var n=Tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tg(n)}}function g0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ok(t){var e=v0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g0(n.ownerDocument.documentElement,n)){if(r!==null&&up(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ng(n,s);var o=Ng(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dk=Jn&&"documentMode"in document&&11>=document.documentMode,Zi=null,Nf=null,Fo=null,Pf=!1;function Pg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||Zi==null||Zi!==cu(r)||(r=Zi,"selectionStart"in r&&up(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&aa(Fo,r)||(Fo=r,r=vu(Nf,"onSelect"),0<r.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},wd={},y0={};Jn&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function yc(t){if(wd[t])return wd[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y0)return wd[t]=e[n];return t}var _0=yc("animationend"),w0=yc("animationiteration"),E0=yc("animationstart"),S0=yc("transitionend"),C0=new Map,Rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){C0.set(t,e),Ui(e,[t])}for(var Ed=0;Ed<Rg.length;Ed++){var Sd=Rg[Ed],Lk=Sd.toLowerCase(),Mk=Sd[0].toUpperCase()+Sd.slice(1);qr(Lk,"on"+Mk)}qr(_0,"onAnimationEnd");qr(w0,"onAnimationIteration");qr(E0,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(S0,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LC(r,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ag(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ag(i,a,u),s=l}}}if(fu)throw t=xf,fu=!1,xf=null,t}function Ne(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var r=t+"__bubble";n.has(r)||(x0(e,t,2,!1),n.add(r))}function Cd(t,e,n){var r=0;e&&(r|=4),x0(n,t,r,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[kl]){t[kl]=!0,A_.forEach(function(n){n!=="selectionchange"&&(Fk.has(n)||Cd(n,!1,t),Cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kl]||(e[kl]=!0,Cd("selectionchange",!1,e))}}function x0(t,e,n,r){switch(l0(e)){case 1:var i=XC;break;case 4:i=JC;break;default:i=ip}n=i.bind(null,e,n,t),i=void 0,!kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=li(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}K_(function(){var u=s,c=ep(n),d=[];e:{var f=C0.get(t);if(f!==void 0){var m=op,y=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":m=hk;break;case"focusin":y="focus",m=vd;break;case"focusout":y="blur",m=vd;break;case"beforeblur":case"afterblur":m=vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=tk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gk;break;case _0:case w0:case E0:m=ik;break;case S0:m=yk;break;case"scroll":m=ZC;break;case"wheel":m=wk;break;case"copy":case"cut":case"paste":m=ok;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Sg}var _=(e&4)!==0,b=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,v!==null&&(p=na(h,v),p!=null&&_.push(ua(h,p,g)))),b)break;h=h.return}0<_.length&&(f=new m(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Sf&&(y=n.relatedTarget||n.fromElement)&&(li(y)||y[Zn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?li(y):null,y!==null&&(b=ji(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=wg,p="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Sg,p="onPointerLeave",v="onPointerEnter",h="pointer"),b=m==null?f:ts(m),g=y==null?f:ts(y),f=new _(p,h+"leave",m,n,c),f.target=b,f.relatedTarget=g,p=null,li(c)===u&&(_=new _(v,h+"enter",y,n,c),_.target=g,_.relatedTarget=b,p=_),b=p,m&&y)t:{for(_=m,v=y,h=0,g=_;g;g=Gi(g))h++;for(g=0,p=v;p;p=Gi(p))g++;for(;0<h-g;)_=Gi(_),h--;for(;0<g-h;)v=Gi(v),g--;for(;h--;){if(_===v||v!==null&&_===v.alternate)break t;_=Gi(_),v=Gi(v)}_=null}else _=null;m!==null&&Og(d,f,m,_,!1),y!==null&&b!==null&&Og(d,b,y,_,!0)}}e:{if(f=u?ts(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Ik;else if(xg(f))if(p0)C=Rk;else{C=Nk;var N=Tk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Pk);if(C&&(C=C(t,u))){h0(d,C,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&vf(f,"number",f.value)}switch(N=u?ts(u):window,t){case"focusin":(xg(N)||N.contentEditable==="true")&&(Zi=N,Nf=u,Fo=null);break;case"focusout":Fo=Nf=Zi=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,Pg(d,n,c);break;case"selectionchange":if(Dk)break;case"keydown":case"keyup":Pg(d,n,c)}var k;if(lp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ji?d0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(c0&&n.locale!=="ko"&&(Ji||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ji&&(k=u0()):(Cr=c,sp="value"in Cr?Cr.value:Cr.textContent,Ji=!0)),N=vu(u,P),0<N.length&&(P=new Eg(P,t,null,n,c),d.push({event:P,listeners:N}),k?P.data=k:(k=f0(n),k!==null&&(P.data=k)))),(k=Sk?Ck(t,n):kk(t,n))&&(u=vu(u,"onBeforeInput"),0<u.length&&(c=new Eg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}k0(d,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=na(t,n),s!=null&&r.unshift(ua(t,s,i)),s=na(t,e),s!=null&&r.push(ua(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Og(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=na(n,s),l!=null&&o.unshift(ua(n,l,a))):i||(l=na(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Uk=/\r\n?/g,jk=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(Uk,`
`).replace(jk,"")}function xl(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(O(425))}function yu(){}var Rf=null,Af=null;function Of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,zk=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,Vk=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch($k)}:Df;function $k(t){setTimeout(function(){throw t})}function xd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),kn="__reactFiber$"+qs,ca="__reactProps$"+qs,Zn="__reactContainer$"+qs,Lf="__reactEvents$"+qs,Bk="__reactListeners$"+qs,Wk="__reactHandles$"+qs;function li(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mg(t);t!==null;){if(n=t[kn])return n;t=Mg(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[kn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function _c(t){return t[ca]||null}var Mf=[],ns=-1;function Qr(t){return{current:t}}function Re(t){0>ns||(t.current=Mf[ns],Mf[ns]=null,ns--)}function Ie(t,e){ns++,Mf[ns]=t.current,t.current=e}var $r={},St=Qr($r),Lt=Qr(!1),Si=$r;function Rs(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function _u(){Re(Lt),Re(St)}function Fg(t,e,n){if(St.current!==$r)throw Error(O(168));Ie(St,e),Ie(Lt,n)}function b0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,TC(t)||"Unknown",i));return ze({},n,r)}function wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,Si=St.current,Ie(St,t),Ie(Lt,Lt.current),!0}function Ug(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=b0(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,Re(Lt),Re(St),Ie(St,t)):Re(Lt),Ie(Lt,n)}var Bn=null,wc=!1,bd=!1;function I0(t){Bn===null?Bn=[t]:Bn.push(t)}function Hk(t){wc=!0,I0(t)}function Xr(){if(!bd&&Bn!==null){bd=!0;var t=0,e=ye;try{var n=Bn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,wc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),J_(tp,Xr),i}finally{ye=e,bd=!1}}return null}var rs=[],is=0,Eu=null,Su=0,Xt=[],Jt=0,Ci=null,Wn=1,Hn="";function ii(t,e){rs[is++]=Su,rs[is++]=Eu,Eu=t,Su=e}function T0(t,e,n){Xt[Jt++]=Wn,Xt[Jt++]=Hn,Xt[Jt++]=Ci,Ci=t;var r=Wn;t=Hn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-vn(e)+i|n<<i|r,Hn=s+t}else Wn=1<<s|n<<i|r,Hn=t}function cp(t){t.return!==null&&(ii(t,1),T0(t,1,0))}function dp(t){for(;t===Eu;)Eu=rs[--is],rs[is]=null,Su=rs[--is],rs[is]=null;for(;t===Ci;)Ci=Xt[--Jt],Xt[Jt]=null,Hn=Xt[--Jt],Xt[Jt]=null,Wn=Xt[--Jt],Xt[Jt]=null}var Bt=null,Vt=null,Le=!1,fn=null;function N0(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Vt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Wn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Vt=null,!0):!1;default:return!1}}function Ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(Le){var e=Vt;if(e){var n=e;if(!jg(t,e)){if(Ff(t))throw Error(O(418));e=Rr(n.nextSibling);var r=Bt;e&&jg(t,e)?N0(r,n):(t.flags=t.flags&-4097|2,Le=!1,Bt=t)}}else{if(Ff(t))throw Error(O(418));t.flags=t.flags&-4097|2,Le=!1,Bt=t}}}function zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function bl(t){if(t!==Bt)return!1;if(!Le)return zg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Of(t.type,t.memoizedProps)),e&&(e=Vt)){if(Ff(t))throw P0(),Error(O(418));for(;e;)N0(t,e),e=Rr(e.nextSibling)}if(zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Bt?Rr(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=Vt;t;)t=Rr(t.nextSibling)}function As(){Vt=Bt=null,Le=!1}function fp(t){fn===null?fn=[t]:fn.push(t)}var Gk=ar.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cu=Qr(null),ku=null,ss=null,hp=null;function pp(){hp=ss=ku=null}function mp(t){var e=Cu.current;Re(Cu),t._currentValue=e}function jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){ku=t,hp=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(ku===null)throw Error(O(308));ss=t,ku.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var ui=null;function gp(t){ui===null?ui=[t]:ui.push(t)}function R0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gp(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,gp(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,np(t,n)}}function Vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xu(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=ze({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xi|=o,t.lanes=o,t.memoizedState=d}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var O0=new R_.Component().refs;function zf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Dr(t),s=qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(yn(e,t,i,r),ql(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Dr(t),s=qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(yn(e,t,i,r),ql(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Dr(t),i=qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(yn(e,t,r,n),ql(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,r)||!aa(i,s):!0}function D0(t,e,n){var r=!1,i=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Mt(e)?Si:St.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=O0,vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Mt(e)?Si:St.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),xu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===O0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hg(t){var e=t._init;return e(t._payload)}function L0(t){function e(v,h){if(t){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Lr(v,h),v.index=0,v.sibling=null,v}function s(v,h,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,g,p){return h===null||h.tag!==6?(h=Od(g,v.mode,p),h.return=v,h):(h=i(h,g),h.return=v,h)}function l(v,h,g,p){var C=g.type;return C===Xi?c(v,h,g.props.children,p,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gr&&Hg(C)===h.type)?(p=i(h,g.props),p.ref=go(v,h,g),p.return=v,p):(p=tu(g.type,g.key,g.props,null,v.mode,p),p.ref=go(v,h,g),p.return=v,p)}function u(v,h,g,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Dd(g,v.mode,p),h.return=v,h):(h=i(h,g.children||[]),h.return=v,h)}function c(v,h,g,p,C){return h===null||h.tag!==7?(h=_i(g,v.mode,p,C),h.return=v,h):(h=i(h,g),h.return=v,h)}function d(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Od(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gl:return g=tu(h.type,h.key,h.props,null,v.mode,g),g.ref=go(v,null,h),g.return=v,g;case Qi:return h=Dd(h,v.mode,g),h.return=v,h;case gr:var p=h._init;return d(v,p(h._payload),g)}if(No(h)||co(h))return h=_i(h,v.mode,g,null),h.return=v,h;Il(v,h)}return null}function f(v,h,g,p){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,h,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gl:return g.key===C?l(v,h,g,p):null;case Qi:return g.key===C?u(v,h,g,p):null;case gr:return C=g._init,f(v,h,C(g._payload),p)}if(No(g)||co(g))return C!==null?null:c(v,h,g,p,null);Il(v,g)}return null}function m(v,h,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return v=v.get(g)||null,a(h,v,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gl:return v=v.get(p.key===null?g:p.key)||null,l(h,v,p,C);case Qi:return v=v.get(p.key===null?g:p.key)||null,u(h,v,p,C);case gr:var N=p._init;return m(v,h,g,N(p._payload),C)}if(No(p)||co(p))return v=v.get(g)||null,c(h,v,p,C,null);Il(h,p)}return null}function y(v,h,g,p){for(var C=null,N=null,k=h,P=h=0,j=null;k!==null&&P<g.length;P++){k.index>P?(j=k,k=null):j=k.sibling;var M=f(v,k,g[P],p);if(M===null){k===null&&(k=j);break}t&&k&&M.alternate===null&&e(v,k),h=s(M,h,P),N===null?C=M:N.sibling=M,N=M,k=j}if(P===g.length)return n(v,k),Le&&ii(v,P),C;if(k===null){for(;P<g.length;P++)k=d(v,g[P],p),k!==null&&(h=s(k,h,P),N===null?C=k:N.sibling=k,N=k);return Le&&ii(v,P),C}for(k=r(v,k);P<g.length;P++)j=m(k,v,P,g[P],p),j!==null&&(t&&j.alternate!==null&&k.delete(j.key===null?P:j.key),h=s(j,h,P),N===null?C=j:N.sibling=j,N=j);return t&&k.forEach(function(Z){return e(v,Z)}),Le&&ii(v,P),C}function _(v,h,g,p){var C=co(g);if(typeof C!="function")throw Error(O(150));if(g=C.call(g),g==null)throw Error(O(151));for(var N=C=null,k=h,P=h=0,j=null,M=g.next();k!==null&&!M.done;P++,M=g.next()){k.index>P?(j=k,k=null):j=k.sibling;var Z=f(v,k,M.value,p);if(Z===null){k===null&&(k=j);break}t&&k&&Z.alternate===null&&e(v,k),h=s(Z,h,P),N===null?C=Z:N.sibling=Z,N=Z,k=j}if(M.done)return n(v,k),Le&&ii(v,P),C;if(k===null){for(;!M.done;P++,M=g.next())M=d(v,M.value,p),M!==null&&(h=s(M,h,P),N===null?C=M:N.sibling=M,N=M);return Le&&ii(v,P),C}for(k=r(v,k);!M.done;P++,M=g.next())M=m(k,v,P,M.value,p),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?P:M.key),h=s(M,h,P),N===null?C=M:N.sibling=M,N=M);return t&&k.forEach(function(Q){return e(v,Q)}),Le&&ii(v,P),C}function b(v,h,g,p){if(typeof g=="object"&&g!==null&&g.type===Xi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gl:e:{for(var C=g.key,N=h;N!==null;){if(N.key===C){if(C=g.type,C===Xi){if(N.tag===7){n(v,N.sibling),h=i(N,g.props.children),h.return=v,v=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gr&&Hg(C)===N.type){n(v,N.sibling),h=i(N,g.props),h.ref=go(v,N,g),h.return=v,v=h;break e}n(v,N);break}else e(v,N);N=N.sibling}g.type===Xi?(h=_i(g.props.children,v.mode,p,g.key),h.return=v,v=h):(p=tu(g.type,g.key,g.props,null,v.mode,p),p.ref=go(v,h,g),p.return=v,v=p)}return o(v);case Qi:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(v,h.sibling),h=i(h,g.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=Dd(g,v.mode,p),h.return=v,v=h}return o(v);case gr:return N=g._init,b(v,h,N(g._payload),p)}if(No(g))return y(v,h,g,p);if(co(g))return _(v,h,g,p);Il(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,g),h.return=v,v=h):(n(v,h),h=Od(g,v.mode,p),h.return=v,v=h),o(v)):n(v,h)}return b}var Os=L0(!0),M0=L0(!1),Ba={},Nn=Qr(Ba),da=Qr(Ba),fa=Qr(Ba);function ci(t){if(t===Ba)throw Error(O(174));return t}function yp(t,e){switch(Ie(fa,e),Ie(da,t),Ie(Nn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_f(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_f(e,t)}Re(Nn),Ie(Nn,e)}function Ds(){Re(Nn),Re(da),Re(fa)}function F0(t){ci(fa.current);var e=ci(Nn.current),n=_f(e,t.type);e!==n&&(Ie(da,t),Ie(Nn,n))}function _p(t){da.current===t&&(Re(Nn),Re(da))}var Ue=Qr(0);function bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function wp(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Ql=ar.ReactCurrentDispatcher,Td=ar.ReactCurrentBatchConfig,ki=0,je=null,et=null,at=null,Iu=!1,Uo=!1,ha=0,Yk=0;function vt(){throw Error(O(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Sp(t,e,n,r,i,s){if(ki=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?Xk:Jk,t=n(r,i),Uo){s=0;do{if(Uo=!1,ha=0,25<=s)throw Error(O(301));s+=1,at=et=null,e.updateQueue=null,Ql.current=Zk,t=n(r,i)}while(Uo)}if(Ql.current=Tu,e=et!==null&&et.next!==null,ki=0,at=et=je=null,Iu=!1,e)throw Error(O(300));return t}function Cp(){var t=ha!==0;return ha=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?je.memoizedState=at=t:at=at.next=t,at}function sn(){if(et===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?je.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(O(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?je.memoizedState=at=t:at=at.next=t}return at}function pa(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ki&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,je.lanes|=c,xi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pd(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function U0(){}function j0(t,e){var n=je,r=sn(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,kp($0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,ma(9,V0.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(O(349));ki&30||z0(n,e,i)}return i}function z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,r){e.value=n,e.getSnapshot=r,B0(e)&&W0(t)}function $0(t,e,n){return n(function(){B0(e)&&W0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function W0(t){var e=er(t,1);e!==null&&yn(e,t,1,-1)}function Gg(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=Qk.bind(null,je,t),[e.memoizedState,t]}function ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function H0(){return sn().memoizedState}function Xl(t,e,n,r){var i=Cn();je.flags|=t,i.memoizedState=ma(1|e,n,void 0,r===void 0?null:r)}function Sc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Ep(r,o.deps)){i.memoizedState=ma(e,n,s,r);return}}je.flags|=t,i.memoizedState=ma(1|e,n,s,r)}function Yg(t,e){return Xl(8390656,8,t,e)}function kp(t,e){return Sc(2048,8,t,e)}function G0(t,e){return Sc(4,2,t,e)}function Y0(t,e){return Sc(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q0(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,K0.bind(null,e,t),n)}function xp(){}function Q0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return ki&21?(wn(n,e)||(n=t0(),je.lanes|=n,xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function Kk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Td.transition;Td.transition={};try{t(!1),e()}finally{ye=n,Td.transition=r}}function Z0(){return sn().memoizedState}function qk(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ew(t))tw(e,n);else if(n=R0(t,e,n,r),n!==null){var i=It();yn(n,t,r,i),nw(n,e,r)}}function Qk(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ew(t))tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,gp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=R0(t,e,i,r),n!==null&&(i=It(),yn(n,t,r,i),nw(n,e,r))}}function ew(t){var e=t.alternate;return t===je||e!==null&&e===je}function tw(t,e){Uo=Iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,np(t,n)}}var Tu={readContext:rn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Xk={readContext:rn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Gg,useDebugValue:xp,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Gg(!1),e=t[0];return t=Kk.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Cn();if(Le){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),ut===null)throw Error(O(349));ki&30||z0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yg($0.bind(null,r,s,t),[t]),r.flags|=2048,ma(9,V0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=ut.identifierPrefix;if(Le){var n=Hn,r=Wn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jk={readContext:rn,useCallback:Q0,useContext:rn,useEffect:kp,useImperativeHandle:q0,useInsertionEffect:G0,useLayoutEffect:Y0,useMemo:X0,useReducer:Nd,useRef:H0,useState:function(){return Nd(pa)},useDebugValue:xp,useDeferredValue:function(t){var e=sn();return J0(e,et.memoizedState,t)},useTransition:function(){var t=Nd(pa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:j0,useId:Z0,unstable_isNewReconciler:!1},Zk={readContext:rn,useCallback:Q0,useContext:rn,useEffect:kp,useImperativeHandle:q0,useInsertionEffect:G0,useLayoutEffect:Y0,useMemo:X0,useReducer:Pd,useRef:H0,useState:function(){return Pd(pa)},useDebugValue:xp,useDeferredValue:function(t){var e=sn();return et===null?e.memoizedState=t:J0(e,et.memoizedState,t)},useTransition:function(){var t=Pd(pa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:j0,useId:Z0,unstable_isNewReconciler:!1};function Ls(t,e){try{var n="",r=e;do n+=IC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ex=typeof WeakMap=="function"?WeakMap:Map;function rw(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pu||(Pu=!0,Jf=r),$f(t,e)},n}function iw(t,e,n){n=qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$f(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ex;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=px.bind(null,t,e,n),e.then(t,t))}function qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var tx=ar.ReactCurrentOwner,Ot=!1;function kt(t,e,n,r){e.child=t===null?M0(e,null,n,r):Os(e,t.child,n,r)}function Xg(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=Sp(t,e,n,r,s,i),n=Cp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Le&&n&&cp(e),e.flags|=1,kt(t,e,r,i),e.child)}function Jg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sw(t,e,s,r,i)):(t=tu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function sw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(aa(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Bf(t,e,n,r,i)}function ow(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(as,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(as,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(as,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(as,zt),zt|=r;return kt(t,e,i,n),e.child}function aw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,r,i){var s=Mt(n)?Si:St.current;return s=Rs(e,s),ws(e,i),n=Sp(t,e,n,r,s,i),r=Cp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Le&&r&&cp(e),e.flags|=1,kt(t,e,n,i),e.child)}function Zg(t,e,n,r,i){if(Mt(n)){var s=!0;wu(e)}else s=!1;if(ws(e,i),e.stateNode===null)Jl(t,e),D0(e,n,r),Vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Mt(n)?Si:St.current,u=Rs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wg(e,o,r,u),vr=!1;var f=e.memoizedState;o.state=f,xu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Lt.current||vr?(typeof c=="function"&&(zf(e,n,c,r),l=e.memoizedState),(a=vr||Bg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,A0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=Mt(n)?Si:St.current,l=Rs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Wg(e,o,r,l),vr=!1,f=e.memoizedState,o.state=f,xu(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Lt.current||vr?(typeof m=="function"&&(zf(e,n,m,r),y=e.memoizedState),(u=vr||Bg(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){aw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ug(e,n,!1),tr(t,e,s);r=e.stateNode,tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Ug(e,n,!0),e.child}function lw(t){var e=t.stateNode;e.pendingContext?Fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fg(t,e.context,!1),yp(t,e.containerInfo)}function ev(t,e,n,r,i){return As(),fp(i),e.flags|=256,kt(t,e,n,r),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function uw(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ue,i&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,r,0,null),t=_i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gf(n),e.memoizedState=Hf,t):bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=_i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bp(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,r){return r!==null&&fp(r),Os(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rd(Error(O(422))),Tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xc({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Gf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return Tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Rd(s,r,void 0),Tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),yn(r,t,i,-1))}return Ap(),r=Rd(Error(O(421))),Tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Rr(i.nextSibling),Bt=e,Le=!0,fn=null,t!==null&&(Xt[Jt++]=Wn,Xt[Jt++]=Hn,Xt[Jt++]=Ci,Wn=t.id,Hn=t.overflow,Ci=e),e=bp(e,r.children),e.flags|=4096,e)}function tv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jf(t.return,e,n)}function Ad(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tv(t,n,e);else if(t.tag===19)tv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ad(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ad(e,!0,n,null,s);break;case"together":Ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rx(t,e,n){switch(e.tag){case 3:lw(e),As();break;case 5:F0(e);break;case 1:Mt(e.type)&&wu(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?uw(t,e,n):(Ie(Ue,Ue.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Ie(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,ow(t,e,n)}return tr(t,e,n)}var dw,Yf,fw,hw;dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ci(Nn.current);var s=null;switch(n){case"input":i=mf(t,i),r=mf(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=yf(t,i),r=yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yu)}wf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hw=function(t,e,n,r){n!==r&&(e.flags|=4)};function vo(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ix(t,e,n){var r=e.pendingProps;switch(dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Mt(e.type)&&_u(),yt(e),null;case 3:return r=e.stateNode,Ds(),Re(Lt),Re(St),wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(th(fn),fn=null))),Yf(t,e),yt(e),null;case 5:_p(e);var i=ci(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return yt(e),null}if(t=ci(Nn.current),bl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[ca]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)Ne(Ro[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":cg(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":fg(r,s),Ne("invalid",r)}wf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,a,t),i=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":vl(r),dg(r,s,!0);break;case"textarea":vl(r),hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[ca]=r,dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)Ne(Ro[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":cg(t,r),i=mf(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":fg(t,r),i=yf(t,r),Ne("invalid",t);break;default:i=r}wf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",t):l!=null&&Qh(t,s,l,o))}switch(n){case"input":vl(t),dg(t,r,!1);break;case"textarea":vl(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)hw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=ci(fa.current),ci(Nn.current),bl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return yt(e),null;case 13:if(Re(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Vt!==null&&e.mode&1&&!(e.flags&128))P0(),As(),e.flags|=98560,s=!1;else if(s=bl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[kn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else fn!==null&&(th(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?rt===0&&(rt=3):Ap())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Ds(),Yf(t,e),t===null&&la(e.stateNode.containerInfo),yt(e),null;case 10:return mp(e.type._context),yt(e),null;case 17:return Mt(e.type)&&_u(),yt(e),null;case 19:if(Re(Ue),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vo(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bu(t),o!==null){for(e.flags|=128,vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Ms&&(e.flags|=128,r=!0,vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=bu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return yt(e),null}else 2*qe()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Ue.current,Ie(Ue,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function sx(t,e){switch(dp(e),e.tag){case 1:return Mt(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),Re(Lt),Re(St),wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(Re(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ue),null;case 4:return Ds(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var Nl=!1,wt=!1,ox=typeof WeakSet=="function"?WeakSet:Set,$=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Kf(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var nv=!1;function ax(t,e){if(Rf=mu,t=v0(),up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:t,selectionRange:n},mu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,b=y.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:un(e.type,_),b);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=nv,nv=!1,y}function jo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kf(e,n,s)}i=i.next}while(i!==r)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pw(t){var e=t.alternate;e!==null&&(t.alternate=null,pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[ca],delete e[Lf],delete e[Bk],delete e[Wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mw(t){return t.tag===5||t.tag===3||t.tag===4}function rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yu));else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var dt=null,cn=!1;function hr(t,e,n){for(n=n.child;n!==null;)gw(t,e,n),n=n.sibling}function gw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:wt||os(n,e);case 6:var r=dt,i=cn;dt=null,hr(t,e,n),dt=r,cn=i,dt!==null&&(cn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(cn?(t=dt,n=n.stateNode,t.nodeType===8?xd(t.parentNode,n):t.nodeType===1&&xd(t,n),sa(t)):xd(dt,n.stateNode));break;case 4:r=dt,i=cn,dt=n.stateNode.containerInfo,cn=!0,hr(t,e,n),dt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!wt&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,hr(t,e,n),wt=r):hr(t,e,n);break;default:hr(t,e,n)}}function iv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ox),e.forEach(function(r){var i=gx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,cn=!1;break e;case 3:dt=a.stateNode.containerInfo,cn=!0;break e;case 4:dt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(dt===null)throw Error(O(160));gw(s,o,i),dt=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vw(e,t),e=e.sibling}function vw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),Sn(t),r&4){try{jo(3,t,t.return),Cc(3,t)}catch(_){Ve(t,t.return,_)}try{jo(5,t,t.return)}catch(_){Ve(t,t.return,_)}}break;case 1:ln(e,t),Sn(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(ln(e,t),Sn(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{ta(i,"")}catch(_){Ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&U_(i,s),Ef(a,o);var u=Ef(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?B_(i,d):c==="dangerouslySetInnerHTML"?V_(i,d):c==="children"?ta(i,d):Qh(i,c,d,u)}switch(a){case"input":gf(i,s);break;case"textarea":j_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?gs(i,!!s.multiple,s.defaultValue,!0):gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ca]=s}catch(_){Ve(t,t.return,_)}}break;case 6:if(ln(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ve(t,t.return,_)}}break;case 3:if(ln(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(_){Ve(t,t.return,_)}break;case 4:ln(e,t),Sn(t);break;case 13:ln(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Np=qe())),r&4&&iv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,ln(e,t),wt=u):ln(e,t),Sn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(d=$=c;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:jo(4,f,f.return);break;case 1:os(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Ve(r,n,_)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){ov(d);continue}}m!==null?(m.return=f,$=m):ov(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$_("display",o))}catch(_){Ve(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(e,t),Sn(t),r&4&&iv(t);break;case 21:break;default:ln(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mw(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var s=rv(t);Xf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=rv(t);Qf(t,a,o);break;default:throw Error(O(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lx(t,e,n){$=t,yw(t)}function yw(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Nl;var u=wt;if(Nl=o,(wt=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?av(i):l!==null?(l.return=o,$=l):av(i);for(;s!==null;)$=s,yw(s),s=s.sibling;$=i,Nl=a,wt=u}sv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):sv(t)}}function sv(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$g(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}wt||e.flags&512&&qf(e)}catch(f){Ve(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function ov(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function av(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{qf(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var ux=Math.ceil,Nu=ar.ReactCurrentDispatcher,Ip=ar.ReactCurrentOwner,nn=ar.ReactCurrentBatchConfig,he=0,ut=null,Je=null,pt=0,zt=0,as=Qr(0),rt=0,ga=null,xi=0,kc=0,Tp=0,zo=null,At=null,Np=0,Ms=1/0,$n=null,Pu=!1,Jf=null,Or=null,Pl=!1,kr=null,Ru=0,Vo=0,Zf=null,Zl=-1,eu=0;function It(){return he&6?qe():Zl!==-1?Zl:Zl=qe()}function Dr(t){return t.mode&1?he&2&&pt!==0?pt&-pt:Gk.transition!==null?(eu===0&&(eu=t0()),eu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:l0(t.type)),t):1}function yn(t,e,n,r){if(50<Vo)throw Vo=0,Zf=null,Error(O(185));za(t,n,r),(!(he&2)||t!==ut)&&(t===ut&&(!(he&2)&&(kc|=n),rt===4&&_r(t,pt)),Ft(t,r),n===1&&he===0&&!(e.mode&1)&&(Ms=qe()+500,wc&&Xr()))}function Ft(t,e){var n=t.callbackNode;GC(t,e);var r=pu(t,t===ut?pt:0);if(r===0)n!==null&&gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gg(n),e===1)t.tag===0?Hk(lv.bind(null,t)):I0(lv.bind(null,t)),Vk(function(){!(he&6)&&Xr()}),n=null;else{switch(n0(r)){case 1:n=tp;break;case 4:n=Z_;break;case 16:n=hu;break;case 536870912:n=e0;break;default:n=hu}n=bw(n,_w.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _w(t,e){if(Zl=-1,eu=0,he&6)throw Error(O(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=pu(t,t===ut?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Au(t,r);else{e=r;var i=he;he|=2;var s=Ew();(ut!==t||pt!==e)&&($n=null,Ms=qe()+500,yi(t,e));do try{fx();break}catch(a){ww(t,a)}while(1);pp(),Nu.current=s,he=i,Je!==null?e=0:(ut=null,pt=0,e=rt)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=eh(t,i))),e===1)throw n=ga,yi(t,0),_r(t,r),Ft(t,qe()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!cx(i)&&(e=Au(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=eh(t,s))),e===1))throw n=ga,yi(t,0),_r(t,r),Ft(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:si(t,At,$n);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=Np+500-qe(),10<e)){if(pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Df(si.bind(null,t,At,$n),e);break}si(t,At,$n);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ux(r/1960))-r,10<r){t.timeoutHandle=Df(si.bind(null,t,At,$n),r);break}si(t,At,$n);break;case 5:si(t,At,$n);break;default:throw Error(O(329))}}}return Ft(t,qe()),t.callbackNode===n?_w.bind(null,t):null}function eh(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Au(t,e),t!==2&&(e=At,At=n,e!==null&&th(e)),t}function th(t){At===null?At=t:At.push.apply(At,t)}function cx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Tp,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function lv(t){if(he&6)throw Error(O(327));Es();var e=pu(t,0);if(!(e&1))return Ft(t,qe()),null;var n=Au(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=eh(t,r))}if(n===1)throw n=ga,yi(t,0),_r(t,e),Ft(t,qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,At,$n),Ft(t,qe()),null}function Pp(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Ms=qe()+500,wc&&Xr())}}function bi(t){kr!==null&&kr.tag===0&&!(he&6)&&Es();var e=he;he|=1;var n=nn.transition,r=ye;try{if(nn.transition=null,ye=1,t)return t()}finally{ye=r,nn.transition=n,he=e,!(he&6)&&Xr()}}function Rp(){zt=as.current,Re(as)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zk(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:Ds(),Re(Lt),Re(St),wp();break;case 5:_p(r);break;case 4:Ds();break;case 13:Re(Ue);break;case 19:Re(Ue);break;case 10:mp(r.type._context);break;case 22:case 23:Rp()}n=n.return}if(ut=t,Je=t=Lr(t.current,null),pt=zt=e,rt=0,ga=null,Tp=kc=xi=0,At=zo=null,ui!==null){for(e=0;e<ui.length;e++)if(n=ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ui=null}return t}function ww(t,e){do{var n=Je;try{if(pp(),Ql.current=Tu,Iu){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Iu=!1}if(ki=0,at=et=je=null,Uo=!1,ha=0,Ip.current=null,n===null||n.return===null){rt=1,ga=e,Je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=qg(o);if(m!==null){m.flags&=-257,Qg(m,o,a,s,e),m.mode&1&&Kg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Kg(s,u,e),Ap();break e}l=Error(O(426))}}else if(Le&&a.mode&1){var b=qg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qg(b,o,a,s,e),fp(Ls(l,a));break e}}s=l=Ls(l,a),rt!==4&&(rt=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=rw(s,l,e);Vg(s,v);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Or===null||!Or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=iw(s,a,e);Vg(s,p);break e}}s=s.return}while(s!==null)}Cw(n)}catch(C){e=C,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function Ew(){var t=Nu.current;return Nu.current=Tu,t===null?Tu:t}function Ap(){(rt===0||rt===3||rt===2)&&(rt=4),ut===null||!(xi&268435455)&&!(kc&268435455)||_r(ut,pt)}function Au(t,e){var n=he;he|=2;var r=Ew();(ut!==t||pt!==e)&&($n=null,yi(t,e));do try{dx();break}catch(i){ww(t,i)}while(1);if(pp(),he=n,Nu.current=r,Je!==null)throw Error(O(261));return ut=null,pt=0,rt}function dx(){for(;Je!==null;)Sw(Je)}function fx(){for(;Je!==null&&!FC();)Sw(Je)}function Sw(t){var e=xw(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?Cw(t):Je=e,Ip.current=null}function Cw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sx(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=ix(n,e,zt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function si(t,e,n){var r=ye,i=nn.transition;try{nn.transition=null,ye=1,hx(t,e,n,r)}finally{nn.transition=i,ye=r}return null}function hx(t,e,n,r){do Es();while(kr!==null);if(he&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YC(t,s),t===ut&&(Je=ut=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,bw(hu,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=ye;ye=1;var a=he;he|=4,Ip.current=null,ax(t,n),vw(n,t),Ok(Af),mu=!!Rf,Af=Rf=null,t.current=n,lx(n),UC(),he=a,ye=o,nn.transition=s}else t.current=n;if(Pl&&(Pl=!1,kr=t,Ru=i),s=t.pendingLanes,s===0&&(Or=null),VC(n.stateNode),Ft(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pu)throw Pu=!1,t=Jf,Jf=null,t;return Ru&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===Zf?Vo++:(Vo=0,Zf=t):Vo=0,Xr(),null}function Es(){if(kr!==null){var t=n0(Ru),e=nn.transition,n=ye;try{if(nn.transition=null,ye=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,Ru=0,he&6)throw Error(O(331));var i=he;for(he|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:jo(8,c,s)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var f=c.sibling,m=c.return;if(pw(c),c===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var b=_.sibling;_.sibling=null,_=b}while(_!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var h=t.current;for($=h;$!==null;){o=$;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,$=g;else e:for(o=h;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(C){Ve(a,a.return,C)}if(a===o){$=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,$=p;break e}$=a.return}}if(he=i,Xr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(mc,t)}catch{}r=!0}return r}finally{ye=n,nn.transition=e}}return!1}function uv(t,e,n){e=Ls(n,e),e=rw(t,e,1),t=Ar(t,e,1),e=It(),t!==null&&(za(t,1,e),Ft(t,e))}function Ve(t,e,n){if(t.tag===3)uv(t,t,n);else for(;e!==null;){if(e.tag===3){uv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=Ls(n,t),t=iw(e,t,1),e=Ar(e,t,1),t=It(),e!==null&&(za(e,1,t),Ft(e,t));break}}e=e.return}}function px(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(pt&n)===n&&(rt===4||rt===3&&(pt&130023424)===pt&&500>qe()-Np?yi(t,0):Tp|=n),Ft(t,e)}function kw(t,e){e===0&&(t.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var n=It();t=er(t,e),t!==null&&(za(t,e,n),Ft(t,n))}function mx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kw(t,n)}function gx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),kw(t,n)}var xw;xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,rx(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Le&&e.flags&1048576&&T0(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var i=Rs(e,St.current);ws(e,n),i=Sp(null,e,r,t,i,n);var s=Cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vp(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Vf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&cp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yx(r),t=un(r,t),i){case 0:e=Bf(null,e,r,t,n);break e;case 1:e=Zg(null,e,r,t,n);break e;case 11:e=Xg(null,e,r,t,n);break e;case 14:e=Jg(null,e,r,un(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Zg(t,e,r,i,n);case 3:e:{if(lw(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,A0(t,e),xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ls(Error(O(423)),e),e=ev(t,e,r,n,i);break e}else if(r!==i){i=Ls(Error(O(424)),e),e=ev(t,e,r,n,i);break e}else for(Vt=Rr(e.stateNode.containerInfo.firstChild),Bt=e,Le=!0,fn=null,n=M0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),r===i){e=tr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return F0(e),t===null&&Uf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Of(r,i)?o=null:s!==null&&Of(r,s)&&(e.flags|=32),aw(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return uw(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Xg(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Cu,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Lt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=rn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Jg(t,e,r,i,n);case 15:return sw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Jl(t,e),e.tag=1,Mt(r)?(t=!0,wu(e)):t=!1,ws(e,n),D0(e,r,i),Vf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return cw(t,e,n);case 22:return ow(t,e,n)}throw Error(O(156,e.tag))};function bw(t,e){return J_(t,e)}function vx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new vx(t,e,n,r)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yx(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Zh)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return _i(n.children,i,s,e);case Xh:o=8,i|=8;break;case df:return t=en(12,n,e,i|2),t.elementType=df,t.lanes=s,t;case ff:return t=en(13,n,e,i),t.elementType=ff,t.lanes=s,t;case hf:return t=en(19,n,e,i),t.elementType=hf,t.lanes=s,t;case L_:return xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O_:o=10;break e;case D_:o=9;break e;case Jh:o=11;break e;case Zh:o=14;break e;case gr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _i(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function xc(t,e,n,r){return t=en(22,t,r,e),t.elementType=L_,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Dd(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _x(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dp(t,e,n,r,i,s,o,a,l){return t=new _x(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function wx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Iw(t){if(!t)return $r;t=t._reactInternals;e:{if(ji(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(Mt(n))return b0(t,n,e)}return e}function Tw(t,e,n,r,i,s,o,a,l){return t=Dp(n,r,!0,t,i,s,o,a,l),t.context=Iw(null),n=t.current,r=It(),i=Dr(n),s=qn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,za(t,i,r),Ft(t,r),t}function bc(t,e,n,r){var i=e.current,s=It(),o=Dr(i);return n=Iw(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(yn(t,i,o,s),ql(t,i,o)),o}function Ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lp(t,e){cv(t,e),(t=t.alternate)&&cv(t,e)}function Ex(){return null}var Nw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mp(t){this._internalRoot=t}Ic.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));bc(t,e,null,null)};Ic.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){bc(null,t,null,null)}),e[Zn]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=s0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&a0(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function Sx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ou(o);s.call(u)}}var o=Tw(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[Zn]=o.current,la(t.nodeType===8?t.parentNode:t),bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ou(l);a.call(u)}}var l=Dp(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=l,t[Zn]=l.current,la(t.nodeType===8?t.parentNode:t),bi(function(){bc(e,l,n,r)}),l}function Nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ou(o);a.call(l)}}bc(e,o,t,i)}else o=Sx(n,e,t,i,r);return Ou(o)}r0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(np(e,n|1),Ft(e,qe()),!(he&6)&&(Ms=qe()+500,Xr()))}break;case 13:bi(function(){var r=er(t,1);if(r!==null){var i=It();yn(r,t,1,i)}}),Lp(t,1)}};rp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=It();yn(e,t,134217728,n)}Lp(t,134217728)}};i0=function(t){if(t.tag===13){var e=Dr(t),n=er(t,e);if(n!==null){var r=It();yn(n,t,e,r)}Lp(t,e)}};s0=function(){return ye};o0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Cf=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error(O(90));F_(r),gf(r,i)}}}break;case"textarea":j_(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};G_=Pp;Y_=bi;var Cx={usingClientEntryPoint:!1,Events:[$a,ts,_c,W_,H_,Pp]},yo={findFiberByHostInstance:li,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kx={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q_(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||Ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{mc=Rl.inject(kx),Tn=Rl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(O(200));return wx(t,e,null,n)};Ht.createRoot=function(t,e){if(!Fp(t))throw Error(O(299));var n=!1,r="",i=Nw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dp(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,la(t.nodeType===8?t.parentNode:t),new Mp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=Q_(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return bi(t)};Ht.hydrate=function(t,e,n){if(!Tc(e))throw Error(O(200));return Nc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Nw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tw(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,la(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ic(e)};Ht.render=function(t,e,n){if(!Tc(e))throw Error(O(200));return Nc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(O(40));return t._reactRootContainer?(bi(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Pp;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Nc(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function Pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pw)}catch(t){console.error(t)}}Pw(),T_.exports=Ht;var xx=T_.exports,fv=xx;uf.createRoot=fv.createRoot,uf.hydrateRoot=fv.hydrateRoot;const bx=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ix(t){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n=`${{}.PUBLIC_URL}/service-worker.js`;bx?(Tx(n,t),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Rw(n,t)})}}function Rw(t,e){navigator.serviceWorker.register(t).then(n=>{n.onupdatefound=()=>{const r=n.installing;r!=null&&(r.onstatechange=()=>{r.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(n=>{console.error("Error during service worker registration:",n)})}function Tx(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");n.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(i=>{i.unregister().then(()=>{window.location.reload()})}):Rw(t,e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const Nx="modulepreload",Px=function(t){return"/"+t},hv={},Rx=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Px(s),s in hv)return;hv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Nx,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Ax=t=>{t&&t instanceof Function&&Rx(()=>import("./web-vitals-9f4c2f45.js"),[]).then(({getCLS:e,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{e(t),n(t),r(t),i(t),s(t)})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw Qs(e)},Qs=function(t){return new Error("Firebase Database ("+Aw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ox=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ox(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Dx;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dw=function(t){const e=Ow(t);return Up.encodeByteArray(e,!0)},Du=function(t){return Dw(t).replace(/\./g,"")},Lu=function(t){try{return Up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){return Lw(void 0,t)}function Lw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mx(n)||(t[n]=Lw(t[n],e[n]));return t}function Mx(t){return t!=="__proto__"}/**
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
 */function Fx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ux=()=>Fx().__FIREBASE_DEFAULTS__,jx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lu(t[1]);return e&&JSON.parse(e)},jp=()=>{try{return Ux()||jx()||zx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mw=t=>{var e,n;return(n=(e=jp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vx=t=>{const e=Mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fw=()=>{var t;return(t=jp())===null||t===void 0?void 0:t.config},Uw=t=>{var e;return(e=jp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function $x(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Du(JSON.stringify(n)),Du(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Bx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wx(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zw(){return Aw.NODE_ADMIN===!0}function Hx(){try{return typeof indexedDB=="object"}catch{return!1}}function Gx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="FirebaseError";class Jr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yx,Object.setPrototypeOf(this,Jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jr(i,a,r)}}function Kx(t,e){return t.replace(qx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=va(Lu(s[0])||""),n=va(Lu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Qx=function(t){const e=Vw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Xx=function(t){const e=Vw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Fu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(pv(s)&&pv(o)){if(!Fu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Zx(t,e){const n=new eb(t,e);return n.subscribe.bind(n)}class eb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ld),i.error===void 0&&(i.error=Ld),i.complete===void 0&&(i.complete=Ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}function Pc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oi="[DEFAULT]";/**
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
 */class rb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sb(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ib(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ib(t){return t===oi?void 0:t}function sb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ob{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const ab={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},lb=we.INFO,ub={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},cb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ub[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vp{constructor(e){this.name=e,this._logLevel=lb,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ab[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const db=(t,e)=>e.some(n=>t instanceof n);let mv,gv;function fb(){return mv||(mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hb(){return gv||(gv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $w=new WeakMap,rh=new WeakMap,Bw=new WeakMap,Md=new WeakMap,$p=new WeakMap;function pb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$w.set(n,t)}).catch(()=>{}),$p.set(e,t),e}function mb(t){if(rh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rh.set(t,e)}let ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gb(t){ih=t(ih)}function vb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fd(this),e,...n);return Bw.set(r,e.sort?e.sort():[e]),Mr(r)}:hb().includes(t)?function(...e){return t.apply(Fd(this),e),Mr($w.get(this))}:function(...e){return Mr(t.apply(Fd(this),e))}}function yb(t){return typeof t=="function"?vb(t):(t instanceof IDBTransaction&&mb(t),db(t,fb())?new Proxy(t,ih):t)}function Mr(t){if(t instanceof IDBRequest)return pb(t);if(Md.has(t))return Md.get(t);const e=yb(t);return e!==t&&(Md.set(t,e),$p.set(e,t)),e}const Fd=t=>$p.get(t);function _b(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wb=["get","getKey","getAll","getAllKeys","count"],Eb=["put","add","delete","clear"],Ud=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Eb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ud.set(e,s),s}gb(t=>({...t,get:(e,n,r)=>vv(e,n)||t.get(e,n,r),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
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
 */class Sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",yv="0.9.20";/**
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
 */const Ti=new Vp("@firebase/app"),kb="@firebase/app-compat",xb="@firebase/analytics-compat",bb="@firebase/analytics",Ib="@firebase/app-check-compat",Tb="@firebase/app-check",Nb="@firebase/auth",Pb="@firebase/auth-compat",Rb="@firebase/database",Ab="@firebase/database-compat",Ob="@firebase/functions",Db="@firebase/functions-compat",Lb="@firebase/installations",Mb="@firebase/installations-compat",Fb="@firebase/messaging",Ub="@firebase/messaging-compat",jb="@firebase/performance",zb="@firebase/performance-compat",Vb="@firebase/remote-config",$b="@firebase/remote-config-compat",Bb="@firebase/storage",Wb="@firebase/storage-compat",Hb="@firebase/firestore",Gb="@firebase/firestore-compat",Yb="firebase",Kb="10.5.0";/**
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
 */const oh="[DEFAULT]",qb={[sh]:"fire-core",[kb]:"fire-core-compat",[bb]:"fire-analytics",[xb]:"fire-analytics-compat",[Tb]:"fire-app-check",[Ib]:"fire-app-check-compat",[Nb]:"fire-auth",[Pb]:"fire-auth-compat",[Rb]:"fire-rtdb",[Ab]:"fire-rtdb-compat",[Ob]:"fire-fn",[Db]:"fire-fn-compat",[Lb]:"fire-iid",[Mb]:"fire-iid-compat",[Fb]:"fire-fcm",[Ub]:"fire-fcm-compat",[jb]:"fire-perf",[zb]:"fire-perf-compat",[Vb]:"fire-rc",[$b]:"fire-rc-compat",[Bb]:"fire-gcs",[Wb]:"fire-gcs-compat",[Hb]:"fire-fst",[Gb]:"fire-fst-compat","fire-js":"fire-js",[Yb]:"fire-js-all"};/**
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
 */const Uu=new Map,ah=new Map;function Qb(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(ah.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;ah.set(e,t);for(const n of Uu.values())Qb(n,t);return!0}function Bp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fr=new Ha("app","Firebase",Xb);/**
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
 */class Jb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=Kb;function Ww(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=Fw()),!n)throw Fr.create("no-options");const s=Uu.get(i);if(s){if(Fu(n,s.options)&&Fu(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new ob(i);for(const l of ah.values())o.addComponent(l);const a=new Jb(n,r,o);return Uu.set(i,a),a}function Hw(t=oh){const e=Uu.get(t);if(!e&&t===oh&&Fw())return Ww();if(!e)throw Fr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let i=(r=qb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Us(new Ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zb="firebase-heartbeat-database",eI=1,ya="firebase-heartbeat-store";let jd=null;function Gw(){return jd||(jd=_b(Zb,eI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ya)}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),jd}async function tI(t){try{return await(await Gw()).transaction(ya).objectStore(ya).get(Yw(t))}catch(e){if(e instanceof Jr)Ti.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(n.message)}}}async function _v(t,e){try{const r=(await Gw()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,Yw(t)),await r.done}catch(n){if(n instanceof Jr)Ti.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ti.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nI=1024,rI=30*24*60*60*1e3;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wv(),{heartbeatsToSend:n,unsentEntries:r}=sI(this._heartbeatsCache.heartbeats),i=Du(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wv(){return new Date().toISOString().substring(0,10)}function sI(t,e=nI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ev(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hx()?Gx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ev(t){return Du(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aI(t){Us(new Ii("platform-logger",e=>new Sb(e),"PRIVATE")),Us(new Ii("heartbeat",e=>new iI(e),"PRIVATE")),Ur(sh,yv,t),Ur(sh,yv,"esm2017"),Ur("fire-js","")}aI("");var lI="firebase",uI="10.5.0";/**
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
 */Ur(lI,uI,"app");const Sv="@firebase/database",Cv="1.0.1";/**
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
 */let Kw="";function cI(t){Kw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:va(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dI(e)}}catch{}return new fI},di=qw("localStorage"),lh=qw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Vp("@firebase/database"),hI=function(){let t=1;return function(){return t++}}(),Qw=function(t){const e=nb(t),n=new Jx;n.update(e);const r=n.digest();return Up.encodeByteArray(r)},Ga=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ga.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let wi=null,kv=!0;const pI=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ss.logLevel=we.VERBOSE,wi=Ss.log.bind(Ss),e&&lh.set("logging_enabled",!0)):typeof t=="function"?wi=t:(wi=null,lh.remove("logging_enabled"))},ft=function(...t){if(kv===!0&&(kv=!1,wi===null&&lh.get("logging_enabled")===!0&&pI(!0)),wi){const e=Ga.apply(null,t);wi(e)}},Ya=function(t){return function(...e){ft(t,...e)}},uh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ga(...t);Ss.error(e)},nr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ga(...t)}`;throw Ss.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+Ga(...t);Ss.warn(e)},mI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},js="[MIN_NAME]",Ni="[MAX_NAME]",zi=function(t,e){if(t===e)return 0;if(t===js||e===Ni)return-1;if(e===js||t===Ni)return 1;{const n=xv(t),r=xv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vI=function(t,e){return t===e?0:t<e?-1:1},_o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Hp=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=Hp(t[e[r]]);return n+="}",n},Xw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Jw=function(t){L(!Wp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},yI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_I=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const EI=new RegExp("^-?(0*)\\d{1,10}$"),SI=-2147483648,CI=2147483647,xv=function(t){if(EI.test(t)){const e=Number(t);if(e>=SI&&e<=CI)return e}return null},Zs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},kI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$o=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class Cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="5",Zw="v",e1="s",t1="r",n1="f",r1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,i1="ls",s1="p",ch="ac",o1="websocket",a1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function II(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function u1(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===o1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===a1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);II(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd={},Vd={};function Yp(t){const e=t.toString();return zd[e]||(zd[e]=new TI),zd[e]}function NI(t,e){const n=t.toString();return Vd[n]||(Vd[n]=e()),Vd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="start",RI="close",AI="pLPCommand",OI="pRTLPCB",c1="id",d1="pw",f1="ser",DI="cb",LI="seg",MI="ts",FI="d",UI="dframe",h1=1870,p1=30,jI=h1-p1,zI=25e3,VI=3e4;class ls{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ya(e),this.stats_=Yp(n),this.urlFn=l=>(this.appCheckToken&&(l[ch]=this.appCheckToken),u1(n,a1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VI)),gI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bv)this.id=a,this.password=l;else if(o===RI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[bv]="t",r[f1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[DI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Zw]=Gp,this.transportSessionId&&(r[e1]=this.transportSessionId),this.lastSessionId&&(r[i1]=this.lastSessionId),this.applicationId&&(r[s1]=this.applicationId),this.appCheckToken&&(r[ch]=this.appCheckToken),typeof location<"u"&&location.hostname&&r1.test(location.hostname)&&(r[t1]=n1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yI()&&!_I()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Dw(n),i=Xw(r,jI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UI]="t",r[c1]=e,r[d1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hI(),window[AI+this.uniqueCallbackIdentifier]=e,window[OI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[c1]=this.myID,e[d1]=this.myPW,e[f1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+p1+r.length<=h1;){const o=this.pendingSegs.shift();r=r+"&"+LI+i+"="+o.seg+"&"+MI+i+"="+o.ts+"&"+FI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(zI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=16384,BI=45e3;let ju=null;typeof MozWebSocket<"u"?ju=MozWebSocket:typeof WebSocket<"u"&&(ju=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ya(this.connId),this.stats_=Yp(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Zw]=Gp,typeof location<"u"&&location.hostname&&r1.test(location.hostname)&&(o[t1]=n1),n&&(o[e1]=n),r&&(o[i1]=r),i&&(o[ch]=i),s&&(o[s1]=s),u1(e,o1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,di.set("previous_websocket_failure",!0);try{let r;zw(),this.mySock=new ju(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ju!==null&&!hn.forceDisallow_}static previouslyFailed(){return di.isInMemoryStorage||di.get("previous_websocket_failure")===!0}markConnectionHealthy(){di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=va(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Xw(n,$I);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of _a.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);_a.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_a.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=6e4,HI=5e3,GI=10*1024,YI=100*1024,$d="t",Iv="d",KI="s",Tv="r",qI="e",Nv="o",Pv="a",Rv="n",Av="p",QI="h";class XI{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ya("c:"+this.id+":"),this.transportManager_=new _a(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$o(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($d in e){const n=e[$d];n===Pv?this.upgradeIfSecondaryHealthy_():n===Tv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_o("t",e),r=_o("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Av,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_o("t",e),r=_o("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_o($d,e);if(Iv in e){const r=e[Iv];if(n===QI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Rv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KI?this.onConnectionShutdown_(r):n===Tv?this.onReset_(r):n===qI?uh("Server Error: "+r):n===Nv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gp!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$o(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$o(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Av,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends g1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zu}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=32,Dv=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Br(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function qp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function JI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function v1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return bt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ZI(t,e){const n=wa(t,0),r=wa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=zi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Qp(t,e){if(Br(t)!==Br(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Br(t)>Br(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class eT{constructor(e,n){this.errorPrefix_=n,this.parts_=wa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Rc(this.parts_[r]);y1(this)}}function tT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rc(e),y1(t)}function nT(t){const e=t.parts_.pop();t.byteLength_-=Rc(e),t.parts_.length>0&&(t.byteLength_-=1)}function y1(t){if(t.byteLength_>Dv)throw new Error(t.errorPrefix_+"has a key path longer than "+Dv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ov)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ov+") or object contains a cycle "+ai(t))}function ai(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends g1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Xp}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=1e3,rT=60*5*1e3,Lv=30*1e3,iT=1.3,sT=3e4,oT="server_kill",Mv=3;class Qn extends m1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qn.nextPersistentConnectionId_++,this.log_=Ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wo,this.maxReconnectDelay_=rT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Wa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Qn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const r=Fs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Qx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uh("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sT&&(this.reconnectDelay_=wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Qn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new XI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Tt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(oT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Tt(d),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nh(this.interruptReasons_)&&(this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mv&&(this.reconnectDelay_=Lv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Kw.replace(/\./g,"-")]=1,zp()?e["framework.cordova"]=1:jw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zu.getInstance().currentlyOnline();return nh(this.interruptReasons_)&&e}}Qn.nextPersistentConnectionId_=0;Qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(js,e),i=new oe(js,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;class _1 extends Ac{static get __EMPTY_NODE(){return Al}static set __EMPTY_NODE(e){Al=e}compare(e,n){return zi(e.name,n.name)}isDefinedOn(e){throw Qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Ni,Al)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Al)}toString(){return".key"}}const ks=new _1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??Dt.EMPTY_NODE,this.right=s??Dt.EMPTY_NODE}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class aT{copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ol(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new aT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e){return zi(t.name,e.name)}function Jp(t,e){return zi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh;function uT(t){dh=t}const w1=function(t){return typeof t=="number"?"number:"+Jw(t):"string:"+t},E1=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else L(t===dh||t.isEmpty(),"priority of unexpected type.");L(t===dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E1(this.priorityNode_)}static set __childrenNodeConstructor(e){Fv=e}static get __childrenNodeConstructor(){return Fv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:se(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+w1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jw(this.value_):e+=this.value_,this.lazyHash_=Qw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(n),s=ot.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S1,C1;function cT(t){S1=t}function dT(t){C1=t}class fT extends Ac{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Ni,new ot("[PRIORITY-POST]",C1))}makePost(e,n){const r=S1(e);return new oe(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new fT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=Math.log(2);class pT{constructor(e){const n=s=>parseInt(Math.log(s)/hT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new lt(f,d.node,lt.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),_=i(m+1,u);return d=t[m],f=n?n(d):d,new lt(f,d.node,lt.BLACK,y,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,_){const b=d-y,v=d;d-=y;const h=i(b+1,v),g=t[b],p=n?n(g):g;m(new lt(p,g.node,_,null,h))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(y+1));_?f(b,lt.BLACK):(f(b,lt.BLACK),f(b,lt.RED))}return c},o=new pT(t.length),a=s(o);return new Dt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;const Yi={};class Gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Yi&&We,"ChildrenNode.ts has not been loaded"),Bd=Bd||new Gn({".priority":Yi},{".priority":We}),Bd}get(e){const n=Fs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vu(r,e.getCompare()):a=Yi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Gn(c,u)}addToIndexes(e,n){const r=Mu(this.indexes_,(i,s)=>{const o=Fs(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Yi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Vu(a,o.getCompare())}else return Yi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Gn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Mu(this.indexes_,i=>{if(i===Yi)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new Gn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&E1(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Eo||(Eo=new J(new Dt(Jp),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Eo}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Eo:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Eo:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{L(se(e)!==".priority"||Br(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+w1(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Qw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ka?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mT extends J{constructor(){super(new Dt(Jp),J.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Ka=new mT;Object.defineProperties(oe,{MIN:{value:new oe(js,J.EMPTY_NODE)},MAX:{value:new oe(Ni,Ka)}});_1.__EMPTY_NODE=J.EMPTY_NODE;ot.__childrenNodeConstructor=J;uT(Ka);dT(Ka);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=!0;function tt(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,tt(e))}if(!(t instanceof Array)&&gT){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=Vu(n,lT,o=>o.name,Jp);if(r){const o=Vu(n,We.getCompare());return new J(s,tt(e),new Gn({".priority":o},{".priority":We}))}else return new J(s,tt(e),Gn.Default)}else{let n=J.EMPTY_NODE;return gt(t,(r,i)=>{if(On(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}cT(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Ac{constructor(e){super(),this.indexPath_=e,L(!ce(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zi(e.name,n.name):s}makePost(e,n){const r=tt(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Ka);return new oe(Ni,e)}toString(){return wa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT extends Ac{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=tt(e);return new oe(n,r)}toString(){return".value"}}const _T=new yT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){return{type:"value",snapshotNode:t}}function zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ea(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ea(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(zs(n,r)):o.trackChildChange(Sa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ea(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Sa(i,s,o))}else r.trackChildChange(zs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.indexedFilter_=new Zp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ca.getStartPost_(e),this.endPost_=Ca.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(We,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ca(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Sa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ea(n,d));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(zs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ea(u.name,u.node)),s.trackChildChange(zs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:js}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new em;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ST(t){return t.loadsAllData()?new Zp(t.getIndex()):t.hasLimit()?new ET(t):new Ca(t)}function Uv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===_T?n="$value":t.index_===ks?n="$key":(L(t.index_ instanceof vT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends m1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ya("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$u.getListenId_(e,r),a={};this.listens_[o]=a;const l=Uv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Fs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=$u.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Uv(e._queryParams),r=e._path.toString(),i=new Wa;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=va(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){return{value:null,children:new Map}}function x1(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Bu());const i=t.children.get(r);e=be(e),x1(i,e,n)}}function fh(t,e,n){t.value!==null?n(e,t.value):kT(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);fh(i,s,n)})}function kT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=10*1e3,bT=30*1e3,IT=5*60*1e3;class TT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xT(e);const r=zv+(bT-zv)*Math.random();$o(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&On(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$o(this.reportStats_.bind(this),Math.floor(Math.random()*2*IT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function tm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=tm()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Wu(me(),n,this.revert)}}else return L(se(this.path)===e,"operationForChild called for unrelated child."),new Wu(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new ka(this.source,me()):new ka(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return ce(this.path)?new Pi(this.source,me(),this.snap.getImmediateChild(e)):new Pi(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Pi(this.source,me(),n.value):new Vs(this.source,me(),n)}else return L(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vs(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(wT(o.childName,o.snapshotNode))}),So(t,i,"child_removed",e,r,n),So(t,i,"child_added",e,r,n),So(t,i,"child_moved",s,r,n),So(t,i,"child_changed",e,r,n),So(t,i,"value",e,r,n),i}function So(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>AT(t,a,l)),o.forEach(a=>{const l=RT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function RT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AT(t,e,n){if(e.childName==null||n.childName==null)throw Qs("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e){return{eventCache:t,serverCache:e}}function Bo(t,e,n,r){return Oc(new Wr(e,n,r),t.serverCache)}function b1(t,e,n,r){return Oc(t.eventCache,new Wr(e,n,r))}function Hu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wd;const OT=()=>(Wd||(Wd=new Dt(vI)),Wd);class xe{constructor(e,n=OT()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return gt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ce(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:Be(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new xe(null)}}set(e,n){if(ce(e))return new xe(n,this.children);{const r=se(e),s=(this.children.get(r)||new xe(null)).set(be(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(ce(e))return n;{const r=se(e),s=(this.children.get(r)||new xe(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(be(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),Be(n,i),r):new xe(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new xe(null))}}function Wo(t,e,n){if(ce(e))return new _n(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function hh(t,e,n){let r=t;return gt(n,(i,s)=>{r=Wo(r,Be(e,i),s)}),r}function Vv(t,e){if(ce(e))return _n.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new _n(n)}}function ph(t,e){return Vi(t,e)!=null}function Vi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function $v(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function jr(t,e){if(ce(e))return t;{const n=Vi(t,e);return n!=null?new _n(new xe(n)):new _n(t.writeTree_.subtree(e))}}function mh(t){return t.writeTree_.isEmpty()}function $s(t,e){return I1(me(),t.writeTree_,e)}function I1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=I1(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){return R1(e,t)}function DT(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Wo(t.visibleWrites,e,n)),t.lastWriteId=r}function LT(t,e,n,r){L(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=hh(t.visibleWrites,e,n),t.lastWriteId=r}function MT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function FT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UT(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return jT(t),!0;if(r.snap)t.visibleWrites=Vv(t.visibleWrites,r.path);else{const a=r.children;gt(a,l=>{t.visibleWrites=Vv(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function UT(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Be(t.path,n),e))return!0;return!1}function jT(t){t.visibleWrites=T1(t.allWrites,zT,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zT(t){return t.visible}function T1(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=bt(n,o),r=Wo(r,a,s.snap)):tn(o,n)&&(a=bt(o,n),r=Wo(r,me(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=bt(n,o),r=hh(r,a,s.children);else if(tn(o,n))if(a=bt(o,n),ce(a))r=hh(r,me(),s.children);else{const l=Fs(s.children,se(a));if(l){const u=l.getChild(be(a));r=Wo(r,me(),u)}}}else throw Qs("WriteRecord should have .snap or .children")}}return r}function N1(t,e,n,r,i){if(!r&&!i){const s=Vi(t.visibleWrites,e);if(s!=null)return s;{const o=jr(t.visibleWrites,e);if(mh(o))return n;if(n==null&&!ph(o,me()))return null;{const a=n||J.EMPTY_NODE;return $s(o,a)}}}else{const s=jr(t.visibleWrites,e);if(!i&&mh(s))return n;if(!i&&n==null&&!ph(s,me()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=T1(t.allWrites,o,e),l=n||J.EMPTY_NODE;return $s(a,l)}}}function VT(t,e,n){let r=J.EMPTY_NODE;const i=Vi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=jr(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=$s(jr(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),$v(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=jr(t.visibleWrites,e);return $v(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $T(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(ph(t.visibleWrites,s))return null;{const o=jr(t.visibleWrites,s);return mh(o)?i.getChild(n):$s(o,i.getChild(n))}}function BT(t,e,n,r){const i=Be(e,n),s=Vi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=jr(t.visibleWrites,i);return $s(o,r.getNode().getImmediateChild(n))}else return null}function WT(t,e){return Vi(t.visibleWrites,e)}function HT(t,e,n,r,i,s,o){let a;const l=jr(t.visibleWrites,e),u=Vi(l,me());if(u!=null)a=u;else if(n!=null)a=$s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function GT(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Gu(t,e,n,r){return N1(t.writeTree,t.treePath,e,n,r)}function im(t,e){return VT(t.writeTree,t.treePath,e)}function Bv(t,e,n,r){return $T(t.writeTree,t.treePath,e,n,r)}function Yu(t,e){return WT(t.writeTree,Be(t.treePath,e))}function YT(t,e,n,r,i,s){return HT(t.writeTree,t.treePath,e,n,r,i,s)}function sm(t,e,n){return BT(t.writeTree,t.treePath,e,n)}function P1(t,e){return R1(Be(t.treePath,e),t.writeTree)}function R1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Sa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ea(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,zs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Sa(r,e.snapshotNode,i.oldSnap));else throw Qs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const A1=new qT;class om{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),s=YT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){return{filter:t}}function XT(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function JT(t,e,n,r,i){const s=new KT;let o,a;if(n.type===mn.OVERWRITE){const u=n;u.source.fromUser?o=gh(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),o=Ku(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===mn.MERGE){const u=n;u.source.fromUser?o=eN(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=vh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===mn.ACK_USER_WRITE){const u=n;u.revert?o=rN(t,e,u.path,r,i,s):o=tN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mn.LISTEN_COMPLETE)o=nN(t,e,n.path,r,s);else throw Qs("Unknown operation type: "+n.type);const l=s.getChanges();return ZT(e,o,l),{viewCache:o,changes:l}}function ZT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Hu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(k1(Hu(e)))}}function O1(t,e,n,r,i,s){const o=e.eventCache;if(Yu(r,n)!=null)return e;{let a,l;if(ce(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ri(e),c=u instanceof J?u:J.EMPTY_NODE,d=im(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Gu(r,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){L(Br(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Bv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=be(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Bv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=sm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Bo(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Ku(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ce(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Br(n)>1)return e;const y=be(n),b=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),b):u=c.updateChild(l.getNode(),m,b,y,A1,null)}const d=b1(e,u,l.isFullyInitialized()||ce(n),c.filtersNodes()),f=new om(i,d,s);return O1(t,d,n,i,f,a)}function gh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new om(i,e,s);if(ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Bo(e,u,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Bo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),m=a.getNode().getImmediateChild(d);let y;if(ce(f))y=r;else{const _=c.getCompleteChild(d);_!=null?qp(f)===".priority"&&_.getChild(v1(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=J.EMPTY_NODE}if(m.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=Bo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wv(t,e){return t.eventCache.isCompleteForChild(e)}function eN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Be(n,l);Wv(e,se(c))&&(a=gh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Be(n,l);Wv(e,se(c))||(a=gh(t,a,c,u,i,s,o))}),a}function Hv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ce(n)?u=r:u=new xe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=Hv(t,m,f);l=Ku(t,l,new Ee(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),_=Hv(t,y,f);l=Ku(t,l,new Ee(d),_,i,s,o,a)}}),l}function tN(t,e,n,r,i,s,o){if(Yu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ku(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let u=new xe(null);return l.getNode().forEachChild(ks,(c,d)=>{u=u.set(new Ee(c),d)}),vh(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((c,d)=>{const f=Be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),vh(t,e,n,u,i,s,a,o)}}function nN(t,e,n,r,i){const s=e.serverCache,o=b1(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return O1(t,o,n,r,A1,i)}function rN(t,e,n,r,i,s){let o;if(Yu(r,n)!=null)return e;{const a=new om(r,e,i),l=e.eventCache.getNode();let u;if(ce(n)||se(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Gu(r,Ri(e));else{const d=e.serverCache.getNode();L(d instanceof J,"serverChildren would be complete if leaf node"),c=im(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=se(n);let d=sm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,be(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,J.EMPTY_NODE,be(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gu(r,Ri(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Yu(r,me())!=null,Bo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zp(r.getIndex()),s=ST(r);this.processor_=QT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),c=new Wr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Wr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Oc(d,c),this.eventGenerator_=new NT(this.query_)}get query(){return this.query_}}function sN(t){return t.viewCache_.serverCache.getNode()}function oN(t){return Hu(t.viewCache_)}function aN(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Gv(t){return t.eventRegistrations_.length===0}function lN(t,e){t.eventRegistrations_.push(e)}function Yv(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kv(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(L(Ri(t.viewCache_),"We should always have a full cache before handling merges"),L(Hu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=JT(t.processor_,i,e,n,r);return XT(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,D1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function uN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(zs(s,o))}),n.isFullyInitialized()&&r.push(k1(n.getNode())),D1(t,r,n.getNode(),e)}function D1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return PT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;class L1{constructor(){this.views=new Map}}function cN(t){L(!qu,"__referenceConstructor has already been defined"),qu=t}function dN(){return L(qu,"Reference.ts has not been loaded"),qu}function fN(t){return t.views.size===0}function am(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),Kv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kv(o,e,n,r));return s}}function M1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Gu(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=im(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const u=Oc(new Wr(a,l,!1),new Wr(r,i,!1));return new iN(e,u)}return o}function hN(t,e,n,r,i,s){const o=M1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),lN(o,n),uN(o,n)}function pN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Hr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Yv(u,n,r)),Gv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Yv(l,n,r)),Gv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Hr(t)&&s.push(new(dN())(e._repo,e._path)),{removed:s,events:o}}function F1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zr(t,e){let n=null;for(const r of t.views.values())n=n||aN(r,e);return n}function U1(t,e){if(e._queryParams.loadsAllData())return Lc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function j1(t,e){return U1(t,e)!=null}function Hr(t){return Lc(t)!=null}function Lc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;function mN(t){L(!Qu,"__referenceConstructor has already been defined"),Qu=t}function gN(){return L(Qu,"Reference.ts has not been loaded"),Qu}let vN=1;class qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=GT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function z1(t,e,n,r,i){return DT(t.pendingWriteTree_,e,n,r,i),i?eo(t,new Pi(tm(),e,n)):[]}function yN(t,e,n,r){LT(t.pendingWriteTree_,e,n,r);const i=xe.fromObject(n);return eo(t,new Vs(tm(),e,i))}function xr(t,e,n=!1){const r=MT(t.pendingWriteTree_,e);if(FT(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(me(),!0):gt(r.children,o=>{s=s.set(new Ee(o),!0)}),eo(t,new Wu(r.path,s,n))}else return[]}function qa(t,e,n){return eo(t,new Pi(nm(),e,n))}function _N(t,e,n){const r=xe.fromObject(n);return eo(t,new Vs(nm(),e,r))}function wN(t,e){return eo(t,new ka(nm(),e))}function EN(t,e,n){const r=um(t,n);if(r){const i=cm(r),s=i.path,o=i.queryId,a=bt(s,e),l=new ka(rm(o),a);return dm(t,s,l)}else return[]}function Xu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||j1(o,e))){const l=pN(o,e,n,r);fN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Hr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=kN(f);for(let y=0;y<m.length;++y){const _=m[y],b=_.query,v=W1(t,_);t.listenProvider_.startListening(Ho(b),xa(t,b),v.hashFn,v.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ho(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Mc(f));t.listenProvider_.stopListening(Ho(f),m)}))}xN(t,u)}return a}function V1(t,e,n,r){const i=um(t,r);if(i!=null){const s=cm(i),o=s.path,a=s.queryId,l=bt(o,e),u=new Pi(rm(a),l,n);return dm(t,o,u)}else return[]}function SN(t,e,n,r){const i=um(t,r);if(i){const s=cm(i),o=s.path,a=s.queryId,l=bt(o,e),u=xe.fromObject(n),c=new Vs(rm(a),l,u);return dm(t,o,c)}else return[]}function yh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const y=bt(f,i);s=s||zr(m,y),o=o||Hr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Hr(a),s=s||zr(a,me())):(a=new L1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=zr(y,me());_&&(s=s.updateImmediateChild(m,_))}));const u=j1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Mc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=bN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=Dc(t.pendingWriteTree_,i);let d=hN(a,e,n,c,s,l);if(!u&&!o&&!r){const f=U1(a,e);d=d.concat(IN(t,e,f))}return d}function lm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),u=zr(a,l);if(u)return u});return N1(i,e,s,n,!0)}function CN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=bt(u,n);r=r||zr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||zr(i,me()):(i=new L1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Wr(r,!0,!1):null,a=Dc(t.pendingWriteTree_,e._path),l=M1(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return oN(l)}function eo(t,e){return $1(e,t.syncPointTree_,null,Dc(t.pendingWriteTree_,me()))}function $1(t,e,n,r){if(ce(t.path))return B1(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=zr(i,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=P1(r,o);s=s.concat($1(a,l,u,c))}return i&&(s=s.concat(am(i,t,r,n))),s}}function B1(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=zr(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=P1(r,o),c=t.operationForChild(o);c&&(s=s.concat(B1(c,a,l,u)))}),i&&(s=s.concat(am(i,t,r,n))),s}function W1(t,e){const n=e.query,r=xa(t,n);return{hashFn:()=>(sN(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?EN(t,n._path,r):wN(t,n._path);{const s=wI(i,n);return Xu(t,n,null,s)}}}}function xa(t,e){const n=Mc(e);return t.queryToTagMap.get(n)}function Mc(t){return t._path.toString()+"$"+t._queryIdentifier}function um(t,e){return t.tagToQueryMap.get(e)}function cm(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function dm(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=Dc(t.pendingWriteTree_,e);return am(r,n,i,null)}function kN(t){return t.fold((e,n,r)=>{if(n&&Hr(n))return[Lc(n)];{let i=[];return n&&(i=F1(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ho(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(gN())(t._repo,t._path):t}function xN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Mc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function bN(){return vN++}function IN(t,e,n){const r=e._path,i=xa(t,e),s=W1(t,n),o=t.listenProvider_.startListening(Ho(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!Hr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ce(u)&&c&&Hr(c))return[Lc(c).query];{let f=[];return c&&(f=f.concat(F1(c).map(m=>m.query))),gt(d,(m,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ho(c),xa(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fm(n)}node(){return this.node_}}class hm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new hm(this.syncTree_,n)}node(){return lm(this.syncTree_,this.path_)}}const TN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qv=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PN(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},PN=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},H1=function(t,e,n,r){return pm(e,new hm(n,t),r)},G1=function(t,e,n){return pm(t,new fm(e),n)};function pm(t,e,n){const r=t.getPriority().val(),i=Qv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Qv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ot(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ot(i))),o.forEachChild(We,(a,l)=>{const u=pm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function gm(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=se(n);for(;i!==null;){const s=Fs(r.node.children,i)||{children:{},childCount:0};r=new mm(i,r,s),n=be(n),i=se(n)}return r}function to(t){return t.node.value}function Y1(t,e){t.node.value=e,_h(t)}function K1(t){return t.node.childCount>0}function RN(t){return to(t)===void 0&&!K1(t)}function Fc(t,e){gt(t.node.children,(n,r)=>{e(new mm(n,t,r))})}function q1(t,e,n,r){n&&!r&&e(t),Fc(t,i=>{q1(i,e,!0,r)}),n&&r&&e(t)}function AN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qa(t){return new Ee(t.parent===null?t.name:Qa(t.parent)+"/"+t.name)}function _h(t){t.parent!==null&&ON(t.parent,t.name,t)}function ON(t,e,n){const r=RN(n),i=On(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,_h(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_h(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=/[\[\].#$\/\u0000-\u001F\u007F]/,LN=/[\[\].#$\u0000-\u001F\u007F]/,Hd=10*1024*1024,vm=function(t){return typeof t=="string"&&t.length!==0&&!DN.test(t)},Q1=function(t){return typeof t=="string"&&t.length!==0&&!LN.test(t)},MN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Q1(t)},FN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Wp(t)||t&&typeof t=="object"&&On(t,".sv")},UN=function(t,e,n,r){r&&e===void 0||Uc(Pc(t,"value"),e,n)},Uc=function(t,e,n){const r=n instanceof Ee?new eT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ai(r));if(typeof e=="function")throw new Error(t+"contains a function "+ai(r)+" with contents = "+e.toString());if(Wp(e))throw new Error(t+"contains "+e.toString()+" "+ai(r));if(typeof e=="string"&&e.length>Hd/3&&Rc(e)>Hd)throw new Error(t+"contains a string greater than "+Hd+" utf8 bytes "+ai(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vm(o)))throw new Error(t+" contains an invalid key ("+o+") "+ai(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tT(r,o),Uc(t,a,r),nT(r)}),i&&s)throw new Error(t+' contains ".value" child '+ai(r)+" in addition to actual children.")}},jN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=wa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!vm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ZI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&tn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},zN=function(t,e,n,r){if(r&&e===void 0)return;const i=Pc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const l=new Ee(o);if(Uc(i,a,Be(n,l)),qp(l)===".priority"&&!FN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),jN(i,s)},X1=function(t,e,n,r){if(!(r&&n===void 0)&&!Q1(n))throw new Error(Pc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},VN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),X1(t,e,n,r)},J1=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$N=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!MN(n))throw new Error(Pc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Qp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Z1(t,e,n){jc(t,n),eE(t,r=>Qp(r,e))}function on(t,e,n){jc(t,n),eE(t,r=>tn(r,e)||tn(e,r))}function eE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(WN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wi&&ft("event: "+n.toString()),Zs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN="repo_interrupt",GN=25;class YN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bu(),this.transactionQueueTree_=new mm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KN(t,e,n){if(t.stats_=Yp(t.repoInfo_),t.forceRestClient_||kI())t.server_=new $u(t.repoInfo_,(r,i,s,o)=>{Xv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qn(t.repoInfo_,e,(r,i,s,o)=>{Xv(t,r,i,s,o)},r=>{Jv(t,r)},r=>{QN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=NI(t.repoInfo_,()=>new TT(t.stats_,t.server_)),t.infoData_=new CT,t.infoSyncTree_=new qv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=qa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ym(t,"connected",!1),t.serverSyncTree_=new qv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);on(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function qN(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zc(t){return TN({timestamp:qN(t)})}function Xv(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Mu(n,u=>tt(u));o=SN(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=V1(t.serverSyncTree_,s,l,i)}else if(r){const l=Mu(n,u=>tt(u));o=_N(t.serverSyncTree_,s,l)}else{const l=tt(n);o=qa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Bs(t,s)),on(t.eventQueue_,a,o)}function Jv(t,e){ym(t,"connected",e),e===!1&&eP(t)}function QN(t,e){gt(e,(n,r)=>{ym(t,n,r)})}function ym(t,e,n){const r=new Ee("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=qa(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function _m(t){return t.nextWriteId_++}function XN(t,e,n){const r=CN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=tt(i).withIndex(e._queryParams.getIndex());yh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=qa(t.serverSyncTree_,e._path,s);else{const a=xa(t.serverSyncTree_,e);o=V1(t.serverSyncTree_,e._path,s,a)}return on(t.eventQueue_,e._path,o),Xu(t.serverSyncTree_,e,n,null,!0),s},i=>(Xa(t,"get for query "+nt(e)+" failed: "+i),Promise.reject(new Error(i))))}function JN(t,e,n,r,i){Xa(t,"set",{path:e.toString(),value:n,priority:r});const s=zc(t),o=tt(n,r),a=lm(t.serverSyncTree_,e),l=G1(o,a,s),u=_m(t),c=z1(t.serverSyncTree_,e,l,u,!0);jc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const y=f==="ok";y||Tt("set at "+e+" failed: "+f);const _=xr(t.serverSyncTree_,u,!y);on(t.eventQueue_,e,_),wh(t,i,f,m)});const d=Em(t,e);Bs(t,d),on(t.eventQueue_,d,[])}function ZN(t,e,n,r){Xa(t,"update",{path:e.toString(),value:n});let i=!0;const s=zc(t),o={};if(gt(n,(a,l)=>{i=!1,o[a]=H1(Be(e,a),tt(l),t.serverSyncTree_,s)}),i)ft("update() called with empty data.  Don't do anything."),wh(t,r,"ok",void 0);else{const a=_m(t),l=yN(t.serverSyncTree_,e,o,a);jc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Tt("update at "+e+" failed: "+u);const f=xr(t.serverSyncTree_,a,!d),m=f.length>0?Bs(t,e):e;on(t.eventQueue_,m,f),wh(t,r,u,c)}),gt(n,u=>{const c=Em(t,Be(e,u));Bs(t,c)}),on(t.eventQueue_,e,[])}}function eP(t){Xa(t,"onDisconnectEvents");const e=zc(t),n=Bu();fh(t.onDisconnect_,me(),(i,s)=>{const o=H1(i,s,t.serverSyncTree_,e);x1(n,i,o)});let r=[];fh(n,me(),(i,s)=>{r=r.concat(qa(t.serverSyncTree_,i,s));const o=Em(t,i);Bs(t,o)}),t.onDisconnect_=Bu(),on(t.eventQueue_,me(),r)}function tP(t,e,n){let r;se(e._path)===".info"?r=yh(t.infoSyncTree_,e,n):r=yh(t.serverSyncTree_,e,n),Z1(t.eventQueue_,e._path,r)}function Zv(t,e,n){let r;se(e._path)===".info"?r=Xu(t.infoSyncTree_,e,n):r=Xu(t.serverSyncTree_,e,n),Z1(t.eventQueue_,e._path,r)}function nP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HN)}function Xa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function wh(t,e,n,r){e&&Zs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function tE(t,e,n){return lm(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function wm(t,e=t.transactionQueueTree_){if(e||Vc(t,e),to(e)){const n=rE(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rP(t,Qa(e),n)}else K1(e)&&Fc(e,n=>{wm(t,n)})}function rP(t,e,n){const r=n.map(u=>u.currentWriteId),i=tE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=bt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Xa(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(xr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Vc(t,gm(t.transactionQueueTree_,e)),wm(t,t.transactionQueueTree_),on(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Zs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Bs(t,e)}},o)}function Bs(t,e){const n=nE(t,e),r=Qa(n),i=rE(t,n);return iP(t,i,r),r}function iP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=GN)c=!0,d="maxretry",i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=tE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Uc("transaction failed: Data returned ",m,l.path);let y=tt(m);typeof m=="object"&&m!=null&&On(m,".priority")||(y=y.updatePriority(f.getPriority()));const b=l.currentWriteId,v=zc(t),h=G1(y,f,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=_m(t),o.splice(o.indexOf(b),1),i=i.concat(z1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(xr(t.serverSyncTree_,b,!0))}else c=!0,d="nodata",i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Vc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Zs(r[a]);wm(t,t.transactionQueueTree_)}function nE(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&to(r)===void 0;)r=gm(r,n),e=be(e),n=se(e);return r}function rE(t,e){const n=[];return iE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function iE(t,e,n){const r=to(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Fc(e,i=>{iE(t,i,n)})}function Vc(t,e){const n=to(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Y1(e,n.length>0?n:void 0)}Fc(e,r=>{Vc(t,r)})}function Em(t,e){const n=Qa(nE(t,e)),r=gm(t.transactionQueueTree_,e);return AN(r,i=>{Gd(t,i)}),Gd(t,r),q1(r,i=>{Gd(t,i)}),n}function Gd(t,e){const n=to(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Y1(e,void 0):n.length=s+1,on(t.eventQueue_,Qa(e),i);for(let o=0;o<r.length;o++)Zs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function oP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ey=function(t,e){const n=aP(t),r=n.namespace;n.domain==="firebase.com"&&nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new l1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},aP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=sP(t.substring(c,d)));const f=oP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class oE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Sm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:qp(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=jv(this._queryParams),n=Hp(e);return n==="{}"?"default":n}get _queryObject(){return jv(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Sm))return!1;const n=this._repo===e._repo,r=Qp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+JI(this._path)}}class Dn extends Sm{constructor(e,n){super(e,n,new em,!1)}get parent(){const e=v1(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ws{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=ba(this.ref,e);return new Ws(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ws(i,ba(this.ref,r),We)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ht(t,e){return t=Rt(t),t._checkNotDeleted("ref"),e!==void 0?ba(t._root,e):t._root}function ba(t,e){return t=Rt(t),se(t._path)===null?VN("child","path",e,!1):X1("child","path",e,!1),new Dn(t._repo,Be(t._path,e))}function lP(t){return J1("remove",t._path),us(t,null)}function us(t,e){t=Rt(t),J1("set",t._path),UN("set",e,t._path,!1);const n=new Wa;return JN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ia(t,e){zN("update",e,t._path,!1);const n=new Wa;return ZN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function uP(t){t=Rt(t);const e=new aE(()=>{}),n=new $c(e);return XN(t._repo,t,n).then(r=>new Ws(r,new Dn(t._repo,t._path),t._queryParams.getIndex()))}class $c{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sE("value",this,new Ws(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}matches(e){return e instanceof $c?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=ba(new Dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new sE(e.type,this,new Ws(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function cP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Zv(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new aE(n,s||void 0),a=e==="value"?new $c(o):new Cm(e,o);return tP(t._repo,t,a),()=>Zv(t._repo,t,a)}function Go(t,e,n,r){return cP(t,"value",e,n,r)}function lE(t,...e){let n=Rt(t);for(const r of e)n=r._apply(n);return n}cN(Dn);mN(Dn);/**
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
 */const dP="FIREBASE_DATABASE_EMULATOR_HOST",Eh={};let fP=!1;function hP(t,e,n,r){t.repoInfo_=new l1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ey(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[dP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=ey(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Cs(Cs.OWNER):new bI(t.name,t.options,e);$N("Invalid Firebase Database URL",o),ce(o.path)||nr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gP(a,t,c,new xI(t.name,n));return new vP(d,t)}function mP(t,e){const n=Eh[e];(!n||n[t.key]!==t)&&nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nP(t),delete n[t.key]}function gP(t,e,n,r){let i=Eh[e.name];i||(i={},Eh[e.name]=i);let s=i[t.toURLString()];return s&&nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new YN(t,fP,n,r),i[t.toURLString()]=s,s}class vP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nr("Cannot call "+e+" on a deleted database.")}}function uE(t=Hw(),e){const n=Bp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Vx("database");r&&yP(n,...r)}return n}function yP(t,e,n,r={}){t=Rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Cs(Cs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:$x(r.mockUserToken,t.app.options.projectId);s=new Cs(o)}hP(i,e,n,s)}/**
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
 */function _P(t){cI(Js),Us(new Ii("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ur(Sv,Cv,t),Ur(Sv,Cv,"esm2017")}Qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_P();function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wP=cE,dE=new Ha("auth","Firebase",cE());/**
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
 */const Ju=new Vp("@firebase/auth");function EP(t,...e){Ju.logLevel<=we.WARN&&Ju.warn(`Auth (${Js}): ${t}`,...e)}function nu(t,...e){Ju.logLevel<=we.ERROR&&Ju.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function An(t,...e){throw xm(t,...e)}function Pn(t,...e){return xm(t,...e)}function fE(t,e,n){const r=Object.assign(Object.assign({},wP()),{[e]:n});return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function SP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),fE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dE.create(t,...e)}function re(t,e,...n){if(!t)throw xm(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nu(e),new Error(e)}function rr(t,e){t||Yn(e)}/**
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
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CP(){return ty()==="http:"||ty()==="https:"}function ty(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CP()||Bx()||"connection"in navigator)?navigator.onLine:!0}function xP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=zp()||jw()}get(){return kP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IP=new Ja(3e4,6e4);function pE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Za(t,e,n,r,i={}){return mE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hE.fetch()(gE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bP),e);try{const i=new NP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Dl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fE(t,c,u);An(t,c)}}catch(i){if(i instanceof Jr)throw i;An(t,"network-request-failed",{message:String(i)})}}async function TP(t,e,n,r,i={}){const s=await Za(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}class NP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),IP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function PP(t,e){return Za(t,"POST","/v1/accounts:delete",e)}async function RP(t,e){return Za(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AP(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=Im(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Yd(i.auth_time)),issuedAtTime:Yo(Yd(i.iat)),expirationTime:Yo(Yd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yd(t){return Number(t)*1e3}function Im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lu(n);return i?JSON.parse(i):(nu("Failed to decode base64 JWT payload"),null)}catch(i){return nu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function OP(t){const e=Im(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jr&&DP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ta(t,RP(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UP(s.providerUserInfo):[],a=FP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function MP(t){const e=Rt(t);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UP(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jP(t,e){const n=await mE(t,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Na;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Na,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function pr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ta(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AP(this,e)}reload(){return MP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ta(this,PP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:N,stsTokenManager:k}=n;re(g&&k,e,"internal-error");const P=Na.fromJSON(this.name,k);re(typeof g=="string",e,"internal-error"),pr(d,e.name),pr(f,e.name),re(typeof p=="boolean",e,"internal-error"),re(typeof C=="boolean",e,"internal-error"),pr(m,e.name),pr(y,e.name),pr(_,e.name),pr(b,e.name),pr(v,e.name),pr(h,e.name);const j=new Ei({uid:g,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:v,lastLoginAt:h});return N&&Array.isArray(N)&&(j.providerData=N.map(M=>Object.assign({},M))),b&&(j._redirectEventId=b),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Na;i.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zu(s),s}}/**
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
 */const ny=new Map;function Kn(t){rr(t instanceof Function,"Expected a class definition");let e=ny.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ny.set(t,e),e)}/**
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
 */class yE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yE.type="NONE";const ry=yE;/**
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
 */function ru(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ru(this.userKey,i.apiKey,s),this.fullPersistenceKey=ru("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Kn(ry),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kn(ry);const o=ru(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ei._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xs(s,e,r))}}/**
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
 */function iy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(EE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_E(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CE(e))return"Blackberry";if(kE(e))return"Webos";if(Tm(e))return"Safari";if((e.includes("chrome/")||wE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _E(t=Ct()){return/firefox\//i.test(t)}function Tm(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wE(t=Ct()){return/crios\//i.test(t)}function EE(t=Ct()){return/iemobile/i.test(t)}function SE(t=Ct()){return/android/i.test(t)}function CE(t=Ct()){return/blackberry/i.test(t)}function kE(t=Ct()){return/webos/i.test(t)}function Bc(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zP(t=Ct()){var e;return Bc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VP(){return Wx()&&document.documentMode===10}function xE(t=Ct()){return Bc(t)||SE(t)||kE(t)||CE(t)||/windows phone/i.test(t)||EE(t)}function $P(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bE(t,e=[]){let n;switch(t){case"Browser":n=iy(Ct());break;case"Worker":n=`${iy(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
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
 */class BP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WP(t,e={}){return Za(t,"GET","/v2/passwordPolicy",pE(t,e))}/**
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
 */const HP=6;class GP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class YP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sy(this),this.idTokenSubscription=new sy(this),this.beforeStateQueue=new BP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WP(this),n=new GP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wc(t){return Rt(t)}class sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zx(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function KP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",KP().appendChild(r)})}function QP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function XP(t,e){const n=Bp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fu(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function JP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZP(t,e,n){const r=Wc(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=IE(e),{host:o,port:a}=eR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tR()}function IE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eR(t){const e=IE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:oy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:oy(o)}}}function oy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class TE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
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
 */async function bs(t,e){return TP(t,"POST","/v1/accounts:signInWithIdp",pE(t,e))}/**
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
 */const nR="http://localhost";class Ai extends TE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:nR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
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
 */class Nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class el extends Nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wr extends el{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
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
 */class xn extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class Er extends el{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
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
 */class Sr extends el{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
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
 */class Hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ei._fromIdTokenResponse(e,r,i),o=ay(r);return new Hs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ay(r);return new Hs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ec extends Jr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ec(e,n,r,i)}}function NE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(t,s,e,r):s})}async function rR(t,e,n=!1){const r=await Ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hs._forOperation(t,"link",r)}/**
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
 */async function iR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ta(t,NE(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Im(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Hs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
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
 */async function sR(t,e,n=!1){const r="signIn",i=await NE(t,r,e),s=await Hs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function oR(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function aR(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function PE(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function lR(t){return Rt(t).signOut()}const tc="__sak";/**
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
 */class RE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uR(){const t=Ct();return Tm(t)||Bc(t)}const cR=1e3,dR=10;class AE extends RE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uR()&&$P(),this.fallbackToPolling=xE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AE.type="LOCAL";const fR=AE;/**
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
 */class OE extends RE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const DE=OE;/**
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
 */function hR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
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
 */function Pm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Pm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function mR(t){Rn().location.href=t}/**
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
 */function LE(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function gR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yR(){return LE()?self:null}/**
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
 */const ME="firebaseLocalStorageDb",_R=1,nc="firebaseLocalStorage",FE="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function wR(){const t=indexedDB.deleteDatabase(ME);return new tl(t).toPromise()}function Ch(){const t=indexedDB.open(ME,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nc,{keyPath:FE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nc)?e(r):(r.close(),await wR(),e(await Ch()))})})}async function ly(t,e,n){const r=Gc(t,!0).put({[FE]:e,value:n});return new tl(r).toPromise()}async function ER(t,e){const n=Gc(t,!1).get(e),r=await new tl(n).toPromise();return r===void 0?null:r.value}function uy(t,e){const n=Gc(t,!0).delete(e);return new tl(n).toPromise()}const SR=800,CR=3;class UE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gR(),!this.activeServiceWorker)return;this.sender=new pR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await ly(e,tc,"1"),await uy(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ly(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ER(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gc(i,!1).getAll();return new tl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UE.type="LOCAL";const kR=UE;new Ja(3e4,6e4);/**
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
 */function jE(t,e){return e?Kn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rm extends TE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return sR(t.auth,new Rm(t),t.bypassAuthState)}function bR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),iR(n,new Rm(t),t.bypassAuthState)}async function IR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),rR(n,new Rm(t),t.bypassAuthState)}/**
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
 */class zE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return IR;case"reauthViaPopup":case"reauthViaRedirect":return bR;default:An(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TR=new Ja(2e3,1e4);async function NR(t,e,n){const r=Wc(t);SP(t,e,Nm);const i=jE(r,n);return new fi(r,"signInViaPopup",e,i).executeNotNull()}class fi extends zE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TR.get())};e()}}fi.currentPopupAction=null;/**
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
 */const PR="pendingRedirect",iu=new Map;class RR extends zE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=iu.get(this.auth._key());if(!e){try{const r=await AR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}iu.set(this.auth._key(),e)}return this.bypassAuthState||iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(t,e){const n=LR(e),r=DR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OR(t,e){iu.set(t._key(),e)}function DR(t){return Kn(t._redirectPersistence)}function LR(t){return ru(PR,t.config.apiKey,t.name)}async function MR(t,e,n=!1){const r=Wc(t),i=jE(r,e),o=await new RR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const FR=10*60*1e3;class UR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FR&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VE(t);default:return!1}}/**
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
 */async function zR(t,e={}){return Za(t,"GET","/v1/projects",e)}/**
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
 */const VR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$R=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zR(t);for(const n of e)try{if(WR(n))return}catch{}An(t,"unauthorized-domain")}function WR(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$R.test(n))return!1;if(VR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const HR=new Ja(3e4,6e4);function dy(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GR(t){return new Promise((e,n)=>{var r,i,s;function o(){dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dy(),n(Pn(t,"network-request-failed"))},timeout:HR.get()})}if(!((i=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rn().gapi)===null||s===void 0)&&s.load)o();else{const a=QP("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},qP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw su=null,e})}let su=null;function YR(t){return su=su||GR(t),su}/**
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
 */const KR=new Ja(5e3,15e3),qR="__/auth/iframe",QR="emulator/auth/iframe",XR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZR(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,QR):`https://${t.config.authDomain}/${qR}`,r={apiKey:e.apiKey,appName:t.name,v:Js},i=JR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xs(r).slice(1)}`}async function eA(t){const e=await YR(t),n=Rn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:ZR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Rn().setTimeout(()=>{s(o)},KR.get());function l(){Rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nA=500,rA=600,iA="_blank",sA="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oA(t,e,n,r=nA,i=rA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=wE(u)?iA:n),_E(u)&&(e=e||sA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(zP(u)&&a!=="_self")return aA(e||"",a),new fy(null);const d=window.open(e||"",a,c);re(d,t,"popup-blocked");try{d.focus()}catch{}return new fy(d)}function aA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lA="__/auth/handler",uA="emulator/auth/handler",cA=encodeURIComponent("fac");async function hy(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:i};if(e instanceof Nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof el){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${cA}=${encodeURIComponent(l)}`:"";return`${dA(t)}?${Xs(a).slice(1)}${u}`}function dA({config:t}){return t.emulator?bm(t,uA):`https://${t.authDomain}/${lA}`}/**
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
 */const Kd="webStorageSupport";class fA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DE,this._completeRedirectFn=MR,this._overrideRedirectResult=OR}async _openPopup(e,n,r,i){var s;rr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hy(e,n,r,Sh(),i);return oA(e,o,Pm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hy(e,n,r,Sh(),i);return mR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eA(e),r=new UR(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kd,{type:Kd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Kd];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xE()||Tm()||Bc()}}const hA=fA;var py="@firebase/auth",my="1.3.0";/**
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
 */class pA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gA(t){Us(new Ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bE(t)},u=new YP(r,i,s,l);return JP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new Ii("auth-internal",e=>{const n=Wc(e.getProvider("auth").getImmediate());return(r=>new pA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(py,my,mA(t)),Ur(py,my,"esm2017")}/**
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
 */const vA=5*60,yA=Uw("authIdTokenMaxAge")||vA;let gy=null;const _A=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yA)return;const i=n==null?void 0:n.token;gy!==i&&(gy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wA(t=Hw()){const e=Bp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XP(t,{popupRedirectResolver:hA,persistence:[kR,fR,DE]}),r=Uw("authTokenSyncURL");if(r){const s=_A(r);aR(n,s,()=>s(n.currentUser)),oR(n,o=>s(o))}const i=Mw("auth");return i&&ZP(n,`http://${i}`),n}gA("Browser");const EA={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ"},$E=Ww(EA),SA=uE($E),CA=ht(uE()),Et=SA,Oi=wA($E);/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const vy="popstate";function kA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Pa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Li(i)}return bA(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Di(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xA(){return Math.random().toString(36).substr(2,8)}function yy(t,e){return{usr:t.state,key:t.key,idx:e}}function Pa(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?lr(e):e,{state:n,key:e&&e.key||r||xA()})}function Li(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ye.Pop;let b=c(),v=b==null?null:b-u;u=b,l&&l({action:a,location:_.location,delta:v})}function f(b,v){a=Ye.Push;let h=Pa(_.location,b,v);n&&n(h,b),u=c()+1;let g=yy(h,u),p=_.createHref(h);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function m(b,v){a=Ye.Replace;let h=Pa(_.location,b,v);n&&n(h,b),u=c();let g=yy(h,u),p=_.createHref(h);o.replaceState(g,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function y(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Li(b);return ue(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let _={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vy,d),l=b,()=>{i.removeEventListener(vy,d),l=null}},createHref(b){return e(i,b)},createURL:y,encodeLocation(b){let v=y(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(b){return o.go(b)}};return _}var Ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ke||(Ke={}));const IA=new Set(["lazy","caseSensitive","path","id","index","children"]);function TA(t){return t.index===!0}function kh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),TA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=kh(i.children,e,o,r)),l}})}function cs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?lr(e):e,i=no(r.pathname||"/",n);if(i==null)return null;let s=BE(t);PA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jA(s[a],$A(i));return o}function NA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function BE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),BE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:FA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of WE(s.path))i(s,o,l)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:UA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RA=/^:\w+$/,AA=3,OA=2,DA=1,LA=10,MA=-2,_y=t=>t==="*";function FA(t,e){let n=t.split("/"),r=n.length;return n.some(_y)&&(r+=MA),e&&(r+=OA),n.filter(i=>!_y(i)).reduce((i,s)=>i+(RA.test(s)?AA:s===""?DA:LA),r)}function UA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=zA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Xn([i,c.pathname]),pathnameBase:GA(Xn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Xn([i,c.pathnameBase]))}return s}function zA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=BA(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function VA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Di(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function $A(t){try{return decodeURI(t)}catch(e){return Di(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function BA(t,e){try{return decodeURIComponent(t)}catch(n){return Di(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function no(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function WA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?lr(t):t;return{pathname:n?n.startsWith("/")?n:HA(n,e):e,search:YA(r),hash:KA(i)}}function HA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Am(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=lr(t):(i=Fe({},t),ue(!i.pathname||!i.pathname.includes("?"),qd("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),qd("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),qd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=WA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),GA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Om{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function HE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const GE=["post","put","patch","delete"],qA=new Set(GE),QA=["get",...GE],XA=new Set(QA),JA=new Set([301,302,303,307,308]),ZA=new Set([307,308]),Qd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},eO={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Co={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},YE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tO=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),KE="remix-router-transitions";function nO(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=T=>({hasErrorBoundary:x(T)})}else i=tO;let s={},o=kh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,m=null,y=null,_=t.hydrationData!=null,b=cs(o,t.history.location,l),v=null;if(b==null){let x=qt(404,{pathname:t.history.location.pathname}),{matches:T,route:A}=Iy(o);b=T,v={[A.id]:x}}let h=!b.some(x=>x.route.lazy)&&(!b.some(x=>x.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:b,initialized:h,navigation:Qd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},C=Ye.Pop,N=!1,k,P=!1,j=new Map,M=null,Z=!1,Q=!1,ee=[],ge=[],ae=new Map,He=0,Qe=-1,F=new Map,Y=new Set,q=new Map,pe=new Map,ve=new Map,En=!1;function Kt(){if(c=t.history.listen(x=>{let{action:T,location:A,delta:V}=x;if(En){En=!1;return}Di(ve.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=hl({currentLocation:p.location,nextLocation:A,historyAction:T});if(ne&&V!=null){En=!0,t.history.go(V*-1),dr(ne,{state:"blocked",location:A,proceed(){dr(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(V)},reset(){let te=new Map(p.blockers);te.set(ne,Co),ke({blockers:te})}});return}return Mn(T,A)}),n){hO(e,j);let x=()=>pO(e,j);e.addEventListener("pagehide",x),M=()=>e.removeEventListener("pagehide",x)}return p.initialized||Mn(Ye.Pop,p.location),g}function ti(){c&&c(),M&&M(),d.clear(),k&&k.abort(),p.fetchers.forEach((x,T)=>D(T)),p.blockers.forEach((x,T)=>Wi(T))}function jt(x){return d.add(x),()=>d.delete(x)}function ke(x,T){p=Fe({},p,x),d.forEach(A=>A(p,{unstable_viewTransitionOpts:T}))}function Ln(x,T){var A,V;let ne=p.actionData!=null&&p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((A=x.state)==null?void 0:A._isRedirect)!==!0,te;T.actionData?Object.keys(T.actionData).length>0?te=T.actionData:te=null:ne?te=p.actionData:te=null;let ie=T.loaderData?by(p.loaderData,T.loaderData,T.matches||[],T.errors):p.loaderData,X=p.blockers;X.size>0&&(X=new Map(X),X.forEach((Me,fe)=>X.set(fe,Co)));let K=N===!0||p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&((V=x.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),Z||C===Ye.Pop||(C===Ye.Push?t.history.push(x,x.state):C===Ye.Replace&&t.history.replace(x,x.state));let Se;if(C===Ye.Pop){let Me=j.get(p.location.pathname);Me&&Me.has(x.pathname)?Se={currentLocation:p.location,nextLocation:x}:j.has(x.pathname)&&(Se={currentLocation:x,nextLocation:p.location})}else if(P){let Me=j.get(p.location.pathname);Me?Me.add(x.pathname):(Me=new Set([x.pathname]),j.set(p.location.pathname,Me)),Se={currentLocation:p.location,nextLocation:x}}ke(Fe({},T,{actionData:te,loaderData:ie,historyAction:C,location:x,initialized:!0,navigation:Qd,revalidation:"idle",restoreScrollPosition:ng(x,T.matches||p.matches),preventScrollReset:K,blockers:X}),Se),C=Ye.Pop,N=!1,P=!1,Z=!1,Q=!1,ee=[],ge=[]}async function oo(x,T){if(typeof x=="number"){t.history.go(x);return}let A=xh(p.location,p.matches,l,u.v7_prependBasename,x,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:V,submission:ne,error:te}=wy(u.v7_normalizeFormMethod,!1,A,T),ie=p.location,X=Pa(p.location,V,T&&T.state);X=Fe({},X,t.history.encodeLocation(X));let K=T&&T.replace!=null?T.replace:void 0,Se=Ye.Push;K===!0?Se=Ye.Replace:K===!1||ne!=null&&dn(ne.formMethod)&&ne.formAction===p.location.pathname+p.location.search&&(Se=Ye.Replace);let Me=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,fe=hl({currentLocation:ie,nextLocation:X,historyAction:Se});if(fe){dr(fe,{state:"blocked",location:X,proceed(){dr(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),oo(x,T)},reset(){let Ce=new Map(p.blockers);Ce.set(fe,Co),ke({blockers:Ce})}});return}return await Mn(Se,X,{submission:ne,pendingError:te,preventScrollReset:Me,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition})}function cl(){if(B(),ke({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Mn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Mn(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Mn(x,T,A){k&&k.abort(),k=null,C=x,Z=(A&&A.startUninterruptedRevalidation)===!0,QS(p.location,p.matches),N=(A&&A.preventScrollReset)===!0,P=(A&&A.enableViewTransition)===!0;let V=a||o,ne=A&&A.overrideNavigation,te=cs(V,T,l);if(!te){let Ce=qt(404,{pathname:T.pathname}),{matches:Ge,route:ni}=Iy(V);Hi(),Ln(T,{matches:Ge,loaderData:{},errors:{[ni.id]:Ce}});return}if(p.initialized&&!Q&&aO(p.location,T)&&!(A&&A.submission&&dn(A.submission.formMethod))){Ln(T,{matches:te});return}k=new AbortController;let ie=xo(t.history,T,k.signal,A&&A.submission),X,K;if(A&&A.pendingError)K={[ds(te).route.id]:A.pendingError};else if(A&&A.submission&&dn(A.submission.formMethod)){let Ce=await dl(ie,T,A.submission,te,{replace:A.replace});if(Ce.shortCircuited)return;X=Ce.pendingActionData,K=Ce.pendingActionError,ne=Xd(T,A.submission),ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:Se,loaderData:Me,errors:fe}=await fl(ie,T,te,ne,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,X,K);Se||(k=null,Ln(T,Fe({matches:te},X?{actionData:X}:{},{loaderData:Me,errors:fe})))}async function dl(x,T,A,V,ne){ne===void 0&&(ne={}),B();let te=dO(T,A);ke({navigation:te});let ie,X=Ih(V,T);if(!X.route.action&&!X.route.lazy)ie={type:Ke.error,error:qt(405,{method:x.method,pathname:T.pathname,routeId:X.route.id})};else if(ie=await ko("action",x,X,V,s,i,l),x.signal.aborted)return{shortCircuited:!0};if(Is(ie)){let K;return ne&&ne.replace!=null?K=ne.replace:K=ie.location===p.location.pathname+p.location.search,await I(p,ie,{submission:A,replace:K}),{shortCircuited:!0}}if(Ko(ie)){let K=ds(V,X.route.id);return(ne&&ne.replace)!==!0&&(C=Ye.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:ie.error}}}if(hi(ie))throw qt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:ie.data}}}async function fl(x,T,A,V,ne,te,ie,X,K){let Se=V||Xd(T,ne),Me=ne||te||Py(Se),fe=a||o,[Ce,Ge]=Ey(t.history,p,A,Me,T,Q,ee,ge,q,Y,fe,l,X,K);if(Hi(_e=>!(A&&A.some(an=>an.route.id===_e))||Ce&&Ce.some(an=>an.route.id===_e)),Qe=++He,Ce.length===0&&Ge.length===0){let _e=Oe();return Ln(T,Fe({matches:A,loaderData:{},errors:K||null},X?{actionData:X}:{},_e?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!Z){Ge.forEach(an=>{let fr=p.fetchers.get(an.key),ld=bo(void 0,fr?fr.data:void 0);p.fetchers.set(an.key,ld)});let _e=X||p.actionData;ke(Fe({navigation:Se},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Ge.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ge.forEach(_e=>{ae.has(_e.key)&&W(_e.key),_e.controller&&ae.set(_e.key,_e.controller)});let ni=()=>Ge.forEach(_e=>W(_e.key));k&&k.signal.addEventListener("abort",ni);let{results:ri,loaderResults:lo,fetcherResults:id}=await R(p.matches,A,Ce,Ge,x);if(x.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",ni),Ge.forEach(_e=>ae.delete(_e.key));let Un=Ty(ri);if(Un){if(Un.idx>=Ce.length){let _e=Ge[Un.idx-Ce.length].key;Y.add(_e)}return await I(p,Un.result,{replace:ie}),{shortCircuited:!0}}let{loaderData:jn,errors:pl}=xy(p,A,Ce,lo,K,Ge,id,pe);pe.forEach((_e,an)=>{_e.subscribe(fr=>{(fr||_e.done)&&pe.delete(an)})});let sd=Oe(),od=Fn(Qe),ad=sd||od||Ge.length>0;return Fe({loaderData:jn,errors:pl},ad?{fetchers:new Map(p.fetchers)}:{})}function td(x){return p.fetchers.get(x)||eO}function eg(x,T,A,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(x)&&W(x);let ne=a||o,te=xh(p.location,p.matches,l,u.v7_prependBasename,A,T,V==null?void 0:V.relative),ie=cs(ne,te,l);if(!ie){U(x,T,qt(404,{pathname:te}));return}let{path:X,submission:K,error:Se}=wy(u.v7_normalizeFormMethod,!0,te,V);if(Se){U(x,T,Se);return}let Me=Ih(ie,X);if(N=(V&&V.preventScrollReset)===!0,K&&dn(K.formMethod)){tg(x,T,X,Me,ie,K);return}q.set(x,{routeId:T,path:X}),E(x,T,X,Me,ie,K)}async function tg(x,T,A,V,ne,te){if(B(),q.delete(x),!V.route.action&&!V.route.lazy){let Ze=qt(405,{method:te.formMethod,pathname:A,routeId:T});U(x,T,Ze);return}let ie=p.fetchers.get(x),X=fO(te,ie);p.fetchers.set(x,X),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=xo(t.history,A,K.signal,te);ae.set(x,K);let Me=He,fe=await ko("action",Se,V,ne,s,i,l);if(Se.signal.aborted){ae.get(x)===K&&ae.delete(x);return}if(Is(fe))if(ae.delete(x),Qe>Me){let Ze=qi(void 0);p.fetchers.set(x,Ze),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(x);let Ze=bo(te);return p.fetchers.set(x,Ze),ke({fetchers:new Map(p.fetchers)}),I(p,fe,{fetcherSubmission:te})}if(Ko(fe)){U(x,T,fe.error);return}if(hi(fe))throw qt(400,{type:"defer-action"});let Ce=p.navigation.location||p.location,Ge=xo(t.history,Ce,K.signal),ni=a||o,ri=p.navigation.state!=="idle"?cs(ni,p.navigation.location,l):p.matches;ue(ri,"Didn't find any matches after fetcher action");let lo=++He;F.set(x,lo);let id=bo(te,fe.data);p.fetchers.set(x,id);let[Un,jn]=Ey(t.history,p,ri,te,Ce,Q,ee,ge,q,Y,ni,l,{[V.route.id]:fe.data},void 0);jn.filter(Ze=>Ze.key!==x).forEach(Ze=>{let uo=Ze.key,rg=p.fetchers.get(uo),JS=bo(void 0,rg?rg.data:void 0);p.fetchers.set(uo,JS),ae.has(uo)&&W(uo),Ze.controller&&ae.set(uo,Ze.controller)}),ke({fetchers:new Map(p.fetchers)});let pl=()=>jn.forEach(Ze=>W(Ze.key));K.signal.addEventListener("abort",pl);let{results:sd,loaderResults:od,fetcherResults:ad}=await R(p.matches,ri,Un,jn,Ge);if(K.signal.aborted)return;K.signal.removeEventListener("abort",pl),F.delete(x),ae.delete(x),jn.forEach(Ze=>ae.delete(Ze.key));let _e=Ty(sd);if(_e){if(_e.idx>=Un.length){let Ze=jn[_e.idx-Un.length].key;Y.add(Ze)}return I(p,_e.result)}let{loaderData:an,errors:fr}=xy(p,p.matches,Un,od,void 0,jn,ad,pe);if(p.fetchers.has(x)){let Ze=qi(fe.data);p.fetchers.set(x,Ze)}let ld=Fn(lo);p.navigation.state==="loading"&&lo>Qe?(ue(C,"Expected pending action"),k&&k.abort(),Ln(p.navigation.location,{matches:ri,loaderData:an,errors:fr,fetchers:new Map(p.fetchers)})):(ke(Fe({errors:fr,loaderData:by(p.loaderData,an,ri,fr)},ld||jn.length>0?{fetchers:new Map(p.fetchers)}:{})),Q=!1)}async function E(x,T,A,V,ne,te){let ie=p.fetchers.get(x),X=bo(te,ie?ie.data:void 0);p.fetchers.set(x,X),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=xo(t.history,A,K.signal);ae.set(x,K);let Me=He,fe=await ko("loader",Se,V,ne,s,i,l);if(hi(fe)&&(fe=await XE(fe,Se.signal,!0)||fe),ae.get(x)===K&&ae.delete(x),Se.signal.aborted)return;if(Is(fe))if(Qe>Me){let Ge=qi(void 0);p.fetchers.set(x,Ge),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(x),await I(p,fe);return}if(Ko(fe)){let Ge=ds(p.matches,T);p.fetchers.delete(x),ke({fetchers:new Map(p.fetchers),errors:{[Ge.route.id]:fe.error}});return}ue(!hi(fe),"Unhandled fetcher deferred data");let Ce=qi(fe.data);p.fetchers.set(x,Ce),ke({fetchers:new Map(p.fetchers)})}async function I(x,T,A){let{submission:V,fetcherSubmission:ne,replace:te}=A===void 0?{}:A;T.revalidate&&(Q=!0);let ie=Pa(x.location,T.location,{_isRedirect:!0});if(ue(ie,"Expected a location on the redirect navigation"),n){let Ce=!1;if(T.reloadDocument)Ce=!0;else if(YE.test(T.location)){const Ge=t.history.createURL(T.location);Ce=Ge.origin!==e.location.origin||no(Ge.pathname,l)==null}if(Ce){te?e.location.replace(T.location):e.location.assign(T.location);return}}k=null;let X=te===!0?Ye.Replace:Ye.Push,{formMethod:K,formAction:Se,formEncType:Me}=x.navigation;!V&&!ne&&K&&Se&&Me&&(V=Py(x.navigation));let fe=V||ne;if(ZA.has(T.status)&&fe&&dn(fe.formMethod))await Mn(X,ie,{submission:Fe({},fe,{formAction:T.location}),preventScrollReset:N});else{let Ce=Xd(ie,V);await Mn(X,ie,{overrideNavigation:Ce,fetcherSubmission:ne,preventScrollReset:N})}}async function R(x,T,A,V,ne){let te=await Promise.all([...A.map(K=>ko("loader",ne,K,T,s,i,l)),...V.map(K=>K.matches&&K.match&&K.controller?ko("loader",xo(t.history,K.path,K.controller.signal),K.match,K.matches,s,i,l):{type:Ke.error,error:qt(404,{pathname:K.path})})]),ie=te.slice(0,A.length),X=te.slice(A.length);return await Promise.all([Ny(x,A,ie,ie.map(()=>ne.signal),!1,p.loaderData),Ny(x,V.map(K=>K.match),X,V.map(K=>K.controller?K.controller.signal:null),!0)]),{results:te,loaderResults:ie,fetcherResults:X}}function B(){Q=!0,ee.push(...Hi()),q.forEach((x,T)=>{ae.has(T)&&(ge.push(T),W(T))})}function U(x,T,A){let V=ds(p.matches,T);D(x),ke({errors:{[V.route.id]:A},fetchers:new Map(p.fetchers)})}function D(x){let T=p.fetchers.get(x);ae.has(x)&&!(T&&T.state==="loading"&&F.has(x))&&W(x),q.delete(x),F.delete(x),Y.delete(x),p.fetchers.delete(x)}function W(x){let T=ae.get(x);ue(T,"Expected fetch controller: "+x),T.abort(),ae.delete(x)}function Te(x){for(let T of x){let A=td(T),V=qi(A.data);p.fetchers.set(T,V)}}function Oe(){let x=[],T=!1;for(let A of Y){let V=p.fetchers.get(A);ue(V,"Expected fetcher: "+A),V.state==="loading"&&(Y.delete(A),x.push(A),T=!0)}return Te(x),T}function Fn(x){let T=[];for(let[A,V]of F)if(V<x){let ne=p.fetchers.get(A);ue(ne,"Expected fetcher: "+A),ne.state==="loading"&&(W(A),F.delete(A),T.push(A))}return Te(T),T.length>0}function nd(x,T){let A=p.blockers.get(x)||Co;return ve.get(x)!==T&&ve.set(x,T),A}function Wi(x){p.blockers.delete(x),ve.delete(x)}function dr(x,T){let A=p.blockers.get(x)||Co;ue(A.state==="unblocked"&&T.state==="blocked"||A.state==="blocked"&&T.state==="blocked"||A.state==="blocked"&&T.state==="proceeding"||A.state==="blocked"&&T.state==="unblocked"||A.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+T.state);let V=new Map(p.blockers);V.set(x,T),ke({blockers:V})}function hl(x){let{currentLocation:T,nextLocation:A,historyAction:V}=x;if(ve.size===0)return;ve.size>1&&Di(!1,"A router only supports one blocker at a time");let ne=Array.from(ve.entries()),[te,ie]=ne[ne.length-1],X=p.blockers.get(te);if(!(X&&X.state==="proceeding")&&ie({currentLocation:T,nextLocation:A,historyAction:V}))return te}function Hi(x){let T=[];return pe.forEach((A,V)=>{(!x||x(V))&&(A.cancel(),T.push(V),pe.delete(V))}),T}function rd(x,T,A){if(f=x,y=T,m=A||null,!_&&p.navigation===Qd){_=!0;let V=ng(p.location,p.matches);V!=null&&ke({restoreScrollPosition:V})}return()=>{f=null,y=null,m=null}}function ao(x,T){return m&&m(x,T.map(V=>NA(V,p.loaderData)))||x.key}function QS(x,T){if(f&&y){let A=ao(x,T);f[A]=y()}}function ng(x,T){if(f){let A=ao(x,T),V=f[A];if(typeof V=="number")return V}return null}function XS(x){s={},a=kh(x,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},get window(){return e},initialize:Kt,subscribe:jt,enableScrollRestoration:rd,navigate:oo,fetch:eg,revalidate:cl,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:td,deleteFetcher:D,dispose:ti,getBlocker:nd,deleteBlocker:Wi,_internalFetchControllers:ae,_internalActiveDeferreds:pe,_internalSetRoutes:XS},g}function rO(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function xh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Am(i||".",Yc(a).map(c=>c.pathnameBase),no(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Dm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Xn([n,u.pathname])),Li(u)}function wy(t,e,n,r){if(!r||!rO(r))return{path:n};if(r.formMethod&&!cO(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=QE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!dn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[_,b]=y;return""+m+_+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!dn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=bh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=bh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=ky(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=ky(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(dn(c.formMethod))return{path:n,submission:c};let d=lr(n);return e&&d.search&&Dm(d.search)&&l.append("index",""),d.search="?"+l,{path:Li(d),submission:c}}function iO(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ey(t,e,n,r,i,s,o,a,l,u,c,d,f,m){let y=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),b=t.createURL(i),v=m?Object.keys(m)[0]:void 0,g=iO(n,v).filter((C,N)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(sO(e.loaderData,e.matches[N],C)||o.some(j=>j===C.route.id))return!0;let k=e.matches[N],P=C;return Sy(C,Fe({currentUrl:_,currentParams:k.params,nextUrl:b,nextParams:P.params},r,{actionResult:y,defaultShouldRevalidate:s||_.pathname+_.search===b.pathname+b.search||_.search!==b.search||qE(k,P)}))}),p=[];return l.forEach((C,N)=>{if(!n.some(Z=>Z.route.id===C.routeId))return;let k=cs(c,C.path,d);if(!k){p.push({key:N,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(N),j=Ih(k,C.path),M=!1;u.has(N)?M=!1:a.includes(N)?M=!0:P&&P.state!=="idle"&&P.data===void 0?M=s:M=Sy(j,Fe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),M&&p.push({key:N,routeId:C.routeId,path:C.path,matches:k,match:j,controller:new AbortController})}),[g,p]}function sO(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function qE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Sy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Cy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Di(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!IA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function ko(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=y=>{let _,b=new Promise((v,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),b])};try{let y=n.route[t];if(n.route.lazy)if(y){let _,b=await Promise.all([d(y).catch(v=>{_=v}),Cy(n.route,s,i)]);if(_)throw _;u=b[0]}else if(await Cy(n.route,s,i),y=n.route[t],y)u=await d(y);else if(t==="action"){let _=new URL(e.url),b=_.pathname+_.search;throw qt(405,{method:e.method,pathname:b,routeId:n.route.id})}else return{type:Ke.data,data:void 0};else if(y)u=await d(y);else{let _=new URL(e.url),b=_.pathname+_.search;throw qt(404,{pathname:b})}ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Ke.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(uO(u)){let y=u.status;if(JA.has(y)){let v=u.headers.get("Location");if(ue(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!YE.test(v))v=xh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let h=new URL(e.url),g=v.startsWith("//")?new URL(h.protocol+v):new URL(v),p=no(g.pathname,o)!=null;g.origin===h.origin&&p&&(v=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:Ke.redirect,status:y,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ke.error?Ke.error:Ke.data,response:u};let _,b=u.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?_=await u.json():_=await u.text(),l===Ke.error?{type:l,error:new Om(y,u.statusText,_),headers:u.headers}:{type:Ke.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ke.error)return{type:l,error:u};if(lO(u)){var f,m;return{type:Ke.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ke.data,data:u}}function xo(t,e,n,r){let i=t.createURL(QE(e)).toString(),s={signal:n};if(r&&dn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=bh(r.formData):s.body=r.formData}return new Request(i,s)}function bh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ky(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function oO(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ue(!Is(c),"Cannot handle redirect results in processLoaderData"),Ko(c)){let m=ds(t,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=y),s[f]=void 0,l||(l=!0,a=HE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else hi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function xy(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=oO(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(m&&m.signal.aborted))if(Ko(y)){let _=ds(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Fe({},u,{[_.route.id]:y.error})),t.fetchers.delete(d)}else if(Is(y))ue(!1,"Unhandled fetcher revalidation redirect");else if(hi(y))ue(!1,"Unhandled fetcher deferred data");else{let _=qi(y.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function by(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ds(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Iy(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Om(t||500,o,new Error(a),!0)}function Ty(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Is(n))return{result:n,idx:e}}}function QE(t){let e=typeof t=="string"?lr(t):t;return Li(Fe({},e,{hash:""}))}function aO(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function hi(t){return t.type===Ke.deferred}function Ko(t){return t.type===Ke.error}function Is(t){return(t&&t.type)===Ke.redirect}function lO(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function uO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function cO(t){return XA.has(t.toLowerCase())}function dn(t){return qA.has(t.toLowerCase())}async function Ny(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!qE(u,l)&&(s&&s[l.route.id])!==void 0;if(hi(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await XE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function XE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ke.error,error:i}}return{type:Ke.data,data:t.deferredData.data}}}function Dm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ih(t,e){let n=typeof e=="string"?lr(e).search:e.search;if(t[t.length-1].route.index&&Dm(n||""))return t[t.length-1];let r=Yc(t);return r[r.length-1]}function Py(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Xd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function dO(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function bo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function fO(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function qi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function hO(t,e){try{let n=t.sessionStorage.getItem(KE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function pO(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(KE,JSON.stringify(n))}catch(r){Di(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rc.apply(this,arguments)}const Kc=S.createContext(null),JE=S.createContext(null),ro=S.createContext(null),qc=S.createContext(null),ur=S.createContext({outlet:null,matches:[],isDataRoute:!1}),ZE=S.createContext(null);function mO(t,e){let{relative:n}=e===void 0?{}:e;nl()||ue(!1);let{basename:r,navigator:i}=S.useContext(ro),{hash:s,pathname:o,search:a}=tS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function nl(){return S.useContext(qc)!=null}function Qc(){return nl()||ue(!1),S.useContext(qc).location}function eS(t){S.useContext(ro).static||S.useLayoutEffect(t)}function Ut(){let{isDataRoute:t}=S.useContext(ur);return t?NO():gO()}function gO(){nl()||ue(!1);let t=S.useContext(Kc),{basename:e,navigator:n}=S.useContext(ro),{matches:r}=S.useContext(ur),{pathname:i}=Qc(),s=JSON.stringify(Yc(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return eS(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Am(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const vO=S.createContext(null);function yO(t){let e=S.useContext(ur).outlet;return e&&S.createElement(vO.Provider,{value:t},e)}function $i(){let{matches:t}=S.useContext(ur),e=t[t.length-1];return e?e.params:{}}function tS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(ur),{pathname:i}=Qc(),s=JSON.stringify(Yc(r).map(o=>o.pathnameBase));return S.useMemo(()=>Am(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function _O(t,e,n){nl()||ue(!1);let{navigator:r}=S.useContext(ro),{matches:i}=S.useContext(ur),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Qc(),u;if(e){var c;let _=typeof e=="string"?lr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ue(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=cs(t,{pathname:f}),y=kO(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Xn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Xn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?S.createElement(qc.Provider,{value:{location:rc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ye.Pop}},y):y}function wO(){let t=TO(),e=HE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const EO=S.createElement(wO,null);class SO extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(ur.Provider,{value:this.props.routeContext},S.createElement(ZE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CO(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Kc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(ur.Provider,{value:e},r)}function kO(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||EO);let f=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=d:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(CO,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(SO,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var nS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nS||{}),ic=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ic||{});function xO(t){let e=S.useContext(Kc);return e||ue(!1),e}function bO(t){let e=S.useContext(JE);return e||ue(!1),e}function IO(t){let e=S.useContext(ur);return e||ue(!1),e}function rS(t){let e=IO(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function TO(){var t;let e=S.useContext(ZE),n=bO(ic.UseRouteError),r=rS(ic.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function NO(){let{router:t}=xO(nS.UseNavigateStable),e=rS(ic.UseNavigateStable),n=S.useRef(!1);return eS(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,rc({fromRouteId:e},s)))},[t,e])}function iS(t){return yO(t.context)}function PO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1}=t;nl()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=lr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,y=S.useMemo(()=>{let _=no(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return y==null?null:S.createElement(ro.Provider,{value:l},S.createElement(qc.Provider,{children:n,value:y}))}new Promise(()=>{});function RO(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ra.apply(this,arguments)}function AO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function OO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function DO(t,e){return t.button===0&&(!e||e==="_self")&&!OO(t)}const LO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function MO(t,e){return nO({basename:e==null?void 0:e.basename,future:Ra({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:kA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||FO(),routes:t,mapRouteProperties:RO,window:e==null?void 0:e.window}).initialize()}function FO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ra({},e,{errors:UO(e.errors)})),e}function UO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Om(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const jO=S.createContext({isTransitioning:!1}),zO="startTransition",Ry=mC[zO];function VO(t){Ry?Ry(t):t()}class $O{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function BO(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),[o,a]=S.useState(),[l,u]=S.useState({isTransitioning:!1}),[c,d]=S.useState(),[f,m]=S.useState(),[y,_]=S.useState(),{v7_startTransition:b}=r||{},v=S.useCallback(N=>{b?VO(N):N()},[b]),h=S.useCallback((N,k)=>{let{unstable_viewTransitionOpts:P}=k;!P||n.window==null||typeof n.window.document.startViewTransition!="function"?v(()=>s(N)):f&&c?(c.resolve(),f.skipTransition(),_({state:N,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(a(N),u({isTransitioning:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[v,f,c,n.window]);S.useLayoutEffect(()=>n.subscribe(h),[n,h]),S.useEffect(()=>{l.isTransitioning&&d(new $O)},[l.isTransitioning]),S.useEffect(()=>{if(c&&o&&n.window){let N=o,k=c.promise,P=n.window.document.startViewTransition(async()=>{v(()=>s(N)),await k});P.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(P)}},[v,o,c,n.window]),S.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),S.useEffect(()=>{!l.isTransitioning&&y&&(a(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),_(void 0))},[l.isTransitioning,y]);let g=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:N=>n.navigate(N),push:(N,k,P)=>n.navigate(N,{state:k,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(N,k,P)=>n.navigate(N,{replace:!0,state:k,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[n]),p=n.basename||"/",C=S.useMemo(()=>({router:n,navigator:g,static:!1,basename:p}),[n,g,p]);return S.createElement(S.Fragment,null,S.createElement(Kc.Provider,{value:C},S.createElement(JE.Provider,{value:i},S.createElement(jO.Provider,{value:l},S.createElement(PO,{basename:p,location:i.location,navigationType:i.historyAction,navigator:g},i.initialized?S.createElement(WO,{routes:n.routes,state:i}):e)))),null)}function WO(t){let{routes:e,state:n}=t;return _O(e,void 0,n)}const HO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YO=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=AO(e,LO),{basename:m}=S.useContext(ro),y,_=!1;if(typeof u=="string"&&GO.test(u)&&(y=u,HO))try{let g=new URL(window.location.href),p=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=no(p.pathname,m);p.origin===g.origin&&C!=null?u=C+p.search+p.hash:_=!0}catch{}let b=mO(u,{relative:i}),v=KO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||v(g)}return S.createElement("a",Ra({},f,{href:y||b,onClick:_||s?r:h,ref:n,target:l}))});var Ay;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ay||(Ay={}));var Oy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Oy||(Oy={}));function KO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ut(),u=Qc(),c=tS(t,{relative:o});return S.useCallback(d=>{if(DO(d,n)){d.preventDefault();let f=r!==void 0?r:Li(u)===Li(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const qO="/assets/logo_nav-e0cc088f.svg";function $t({onClick:t,children:e,variant:n,type:r="button"}){const[i,s]=S.useState(null),[o,a]=S.useState("shadow-md"),l={cta:"bg-themePrimary text-themeWhite",base:"bg-themeWhite text-themePrimary border border-themeGray",outlined:"bg-themeWhite text-themePrimary",danger:"bg-themeDanger text-themeWhite"};S.useEffect(()=>{s(l[n])},[i]);function u(){a("shadow-sm"),setTimeout(()=>{a("shadow-md"),t&&t()},200)}return w.jsx("input",{type:r,onClick:()=>u(),value:e,className:`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-4 mb-4 cursor-pointer w-full ${i} ${o} hover:scale-100 transition-transform duration-200`})}function QO({isMenuVisible:t}){const[e,n]=S.useState("animate-menuIn"),[r,i]=S.useState("hidden"),s=Ut();function o(){lR(Oi).then(()=>{s("/login")}).catch(a=>{console.log(a)})}return S.useEffect(()=>{t&&(i("visible"),n("animate-menuIn")),t||(n("animate-menuOut"),setTimeout(()=>{i("hidden")},400))},[t]),w.jsxs("aside",{className:`${e} ${r} absolute right-0 -top-4 w-full h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `,children:[w.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[w.jsx("br",{}),w.jsx("br",{}),w.jsx("br",{})]}),w.jsxs("div",{className:"text-themePrimary w-full p-6 flex flex-col items-end bg-themeWhite rounded-2xl shadow-md",children:[w.jsx("p",{children:"Account"}),w.jsx("p",{children:"text2"}),w.jsx($t,{onClick:o,variant:"cta",children:"Log out"})]}),w.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[w.jsx("br",{}),w.jsx("br",{}),w.jsx("br",{})]})]})}const Ts={displayName:"Name",photoUrl:"https://picsum.photos/200",email:"default@default.com",ownerOfEvents:["Initial"],participateOfEvents:["Initial"],uid:"defaultUID"},Bi=S.createContext(Ts),XO="/assets/userIconDefault-0c6f2d29.jpg";function Aa({myUser:t,size:e="small",onClick:n}){const[r,i]=S.useState(null),s=Ut(),o={small:"w-8",medium:"w-10",large:"w-12"};function a(){n&&n(),s(`/user/${t==null?void 0:t.uid}`)}return S.useEffect(()=>{i(o[e])},[r,e,t]),w.jsx("img",{onClick:a,className:`${r} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`,src:t!=null&&t.photoUrl?t==null?void 0:t.photoUrl:XO})}function JO({handleMenu:t}){const[e,n]=S.useState(!1),r=S.useContext(Bi);if(r===void 0)return null;function i(){t(),n(!0),setTimeout(()=>{n(!1)},300)}return w.jsx("div",{className:`${e?"animate-pulse":null} z-20 text-2xl grid place-items-center w-8 cursor-pointer`,onClick:i,children:w.jsx(Aa,{myUser:r})})}function ZO(){const[t,e]=S.useState(!1);function n(){e(!t)}return w.jsxs("nav",{className:"flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[w.jsx(YO,{to:"/",children:w.jsx("img",{src:qO,alt:"",className:"h-4"})}),w.jsx(JO,{handleMenu:n}),w.jsx(QO,{isMenuVisible:t})]})}function e2(){return w.jsx("div",{className:"p-6 flex justify-center items-center bg-themePrimary text-themeWhite h-16 shadow-md rounded-2xl mb-4",children:"© Maciej Tomaszewski 2023"})}const ou={id:"defaultID",name:"defaultName",date:"25-01-2034",users:[{uid:"defaultUID",value:0,id:"defaultID"}],amount:77,whopaid:{uid:"defaultUID",value:0}},_t={id:"defaultID",name:"defaultName",owner:"defaultUID",date:"25-01-2034",users:["defaultUID"],payments:[ou]},Zr=S.createContext([_t]),ei=S.createContext([_t]),io=S.createContext([Ts]);function t2({children:t}){const[e,n]=S.useState([_t]),[r,i]=S.useState([_t]),[s,o]=S.useState(Ts),[a,l]=S.useState([Ts]);async function u(m){await Go(ht(Et,`/users/${m}`),y=>{if(y.exists()){const _={...y.val(),uid:m};o(_)}})}async function c(){const m=lE(ht(Et,"users/"));await Go(m,y=>{if(y.exists()){const b=Object.entries(y.val()).map(v=>({...v[1],uid:v[0]}));l(b)}else l([Ts])})}async function d(m,y){await Go(ht(Et,`/events/${m}`),_=>{if(_.exists()){let b=function(h,g){if(console.log(g),h[0]===_t)return[g];if(h[0]!==_t){const p=h.filter(C=>C.id===m?null:C);return console.log(p),[...p,g]}return[_t]};const v=_.val();v.id=m,v.users!==void 0?v.users=Object.keys(v.users):v.users=[],v.payments!==void 0?v.payments=Object.values(v.payments):v.payments=[],y==="participateEvent"&&i(h=>b(h,v)),y==="ownerEvent"&&n(h=>b(h,v))}})}async function f(m){m.participateOfEvents.forEach(async y=>{d(y,"participateEvent")}),m.ownerOfEvents.forEach(async y=>{console.log(y),d(y,"ownerEvent")})}return S.useEffect(()=>{Oi.currentUser!=null&&(n([_t]),i([_t]),s.uid==="defaultUID"&&u(Oi.currentUser.uid),s.uid!=="defaultUID"&&f(s),c())},[s]),w.jsx(Zr.Provider,{value:e,children:w.jsx(ei.Provider,{value:r,children:w.jsx(Bi.Provider,{value:s,children:w.jsx(io.Provider,{value:a,children:w.jsx(w.Fragment,{children:t})})})})})}function n2(){return w.jsxs("main",{className:"text-themePrimary max-w-full w-full grid h-screenIOs grid-rows-AppTemplate pl-4 pr-4",children:[w.jsxs(t2,{children:[w.jsx(ZO,{}),w.jsx("main",{className:"pt-6 pb-6 w-full overflow-y-scroll",children:w.jsx(iS,{})})]}),w.jsx(e2,{})]})}async function r2(t){return await uP(ba(CA,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function i2({uid:t,displayName:e,email:n,photoURL:r}){await us(ht(Et,`users/${t}`),{displayName:e,email:n,photoUrl:r,participateOfEvents:{0:"Initial"},ownerOfEvents:{0:"Initial"}}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var s2={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function Dy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dy(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sc(t){"@babel/helpers - typeof";return sc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sc(t)}function o2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ly(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a2(t,e,n){return e&&Ly(t.prototype,e),n&&Ly(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lm(t,e){return u2(t)||d2(t,e)||sS(t,e)||h2()}function rl(t){return l2(t)||c2(t)||sS(t)||f2()}function l2(t){if(Array.isArray(t))return Th(t)}function u2(t){if(Array.isArray(t))return t}function c2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function d2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function sS(t,e){if(t){if(typeof t=="string")return Th(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Th(t,e)}}function Th(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var My=function(){},Mm={},oS={},aS=null,lS={mark:My,measure:My};try{typeof window<"u"&&(Mm=window),typeof document<"u"&&(oS=document),typeof MutationObserver<"u"&&(aS=MutationObserver),typeof performance<"u"&&(lS=performance)}catch{}var p2=Mm.navigator||{},Fy=p2.userAgent,Uy=Fy===void 0?"":Fy,Gr=Mm,Ae=oS,jy=aS,Ll=lS;Gr.document;var cr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",uS=~Uy.indexOf("MSIE")||~Uy.indexOf("Trident/"),Ml,Fl,Ul,jl,zl,ir="___FONT_AWESOME___",Nh=16,cS="fa",dS="svg-inline--fa",Mi="data-fa-i2svg",Ph="data-fa-pseudo-element",m2="data-fa-pseudo-element-pending",Fm="data-prefix",Um="data-icon",zy="fontawesome-i2svg",g2="async",v2=["HTML","HEAD","STYLE","SCRIPT"],fS=function(){try{return!0}catch{return!1}}(),Pe="classic",$e="sharp",jm=[Pe,$e];function il(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var Oa=il((Ml={},it(Ml,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(Ml,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ml)),Da=il((Fl={},it(Fl,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(Fl,$e,{solid:"fass",regular:"fasr",light:"fasl"}),Fl)),La=il((Ul={},it(Ul,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(Ul,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ul)),y2=il((jl={},it(jl,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(jl,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),jl)),_2=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,hS="fa-layers-text",w2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,E2=il((zl={},it(zl,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(zl,$e,{900:"fass",400:"fasr",300:"fasl"}),zl)),pS=[1,2,3,4,5,6,7,8,9,10],S2=pS.concat([11,12,13,14,15,16,17,18,19,20]),C2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ma=new Set;Object.keys(Da[Pe]).map(Ma.add.bind(Ma));Object.keys(Da[$e]).map(Ma.add.bind(Ma));var k2=[].concat(jm,rl(Ma),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pi.GROUP,pi.SWAP_OPACITY,pi.PRIMARY,pi.SECONDARY]).concat(pS.map(function(t){return"".concat(t,"x")})).concat(S2.map(function(t){return"w-".concat(t)})),qo=Gr.FontAwesomeConfig||{};function x2(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function b2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var I2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];I2.forEach(function(t){var e=Lm(t,2),n=e[0],r=e[1],i=b2(x2(n));i!=null&&(qo[r]=i)})}var mS={styleDefault:"solid",familyDefault:"classic",cssPrefix:cS,replacementClass:dS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qo.familyPrefix&&(qo.cssPrefix=qo.familyPrefix);var Gs=z(z({},mS),qo);Gs.autoReplaceSvg||(Gs.observeMutations=!1);var G={};Object.keys(mS).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Gs[t]=n,Qo.forEach(function(r){return r(G)})},get:function(){return Gs[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Gs.cssPrefix=e,Qo.forEach(function(n){return n(G)})},get:function(){return Gs.cssPrefix}});Gr.FontAwesomeConfig=G;var Qo=[];function T2(t){return Qo.push(t),function(){Qo.splice(Qo.indexOf(t),1)}}var mr=Nh,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N2(t){if(!(!t||!cr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var P2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fa(){for(var t=12,e="";t-- >0;)e+=P2[Math.random()*62|0];return e}function so(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zm(t){return t.classList?so(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function gS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(gS(t[n]),'" ')},"").trim()}function Xc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vm(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function A2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function O2(t){var e=t.transform,n=t.width,r=n===void 0?Nh:n,i=t.height,s=i===void 0?Nh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&uS?l+="translate(".concat(e.x/mr-r/2,"em, ").concat(e.y/mr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/mr,"em), calc(-50% + ").concat(e.y/mr,"em)) "):l+="translate(".concat(e.x/mr,"em, ").concat(e.y/mr,"em) "),l+="scale(".concat(e.size/mr*(e.flipX?-1:1),", ").concat(e.size/mr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var D2=`:root, :host {
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
}`;function vS(){var t=cS,e=dS,n=G.cssPrefix,r=G.replacementClass,i=D2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Vy=!1;function Jd(){G.autoAddCss&&!Vy&&(N2(vS()),Vy=!0)}var L2={mixout:function(){return{dom:{css:vS,insertCss:Jd}}},hooks:function(){return{beforeDOMElementCreation:function(){Jd()},beforeI2svg:function(){Jd()}}}},sr=Gr||{};sr[ir]||(sr[ir]={});sr[ir].styles||(sr[ir].styles={});sr[ir].hooks||(sr[ir].hooks={});sr[ir].shims||(sr[ir].shims=[]);var gn=sr[ir],yS=[],M2=function t(){Ae.removeEventListener("DOMContentLoaded",t),oc=1,yS.map(function(e){return e()})},oc=!1;cr&&(oc=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),oc||Ae.addEventListener("DOMContentLoaded",M2));function F2(t){cr&&(oc?setTimeout(t,0):yS.push(t))}function sl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?gS(t):"<".concat(e," ").concat(R2(r),">").concat(s.map(sl).join(""),"</").concat(e,">")}function $y(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var U2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Zd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?U2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function j2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Rh(t){var e=j2(t);return e.length===1?e[0].toString(16):null}function z2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function By(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ah(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=By(e);typeof gn.hooks.addPack=="function"&&!i?gn.hooks.addPack(t,By(e)):gn.styles[t]=z(z({},gn.styles[t]||{}),s),t==="fas"&&Ah("fa",e)}var Vl,$l,Bl,fs=gn.styles,V2=gn.shims,$2=(Vl={},it(Vl,Pe,Object.values(La[Pe])),it(Vl,$e,Object.values(La[$e])),Vl),$m=null,_S={},wS={},ES={},SS={},CS={},B2=($l={},it($l,Pe,Object.keys(Oa[Pe])),it($l,$e,Object.keys(Oa[$e])),$l);function W2(t){return~k2.indexOf(t)}function H2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!W2(i)?i:null}var kS=function(){var e=function(s){return Zd(fs,function(o,a,l){return o[l]=Zd(a,s,{}),o},{})};_S=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),wS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),CS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in fs||G.autoFetchSvg,r=Zd(V2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});ES=r.names,SS=r.unicodes,$m=Jc(G.styleDefault,{family:G.familyDefault})};T2(function(t){$m=Jc(t.styleDefault,{family:G.familyDefault})});kS();function Bm(t,e){return(_S[t]||{})[e]}function G2(t,e){return(wS[t]||{})[e]}function mi(t,e){return(CS[t]||{})[e]}function xS(t){return ES[t]||{prefix:null,iconName:null}}function Y2(t){var e=SS[t],n=Bm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yr(){return $m}var Wm=function(){return{prefix:null,iconName:null,rest:[]}};function Jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,i=Oa[r][t],s=Da[r][t]||Da[r][i],o=t in gn.styles?t:null;return s||o||null}var Wy=(Bl={},it(Bl,Pe,Object.keys(La[Pe])),it(Bl,$e,Object.keys(La[$e])),Bl);function Zc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},it(e,Pe,"".concat(G.cssPrefix,"-").concat(Pe)),it(e,$e,"".concat(G.cssPrefix,"-").concat($e)),e),o=null,a=Pe;(t.includes(s[Pe])||t.some(function(u){return Wy[Pe].includes(u)}))&&(a=Pe),(t.includes(s[$e])||t.some(function(u){return Wy[$e].includes(u)}))&&(a=$e);var l=t.reduce(function(u,c){var d=H2(G.cssPrefix,c);if(fs[c]?(c=$2[a].includes(c)?y2[a][c]:c,o=c,u.prefix=c):B2[a].indexOf(c)>-1?(o=c,u.prefix=Jc(c,{family:a})):d?u.iconName=d:c!==G.replacementClass&&c!==s[Pe]&&c!==s[$e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?xS(u.iconName):{},m=mi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!fs.far&&fs.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},Wm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===$e&&(fs.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=mi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Yr()||"fas"),l}var K2=function(){function t(){o2(this,t),this.definitions={}}return a2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),Ah(a,o[a]);var l=La[Pe][a];l&&Ah(l,o[a]),kS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Hy=[],hs={},Ns={},q2=Object.keys(Ns);function Q2(t,e){var n=e.mixoutsTo;return Hy=t,hs={},Object.keys(Ns).forEach(function(r){q2.indexOf(r)===-1&&delete Ns[r]}),Hy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),sc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){hs[o]||(hs[o]=[]),hs[o].push(s[o])})}r.provides&&r.provides(Ns)}),n}function Oh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=hs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Fi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=hs[t]||[];i.forEach(function(s){s.apply(null,n)})}function or(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ns[t]?Ns[t].apply(null,e):void 0}function Dh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Yr();if(e)return e=mi(n,e)||e,$y(bS.definitions,n,e)||$y(gn.styles,n,e)}var bS=new K2,X2=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Fi("noAuto")},J2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cr?(Fi("beforeI2svg",e),or("pseudoElements2svg",e),or("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,F2(function(){eD({autoReplaceSvgRoot:n}),Fi("watch",e)})}},Z2={icon:function(e){if(e===null)return null;if(sc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:mi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Jc(e[0]);return{prefix:r,iconName:mi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(_2))){var i=Zc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yr(),iconName:mi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Yr();return{prefix:s,iconName:mi(s,e)||e}}}},Yt={noAuto:X2,config:G,dom:J2,parse:Z2,library:bS,findIconDefinition:Dh,toHtml:sl},eD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(gn.styles).length>0||G.autoFetchSvg)&&cr&&G.autoReplaceSvg&&Yt.dom.i2svg({node:r})};function ed(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return sl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(cr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function tD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Vm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Xc(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function nD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function Hm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,y=r.found?r:n,_=y.width,b=y.height,v=i==="fak",h=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),g={children:[],attributes:z(z({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(b)})},p=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/b*16*.0625,"em")}:{};m&&(g.attributes[Mi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Fa())},children:[l]}),delete g.attributes.title);var C=z(z({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},p),d.styles)}),N=r.found&&n.found?or("generateAbstractMask",C)||{children:[],attributes:{}}:or("generateAbstractIcon",C)||{children:[],attributes:{}},k=N.children,P=N.attributes;return C.children=k,C.attributes=P,a?nD(C):tD(C)}function Gy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Mi]="");var c=z({},o.styles);Vm(i)&&(c.transform=O2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Xc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function rD(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Xc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ef=gn.styles;function Lh(t){var e=t[0],n=t[1],r=t.slice(4),i=Lm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(pi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(pi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(pi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var iD={found:!1,width:512,height:512};function sD(t,e){!fS&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Mh(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Yr()),new Promise(function(r,i){if(or("missingIconAbstract"),n==="fa"){var s=xS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ef[e]&&ef[e][t]){var o=ef[e][t];return r(Lh(o))}sD(t,e),r(z(z({},iD),{},{icon:G.showMissingIcons&&t?or("missingIconAbstract")||{}:{}}))})}var Yy=function(){},Fh=G.measurePerformance&&Ll&&Ll.mark&&Ll.measure?Ll:{mark:Yy,measure:Yy},Ao='FA "6.4.2"',oD=function(e){return Fh.mark("".concat(Ao," ").concat(e," begins")),function(){return IS(e)}},IS=function(e){Fh.mark("".concat(Ao," ").concat(e," ends")),Fh.measure("".concat(Ao," ").concat(e),"".concat(Ao," ").concat(e," begins"),"".concat(Ao," ").concat(e," ends"))},Gm={begin:oD,end:IS},au=function(){};function Ky(t){var e=t.getAttribute?t.getAttribute(Mi):null;return typeof e=="string"}function aD(t){var e=t.getAttribute?t.getAttribute(Fm):null,n=t.getAttribute?t.getAttribute(Um):null;return e&&n}function lD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function uD(){if(G.autoReplaceSvg===!0)return lu.replace;var t=lu[G.autoReplaceSvg];return t||lu.replace}function cD(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function dD(t){return Ae.createElement(t)}function TS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?cD:dD:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(TS(o,{ceFn:r}))}),i}function fD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var lu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(TS(i),n)}),n.getAttribute(Mi)===null&&G.keepOriginalSource){var r=Ae.createComment(fD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zm(n).indexOf(G.replacementClass))return lu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return sl(a)}).join(`
`);n.setAttribute(Mi,""),n.innerHTML=o}};function qy(t){t()}function NS(t,e){var n=typeof e=="function"?e:au;if(t.length===0)n();else{var r=qy;G.mutateApproach===g2&&(r=Gr.requestAnimationFrame||qy),r(function(){var i=uD(),s=Gm.begin("mutate");t.map(i),s(),n()})}}var Ym=!1;function PS(){Ym=!0}function Uh(){Ym=!1}var ac=null;function Qy(t){if(jy&&G.observeMutations){var e=t.treeCallback,n=e===void 0?au:e,r=t.nodeCallback,i=r===void 0?au:r,s=t.pseudoElementsCallback,o=s===void 0?au:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;ac=new jy(function(u){if(!Ym){var c=Yr();so(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ky(d.addedNodes[0])&&(G.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ky(d.target)&&~C2.indexOf(d.attributeName))if(d.attributeName==="class"&&aD(d.target)){var f=Zc(zm(d.target)),m=f.prefix,y=f.iconName;d.target.setAttribute(Fm,m||c),y&&d.target.setAttribute(Um,y)}else lD(d.target)&&i(d.target)})}}),cr&&ac.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hD(){ac&&ac.disconnect()}function pD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function mD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Zc(zm(t));return i.prefix||(i.prefix=Yr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=G2(i.prefix,t.innerText)||Bm(i.prefix,Rh(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gD(t){var e=so(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function vD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mD(t),r=n.iconName,i=n.prefix,s=n.rest,o=gD(t),a=Oh("parseNodeAttributes",{},t),l=e.styleParser?pD(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var yD=gn.styles;function RS(t){var e=G.autoReplaceSvg==="nest"?Xy(t,{styleParser:!1}):Xy(t);return~e.extra.classes.indexOf(hS)?or("generateLayersText",t,e):or("generateSvgReplacementMutation",t,e)}var Kr=new Set;jm.map(function(t){Kr.add("fa-".concat(t))});Object.keys(Oa[Pe]).map(Kr.add.bind(Kr));Object.keys(Oa[$e]).map(Kr.add.bind(Kr));Kr=rl(Kr);function Jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(d){return n.add("".concat(zy,"-").concat(d))},i=function(d){return n.remove("".concat(zy,"-").concat(d))},s=G.autoFetchSvg?Kr:jm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(yD));s.includes("fa")||s.push("fa");var o=[".".concat(hS,":not([").concat(Mi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Mi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=so(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Gm.begin("onTree"),u=a.reduce(function(c,d){try{var f=RS(d);f&&c.push(f)}catch(m){fS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){NS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function _D(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;RS(t).then(function(n){n&&NS([n],e)})}function wD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Dh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dh(i||{})),t(r,z(z({},n),{},{mask:i}))}}var ED=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,y=m===void 0?null:m,_=n.classes,b=_===void 0?[]:_,v=n.attributes,h=v===void 0?{}:v,g=n.styles,p=g===void 0?{}:g;if(e){var C=e.prefix,N=e.iconName,k=e.icon;return ed(z({type:"icon"},e),function(){return Fi("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?h["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(y||Fa()):(h["aria-hidden"]="true",h.focusable="false")),Hm({icons:{main:Lh(k),mask:l?Lh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:z(z({},bn),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:h,styles:p,classes:b}})})}},SD={mixout:function(){return{icon:wD(ED)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Jy,n.nodeCallback=_D,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return Jy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,y){Promise.all([Mh(i,a),c.iconName?Mh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var b=Lm(_,2),v=b[0],h=b[1];m([n,Hm({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Xc(a);l.length>0&&(i.style=l);var u;return Vm(o)&&(u=or("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},CD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ed({type:"layer"},function(){Fi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(rl(s)).join(" ")},children:o}]})}}}},kD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return ed({type:"counter",content:n},function(){return Fi("beforeDOMElementCreation",{content:n,params:r}),rD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(rl(a))}})})}}}},xD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?bn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return ed({type:"text",content:n},function(){return Fi("beforeDOMElementCreation",{content:n,params:r}),Gy({content:n,transform:z(z({},bn),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(G.cssPrefix,"-layers-text")].concat(rl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(uS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Gy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},bD=new RegExp('"',"ug"),Zy=[1105920,1112319];function ID(t){var e=t.replace(bD,""),n=z2(e,0),r=n>=Zy[0]&&n<=Zy[1],i=e.length===2?e[0]===e[1]:!1;return{value:Rh(i?e[0]:e),isSecondary:r||i}}function e_(t,e){var n="".concat(m2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=so(t.children),o=s.filter(function(k){return k.getAttribute(Ph)===e})[0],a=Gr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(w2),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Da[f][l[2].toLowerCase()]:E2[f][u],y=ID(d),_=y.value,b=y.isSecondary,v=l[0].startsWith("FontAwesome"),h=Bm(m,_),g=h;if(v){var p=Y2(_);p.iconName&&p.prefix&&(h=p.iconName,m=p.prefix)}if(h&&!b&&(!o||o.getAttribute(Fm)!==m||o.getAttribute(Um)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=vD(),N=C.extra;N.attributes[Ph]=e,Mh(h,m).then(function(k){var P=Hm(z(z({},C),{},{icons:{main:k,mask:Wm()},prefix:m,iconName:g,extra:N,watchable:!0})),j=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=P.map(function(M){return sl(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function TD(t){return Promise.all([e_(t,"::before"),e_(t,"::after")])}function ND(t){return t.parentNode!==document.head&&!~v2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ph)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function t_(t){if(cr)return new Promise(function(e,n){var r=so(t.querySelectorAll("*")).filter(ND).map(TD),i=Gm.begin("searchPseudoElements");PS(),Promise.all(r).then(function(){i(),Uh(),e()}).catch(function(){i(),Uh(),n()})})}var PD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=t_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;G.searchPseudoElements&&t_(i)}}},n_=!1,RD={mixout:function(){return{dom:{unwatch:function(){PS(),n_=!0}}}},hooks:function(){return{bootstrap:function(){Qy(Oh("mutationObserverCallbacks",{}))},noAuto:function(){hD()},watch:function(n){var r=n.observeMutationsRoot;n_?Uh():Qy(Oh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},r_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},AD={mixout:function(){return{parse:{transform:function(n){return r_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=r_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),m.path)}]}]}}}},tf={x:0,y:0,width:"100%",height:"100%"};function i_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function OD(t){return t.tag==="g"?t.children:[t]}var DD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Zc(i.split(" ").map(function(o){return o.trim()})):Wm();return s.prefix||(s.prefix=Yr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=A2({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:z(z({},tf),{},{fill:"white"})},_=c.children?{children:c.children.map(i_)}:{},b={tag:"g",attributes:z({},m.inner),children:[i_(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},_))]},v={tag:"g",attributes:z({},m.outer),children:[b]},h="mask-".concat(a||Fa()),g="clip-".concat(a||Fa()),p={tag:"mask",attributes:z(z({},tf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:OD(f)},p]};return r.push(C,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},tf)}),{children:r,attributes:i}}}},LD={provides:function(e){var n=!1;Gr.matchMedia&&(n=Gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},MD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},FD=[L2,SD,CD,kD,xD,PD,RD,AD,DD,LD,MD];Q2(FD,{mixoutsTo:Yt});Yt.noAuto;Yt.config;Yt.library;Yt.dom;var jh=Yt.parse;Yt.findIconDefinition;Yt.toHtml;var UD=Yt.icon;Yt.layer;Yt.text;Yt.counter;var AS={exports:{}},jD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zD=jD,VD=zD;function OS(){}function DS(){}DS.resetWarningCache=OS;var $D=function(){function t(r,i,s,o,a,l){if(l!==VD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:DS,resetWarningCache:OS};return n.PropTypes=n,n};AS.exports=$D();var BD=AS.exports;const le=v_(BD);function s_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function br(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?s_(Object(n),!0).forEach(function(r){ps(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lc(t){"@babel/helpers - typeof";return lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lc(t)}function ps(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function HD(t,e){if(t==null)return{};var n=WD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zh(t){return GD(t)||YD(t)||KD(t)||qD()}function GD(t){if(Array.isArray(t))return Vh(t)}function YD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KD(t,e){if(t){if(typeof t=="string")return Vh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vh(t,e)}}function Vh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,y=t.border,_=t.listItem,b=t.flip,v=t.size,h=t.rotation,g=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":y,"fa-li":_,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ps(e,"fa-".concat(v),typeof v<"u"&&v!==null),ps(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ps(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ps(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(C){return p[C]?C:null}).filter(function(C){return C})}function XD(t){return t=t-0,t===t}function LS(t){return XD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var JD=["style"];function ZD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function eL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=LS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[ZD(i)]=s:e[i]=s,e},{})}function MS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return MS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=eL(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[LS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=HD(n,JD);return i.attrs.style=br(br({},i.attrs.style),o),t.apply(void 0,[e.tag,br(br({},i.attrs),a)].concat(zh(r)))}var FS=!1;try{FS=!0}catch{}function tL(){if(!FS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function o_(t){if(t&&lc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jh.icon)return jh.icon(t);if(t===null)return null;if(t&&lc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function nf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ps({},t,e):{}}var ol=Zt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=o_(n),c=nf("classes",[].concat(zh(QD(t)),zh(s.split(" ")))),d=nf("transform",typeof t.transform=="string"?jh.transform(t.transform):t.transform),f=nf("mask",o_(r)),m=UD(u,br(br(br(br({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return tL("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(t).forEach(function(b){ol.defaultProps.hasOwnProperty(b)||(_[b]=t[b])}),nL(y[0],_)});ol.displayName="FontAwesomeIcon";ol.propTypes={beat:le.bool,border:le.bool,beatFade:le.bool,bounce:le.bool,className:le.string,fade:le.bool,flash:le.bool,mask:le.oneOfType([le.object,le.array,le.string]),maskId:le.string,fixedWidth:le.bool,inverse:le.bool,flip:le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:le.oneOfType([le.object,le.array,le.string]),listItem:le.bool,pull:le.oneOf(["right","left"]),pulse:le.bool,rotation:le.oneOf([0,90,180,270]),shake:le.bool,size:le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:le.bool,spinPulse:le.bool,spinReverse:le.bool,symbol:le.oneOfType([le.bool,le.string]),title:le.string,titleId:le.string,transform:le.oneOfType([le.string,le.object]),swapOpacity:le.bool};ol.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var nL=MS.bind(null,Zt.createElement);function al({size:t}){const[e,n]=S.useState("text-2xl");return S.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),w.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:w.jsx(ol,{icon:s2,spin:!0})})}function rL(){const t=Ut(),[e,n]=S.useState(!1);return S.useEffect(function(){PE(Oi,async r=>{if(r){console.log("AUTH: Logged");const i=await r2(r);i&&n(i),i||await i2(r)}else t("/login")})},[]),e?w.jsx(n2,{}):w.jsx("div",{className:"h-screen",children:w.jsx(al,{size:"big"})})}function iL(){const t=Ut();S.useEffect(()=>{PE(Oi,n=>{t(n?"/":"/login")})},[]);function e(){const n=new xn;NR(Oi,n).then(r=>{const i=xn.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return w.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:w.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",w.jsx("br",{}),w.jsx($t,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function sL({event:t}){const e=Ut(),n=()=>{e(`/event/${t.id}`)};return w.jsxs("div",{onClick:n,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:t.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function a_({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(console.log(),e===void 0)return w.jsx(al,{size:"small"});if(console.log(e[0].name),e[0].name==="defaultName")return w.jsxs("div",{children:["U have zero of ",t]});if(e.length>0)return e.map(o=>w.jsx(sL,{event:o},o.id))},i=Ut();function s(){i("/event/create")}return w.jsxs("div",{className:"w-full pb-2",children:[w.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?w.jsx($t,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function oL(){const t=S.useContext(Zr),e=S.useContext(ei);return S.useEffect(()=>{},[]),w.jsxs("div",{className:"h-full w-full",children:[w.jsx(a_,{buttonAddEvent:!0,title:"Your events",events:t}),w.jsx("br",{}),w.jsx(a_,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var ll=t=>t.type==="checkbox",ms=t=>t instanceof Date,xt=t=>t==null;const US=t=>typeof t=="object";var st=t=>!xt(t)&&!Array.isArray(t)&&US(t)&&!ms(t),aL=t=>st(t)&&t.target?ll(t.target)?t.target.checked:t.target.value:t,lL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,uL=(t,e)=>t.has(lL(e)),cL=t=>{const e=t.constructor&&t.constructor.prototype;return st(e)&&e.hasOwnProperty("isPrototypeOf")},Km=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Vn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Km&&(t instanceof Blob||t instanceof FileList))&&(n||st(t)))if(e=n?[]:{},!n&&!cL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Vn(t[r]));else return t;return e}var ul=t=>Array.isArray(t)?t.filter(Boolean):[],Xe=t=>t===void 0,H=(t,e,n)=>{if(!e||!st(t))return n;const r=ul(e.split(/[,[\].]+?/)).reduce((i,s)=>xt(i)?i:i[s],t);return Xe(r)||r===t?Xe(t[e])?n:t[e]:r},gi=t=>typeof t=="boolean";const l_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},zn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var dL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==pn.all&&(e._proxyFormState[o]=!r||pn.all),n&&(n[o]=!0),t[o]}});return i},Qt=t=>st(t)&&!Object.keys(t).length,fL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Qt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||pn.all))},rf=t=>Array.isArray(t)?t:[t];function hL(t){const e=Zt.useRef(t);e.current=t,Zt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var In=t=>typeof t=="string",pL=(t,e,n,r,i)=>In(t)?(r&&e.watch.add(t),H(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),H(n,s))):(r&&(e.watchAll=!0),n),qm=t=>/^\w*$/.test(t),jS=t=>ul(t.replace(/["|']|\]/g,"").split(/\.|\[/));function De(t,e,n){let r=-1;const i=qm(e)?[e]:jS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=st(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var mL=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const $h=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=H(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else st(o)&&$h(o,e)}}};var u_=t=>({isOnSubmit:!t||t===pn.onSubmit,isOnBlur:t===pn.onBlur,isOnChange:t===pn.onChange,isOnAll:t===pn.all,isOnTouch:t===pn.onTouched}),c_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),gL=(t,e,n)=>{const r=ul(H(t,n));return De(r,"root",e[n]),De(t,n,r),t},Qm=t=>t.type==="file",Ir=t=>typeof t=="function",uc=t=>{if(!Km)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},uu=t=>In(t),Xm=t=>t.type==="radio",cc=t=>t instanceof RegExp;const d_={value:!1,isValid:!1},f_={value:!0,isValid:!0};var zS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Xe(t[0].attributes.value)?Xe(t[0].value)||t[0].value===""?f_:{value:t[0].value,isValid:!0}:f_:d_}return d_};const h_={isValid:!1,value:null};var VS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,h_):h_;function p_(t,e,n="validate"){if(uu(t)||Array.isArray(t)&&t.every(uu)||gi(t)&&!t)return{type:n,message:uu(t)?t:"",ref:e}}var Ki=t=>st(t)&&!cc(t)?t:{value:t,message:""},m_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:m,name:y,valueAsNumber:_,mount:b,disabled:v}=t._f,h=H(e,y);if(!b||v)return{};const g=o?o[0]:s,p=Q=>{r&&g.reportValidity&&(g.setCustomValidity(gi(Q)?"":Q||""),g.reportValidity())},C={},N=Xm(s),k=ll(s),P=N||k,j=(_||Qm(s))&&Xe(s.value)&&Xe(h)||uc(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,M=mL.bind(null,y,n,C),Z=(Q,ee,ge,ae=zn.maxLength,He=zn.minLength)=>{const Qe=Q?ee:ge;C[y]={type:Q?ae:He,message:Qe,ref:s,...M(Q?ae:He,Qe)}};if(i?!Array.isArray(h)||!h.length:a&&(!P&&(j||xt(h))||gi(h)&&!h||k&&!zS(o).isValid||N&&!VS(o).isValid)){const{value:Q,message:ee}=uu(a)?{value:!!a,message:a}:Ki(a);if(Q&&(C[y]={type:zn.required,message:ee,ref:g,...M(zn.required,ee)},!n))return p(ee),C}if(!j&&(!xt(c)||!xt(d))){let Q,ee;const ge=Ki(d),ae=Ki(c);if(!xt(h)&&!isNaN(h)){const He=s.valueAsNumber||h&&+h;xt(ge.value)||(Q=He>ge.value),xt(ae.value)||(ee=He<ae.value)}else{const He=s.valueAsDate||new Date(h),Qe=q=>new Date(new Date().toDateString()+" "+q),F=s.type=="time",Y=s.type=="week";In(ge.value)&&h&&(Q=F?Qe(h)>Qe(ge.value):Y?h>ge.value:He>new Date(ge.value)),In(ae.value)&&h&&(ee=F?Qe(h)<Qe(ae.value):Y?h<ae.value:He<new Date(ae.value))}if((Q||ee)&&(Z(!!Q,ge.message,ae.message,zn.max,zn.min),!n))return p(C[y].message),C}if((l||u)&&!j&&(In(h)||i&&Array.isArray(h))){const Q=Ki(l),ee=Ki(u),ge=!xt(Q.value)&&h.length>+Q.value,ae=!xt(ee.value)&&h.length<+ee.value;if((ge||ae)&&(Z(ge,Q.message,ee.message),!n))return p(C[y].message),C}if(f&&!j&&In(h)){const{value:Q,message:ee}=Ki(f);if(cc(Q)&&!h.match(Q)&&(C[y]={type:zn.pattern,message:ee,ref:s,...M(zn.pattern,ee)},!n))return p(ee),C}if(m){if(Ir(m)){const Q=await m(h,e),ee=p_(Q,g);if(ee&&(C[y]={...ee,...M(zn.validate,ee.message)},!n))return p(ee.message),C}else if(st(m)){let Q={};for(const ee in m){if(!Qt(Q)&&!n)break;const ge=p_(await m[ee](h,e),g,ee);ge&&(Q={...ge,...M(ee,ge.message)},p(ge.message),n&&(C[y]=Q))}if(!Qt(Q)&&(C[y]={ref:g,...Q},!n))return C}}return p(!0),C};function vL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Xe(t)?r++:t[e[r++]];return t}function yL(t){for(const e in t)if(t.hasOwnProperty(e)&&!Xe(t[e]))return!1;return!0}function ct(t,e){const n=Array.isArray(e)?e:qm(e)?[e]:jS(e),r=n.length===1?t:vL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(st(r)&&Qt(r)||Array.isArray(r)&&yL(r))&&ct(t,n.slice(0,-1)),t}function sf(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var dc=t=>xt(t)||!US(t);function vi(t,e){if(dc(t)||dc(e))return t===e;if(ms(t)&&ms(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ms(s)&&ms(o)||st(s)&&st(o)||Array.isArray(s)&&Array.isArray(o)?!vi(s,o):s!==o)return!1}}return!0}var $S=t=>t.type==="select-multiple",_L=t=>Xm(t)||ll(t),of=t=>uc(t)&&t.isConnected,BS=t=>{for(const e in t)if(Ir(t[e]))return!0;return!1};function fc(t,e={}){const n=Array.isArray(t);if(st(t)||n)for(const r in t)Array.isArray(t[r])||st(t[r])&&!BS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},fc(t[r],e[r])):xt(t[r])||(e[r]=!0);return e}function WS(t,e,n){const r=Array.isArray(t);if(st(t)||r)for(const i in t)Array.isArray(t[i])||st(t[i])&&!BS(t[i])?Xe(e)||dc(n[i])?n[i]=Array.isArray(t[i])?fc(t[i],[]):{...fc(t[i])}:WS(t[i],xt(e)?{}:e[i],n[i]):n[i]=!vi(t[i],e[i]);return n}var af=(t,e)=>WS(t,e,fc(e)),HS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Xe(t)?t:e?t===""?NaN:t&&+t:n&&In(t)?new Date(t):r?r(t):t;function lf(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Qm(e)?e.files:Xm(e)?VS(t.refs).value:$S(e)?[...e.selectedOptions].map(({value:n})=>n):ll(e)?zS(t.refs).value:HS(Xe(e.value)?t.ref.value:e.value,t)}var wL=(t,e,n,r)=>{const i={};for(const s of t){const o=H(e,s);o&&De(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Io=t=>Xe(t)?t:cc(t)?t.source:st(t)?cc(t.value)?t.value.source:t.value:t,EL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function g_(t,e,n){const r=H(t,n);if(r||qm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=H(e,s),a=H(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var SL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,CL=(t,e)=>!ul(H(t,e)).length&&ct(t,e);const kL={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function xL(t={},e){let n={...kL,...t},r={submitCount:0,isDirty:!1,isLoading:Ir(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=st(n.defaultValues)||st(n.values)?Vn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Vn(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:sf(),array:sf(),state:sf()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,y=u_(n.mode),_=u_(n.reValidateMode),b=n.criteriaMode===pn.all,v=E=>I=>{clearTimeout(c),c=setTimeout(E,I)},h=async E=>{if(d.isValid||E){const I=n.resolver?Qt((await j()).errors):await Z(i,!0);I!==r.isValid&&f.state.next({isValid:I})}},g=E=>d.isValidating&&f.state.next({isValidating:E}),p=(E,I=[],R,B,U=!0,D=!0)=>{if(B&&R){if(a.action=!0,D&&Array.isArray(H(i,E))){const W=R(H(i,E),B.argA,B.argB);U&&De(i,E,W)}if(D&&Array.isArray(H(r.errors,E))){const W=R(H(r.errors,E),B.argA,B.argB);U&&De(r.errors,E,W),CL(r.errors,E)}if(d.touchedFields&&D&&Array.isArray(H(r.touchedFields,E))){const W=R(H(r.touchedFields,E),B.argA,B.argB);U&&De(r.touchedFields,E,W)}d.dirtyFields&&(r.dirtyFields=af(s,o)),f.state.next({name:E,isDirty:ee(E,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else De(o,E,I)},C=(E,I)=>{De(r.errors,E,I),f.state.next({errors:r.errors})},N=(E,I,R,B)=>{const U=H(i,E);if(U){const D=H(o,E,Xe(R)?H(s,E):R);Xe(D)||B&&B.defaultChecked||I?De(o,E,I?D:lf(U._f)):He(E,D),a.mount&&h()}},k=(E,I,R,B,U)=>{let D=!1,W=!1;const Te={name:E};if(!R||B){d.isDirty&&(W=r.isDirty,r.isDirty=Te.isDirty=ee(),D=W!==Te.isDirty);const Oe=vi(H(s,E),I);W=H(r.dirtyFields,E),Oe?ct(r.dirtyFields,E):De(r.dirtyFields,E,!0),Te.dirtyFields=r.dirtyFields,D=D||d.dirtyFields&&W!==!Oe}if(R){const Oe=H(r.touchedFields,E);Oe||(De(r.touchedFields,E,R),Te.touchedFields=r.touchedFields,D=D||d.touchedFields&&Oe!==R)}return D&&U&&f.state.next(Te),D?Te:{}},P=(E,I,R,B)=>{const U=H(r.errors,E),D=d.isValid&&gi(I)&&r.isValid!==I;if(t.delayError&&R?(u=v(()=>C(E,R)),u(t.delayError)):(clearTimeout(c),u=null,R?De(r.errors,E,R):ct(r.errors,E)),(R?!vi(U,R):U)||!Qt(B)||D){const W={...B,...D&&gi(I)?{isValid:I}:{},errors:r.errors,name:E};r={...r,...W},f.state.next(W)}g(!1)},j=async E=>n.resolver(o,n.context,wL(E||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),M=async E=>{const{errors:I}=await j(E);if(E)for(const R of E){const B=H(I,R);B?De(r.errors,R,B):ct(r.errors,R)}else r.errors=I;return I},Z=async(E,I,R={valid:!0})=>{for(const B in E){const U=E[B];if(U){const{_f:D,...W}=U;if(D){const Te=l.array.has(D.name),Oe=await m_(U,o,b,n.shouldUseNativeValidation&&!I,Te);if(Oe[D.name]&&(R.valid=!1,I))break;!I&&(H(Oe,D.name)?Te?gL(r.errors,Oe,D.name):De(r.errors,D.name,Oe[D.name]):ct(r.errors,D.name))}W&&await Z(W,I,R)}}return R.valid},Q=()=>{for(const E of l.unMount){const I=H(i,E);I&&(I._f.refs?I._f.refs.every(R=>!of(R)):!of(I._f.ref))&&jt(E)}l.unMount=new Set},ee=(E,I)=>(E&&I&&De(o,E,I),!vi(pe(),s)),ge=(E,I,R)=>pL(E,l,{...a.mount?o:Xe(I)?s:In(E)?{[E]:I}:I},R,I),ae=E=>ul(H(a.mount?o:s,E,t.shouldUnregister?H(s,E,[]):[])),He=(E,I,R={})=>{const B=H(i,E);let U=I;if(B){const D=B._f;D&&(!D.disabled&&De(o,E,HS(I,D)),U=uc(D.ref)&&xt(I)?"":I,$S(D.ref)?[...D.ref.options].forEach(W=>W.selected=U.includes(W.value)):D.refs?ll(D.ref)?D.refs.length>1?D.refs.forEach(W=>(!W.defaultChecked||!W.disabled)&&(W.checked=Array.isArray(U)?!!U.find(Te=>Te===W.value):U===W.value)):D.refs[0]&&(D.refs[0].checked=!!U):D.refs.forEach(W=>W.checked=W.value===U):Qm(D.ref)?D.ref.value="":(D.ref.value=U,D.ref.type||f.values.next({name:E,values:{...o}})))}(R.shouldDirty||R.shouldTouch)&&k(E,U,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&q(E)},Qe=(E,I,R)=>{for(const B in I){const U=I[B],D=`${E}.${B}`,W=H(i,D);(l.array.has(E)||!dc(U)||W&&!W._f)&&!ms(U)?Qe(D,U,R):He(D,U,R)}},F=(E,I,R={})=>{const B=H(i,E),U=l.array.has(E),D=Vn(I);De(o,E,D),U?(f.array.next({name:E,values:{...o}}),(d.isDirty||d.dirtyFields)&&R.shouldDirty&&f.state.next({name:E,dirtyFields:af(s,o),isDirty:ee(E,D)})):B&&!B._f&&!xt(D)?Qe(E,D,R):He(E,D,R),c_(E,l)&&f.state.next({...r}),f.values.next({name:E,values:{...o}}),!a.mount&&e()},Y=async E=>{const I=E.target;let R=I.name,B=!0;const U=H(i,R),D=()=>I.type?lf(U._f):aL(E);if(U){let W,Te;const Oe=D(),Fn=E.type===l_.BLUR||E.type===l_.FOCUS_OUT,nd=!EL(U._f)&&!n.resolver&&!H(r.errors,R)&&!U._f.deps||SL(Fn,H(r.touchedFields,R),r.isSubmitted,_,y),Wi=c_(R,l,Fn);De(o,R,Oe),Fn?(U._f.onBlur&&U._f.onBlur(E),u&&u(0)):U._f.onChange&&U._f.onChange(E);const dr=k(R,Oe,Fn,!1),hl=!Qt(dr)||Wi;if(!Fn&&f.values.next({name:R,type:E.type,values:{...o}}),nd)return d.isValid&&h(),hl&&f.state.next({name:R,...Wi?{}:dr});if(!Fn&&Wi&&f.state.next({...r}),g(!0),n.resolver){const{errors:Hi}=await j([R]),rd=g_(r.errors,i,R),ao=g_(Hi,i,rd.name||R);W=ao.error,R=ao.name,Te=Qt(Hi)}else W=(await m_(U,o,b,n.shouldUseNativeValidation))[R],B=Number.isNaN(Oe)||Oe===H(o,R,Oe),B&&(W?Te=!1:d.isValid&&(Te=await Z(i,!0)));B&&(U._f.deps&&q(U._f.deps),P(R,Te,W,dr))}},q=async(E,I={})=>{let R,B;const U=rf(E);if(g(!0),n.resolver){const D=await M(Xe(E)?E:U);R=Qt(D),B=E?!U.some(W=>H(D,W)):R}else E?(B=(await Promise.all(U.map(async D=>{const W=H(i,D);return await Z(W&&W._f?{[D]:W}:W)}))).every(Boolean),!(!B&&!r.isValid)&&h()):B=R=await Z(i);return f.state.next({...!In(E)||d.isValid&&R!==r.isValid?{}:{name:E},...n.resolver||!E?{isValid:R}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!B&&$h(i,D=>D&&H(r.errors,D),E?U:l.mount),B},pe=E=>{const I={...s,...a.mount?o:{}};return Xe(E)?I:In(E)?H(I,E):E.map(R=>H(I,R))},ve=(E,I)=>({invalid:!!H((I||r).errors,E),isDirty:!!H((I||r).dirtyFields,E),isTouched:!!H((I||r).touchedFields,E),error:H((I||r).errors,E)}),En=E=>{E&&rf(E).forEach(I=>ct(r.errors,I)),f.state.next({errors:E?r.errors:{}})},Kt=(E,I,R)=>{const B=(H(i,E,{_f:{}})._f||{}).ref;De(r.errors,E,{...I,ref:B}),f.state.next({name:E,errors:r.errors,isValid:!1}),R&&R.shouldFocus&&B&&B.focus&&B.focus()},ti=(E,I)=>Ir(E)?f.values.subscribe({next:R=>E(ge(void 0,I),R)}):ge(E,I,!0),jt=(E,I={})=>{for(const R of E?rf(E):l.mount)l.mount.delete(R),l.array.delete(R),I.keepValue||(ct(i,R),ct(o,R)),!I.keepError&&ct(r.errors,R),!I.keepDirty&&ct(r.dirtyFields,R),!I.keepTouched&&ct(r.touchedFields,R),!n.shouldUnregister&&!I.keepDefaultValue&&ct(s,R);f.values.next({values:{...o}}),f.state.next({...r,...I.keepDirty?{isDirty:ee()}:{}}),!I.keepIsValid&&h()},ke=({disabled:E,name:I,field:R,fields:B})=>{if(gi(E)){const U=E?void 0:H(o,I,lf(R?R._f:H(B,I)._f));De(o,I,U),k(I,U,!1,!1,!0)}},Ln=(E,I={})=>{let R=H(i,E);const B=gi(I.disabled);return De(i,E,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:E}},name:E,mount:!0,...I}}),l.mount.add(E),R?ke({field:R,disabled:I.disabled,name:E}):N(E,!0,I.value),{...B?{disabled:I.disabled}:{},...n.progressive?{required:!!I.required,min:Io(I.min),max:Io(I.max),minLength:Io(I.minLength),maxLength:Io(I.maxLength),pattern:Io(I.pattern)}:{},name:E,onChange:Y,onBlur:Y,ref:U=>{if(U){Ln(E,I),R=H(i,E);const D=Xe(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,W=_L(D),Te=R._f.refs||[];if(W?Te.find(Oe=>Oe===D):D===R._f.ref)return;De(i,E,{_f:{...R._f,...W?{refs:[...Te.filter(of),D,...Array.isArray(H(s,E))?[{}]:[]],ref:{type:D.type,name:E}}:{ref:D}}}),N(E,!1,void 0,D)}else R=H(i,E,{}),R._f&&(R._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(uL(l.array,E)&&a.action)&&l.unMount.add(E)}}},oo=()=>n.shouldFocusError&&$h(i,E=>E&&H(r.errors,E),l.mount),cl=(E,I)=>async R=>{R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let B=Vn(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:U,values:D}=await j();r.errors=U,B=D}else await Z(i);ct(r.errors,"root"),Qt(r.errors)?(f.state.next({errors:{}}),await E(B,R)):(I&&await I({...r.errors},R),oo(),setTimeout(oo)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Mn=(E,I={})=>{H(i,E)&&(Xe(I.defaultValue)?F(E,H(s,E)):(F(E,I.defaultValue),De(s,E,I.defaultValue)),I.keepTouched||ct(r.touchedFields,E),I.keepDirty||(ct(r.dirtyFields,E),r.isDirty=I.defaultValue?ee(E,H(s,E)):ee()),I.keepError||(ct(r.errors,E),d.isValid&&h()),f.state.next({...r}))},dl=(E,I={})=>{const R=E?Vn(E):s,B=Vn(R),U=E&&!Qt(E)?B:s;if(I.keepDefaultValues||(s=R),!I.keepValues){if(I.keepDirtyValues||m)for(const D of l.mount)H(r.dirtyFields,D)?De(U,D,H(o,D)):F(D,H(U,D));else{if(Km&&Xe(E))for(const D of l.mount){const W=H(i,D);if(W&&W._f){const Te=Array.isArray(W._f.refs)?W._f.refs[0]:W._f.ref;if(uc(Te)){const Oe=Te.closest("form");if(Oe){Oe.reset();break}}}}i={}}o=t.shouldUnregister?I.keepDefaultValues?Vn(s):{}:Vn(U),f.array.next({values:{...U}}),f.values.next({values:{...U}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!I.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!vi(E,s)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&E?af(s,E):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitSuccessful:I.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},fl=(E,I)=>dl(Ir(E)?E(o):E,I);return{control:{register:Ln,unregister:jt,getFieldState:ve,handleSubmit:cl,setError:Kt,_executeSchema:j,_getWatch:ge,_getDirty:ee,_updateValid:h,_removeUnmounted:Q,_updateFieldArray:p,_updateDisabledField:ke,_getFieldArray:ae,_reset:dl,_resetDefaultValues:()=>Ir(n.defaultValues)&&n.defaultValues().then(E=>{fl(E,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:E=>{r={...r,...E}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(E){a=E},get _defaultValues(){return s},get _names(){return l},set _names(E){l=E},get _formState(){return r},set _formState(E){r=E},get _options(){return n},set _options(E){n={...n,...E}}},trigger:q,register:Ln,handleSubmit:cl,watch:ti,setValue:F,getValues:pe,reset:fl,resetField:Mn,clearErrors:En,unregister:jt,setError:Kt,setFocus:(E,I={})=>{const R=H(i,E),B=R&&R._f;if(B){const U=B.refs?B.refs[0]:B.ref;U.focus&&(U.focus(),I.shouldSelect&&U.select())}},getFieldState:ve}}function Jm(t={}){const e=Zt.useRef(),n=Zt.useRef(),[r,i]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:Ir(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Ir(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...xL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,hL({subject:s._subjects.state,next:o=>{fL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Zt.useEffect(()=>{t.values&&!vi(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Zt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=dL(r,s),e.current}const Ua=({type:t,placeholder:e,defaultValue:n,register:r,variant:i="base"})=>{const[s,o]=S.useState(null),a={base:"border-2 border-themeGray rounded-none",outline:"border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2",danger:"border-themeDanger rounded-2xl h-12 p-2 border-2 mt-2 mb-2"};return S.useEffect(()=>{o(a[i])},[s,i]),w.jsx("input",{...r,defaultValue:n,type:t,step:"any",placeholder:e,className:`${s} w-full transition-transform duration-200 `})};function bL({usersInput:t,resetField:e,setSelectedUsers:n,selectedUsers:r,variant:i}){const s=S.useContext(io),o=S.useContext(Bi),[a,l]=S.useState(void 0);function u(f){if(f===void 0){l(void 0);return}if(f.length===0){l(void 0);return}if(f.length>0){const m=s==null?void 0:s.filter(y=>{if(r!==void 0&&r.filter(v=>v===y.uid).length!==0||y.uid===(o==null?void 0:o.uid))return null;const _=y.email.includes(f);if(_===!1)return null;if(_===!0)return!0});l(m)}}function c(f){e("usersInput"),n(m=>m?[...m,f.uid]:[f.uid])}function d(f){const m=r==null?void 0:r.filter(y=>y!==(f==null?void 0:f.uid));n(m)}return S.useEffect(()=>{u(t)},[t,r]),w.jsxs(w.Fragment,{children:[w.jsx("div",{children:r?w.jsx("div",{className:`${r.length===0?"hidden":"visible"} border-themePrimary border-2 rounded-2xl p-2 mb-2`,children:r.map(f=>{const m=s==null?void 0:s.filter(y=>y.uid===f)[0];return m===void 0?w.jsx(w.Fragment,{children:"Error"}):w.jsx("div",{className:"flex gap-2 items-center pt-1 pb-1 flex-col",children:w.jsxs("div",{className:"flex gap-2  pt-1 pb-1 w-full",children:[w.jsxs("div",{className:"flex w-full gap-2",children:[w.jsx(Aa,{myUser:m,onClick:()=>d(m)}),w.jsxs("p",{className:"text-xs",children:[" ",m.email]})]}),w.jsx("div",{onClick:()=>d(m),className:"p-2 border-2 h-8 w-8 border-themePrimary rounded-full flex items-center justify-center cursor-pointer",children:w.jsx("div",{className:"w-4 h-[2px] bg-themeDanger"})})]})})})}):null}),w.jsx("div",{className:`${a?"h-16 opacity-100 p-2":"h-0 opacity-0 p-0"} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`,children:a!==void 0&&(a==null?void 0:a.length)>0?a.map(f=>w.jsxs("div",{onClick:()=>c(f),className:"flex gap-2 items-center p-1",children:[w.jsx(Aa,{myUser:f}),w.jsxs("p",{className:"text-xs",children:[" ",f.email]})]})):w.jsx("div",{className:"p-1 text-center grid items-center h-full",children:"User not found"})})]})}function IL(){return new Date}function TL(t){return Math.floor(Math.random()*t)}function Bh(){let t="id";const e=new Date;return t+=e.getFullYear(),t+=e.getMonth()+1,t+=e.getDate(),t+=e.getMinutes(),t+=e.getSeconds(),t+=e.getMilliseconds(),t+=TL(1e4),t}const Zm=IL(),GS=Zm.getFullYear();let Xo=`${Zm.getMonth()+1}`;Number(Xo)<10&&(Xo=`0${Xo}`);let Jo=`${Zm.getDate()}`;Number(Jo)<10&&(Jo=`0${Jo}`);function YS({type:t,currentEvent:e}){const n=Ut(),r=S.useContext(io),i=S.useContext(Bi),[s,o]=S.useState(void 0),{register:a,handleSubmit:l,watch:u,formState:{errors:c},resetField:d,setValue:f}=Jm(),m=u("usersInput"),y=g=>{t==="create"&&_(g),t==="edit"&&b(g)},_=g=>{const p=Bh();if(i===void 0){n("/login");return}let C={id:p,date:`${GS}-${Xo}-${Jo}`,name:g.name,owner:i==null?void 0:i.uid,users:{}};s!==void 0&&s.length>0&&s.map(P=>{Object.defineProperty(C.users,P,{value:P,enumerable:!0}),v(P,p)}),us(ht(Et,"events/"+p),C);const N=i==null?void 0:i.ownerOfEvents.length;let k={};Object.defineProperty(k,N,{value:p,enumerable:!0}),Ia(ht(Et,`users/${i.uid}/ownerOfEvents`),k),n("/event/"+p)},b=g=>{if(e===void 0)return;let p={...e,name:g.name,users:{}};s!==void 0&&s.length>0&&s.map(k=>{Object.defineProperty(p.users,k,{value:k,enumerable:!0})}),us(ht(Et,"events/"+e.id),p);const C=s==null?void 0:s.filter(k=>e.users.includes(k)?null:k);C==null||C.forEach(k=>{r==null||r.find(P=>{if(P.uid===k){let j=P.participateOfEvents;j.push(e.id);const M={};j.forEach((Z,Q)=>{Object.defineProperty(M,Q,{value:Z,enumerable:!0})}),us(ht(Et,`users/${k}/participateOfEvents`),M)}})}),e.users.filter(k=>s!=null&&s.includes(k)?null:k).forEach(k=>{const P=r==null?void 0:r.find(Z=>Z.uid===k?Z:!1),j=P==null?void 0:P.participateOfEvents.filter(Z=>Z===e.id?null:Z),M={};j==null||j.forEach((Z,Q)=>{Object.defineProperty(M,Q,{value:Z,enumerable:!0})}),us(ht(Et,`users/${k}/participateOfEvents`),M)}),n("/event/"+e.id)};function v(g,p){if(r===void 0)return;const N=r.filter(P=>P.uid===g)[0].participateOfEvents.length,k={};Object.defineProperty(k,N,{value:p,enumerable:!0}),console.log(k),Ia(ht(Et,`users/${g}/participateOfEvents/`),k)}function h(){n(`/event/${e==null?void 0:e.id}/delete`)}return S.useEffect(()=>{t==="edit"&&e!==void 0&&(f("name",e.name),o([...e.users]))},[e]),w.jsxs("form",{onSubmit:l(y),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsxs("h1",{className:"mt-2 mb-2 font-bold text-xl",children:[t==="create"?"Create":null," ",t==="edit"?"Edit":null," Event"]}),w.jsxs("label",{children:[w.jsx(Ua,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Event name",variant:c.name?"danger":"outline"}),c.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{children:[w.jsx(Ua,{type:"text",defaultValue:"",register:a("usersInput"),placeholder:"Add users",variant:"outline"}),w.jsx(bL,{usersInput:m,resetField:d,setSelectedUsers:o,selectedUsers:s})]}),w.jsxs("div",{className:"self-end flex gap-4",children:[w.jsx($t,{variant:"outlined",type:"submit",children:"Submit"}),t==="edit"?w.jsx($t,{variant:"danger",onClick:h,type:"button",children:"Delete event"}):null]})]})}function NL(){return w.jsx("div",{className:"h-full",children:w.jsx(YS,{type:"create"})})}function KS({children:t}){return w.jsx("div",{className:"w-full max-w-screen mt-4 mb-4 overflow-x-scroll p-2",children:w.jsxs("div",{className:"w-2 flex gap-2 ",children:[...t]})})}function Zo({children:t,onClick:e}){return w.jsx("div",{onClick:e,className:"p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer",children:t})}const qS=S.createContext(void 0);function PL(){const t=$i(),e=Ut(),n=S.useContext(Zr),r=S.useContext(ei),i=S.useContext(Bi),[s,o]=S.useState(void 0),[a,l]=S.useState(!1),[u,c]=S.useState([]),[d,f]=S.useState(void 0);function m(){if(i!==void 0){if(t.id===void 0){l("Event not Found");return}if(n){const g=y(n,t.id);g&&(o(g),f(i))}if(r){const g=y(r,t.id);g&&(o(g),_(g.owner))}}}function y(g,p){if(p===void 0)return!1;const C=g.filter(N=>N.id===p?N:null)[0];return C===void 0?!1:C}async function _(g){await Go(ht(Et,`/users/${g}`),p=>{p.exists()&&f(p.val())})}function b(g){const p=lE(ht(Et,`users/${g}`));Go(p,C=>{C.exists()&&c(N=>[...N,{...C.val(),uid:g}])})}function v(){s==null||s.users.map(g=>{b(g)}),console.log(u)}function h(){e(`/event/${t.id}/edit`)}return S.useEffect(()=>{Oi.currentUser!==null&&(m(),s&&u.length==0&&v())},[s,n,r,u]),s===void 0&&!a?w.jsx(al,{size:"big"}):a!==!1?(console.log(a),w.jsx("div",{children:a})):s?w.jsxs("div",{className:"h-full",children:[w.jsxs("div",{className:"flex justify-between items-center mb-6",children:[w.jsx("span",{className:"font-bold text-xl",children:s.name}),w.jsx(Aa,{myUser:d,size:"medium"})]}),w.jsx("div",{className:"flex gap-2",children:u.map((g,p)=>w.jsx(Aa,{myUser:g,size:"medium"},p))}),w.jsxs(KS,{children:[w.jsx(Zo,{onClick:()=>{e(`/event/${t.id}/`)},children:"Summary"}),w.jsx(Zo,{onClick:()=>{e(`/event/${t.id}/payments`)},children:"Payments"}),w.jsx(Zo,{onClick:h,children:"Edit Event"}),w.jsx(w.Fragment,{})]}),w.jsx(qS.Provider,{value:s,children:w.jsx(iS,{})})]}):w.jsx("div",{children:"Error not found"})}function RL(){return w.jsxs("div",{children:[w.jsx($t,{variant:"cta",onClick:()=>{},children:"CTA"}),w.jsx($t,{variant:"outlined",onClick:()=>{},children:"Outlined"}),w.jsx($t,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx($t,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx("div",{className:"bg-themePrimary",children:w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]})}),w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]}),w.jsxs(KS,{children:[w.jsx(Zo,{children:"Pill"}),w.jsx(Zo,{children:"Ale bang"})]})]})}function AL(){const[t,e]=S.useState(_t),n=S.useContext(Zr),r=S.useContext(ei),i=$i(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{className:"h-full",children:w.jsx(YS,{type:"edit",currentEvent:t})})}function OL({currentEvent:t}){const e=S.useContext(io),n=S.useContext(Bi),r=Ut(),{register:i,handleSubmit:s,formState:{errors:o}}=Jm(),a=u=>{if(t.id===u.eventName){const c=n.ownerOfEvents.indexOf(u.eventName);console.log(c);const d={};Object.defineProperty(d,c,{value:null,enumerable:!0}),Ia(ht(Et,`users/${n.uid}/ownerOfEvents/`),d),t.users.forEach(f=>{l(f,t.id)}),lP(ht(Et,`events/${u.eventName}`)).then(()=>{r("/")})}};function l(u,c){if(e===void 0)return;const f=e.filter(y=>y.uid===u)[0].participateOfEvents.indexOf(c),m={};Object.defineProperty(m,f,{value:null,enumerable:!0}),Ia(ht(Et,`users/${u}/participateOfEvents/`),m)}return w.jsxs("form",{onSubmit:s(a),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Delete Event"}),w.jsxs("p",{children:["Type event id to delete event ",w.jsx("span",{className:"text-themeDanger",children:t.id})]}),w.jsxs("label",{children:[w.jsx(Ua,{type:"text",defaultValue:"",register:i("eventName",{required:!0}),placeholder:"Event id",variant:o.eventName?"danger":"outline"}),o.eventName&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsx($t,{variant:"danger",type:"submit",children:"Submit"})]})}function DL(){const[t,e]=S.useState(_t),n=S.useContext(Zr),r=S.useContext(ei),i=$i(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(OL,{currentEvent:t})})}function LL({eventID:t,payment:e}){const n=Ut(),r=()=>{n(`/event/${t}/payment/${e.id}`)};return w.jsxs("div",{onClick:r,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:e.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",e.name]})]},"bang")}function ML({currentEvent:t}){console.log(t),console.log(_t),$i();const e=()=>{if(t.id===_t.id)return w.jsx(al,{size:"small"});if(t.payments)return t.payments.map(n=>(console.log(n),w.jsx(LL,{eventID:t.id,payment:n})))};return S.useEffect(()=>{},[t]),w.jsx("div",{className:"w-full",children:e()})}function FL(){const t=Ut(),e=$i(),n=S.useContext(Zr),r=S.useContext(ei),[i,s]=S.useState(_t),[o,a]=S.useState(!1);function l(){if(e.id===void 0){a("Event not Found");return}if(n){const c=u(n,e.id);c&&s(c)}if(r){const c=u(r,e.id);c&&s(c)}}function u(c,d){if(d===void 0)return!1;const f=c.filter(m=>m.id===d?m:null)[0];return f===void 0?!1:f}return S.useEffect(()=>{l(),console.log(i)},[n,r,i]),w.jsxs("div",{className:"h-auto",children:[w.jsx($t,{variant:"cta",onClick:()=>t(`/event/${e.id}/payment/create`),children:"Add Payment"}),w.jsx(ML,{currentEvent:i}),o||null]})}function hc(t,e){const n=e.filter(r=>r.uid===t);return n.length>0?n[0]:Ts}function UL({currentEvent:t}){const e=S.useContext(io),n=S.useContext(Bi),r=Ut(),[i,s]=S.useState([]),[o,a]=S.useState({uid:t.owner,checked:!0,value:0}),{register:l,handleSubmit:u,watch:c,formState:{errors:d},setError:f,resetField:m,setValue:y}=Jm(),_=c("amount"),b=async k=>{const P=Bh(),j={date:`${GS}-${Xo}-${Jo}`,id:P,amount:k.amount,name:k.name,users:{},whopaid:{uid:n.uid,value:o.value}};i!==void 0&&i.length>0&&i.map(Z=>{const Q={uid:Z.uid,value:Z.value,id:Bh()};Z.checked&&Object.defineProperty(j.users,Z.uid,{value:Q,enumerable:!0})});let M=0;o.checked&&(M+=Number(o.value)),i.forEach(Z=>{Z.checked&&(console.log(Z.uid),M+=Number(Z.value))}),M!=Number(_)&&f("amount",{type:"focus"}),M==Number(_)&&(await Ia(ht(Et,`events/${t.id}/payments/${P}`),j),r("/event/"+t.id))};function v(k){a({uid:o.uid,value:o.value,checked:!o.checked})}function h(k){a({uid:o.uid,value:k.target.value,checked:o.checked})}function g(k){s(P=>[...P.map(M=>M.uid===k.target.name?{uid:M.uid,checked:!M.checked,value:M.value}:M)])}function p(k){console.log("handleValue"),s(P=>[...P.map(M=>M.uid===k.target.name?{uid:M.uid,checked:M.checked,value:k.target.value}:M)])}function C(){console.log("setPaymentUsersOnStartup"),t.users.map(k=>{if(k==="defaultUID")return null;s(P=>P.filter(M=>{if(M.uid===k)return M}).length>0?[...P]:k===n.uid?[...P,{uid:t.owner,checked:!1,value:0}]:[...P,{uid:k,checked:!1,value:0}])})}function N(){a(()=>({uid:n.uid,checked:!0,value:0}))}return S.useEffect(()=>{C(),N()},[t,n]),w.jsxs("form",{onSubmit:u(b),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Add new Payment"}),w.jsxs("label",{children:[w.jsx(Ua,{type:"number",defaultValue:"",register:l("amount",{required:!0}),placeholder:"Amount",variant:d.amount?"danger":"outline"}),d.amount&&w.jsx("span",{className:"text-themeDanger",children:"This field is required and General amount has to be the same as value of sum of all people included"})]}),w.jsxs("label",{children:[w.jsx(Ua,{type:"text",defaultValue:"",register:l("name",{required:!0}),placeholder:"Payment Name",variant:d.name?"danger":"outline"}),d.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{className:"p-2 flex gap-2 justify-between",htmlFor:o.uid,children:[w.jsx("input",{type:"checkbox",name:o.uid,checked:o.checked,onChange:v,className:"w-4",id:o.uid}),`${hc(o.uid,e).displayName}`,w.jsx("input",{type:"number",name:o.uid,value:o.value,onChange:h,step:"any",className:"w-12"})]}),i.map((k,P)=>w.jsxs("label",{className:"p-2 flex gap-2 justify-between",htmlFor:k.uid,children:[w.jsx("input",{type:"checkbox",name:k.uid,onChange:g,checked:k.checked,className:"w-4",id:k.uid}),`${hc(k.uid,e).displayName}`,w.jsx("input",{type:"number",name:k.uid,value:k.value,onChange:p,step:"any",className:"w-12"})]},P)),w.jsx($t,{variant:"cta",type:"submit",children:"Submit"})]})}function jL(){const[t,e]=S.useState(_t),n=S.useContext(Zr),r=S.useContext(ei),i=$i(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(UL,{currentEvent:t})})}function zL(){return w.jsx("div",{children:"UserPage"})}function VL(){Ut();const t=$i(),e=S.useContext(Zr),n=S.useContext(ei),[r,i]=S.useState(_t),[s,o]=S.useState(ou),[a,l]=S.useState(!1);function u(){if(t.id===void 0){l("Event not Found");return}if(e){const f=c(e,t.id);f&&i(f)}if(n){const f=c(n,t.id);f&&i(f)}}function c(f,m){if(m===void 0)return!1;const y=f.filter(_=>_.id===m?_:null)[0];return y===void 0?!1:y}function d(){r.payments.forEach(f=>{f.id===t.paymentId&&o(f)})}return S.useEffect(()=>{u(),r&&d()},[e,n,r,s]),s.id==ou.id?w.jsx(al,{size:"big"}):s!=ou?w.jsxs("div",{className:"h-full",children:[w.jsx("div",{className:"flex justify-between items-center mb-6",children:w.jsx("span",{className:"font-bold text-xl",children:s.name})}),w.jsx("div",{className:"flex gap-2"})]}):w.jsx("div",{children:"Error has occured"})}function $L(){const t=S.useContext(io),e=S.useContext(qS),[n,r]=S.useState(!1),[i,s]=S.useState([]);function o(){e==null||e.payments.map(l=>{Object.values(l.users).forEach(c=>{s(d=>{if(d.filter(m=>m.paymentsIds.includes(c.id)).length>0)return[...d];{const m=d.map(_=>_.uid==c.uid&&_.payTo==l.whopaid.uid?{uid:_.uid,value:Number(_.value)+Number(c.value),payTo:_.payTo,paymentsIds:[..._.paymentsIds,c.id]}:_);let y=!0;for(let _=0;_<d.length;_++)d[_].value!==m[_].value&&(y=!1);return y?[...d,{uid:c.uid,value:Number(c.value),payTo:l.whopaid.uid,paymentsIds:[c.id]}]:[...m]}})})})}function a(){r(!0),i.forEach(l=>{i.forEach(u=>{if(l.uid===u.payTo&&l.payTo===u.uid){const c=Number(l.value)-Number(u.value);if(c>=0){const d={uid:l.uid,value:c,payTo:l.payTo,paymentsIds:[...l.paymentsIds,...u.paymentsIds]},f=i.map(_=>(_.payTo==d.payTo||_.payTo==d.uid)&&(_.uid==d.uid||_.uid==d.payTo)?(console.log(_),d):(console.log(_),_)),m=[];f.forEach((_,b)=>{f.forEach((v,h)=>{(b==h||_.paymentsIds!=v.paymentsIds)&&(m.includes(_)||m.push(_))})});const y=m.filter(_=>_.value!=0);s(y)}}})})}return S.useEffect(()=>{o()},[e]),w.jsxs(w.Fragment,{children:[w.jsx("div",{children:"EventSummary"}),n&&i.map((l,u)=>{const c=hc(l.uid,t),d=hc(l.payTo,t);return w.jsxs("div",{className:"pt-2",children:[c.displayName," musi zapłacić ",`${l.value}`," do ",d.displayName]},u)}),w.jsx($t,{variant:"base",type:"button",onClick:a,children:"Show summary"})]})}const BL=MO([{path:"/",element:w.jsx(rL,{}),children:[{path:"/",element:w.jsx(oL,{})},{path:"/event/:id",element:w.jsx(PL,{}),children:[{path:"/event/:id/payments",element:w.jsx(FL,{})},{path:"/event/:id/",element:w.jsx($L,{})}]},{path:"/event/:id/edit",element:w.jsx(AL,{})},{path:"/event/:id/delete",element:w.jsx(DL,{})},{path:"/event/create",element:w.jsx(NL,{})},{path:"/event/:id/payment/create",element:w.jsx(jL,{})},{path:"/event/:id/payment/:paymentId",element:w.jsx(VL,{})},{path:"/user/:id",element:w.jsx(zL,{})}]},{path:"/login",element:w.jsx(iL,{})},{path:"/testing",element:w.jsx(RL,{})}]);uf.createRoot(document.getElementById("root")).render(w.jsx(Zt.StrictMode,{children:w.jsx(BO,{router:BL})}));Ix();Ax();
