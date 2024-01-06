function JS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v_={exports:{}},fc={},y_={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),eC=Symbol.for("react.fragment"),tC=Symbol.for("react.strict_mode"),nC=Symbol.for("react.profiler"),rC=Symbol.for("react.provider"),iC=Symbol.for("react.context"),sC=Symbol.for("react.forward_ref"),oC=Symbol.for("react.suspense"),aC=Symbol.for("react.memo"),lC=Symbol.for("react.lazy"),rg=Symbol.iterator;function uC(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w_=Object.assign,E_={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=E_,this.updater=n||__}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S_(){}S_.prototype=Gs.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=E_,this.updater=n||__}var $h=Wh.prototype=new S_;$h.constructor=Wh;w_($h,Gs.prototype);$h.isPureReactComponent=!0;var ig=Array.isArray,C_=Object.prototype.hasOwnProperty,Hh={current:null},k_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)C_.call(e,r)&&!k_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ua,type:t,key:s,ref:o,props:i,_owner:Hh.current}}function cC(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function dC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sg=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dC(""+t.key):e.toString(36)}function Wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,ig(i)?(n="",t!=null&&(n=t.replace(sg,"$&/")+"/"),Wl(i,e,n,"",function(u){return u})):i!=null&&(Gh(i)&&(i=cC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ld(s,a);o+=Wl(s,e,n,l,i)}else if(l=uC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ld(s,a++),o+=Wl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var r=[],i=0;return Wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},$l={transition:null},hC={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Hh};de.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Gs;de.Fragment=eC;de.Profiler=nC;de.PureComponent=Wh;de.StrictMode=tC;de.Suspense=oC;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hC;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=w_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)C_.call(e,l)&&!k_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ua,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:iC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rC,_context:t},t.Consumer=t};de.createElement=x_;de.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:sC,render:t}};de.isValidElement=Gh;de.lazy=function(t){return{$$typeof:lC,_payload:{_status:-1,_result:t},_init:fC}};de.memo=function(t,e){return{$$typeof:aC,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(t,e){return Nt.current.useCallback(t,e)};de.useContext=function(t){return Nt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Nt.current.useEffect(t,e)};de.useId=function(){return Nt.current.useId()};de.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Nt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};de.useRef=function(t){return Nt.current.useRef(t)};de.useState=function(t){return Nt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Nt.current.useTransition()};de.version="18.2.0";y_.exports=de;var S=y_.exports;const Jt=g_(S),pC=JS({__proto__:null,default:Jt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mC=S,gC=Symbol.for("react.element"),vC=Symbol.for("react.fragment"),yC=Object.prototype.hasOwnProperty,_C=mC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wC={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yC.call(e,r)&&!wC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gC,type:t,key:s,ref:o,props:i,_owner:_C.current}}fc.Fragment=vC;fc.jsx=b_;fc.jsxs=b_;v_.exports=fc;var w=v_.exports,lf={},I_={exports:{}},$t={},T_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var q=F.length;F.push(Y);e:for(;0<q;){var pe=q-1>>>1,ve=F[pe];if(0<i(ve,Y))F[pe]=Y,F[q]=ve,q=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],q=F.pop();if(q!==Y){F[0]=q;e:for(var pe=0,ve=F.length,En=ve>>>1;pe<En;){var Yt=2*(pe+1)-1,ti=F[Yt],jt=Yt+1,ke=F[jt];if(0>i(ti,q))jt<ve&&0>i(ke,ti)?(F[pe]=ke,F[jt]=q,pe=jt):(F[pe]=ti,F[Yt]=q,pe=Yt);else if(jt<ve&&0>i(ke,q))F[pe]=ke,F[jt]=q,pe=jt;else break e}}return Y}function i(F,Y){var q=F.sortIndex-Y.sortIndex;return q!==0?q:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,y=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=F)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(F){if(_=!1,g(F),!y)if(n(l)!==null)y=!0,He(C);else{var Y=n(u);Y!==null&&Qe(p,Y.startTime-F)}}function C(F,Y){y=!1,_&&(_=!1,v(R),R=-1),m=!0;var q=f;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||F&&!ie());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,f=d.priorityLevel;var ve=pe(d.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),g(Y)}else r(l);d=n(l)}if(d!==null)var En=!0;else{var Yt=n(u);Yt!==null&&Qe(p,Yt.startTime-Y),En=!1}return En}finally{d=null,f=q,m=!1}}var b=!1,x=null,R=-1,M=5,j=-1;function ie(){return!(t.unstable_now()-j<M)}function J(){if(x!==null){var F=t.unstable_now();j=F;var Y=!0;try{Y=x(!0,F)}finally{Y?Z():(b=!1,x=null)}}else b=!1}var Z;if(typeof h=="function")Z=function(){h(J)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=J,Z=function(){ae.postMessage(null)}}else Z=function(){I(J,0)};function He(F){x=F,b||(b=!0,Z())}function Qe(F,Y){R=I(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,He(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return F()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=f;f=F;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(F,Y,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=q+ve,F={id:c++,callback:Y,priorityLevel:F,startTime:q,expirationTime:ve,sortIndex:-1},q>pe?(F.sortIndex=q,e(u,F),n(l)===null&&F===n(u)&&(_?(v(R),R=-1):_=!0,Qe(p,q-pe))):(F.sortIndex=ve,e(l,F),y||m||(y=!0,He(C))),F},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(F){var Y=f;return function(){var q=f;f=Y;try{return F.apply(this,arguments)}finally{f=q}}}})(N_);T_.exports=N_;var EC=T_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=S,Wt=EC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,Zo={};function Ui(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Zo[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,SC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},ag={};function CC(t){return uf.call(ag,t)?!0:uf.call(og,t)?!1:SC.test(t)?ag[t]=!0:(og[t]=!0,!1)}function kC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xC(t,e,n,r){if(e===null||typeof e>"u"||kC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yh=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yh,Kh);mt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yh,Kh);mt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yh,Kh);mt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xC(e,n,i,r)&&(n=null),r||i===null?CC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),lg=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,ud;function bo(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var cd=!1;function dd(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function bC(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=dd(t.type,!1),t;case 11:return t=dd(t.type.render,!1),t;case 1:return t=dd(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Qi:return"Portal";case cf:return"Profiler";case Qh:return"StrictMode";case df:return"Suspense";case ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O_:return(t.displayName||"Context")+".Consumer";case A_:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function IC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===Qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TC(t){var e=L_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=TC(t))}function M_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=L_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F_(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function mf(t,e){F_(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&gf(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gf(t,e,n){(e!=="number"||uu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Io(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function U_(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NC=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){NC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function V_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function B_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(PC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,vs=null,ys=null;function hg(t){if(t=Va(t)){if(typeof Sf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=vc(e),Sf(t.stateNode,t.type,e))}}function W_(t){vs?ys?ys.push(t):ys=[t]:vs=t}function $_(){if(vs){var t=vs,e=ys;if(ys=vs=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function H_(t,e){return t(e)}function G_(){}var fd=!1;function Y_(t,e,n){if(fd)return t(e,n);fd=!0;try{return H_(t,e,n)}finally{fd=!1,(vs!==null||ys!==null)&&(G_(),$_())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var Cf=!1;if(Jn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Cf=!1}function RC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,cu=null,du=!1,kf=null,AC={onError:function(t){Ao=!0,cu=t}};function OC(t,e,n,r,i,s,o,a,l){Ao=!1,cu=null,RC.apply(AC,arguments)}function DC(t,e,n,r,i,s,o,a,l){if(OC.apply(this,arguments),Ao){if(Ao){var u=cu;Ao=!1,cu=null}else throw Error(O(198));du||(du=!0,kf=u)}}function ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pg(t){if(ji(t)!==t)throw Error(O(188))}function LC(t){var e=t.alternate;if(!e){if(e=ji(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pg(i),t;if(s===r)return pg(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function q_(t){return t=LC(t),t!==null?Q_(t):null}function Q_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q_(t);if(e!==null)return e;t=t.sibling}return null}var X_=Wt.unstable_scheduleCallback,mg=Wt.unstable_cancelCallback,MC=Wt.unstable_shouldYield,FC=Wt.unstable_requestPaint,qe=Wt.unstable_now,UC=Wt.unstable_getCurrentPriorityLevel,ep=Wt.unstable_ImmediatePriority,J_=Wt.unstable_UserBlockingPriority,fu=Wt.unstable_NormalPriority,jC=Wt.unstable_LowPriority,Z_=Wt.unstable_IdlePriority,hc=null,Tn=null;function zC(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:WC,VC=Math.log,BC=Math.LN2;function WC(t){return t>>>=0,t===0?32:31-(VC(t)/BC|0)|0}var yl=64,_l=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=To(a):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function $C(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$C(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function hd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function GC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,np,r0,i0,s0,bf=!1,wl=[],Tr=null,Nr=null,Pr=null,na=new Map,ra=new Map,yr=[],YC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Va(e),e!==null&&np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KC(t,e,n,r,i){switch(e){case"focusin":return Tr=co(Tr,t,e,n,r,i),!0;case"dragenter":return Nr=co(Nr,t,e,n,r,i),!0;case"mouseover":return Pr=co(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return na.set(s,co(na.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ra.set(s,co(ra.get(s)||null,t,e,n,r,i)),!0}return!1}function o0(t){var e=li(t.target);if(e!==null){var n=ji(e);if(n!==null){if(e=n.tag,e===13){if(e=K_(n),e!==null){t.blockedOn=e,s0(t.priority,function(){r0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=If(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ef=r,n.target.dispatchEvent(r),Ef=null}else return e=Va(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function vg(t,e,n){Hl(t)&&n.delete(e)}function qC(){bf=!1,Tr!==null&&Hl(Tr)&&(Tr=null),Nr!==null&&Hl(Nr)&&(Nr=null),Pr!==null&&Hl(Pr)&&(Pr=null),na.forEach(vg),ra.forEach(vg)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,qC)))}function ia(t){function e(i){return fo(i,t)}if(0<wl.length){fo(wl[0],t);for(var n=1;n<wl.length;n++){var r=wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&fo(Tr,t),Nr!==null&&fo(Nr,t),Pr!==null&&fo(Pr,t),na.forEach(e),ra.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&yr.shift()}var _s=ar.ReactCurrentBatchConfig,pu=!0;function QC(t,e,n,r){var i=ye,s=_s.transition;_s.transition=null;try{ye=1,rp(t,e,n,r)}finally{ye=i,_s.transition=s}}function XC(t,e,n,r){var i=ye,s=_s.transition;_s.transition=null;try{ye=4,rp(t,e,n,r)}finally{ye=i,_s.transition=s}}function rp(t,e,n,r){if(pu){var i=If(t,e,n,r);if(i===null)Cd(t,e,r,mu,n),gg(t,r);else if(KC(i,t,e,n,r))r.stopPropagation();else if(gg(t,r),e&4&&-1<YC.indexOf(t)){for(;i!==null;){var s=Va(i);if(s!==null&&n0(s),s=If(t,e,n,r),s===null&&Cd(t,e,r,mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cd(t,e,r,null,n)}}var mu=null;function If(t,e,n,r){if(mu=null,t=Zh(r),t=li(t),t!==null)if(e=ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mu=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UC()){case ep:return 1;case J_:return 4;case fu:case jC:return 16;case Z_:return 536870912;default:return 16}default:return 16}}var Cr=null,ip=null,Gl=null;function l0(){if(Gl)return Gl;var t,e=ip,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function yg(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:yg,this.isPropagationStopped=yg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Ht(Ys),za=ze({},Ys,{view:0,detail:0}),JC=Ht(za),pd,md,ho,pc=ze({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(pd=t.screenX-ho.screenX,md=t.screenY-ho.screenY):md=pd=0,ho=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),_g=Ht(pc),ZC=ze({},pc,{dataTransfer:0}),ek=Ht(ZC),tk=ze({},za,{relatedTarget:0}),gd=Ht(tk),nk=ze({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),rk=Ht(nk),ik=ze({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sk=Ht(ik),ok=ze({},Ys,{data:0}),wg=Ht(ok),ak={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ck(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uk[t])?!!e[t]:!1}function op(){return ck}var dk=ze({},za,{key:function(t){if(t.key){var e=ak[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fk=Ht(dk),hk=ze({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=Ht(hk),pk=ze({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),mk=Ht(pk),gk=ze({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),vk=Ht(gk),yk=ze({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_k=Ht(yk),wk=[9,13,27,32],ap=Jn&&"CompositionEvent"in window,Oo=null;Jn&&"documentMode"in document&&(Oo=document.documentMode);var Ek=Jn&&"TextEvent"in window&&!Oo,u0=Jn&&(!ap||Oo&&8<Oo&&11>=Oo),Sg=String.fromCharCode(32),Cg=!1;function c0(t,e){switch(t){case"keyup":return wk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function Sk(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(Cg=!0,Sg);case"textInput":return t=e.data,t===Sg&&Cg?null:t;default:return null}}function Ck(t,e){if(Ji)return t==="compositionend"||!ap&&c0(t,e)?(t=l0(),Gl=ip=Cr=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u0&&e.locale!=="ko"?null:e.data;default:return null}}var kk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kk[t.type]:e==="textarea"}function f0(t,e,n,r){W_(r),e=gu(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Do=null,sa=null;function xk(t){C0(t,0)}function mc(t){var e=ts(t);if(M_(e))return t}function bk(t,e){if(t==="change")return e}var h0=!1;if(Jn){var vd;if(Jn){var yd="oninput"in document;if(!yd){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),yd=typeof xg.oninput=="function"}vd=yd}else vd=!1;h0=vd&&(!document.documentMode||9<document.documentMode)}function bg(){Do&&(Do.detachEvent("onpropertychange",p0),sa=Do=null)}function p0(t){if(t.propertyName==="value"&&mc(sa)){var e=[];f0(e,sa,t,Zh(t)),Y_(xk,e)}}function Ik(t,e,n){t==="focusin"?(bg(),Do=e,sa=n,Do.attachEvent("onpropertychange",p0)):t==="focusout"&&bg()}function Tk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(sa)}function Nk(t,e){if(t==="click")return mc(e)}function Pk(t,e){if(t==="input"||t==="change")return mc(e)}function Rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:Rk;function oa(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uf.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tg(t,e){var n=Ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=uu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uu(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ak(t){var e=g0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(r!==null&&lp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tg(n,s);var o=Tg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ok=Jn&&"documentMode"in document&&11>=document.documentMode,Zi=null,Tf=null,Lo=null,Nf=!1;function Ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nf||Zi==null||Zi!==uu(r)||(r=Zi,"selectionStart"in r&&lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lo&&oa(Lo,r)||(Lo=r,r=gu(Tf,"onSelect"),0<r.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},_d={},v0={};Jn&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function gc(t){if(_d[t])return _d[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return _d[t]=e[n];return t}var y0=gc("animationend"),_0=gc("animationiteration"),w0=gc("animationstart"),E0=gc("transitionend"),S0=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){S0.set(t,e),Ui(e,[t])}for(var wd=0;wd<Pg.length;wd++){var Ed=Pg[wd],Dk=Ed.toLowerCase(),Lk=Ed[0].toUpperCase()+Ed.slice(1);qr(Dk,"on"+Lk)}qr(y0,"onAnimationEnd");qr(_0,"onAnimationIteration");qr(w0,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(E0,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mk=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DC(r,e,void 0,t),t.currentTarget=null}function C0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rg(i,a,u),s=l}}}if(du)throw t=kf,du=!1,kf=null,t}function Ne(t,e){var n=e[Df];n===void 0&&(n=e[Df]=new Set);var r=t+"__bubble";n.has(r)||(k0(e,t,2,!1),n.add(r))}function Sd(t,e,n){var r=0;e&&(r|=4),k0(n,t,r,e)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Cl]){t[Cl]=!0,R_.forEach(function(n){n!=="selectionchange"&&(Mk.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cl]||(e[Cl]=!0,Sd("selectionchange",!1,e))}}function k0(t,e,n,r){switch(a0(e)){case 1:var i=QC;break;case 4:i=XC;break;default:i=rp}n=i.bind(null,e,n,t),i=void 0,!Cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=li(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Y_(function(){var u=s,c=Zh(n),d=[];e:{var f=S0.get(t);if(f!==void 0){var m=sp,y=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":m=fk;break;case"focusin":y="focus",m=gd;break;case"focusout":y="blur",m=gd;break;case"beforeblur":case"afterblur":m=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ek;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=mk;break;case y0:case _0:case w0:m=rk;break;case E0:m=vk;break;case"scroll":m=JC;break;case"wheel":m=_k;break;case"copy":case"cut":case"paste":m=sk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Eg}var _=(e&4)!==0,I=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,v!==null&&(p=ta(h,v),p!=null&&_.push(la(h,p,g)))),I)break;h=h.return}0<_.length&&(f=new m(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Ef&&(y=n.relatedTarget||n.fromElement)&&(li(y)||y[Zn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?li(y):null,y!==null&&(I=ji(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=_g,p="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Eg,p="onPointerLeave",v="onPointerEnter",h="pointer"),I=m==null?f:ts(m),g=y==null?f:ts(y),f=new _(p,h+"leave",m,n,c),f.target=I,f.relatedTarget=g,p=null,li(c)===u&&(_=new _(v,h+"enter",y,n,c),_.target=g,_.relatedTarget=I,p=_),I=p,m&&y)t:{for(_=m,v=y,h=0,g=_;g;g=Gi(g))h++;for(g=0,p=v;p;p=Gi(p))g++;for(;0<h-g;)_=Gi(_),h--;for(;0<g-h;)v=Gi(v),g--;for(;h--;){if(_===v||v!==null&&_===v.alternate)break t;_=Gi(_),v=Gi(v)}_=null}else _=null;m!==null&&Ag(d,f,m,_,!1),y!==null&&I!==null&&Ag(d,I,y,_,!0)}}e:{if(f=u?ts(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=bk;else if(kg(f))if(h0)C=Pk;else{C=Tk;var b=Ik}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Nk);if(C&&(C=C(t,u))){f0(d,C,n,c);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&gf(f,"number",f.value)}switch(b=u?ts(u):window,t){case"focusin":(kg(b)||b.contentEditable==="true")&&(Zi=b,Tf=u,Lo=null);break;case"focusout":Lo=Tf=Zi=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,Ng(d,n,c);break;case"selectionchange":if(Ok)break;case"keydown":case"keyup":Ng(d,n,c)}var x;if(ap)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ji?c0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(u0&&n.locale!=="ko"&&(Ji||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ji&&(x=l0()):(Cr=c,ip="value"in Cr?Cr.value:Cr.textContent,Ji=!0)),b=gu(u,R),0<b.length&&(R=new wg(R,t,null,n,c),d.push({event:R,listeners:b}),x?R.data=x:(x=d0(n),x!==null&&(R.data=x)))),(x=Ek?Sk(t,n):Ck(t,n))&&(u=gu(u,"onBeforeInput"),0<u.length&&(c=new wg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}C0(d,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ta(t,n),s!=null&&r.unshift(la(t,s,i)),s=ta(t,e),s!=null&&r.push(la(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):i||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fk=/\r\n?/g,Uk=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(Fk,`
`).replace(Uk,"")}function kl(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(O(425))}function vu(){}var Pf=null,Rf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,jk=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,zk=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(t){return Dg.resolve(null).then(t).catch(Vk)}:Of;function Vk(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ia(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ia(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ks,ua="__reactProps$"+Ks,Zn="__reactContainer$"+Ks,Df="__reactEvents$"+Ks,Bk="__reactListeners$"+Ks,Wk="__reactHandles$"+Ks;function li(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lg(t);t!==null;){if(n=t[kn])return n;t=Lg(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[kn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function vc(t){return t[ua]||null}var Lf=[],ns=-1;function Qr(t){return{current:t}}function Re(t){0>ns||(t.current=Lf[ns],Lf[ns]=null,ns--)}function Ie(t,e){ns++,Lf[ns]=t.current,t.current=e}var Br={},St=Qr(Br),Lt=Qr(!1),Si=Br;function Ps(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function yu(){Re(Lt),Re(St)}function Mg(t,e,n){if(St.current!==Br)throw Error(O(168));Ie(St,e),Ie(Lt,n)}function x0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,IC(t)||"Unknown",i));return ze({},n,r)}function _u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Si=St.current,Ie(St,t),Ie(Lt,Lt.current),!0}function Fg(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=x0(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,Re(Lt),Re(St),Ie(St,t)):Re(Lt),Ie(Lt,n)}var Wn=null,yc=!1,xd=!1;function b0(t){Wn===null?Wn=[t]:Wn.push(t)}function $k(t){yc=!0,b0(t)}function Xr(){if(!xd&&Wn!==null){xd=!0;var t=0,e=ye;try{var n=Wn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,yc=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),X_(ep,Xr),i}finally{ye=e,xd=!1}}return null}var rs=[],is=0,wu=null,Eu=0,Qt=[],Xt=0,Ci=null,$n=1,Hn="";function ii(t,e){rs[is++]=Eu,rs[is++]=wu,wu=t,Eu=e}function I0(t,e,n){Qt[Xt++]=$n,Qt[Xt++]=Hn,Qt[Xt++]=Ci,Ci=t;var r=$n;t=Hn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-vn(e)+i|n<<i|r,Hn=s+t}else $n=1<<s|n<<i|r,Hn=t}function up(t){t.return!==null&&(ii(t,1),I0(t,1,0))}function cp(t){for(;t===wu;)wu=rs[--is],rs[is]=null,Eu=rs[--is],rs[is]=null;for(;t===Ci;)Ci=Qt[--Xt],Qt[Xt]=null,Hn=Qt[--Xt],Qt[Xt]=null,$n=Qt[--Xt],Qt[Xt]=null}var Bt=null,Vt=null,Le=!1,fn=null;function T0(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Vt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:$n,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Vt=null,!0):!1;default:return!1}}function Mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(Le){var e=Vt;if(e){var n=e;if(!Ug(t,e)){if(Mf(t))throw Error(O(418));e=Rr(n.nextSibling);var r=Bt;e&&Ug(t,e)?T0(r,n):(t.flags=t.flags&-4097|2,Le=!1,Bt=t)}}else{if(Mf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Le=!1,Bt=t}}}function jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function xl(t){if(t!==Bt)return!1;if(!Le)return jg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Vt)){if(Mf(t))throw N0(),Error(O(418));for(;e;)T0(t,e),e=Rr(e.nextSibling)}if(jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Bt?Rr(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=Vt;t;)t=Rr(t.nextSibling)}function Rs(){Vt=Bt=null,Le=!1}function dp(t){fn===null?fn=[t]:fn.push(t)}var Hk=ar.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Su=Qr(null),Cu=null,ss=null,fp=null;function hp(){fp=ss=Cu=null}function pp(t){var e=Su.current;Re(Su),t._currentValue=e}function Uf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Cu=t,fp=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(fp!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(Cu===null)throw Error(O(308));ss=t,Cu.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var ui=null;function mp(t){ui===null?ui=[t]:ui.push(t)}function P0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mp(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,mp(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function Kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}function zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ku(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=ze({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xi|=o,t.lanes=o,t.memoizedState=d}}function Vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var A0=new P_.Component().refs;function jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Dr(t),s=qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(yn(e,t,i,r),Kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Dr(t),s=qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(yn(e,t,i,r),Kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Dr(t),i=qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(yn(e,t,r,n),Kl(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,r)||!oa(i,s):!0}function O0(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Mt(e)?Si:St.current,r=e.contextTypes,s=(r=r!=null)?Ps(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function zf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=A0,gp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Mt(e)?Si:St.current,i.context=Ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===A0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function D0(t){function e(v,h){if(t){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Lr(v,h),v.index=0,v.sibling=null,v}function s(v,h,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,g,p){return h===null||h.tag!==6?(h=Ad(g,v.mode,p),h.return=v,h):(h=i(h,g),h.return=v,h)}function l(v,h,g,p){var C=g.type;return C===Xi?c(v,h,g.props.children,p,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gr&&$g(C)===h.type)?(p=i(h,g.props),p.ref=po(v,h,g),p.return=v,p):(p=eu(g.type,g.key,g.props,null,v.mode,p),p.ref=po(v,h,g),p.return=v,p)}function u(v,h,g,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Od(g,v.mode,p),h.return=v,h):(h=i(h,g.children||[]),h.return=v,h)}function c(v,h,g,p,C){return h===null||h.tag!==7?(h=_i(g,v.mode,p,C),h.return=v,h):(h=i(h,g),h.return=v,h)}function d(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ad(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ml:return g=eu(h.type,h.key,h.props,null,v.mode,g),g.ref=po(v,null,h),g.return=v,g;case Qi:return h=Od(h,v.mode,g),h.return=v,h;case gr:var p=h._init;return d(v,p(h._payload),g)}if(Io(h)||lo(h))return h=_i(h,v.mode,g,null),h.return=v,h;bl(v,h)}return null}function f(v,h,g,p){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,h,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ml:return g.key===C?l(v,h,g,p):null;case Qi:return g.key===C?u(v,h,g,p):null;case gr:return C=g._init,f(v,h,C(g._payload),p)}if(Io(g)||lo(g))return C!==null?null:c(v,h,g,p,null);bl(v,g)}return null}function m(v,h,g,p,C){if(typeof p=="string"&&p!==""||typeof p=="number")return v=v.get(g)||null,a(h,v,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ml:return v=v.get(p.key===null?g:p.key)||null,l(h,v,p,C);case Qi:return v=v.get(p.key===null?g:p.key)||null,u(h,v,p,C);case gr:var b=p._init;return m(v,h,g,b(p._payload),C)}if(Io(p)||lo(p))return v=v.get(g)||null,c(h,v,p,C,null);bl(h,p)}return null}function y(v,h,g,p){for(var C=null,b=null,x=h,R=h=0,M=null;x!==null&&R<g.length;R++){x.index>R?(M=x,x=null):M=x.sibling;var j=f(v,x,g[R],p);if(j===null){x===null&&(x=M);break}t&&x&&j.alternate===null&&e(v,x),h=s(j,h,R),b===null?C=j:b.sibling=j,b=j,x=M}if(R===g.length)return n(v,x),Le&&ii(v,R),C;if(x===null){for(;R<g.length;R++)x=d(v,g[R],p),x!==null&&(h=s(x,h,R),b===null?C=x:b.sibling=x,b=x);return Le&&ii(v,R),C}for(x=r(v,x);R<g.length;R++)M=m(x,v,R,g[R],p),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?R:M.key),h=s(M,h,R),b===null?C=M:b.sibling=M,b=M);return t&&x.forEach(function(ie){return e(v,ie)}),Le&&ii(v,R),C}function _(v,h,g,p){var C=lo(g);if(typeof C!="function")throw Error(O(150));if(g=C.call(g),g==null)throw Error(O(151));for(var b=C=null,x=h,R=h=0,M=null,j=g.next();x!==null&&!j.done;R++,j=g.next()){x.index>R?(M=x,x=null):M=x.sibling;var ie=f(v,x,j.value,p);if(ie===null){x===null&&(x=M);break}t&&x&&ie.alternate===null&&e(v,x),h=s(ie,h,R),b===null?C=ie:b.sibling=ie,b=ie,x=M}if(j.done)return n(v,x),Le&&ii(v,R),C;if(x===null){for(;!j.done;R++,j=g.next())j=d(v,j.value,p),j!==null&&(h=s(j,h,R),b===null?C=j:b.sibling=j,b=j);return Le&&ii(v,R),C}for(x=r(v,x);!j.done;R++,j=g.next())j=m(x,v,R,j.value,p),j!==null&&(t&&j.alternate!==null&&x.delete(j.key===null?R:j.key),h=s(j,h,R),b===null?C=j:b.sibling=j,b=j);return t&&x.forEach(function(J){return e(v,J)}),Le&&ii(v,R),C}function I(v,h,g,p){if(typeof g=="object"&&g!==null&&g.type===Xi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ml:e:{for(var C=g.key,b=h;b!==null;){if(b.key===C){if(C=g.type,C===Xi){if(b.tag===7){n(v,b.sibling),h=i(b,g.props.children),h.return=v,v=h;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gr&&$g(C)===b.type){n(v,b.sibling),h=i(b,g.props),h.ref=po(v,b,g),h.return=v,v=h;break e}n(v,b);break}else e(v,b);b=b.sibling}g.type===Xi?(h=_i(g.props.children,v.mode,p,g.key),h.return=v,v=h):(p=eu(g.type,g.key,g.props,null,v.mode,p),p.ref=po(v,h,g),p.return=v,v=p)}return o(v);case Qi:e:{for(b=g.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(v,h.sibling),h=i(h,g.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=Od(g,v.mode,p),h.return=v,v=h}return o(v);case gr:return b=g._init,I(v,h,b(g._payload),p)}if(Io(g))return y(v,h,g,p);if(lo(g))return _(v,h,g,p);bl(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,g),h.return=v,v=h):(n(v,h),h=Ad(g,v.mode,p),h.return=v,v=h),o(v)):n(v,h)}return I}var As=D0(!0),L0=D0(!1),Ba={},Nn=Qr(Ba),ca=Qr(Ba),da=Qr(Ba);function ci(t){if(t===Ba)throw Error(O(174));return t}function vp(t,e){switch(Ie(da,e),Ie(ca,t),Ie(Nn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yf(e,t)}Re(Nn),Ie(Nn,e)}function Os(){Re(Nn),Re(ca),Re(da)}function M0(t){ci(da.current);var e=ci(Nn.current),n=yf(e,t.type);e!==n&&(Ie(ca,t),Ie(Nn,n))}function yp(t){ca.current===t&&(Re(Nn),Re(ca))}var Ue=Qr(0);function xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bd=[];function _p(){for(var t=0;t<bd.length;t++)bd[t]._workInProgressVersionPrimary=null;bd.length=0}var ql=ar.ReactCurrentDispatcher,Id=ar.ReactCurrentBatchConfig,ki=0,je=null,et=null,at=null,bu=!1,Mo=!1,fa=0,Gk=0;function vt(){throw Error(O(321))}function wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Ep(t,e,n,r,i,s){if(ki=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?Qk:Xk,t=n(r,i),Mo){s=0;do{if(Mo=!1,fa=0,25<=s)throw Error(O(301));s+=1,at=et=null,e.updateQueue=null,ql.current=Jk,t=n(r,i)}while(Mo)}if(ql.current=Iu,e=et!==null&&et.next!==null,ki=0,at=et=je=null,bu=!1,e)throw Error(O(300));return t}function Sp(){var t=fa!==0;return fa=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?je.memoizedState=at=t:at=at.next=t,at}function sn(){if(et===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?je.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(O(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?je.memoizedState=at=t:at=at.next=t}return at}function ha(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ki&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,je.lanes|=c,xi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nd(t){var e=sn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F0(){}function U0(t,e){var n=je,r=sn(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Cp(V0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,pa(9,z0.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(O(349));ki&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z0(t,e,n,r){e.value=n,e.getSnapshot=r,B0(e)&&W0(t)}function V0(t,e,n){return n(function(){B0(e)&&W0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function W0(t){var e=er(t,1);e!==null&&yn(e,t,1,-1)}function Hg(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=qk.bind(null,je,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $0(){return sn().memoizedState}function Ql(t,e,n,r){var i=Cn();je.flags|=t,i.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&wp(r,o.deps)){i.memoizedState=pa(e,n,s,r);return}}je.flags|=t,i.memoizedState=pa(1|e,n,s,r)}function Gg(t,e){return Ql(8390656,8,t,e)}function Cp(t,e){return wc(2048,8,t,e)}function H0(t,e){return wc(4,2,t,e)}function G0(t,e){return wc(4,4,t,e)}function Y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,Y0.bind(null,e,t),n)}function kp(){}function q0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Q0(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return ki&21?(wn(n,e)||(n=e0(),je.lanes|=n,xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function Yk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Id.transition;Id.transition={};try{t(!1),e()}finally{ye=n,Id.transition=r}}function J0(){return sn().memoizedState}function Kk(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))ew(e,n);else if(n=P0(t,e,n,r),n!==null){var i=It();yn(n,t,r,i),tw(n,e,r)}}function qk(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))ew(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,mp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=P0(t,e,i,r),n!==null&&(i=It(),yn(n,t,r,i),tw(n,e,r))}}function Z0(t){var e=t.alternate;return t===je||e!==null&&e===je}function ew(t,e){Mo=bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}var Iu={readContext:rn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Qk={readContext:rn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,Y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Kk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Hg,useDebugValue:kp,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Hg(!1),e=t[0];return t=Yk.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Cn();if(Le){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),ut===null)throw Error(O(349));ki&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gg(V0.bind(null,r,s,t),[t]),r.flags|=2048,pa(9,z0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=ut.identifierPrefix;if(Le){var n=Hn,r=$n;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xk={readContext:rn,useCallback:q0,useContext:rn,useEffect:Cp,useImperativeHandle:K0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:Q0,useReducer:Td,useRef:$0,useState:function(){return Td(ha)},useDebugValue:kp,useDeferredValue:function(t){var e=sn();return X0(e,et.memoizedState,t)},useTransition:function(){var t=Td(ha)[0],e=sn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:J0,unstable_isNewReconciler:!1},Jk={readContext:rn,useCallback:q0,useContext:rn,useEffect:Cp,useImperativeHandle:K0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:Q0,useReducer:Nd,useRef:$0,useState:function(){return Nd(ha)},useDebugValue:kp,useDeferredValue:function(t){var e=sn();return et===null?e.memoizedState=t:X0(e,et.memoizedState,t)},useTransition:function(){var t=Nd(ha)[0],e=sn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:J0,unstable_isNewReconciler:!1};function Ds(t,e){try{var n="",r=e;do n+=bC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zk=typeof WeakMap=="function"?WeakMap:Map;function nw(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nu||(Nu=!0,Xf=r),Vf(t,e)},n}function rw(t,e,n){n=qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Zk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hx.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var ex=ar.ReactCurrentOwner,Ot=!1;function kt(t,e,n,r){e.child=t===null?L0(e,null,n,r):As(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=Ep(t,e,n,r,s,i),n=Sp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Le&&n&&up(e),e.flags|=1,kt(t,e,r,i),e.child)}function Xg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iw(t,e,s,r,i)):(t=eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function iw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(oa(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Bf(t,e,n,r,i)}function sw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(as,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(as,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(as,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(as,zt),zt|=r;return kt(t,e,i,n),e.child}function ow(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,r,i){var s=Mt(n)?Si:St.current;return s=Ps(e,s),ws(e,i),n=Ep(t,e,n,r,s,i),r=Sp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Le&&r&&up(e),e.flags|=1,kt(t,e,n,i),e.child)}function Jg(t,e,n,r,i){if(Mt(n)){var s=!0;_u(e)}else s=!1;if(ws(e,i),e.stateNode===null)Xl(t,e),O0(e,n,r),zf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Mt(n)?Si:St.current,u=Ps(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wg(e,o,r,u),vr=!1;var f=e.memoizedState;o.state=f,ku(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Lt.current||vr?(typeof c=="function"&&(jf(e,n,c,r),l=e.memoizedState),(a=vr||Bg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,R0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=Mt(n)?Si:St.current,l=Ps(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Wg(e,o,r,l),vr=!1,f=e.memoizedState,o.state=f,ku(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Lt.current||vr?(typeof m=="function"&&(jf(e,n,m,r),y=e.memoizedState),(u=vr||Bg(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){ow(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fg(e,n,!1),tr(t,e,s);r=e.stateNode,ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Fg(e,n,!0),e.child}function aw(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),vp(t,e.containerInfo)}function Zg(t,e,n,r,i){return Rs(),dp(i),e.flags|=256,kt(t,e,n,r),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function lw(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ue,i&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cc(o,r,0,null),t=_i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=$f,t):xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=_i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$f,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xp(t,e){return e=Cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Il(t,e,n,r){return r!==null&&dp(r),As(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(O(422))),Il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cc({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=$f,s);if(!(e.mode&1))return Il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Pd(s,r,void 0),Il(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),yn(r,t,i,-1))}return Rp(),r=Pd(Error(O(421))),Il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=px.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Rr(i.nextSibling),Bt=e,Le=!0,fn=null,t!==null&&(Qt[Xt++]=$n,Qt[Xt++]=Hn,Qt[Xt++]=Ci,$n=t.id,Hn=t.overflow,Ci=e),e=xp(e,r.children),e.flags|=4096,e)}function ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uf(t.return,e,n)}function Rd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ev(t,n,e);else if(t.tag===19)ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nx(t,e,n){switch(e.tag){case 3:aw(e),Rs();break;case 5:M0(e);break;case 1:Mt(e.type)&&_u(e);break;case 4:vp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Su,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?lw(t,e,n):(Ie(Ue,Ue.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Ie(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,sw(t,e,n)}return tr(t,e,n)}var cw,Gf,dw,fw;cw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};dw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ci(Nn.current);var s=null;switch(n){case"input":i=pf(t,i),r=pf(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=vf(t,i),r=vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}_f(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rx(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Mt(e.type)&&yu(),yt(e),null;case 3:return r=e.stateNode,Os(),Re(Lt),Re(St),_p(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(eh(fn),fn=null))),Gf(t,e),yt(e),null;case 5:yp(e);var i=ci(da.current);if(n=e.type,t!==null&&e.stateNode!=null)dw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return yt(e),null}if(t=ci(Nn.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[ua]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<No.length;i++)Ne(No[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":ug(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":dg(r,s),Ne("invalid",r)}_f(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":gl(r),cg(r,s,!0);break;case"textarea":gl(r),fg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[ua]=r,cw(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<No.length;i++)Ne(No[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":ug(t,r),i=pf(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":dg(t,r),i=vf(t,r),Ne("invalid",t);break;default:i=r}_f(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":gl(t),cg(t,r,!1);break;case"textarea":gl(t),fg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=ci(da.current),ci(Nn.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return yt(e),null;case 13:if(Re(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Vt!==null&&e.mode&1&&!(e.flags&128))N0(),Rs(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[kn]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else fn!==null&&(eh(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?rt===0&&(rt=3):Rp())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Os(),Gf(t,e),t===null&&aa(e.stateNode.containerInfo),yt(e),null;case 10:return pp(e.type._context),yt(e),null;case 17:return Mt(e.type)&&yu(),yt(e),null;case 19:if(Re(Ue),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mo(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xu(t),o!==null){for(e.flags|=128,mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Ls&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return yt(e),null}else 2*qe()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Ue.current,Ie(Ue,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function ix(t,e){switch(cp(e),e.tag){case 1:return Mt(e.type)&&yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),Re(Lt),Re(St),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(Re(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ue),null;case 4:return Os(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Tl=!1,wt=!1,sx=typeof WeakSet=="function"?WeakSet:Set,B=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Yf(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var tv=!1;function ox(t,e){if(Pf=pu,t=g0(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},pu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,I=y.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:un(e.type,_),I);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return y=tv,tv=!1,y}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yf(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hw(t){var e=t.alternate;e!==null&&(t.alternate=null,hw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[ua],delete e[Df],delete e[Bk],delete e[Wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pw(t){return t.tag===5||t.tag===3||t.tag===4}function nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}var dt=null,cn=!1;function hr(t,e,n){for(n=n.child;n!==null;)mw(t,e,n),n=n.sibling}function mw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:wt||os(n,e);case 6:var r=dt,i=cn;dt=null,hr(t,e,n),dt=r,cn=i,dt!==null&&(cn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(cn?(t=dt,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),ia(t)):kd(dt,n.stateNode));break;case 4:r=dt,i=cn,dt=n.stateNode.containerInfo,cn=!0,hr(t,e,n),dt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yf(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!wt&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,hr(t,e,n),wt=r):hr(t,e,n);break;default:hr(t,e,n)}}function rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sx),e.forEach(function(r){var i=mx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,cn=!1;break e;case 3:dt=a.stateNode.containerInfo,cn=!0;break e;case 4:dt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(dt===null)throw Error(O(160));mw(s,o,i),dt=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gw(e,t),e=e.sibling}function gw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),Sn(t),r&4){try{Fo(3,t,t.return),Ec(3,t)}catch(_){Ve(t,t.return,_)}try{Fo(5,t,t.return)}catch(_){Ve(t,t.return,_)}}break;case 1:ln(e,t),Sn(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(ln(e,t),Sn(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{ea(i,"")}catch(_){Ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&F_(i,s),wf(a,o);var u=wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?B_(i,d):c==="dangerouslySetInnerHTML"?z_(i,d):c==="children"?ea(i,d):qh(i,c,d,u)}switch(a){case"input":mf(i,s);break;case"textarea":U_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?gs(i,!!s.multiple,s.defaultValue,!0):gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ua]=s}catch(_){Ve(t,t.return,_)}}break;case 6:if(ln(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ve(t,t.return,_)}}break;case 3:if(ln(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(_){Ve(t,t.return,_)}break;case 4:ln(e,t),Sn(t);break;case 13:ln(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tp=qe())),r&4&&rv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,ln(e,t),wt=u):ln(e,t),Sn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(f=B,m=f.child,f.tag){case 0:case 11:case 14:case 15:Fo(4,f,f.return);break;case 1:os(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Ve(r,n,_)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){sv(d);continue}}m!==null?(m.return=f,B=m):sv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V_("display",o))}catch(_){Ve(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(e,t),Sn(t),r&4&&rv(t);break;case 21:break;default:ln(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pw(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ea(i,""),r.flags&=-33);var s=nv(t);Qf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nv(t);qf(t,a,o);break;default:throw Error(O(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ax(t,e,n){B=t,vw(t)}function vw(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Tl;var u=wt;if(Tl=o,(wt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?ov(i):l!==null?(l.return=o,B=l):ov(i);for(;s!==null;)B=s,vw(s),s=s.sibling;B=i,Tl=a,wt=u}iv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):iv(t)}}function iv(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}wt||e.flags&512&&Kf(e)}catch(f){Ve(e,e.return,f)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function sv(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function ov(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Kf(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var lx=Math.ceil,Tu=ar.ReactCurrentDispatcher,bp=ar.ReactCurrentOwner,nn=ar.ReactCurrentBatchConfig,he=0,ut=null,Je=null,pt=0,zt=0,as=Qr(0),rt=0,ma=null,xi=0,Sc=0,Ip=0,Uo=null,At=null,Tp=0,Ls=1/0,Bn=null,Nu=!1,Xf=null,Or=null,Nl=!1,kr=null,Pu=0,jo=0,Jf=null,Jl=-1,Zl=0;function It(){return he&6?qe():Jl!==-1?Jl:Jl=qe()}function Dr(t){return t.mode&1?he&2&&pt!==0?pt&-pt:Hk.transition!==null?(Zl===0&&(Zl=e0()),Zl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function yn(t,e,n,r){if(50<jo)throw jo=0,Jf=null,Error(O(185));ja(t,n,r),(!(he&2)||t!==ut)&&(t===ut&&(!(he&2)&&(Sc|=n),rt===4&&_r(t,pt)),Ft(t,r),n===1&&he===0&&!(e.mode&1)&&(Ls=qe()+500,yc&&Xr()))}function Ft(t,e){var n=t.callbackNode;HC(t,e);var r=hu(t,t===ut?pt:0);if(r===0)n!==null&&mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mg(n),e===1)t.tag===0?$k(av.bind(null,t)):b0(av.bind(null,t)),zk(function(){!(he&6)&&Xr()}),n=null;else{switch(t0(r)){case 1:n=ep;break;case 4:n=J_;break;case 16:n=fu;break;case 536870912:n=Z_;break;default:n=fu}n=xw(n,yw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yw(t,e){if(Jl=-1,Zl=0,he&6)throw Error(O(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=hu(t,t===ut?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var i=he;he|=2;var s=ww();(ut!==t||pt!==e)&&(Bn=null,Ls=qe()+500,yi(t,e));do try{dx();break}catch(a){_w(t,a)}while(1);hp(),Tu.current=s,he=i,Je!==null?e=0:(ut=null,pt=0,e=rt)}if(e!==0){if(e===2&&(i=xf(t),i!==0&&(r=i,e=Zf(t,i))),e===1)throw n=ma,yi(t,0),_r(t,r),Ft(t,qe()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!ux(i)&&(e=Ru(t,r),e===2&&(s=xf(t),s!==0&&(r=s,e=Zf(t,s))),e===1))throw n=ma,yi(t,0),_r(t,r),Ft(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:si(t,At,Bn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=Tp+500-qe(),10<e)){if(hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(si.bind(null,t,At,Bn),e);break}si(t,At,Bn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lx(r/1960))-r,10<r){t.timeoutHandle=Of(si.bind(null,t,At,Bn),r);break}si(t,At,Bn);break;case 5:si(t,At,Bn);break;default:throw Error(O(329))}}}return Ft(t,qe()),t.callbackNode===n?yw.bind(null,t):null}function Zf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=At,At=n,e!==null&&eh(e)),t}function eh(t){At===null?At=t:At.push.apply(At,t)}function ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Ip,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function av(t){if(he&6)throw Error(O(327));Es();var e=hu(t,0);if(!(e&1))return Ft(t,qe()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=xf(t);r!==0&&(e=r,n=Zf(t,r))}if(n===1)throw n=ma,yi(t,0),_r(t,e),Ft(t,qe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,At,Bn),Ft(t,qe()),null}function Np(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Ls=qe()+500,yc&&Xr())}}function bi(t){kr!==null&&kr.tag===0&&!(he&6)&&Es();var e=he;he|=1;var n=nn.transition,r=ye;try{if(nn.transition=null,ye=1,t)return t()}finally{ye=r,nn.transition=n,he=e,!(he&6)&&Xr()}}function Pp(){zt=as.current,Re(as)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jk(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yu();break;case 3:Os(),Re(Lt),Re(St),_p();break;case 5:yp(r);break;case 4:Os();break;case 13:Re(Ue);break;case 19:Re(Ue);break;case 10:pp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(ut=t,Je=t=Lr(t.current,null),pt=zt=e,rt=0,ma=null,Ip=Sc=xi=0,At=Uo=null,ui!==null){for(e=0;e<ui.length;e++)if(n=ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ui=null}return t}function _w(t,e){do{var n=Je;try{if(hp(),ql.current=Iu,bu){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bu=!1}if(ki=0,at=et=je=null,Mo=!1,fa=0,bp.current=null,n===null||n.return===null){rt=1,ma=e,Je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Kg(o);if(m!==null){m.flags&=-257,qg(m,o,a,s,e),m.mode&1&&Yg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Yg(s,u,e),Rp();break e}l=Error(O(426))}}else if(Le&&a.mode&1){var I=Kg(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),qg(I,o,a,s,e),dp(Ds(l,a));break e}}s=l=Ds(l,a),rt!==4&&(rt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=nw(s,l,e);zg(s,v);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Or===null||!Or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=rw(s,a,e);zg(s,p);break e}}s=s.return}while(s!==null)}Sw(n)}catch(C){e=C,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function ww(){var t=Tu.current;return Tu.current=Iu,t===null?Iu:t}function Rp(){(rt===0||rt===3||rt===2)&&(rt=4),ut===null||!(xi&268435455)&&!(Sc&268435455)||_r(ut,pt)}function Ru(t,e){var n=he;he|=2;var r=ww();(ut!==t||pt!==e)&&(Bn=null,yi(t,e));do try{cx();break}catch(i){_w(t,i)}while(1);if(hp(),he=n,Tu.current=r,Je!==null)throw Error(O(261));return ut=null,pt=0,rt}function cx(){for(;Je!==null;)Ew(Je)}function dx(){for(;Je!==null&&!MC();)Ew(Je)}function Ew(t){var e=kw(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?Sw(t):Je=e,bp.current=null}function Sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ix(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=rx(n,e,zt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function si(t,e,n){var r=ye,i=nn.transition;try{nn.transition=null,ye=1,fx(t,e,n,r)}finally{nn.transition=i,ye=r}return null}function fx(t,e,n,r){do Es();while(kr!==null);if(he&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GC(t,s),t===ut&&(Je=ut=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,xw(fu,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=ye;ye=1;var a=he;he|=4,bp.current=null,ox(t,n),gw(n,t),Ak(Rf),pu=!!Pf,Rf=Pf=null,t.current=n,ax(n),FC(),he=a,ye=o,nn.transition=s}else t.current=n;if(Nl&&(Nl=!1,kr=t,Pu=i),s=t.pendingLanes,s===0&&(Or=null),zC(n.stateNode),Ft(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nu)throw Nu=!1,t=Xf,Xf=null,t;return Pu&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===Jf?jo++:(jo=0,Jf=t):jo=0,Xr(),null}function Es(){if(kr!==null){var t=t0(Pu),e=nn.transition,n=ye;try{if(nn.transition=null,ye=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,Pu=0,he&6)throw Error(O(331));var i=he;for(he|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Fo(8,c,s)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var f=c.sibling,m=c.return;if(hw(c),c===u){B=null;break}if(f!==null){f.return=m,B=f;break}B=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,B=v;break e}B=s.return}}var h=t.current;for(B=h;B!==null;){o=B;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,B=g;else e:for(o=h;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(C){Ve(a,a.return,C)}if(a===o){B=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,B=p;break e}B=a.return}}if(he=i,Xr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(hc,t)}catch{}r=!0}return r}finally{ye=n,nn.transition=e}}return!1}function lv(t,e,n){e=Ds(n,e),e=nw(t,e,1),t=Ar(t,e,1),e=It(),t!==null&&(ja(t,1,e),Ft(t,e))}function Ve(t,e,n){if(t.tag===3)lv(t,t,n);else for(;e!==null;){if(e.tag===3){lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=Ds(n,t),t=rw(e,t,1),e=Ar(e,t,1),t=It(),e!==null&&(ja(e,1,t),Ft(e,t));break}}e=e.return}}function hx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(pt&n)===n&&(rt===4||rt===3&&(pt&130023424)===pt&&500>qe()-Tp?yi(t,0):Ip|=n),Ft(t,e)}function Cw(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=It();t=er(t,e),t!==null&&(ja(t,e,n),Ft(t,n))}function px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cw(t,n)}function mx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),Cw(t,n)}var kw;kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,nx(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Le&&e.flags&1048576&&I0(e,Eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xl(t,e),t=e.pendingProps;var i=Ps(e,St.current);ws(e,n),i=Ep(null,e,r,t,i,n);var s=Sp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,_u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gp(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,zf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&up(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vx(r),t=un(r,t),i){case 0:e=Bf(null,e,r,t,n);break e;case 1:e=Jg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Xg(null,e,r,un(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Jg(t,e,r,i,n);case 3:e:{if(aw(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,R0(t,e),ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ds(Error(O(423)),e),e=Zg(t,e,r,n,i);break e}else if(r!==i){i=Ds(Error(O(424)),e),e=Zg(t,e,r,n,i);break e}else for(Vt=Rr(e.stateNode.containerInfo.firstChild),Bt=e,Le=!0,fn=null,n=L0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=tr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&Ff(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),ow(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return lw(t,e,n);case 4:return vp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=As(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Qg(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Su,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Lt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ws(e,n),i=rn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Xg(t,e,r,i,n);case 15:return iw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Xl(t,e),e.tag=1,Mt(r)?(t=!0,_u(e)):t=!1,ws(e,n),O0(e,r,i),zf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return uw(t,e,n);case 22:return sw(t,e,n)}throw Error(O(156,e.tag))};function xw(t,e){return X_(t,e)}function gx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new gx(t,e,n,r)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vx(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===Jh)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return _i(n.children,i,s,e);case Qh:o=8,i|=8;break;case cf:return t=Zt(12,n,e,i|2),t.elementType=cf,t.lanes=s,t;case df:return t=Zt(13,n,e,i),t.elementType=df,t.lanes=s,t;case ff:return t=Zt(19,n,e,i),t.elementType=ff,t.lanes=s,t;case D_:return Cc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A_:o=10;break e;case O_:o=9;break e;case Xh:o=11;break e;case Jh:o=14;break e;case gr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _i(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Cc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ad(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hd(0),this.expirationTimes=hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Op(t,e,n,r,i,s,o,a,l){return t=new yx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function _x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bw(t){if(!t)return Br;t=t._reactInternals;e:{if(ji(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(Mt(n))return x0(t,n,e)}return e}function Iw(t,e,n,r,i,s,o,a,l){return t=Op(n,r,!0,t,i,s,o,a,l),t.context=bw(null),n=t.current,r=It(),i=Dr(n),s=qn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,ja(t,i,r),Ft(t,r),t}function kc(t,e,n,r){var i=e.current,s=It(),o=Dr(i);return n=bw(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(yn(t,i,o,s),Kl(t,i,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){uv(t,e),(t=t.alternate)&&uv(t,e)}function wx(){return null}var Tw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lp(t){this._internalRoot=t}xc.prototype.render=Lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));kc(t,e,null,null)};xc.prototype.unmount=Lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){kc(null,t,null,null)}),e[Zn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&o0(t)}};function Mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cv(){}function Ex(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Au(o);s.call(u)}}var o=Iw(e,r,t,0,null,!1,!1,"",cv);return t._reactRootContainer=o,t[Zn]=o.current,aa(t.nodeType===8?t.parentNode:t),bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Au(l);a.call(u)}}var l=Op(t,0,!1,null,null,!1,!1,"",cv);return t._reactRootContainer=l,t[Zn]=l.current,aa(t.nodeType===8?t.parentNode:t),bi(function(){kc(e,l,n,r)}),l}function Ic(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Au(o);a.call(l)}}kc(e,o,t,i)}else o=Ex(n,e,t,i,r);return Au(o)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(tp(e,n|1),Ft(e,qe()),!(he&6)&&(Ls=qe()+500,Xr()))}break;case 13:bi(function(){var r=er(t,1);if(r!==null){var i=It();yn(r,t,1,i)}}),Dp(t,1)}};np=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=It();yn(e,t,134217728,n)}Dp(t,134217728)}};r0=function(t){if(t.tag===13){var e=Dr(t),n=er(t,e);if(n!==null){var r=It();yn(n,t,e,r)}Dp(t,e)}};i0=function(){return ye};s0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Sf=function(t,e,n){switch(e){case"input":if(mf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(O(90));M_(r),mf(r,i)}}}break;case"textarea":U_(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};H_=Np;G_=bi;var Sx={usingClientEntryPoint:!1,Events:[Va,ts,vc,W_,$_,Np]},go={findFiberByHostInstance:li,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cx={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q_(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{hc=Pl.inject(Cx),Tn=Pl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(e))throw Error(O(200));return _x(t,e,null,n)};$t.createRoot=function(t,e){if(!Mp(t))throw Error(O(299));var n=!1,r="",i=Tw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Op(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,aa(t.nodeType===8?t.parentNode:t),new Lp(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=q_(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return bi(t)};$t.hydrate=function(t,e,n){if(!bc(e))throw Error(O(200));return Ic(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Mp(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Iw(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xc(e)};$t.render=function(t,e,n){if(!bc(e))throw Error(O(200));return Ic(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!bc(t))throw Error(O(40));return t._reactRootContainer?(bi(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};$t.unstable_batchedUpdates=Np;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Ic(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";function Nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nw)}catch(t){console.error(t)}}Nw(),I_.exports=$t;var kx=I_.exports,dv=kx;lf.createRoot=dv.createRoot,lf.hydrateRoot=dv.hydrateRoot;const xx=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function bx(t){if("serviceWorker"in navigator){if(new URL({}.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n=`${{}.PUBLIC_URL}/service-worker.js`;xx?(Ix(n,t),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Pw(n,t)})}}function Pw(t,e){navigator.serviceWorker.register(t).then(n=>{n.onupdatefound=()=>{const r=n.installing;r!=null&&(r.onstatechange=()=>{r.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(n=>{console.error("Error during service worker registration:",n)})}function Ix(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");n.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(i=>{i.unregister().then(()=>{window.location.reload()})}):Pw(t,e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}const Tx="modulepreload",Nx=function(t){return"/"+t},fv={},Px=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Nx(s),s in fv)return;fv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Tx,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Rx=t=>{t&&t instanceof Function&&Px(()=>import("./web-vitals-9f4c2f45.js"),[]).then(({getCLS:e,getFID:n,getFCP:r,getLCP:i,getTTFB:s})=>{e(t),n(t),r(t),i(t),s(t)})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const L=function(t,e){if(!t)throw qs(e)},qs=function(t){return new Error("Firebase Database ("+Rw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Aw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Ox;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ox extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(t){const e=Aw(t);return Fp.encodeByteArray(e,!0)},Ou=function(t){return Ow(t).replace(/\./g,"")},Du=function(t){try{return Fp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Fx=()=>Mx().__FIREBASE_DEFAULTS__,Ux=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Du(t[1]);return e&&JSON.parse(e)},Up=()=>{try{return Fx()||Ux()||jx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lw=t=>{var e,n;return(n=(e=Up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zx=t=>{const e=Lw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mw=()=>{var t;return(t=Up())===null||t===void 0?void 0:t.config},Fw=t=>{var e;return(e=Up())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Vx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ou(JSON.stringify(n)),Ou(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Bx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wx(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jw(){return Rw.NODE_ADMIN===!0}function $x(){try{return typeof indexedDB=="object"}catch{return!1}}function Hx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="FirebaseError";class Jr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gx,Object.setPrototypeOf(this,Jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jr(i,a,r)}}function Yx(t,e){return t.replace(Kx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ga(Du(s[0])||""),n=ga(Du(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qx=function(t){const e=zw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qx=function(t){const e=zw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function th(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Mu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hv(s)&&hv(o)){if(!Mu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Jx(t,e){const n=new Zx(t,e);return n.subscribe.bind(n)}class Zx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dd),i.error===void 0&&(i.error=Dd),i.complete===void 0&&(i.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}function Tc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ib(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===oi?void 0:t}function ib(t){return t.instantiationMode==="EAGER"}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const ob={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},ab=we.INFO,lb={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zp{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const cb=(t,e)=>e.some(n=>t instanceof n);let pv,mv;function db(){return pv||(pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vw=new WeakMap,nh=new WeakMap,Bw=new WeakMap,Ld=new WeakMap,Vp=new WeakMap;function hb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vw.set(n,t)}).catch(()=>{}),Vp.set(e,t),e}function pb(t){if(nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nh.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mb(t){rh=t(rh)}function gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Md(this),e,...n);return Bw.set(r,e.sort?e.sort():[e]),Mr(r)}:fb().includes(t)?function(...e){return t.apply(Md(this),e),Mr(Vw.get(this))}:function(...e){return Mr(t.apply(Md(this),e))}}function vb(t){return typeof t=="function"?gb(t):(t instanceof IDBTransaction&&pb(t),cb(t,db())?new Proxy(t,rh):t)}function Mr(t){if(t instanceof IDBRequest)return hb(t);if(Ld.has(t))return Ld.get(t);const e=vb(t);return e!==t&&(Ld.set(t,e),Vp.set(e,t)),e}const Md=t=>Vp.get(t);function yb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _b=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],Fd=new Map;function gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_b.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Fd.set(e,s),s}mb(t=>({...t,get:(e,n,r)=>gv(e,n)||t.get(e,n,r),has:(e,n)=>!!gv(e,n)||t.has(e,n)}));/**
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
 */class Eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",vv="0.9.20";/**
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
 */const Ti=new zp("@firebase/app"),Cb="@firebase/app-compat",kb="@firebase/analytics-compat",xb="@firebase/analytics",bb="@firebase/app-check-compat",Ib="@firebase/app-check",Tb="@firebase/auth",Nb="@firebase/auth-compat",Pb="@firebase/database",Rb="@firebase/database-compat",Ab="@firebase/functions",Ob="@firebase/functions-compat",Db="@firebase/installations",Lb="@firebase/installations-compat",Mb="@firebase/messaging",Fb="@firebase/messaging-compat",Ub="@firebase/performance",jb="@firebase/performance-compat",zb="@firebase/remote-config",Vb="@firebase/remote-config-compat",Bb="@firebase/storage",Wb="@firebase/storage-compat",$b="@firebase/firestore",Hb="@firebase/firestore-compat",Gb="firebase",Yb="10.5.0";/**
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
 */const sh="[DEFAULT]",Kb={[ih]:"fire-core",[Cb]:"fire-core-compat",[xb]:"fire-analytics",[kb]:"fire-analytics-compat",[Ib]:"fire-app-check",[bb]:"fire-app-check-compat",[Tb]:"fire-auth",[Nb]:"fire-auth-compat",[Pb]:"fire-rtdb",[Rb]:"fire-rtdb-compat",[Ab]:"fire-fn",[Ob]:"fire-fn-compat",[Db]:"fire-iid",[Lb]:"fire-iid-compat",[Mb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Ub]:"fire-perf",[jb]:"fire-perf-compat",[zb]:"fire-rc",[Vb]:"fire-rc-compat",[Bb]:"fire-gcs",[Wb]:"fire-gcs-compat",[$b]:"fire-fst",[Hb]:"fire-fst-compat","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
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
 */const Fu=new Map,oh=new Map;function qb(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(oh.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of Fu.values())qb(n,t);return!0}function Bp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fr=new $a("app","Firebase",Qb);/**
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
 */class Xb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=Yb;function Ww(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=Mw()),!n)throw Fr.create("no-options");const s=Fu.get(i);if(s){if(Mu(n,s.options)&&Mu(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new sb(i);for(const l of oh.values())o.addComponent(l);const a=new Xb(n,r,o);return Fu.set(i,a),a}function $w(t=sh){const e=Fu.get(t);if(!e&&t===sh&&Mw())return Ww();if(!e)throw Fr.create("no-app",{appName:t});return e}function Ur(t,e,n){var r;let i=(r=Kb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Fs(new Ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jb="firebase-heartbeat-database",Zb=1,va="firebase-heartbeat-store";let Ud=null;function Hw(){return Ud||(Ud=yb(Jb,Zb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(va)}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Ud}async function eI(t){try{return await(await Hw()).transaction(va).objectStore(va).get(Gw(t))}catch(e){if(e instanceof Jr)Ti.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(n.message)}}}async function yv(t,e){try{const r=(await Hw()).transaction(va,"readwrite");await r.objectStore(va).put(e,Gw(t)),await r.done}catch(n){if(n instanceof Jr)Ti.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ti.warn(r.message)}}}function Gw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tI=1024,nI=30*24*60*60*1e3;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_v();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=nI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_v(),{heartbeatsToSend:n,unsentEntries:r}=iI(this._heartbeatsCache.heartbeats),i=Ou(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _v(){return new Date().toISOString().substring(0,10)}function iI(t,e=tI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $x()?Hx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wv(t){return Ou(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oI(t){Fs(new Ii("platform-logger",e=>new Eb(e),"PRIVATE")),Fs(new Ii("heartbeat",e=>new rI(e),"PRIVATE")),Ur(ih,vv,t),Ur(ih,vv,"esm2017"),Ur("fire-js","")}oI("");var aI="firebase",lI="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(aI,lI,"app");const Ev="@firebase/database",Sv="1.0.1";/**
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
 */class cI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ga(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cI(e)}}catch{}return new dI},di=Kw("localStorage"),ah=Kw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new zp("@firebase/database"),fI=function(){let t=1;return function(){return t++}}(),qw=function(t){const e=tb(t),n=new Xx;n.update(e);const r=n.digest();return Fp.encodeByteArray(r)},Ha=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ha.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let wi=null,Cv=!0;const hI=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ss.logLevel=we.VERBOSE,wi=Ss.log.bind(Ss),e&&ah.set("logging_enabled",!0)):typeof t=="function"?wi=t:(wi=null,ah.remove("logging_enabled"))},ft=function(...t){if(Cv===!0&&(Cv=!1,wi===null&&ah.get("logging_enabled")===!0&&hI(!0)),wi){const e=Ha.apply(null,t);wi(e)}},Ga=function(t){return function(...e){ft(t,...e)}},lh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ha(...t);Ss.error(e)},nr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ha(...t)}`;throw Ss.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+Ha(...t);Ss.warn(e)},pI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Us="[MIN_NAME]",Ni="[MAX_NAME]",zi=function(t,e){if(t===e)return 0;if(t===Us||e===Ni)return-1;if(e===Us||t===Ni)return 1;{const n=kv(t),r=kv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},gI=function(t,e){return t===e?0:t<e?-1:1},vo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},$p=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=$p(t[e[r]]);return n+="}",n},Qw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xw=function(t){L(!Wp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},vI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _I(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wI=new RegExp("^-?(0*)\\d{1,10}$"),EI=-2147483648,SI=2147483647,kv=function(t){if(wI.test(t)){const e=Number(t);if(e>=EI&&e<=SI)return e}return null},Js=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},CI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class Cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="5",Jw="v",Zw="s",e1="r",t1="f",n1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,r1="ls",i1="p",uh="ac",s1="websocket",o1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function l1(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===s1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===o1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bI(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={},zd={};function Gp(t){const e=t.toString();return jd[e]||(jd[e]=new II),jd[e]}function TI(t,e){const n=t.toString();return zd[n]||(zd[n]=e()),zd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Js(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="start",PI="close",RI="pLPCommand",AI="pRTLPCB",u1="id",c1="pw",d1="ser",OI="cb",DI="seg",LI="ts",MI="d",FI="dframe",f1=1870,h1=30,UI=f1-h1,jI=25e3,zI=3e4;class ls{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ga(e),this.stats_=Gp(n),this.urlFn=l=>(this.appCheckToken&&(l[uh]=this.appCheckToken),l1(n,o1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zI)),mI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xv)this.id=a,this.password=l;else if(o===PI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[xv]="t",r[d1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[OI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jw]=Hp,this.transportSessionId&&(r[Zw]=this.transportSessionId),this.lastSessionId&&(r[r1]=this.lastSessionId),this.applicationId&&(r[i1]=this.applicationId),this.appCheckToken&&(r[uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&n1.test(location.hostname)&&(r[e1]=t1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vI()&&!yI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ow(n),i=Qw(r,UI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FI]="t",r[u1]=e,r[c1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fI(),window[RI+this.uniqueCallbackIdentifier]=e,window[AI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u1]=this.myID,e[c1]=this.myPW,e[d1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+h1+r.length<=f1;){const o=this.pendingSegs.shift();r=r+"&"+DI+i+"="+o.seg+"&"+LI+i+"="+o.ts+"&"+MI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=16384,BI=45e3;let Uu=null;typeof MozWebSocket<"u"?Uu=MozWebSocket:typeof WebSocket<"u"&&(Uu=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ga(this.connId),this.stats_=Gp(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jw]=Hp,typeof location<"u"&&location.hostname&&n1.test(location.hostname)&&(o[e1]=t1),n&&(o[Zw]=n),r&&(o[r1]=r),i&&(o[uh]=i),s&&(o[i1]=s),l1(e,s1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,di.set("previous_websocket_failure",!0);try{let r;jw(),this.mySock=new Uu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uu!==null&&!hn.forceDisallow_}static previouslyFailed(){return di.isInMemoryStorage||di.get("previous_websocket_failure")===!0}markConnectionHealthy(){di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ga(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qw(n,VI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of ya.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ya.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ya.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=6e4,$I=5e3,HI=10*1024,GI=100*1024,Vd="t",bv="d",YI="s",Iv="r",KI="e",Tv="o",Nv="a",Pv="n",Rv="p",qI="h";class QI{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ga("c:"+this.id+":"),this.transportManager_=new ya(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vd in e){const n=e[Vd];n===Nv?this.upgradeIfSecondaryHealthy_():n===Iv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vo("t",e),r=vo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vo("t",e),r=vo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vo(Vd,e);if(bv in e){const r=e[bv];if(n===qI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YI?this.onConnectionShutdown_(r):n===Iv?this.onReset_(r):n===KI?lh("Server Error: "+r):n===Tv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hp!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($I))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ju extends m1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ju}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=32,Ov=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wr(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function Kp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _a(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function g1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return bt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JI(t,e){const n=_a(t,0),r=_a(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=zi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function qp(t,e){if(Wr(t)!==Wr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function en(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Wr(t)>Wr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ZI{constructor(e,n){this.errorPrefix_=n,this.parts_=_a(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nc(this.parts_[r]);v1(this)}}function eT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nc(e),v1(t)}function tT(t){const e=t.parts_.pop();t.byteLength_-=Nc(e),t.parts_.length>0&&(t.byteLength_-=1)}function v1(t){if(t.byteLength_>Ov)throw new Error(t.errorPrefix_+"has a key path longer than "+Ov+" bytes ("+t.byteLength_+").");if(t.parts_.length>Av)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Av+") or object contains a cycle "+ai(t))}function ai(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends m1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qp}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,nT=60*5*1e3,Dv=30*1e3,rT=1.3,iT=3e4,sT="server_kill",Lv=3;class Qn extends p1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qn.nextPersistentConnectionId_++,this.log_=Ga("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=nT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ju.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Wa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Qn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const r=Ms(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lh("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iT&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Qn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new QI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Tt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(sT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Tt(d),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],th(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$p(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lv&&(this.reconnectDelay_=Dv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yw.replace(/\./g,"-")]=1,jp()?e["framework.cordova"]=1:Uw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ju.getInstance().currentlyOnline();return th(this.interruptReasons_)&&e}}Qn.nextPersistentConnectionId_=0;Qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Us,e),i=new oe(Us,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class y1 extends Pc{static get __EMPTY_NODE(){return Rl}static set __EMPTY_NODE(e){Rl=e}compare(e,n){return zi(e.name,n.name)}isDefinedOn(e){throw qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Ni,Rl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Rl)}toString(){return".key"}}const ks=new y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??Dt.EMPTY_NODE,this.right=s??Dt.EMPTY_NODE}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class oT{copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Al(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Al(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Al(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Al(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new oT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){return zi(t.name,e.name)}function Xp(t,e){return zi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;function lT(t){ch=t}const _1=function(t){return typeof t=="number"?"number:"+Xw(t):"string:"+t},w1=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else L(t===ch||t.isEmpty(),"priority of unexpected type.");L(t===ch||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mv;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),w1(this.priorityNode_)}static set __childrenNodeConstructor(e){Mv=e}static get __childrenNodeConstructor(){return Mv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:se(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Wr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xw(this.value_):e+=this.value_,this.lazyHash_=qw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(n),s=ot.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E1,S1;function uT(t){E1=t}function cT(t){S1=t}class dT extends Pc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Ni,new ot("[PRIORITY-POST]",S1))}makePost(e,n){const r=E1(e);return new oe(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new dT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=Math.log(2);class hT{constructor(e){const n=s=>parseInt(Math.log(s)/fT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new lt(f,d.node,lt.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),_=i(m+1,u);return d=t[m],f=n?n(d):d,new lt(f,d.node,lt.BLACK,y,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,_){const I=d-y,v=d;d-=y;const h=i(I+1,v),g=t[I],p=n?n(g):g;m(new lt(p,g.node,_,null,h))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),I=Math.pow(2,l.count-(y+1));_?f(I,lt.BLACK):(f(I,lt.BLACK),f(I,lt.RED))}return c},o=new hT(t.length),a=s(o);return new Dt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;const Yi={};class Gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Yi&&$e,"ChildrenNode.ts has not been loaded"),Bd=Bd||new Gn({".priority":Yi},{".priority":$e}),Bd}get(e){const n=Ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=zu(r,e.getCompare()):a=Yi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Gn(c,u)}addToIndexes(e,n){const r=Lu(this.indexes_,(i,s)=>{const o=Ms(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Yi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),zu(a,o.getCompare())}else return Yi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Gn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Lu(this.indexes_,i=>{if(i===Yi)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new Gn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&w1(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _o||(_o=new X(new Dt(Xp),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_o}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_o:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_o:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{L(se(e)!==".priority"||Wr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_1(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ya?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pT extends X{constructor(){super(new Dt(Xp),X.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Ya=new pT;Object.defineProperties(oe,{MIN:{value:new oe(Us,X.EMPTY_NODE)},MAX:{value:new oe(Ni,Ya)}});y1.__EMPTY_NODE=X.EMPTY_NODE;ot.__childrenNodeConstructor=X;lT(Ya);cT(Ya);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=!0;function tt(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,tt(e))}if(!(t instanceof Array)&&mT){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=zu(n,aT,o=>o.name,Xp);if(r){const o=zu(n,$e.getCompare());return new X(s,tt(e),new Gn({".priority":o},{".priority":$e}))}else return new X(s,tt(e),Gn.Default)}else{let n=X.EMPTY_NODE;return gt(t,(r,i)=>{if(On(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}uT(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends Pc{constructor(e){super(),this.indexPath_=e,L(!ce(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zi(e.name,n.name):s}makePost(e,n){const r=tt(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Ya);return new oe(Ni,e)}toString(){return _a(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Pc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=tt(e);return new oe(n,r)}toString(){return".value"}}const yT=new vT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){return{type:"value",snapshotNode:t}}function js(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ea(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _T(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(wa(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(js(n,r)):o.trackChildChange(Ea(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(wa(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ea(i,s,o))}else r.trackChildChange(js(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.indexedFilter_=new Jp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sa.getStartPost_(e),this.endPost_=Sa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Sa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ea(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(wa(n,d));const _=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(js(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(wa(u.name,u.node)),s.trackChildChange(js(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Us}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Zp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ET(t){return t.loadsAllData()?new Jp(t.getIndex()):t.hasLimit()?new wT(t):new Sa(t)}function Fv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$e?n="$priority":t.index_===yT?n="$value":t.index_===ks?n="$key":(L(t.index_ instanceof gT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Uv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends p1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ga("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Vu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ms(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Vu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fv(e._queryParams),r=e._path.toString(),i=new Wa;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ga(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bu(){return{value:null,children:new Map}}function k1(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Bu());const i=t.children.get(r);e=be(e),k1(i,e,n)}}function dh(t,e,n){t.value!==null?n(e,t.value):CT(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);dh(i,s,n)})}function CT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jv=10*1e3,xT=30*1e3,bT=5*60*1e3;class IT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kT(e);const r=jv+(xT-jv)*Math.random();zo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&On(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),zo(this.reportStats_.bind(this),Math.floor(Math.random()*2*bT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function em(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=em()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Wu(me(),n,this.revert)}}else return L(se(this.path)===e,"operationForChild called for unrelated child."),new Wu(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Ca(this.source,me()):new Ca(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Pi(this.source,me(),n.value):new zs(this.source,me(),n)}else return L(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zs(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_T(o.childName,o.snapshotNode))}),wo(t,i,"child_removed",e,r,n),wo(t,i,"child_added",e,r,n),wo(t,i,"child_moved",s,r,n),wo(t,i,"child_changed",e,r,n),wo(t,i,"value",e,r,n),i}function wo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RT(t,a,l)),o.forEach(a=>{const l=PT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function PT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RT(t,e,n){if(e.childName==null||n.childName==null)throw qs("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e){return{eventCache:t,serverCache:e}}function Vo(t,e,n,r){return Rc(new $r(e,n,r),t.serverCache)}function x1(t,e,n,r){return Rc(t.eventCache,new $r(e,n,r))}function $u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wd;const AT=()=>(Wd||(Wd=new Dt(gI)),Wd);class xe{constructor(e,n=AT()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return gt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ce(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:We(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new xe(null)}}set(e,n){if(ce(e))return new xe(n,this.children);{const r=se(e),s=(this.children.get(r)||new xe(null)).set(be(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(ce(e))return n;{const r=se(e),s=(this.children.get(r)||new xe(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(be(e),We(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),We(n,i),r):new xe(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new xe(null))}}function Bo(t,e,n){if(ce(e))return new _n(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function fh(t,e,n){let r=t;return gt(n,(i,s)=>{r=Bo(r,We(e,i),s)}),r}function zv(t,e){if(ce(e))return _n.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new _n(n)}}function hh(t,e){return Vi(t,e)!=null}function Vi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function Vv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function jr(t,e){if(ce(e))return t;{const n=Vi(t,e);return n!=null?new _n(new xe(n)):new _n(t.writeTree_.subtree(e))}}function ph(t){return t.writeTree_.isEmpty()}function Vs(t,e){return b1(me(),t.writeTree_,e)}function b1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=b1(We(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){return P1(e,t)}function OT(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bo(t.visibleWrites,e,n)),t.lastWriteId=r}function DT(t,e,n,r){L(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=fh(t.visibleWrites,e,n),t.lastWriteId=r}function LT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function MT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&FT(a,r.path)?i=!1:en(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return UT(t),!0;if(r.snap)t.visibleWrites=zv(t.visibleWrites,r.path);else{const a=r.children;gt(a,l=>{t.visibleWrites=zv(t.visibleWrites,We(r.path,l))})}return!0}else return!1}function FT(t,e){if(t.snap)return en(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&en(We(t.path,n),e))return!0;return!1}function UT(t){t.visibleWrites=I1(t.allWrites,jT,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jT(t){return t.visible}function I1(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)en(n,o)?(a=bt(n,o),r=Bo(r,a,s.snap)):en(o,n)&&(a=bt(o,n),r=Bo(r,me(),s.snap.getChild(a)));else if(s.children){if(en(n,o))a=bt(n,o),r=fh(r,a,s.children);else if(en(o,n))if(a=bt(o,n),ce(a))r=fh(r,me(),s.children);else{const l=Ms(s.children,se(a));if(l){const u=l.getChild(be(a));r=Bo(r,me(),u)}}}else throw qs("WriteRecord should have .snap or .children")}}return r}function T1(t,e,n,r,i){if(!r&&!i){const s=Vi(t.visibleWrites,e);if(s!=null)return s;{const o=jr(t.visibleWrites,e);if(ph(o))return n;if(n==null&&!hh(o,me()))return null;{const a=n||X.EMPTY_NODE;return Vs(o,a)}}}else{const s=jr(t.visibleWrites,e);if(!i&&ph(s))return n;if(!i&&n==null&&!hh(s,me()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(en(u.path,e)||en(e,u.path))},a=I1(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Vs(a,l)}}}function zT(t,e,n){let r=X.EMPTY_NODE;const i=Vi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=jr(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=Vs(jr(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),Vv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=jr(t.visibleWrites,e);return Vv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function VT(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=We(e,n);if(hh(t.visibleWrites,s))return null;{const o=jr(t.visibleWrites,s);return ph(o)?i.getChild(n):Vs(o,i.getChild(n))}}function BT(t,e,n,r){const i=We(e,n),s=Vi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=jr(t.visibleWrites,i);return Vs(o,r.getNode().getImmediateChild(n))}else return null}function WT(t,e){return Vi(t.visibleWrites,e)}function $T(t,e,n,r,i,s,o){let a;const l=jr(t.visibleWrites,e),u=Vi(l,me());if(u!=null)a=u;else if(n!=null)a=Vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function HT(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Hu(t,e,n,r){return T1(t.writeTree,t.treePath,e,n,r)}function rm(t,e){return zT(t.writeTree,t.treePath,e)}function Bv(t,e,n,r){return VT(t.writeTree,t.treePath,e,n,r)}function Gu(t,e){return WT(t.writeTree,We(t.treePath,e))}function GT(t,e,n,r,i,s){return $T(t.writeTree,t.treePath,e,n,r,i,s)}function im(t,e,n){return BT(t.writeTree,t.treePath,e,n)}function N1(t,e){return P1(We(t.treePath,e),t.writeTree)}function P1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ea(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,wa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,js(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ea(r,e.snapshotNode,i.oldSnap));else throw qs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const R1=new KT;class sm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return im(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),s=GT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){return{filter:t}}function QT(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XT(t,e,n,r,i){const s=new YT;let o,a;if(n.type===mn.OVERWRITE){const u=n;u.source.fromUser?o=mh(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ce(u.path),o=Yu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===mn.MERGE){const u=n;u.source.fromUser?o=ZT(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=gh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===mn.ACK_USER_WRITE){const u=n;u.revert?o=nN(t,e,u.path,r,i,s):o=eN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mn.LISTEN_COMPLETE)o=tN(t,e,n.path,r,s);else throw qs("Unknown operation type: "+n.type);const l=s.getChanges();return JT(e,o,l),{viewCache:o,changes:l}}function JT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(C1($u(e)))}}function A1(t,e,n,r,i,s){const o=e.eventCache;if(Gu(r,n)!=null)return e;{let a,l;if(ce(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ri(e),c=u instanceof X?u:X.EMPTY_NODE,d=rm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Hu(r,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){L(Wr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Bv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=be(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Bv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=im(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Vo(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Yu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ce(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=se(n);if(!l.isCompleteForPath(n)&&Wr(n)>1)return e;const y=be(n),I=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),I):u=c.updateChild(l.getNode(),m,I,y,R1,null)}const d=x1(e,u,l.isFullyInitialized()||ce(n),c.filtersNodes()),f=new sm(i,d,s);return A1(t,d,n,i,f,a)}function mh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new sm(i,e,s);if(ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Vo(e,u,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Vo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),m=a.getNode().getImmediateChild(d);let y;if(ce(f))y=r;else{const _=c.getCompleteChild(d);_!=null?Kp(f)===".priority"&&_.getChild(g1(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=X.EMPTY_NODE}if(m.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=Vo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wv(t,e){return t.eventCache.isCompleteForChild(e)}function ZT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=We(n,l);Wv(e,se(c))&&(a=mh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=We(n,l);Wv(e,se(c))||(a=mh(t,a,c,u,i,s,o))}),a}function $v(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function gh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ce(n)?u=r:u=new xe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=$v(t,m,f);l=Yu(t,l,new Ee(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),_=$v(t,y,f);l=Yu(t,l,new Ee(d),_,i,s,o,a)}}),l}function eN(t,e,n,r,i,s,o){if(Gu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let u=new xe(null);return l.getNode().forEachChild(ks,(c,d)=>{u=u.set(new Ee(c),d)}),gh(t,e,n,u,i,s,a,o)}else return e}else{let u=new xe(null);return r.foreach((c,d)=>{const f=We(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),gh(t,e,n,u,i,s,a,o)}}function tN(t,e,n,r,i){const s=e.serverCache,o=x1(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return A1(t,o,n,r,R1,i)}function nN(t,e,n,r,i,s){let o;if(Gu(r,n)!=null)return e;{const a=new sm(r,e,i),l=e.eventCache.getNode();let u;if(ce(n)||se(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Hu(r,Ri(e));else{const d=e.serverCache.getNode();L(d instanceof X,"serverChildren would be complete if leaf node"),c=rm(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=se(n);let d=im(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,be(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,X.EMPTY_NODE,be(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hu(r,Ri(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Gu(r,me())!=null,Vo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Jp(r.getIndex()),s=ET(r);this.processor_=qT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),c=new $r(l,o.isFullyInitialized(),i.filtersNodes()),d=new $r(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Rc(d,c),this.eventGenerator_=new TT(this.query_)}get query(){return this.query_}}function iN(t){return t.viewCache_.serverCache.getNode()}function sN(t){return $u(t.viewCache_)}function oN(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Hv(t){return t.eventRegistrations_.length===0}function aN(t,e){t.eventRegistrations_.push(e)}function Gv(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Yv(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(L(Ri(t.viewCache_),"We should always have a full cache before handling merges"),L($u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=XT(t.processor_,i,e,n,r);return QT(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,O1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(js(s,o))}),n.isFullyInitialized()&&r.push(C1(n.getNode())),O1(t,r,n.getNode(),e)}function O1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return NT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;class D1{constructor(){this.views=new Map}}function uN(t){L(!Ku,"__referenceConstructor has already been defined"),Ku=t}function cN(){return L(Ku,"Reference.ts has not been loaded"),Ku}function dN(t){return t.views.size===0}function om(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),Yv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Yv(o,e,n,r));return s}}function L1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Hu(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=rm(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=Rc(new $r(a,l,!1),new $r(r,i,!1));return new rN(e,u)}return o}function fN(t,e,n,r,i,s){const o=L1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),aN(o,n),lN(o,n)}function hN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Hr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Gv(u,n,r)),Hv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Gv(l,n,r)),Hv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Hr(t)&&s.push(new(cN())(e._repo,e._path)),{removed:s,events:o}}function M1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zr(t,e){let n=null;for(const r of t.views.values())n=n||oN(r,e);return n}function F1(t,e){if(e._queryParams.loadsAllData())return Oc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function U1(t,e){return F1(t,e)!=null}function Hr(t){return Oc(t)!=null}function Oc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;function pN(t){L(!qu,"__referenceConstructor has already been defined"),qu=t}function mN(){return L(qu,"Reference.ts has not been loaded"),qu}let gN=1;class Kv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=HT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function j1(t,e,n,r,i){return OT(t.pendingWriteTree_,e,n,r,i),i?Zs(t,new Pi(em(),e,n)):[]}function vN(t,e,n,r){DT(t.pendingWriteTree_,e,n,r);const i=xe.fromObject(n);return Zs(t,new zs(em(),e,i))}function xr(t,e,n=!1){const r=LT(t.pendingWriteTree_,e);if(MT(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(me(),!0):gt(r.children,o=>{s=s.set(new Ee(o),!0)}),Zs(t,new Wu(r.path,s,n))}else return[]}function Ka(t,e,n){return Zs(t,new Pi(tm(),e,n))}function yN(t,e,n){const r=xe.fromObject(n);return Zs(t,new zs(tm(),e,r))}function _N(t,e){return Zs(t,new Ca(tm(),e))}function wN(t,e,n){const r=lm(t,n);if(r){const i=um(r),s=i.path,o=i.queryId,a=bt(s,e),l=new Ca(nm(o),a);return cm(t,s,l)}else return[]}function Qu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||U1(o,e))){const l=hN(o,e,n,r);dN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Hr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=CN(f);for(let y=0;y<m.length;++y){const _=m[y],I=_.query,v=W1(t,_);t.listenProvider_.startListening(Wo(I),ka(t,I),v.hashFn,v.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Wo(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Dc(f));t.listenProvider_.stopListening(Wo(f),m)}))}kN(t,u)}return a}function z1(t,e,n,r){const i=lm(t,r);if(i!=null){const s=um(i),o=s.path,a=s.queryId,l=bt(o,e),u=new Pi(nm(a),l,n);return cm(t,o,u)}else return[]}function EN(t,e,n,r){const i=lm(t,r);if(i){const s=um(i),o=s.path,a=s.queryId,l=bt(o,e),u=xe.fromObject(n),c=new zs(nm(a),l,u);return cm(t,o,c)}else return[]}function vh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const y=bt(f,i);s=s||zr(m,y),o=o||Hr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Hr(a),s=s||zr(a,me())):(a=new D1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=zr(y,me());_&&(s=s.updateImmediateChild(m,_))}));const u=U1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Dc(e);L(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=xN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=Ac(t.pendingWriteTree_,i);let d=fN(a,e,n,c,s,l);if(!u&&!o&&!r){const f=F1(a,e);d=d.concat(bN(t,e,f))}return d}function am(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),u=zr(a,l);if(u)return u});return T1(i,e,s,n,!0)}function SN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=bt(u,n);r=r||zr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||zr(i,me()):(i=new D1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $r(r,!0,!1):null,a=Ac(t.pendingWriteTree_,e._path),l=L1(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return sN(l)}function Zs(t,e){return V1(e,t.syncPointTree_,null,Ac(t.pendingWriteTree_,me()))}function V1(t,e,n,r){if(ce(t.path))return B1(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=zr(i,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=N1(r,o);s=s.concat(V1(a,l,u,c))}return i&&(s=s.concat(om(i,t,r,n))),s}}function B1(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=zr(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=N1(r,o),c=t.operationForChild(o);c&&(s=s.concat(B1(c,a,l,u)))}),i&&(s=s.concat(om(i,t,r,n))),s}function W1(t,e){const n=e.query,r=ka(t,n);return{hashFn:()=>(iN(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wN(t,n._path,r):_N(t,n._path);{const s=_I(i,n);return Qu(t,n,null,s)}}}}function ka(t,e){const n=Dc(e);return t.queryToTagMap.get(n)}function Dc(t){return t._path.toString()+"$"+t._queryIdentifier}function lm(t,e){return t.tagToQueryMap.get(e)}function um(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function cm(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=Ac(t.pendingWriteTree_,e);return om(r,n,i,null)}function CN(t){return t.fold((e,n,r)=>{if(n&&Hr(n))return[Oc(n)];{let i=[];return n&&(i=M1(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Wo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mN())(t._repo,t._path):t}function kN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Dc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function xN(){return gN++}function bN(t,e,n){const r=e._path,i=ka(t,e),s=W1(t,n),o=t.listenProvider_.startListening(Wo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!Hr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ce(u)&&c&&Hr(c))return[Oc(c).query];{let f=[];return c&&(f=f.concat(M1(c).map(m=>m.query))),gt(d,(m,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Wo(c),ka(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dm(n)}node(){return this.node_}}class fm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new fm(this.syncTree_,n)}node(){return am(this.syncTree_,this.path_)}}const IN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qv=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NN(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},NN=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$1=function(t,e,n,r){return hm(e,new fm(n,t),r)},H1=function(t,e,n){return hm(t,new dm(e),n)};function hm(t,e,n){const r=t.getPriority().val(),i=qv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=qv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ot(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ot(i))),o.forEachChild($e,(a,l)=>{const u=hm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function mm(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=se(n);for(;i!==null;){const s=Ms(r.node.children,i)||{children:{},childCount:0};r=new pm(i,r,s),n=be(n),i=se(n)}return r}function eo(t){return t.node.value}function G1(t,e){t.node.value=e,yh(t)}function Y1(t){return t.node.childCount>0}function PN(t){return eo(t)===void 0&&!Y1(t)}function Lc(t,e){gt(t.node.children,(n,r)=>{e(new pm(n,t,r))})}function K1(t,e,n,r){n&&!r&&e(t),Lc(t,i=>{K1(i,e,!0,r)}),n&&r&&e(t)}function RN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function qa(t){return new Ee(t.parent===null?t.name:qa(t.parent)+"/"+t.name)}function yh(t){t.parent!==null&&AN(t.parent,t.name,t)}function AN(t,e,n){const r=PN(n),i=On(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=/[\[\].#$\/\u0000-\u001F\u007F]/,DN=/[\[\].#$\u0000-\u001F\u007F]/,$d=10*1024*1024,gm=function(t){return typeof t=="string"&&t.length!==0&&!ON.test(t)},q1=function(t){return typeof t=="string"&&t.length!==0&&!DN.test(t)},LN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),q1(t)},MN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Wp(t)||t&&typeof t=="object"&&On(t,".sv")},FN=function(t,e,n,r){r&&e===void 0||Mc(Tc(t,"value"),e,n)},Mc=function(t,e,n){const r=n instanceof Ee?new ZI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ai(r));if(typeof e=="function")throw new Error(t+"contains a function "+ai(r)+" with contents = "+e.toString());if(Wp(e))throw new Error(t+"contains "+e.toString()+" "+ai(r));if(typeof e=="string"&&e.length>$d/3&&Nc(e)>$d)throw new Error(t+"contains a string greater than "+$d+" utf8 bytes "+ai(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gm(o)))throw new Error(t+" contains an invalid key ("+o+") "+ai(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eT(r,o),Mc(t,a,r),tT(r)}),i&&s)throw new Error(t+' contains ".value" child '+ai(r)+" in addition to actual children.")}},UN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=_a(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!gm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&en(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},jN=function(t,e,n,r){if(r&&e===void 0)return;const i=Tc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const l=new Ee(o);if(Mc(i,a,We(n,l)),Kp(l)===".priority"&&!MN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),UN(i,s)},Q1=function(t,e,n,r){if(!(r&&n===void 0)&&!q1(n))throw new Error(Tc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q1(t,e,n,r)},X1=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},VN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LN(n))throw new Error(Tc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function J1(t,e,n){Fc(t,n),Z1(t,r=>qp(r,e))}function on(t,e,n){Fc(t,n),Z1(t,r=>en(r,e)||en(e,r))}function Z1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(WN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wi&&ft("event: "+n.toString()),Js(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="repo_interrupt",HN=25;class GN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bu(),this.transactionQueueTree_=new pm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YN(t,e,n){if(t.stats_=Gp(t.repoInfo_),t.forceRestClient_||CI())t.server_=new Vu(t.repoInfo_,(r,i,s,o)=>{Qv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qn(t.repoInfo_,e,(r,i,s,o)=>{Qv(t,r,i,s,o)},r=>{Xv(t,r)},r=>{qN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=TI(t.repoInfo_,()=>new IT(t.stats_,t.server_)),t.infoData_=new ST,t.infoSyncTree_=new Kv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ka(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vm(t,"connected",!1),t.serverSyncTree_=new Kv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);on(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function KN(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Uc(t){return IN({timestamp:KN(t)})}function Qv(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Lu(n,u=>tt(u));o=EN(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=z1(t.serverSyncTree_,s,l,i)}else if(r){const l=Lu(n,u=>tt(u));o=yN(t.serverSyncTree_,s,l)}else{const l=tt(n);o=Ka(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Bs(t,s)),on(t.eventQueue_,a,o)}function Xv(t,e){vm(t,"connected",e),e===!1&&ZN(t)}function qN(t,e){gt(e,(n,r)=>{vm(t,n,r)})}function vm(t,e,n){const r=new Ee("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Ka(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function ym(t){return t.nextWriteId_++}function QN(t,e,n){const r=SN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=tt(i).withIndex(e._queryParams.getIndex());vh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ka(t.serverSyncTree_,e._path,s);else{const a=ka(t.serverSyncTree_,e);o=z1(t.serverSyncTree_,e._path,s,a)}return on(t.eventQueue_,e._path,o),Qu(t.serverSyncTree_,e,n,null,!0),s},i=>(Qa(t,"get for query "+nt(e)+" failed: "+i),Promise.reject(new Error(i))))}function XN(t,e,n,r,i){Qa(t,"set",{path:e.toString(),value:n,priority:r});const s=Uc(t),o=tt(n,r),a=am(t.serverSyncTree_,e),l=H1(o,a,s),u=ym(t),c=j1(t.serverSyncTree_,e,l,u,!0);Fc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const y=f==="ok";y||Tt("set at "+e+" failed: "+f);const _=xr(t.serverSyncTree_,u,!y);on(t.eventQueue_,e,_),_h(t,i,f,m)});const d=wm(t,e);Bs(t,d),on(t.eventQueue_,d,[])}function JN(t,e,n,r){Qa(t,"update",{path:e.toString(),value:n});let i=!0;const s=Uc(t),o={};if(gt(n,(a,l)=>{i=!1,o[a]=$1(We(e,a),tt(l),t.serverSyncTree_,s)}),i)ft("update() called with empty data.  Don't do anything."),_h(t,r,"ok",void 0);else{const a=ym(t),l=vN(t.serverSyncTree_,e,o,a);Fc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Tt("update at "+e+" failed: "+u);const f=xr(t.serverSyncTree_,a,!d),m=f.length>0?Bs(t,e):e;on(t.eventQueue_,m,f),_h(t,r,u,c)}),gt(n,u=>{const c=wm(t,We(e,u));Bs(t,c)}),on(t.eventQueue_,e,[])}}function ZN(t){Qa(t,"onDisconnectEvents");const e=Uc(t),n=Bu();dh(t.onDisconnect_,me(),(i,s)=>{const o=$1(i,s,t.serverSyncTree_,e);k1(n,i,o)});let r=[];dh(n,me(),(i,s)=>{r=r.concat(Ka(t.serverSyncTree_,i,s));const o=wm(t,i);Bs(t,o)}),t.onDisconnect_=Bu(),on(t.eventQueue_,me(),r)}function eP(t,e,n){let r;se(e._path)===".info"?r=vh(t.infoSyncTree_,e,n):r=vh(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function Jv(t,e,n){let r;se(e._path)===".info"?r=Qu(t.infoSyncTree_,e,n):r=Qu(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function tP(t){t.persistentConnection_&&t.persistentConnection_.interrupt($N)}function Qa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function _h(t,e,n,r){e&&Js(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function eE(t,e,n){return am(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function _m(t,e=t.transactionQueueTree_){if(e||jc(t,e),eo(e)){const n=nE(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nP(t,qa(e),n)}else Y1(e)&&Lc(e,n=>{_m(t,n)})}function nP(t,e,n){const r=n.map(u=>u.currentWriteId),i=eE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=bt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Qa(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(xr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();jc(t,mm(t.transactionQueueTree_,e)),_m(t,t.transactionQueueTree_),on(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Js(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Bs(t,e)}},o)}function Bs(t,e){const n=tE(t,e),r=qa(n),i=nE(t,n);return rP(t,i,r),r}function rP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bt(n,l.path);let c=!1,d;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HN)c=!0,d="maxretry",i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=eE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Mc("transaction failed: Data returned ",m,l.path);let y=tt(m);typeof m=="object"&&m!=null&&On(m,".priority")||(y=y.updatePriority(f.getPriority()));const I=l.currentWriteId,v=Uc(t),h=H1(y,f,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=ym(t),o.splice(o.indexOf(I),1),i=i.concat(j1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(xr(t.serverSyncTree_,I,!0))}else c=!0,d="nodata",i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}jc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Js(r[a]);_m(t,t.transactionQueueTree_)}function tE(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&eo(r)===void 0;)r=mm(r,n),e=be(e),n=se(e);return r}function nE(t,e){const n=[];return rE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rE(t,e,n){const r=eo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Lc(e,i=>{rE(t,i,n)})}function jc(t,e){const n=eo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,G1(e,n.length>0?n:void 0)}Lc(e,r=>{jc(t,r)})}function wm(t,e){const n=qa(tE(t,e)),r=mm(t.transactionQueueTree_,e);return RN(r,i=>{Hd(t,i)}),Hd(t,r),K1(r,i=>{Hd(t,i)}),n}function Hd(t,e){const n=eo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?G1(e,void 0):n.length=s+1,on(t.eventQueue_,qa(e),i);for(let o=0;o<r.length;o++)Js(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zv=function(t,e){const n=oP(t),r=n.namespace;n.domain==="firebase.com"&&nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new a1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},oP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=iP(t.substring(c,d)));const f=sP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Em{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:Kp(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=Uv(this._queryParams),n=$p(e);return n==="{}"?"default":n}get _queryObject(){return Uv(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Em))return!1;const n=this._repo===e._repo,r=qp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XI(this._path)}}class Dn extends Em{constructor(e,n){super(e,n,new Zp,!1)}get parent(){const e=g1(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ws{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=xa(this.ref,e);return new Ws(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ws(i,xa(this.ref,r),$e)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ht(t,e){return t=Rt(t),t._checkNotDeleted("ref"),e!==void 0?xa(t._root,e):t._root}function xa(t,e){return t=Rt(t),se(t._path)===null?zN("child","path",e,!1):Q1("child","path",e,!1),new Dn(t._repo,We(t._path,e))}function aP(t){return X1("remove",t._path),us(t,null)}function us(t,e){t=Rt(t),X1("set",t._path),FN("set",e,t._path,!1);const n=new Wa;return XN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ba(t,e){jN("update",e,t._path,!1);const n=new Wa;return JN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function lP(t){t=Rt(t);const e=new oE(()=>{}),n=new zc(e);return QN(t._repo,t,n).then(r=>new Ws(r,new Dn(t._repo,t._path),t._queryParams.getIndex()))}class zc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iE("value",this,new Ws(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}matches(e){return e instanceof zc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=xa(new Dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new iE(e.type,this,new Ws(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Sm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function uP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Jv(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new oE(n,s||void 0),a=e==="value"?new zc(o):new Sm(e,o);return eP(t._repo,t,a),()=>Jv(t._repo,t,a)}function $o(t,e,n,r){return uP(t,"value",e,n,r)}function aE(t,...e){let n=Rt(t);for(const r of e)n=r._apply(n);return n}uN(Dn);pN(Dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="FIREBASE_DATABASE_EMULATOR_HOST",wh={};let dP=!1;function fP(t,e,n,r){t.repoInfo_=new a1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function hP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[cP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Zv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Cs(Cs.OWNER):new xI(t.name,t.options,e);VN("Invalid Firebase Database URL",o),ce(o.path)||nr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=mP(a,t,c,new kI(t.name,n));return new gP(d,t)}function pP(t,e){const n=wh[e];(!n||n[t.key]!==t)&&nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tP(t),delete n[t.key]}function mP(t,e,n,r){let i=wh[e.name];i||(i={},wh[e.name]=i);let s=i[t.toURLString()];return s&&nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new GN(t,dP,n,r),i[t.toURLString()]=s,s}class gP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nr("Cannot call "+e+" on a deleted database.")}}function lE(t=$w(),e){const n=Bp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=zx("database");r&&vP(n,...r)}return n}function vP(t,e,n,r={}){t=Rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Cs(Cs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Vx(r.mockUserToken,t.app.options.projectId);s=new Cs(o)}fP(i,e,n,s)}/**
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
 */function yP(t){uI(Xs),Fs(new Ii("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ur(Ev,Sv,t),Ur(Ev,Sv,"esm2017")}Qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yP();function Cm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=uE,cE=new $a("auth","Firebase",uE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new zp("@firebase/auth");function wP(t,...e){Xu.logLevel<=we.WARN&&Xu.warn(`Auth (${Xs}): ${t}`,...e)}function tu(t,...e){Xu.logLevel<=we.ERROR&&Xu.error(`Auth (${Xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw km(t,...e)}function Pn(t,...e){return km(t,...e)}function dE(t,e,n){const r=Object.assign(Object.assign({},_P()),{[e]:n});return new $a("auth","Firebase",r).create(e,{appName:t.name})}function EP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),dE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cE.create(t,...e)}function ne(t,e,...n){if(!t)throw km(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function rr(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SP(){return ey()==="http:"||ey()==="https:"}function ey(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||Bx()||"connection"in navigator)?navigator.onLine:!0}function kP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=jp()||Uw()}get(){return CP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bP=new Xa(3e4,6e4);function hE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ja(t,e,n,r,i={}){return pE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fE.fetch()(mE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xP),e);try{const i=new TP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ol(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ol(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ol(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dE(t,c,u);An(t,c)}}catch(i){if(i instanceof Jr)throw i;An(t,"network-request-failed",{message:String(i)})}}async function IP(t,e,n,r,i={}){const s=await Ja(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xm(t.config,i):`${t.config.apiScheme}://${i}`}class TP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),bP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return Ja(t,"POST","/v1/accounts:delete",e)}async function PP(t,e){return Ja(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RP(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=bm(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ho(Gd(i.auth_time)),issuedAtTime:Ho(Gd(i.iat)),expirationTime:Ho(Gd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gd(t){return Number(t)*1e3}function bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Du(n);return i?JSON.parse(i):(tu("Failed to decode base64 JWT payload"),null)}catch(i){return tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function AP(t){const e=bm(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jr&&OP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ho(this.lastLoginAt),this.creationTime=Ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ia(t,PP(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FP(s.providerUserInfo):[],a=MP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LP(t){const e=Rt(t);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FP(t){return t.map(e=>{var{providerId:n}=e,r=Cm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){const n=await pE(t,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await UP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ta;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ta,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ia(this,NP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:C,providerData:b,stsTokenManager:x}=n;ne(g&&x,e,"internal-error");const R=Ta.fromJSON(this.name,x);ne(typeof g=="string",e,"internal-error"),pr(d,e.name),pr(f,e.name),ne(typeof p=="boolean",e,"internal-error"),ne(typeof C=="boolean",e,"internal-error"),pr(m,e.name),pr(y,e.name),pr(_,e.name),pr(I,e.name),pr(v,e.name),pr(h,e.name);const M=new Ei({uid:g,auth:e,email:f,emailVerified:p,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:R,createdAt:v,lastLoginAt:h});return b&&Array.isArray(b)&&(M.providerData=b.map(j=>Object.assign({},j))),I&&(M._redirectEventId=I),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ta;i.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ju(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function Kn(t){rr(t instanceof Function,"Expected a class definition");let e=ty.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ty.set(t,e),e)}/**
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
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Kn(ny),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kn(ny);const o=nu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ei._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SE(e))return"Blackberry";if(CE(e))return"Webos";if(Im(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(EE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yE(t=Ct()){return/firefox\//i.test(t)}function Im(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(t=Ct()){return/crios\//i.test(t)}function wE(t=Ct()){return/iemobile/i.test(t)}function EE(t=Ct()){return/android/i.test(t)}function SE(t=Ct()){return/blackberry/i.test(t)}function CE(t=Ct()){return/webos/i.test(t)}function Vc(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jP(t=Ct()){var e;return Vc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zP(){return Wx()&&document.documentMode===10}function kE(t=Ct()){return Vc(t)||EE(t)||CE(t)||SE(t)||/windows phone/i.test(t)||wE(t)}function VP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e=[]){let n;switch(t){case"Browser":n=ry(Ct());break;case"Worker":n=`${ry(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */async function WP(t,e={}){return Ja(t,"GET","/v2/passwordPolicy",hE(t,e))}/**
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
 */class GP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new BP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WP(this),n=new HP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bc(t){return Rt(t)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jx(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YP().appendChild(r)})}function qP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){const n=Bp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mu(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function XP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JP(t,e,n){const r=Bc(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bE(e),{host:o,port:a}=ZP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eR()}function bE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZP(t){const e=bE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sy(o)}}}function sy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return IP(t,"POST","/v1/accounts:signInWithIdp",hE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="http://localhost";class Ai extends IE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:tR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Za extends Tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Za{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Za{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Za{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ei._fromIdTokenResponse(e,r,i),o=oy(r);return new $s({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=oy(r);return new $s({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Jr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zu(e,n,r,i)}}function TE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(t,s,e,r):s})}async function nR(t,e,n=!1){const r=await Ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",r)}/**
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
 */async function rR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ia(t,TE(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=bm(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),$s._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e,n=!1){const r="signIn",i=await TE(t,r,e),s=await $s._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sR(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function oR(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function NE(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function aR(t){return Rt(t).signOut()}const ec="__sak";/**
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
 */class PE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(){const t=Ct();return Im(t)||Vc(t)}const uR=1e3,cR=10;class RE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lR()&&VP(),this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RE.type="LOCAL";const dR=RE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await fR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Nm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function pR(t){Rn().location.href=t}/**
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
 */function DE(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function mR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vR(){return DE()?self:null}/**
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
 */const LE="firebaseLocalStorageDb",yR=1,tc="firebaseLocalStorage",ME="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function _R(){const t=indexedDB.deleteDatabase(LE);return new el(t).toPromise()}function Sh(){const t=indexedDB.open(LE,yR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:ME})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await _R(),e(await Sh()))})})}async function ay(t,e,n){const r=$c(t,!0).put({[ME]:e,value:n});return new el(r).toPromise()}async function wR(t,e){const n=$c(t,!1).get(e),r=await new el(n).toPromise();return r===void 0?null:r.value}function ly(t,e){const n=$c(t,!0).delete(e);return new el(n).toPromise()}const ER=800,SR=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(vR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sh();return await ay(e,ec,"1"),await ly(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$c(i,!1).getAll();return new el(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const CR=FE;new Xa(3e4,6e4);/**
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
 */function UE(t,e){return e?Kn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pm extends IE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kR(t){return iR(t.auth,new Pm(t),t.bypassAuthState)}function xR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),rR(n,new Pm(t),t.bypassAuthState)}async function bR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),nR(n,new Pm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kR;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:An(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Xa(2e3,1e4);async function TR(t,e,n){const r=Bc(t);EP(t,e,Tm);const i=UE(r,n);return new fi(r,"signInViaPopup",e,i).executeNotNull()}class fi extends jE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="pendingRedirect",ru=new Map;class PR extends jE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(t,e){const n=DR(e),r=OR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AR(t,e){ru.set(t._key(),e)}function OR(t){return Kn(t._redirectPersistence)}function DR(t){return nu(NR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){const r=Bc(t),i=UE(r,e),o=await new PR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=10*60*1e3;class FR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MR&&this.cachedEventUids.clear(),this.cachedEventUids.has(uy(e))}saveEventToCache(e){this.cachedEventUids.add(uy(e)),this.lastProcessedEventTime=Date.now()}}function uy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e={}){return Ja(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VR=/^https?/;async function BR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jR(t);for(const n of e)try{if(WR(n))return}catch{}An(t,"unauthorized-domain")}function WR(t){const e=Eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VR.test(n))return!1;if(zR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $R=new Xa(3e4,6e4);function cy(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HR(t){return new Promise((e,n)=>{var r,i,s;function o(){cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cy(),n(Pn(t,"network-request-failed"))},timeout:$R.get()})}if(!((i=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rn().gapi)===null||s===void 0)&&s.load)o();else{const a=qP("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},KP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw iu=null,e})}let iu=null;function GR(t){return iu=iu||HR(t),iu}/**
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
 */const YR=new Xa(5e3,15e3),KR="__/auth/iframe",qR="emulator/auth/iframe",QR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xm(e,qR):`https://${t.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},i=XR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qs(r).slice(1)}`}async function ZR(t){const e=await GR(t),n=Rn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:JR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Rn().setTimeout(()=>{s(o)},YR.get());function l(){Rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const eA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tA=500,nA=600,rA="_blank",iA="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sA(t,e,n,r=tA,i=nA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=_E(u)?rA:n),yE(u)&&(e=e||iA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(jP(u)&&a!=="_self")return oA(e||"",a),new dy(null);const d=window.open(e||"",a,c);ne(d,t,"popup-blocked");try{d.focus()}catch{}return new dy(d)}function oA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aA="__/auth/handler",lA="emulator/auth/handler",uA=encodeURIComponent("fac");async function fy(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:i};if(e instanceof Tm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",th(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Za){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${uA}=${encodeURIComponent(l)}`:"";return`${cA(t)}?${Qs(a).slice(1)}${u}`}function cA({config:t}){return t.emulator?xm(t,lA):`https://${t.authDomain}/${aA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="webStorageSupport";class dA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OE,this._completeRedirectFn=LR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,i){var s;rr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fy(e,n,r,Eh(),i);return sA(e,o,Nm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fy(e,n,r,Eh(),i);return pR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZR(e),r=new FR(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yd,{type:Yd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yd];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||Im()||Vc()}}const fA=dA;var hy="@firebase/auth",py="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function pA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mA(t){Fs(new Ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xE(t)},u=new GP(r,i,s,l);return XP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fs(new Ii("auth-internal",e=>{const n=Bc(e.getProvider("auth").getImmediate());return(r=>new hA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(hy,py,pA(t)),Ur(hy,py,"esm2017")}/**
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
 */const gA=5*60,vA=Fw("authIdTokenMaxAge")||gA;let my=null;const yA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vA)return;const i=n==null?void 0:n.token;my!==i&&(my=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _A(t=$w()){const e=Bp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QP(t,{popupRedirectResolver:fA,persistence:[CR,dR,OE]}),r=Fw("authTokenSyncURL");if(r){const s=yA(r);oR(n,s,()=>s(n.currentUser)),sR(n,o=>s(o))}const i=Lw("auth");return i&&JP(n,`http://${i}`),n}mA("Browser");const wA={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ"},VE=Ww(wA),EA=lE(VE),SA=ht(lE()),Et=EA,Oi=_A(VE);/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const gy="popstate";function CA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Na("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Li(i)}return xA(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Di(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kA(){return Math.random().toString(36).substr(2,8)}function vy(t,e){return{usr:t.state,key:t.key,idx:e}}function Na(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?lr(e):e,{state:n,key:e&&e.key||r||kA()})}function Li(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ye.Pop;let I=c(),v=I==null?null:I-u;u=I,l&&l({action:a,location:_.location,delta:v})}function f(I,v){a=Ye.Push;let h=Na(_.location,I,v);n&&n(h,I),u=c()+1;let g=vy(h,u),p=_.createHref(h);try{o.pushState(g,"",p)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function m(I,v){a=Ye.Replace;let h=Na(_.location,I,v);n&&n(h,I),u=c();let g=vy(h,u),p=_.createHref(h);o.replaceState(g,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function y(I){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof I=="string"?I:Li(I);return ue(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let _={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gy,d),l=I,()=>{i.removeEventListener(gy,d),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let v=y(I);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(I){return o.go(I)}};return _}var Ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ke||(Ke={}));const bA=new Set(["lazy","caseSensitive","path","id","index","children"]);function IA(t){return t.index===!0}function Ch(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),IA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Ch(i.children,e,o,r)),l}})}function cs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?lr(e):e,i=to(r.pathname||"/",n);if(i==null)return null;let s=BE(t);NA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UA(s[a],VA(i));return o}function TA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function BE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),BE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:MA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of WE(s.path))i(s,o,l)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PA=/^:\w+$/,RA=3,AA=2,OA=1,DA=10,LA=-2,yy=t=>t==="*";function MA(t,e){let n=t.split("/"),r=n.length;return n.some(yy)&&(r+=LA),e&&(r+=AA),n.filter(i=>!yy(i)).reduce((i,s)=>i+(PA.test(s)?RA:s===""?OA:DA),r)}function FA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=jA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Xn([i,c.pathname]),pathnameBase:HA(Xn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Xn([i,c.pathnameBase]))}return s}function jA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=BA(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Di(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VA(t){try{return decodeURI(t)}catch(e){return Di(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function BA(t,e){try{return decodeURIComponent(t)}catch(n){return Di(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function to(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function WA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?lr(t):t;return{pathname:n?n.startsWith("/")?n:$A(n,e):e,search:GA(r),hash:YA(i)}}function $A(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=lr(t):(i=Fe({},t),ue(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=WA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),HA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Am{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function $E(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const HE=["post","put","patch","delete"],KA=new Set(HE),qA=["get",...HE],QA=new Set(qA),XA=new Set([301,302,303,307,308]),JA=new Set([307,308]),qd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ZA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Eo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},GE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eO=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),YE="remix-router-transitions";function tO(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=N=>({hasErrorBoundary:k(N)})}else i=eO;let s={},o=Ch(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,m=null,y=null,_=t.hydrationData!=null,I=cs(o,t.history.location,l),v=null;if(I==null){let k=Kt(404,{pathname:t.history.location.pathname}),{matches:N,route:A}=by(o);I=N,v={[A.id]:k}}let h=!I.some(k=>k.route.lazy)&&(!I.some(k=>k.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:I,initialized:h,navigation:qd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},C=Ye.Pop,b=!1,x,R=!1,M=new Map,j=null,ie=!1,J=!1,Z=[],ge=[],ae=new Map,He=0,Qe=-1,F=new Map,Y=new Set,q=new Map,pe=new Map,ve=new Map,En=!1;function Yt(){if(c=t.history.listen(k=>{let{action:N,location:A,delta:V}=k;if(En){En=!1;return}Di(ve.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let te=fl({currentLocation:p.location,nextLocation:A,historyAction:N});if(te&&V!=null){En=!0,t.history.go(V*-1),dr(te,{state:"blocked",location:A,proceed(){dr(te,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(V)},reset(){let ee=new Map(p.blockers);ee.set(te,Eo),ke({blockers:ee})}});return}return Mn(N,A)}),n){fO(e,M);let k=()=>hO(e,M);e.addEventListener("pagehide",k),j=()=>e.removeEventListener("pagehide",k)}return p.initialized||Mn(Ye.Pop,p.location),g}function ti(){c&&c(),j&&j(),d.clear(),x&&x.abort(),p.fetchers.forEach((k,N)=>D(N)),p.blockers.forEach((k,N)=>$i(N))}function jt(k){return d.add(k),()=>d.delete(k)}function ke(k,N){p=Fe({},p,k),d.forEach(A=>A(p,{unstable_viewTransitionOpts:N}))}function Ln(k,N){var A,V;let te=p.actionData!=null&&p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((A=k.state)==null?void 0:A._isRedirect)!==!0,ee;N.actionData?Object.keys(N.actionData).length>0?ee=N.actionData:ee=null:te?ee=p.actionData:ee=null;let re=N.loaderData?xy(p.loaderData,N.loaderData,N.matches||[],N.errors):p.loaderData,Q=p.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((Me,fe)=>Q.set(fe,Eo)));let K=b===!0||p.navigation.formMethod!=null&&dn(p.navigation.formMethod)&&((V=k.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),ie||C===Ye.Pop||(C===Ye.Push?t.history.push(k,k.state):C===Ye.Replace&&t.history.replace(k,k.state));let Se;if(C===Ye.Pop){let Me=M.get(p.location.pathname);Me&&Me.has(k.pathname)?Se={currentLocation:p.location,nextLocation:k}:M.has(k.pathname)&&(Se={currentLocation:k,nextLocation:p.location})}else if(R){let Me=M.get(p.location.pathname);Me?Me.add(k.pathname):(Me=new Set([k.pathname]),M.set(p.location.pathname,Me)),Se={currentLocation:p.location,nextLocation:k}}ke(Fe({},N,{actionData:ee,loaderData:re,historyAction:C,location:k,initialized:!0,navigation:qd,revalidation:"idle",restoreScrollPosition:tg(k,N.matches||p.matches),preventScrollReset:K,blockers:Q}),Se),C=Ye.Pop,b=!1,R=!1,ie=!1,J=!1,Z=[],ge=[]}async function io(k,N){if(typeof k=="number"){t.history.go(k);return}let A=kh(p.location,p.matches,l,u.v7_prependBasename,k,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:V,submission:te,error:ee}=_y(u.v7_normalizeFormMethod,!1,A,N),re=p.location,Q=Na(p.location,V,N&&N.state);Q=Fe({},Q,t.history.encodeLocation(Q));let K=N&&N.replace!=null?N.replace:void 0,Se=Ye.Push;K===!0?Se=Ye.Replace:K===!1||te!=null&&dn(te.formMethod)&&te.formAction===p.location.pathname+p.location.search&&(Se=Ye.Replace);let Me=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,fe=fl({currentLocation:re,nextLocation:Q,historyAction:Se});if(fe){dr(fe,{state:"blocked",location:Q,proceed(){dr(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),io(k,N)},reset(){let Ce=new Map(p.blockers);Ce.set(fe,Eo),ke({blockers:Ce})}});return}return await Mn(Se,Q,{submission:te,pendingError:ee,preventScrollReset:Me,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition})}function ul(){if(W(),ke({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Mn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Mn(C||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Mn(k,N,A){x&&x.abort(),x=null,C=k,ie=(A&&A.startUninterruptedRevalidation)===!0,qS(p.location,p.matches),b=(A&&A.preventScrollReset)===!0,R=(A&&A.enableViewTransition)===!0;let V=a||o,te=A&&A.overrideNavigation,ee=cs(V,N,l);if(!ee){let Ce=Kt(404,{pathname:N.pathname}),{matches:Ge,route:ni}=by(V);Hi(),Ln(N,{matches:Ge,loaderData:{},errors:{[ni.id]:Ce}});return}if(p.initialized&&!J&&oO(p.location,N)&&!(A&&A.submission&&dn(A.submission.formMethod))){Ln(N,{matches:ee});return}x=new AbortController;let re=Co(t.history,N,x.signal,A&&A.submission),Q,K;if(A&&A.pendingError)K={[ds(ee).route.id]:A.pendingError};else if(A&&A.submission&&dn(A.submission.formMethod)){let Ce=await cl(re,N,A.submission,ee,{replace:A.replace});if(Ce.shortCircuited)return;Q=Ce.pendingActionData,K=Ce.pendingActionError,te=Qd(N,A.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:Se,loaderData:Me,errors:fe}=await dl(re,N,ee,te,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,Q,K);Se||(x=null,Ln(N,Fe({matches:ee},Q?{actionData:Q}:{},{loaderData:Me,errors:fe})))}async function cl(k,N,A,V,te){te===void 0&&(te={}),W();let ee=cO(N,A);ke({navigation:ee});let re,Q=bh(V,N);if(!Q.route.action&&!Q.route.lazy)re={type:Ke.error,error:Kt(405,{method:k.method,pathname:N.pathname,routeId:Q.route.id})};else if(re=await So("action",k,Q,V,s,i,l),k.signal.aborted)return{shortCircuited:!0};if(Is(re)){let K;return te&&te.replace!=null?K=te.replace:K=re.location===p.location.pathname+p.location.search,await T(p,re,{submission:A,replace:K}),{shortCircuited:!0}}if(Go(re)){let K=ds(V,Q.route.id);return(te&&te.replace)!==!0&&(C=Ye.Push),{pendingActionData:{},pendingActionError:{[K.route.id]:re.error}}}if(hi(re))throw Kt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:re.data}}}async function dl(k,N,A,V,te,ee,re,Q,K){let Se=V||Qd(N,te),Me=te||ee||Ny(Se),fe=a||o,[Ce,Ge]=wy(t.history,p,A,Me,N,J,Z,ge,q,Y,fe,l,Q,K);if(Hi(_e=>!(A&&A.some(an=>an.route.id===_e))||Ce&&Ce.some(an=>an.route.id===_e)),Qe=++He,Ce.length===0&&Ge.length===0){let _e=Oe();return Ln(N,Fe({matches:A,loaderData:{},errors:K||null},Q?{actionData:Q}:{},_e?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!ie){Ge.forEach(an=>{let fr=p.fetchers.get(an.key),ad=ko(void 0,fr?fr.data:void 0);p.fetchers.set(an.key,ad)});let _e=Q||p.actionData;ke(Fe({navigation:Se},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Ge.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ge.forEach(_e=>{ae.has(_e.key)&&$(_e.key),_e.controller&&ae.set(_e.key,_e.controller)});let ni=()=>Ge.forEach(_e=>$(_e.key));x&&x.signal.addEventListener("abort",ni);let{results:ri,loaderResults:oo,fetcherResults:rd}=await P(p.matches,A,Ce,Ge,k);if(k.signal.aborted)return{shortCircuited:!0};x&&x.signal.removeEventListener("abort",ni),Ge.forEach(_e=>ae.delete(_e.key));let Un=Iy(ri);if(Un){if(Un.idx>=Ce.length){let _e=Ge[Un.idx-Ce.length].key;Y.add(_e)}return await T(p,Un.result,{replace:re}),{shortCircuited:!0}}let{loaderData:jn,errors:hl}=ky(p,A,Ce,oo,K,Ge,rd,pe);pe.forEach((_e,an)=>{_e.subscribe(fr=>{(fr||_e.done)&&pe.delete(an)})});let id=Oe(),sd=Fn(Qe),od=id||sd||Ge.length>0;return Fe({loaderData:jn,errors:hl},od?{fetchers:new Map(p.fetchers)}:{})}function ed(k){return p.fetchers.get(k)||ZA}function Zm(k,N,A,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(k)&&$(k);let te=a||o,ee=kh(p.location,p.matches,l,u.v7_prependBasename,A,N,V==null?void 0:V.relative),re=cs(te,ee,l);if(!re){U(k,N,Kt(404,{pathname:ee}));return}let{path:Q,submission:K,error:Se}=_y(u.v7_normalizeFormMethod,!0,ee,V);if(Se){U(k,N,Se);return}let Me=bh(re,Q);if(b=(V&&V.preventScrollReset)===!0,K&&dn(K.formMethod)){eg(k,N,Q,Me,re,K);return}q.set(k,{routeId:N,path:Q}),E(k,N,Q,Me,re,K)}async function eg(k,N,A,V,te,ee){if(W(),q.delete(k),!V.route.action&&!V.route.lazy){let Ze=Kt(405,{method:ee.formMethod,pathname:A,routeId:N});U(k,N,Ze);return}let re=p.fetchers.get(k),Q=dO(ee,re);p.fetchers.set(k,Q),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=Co(t.history,A,K.signal,ee);ae.set(k,K);let Me=He,fe=await So("action",Se,V,te,s,i,l);if(Se.signal.aborted){ae.get(k)===K&&ae.delete(k);return}if(Is(fe))if(ae.delete(k),Qe>Me){let Ze=qi(void 0);p.fetchers.set(k,Ze),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(k);let Ze=ko(ee);return p.fetchers.set(k,Ze),ke({fetchers:new Map(p.fetchers)}),T(p,fe,{fetcherSubmission:ee})}if(Go(fe)){U(k,N,fe.error);return}if(hi(fe))throw Kt(400,{type:"defer-action"});let Ce=p.navigation.location||p.location,Ge=Co(t.history,Ce,K.signal),ni=a||o,ri=p.navigation.state!=="idle"?cs(ni,p.navigation.location,l):p.matches;ue(ri,"Didn't find any matches after fetcher action");let oo=++He;F.set(k,oo);let rd=ko(ee,fe.data);p.fetchers.set(k,rd);let[Un,jn]=wy(t.history,p,ri,ee,Ce,J,Z,ge,q,Y,ni,l,{[V.route.id]:fe.data},void 0);jn.filter(Ze=>Ze.key!==k).forEach(Ze=>{let ao=Ze.key,ng=p.fetchers.get(ao),XS=ko(void 0,ng?ng.data:void 0);p.fetchers.set(ao,XS),ae.has(ao)&&$(ao),Ze.controller&&ae.set(ao,Ze.controller)}),ke({fetchers:new Map(p.fetchers)});let hl=()=>jn.forEach(Ze=>$(Ze.key));K.signal.addEventListener("abort",hl);let{results:id,loaderResults:sd,fetcherResults:od}=await P(p.matches,ri,Un,jn,Ge);if(K.signal.aborted)return;K.signal.removeEventListener("abort",hl),F.delete(k),ae.delete(k),jn.forEach(Ze=>ae.delete(Ze.key));let _e=Iy(id);if(_e){if(_e.idx>=Un.length){let Ze=jn[_e.idx-Un.length].key;Y.add(Ze)}return T(p,_e.result)}let{loaderData:an,errors:fr}=ky(p,p.matches,Un,sd,void 0,jn,od,pe);if(p.fetchers.has(k)){let Ze=qi(fe.data);p.fetchers.set(k,Ze)}let ad=Fn(oo);p.navigation.state==="loading"&&oo>Qe?(ue(C,"Expected pending action"),x&&x.abort(),Ln(p.navigation.location,{matches:ri,loaderData:an,errors:fr,fetchers:new Map(p.fetchers)})):(ke(Fe({errors:fr,loaderData:xy(p.loaderData,an,ri,fr)},ad||jn.length>0?{fetchers:new Map(p.fetchers)}:{})),J=!1)}async function E(k,N,A,V,te,ee){let re=p.fetchers.get(k),Q=ko(ee,re?re.data:void 0);p.fetchers.set(k,Q),ke({fetchers:new Map(p.fetchers)});let K=new AbortController,Se=Co(t.history,A,K.signal);ae.set(k,K);let Me=He,fe=await So("loader",Se,V,te,s,i,l);if(hi(fe)&&(fe=await QE(fe,Se.signal,!0)||fe),ae.get(k)===K&&ae.delete(k),Se.signal.aborted)return;if(Is(fe))if(Qe>Me){let Ge=qi(void 0);p.fetchers.set(k,Ge),ke({fetchers:new Map(p.fetchers)});return}else{Y.add(k),await T(p,fe);return}if(Go(fe)){let Ge=ds(p.matches,N);p.fetchers.delete(k),ke({fetchers:new Map(p.fetchers),errors:{[Ge.route.id]:fe.error}});return}ue(!hi(fe),"Unhandled fetcher deferred data");let Ce=qi(fe.data);p.fetchers.set(k,Ce),ke({fetchers:new Map(p.fetchers)})}async function T(k,N,A){let{submission:V,fetcherSubmission:te,replace:ee}=A===void 0?{}:A;N.revalidate&&(J=!0);let re=Na(k.location,N.location,{_isRedirect:!0});if(ue(re,"Expected a location on the redirect navigation"),n){let Ce=!1;if(N.reloadDocument)Ce=!0;else if(GE.test(N.location)){const Ge=t.history.createURL(N.location);Ce=Ge.origin!==e.location.origin||to(Ge.pathname,l)==null}if(Ce){ee?e.location.replace(N.location):e.location.assign(N.location);return}}x=null;let Q=ee===!0?Ye.Replace:Ye.Push,{formMethod:K,formAction:Se,formEncType:Me}=k.navigation;!V&&!te&&K&&Se&&Me&&(V=Ny(k.navigation));let fe=V||te;if(JA.has(N.status)&&fe&&dn(fe.formMethod))await Mn(Q,re,{submission:Fe({},fe,{formAction:N.location}),preventScrollReset:b});else{let Ce=Qd(re,V);await Mn(Q,re,{overrideNavigation:Ce,fetcherSubmission:te,preventScrollReset:b})}}async function P(k,N,A,V,te){let ee=await Promise.all([...A.map(K=>So("loader",te,K,N,s,i,l)),...V.map(K=>K.matches&&K.match&&K.controller?So("loader",Co(t.history,K.path,K.controller.signal),K.match,K.matches,s,i,l):{type:Ke.error,error:Kt(404,{pathname:K.path})})]),re=ee.slice(0,A.length),Q=ee.slice(A.length);return await Promise.all([Ty(k,A,re,re.map(()=>te.signal),!1,p.loaderData),Ty(k,V.map(K=>K.match),Q,V.map(K=>K.controller?K.controller.signal:null),!0)]),{results:ee,loaderResults:re,fetcherResults:Q}}function W(){J=!0,Z.push(...Hi()),q.forEach((k,N)=>{ae.has(N)&&(ge.push(N),$(N))})}function U(k,N,A){let V=ds(p.matches,N);D(k),ke({errors:{[V.route.id]:A},fetchers:new Map(p.fetchers)})}function D(k){let N=p.fetchers.get(k);ae.has(k)&&!(N&&N.state==="loading"&&F.has(k))&&$(k),q.delete(k),F.delete(k),Y.delete(k),p.fetchers.delete(k)}function $(k){let N=ae.get(k);ue(N,"Expected fetch controller: "+k),N.abort(),ae.delete(k)}function Te(k){for(let N of k){let A=ed(N),V=qi(A.data);p.fetchers.set(N,V)}}function Oe(){let k=[],N=!1;for(let A of Y){let V=p.fetchers.get(A);ue(V,"Expected fetcher: "+A),V.state==="loading"&&(Y.delete(A),k.push(A),N=!0)}return Te(k),N}function Fn(k){let N=[];for(let[A,V]of F)if(V<k){let te=p.fetchers.get(A);ue(te,"Expected fetcher: "+A),te.state==="loading"&&($(A),F.delete(A),N.push(A))}return Te(N),N.length>0}function td(k,N){let A=p.blockers.get(k)||Eo;return ve.get(k)!==N&&ve.set(k,N),A}function $i(k){p.blockers.delete(k),ve.delete(k)}function dr(k,N){let A=p.blockers.get(k)||Eo;ue(A.state==="unblocked"&&N.state==="blocked"||A.state==="blocked"&&N.state==="blocked"||A.state==="blocked"&&N.state==="proceeding"||A.state==="blocked"&&N.state==="unblocked"||A.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+N.state);let V=new Map(p.blockers);V.set(k,N),ke({blockers:V})}function fl(k){let{currentLocation:N,nextLocation:A,historyAction:V}=k;if(ve.size===0)return;ve.size>1&&Di(!1,"A router only supports one blocker at a time");let te=Array.from(ve.entries()),[ee,re]=te[te.length-1],Q=p.blockers.get(ee);if(!(Q&&Q.state==="proceeding")&&re({currentLocation:N,nextLocation:A,historyAction:V}))return ee}function Hi(k){let N=[];return pe.forEach((A,V)=>{(!k||k(V))&&(A.cancel(),N.push(V),pe.delete(V))}),N}function nd(k,N,A){if(f=k,y=N,m=A||null,!_&&p.navigation===qd){_=!0;let V=tg(p.location,p.matches);V!=null&&ke({restoreScrollPosition:V})}return()=>{f=null,y=null,m=null}}function so(k,N){return m&&m(k,N.map(V=>TA(V,p.loaderData)))||k.key}function qS(k,N){if(f&&y){let A=so(k,N);f[A]=y()}}function tg(k,N){if(f){let A=so(k,N),V=f[A];if(typeof V=="number")return V}return null}function QS(k){s={},a=Ch(k,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},get window(){return e},initialize:Yt,subscribe:jt,enableScrollRestoration:nd,navigate:io,fetch:Zm,revalidate:ul,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:ed,deleteFetcher:D,dispose:ti,getBlocker:td,deleteBlocker:$i,_internalFetchControllers:ae,_internalActiveDeferreds:pe,_internalSetRoutes:QS},g}function nO(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function kh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Rm(i||".",Hc(a).map(c=>c.pathnameBase),to(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Om(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Xn([n,u.pathname])),Li(u)}function _y(t,e,n,r){if(!r||!nO(r))return{path:n};if(r.formMethod&&!uO(r.formMethod))return{path:n,error:Kt(405,{method:r.formMethod})};let i=()=>({path:n,error:Kt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=qE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!dn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[_,I]=y;return""+m+_+"="+I+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!dn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=xh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=xh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Cy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Cy(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(dn(c.formMethod))return{path:n,submission:c};let d=lr(n);return e&&d.search&&Om(d.search)&&l.append("index",""),d.search="?"+l,{path:Li(d),submission:c}}function rO(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function wy(t,e,n,r,i,s,o,a,l,u,c,d,f,m){let y=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),I=t.createURL(i),v=m?Object.keys(m)[0]:void 0,g=rO(n,v).filter((C,b)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(iO(e.loaderData,e.matches[b],C)||o.some(M=>M===C.route.id))return!0;let x=e.matches[b],R=C;return Ey(C,Fe({currentUrl:_,currentParams:x.params,nextUrl:I,nextParams:R.params},r,{actionResult:y,defaultShouldRevalidate:s||_.pathname+_.search===I.pathname+I.search||_.search!==I.search||KE(x,R)}))}),p=[];return l.forEach((C,b)=>{if(!n.some(ie=>ie.route.id===C.routeId))return;let x=cs(c,C.path,d);if(!x){p.push({key:b,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let R=e.fetchers.get(b),M=bh(x,C.path),j=!1;u.has(b)?j=!1:a.includes(b)?j=!0:R&&R.state!=="idle"&&R.data===void 0?j=s:j=Ey(M,Fe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:I,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),j&&p.push({key:b,routeId:C.routeId,path:C.path,matches:x,match:M,controller:new AbortController})}),[g,p]}function iO(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function KE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ey(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Sy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Di(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!bA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function So(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=y=>{let _,I=new Promise((v,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),I])};try{let y=n.route[t];if(n.route.lazy)if(y){let _,I=await Promise.all([d(y).catch(v=>{_=v}),Sy(n.route,s,i)]);if(_)throw _;u=I[0]}else if(await Sy(n.route,s,i),y=n.route[t],y)u=await d(y);else if(t==="action"){let _=new URL(e.url),I=_.pathname+_.search;throw Kt(405,{method:e.method,pathname:I,routeId:n.route.id})}else return{type:Ke.data,data:void 0};else if(y)u=await d(y);else{let _=new URL(e.url),I=_.pathname+_.search;throw Kt(404,{pathname:I})}ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Ke.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(lO(u)){let y=u.status;if(XA.has(y)){let v=u.headers.get("Location");if(ue(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!GE.test(v))v=kh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let h=new URL(e.url),g=v.startsWith("//")?new URL(h.protocol+v):new URL(v),p=to(g.pathname,o)!=null;g.origin===h.origin&&p&&(v=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:Ke.redirect,status:y,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ke.error?Ke.error:Ke.data,response:u};let _,I=u.headers.get("Content-Type");return I&&/\bapplication\/json\b/.test(I)?_=await u.json():_=await u.text(),l===Ke.error?{type:l,error:new Am(y,u.statusText,_),headers:u.headers}:{type:Ke.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ke.error)return{type:l,error:u};if(aO(u)){var f,m;return{type:Ke.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ke.data,data:u}}function Co(t,e,n,r){let i=t.createURL(qE(e)).toString(),s={signal:n};if(r&&dn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=xh(r.formData):s.body=r.formData}return new Request(i,s)}function xh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Cy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function sO(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ue(!Is(c),"Cannot handle redirect results in processLoaderData"),Go(c)){let m=ds(t,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=y),s[f]=void 0,l||(l=!0,a=$E(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else hi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function ky(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=sO(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(m&&m.signal.aborted))if(Go(y)){let _=ds(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Fe({},u,{[_.route.id]:y.error})),t.fetchers.delete(d)}else if(Is(y))ue(!1,"Unhandled fetcher revalidation redirect");else if(hi(y))ue(!1,"Unhandled fetcher deferred data");else{let _=qi(y.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function xy(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ds(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function by(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Kt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Am(t||500,o,new Error(a),!0)}function Iy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Is(n))return{result:n,idx:e}}}function qE(t){let e=typeof t=="string"?lr(t):t;return Li(Fe({},e,{hash:""}))}function oO(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function hi(t){return t.type===Ke.deferred}function Go(t){return t.type===Ke.error}function Is(t){return(t&&t.type)===Ke.redirect}function aO(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function lO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function uO(t){return QA.has(t.toLowerCase())}function dn(t){return KA.has(t.toLowerCase())}async function Ty(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!KE(u,l)&&(s&&s[l.route.id])!==void 0;if(hi(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await QE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function QE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ke.error,error:i}}return{type:Ke.data,data:t.deferredData.data}}}function Om(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function bh(t,e){let n=typeof e=="string"?lr(e).search:e.search;if(t[t.length-1].route.index&&Om(n||""))return t[t.length-1];let r=Hc(t);return r[r.length-1]}function Ny(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Qd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function cO(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ko(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function dO(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function qi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function fO(t,e){try{let n=t.sessionStorage.getItem(YE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function hO(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(YE,JSON.stringify(n))}catch(r){Di(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nc.apply(this,arguments)}const Gc=S.createContext(null),XE=S.createContext(null),no=S.createContext(null),Yc=S.createContext(null),ur=S.createContext({outlet:null,matches:[],isDataRoute:!1}),JE=S.createContext(null);function pO(t,e){let{relative:n}=e===void 0?{}:e;tl()||ue(!1);let{basename:r,navigator:i}=S.useContext(no),{hash:s,pathname:o,search:a}=eS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function tl(){return S.useContext(Yc)!=null}function Kc(){return tl()||ue(!1),S.useContext(Yc).location}function ZE(t){S.useContext(no).static||S.useLayoutEffect(t)}function Ut(){let{isDataRoute:t}=S.useContext(ur);return t?TO():mO()}function mO(){tl()||ue(!1);let t=S.useContext(Gc),{basename:e,navigator:n}=S.useContext(no),{matches:r}=S.useContext(ur),{pathname:i}=Kc(),s=JSON.stringify(Hc(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return ZE(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Rm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const gO=S.createContext(null);function vO(t){let e=S.useContext(ur).outlet;return e&&S.createElement(gO.Provider,{value:t},e)}function Bi(){let{matches:t}=S.useContext(ur),e=t[t.length-1];return e?e.params:{}}function eS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(ur),{pathname:i}=Kc(),s=JSON.stringify(Hc(r).map(o=>o.pathnameBase));return S.useMemo(()=>Rm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function yO(t,e,n){tl()||ue(!1);let{navigator:r}=S.useContext(no),{matches:i}=S.useContext(ur),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Kc(),u;if(e){var c;let _=typeof e=="string"?lr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ue(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=cs(t,{pathname:f}),y=CO(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Xn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Xn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?S.createElement(Yc.Provider,{value:{location:nc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ye.Pop}},y):y}function _O(){let t=IO(),e=$E(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const wO=S.createElement(_O,null);class EO extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(ur.Provider,{value:this.props.routeContext},S.createElement(JE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SO(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Gc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(ur.Provider,{value:e},r)}function CO(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||wO);let f=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=d:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(SO,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(EO,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var tS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tS||{}),rc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rc||{});function kO(t){let e=S.useContext(Gc);return e||ue(!1),e}function xO(t){let e=S.useContext(XE);return e||ue(!1),e}function bO(t){let e=S.useContext(ur);return e||ue(!1),e}function nS(t){let e=bO(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function IO(){var t;let e=S.useContext(JE),n=xO(rc.UseRouteError),r=nS(rc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function TO(){let{router:t}=kO(tS.UseNavigateStable),e=nS(rc.UseNavigateStable),n=S.useRef(!1);return ZE(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nc({fromRouteId:e},s)))},[t,e])}function rS(t){return vO(t.context)}function NO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1}=t;tl()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=lr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,y=S.useMemo(()=>{let _=to(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return y==null?null:S.createElement(no.Provider,{value:l},S.createElement(Yc.Provider,{children:n,value:y}))}new Promise(()=>{});function PO(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pa.apply(this,arguments)}function RO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function AO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function OO(t,e){return t.button===0&&(!e||e==="_self")&&!AO(t)}const DO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function LO(t,e){return tO({basename:e==null?void 0:e.basename,future:Pa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:CA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||MO(),routes:t,mapRouteProperties:PO,window:e==null?void 0:e.window}).initialize()}function MO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Pa({},e,{errors:FO(e.errors)})),e}function FO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Am(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const UO=S.createContext({isTransitioning:!1}),jO="startTransition",Py=pC[jO];function zO(t){Py?Py(t):t()}class VO{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function BO(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),[o,a]=S.useState(),[l,u]=S.useState({isTransitioning:!1}),[c,d]=S.useState(),[f,m]=S.useState(),[y,_]=S.useState(),{v7_startTransition:I}=r||{},v=S.useCallback(b=>{I?zO(b):b()},[I]),h=S.useCallback((b,x)=>{let{unstable_viewTransitionOpts:R}=x;!R||n.window==null||typeof n.window.document.startViewTransition!="function"?v(()=>s(b)):f&&c?(c.resolve(),f.skipTransition(),_({state:b,currentLocation:R.currentLocation,nextLocation:R.nextLocation})):(a(b),u({isTransitioning:!0,currentLocation:R.currentLocation,nextLocation:R.nextLocation}))},[v,f,c,n.window]);S.useLayoutEffect(()=>n.subscribe(h),[n,h]),S.useEffect(()=>{l.isTransitioning&&d(new VO)},[l.isTransitioning]),S.useEffect(()=>{if(c&&o&&n.window){let b=o,x=c.promise,R=n.window.document.startViewTransition(async()=>{v(()=>s(b)),await x});R.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(R)}},[v,o,c,n.window]),S.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),S.useEffect(()=>{!l.isTransitioning&&y&&(a(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),_(void 0))},[l.isTransitioning,y]);let g=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,x,R)=>n.navigate(b,{state:x,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(b,x,R)=>n.navigate(b,{replace:!0,state:x,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[n]),p=n.basename||"/",C=S.useMemo(()=>({router:n,navigator:g,static:!1,basename:p}),[n,g,p]);return S.createElement(S.Fragment,null,S.createElement(Gc.Provider,{value:C},S.createElement(XE.Provider,{value:i},S.createElement(UO.Provider,{value:l},S.createElement(NO,{basename:p,location:i.location,navigationType:i.historyAction,navigator:g},i.initialized?S.createElement(WO,{routes:n.routes,state:i}):e)))),null)}function WO(t){let{routes:e,state:n}=t;return yO(e,void 0,n)}const $O=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,GO=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=RO(e,DO),{basename:m}=S.useContext(no),y,_=!1;if(typeof u=="string"&&HO.test(u)&&(y=u,$O))try{let g=new URL(window.location.href),p=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=to(p.pathname,m);p.origin===g.origin&&C!=null?u=C+p.search+p.hash:_=!0}catch{}let I=pO(u,{relative:i}),v=YO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||v(g)}return S.createElement("a",Pa({},f,{href:y||I,onClick:_||s?r:h,ref:n,target:l}))});var Ry;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ry||(Ry={}));var Ay;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ay||(Ay={}));function YO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ut(),u=Kc(),c=eS(t,{relative:o});return S.useCallback(d=>{if(OO(d,n)){d.preventDefault();let f=r!==void 0?r:Li(u)===Li(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const KO="/assets/logo_nav-e0cc088f.svg";function tn({onClick:t,children:e,variant:n,type:r="button"}){const[i,s]=S.useState(null),[o,a]=S.useState("shadow-md"),l={cta:"bg-themePrimary text-themeWhite",base:"bg-themeWhite text-themePrimary border border-themeGray",outlined:"bg-themeWhite text-themePrimary",danger:"bg-themeDanger text-themeWhite"};S.useEffect(()=>{s(l[n])},[i]);function u(){a("shadow-sm"),setTimeout(()=>{a("shadow-md"),t&&t()},200)}return w.jsx("input",{type:r,onClick:()=>u(),value:e,className:`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-4 mb-4 cursor-pointer w-full ${i} ${o} hover:scale-100 transition-transform duration-200`})}function qO({isMenuVisible:t}){const[e,n]=S.useState("animate-menuIn"),[r,i]=S.useState("hidden"),s=Ut();function o(){aR(Oi).then(()=>{s("/login")}).catch(a=>{console.log(a)})}return S.useEffect(()=>{t&&(i("visible"),n("animate-menuIn")),t||(n("animate-menuOut"),setTimeout(()=>{i("hidden")},400))},[t]),w.jsxs("aside",{className:`${e} ${r} absolute right-0 -top-4 w-full h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `,children:[w.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[w.jsx("br",{}),w.jsx("br",{}),w.jsx("br",{})]}),w.jsxs("div",{className:"text-themePrimary w-full p-6 flex flex-col items-end bg-themeWhite rounded-2xl shadow-md",children:[w.jsx("p",{children:"Account"}),w.jsx("p",{children:"text2"}),w.jsx(tn,{onClick:o,variant:"cta",children:"Log out"})]}),w.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[w.jsx("br",{}),w.jsx("br",{}),w.jsx("br",{})]})]})}const Yo={displayName:"Name",photoUrl:"https://picsum.photos/200",email:"default@default.com",ownerOfEvents:["Initial"],participateOfEvents:["Initial"],uid:"defaultUID"},Wi=S.createContext(Yo),QO="/assets/userIconDefault-0c6f2d29.jpg";function Ra({myUser:t,size:e="small",onClick:n}){const[r,i]=S.useState(null),s=Ut(),o={small:"w-8",medium:"w-10",large:"w-12"};function a(){n&&n(),s(`/user/${t==null?void 0:t.uid}`)}return S.useEffect(()=>{i(o[e])},[r,e,t]),w.jsx("img",{onClick:a,className:`${r} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`,src:t!=null&&t.photoUrl?t==null?void 0:t.photoUrl:QO})}function XO({handleMenu:t}){const[e,n]=S.useState(!1),r=S.useContext(Wi);if(r===void 0)return null;function i(){t(),n(!0),setTimeout(()=>{n(!1)},300)}return w.jsx("div",{className:`${e?"animate-pulse":null} z-20 text-2xl grid place-items-center w-8 cursor-pointer`,onClick:i,children:w.jsx(Ra,{myUser:r})})}function JO(){const[t,e]=S.useState(!1);function n(){e(!t)}return w.jsxs("nav",{className:"flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[w.jsx(GO,{to:"/",children:w.jsx("img",{src:KO,alt:"",className:"h-4"})}),w.jsx(XO,{handleMenu:n}),w.jsx(qO,{isMenuVisible:t})]})}function ZO(){return w.jsx("div",{className:"p-6 flex justify-center items-center bg-themePrimary text-themeWhite h-16 shadow-md rounded-2xl mb-4",children:"© Maciej Tomaszewski 2023"})}const su={id:"defaultID",name:"defaultName",date:"25-01-2034",users:[{uid:"defaultUID",value:0,id:"defaultID"}],amount:77,whopaid:{uid:"defaultUID",value:0}},_t={id:"defaultID",name:"defaultName",owner:"defaultUID",date:"25-01-2034",users:["defaultUID"],payments:[su]},Zr=S.createContext([_t]),ei=S.createContext([_t]),qc=S.createContext([Yo]);function e2({children:t}){const[e,n]=S.useState([_t]),[r,i]=S.useState([_t]),[s,o]=S.useState(Yo),[a,l]=S.useState([Yo]);async function u(m){await $o(ht(Et,`/users/${m}`),y=>{if(y.exists()){const _={...y.val(),uid:m};o(_)}})}async function c(){const m=aE(ht(Et,"users/"));await $o(m,y=>{if(y.exists()){const I=Object.entries(y.val()).map(v=>({...v[1],uid:v[0]}));l(I)}else l([Yo])})}async function d(m,y){await $o(ht(Et,`/events/${m}`),_=>{if(_.exists()){let I=function(h,g){if(console.log(g),h[0]===_t)return[g];if(h[0]!==_t){const p=h.filter(C=>C.id===m?null:C);return console.log(p),[...p,g]}return[_t]};const v=_.val();v.id=m,v.users!==void 0?v.users=Object.keys(v.users):v.users=[],v.payments!==void 0?v.payments=Object.values(v.payments):v.payments=[],y==="participateEvent"&&i(h=>I(h,v)),y==="ownerEvent"&&n(h=>I(h,v))}})}async function f(m){m.participateOfEvents.forEach(async y=>{d(y,"participateEvent")}),m.ownerOfEvents.forEach(async y=>{console.log(y),d(y,"ownerEvent")})}return S.useEffect(()=>{Oi.currentUser!=null&&(n([_t]),i([_t]),s.uid==="defaultUID"&&u(Oi.currentUser.uid),s.uid!=="defaultUID"&&f(s),c())},[s]),w.jsx(Zr.Provider,{value:e,children:w.jsx(ei.Provider,{value:r,children:w.jsx(Wi.Provider,{value:s,children:w.jsx(qc.Provider,{value:a,children:w.jsx(w.Fragment,{children:t})})})})})}function t2(){return w.jsxs("main",{className:"text-themePrimary max-w-full w-full grid h-screenIOs grid-rows-AppTemplate pl-4 pr-4",children:[w.jsxs(e2,{children:[w.jsx(JO,{}),w.jsx("main",{className:"pt-6 pb-6 w-full overflow-y-scroll",children:w.jsx(rS,{})})]}),w.jsx(ZO,{})]})}async function n2(t){return await lP(xa(SA,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function r2({uid:t,displayName:e,email:n,photoURL:r}){await us(ht(Et,`users/${t}`),{displayName:e,email:n,photoUrl:r,participateOfEvents:{0:"Initial"},ownerOfEvents:{0:"Initial"}}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var i2={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function Oy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oy(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ic(t){"@babel/helpers - typeof";return ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ic(t)}function s2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o2(t,e,n){return e&&Dy(t.prototype,e),n&&Dy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dm(t,e){return l2(t)||c2(t,e)||iS(t,e)||f2()}function nl(t){return a2(t)||u2(t)||iS(t)||d2()}function a2(t){if(Array.isArray(t))return Ih(t)}function l2(t){if(Array.isArray(t))return t}function u2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function c2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function iS(t,e){if(t){if(typeof t=="string")return Ih(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ih(t,e)}}function Ih(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ly=function(){},Lm={},sS={},oS=null,aS={mark:Ly,measure:Ly};try{typeof window<"u"&&(Lm=window),typeof document<"u"&&(sS=document),typeof MutationObserver<"u"&&(oS=MutationObserver),typeof performance<"u"&&(aS=performance)}catch{}var h2=Lm.navigator||{},My=h2.userAgent,Fy=My===void 0?"":My,Gr=Lm,Ae=sS,Uy=oS,Dl=aS;Gr.document;var cr=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",lS=~Fy.indexOf("MSIE")||~Fy.indexOf("Trident/"),Ll,Ml,Fl,Ul,jl,ir="___FONT_AWESOME___",Th=16,uS="fa",cS="svg-inline--fa",Mi="data-fa-i2svg",Nh="data-fa-pseudo-element",p2="data-fa-pseudo-element-pending",Mm="data-prefix",Fm="data-icon",jy="fontawesome-i2svg",m2="async",g2=["HTML","HEAD","STYLE","SCRIPT"],dS=function(){try{return!0}catch{return!1}}(),Pe="classic",Be="sharp",Um=[Pe,Be];function rl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var Aa=rl((Ll={},it(Ll,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(Ll,Be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ll)),Oa=rl((Ml={},it(Ml,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(Ml,Be,{solid:"fass",regular:"fasr",light:"fasl"}),Ml)),Da=rl((Fl={},it(Fl,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(Fl,Be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Fl)),v2=rl((Ul={},it(Ul,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(Ul,Be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ul)),y2=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,fS="fa-layers-text",_2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,w2=rl((jl={},it(jl,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(jl,Be,{900:"fass",400:"fasr",300:"fasl"}),jl)),hS=[1,2,3,4,5,6,7,8,9,10],E2=hS.concat([11,12,13,14,15,16,17,18,19,20]),S2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},La=new Set;Object.keys(Oa[Pe]).map(La.add.bind(La));Object.keys(Oa[Be]).map(La.add.bind(La));var C2=[].concat(Um,nl(La),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pi.GROUP,pi.SWAP_OPACITY,pi.PRIMARY,pi.SECONDARY]).concat(hS.map(function(t){return"".concat(t,"x")})).concat(E2.map(function(t){return"w-".concat(t)})),Ko=Gr.FontAwesomeConfig||{};function k2(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function x2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var b2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];b2.forEach(function(t){var e=Dm(t,2),n=e[0],r=e[1],i=x2(k2(n));i!=null&&(Ko[r]=i)})}var pS={styleDefault:"solid",familyDefault:"classic",cssPrefix:uS,replacementClass:cS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ko.familyPrefix&&(Ko.cssPrefix=Ko.familyPrefix);var Hs=z(z({},pS),Ko);Hs.autoReplaceSvg||(Hs.observeMutations=!1);var G={};Object.keys(pS).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Hs[t]=n,qo.forEach(function(r){return r(G)})},get:function(){return Hs[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Hs.cssPrefix=e,qo.forEach(function(n){return n(G)})},get:function(){return Hs.cssPrefix}});Gr.FontAwesomeConfig=G;var qo=[];function I2(t){return qo.push(t),function(){qo.splice(qo.indexOf(t),1)}}var mr=Th,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T2(t){if(!(!t||!cr)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var N2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ma(){for(var t=12,e="";t-- >0;)e+=N2[Math.random()*62|0];return e}function ro(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function jm(t){return t.classList?ro(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function mS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(mS(t[n]),'" ')},"").trim()}function Qc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function zm(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function R2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function A2(t){var e=t.transform,n=t.width,r=n===void 0?Th:n,i=t.height,s=i===void 0?Th:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&lS?l+="translate(".concat(e.x/mr-r/2,"em, ").concat(e.y/mr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/mr,"em), calc(-50% + ").concat(e.y/mr,"em)) "):l+="translate(".concat(e.x/mr,"em, ").concat(e.y/mr,"em) "),l+="scale(".concat(e.size/mr*(e.flipX?-1:1),", ").concat(e.size/mr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var O2=`:root, :host {
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
}`;function gS(){var t=uS,e=cS,n=G.cssPrefix,r=G.replacementClass,i=O2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var zy=!1;function Xd(){G.autoAddCss&&!zy&&(T2(gS()),zy=!0)}var D2={mixout:function(){return{dom:{css:gS,insertCss:Xd}}},hooks:function(){return{beforeDOMElementCreation:function(){Xd()},beforeI2svg:function(){Xd()}}}},sr=Gr||{};sr[ir]||(sr[ir]={});sr[ir].styles||(sr[ir].styles={});sr[ir].hooks||(sr[ir].hooks={});sr[ir].shims||(sr[ir].shims=[]);var gn=sr[ir],vS=[],L2=function t(){Ae.removeEventListener("DOMContentLoaded",t),sc=1,vS.map(function(e){return e()})},sc=!1;cr&&(sc=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),sc||Ae.addEventListener("DOMContentLoaded",L2));function M2(t){cr&&(sc?setTimeout(t,0):vS.push(t))}function il(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?mS(t):"<".concat(e," ").concat(P2(r),">").concat(s.map(il).join(""),"</").concat(e,">")}function Vy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var F2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Jd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?F2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function U2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ph(t){var e=U2(t);return e.length===1?e[0].toString(16):null}function j2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function By(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=By(e);typeof gn.hooks.addPack=="function"&&!i?gn.hooks.addPack(t,By(e)):gn.styles[t]=z(z({},gn.styles[t]||{}),s),t==="fas"&&Rh("fa",e)}var zl,Vl,Bl,fs=gn.styles,z2=gn.shims,V2=(zl={},it(zl,Pe,Object.values(Da[Pe])),it(zl,Be,Object.values(Da[Be])),zl),Vm=null,yS={},_S={},wS={},ES={},SS={},B2=(Vl={},it(Vl,Pe,Object.keys(Aa[Pe])),it(Vl,Be,Object.keys(Aa[Be])),Vl);function W2(t){return~C2.indexOf(t)}function $2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!W2(i)?i:null}var CS=function(){var e=function(s){return Jd(fs,function(o,a,l){return o[l]=Jd(a,s,{}),o},{})};yS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),_S=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),SS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in fs||G.autoFetchSvg,r=Jd(z2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});wS=r.names,ES=r.unicodes,Vm=Xc(G.styleDefault,{family:G.familyDefault})};I2(function(t){Vm=Xc(t.styleDefault,{family:G.familyDefault})});CS();function Bm(t,e){return(yS[t]||{})[e]}function H2(t,e){return(_S[t]||{})[e]}function mi(t,e){return(SS[t]||{})[e]}function kS(t){return wS[t]||{prefix:null,iconName:null}}function G2(t){var e=ES[t],n=Bm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yr(){return Vm}var Wm=function(){return{prefix:null,iconName:null,rest:[]}};function Xc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,i=Aa[r][t],s=Oa[r][t]||Oa[r][i],o=t in gn.styles?t:null;return s||o||null}var Wy=(Bl={},it(Bl,Pe,Object.keys(Da[Pe])),it(Bl,Be,Object.keys(Da[Be])),Bl);function Jc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},it(e,Pe,"".concat(G.cssPrefix,"-").concat(Pe)),it(e,Be,"".concat(G.cssPrefix,"-").concat(Be)),e),o=null,a=Pe;(t.includes(s[Pe])||t.some(function(u){return Wy[Pe].includes(u)}))&&(a=Pe),(t.includes(s[Be])||t.some(function(u){return Wy[Be].includes(u)}))&&(a=Be);var l=t.reduce(function(u,c){var d=$2(G.cssPrefix,c);if(fs[c]?(c=V2[a].includes(c)?v2[a][c]:c,o=c,u.prefix=c):B2[a].indexOf(c)>-1?(o=c,u.prefix=Xc(c,{family:a})):d?u.iconName=d:c!==G.replacementClass&&c!==s[Pe]&&c!==s[Be]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?kS(u.iconName):{},m=mi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!fs.far&&fs.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},Wm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Be&&(fs.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=mi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Yr()||"fas"),l}var Y2=function(){function t(){s2(this,t),this.definitions={}}return o2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),Rh(a,o[a]);var l=Da[Pe][a];l&&Rh(l,o[a]),CS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),$y=[],hs={},Ts={},K2=Object.keys(Ts);function q2(t,e){var n=e.mixoutsTo;return $y=t,hs={},Object.keys(Ts).forEach(function(r){K2.indexOf(r)===-1&&delete Ts[r]}),$y.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ic(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){hs[o]||(hs[o]=[]),hs[o].push(s[o])})}r.provides&&r.provides(Ts)}),n}function Ah(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=hs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Fi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=hs[t]||[];i.forEach(function(s){s.apply(null,n)})}function or(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ts[t]?Ts[t].apply(null,e):void 0}function Oh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Yr();if(e)return e=mi(n,e)||e,Vy(xS.definitions,n,e)||Vy(gn.styles,n,e)}var xS=new Y2,Q2=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Fi("noAuto")},X2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cr?(Fi("beforeI2svg",e),or("pseudoElements2svg",e),or("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,M2(function(){Z2({autoReplaceSvgRoot:n}),Fi("watch",e)})}},J2={icon:function(e){if(e===null)return null;if(ic(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:mi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xc(e[0]);return{prefix:r,iconName:mi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(y2))){var i=Jc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yr(),iconName:mi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Yr();return{prefix:s,iconName:mi(s,e)||e}}}},Gt={noAuto:Q2,config:G,dom:X2,parse:J2,library:xS,findIconDefinition:Oh,toHtml:il},Z2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(gn.styles).length>0||G.autoFetchSvg)&&cr&&G.autoReplaceSvg&&Gt.dom.i2svg({node:r})};function Zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return il(r)})}}),Object.defineProperty(t,"node",{get:function(){if(cr){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function eD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(zm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Qc(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function tD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function $m(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,y=r.found?r:n,_=y.width,I=y.height,v=i==="fak",h=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),g={children:[],attributes:z(z({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(I)})},p=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/I*16*.0625,"em")}:{};m&&(g.attributes[Mi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ma())},children:[l]}),delete g.attributes.title);var C=z(z({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},p),d.styles)}),b=r.found&&n.found?or("generateAbstractMask",C)||{children:[],attributes:{}}:or("generateAbstractIcon",C)||{children:[],attributes:{}},x=b.children,R=b.attributes;return C.children=x,C.attributes=R,a?tD(C):eD(C)}function Hy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Mi]="");var c=z({},o.styles);zm(i)&&(c.transform=A2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Qc(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function nD(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Qc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zd=gn.styles;function Dh(t){var e=t[0],n=t[1],r=t.slice(4),i=Dm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(pi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(pi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(pi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var rD={found:!1,width:512,height:512};function iD(t,e){!dS&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lh(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Yr()),new Promise(function(r,i){if(or("missingIconAbstract"),n==="fa"){var s=kS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Zd[e]&&Zd[e][t]){var o=Zd[e][t];return r(Dh(o))}iD(t,e),r(z(z({},rD),{},{icon:G.showMissingIcons&&t?or("missingIconAbstract")||{}:{}}))})}var Gy=function(){},Mh=G.measurePerformance&&Dl&&Dl.mark&&Dl.measure?Dl:{mark:Gy,measure:Gy},Po='FA "6.4.2"',sD=function(e){return Mh.mark("".concat(Po," ").concat(e," begins")),function(){return bS(e)}},bS=function(e){Mh.mark("".concat(Po," ").concat(e," ends")),Mh.measure("".concat(Po," ").concat(e),"".concat(Po," ").concat(e," begins"),"".concat(Po," ").concat(e," ends"))},Hm={begin:sD,end:bS},ou=function(){};function Yy(t){var e=t.getAttribute?t.getAttribute(Mi):null;return typeof e=="string"}function oD(t){var e=t.getAttribute?t.getAttribute(Mm):null,n=t.getAttribute?t.getAttribute(Fm):null;return e&&n}function aD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function lD(){if(G.autoReplaceSvg===!0)return au.replace;var t=au[G.autoReplaceSvg];return t||au.replace}function uD(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function cD(t){return Ae.createElement(t)}function IS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?uD:cD:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(IS(o,{ceFn:r}))}),i}function dD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var au={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(IS(i),n)}),n.getAttribute(Mi)===null&&G.keepOriginalSource){var r=Ae.createComment(dD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~jm(n).indexOf(G.replacementClass))return au.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return il(a)}).join(`
`);n.setAttribute(Mi,""),n.innerHTML=o}};function Ky(t){t()}function TS(t,e){var n=typeof e=="function"?e:ou;if(t.length===0)n();else{var r=Ky;G.mutateApproach===m2&&(r=Gr.requestAnimationFrame||Ky),r(function(){var i=lD(),s=Hm.begin("mutate");t.map(i),s(),n()})}}var Gm=!1;function NS(){Gm=!0}function Fh(){Gm=!1}var oc=null;function qy(t){if(Uy&&G.observeMutations){var e=t.treeCallback,n=e===void 0?ou:e,r=t.nodeCallback,i=r===void 0?ou:r,s=t.pseudoElementsCallback,o=s===void 0?ou:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;oc=new Uy(function(u){if(!Gm){var c=Yr();ro(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Yy(d.addedNodes[0])&&(G.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Yy(d.target)&&~S2.indexOf(d.attributeName))if(d.attributeName==="class"&&oD(d.target)){var f=Jc(jm(d.target)),m=f.prefix,y=f.iconName;d.target.setAttribute(Mm,m||c),y&&d.target.setAttribute(Fm,y)}else aD(d.target)&&i(d.target)})}}),cr&&oc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fD(){oc&&oc.disconnect()}function hD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function pD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Jc(jm(t));return i.prefix||(i.prefix=Yr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=H2(i.prefix,t.innerText)||Bm(i.prefix,Ph(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function mD(t){var e=ro(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Ma()):(e["aria-hidden"]="true",e.focusable="false")),e}function gD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pD(t),r=n.iconName,i=n.prefix,s=n.rest,o=mD(t),a=Ah("parseNodeAttributes",{},t),l=e.styleParser?hD(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var vD=gn.styles;function PS(t){var e=G.autoReplaceSvg==="nest"?Qy(t,{styleParser:!1}):Qy(t);return~e.extra.classes.indexOf(fS)?or("generateLayersText",t,e):or("generateSvgReplacementMutation",t,e)}var Kr=new Set;Um.map(function(t){Kr.add("fa-".concat(t))});Object.keys(Aa[Pe]).map(Kr.add.bind(Kr));Object.keys(Aa[Be]).map(Kr.add.bind(Kr));Kr=nl(Kr);function Xy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cr)return Promise.resolve();var n=Ae.documentElement.classList,r=function(d){return n.add("".concat(jy,"-").concat(d))},i=function(d){return n.remove("".concat(jy,"-").concat(d))},s=G.autoFetchSvg?Kr:Um.map(function(c){return"fa-".concat(c)}).concat(Object.keys(vD));s.includes("fa")||s.push("fa");var o=[".".concat(fS,":not([").concat(Mi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Mi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ro(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Hm.begin("onTree"),u=a.reduce(function(c,d){try{var f=PS(d);f&&c.push(f)}catch(m){dS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){TS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function yD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;PS(t).then(function(n){n&&TS([n],e)})}function _D(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Oh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Oh(i||{})),t(r,z(z({},n),{},{mask:i}))}}var wD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,y=m===void 0?null:m,_=n.classes,I=_===void 0?[]:_,v=n.attributes,h=v===void 0?{}:v,g=n.styles,p=g===void 0?{}:g;if(e){var C=e.prefix,b=e.iconName,x=e.icon;return Zc(z({type:"icon"},e),function(){return Fi("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?h["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(y||Ma()):(h["aria-hidden"]="true",h.focusable="false")),$m({icons:{main:Dh(x),mask:l?Dh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:b,transform:z(z({},bn),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:h,styles:p,classes:I}})})}},ED={mixout:function(){return{icon:_D(wD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xy,n.nodeCallback=yD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return Xy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,y){Promise.all([Lh(i,a),c.iconName?Lh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var I=Dm(_,2),v=I[0],h=I[1];m([n,$m({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Qc(a);l.length>0&&(i.style=l);var u;return zm(o)&&(u=or("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},SD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Zc({type:"layer"},function(){Fi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(nl(s)).join(" ")},children:o}]})}}}},CD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Zc({type:"counter",content:n},function(){return Fi("beforeDOMElementCreation",{content:n,params:r}),nD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(nl(a))}})})}}}},kD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?bn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return Zc({type:"text",content:n},function(){return Fi("beforeDOMElementCreation",{content:n,params:r}),Hy({content:n,transform:z(z({},bn),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(G.cssPrefix,"-layers-text")].concat(nl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(lS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},xD=new RegExp('"',"ug"),Jy=[1105920,1112319];function bD(t){var e=t.replace(xD,""),n=j2(e,0),r=n>=Jy[0]&&n<=Jy[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ph(i?e[0]:e),isSecondary:r||i}}function Zy(t,e){var n="".concat(p2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ro(t.children),o=s.filter(function(x){return x.getAttribute(Nh)===e})[0],a=Gr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(_2),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Be:Pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Oa[f][l[2].toLowerCase()]:w2[f][u],y=bD(d),_=y.value,I=y.isSecondary,v=l[0].startsWith("FontAwesome"),h=Bm(m,_),g=h;if(v){var p=G2(_);p.iconName&&p.prefix&&(h=p.iconName,m=p.prefix)}if(h&&!I&&(!o||o.getAttribute(Mm)!==m||o.getAttribute(Fm)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=gD(),b=C.extra;b.attributes[Nh]=e,Lh(h,m).then(function(x){var R=$m(z(z({},C),{},{icons:{main:x,mask:Wm()},prefix:m,iconName:g,extra:b,watchable:!0})),M=Ae.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=R.map(function(j){return il(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ID(t){return Promise.all([Zy(t,"::before"),Zy(t,"::after")])}function TD(t){return t.parentNode!==document.head&&!~g2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function e_(t){if(cr)return new Promise(function(e,n){var r=ro(t.querySelectorAll("*")).filter(TD).map(ID),i=Hm.begin("searchPseudoElements");NS(),Promise.all(r).then(function(){i(),Fh(),e()}).catch(function(){i(),Fh(),n()})})}var ND={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=e_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;G.searchPseudoElements&&e_(i)}}},t_=!1,PD={mixout:function(){return{dom:{unwatch:function(){NS(),t_=!0}}}},hooks:function(){return{bootstrap:function(){qy(Ah("mutationObserverCallbacks",{}))},noAuto:function(){fD()},watch:function(n){var r=n.observeMutationsRoot;t_?Fh():qy(Ah("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},n_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},RD={mixout:function(){return{parse:{transform:function(n){return n_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=n_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),m.path)}]}]}}}},ef={x:0,y:0,width:"100%",height:"100%"};function r_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function AD(t){return t.tag==="g"?t.children:[t]}var OD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Jc(i.split(" ").map(function(o){return o.trim()})):Wm();return s.prefix||(s.prefix=Yr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=R2({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:z(z({},ef),{},{fill:"white"})},_=c.children?{children:c.children.map(r_)}:{},I={tag:"g",attributes:z({},m.inner),children:[r_(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},_))]},v={tag:"g",attributes:z({},m.outer),children:[I]},h="mask-".concat(a||Ma()),g="clip-".concat(a||Ma()),p={tag:"mask",attributes:z(z({},ef),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:AD(f)},p]};return r.push(C,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},ef)}),{children:r,attributes:i}}}},DD={provides:function(e){var n=!1;Gr.matchMedia&&(n=Gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},LD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},MD=[D2,ED,SD,CD,kD,ND,PD,RD,OD,DD,LD];q2(MD,{mixoutsTo:Gt});Gt.noAuto;Gt.config;Gt.library;Gt.dom;var Uh=Gt.parse;Gt.findIconDefinition;Gt.toHtml;var FD=Gt.icon;Gt.layer;Gt.text;Gt.counter;var RS={exports:{}},UD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jD=UD,zD=jD;function AS(){}function OS(){}OS.resetWarningCache=AS;var VD=function(){function t(r,i,s,o,a,l){if(l!==zD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:OS,resetWarningCache:AS};return n.PropTypes=n,n};RS.exports=VD();var BD=RS.exports;const le=g_(BD);function i_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function br(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i_(Object(n),!0).forEach(function(r){ps(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ac(t){"@babel/helpers - typeof";return ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ac(t)}function ps(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $D(t,e){if(t==null)return{};var n=WD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function jh(t){return HD(t)||GD(t)||YD(t)||KD()}function HD(t){if(Array.isArray(t))return zh(t)}function GD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YD(t,e){if(t){if(typeof t=="string")return zh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zh(t,e)}}function zh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function KD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,y=t.border,_=t.listItem,I=t.flip,v=t.size,h=t.rotation,g=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":y,"fa-li":_,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},ps(e,"fa-".concat(v),typeof v<"u"&&v!==null),ps(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ps(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ps(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(C){return p[C]?C:null}).filter(function(C){return C})}function QD(t){return t=t-0,t===t}function DS(t){return QD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var XD=["style"];function JD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ZD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=DS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[JD(i)]=s:e[i]=s,e},{})}function LS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return LS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=ZD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[DS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=$D(n,XD);return i.attrs.style=br(br({},i.attrs.style),o),t.apply(void 0,[e.tag,br(br({},i.attrs),a)].concat(jh(r)))}var MS=!1;try{MS=!0}catch{}function eL(){if(!MS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function s_(t){if(t&&ac(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Uh.icon)return Uh.icon(t);if(t===null)return null;if(t&&ac(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function tf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ps({},t,e):{}}var sl=Jt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=s_(n),c=tf("classes",[].concat(jh(qD(t)),jh(s.split(" ")))),d=tf("transform",typeof t.transform=="string"?Uh.transform(t.transform):t.transform),f=tf("mask",s_(r)),m=FD(u,br(br(br(br({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return eL("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(t).forEach(function(I){sl.defaultProps.hasOwnProperty(I)||(_[I]=t[I])}),tL(y[0],_)});sl.displayName="FontAwesomeIcon";sl.propTypes={beat:le.bool,border:le.bool,beatFade:le.bool,bounce:le.bool,className:le.string,fade:le.bool,flash:le.bool,mask:le.oneOfType([le.object,le.array,le.string]),maskId:le.string,fixedWidth:le.bool,inverse:le.bool,flip:le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:le.oneOfType([le.object,le.array,le.string]),listItem:le.bool,pull:le.oneOf(["right","left"]),pulse:le.bool,rotation:le.oneOf([0,90,180,270]),shake:le.bool,size:le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:le.bool,spinPulse:le.bool,spinReverse:le.bool,symbol:le.oneOfType([le.bool,le.string]),title:le.string,titleId:le.string,transform:le.oneOfType([le.string,le.object]),swapOpacity:le.bool};sl.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var tL=LS.bind(null,Jt.createElement);function ol({size:t}){const[e,n]=S.useState("text-2xl");return S.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),w.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:w.jsx(sl,{icon:i2,spin:!0})})}function nL(){const t=Ut(),[e,n]=S.useState(!1);return S.useEffect(function(){NE(Oi,async r=>{if(r){console.log("AUTH: Logged");const i=await n2(r);i&&n(i),i||await r2(r)}else t("/login")})},[]),e?w.jsx(t2,{}):w.jsx("div",{className:"h-screen",children:w.jsx(ol,{size:"big"})})}function rL(){const t=Ut();S.useEffect(()=>{NE(Oi,n=>{t(n?"/":"/login")})},[]);function e(){const n=new xn;TR(Oi,n).then(r=>{const i=xn.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return w.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:w.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",w.jsx("br",{}),w.jsx(tn,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function iL({event:t}){const e=Ut(),n=()=>{e(`/event/${t.id}`)};return w.jsxs("div",{onClick:n,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:t.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function o_({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(console.log(),e===void 0)return w.jsx(ol,{size:"small"});if(console.log(e[0].name),e[0].name==="defaultName")return w.jsxs("div",{children:["U have zero of ",t]});if(e.length>0)return e.map(o=>w.jsx(iL,{event:o},o.id))},i=Ut();function s(){i("/event/create")}return w.jsxs("div",{className:"w-full pb-2",children:[w.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?w.jsx(tn,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function sL(){const t=S.useContext(Zr),e=S.useContext(ei);return S.useEffect(()=>{},[]),w.jsxs("div",{className:"h-full w-full",children:[w.jsx(o_,{buttonAddEvent:!0,title:"Your events",events:t}),w.jsx("br",{}),w.jsx(o_,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var al=t=>t.type==="checkbox",ms=t=>t instanceof Date,xt=t=>t==null;const FS=t=>typeof t=="object";var st=t=>!xt(t)&&!Array.isArray(t)&&FS(t)&&!ms(t),oL=t=>st(t)&&t.target?al(t.target)?t.target.checked:t.target.value:t,aL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,lL=(t,e)=>t.has(aL(e)),uL=t=>{const e=t.constructor&&t.constructor.prototype;return st(e)&&e.hasOwnProperty("isPrototypeOf")},Ym=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Vn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Ym&&(t instanceof Blob||t instanceof FileList))&&(n||st(t)))if(e=n?[]:{},!n&&!uL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Vn(t[r]));else return t;return e}var ll=t=>Array.isArray(t)?t.filter(Boolean):[],Xe=t=>t===void 0,H=(t,e,n)=>{if(!e||!st(t))return n;const r=ll(e.split(/[,[\].]+?/)).reduce((i,s)=>xt(i)?i:i[s],t);return Xe(r)||r===t?Xe(t[e])?n:t[e]:r},gi=t=>typeof t=="boolean";const a_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},zn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Jt.createContext(null);var cL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==pn.all&&(e._proxyFormState[o]=!r||pn.all),n&&(n[o]=!0),t[o]}});return i},qt=t=>st(t)&&!Object.keys(t).length,dL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return qt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||pn.all))},nf=t=>Array.isArray(t)?t:[t];function fL(t){const e=Jt.useRef(t);e.current=t,Jt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var In=t=>typeof t=="string",hL=(t,e,n,r,i)=>In(t)?(r&&e.watch.add(t),H(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),H(n,s))):(r&&(e.watchAll=!0),n),Km=t=>/^\w*$/.test(t),US=t=>ll(t.replace(/["|']|\]/g,"").split(/\.|\[/));function De(t,e,n){let r=-1;const i=Km(e)?[e]:US(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=st(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var pL=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Vh=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=H(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else st(o)&&Vh(o,e)}}};var l_=t=>({isOnSubmit:!t||t===pn.onSubmit,isOnBlur:t===pn.onBlur,isOnChange:t===pn.onChange,isOnAll:t===pn.all,isOnTouch:t===pn.onTouched}),u_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),mL=(t,e,n)=>{const r=ll(H(t,n));return De(r,"root",e[n]),De(t,n,r),t},qm=t=>t.type==="file",Ir=t=>typeof t=="function",lc=t=>{if(!Ym)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},lu=t=>In(t),Qm=t=>t.type==="radio",uc=t=>t instanceof RegExp;const c_={value:!1,isValid:!1},d_={value:!0,isValid:!0};var jS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Xe(t[0].attributes.value)?Xe(t[0].value)||t[0].value===""?d_:{value:t[0].value,isValid:!0}:d_:c_}return c_};const f_={isValid:!1,value:null};var zS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,f_):f_;function h_(t,e,n="validate"){if(lu(t)||Array.isArray(t)&&t.every(lu)||gi(t)&&!t)return{type:n,message:lu(t)?t:"",ref:e}}var Ki=t=>st(t)&&!uc(t)?t:{value:t,message:""},p_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:m,name:y,valueAsNumber:_,mount:I,disabled:v}=t._f,h=H(e,y);if(!I||v)return{};const g=o?o[0]:s,p=J=>{r&&g.reportValidity&&(g.setCustomValidity(gi(J)?"":J||""),g.reportValidity())},C={},b=Qm(s),x=al(s),R=b||x,M=(_||qm(s))&&Xe(s.value)&&Xe(h)||lc(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,j=pL.bind(null,y,n,C),ie=(J,Z,ge,ae=zn.maxLength,He=zn.minLength)=>{const Qe=J?Z:ge;C[y]={type:J?ae:He,message:Qe,ref:s,...j(J?ae:He,Qe)}};if(i?!Array.isArray(h)||!h.length:a&&(!R&&(M||xt(h))||gi(h)&&!h||x&&!jS(o).isValid||b&&!zS(o).isValid)){const{value:J,message:Z}=lu(a)?{value:!!a,message:a}:Ki(a);if(J&&(C[y]={type:zn.required,message:Z,ref:g,...j(zn.required,Z)},!n))return p(Z),C}if(!M&&(!xt(c)||!xt(d))){let J,Z;const ge=Ki(d),ae=Ki(c);if(!xt(h)&&!isNaN(h)){const He=s.valueAsNumber||h&&+h;xt(ge.value)||(J=He>ge.value),xt(ae.value)||(Z=He<ae.value)}else{const He=s.valueAsDate||new Date(h),Qe=q=>new Date(new Date().toDateString()+" "+q),F=s.type=="time",Y=s.type=="week";In(ge.value)&&h&&(J=F?Qe(h)>Qe(ge.value):Y?h>ge.value:He>new Date(ge.value)),In(ae.value)&&h&&(Z=F?Qe(h)<Qe(ae.value):Y?h<ae.value:He<new Date(ae.value))}if((J||Z)&&(ie(!!J,ge.message,ae.message,zn.max,zn.min),!n))return p(C[y].message),C}if((l||u)&&!M&&(In(h)||i&&Array.isArray(h))){const J=Ki(l),Z=Ki(u),ge=!xt(J.value)&&h.length>+J.value,ae=!xt(Z.value)&&h.length<+Z.value;if((ge||ae)&&(ie(ge,J.message,Z.message),!n))return p(C[y].message),C}if(f&&!M&&In(h)){const{value:J,message:Z}=Ki(f);if(uc(J)&&!h.match(J)&&(C[y]={type:zn.pattern,message:Z,ref:s,...j(zn.pattern,Z)},!n))return p(Z),C}if(m){if(Ir(m)){const J=await m(h,e),Z=h_(J,g);if(Z&&(C[y]={...Z,...j(zn.validate,Z.message)},!n))return p(Z.message),C}else if(st(m)){let J={};for(const Z in m){if(!qt(J)&&!n)break;const ge=h_(await m[Z](h,e),g,Z);ge&&(J={...ge,...j(Z,ge.message)},p(ge.message),n&&(C[y]=J))}if(!qt(J)&&(C[y]={ref:g,...J},!n))return C}}return p(!0),C};function gL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Xe(t)?r++:t[e[r++]];return t}function vL(t){for(const e in t)if(t.hasOwnProperty(e)&&!Xe(t[e]))return!1;return!0}function ct(t,e){const n=Array.isArray(e)?e:Km(e)?[e]:US(e),r=n.length===1?t:gL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(st(r)&&qt(r)||Array.isArray(r)&&vL(r))&&ct(t,n.slice(0,-1)),t}function rf(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var cc=t=>xt(t)||!FS(t);function vi(t,e){if(cc(t)||cc(e))return t===e;if(ms(t)&&ms(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ms(s)&&ms(o)||st(s)&&st(o)||Array.isArray(s)&&Array.isArray(o)?!vi(s,o):s!==o)return!1}}return!0}var VS=t=>t.type==="select-multiple",yL=t=>Qm(t)||al(t),sf=t=>lc(t)&&t.isConnected,BS=t=>{for(const e in t)if(Ir(t[e]))return!0;return!1};function dc(t,e={}){const n=Array.isArray(t);if(st(t)||n)for(const r in t)Array.isArray(t[r])||st(t[r])&&!BS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},dc(t[r],e[r])):xt(t[r])||(e[r]=!0);return e}function WS(t,e,n){const r=Array.isArray(t);if(st(t)||r)for(const i in t)Array.isArray(t[i])||st(t[i])&&!BS(t[i])?Xe(e)||cc(n[i])?n[i]=Array.isArray(t[i])?dc(t[i],[]):{...dc(t[i])}:WS(t[i],xt(e)?{}:e[i],n[i]):n[i]=!vi(t[i],e[i]);return n}var of=(t,e)=>WS(t,e,dc(e)),$S=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Xe(t)?t:e?t===""?NaN:t&&+t:n&&In(t)?new Date(t):r?r(t):t;function af(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return qm(e)?e.files:Qm(e)?zS(t.refs).value:VS(e)?[...e.selectedOptions].map(({value:n})=>n):al(e)?jS(t.refs).value:$S(Xe(e.value)?t.ref.value:e.value,t)}var _L=(t,e,n,r)=>{const i={};for(const s of t){const o=H(e,s);o&&De(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},xo=t=>Xe(t)?t:uc(t)?t.source:st(t)?uc(t.value)?t.value.source:t.value:t,wL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function m_(t,e,n){const r=H(t,n);if(r||Km(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=H(e,s),a=H(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var EL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,SL=(t,e)=>!ll(H(t,e)).length&&ct(t,e);const CL={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function kL(t={},e){let n={...CL,...t},r={submitCount:0,isDirty:!1,isLoading:Ir(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=st(n.defaultValues)||st(n.values)?Vn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Vn(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:rf(),array:rf(),state:rf()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,y=l_(n.mode),_=l_(n.reValidateMode),I=n.criteriaMode===pn.all,v=E=>T=>{clearTimeout(c),c=setTimeout(E,T)},h=async E=>{if(d.isValid||E){const T=n.resolver?qt((await M()).errors):await ie(i,!0);T!==r.isValid&&f.state.next({isValid:T})}},g=E=>d.isValidating&&f.state.next({isValidating:E}),p=(E,T=[],P,W,U=!0,D=!0)=>{if(W&&P){if(a.action=!0,D&&Array.isArray(H(i,E))){const $=P(H(i,E),W.argA,W.argB);U&&De(i,E,$)}if(D&&Array.isArray(H(r.errors,E))){const $=P(H(r.errors,E),W.argA,W.argB);U&&De(r.errors,E,$),SL(r.errors,E)}if(d.touchedFields&&D&&Array.isArray(H(r.touchedFields,E))){const $=P(H(r.touchedFields,E),W.argA,W.argB);U&&De(r.touchedFields,E,$)}d.dirtyFields&&(r.dirtyFields=of(s,o)),f.state.next({name:E,isDirty:Z(E,T),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else De(o,E,T)},C=(E,T)=>{De(r.errors,E,T),f.state.next({errors:r.errors})},b=(E,T,P,W)=>{const U=H(i,E);if(U){const D=H(o,E,Xe(P)?H(s,E):P);Xe(D)||W&&W.defaultChecked||T?De(o,E,T?D:af(U._f)):He(E,D),a.mount&&h()}},x=(E,T,P,W,U)=>{let D=!1,$=!1;const Te={name:E};if(!P||W){d.isDirty&&($=r.isDirty,r.isDirty=Te.isDirty=Z(),D=$!==Te.isDirty);const Oe=vi(H(s,E),T);$=H(r.dirtyFields,E),Oe?ct(r.dirtyFields,E):De(r.dirtyFields,E,!0),Te.dirtyFields=r.dirtyFields,D=D||d.dirtyFields&&$!==!Oe}if(P){const Oe=H(r.touchedFields,E);Oe||(De(r.touchedFields,E,P),Te.touchedFields=r.touchedFields,D=D||d.touchedFields&&Oe!==P)}return D&&U&&f.state.next(Te),D?Te:{}},R=(E,T,P,W)=>{const U=H(r.errors,E),D=d.isValid&&gi(T)&&r.isValid!==T;if(t.delayError&&P?(u=v(()=>C(E,P)),u(t.delayError)):(clearTimeout(c),u=null,P?De(r.errors,E,P):ct(r.errors,E)),(P?!vi(U,P):U)||!qt(W)||D){const $={...W,...D&&gi(T)?{isValid:T}:{},errors:r.errors,name:E};r={...r,...$},f.state.next($)}g(!1)},M=async E=>n.resolver(o,n.context,_L(E||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),j=async E=>{const{errors:T}=await M(E);if(E)for(const P of E){const W=H(T,P);W?De(r.errors,P,W):ct(r.errors,P)}else r.errors=T;return T},ie=async(E,T,P={valid:!0})=>{for(const W in E){const U=E[W];if(U){const{_f:D,...$}=U;if(D){const Te=l.array.has(D.name),Oe=await p_(U,o,I,n.shouldUseNativeValidation&&!T,Te);if(Oe[D.name]&&(P.valid=!1,T))break;!T&&(H(Oe,D.name)?Te?mL(r.errors,Oe,D.name):De(r.errors,D.name,Oe[D.name]):ct(r.errors,D.name))}$&&await ie($,T,P)}}return P.valid},J=()=>{for(const E of l.unMount){const T=H(i,E);T&&(T._f.refs?T._f.refs.every(P=>!sf(P)):!sf(T._f.ref))&&jt(E)}l.unMount=new Set},Z=(E,T)=>(E&&T&&De(o,E,T),!vi(pe(),s)),ge=(E,T,P)=>hL(E,l,{...a.mount?o:Xe(T)?s:In(E)?{[E]:T}:T},P,T),ae=E=>ll(H(a.mount?o:s,E,t.shouldUnregister?H(s,E,[]):[])),He=(E,T,P={})=>{const W=H(i,E);let U=T;if(W){const D=W._f;D&&(!D.disabled&&De(o,E,$S(T,D)),U=lc(D.ref)&&xt(T)?"":T,VS(D.ref)?[...D.ref.options].forEach($=>$.selected=U.includes($.value)):D.refs?al(D.ref)?D.refs.length>1?D.refs.forEach($=>(!$.defaultChecked||!$.disabled)&&($.checked=Array.isArray(U)?!!U.find(Te=>Te===$.value):U===$.value)):D.refs[0]&&(D.refs[0].checked=!!U):D.refs.forEach($=>$.checked=$.value===U):qm(D.ref)?D.ref.value="":(D.ref.value=U,D.ref.type||f.values.next({name:E,values:{...o}})))}(P.shouldDirty||P.shouldTouch)&&x(E,U,P.shouldTouch,P.shouldDirty,!0),P.shouldValidate&&q(E)},Qe=(E,T,P)=>{for(const W in T){const U=T[W],D=`${E}.${W}`,$=H(i,D);(l.array.has(E)||!cc(U)||$&&!$._f)&&!ms(U)?Qe(D,U,P):He(D,U,P)}},F=(E,T,P={})=>{const W=H(i,E),U=l.array.has(E),D=Vn(T);De(o,E,D),U?(f.array.next({name:E,values:{...o}}),(d.isDirty||d.dirtyFields)&&P.shouldDirty&&f.state.next({name:E,dirtyFields:of(s,o),isDirty:Z(E,D)})):W&&!W._f&&!xt(D)?Qe(E,D,P):He(E,D,P),u_(E,l)&&f.state.next({...r}),f.values.next({name:E,values:{...o}}),!a.mount&&e()},Y=async E=>{const T=E.target;let P=T.name,W=!0;const U=H(i,P),D=()=>T.type?af(U._f):oL(E);if(U){let $,Te;const Oe=D(),Fn=E.type===a_.BLUR||E.type===a_.FOCUS_OUT,td=!wL(U._f)&&!n.resolver&&!H(r.errors,P)&&!U._f.deps||EL(Fn,H(r.touchedFields,P),r.isSubmitted,_,y),$i=u_(P,l,Fn);De(o,P,Oe),Fn?(U._f.onBlur&&U._f.onBlur(E),u&&u(0)):U._f.onChange&&U._f.onChange(E);const dr=x(P,Oe,Fn,!1),fl=!qt(dr)||$i;if(!Fn&&f.values.next({name:P,type:E.type,values:{...o}}),td)return d.isValid&&h(),fl&&f.state.next({name:P,...$i?{}:dr});if(!Fn&&$i&&f.state.next({...r}),g(!0),n.resolver){const{errors:Hi}=await M([P]),nd=m_(r.errors,i,P),so=m_(Hi,i,nd.name||P);$=so.error,P=so.name,Te=qt(Hi)}else $=(await p_(U,o,I,n.shouldUseNativeValidation))[P],W=Number.isNaN(Oe)||Oe===H(o,P,Oe),W&&($?Te=!1:d.isValid&&(Te=await ie(i,!0)));W&&(U._f.deps&&q(U._f.deps),R(P,Te,$,dr))}},q=async(E,T={})=>{let P,W;const U=nf(E);if(g(!0),n.resolver){const D=await j(Xe(E)?E:U);P=qt(D),W=E?!U.some($=>H(D,$)):P}else E?(W=(await Promise.all(U.map(async D=>{const $=H(i,D);return await ie($&&$._f?{[D]:$}:$)}))).every(Boolean),!(!W&&!r.isValid)&&h()):W=P=await ie(i);return f.state.next({...!In(E)||d.isValid&&P!==r.isValid?{}:{name:E},...n.resolver||!E?{isValid:P}:{},errors:r.errors,isValidating:!1}),T.shouldFocus&&!W&&Vh(i,D=>D&&H(r.errors,D),E?U:l.mount),W},pe=E=>{const T={...s,...a.mount?o:{}};return Xe(E)?T:In(E)?H(T,E):E.map(P=>H(T,P))},ve=(E,T)=>({invalid:!!H((T||r).errors,E),isDirty:!!H((T||r).dirtyFields,E),isTouched:!!H((T||r).touchedFields,E),error:H((T||r).errors,E)}),En=E=>{E&&nf(E).forEach(T=>ct(r.errors,T)),f.state.next({errors:E?r.errors:{}})},Yt=(E,T,P)=>{const W=(H(i,E,{_f:{}})._f||{}).ref;De(r.errors,E,{...T,ref:W}),f.state.next({name:E,errors:r.errors,isValid:!1}),P&&P.shouldFocus&&W&&W.focus&&W.focus()},ti=(E,T)=>Ir(E)?f.values.subscribe({next:P=>E(ge(void 0,T),P)}):ge(E,T,!0),jt=(E,T={})=>{for(const P of E?nf(E):l.mount)l.mount.delete(P),l.array.delete(P),T.keepValue||(ct(i,P),ct(o,P)),!T.keepError&&ct(r.errors,P),!T.keepDirty&&ct(r.dirtyFields,P),!T.keepTouched&&ct(r.touchedFields,P),!n.shouldUnregister&&!T.keepDefaultValue&&ct(s,P);f.values.next({values:{...o}}),f.state.next({...r,...T.keepDirty?{isDirty:Z()}:{}}),!T.keepIsValid&&h()},ke=({disabled:E,name:T,field:P,fields:W})=>{if(gi(E)){const U=E?void 0:H(o,T,af(P?P._f:H(W,T)._f));De(o,T,U),x(T,U,!1,!1,!0)}},Ln=(E,T={})=>{let P=H(i,E);const W=gi(T.disabled);return De(i,E,{...P||{},_f:{...P&&P._f?P._f:{ref:{name:E}},name:E,mount:!0,...T}}),l.mount.add(E),P?ke({field:P,disabled:T.disabled,name:E}):b(E,!0,T.value),{...W?{disabled:T.disabled}:{},...n.progressive?{required:!!T.required,min:xo(T.min),max:xo(T.max),minLength:xo(T.minLength),maxLength:xo(T.maxLength),pattern:xo(T.pattern)}:{},name:E,onChange:Y,onBlur:Y,ref:U=>{if(U){Ln(E,T),P=H(i,E);const D=Xe(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,$=yL(D),Te=P._f.refs||[];if($?Te.find(Oe=>Oe===D):D===P._f.ref)return;De(i,E,{_f:{...P._f,...$?{refs:[...Te.filter(sf),D,...Array.isArray(H(s,E))?[{}]:[]],ref:{type:D.type,name:E}}:{ref:D}}}),b(E,!1,void 0,D)}else P=H(i,E,{}),P._f&&(P._f.mount=!1),(n.shouldUnregister||T.shouldUnregister)&&!(lL(l.array,E)&&a.action)&&l.unMount.add(E)}}},io=()=>n.shouldFocusError&&Vh(i,E=>E&&H(r.errors,E),l.mount),ul=(E,T)=>async P=>{P&&(P.preventDefault&&P.preventDefault(),P.persist&&P.persist());let W=Vn(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:U,values:D}=await M();r.errors=U,W=D}else await ie(i);ct(r.errors,"root"),qt(r.errors)?(f.state.next({errors:{}}),await E(W,P)):(T&&await T({...r.errors},P),io(),setTimeout(io)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:qt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Mn=(E,T={})=>{H(i,E)&&(Xe(T.defaultValue)?F(E,H(s,E)):(F(E,T.defaultValue),De(s,E,T.defaultValue)),T.keepTouched||ct(r.touchedFields,E),T.keepDirty||(ct(r.dirtyFields,E),r.isDirty=T.defaultValue?Z(E,H(s,E)):Z()),T.keepError||(ct(r.errors,E),d.isValid&&h()),f.state.next({...r}))},cl=(E,T={})=>{const P=E?Vn(E):s,W=Vn(P),U=E&&!qt(E)?W:s;if(T.keepDefaultValues||(s=P),!T.keepValues){if(T.keepDirtyValues||m)for(const D of l.mount)H(r.dirtyFields,D)?De(U,D,H(o,D)):F(D,H(U,D));else{if(Ym&&Xe(E))for(const D of l.mount){const $=H(i,D);if($&&$._f){const Te=Array.isArray($._f.refs)?$._f.refs[0]:$._f.ref;if(lc(Te)){const Oe=Te.closest("form");if(Oe){Oe.reset();break}}}}i={}}o=t.shouldUnregister?T.keepDefaultValues?Vn(s):{}:Vn(U),f.array.next({values:{...U}}),f.values.next({values:{...U}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!d.isValid||!!T.keepIsValid,a.watch=!!t.shouldUnregister,f.state.next({submitCount:T.keepSubmitCount?r.submitCount:0,isDirty:T.keepDirty?r.isDirty:!!(T.keepDefaultValues&&!vi(E,s)),isSubmitted:T.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:T.keepDirtyValues?r.dirtyFields:T.keepDefaultValues&&E?of(s,E):{},touchedFields:T.keepTouched?r.touchedFields:{},errors:T.keepErrors?r.errors:{},isSubmitSuccessful:T.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},dl=(E,T)=>cl(Ir(E)?E(o):E,T);return{control:{register:Ln,unregister:jt,getFieldState:ve,handleSubmit:ul,setError:Yt,_executeSchema:M,_getWatch:ge,_getDirty:Z,_updateValid:h,_removeUnmounted:J,_updateFieldArray:p,_updateDisabledField:ke,_getFieldArray:ae,_reset:cl,_resetDefaultValues:()=>Ir(n.defaultValues)&&n.defaultValues().then(E=>{dl(E,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:E=>{r={...r,...E}},_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(E){a=E},get _defaultValues(){return s},get _names(){return l},set _names(E){l=E},get _formState(){return r},set _formState(E){r=E},get _options(){return n},set _options(E){n={...n,...E}}},trigger:q,register:Ln,handleSubmit:ul,watch:ti,setValue:F,getValues:pe,reset:dl,resetField:Mn,clearErrors:En,unregister:jt,setError:Yt,setFocus:(E,T={})=>{const P=H(i,E),W=P&&P._f;if(W){const U=W.refs?W.refs[0]:W.ref;U.focus&&(U.focus(),T.shouldSelect&&U.select())}},getFieldState:ve}}function Xm(t={}){const e=Jt.useRef(),n=Jt.useRef(),[r,i]=Jt.useState({isDirty:!1,isValidating:!1,isLoading:Ir(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Ir(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...kL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,fL({subject:s._subjects.state,next:o=>{dL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Jt.useEffect(()=>{t.values&&!vi(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Jt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=cL(r,s),e.current}const Fa=({type:t,placeholder:e,defaultValue:n,register:r,variant:i="base"})=>{const[s,o]=S.useState(null),a={base:"border-2 border-themeGray rounded-none",outline:"border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2",danger:"border-themeDanger rounded-2xl h-12 p-2 border-2 mt-2 mb-2"};return S.useEffect(()=>{o(a[i])},[s,i]),w.jsx("input",{...r,defaultValue:n,type:t,step:"any",placeholder:e,className:`${s} w-full transition-transform duration-200 `})};function xL({usersInput:t,resetField:e,setSelectedUsers:n,selectedUsers:r,variant:i}){const s=S.useContext(qc),o=S.useContext(Wi),[a,l]=S.useState(void 0);function u(f){if(f===void 0){l(void 0);return}if(f.length===0){l(void 0);return}if(f.length>0){const m=s==null?void 0:s.filter(y=>{if(r!==void 0&&r.filter(v=>v===y.uid).length!==0||y.uid===(o==null?void 0:o.uid))return null;const _=y.email.includes(f);if(_===!1)return null;if(_===!0)return!0});l(m)}}function c(f){e("usersInput"),n(m=>m?[...m,f.uid]:[f.uid])}function d(f){const m=r==null?void 0:r.filter(y=>y!==(f==null?void 0:f.uid));n(m)}return S.useEffect(()=>{u(t)},[t,r]),w.jsxs(w.Fragment,{children:[w.jsx("div",{children:r?w.jsx("div",{className:`${r.length===0?"hidden":"visible"} border-themePrimary border-2 rounded-2xl p-2 mb-2`,children:r.map(f=>{const m=s==null?void 0:s.filter(y=>y.uid===f)[0];return m===void 0?w.jsx(w.Fragment,{children:"Error"}):w.jsx("div",{className:"flex gap-2 items-center pt-1 pb-1 flex-col",children:w.jsxs("div",{className:"flex gap-2  pt-1 pb-1 w-full",children:[w.jsxs("div",{className:"flex w-full gap-2",children:[w.jsx(Ra,{myUser:m,onClick:()=>d(m)}),w.jsxs("p",{className:"text-xs",children:[" ",m.email]})]}),w.jsx("div",{onClick:()=>d(m),className:"p-2 border-2 h-8 w-8 border-themePrimary rounded-full flex items-center justify-center cursor-pointer",children:w.jsx("div",{className:"w-4 h-[2px] bg-themeDanger"})})]})})})}):null}),w.jsx("div",{className:`${a?"h-16 opacity-100 p-2":"h-0 opacity-0 p-0"} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`,children:a!==void 0&&(a==null?void 0:a.length)>0?a.map(f=>w.jsxs("div",{onClick:()=>c(f),className:"flex gap-2 items-center p-1",children:[w.jsx(Ra,{myUser:f}),w.jsxs("p",{className:"text-xs",children:[" ",f.email]})]})):w.jsx("div",{className:"p-1 text-center grid items-center h-full",children:"User not found"})})]})}function bL(){return new Date}function IL(t){return Math.floor(Math.random()*t)}function Bh(){let t="id";const e=new Date;return t+=e.getFullYear(),t+=e.getMonth()+1,t+=e.getDate(),t+=e.getMinutes(),t+=e.getSeconds(),t+=e.getMilliseconds(),t+=IL(1e4),t}const Jm=bL(),HS=Jm.getFullYear();let Qo=`${Jm.getMonth()+1}`;Number(Qo)<10&&(Qo=`0${Qo}`);let Xo=`${Jm.getDate()}`;Number(Xo)<10&&(Xo=`0${Xo}`);function GS({type:t,currentEvent:e}){const n=Ut(),r=S.useContext(qc),i=S.useContext(Wi),[s,o]=S.useState(void 0),{register:a,handleSubmit:l,watch:u,formState:{errors:c},resetField:d,setValue:f}=Xm(),m=u("usersInput"),y=g=>{t==="create"&&_(g),t==="edit"&&I(g)},_=g=>{const p=Bh();if(i===void 0){n("/login");return}let C={id:p,date:`${HS}-${Qo}-${Xo}`,name:g.name,owner:i==null?void 0:i.uid,users:{}};s!==void 0&&s.length>0&&s.map(R=>{Object.defineProperty(C.users,R,{value:R,enumerable:!0}),v(R,p)}),us(ht(Et,"events/"+p),C);const b=i==null?void 0:i.ownerOfEvents.length;let x={};Object.defineProperty(x,b,{value:p,enumerable:!0}),ba(ht(Et,`users/${i.uid}/ownerOfEvents`),x),n("/event/"+p)},I=g=>{if(e===void 0)return;let p={...e,name:g.name,users:{}};s!==void 0&&s.length>0&&s.map(x=>{Object.defineProperty(p.users,x,{value:x,enumerable:!0})}),us(ht(Et,"events/"+e.id),p);const C=s==null?void 0:s.filter(x=>e.users.includes(x)?null:x);C==null||C.forEach(x=>{r==null||r.find(R=>{if(R.uid===x){let M=R.participateOfEvents;M.push(e.id);const j={};M.forEach((ie,J)=>{Object.defineProperty(j,J,{value:ie,enumerable:!0})}),us(ht(Et,`users/${x}/participateOfEvents`),j)}})}),e.users.filter(x=>s!=null&&s.includes(x)?null:x).forEach(x=>{const R=r==null?void 0:r.find(ie=>ie.uid===x?ie:!1),M=R==null?void 0:R.participateOfEvents.filter(ie=>ie===e.id?null:ie),j={};M==null||M.forEach((ie,J)=>{Object.defineProperty(j,J,{value:ie,enumerable:!0})}),us(ht(Et,`users/${x}/participateOfEvents`),j)}),n("/event/"+e.id)};function v(g,p){if(r===void 0)return;const b=r.filter(R=>R.uid===g)[0].participateOfEvents.length,x={};Object.defineProperty(x,b,{value:p,enumerable:!0}),console.log(x),ba(ht(Et,`users/${g}/participateOfEvents/`),x)}function h(){n(`/event/${e==null?void 0:e.id}/delete`)}return S.useEffect(()=>{t==="edit"&&e!==void 0&&(f("name",e.name),o([...e.users]))},[e]),w.jsxs("form",{onSubmit:l(y),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsxs("h1",{className:"mt-2 mb-2 font-bold text-xl",children:[t==="create"?"Create":null," ",t==="edit"?"Edit":null," Event"]}),w.jsxs("label",{children:[w.jsx(Fa,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Event name",variant:c.name?"danger":"outline"}),c.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{children:[w.jsx(Fa,{type:"text",defaultValue:"",register:a("usersInput"),placeholder:"Add users",variant:"outline"}),w.jsx(xL,{usersInput:m,resetField:d,setSelectedUsers:o,selectedUsers:s})]}),w.jsxs("div",{className:"self-end flex gap-4",children:[w.jsx(tn,{variant:"outlined",type:"submit",children:"Submit"}),t==="edit"?w.jsx(tn,{variant:"danger",onClick:h,type:"button",children:"Delete event"}):null]})]})}function TL(){return w.jsx("div",{className:"h-full",children:w.jsx(GS,{type:"create"})})}function YS({children:t}){return w.jsx("div",{className:"w-full max-w-screen mt-4 mb-4 overflow-x-scroll p-2",children:w.jsxs("div",{className:"w-2 flex gap-2 ",children:[...t]})})}function Jo({children:t,onClick:e}){return w.jsx("div",{onClick:e,className:"p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer",children:t})}const KS=S.createContext(void 0);function NL(){const t=Bi(),e=Ut(),n=S.useContext(Zr),r=S.useContext(ei),i=S.useContext(Wi),[s,o]=S.useState(void 0),[a,l]=S.useState(!1),[u,c]=S.useState([]),[d,f]=S.useState(void 0);function m(){if(i!==void 0){if(t.id===void 0){l("Event not Found");return}if(n){const g=y(n,t.id);g&&(o(g),f(i))}if(r){const g=y(r,t.id);g&&(o(g),_(g.owner))}}}function y(g,p){if(p===void 0)return!1;const C=g.filter(b=>b.id===p?b:null)[0];return C===void 0?!1:C}async function _(g){await $o(ht(Et,`/users/${g}`),p=>{p.exists()&&f(p.val())})}function I(g){const p=aE(ht(Et,`users/${g}`));$o(p,C=>{C.exists()&&c(b=>[...b,{...C.val(),uid:g}])})}function v(){s==null||s.users.map(g=>{I(g)}),console.log(u)}function h(){e(`/event/${t.id}/edit`)}return S.useEffect(()=>{Oi.currentUser!==null&&(m(),s&&u.length==0&&v())},[s,n,r,u]),s===void 0&&!a?w.jsx(ol,{size:"big"}):a!==!1?(console.log(a),w.jsx("div",{children:a})):s?w.jsxs("div",{className:"h-full",children:[w.jsxs("div",{className:"flex justify-between items-center mb-6",children:[w.jsx("span",{className:"font-bold text-xl",children:s.name}),w.jsx(Ra,{myUser:d,size:"medium"})]}),w.jsx("div",{className:"flex gap-2",children:u.map((g,p)=>w.jsx(Ra,{myUser:g,size:"medium"},p))}),w.jsxs(YS,{children:[w.jsx(Jo,{onClick:()=>{e(`/event/${t.id}/`)},children:"Summary"}),w.jsx(Jo,{onClick:()=>{e(`/event/${t.id}/payments`)},children:"Payments"}),w.jsx(Jo,{onClick:h,children:"Edit Event"}),w.jsx(w.Fragment,{})]}),w.jsx(KS.Provider,{value:s,children:w.jsx(rS,{})})]}):w.jsx("div",{children:"Error not found"})}function PL(){return w.jsxs("div",{children:[w.jsx(tn,{variant:"cta",onClick:()=>{},children:"CTA"}),w.jsx(tn,{variant:"outlined",onClick:()=>{},children:"Outlined"}),w.jsx(tn,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx(tn,{variant:"base",onClick:()=>{},children:"Base"}),w.jsx("div",{className:"bg-themePrimary",children:w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]})}),w.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[w.jsx("defs",{id:"SvgjsDefs2066"}),w.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:w.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",w.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]}),w.jsxs(YS,{children:[w.jsx(Jo,{children:"Pill"}),w.jsx(Jo,{children:"Ale bang"})]})]})}function RL(){const[t,e]=S.useState(_t),n=S.useContext(Zr),r=S.useContext(ei),i=Bi(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{className:"h-full",children:w.jsx(GS,{type:"edit",currentEvent:t})})}function AL({currentEvent:t}){const e=S.useContext(qc),n=S.useContext(Wi),r=Ut(),{register:i,handleSubmit:s,formState:{errors:o}}=Xm(),a=u=>{if(t.id===u.eventName){const c=n.ownerOfEvents.indexOf(u.eventName);console.log(c);const d={};Object.defineProperty(d,c,{value:null,enumerable:!0}),ba(ht(Et,`users/${n.uid}/ownerOfEvents/`),d),t.users.forEach(f=>{l(f,t.id)}),aP(ht(Et,`events/${u.eventName}`)).then(()=>{r("/")})}};function l(u,c){if(e===void 0)return;const f=e.filter(y=>y.uid===u)[0].participateOfEvents.indexOf(c),m={};Object.defineProperty(m,f,{value:null,enumerable:!0}),ba(ht(Et,`users/${u}/participateOfEvents/`),m)}return w.jsxs("form",{onSubmit:s(a),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Delete Event"}),w.jsxs("p",{children:["Type event id to delete event ",w.jsx("span",{className:"text-themeDanger",children:t.id})]}),w.jsxs("label",{children:[w.jsx(Fa,{type:"text",defaultValue:"",register:i("eventName",{required:!0}),placeholder:"Event id",variant:o.eventName?"danger":"outline"}),o.eventName&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsx(tn,{variant:"danger",type:"submit",children:"Submit"})]})}function OL(){const[t,e]=S.useState(_t),n=S.useContext(Zr),r=S.useContext(ei),i=Bi(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(AL,{currentEvent:t})})}function DL({eventID:t,payment:e}){const n=Ut(),r=()=>{n(`/event/${t}/payment/${e.id}`)};return w.jsxs("div",{onClick:r,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-100 transition-transform duration-200",children:[w.jsx("div",{className:"text-sm text-themePrimary opacity-40",children:e.date}),w.jsxs("div",{className:"font-bold text-lg",children:[" ",e.name]})]},"bang")}function LL({currentEvent:t}){console.log(t),console.log(_t),Bi();const e=()=>{if(t.id===_t.id)return w.jsx(ol,{size:"small"});if(t.payments)return t.payments.map(n=>(console.log(n),w.jsx(DL,{eventID:t.id,payment:n})))};return S.useEffect(()=>{},[t]),w.jsx("div",{className:"w-full",children:e()})}function ML(){const t=Ut(),e=Bi(),n=S.useContext(Zr),r=S.useContext(ei),[i,s]=S.useState(_t),[o,a]=S.useState(!1);function l(){if(e.id===void 0){a("Event not Found");return}if(n){const c=u(n,e.id);c&&s(c)}if(r){const c=u(r,e.id);c&&s(c)}}function u(c,d){if(d===void 0)return!1;const f=c.filter(m=>m.id===d?m:null)[0];return f===void 0?!1:f}return S.useEffect(()=>{l(),console.log(i)},[n,r,i]),w.jsxs("div",{className:"h-auto",children:[w.jsx(tn,{variant:"cta",onClick:()=>t(`/event/${e.id}/payment/create`),children:"Add Payment"}),w.jsx(LL,{currentEvent:i}),o||null]})}function FL({currentEvent:t}){const e=S.useContext(Wi),n=Ut(),[r,i]=S.useState([]),[s,o]=S.useState({uid:t.owner,checked:!0,value:0}),{register:a,handleSubmit:l,watch:u,formState:{errors:c},setError:d,resetField:f,setValue:m}=Xm(),y=u("amount"),_=async b=>{const x=Bh(),R={date:`${HS}-${Qo}-${Xo}`,id:x,amount:b.amount,name:b.name,users:{},whopaid:{uid:e.uid,value:s.value}};r!==void 0&&r.length>0&&r.map(j=>{const ie={uid:j.uid,value:j.value,id:Bh()};j.checked&&Object.defineProperty(R.users,j.uid,{value:ie,enumerable:!0})});let M=0;s.checked&&(M+=Number(s.value)),r.forEach(j=>{j.checked&&(console.log(j.uid),M+=Number(j.value))}),M!=Number(y)&&d("amount",{type:"focus"}),M==Number(y)&&(await ba(ht(Et,`events/${t.id}/payments/${x}`),R),n("/event/"+t.id))};function I(b){o({uid:s.uid,value:s.value,checked:!s.checked})}function v(b){o({uid:s.uid,value:b.target.value,checked:s.checked})}function h(b){i(x=>[...x.map(M=>M.uid===b.target.name?{uid:M.uid,checked:!M.checked,value:M.value}:M)])}function g(b){console.log("handleValue"),i(x=>[...x.map(M=>M.uid===b.target.name?{uid:M.uid,checked:M.checked,value:b.target.value}:M)])}function p(){console.log("setPaymentUsersOnStartup"),t.users.map(b=>{if(b==="defaultUID")return null;i(x=>x.filter(M=>{if(M.uid===b)return M}).length>0?[...x]:b===e.uid?[...x,{uid:t.owner,checked:!1,value:0}]:[...x,{uid:b,checked:!1,value:0}])})}function C(){o(()=>({uid:e.uid,checked:!0,value:0}))}return S.useEffect(()=>{p(),C()},[t,e]),w.jsxs("form",{onSubmit:l(_),className:"grid h-full grid-rows-EventFormTemplate",children:[w.jsx("h1",{className:"mt-2 mb-2 font-bold text-xl",children:"Add new Payment"}),w.jsxs("label",{children:[w.jsx(Fa,{type:"number",defaultValue:"",register:a("amount",{required:!0}),placeholder:"Amount",variant:c.amount?"danger":"outline"}),c.amount&&w.jsx("span",{className:"text-themeDanger",children:"This field is required and General amount has to be the same as value of sum of all people included"})]}),w.jsxs("label",{children:[w.jsx(Fa,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Payment Name",variant:c.name?"danger":"outline"}),c.name&&w.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),w.jsxs("label",{children:[w.jsx("input",{type:"checkbox",name:s.uid,checked:s.checked,onChange:I}),s.uid,w.jsx("input",{type:"number",name:s.uid,value:s.value,onChange:v,step:"any"})]}),r.map((b,x)=>w.jsxs("label",{children:[w.jsx("input",{type:"checkbox",name:b.uid,onChange:h,checked:b.checked}),b.uid,w.jsx("input",{type:"number",name:b.uid,value:b.value,onChange:g,step:"any"})]},x)),w.jsx(tn,{variant:"cta",type:"submit",children:"Submit"})]})}function UL(){const[t,e]=S.useState(_t),n=S.useContext(Zr),r=S.useContext(ei),i=Bi(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return S.useEffect(()=>{s()},[t,n,r]),w.jsx("div",{children:w.jsx(FL,{currentEvent:t})})}function jL(){return w.jsx("div",{children:"UserPage"})}function zL(){Ut();const t=Bi(),e=S.useContext(Zr),n=S.useContext(ei),[r,i]=S.useState(_t),[s,o]=S.useState(su),[a,l]=S.useState(!1);function u(){if(t.id===void 0){l("Event not Found");return}if(e){const f=c(e,t.id);f&&i(f)}if(n){const f=c(n,t.id);f&&i(f)}}function c(f,m){if(m===void 0)return!1;const y=f.filter(_=>_.id===m?_:null)[0];return y===void 0?!1:y}function d(){r.payments.forEach(f=>{f.id===t.paymentId&&o(f)})}return S.useEffect(()=>{u(),r&&d()},[e,n,r,s]),s.id==su.id?w.jsx(ol,{size:"big"}):s!=su?w.jsxs("div",{className:"h-full",children:[w.jsx("div",{className:"flex justify-between items-center mb-6",children:w.jsx("span",{className:"font-bold text-xl",children:s.name})}),w.jsx("div",{className:"flex gap-2"})]}):w.jsx("div",{children:"Error has occured"})}function VL(){const t=S.useContext(KS),[e,n]=S.useState([]);function r(){t==null||t.payments.map(s=>{Object.values(s.users).forEach(a=>{n(l=>{if(l.filter(c=>c.id==a.id).length>0)return[...l];{const c=l.map(f=>f.uid==a.uid&&f.payTo==s.whopaid.uid?(console.log("update"),console.log(f.uid,f.payTo,f.value),{id:f.id,uid:f.uid,value:Number(f.value)+Number(a.value),payTo:f.payTo}):f);let d=!0;for(let f=0;f<l.length;f++)l[f].value!==c[f].value&&(d=!1);return d?[...l,{id:a.id,uid:a.uid,value:Number(a.value),payTo:s.whopaid.uid}]:[...c]}})})})}function i(){}return S.useEffect(()=>{r()},[t]),w.jsxs(w.Fragment,{children:[w.jsx("div",{children:"EventSummary"}),e.map(s=>w.jsxs("div",{className:"pt-2",children:[s.uid," musi zapłacić ",`${s.value}`," do ",s.payTo]})),w.jsx("input",{type:"button",value:"Summary",onClick:i})]})}const BL=LO([{path:"/",element:w.jsx(nL,{}),children:[{path:"/",element:w.jsx(sL,{})},{path:"/event/:id",element:w.jsx(NL,{}),children:[{path:"/event/:id/payments",element:w.jsx(ML,{})},{path:"/event/:id/",element:w.jsx(VL,{})}]},{path:"/event/:id/edit",element:w.jsx(RL,{})},{path:"/event/:id/delete",element:w.jsx(OL,{})},{path:"/event/create",element:w.jsx(TL,{})},{path:"/event/:id/payment/create",element:w.jsx(UL,{})},{path:"/event/:id/payment/:paymentId",element:w.jsx(zL,{})},{path:"/user/:id",element:w.jsx(jL,{})}]},{path:"/login",element:w.jsx(rL,{})},{path:"/testing",element:w.jsx(PL,{})}]);lf.createRoot(document.getElementById("root")).render(w.jsx(Jt.StrictMode,{children:w.jsx(BO,{router:BL})}));bx();Rx();
