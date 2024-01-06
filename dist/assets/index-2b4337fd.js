function JS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v_={exports:{}},mc={},y_={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),eC=Symbol.for("react.fragment"),tC=Symbol.for("react.strict_mode"),nC=Symbol.for("react.profiler"),rC=Symbol.for("react.provider"),iC=Symbol.for("react.context"),sC=Symbol.for("react.forward_ref"),oC=Symbol.for("react.suspense"),aC=Symbol.for("react.memo"),lC=Symbol.for("react.lazy"),rg=Symbol.iterator;function uC(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w_=Object.assign,E_={};function qs(t,e,n){this.props=t,this.context=e,this.refs=E_,this.updater=n||__}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S_(){}S_.prototype=qs.prototype;function $h(t,e,n){this.props=t,this.context=e,this.refs=E_,this.updater=n||__}var Hh=$h.prototype=new S_;Hh.constructor=$h;w_(Hh,qs.prototype);Hh.isPureReactComponent=!0;var ig=Array.isArray,C_=Object.prototype.hasOwnProperty,Gh={current:null},k_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)C_.call(e,r)&&!k_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:za,type:t,key:s,ref:o,props:i,_owner:Gh.current}}function cC(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function dC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sg=/\/+/g;function cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dC(""+t.key):e.toString(36)}function Gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case za:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cd(o,0):r,ig(i)?(n="",t!=null&&(n=t.replace(sg,"$&/")+"/"),Gl(i,e,n,"",function(u){return u})):i!=null&&(Yh(i)&&(i=cC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cd(s,a);o+=Gl(s,e,n,l,i)}else if(l=uC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cd(s,a++),o+=Gl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],i=0;return Gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Yl={transition:null},hC={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Gh};de.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=qs;de.Fragment=eC;de.Profiler=nC;de.PureComponent=$h;de.StrictMode=tC;de.Suspense=oC;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hC;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=w_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)C_.call(e,l)&&!k_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:za,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:iC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rC,_context:t},t.Consumer=t};de.createElement=x_;de.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:sC,render:t}};de.isValidElement=Yh;de.lazy=function(t){return{$$typeof:lC,_payload:{_status:-1,_result:t},_init:fC}};de.memo=function(t,e){return{$$typeof:aC,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(t,e){return Nt.current.useCallback(t,e)};de.useContext=function(t){return Nt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Nt.current.useEffect(t,e)};de.useId=function(){return Nt.current.useId()};de.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Nt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};de.useRef=function(t){return Nt.current.useRef(t)};de.useState=function(t){return Nt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Nt.current.useTransition()};de.version="18.2.0";y_.exports=de;var S=y_.exports;const Zt=g_(S),pC=JS({__proto__:null,default:Zt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mC=S,gC=Symbol.for("react.element"),vC=Symbol.for("react.fragment"),yC=Object.prototype.hasOwnProperty,_C=mC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wC={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yC.call(e,r)&&!wC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gC,type:t,key:s,ref:o,props:i,_owner:_C.current}}mc.Fragment=vC;mc.jsx=b_;mc.jsxs=b_;v_.exports=mc;var E=v_.exports,cf={},I_={exports:{}},Ht={},T_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,Y){var q=M.length;M.push(Y);e:for(;0<q;){var pe=q-1>>>1,ve=M[pe];if(0<i(ve,Y))M[pe]=Y,M[q]=ve,q=pe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Y=M[0],q=M.pop();if(q!==Y){M[0]=q;e:for(var pe=0,ve=M.length,Sn=ve>>>1;pe<Sn;){var Kt=2*(pe+1)-1,ri=M[Kt],jt=Kt+1,ke=M[jt];if(0>i(ri,q))jt<ve&&0>i(ke,ri)?(M[pe]=ke,M[jt]=q,pe=jt):(M[pe]=ri,M[Kt]=q,pe=Kt);else if(jt<ve&&0>i(ke,q))M[pe]=ke,M[jt]=q,pe=jt;else break e}}return Y}function i(M,Y){var q=M.sortIndex-Y.sortIndex;return q!==0?q:M.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=M)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(M){if(_=!1,g(M),!v)if(n(l)!==null)v=!0,He(C);else{var Y=n(u);Y!==null&&Qe(p,Y.startTime-M)}}function C(M,Y){v=!1,_&&(_=!1,y(A),A=-1),m=!0;var q=f;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||M&&!ie());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,f=d.priorityLevel;var ve=pe(d.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),g(Y)}else r(l);d=n(l)}if(d!==null)var Sn=!0;else{var Kt=n(u);Kt!==null&&Qe(p,Kt.startTime-Y),Sn=!1}return Sn}finally{d=null,f=q,m=!1}}var N=!1,T=null,A=-1,V=5,W=-1;function ie(){return!(t.unstable_now()-W<V)}function J(){if(T!==null){var M=t.unstable_now();W=M;var Y=!0;try{Y=T(!0,M)}finally{Y?Z():(N=!1,T=null)}}else N=!1}var Z;if(typeof h=="function")Z=function(){h(J)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=J,Z=function(){ae.postMessage(null)}}else Z=function(){x(J,0)};function He(M){T=M,N||(N=!0,Z())}function Qe(M,Y){A=x(function(){M(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,He(C))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return M()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var q=f;f=M;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(M,Y,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,M){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=q+ve,M={id:c++,callback:Y,priorityLevel:M,startTime:q,expirationTime:ve,sortIndex:-1},q>pe?(M.sortIndex=q,e(u,M),n(l)===null&&M===n(u)&&(_?(y(A),A=-1):_=!0,Qe(p,q-pe))):(M.sortIndex=ve,e(l,M),v||m||(v=!0,He(C))),M},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(M){var Y=f;return function(){var q=f;f=Y;try{return M.apply(this,arguments)}finally{f=q}}}})(N_);T_.exports=N_;var EC=T_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=S,$t=EC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,na={};function zi(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(na[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,SC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},ag={};function CC(t){return df.call(ag,t)?!0:df.call(og,t)?!1:SC.test(t)?ag[t]=!0:(og[t]=!0,!1)}function kC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xC(t,e,n,r){if(e===null||typeof e>"u"||kC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kh=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kh,qh);mt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kh,qh);mt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kh,qh);mt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qh(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xC(e,n,i,r)&&(n=null),r||i===null?CC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),lg=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,dd;function No(t){if(dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dd=e&&e[1]||""}return`
`+dd+t}var fd=!1;function hd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function bC(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case Ji:return"Portal";case ff:return"Profiler";case Xh:return"StrictMode";case hf:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O_:return(t.displayName||"Context")+".Consumer";case A_:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function IC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TC(t){var e=L_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=TC(t))}function M_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=L_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F_(t,e){e=e.checked,e!=null&&Qh(t,"checked",e,!1)}function vf(t,e){F_(t,e);var n=Br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&yf(t,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yf(t,e,n){(e!=="number"||fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Po(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Br(n)}}function U_(t,e){var n=Br(e.value),r=Br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NC=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){NC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function V_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function W_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ef(t,e){if(e){if(PC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kf=null,_s=null,ws=null;function hg(t){if(t=Ba(t)){if(typeof kf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=wc(e),kf(t.stateNode,t.type,e))}}function B_(t){_s?ws?ws.push(t):ws=[t]:_s=t}function $_(){if(_s){var t=_s,e=ws;if(ws=_s=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function H_(t,e){return t(e)}function G_(){}var pd=!1;function Y_(t,e,n){if(pd)return t(e,n);pd=!0;try{return H_(t,e,n)}finally{pd=!1,(_s!==null||ws!==null)&&(G_(),$_())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var r=wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var xf=!1;if(Zn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){xf=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{xf=!1}function RC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Lo=!1,hu=null,pu=!1,bf=null,AC={onError:function(t){Lo=!0,hu=t}};function OC(t,e,n,r,i,s,o,a,l){Lo=!1,hu=null,RC.apply(AC,arguments)}function DC(t,e,n,r,i,s,o,a,l){if(OC.apply(this,arguments),Lo){if(Lo){var u=hu;Lo=!1,hu=null}else throw Error(O(198));pu||(pu=!0,bf=u)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pg(t){if(Vi(t)!==t)throw Error(O(188))}function LC(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pg(i),t;if(s===r)return pg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function q_(t){return t=LC(t),t!==null?Q_(t):null}function Q_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q_(t);if(e!==null)return e;t=t.sibling}return null}var X_=$t.unstable_scheduleCallback,mg=$t.unstable_cancelCallback,MC=$t.unstable_shouldYield,FC=$t.unstable_requestPaint,qe=$t.unstable_now,UC=$t.unstable_getCurrentPriorityLevel,tp=$t.unstable_ImmediatePriority,J_=$t.unstable_UserBlockingPriority,mu=$t.unstable_NormalPriority,jC=$t.unstable_LowPriority,Z_=$t.unstable_IdlePriority,gc=null,Nn=null;function zC(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:BC,VC=Math.log,WC=Math.LN2;function BC(t){return t>>>=0,t===0?32:31-(VC(t)/WC|0)|0}var El=64,Sl=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ro(a):(s&=o,s!==0&&(r=Ro(s)))}else o=n&~i,o!==0?r=Ro(o):s!==0&&(r=Ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function $C(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$C(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function If(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function GC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,rp,r0,i0,s0,Tf=!1,Cl=[],Pr=null,Rr=null,Ar=null,sa=new Map,oa=new Map,wr=[],YC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gg(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function po(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ba(e),e!==null&&rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KC(t,e,n,r,i){switch(e){case"focusin":return Pr=po(Pr,t,e,n,r,i),!0;case"dragenter":return Rr=po(Rr,t,e,n,r,i),!0;case"mouseover":return Ar=po(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return sa.set(s,po(sa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oa.set(s,po(oa.get(s)||null,t,e,n,r,i)),!0}return!1}function o0(t){var e=ci(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=K_(n),e!==null){t.blockedOn=e,s0(t.priority,function(){r0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return e=Ba(n),e!==null&&rp(e),t.blockedOn=n,!1;e.shift()}return!0}function vg(t,e,n){Kl(t)&&n.delete(e)}function qC(){Tf=!1,Pr!==null&&Kl(Pr)&&(Pr=null),Rr!==null&&Kl(Rr)&&(Rr=null),Ar!==null&&Kl(Ar)&&(Ar=null),sa.forEach(vg),oa.forEach(vg)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,qC)))}function aa(t){function e(i){return mo(i,t)}if(0<Cl.length){mo(Cl[0],t);for(var n=1;n<Cl.length;n++){var r=Cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&mo(Pr,t),Rr!==null&&mo(Rr,t),Ar!==null&&mo(Ar,t),sa.forEach(e),oa.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&wr.shift()}var Es=lr.ReactCurrentBatchConfig,vu=!0;function QC(t,e,n,r){var i=ye,s=Es.transition;Es.transition=null;try{ye=1,ip(t,e,n,r)}finally{ye=i,Es.transition=s}}function XC(t,e,n,r){var i=ye,s=Es.transition;Es.transition=null;try{ye=4,ip(t,e,n,r)}finally{ye=i,Es.transition=s}}function ip(t,e,n,r){if(vu){var i=Nf(t,e,n,r);if(i===null)xd(t,e,r,yu,n),gg(t,r);else if(KC(i,t,e,n,r))r.stopPropagation();else if(gg(t,r),e&4&&-1<YC.indexOf(t)){for(;i!==null;){var s=Ba(i);if(s!==null&&n0(s),s=Nf(t,e,n,r),s===null&&xd(t,e,r,yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xd(t,e,r,null,n)}}var yu=null;function Nf(t,e,n,r){if(yu=null,t=ep(r),t=ci(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UC()){case tp:return 1;case J_:return 4;case mu:case jC:return 16;case Z_:return 536870912;default:return 16}default:return 16}}var xr=null,sp=null,ql=null;function l0(){if(ql)return ql;var t,e=sp,n=e.length,r,i="value"in xr?xr.value:xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ql=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function yg(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:yg,this.isPropagationStopped=yg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=Gt(Qs),Wa=ze({},Qs,{view:0,detail:0}),JC=Gt(Wa),gd,vd,go,vc=ze({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(gd=t.screenX-go.screenX,vd=t.screenY-go.screenY):vd=gd=0,go=t),gd)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),_g=Gt(vc),ZC=ze({},vc,{dataTransfer:0}),ek=Gt(ZC),tk=ze({},Wa,{relatedTarget:0}),yd=Gt(tk),nk=ze({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),rk=Gt(nk),ik=ze({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sk=Gt(ik),ok=ze({},Qs,{data:0}),wg=Gt(ok),ak={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ck(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uk[t])?!!e[t]:!1}function ap(){return ck}var dk=ze({},Wa,{key:function(t){if(t.key){var e=ak[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fk=Gt(dk),hk=ze({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=Gt(hk),pk=ze({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),mk=Gt(pk),gk=ze({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vk=Gt(gk),yk=ze({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_k=Gt(yk),wk=[9,13,27,32],lp=Zn&&"CompositionEvent"in window,Mo=null;Zn&&"documentMode"in document&&(Mo=document.documentMode);var Ek=Zn&&"TextEvent"in window&&!Mo,u0=Zn&&(!lp||Mo&&8<Mo&&11>=Mo),Sg=String.fromCharCode(32),Cg=!1;function c0(t,e){switch(t){case"keyup":return wk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Sk(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(Cg=!0,Sg);case"textInput":return t=e.data,t===Sg&&Cg?null:t;default:return null}}function Ck(t,e){if(es)return t==="compositionend"||!lp&&c0(t,e)?(t=l0(),ql=sp=xr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u0&&e.locale!=="ko"?null:e.data;default:return null}}var kk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kk[t.type]:e==="textarea"}function f0(t,e,n,r){B_(r),e=_u(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fo=null,la=null;function xk(t){C0(t,0)}function yc(t){var e=rs(t);if(M_(e))return t}function bk(t,e){if(t==="change")return e}var h0=!1;if(Zn){var _d;if(Zn){var wd="oninput"in document;if(!wd){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),wd=typeof xg.oninput=="function"}_d=wd}else _d=!1;h0=_d&&(!document.documentMode||9<document.documentMode)}function bg(){Fo&&(Fo.detachEvent("onpropertychange",p0),la=Fo=null)}function p0(t){if(t.propertyName==="value"&&yc(la)){var e=[];f0(e,la,t,ep(t)),Y_(xk,e)}}function Ik(t,e,n){t==="focusin"?(bg(),Fo=e,la=n,Fo.attachEvent("onpropertychange",p0)):t==="focusout"&&bg()}function Tk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(la)}function Nk(t,e){if(t==="click")return yc(e)}function Pk(t,e){if(t==="input"||t==="change")return yc(e)}function Rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:Rk;function ua(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!df.call(e,i)||!En(t[i],e[i]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tg(t,e){var n=Ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fu(t.document)}return e}function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ak(t){var e=g0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(r!==null&&up(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tg(n,s);var o=Tg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ok=Zn&&"documentMode"in document&&11>=document.documentMode,ts=null,Pf=null,Uo=null,Rf=!1;function Ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||ts==null||ts!==fu(r)||(r=ts,"selectionStart"in r&&up(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&ua(Uo,r)||(Uo=r,r=_u(Pf,"onSelect"),0<r.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Ed={},v0={};Zn&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function _c(t){if(Ed[t])return Ed[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return Ed[t]=e[n];return t}var y0=_c("animationend"),_0=_c("animationiteration"),w0=_c("animationstart"),E0=_c("transitionend"),S0=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){S0.set(t,e),zi(e,[t])}for(var Sd=0;Sd<Pg.length;Sd++){var Cd=Pg[Sd],Dk=Cd.toLowerCase(),Lk=Cd[0].toUpperCase()+Cd.slice(1);Xr(Dk,"on"+Lk)}Xr(y0,"onAnimationEnd");Xr(_0,"onAnimationIteration");Xr(w0,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(E0,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DC(r,e,void 0,t),t.currentTarget=null}function C0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rg(i,a,u),s=l}}}if(pu)throw t=bf,pu=!1,bf=null,t}function Ne(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var r=t+"__bubble";n.has(r)||(k0(e,t,2,!1),n.add(r))}function kd(t,e,n){var r=0;e&&(r|=4),k0(n,t,r,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[bl]){t[bl]=!0,R_.forEach(function(n){n!=="selectionchange"&&(Mk.has(n)||kd(n,!1,t),kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bl]||(e[bl]=!0,kd("selectionchange",!1,e))}}function k0(t,e,n,r){switch(a0(e)){case 1:var i=QC;break;case 4:i=XC;break;default:i=ip}n=i.bind(null,e,n,t),i=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ci(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Y_(function(){var u=s,c=ep(n),d=[];e:{var f=S0.get(t);if(f!==void 0){var m=op,v=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":m=fk;break;case"focusin":v="focus",m=yd;break;case"focusout":v="blur",m=yd;break;case"beforeblur":case"afterblur":m=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ek;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=mk;break;case y0:case _0:case w0:m=rk;break;case E0:m=vk;break;case"scroll":m=JC;break;case"wheel":m=_k;break;case"copy":case"cut":case"paste":m=sk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Eg}var _=(e&4)!==0,x=!_&&t==="scroll",y=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,y!==null&&(p=ia(h,y),p!=null&&_.push(da(h,p,g)))),x)break;h=h.return}0<_.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Cf&&(v=n.relatedTarget||n.fromElement)&&(ci(v)||v[er]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?ci(v):null,v!==null&&(x=Vi(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=_g,p="onMouseLeave",y="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Eg,p="onPointerLeave",y="onPointerEnter",h="pointer"),x=m==null?f:rs(m),g=v==null?f:rs(v),f=new _(p,h+"leave",m,n,c),f.target=x,f.relatedTarget=g,p=null,ci(c)===u&&(_=new _(y,h+"enter",v,n,c),_.target=g,_.relatedTarget=x,p=_),x=p,m&&v)t:{for(_=m,y=v,h=0,g=_;g;g=Ki(g))h++;for(g=0,p=y;p;p=Ki(p))g++;for(;0<h-g;)_=Ki(_),h--;for(;0<g-h;)y=Ki(y),g--;for(;h--;){if(_===y||y!==null&&_===y.alternate)break t;_=Ki(_),y=Ki(y)}_=null}else _=null;m!==null&&Ag(d,f,m,_,!1),v!==null&&x!==null&&Ag(d,x,v,_,!0)}}e:{if(f=u?rs(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=bk;else if(kg(f))if(h0)C=Pk;else{C=Tk;var N=Ik}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Nk);if(C&&(C=C(t,u))){f0(d,C,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&yf(f,"number",f.value)}switch(N=u?rs(u):window,t){case"focusin":(kg(N)||N.contentEditable==="true")&&(ts=N,Pf=u,Uo=null);break;case"focusout":Uo=Pf=ts=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,Ng(d,n,c);break;case"selectionchange":if(Ok)break;case"keydown":case"keyup":Ng(d,n,c)}var T;if(lp)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else es?c0(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(u0&&n.locale!=="ko"&&(es||A!=="onCompositionStart"?A==="onCompositionEnd"&&es&&(T=l0()):(xr=c,sp="value"in xr?xr.value:xr.textContent,es=!0)),N=_u(u,A),0<N.length&&(A=new wg(A,t,null,n,c),d.push({event:A,listeners:N}),T?A.data=T:(T=d0(n),T!==null&&(A.data=T)))),(T=Ek?Sk(t,n):Ck(t,n))&&(u=_u(u,"onBeforeInput"),0<u.length&&(c=new wg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}C0(d,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ia(t,n),s!=null&&r.unshift(da(t,s,i)),s=ia(t,e),s!=null&&r.push(da(t,s,i))),t=t.return}return r}function Ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ia(n,s),l!=null&&o.unshift(da(n,l,a))):i||(l=ia(n,s),l!=null&&o.push(da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fk=/\r\n?/g,Uk=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(Fk,`
`).replace(Uk,"")}function Il(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(O(425))}function wu(){}var Af=null,Of=null;function Df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,jk=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,zk=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(t){return Dg.resolve(null).then(t).catch(Vk)}:Lf;function Vk(t){setTimeout(function(){throw t})}function bd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);aa(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),xn="__reactFiber$"+Xs,fa="__reactProps$"+Xs,er="__reactContainer$"+Xs,Mf="__reactEvents$"+Xs,Wk="__reactListeners$"+Xs,Bk="__reactHandles$"+Xs;function ci(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lg(t);t!==null;){if(n=t[xn])return n;t=Lg(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[xn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function wc(t){return t[fa]||null}var Ff=[],is=-1;function Jr(t){return{current:t}}function Re(t){0>is||(t.current=Ff[is],Ff[is]=null,is--)}function Ie(t,e){is++,Ff[is]=t.current,t.current=e}var $r={},St=Jr($r),Lt=Jr(!1),ki=$r;function Os(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function Eu(){Re(Lt),Re(St)}function Mg(t,e,n){if(St.current!==$r)throw Error(O(168));Ie(St,e),Ie(Lt,n)}function x0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,IC(t)||"Unknown",i));return ze({},n,r)}function Su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,ki=St.current,Ie(St,t),Ie(Lt,Lt.current),!0}function Fg(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=x0(t,e,ki),r.__reactInternalMemoizedMergedChildContext=t,Re(Lt),Re(St),Ie(St,t)):Re(Lt),Ie(Lt,n)}var $n=null,Ec=!1,Id=!1;function b0(t){$n===null?$n=[t]:$n.push(t)}function $k(t){Ec=!0,b0(t)}function Zr(){if(!Id&&$n!==null){Id=!0;var t=0,e=ye;try{var n=$n;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Ec=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),X_(tp,Zr),i}finally{ye=e,Id=!1}}return null}var ss=[],os=0,Cu=null,ku=0,Xt=[],Jt=0,xi=null,Hn=1,Gn="";function oi(t,e){ss[os++]=ku,ss[os++]=Cu,Cu=t,ku=e}function I0(t,e,n){Xt[Jt++]=Hn,Xt[Jt++]=Gn,Xt[Jt++]=xi,xi=t;var r=Hn;t=Gn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-yn(e)+i|n<<i|r,Gn=s+t}else Hn=1<<s|n<<i|r,Gn=t}function cp(t){t.return!==null&&(oi(t,1),I0(t,1,0))}function dp(t){for(;t===Cu;)Cu=ss[--os],ss[os]=null,ku=ss[--os],ss[os]=null;for(;t===xi;)xi=Xt[--Jt],Xt[Jt]=null,Gn=Xt[--Jt],Xt[Jt]=null,Hn=Xt[--Jt],Xt[Jt]=null}var Bt=null,Wt=null,Le=!1,hn=null;function T0(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Wt=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xi!==null?{id:Hn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Wt=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jf(t){if(Le){var e=Wt;if(e){var n=e;if(!Ug(t,e)){if(Uf(t))throw Error(O(418));e=Or(n.nextSibling);var r=Bt;e&&Ug(t,e)?T0(r,n):(t.flags=t.flags&-4097|2,Le=!1,Bt=t)}}else{if(Uf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Le=!1,Bt=t}}}function jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Tl(t){if(t!==Bt)return!1;if(!Le)return jg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Df(t.type,t.memoizedProps)),e&&(e=Wt)){if(Uf(t))throw N0(),Error(O(418));for(;e;)T0(t,e),e=Or(e.nextSibling)}if(jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Bt?Or(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=Wt;t;)t=Or(t.nextSibling)}function Ds(){Wt=Bt=null,Le=!1}function fp(t){hn===null?hn=[t]:hn.push(t)}var Hk=lr.ReactCurrentBatchConfig;function cn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xu=Jr(null),bu=null,as=null,hp=null;function pp(){hp=as=bu=null}function mp(t){var e=xu.current;Re(xu),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){bu=t,hp=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(bu===null)throw Error(O(308));as=t,bu.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var di=null;function gp(t){di===null?di=[t]:di.push(t)}function P0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gp(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,gp(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,np(t,n)}}function zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Iu(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=ze({},d,f);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ii|=o,t.lanes=o,t.memoizedState=d}}function Vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var A0=new P_.Component().refs;function Vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Mr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(_n(e,t,i,r),Xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Mr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(_n(e,t,i,r),Xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Mr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dr(t,i,r),e!==null&&(_n(e,t,r,n),Xl(e,t,r))}};function Wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,r)||!ua(i,s):!0}function O0(t,e,n){var r=!1,i=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Mt(e)?ki:St.current,r=e.contextTypes,s=(r=r!=null)?Os(t,i):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=A0,vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Mt(e)?ki:St.current,i.context=Os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===A0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Nl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function D0(t){function e(y,h){if(t){var g=y.deletions;g===null?(y.deletions=[h],y.flags|=16):g.push(h)}}function n(y,h){if(!t)return null;for(;h!==null;)e(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=Fr(y,h),y.index=0,y.sibling=null,y}function s(y,h,g){return y.index=g,t?(g=y.alternate,g!==null?(g=g.index,g<h?(y.flags|=2,h):g):(y.flags|=2,h)):(y.flags|=1048576,h)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,h,g,p){return h===null||h.tag!==6?(h=Dd(g,y.mode,p),h.return=y,h):(h=i(h,g),h.return=y,h)}function l(y,h,g,p){var C=g.type;return C===Zi?c(y,h,g.props.children,p,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yr&&$g(C)===h.type)?(p=i(h,g.props),p.ref=vo(y,h,g),p.return=y,p):(p=ru(g.type,g.key,g.props,null,y.mode,p),p.ref=vo(y,h,g),p.return=y,p)}function u(y,h,g,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Ld(g,y.mode,p),h.return=y,h):(h=i(h,g.children||[]),h.return=y,h)}function c(y,h,g,p,C){return h===null||h.tag!==7?(h=Ei(g,y.mode,p,C),h.return=y,h):(h=i(h,g),h.return=y,h)}function d(y,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Dd(""+h,y.mode,g),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yl:return g=ru(h.type,h.key,h.props,null,y.mode,g),g.ref=vo(y,null,h),g.return=y,g;case Ji:return h=Ld(h,y.mode,g),h.return=y,h;case yr:var p=h._init;return d(y,p(h._payload),g)}if(Po(h)||fo(h))return h=Ei(h,y.mode,g,null),h.return=y,h;Nl(y,h)}return null}function f(y,h,g,p){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(y,h,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yl:return g.key===C?l(y,h,g,p):null;case Ji:return g.key===C?u(y,h,g,p):null;case yr:return C=g._init,f(y,h,C(g._payload),p)}if(Po(g)||fo(g))return C!==null?null:c(y,h,g,p,null);Nl(y,g)}return null}function m(y,h,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return y=y.get(g)||null,a(h,y,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yl:return y=y.get(p.key===null?g:p.key)||null,l(h,y,p,C);case Ji:return y=y.get(p.key===null?g:p.key)||null,u(h,y,p,C);case yr:var N=p._init;return m(y,h,g,N(p._payload),C)}if(Po(p)||fo(p))return y=y.get(g)||null,c(h,y,p,C,null);Nl(h,p)}return null}function v(y,h,g,p){for(var C=null,N=null,T=h,A=h=0,V=null;T!==null&&A<g.length;A++){T.index>A?(V=T,T=null):V=T.sibling;var W=f(y,T,g[A],p);if(W===null){T===null&&(T=V);break}t&&T&&W.alternate===null&&e(y,T),h=s(W,h,A),N===null?C=W:N.sibling=W,N=W,T=V}if(A===g.length)return n(y,T),Le&&oi(y,A),C;if(T===null){for(;A<g.length;A++)T=d(y,g[A],p),T!==null&&(h=s(T,h,A),N===null?C=T:N.sibling=T,N=T);return Le&&oi(y,A),C}for(T=r(y,T);A<g.length;A++)V=m(T,y,A,g[A],p),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?A:V.key),h=s(V,h,A),N===null?C=V:N.sibling=V,N=V);return t&&T.forEach(function(ie){return e(y,ie)}),Le&&oi(y,A),C}function _(y,h,g,p){var C=fo(g);if(typeof C!="function")throw Error(O(150));if(g=C.call(g),g==null)throw Error(O(151));for(var N=C=null,T=h,A=h=0,V=null,W=g.next();T!==null&&!W.done;A++,W=g.next()){T.index>A?(V=T,T=null):V=T.sibling;var ie=f(y,T,W.value,p);if(ie===null){T===null&&(T=V);break}t&&T&&ie.alternate===null&&e(y,T),h=s(ie,h,A),N===null?C=ie:N.sibling=ie,N=ie,T=V}if(W.done)return n(y,T),Le&&oi(y,A),C;if(T===null){for(;!W.done;A++,W=g.next())W=d(y,W.value,p),W!==null&&(h=s(W,h,A),N===null?C=W:N.sibling=W,N=W);return Le&&oi(y,A),C}for(T=r(y,T);!W.done;A++,W=g.next())W=m(T,y,A,W.value,p),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?A:W.key),h=s(W,h,A),N===null?C=W:N.sibling=W,N=W);return t&&T.forEach(function(J){return e(y,J)}),Le&&oi(y,A),C}function x(y,h,g,p){if(typeof g=="object"&&g!==null&&g.type===Zi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case yl:e:{for(var C=g.key,N=h;N!==null;){if(N.key===C){if(C=g.type,C===Zi){if(N.tag===7){n(y,N.sibling),h=i(N,g.props.children),h.return=y,y=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yr&&$g(C)===N.type){n(y,N.sibling),h=i(N,g.props),h.ref=vo(y,N,g),h.return=y,y=h;break e}n(y,N);break}else e(y,N);N=N.sibling}g.type===Zi?(h=Ei(g.props.children,y.mode,p,g.key),h.return=y,y=h):(p=ru(g.type,g.key,g.props,null,y.mode,p),p.ref=vo(y,h,g),p.return=y,y=p)}return o(y);case Ji:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(y,h.sibling),h=i(h,g.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else e(y,h);h=h.sibling}h=Ld(g,y.mode,p),h.return=y,y=h}return o(y);case yr:return N=g._init,x(y,h,N(g._payload),p)}if(Po(g))return v(y,h,g,p);if(fo(g))return _(y,h,g,p);Nl(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,g),h.return=y,y=h):(n(y,h),h=Dd(g,y.mode,p),h.return=y,y=h),o(y)):n(y,h)}return x}var Ls=D0(!0),L0=D0(!1),$a={},Pn=Jr($a),ha=Jr($a),pa=Jr($a);function fi(t){if(t===$a)throw Error(O(174));return t}function yp(t,e){switch(Ie(pa,e),Ie(ha,t),Ie(Pn,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wf(e,t)}Re(Pn),Ie(Pn,e)}function Ms(){Re(Pn),Re(ha),Re(pa)}function M0(t){fi(pa.current);var e=fi(Pn.current),n=wf(e,t.type);e!==n&&(Ie(ha,t),Ie(Pn,n))}function _p(t){ha.current===t&&(Re(Pn),Re(ha))}var Ue=Jr(0);function Tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Td=[];function wp(){for(var t=0;t<Td.length;t++)Td[t]._workInProgressVersionPrimary=null;Td.length=0}var Jl=lr.ReactCurrentDispatcher,Nd=lr.ReactCurrentBatchConfig,bi=0,je=null,et=null,at=null,Nu=!1,jo=!1,ma=0,Gk=0;function vt(){throw Error(O(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Sp(t,e,n,r,i,s){if(bi=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?Qk:Xk,t=n(r,i),jo){s=0;do{if(jo=!1,ma=0,25<=s)throw Error(O(301));s+=1,at=et=null,e.updateQueue=null,Jl.current=Jk,t=n(r,i)}while(jo)}if(Jl.current=Pu,e=et!==null&&et.next!==null,bi=0,at=et=je=null,Nu=!1,e)throw Error(O(300));return t}function Cp(){var t=ma!==0;return ma=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?je.memoizedState=at=t:at=at.next=t,at}function on(){if(et===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?je.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(O(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?je.memoizedState=at=t:at=at.next=t}return at}function ga(t,e){return typeof e=="function"?e(t):e}function Pd(t){var e=on(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((bi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,je.lanes|=c,Ii|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,En(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rd(t){var e=on(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F0(){}function U0(t,e){var n=je,r=on(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,kp(V0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,va(9,z0.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(O(349));bi&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z0(t,e,n,r){e.value=n,e.getSnapshot=r,W0(e)&&B0(t)}function V0(t,e,n){return n(function(){W0(e)&&B0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function B0(t){var e=tr(t,1);e!==null&&_n(e,t,1,-1)}function Hg(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=qk.bind(null,je,t),[e.memoizedState,t]}function va(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $0(){return on().memoizedState}function Zl(t,e,n,r){var i=kn();je.flags|=t,i.memoizedState=va(1|e,n,void 0,r===void 0?null:r)}function Cc(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Ep(r,o.deps)){i.memoizedState=va(e,n,s,r);return}}je.flags|=t,i.memoizedState=va(1|e,n,s,r)}function Gg(t,e){return Zl(8390656,8,t,e)}function kp(t,e){return Cc(2048,8,t,e)}function H0(t,e){return Cc(4,2,t,e)}function G0(t,e){return Cc(4,4,t,e)}function Y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,Y0.bind(null,e,t),n)}function xp(){}function q0(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Q0(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return bi&21?(En(n,e)||(n=e0(),je.lanes|=n,Ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function Yk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Nd.transition;Nd.transition={};try{t(!1),e()}finally{ye=n,Nd.transition=r}}function J0(){return on().memoizedState}function Kk(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))ew(e,n);else if(n=P0(t,e,n,r),n!==null){var i=It();_n(n,t,r,i),tw(n,e,r)}}function qk(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))ew(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,o)){var l=e.interleaved;l===null?(i.next=i,gp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=P0(t,e,i,r),n!==null&&(i=It(),_n(n,t,r,i),tw(n,e,r))}}function Z0(t){var e=t.alternate;return t===je||e!==null&&e===je}function ew(t,e){jo=Nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,np(t,n)}}var Pu={readContext:sn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Qk={readContext:sn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,Y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Kk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Hg,useDebugValue:xp,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Hg(!1),e=t[0];return t=Yk.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=kn();if(Le){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),ut===null)throw Error(O(349));bi&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gg(V0.bind(null,r,s,t),[t]),r.flags|=2048,va(9,z0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=ut.identifierPrefix;if(Le){var n=Gn,r=Hn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xk={readContext:sn,useCallback:q0,useContext:sn,useEffect:kp,useImperativeHandle:K0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:Q0,useReducer:Pd,useRef:$0,useState:function(){return Pd(ga)},useDebugValue:xp,useDeferredValue:function(t){var e=on();return X0(e,et.memoizedState,t)},useTransition:function(){var t=Pd(ga)[0],e=on().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:J0,unstable_isNewReconciler:!1},Jk={readContext:sn,useCallback:q0,useContext:sn,useEffect:kp,useImperativeHandle:K0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:Q0,useReducer:Rd,useRef:$0,useState:function(){return Rd(ga)},useDebugValue:xp,useDeferredValue:function(t){var e=on();return et===null?e.memoizedState=t:X0(e,et.memoizedState,t)},useTransition:function(){var t=Rd(ga)[0],e=on().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:J0,unstable_isNewReconciler:!1};function Fs(t,e){try{var n="",r=e;do n+=bC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ad(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zk=typeof WeakMap=="function"?WeakMap:Map;function nw(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Au||(Au=!0,Zf=r),Bf(t,e)},n}function rw(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Zk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hx.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var ex=lr.ReactCurrentOwner,Ot=!1;function kt(t,e,n,r){e.child=t===null?L0(e,null,n,r):Ls(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=Sp(t,e,n,r,s,i),n=Cp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Le&&n&&cp(e),e.flags|=1,kt(t,e,r,i),e.child)}function Xg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iw(t,e,s,r,i)):(t=ru(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function iw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ua(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,nr(t,e,i)}return $f(t,e,n,r,i)}function sw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(us,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(us,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(us,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(us,zt),zt|=r;return kt(t,e,i,n),e.child}function ow(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $f(t,e,n,r,i){var s=Mt(n)?ki:St.current;return s=Os(e,s),Ss(e,i),n=Sp(t,e,n,r,s,i),r=Cp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Le&&r&&cp(e),e.flags|=1,kt(t,e,n,i),e.child)}function Jg(t,e,n,r,i){if(Mt(n)){var s=!0;Su(e)}else s=!1;if(Ss(e,i),e.stateNode===null)eu(t,e),O0(e,n,r),Wf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Mt(n)?ki:St.current,u=Os(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bg(e,o,r,u),_r=!1;var f=e.memoizedState;o.state=f,Iu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Lt.current||_r?(typeof c=="function"&&(Vf(e,n,c,r),l=e.memoizedState),(a=_r||Wg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,R0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:cn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=Mt(n)?ki:St.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Bg(e,o,r,l),_r=!1,f=e.memoizedState,o.state=f,Iu(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||Lt.current||_r?(typeof m=="function"&&(Vf(e,n,m,r),v=e.memoizedState),(u=_r||Wg(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Hf(t,e,n,r,s,i)}function Hf(t,e,n,r,i,s){ow(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fg(e,n,!1),nr(t,e,s);r=e.stateNode,ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ls(e,t.child,null,s),e.child=Ls(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Fg(e,n,!0),e.child}function aw(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),yp(t,e.containerInfo)}function Zg(t,e,n,r,i){return Ds(),fp(i),e.flags|=256,kt(t,e,n,r),e.child}var Gf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function lw(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ue,i&1),t===null)return jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Gf,t):bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gf,r}return s=t.child,t=s.sibling,r=Fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bp(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,r){return r!==null&&fp(r),Ls(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ad(Error(O(422))),Pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ls(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Gf,s);if(!(e.mode&1))return Pl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Ad(s,r,void 0),Pl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),_n(r,t,i,-1))}return Ap(),r=Ad(Error(O(421))),Pl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=px.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Or(i.nextSibling),Bt=e,Le=!0,hn=null,t!==null&&(Xt[Jt++]=Hn,Xt[Jt++]=Gn,Xt[Jt++]=xi,Hn=t.id,Gn=t.overflow,xi=e),e=bp(e,r.children),e.flags|=4096,e)}function ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zf(t.return,e,n)}function Od(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ev(t,n,e);else if(t.tag===19)ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Od(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Od(e,!0,n,null,s);break;case"together":Od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nx(t,e,n){switch(e.tag){case 3:aw(e),Ds();break;case 5:M0(e);break;case 1:Mt(e.type)&&Su(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?lw(t,e,n):(Ie(Ue,Ue.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ie(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,sw(t,e,n)}return nr(t,e,n)}var cw,Kf,dw,fw;cw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};dw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Pn.current);var s=null;switch(n){case"input":i=gf(t,i),r=gf(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=_f(t,i),r=_f(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wu)}Ef(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function yo(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rx(t,e,n){var r=e.pendingProps;switch(dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Mt(e.type)&&Eu(),yt(e),null;case 3:return r=e.stateNode,Ms(),Re(Lt),Re(St),wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(nh(hn),hn=null))),Kf(t,e),yt(e),null;case 5:_p(e);var i=fi(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)dw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return yt(e),null}if(t=fi(Pn.current),Tl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[fa]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<Ao.length;i++)Ne(Ao[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":ug(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":dg(r,s),Ne("invalid",r)}Ef(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,a,t),i=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":_l(r),cg(r,s,!0);break;case"textarea":_l(r),fg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[fa]=r,cw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sf(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ao.length;i++)Ne(Ao[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":ug(t,r),i=gf(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":dg(t,r),i=_f(t,r),Ne("invalid",t);break;default:i=r}Ef(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?W_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ra(t,l):typeof l=="number"&&ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",t):l!=null&&Qh(t,s,l,o))}switch(n){case"input":_l(t),cg(t,r,!1);break;case"textarea":_l(t),fg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=fi(pa.current),fi(Pn.current),Tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return yt(e),null;case 13:if(Re(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Wt!==null&&e.mode&1&&!(e.flags&128))N0(),Ds(),e.flags|=98560,s=!1;else if(s=Tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[xn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else hn!==null&&(nh(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?rt===0&&(rt=3):Ap())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Ms(),Kf(t,e),t===null&&ca(e.stateNode.containerInfo),yt(e),null;case 10:return mp(e.type._context),yt(e),null;case 17:return Mt(e.type)&&Eu(),yt(e),null;case 19:if(Re(Ue),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yo(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tu(t),o!==null){for(e.flags|=128,yo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Us&&(e.flags|=128,r=!0,yo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return yt(e),null}else 2*qe()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Ue.current,Ie(Ue,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function ix(t,e){switch(dp(e),e.tag){case 1:return Mt(e.type)&&Eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),Re(Lt),Re(St),wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(Re(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ue),null;case 4:return Ms(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var Rl=!1,wt=!1,sx=typeof WeakSet=="function"?WeakSet:Set,z=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function qf(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var tv=!1;function ox(t,e){if(Af=vu,t=g0(),up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Of={focusedElem:t,selectionRange:n},vu=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,x=v.memoizedState,y=e.stateNode,h=y.getSnapshotBeforeUpdate(e.elementType===e.type?_:cn(e.type,_),x);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return v=tv,tv=!1,v}function zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qf(e,n,s)}i=i.next}while(i!==r)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hw(t){var e=t.alternate;e!==null&&(t.alternate=null,hw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[fa],delete e[Mf],delete e[Wk],delete e[Bk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pw(t){return t.tag===5||t.tag===3||t.tag===4}function nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wu));else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function Jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var dt=null,dn=!1;function mr(t,e,n){for(n=n.child;n!==null;)mw(t,e,n),n=n.sibling}function mw(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:wt||ls(n,e);case 6:var r=dt,i=dn;dt=null,mr(t,e,n),dt=r,dn=i,dt!==null&&(dn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(dn?(t=dt,n=n.stateNode,t.nodeType===8?bd(t.parentNode,n):t.nodeType===1&&bd(t,n),aa(t)):bd(dt,n.stateNode));break;case 4:r=dt,i=dn,dt=n.stateNode.containerInfo,dn=!0,mr(t,e,n),dt=r,dn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qf(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!wt&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,mr(t,e,n),wt=r):mr(t,e,n);break;default:mr(t,e,n)}}function rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sx),e.forEach(function(r){var i=mx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,dn=!1;break e;case 3:dt=a.stateNode.containerInfo,dn=!0;break e;case 4:dt=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(dt===null)throw Error(O(160));mw(s,o,i),dt=null,dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gw(e,t),e=e.sibling}function gw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),Cn(t),r&4){try{zo(3,t,t.return),kc(3,t)}catch(_){Ve(t,t.return,_)}try{zo(5,t,t.return)}catch(_){Ve(t,t.return,_)}}break;case 1:un(e,t),Cn(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(un(e,t),Cn(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{ra(i,"")}catch(_){Ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&F_(i,s),Sf(a,o);var u=Sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?W_(i,d):c==="dangerouslySetInnerHTML"?z_(i,d):c==="children"?ra(i,d):Qh(i,c,d,u)}switch(a){case"input":vf(i,s);break;case"textarea":U_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ys(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ys(i,!!s.multiple,s.defaultValue,!0):ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[fa]=s}catch(_){Ve(t,t.return,_)}}break;case 6:if(un(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ve(t,t.return,_)}}break;case 3:if(un(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(_){Ve(t,t.return,_)}break;case 4:un(e,t),Cn(t);break;case 13:un(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Np=qe())),r&4&&rv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,un(e,t),wt=u):un(e,t),Cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(z=t,c=t.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,m=f.child,f.tag){case 0:case 11:case 14:case 15:zo(4,f,f.return);break;case 1:ls(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ve(r,n,_)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){sv(d);continue}}m!==null?(m.return=f,z=m):sv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V_("display",o))}catch(_){Ve(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:un(e,t),Cn(t),r&4&&rv(t);break;case 21:break;default:un(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pw(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ra(i,""),r.flags&=-33);var s=nv(t);Jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nv(t);Xf(t,a,o);break;default:throw Error(O(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ax(t,e,n){z=t,vw(t)}function vw(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Rl;var u=wt;if(Rl=o,(wt=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?ov(i):l!==null?(l.return=o,z=l):ov(i);for(;s!==null;)z=s,vw(s),s=s.sibling;z=i,Rl=a,wt=u}iv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):iv(t)}}function iv(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}wt||e.flags&512&&Qf(e)}catch(f){Ve(e,e.return,f)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function sv(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function ov(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Qf(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Qf(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var lx=Math.ceil,Ru=lr.ReactCurrentDispatcher,Ip=lr.ReactCurrentOwner,rn=lr.ReactCurrentBatchConfig,he=0,ut=null,Je=null,pt=0,zt=0,us=Jr(0),rt=0,ya=null,Ii=0,xc=0,Tp=0,Vo=null,At=null,Np=0,Us=1/0,Bn=null,Au=!1,Zf=null,Lr=null,Al=!1,br=null,Ou=0,Wo=0,eh=null,tu=-1,nu=0;function It(){return he&6?qe():tu!==-1?tu:tu=qe()}function Mr(t){return t.mode&1?he&2&&pt!==0?pt&-pt:Hk.transition!==null?(nu===0&&(nu=e0()),nu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function _n(t,e,n,r){if(50<Wo)throw Wo=0,eh=null,Error(O(185));Va(t,n,r),(!(he&2)||t!==ut)&&(t===ut&&(!(he&2)&&(xc|=n),rt===4&&Er(t,pt)),Ft(t,r),n===1&&he===0&&!(e.mode&1)&&(Us=qe()+500,Ec&&Zr()))}function Ft(t,e){var n=t.callbackNode;HC(t,e);var r=gu(t,t===ut?pt:0);if(r===0)n!==null&&mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mg(n),e===1)t.tag===0?$k(av.bind(null,t)):b0(av.bind(null,t)),zk(function(){!(he&6)&&Zr()}),n=null;else{switch(t0(r)){case 1:n=tp;break;case 4:n=J_;break;case 16:n=mu;break;case 536870912:n=Z_;break;default:n=mu}n=xw(n,yw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yw(t,e){if(tu=-1,nu=0,he&6)throw Error(O(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=gu(t,t===ut?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Du(t,r);else{e=r;var i=he;he|=2;var s=ww();(ut!==t||pt!==e)&&(Bn=null,Us=qe()+500,wi(t,e));do try{dx();break}catch(a){_w(t,a)}while(1);pp(),Ru.current=s,he=i,Je!==null?e=0:(ut=null,pt=0,e=rt)}if(e!==0){if(e===2&&(i=If(t),i!==0&&(r=i,e=th(t,i))),e===1)throw n=ya,wi(t,0),Er(t,r),Ft(t,qe()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!ux(i)&&(e=Du(t,r),e===2&&(s=If(t),s!==0&&(r=s,e=th(t,s))),e===1))throw n=ya,wi(t,0),Er(t,r),Ft(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:ai(t,At,Bn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=Np+500-qe(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lf(ai.bind(null,t,At,Bn),e);break}ai(t,At,Bn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lx(r/1960))-r,10<r){t.timeoutHandle=Lf(ai.bind(null,t,At,Bn),r);break}ai(t,At,Bn);break;case 5:ai(t,At,Bn);break;default:throw Error(O(329))}}}return Ft(t,qe()),t.callbackNode===n?yw.bind(null,t):null}function th(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=Du(t,e),t!==2&&(e=At,At=n,e!==null&&nh(e)),t}function nh(t){At===null?At=t:At.push.apply(At,t)}function ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Tp,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function av(t){if(he&6)throw Error(O(327));Cs();var e=gu(t,0);if(!(e&1))return Ft(t,qe()),null;var n=Du(t,e);if(t.tag!==0&&n===2){var r=If(t);r!==0&&(e=r,n=th(t,r))}if(n===1)throw n=ya,wi(t,0),Er(t,e),Ft(t,qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ai(t,At,Bn),Ft(t,qe()),null}function Pp(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Us=qe()+500,Ec&&Zr())}}function Ti(t){br!==null&&br.tag===0&&!(he&6)&&Cs();var e=he;he|=1;var n=rn.transition,r=ye;try{if(rn.transition=null,ye=1,t)return t()}finally{ye=r,rn.transition=n,he=e,!(he&6)&&Zr()}}function Rp(){zt=us.current,Re(us)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jk(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eu();break;case 3:Ms(),Re(Lt),Re(St),wp();break;case 5:_p(r);break;case 4:Ms();break;case 13:Re(Ue);break;case 19:Re(Ue);break;case 10:mp(r.type._context);break;case 22:case 23:Rp()}n=n.return}if(ut=t,Je=t=Fr(t.current,null),pt=zt=e,rt=0,ya=null,Tp=xc=Ii=0,At=Vo=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function _w(t,e){do{var n=Je;try{if(pp(),Jl.current=Pu,Nu){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nu=!1}if(bi=0,at=et=je=null,jo=!1,ma=0,Ip.current=null,n===null||n.return===null){rt=1,ya=e,Je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Kg(o);if(m!==null){m.flags&=-257,qg(m,o,a,s,e),m.mode&1&&Yg(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Yg(s,u,e),Ap();break e}l=Error(O(426))}}else if(Le&&a.mode&1){var x=Kg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),qg(x,o,a,s,e),fp(Fs(l,a));break e}}s=l=Fs(l,a),rt!==4&&(rt=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=nw(s,l,e);zg(s,y);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Lr===null||!Lr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=rw(s,a,e);zg(s,p);break e}}s=s.return}while(s!==null)}Sw(n)}catch(C){e=C,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function ww(){var t=Ru.current;return Ru.current=Pu,t===null?Pu:t}function Ap(){(rt===0||rt===3||rt===2)&&(rt=4),ut===null||!(Ii&268435455)&&!(xc&268435455)||Er(ut,pt)}function Du(t,e){var n=he;he|=2;var r=ww();(ut!==t||pt!==e)&&(Bn=null,wi(t,e));do try{cx();break}catch(i){_w(t,i)}while(1);if(pp(),he=n,Ru.current=r,Je!==null)throw Error(O(261));return ut=null,pt=0,rt}function cx(){for(;Je!==null;)Ew(Je)}function dx(){for(;Je!==null&&!MC();)Ew(Je)}function Ew(t){var e=kw(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?Sw(t):Je=e,Ip.current=null}function Sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ix(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=rx(n,e,zt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function ai(t,e,n){var r=ye,i=rn.transition;try{rn.transition=null,ye=1,fx(t,e,n,r)}finally{rn.transition=i,ye=r}return null}function fx(t,e,n,r){do Cs();while(br!==null);if(he&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GC(t,s),t===ut&&(Je=ut=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,xw(mu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=ye;ye=1;var a=he;he|=4,Ip.current=null,ox(t,n),gw(n,t),Ak(Of),vu=!!Af,Of=Af=null,t.current=n,ax(n),FC(),he=a,ye=o,rn.transition=s}else t.current=n;if(Al&&(Al=!1,br=t,Ou=i),s=t.pendingLanes,s===0&&(Lr=null),zC(n.stateNode),Ft(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,t=Zf,Zf=null,t;return Ou&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===eh?Wo++:(Wo=0,eh=t):Wo=0,Zr(),null}function Cs(){if(br!==null){var t=t0(Ou),e=rn.transition,n=ye;try{if(rn.transition=null,ye=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Ou=0,he&6)throw Error(O(331));var i=he;for(he|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:zo(8,c,s)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,m=c.return;if(hw(c),c===u){z=null;break}if(f!==null){f.return=m,z=f;break}z=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}var h=t.current;for(z=h;z!==null;){o=z;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,z=g;else e:for(o=h;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(C){Ve(a,a.return,C)}if(a===o){z=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,z=p;break e}z=a.return}}if(he=i,Zr(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{ye=n,rn.transition=e}}return!1}function lv(t,e,n){e=Fs(n,e),e=nw(t,e,1),t=Dr(t,e,1),e=It(),t!==null&&(Va(t,1,e),Ft(t,e))}function Ve(t,e,n){if(t.tag===3)lv(t,t,n);else for(;e!==null;){if(e.tag===3){lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Fs(n,t),t=rw(e,t,1),e=Dr(e,t,1),t=It(),e!==null&&(Va(e,1,t),Ft(e,t));break}}e=e.return}}function hx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(pt&n)===n&&(rt===4||rt===3&&(pt&130023424)===pt&&500>qe()-Np?wi(t,0):Tp|=n),Ft(t,e)}function Cw(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=It();t=tr(t,e),t!==null&&(Va(t,e,n),Ft(t,n))}function px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cw(t,n)}function mx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),Cw(t,n)}var kw;kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,nx(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Le&&e.flags&1048576&&I0(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eu(t,e),t=e.pendingProps;var i=Os(e,St.current);Ss(e,n),i=Sp(null,e,r,t,i,n);var s=Cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,Su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vp(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,Wf(e,r,t,n),e=Hf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&cp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vx(r),t=cn(r,t),i){case 0:e=$f(null,e,r,t,n);break e;case 1:e=Jg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Xg(null,e,r,cn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),$f(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Jg(t,e,r,i,n);case 3:e:{if(aw(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,R0(t,e),Iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fs(Error(O(423)),e),e=Zg(t,e,r,n,i);break e}else if(r!==i){i=Fs(Error(O(424)),e),e=Zg(t,e,r,n,i);break e}else for(Wt=Or(e.stateNode.containerInfo.firstChild),Bt=e,Le=!0,hn=null,n=L0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),r===i){e=nr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Df(r,i)?o=null:s!==null&&Df(r,s)&&(e.flags|=32),ow(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&jf(e),null;case 13:return lw(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ls(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Qg(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(xu,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!Lt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=sn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),Xg(t,e,r,i,n);case 15:return iw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),eu(t,e),e.tag=1,Mt(r)?(t=!0,Su(e)):t=!1,Ss(e,n),O0(e,r,i),Wf(e,r,i,n),Hf(null,e,r,!0,t,n);case 19:return uw(t,e,n);case 22:return sw(t,e,n)}throw Error(O(156,e.tag))};function xw(t,e){return X_(t,e)}function gx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new gx(t,e,n,r)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vx(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Zh)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ru(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zi:return Ei(n.children,i,s,e);case Xh:o=8,i|=8;break;case ff:return t=en(12,n,e,i|2),t.elementType=ff,t.lanes=s,t;case hf:return t=en(13,n,e,i),t.elementType=hf,t.lanes=s,t;case pf:return t=en(19,n,e,i),t.elementType=pf,t.lanes=s,t;case D_:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A_:o=10;break e;case O_:o=9;break e;case Jh:o=11;break e;case Zh:o=14;break e;case yr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=en(22,t,r,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=md(0),this.expirationTimes=md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dp(t,e,n,r,i,s,o,a,l){return t=new yx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function _x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bw(t){if(!t)return $r;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(Mt(n))return x0(t,n,e)}return e}function Iw(t,e,n,r,i,s,o,a,l){return t=Dp(n,r,!0,t,i,s,o,a,l),t.context=bw(null),n=t.current,r=It(),i=Mr(n),s=Qn(r,i),s.callback=e??null,Dr(n,s,i),t.current.lanes=i,Va(t,i,r),Ft(t,r),t}function Ic(t,e,n,r){var i=e.current,s=It(),o=Mr(i);return n=bw(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dr(i,e,o),t!==null&&(_n(t,i,o,s),Xl(t,i,o)),o}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lp(t,e){uv(t,e),(t=t.alternate)&&uv(t,e)}function wx(){return null}var Tw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mp(t){this._internalRoot=t}Tc.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Ic(t,e,null,null)};Tc.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ti(function(){Ic(null,t,null,null)}),e[er]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&o0(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cv(){}function Ex(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Lu(o);s.call(u)}}var o=Iw(e,r,t,0,null,!1,!1,"",cv);return t._reactRootContainer=o,t[er]=o.current,ca(t.nodeType===8?t.parentNode:t),Ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Lu(l);a.call(u)}}var l=Dp(t,0,!1,null,null,!1,!1,"",cv);return t._reactRootContainer=l,t[er]=l.current,ca(t.nodeType===8?t.parentNode:t),Ti(function(){Ic(e,l,n,r)}),l}function Pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Lu(o);a.call(l)}}Ic(e,o,t,i)}else o=Ex(n,e,t,i,r);return Lu(o)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(np(e,n|1),Ft(e,qe()),!(he&6)&&(Us=qe()+500,Zr()))}break;case 13:Ti(function(){var r=tr(t,1);if(r!==null){var i=It();_n(r,t,1,i)}}),Lp(t,1)}};rp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=It();_n(e,t,134217728,n)}Lp(t,134217728)}};r0=function(t){if(t.tag===13){var e=Mr(t),n=tr(t,e);if(n!==null){var r=It();_n(n,t,e,r)}Lp(t,e)}};i0=function(){return ye};s0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};kf=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wc(r);if(!i)throw Error(O(90));M_(r),vf(r,i)}}}break;case"textarea":U_(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};H_=Pp;G_=Ti;var Sx={usingClientEntryPoint:!1,Events:[Ba,rs,wc,B_,$_,Pp]},_o={findFiberByHostInstance:ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cx={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q_(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{gc=Ol.inject(Cx),Nn=Ol}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(O(200));return _x(t,e,null,n)};Ht.createRoot=function(t,e){if(!Fp(t))throw Error(O(299));var n=!1,r="",i=Tw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dp(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,ca(t.nodeType===8?t.parentNode:t),new Mp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=q_(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Ti(t)};Ht.hydrate=function(t,e,n){if(!Nc(e))throw Error(O(200));return Pc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Iw(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,ca(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tc(e)};Ht.render=function(t,e,n){if(!Nc(e))throw Error(O(200));return Pc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(O(40));return t._reactRootContainer?(Ti(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Ht.unstable_batchedUpdates=Pp;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Pc(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function Nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nw)}catch(t){console.error(t)}}Nw(),I_.exports=Ht;var kx=I_.exports,dv=kx;cf.createRoot=dv.createRoot,cf.hydrateRoot=dv.hydrateRoot;const xx=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function bx(t){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n=`${{}.PUBLIC_URL}/service-worker.js`;xx?(Ix(n,t),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Pw(n,t)})}}function Pw(t,e){navigator.serviceWorker.register(t).then(n=>{n.onupdatefound=()=>{const r=n.installing;r!=null&&(r.onstatechange=()=>{r.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(n=>{console.error("Error during service worker registration:",n)})}function Ix(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");n.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(i=>{i.unregister().then(()=>{window.location.reload()})}):Pw(t,e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const Tx="modulepreload",Nx=function(t){return"/"+t},fv={},Px=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Nx(s),s in fv)return;fv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Tx,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Rx=t=>{t&&t instanceof Function&&Px(()=>import("./web-vitals-9f4c2f45.js"),[]).then(({getCLS:e,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{e(t),n(t),r(t),i(t),s(t)})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw Js(e)},Js=function(t){return new Error("Firebase Database ("+Rw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Aw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Ox;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ox extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(t){const e=Aw(t);return Up.encodeByteArray(e,!0)},Mu=function(t){return Ow(t).replace(/\./g,"")},Fu=function(t){try{return Up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){return Dw(void 0,t)}function Dw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lx(n)||(t[n]=Dw(t[n],e[n]));return t}function Lx(t){return t!=="__proto__"}/**
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
 */function Mx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fx=()=>Mx().__FIREBASE_DEFAULTS__,Ux=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fu(t[1]);return e&&JSON.parse(e)},jp=()=>{try{return Fx()||Ux()||jx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lw=t=>{var e,n;return(n=(e=jp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zx=t=>{const e=Lw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mw=()=>{var t;return(t=jp())===null||t===void 0?void 0:t.config},Fw=t=>{var e;return(e=jp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function Vx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Wx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bx(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jw(){return Rw.NODE_ADMIN===!0}function $x(){try{return typeof indexedDB=="object"}catch{return!1}}function Hx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="FirebaseError";class ei extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gx,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ei(i,a,r)}}function Yx(t,e){return t.replace(Kx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_a(Fu(s[0])||""),n=_a(Fu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qx=function(t){const e=zw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qx=function(t){const e=zw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ju(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hv(s)&&hv(o)){if(!ju(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Jx(t,e){const n=new Zx(t,e);return n.subscribe.bind(n)}class Zx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Md),i.error===void 0&&(i.error=Md),i.complete===void 0&&(i.complete=Md);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Md(){}function Rc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const li="[DEFAULT]";/**
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
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ha;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ib(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===li?void 0:t}function ib(t){return t.instantiationMode==="EAGER"}/**
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
 */class sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const ob={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},ab=we.INFO,lb={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vp{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const cb=(t,e)=>e.some(n=>t instanceof n);let pv,mv;function db(){return pv||(pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vw=new WeakMap,ih=new WeakMap,Ww=new WeakMap,Fd=new WeakMap,Wp=new WeakMap;function hb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vw.set(n,t)}).catch(()=>{}),Wp.set(e,t),e}function pb(t){if(ih.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mb(t){sh=t(sh)}function gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),Ur(r)}:fb().includes(t)?function(...e){return t.apply(Ud(this),e),Ur(Vw.get(this))}:function(...e){return Ur(t.apply(Ud(this),e))}}function vb(t){return typeof t=="function"?gb(t):(t instanceof IDBTransaction&&pb(t),cb(t,db())?new Proxy(t,sh):t)}function Ur(t){if(t instanceof IDBRequest)return hb(t);if(Fd.has(t))return Fd.get(t);const e=vb(t);return e!==t&&(Fd.set(t,e),Wp.set(e,t)),e}const Ud=t=>Wp.get(t);function yb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _b=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],jd=new Map;function gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jd.get(e))return jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_b.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jd.set(e,s),s}mb(t=>({...t,get:(e,n,r)=>gv(e,n)||t.get(e,n,r),has:(e,n)=>!!gv(e,n)||t.has(e,n)}));/**
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
 */class Eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",vv="0.9.20";/**
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
 */const Pi=new Vp("@firebase/app"),Cb="@firebase/app-compat",kb="@firebase/analytics-compat",xb="@firebase/analytics",bb="@firebase/app-check-compat",Ib="@firebase/app-check",Tb="@firebase/auth",Nb="@firebase/auth-compat",Pb="@firebase/database",Rb="@firebase/database-compat",Ab="@firebase/functions",Ob="@firebase/functions-compat",Db="@firebase/installations",Lb="@firebase/installations-compat",Mb="@firebase/messaging",Fb="@firebase/messaging-compat",Ub="@firebase/performance",jb="@firebase/performance-compat",zb="@firebase/remote-config",Vb="@firebase/remote-config-compat",Wb="@firebase/storage",Bb="@firebase/storage-compat",$b="@firebase/firestore",Hb="@firebase/firestore-compat",Gb="firebase",Yb="10.5.0";/**
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
 */const ah="[DEFAULT]",Kb={[oh]:"fire-core",[Cb]:"fire-core-compat",[xb]:"fire-analytics",[kb]:"fire-analytics-compat",[Ib]:"fire-app-check",[bb]:"fire-app-check-compat",[Tb]:"fire-auth",[Nb]:"fire-auth-compat",[Pb]:"fire-rtdb",[Rb]:"fire-rtdb-compat",[Ab]:"fire-fn",[Ob]:"fire-fn-compat",[Db]:"fire-iid",[Lb]:"fire-iid-compat",[Mb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Ub]:"fire-perf",[jb]:"fire-perf-compat",[zb]:"fire-rc",[Vb]:"fire-rc-compat",[Wb]:"fire-gcs",[Bb]:"fire-gcs-compat",[$b]:"fire-fst",[Hb]:"fire-fst-compat","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
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
 */const zu=new Map,lh=new Map;function qb(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(lh.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;lh.set(e,t);for(const n of zu.values())qb(n,t);return!0}function Bp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jr=new Ga("app","Firebase",Qb);/**
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
 */class Xb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=Yb;function Bw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jr.create("bad-app-name",{appName:String(i)});if(n||(n=Mw()),!n)throw jr.create("no-options");const s=zu.get(i);if(s){if(ju(n,s.options)&&ju(r,s.config))return s;throw jr.create("duplicate-app",{appName:i})}const o=new sb(i);for(const l of lh.values())o.addComponent(l);const a=new Xb(n,r,o);return zu.set(i,a),a}function $w(t=ah){const e=zu.get(t);if(!e&&t===ah&&Mw())return Bw();if(!e)throw jr.create("no-app",{appName:t});return e}function zr(t,e,n){var r;let i=(r=Kb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}zs(new Ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jb="firebase-heartbeat-database",Zb=1,wa="firebase-heartbeat-store";let zd=null;function Hw(){return zd||(zd=yb(Jb,Zb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wa)}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),zd}async function eI(t){try{return await(await Hw()).transaction(wa).objectStore(wa).get(Gw(t))}catch(e){if(e instanceof ei)Pi.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function yv(t,e){try{const r=(await Hw()).transaction(wa,"readwrite");await r.objectStore(wa).put(e,Gw(t)),await r.done}catch(n){if(n instanceof ei)Pi.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function Gw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tI=1024,nI=30*24*60*60*1e3;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_v();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=nI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_v(),{heartbeatsToSend:n,unsentEntries:r}=iI(this._heartbeatsCache.heartbeats),i=Mu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _v(){return new Date().toISOString().substring(0,10)}function iI(t,e=tI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $x()?Hx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wv(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oI(t){zs(new Ni("platform-logger",e=>new Eb(e),"PRIVATE")),zs(new Ni("heartbeat",e=>new rI(e),"PRIVATE")),zr(oh,vv,t),zr(oh,vv,"esm2017"),zr("fire-js","")}oI("");var aI="firebase",lI="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr(aI,lI,"app");const Ev="@firebase/database",Sv="1.0.1";/**
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
 */let Yw="";function uI(t){Yw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_a(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cI(e)}}catch{}return new dI},hi=Kw("localStorage"),uh=Kw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Vp("@firebase/database"),fI=function(){let t=1;return function(){return t++}}(),qw=function(t){const e=tb(t),n=new Xx;n.update(e);const r=n.digest();return Up.encodeByteArray(r)},Ya=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ya.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Si=null,Cv=!0;const hI=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ks.logLevel=we.VERBOSE,Si=ks.log.bind(ks),e&&uh.set("logging_enabled",!0)):typeof t=="function"?Si=t:(Si=null,uh.remove("logging_enabled"))},ft=function(...t){if(Cv===!0&&(Cv=!1,Si===null&&uh.get("logging_enabled")===!0&&hI(!0)),Si){const e=Ya.apply(null,t);Si(e)}},Ka=function(t){return function(...e){ft(t,...e)}},ch=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ya(...t);ks.error(e)},rr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ya(...t)}`;throw ks.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+Ya(...t);ks.warn(e)},pI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$p=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vs="[MIN_NAME]",Ri="[MAX_NAME]",Wi=function(t,e){if(t===e)return 0;if(t===Vs||e===Ri)return-1;if(e===Vs||t===Ri)return 1;{const n=kv(t),r=kv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},gI=function(t,e){return t===e?0:t<e?-1:1},wo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Hp=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=Hp(t[e[r]]);return n+="}",n},Qw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xw=function(t){L(!$p(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},vI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _I(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wI=new RegExp("^-?(0*)\\d{1,10}$"),EI=-2147483648,SI=2147483647,kv=function(t){if(wI.test(t)){const e=Number(t);if(e>=EI&&e<=SI)return e}return null},to=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},CI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class xs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="5",Jw="v",Zw="s",e1="r",t1="f",n1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,r1="ls",i1="p",dh="ac",s1="websocket",o1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function l1(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===s1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===o1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bI(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.counters_={}}incrementCounter(e,n=1){Dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={},Wd={};function Yp(t){const e=t.toString();return Vd[e]||(Vd[e]=new II),Vd[e]}function TI(t,e){const n=t.toString();return Wd[n]||(Wd[n]=e()),Wd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&to(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="start",PI="close",RI="pLPCommand",AI="pRTLPCB",u1="id",c1="pw",d1="ser",OI="cb",DI="seg",LI="ts",MI="d",FI="dframe",f1=1870,h1=30,UI=f1-h1,jI=25e3,zI=3e4;class cs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ka(e),this.stats_=Yp(n),this.urlFn=l=>(this.appCheckToken&&(l[dh]=this.appCheckToken),l1(n,o1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zI)),mI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xv)this.id=a,this.password=l;else if(o===PI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[xv]="t",r[d1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[OI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jw]=Gp,this.transportSessionId&&(r[Zw]=this.transportSessionId),this.lastSessionId&&(r[r1]=this.lastSessionId),this.applicationId&&(r[i1]=this.applicationId),this.appCheckToken&&(r[dh]=this.appCheckToken),typeof location<"u"&&location.hostname&&n1.test(location.hostname)&&(r[e1]=t1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cs.forceAllow_=!0}static forceDisallow(){cs.forceDisallow_=!0}static isAvailable(){return cs.forceAllow_?!0:!cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vI()&&!yI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ow(n),i=Qw(r,UI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FI]="t",r[u1]=e,r[c1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fI(),window[RI+this.uniqueCallbackIdentifier]=e,window[AI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u1]=this.myID,e[c1]=this.myPW,e[d1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+h1+r.length<=f1;){const o=this.pendingSegs.shift();r=r+"&"+DI+i+"="+o.seg+"&"+LI+i+"="+o.ts+"&"+MI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=16384,WI=45e3;let Vu=null;typeof MozWebSocket<"u"?Vu=MozWebSocket:typeof WebSocket<"u"&&(Vu=WebSocket);class pn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ka(this.connId),this.stats_=Yp(n),this.connURL=pn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jw]=Gp,typeof location<"u"&&location.hostname&&n1.test(location.hostname)&&(o[e1]=t1),n&&(o[Zw]=n),r&&(o[r1]=r),i&&(o[dh]=i),s&&(o[i1]=s),l1(e,s1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let r;jw(),this.mySock=new Vu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vu!==null&&!pn.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_a(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qw(n,VI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2;pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cs,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pn&&pn.isAvailable();let r=n&&!pn.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pn];else{const i=this.transports_=[];for(const s of Ea.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ea.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=6e4,$I=5e3,HI=10*1024,GI=100*1024,Bd="t",bv="d",YI="s",Iv="r",KI="e",Tv="o",Nv="a",Pv="n",Rv="p",qI="h";class QI{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ka("c:"+this.id+":"),this.transportManager_=new Ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bd in e){const n=e[Bd];n===Nv?this.upgradeIfSecondaryHealthy_():n===Iv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wo("t",e),r=wo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wo("t",e),r=wo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wo(Bd,e);if(bv in e){const r=e[bv];if(n===qI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YI?this.onConnectionShutdown_(r):n===Iv?this.onReset_(r):n===KI?ch("Server Error: "+r):n===Tv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ch("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gp!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($I))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends m1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wu}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=32,Ov=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hr(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function qp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Sa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function g1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return bt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JI(t,e){const n=Sa(t,0),r=Sa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Wi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Qp(t,e){if(Hr(t)!==Hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hr(t)>Hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ZI{constructor(e,n){this.errorPrefix_=n,this.parts_=Sa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ac(this.parts_[r]);v1(this)}}function eT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ac(e),v1(t)}function tT(t){const e=t.parts_.pop();t.byteLength_-=Ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function v1(t){if(t.byteLength_>Ov)throw new Error(t.errorPrefix_+"has a key path longer than "+Ov+" bytes ("+t.byteLength_+").");if(t.parts_.length>Av)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Av+") or object contains a cycle "+ui(t))}function ui(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends m1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Xp}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=1e3,nT=60*5*1e3,Dv=30*1e3,rT=1.3,iT=3e4,sT="server_kill",Lv=3;class Xn extends p1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=Ka("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Eo,this.maxReconnectDelay_=nT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ha,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dn(e,"w")){const r=js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ch("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iT&&(this.reconnectDelay_=Eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new QI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Tt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(sT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Tt(d),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rh(this.interruptReasons_)&&(this.reconnectDelay_=Eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lv&&(this.reconnectDelay_=Dv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yw.replace(/\./g,"-")]=1,zp()?e["framework.cordova"]=1:Uw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wu.getInstance().currentlyOnline();return rh(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Oc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Vs,e),i=new oe(Vs,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class y1 extends Oc{static get __EMPTY_NODE(){return Dl}static set __EMPTY_NODE(e){Dl=e}compare(e,n){return Wi(e.name,n.name)}isDefinedOn(e){throw Js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Ri,Dl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Dl)}toString(){return".key"}}const bs=new y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??Dt.EMPTY_NODE,this.right=s??Dt.EMPTY_NODE}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class oT{copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ll(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ll(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new oT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){return Wi(t.name,e.name)}function Jp(t,e){return Wi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;function lT(t){fh=t}const _1=function(t){return typeof t=="number"?"number:"+Xw(t):"string:"+t},w1=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dn(e,".sv"),"Priority must be a string or number.")}else L(t===fh||t.isEmpty(),"priority of unexpected type.");L(t===fh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mv;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),w1(this.priorityNode_)}static set __childrenNodeConstructor(e){Mv=e}static get __childrenNodeConstructor(){return Mv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:se(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xw(this.value_):e+=this.value_,this.lazyHash_=qw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(n),s=ot.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E1,S1;function uT(t){E1=t}function cT(t){S1=t}class dT extends Oc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Wi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Ri,new ot("[PRIORITY-POST]",S1))}makePost(e,n){const r=E1(e);return new oe(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new dT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=Math.log(2);class hT{constructor(e){const n=s=>parseInt(Math.log(s)/fT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new lt(f,d.node,lt.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),_=i(m+1,u);return d=t[m],f=n?n(d):d,new lt(f,d.node,lt.BLACK,v,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,_){const x=d-v,y=d;d-=v;const h=i(x+1,y),g=t[x],p=n?n(g):g;m(new lt(p,g.node,_,null,h))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),x=Math.pow(2,l.count-(v+1));_?f(x,lt.BLACK):(f(x,lt.BLACK),f(x,lt.RED))}return c},o=new hT(t.length),a=s(o);return new Dt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d;const qi={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(qi&&$e,"ChildrenNode.ts has not been loaded"),$d=$d||new Yn({".priority":qi},{".priority":$e}),$d}get(e){const n=js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return Dn(this.indexSet_,e.toString())}addIndex(e,n){L(e!==bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Bu(r,e.getCompare()):a=qi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Yn(c,u)}addToIndexes(e,n){const r=Uu(this.indexes_,(i,s)=>{const o=js(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===qi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Bu(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Uu(this.indexes_,i=>{if(i===qi)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&w1(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return So||(So=new X(new Dt(Jp),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||So}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?So:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?So:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{L(se(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_1(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qa?-1:0}withIndex(e){if(e===bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bs?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pT extends X{constructor(){super(new Dt(Jp),X.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const qa=new pT;Object.defineProperties(oe,{MIN:{value:new oe(Vs,X.EMPTY_NODE)},MAX:{value:new oe(Ri,qa)}});y1.__EMPTY_NODE=X.EMPTY_NODE;ot.__childrenNodeConstructor=X;lT(qa);cT(qa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=!0;function tt(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,tt(e))}if(!(t instanceof Array)&&mT){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=Bu(n,aT,o=>o.name,Jp);if(r){const o=Bu(n,$e.getCompare());return new X(s,tt(e),new Yn({".priority":o},{".priority":$e}))}else return new X(s,tt(e),Yn.Default)}else{let n=X.EMPTY_NODE;return gt(t,(r,i)=>{if(Dn(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}uT(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends Oc{constructor(e){super(),this.indexPath_=e,L(!ce(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Wi(e.name,n.name):s}makePost(e,n){const r=tt(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,qa);return new oe(Ri,e)}toString(){return Sa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Oc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Wi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=tt(e);return new oe(n,r)}toString(){return".value"}}const yT=new vT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ca(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ka(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _T(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ca(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(ka(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ca(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ka(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.indexedFilter_=new Zp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xa.getStartPost_(e),this.endPost_=xa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(ka(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ca(n,d));const _=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ws(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ca(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vs}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new em;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ET(t){return t.loadsAllData()?new Zp(t.getIndex()):t.hasLimit()?new wT(t):new xa(t)}function Fv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$e?n="$priority":t.index_===yT?n="$value":t.index_===bs?n="$key":(L(t.index_ instanceof gT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Uv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends p1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ka("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$u.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),js(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=$u.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fv(e._queryParams),r=e._path.toString(),i=new Ha;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_a(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){return{value:null,children:new Map}}function k1(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Hu());const i=t.children.get(r);e=be(e),k1(i,e,n)}}function hh(t,e,n){t.value!==null?n(e,t.value):CT(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);hh(i,s,n)})}function CT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=10*1e3,xT=30*1e3,bT=5*60*1e3;class IT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kT(e);const r=jv+(xT-jv)*Math.random();Bo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&Dn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*bT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function tm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gn.ACK_USER_WRITE,this.source=tm()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Gu(me(),n,this.revert)}}else return L(se(this.path)===e,"operationForChild called for unrelated child."),new Gu(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.source=e,this.path=n,this.type=gn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new ba(this.source,me()):new ba(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gn.OVERWRITE}operationForChild(e){return ce(this.path)?new Ai(this.source,me(),this.snap.getImmediateChild(e)):new Ai(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Ai(this.source,me(),n.value):new Bs(this.source,me(),n)}else return L(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bs(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_T(o.childName,o.snapshotNode))}),Co(t,i,"child_removed",e,r,n),Co(t,i,"child_added",e,r,n),Co(t,i,"child_moved",s,r,n),Co(t,i,"child_changed",e,r,n),Co(t,i,"value",e,r,n),i}function Co(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RT(t,a,l)),o.forEach(a=>{const l=PT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function PT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RT(t,e,n){if(e.childName==null||n.childName==null)throw Js("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){return{eventCache:t,serverCache:e}}function $o(t,e,n,r){return Dc(new Gr(e,n,r),t.serverCache)}function x1(t,e,n,r){return Dc(t.eventCache,new Gr(e,n,r))}function Yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd;const AT=()=>(Hd||(Hd=new Dt(gI)),Hd);class xe{constructor(e,n=AT()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return gt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ce(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:Be(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new xe(null)}}set(e,n){if(ce(e))return new xe(n,this.children);{const r=se(e),s=(this.children.get(r)||new xe(null)).set(be(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(ce(e))return n;{const r=se(e),s=(this.children.get(r)||new xe(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(be(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),Be(n,i),r):new xe(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new xe(null))}}function Ho(t,e,n){if(ce(e))return new wn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new wn(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new wn(s)}}}function ph(t,e,n){let r=t;return gt(n,(i,s)=>{r=Ho(r,Be(e,i),s)}),r}function zv(t,e){if(ce(e))return wn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new wn(n)}}function mh(t,e){return Bi(t,e)!=null}function Bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function Vv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Vr(t,e){if(ce(e))return t;{const n=Bi(t,e);return n!=null?new wn(new xe(n)):new wn(t.writeTree_.subtree(e))}}function gh(t){return t.writeTree_.isEmpty()}function $s(t,e){return b1(me(),t.writeTree_,e)}function b1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=b1(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){return P1(e,t)}function OT(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ho(t.visibleWrites,e,n)),t.lastWriteId=r}function DT(t,e,n,r){L(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ph(t.visibleWrites,e,n),t.lastWriteId=r}function LT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function MT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&FT(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return UT(t),!0;if(r.snap)t.visibleWrites=zv(t.visibleWrites,r.path);else{const a=r.children;gt(a,l=>{t.visibleWrites=zv(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function FT(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Be(t.path,n),e))return!0;return!1}function UT(t){t.visibleWrites=I1(t.allWrites,jT,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jT(t){return t.visible}function I1(t,e,n){let r=wn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=bt(n,o),r=Ho(r,a,s.snap)):tn(o,n)&&(a=bt(o,n),r=Ho(r,me(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=bt(n,o),r=ph(r,a,s.children);else if(tn(o,n))if(a=bt(o,n),ce(a))r=ph(r,me(),s.children);else{const l=js(s.children,se(a));if(l){const u=l.getChild(be(a));r=Ho(r,me(),u)}}}else throw Js("WriteRecord should have .snap or .children")}}return r}function T1(t,e,n,r,i){if(!r&&!i){const s=Bi(t.visibleWrites,e);if(s!=null)return s;{const o=Vr(t.visibleWrites,e);if(gh(o))return n;if(n==null&&!mh(o,me()))return null;{const a=n||X.EMPTY_NODE;return $s(o,a)}}}else{const s=Vr(t.visibleWrites,e);if(!i&&gh(s))return n;if(!i&&n==null&&!mh(s,me()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=I1(t.allWrites,o,e),l=n||X.EMPTY_NODE;return $s(a,l)}}}function zT(t,e,n){let r=X.EMPTY_NODE;const i=Bi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Vr(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=$s(Vr(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),Vv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Vr(t.visibleWrites,e);return Vv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function VT(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(mh(t.visibleWrites,s))return null;{const o=Vr(t.visibleWrites,s);return gh(o)?i.getChild(n):$s(o,i.getChild(n))}}function WT(t,e,n,r){const i=Be(e,n),s=Bi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Vr(t.visibleWrites,i);return $s(o,r.getNode().getImmediateChild(n))}else return null}function BT(t,e){return Bi(t.visibleWrites,e)}function $T(t,e,n,r,i,s,o){let a;const l=Vr(t.visibleWrites,e),u=Bi(l,me());if(u!=null)a=u;else if(n!=null)a=$s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function HT(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function Ku(t,e,n,r){return T1(t.writeTree,t.treePath,e,n,r)}function im(t,e){return zT(t.writeTree,t.treePath,e)}function Wv(t,e,n,r){return VT(t.writeTree,t.treePath,e,n,r)}function qu(t,e){return BT(t.writeTree,Be(t.treePath,e))}function GT(t,e,n,r,i,s){return $T(t.writeTree,t.treePath,e,n,r,i,s)}function sm(t,e,n){return WT(t.writeTree,t.treePath,e,n)}function N1(t,e){return P1(Be(t.treePath,e),t.writeTree)}function P1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ka(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ca(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ka(r,e.snapshotNode,i.oldSnap));else throw Js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const R1=new KT;class om{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oi(this.viewCache_),s=GT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){return{filter:t}}function QT(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XT(t,e,n,r,i){const s=new YT;let o,a;if(n.type===gn.OVERWRITE){const u=n;u.source.fromUser?o=vh(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),o=Qu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===gn.MERGE){const u=n;u.source.fromUser?o=ZT(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=yh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===gn.ACK_USER_WRITE){const u=n;u.revert?o=nN(t,e,u.path,r,i,s):o=eN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===gn.LISTEN_COMPLETE)o=tN(t,e,n.path,r,s);else throw Js("Unknown operation type: "+n.type);const l=s.getChanges();return JT(e,o,l),{viewCache:o,changes:l}}function JT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(C1(Yu(e)))}}function A1(t,e,n,r,i,s){const o=e.eventCache;if(qu(r,n)!=null)return e;{let a,l;if(ce(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Oi(e),c=u instanceof X?u:X.EMPTY_NODE,d=im(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ku(r,Oi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){L(Hr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Wv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=be(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Wv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=sm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return $o(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Qu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ce(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Hr(n)>1)return e;const v=be(n),x=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),x):u=c.updateChild(l.getNode(),m,x,v,R1,null)}const d=x1(e,u,l.isFullyInitialized()||ce(n),c.filtersNodes()),f=new om(i,d,s);return A1(t,d,n,i,f,a)}function vh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new om(i,e,s);if(ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$o(e,u,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=$o(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),m=a.getNode().getImmediateChild(d);let v;if(ce(f))v=r;else{const _=c.getCompleteChild(d);_!=null?qp(f)===".priority"&&_.getChild(g1(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=X.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=$o(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Bv(t,e){return t.eventCache.isCompleteForChild(e)}function ZT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Be(n,l);Bv(e,se(c))&&(a=vh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Be(n,l);Bv(e,se(c))||(a=vh(t,a,c,u,i,s,o))}),a}function $v(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ce(n)?u=r:u=new xe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=$v(t,m,f);l=Qu(t,l,new Ee(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),_=$v(t,v,f);l=Qu(t,l,new Ee(d),_,i,s,o,a)}}),l}function eN(t,e,n,r,i,s,o){if(qu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let u=new xe(null);return l.getNode().forEachChild(bs,(c,d)=>{u=u.set(new Ee(c),d)}),yh(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((c,d)=>{const f=Be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),yh(t,e,n,u,i,s,a,o)}}function tN(t,e,n,r,i){const s=e.serverCache,o=x1(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return A1(t,o,n,r,R1,i)}function nN(t,e,n,r,i,s){let o;if(qu(r,n)!=null)return e;{const a=new om(r,e,i),l=e.eventCache.getNode();let u;if(ce(n)||se(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ku(r,Oi(e));else{const d=e.serverCache.getNode();L(d instanceof X,"serverChildren would be complete if leaf node"),c=im(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=se(n);let d=sm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,be(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,X.EMPTY_NODE,be(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ku(r,Oi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||qu(r,me())!=null,$o(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zp(r.getIndex()),s=ET(r);this.processor_=qT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),c=new Gr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Gr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Dc(d,c),this.eventGenerator_=new TT(this.query_)}get query(){return this.query_}}function iN(t){return t.viewCache_.serverCache.getNode()}function sN(t){return Yu(t.viewCache_)}function oN(t,e){const n=Oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Hv(t){return t.eventRegistrations_.length===0}function aN(t,e){t.eventRegistrations_.push(e)}function Gv(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Yv(t,e,n,r){e.type===gn.MERGE&&e.source.queryId!==null&&(L(Oi(t.viewCache_),"We should always have a full cache before handling merges"),L(Yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=XT(t.processor_,i,e,n,r);return QT(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,O1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(C1(n.getNode())),O1(t,r,n.getNode(),e)}function O1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return NT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;class D1{constructor(){this.views=new Map}}function uN(t){L(!Xu,"__referenceConstructor has already been defined"),Xu=t}function cN(){return L(Xu,"Reference.ts has not been loaded"),Xu}function dN(t){return t.views.size===0}function am(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),Yv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Yv(o,e,n,r));return s}}function L1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ku(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=im(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=Dc(new Gr(a,l,!1),new Gr(r,i,!1));return new rN(e,u)}return o}function fN(t,e,n,r,i,s){const o=L1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),aN(o,n),lN(o,n)}function hN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Yr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Gv(u,n,r)),Hv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Gv(l,n,r)),Hv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Yr(t)&&s.push(new(cN())(e._repo,e._path)),{removed:s,events:o}}function M1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wr(t,e){let n=null;for(const r of t.views.values())n=n||oN(r,e);return n}function F1(t,e){if(e._queryParams.loadsAllData())return Mc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function U1(t,e){return F1(t,e)!=null}function Yr(t){return Mc(t)!=null}function Mc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju;function pN(t){L(!Ju,"__referenceConstructor has already been defined"),Ju=t}function mN(){return L(Ju,"Reference.ts has not been loaded"),Ju}let gN=1;class Kv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=HT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function j1(t,e,n,r,i){return OT(t.pendingWriteTree_,e,n,r,i),i?no(t,new Ai(tm(),e,n)):[]}function vN(t,e,n,r){DT(t.pendingWriteTree_,e,n,r);const i=xe.fromObject(n);return no(t,new Bs(tm(),e,i))}function Ir(t,e,n=!1){const r=LT(t.pendingWriteTree_,e);if(MT(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(me(),!0):gt(r.children,o=>{s=s.set(new Ee(o),!0)}),no(t,new Gu(r.path,s,n))}else return[]}function Qa(t,e,n){return no(t,new Ai(nm(),e,n))}function yN(t,e,n){const r=xe.fromObject(n);return no(t,new Bs(nm(),e,r))}function _N(t,e){return no(t,new ba(nm(),e))}function wN(t,e,n){const r=um(t,n);if(r){const i=cm(r),s=i.path,o=i.queryId,a=bt(s,e),l=new ba(rm(o),a);return dm(t,s,l)}else return[]}function Zu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||U1(o,e))){const l=hN(o,e,n,r);dN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Yr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=CN(f);for(let v=0;v<m.length;++v){const _=m[v],x=_.query,y=B1(t,_);t.listenProvider_.startListening(Go(x),Ia(t,x),y.hashFn,y.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Go(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Fc(f));t.listenProvider_.stopListening(Go(f),m)}))}kN(t,u)}return a}function z1(t,e,n,r){const i=um(t,r);if(i!=null){const s=cm(i),o=s.path,a=s.queryId,l=bt(o,e),u=new Ai(rm(a),l,n);return dm(t,o,u)}else return[]}function EN(t,e,n,r){const i=um(t,r);if(i){const s=cm(i),o=s.path,a=s.queryId,l=bt(o,e),u=xe.fromObject(n),c=new Bs(rm(a),l,u);return dm(t,o,c)}else return[]}function _h(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=bt(f,i);s=s||Wr(m,v),o=o||Yr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Yr(a),s=s||Wr(a,me())):(a=new D1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=Wr(v,me());_&&(s=s.updateImmediateChild(m,_))}));const u=U1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Fc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=xN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=Lc(t.pendingWriteTree_,i);let d=fN(a,e,n,c,s,l);if(!u&&!o&&!r){const f=F1(a,e);d=d.concat(bN(t,e,f))}return d}function lm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),u=Wr(a,l);if(u)return u});return T1(i,e,s,n,!0)}function SN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=bt(u,n);r=r||Wr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Wr(i,me()):(i=new D1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Gr(r,!0,!1):null,a=Lc(t.pendingWriteTree_,e._path),l=L1(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return sN(l)}function no(t,e){return V1(e,t.syncPointTree_,null,Lc(t.pendingWriteTree_,me()))}function V1(t,e,n,r){if(ce(t.path))return W1(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=Wr(i,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=N1(r,o);s=s.concat(V1(a,l,u,c))}return i&&(s=s.concat(am(i,t,r,n))),s}}function W1(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=Wr(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=N1(r,o),c=t.operationForChild(o);c&&(s=s.concat(W1(c,a,l,u)))}),i&&(s=s.concat(am(i,t,r,n))),s}function B1(t,e){const n=e.query,r=Ia(t,n);return{hashFn:()=>(iN(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wN(t,n._path,r):_N(t,n._path);{const s=_I(i,n);return Zu(t,n,null,s)}}}}function Ia(t,e){const n=Fc(e);return t.queryToTagMap.get(n)}function Fc(t){return t._path.toString()+"$"+t._queryIdentifier}function um(t,e){return t.tagToQueryMap.get(e)}function cm(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function dm(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=Lc(t.pendingWriteTree_,e);return am(r,n,i,null)}function CN(t){return t.fold((e,n,r)=>{if(n&&Yr(n))return[Mc(n)];{let i=[];return n&&(i=M1(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Go(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mN())(t._repo,t._path):t}function kN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function xN(){return gN++}function bN(t,e,n){const r=e._path,i=Ia(t,e),s=B1(t,n),o=t.listenProvider_.startListening(Go(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!Yr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ce(u)&&c&&Yr(c))return[Mc(c).query];{let f=[];return c&&(f=f.concat(M1(c).map(m=>m.query))),gt(d,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Go(c),Ia(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fm(n)}node(){return this.node_}}class hm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new hm(this.syncTree_,n)}node(){return lm(this.syncTree_,this.path_)}}const IN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qv=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NN(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},NN=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$1=function(t,e,n,r){return pm(e,new hm(n,t),r)},H1=function(t,e,n){return pm(t,new fm(e),n)};function pm(t,e,n){const r=t.getPriority().val(),i=qv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=qv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ot(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ot(i))),o.forEachChild($e,(a,l)=>{const u=pm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function gm(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=se(n);for(;i!==null;){const s=js(r.node.children,i)||{children:{},childCount:0};r=new mm(i,r,s),n=be(n),i=se(n)}return r}function ro(t){return t.node.value}function G1(t,e){t.node.value=e,wh(t)}function Y1(t){return t.node.childCount>0}function PN(t){return ro(t)===void 0&&!Y1(t)}function Uc(t,e){gt(t.node.children,(n,r)=>{e(new mm(n,t,r))})}function K1(t,e,n,r){n&&!r&&e(t),Uc(t,i=>{K1(i,e,!0,r)}),n&&r&&e(t)}function RN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xa(t){return new Ee(t.parent===null?t.name:Xa(t.parent)+"/"+t.name)}function wh(t){t.parent!==null&&AN(t.parent,t.name,t)}function AN(t,e,n){const r=PN(n),i=Dn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=/[\[\].#$\/\u0000-\u001F\u007F]/,DN=/[\[\].#$\u0000-\u001F\u007F]/,Gd=10*1024*1024,vm=function(t){return typeof t=="string"&&t.length!==0&&!ON.test(t)},q1=function(t){return typeof t=="string"&&t.length!==0&&!DN.test(t)},LN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),q1(t)},MN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!$p(t)||t&&typeof t=="object"&&Dn(t,".sv")},FN=function(t,e,n,r){r&&e===void 0||jc(Rc(t,"value"),e,n)},jc=function(t,e,n){const r=n instanceof Ee?new ZI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ui(r));if(typeof e=="function")throw new Error(t+"contains a function "+ui(r)+" with contents = "+e.toString());if($p(e))throw new Error(t+"contains "+e.toString()+" "+ui(r));if(typeof e=="string"&&e.length>Gd/3&&Ac(e)>Gd)throw new Error(t+"contains a string greater than "+Gd+" utf8 bytes "+ui(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vm(o)))throw new Error(t+" contains an invalid key ("+o+") "+ui(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eT(r,o),jc(t,a,r),tT(r)}),i&&s)throw new Error(t+' contains ".value" child '+ui(r)+" in addition to actual children.")}},UN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Sa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!vm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&tn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},jN=function(t,e,n,r){if(r&&e===void 0)return;const i=Rc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const l=new Ee(o);if(jc(i,a,Be(n,l)),qp(l)===".priority"&&!MN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),UN(i,s)},Q1=function(t,e,n,r){if(!(r&&n===void 0)&&!q1(n))throw new Error(Rc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q1(t,e,n,r)},X1=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},VN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LN(n))throw new Error(Rc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Qp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function J1(t,e,n){zc(t,n),Z1(t,r=>Qp(r,e))}function an(t,e,n){zc(t,n),Z1(t,r=>tn(r,e)||tn(e,r))}function Z1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(BN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Si&&ft("event: "+n.toString()),to(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="repo_interrupt",HN=25;class GN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hu(),this.transactionQueueTree_=new mm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YN(t,e,n){if(t.stats_=Yp(t.repoInfo_),t.forceRestClient_||CI())t.server_=new $u(t.repoInfo_,(r,i,s,o)=>{Qv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(r,i,s,o)=>{Qv(t,r,i,s,o)},r=>{Xv(t,r)},r=>{qN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=TI(t.repoInfo_,()=>new IT(t.stats_,t.server_)),t.infoData_=new ST,t.infoSyncTree_=new Kv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Qa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ym(t,"connected",!1),t.serverSyncTree_=new Kv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);an(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function KN(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return IN({timestamp:KN(t)})}function Qv(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Uu(n,u=>tt(u));o=EN(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=z1(t.serverSyncTree_,s,l,i)}else if(r){const l=Uu(n,u=>tt(u));o=yN(t.serverSyncTree_,s,l)}else{const l=tt(n);o=Qa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Hs(t,s)),an(t.eventQueue_,a,o)}function Xv(t,e){ym(t,"connected",e),e===!1&&ZN(t)}function qN(t,e){gt(e,(n,r)=>{ym(t,n,r)})}function ym(t,e,n){const r=new Ee("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Qa(t.infoSyncTree_,r,i);an(t.eventQueue_,r,s)}function _m(t){return t.nextWriteId_++}function QN(t,e,n){const r=SN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=tt(i).withIndex(e._queryParams.getIndex());_h(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qa(t.serverSyncTree_,e._path,s);else{const a=Ia(t.serverSyncTree_,e);o=z1(t.serverSyncTree_,e._path,s,a)}return an(t.eventQueue_,e._path,o),Zu(t.serverSyncTree_,e,n,null,!0),s},i=>(Ja(t,"get for query "+nt(e)+" failed: "+i),Promise.reject(new Error(i))))}function XN(t,e,n,r,i){Ja(t,"set",{path:e.toString(),value:n,priority:r});const s=Vc(t),o=tt(n,r),a=lm(t.serverSyncTree_,e),l=H1(o,a,s),u=_m(t),c=j1(t.serverSyncTree_,e,l,u,!0);zc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||Tt("set at "+e+" failed: "+f);const _=Ir(t.serverSyncTree_,u,!v);an(t.eventQueue_,e,_),Eh(t,i,f,m)});const d=Em(t,e);Hs(t,d),an(t.eventQueue_,d,[])}function JN(t,e,n,r){Ja(t,"update",{path:e.toString(),value:n});let i=!0;const s=Vc(t),o={};if(gt(n,(a,l)=>{i=!1,o[a]=$1(Be(e,a),tt(l),t.serverSyncTree_,s)}),i)ft("update() called with empty data.  Don't do anything."),Eh(t,r,"ok",void 0);else{const a=_m(t),l=vN(t.serverSyncTree_,e,o,a);zc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Tt("update at "+e+" failed: "+u);const f=Ir(t.serverSyncTree_,a,!d),m=f.length>0?Hs(t,e):e;an(t.eventQueue_,m,f),Eh(t,r,u,c)}),gt(n,u=>{const c=Em(t,Be(e,u));Hs(t,c)}),an(t.eventQueue_,e,[])}}function ZN(t){Ja(t,"onDisconnectEvents");const e=Vc(t),n=Hu();hh(t.onDisconnect_,me(),(i,s)=>{const o=$1(i,s,t.serverSyncTree_,e);k1(n,i,o)});let r=[];hh(n,me(),(i,s)=>{r=r.concat(Qa(t.serverSyncTree_,i,s));const o=Em(t,i);Hs(t,o)}),t.onDisconnect_=Hu(),an(t.eventQueue_,me(),r)}function eP(t,e,n){let r;se(e._path)===".info"?r=_h(t.infoSyncTree_,e,n):r=_h(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function Jv(t,e,n){let r;se(e._path)===".info"?r=Zu(t.infoSyncTree_,e,n):r=Zu(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function tP(t){t.persistentConnection_&&t.persistentConnection_.interrupt($N)}function Ja(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function Eh(t,e,n,r){e&&to(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function eE(t,e,n){return lm(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function wm(t,e=t.transactionQueueTree_){if(e||Wc(t,e),ro(e)){const n=nE(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nP(t,Xa(e),n)}else Y1(e)&&Uc(e,n=>{wm(t,n)})}function nP(t,e,n){const r=n.map(u=>u.currentWriteId),i=eE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=bt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ja(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Ir(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Wc(t,gm(t.transactionQueueTree_,e)),wm(t,t.transactionQueueTree_),an(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)to(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Hs(t,e)}},o)}function Hs(t,e){const n=tE(t,e),r=Xa(n),i=nE(t,n);return rP(t,i,r),r}function rP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Ir(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HN)c=!0,d="maxretry",i=i.concat(Ir(t.serverSyncTree_,l.currentWriteId,!0));else{const f=eE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){jc("transaction failed: Data returned ",m,l.path);let v=tt(m);typeof m=="object"&&m!=null&&Dn(m,".priority")||(v=v.updatePriority(f.getPriority()));const x=l.currentWriteId,y=Vc(t),h=H1(v,f,y);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=_m(t),o.splice(o.indexOf(x),1),i=i.concat(j1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Ir(t.serverSyncTree_,x,!0))}else c=!0,d="nodata",i=i.concat(Ir(t.serverSyncTree_,l.currentWriteId,!0))}an(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Wc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)to(r[a]);wm(t,t.transactionQueueTree_)}function tE(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&ro(r)===void 0;)r=gm(r,n),e=be(e),n=se(e);return r}function nE(t,e){const n=[];return rE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rE(t,e,n){const r=ro(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Uc(e,i=>{rE(t,i,n)})}function Wc(t,e){const n=ro(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,G1(e,n.length>0?n:void 0)}Uc(e,r=>{Wc(t,r)})}function Em(t,e){const n=Xa(tE(t,e)),r=gm(t.transactionQueueTree_,e);return RN(r,i=>{Yd(t,i)}),Yd(t,r),K1(r,i=>{Yd(t,i)}),n}function Yd(t,e){const n=ro(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?G1(e,void 0):n.length=s+1,an(t.eventQueue_,Xa(e),i);for(let o=0;o<r.length;o++)to(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zv=function(t,e){const n=oP(t),r=n.namespace;n.domain==="firebase.com"&&rr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&rr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new a1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},oP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=iP(t.substring(c,d)));const f=sP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class sE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:qp(this._path)}get ref(){return new Ln(this._repo,this._path)}get _queryIdentifier(){const e=Uv(this._queryParams),n=Hp(e);return n==="{}"?"default":n}get _queryObject(){return Uv(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Sm))return!1;const n=this._repo===e._repo,r=Qp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XI(this._path)}}class Ln extends Sm{constructor(e,n){super(e,n,new em,!1)}get parent(){const e=g1(this._path);return e===null?null:new Ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=Ta(this.ref,e);return new Gs(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Gs(i,Ta(this.ref,r),$e)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ht(t,e){return t=Rt(t),t._checkNotDeleted("ref"),e!==void 0?Ta(t._root,e):t._root}function Ta(t,e){return t=Rt(t),se(t._path)===null?zN("child","path",e,!1):Q1("child","path",e,!1),new Ln(t._repo,Be(t._path,e))}function aP(t){return X1("remove",t._path),ds(t,null)}function ds(t,e){t=Rt(t),X1("set",t._path),FN("set",e,t._path,!1);const n=new Ha;return XN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Na(t,e){jN("update",e,t._path,!1);const n=new Ha;return JN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function lP(t){t=Rt(t);const e=new oE(()=>{}),n=new Bc(e);return QN(t._repo,t,n).then(r=>new Gs(r,new Ln(t._repo,t._path),t._queryParams.getIndex()))}class Bc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iE("value",this,new Gs(e.snapshotNode,new Ln(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}matches(e){return e instanceof Bc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=Ta(new Ln(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new iE(e.type,this,new Gs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function uP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Jv(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new oE(n,s||void 0),a=e==="value"?new Bc(o):new Cm(e,o);return eP(t._repo,t,a),()=>Jv(t._repo,t,a)}function Yo(t,e,n,r){return uP(t,"value",e,n,r)}function aE(t,...e){let n=Rt(t);for(const r of e)n=r._apply(n);return n}uN(Ln);pN(Ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="FIREBASE_DATABASE_EMULATOR_HOST",Sh={};let dP=!1;function fP(t,e,n,r){t.repoInfo_=new a1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function hP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||rr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[cP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Zv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new xs(xs.OWNER):new xI(t.name,t.options,e);VN("Invalid Firebase Database URL",o),ce(o.path)||rr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=mP(a,t,c,new kI(t.name,n));return new gP(d,t)}function pP(t,e){const n=Sh[e];(!n||n[t.key]!==t)&&rr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tP(t),delete n[t.key]}function mP(t,e,n,r){let i=Sh[e.name];i||(i={},Sh[e.name]=i);let s=i[t.toURLString()];return s&&rr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new GN(t,dP,n,r),i[t.toURLString()]=s,s}class gP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ln(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rr("Cannot call "+e+" on a deleted database.")}}function lE(t=$w(),e){const n=Bp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=zx("database");r&&vP(n,...r)}return n}function vP(t,e,n,r={}){t=Rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&rr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&rr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new xs(xs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Vx(r.mockUserToken,t.app.options.projectId);s=new xs(o)}fP(i,e,n,s)}/**
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
 */function yP(t){uI(eo),zs(new Ni("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),zr(Ev,Sv,t),zr(Ev,Sv,"esm2017")}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yP();function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=uE,cE=new Ga("auth","Firebase",uE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Vp("@firebase/auth");function wP(t,...e){ec.logLevel<=we.WARN&&ec.warn(`Auth (${eo}): ${t}`,...e)}function iu(t,...e){ec.logLevel<=we.ERROR&&ec.error(`Auth (${eo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw xm(t,...e)}function Rn(t,...e){return xm(t,...e)}function dE(t,e,n){const r=Object.assign(Object.assign({},_P()),{[e]:n});return new Ga("auth","Firebase",r).create(e,{appName:t.name})}function EP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),dE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cE.create(t,...e)}function ne(t,e,...n){if(!t)throw xm(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw iu(e),new Error(e)}function ir(t,e){t||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SP(){return ey()==="http:"||ey()==="https:"}function ey(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||Wx()||"connection"in navigator)?navigator.onLine:!0}function kP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=zp()||Uw()}get(){return CP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=new Za(3e4,6e4);function hE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function el(t,e,n,r,i={}){return pE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fE.fetch()(mE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xP),e);try{const i=new TP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ml(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dE(t,c,u);On(t,c)}}catch(i){if(i instanceof ei)throw i;On(t,"network-request-failed",{message:String(i)})}}async function IP(t,e,n,r,i={}){const s=await el(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,i):`${t.config.apiScheme}://${i}`}class TP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),bP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return el(t,"POST","/v1/accounts:delete",e)}async function PP(t,e){return el(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RP(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=Im(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ko(Kd(i.auth_time)),issuedAtTime:Ko(Kd(i.iat)),expirationTime:Ko(Kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kd(t){return Number(t)*1e3}function Im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return iu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fu(n);return i?JSON.parse(i):(iu("Failed to decode base64 JWT payload"),null)}catch(i){return iu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function AP(t){const e=Im(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ei&&OP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pa(t,PP(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FP(s.providerUserInfo):[],a=MP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LP(t){const e=Rt(t);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FP(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){const n=await pE(t,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await UP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ra;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ra,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pa(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pa(this,NP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:N,stsTokenManager:T}=n;ne(g&&T,e,"internal-error");const A=Ra.fromJSON(this.name,T);ne(typeof g=="string",e,"internal-error"),gr(d,e.name),gr(f,e.name),ne(typeof p=="boolean",e,"internal-error"),ne(typeof C=="boolean",e,"internal-error"),gr(m,e.name),gr(v,e.name),gr(_,e.name),gr(x,e.name),gr(y,e.name),gr(h,e.name);const V=new Ci({uid:g,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:C,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:A,createdAt:y,lastLoginAt:h});return N&&Array.isArray(N)&&(V.providerData=N.map(W=>Object.assign({},W))),x&&(V._redirectEventId=x),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ra;i.updateFromServerResponse(n);const s=new Ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function qn(t){ir(t instanceof Function,"Expected a class definition");let e=ty.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ty.set(t,e),e)}/**
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
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vE.type="NONE";const ny=vE;/**
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
 */function su(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=su(this.userKey,i.apiKey,s),this.fullPersistenceKey=su("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(qn(ny),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qn(ny);const o=su(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ci._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Is(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Is(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SE(e))return"Blackberry";if(CE(e))return"Webos";if(Tm(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(EE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yE(t=Ct()){return/firefox\//i.test(t)}function Tm(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(t=Ct()){return/crios\//i.test(t)}function wE(t=Ct()){return/iemobile/i.test(t)}function EE(t=Ct()){return/android/i.test(t)}function SE(t=Ct()){return/blackberry/i.test(t)}function CE(t=Ct()){return/webos/i.test(t)}function $c(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jP(t=Ct()){var e;return $c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zP(){return Bx()&&document.documentMode===10}function kE(t=Ct()){return $c(t)||EE(t)||CE(t)||SE(t)||/windows phone/i.test(t)||wE(t)}function VP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e=[]){let n;switch(t){case"Browser":n=ry(Ct());break;case"Worker":n=`${ry(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${r}`}/**
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
 */async function BP(t,e={}){return el(t,"GET","/v2/passwordPolicy",hE(t,e))}/**
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
 */const $P=6;class HP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$P,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BP(this),n=new HP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hc(t){return Rt(t)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jx(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YP().appendChild(r)})}function qP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){const n=Bp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ju(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function XP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JP(t,e,n){const r=Hc(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bE(e),{host:o,port:a}=ZP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eR()}function bE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZP(t){const e=bE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sy(o)}}}function sy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e){return IP(t,"POST","/v1/accounts:signInWithIdp",hE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="http://localhost";class Di extends IE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:tR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tl extends Nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends tl{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Di._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends tl{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends tl{constructor(){super("twitter.com")}static credential(e,n){return Di._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ci._fromIdTokenResponse(e,r,i),o=oy(r);return new Ys({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=oy(r);return new Ys({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends ei{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nc(e,n,r,i)}}function TE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(t,s,e,r):s})}async function nR(t,e,n=!1){const r=await Pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",r)}/**
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
 */async function rR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Pa(t,TE(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Im(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),Ys._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e,n=!1){const r="signIn",i=await TE(t,r,e),s=await Ys._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sR(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function oR(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function NE(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function aR(t){return Rt(t).signOut()}const rc="__sak";/**
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
 */class PE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(){const t=Ct();return Tm(t)||$c(t)}const uR=1e3,cR=10;class RE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lR()&&VP(),this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RE.type="LOCAL";const dR=RE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AE.type="SESSION";const OE=AE;/**
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
 */function fR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await fR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Pm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function pR(t){An().location.href=t}/**
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
 */function DE(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function mR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vR(){return DE()?self:null}/**
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
 */const LE="firebaseLocalStorageDb",yR=1,ic="firebaseLocalStorage",ME="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function _R(){const t=indexedDB.deleteDatabase(LE);return new nl(t).toPromise()}function kh(){const t=indexedDB.open(LE,yR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ic,{keyPath:ME})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ic)?e(r):(r.close(),await _R(),e(await kh()))})})}async function ay(t,e,n){const r=Yc(t,!0).put({[ME]:e,value:n});return new nl(r).toPromise()}async function wR(t,e){const n=Yc(t,!1).get(e),r=await new nl(n).toPromise();return r===void 0?null:r.value}function ly(t,e){const n=Yc(t,!0).delete(e);return new nl(n).toPromise()}const ER=800,SR=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(vR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await ay(e,rc,"1"),await ly(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yc(i,!1).getAll();return new nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const CR=FE;new Za(3e4,6e4);/**
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
 */function UE(t,e){return e?qn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rm extends IE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kR(t){return iR(t.auth,new Rm(t),t.bypassAuthState)}function xR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),rR(n,new Rm(t),t.bypassAuthState)}async function bR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),nR(n,new Rm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kR;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:On(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Za(2e3,1e4);async function TR(t,e,n){const r=Hc(t);EP(t,e,Nm);const i=UE(r,n);return new pi(r,"signInViaPopup",e,i).executeNotNull()}class pi extends jE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="pendingRedirect",ou=new Map;class PR extends jE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ou.get(this.auth._key());if(!e){try{const r=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ou.set(this.auth._key(),e)}return this.bypassAuthState||ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(t,e){const n=DR(e),r=OR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AR(t,e){ou.set(t._key(),e)}function OR(t){return qn(t._redirectPersistence)}function DR(t){return su(NR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){const r=Hc(t),i=UE(r,e),o=await new PR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=10*60*1e3;class FR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MR&&this.cachedEventUids.clear(),this.cachedEventUids.has(uy(e))}saveEventToCache(e){this.cachedEventUids.add(uy(e)),this.lastProcessedEventTime=Date.now()}}function uy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e={}){return el(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VR=/^https?/;async function WR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jR(t);for(const n of e)try{if(BR(n))return}catch{}On(t,"unauthorized-domain")}function BR(t){const e=Ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VR.test(n))return!1;if(zR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $R=new Za(3e4,6e4);function cy(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HR(t){return new Promise((e,n)=>{var r,i,s;function o(){cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cy(),n(Rn(t,"network-request-failed"))},timeout:$R.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const a=qP("iframefcb");return An()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},KP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw au=null,e})}let au=null;function GR(t){return au=au||HR(t),au}/**
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
 */const YR=new Za(5e3,15e3),KR="__/auth/iframe",qR="emulator/auth/iframe",QR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,qR):`https://${t.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:t.name,v:eo},i=XR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zs(r).slice(1)}`}async function ZR(t){const e=await GR(t),n=An().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:JR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=An().setTimeout(()=>{s(o)},YR.get());function l(){An().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const eA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tA=500,nA=600,rA="_blank",iA="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sA(t,e,n,r=tA,i=nA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=_E(u)?rA:n),yE(u)&&(e=e||iA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(jP(u)&&a!=="_self")return oA(e||"",a),new dy(null);const d=window.open(e||"",a,c);ne(d,t,"popup-blocked");try{d.focus()}catch{}return new dy(d)}function oA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aA="__/auth/handler",lA="emulator/auth/handler",uA=encodeURIComponent("fac");async function fy(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:eo,eventId:i};if(e instanceof Nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof tl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${uA}=${encodeURIComponent(l)}`:"";return`${cA(t)}?${Zs(a).slice(1)}${u}`}function cA({config:t}){return t.emulator?bm(t,lA):`https://${t.authDomain}/${aA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="webStorageSupport";class dA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OE,this._completeRedirectFn=LR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fy(e,n,r,Ch(),i);return sA(e,o,Pm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fy(e,n,r,Ch(),i);return pR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZR(e),r=new FR(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qd,{type:qd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qd];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||Tm()||$c()}}const fA=dA;var hy="@firebase/auth",py="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mA(t){zs(new Ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xE(t)},u=new GP(r,i,s,l);return XP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new Ni("auth-internal",e=>{const n=Hc(e.getProvider("auth").getImmediate());return(r=>new hA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(hy,py,pA(t)),zr(hy,py,"esm2017")}/**
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
 */const gA=5*60,vA=Fw("authIdTokenMaxAge")||gA;let my=null;const yA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vA)return;const i=n==null?void 0:n.token;my!==i&&(my=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _A(t=$w()){const e=Bp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QP(t,{popupRedirectResolver:fA,persistence:[CR,dR,OE]}),r=Fw("authTokenSyncURL");if(r){const s=yA(r);oR(n,s,()=>s(n.currentUser)),sR(n,o=>s(o))}const i=Lw("auth");return i&&JP(n,`http://${i}`),n}mA("Browser");const wA={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ"},VE=Bw(wA),EA=lE(VE),SA=ht(lE()),Et=EA,Li=_A(VE);/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const gy="popstate";function CA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Aa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fi(i)}return xA(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kA(){return Math.random().toString(36).substr(2,8)}function vy(t,e){return{usr:t.state,key:t.key,idx:e}}function Aa(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ur(e):e,{state:n,key:e&&e.key||r||kA()})}function Fi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ur(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ye.Pop;let x=c(),y=x==null?null:x-u;u=x,l&&l({action:a,location:_.location,delta:y})}function f(x,y){a=Ye.Push;let h=Aa(_.location,x,y);n&&n(h,x),u=c()+1;let g=vy(h,u),p=_.createHref(h);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function m(x,y){a=Ye.Replace;let h=Aa(_.location,x,y);n&&n(h,x),u=c();let g=vy(h,u),p=_.createHref(h);o.replaceState(g,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function v(x){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof x=="string"?x:Fi(x);return ue(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let _={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gy,d),l=x,()=>{i.removeEventListener(gy,d),l=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let y=v(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:m,go(x){return o.go(x)}};return _}var Ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ke||(Ke={}));const bA=new Set(["lazy","caseSensitive","path","id","index","children"]);function IA(t){return t.index===!0}function xh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),IA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=xh(i.children,e,o,r)),l}})}function fs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ur(e):e,i=io(r.pathname||"/",n);if(i==null)return null;let s=WE(t);NA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UA(s[a],VA(i));return o}function TA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function WE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),WE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:MA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of BE(s.path))i(s,o,l)}),e}function BE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PA=/^:\w+$/,RA=3,AA=2,OA=1,DA=10,LA=-2,yy=t=>t==="*";function MA(t,e){let n=t.split("/"),r=n.length;return n.some(yy)&&(r+=LA),e&&(r+=AA),n.filter(i=>!yy(i)).reduce((i,s)=>i+(PA.test(s)?RA:s===""?OA:DA),r)}function FA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=jA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:HA(Jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return s}function jA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=WA(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VA(t){try{return decodeURI(t)}catch(e){return Mi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function WA(t,e){try{return decodeURIComponent(t)}catch(n){return Mi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function io(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function BA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ur(t):t;return{pathname:n?n.startsWith("/")?n:$A(n,e):e,search:GA(r),hash:YA(i)}}function $A(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Am(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ur(t):(i=Fe({},t),ue(!i.pathname||!i.pathname.includes("?"),Qd("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Qd("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Qd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=BA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Jn=t=>t.join("/").replace(/\/\/+/g,"/"),HA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Om{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function $E(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const HE=["post","put","patch","delete"],KA=new Set(HE),qA=["get",...HE],QA=new Set(qA),XA=new Set([301,302,303,307,308]),JA=new Set([307,308]),Xd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ZA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ko={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},GE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eO=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),YE="remix-router-transitions";function tO(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=I=>({hasErrorBoundary:k(I)})}else i=eO;let s={},o=xh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,m=null,v=null,_=t.hydrationData!=null,x=fs(o,t.history.location,l),y=null;if(x==null){let k=qt(404,{pathname:t.history.location.pathname}),{matches:I,route:R}=by(o);x=I,y={[R.id]:k}}let h=!x.some(k=>k.route.lazy)&&(!x.some(k=>k.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:x,initialized:h,navigation:Xd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},C=Ye.Pop,N=!1,T,A=!1,V=new Map,W=null,ie=!1,J=!1,Z=[],ge=[],ae=new Map,He=0,Qe=-1,M=new Map,Y=new Set,q=new Map,pe=new Map,ve=new Map,Sn=!1;function Kt(){if(c=t.history.listen(k=>{let{action:I,location:R,delta:j}=k;if(Sn){Sn=!1;return}Mi(ve.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let te=ml({currentLocation:p.location,nextLocation:R,historyAction:I});if(te&&j!=null){Sn=!0,t.history.go(j*-1),hr(te,{state:"blocked",location:R,proceed(){hr(te,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),t.history.go(j)},reset(){let ee=new Map(p.blockers);ee.set(te,ko),ke({blockers:ee})}});return}return Fn(I,R)}),n){fO(e,V);let k=()=>hO(e,V);e.addEventListener("pagehide",k),W=()=>e.removeEventListener("pagehide",k)}return p.initialized||Fn(Ye.Pop,p.location),g}function ri(){c&&c(),W&&W(),d.clear(),T&&T.abort(),p.fetchers.forEach((k,I)=>D(I)),p.blockers.forEach((k,I)=>Gi(I))}function jt(k){return d.add(k),()=>d.delete(k)}function ke(k,I){p=Fe({},p,k),d.forEach(R=>R(p,{unstable_viewTransitionOpts:I}))}function Mn(k,I){var R,j;let te=p.actionData!=null&&p.navigation.formMethod!=null&&fn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((R=k.state)==null?void 0:R._isRedirect)!==!0,ee;I.actionData?Object.keys(I.actionData).length>0?ee=I.actionData:ee=null:te?ee=p.actionData:ee=null;let re=I.loaderData?xy(p.loaderData,I.loaderData,I.matches||[],I.errors):p.loaderData,Q=p.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((Me,fe)=>Q.set(fe,ko)));let K=N===!0||p.navigation.formMethod!=null&&fn(p.navigation.formMethod)&&((j=k.state)==null?void 0:j._isRedirect)!==!0;a&&(o=a,a=void 0),ie||C===Ye.Pop||(C===Ye.Push?t.history.push(k,k.state):C===Ye.Replace&&t.history.replace(k,k.state));let Se;if(C===Ye.Pop){let Me=V.get(p.location.pathname);Me&&Me.has(k.pathname)?Se={currentLocation:p.location,nextLocation:k}:V.has(k.pathname)&&(Se={currentLocation:k,nextLocation:p.location})}else if(A){let Me=V.get(p.location.pathname);Me?Me.add(k.pathname):(Me=new Set([k.pathname]),V.set(p.location.pathname,Me)),Se={currentLocation:p.location,nextLocation:k}}ke(Fe({},I,{actionData:ee,loaderData:re,historyAction:C,location:k,initialized:!0,navigation:Xd,revalidation:"idle",restoreScrollPosition:tg(k,I.matches||p.matches),preventScrollReset:K,blockers:Q}),Se),C=Ye.Pop,N=!1,A=!1,ie=!1,J=!1,Z=[],ge=[]}async function ao(k,I){if(typeof k=="number"){t.history.go(k);return}let R=bh(p.location,p.matches,l,u.v7_prependBasename,k,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:j,submission:te,error:ee}=_y(u.v7_normalizeFormMethod,!1,R,I),re=p.location,Q=Aa(p.location,j,I&&I.state);Q=Fe({},Q,t.history.encodeLocation(Q));let K=I&&I.replace!=null?I.replace:void 0,Se=Ye.Push;K===!0?Se=Ye.Replace:K===!1||te!=null&&fn(te.formMethod)&&te.formAction===p.location.pathname+p.location.search&&(Se=Ye.Replace);let Me=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,fe=ml({currentLocation:re,nextLocation:Q,historyAction:Se});if(fe){hr(fe,{state:"blocked",location:Q,proceed(){hr(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),ao(k,I)},reset(){let Ce=new Map(p.blockers);Ce.set(fe,ko),ke({blockers:Ce})}});return}return await Fn(Se,Q,{submission:te,pendingError:ee,preventScrollReset:Me,replace:I&&I.replace,enableViewTransition:I&&I.unstable_viewTransition})}function fl(){if(B(),ke({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Fn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Fn(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Fn(k,I,R){T&&T.abort(),T=null,C=k,ie=(R&&R.startUninterruptedRevalidation)===!0,qS(p.location,p.matches),N=(R&&R.preventScrollReset)===!0,A=(R&&R.enableViewTransition)===!0;let j=a||o,te=R&&R.overrideNavigation,ee=fs(j,I,l);if(!ee){let Ce=qt(404,{pathname:I.pathname}),{matches:Ge,route:ii}=by(j);Yi(),Mn(I,{matches:Ge,loaderData:{},errors:{[ii.id]:Ce}});return}if(p.initialized&&!J&&oO(p.location,I)&&!(R&&R.submission&&fn(R.submission.formMethod))){Mn(I,{matches:ee});return}T=new AbortController;let re=bo(t.history,I,T.signal,R&&R.submission),Q,K;if(R&&R.pendingError)K={[hs(ee).route.id]:R.pendingError};else if(R&&R.submission&&fn(R.submission.formMethod)){let Ce=await hl(re,I,R.submission,ee,{replace:R.replace});if(Ce.shortCircuited)return;Q=Ce.pendingActionData,K=Ce.pendingActionError,te=Jd(I,R.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:Se,loaderData:Me,errors:fe}=await pl(re,I,ee,te,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,Q,K);Se||(T=null,Mn(I,Fe({matches:ee},Q?{actionData:Q}:{},{loaderData:Me,errors:fe})))}async function hl(k,I,R,j,te){te===void 0&&(te={}),B();let ee=cO(I,R);ke({navigation:ee});let re,Q=Th(j,I);if(!Q.route.action&&!Q.route.lazy)re={type:Ke.error,error:qt(405,{method:k.method,pathname:I.pathname,routeId:Q.route.id})};else if(re=await xo("action",k,Q,j,s,i,l),k.signal.aborted)return{shortCircuited:!0};if(Ns(re)){let K;return te&&te.replace!=null?K=te.replace:K=re.location===p.location.pathname+p.location.search,await b(p,re,{submission:R,replace:K}),{shortCircuited:!0}}if(qo(re)){let K=hs(j,Q.route.id);return(te&&te.replace)!==!0&&(C=Ye.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:re.error}}}if(mi(re))throw qt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:re.data}}}async function pl(k,I,R,j,te,ee,re,Q,K){let Se=j||Jd(I,te),Me=te||ee||Ny(Se),fe=a||o,[Ce,Ge]=wy(t.history,p,R,Me,I,J,Z,ge,q,Y,fe,l,Q,K);if(Yi(_e=>!(R&&R.some(ln=>ln.route.id===_e))||Ce&&Ce.some(ln=>ln.route.id===_e)),Qe=++He,Ce.length===0&&Ge.length===0){let _e=Oe();return Mn(I,Fe({matches:R,loaderData:{},errors:K||null},Q?{actionData:Q}:{},_e?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!ie){Ge.forEach(ln=>{let pr=p.fetchers.get(ln.key),ud=Io(void 0,pr?pr.data:void 0);p.fetchers.set(ln.key,ud)});let _e=Q||p.actionData;ke(Fe({navigation:Se},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Ge.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ge.forEach(_e=>{ae.has(_e.key)&&$(_e.key),_e.controller&&ae.set(_e.key,_e.controller)});let ii=()=>Ge.forEach(_e=>$(_e.key));T&&T.signal.addEventListener("abort",ii);let{results:si,loaderResults:uo,fetcherResults:sd}=await P(p.matches,R,Ce,Ge,k);if(k.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",ii),Ge.forEach(_e=>ae.delete(_e.key));let jn=Iy(si);if(jn){if(jn.idx>=Ce.length){let _e=Ge[jn.idx-Ce.length].key;Y.add(_e)}return await b(p,jn.result,{replace:re}),{shortCircuited:!0}}let{loaderData:zn,errors:gl}=ky(p,R,Ce,uo,K,Ge,sd,pe);pe.forEach((_e,ln)=>{_e.subscribe(pr=>{(pr||_e.done)&&pe.delete(ln)})});let od=Oe(),ad=Un(Qe),ld=od||ad||Ge.length>0;return Fe({loaderData:zn,errors:gl},ld?{fetchers:new Map(p.fetchers)}:{})}function nd(k){return p.fetchers.get(k)||ZA}function Zm(k,I,R,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(k)&&$(k);let te=a||o,ee=bh(p.location,p.matches,l,u.v7_prependBasename,R,I,j==null?void 0:j.relative),re=fs(te,ee,l);if(!re){F(k,I,qt(404,{pathname:ee}));return}let{path:Q,submission:K,error:Se}=_y(u.v7_normalizeFormMethod,!0,ee,j);if(Se){F(k,I,Se);return}let Me=Th(re,Q);if(N=(j&&j.preventScrollReset)===!0,K&&fn(K.formMethod)){eg(k,I,Q,Me,re,K);return}q.set(k,{routeId:I,path:Q}),w(k,I,Q,Me,re,K)}async function eg(k,I,R,j,te,ee){if(B(),q.delete(k),!j.route.action&&!j.route.lazy){let Ze=qt(405,{method:ee.formMethod,pathname:R,routeId:I});F(k,I,Ze);return}let re=p.fetchers.get(k),Q=dO(ee,re);p.fetchers.set(k,Q),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=bo(t.history,R,K.signal,ee);ae.set(k,K);let Me=He,fe=await xo("action",Se,j,te,s,i,l);if(Se.signal.aborted){ae.get(k)===K&&ae.delete(k);return}if(Ns(fe))if(ae.delete(k),Qe>Me){let Ze=Xi(void 0);p.fetchers.set(k,Ze),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(k);let Ze=Io(ee);return p.fetchers.set(k,Ze),ke({fetchers:new Map(p.fetchers)}),b(p,fe,{fetcherSubmission:ee})}if(qo(fe)){F(k,I,fe.error);return}if(mi(fe))throw qt(400,{type:"defer-action"});let Ce=p.navigation.location||p.location,Ge=bo(t.history,Ce,K.signal),ii=a||o,si=p.navigation.state!=="idle"?fs(ii,p.navigation.location,l):p.matches;ue(si,"Didn't find any matches after fetcher action");let uo=++He;M.set(k,uo);let sd=Io(ee,fe.data);p.fetchers.set(k,sd);let[jn,zn]=wy(t.history,p,si,ee,Ce,J,Z,ge,q,Y,ii,l,{[j.route.id]:fe.data},void 0);zn.filter(Ze=>Ze.key!==k).forEach(Ze=>{let co=Ze.key,ng=p.fetchers.get(co),XS=Io(void 0,ng?ng.data:void 0);p.fetchers.set(co,XS),ae.has(co)&&$(co),Ze.controller&&ae.set(co,Ze.controller)}),ke({fetchers:new Map(p.fetchers)});let gl=()=>zn.forEach(Ze=>$(Ze.key));K.signal.addEventListener("abort",gl);let{results:od,loaderResults:ad,fetcherResults:ld}=await P(p.matches,si,jn,zn,Ge);if(K.signal.aborted)return;K.signal.removeEventListener("abort",gl),M.delete(k),ae.delete(k),zn.forEach(Ze=>ae.delete(Ze.key));let _e=Iy(od);if(_e){if(_e.idx>=jn.length){let Ze=zn[_e.idx-jn.length].key;Y.add(Ze)}return b(p,_e.result)}let{loaderData:ln,errors:pr}=ky(p,p.matches,jn,ad,void 0,zn,ld,pe);if(p.fetchers.has(k)){let Ze=Xi(fe.data);p.fetchers.set(k,Ze)}let ud=Un(uo);p.navigation.state==="loading"&&uo>Qe?(ue(C,"Expected pending action"),T&&T.abort(),Mn(p.navigation.location,{matches:si,loaderData:ln,errors:pr,fetchers:new Map(p.fetchers)})):(ke(Fe({errors:pr,loaderData:xy(p.loaderData,ln,si,pr)},ud||zn.length>0?{fetchers:new Map(p.fetchers)}:{})),J=!1)}async function w(k,I,R,j,te,ee){let re=p.fetchers.get(k),Q=Io(ee,re?re.data:void 0);p.fetchers.set(k,Q),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=bo(t.history,R,K.signal);ae.set(k,K);let Me=He,fe=await xo("loader",Se,j,te,s,i,l);if(mi(fe)&&(fe=await QE(fe,Se.signal,!0)||fe),ae.get(k)===K&&ae.delete(k),Se.signal.aborted)return;if(Ns(fe))if(Qe>Me){let Ge=Xi(void 0);p.fetchers.set(k,Ge),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(k),await b(p,fe);return}if(qo(fe)){let Ge=hs(p.matches,I);p.fetchers.delete(k),ke({fetchers:new Map(p.fetchers),errors:{[Ge.route.id]:fe.error}});return}ue(!mi(fe),"Unhandled fetcher deferred data");let Ce=Xi(fe.data);p.fetchers.set(k,Ce),ke({fetchers:new Map(p.fetchers)})}async function b(k,I,R){let{submission:j,fetcherSubmission:te,replace:ee}=R===void 0?{}:R;I.revalidate&&(J=!0);let re=Aa(k.location,I.location,{_isRedirect:!0});if(ue(re,"Expected a location on the redirect navigation"),n){let Ce=!1;if(I.reloadDocument)Ce=!0;else if(GE.test(I.location)){const Ge=t.history.createURL(I.location);Ce=Ge.origin!==e.location.origin||io(Ge.pathname,l)==null}if(Ce){ee?e.location.replace(I.location):e.location.assign(I.location);return}}T=null;let Q=ee===!0?Ye.Replace:Ye.Push,{formMethod:K,formAction:Se,formEncType:Me}=k.navigation;!j&&!te&&K&&Se&&Me&&(j=Ny(k.navigation));let fe=j||te;if(JA.has(I.status)&&fe&&fn(fe.formMethod))await Fn(Q,re,{submission:Fe({},fe,{formAction:I.location}),preventScrollReset:N});else{let Ce=Jd(re,j);await Fn(Q,re,{overrideNavigation:Ce,fetcherSubmission:te,preventScrollReset:N})}}async function P(k,I,R,j,te){let ee=await Promise.all([...R.map(K=>xo("loader",te,K,I,s,i,l)),...j.map(K=>K.matches&&K.match&&K.controller?xo("loader",bo(t.history,K.path,K.controller.signal),K.match,K.matches,s,i,l):{type:Ke.error,error:qt(404,{pathname:K.path})})]),re=ee.slice(0,R.length),Q=ee.slice(R.length);return await Promise.all([Ty(k,R,re,re.map(()=>te.signal),!1,p.loaderData),Ty(k,j.map(K=>K.match),Q,j.map(K=>K.controller?K.controller.signal:null),!0)]),{results:ee,loaderResults:re,fetcherResults:Q}}function B(){J=!0,Z.push(...Yi()),q.forEach((k,I)=>{ae.has(I)&&(ge.push(I),$(I))})}function F(k,I,R){let j=hs(p.matches,I);D(k),ke({errors:{[j.route.id]:R},fetchers:new Map(p.fetchers)})}function D(k){let I=p.fetchers.get(k);ae.has(k)&&!(I&&I.state==="loading"&&M.has(k))&&$(k),q.delete(k),M.delete(k),Y.delete(k),p.fetchers.delete(k)}function $(k){let I=ae.get(k);ue(I,"Expected fetch controller: "+k),I.abort(),ae.delete(k)}function Te(k){for(let I of k){let R=nd(I),j=Xi(R.data);p.fetchers.set(I,j)}}function Oe(){let k=[],I=!1;for(let R of Y){let j=p.fetchers.get(R);ue(j,"Expected fetcher: "+R),j.state==="loading"&&(Y.delete(R),k.push(R),I=!0)}return Te(k),I}function Un(k){let I=[];for(let[R,j]of M)if(j<k){let te=p.fetchers.get(R);ue(te,"Expected fetcher: "+R),te.state==="loading"&&($(R),M.delete(R),I.push(R))}return Te(I),I.length>0}function rd(k,I){let R=p.blockers.get(k)||ko;return ve.get(k)!==I&&ve.set(k,I),R}function Gi(k){p.blockers.delete(k),ve.delete(k)}function hr(k,I){let R=p.blockers.get(k)||ko;ue(R.state==="unblocked"&&I.state==="blocked"||R.state==="blocked"&&I.state==="blocked"||R.state==="blocked"&&I.state==="proceeding"||R.state==="blocked"&&I.state==="unblocked"||R.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+I.state);let j=new Map(p.blockers);j.set(k,I),ke({blockers:j})}function ml(k){let{currentLocation:I,nextLocation:R,historyAction:j}=k;if(ve.size===0)return;ve.size>1&&Mi(!1,"A router only supports one blocker at a time");let te=Array.from(ve.entries()),[ee,re]=te[te.length-1],Q=p.blockers.get(ee);if(!(Q&&Q.state==="proceeding")&&re({currentLocation:I,nextLocation:R,historyAction:j}))return ee}function Yi(k){let I=[];return pe.forEach((R,j)=>{(!k||k(j))&&(R.cancel(),I.push(j),pe.delete(j))}),I}function id(k,I,R){if(f=k,v=I,m=R||null,!_&&p.navigation===Xd){_=!0;let j=tg(p.location,p.matches);j!=null&&ke({restoreScrollPosition:j})}return()=>{f=null,v=null,m=null}}function lo(k,I){return m&&m(k,I.map(j=>TA(j,p.loaderData)))||k.key}function qS(k,I){if(f&&v){let R=lo(k,I);f[R]=v()}}function tg(k,I){if(f){let R=lo(k,I),j=f[R];if(typeof j=="number")return j}return null}function QS(k){s={},a=xh(k,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},get window(){return e},initialize:Kt,subscribe:jt,enableScrollRestoration:id,navigate:ao,fetch:Zm,revalidate:fl,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:nd,deleteFetcher:D,dispose:ri,getBlocker:rd,deleteBlocker:Gi,_internalFetchControllers:ae,_internalActiveDeferreds:pe,_internalSetRoutes:QS},g}function nO(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function bh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Am(i||".",Kc(a).map(c=>c.pathnameBase),io(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Dm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Jn([n,u.pathname])),Fi(u)}function _y(t,e,n,r){if(!r||!nO(r))return{path:n};if(r.formMethod&&!uO(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=qE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!fn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,v)=>{let[_,x]=v;return""+m+_+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!fn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Ih(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Ih(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Cy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Cy(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(fn(c.formMethod))return{path:n,submission:c};let d=ur(n);return e&&d.search&&Dm(d.search)&&l.append("index",""),d.search="?"+l,{path:Fi(d),submission:c}}function rO(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function wy(t,e,n,r,i,s,o,a,l,u,c,d,f,m){let v=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),x=t.createURL(i),y=m?Object.keys(m)[0]:void 0,g=rO(n,y).filter((C,N)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(iO(e.loaderData,e.matches[N],C)||o.some(V=>V===C.route.id))return!0;let T=e.matches[N],A=C;return Ey(C,Fe({currentUrl:_,currentParams:T.params,nextUrl:x,nextParams:A.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===x.pathname+x.search||_.search!==x.search||KE(T,A)}))}),p=[];return l.forEach((C,N)=>{if(!n.some(ie=>ie.route.id===C.routeId))return;let T=fs(c,C.path,d);if(!T){p.push({key:N,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(N),V=Th(T,C.path),W=!1;u.has(N)?W=!1:a.includes(N)?W=!0:A&&A.state!=="idle"&&A.data===void 0?W=s:W=Ey(V,Fe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),W&&p.push({key:N,routeId:C.routeId,path:C.path,matches:T,match:V,controller:new AbortController})}),[g,p]}function iO(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function KE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ey(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Sy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Mi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!bA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function xo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=v=>{let _,x=new Promise((y,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),x])};try{let v=n.route[t];if(n.route.lazy)if(v){let _,x=await Promise.all([d(v).catch(y=>{_=y}),Sy(n.route,s,i)]);if(_)throw _;u=x[0]}else if(await Sy(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let _=new URL(e.url),x=_.pathname+_.search;throw qt(405,{method:e.method,pathname:x,routeId:n.route.id})}else return{type:Ke.data,data:void 0};else if(v)u=await d(v);else{let _=new URL(e.url),x=_.pathname+_.search;throw qt(404,{pathname:x})}ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ke.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(lO(u)){let v=u.status;if(XA.has(v)){let y=u.headers.get("Location");if(ue(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!GE.test(y))y=bh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,y);else if(!a.isStaticRequest){let h=new URL(e.url),g=y.startsWith("//")?new URL(h.protocol+y):new URL(y),p=io(g.pathname,o)!=null;g.origin===h.origin&&p&&(y=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",y),u;return{type:Ke.redirect,status:v,location:y,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ke.error?Ke.error:Ke.data,response:u};let _,x=u.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?_=await u.json():_=await u.text(),l===Ke.error?{type:l,error:new Om(v,u.statusText,_),headers:u.headers}:{type:Ke.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ke.error)return{type:l,error:u};if(aO(u)){var f,m;return{type:Ke.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ke.data,data:u}}function bo(t,e,n,r){let i=t.createURL(qE(e)).toString(),s={signal:n};if(r&&fn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Ih(r.formData):s.body=r.formData}return new Request(i,s)}function Ih(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Cy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function sO(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ue(!Ns(c),"Cannot handle redirect results in processLoaderData"),qo(c)){let m=hs(t,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[f]=void 0,l||(l=!0,a=$E(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else mi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function ky(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=sO(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(m&&m.signal.aborted))if(qo(v)){let _=hs(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Fe({},u,{[_.route.id]:v.error})),t.fetchers.delete(d)}else if(Ns(v))ue(!1,"Unhandled fetcher revalidation redirect");else if(mi(v))ue(!1,"Unhandled fetcher deferred data");else{let _=Xi(v.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function xy(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function hs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function by(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Om(t||500,o,new Error(a),!0)}function Iy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ns(n))return{result:n,idx:e}}}function qE(t){let e=typeof t=="string"?ur(t):t;return Fi(Fe({},e,{hash:""}))}function oO(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function mi(t){return t.type===Ke.deferred}function qo(t){return t.type===Ke.error}function Ns(t){return(t&&t.type)===Ke.redirect}function aO(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function lO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function uO(t){return QA.has(t.toLowerCase())}function fn(t){return KA.has(t.toLowerCase())}async function Ty(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!KE(u,l)&&(s&&s[l.route.id])!==void 0;if(mi(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await QE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function QE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ke.error,error:i}}return{type:Ke.data,data:t.deferredData.data}}}function Dm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Th(t,e){let n=typeof e=="string"?ur(e).search:e.search;if(t[t.length-1].route.index&&Dm(n||""))return t[t.length-1];let r=Kc(t);return r[r.length-1]}function Ny(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Jd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function cO(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Io(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function dO(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Xi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function fO(t,e){try{let n=t.sessionStorage.getItem(YE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function hO(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(YE,JSON.stringify(n))}catch(r){Mi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sc.apply(this,arguments)}const qc=S.createContext(null),XE=S.createContext(null),so=S.createContext(null),Qc=S.createContext(null),cr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),JE=S.createContext(null);function pO(t,e){let{relative:n}=e===void 0?{}:e;rl()||ue(!1);let{basename:r,navigator:i}=S.useContext(so),{hash:s,pathname:o,search:a}=eS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function rl(){return S.useContext(Qc)!=null}function Xc(){return rl()||ue(!1),S.useContext(Qc).location}function ZE(t){S.useContext(so).static||S.useLayoutEffect(t)}function Ut(){let{isDataRoute:t}=S.useContext(cr);return t?TO():mO()}function mO(){rl()||ue(!1);let t=S.useContext(qc),{basename:e,navigator:n}=S.useContext(so),{matches:r}=S.useContext(cr),{pathname:i}=Xc(),s=JSON.stringify(Kc(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return ZE(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Am(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Jn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const gO=S.createContext(null);function vO(t){let e=S.useContext(cr).outlet;return e&&S.createElement(gO.Provider,{value:t},e)}function $i(){let{matches:t}=S.useContext(cr),e=t[t.length-1];return e?e.params:{}}function eS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(cr),{pathname:i}=Xc(),s=JSON.stringify(Kc(r).map(o=>o.pathnameBase));return S.useMemo(()=>Am(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function yO(t,e,n){rl()||ue(!1);let{navigator:r}=S.useContext(so),{matches:i}=S.useContext(cr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Xc(),u;if(e){var c;let _=typeof e=="string"?ur(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ue(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=fs(t,{pathname:f}),v=CO(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Jn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Jn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?S.createElement(Qc.Provider,{value:{location:sc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ye.Pop}},v):v}function _O(){let t=IO(),e=$E(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const wO=S.createElement(_O,null);class EO extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(cr.Provider,{value:this.props.routeContext},S.createElement(JE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SO(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(cr.Provider,{value:e},r)}function CO(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||wO);let f=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=d:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(SO,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(EO,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var tS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tS||{}),oc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(oc||{});function kO(t){let e=S.useContext(qc);return e||ue(!1),e}function xO(t){let e=S.useContext(XE);return e||ue(!1),e}function bO(t){let e=S.useContext(cr);return e||ue(!1),e}function nS(t){let e=bO(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function IO(){var t;let e=S.useContext(JE),n=xO(oc.UseRouteError),r=nS(oc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function TO(){let{router:t}=kO(tS.UseNavigateStable),e=nS(oc.UseNavigateStable),n=S.useRef(!1);return ZE(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sc({fromRouteId:e},s)))},[t,e])}function rS(t){return vO(t.context)}function NO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1}=t;rl()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ur(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,v=S.useMemo(()=>{let _=io(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return v==null?null:S.createElement(so.Provider,{value:l},S.createElement(Qc.Provider,{children:n,value:v}))}new Promise(()=>{});function PO(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}function RO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function AO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function OO(t,e){return t.button===0&&(!e||e==="_self")&&!AO(t)}const DO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function LO(t,e){return tO({basename:e==null?void 0:e.basename,future:Oa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:CA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||MO(),routes:t,mapRouteProperties:PO,window:e==null?void 0:e.window}).initialize()}function MO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Oa({},e,{errors:FO(e.errors)})),e}function FO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Om(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const UO=S.createContext({isTransitioning:!1}),jO="startTransition",Py=pC[jO];function zO(t){Py?Py(t):t()}class VO{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function WO(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),[o,a]=S.useState(),[l,u]=S.useState({isTransitioning:!1}),[c,d]=S.useState(),[f,m]=S.useState(),[v,_]=S.useState(),{v7_startTransition:x}=r||{},y=S.useCallback(N=>{x?zO(N):N()},[x]),h=S.useCallback((N,T)=>{let{unstable_viewTransitionOpts:A}=T;!A||n.window==null||typeof n.window.document.startViewTransition!="function"?y(()=>s(N)):f&&c?(c.resolve(),f.skipTransition(),_({state:N,currentLocation:A.currentLocation,nextLocation:A.nextLocation})):(a(N),u({isTransitioning:!0,currentLocation:A.currentLocation,nextLocation:A.nextLocation}))},[y,f,c,n.window]);S.useLayoutEffect(()=>n.subscribe(h),[n,h]),S.useEffect(()=>{l.isTransitioning&&d(new VO)},[l.isTransitioning]),S.useEffect(()=>{if(c&&o&&n.window){let N=o,T=c.promise,A=n.window.document.startViewTransition(async()=>{y(()=>s(N)),await T});A.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(A)}},[y,o,c,n.window]),S.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),S.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),_(void 0))},[l.isTransitioning,v]);let g=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:N=>n.navigate(N),push:(N,T,A)=>n.navigate(N,{state:T,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(N,T,A)=>n.navigate(N,{replace:!0,state:T,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),p=n.basename||"/",C=S.useMemo(()=>({router:n,navigator:g,static:!1,basename:p}),[n,g,p]);return S.createElement(S.Fragment,null,S.createElement(qc.Provider,{value:C},S.createElement(XE.Provider,{value:i},S.createElement(UO.Provider,{value:l},S.createElement(NO,{basename:p,location:i.location,navigationType:i.historyAction,navigator:g},i.initialized?S.createElement(BO,{routes:n.routes,state:i}):e)))),null)}function BO(t){let{routes:e,state:n}=t;return yO(e,void 0,n)}const $O=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,GO=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=RO(e,DO),{basename:m}=S.useContext(so),v,_=!1;if(typeof u=="string"&&HO.test(u)&&(v=u,$O))try{let g=new URL(window.location.href),p=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=io(p.pathname,m);p.origin===g.origin&&C!=null?u=C+p.search+p.hash:_=!0}catch{}let x=pO(u,{relative:i}),y=YO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||y(g)}return S.createElement("a",Oa({},f,{href:v||x,onClick:_||s?r:h,ref:n,target:l}))});var Ry;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ry||(Ry={}));var Ay;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ay||(Ay={}));function YO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ut(),u=Xc(),c=eS(t,{relative:o});return S.useCallback(d=>{if(OO(d,n)){d.preventDefault();let f=r!==void 0?r:Fi(u)===Fi(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const KO="/assets/logo_nav-e0cc088f.svg";function nn({onClick:t,children:e,variant:n,type:r="button"}){const[i,s]=S.useState(null),[o,a]=S.useState("shadow-md"),l={cta:"bg-themePrimary text-themeWhite",base:"bg-themeWhite text-themePrimary border border-themeGray",outlined:"bg-themeWhite text-themePrimary",danger:"bg-themeDanger text-themeWhite"};S.useEffect(()=>{s(l[n])},[i]);function u(){a("shadow-sm"),setTimeout(()=>{a("shadow-md"),t&&t()},200)}return E.jsx("input",{type:r,onClick:()=>u(),value:e,className:`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-4 mb-4 cursor-pointer w-full ${i} ${o} hover:scale-105 transition-transform duration-200`})}function qO({isMenuVisible:t}){const[e,n]=S.useState("animate-menuIn"),[r,i]=S.useState("hidden"),s=Ut();function o(){aR(Li).then(()=>{s("/login")}).catch(a=>{console.log(a)})}return S.useEffect(()=>{t&&(i("visible"),n("animate-menuIn")),t||(n("animate-menuOut"),setTimeout(()=>{i("hidden")},400))},[t]),E.jsxs("aside",{className:`${e} ${r} absolute right-0 -top-4 w-full h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `,children:[E.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[E.jsx("br",{}),E.jsx("br",{}),E.jsx("br",{})]}),E.jsxs("div",{className:"text-themePrimary w-full p-6 flex flex-col items-end bg-themeWhite rounded-2xl shadow-md",children:[E.jsx("p",{children:"Account"}),E.jsx("p",{children:"text2"}),E.jsx(nn,{onClick:o,variant:"cta",children:"Log out"})]}),E.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[E.jsx("br",{}),E.jsx("br",{}),E.jsx("br",{})]})]})}const Qo={displayName:"Name",photoUrl:"https://picsum.photos/200",email:"default@default.com",ownerOfEvents:["Initial"],participateOfEvents:["Initial"],uid:"defaultUID"},Hi=S.createContext(Qo),QO="/assets/userIconDefault-0c6f2d29.jpg";function Da({myUser:t,size:e="small",onClick:n}){const[r,i]=S.useState(null),s=Ut(),o={small:"w-8",medium:"w-10",large:"w-12"};function a(){n&&n(),s(`/user/${t==null?void 0:t.uid}`)}return S.useEffect(()=>{i(o[e])},[r,e,t]),E.jsx("img",{onClick:a,className:`${r} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`,src:t!=null&&t.photoUrl?t==null?void 0:t.photoUrl:QO})}function XO({handleMenu:t}){const[e,n]=S.useState(!1),r=S.useContext(Hi);if(r===void 0)return null;function i(){t(),n(!0),setTimeout(()=>{n(!1)},300)}return E.jsx("div",{className:`${e?"animate-pulse":null} z-20 text-2xl grid place-items-center w-8 cursor-pointer`,onClick:i,children:E.jsx(Da,{myUser:r})})}function JO(){const[t,e]=S.useState(!1);function n(){e(!t)}return E.jsxs("nav",{className:"flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[E.jsx(GO,{to:"/",children:E.jsx("img",{src:KO,alt:"",className:"h-4"})}),E.jsx(XO,{handleMenu:n}),E.jsx(qO,{isMenuVisible:t})]})}function ZO(){return E.jsx("div",{className:"p-6 flex justify-center items-center bg-themePrimary text-themeWhite h-16 shadow-md rounded-2xl mb-4",children:"© Maciej Tomaszewski 2023"})}const lu={id:"defaultID",name:"defaultName",date:"25-01-2034",users:["defaultUID"],amount:77,whopaid:"defaultUID"},_t={id:"defaultID",name:"defaultName",owner:"defaultUID",date:"25-01-2034",users:["defaultUID"],payments:[lu]},ti=S.createContext([_t]),ni=S.createContext([_t]),il=S.createContext([Qo]);function e2({children:t}){const[e,n]=S.useState([_t]),[r,i]=S.useState([_t]),[s,o]=S.useState(Qo),[a,l]=S.useState([Qo]);async function u(m){await Yo(ht(Et,`/users/${m}`),v=>{if(v.exists()){const _={...v.val(),uid:m};o(_)}})}async function c(){const m=aE(ht(Et,"users/"));await Yo(m,v=>{if(v.exists()){const x=Object.entries(v.val()).map(y=>({...y[1],uid:y[0]}));l(x)}else l([Qo])})}async function d(m,v){await Yo(ht(Et,`/events/${m}`),_=>{if(_.exists()){let x=function(h,g){if(console.log(g),h[0]===_t)return[g];if(h[0]!==_t){const p=h.filter(C=>C.id===m?null:C);return console.log(p),[...p,g]}return[_t]};const y=_.val();y.id=m,y.users!==void 0?y.users=Object.keys(y.users):y.users=[],y.payments!==void 0?y.payments=Object.values(y.payments):y.payments=[],v==="participateEvent"&&i(h=>x(h,y)),v==="ownerEvent"&&n(h=>x(h,y))}})}async function f(m){m.participateOfEvents.forEach(async v=>{d(v,"participateEvent")}),m.ownerOfEvents.forEach(async v=>{console.log(v),d(v,"ownerEvent")})}return S.useEffect(()=>{Li.currentUser!=null&&(n([_t]),i([_t]),s.uid==="defaultUID"&&u(Li.currentUser.uid),s.uid!=="defaultUID"&&f(s),c())},[s]),E.jsx(ti.Provider,{value:e,children:E.jsx(ni.Provider,{value:r,children:E.jsx(Hi.Provider,{value:s,children:E.jsx(il.Provider,{value:a,children:E.jsx(E.Fragment,{children:t})})})})})}function t2(){return E.jsxs("main",{className:"text-themePrimary max-w-full w-full grid h-screenIOs grid-rows-AppTemplate pl-4 pr-4",children:[E.jsxs(e2,{children:[E.jsx(JO,{}),E.jsx("main",{className:"pt-6 pb-6 w-full",children:E.jsx(rS,{})})]}),E.jsx(ZO,{})]})}async function n2(t){return await lP(Ta(SA,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function r2({uid:t,displayName:e,email:n,photoURL:r}){await ds(ht(Et,`users/${t}`),{displayName:e,email:n,photoUrl:r,participateOfEvents:{0:"Initial"},ownerOfEvents:{0:"Initial"}}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var i2={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function Oy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oy(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ac(t){"@babel/helpers - typeof";return ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ac(t)}function s2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o2(t,e,n){return e&&Dy(t.prototype,e),n&&Dy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lm(t,e){return l2(t)||c2(t,e)||iS(t,e)||f2()}function sl(t){return a2(t)||u2(t)||iS(t)||d2()}function a2(t){if(Array.isArray(t))return Nh(t)}function l2(t){if(Array.isArray(t))return t}function u2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function c2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function iS(t,e){if(t){if(typeof t=="string")return Nh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nh(t,e)}}function Nh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ly=function(){},Mm={},sS={},oS=null,aS={mark:Ly,measure:Ly};try{typeof window<"u"&&(Mm=window),typeof document<"u"&&(sS=document),typeof MutationObserver<"u"&&(oS=MutationObserver),typeof performance<"u"&&(aS=performance)}catch{}var h2=Mm.navigator||{},My=h2.userAgent,Fy=My===void 0?"":My,Kr=Mm,Ae=sS,Uy=oS,Fl=aS;Kr.document;var dr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",lS=~Fy.indexOf("MSIE")||~Fy.indexOf("Trident/"),Ul,jl,zl,Vl,Wl,sr="___FONT_AWESOME___",Ph=16,uS="fa",cS="svg-inline--fa",Ui="data-fa-i2svg",Rh="data-fa-pseudo-element",p2="data-fa-pseudo-element-pending",Fm="data-prefix",Um="data-icon",jy="fontawesome-i2svg",m2="async",g2=["HTML","HEAD","STYLE","SCRIPT"],dS=function(){try{return!0}catch{return!1}}(),Pe="classic",We="sharp",jm=[Pe,We];function ol(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var La=ol((Ul={},it(Ul,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(Ul,We,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ul)),Ma=ol((jl={},it(jl,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(jl,We,{solid:"fass",regular:"fasr",light:"fasl"}),jl)),Fa=ol((zl={},it(zl,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(zl,We,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zl)),v2=ol((Vl={},it(Vl,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(Vl,We,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Vl)),y2=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,fS="fa-layers-text",_2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,w2=ol((Wl={},it(Wl,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(Wl,We,{900:"fass",400:"fasr",300:"fasl"}),Wl)),hS=[1,2,3,4,5,6,7,8,9,10],E2=hS.concat([11,12,13,14,15,16,17,18,19,20]),S2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ua=new Set;Object.keys(Ma[Pe]).map(Ua.add.bind(Ua));Object.keys(Ma[We]).map(Ua.add.bind(Ua));var C2=[].concat(jm,sl(Ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gi.GROUP,gi.SWAP_OPACITY,gi.PRIMARY,gi.SECONDARY]).concat(hS.map(function(t){return"".concat(t,"x")})).concat(E2.map(function(t){return"w-".concat(t)})),Xo=Kr.FontAwesomeConfig||{};function k2(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function x2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var b2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];b2.forEach(function(t){var e=Lm(t,2),n=e[0],r=e[1],i=x2(k2(n));i!=null&&(Xo[r]=i)})}var pS={styleDefault:"solid",familyDefault:"classic",cssPrefix:uS,replacementClass:cS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xo.familyPrefix&&(Xo.cssPrefix=Xo.familyPrefix);var Ks=U(U({},pS),Xo);Ks.autoReplaceSvg||(Ks.observeMutations=!1);var G={};Object.keys(pS).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Ks[t]=n,Jo.forEach(function(r){return r(G)})},get:function(){return Ks[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Ks.cssPrefix=e,Jo.forEach(function(n){return n(G)})},get:function(){return Ks.cssPrefix}});Kr.FontAwesomeConfig=G;var Jo=[];function I2(t){return Jo.push(t),function(){Jo.splice(Jo.indexOf(t),1)}}var vr=Ph,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T2(t){if(!(!t||!dr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var N2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ja(){for(var t=12,e="";t-- >0;)e+=N2[Math.random()*62|0];return e}function oo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zm(t){return t.classList?oo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function mS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(mS(t[n]),'" ')},"").trim()}function Jc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vm(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function R2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function A2(t){var e=t.transform,n=t.width,r=n===void 0?Ph:n,i=t.height,s=i===void 0?Ph:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&lS?l+="translate(".concat(e.x/vr-r/2,"em, ").concat(e.y/vr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/vr,"em), calc(-50% + ").concat(e.y/vr,"em)) "):l+="translate(".concat(e.x/vr,"em, ").concat(e.y/vr,"em) "),l+="scale(".concat(e.size/vr*(e.flipX?-1:1),", ").concat(e.size/vr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var O2=`:root, :host {
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
}`;function gS(){var t=uS,e=cS,n=G.cssPrefix,r=G.replacementClass,i=O2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var zy=!1;function Zd(){G.autoAddCss&&!zy&&(T2(gS()),zy=!0)}var D2={mixout:function(){return{dom:{css:gS,insertCss:Zd}}},hooks:function(){return{beforeDOMElementCreation:function(){Zd()},beforeI2svg:function(){Zd()}}}},or=Kr||{};or[sr]||(or[sr]={});or[sr].styles||(or[sr].styles={});or[sr].hooks||(or[sr].hooks={});or[sr].shims||(or[sr].shims=[]);var vn=or[sr],vS=[],L2=function t(){Ae.removeEventListener("DOMContentLoaded",t),lc=1,vS.map(function(e){return e()})},lc=!1;dr&&(lc=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),lc||Ae.addEventListener("DOMContentLoaded",L2));function M2(t){dr&&(lc?setTimeout(t,0):vS.push(t))}function al(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?mS(t):"<".concat(e," ").concat(P2(r),">").concat(s.map(al).join(""),"</").concat(e,">")}function Vy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var F2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ef=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?F2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function U2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ah(t){var e=U2(t);return e.length===1?e[0].toString(16):null}function j2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Wy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Oh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Wy(e);typeof vn.hooks.addPack=="function"&&!i?vn.hooks.addPack(t,Wy(e)):vn.styles[t]=U(U({},vn.styles[t]||{}),s),t==="fas"&&Oh("fa",e)}var Bl,$l,Hl,ps=vn.styles,z2=vn.shims,V2=(Bl={},it(Bl,Pe,Object.values(Fa[Pe])),it(Bl,We,Object.values(Fa[We])),Bl),Wm=null,yS={},_S={},wS={},ES={},SS={},W2=($l={},it($l,Pe,Object.keys(La[Pe])),it($l,We,Object.keys(La[We])),$l);function B2(t){return~C2.indexOf(t)}function $2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!B2(i)?i:null}var CS=function(){var e=function(s){return ef(ps,function(o,a,l){return o[l]=ef(a,s,{}),o},{})};yS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),_S=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),SS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ps||G.autoFetchSvg,r=ef(z2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});wS=r.names,ES=r.unicodes,Wm=Zc(G.styleDefault,{family:G.familyDefault})};I2(function(t){Wm=Zc(t.styleDefault,{family:G.familyDefault})});CS();function Bm(t,e){return(yS[t]||{})[e]}function H2(t,e){return(_S[t]||{})[e]}function vi(t,e){return(SS[t]||{})[e]}function kS(t){return wS[t]||{prefix:null,iconName:null}}function G2(t){var e=ES[t],n=Bm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qr(){return Wm}var $m=function(){return{prefix:null,iconName:null,rest:[]}};function Zc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,i=La[r][t],s=Ma[r][t]||Ma[r][i],o=t in vn.styles?t:null;return s||o||null}var By=(Hl={},it(Hl,Pe,Object.keys(Fa[Pe])),it(Hl,We,Object.keys(Fa[We])),Hl);function ed(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},it(e,Pe,"".concat(G.cssPrefix,"-").concat(Pe)),it(e,We,"".concat(G.cssPrefix,"-").concat(We)),e),o=null,a=Pe;(t.includes(s[Pe])||t.some(function(u){return By[Pe].includes(u)}))&&(a=Pe),(t.includes(s[We])||t.some(function(u){return By[We].includes(u)}))&&(a=We);var l=t.reduce(function(u,c){var d=$2(G.cssPrefix,c);if(ps[c]?(c=V2[a].includes(c)?v2[a][c]:c,o=c,u.prefix=c):W2[a].indexOf(c)>-1?(o=c,u.prefix=Zc(c,{family:a})):d?u.iconName=d:c!==G.replacementClass&&c!==s[Pe]&&c!==s[We]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?kS(u.iconName):{},m=vi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ps.far&&ps.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},$m());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===We&&(ps.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=vi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qr()||"fas"),l}var Y2=function(){function t(){s2(this,t),this.definitions={}}return o2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),o[a]),Oh(a,o[a]);var l=Fa[Pe][a];l&&Oh(l,o[a]),CS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),$y=[],ms={},Ps={},K2=Object.keys(Ps);function q2(t,e){var n=e.mixoutsTo;return $y=t,ms={},Object.keys(Ps).forEach(function(r){K2.indexOf(r)===-1&&delete Ps[r]}),$y.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ac(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ms[o]||(ms[o]=[]),ms[o].push(s[o])})}r.provides&&r.provides(Ps)}),n}function Dh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ms[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ji(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ms[t]||[];i.forEach(function(s){s.apply(null,n)})}function ar(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ps[t]?Ps[t].apply(null,e):void 0}function Lh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||qr();if(e)return e=vi(n,e)||e,Vy(xS.definitions,n,e)||Vy(vn.styles,n,e)}var xS=new Y2,Q2=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,ji("noAuto")},X2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(ji("beforeI2svg",e),ar("pseudoElements2svg",e),ar("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,M2(function(){Z2({autoReplaceSvgRoot:n}),ji("watch",e)})}},J2={icon:function(e){if(e===null)return null;if(ac(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:vi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Zc(e[0]);return{prefix:r,iconName:vi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(y2))){var i=ed(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||qr(),iconName:vi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=qr();return{prefix:s,iconName:vi(s,e)||e}}}},Yt={noAuto:Q2,config:G,dom:X2,parse:J2,library:xS,findIconDefinition:Lh,toHtml:al},Z2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(vn.styles).length>0||G.autoFetchSvg)&&dr&&G.autoReplaceSvg&&Yt.dom.i2svg({node:r})};function td(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return al(r)})}}),Object.defineProperty(t,"node",{get:function(){if(dr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function eD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Vm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Jc(U(U({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function tD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function Hm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,v=r.found?r:n,_=v.width,x=v.height,y=i==="fak",h=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),g={children:[],attributes:U(U({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(x)})},p=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/x*16*.0625,"em")}:{};m&&(g.attributes[Ui]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||ja())},children:[l]}),delete g.attributes.title);var C=U(U({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:U(U({},p),d.styles)}),N=r.found&&n.found?ar("generateAbstractMask",C)||{children:[],attributes:{}}:ar("generateAbstractIcon",C)||{children:[],attributes:{}},T=N.children,A=N.attributes;return C.children=T,C.attributes=A,a?tD(C):eD(C)}function Hy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ui]="");var c=U({},o.styles);Vm(i)&&(c.transform=A2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Jc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function nD(t){var e=t.content,n=t.title,r=t.extra,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Jc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var tf=vn.styles;function Mh(t){var e=t[0],n=t[1],r=t.slice(4),i=Lm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(gi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(gi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var rD={found:!1,width:512,height:512};function iD(t,e){!dS&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fh(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=qr()),new Promise(function(r,i){if(ar("missingIconAbstract"),n==="fa"){var s=kS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&tf[e]&&tf[e][t]){var o=tf[e][t];return r(Mh(o))}iD(t,e),r(U(U({},rD),{},{icon:G.showMissingIcons&&t?ar("missingIconAbstract")||{}:{}}))})}var Gy=function(){},Uh=G.measurePerformance&&Fl&&Fl.mark&&Fl.measure?Fl:{mark:Gy,measure:Gy},Oo='FA "6.4.2"',sD=function(e){return Uh.mark("".concat(Oo," ").concat(e," begins")),function(){return bS(e)}},bS=function(e){Uh.mark("".concat(Oo," ").concat(e," ends")),Uh.measure("".concat(Oo," ").concat(e),"".concat(Oo," ").concat(e," begins"),"".concat(Oo," ").concat(e," ends"))},Gm={begin:sD,end:bS},uu=function(){};function Yy(t){var e=t.getAttribute?t.getAttribute(Ui):null;return typeof e=="string"}function oD(t){var e=t.getAttribute?t.getAttribute(Fm):null,n=t.getAttribute?t.getAttribute(Um):null;return e&&n}function aD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function lD(){if(G.autoReplaceSvg===!0)return cu.replace;var t=cu[G.autoReplaceSvg];return t||cu.replace}function uD(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function cD(t){return Ae.createElement(t)}function IS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?uD:cD:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(IS(o,{ceFn:r}))}),i}function dD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var cu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(IS(i),n)}),n.getAttribute(Ui)===null&&G.keepOriginalSource){var r=Ae.createComment(dD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zm(n).indexOf(G.replacementClass))return cu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return al(a)}).join(`
`);n.setAttribute(Ui,""),n.innerHTML=o}};function Ky(t){t()}function TS(t,e){var n=typeof e=="function"?e:uu;if(t.length===0)n();else{var r=Ky;G.mutateApproach===m2&&(r=Kr.requestAnimationFrame||Ky),r(function(){var i=lD(),s=Gm.begin("mutate");t.map(i),s(),n()})}}var Ym=!1;function NS(){Ym=!0}function jh(){Ym=!1}var uc=null;function qy(t){if(Uy&&G.observeMutations){var e=t.treeCallback,n=e===void 0?uu:e,r=t.nodeCallback,i=r===void 0?uu:r,s=t.pseudoElementsCallback,o=s===void 0?uu:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;uc=new Uy(function(u){if(!Ym){var c=qr();oo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Yy(d.addedNodes[0])&&(G.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Yy(d.target)&&~S2.indexOf(d.attributeName))if(d.attributeName==="class"&&oD(d.target)){var f=ed(zm(d.target)),m=f.prefix,v=f.iconName;d.target.setAttribute(Fm,m||c),v&&d.target.setAttribute(Um,v)}else aD(d.target)&&i(d.target)})}}),dr&&uc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fD(){uc&&uc.disconnect()}function hD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function pD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ed(zm(t));return i.prefix||(i.prefix=qr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=H2(i.prefix,t.innerText)||Bm(i.prefix,Ah(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function mD(t){var e=oo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||ja()):(e["aria-hidden"]="true",e.focusable="false")),e}function gD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pD(t),r=n.iconName,i=n.prefix,s=n.rest,o=mD(t),a=Dh("parseNodeAttributes",{},t),l=e.styleParser?hD(t):[];return U({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var vD=vn.styles;function PS(t){var e=G.autoReplaceSvg==="nest"?Qy(t,{styleParser:!1}):Qy(t);return~e.extra.classes.indexOf(fS)?ar("generateLayersText",t,e):ar("generateSvgReplacementMutation",t,e)}var Qr=new Set;jm.map(function(t){Qr.add("fa-".concat(t))});Object.keys(La[Pe]).map(Qr.add.bind(Qr));Object.keys(La[We]).map(Qr.add.bind(Qr));Qr=sl(Qr);function Xy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(d){return n.add("".concat(jy,"-").concat(d))},i=function(d){return n.remove("".concat(jy,"-").concat(d))},s=G.autoFetchSvg?Qr:jm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(vD));s.includes("fa")||s.push("fa");var o=[".".concat(fS,":not([").concat(Ui,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Ui,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=oo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Gm.begin("onTree"),u=a.reduce(function(c,d){try{var f=PS(d);f&&c.push(f)}catch(m){dS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){TS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function yD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;PS(t).then(function(n){n&&TS([n],e)})}function _D(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Lh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lh(i||{})),t(r,U(U({},n),{},{mask:i}))}}var wD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?In:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,v=m===void 0?null:m,_=n.classes,x=_===void 0?[]:_,y=n.attributes,h=y===void 0?{}:y,g=n.styles,p=g===void 0?{}:g;if(e){var C=e.prefix,N=e.iconName,T=e.icon;return td(U({type:"icon"},e),function(){return ji("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?h["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(v||ja()):(h["aria-hidden"]="true",h.focusable="false")),Hm({icons:{main:Mh(T),mask:l?Mh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:U(U({},In),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:h,styles:p,classes:x}})})}},ED={mixout:function(){return{icon:_D(wD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xy,n.nodeCallback=yD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return Xy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,v){Promise.all([Fh(i,a),c.iconName?Fh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var x=Lm(_,2),y=x[0],h=x[1];m([n,Hm({icons:{main:y,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Jc(a);l.length>0&&(i.style=l);var u;return Vm(o)&&(u=ar("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},SD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return td({type:"layer"},function(){ji("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(sl(s)).join(" ")},children:o}]})}}}},CD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return td({type:"counter",content:n},function(){return ji("beforeDOMElementCreation",{content:n,params:r}),nD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(sl(a))}})})}}}},kD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?In:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return td({type:"text",content:n},function(){return ji("beforeDOMElementCreation",{content:n,params:r}),Hy({content:n,transform:U(U({},In),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(G.cssPrefix,"-layers-text")].concat(sl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(lS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},xD=new RegExp('"',"ug"),Jy=[1105920,1112319];function bD(t){var e=t.replace(xD,""),n=j2(e,0),r=n>=Jy[0]&&n<=Jy[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ah(i?e[0]:e),isSecondary:r||i}}function Zy(t,e){var n="".concat(p2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=oo(t.children),o=s.filter(function(T){return T.getAttribute(Rh)===e})[0],a=Kr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(_2),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?We:Pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ma[f][l[2].toLowerCase()]:w2[f][u],v=bD(d),_=v.value,x=v.isSecondary,y=l[0].startsWith("FontAwesome"),h=Bm(m,_),g=h;if(y){var p=G2(_);p.iconName&&p.prefix&&(h=p.iconName,m=p.prefix)}if(h&&!x&&(!o||o.getAttribute(Fm)!==m||o.getAttribute(Um)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=gD(),N=C.extra;N.attributes[Rh]=e,Fh(h,m).then(function(T){var A=Hm(U(U({},C),{},{icons:{main:T,mask:$m()},prefix:m,iconName:g,extra:N,watchable:!0})),V=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=A.map(function(W){return al(W)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ID(t){return Promise.all([Zy(t,"::before"),Zy(t,"::after")])}function TD(t){return t.parentNode!==document.head&&!~g2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function e_(t){if(dr)return new Promise(function(e,n){var r=oo(t.querySelectorAll("*")).filter(TD).map(ID),i=Gm.begin("searchPseudoElements");NS(),Promise.all(r).then(function(){i(),jh(),e()}).catch(function(){i(),jh(),n()})})}var ND={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=e_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;G.searchPseudoElements&&e_(i)}}},t_=!1,PD={mixout:function(){return{dom:{unwatch:function(){NS(),t_=!0}}}},hooks:function(){return{bootstrap:function(){qy(Dh("mutationObserverCallbacks",{}))},noAuto:function(){fD()},watch:function(n){var r=n.observeMutationsRoot;t_?jh():qy(Dh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},n_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},RD={mixout:function(){return{parse:{transform:function(n){return n_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=n_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:U({},m.outer),children:[{tag:"g",attributes:U({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:U(U({},r.icon.attributes),m.path)}]}]}}}},nf={x:0,y:0,width:"100%",height:"100%"};function r_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function AD(t){return t.tag==="g"?t.children:[t]}var OD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ed(i.split(" ").map(function(o){return o.trim()})):$m();return s.prefix||(s.prefix=qr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=R2({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:U(U({},nf),{},{fill:"white"})},_=c.children?{children:c.children.map(r_)}:{},x={tag:"g",attributes:U({},m.inner),children:[r_(U({tag:c.tag,attributes:U(U({},c.attributes),m.path)},_))]},y={tag:"g",attributes:U({},m.outer),children:[x]},h="mask-".concat(a||ja()),g="clip-".concat(a||ja()),p={tag:"mask",attributes:U(U({},nf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:AD(f)},p]};return r.push(C,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},nf)}),{children:r,attributes:i}}}},DD={provides:function(e){var n=!1;Kr.matchMedia&&(n=Kr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:U(U({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=U(U({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:U(U({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:U(U({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},LD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},MD=[D2,ED,SD,CD,kD,ND,PD,RD,OD,DD,LD];q2(MD,{mixoutsTo:Yt});Yt.noAuto;Yt.config;Yt.library;Yt.dom;var zh=Yt.parse;Yt.findIconDefinition;Yt.toHtml;var FD=Yt.icon;Yt.layer;Yt.text;Yt.counter;var RS={exports:{}},UD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jD=UD,zD=jD;function AS(){}function OS(){}OS.resetWarningCache=AS;var VD=function(){function t(r,i,s,o,a,l){if(l!==zD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:OS,resetWarningCache:AS};return n.PropTypes=n,n};RS.exports=VD();var WD=RS.exports;const le=g_(WD);function i_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Tr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i_(Object(n),!0).forEach(function(r){gs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cc(t){"@babel/helpers - typeof";return cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cc(t)}function gs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $D(t,e){if(t==null)return{};var n=BD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vh(t){return HD(t)||GD(t)||YD(t)||KD()}function HD(t){if(Array.isArray(t))return Wh(t)}function GD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YD(t,e){if(t){if(typeof t=="string")return Wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wh(t,e)}}function Wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function KD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,v=t.border,_=t.listItem,x=t.flip,y=t.size,h=t.rotation,g=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":v,"fa-li":_,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},gs(e,"fa-".concat(y),typeof y<"u"&&y!==null),gs(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),gs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),gs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(C){return p[C]?C:null}).filter(function(C){return C})}function QD(t){return t=t-0,t===t}function DS(t){return QD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var XD=["style"];function JD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ZD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=DS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[JD(i)]=s:e[i]=s,e},{})}function LS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return LS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=ZD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[DS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=$D(n,XD);return i.attrs.style=Tr(Tr({},i.attrs.style),o),t.apply(void 0,[e.tag,Tr(Tr({},i.attrs),a)].concat(Vh(r)))}var MS=!1;try{MS=!0}catch{}function eL(){if(!MS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function s_(t){if(t&&cc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zh.icon)return zh.icon(t);if(t===null)return null;if(t&&cc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function rf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?gs({},t,e):{}}var ll=Zt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=s_(n),c=rf("classes",[].concat(Vh(qD(t)),Vh(s.split(" ")))),d=rf("transform",typeof t.transform=="string"?zh.transform(t.transform):t.transform),f=rf("mask",s_(r)),m=FD(u,Tr(Tr(Tr(Tr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return eL("Could not find icon",u),null;var v=m.abstract,_={ref:e};return Object.keys(t).forEach(function(x){ll.defaultProps.hasOwnProperty(x)||(_[x]=t[x])}),tL(v[0],_)});ll.displayName="FontAwesomeIcon";ll.propTypes={beat:le.bool,border:le.bool,beatFade:le.bool,bounce:le.bool,className:le.string,fade:le.bool,flash:le.bool,mask:le.oneOfType([le.object,le.array,le.string]),maskId:le.string,fixedWidth:le.bool,inverse:le.bool,flip:le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:le.oneOfType([le.object,le.array,le.string]),listItem:le.bool,pull:le.oneOf(["right","left"]),pulse:le.bool,rotation:le.oneOf([0,90,180,270]),shake:le.bool,size:le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:le.bool,spinPulse:le.bool,spinReverse:le.bool,symbol:le.oneOfType([le.bool,le.string]),title:le.string,titleId:le.string,transform:le.oneOfType([le.string,le.object]),swapOpacity:le.bool};ll.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var tL=LS.bind(null,Zt.createElement);function ul({size:t}){const[e,n]=S.useState("text-2xl");return S.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),E.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:E.jsx(ll,{icon:i2,spin:!0})})}function nL(){const t=Ut(),[e,n]=S.useState(!1);return S.useEffect(function(){NE(Li,async r=>{if(r){console.log("AUTH: Logged");const i=await n2(r);i&&n(i),i||await r2(r)}else t("/login")})},[]),e?E.jsx(t2,{}):E.jsx("div",{className:"h-screen",children:E.jsx(ul,{size:"big"})})}function rL(){const t=Ut();S.useEffect(()=>{NE(Li,n=>{t(n?"/":"/login")})},[]);function e(){const n=new bn;TR(Li,n).then(r=>{const i=bn.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return E.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:E.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",E.jsx("br",{}),E.jsx(nn,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function iL({event:t}){const e=Ut(),n=()=>{e(`/event/${t.id}`)};return E.jsxs("div",{onClick:n,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-105 transition-transform duration-200",children:[E.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:t.date}),E.jsxs("div",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function o_({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(e===void 0)return E.jsx(ul,{size:"small"});if(e)return e.map(o=>E.jsx(iL,{event:o},o.id))},i=Ut();function s(){i("/event/create")}return E.jsxs("div",{className:"w-full",children:[E.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?E.jsx(nn,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function sL(){const t=S.useContext(ti),e=S.useContext(ni);return S.useEffect(()=>{},[]),E.jsxs("div",{className:"h-full w-full",children:[E.jsx(o_,{buttonAddEvent:!0,title:"Your events",events:t}),E.jsx("br",{}),E.jsx(o_,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var cl=t=>t.type==="checkbox",vs=t=>t instanceof Date,xt=t=>t==null;const FS=t=>typeof t=="object";var st=t=>!xt(t)&&!Array.isArray(t)&&FS(t)&&!vs(t),oL=t=>st(t)&&t.target?cl(t.target)?t.target.checked:t.target.value:t,aL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,lL=(t,e)=>t.has(aL(e)),uL=t=>{const e=t.constructor&&t.constructor.prototype;return st(e)&&e.hasOwnProperty("isPrototypeOf")},Km=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Wn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Km&&(t instanceof Blob||t instanceof FileList))&&(n||st(t)))if(e=n?[]:{},!n&&!uL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Wn(t[r]));else return t;return e}var dl=t=>Array.isArray(t)?t.filter(Boolean):[],Xe=t=>t===void 0,H=(t,e,n)=>{if(!e||!st(t))return n;const r=dl(e.split(/[,[\].]+?/)).reduce((i,s)=>xt(i)?i:i[s],t);return Xe(r)||r===t?Xe(t[e])?n:t[e]:r},yi=t=>typeof t=="boolean";const a_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},mn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Vn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var cL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==mn.all&&(e._proxyFormState[o]=!r||mn.all),n&&(n[o]=!0),t[o]}});return i},Qt=t=>st(t)&&!Object.keys(t).length,dL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Qt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||mn.all))},sf=t=>Array.isArray(t)?t:[t];function fL(t){const e=Zt.useRef(t);e.current=t,Zt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Tn=t=>typeof t=="string",hL=(t,e,n,r,i)=>Tn(t)?(r&&e.watch.add(t),H(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),H(n,s))):(r&&(e.watchAll=!0),n),qm=t=>/^\w*$/.test(t),US=t=>dl(t.replace(/["|']|\]/g,"").split(/\.|\[/));function De(t,e,n){let r=-1;const i=qm(e)?[e]:US(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=st(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var pL=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Bh=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=H(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else st(o)&&Bh(o,e)}}};var l_=t=>({isOnSubmit:!t||t===mn.onSubmit,isOnBlur:t===mn.onBlur,isOnChange:t===mn.onChange,isOnAll:t===mn.all,isOnTouch:t===mn.onTouched}),u_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),mL=(t,e,n)=>{const r=dl(H(t,n));return De(r,"root",e[n]),De(t,n,r),t},Qm=t=>t.type==="file",Nr=t=>typeof t=="function",dc=t=>{if(!Km)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},du=t=>Tn(t),Xm=t=>t.type==="radio",fc=t=>t instanceof RegExp;const c_={value:!1,isValid:!1},d_={value:!0,isValid:!0};var jS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Xe(t[0].attributes.value)?Xe(t[0].value)||t[0].value===""?d_:{value:t[0].value,isValid:!0}:d_:c_}return c_};const f_={isValid:!1,value:null};var zS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,f_):f_;function h_(t,e,n="validate"){if(du(t)||Array.isArray(t)&&t.every(du)||yi(t)&&!t)return{type:n,message:du(t)?t:"",ref:e}}var Qi=t=>st(t)&&!fc(t)?t:{value:t,message:""},p_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:m,name:v,valueAsNumber:_,mount:x,disabled:y}=t._f,h=H(e,v);if(!x||y)return{};const g=o?o[0]:s,p=J=>{r&&g.reportValidity&&(g.setCustomValidity(yi(J)?"":J||""),g.reportValidity())},C={},N=Xm(s),T=cl(s),A=N||T,V=(_||Qm(s))&&Xe(s.value)&&Xe(h)||dc(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,W=pL.bind(null,v,n,C),ie=(J,Z,ge,ae=Vn.maxLength,He=Vn.minLength)=>{const Qe=J?Z:ge;C[v]={type:J?ae:He,message:Qe,ref:s,...W(J?ae:He,Qe)}};if(i?!Array.isArray(h)||!h.length:a&&(!A&&(V||xt(h))||yi(h)&&!h||T&&!jS(o).isValid||N&&!zS(o).isValid)){const{value:J,message:Z}=du(a)?{value:!!a,message:a}:Qi(a);if(J&&(C[v]={type:Vn.required,message:Z,ref:g,...W(Vn.required,Z)},!n))return p(Z),C}if(!V&&(!xt(c)||!xt(d))){let J,Z;const ge=Qi(d),ae=Qi(c);if(!xt(h)&&!isNaN(h)){const He=s.valueAsNumber||h&&+h;xt(ge.value)||(J=He>ge.value),xt(ae.value)||(Z=He<ae.value)}else{const He=s.valueAsDate||new Date(h),Qe=q=>new Date(new Date().toDateString()+" "+q),M=s.type=="time",Y=s.type=="week";Tn(ge.value)&&h&&(J=M?Qe(h)>Qe(ge.value):Y?h>ge.value:He>new Date(ge.value)),Tn(ae.value)&&h&&(Z=M?Qe(h)<Qe(ae.value):Y?h<ae.value:He<new Date(ae.value))}if((J||Z)&&(ie(!!J,ge.message,ae.message,Vn.max,Vn.min),!n))return p(C[v].message),C}if((l||u)&&!V&&(Tn(h)||i&&Array.isArray(h))){const J=Qi(l),Z=Qi(u),ge=!xt(J.value)&&h.length>+J.value,ae=!xt(Z.value)&&h.length<+Z.value;if((ge||ae)&&(ie(ge,J.message,Z.message),!n))return p(C[v].message),C}if(f&&!V&&Tn(h)){const{value:J,message:Z}=Qi(f);if(fc(J)&&!h.match(J)&&(C[v]={type:Vn.pattern,message:Z,ref:s,...W(Vn.pattern,Z)},!n))return p(Z),C}if(m){if(Nr(m)){const J=await m(h,e),Z=h_(J,g);if(Z&&(C[v]={...Z,...W(Vn.validate,Z.message)},!n))return p(Z.message),C}else if(st(m)){let J={};for(const Z in m){if(!Qt(J)&&!n)break;const ge=h_(await m[Z](h,e),g,Z);ge&&(J={...ge,...W(Z,ge.message)},p(ge.message),n&&(C[v]=J))}if(!Qt(J)&&(C[v]={ref:g,...J},!n))return C}}return p(!0),C};function gL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Xe(t)?r++:t[e[r++]];return t}function vL(t){for(const e in t)if(t.hasOwnProperty(e)&&!Xe(t[e]))return!1;return!0}function ct(t,e){const n=Array.isArray(e)?e:qm(e)?[e]:US(e),r=n.length===1?t:gL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(st(r)&&Qt(r)||Array.isArray(r)&&vL(r))&&ct(t,n.slice(0,-1)),t}function of(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var hc=t=>xt(t)||!FS(t);function _i(t,e){if(hc(t)||hc(e))return t===e;if(vs(t)&&vs(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(vs(s)&&vs(o)||st(s)&&st(o)||Array.isArray(s)&&Array.isArray(o)?!_i(s,o):s!==o)return!1}}return!0}var VS=t=>t.type==="select-multiple",yL=t=>Xm(t)||cl(t),af=t=>dc(t)&&t.isConnected,WS=t=>{for(const e in t)if(Nr(t[e]))return!0;return!1};function pc(t,e={}){const n=Array.isArray(t);if(st(t)||n)for(const r in t)Array.isArray(t[r])||st(t[r])&&!WS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},pc(t[r],e[r])):xt(t[r])||(e[r]=!0);return e}function BS(t,e,n){const r=Array.isArray(t);if(st(t)||r)for(const i in t)Array.isArray(t[i])||st(t[i])&&!WS(t[i])?Xe(e)||hc(n[i])?n[i]=Array.isArray(t[i])?pc(t[i],[]):{...pc(t[i])}:BS(t[i],xt(e)?{}:e[i],n[i]):n[i]=!_i(t[i],e[i]);return n}var lf=(t,e)=>BS(t,e,pc(e)),$S=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Xe(t)?t:e?t===""?NaN:t&&+t:n&&Tn(t)?new Date(t):r?r(t):t;function uf(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Qm(e)?e.files:Xm(e)?zS(t.refs).value:VS(e)?[...e.selectedOptions].map(({value:n})=>n):cl(e)?jS(t.refs).value:$S(Xe(e.value)?t.ref.value:e.value,t)}var _L=(t,e,n,r)=>{const i={};for(const s of t){const o=H(e,s);o&&De(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},To=t=>Xe(t)?t:fc(t)?t.source:st(t)?fc(t.value)?t.value.source:t.value:t,wL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function m_(t,e,n){const r=H(t,n);if(r||qm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=H(e,s),a=H(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var EL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,SL=(t,e)=>!dl(H(t,e)).length&&ct(t,e);const CL={mode:mn.onSubmit,reValidateMode:mn.onChange,shouldFocusError:!0};function kL(t={},e){let n={...CL,...t},r={submitCount:0,isDirty:!1,isLoading:Nr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=st(n.defaultValues)||st(n.values)?Wn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Wn(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:of(),array:of(),state:of()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,v=l_(n.mode),_=l_(n.reValidateMode),x=n.criteriaMode===mn.all,y=w=>b=>{clearTimeout(c),c=setTimeout(w,b)},h=async w=>{if(d.isValid||w){const b=n.resolver?Qt((await V()).errors):await ie(i,!0);b!==r.isValid&&f.state.next({isValid:b})}},g=w=>d.isValidating&&f.state.next({isValidating:w}),p=(w,b=[],P,B,F=!0,D=!0)=>{if(B&&P){if(a.action=!0,D&&Array.isArray(H(i,w))){const $=P(H(i,w),B.argA,B.argB);F&&De(i,w,$)}if(D&&Array.isArray(H(r.errors,w))){const $=P(H(r.errors,w),B.argA,B.argB);F&&De(r.errors,w,$),SL(r.errors,w)}if(d.touchedFields&&D&&Array.isArray(H(r.touchedFields,w))){const $=P(H(r.touchedFields,w),B.argA,B.argB);F&&De(r.touchedFields,w,$)}d.dirtyFields&&(r.dirtyFields=lf(s,o)),f.state.next({name:w,isDirty:Z(w,b),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else De(o,w,b)},C=(w,b)=>{De(r.errors,w,b),f.state.next({errors:r.errors})},N=(w,b,P,B)=>{const F=H(i,w);if(F){const D=H(o,w,Xe(P)?H(s,w):P);Xe(D)||B&&B.defaultChecked||b?De(o,w,b?D:uf(F._f)):He(w,D),a.mount&&h()}},T=(w,b,P,B,F)=>{let D=!1,$=!1;const Te={name:w};if(!P||B){d.isDirty&&($=r.isDirty,r.isDirty=Te.isDirty=Z(),D=$!==Te.isDirty);const Oe=_i(H(s,w),b);$=H(r.dirtyFields,w),Oe?ct(r.dirtyFields,w):De(r.dirtyFields,w,!0),Te.dirtyFields=r.dirtyFields,D=D||d.dirtyFields&&$!==!Oe}if(P){const Oe=H(r.touchedFields,w);Oe||(De(r.touchedFields,w,P),Te.touchedFields=r.touchedFields,D=D||d.touchedFields&&Oe!==P)}return D&&F&&f.state.next(Te),D?Te:{}},A=(w,b,P,B)=>{const F=H(r.errors,w),D=d.isValid&&yi(b)&&r.isValid!==b;if(t.delayError&&P?(u=y(()=>C(w,P)),u(t.delayError)):(clearTimeout(c),u=null,P?De(r.errors,w,P):ct(r.errors,w)),(P?!_i(F,P):F)||!Qt(B)||D){const $={...B,...D&&yi(b)?{isValid:b}:{},errors:r.errors,name:w};r={...r,...$},f.state.next($)}g(!1)},V=async w=>n.resolver(o,n.context,_L(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),W=async w=>{const{errors:b}=await V(w);if(w)for(const P of w){const B=H(b,P);B?De(r.errors,P,B):ct(r.errors,P)}else r.errors=b;return b},ie=async(w,b,P={valid:!0})=>{for(const B in w){const F=w[B];if(F){const{_f:D,...$}=F;if(D){const Te=l.array.has(D.name),Oe=await p_(F,o,x,n.shouldUseNativeValidation&&!b,Te);if(Oe[D.name]&&(P.valid=!1,b))break;!b&&(H(Oe,D.name)?Te?mL(r.errors,Oe,D.name):De(r.errors,D.name,Oe[D.name]):ct(r.errors,D.name))}$&&await ie($,b,P)}}return P.valid},J=()=>{for(const w of l.unMount){const b=H(i,w);b&&(b._f.refs?b._f.refs.every(P=>!af(P)):!af(b._f.ref))&&jt(w)}l.unMount=new Set},Z=(w,b)=>(w&&b&&De(o,w,b),!_i(pe(),s)),ge=(w,b,P)=>hL(w,l,{...a.mount?o:Xe(b)?s:Tn(w)?{[w]:b}:b},P,b),ae=w=>dl(H(a.mount?o:s,w,t.shouldUnregister?H(s,w,[]):[])),He=(w,b,P={})=>{const B=H(i,w);let F=b;if(B){const D=B._f;D&&(!D.disabled&&De(o,w,$S(b,D)),F=dc(D.ref)&&xt(b)?"":b,VS(D.ref)?[...D.ref.options].forEach($=>$.selected=F.includes($.value)):D.refs?cl(D.ref)?D.refs.length>1?D.refs.forEach($=>(!$.defaultChecked||!$.disabled)&&($.checked=Array.isArray(F)?!!F.find(Te=>Te===$.value):F===$.value)):D.refs[0]&&(D.refs[0].checked=!!F):D.refs.forEach($=>$.checked=$.value===F):Qm(D.ref)?D.ref.value="":(D.ref.value=F,D.ref.type||f.values.next({name:w,values:{...o}})))}(P.shouldDirty||P.shouldTouch)&&T(w,F,P.shouldTouch,P.shouldDirty,!0),P.shouldValidate&&q(w)},Qe=(w,b,P)=>{for(const B in b){const F=b[B],D=`${w}.${B}`,$=H(i,D);(l.array.has(w)||!hc(F)||$&&!$._f)&&!vs(F)?Qe(D,F,P):He(D,F,P)}},M=(w,b,P={})=>{const B=H(i,w),F=l.array.has(w),D=Wn(b);De(o,w,D),F?(f.array.next({name:w,values:{...o}}),(d.isDirty||d.dirtyFields)&&P.shouldDirty&&f.state.next({name:w,dirtyFields:lf(s,o),isDirty:Z(w,D)})):B&&!B._f&&!xt(D)?Qe(w,D,P):He(w,D,P),u_(w,l)&&f.state.next({...r}),f.values.next({name:w,values:{...o}}),!a.mount&&e()},Y=async w=>{const b=w.target;let P=b.name,B=!0;const F=H(i,P),D=()=>b.type?uf(F._f):oL(w);if(F){let $,Te;const Oe=D(),Un=w.type===a_.BLUR||w.type===a_.FOCUS_OUT,rd=!wL(F._f)&&!n.resolver&&!H(r.errors,P)&&!F._f.deps||EL(Un,H(r.touchedFields,P),r.isSubmitted,_,v),Gi=u_(P,l,Un);De(o,P,Oe),Un?(F._f.onBlur&&F._f.onBlur(w),u&&u(0)):F._f.onChange&&F._f.onChange(w);const hr=T(P,Oe,Un,!1),ml=!Qt(hr)||Gi;if(!Un&&f.values.next({name:P,type:w.type,values:{...o}}),rd)return d.isValid&&h(),ml&&f.state.next({name:P,...Gi?{}:hr});if(!Un&&Gi&&f.state.next({...r}),g(!0),n.resolver){const{errors:Yi}=await V([P]),id=m_(r.errors,i,P),lo=m_(Yi,i,id.name||P);$=lo.error,P=lo.name,Te=Qt(Yi)}else $=(await p_(F,o,x,n.shouldUseNativeValidation))[P],B=Number.isNaN(Oe)||Oe===H(o,P,Oe),B&&($?Te=!1:d.isValid&&(Te=await ie(i,!0)));B&&(F._f.deps&&q(F._f.deps),A(P,Te,$,hr))}},q=async(w,b={})=>{let P,B;const F=sf(w);if(g(!0),n.resolver){const D=await W(Xe(w)?w:F);P=Qt(D),B=w?!F.some($=>H(D,$)):P}else w?(B=(await Promise.all(F.map(async D=>{const $=H(i,D);return await ie($&&$._f?{[D]:$}:$)}))).every(Boolean),!(!B&&!r.isValid)&&h()):B=P=await ie(i);return f.state.next({...!Tn(w)||d.isValid&&P!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:P}:{},errors:r.errors,isValidating:!1}),b.shouldFocus&&!B&&Bh(i,D=>D&&H(r.errors,D),w?F:l.mount),B},pe=w=>{const b={...s,...a.mount?o:{}};return Xe(w)?b:Tn(w)?H(b,w):w.map(P=>H(b,P))},ve=(w,b)=>({invalid:!!H((b||r).errors,w),isDirty:!!H((b||r).dirtyFields,w),isTouched:!!H((b||r).touchedFields,w),error:H((b||r).errors,w)}),Sn=w=>{w&&sf(w).forEach(b=>ct(r.errors,b)),f.state.next({errors:w?r.errors:{}})},Kt=(w,b,P)=>{const B=(H(i,w,{_f:{}})._f||{}).ref;De(r.errors,w,{...b,ref:B}),f.state.next({name:w,errors:r.errors,isValid:!1}),P&&P.shouldFocus&&B&&B.focus&&B.focus()},ri=(w,b)=>Nr(w)?f.values.subscribe({next:P=>w(ge(void 0,b),P)}):ge(w,b,!0),jt=(w,b={})=>{for(const P of w?sf(w):l.mount)l.mount.delete(P),l.array.delete(P),b.keepValue||(ct(i,P),ct(o,P)),!b.keepError&&ct(r.errors,P),!b.keepDirty&&ct(r.dirtyFields,P),!b.keepTouched&&ct(r.touchedFields,P),!n.shouldUnregister&&!b.keepDefaultValue&&ct(s,P);f.values.next({values:{...o}}),f.state.next({...r,...b.keepDirty?{isDirty:Z()}:{}}),!b.keepIsValid&&h()},ke=({disabled:w,name:b,field:P,fields:B})=>{if(yi(w)){const F=w?void 0:H(o,b,uf(P?P._f:H(B,b)._f));De(o,b,F),T(b,F,!1,!1,!0)}},Mn=(w,b={})=>{let P=H(i,w);const B=yi(b.disabled);return De(i,w,{...P||{},_f:{...P&&P._f?P._f:{ref:{name:w}},name:w,mount:!0,...b}}),l.mount.add(w),P?ke({field:P,disabled:b.disabled,name:w}):N(w,!0,b.value),{...B?{disabled:b.disabled}:{},...n.progressive?{required:!!b.required,min:To(b.min),max:To(b.max),minLength:To(b.minLength),maxLength:To(b.maxLength),pattern:To(b.pattern)}:{},name:w,onChange:Y,onBlur:Y,ref:F=>{if(F){Mn(w,b),P=H(i,w);const D=Xe(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,$=yL(D),Te=P._f.refs||[];if($?Te.find(Oe=>Oe===D):D===P._f.ref)return;De(i,w,{_f:{...P._f,...$?{refs:[...Te.filter(af),D,...Array.isArray(H(s,w))?[{}]:[]],ref:{type:D.type,name:w}}:{ref:D}}}),N(w,!1,void 0,D)}else P=H(i,w,{}),P._f&&(P._f.mount=!1),(n.shouldUnregister||b.shouldUnregister)&&!(lL(l.array,w)&&a.action)&&l.unMount.add(w)}}},ao=()=>n.shouldFocusError&&Bh(i,w=>w&&H(r.errors,w),l.mount),fl=(w,b)=>async P=>{P&&(P.preventDefault&&P.preventDefault(),P.persist&&P.persist());let B=Wn(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:F,values:D}=await V();r.errors=F,B=D}else await ie(i);ct(r.errors,"root"),Qt(r.errors)?(f.state.next({errors:{}}),await w(B,P)):(b&&await b({...r.errors},P),ao(),setTimeout(ao)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Fn=(w,b={})=>{H(i,w)&&(Xe(b.defaultValue)?M(w,H(s,w)):(M(w,b.defaultValue),De(s,w,b.defaultValue)),b.keepTouched||ct(r.touchedFields,w),b.keepDirty||(ct(r.dirtyFields,w),r.isDirty=b.defaultValue?Z(w,H(s,w)):Z()),b.keepError||(ct(r.errors,w),d.isValid&&h()),f.state.next({...r}))},hl=(w,b={})=>{const P=w?Wn(w):s,B=Wn(P),F=w&&!Qt(w)?B:s;if(b.keepDefaultValues||(s=P),!b.keepValues){if(b.keepDirtyValues||m)for(const D of l.mount)H(r.dirtyFields,D)?De(F,D,H(o,D)):M(D,H(F,D));else{if(Km&&Xe(w))for(const D of l.mount){const $=H(i,D);if($&&$._f){const Te=Array.isArray($._f.refs)?$._f.refs[0]:$._f.ref;if(dc(Te)){const Oe=Te.closest("form");if(Oe){Oe.reset();break}}}}i={}}o=t.shouldUnregister?b.keepDefaultValues?Wn(s):{}:Wn(F),f.array.next({values:{...F}}),f.values.next({values:{...F}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!b.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:b.keepSubmitCount?r.submitCount:0,isDirty:b.keepDirty?r.isDirty:!!(b.keepDefaultValues&&!_i(w,s)),isSubmitted:b.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:b.keepDirtyValues?r.dirtyFields:b.keepDefaultValues&&w?lf(s,w):{},touchedFields:b.keepTouched?r.touchedFields:{},errors:b.keepErrors?r.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},pl=(w,b)=>hl(Nr(w)?w(o):w,b);return{control:{register:Mn,unregister:jt,getFieldState:ve,handleSubmit:fl,setError:Kt,_executeSchema:V,_getWatch:ge,_getDirty:Z,_updateValid:h,_removeUnmounted:J,_updateFieldArray:p,_updateDisabledField:ke,_getFieldArray:ae,_reset:hl,_resetDefaultValues:()=>Nr(n.defaultValues)&&n.defaultValues().then(w=>{pl(w,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:q,register:Mn,handleSubmit:fl,watch:ri,setValue:M,getValues:pe,reset:pl,resetField:Fn,clearErrors:Sn,unregister:jt,setError:Kt,setFocus:(w,b={})=>{const P=H(i,w),B=P&&P._f;if(B){const F=B.refs?B.refs[0]:B.ref;F.focus&&(F.focus(),b.shouldSelect&&F.select())}},getFieldState:ve}}function Jm(t={}){const e=Zt.useRef(),n=Zt.useRef(),[r,i]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:Nr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Nr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...kL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,fL({subject:s._subjects.state,next:o=>{dL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Zt.useEffect(()=>{t.values&&!_i(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Zt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=cL(r,s),e.current}const Rs=({type:t,placeholder:e,defaultValue:n,register:r,variant:i="base"})=>{const[s,o]=S.useState(null),a={base:"border-b-2 border-themeGray rounded-none",outline:"border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2",danger:"border-themeDanger rounded-2xl h-12 p-2 border-2 mt-2 mb-2"};return S.useEffect(()=>{o(a[i])},[s,i]),E.jsx("input",{...r,defaultValue:n,type:t,placeholder:e,className:`${s} w-full transition-transform duration-200 `})};function HS({usersInput:t,resetField:e,setSelectedUsers:n,selectedUsers:r,variant:i}){const s=S.useContext(il),o=S.useContext(Hi),[a,l]=S.useState(void 0);function u(f){if(f===void 0){l(void 0);return}if(f.length===0){l(void 0);return}if(f.length>0){const m=s==null?void 0:s.filter(v=>{if(r!==void 0&&r.filter(y=>y===v.uid).length!==0||v.uid===(o==null?void 0:o.uid))return null;const _=v.email.includes(f);if(_===!1)return null;if(_===!0)return!0});l(m)}}function c(f){e("usersInput"),n(m=>m?[...m,f.uid]:[f.uid])}function d(f){const m=r==null?void 0:r.filter(v=>v!==(f==null?void 0:f.uid));n(m)}return S.useEffect(()=>{u(t)},[t,r]),E.jsxs(E.Fragment,{children:[E.jsx("div",{children:r?E.jsx("div",{className:`${r.length===0?"hidden":"visible"} border-themePrimary border-2 rounded-2xl p-2 mb-2`,children:r.map(f=>{const m=s==null?void 0:s.filter(v=>v.uid===f)[0];return m===void 0?E.jsx(E.Fragment,{children:"Error"}):E.jsx("div",{className:"flex gap-2 items-center pt-1 pb-1 flex-col",children:E.jsxs("div",{className:"flex gap-2  pt-1 pb-1 w-full",children:[E.jsxs("div",{className:"flex w-full gap-2",children:[E.jsx(Da,{myUser:m,onClick:()=>d(m)}),E.jsxs("p",{className:"text-xs",children:[" ",m.email]})]}),E.jsx("div",{onClick:()=>d(m),className:"p-2 border-2 h-8 w-8 border-themePrimary rounded-full flex items-center justify-center cursor-pointer",children:E.jsx("div",{className:"w-4 h-[2px] bg-themeDanger"})})]})})})}):null}),E.jsx("div",{className:`${a?"h-16 opacity-100 p-2":"h-0 opacity-0 p-0"} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`,children:a!==void 0&&(a==null?void 0:a.length)>0?a.map(f=>E.jsxs("div",{onClick:()=>c(f),className:"flex gap-2 items-center p-1",children:[E.jsx(Da,{myUser:f}),E.jsxs("p",{className:"text-xs",children:[" ",f.email]})]})):E.jsx("div",{className:"p-1 text-center grid items-center h-full",children:"User not found"})})]})}let Vt="id";const fr=new Date;Vt+=fr.getFullYear();Vt+=fr.getMonth()+1;Vt+=fr.getDate();Vt+=fr.getMinutes();Vt+=fr.getSeconds();Vt+=fr.getMilliseconds();const GS=fr.getFullYear();let Zo=`${fr.getMonth()+1}`;Number(Zo)<10&&(Zo=`0${Zo}`);let ea=`${fr.getDate()}`;Number(ea)<10&&(ea=`0${ea}`);function YS({type:t,currentEvent:e}){const n=Ut(),r=S.useContext(il),i=S.useContext(Hi),[s,o]=S.useState(void 0),{register:a,handleSubmit:l,watch:u,formState:{errors:c},resetField:d,setValue:f}=Jm(),m=u("usersInput"),v=g=>{t==="create"&&_(g),t==="edit"&&x(g)},_=g=>{if(i===void 0){n("/login");return}let p={id:Vt,date:`${GS}-${Zo}-${ea}`,name:g.name,owner:i==null?void 0:i.uid,users:{}};s!==void 0&&s.length>0&&s.map(T=>{Object.defineProperty(p.users,T,{value:T,enumerable:!0}),y(T,Vt)}),ds(ht(Et,"events/"+Vt),p);const C=i==null?void 0:i.ownerOfEvents.length;let N={};Object.defineProperty(N,C,{value:Vt,enumerable:!0}),Na(ht(Et,`users/${i.uid}/ownerOfEvents`),N),n("/event/"+Vt)},x=g=>{if(e===void 0)return;let p={...e,name:g.name,users:{}};s!==void 0&&s.length>0&&s.map(T=>{Object.defineProperty(p.users,T,{value:T,enumerable:!0})}),ds(ht(Et,"events/"+e.id),p);const C=s==null?void 0:s.filter(T=>e.users.includes(T)?null:T);C==null||C.forEach(T=>{r==null||r.find(A=>{if(A.uid===T){let V=A.participateOfEvents;V.push(e.id);const W={};V.forEach((ie,J)=>{Object.defineProperty(W,J,{value:ie,enumerable:!0})}),ds(ht(Et,`users/${T}/participateOfEvents`),W)}})}),e.users.filter(T=>s!=null&&s.includes(T)?null:T).forEach(T=>{const A=r==null?void 0:r.find(ie=>ie.uid===T?ie:!1),V=A==null?void 0:A.participateOfEvents.filter(ie=>ie===e.id?null:ie),W={};V==null||V.forEach((ie,J)=>{Object.defineProperty(W,J,{value:ie,enumerable:!0})}),ds(ht(Et,`users/${T}/participateOfEvents`),W)}),n("/event/"+e.id)};function y(g,p){if(r===void 0)return;const N=r.filter(A=>A.uid===g)[0].participateOfEvents.length,T={};Object.defineProperty(T,N,{value:p,enumerable:!0}),console.log(T),Na(ht(Et,`users/${g}/participateOfEvents/`),T)}function h(){n(`/event/${e==null?void 0:e.id}/delete`)}return S.useEffect(()=>{t==="edit"&&e!==void 0&&(f("name",e.name),o([...e.users]))},[e]),E.jsxs("form",{onSubmit:l(v),className:"grid h-full grid-rows-EventFormTemplate",children:[E.jsxs("h1",{className:"mt-2 mb-2 font-bold text-xl",children:[t==="create"?"Create":null," ",t==="edit"?"Edit":null," Event"]}),E.jsxs("label",{children:[E.jsx(Rs,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Event name",variant:c.name?"danger":"outline"}),c.name&&E.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),E.jsxs("label",{children:[E.jsx(Rs,{type:"text",defaultValue:"",register:a("usersInput"),placeholder:"Add users",variant:"outline"}),E.jsx(HS,{usersInput:m,resetField:d,setSelectedUsers:o,selectedUsers:s})]}),E.jsxs("div",{className:"self-end flex gap-4",children:[E.jsx(nn,{variant:"outlined",type:"submit",children:"Submit"}),t==="edit"?E.jsx(nn,{variant:"danger",onClick:h,type:"button",children:"Delete event"}):null]})]})}function xL(){return E.jsx("div",{className:"h-full",children:E.jsx(YS,{type:"create"})})}function KS({children:t}){return E.jsx("div",{className:"w-full max-w-screen mt-4 mb-4 overflow-x-scroll p-2",children:E.jsxs("div",{className:"w-2 flex gap-2 ",children:[...t]})})}function ta({children:t,onClick:e}){return E.jsx("div",{onClick:e,className:"p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer",children:t})}function bL(){const t=$i(),e=Ut(),n=S.useContext(ti),r=S.useContext(ni),i=S.useContext(Hi),[s,o]=S.useState(void 0),[a,l]=S.useState(!1),[u,c]=S.useState([]),[d,f]=S.useState(void 0);function m(){if(i!==void 0){if(t.id===void 0){l("Event not Found");return}if(n){const g=v(n,t.id);g&&(o(g),f(i))}if(r){const g=v(r,t.id);g&&(o(g),_(g.owner))}}}function v(g,p){if(p===void 0)return!1;const C=g.filter(N=>N.id===p?N:null)[0];return C===void 0?!1:C}async function _(g){await Yo(ht(Et,`/users/${g}`),p=>{p.exists()&&f(p.val())})}function x(g){const p=aE(ht(Et,`users/${g}`));Yo(p,C=>{C.exists()&&c(N=>[...N,{...C.val(),uid:g}])})}function y(){s==null||s.users.map(g=>{x(g)}),console.log(u)}function h(){e(`/event/${t.id}/edit`)}return S.useEffect(()=>{Li.currentUser!==null&&(m(),s&&u.length==0&&y())},[s,n,r,u]),s===void 0&&!a?E.jsx(ul,{size:"big"}):a!==!1?(console.log(a),E.jsx("div",{children:a})):s?E.jsxs("div",{className:"h-full",children:[E.jsxs("div",{className:"flex justify-between items-center mb-6",children:[E.jsx("span",{className:"font-bold text-xl",children:s.name}),E.jsx(Da,{myUser:d,size:"medium"})]}),E.jsx("div",{className:"flex gap-2",children:u.map(g=>E.jsx(Da,{myUser:g,size:"medium"}))}),E.jsxs(KS,{children:[E.jsx(ta,{onClick:()=>{e(`/event/${t.id}/`)},children:"Payments"}),E.jsx(ta,{onClick:()=>{e(`/event/${t.id}/settlement`)},children:"Set"}),E.jsx(ta,{onClick:h,children:"Edit Event"}),E.jsx(E.Fragment,{})]}),E.jsx(rS,{})]}):E.jsx("div",{children:"Error not found"})}function IL(){return E.jsxs("div",{children:[E.jsx(nn,{variant:"cta",onClick:()=>{},children:"CTA"}),E.jsx(nn,{variant:"outlined",onClick:()=>{},children:"Outlined"}),E.jsx(nn,{variant:"base",onClick:()=>{},children:"Base"}),E.jsx(nn,{variant:"base",onClick:()=>{},children:"Base"}),E.jsx("div",{className:"bg-themePrimary",children:E.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[E.jsx("defs",{id:"SvgjsDefs2066"}),E.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:E.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",E.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]})}),E.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[E.jsx("defs",{id:"SvgjsDefs2066"}),E.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:E.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",E.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]}),E.jsxs(KS,{children:[E.jsx(ta,{children:"Pill"}),E.jsx(ta,{children:"Ale bang"})]})]})}function TL(){const[t,e]=S.useState(_t),n=S.useContext(ti),r=S.useContext(ni),i=$i(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),E.jsx("div",{className:"h-full",children:E.jsx(YS,{type:"edit",currentEvent:t})})}function NL({currentEvent:t}){const e=S.useContext(il),n=S.useContext(Hi),r=Ut(),{register:i,handleSubmit:s,formState:{errors:o}}=Jm(),a=u=>{if(t.id===u.eventName){const c=n.ownerOfEvents.indexOf(u.eventName);console.log(c);const d={};Object.defineProperty(d,c,{value:null,enumerable:!0}),Na(ht(Et,`users/${n.uid}/ownerOfEvents/`),d),t.users.forEach(f=>{l(f,t.id)}),aP(ht(Et,`events/${u.eventName}`)).then(()=>{r("/")})}};function l(u,c){if(e===void 0)return;const f=e.filter(v=>v.uid===u)[0].participateOfEvents.indexOf(c),m={};Object.defineProperty(m,f,{value:null,enumerable:!0}),Na(ht(Et,`users/${u}/participateOfEvents/`),m)}return E.jsxs("form",{onSubmit:s(a),className:"grid h-full grid-rows-EventFormTemplate",children:[E.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Delete Event"}),E.jsxs("p",{children:["Type event id to delete event ",E.jsx("span",{className:"text-themeDanger",children:t.id})]}),E.jsxs("label",{children:[E.jsx(Rs,{type:"text",defaultValue:"",register:i("eventName",{required:!0}),placeholder:"Event id",variant:o.eventName?"danger":"outline"}),o.eventName&&E.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),E.jsx(nn,{variant:"danger",type:"submit",children:"Submit"})]})}function PL(){const[t,e]=S.useState(_t),n=S.useContext(ti),r=S.useContext(ni),i=$i(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),E.jsx("div",{children:E.jsx(NL,{currentEvent:t})})}function RL({eventID:t,payment:e}){const n=Ut(),r=()=>{n(`/event/${t}/payment/${e.id}`)};return E.jsxs("div",{onClick:r,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-105 transition-transform duration-200",children:[E.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:e.date}),E.jsxs("div",{className:"font-bold text-lg",children:[" ",e.name]})]},"bang")}function AL({currentEvent:t}){console.log(t),console.log(_t),$i();const e=()=>{if(t.id===_t.id)return E.jsx(ul,{size:"small"});if(t.payments)return t.payments.map(n=>(console.log(n),E.jsx(RL,{eventID:t.id,payment:n})))};return S.useEffect(()=>{},[t]),E.jsx("div",{className:"w-full",children:e()})}function OL(){const t=Ut(),e=$i(),n=S.useContext(ti),r=S.useContext(ni),[i,s]=S.useState(_t),[o,a]=S.useState(!1);function l(){if(e.id===void 0){a("Event not Found");return}if(n){const c=u(n,e.id);c&&s(c)}if(r){const c=u(r,e.id);c&&s(c)}}function u(c,d){if(d===void 0)return!1;const f=c.filter(m=>m.id===d?m:null)[0];return f===void 0?!1:f}return S.useEffect(()=>{l(),console.log(i)},[n,r,i]),E.jsxs("div",{className:"h-auto",children:[E.jsx(nn,{variant:"cta",onClick:()=>t(`/event/${e.id}/payment/create`),children:"Add Payment"}),E.jsx(AL,{currentEvent:i}),o||null]})}function DL({currentEvent:t}){S.useContext(il);const e=S.useContext(Hi);Ut();const[n,r]=S.useState(void 0),{register:i,handleSubmit:s,watch:o,formState:{errors:a},resetField:l,setValue:u}=Jm(),c=o("usersInput"),d=f=>{console.log("clicked"),console.log(t);const m={date:`${GS}-${Zo}-${ea}`,id:Vt,amount:f.amount,name:f.name,users:{},whopaid:e.uid};n!==void 0&&n.length>0&&n.map(v=>{Object.defineProperty(m.users,v,{value:v,enumerable:!0})}),Na(ht(Et,`events/${t.id}/payments/${Vt}`),m)};return E.jsxs("form",{onSubmit:s(d),className:"grid h-full grid-rows-EventFormTemplate",children:[E.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Add new Payment"}),E.jsxs("label",{children:[E.jsx(Rs,{type:"number",defaultValue:"",register:i("amount",{required:!0}),placeholder:"Amount",variant:a.amount?"danger":"outline"}),a.amount&&E.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),E.jsxs("label",{children:[E.jsx(Rs,{type:"text",defaultValue:"",register:i("name",{required:!0}),placeholder:"Payment Name",variant:a.amount?"danger":"outline"}),a.amount&&E.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),E.jsxs("label",{children:[E.jsx(Rs,{type:"text",defaultValue:"",register:i("usersInput"),placeholder:"Add users",variant:"outline"}),E.jsx(HS,{variant:"payment",usersInput:c,resetField:l,setSelectedUsers:r,selectedUsers:n})]}),E.jsx(nn,{variant:"cta",type:"submit",children:"Submit"})]})}function LL(){const[t,e]=S.useState(_t),n=S.useContext(ti),r=S.useContext(ni),i=$i(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),E.jsx("div",{children:E.jsx(DL,{currentEvent:t})})}function ML(){return E.jsx("div",{children:"UserPage"})}function FL(){Ut();const t=$i(),e=S.useContext(ti),n=S.useContext(ni),[r,i]=S.useState(_t),[s,o]=S.useState(lu),[a,l]=S.useState(!1);function u(){if(t.id===void 0){l("Event not Found");return}if(e){const f=c(e,t.id);f&&i(f)}if(n){const f=c(n,t.id);f&&i(f)}}function c(f,m){if(m===void 0)return!1;const v=f.filter(_=>_.id===m?_:null)[0];return v===void 0?!1:v}function d(){r.payments.forEach(f=>{f.id===t.paymentId&&o(f)})}return S.useEffect(()=>{u(),r&&d()},[e,n,r,s]),s.id==lu.id?E.jsx(ul,{size:"big"}):s!=lu?E.jsxs("div",{className:"h-full",children:[E.jsx("div",{className:"flex justify-between items-center mb-6",children:E.jsx("span",{className:"font-bold text-xl",children:s.name})}),E.jsx("div",{className:"flex gap-2"})]}):E.jsx("div",{children:"Error has occured"})}const UL=LO([{path:"/",element:E.jsx(nL,{}),children:[{path:"/",element:E.jsx(sL,{})},{path:"/event/:id",element:E.jsx(bL,{}),children:[{path:"/event/:id/",element:E.jsx(OL,{})}]},{path:"/event/:id/edit",element:E.jsx(TL,{})},{path:"/event/:id/delete",element:E.jsx(PL,{})},{path:"/event/create",element:E.jsx(xL,{})},{path:"/event/:id/payment/create",element:E.jsx(LL,{})},{path:"/event/:id/payment/:paymentId",element:E.jsx(FL,{})},{path:"/user/:id",element:E.jsx(ML,{})}]},{path:"/login",element:E.jsx(rL,{})},{path:"/testing",element:E.jsx(IL,{})}]);cf.createRoot(document.getElementById("root")).render(E.jsx(Zt.StrictMode,{children:E.jsx(WO,{router:UL})}));bx();Rx();
