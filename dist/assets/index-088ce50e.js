function US(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function u_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c_={exports:{}},ac={},f_={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),jS=Symbol.for("react.portal"),zS=Symbol.for("react.fragment"),VS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),$S=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),YS=Symbol.for("react.memo"),KS=Symbol.for("react.lazy"),qm=Symbol.iterator;function qS(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,p_={};function zs(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=zs.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}var Uh=Fh.prototype=new m_;Uh.constructor=Fh;h_(Uh,zs.prototype);Uh.isPureReactComponent=!0;var Qm=Array.isArray,g_=Object.prototype.hasOwnProperty,jh={current:null},v_={key:!0,ref:!0,__self:!0,__source:!0};function y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g_.call(e,r)&&!v_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ba,type:t,key:s,ref:o,props:i,_owner:jh.current}}function QS(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xm=/\/+/g;function nf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function Fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case jS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nf(o,0):r,Qm(i)?(n="",t!=null&&(n=t.replace(Xm,"$&/")+"/"),Fl(i,e,n,"",function(u){return u})):i!=null&&(zh(i)&&(i=QS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+nf(s,a);o+=Fl(s,e,n,l,i)}else if(l=qS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+nf(s,a++),o+=Fl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Ul={transition:null},ZS={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:jh};ue.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=zs;ue.Fragment=zS;ue.Profiler=BS;ue.PureComponent=Fh;ue.StrictMode=VS;ue.Suspense=GS;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g_.call(e,l)&&!v_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ba,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:$S,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WS,_context:t},t.Consumer=t};ue.createElement=y_;ue.createFactory=function(t){var e=y_.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:HS,render:t}};ue.isValidElement=zh;ue.lazy=function(t){return{$$typeof:KS,_payload:{_status:-1,_result:t},_init:JS}};ue.memo=function(t,e){return{$$typeof:YS,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return bt.current.useCallback(t,e)};ue.useContext=function(t){return bt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return bt.current.useEffect(t,e)};ue.useId=function(){return bt.current.useId()};ue.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return bt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};ue.useRef=function(t){return bt.current.useRef(t)};ue.useState=function(t){return bt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return bt.current.useTransition()};ue.version="18.2.0";f_.exports=ue;var x=f_.exports;const qt=u_(x),eC=US({__proto__:null,default:qt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tC=x,nC=Symbol.for("react.element"),rC=Symbol.for("react.fragment"),iC=Object.prototype.hasOwnProperty,sC=tC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oC={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iC.call(e,r)&&!oC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nC,type:t,key:s,ref:o,props:i,_owner:sC.current}}ac.Fragment=rC;ac.jsx=__;ac.jsxs=__;c_.exports=ac;var b=c_.exports,nd={},w_={exports:{}},Vt={},E_={exports:{}},S_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var J=L.length;L.push(Y);e:for(;0<J;){var Se=J-1>>>1,Me=L[Se];if(0<i(Me,Y))L[Se]=Y,L[J]=Me,J=Se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Y=L[0],J=L.pop();if(J!==Y){L[0]=J;e:for(var Se=0,Me=L.length,ur=Me>>>1;Se<ur;){var me=2*(Se+1)-1,nn=L[me],Pt=me+1,Dn=L[Pt];if(0>i(nn,J))Pt<Me&&0>i(Dn,nn)?(L[Se]=Dn,L[Pt]=J,Se=Pt):(L[Se]=nn,L[me]=J,Se=me);else if(Pt<Me&&0>i(Dn,J))L[Se]=Dn,L[Pt]=J,Se=Pt;else break e}}return Y}function i(L,Y){var J=L.sortIndex-Y.sortIndex;return J!==0?J:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=L)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function p(L){if(w=!1,g(L),!y)if(n(l)!==null)y=!0,Ee(E);else{var Y=n(u);Y!==null&&He(p,Y.startTime-L)}}function E(L,Y){y=!1,w&&(w=!1,v(M),M=-1),m=!0;var J=d;try{for(g(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||L&&!fe());){var Se=f.callback;if(typeof Se=="function"){f.callback=null,d=f.priorityLevel;var Me=Se(f.expirationTime<=Y);Y=t.unstable_now(),typeof Me=="function"?f.callback=Me:f===n(l)&&r(l),g(Y)}else r(l);f=n(l)}if(f!==null)var ur=!0;else{var me=n(u);me!==null&&He(p,me.startTime-Y),ur=!1}return ur}finally{f=null,d=J,m=!1}}var T=!1,N=null,M=-1,W=5,U=-1;function fe(){return!(t.unstable_now()-U<W)}function G(){if(N!==null){var L=t.unstable_now();U=L;var Y=!0;try{Y=N(!0,L)}finally{Y?Z():(T=!1,N=null)}}else T=!1}var Z;if(typeof h=="function")Z=function(){h(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,De=pe.port2;pe.port1.onmessage=G,Z=function(){De.postMessage(null)}}else Z=function(){k(G,0)};function Ee(L){N=L,T||(T=!0,Z())}function He(L,Y){M=k(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Ee(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var J=d;d=Y;try{return L()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=d;d=L;try{return Y()}finally{d=J}},t.unstable_scheduleCallback=function(L,Y,J){var Se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Se+J:Se):J=Se,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=J+Me,L={id:c++,callback:Y,priorityLevel:L,startTime:J,expirationTime:Me,sortIndex:-1},J>Se?(L.sortIndex=J,e(u,L),n(l)===null&&L===n(u)&&(w?(v(M),M=-1):w=!0,He(p,J-Se))):(L.sortIndex=Me,e(l,L),y||m||(y=!0,Ee(E))),L},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(L){var Y=d;return function(){var J=d;d=Y;try{return L.apply(this,arguments)}finally{d=J}}}})(S_);E_.exports=S_;var aC=E_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_=x,zt=aC;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k_=new Set,Wo={};function Mi(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(Wo[t]=e,t=0;t<e.length;t++)k_.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,lC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jm={},Zm={};function uC(t){return rd.call(Zm,t)?!0:rd.call(Jm,t)?!1:lC.test(t)?Zm[t]=!0:(Jm[t]=!0,!1)}function cC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fC(t,e,n,r){if(e===null||typeof e>"u"||cC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Bh);ht[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Bh);ht[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Bh);ht[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fC(e,n,i,r)&&(n=null),r||i===null?uC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=C_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),Gh=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),x_=Symbol.for("react.offscreen"),eg=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,rf;function _o(t){if(rf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rf=e&&e[1]||""}return`
`+rf+t}var sf=!1;function of(t,e){if(!t||sf)return"";sf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function dC(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=of(t.type,!1),t;case 11:return t=of(t.type.render,!1),t;case 1:return t=of(t.type,!0),t;default:return""}}function ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hi:return"Fragment";case $i:return"Portal";case id:return"Profiler";case $h:return"StrictMode";case sd:return"Suspense";case od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b_:return(t.displayName||"Context")+".Consumer";case I_:return(t._context.displayName||"Context")+".Provider";case Hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gh:return e=t.displayName||null,e!==null?e:ad(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return ad(t(e))}catch{}}return null}function hC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ad(e);case 8:return e===$h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pC(t){var e=T_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=pC(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=T_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ld(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N_(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function ud(t,e){N_(t,e);var n=zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(wo(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function R_(t,e){var n=zr(e.value),r=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mC=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){mC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function D_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=D_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hd(t,e){if(e){if(gC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function Yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gd=null,cs=null,fs=null;function sg(t){if(t=Pa(t)){if(typeof gd!="function")throw Error(A(280));var e=t.stateNode;e&&(e=dc(e),gd(t.stateNode,t.type,e))}}function L_(t){cs?fs?fs.push(t):fs=[t]:cs=t}function F_(){if(cs){var t=cs,e=fs;if(fs=cs=null,sg(t),e)for(t=0;t<e.length;t++)sg(e[t])}}function U_(t,e){return t(e)}function j_(){}var af=!1;function z_(t,e,n){if(af)return t(e,n);af=!0;try{return U_(t,e,n)}finally{af=!1,(cs!==null||fs!==null)&&(j_(),F_())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=dc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var vd=!1;if(qn)try{var no={};Object.defineProperty(no,"passive",{get:function(){vd=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{vd=!1}function vC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var bo=!1,su=null,ou=!1,yd=null,yC={onError:function(t){bo=!0,su=t}};function _C(t,e,n,r,i,s,o,a,l){bo=!1,su=null,vC.apply(yC,arguments)}function wC(t,e,n,r,i,s,o,a,l){if(_C.apply(this,arguments),bo){if(bo){var u=su;bo=!1,su=null}else throw Error(A(198));ou||(ou=!0,yd=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function og(t){if(Li(t)!==t)throw Error(A(188))}function EC(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return og(i),t;if(s===r)return og(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function B_(t){return t=EC(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var $_=zt.unstable_scheduleCallback,ag=zt.unstable_cancelCallback,SC=zt.unstable_shouldYield,CC=zt.unstable_requestPaint,Ke=zt.unstable_now,kC=zt.unstable_getCurrentPriorityLevel,Kh=zt.unstable_ImmediatePriority,H_=zt.unstable_UserBlockingPriority,au=zt.unstable_NormalPriority,IC=zt.unstable_LowPriority,G_=zt.unstable_IdlePriority,lc=null,xn=null;function bC(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:PC,xC=Math.log,TC=Math.LN2;function PC(t){return t>>>=0,t===0?32:31-(xC(t)/TC|0)|0}var dl=64,hl=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Eo(a):(s&=o,s!==0&&(r=Eo(s)))}else o=n&~i,o!==0?r=Eo(o):s!==0&&(r=Eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function NC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=NC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y_(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function lf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function AC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function K_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q_,Qh,Q_,X_,J_,wd=!1,pl=[],xr=null,Tr=null,Pr=null,Go=new Map,Yo=new Map,gr=[],OC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lg(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pa(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DC(t,e,n,r,i){switch(e){case"focusin":return xr=ro(xr,t,e,n,r,i),!0;case"dragenter":return Tr=ro(Tr,t,e,n,r,i),!0;case"mouseover":return Pr=ro(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,ro(Go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yo.set(s,ro(Yo.get(s)||null,t,e,n,r,i)),!0}return!1}function Z_(t){var e=oi(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=V_(n),e!==null){t.blockedOn=e,J_(t.priority,function(){Q_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);md=r,n.target.dispatchEvent(r),md=null}else return e=Pa(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function ug(t,e,n){jl(t)&&n.delete(e)}function MC(){wd=!1,xr!==null&&jl(xr)&&(xr=null),Tr!==null&&jl(Tr)&&(Tr=null),Pr!==null&&jl(Pr)&&(Pr=null),Go.forEach(ug),Yo.forEach(ug)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,MC)))}function Ko(t){function e(i){return io(i,t)}if(0<pl.length){io(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&io(xr,t),Tr!==null&&io(Tr,t),Pr!==null&&io(Pr,t),Go.forEach(e),Yo.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)Z_(n),n.blockedOn===null&&gr.shift()}var ds=ir.ReactCurrentBatchConfig,uu=!0;function LC(t,e,n,r){var i=ge,s=ds.transition;ds.transition=null;try{ge=1,Xh(t,e,n,r)}finally{ge=i,ds.transition=s}}function FC(t,e,n,r){var i=ge,s=ds.transition;ds.transition=null;try{ge=4,Xh(t,e,n,r)}finally{ge=i,ds.transition=s}}function Xh(t,e,n,r){if(uu){var i=Ed(t,e,n,r);if(i===null)yf(t,e,r,cu,n),lg(t,r);else if(DC(i,t,e,n,r))r.stopPropagation();else if(lg(t,r),e&4&&-1<OC.indexOf(t)){for(;i!==null;){var s=Pa(i);if(s!==null&&q_(s),s=Ed(t,e,n,r),s===null&&yf(t,e,r,cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yf(t,e,r,null,n)}}var cu=null;function Ed(t,e,n,r){if(cu=null,t=Yh(r),t=oi(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kC()){case Kh:return 1;case H_:return 4;case au:case IC:return 16;case G_:return 536870912;default:return 16}default:return 16}}var Er=null,Jh=null,zl=null;function t0(){if(zl)return zl;var t,e=Jh,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function cg(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:cg,this.isPropagationStopped=cg,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=Bt(Vs),Ta=ze({},Vs,{view:0,detail:0}),UC=Bt(Ta),uf,cf,so,uc=ze({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(uf=t.screenX-so.screenX,cf=t.screenY-so.screenY):cf=uf=0,so=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:cf}}),fg=Bt(uc),jC=ze({},uc,{dataTransfer:0}),zC=Bt(jC),VC=ze({},Ta,{relatedTarget:0}),ff=Bt(VC),BC=ze({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),WC=Bt(BC),$C=ze({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HC=Bt($C),GC=ze({},Vs,{data:0}),dg=Bt(GC),YC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qC[t])?!!e[t]:!1}function ep(){return QC}var XC=ze({},Ta,{key:function(t){if(t.key){var e=YC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JC=Bt(XC),ZC=ze({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=Bt(ZC),ek=ze({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),tk=Bt(ek),nk=ze({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rk=Bt(nk),ik=ze({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sk=Bt(ik),ok=[9,13,27,32],tp=qn&&"CompositionEvent"in window,xo=null;qn&&"documentMode"in document&&(xo=document.documentMode);var ak=qn&&"TextEvent"in window&&!xo,n0=qn&&(!tp||xo&&8<xo&&11>=xo),pg=String.fromCharCode(32),mg=!1;function r0(t,e){switch(t){case"keyup":return ok.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function lk(t,e){switch(t){case"compositionend":return i0(e);case"keypress":return e.which!==32?null:(mg=!0,pg);case"textInput":return t=e.data,t===pg&&mg?null:t;default:return null}}function uk(t,e){if(Gi)return t==="compositionend"||!tp&&r0(t,e)?(t=t0(),zl=Jh=Er=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var ck={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ck[t.type]:e==="textarea"}function s0(t,e,n,r){L_(r),e=fu(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,qo=null;function fk(t){g0(t,0)}function cc(t){var e=qi(t);if(P_(e))return t}function dk(t,e){if(t==="change")return e}var o0=!1;if(qn){var df;if(qn){var hf="oninput"in document;if(!hf){var vg=document.createElement("div");vg.setAttribute("oninput","return;"),hf=typeof vg.oninput=="function"}df=hf}else df=!1;o0=df&&(!document.documentMode||9<document.documentMode)}function yg(){To&&(To.detachEvent("onpropertychange",a0),qo=To=null)}function a0(t){if(t.propertyName==="value"&&cc(qo)){var e=[];s0(e,qo,t,Yh(t)),z_(fk,e)}}function hk(t,e,n){t==="focusin"?(yg(),To=e,qo=n,To.attachEvent("onpropertychange",a0)):t==="focusout"&&yg()}function pk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(qo)}function mk(t,e){if(t==="click")return cc(e)}function gk(t,e){if(t==="input"||t==="change")return cc(e)}function vk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:vk;function Qo(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rd.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wg(t,e){var n=_g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yk(t){var e=u0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(r!==null&&np(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wg(n,s);var o=wg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _k=qn&&"documentMode"in document&&11>=document.documentMode,Yi=null,Sd=null,Po=null,Cd=!1;function Eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||Yi==null||Yi!==iu(r)||(r=Yi,"selectionStart"in r&&np(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Qo(Po,r)||(Po=r,r=fu(Sd,"onSelect"),0<r.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ki={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},pf={},c0={};qn&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function fc(t){if(pf[t])return pf[t];if(!Ki[t])return t;var e=Ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c0)return pf[t]=e[n];return t}var f0=fc("animationend"),d0=fc("animationiteration"),h0=fc("animationstart"),p0=fc("transitionend"),m0=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){m0.set(t,e),Mi(e,[t])}for(var mf=0;mf<Sg.length;mf++){var gf=Sg[mf],wk=gf.toLowerCase(),Ek=gf[0].toUpperCase()+gf.slice(1);Kr(wk,"on"+Ek)}Kr(f0,"onAnimationEnd");Kr(d0,"onAnimationIteration");Kr(h0,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(p0,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sk=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wC(r,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cg(i,a,u),s=l}}}if(ou)throw t=yd,ou=!1,yd=null,t}function be(t,e){var n=e[Td];n===void 0&&(n=e[Td]=new Set);var r=t+"__bubble";n.has(r)||(v0(e,t,2,!1),n.add(r))}function vf(t,e,n){var r=0;e&&(r|=4),v0(n,t,r,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[vl]){t[vl]=!0,k_.forEach(function(n){n!=="selectionchange"&&(Sk.has(n)||vf(n,!1,t),vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,vf("selectionchange",!1,e))}}function v0(t,e,n,r){switch(e0(e)){case 1:var i=LC;break;case 4:i=FC;break;default:i=Xh}n=i.bind(null,e,n,t),i=void 0,!vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}z_(function(){var u=s,c=Yh(n),f=[];e:{var d=m0.get(t);if(d!==void 0){var m=Zh,y=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":m=JC;break;case"focusin":y="focus",m=ff;break;case"focusout":y="blur",m=ff;break;case"beforeblur":case"afterblur":m=ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=tk;break;case f0:case d0:case h0:m=WC;break;case p0:m=rk;break;case"scroll":m=UC;break;case"wheel":m=sk;break;case"copy":case"cut":case"paste":m=HC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hg}var w=(e&4)!==0,k=!w&&t==="scroll",v=w?d!==null?d+"Capture":null:d;w=[];for(var h=u,g;h!==null;){g=h;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,v!==null&&(p=Ho(h,v),p!=null&&w.push(Jo(h,p,g)))),k)break;h=h.return}0<w.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==md&&(y=n.relatedTarget||n.fromElement)&&(oi(y)||y[Qn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?oi(y):null,y!==null&&(k=Li(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=fg,p="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=hg,p="onPointerLeave",v="onPointerEnter",h="pointer"),k=m==null?d:qi(m),g=y==null?d:qi(y),d=new w(p,h+"leave",m,n,c),d.target=k,d.relatedTarget=g,p=null,oi(c)===u&&(w=new w(v,h+"enter",y,n,c),w.target=g,w.relatedTarget=k,p=w),k=p,m&&y)t:{for(w=m,v=y,h=0,g=w;g;g=zi(g))h++;for(g=0,p=v;p;p=zi(p))g++;for(;0<h-g;)w=zi(w),h--;for(;0<g-h;)v=zi(v),g--;for(;h--;){if(w===v||v!==null&&w===v.alternate)break t;w=zi(w),v=zi(v)}w=null}else w=null;m!==null&&kg(f,d,m,w,!1),y!==null&&k!==null&&kg(f,k,y,w,!0)}}e:{if(d=u?qi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=dk;else if(gg(d))if(o0)E=gk;else{E=pk;var T=hk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=mk);if(E&&(E=E(t,u))){s0(f,E,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&cd(d,"number",d.value)}switch(T=u?qi(u):window,t){case"focusin":(gg(T)||T.contentEditable==="true")&&(Yi=T,Sd=u,Po=null);break;case"focusout":Po=Sd=Yi=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,Eg(f,n,c);break;case"selectionchange":if(_k)break;case"keydown":case"keyup":Eg(f,n,c)}var N;if(tp)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Gi?r0(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(n0&&n.locale!=="ko"&&(Gi||M!=="onCompositionStart"?M==="onCompositionEnd"&&Gi&&(N=t0()):(Er=c,Jh="value"in Er?Er.value:Er.textContent,Gi=!0)),T=fu(u,M),0<T.length&&(M=new dg(M,t,null,n,c),f.push({event:M,listeners:T}),N?M.data=N:(N=i0(n),N!==null&&(M.data=N)))),(N=ak?lk(t,n):uk(t,n))&&(u=fu(u,"onBeforeInput"),0<u.length&&(c=new dg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}g0(f,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(Jo(t,s,i)),s=Ho(t,e),s!=null&&r.push(Jo(t,s,i))),t=t.return}return r}function zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ho(n,s),l!=null&&o.unshift(Jo(n,l,a))):i||(l=Ho(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ck=/\r\n?/g,kk=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(Ck,`
`).replace(kk,"")}function yl(t,e,n){if(e=Ig(e),Ig(t)!==e&&n)throw Error(A(425))}function du(){}var kd=null,Id=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xd=typeof setTimeout=="function"?setTimeout:void 0,Ik=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,bk=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(xk)}:xd;function xk(t){setTimeout(function(){throw t})}function _f(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ko(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Bs,Zo="__reactProps$"+Bs,Qn="__reactContainer$"+Bs,Td="__reactEvents$"+Bs,Tk="__reactListeners$"+Bs,Pk="__reactHandles$"+Bs;function oi(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xg(t);t!==null;){if(n=t[Cn])return n;t=xg(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[Cn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function dc(t){return t[Zo]||null}var Pd=[],Qi=-1;function qr(t){return{current:t}}function Te(t){0>Qi||(t.current=Pd[Qi],Pd[Qi]=null,Qi--)}function Ie(t,e){Qi++,Pd[Qi]=t.current,t.current=e}var Vr={},_t=qr(Vr),Ot=qr(!1),wi=Vr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function hu(){Te(Ot),Te(_t)}function Tg(t,e,n){if(_t.current!==Vr)throw Error(A(168));Ie(_t,e),Ie(Ot,n)}function y0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,hC(t)||"Unknown",i));return ze({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,wi=_t.current,Ie(_t,t),Ie(Ot,Ot.current),!0}function Pg(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=y0(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,Te(Ot),Te(_t),Ie(_t,t)):Te(Ot),Ie(Ot,n)}var zn=null,hc=!1,wf=!1;function _0(t){zn===null?zn=[t]:zn.push(t)}function Nk(t){hc=!0,_0(t)}function Qr(){if(!wf&&zn!==null){wf=!0;var t=0,e=ge;try{var n=zn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,hc=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),$_(Kh,Qr),i}finally{ge=e,wf=!1}}return null}var Xi=[],Ji=0,mu=null,gu=0,Gt=[],Yt=0,Ei=null,Vn=1,Bn="";function ni(t,e){Xi[Ji++]=gu,Xi[Ji++]=mu,mu=t,gu=e}function w0(t,e,n){Gt[Yt++]=Vn,Gt[Yt++]=Bn,Gt[Yt++]=Ei,Ei=t;var r=Vn;t=Bn;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-vn(e)+i|n<<i|r,Bn=s+t}else Vn=1<<s|n<<i|r,Bn=t}function rp(t){t.return!==null&&(ni(t,1),w0(t,1,0))}function ip(t){for(;t===mu;)mu=Xi[--Ji],Xi[Ji]=null,gu=Xi[--Ji],Xi[Ji]=null;for(;t===Ei;)Ei=Gt[--Yt],Gt[Yt]=null,Bn=Gt[--Yt],Gt[Yt]=null,Vn=Gt[--Yt],Gt[Yt]=null}var jt=null,Ut=null,Oe=!1,fn=null;function E0(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ng(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Ut=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:Vn,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Ut=null,!0):!1;default:return!1}}function Nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rd(t){if(Oe){var e=Ut;if(e){var n=e;if(!Ng(t,e)){if(Nd(t))throw Error(A(418));e=Nr(n.nextSibling);var r=jt;e&&Ng(t,e)?E0(r,n):(t.flags=t.flags&-4097|2,Oe=!1,jt=t)}}else{if(Nd(t))throw Error(A(418));t.flags=t.flags&-4097|2,Oe=!1,jt=t}}}function Rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function _l(t){if(t!==jt)return!1;if(!Oe)return Rg(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=Ut)){if(Nd(t))throw S0(),Error(A(418));for(;e;)E0(t,e),e=Nr(e.nextSibling)}if(Rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=jt?Nr(t.stateNode.nextSibling):null;return!0}function S0(){for(var t=Ut;t;)t=Nr(t.nextSibling)}function ks(){Ut=jt=null,Oe=!1}function sp(t){fn===null?fn=[t]:fn.push(t)}var Rk=ir.ReactCurrentBatchConfig;function ln(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vu=qr(null),yu=null,Zi=null,op=null;function ap(){op=Zi=yu=null}function lp(t){var e=vu.current;Te(vu),t._currentValue=e}function Ad(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){yu=t,op=Zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},Zi===null){if(yu===null)throw Error(A(308));Zi=t,yu.dependencies={lanes:0,firstContext:t}}else Zi=Zi.next=t;return e}var ai=null;function up(t){ai===null?ai=[t]:ai.push(t)}function C0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,up(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xn(t,n)}return i=r.interleaved,i===null?(e.next=e,up(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xn(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}function Ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,r){var i=t.updateQueue;mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=ze({},f,d);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=f}}function Og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var I0=new C_.Component().refs;function Od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Or(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(yn(e,t,i,r),Bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Or(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(yn(e,t,i,r),Bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Or(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(yn(e,t,r,n),Bl(e,t,r))}};function Dg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function b0(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Dt(e)?wi:_t.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=I0,cp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Dt(e)?wi:_t.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pc.enqueueReplaceState(i,i.state,null),_u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===I0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lg(t){var e=t._init;return e(t._payload)}function x0(t){function e(v,h){if(t){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Dr(v,h),v.index=0,v.sibling=null,v}function s(v,h,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,g,p){return h===null||h.tag!==6?(h=xf(g,v.mode,p),h.return=v,h):(h=i(h,g),h.return=v,h)}function l(v,h,g,p){var E=g.type;return E===Hi?c(v,h,g.props.children,p,g.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pr&&Lg(E)===h.type)?(p=i(h,g.props),p.ref=oo(v,h,g),p.return=v,p):(p=Kl(g.type,g.key,g.props,null,v.mode,p),p.ref=oo(v,h,g),p.return=v,p)}function u(v,h,g,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Tf(g,v.mode,p),h.return=v,h):(h=i(h,g.children||[]),h.return=v,h)}function c(v,h,g,p,E){return h===null||h.tag!==7?(h=vi(g,v.mode,p,E),h.return=v,h):(h=i(h,g),h.return=v,h)}function f(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=xf(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ul:return g=Kl(h.type,h.key,h.props,null,v.mode,g),g.ref=oo(v,null,h),g.return=v,g;case $i:return h=Tf(h,v.mode,g),h.return=v,h;case pr:var p=h._init;return f(v,p(h._payload),g)}if(wo(h)||to(h))return h=vi(h,v.mode,g,null),h.return=v,h;wl(v,h)}return null}function d(v,h,g,p){var E=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(v,h,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ul:return g.key===E?l(v,h,g,p):null;case $i:return g.key===E?u(v,h,g,p):null;case pr:return E=g._init,d(v,h,E(g._payload),p)}if(wo(g)||to(g))return E!==null?null:c(v,h,g,p,null);wl(v,g)}return null}function m(v,h,g,p,E){if(typeof p=="string"&&p!==""||typeof p=="number")return v=v.get(g)||null,a(h,v,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ul:return v=v.get(p.key===null?g:p.key)||null,l(h,v,p,E);case $i:return v=v.get(p.key===null?g:p.key)||null,u(h,v,p,E);case pr:var T=p._init;return m(v,h,g,T(p._payload),E)}if(wo(p)||to(p))return v=v.get(g)||null,c(h,v,p,E,null);wl(h,p)}return null}function y(v,h,g,p){for(var E=null,T=null,N=h,M=h=0,W=null;N!==null&&M<g.length;M++){N.index>M?(W=N,N=null):W=N.sibling;var U=d(v,N,g[M],p);if(U===null){N===null&&(N=W);break}t&&N&&U.alternate===null&&e(v,N),h=s(U,h,M),T===null?E=U:T.sibling=U,T=U,N=W}if(M===g.length)return n(v,N),Oe&&ni(v,M),E;if(N===null){for(;M<g.length;M++)N=f(v,g[M],p),N!==null&&(h=s(N,h,M),T===null?E=N:T.sibling=N,T=N);return Oe&&ni(v,M),E}for(N=r(v,N);M<g.length;M++)W=m(N,v,M,g[M],p),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?M:W.key),h=s(W,h,M),T===null?E=W:T.sibling=W,T=W);return t&&N.forEach(function(fe){return e(v,fe)}),Oe&&ni(v,M),E}function w(v,h,g,p){var E=to(g);if(typeof E!="function")throw Error(A(150));if(g=E.call(g),g==null)throw Error(A(151));for(var T=E=null,N=h,M=h=0,W=null,U=g.next();N!==null&&!U.done;M++,U=g.next()){N.index>M?(W=N,N=null):W=N.sibling;var fe=d(v,N,U.value,p);if(fe===null){N===null&&(N=W);break}t&&N&&fe.alternate===null&&e(v,N),h=s(fe,h,M),T===null?E=fe:T.sibling=fe,T=fe,N=W}if(U.done)return n(v,N),Oe&&ni(v,M),E;if(N===null){for(;!U.done;M++,U=g.next())U=f(v,U.value,p),U!==null&&(h=s(U,h,M),T===null?E=U:T.sibling=U,T=U);return Oe&&ni(v,M),E}for(N=r(v,N);!U.done;M++,U=g.next())U=m(N,v,M,U.value,p),U!==null&&(t&&U.alternate!==null&&N.delete(U.key===null?M:U.key),h=s(U,h,M),T===null?E=U:T.sibling=U,T=U);return t&&N.forEach(function(G){return e(v,G)}),Oe&&ni(v,M),E}function k(v,h,g,p){if(typeof g=="object"&&g!==null&&g.type===Hi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ul:e:{for(var E=g.key,T=h;T!==null;){if(T.key===E){if(E=g.type,E===Hi){if(T.tag===7){n(v,T.sibling),h=i(T,g.props.children),h.return=v,v=h;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pr&&Lg(E)===T.type){n(v,T.sibling),h=i(T,g.props),h.ref=oo(v,T,g),h.return=v,v=h;break e}n(v,T);break}else e(v,T);T=T.sibling}g.type===Hi?(h=vi(g.props.children,v.mode,p,g.key),h.return=v,v=h):(p=Kl(g.type,g.key,g.props,null,v.mode,p),p.ref=oo(v,h,g),p.return=v,v=p)}return o(v);case $i:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(v,h.sibling),h=i(h,g.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=Tf(g,v.mode,p),h.return=v,v=h}return o(v);case pr:return T=g._init,k(v,h,T(g._payload),p)}if(wo(g))return y(v,h,g,p);if(to(g))return w(v,h,g,p);wl(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,g),h.return=v,v=h):(n(v,h),h=xf(g,v.mode,p),h.return=v,v=h),o(v)):n(v,h)}return k}var Is=x0(!0),T0=x0(!1),Na={},Tn=qr(Na),ea=qr(Na),ta=qr(Na);function li(t){if(t===Na)throw Error(A(174));return t}function fp(t,e){switch(Ie(ta,e),Ie(ea,t),Ie(Tn,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dd(e,t)}Te(Tn),Ie(Tn,e)}function bs(){Te(Tn),Te(ea),Te(ta)}function P0(t){li(ta.current);var e=li(Tn.current),n=dd(e,t.type);e!==n&&(Ie(ea,t),Ie(Tn,n))}function dp(t){ea.current===t&&(Te(Tn),Te(ea))}var Ue=qr(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ef=[];function hp(){for(var t=0;t<Ef.length;t++)Ef[t]._workInProgressVersionPrimary=null;Ef.length=0}var Wl=ir.ReactCurrentDispatcher,Sf=ir.ReactCurrentBatchConfig,Si=0,je=null,Ze=null,ot=null,Eu=!1,No=!1,na=0,Ak=0;function gt(){throw Error(A(321))}function pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function mp(t,e,n,r,i,s){if(Si=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?Lk:Fk,t=n(r,i),No){s=0;do{if(No=!1,na=0,25<=s)throw Error(A(301));s+=1,ot=Ze=null,e.updateQueue=null,Wl.current=Uk,t=n(r,i)}while(No)}if(Wl.current=Su,e=Ze!==null&&Ze.next!==null,Si=0,ot=Ze=je=null,Eu=!1,e)throw Error(A(300));return t}function gp(){var t=na!==0;return na=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?je.memoizedState=ot=t:ot=ot.next=t,ot}function en(){if(Ze===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=ot===null?je.memoizedState:ot.next;if(e!==null)ot=e,Ze=t;else{if(t===null)throw Error(A(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},ot===null?je.memoizedState=ot=t:ot=ot.next=t}return ot}function ra(t,e){return typeof e=="function"?e(t):e}function Cf(t){var e=en(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,je.lanes|=c,Ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kf(t){var e=en(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N0(){}function R0(t,e){var n=je,r=en(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,vp(D0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,ia(9,O0.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(A(349));Si&30||A0(n,e,i)}return i}function A0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,M0(e)&&L0(t)}function D0(t,e,n){return n(function(){M0(e)&&L0(t)})}function M0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function L0(t){var e=Xn(t,1);e!==null&&yn(e,t,1,-1)}function Fg(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=Mk.bind(null,je,t),[e.memoizedState,t]}function ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F0(){return en().memoizedState}function $l(t,e,n,r){var i=Sn();je.flags|=t,i.memoizedState=ia(1|e,n,void 0,r===void 0?null:r)}function mc(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&pp(r,o.deps)){i.memoizedState=ia(e,n,s,r);return}}je.flags|=t,i.memoizedState=ia(1|e,n,s,r)}function Ug(t,e){return $l(8390656,8,t,e)}function vp(t,e){return mc(2048,8,t,e)}function U0(t,e){return mc(4,2,t,e)}function j0(t,e){return mc(4,4,t,e)}function z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V0(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,z0.bind(null,e,t),n)}function yp(){}function B0(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W0(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return Si&21?(wn(n,e)||(n=Y_(),je.lanes|=n,Ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function Ok(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Sf.transition;Sf.transition={};try{t(!1),e()}finally{ge=n,Sf.transition=r}}function H0(){return en().memoizedState}function Dk(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G0(t))Y0(e,n);else if(n=C0(t,e,n,r),n!==null){var i=kt();yn(n,t,r,i),K0(n,e,r)}}function Mk(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G0(t))Y0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,up(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=C0(t,e,i,r),n!==null&&(i=kt(),yn(n,t,r,i),K0(n,e,r))}}function G0(t){var e=t.alternate;return t===je||e!==null&&e===je}function Y0(t,e){No=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}var Su={readContext:Zt,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},Lk={readContext:Zt,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Dk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Fg,useDebugValue:yp,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Fg(!1),e=t[0];return t=Ok.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Sn();if(Oe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),lt===null)throw Error(A(349));Si&30||A0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ug(D0.bind(null,r,s,t),[t]),r.flags|=2048,ia(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=lt.identifierPrefix;if(Oe){var n=Bn,r=Vn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ak++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fk={readContext:Zt,useCallback:B0,useContext:Zt,useEffect:vp,useImperativeHandle:V0,useInsertionEffect:U0,useLayoutEffect:j0,useMemo:W0,useReducer:Cf,useRef:F0,useState:function(){return Cf(ra)},useDebugValue:yp,useDeferredValue:function(t){var e=en();return $0(e,Ze.memoizedState,t)},useTransition:function(){var t=Cf(ra)[0],e=en().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:R0,useId:H0,unstable_isNewReconciler:!1},Uk={readContext:Zt,useCallback:B0,useContext:Zt,useEffect:vp,useImperativeHandle:V0,useInsertionEffect:U0,useLayoutEffect:j0,useMemo:W0,useReducer:kf,useRef:F0,useState:function(){return kf(ra)},useDebugValue:yp,useDeferredValue:function(t){var e=en();return Ze===null?e.memoizedState=t:$0(e,Ze.memoizedState,t)},useTransition:function(){var t=kf(ra)[0],e=en().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:R0,useId:H0,unstable_isNewReconciler:!1};function xs(t,e){try{var n="",r=e;do n+=dC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function If(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jk=typeof WeakMap=="function"?WeakMap:Map;function q0(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ku||(ku=!0,Hd=r),Md(t,e)},n}function Q0(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zk.bind(null,t,e,n),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var zk=ir.ReactCurrentOwner,Rt=!1;function Et(t,e,n,r){e.child=t===null?T0(e,null,n,r):Is(e,t.child,n,r)}function Bg(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=mp(t,e,n,r,s,i),n=gp(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Oe&&n&&rp(e),e.flags|=1,Et(t,e,r,i),e.child)}function Wg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X0(t,e,s,r,i)):(t=Kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qo(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return Ld(t,e,n,r,i)}function J0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ts,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(ts,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(ts,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(ts,Lt),Lt|=r;return Et(t,e,i,n),e.child}function Z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,r,i){var s=Dt(n)?wi:_t.current;return s=Cs(e,s),hs(e,i),n=mp(t,e,n,r,s,i),r=gp(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Oe&&r&&rp(e),e.flags|=1,Et(t,e,n,i),e.child)}function $g(t,e,n,r,i){if(Dt(n)){var s=!0;pu(e)}else s=!1;if(hs(e,i),e.stateNode===null)Hl(t,e),b0(e,n,r),Dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Zt(u):(u=Dt(n)?wi:_t.current,u=Cs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Mg(e,o,r,u),mr=!1;var d=e.memoizedState;o.state=d,_u(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ot.current||mr?(typeof c=="function"&&(Od(e,n,c,r),l=e.memoizedState),(a=mr||Dg(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,k0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ln(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zt(l):(l=Dt(n)?wi:_t.current,l=Cs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Mg(e,o,r,l),mr=!1,d=e.memoizedState,o.state=d,_u(e,r,o,i);var y=e.memoizedState;a!==f||d!==y||Ot.current||mr?(typeof m=="function"&&(Od(e,n,m,r),y=e.memoizedState),(u=mr||Dg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Fd(t,e,n,r,s,i)}function Fd(t,e,n,r,i,s){Z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pg(e,n,!1),Jn(t,e,s);r=e.stateNode,zk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Et(t,e,a,s),e.memoizedState=r.state,i&&Pg(e,n,!0),e.child}function ew(t){var e=t.stateNode;e.pendingContext?Tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tg(t,e.context,!1),fp(t,e.containerInfo)}function Hg(t,e,n,r,i){return ks(),sp(i),e.flags|=256,Et(t,e,n,r),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function tw(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ue,i&1),t===null)return Rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yc(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jd(n),e.memoizedState=Ud,t):_p(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ud,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _p(t,e){return e=yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&sp(r),Is(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=If(Error(A(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yc({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=jd(o),e.memoizedState=Ud,s);if(!(e.mode&1))return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=If(s,r,void 0),El(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(t,i),yn(r,t,i,-1))}return Ip(),r=If(Error(A(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Nr(i.nextSibling),jt=e,Oe=!0,fn=null,t!==null&&(Gt[Yt++]=Vn,Gt[Yt++]=Bn,Gt[Yt++]=Ei,Vn=t.id,Bn=t.overflow,Ei=e),e=_p(e,r.children),e.flags|=4096,e)}function Gg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ad(t.return,e,n)}function bf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,n,e);else if(t.tag===19)Gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bf(e,!0,n,null,s);break;case"together":bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bk(t,e,n){switch(e.tag){case 3:ew(e),ks();break;case 5:P0(e);break;case 1:Dt(e.type)&&pu(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(vu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?tw(t,e,n):(Ie(Ue,Ue.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);Ie(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,J0(t,e,n)}return Jn(t,e,n)}var rw,zd,iw,sw;rw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};iw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(Tn.current);var s=null;switch(n){case"input":i=ld(t,i),r=ld(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=fd(t,i),r=fd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=du)}hd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Wk(t,e,n){var r=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Dt(e.type)&&hu(),vt(e),null;case 3:return r=e.stateNode,bs(),Te(Ot),Te(_t),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Kd(fn),fn=null))),zd(t,e),vt(e),null;case 5:dp(e);var i=li(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)iw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return vt(e),null}if(t=li(Tn.current),_l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<So.length;i++)be(So[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":tg(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":rg(r,s),be("invalid",r)}hd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":cl(r),ng(r,s,!0);break;case"textarea":cl(r),ig(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=du)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[Zo]=r,rw(t,e,!1,!1),e.stateNode=t;e:{switch(o=pd(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<So.length;i++)be(So[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":tg(t,r),i=ld(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),be("invalid",t);break;case"textarea":rg(t,r),i=fd(t,r),be("invalid",t);break;default:i=r}hd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?M_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",t):l!=null&&Wh(t,s,l,o))}switch(n){case"input":cl(t),ng(t,r,!1);break;case"textarea":cl(t),ig(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=li(ta.current),li(Tn.current),_l(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return vt(e),null;case 13:if(Te(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Ut!==null&&e.mode&1&&!(e.flags&128))S0(),ks(),e.flags|=98560,s=!1;else if(s=_l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Cn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else fn!==null&&(Kd(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?nt===0&&(nt=3):Ip())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return bs(),zd(t,e),t===null&&Xo(e.stateNode.containerInfo),vt(e),null;case 10:return lp(e.type._context),vt(e),null;case 17:return Dt(e.type)&&hu(),vt(e),null;case 19:if(Te(Ue),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ao(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>Ts&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return vt(e),null}else 2*Ke()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Ue.current,Ie(Ue,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function $k(t,e){switch(ip(e),e.tag){case 1:return Dt(e.type)&&hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),Te(Ot),Te(_t),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dp(e),null;case 13:if(Te(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ue),null;case 4:return bs(),null;case 10:return lp(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var Sl=!1,yt=!1,Hk=typeof WeakSet=="function"?WeakSet:Set,B=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Vd(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Yg=!1;function Gk(t,e){if(kd=uu,t=u0(),np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:t,selectionRange:n},uu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:ln(e.type,w),k);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(p){Ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return y=Yg,Yg=!1,y}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vd(e,n,s)}i=i.next}while(i!==r)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ow(t){var e=t.alternate;e!==null&&(t.alternate=null,ow(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[Zo],delete e[Td],delete e[Tk],delete e[Pk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aw(t){return t.tag===5||t.tag===3||t.tag===4}function Kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=du));else if(r!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}function $d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var ct=null,un=!1;function fr(t,e,n){for(n=n.child;n!==null;)lw(t,e,n),n=n.sibling}function lw(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:yt||es(n,e);case 6:var r=ct,i=un;ct=null,fr(t,e,n),ct=r,un=i,ct!==null&&(un?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(un?(t=ct,n=n.stateNode,t.nodeType===8?_f(t.parentNode,n):t.nodeType===1&&_f(t,n),Ko(t)):_f(ct,n.stateNode));break;case 4:r=ct,i=un,ct=n.stateNode.containerInfo,un=!0,fr(t,e,n),ct=r,un=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!yt&&(es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,fr(t,e,n),yt=r):fr(t,e,n);break;default:fr(t,e,n)}}function qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hk),e.forEach(function(r){var i=tI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,un=!1;break e;case 3:ct=a.stateNode.containerInfo,un=!0;break e;case 4:ct=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(ct===null)throw Error(A(160));lw(s,o,i),ct=null,un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uw(e,t),e=e.sibling}function uw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),En(t),r&4){try{Ro(3,t,t.return),gc(3,t)}catch(w){Ve(t,t.return,w)}try{Ro(5,t,t.return)}catch(w){Ve(t,t.return,w)}}break;case 1:an(e,t),En(t),r&512&&n!==null&&es(n,n.return);break;case 5:if(an(e,t),En(t),r&512&&n!==null&&es(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(w){Ve(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N_(i,s),pd(a,o);var u=pd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?M_(i,f):c==="dangerouslySetInnerHTML"?O_(i,f):c==="children"?$o(i,f):Wh(i,c,f,u)}switch(a){case"input":ud(i,s);break;case"textarea":R_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?us(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zo]=s}catch(w){Ve(t,t.return,w)}}break;case 6:if(an(e,t),En(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ve(t,t.return,w)}}break;case 3:if(an(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(w){Ve(t,t.return,w)}break;case 4:an(e,t),En(t);break;case 13:an(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sp=Ke())),r&4&&qg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||c,an(e,t),yt=u):an(e,t),En(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(f=B=c;B!==null;){switch(d=B,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ro(4,d,d.return);break;case 1:es(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Ve(r,n,w)}}break;case 5:es(d,d.return);break;case 22:if(d.memoizedState!==null){Xg(f);continue}}m!==null?(m.return=d,B=m):Xg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=D_("display",o))}catch(w){Ve(t,t.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Ve(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),En(t),r&4&&qg(t);break;case 21:break;default:an(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aw(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=Kg(t);$d(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Kg(t);Wd(t,a,o);break;default:throw Error(A(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yk(t,e,n){B=t,cw(t)}function cw(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=Sl;var u=yt;if(Sl=o,(yt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?Jg(i):l!==null?(l.return=o,B=l):Jg(i);for(;s!==null;)B=s,cw(s),s=s.sibling;B=i,Sl=a,yt=u}Qg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Qg(t)}}function Qg(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Og(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Og(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}yt||e.flags&512&&Bd(e)}catch(d){Ve(e,e.return,d)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Xg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Jg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Bd(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Bd(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var Kk=Math.ceil,Cu=ir.ReactCurrentDispatcher,wp=ir.ReactCurrentOwner,Jt=ir.ReactCurrentBatchConfig,ce=0,lt=null,Xe=null,dt=0,Lt=0,ts=qr(0),nt=0,sa=null,Ci=0,vc=0,Ep=0,Ao=null,Nt=null,Sp=0,Ts=1/0,jn=null,ku=!1,Hd=null,Ar=null,Cl=!1,Sr=null,Iu=0,Oo=0,Gd=null,Gl=-1,Yl=0;function kt(){return ce&6?Ke():Gl!==-1?Gl:Gl=Ke()}function Or(t){return t.mode&1?ce&2&&dt!==0?dt&-dt:Rk.transition!==null?(Yl===0&&(Yl=Y_()),Yl):(t=ge,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function yn(t,e,n,r){if(50<Oo)throw Oo=0,Gd=null,Error(A(185));xa(t,n,r),(!(ce&2)||t!==lt)&&(t===lt&&(!(ce&2)&&(vc|=n),nt===4&&vr(t,dt)),Mt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Ts=Ke()+500,hc&&Qr()))}function Mt(t,e){var n=t.callbackNode;RC(t,e);var r=lu(t,t===lt?dt:0);if(r===0)n!==null&&ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ag(n),e===1)t.tag===0?Nk(Zg.bind(null,t)):_0(Zg.bind(null,t)),bk(function(){!(ce&6)&&Qr()}),n=null;else{switch(K_(r)){case 1:n=Kh;break;case 4:n=H_;break;case 16:n=au;break;case 536870912:n=G_;break;default:n=au}n=yw(n,fw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fw(t,e){if(Gl=-1,Yl=0,ce&6)throw Error(A(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=lu(t,t===lt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bu(t,r);else{e=r;var i=ce;ce|=2;var s=hw();(lt!==t||dt!==e)&&(jn=null,Ts=Ke()+500,gi(t,e));do try{Xk();break}catch(a){dw(t,a)}while(1);ap(),Cu.current=s,ce=i,Xe!==null?e=0:(lt=null,dt=0,e=nt)}if(e!==0){if(e===2&&(i=_d(t),i!==0&&(r=i,e=Yd(t,i))),e===1)throw n=sa,gi(t,0),vr(t,r),Mt(t,Ke()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!qk(i)&&(e=bu(t,r),e===2&&(s=_d(t),s!==0&&(r=s,e=Yd(t,s))),e===1))throw n=sa,gi(t,0),vr(t,r),Mt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:ri(t,Nt,jn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=Sp+500-Ke(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xd(ri.bind(null,t,Nt,jn),e);break}ri(t,Nt,jn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kk(r/1960))-r,10<r){t.timeoutHandle=xd(ri.bind(null,t,Nt,jn),r);break}ri(t,Nt,jn);break;case 5:ri(t,Nt,jn);break;default:throw Error(A(329))}}}return Mt(t,Ke()),t.callbackNode===n?fw.bind(null,t):null}function Yd(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=bu(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Kd(e)),t}function Kd(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function qk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Ep,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function Zg(t){if(ce&6)throw Error(A(327));ps();var e=lu(t,0);if(!(e&1))return Mt(t,Ke()),null;var n=bu(t,e);if(t.tag!==0&&n===2){var r=_d(t);r!==0&&(e=r,n=Yd(t,r))}if(n===1)throw n=sa,gi(t,0),vr(t,e),Mt(t,Ke()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,Nt,jn),Mt(t,Ke()),null}function Cp(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Ts=Ke()+500,hc&&Qr())}}function ki(t){Sr!==null&&Sr.tag===0&&!(ce&6)&&ps();var e=ce;ce|=1;var n=Jt.transition,r=ge;try{if(Jt.transition=null,ge=1,t)return t()}finally{ge=r,Jt.transition=n,ce=e,!(ce&6)&&Qr()}}function kp(){Lt=ts.current,Te(ts)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ik(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hu();break;case 3:bs(),Te(Ot),Te(_t),hp();break;case 5:dp(r);break;case 4:bs();break;case 13:Te(Ue);break;case 19:Te(Ue);break;case 10:lp(r.type._context);break;case 22:case 23:kp()}n=n.return}if(lt=t,Xe=t=Dr(t.current,null),dt=Lt=e,nt=0,sa=null,Ep=vc=Ci=0,Nt=Ao=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function dw(t,e){do{var n=Xe;try{if(ap(),Wl.current=Su,Eu){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(Si=0,ot=Ze=je=null,No=!1,na=0,wp.current=null,n===null||n.return===null){nt=1,sa=e,Xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=zg(o);if(m!==null){m.flags&=-257,Vg(m,o,a,s,e),m.mode&1&&jg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){jg(s,u,e),Ip();break e}l=Error(A(426))}}else if(Oe&&a.mode&1){var k=zg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Vg(k,o,a,s,e),sp(xs(l,a));break e}}s=l=xs(l,a),nt!==4&&(nt=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=q0(s,l,e);Ag(s,v);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ar===null||!Ar.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=Q0(s,a,e);Ag(s,p);break e}}s=s.return}while(s!==null)}mw(n)}catch(E){e=E,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(1)}function hw(){var t=Cu.current;return Cu.current=Su,t===null?Su:t}function Ip(){(nt===0||nt===3||nt===2)&&(nt=4),lt===null||!(Ci&268435455)&&!(vc&268435455)||vr(lt,dt)}function bu(t,e){var n=ce;ce|=2;var r=hw();(lt!==t||dt!==e)&&(jn=null,gi(t,e));do try{Qk();break}catch(i){dw(t,i)}while(1);if(ap(),ce=n,Cu.current=r,Xe!==null)throw Error(A(261));return lt=null,dt=0,nt}function Qk(){for(;Xe!==null;)pw(Xe)}function Xk(){for(;Xe!==null&&!SC();)pw(Xe)}function pw(t){var e=vw(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?mw(t):Xe=e,wp.current=null}function mw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$k(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Xe=null;return}}else if(n=Wk(n,e,Lt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);nt===0&&(nt=5)}function ri(t,e,n){var r=ge,i=Jt.transition;try{Jt.transition=null,ge=1,Jk(t,e,n,r)}finally{Jt.transition=i,ge=r}return null}function Jk(t,e,n,r){do ps();while(Sr!==null);if(ce&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AC(t,s),t===lt&&(Xe=lt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,yw(au,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=ge;ge=1;var a=ce;ce|=4,wp.current=null,Gk(t,n),uw(n,t),yk(Id),uu=!!kd,Id=kd=null,t.current=n,Yk(n),CC(),ce=a,ge=o,Jt.transition=s}else t.current=n;if(Cl&&(Cl=!1,Sr=t,Iu=i),s=t.pendingLanes,s===0&&(Ar=null),bC(n.stateNode),Mt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ku)throw ku=!1,t=Hd,Hd=null,t;return Iu&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Gd?Oo++:(Oo=0,Gd=t):Oo=0,Qr(),null}function ps(){if(Sr!==null){var t=K_(Iu),e=Jt.transition,n=ge;try{if(Jt.transition=null,ge=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,Iu=0,ce&6)throw Error(A(331));var i=ce;for(ce|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Ro(8,c,s)}var f=c.child;if(f!==null)f.return=c,B=f;else for(;B!==null;){c=B;var d=c.sibling,m=c.return;if(ow(c),c===u){B=null;break}if(d!==null){d.return=m,B=d;break}B=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,B=v;break e}B=s.return}}var h=t.current;for(B=h;B!==null;){o=B;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,B=g;else e:for(o=h;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(E){Ve(a,a.return,E)}if(a===o){B=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,B=p;break e}B=a.return}}if(ce=i,Qr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(lc,t)}catch{}r=!0}return r}finally{ge=n,Jt.transition=e}}return!1}function ev(t,e,n){e=xs(n,e),e=q0(t,e,1),t=Rr(t,e,1),e=kt(),t!==null&&(xa(t,1,e),Mt(t,e))}function Ve(t,e,n){if(t.tag===3)ev(t,t,n);else for(;e!==null;){if(e.tag===3){ev(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=xs(n,t),t=Q0(e,t,1),e=Rr(e,t,1),t=kt(),e!==null&&(xa(e,1,t),Mt(e,t));break}}e=e.return}}function Zk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(dt&n)===n&&(nt===4||nt===3&&(dt&130023424)===dt&&500>Ke()-Sp?gi(t,0):Ep|=n),Mt(t,e)}function gw(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=kt();t=Xn(t,e),t!==null&&(xa(t,e,n),Mt(t,n))}function eI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gw(t,n)}function tI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),gw(t,n)}var vw;vw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Bk(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Oe&&e.flags&1048576&&w0(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hl(t,e),t=e.pendingProps;var i=Cs(e,_t.current);hs(e,n),i=mp(null,e,r,t,i,n);var s=gp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cp(e),i.updater=pc,e.stateNode=i,i._reactInternals=e,Dd(e,r,t,n),e=Fd(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&rp(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rI(r),t=ln(r,t),i){case 0:e=Ld(null,e,r,t,n);break e;case 1:e=$g(null,e,r,t,n);break e;case 11:e=Bg(null,e,r,t,n);break e;case 14:e=Wg(null,e,r,ln(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Ld(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),$g(t,e,r,i,n);case 3:e:{if(ew(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,k0(t,e),_u(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xs(Error(A(423)),e),e=Hg(t,e,r,n,i);break e}else if(r!==i){i=xs(Error(A(424)),e),e=Hg(t,e,r,n,i);break e}else for(Ut=Nr(e.stateNode.containerInfo.firstChild),jt=e,Oe=!0,fn=null,n=T0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=Jn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return P0(e),t===null&&Rd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),Z0(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Rd(e),null;case 13:return tw(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Is(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Bg(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(vu,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Ot.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ad(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ad(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=Zt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),Wg(t,e,r,i,n);case 15:return X0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Hl(t,e),e.tag=1,Dt(r)?(t=!0,pu(e)):t=!1,hs(e,n),b0(e,r,i),Dd(e,r,i,n),Fd(null,e,r,!0,t,n);case 19:return nw(t,e,n);case 22:return J0(t,e,n)}throw Error(A(156,e.tag))};function yw(t,e){return $_(t,e)}function nI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new nI(t,e,n,r)}function bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rI(t){if(typeof t=="function")return bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hh)return 11;if(t===Gh)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hi:return vi(n.children,i,s,e);case $h:o=8,i|=8;break;case id:return t=Qt(12,n,e,i|2),t.elementType=id,t.lanes=s,t;case sd:return t=Qt(13,n,e,i),t.elementType=sd,t.lanes=s,t;case od:return t=Qt(19,n,e,i),t.elementType=od,t.lanes=s,t;case x_:return yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I_:o=10;break e;case b_:o=9;break e;case Hh:o=11;break e;case Gh:o=14;break e;case pr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function yc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=x_,t.lanes=n,t.stateNode={isHidden:!1},t}function xf(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Tf(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lf(0),this.expirationTimes=lf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xp(t,e,n,r,i,s,o,a,l){return t=new iI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),t}function sI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _w(t){if(!t)return Vr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Dt(n))return y0(t,n,e)}return e}function ww(t,e,n,r,i,s,o,a,l){return t=xp(n,r,!0,t,i,s,o,a,l),t.context=_w(null),n=t.current,r=kt(),i=Or(n),s=Gn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,xa(t,i,r),Mt(t,r),t}function _c(t,e,n,r){var i=e.current,s=kt(),o=Or(i);return n=_w(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(yn(t,i,o,s),Bl(t,i,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tp(t,e){tv(t,e),(t=t.alternate)&&tv(t,e)}function oI(){return null}var Ew=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}wc.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));_c(t,e,null,null)};wc.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){_c(null,t,null,null)}),e[Qn]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=X_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&Z_(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nv(){}function aI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xu(o);s.call(u)}}var o=ww(e,r,t,0,null,!1,!1,"",nv);return t._reactRootContainer=o,t[Qn]=o.current,Xo(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xu(l);a.call(u)}}var l=xp(t,0,!1,null,null,!1,!1,"",nv);return t._reactRootContainer=l,t[Qn]=l.current,Xo(t.nodeType===8?t.parentNode:t),ki(function(){_c(e,l,n,r)}),l}function Sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xu(o);a.call(l)}}_c(e,o,t,i)}else o=aI(n,e,t,i,r);return xu(o)}q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(qh(e,n|1),Mt(e,Ke()),!(ce&6)&&(Ts=Ke()+500,Qr()))}break;case 13:ki(function(){var r=Xn(t,1);if(r!==null){var i=kt();yn(r,t,1,i)}}),Tp(t,1)}};Qh=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=kt();yn(e,t,134217728,n)}Tp(t,134217728)}};Q_=function(t){if(t.tag===13){var e=Or(t),n=Xn(t,e);if(n!==null){var r=kt();yn(n,t,e,r)}Tp(t,e)}};X_=function(){return ge};J_=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};gd=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dc(r);if(!i)throw Error(A(90));P_(r),ud(r,i)}}}break;case"textarea":R_(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};U_=Cp;j_=ki;var lI={usingClientEntryPoint:!1,Events:[Pa,qi,dc,L_,F_,Cp]},lo={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uI={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B_(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||oI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{lc=kl.inject(uI),xn=kl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(A(200));return sI(t,e,null,n)};Vt.createRoot=function(t,e){if(!Np(t))throw Error(A(299));var n=!1,r="",i=Ew;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xp(t,1,!1,null,null,n,!1,r,i),t[Qn]=e.current,Xo(t.nodeType===8?t.parentNode:t),new Pp(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=B_(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return ki(t)};Vt.hydrate=function(t,e,n){if(!Ec(e))throw Error(A(200));return Sc(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ew;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ww(e,null,t,1,n??null,i,!1,s,o),t[Qn]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wc(e)};Vt.render=function(t,e,n){if(!Ec(e))throw Error(A(200));return Sc(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(A(40));return t._reactRootContainer?(ki(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Cp;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ec(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Sc(t,e,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";function Sw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sw)}catch(t){console.error(t)}}Sw(),w_.exports=Vt;var cI=w_.exports,rv=cI;nd.createRoot=rv.createRoot,nd.hydrateRoot=rv.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Ws(e)},Ws=function(t){return new Error("Firebase Database ("+Cw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new dI;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iw=function(t){const e=kw(t);return Rp.encodeByteArray(e,!0)},Tu=function(t){return Iw(t).replace(/\./g,"")},Pu=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){return bw(void 0,t)}function bw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pI(n)||(t[n]=bw(t[n],e[n]));return t}function pI(t){return t!=="__proto__"}/**
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
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gI=()=>mI().__FIREBASE_DEFAULTS__,vI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pu(t[1]);return e&&JSON.parse(e)},Ap=()=>{try{return gI()||vI()||yI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xw=t=>{var e,n;return(n=(e=Ap())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_I=t=>{const e=xw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tw=()=>{var t;return(t=Ap())===null||t===void 0?void 0:t.config},Pw=t=>{var e;return(e=Ap())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Op(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function EI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SI(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){return Cw.NODE_ADMIN===!0}function CI(){try{return typeof indexedDB=="object"}catch{return!1}}function kI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="FirebaseError";class Xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=II,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xr(i,a,r)}}function bI(t,e){return t.replace(xI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=oa(Pu(s[0])||""),n=oa(Pu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},TI=function(t){const e=Aw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},PI=function(t){const e=Aw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ps(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ru(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(iv(s)&&iv(o)){if(!Ru(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function iv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):f<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function RI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pf),i.error===void 0&&(i.error=Pf),i.complete===void 0&&(i.complete=Pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pf(){}function Cc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ii="[DEFAULT]";/**
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
 */class MI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ra;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FI(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LI(t){return t===ii?void 0:t}function FI(t){return t.instantiationMode==="EAGER"}/**
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
 */class UI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const jI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},zI=ye.INFO,VI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},BI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dp{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const WI=(t,e)=>e.some(n=>t instanceof n);let sv,ov;function $I(){return sv||(sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return ov||(ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ow=new WeakMap,Qd=new WeakMap,Dw=new WeakMap,Nf=new WeakMap,Mp=new WeakMap;function GI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ow.set(n,t)}).catch(()=>{}),Mp.set(e,t),e}function YI(t){if(Qd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KI(t){Xd=t(Xd)}function qI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rf(this),e,...n);return Dw.set(r,e.sort?e.sort():[e]),Mr(r)}:HI().includes(t)?function(...e){return t.apply(Rf(this),e),Mr(Ow.get(this))}:function(...e){return Mr(t.apply(Rf(this),e))}}function QI(t){return typeof t=="function"?qI(t):(t instanceof IDBTransaction&&YI(t),WI(t,$I())?new Proxy(t,Xd):t)}function Mr(t){if(t instanceof IDBRequest)return GI(t);if(Nf.has(t))return Nf.get(t);const e=QI(t);return e!==t&&(Nf.set(t,e),Mp.set(e,t)),e}const Rf=t=>Mp.get(t);function XI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const JI=["get","getKey","getAll","getAllKeys","count"],ZI=["put","add","delete","clear"],Af=new Map;function av(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Af.get(e))return Af.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Af.set(e,s),s}KI(t=>({...t,get:(e,n,r)=>av(e,n)||t.get(e,n,r),has:(e,n)=>!!av(e,n)||t.has(e,n)}));/**
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
 */class eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",lv="0.9.19";/**
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
 */const bi=new Dp("@firebase/app"),nb="@firebase/app-compat",rb="@firebase/analytics-compat",ib="@firebase/analytics",sb="@firebase/app-check-compat",ob="@firebase/app-check",ab="@firebase/auth",lb="@firebase/auth-compat",ub="@firebase/database",cb="@firebase/database-compat",fb="@firebase/functions",db="@firebase/functions-compat",hb="@firebase/installations",pb="@firebase/installations-compat",mb="@firebase/messaging",gb="@firebase/messaging-compat",vb="@firebase/performance",yb="@firebase/performance-compat",_b="@firebase/remote-config",wb="@firebase/remote-config-compat",Eb="@firebase/storage",Sb="@firebase/storage-compat",Cb="@firebase/firestore",kb="@firebase/firestore-compat",Ib="firebase",bb="10.4.0";/**
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
 */const Zd="[DEFAULT]",xb={[Jd]:"fire-core",[nb]:"fire-core-compat",[ib]:"fire-analytics",[rb]:"fire-analytics-compat",[ob]:"fire-app-check",[sb]:"fire-app-check-compat",[ab]:"fire-auth",[lb]:"fire-auth-compat",[ub]:"fire-rtdb",[cb]:"fire-rtdb-compat",[fb]:"fire-fn",[db]:"fire-fn-compat",[hb]:"fire-iid",[pb]:"fire-iid-compat",[mb]:"fire-fcm",[gb]:"fire-fcm-compat",[vb]:"fire-perf",[yb]:"fire-perf-compat",[_b]:"fire-rc",[wb]:"fire-rc-compat",[Eb]:"fire-gcs",[Sb]:"fire-gcs-compat",[Cb]:"fire-fst",[kb]:"fire-fst-compat","fire-js":"fire-js",[Ib]:"fire-js-all"};/**
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
 */const Au=new Map,eh=new Map;function Tb(t,e){try{t.container.addComponent(e)}catch(n){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(eh.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;eh.set(e,t);for(const n of Au.values())Tb(n,t);return!0}function Lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Pb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lr=new Aa("app","Firebase",Pb);/**
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
 */class Nb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=bb;function Mw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=Tw()),!n)throw Lr.create("no-options");const s=Au.get(i);if(s){if(Ru(n,s.options)&&Ru(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new UI(i);for(const l of eh.values())o.addComponent(l);const a=new Nb(n,r,o);return Au.set(i,a),a}function Lw(t=Zd){const e=Au.get(t);if(!e&&t===Zd&&Tw())return Mw();if(!e)throw Lr.create("no-app",{appName:t});return e}function Fr(t,e,n){var r;let i=(r=xb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(a.join(" "));return}Ns(new Ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rb="firebase-heartbeat-database",Ab=1,aa="firebase-heartbeat-store";let Of=null;function Fw(){return Of||(Of=XI(Rb,Ab,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(aa)}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Of}async function Ob(t){try{return await(await Fw()).transaction(aa).objectStore(aa).get(Uw(t))}catch(e){if(e instanceof Xr)bi.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(n.message)}}}async function uv(t,e){try{const r=(await Fw()).transaction(aa,"readwrite");await r.objectStore(aa).put(e,Uw(t)),await r.done}catch(n){if(n instanceof Xr)bi.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bi.warn(r.message)}}}function Uw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Db=1024,Mb=30*24*60*60*1e3;class Lb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ub(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Mb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cv(),{heartbeatsToSend:n,unsentEntries:r}=Fb(this._heartbeatsCache.heartbeats),i=Tu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cv(){return new Date().toISOString().substring(0,10)}function Fb(t,e=Db){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ub{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CI()?kI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ob(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fv(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jb(t){Ns(new Ii("platform-logger",e=>new eb(e),"PRIVATE")),Ns(new Ii("heartbeat",e=>new Lb(e),"PRIVATE")),Fr(Jd,lv,t),Fr(Jd,lv,"esm2017"),Fr("fire-js","")}jb("");var zb="firebase",Vb="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr(zb,Vb,"app");const dv="@firebase/database",hv="1.0.1";/**
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
 */let jw="";function Bb(t){jw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wb(e)}}catch{}return new $b},ui=zw("localStorage"),th=zw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Dp("@firebase/database"),Hb=function(){let t=1;return function(){return t++}}(),Vw=function(t){const e=DI(t),n=new NI;n.update(e);const r=n.digest();return Rp.encodeByteArray(r)},Oa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Oa.apply(null,r):typeof r=="object"?e+=tt(r):e+=r,e+=" "}return e};let yi=null,pv=!0;const Gb=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ms.logLevel=ye.VERBOSE,yi=ms.log.bind(ms),e&&th.set("logging_enabled",!0)):typeof t=="function"?yi=t:(yi=null,th.remove("logging_enabled"))},ft=function(...t){if(pv===!0&&(pv=!1,yi===null&&th.get("logging_enabled")===!0&&Gb(!0)),yi){const e=Oa.apply(null,t);yi(e)}},Da=function(t){return function(...e){ft(t,...e)}},nh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oa(...t);ms.error(e)},Zn=function(...t){const e=`FIREBASE FATAL ERROR: ${Oa(...t)}`;throw ms.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Oa(...t);ms.warn(e)},Yb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Kb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rs="[MIN_NAME]",xi="[MAX_NAME]",Fi=function(t,e){if(t===e)return 0;if(t===Rs||e===xi)return-1;if(e===Rs||t===xi)return 1;{const n=mv(t),r=mv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qb=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},Up=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=tt(e[r]),n+=":",n+=Up(t[e[r]]);return n+="}",n},Bw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ww=function(t){D(!Fp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Qb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Jb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Zb=new RegExp("^-?(0*)\\d{1,10}$"),ex=-2147483648,tx=2147483647,mv=function(t){if(Zb.test(t)){const e=Number(t);if(e>=ex&&e<=tx)return e}return null},Gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},nx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Do=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class rx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class gs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="5",$w="v",Hw="s",Gw="r",Yw="f",Kw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qw="ls",Qw="p",rh="ac",Xw="websocket",Jw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function e1(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===Xw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sx(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.counters_={}}incrementCounter(e,n=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df={},Mf={};function zp(t){const e=t.toString();return Df[e]||(Df[e]=new ox),Df[e]}function ax(t,e){const n=t.toString();return Mf[n]||(Mf[n]=e()),Mf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Gs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="start",ux="close",cx="pLPCommand",fx="pRTLPCB",t1="id",n1="pw",r1="ser",dx="cb",hx="seg",px="ts",mx="d",gx="dframe",i1=1870,s1=30,vx=i1-s1,yx=25e3,_x=3e4;class ns{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Da(e),this.stats_=zp(n),this.urlFn=l=>(this.appCheckToken&&(l[rh]=this.appCheckToken),e1(n,Jw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_x)),Kb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gv)this.id=a,this.password=l;else if(o===ux)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gv]="t",r[r1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$w]=jp,this.transportSessionId&&(r[Hw]=this.transportSessionId),this.lastSessionId&&(r[qw]=this.lastSessionId),this.applicationId&&(r[Qw]=this.applicationId),this.appCheckToken&&(r[rh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(r[Gw]=Yw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ns.forceAllow_=!0}static forceDisallow(){ns.forceDisallow_=!0}static isAvailable(){return ns.forceAllow_?!0:!ns.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qb()&&!Xb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iw(n),i=Bw(r,vx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gx]="t",r[t1]=e,r[n1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hb(),window[cx+this.uniqueCallbackIdentifier]=e,window[fx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[t1]=this.myID,e[n1]=this.myPW,e[r1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+s1+r.length<=i1;){const o=this.pendingSegs.shift();r=r+"&"+hx+i+"="+o.seg+"&"+px+i+"="+o.ts+"&"+mx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=16384,Ex=45e3;let Ou=null;typeof MozWebSocket<"u"?Ou=MozWebSocket:typeof WebSocket<"u"&&(Ou=WebSocket);class dn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Da(this.connId),this.stats_=zp(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[$w]=jp,typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(o[Gw]=Yw),n&&(o[Hw]=n),r&&(o[qw]=r),i&&(o[rh]=i),s&&(o[Qw]=s),e1(e,Xw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ui.set("previous_websocket_failure",!0);try{let r;Rw(),this.mySock=new Ou(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ou!==null&&!dn.forceDisallow_}static previouslyFailed(){return ui.isInMemoryStorage||ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=oa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bw(n,wx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ex))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ns,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of la.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);la.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}la.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=6e4,Cx=5e3,kx=10*1024,Ix=100*1024,Lf="t",vv="d",bx="s",yv="r",xx="e",_v="o",wv="a",Ev="n",Sv="p",Tx="h";class Px{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Da("c:"+this.id+":"),this.transportManager_=new la(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Do(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ix?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lf in e){const n=e[Lf];n===wv?this.upgradeIfSecondaryHealthy_():n===yv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_v&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ev,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(Lf,e);if(vv in e){const r=e[vv];if(n===Tx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ev){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bx?this.onConnectionShutdown_(r):n===yv?this.onReset_(r):n===xx?nh("Server Error: "+r):n===_v?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jp!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Do(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Do(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Cx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends a1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Op()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Du}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=32,kv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new _e("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Br(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function Bp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Nx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ua(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function l1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Ct(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Ct(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rx(t,e){const n=ua(t,0),r=ua(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Fi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Wp(t,e){if(Br(t)!==Br(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Br(t)>Br(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ax{constructor(e,n){this.errorPrefix_=n,this.parts_=ua(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kc(this.parts_[r]);u1(this)}}function Ox(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kc(e),u1(t)}function Dx(t){const e=t.parts_.pop();t.byteLength_-=kc(e),t.parts_.length>0&&(t.byteLength_-=1)}function u1(t){if(t.byteLength_>kv)throw new Error(t.errorPrefix_+"has a key path longer than "+kv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cv+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends a1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $p}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=1e3,Mx=60*5*1e3,Iv=30*1e3,Lx=1.3,Fx=3e4,Ux="server_kill",bv=3;class Yn extends o1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yn.nextPersistentConnectionId_++,this.log_=Da("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=co,this.maxReconnectDelay_=Mx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Rw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$p.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Du.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(tt(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ra,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Yn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&An(e,"w")){const r=Ps(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||PI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Iv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nh("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Fx&&(this.reconnectDelay_=co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new Px(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{It(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ux)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&It(f),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qd(this.interruptReasons_)&&(this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Up(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bv&&(this.reconnectDelay_=Iv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jw.replace(/\./g,"-")]=1,Op()?e["framework.cordova"]=1:Nw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Du.getInstance().currentlyOnline();return qd(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Rs,e),i=new se(Rs,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class c1 extends Ic{static get __EMPTY_NODE(){return Il}static set __EMPTY_NODE(e){Il=e}compare(e,n){return Fi(e.name,n.name)}isDefinedOn(e){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(xi,Il)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Il)}toString(){return".key"}}const vs=new c1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??At.EMPTY_NODE,this.right=s??At.EMPTY_NODE}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class jx{copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(e,n=At.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new At(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bl(this.root_,null,this.comparator_,!0,e)}}At.EMPTY_NODE=new jx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t,e){return Fi(t.name,e.name)}function Hp(t,e){return Fi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;function Vx(t){ih=t}const f1=function(t){return typeof t=="number"?"number:"+Ww(t):"string:"+t},d1=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else D(t===ih||t.isEmpty(),"priority of unexpected type.");D(t===ih||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xv;class st{constructor(e,n=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),d1(this.priorityNode_)}static set __childrenNodeConstructor(e){xv=e}static get __childrenNodeConstructor(){return xv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ww(this.value_):e+=this.value_,this.lazyHash_=Vw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=st.VALUE_TYPE_ORDER.indexOf(n),s=st.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h1,p1;function Bx(t){h1=t}function Wx(t){p1=t}class $x extends Ic{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(xi,new st("[PRIORITY-POST]",p1))}makePost(e,n){const r=h1(e);return new se(n,new st("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new $x;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=Math.log(2);class Gx{constructor(e){const n=s=>parseInt(Math.log(s)/Hx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let f,d;if(c===0)return null;if(c===1)return f=t[l],d=n?n(f):f,new at(d,f.node,at.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),w=i(m+1,u);return f=t[m],d=n?n(f):f,new at(d,f.node,at.BLACK,y,w)}},s=function(l){let u=null,c=null,f=t.length;const d=function(y,w){const k=f-y,v=f;f-=y;const h=i(k+1,v),g=t[k],p=n?n(g):g;m(new at(p,g.node,w,null,h))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));w?d(k,at.BLACK):(d(k,at.BLACK),d(k,at.RED))}return c},o=new Gx(t.length),a=s(o);return new At(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ff;const Vi={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Vi&&$e,"ChildrenNode.ts has not been loaded"),Ff=Ff||new Wn({".priority":Vi},{".priority":$e}),Ff}get(e){const n=Ps(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof At?n:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,n){D(e!==vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Mu(r,e.getCompare()):a=Vi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Wn(c,u)}addToIndexes(e,n){const r=Nu(this.indexes_,(i,s)=>{const o=Ps(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===Vi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(se.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Mu(a,o.getCompare())}else return Vi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new Wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Nu(this.indexes_,i=>{if(i===Vi)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new Wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&d1(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fo||(fo=new X(new At(Hp),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fo:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fo:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{D(ie(e)!==".priority"||Br(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f1(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ma?-1:0}withIndex(e){if(e===vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vs?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yx extends X{constructor(){super(new At(Hp),X.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Ma=new Yx;Object.defineProperties(se,{MIN:{value:new se(Rs,X.EMPTY_NODE)},MAX:{value:new se(xi,Ma)}});c1.__EMPTY_NODE=X.EMPTY_NODE;st.__childrenNodeConstructor=X;Vx(Ma);Wx(Ma);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=!0;function et(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new st(n,et(e))}if(!(t instanceof Array)&&Kx){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=et(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new se(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=Mu(n,zx,o=>o.name,Hp);if(r){const o=Mu(n,$e.getCompare());return new X(s,et(e),new Wn({".priority":o},{".priority":$e}))}else return new X(s,et(e),Wn.Default)}else{let n=X.EMPTY_NODE;return pt(t,(r,i)=>{if(An(t,r)&&r.substring(0,1)!=="."){const s=et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(et(e))}}Bx(et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx extends Ic{constructor(e){super(),this.indexPath_=e,D(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fi(e.name,n.name):s}makePost(e,n){const r=et(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Ma);return new se(xi,e)}toString(){return ua(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx extends Ic{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=et(e);return new se(n,r)}toString(){return".value"}}const Xx=new Qx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){return{type:"value",snapshotNode:t}}function As(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ca(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Jx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ca(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(As(n,r)):o.trackChildChange(fa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(ca(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fa(i,s,o))}else r.trackChildChange(As(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.indexedFilter_=new Gp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=da.getStartPost_(e),this.endPost_=da.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new se(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new se(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new da(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new se(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new se(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(fa(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ca(n,f));const w=a.updateImmediateChild(n,X.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(As(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ca(u.name,u.node)),s.trackChildChange(As(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rs}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Yp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eT(t){return t.loadsAllData()?new Gp(t.getIndex()):t.hasLimit()?new Zx(t):new da(t)}function Tv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$e?n="$priority":t.index_===Xx?n="$value":t.index_===vs?n="$key":(D(t.index_ instanceof qx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends o1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Da("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Tv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Ps(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Lu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Tv(e._queryParams),r=e._path.toString(),i=new Ra;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=oa(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){return{value:null,children:new Map}}function g1(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,Fu());const i=t.children.get(r);e=ke(e),g1(i,e,n)}}function sh(t,e,n){t.value!==null?n(e,t.value):nT(t,(r,i)=>{const s=new _e(e.toString()+"/"+r);sh(i,s,n)})}function nT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=10*1e3,iT=30*1e3,sT=5*60*1e3;class oT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rT(e);const r=Nv+(iT-Nv)*Math.random();Do(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&An(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Do(this.reportStats_.bind(this),Math.floor(Math.random()*2*sT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function Kp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=Kp()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Uu(he(),n,this.revert)}}else return D(ie(this.path)===e,"operationForChild called for unrelated child."),new Uu(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new ha(this.source,he()):new ha(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return le(this.path)?new Ti(this.source,he(),this.snap.getImmediateChild(e)):new Ti(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Ti(this.source,he(),n.value):new Os(this.source,he(),n)}else return D(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Jx(o.childName,o.snapshotNode))}),ho(t,i,"child_removed",e,r,n),ho(t,i,"child_added",e,r,n),ho(t,i,"child_moved",s,r,n),ho(t,i,"child_changed",e,r,n),ho(t,i,"value",e,r,n),i}function ho(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>cT(t,a,l)),o.forEach(a=>{const l=uT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function uT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cT(t,e,n){if(e.childName==null||n.childName==null)throw Ws("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e){return{eventCache:t,serverCache:e}}function Mo(t,e,n,r){return bc(new Wr(e,n,r),t.serverCache)}function v1(t,e,n,r){return bc(t.eventCache,new Wr(e,n,r))}function ju(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf;const fT=()=>(Uf||(Uf=new At(qb)),Uf);class Ce{constructor(e,n=fT()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return pt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(le(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ke(e),n);return s!=null?{path:We(new _e(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new Ce(null)}}set(e,n){if(le(e))return new Ce(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Ce(null)).set(ke(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(ke(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(le(e))return n;{const r=ie(e),s=(this.children.get(r)||new Ce(null)).setTree(ke(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(ke(e),We(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(ke(e),We(n,i),r):new Ce(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new Ce(null))}}function Lo(t,e,n){if(le(e))return new _n(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ct(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function oh(t,e,n){let r=t;return pt(n,(i,s)=>{r=Lo(r,We(e,i),s)}),r}function Rv(t,e){if(le(e))return _n.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new _n(n)}}function ah(t,e){return Ui(t,e)!=null}function Ui(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function Av(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function Ur(t,e){if(le(e))return t;{const n=Ui(t,e);return n!=null?new _n(new Ce(n)):new _n(t.writeTree_.subtree(e))}}function lh(t){return t.writeTree_.isEmpty()}function Ds(t,e){return y1(he(),t.writeTree_,e)}function y1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=y1(We(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e){return S1(e,t)}function dT(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Lo(t.visibleWrites,e,n)),t.lastWriteId=r}function hT(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=oh(t.visibleWrites,e,n),t.lastWriteId=r}function pT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gT(a,r.path)?i=!1:Xt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return vT(t),!0;if(r.snap)t.visibleWrites=Rv(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=Rv(t.visibleWrites,We(r.path,l))})}return!0}else return!1}function gT(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(We(t.path,n),e))return!0;return!1}function vT(t){t.visibleWrites=_1(t.allWrites,yT,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yT(t){return t.visible}function _1(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Xt(n,o)?(a=Ct(n,o),r=Lo(r,a,s.snap)):Xt(o,n)&&(a=Ct(o,n),r=Lo(r,he(),s.snap.getChild(a)));else if(s.children){if(Xt(n,o))a=Ct(n,o),r=oh(r,a,s.children);else if(Xt(o,n))if(a=Ct(o,n),le(a))r=oh(r,he(),s.children);else{const l=Ps(s.children,ie(a));if(l){const u=l.getChild(ke(a));r=Lo(r,he(),u)}}}else throw Ws("WriteRecord should have .snap or .children")}}return r}function w1(t,e,n,r,i){if(!r&&!i){const s=Ui(t.visibleWrites,e);if(s!=null)return s;{const o=Ur(t.visibleWrites,e);if(lh(o))return n;if(n==null&&!ah(o,he()))return null;{const a=n||X.EMPTY_NODE;return Ds(o,a)}}}else{const s=Ur(t.visibleWrites,e);if(!i&&lh(s))return n;if(!i&&n==null&&!ah(s,he()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Xt(u.path,e)||Xt(e,u.path))},a=_1(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Ds(a,l)}}}function _T(t,e,n){let r=X.EMPTY_NODE;const i=Ui(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ur(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=Ds(Ur(s,new _e(o)),a);r=r.updateImmediateChild(o,l)}),Av(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ur(t.visibleWrites,e);return Av(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wT(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=We(e,n);if(ah(t.visibleWrites,s))return null;{const o=Ur(t.visibleWrites,s);return lh(o)?i.getChild(n):Ds(o,i.getChild(n))}}function ET(t,e,n,r){const i=We(e,n),s=Ui(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ur(t.visibleWrites,i);return Ds(o,r.getNode().getImmediateChild(n))}else return null}function ST(t,e){return Ui(t.visibleWrites,e)}function CT(t,e,n,r,i,s,o){let a;const l=Ur(t.visibleWrites,e),u=Ui(l,he());if(u!=null)a=u;else if(n!=null)a=Ds(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=d.getNext();for(;m&&c.length<i;)f(m,r)!==0&&c.push(m),m=d.getNext();return c}else return[]}function kT(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function zu(t,e,n,r){return w1(t.writeTree,t.treePath,e,n,r)}function Xp(t,e){return _T(t.writeTree,t.treePath,e)}function Ov(t,e,n,r){return wT(t.writeTree,t.treePath,e,n,r)}function Vu(t,e){return ST(t.writeTree,We(t.treePath,e))}function IT(t,e,n,r,i,s){return CT(t.writeTree,t.treePath,e,n,r,i,s)}function Jp(t,e,n){return ET(t.writeTree,t.treePath,e,n)}function E1(t,e){return S1(We(t.treePath,e),t.writeTree)}function S1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ca(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,As(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fa(r,e.snapshotNode,i.oldSnap));else throw Ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const C1=new xT;class Zp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pi(this.viewCache_),s=IT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){return{filter:t}}function PT(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function NT(t,e,n,r,i){const s=new bT;let o,a;if(n.type===mn.OVERWRITE){const u=n;u.source.fromUser?o=uh(t,e,u.path,u.snap,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=Bu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===mn.MERGE){const u=n;u.source.fromUser?o=AT(t,e,u.path,u.children,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ch(t,e,u.path,u.children,r,i,a,s))}else if(n.type===mn.ACK_USER_WRITE){const u=n;u.revert?o=MT(t,e,u.path,r,i,s):o=OT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mn.LISTEN_COMPLETE)o=DT(t,e,n.path,r,s);else throw Ws("Unknown operation type: "+n.type);const l=s.getChanges();return RT(e,o,l),{viewCache:o,changes:l}}function RT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ju(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(m1(ju(e)))}}function k1(t,e,n,r,i,s){const o=e.eventCache;if(Vu(r,n)!=null)return e;{let a,l;if(le(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pi(e),c=u instanceof X?u:X.EMPTY_NODE,f=Xp(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=zu(r,Pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ie(n);if(u===".priority"){D(Br(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const f=Ov(r,n,c,l);f!=null?a=t.filter.updatePriority(c,f):a=o.getNode()}else{const c=ke(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Ov(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(u).updateChild(c,d):f=o.getNode().getImmediateChild(u)}else f=Jp(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,c,i,s):a=o.getNode()}}return Mo(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Bu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=ie(n);if(!l.isCompleteForPath(n)&&Br(n)>1)return e;const y=ke(n),k=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),k):u=c.updateChild(l.getNode(),m,k,y,C1,null)}const f=v1(e,u,l.isFullyInitialized()||le(n),c.filtersNodes()),d=new Zp(i,f,s);return k1(t,f,n,i,d,a)}function uh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Zp(i,e,s);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Mo(e,u,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Mo(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=ke(n),m=a.getNode().getImmediateChild(f);let y;if(le(d))y=r;else{const w=c.getCompleteChild(f);w!=null?Bp(d)===".priority"&&w.getChild(l1(d)).isEmpty()?y=w:y=w.updateChild(d,r):y=X.EMPTY_NODE}if(m.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),f,y,d,c,o);l=Mo(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Dv(t,e){return t.eventCache.isCompleteForChild(e)}function AT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=We(n,l);Dv(e,ie(c))&&(a=uh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=We(n,l);Dv(e,ie(c))||(a=uh(t,a,c,u,i,s,o))}),a}function Mv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ch(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;le(n)?u=r:u=new Ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),y=Mv(t,m,d);l=Bu(t,l,new _e(f),y,i,s,o,a)}}),u.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!m){const y=e.serverCache.getNode().getImmediateChild(f),w=Mv(t,y,d);l=Bu(t,l,new _e(f),w,i,s,o,a)}}),l}function OT(t,e,n,r,i,s,o){if(Vu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(le(n)){let u=new Ce(null);return l.getNode().forEachChild(vs,(c,f)=>{u=u.set(new _e(c),f)}),ch(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((c,f)=>{const d=We(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),ch(t,e,n,u,i,s,a,o)}}function DT(t,e,n,r,i){const s=e.serverCache,o=v1(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return k1(t,o,n,r,C1,i)}function MT(t,e,n,r,i,s){let o;if(Vu(r,n)!=null)return e;{const a=new Zp(r,e,i),l=e.eventCache.getNode();let u;if(le(n)||ie(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=zu(r,Pi(e));else{const f=e.serverCache.getNode();D(f instanceof X,"serverChildren would be complete if leaf node"),c=Xp(r,f)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ie(n);let f=Jp(r,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=t.filter.updateChild(l,c,f,ke(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,X.EMPTY_NODE,ke(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zu(r,Pi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Vu(r,he())!=null,Mo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Gp(r.getIndex()),s=eT(r);this.processor_=TT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),c=new Wr(l,o.isFullyInitialized(),i.filtersNodes()),f=new Wr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bc(f,c),this.eventGenerator_=new aT(this.query_)}get query(){return this.query_}}function FT(t){return t.viewCache_.serverCache.getNode()}function UT(t){return ju(t.viewCache_)}function jT(t,e){const n=Pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Lv(t){return t.eventRegistrations_.length===0}function zT(t,e){t.eventRegistrations_.push(e)}function Fv(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Uv(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(D(Pi(t.viewCache_),"We should always have a full cache before handling merges"),D(ju(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=NT(t.processor_,i,e,n,r);return PT(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,I1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function VT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(As(s,o))}),n.isFullyInitialized()&&r.push(m1(n.getNode())),I1(t,r,n.getNode(),e)}function I1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return lT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;class b1{constructor(){this.views=new Map}}function BT(t){D(!Wu,"__referenceConstructor has already been defined"),Wu=t}function WT(){return D(Wu,"Reference.ts has not been loaded"),Wu}function $T(t){return t.views.size===0}function em(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),Uv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Uv(o,e,n,r));return s}}function x1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=zu(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=Xp(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=bc(new Wr(a,l,!1),new Wr(r,i,!1));return new LT(e,u)}return o}function HT(t,e,n,r,i,s){const o=x1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zT(o,n),VT(o,n)}function GT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=$r(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Fv(u,n,r)),Lv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Fv(l,n,r)),Lv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!$r(t)&&s.push(new(WT())(e._repo,e._path)),{removed:s,events:o}}function T1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jr(t,e){let n=null;for(const r of t.views.values())n=n||jT(r,e);return n}function P1(t,e){if(e._queryParams.loadsAllData())return Tc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function N1(t,e){return P1(t,e)!=null}function $r(t){return Tc(t)!=null}function Tc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;function YT(t){D(!$u,"__referenceConstructor has already been defined"),$u=t}function KT(){return D($u,"Reference.ts has not been loaded"),$u}let qT=1;class jv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=kT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function R1(t,e,n,r,i){return dT(t.pendingWriteTree_,e,n,r,i),i?Ys(t,new Ti(Kp(),e,n)):[]}function QT(t,e,n,r){hT(t.pendingWriteTree_,e,n,r);const i=Ce.fromObject(n);return Ys(t,new Os(Kp(),e,i))}function Cr(t,e,n=!1){const r=pT(t.pendingWriteTree_,e);if(mT(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(he(),!0):pt(r.children,o=>{s=s.set(new _e(o),!0)}),Ys(t,new Uu(r.path,s,n))}else return[]}function La(t,e,n){return Ys(t,new Ti(qp(),e,n))}function XT(t,e,n){const r=Ce.fromObject(n);return Ys(t,new Os(qp(),e,r))}function JT(t,e){return Ys(t,new ha(qp(),e))}function ZT(t,e,n){const r=nm(t,n);if(r){const i=rm(r),s=i.path,o=i.queryId,a=Ct(s,e),l=new ha(Qp(o),a);return im(t,s,l)}else return[]}function Hu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||N1(o,e))){const l=GT(o,e,n,r);$T(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,m)=>$r(m));if(c&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=nP(d);for(let y=0;y<m.length;++y){const w=m[y],k=w.query,v=M1(t,w);t.listenProvider_.startListening(Fo(k),pa(t,k),v.hashFn,v.onComplete)}}}!f&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Fo(e),null):u.forEach(d=>{const m=t.queryToTagMap.get(Pc(d));t.listenProvider_.stopListening(Fo(d),m)}))}rP(t,u)}return a}function A1(t,e,n,r){const i=nm(t,r);if(i!=null){const s=rm(i),o=s.path,a=s.queryId,l=Ct(o,e),u=new Ti(Qp(a),l,n);return im(t,o,u)}else return[]}function eP(t,e,n,r){const i=nm(t,r);if(i){const s=rm(i),o=s.path,a=s.queryId,l=Ct(o,e),u=Ce.fromObject(n),c=new Os(Qp(a),l,u);return im(t,o,c)}else return[]}function fh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const y=Ct(d,i);s=s||jr(m,y),o=o||$r(m)});let a=t.syncPointTree_.get(i);a?(o=o||$r(a),s=s||jr(a,he())):(a=new b1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const w=jr(y,he());w&&(s=s.updateImmediateChild(m,w))}));const u=N1(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Pc(e);D(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=iP();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const c=xc(t.pendingWriteTree_,i);let f=HT(a,e,n,c,s,l);if(!u&&!o&&!r){const d=P1(a,e);f=f.concat(sP(t,e,d))}return f}function tm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ct(o,e),u=jr(a,l);if(u)return u});return w1(i,e,s,n,!0)}function tP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const f=Ct(u,n);r=r||jr(c,f)});let i=t.syncPointTree_.get(n);i?r=r||jr(i,he()):(i=new b1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Wr(r,!0,!1):null,a=xc(t.pendingWriteTree_,e._path),l=x1(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return UT(l)}function Ys(t,e){return O1(e,t.syncPointTree_,null,xc(t.pendingWriteTree_,he()))}function O1(t,e,n,r){if(le(t.path))return D1(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=jr(i,he()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=E1(r,o);s=s.concat(O1(a,l,u,c))}return i&&(s=s.concat(em(i,t,r,n))),s}}function D1(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=jr(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=E1(r,o),c=t.operationForChild(o);c&&(s=s.concat(D1(c,a,l,u)))}),i&&(s=s.concat(em(i,t,r,n))),s}function M1(t,e){const n=e.query,r=pa(t,n);return{hashFn:()=>(FT(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ZT(t,n._path,r):JT(t,n._path);{const s=Jb(i,n);return Hu(t,n,null,s)}}}}function pa(t,e){const n=Pc(e);return t.queryToTagMap.get(n)}function Pc(t){return t._path.toString()+"$"+t._queryIdentifier}function nm(t,e){return t.tagToQueryMap.get(e)}function rm(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function im(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=xc(t.pendingWriteTree_,e);return em(r,n,i,null)}function nP(t){return t.fold((e,n,r)=>{if(n&&$r(n))return[Tc(n)];{let i=[];return n&&(i=T1(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function Fo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(KT())(t._repo,t._path):t}function rP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Pc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function iP(){return qT++}function sP(t,e,n){const r=e._path,i=pa(t,e),s=M1(t,n),o=t.listenProvider_.startListening(Fo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)D(!$r(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,f)=>{if(!le(u)&&c&&$r(c))return[Tc(c).query];{let d=[];return c&&(d=d.concat(T1(c).map(m=>m.query))),pt(f,(m,y)=>{d=d.concat(y)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Fo(c),pa(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sm(n)}node(){return this.node_}}class om{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new om(this.syncTree_,n)}node(){return tm(this.syncTree_,this.path_)}}const oP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zv=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lP(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},lP=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},L1=function(t,e,n,r){return am(e,new om(n,t),r)},F1=function(t,e,n){return am(t,new sm(e),n)};function am(t,e,n){const r=t.getPriority().val(),i=zv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=zv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new st(a,et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new st(i))),o.forEachChild($e,(a,l)=>{const u=am(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function um(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=ie(n);for(;i!==null;){const s=Ps(r.node.children,i)||{children:{},childCount:0};r=new lm(i,r,s),n=ke(n),i=ie(n)}return r}function Ks(t){return t.node.value}function U1(t,e){t.node.value=e,dh(t)}function j1(t){return t.node.childCount>0}function uP(t){return Ks(t)===void 0&&!j1(t)}function Nc(t,e){pt(t.node.children,(n,r)=>{e(new lm(n,t,r))})}function z1(t,e,n,r){n&&!r&&e(t),Nc(t,i=>{z1(i,e,!0,r)}),n&&r&&e(t)}function cP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Fa(t){return new _e(t.parent===null?t.name:Fa(t.parent)+"/"+t.name)}function dh(t){t.parent!==null&&fP(t.parent,t.name,t)}function fP(t,e,n){const r=uP(n),i=An(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,dh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=/[\[\].#$\/\u0000-\u001F\u007F]/,hP=/[\[\].#$\u0000-\u001F\u007F]/,jf=10*1024*1024,cm=function(t){return typeof t=="string"&&t.length!==0&&!dP.test(t)},V1=function(t){return typeof t=="string"&&t.length!==0&&!hP.test(t)},pP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),V1(t)},mP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Fp(t)||t&&typeof t=="object"&&An(t,".sv")},gP=function(t,e,n,r){r&&e===void 0||Rc(Cc(t,"value"),e,n)},Rc=function(t,e,n){const r=n instanceof _e?new Ax(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(r));if(typeof e=="function")throw new Error(t+"contains a function "+si(r)+" with contents = "+e.toString());if(Fp(e))throw new Error(t+"contains "+e.toString()+" "+si(r));if(typeof e=="string"&&e.length>jf/3&&kc(e)>jf)throw new Error(t+"contains a string greater than "+jf+" utf8 bytes "+si(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!cm(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ox(r,o),Rc(t,a,r),Dx(r)}),i&&s)throw new Error(t+' contains ".value" child '+si(r)+" in addition to actual children.")}},vP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ua(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!cm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Rx);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Xt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},yP=function(t,e,n,r){if(r&&e===void 0)return;const i=Cc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];pt(e,(o,a)=>{const l=new _e(o);if(Rc(i,a,We(n,l)),Bp(l)===".priority"&&!mP(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),vP(i,s)},B1=function(t,e,n,r){if(!(r&&n===void 0)&&!V1(n))throw new Error(Cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_P=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),B1(t,e,n,r)},wP=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},EP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pP(n))throw new Error(Cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ac(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Wp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function W1(t,e,n){Ac(t,n),$1(t,r=>Wp(r,e))}function tn(t,e,n){Ac(t,n),$1(t,r=>Xt(r,e)||Xt(e,r))}function $1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(CP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yi&&ft("event: "+n.toString()),Gs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="repo_interrupt",IP=25;class bP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fu(),this.transactionQueueTree_=new lm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xP(t,e,n){if(t.stats_=zp(t.repoInfo_),t.forceRestClient_||nx())t.server_=new Lu(t.repoInfo_,(r,i,s,o)=>{Vv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yn(t.repoInfo_,e,(r,i,s,o)=>{Vv(t,r,i,s,o)},r=>{Bv(t,r)},r=>{PP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ax(t.repoInfo_,()=>new oT(t.stats_,t.server_)),t.infoData_=new tT,t.infoSyncTree_=new jv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=La(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fm(t,"connected",!1),t.serverSyncTree_=new jv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);tn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function TP(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oc(t){return oP({timestamp:TP(t)})}function Vv(t,e,n,r,i){t.dataUpdateCount++;const s=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Nu(n,u=>et(u));o=eP(t.serverSyncTree_,s,l,i)}else{const l=et(n);o=A1(t.serverSyncTree_,s,l,i)}else if(r){const l=Nu(n,u=>et(u));o=XT(t.serverSyncTree_,s,l)}else{const l=et(n);o=La(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ms(t,s)),tn(t.eventQueue_,a,o)}function Bv(t,e){fm(t,"connected",e),e===!1&&OP(t)}function PP(t,e){pt(e,(n,r)=>{fm(t,n,r)})}function fm(t,e,n){const r=new _e("/.info/"+e),i=et(n);t.infoData_.updateSnapshot(r,i);const s=La(t.infoSyncTree_,r,i);tn(t.eventQueue_,r,s)}function dm(t){return t.nextWriteId_++}function NP(t,e,n){const r=tP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=et(i).withIndex(e._queryParams.getIndex());fh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=La(t.serverSyncTree_,e._path,s);else{const a=pa(t.serverSyncTree_,e);o=A1(t.serverSyncTree_,e._path,s,a)}return tn(t.eventQueue_,e._path,o),Hu(t.serverSyncTree_,e,n,null,!0),s},i=>(Ua(t,"get for query "+tt(e)+" failed: "+i),Promise.reject(new Error(i))))}function RP(t,e,n,r,i){Ua(t,"set",{path:e.toString(),value:n,priority:r});const s=Oc(t),o=et(n,r),a=tm(t.serverSyncTree_,e),l=F1(o,a,s),u=dm(t),c=R1(t.serverSyncTree_,e,l,u,!0);Ac(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const y=d==="ok";y||It("set at "+e+" failed: "+d);const w=Cr(t.serverSyncTree_,u,!y);tn(t.eventQueue_,e,w),hh(t,i,d,m)});const f=pm(t,e);Ms(t,f),tn(t.eventQueue_,f,[])}function AP(t,e,n,r){Ua(t,"update",{path:e.toString(),value:n});let i=!0;const s=Oc(t),o={};if(pt(n,(a,l)=>{i=!1,o[a]=L1(We(e,a),et(l),t.serverSyncTree_,s)}),i)ft("update() called with empty data.  Don't do anything."),hh(t,r,"ok",void 0);else{const a=dm(t),l=QT(t.serverSyncTree_,e,o,a);Ac(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const f=u==="ok";f||It("update at "+e+" failed: "+u);const d=Cr(t.serverSyncTree_,a,!f),m=d.length>0?Ms(t,e):e;tn(t.eventQueue_,m,d),hh(t,r,u,c)}),pt(n,u=>{const c=pm(t,We(e,u));Ms(t,c)}),tn(t.eventQueue_,e,[])}}function OP(t){Ua(t,"onDisconnectEvents");const e=Oc(t),n=Fu();sh(t.onDisconnect_,he(),(i,s)=>{const o=L1(i,s,t.serverSyncTree_,e);g1(n,i,o)});let r=[];sh(n,he(),(i,s)=>{r=r.concat(La(t.serverSyncTree_,i,s));const o=pm(t,i);Ms(t,o)}),t.onDisconnect_=Fu(),tn(t.eventQueue_,he(),r)}function DP(t,e,n){let r;ie(e._path)===".info"?r=fh(t.infoSyncTree_,e,n):r=fh(t.serverSyncTree_,e,n),W1(t.eventQueue_,e._path,r)}function Wv(t,e,n){let r;ie(e._path)===".info"?r=Hu(t.infoSyncTree_,e,n):r=Hu(t.serverSyncTree_,e,n),W1(t.eventQueue_,e._path,r)}function MP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kP)}function Ua(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function hh(t,e,n,r){e&&Gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function H1(t,e,n){return tm(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function hm(t,e=t.transactionQueueTree_){if(e||Dc(t,e),Ks(e)){const n=Y1(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&LP(t,Fa(e),n)}else j1(e)&&Nc(e,n=>{hm(t,n)})}function LP(t,e,n){const r=n.map(u=>u.currentWriteId),i=H1(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];D(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=Ct(e,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ua(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Cr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Dc(t,um(t.transactionQueueTree_,e)),hm(t,t.transactionQueueTree_),tn(t.eventQueue_,e,c);for(let d=0;d<f.length;d++)Gs(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Ms(t,e)}},o)}function Ms(t,e){const n=G1(t,e),r=Fa(n),i=Y1(t,n);return FP(t,i,r),r}function FP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ct(n,l.path);let c=!1,f;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,i=i.concat(Cr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=IP)c=!0,f="maxretry",i=i.concat(Cr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=H1(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){Rc("transaction failed: Data returned ",m,l.path);let y=et(m);typeof m=="object"&&m!=null&&An(m,".priority")||(y=y.updatePriority(d.getPriority()));const k=l.currentWriteId,v=Oc(t),h=F1(y,d,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=dm(t),o.splice(o.indexOf(k),1),i=i.concat(R1(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Cr(t.serverSyncTree_,k,!0))}else c=!0,f="nodata",i=i.concat(Cr(t.serverSyncTree_,l.currentWriteId,!0))}tn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Dc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Gs(r[a]);hm(t,t.transactionQueueTree_)}function G1(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ks(r)===void 0;)r=um(r,n),e=ke(e),n=ie(e);return r}function Y1(t,e){const n=[];return K1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function K1(t,e,n){const r=Ks(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Nc(e,i=>{K1(t,i,n)})}function Dc(t,e){const n=Ks(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,U1(e,n.length>0?n:void 0)}Nc(e,r=>{Dc(t,r)})}function pm(t,e){const n=Fa(G1(t,e)),r=um(t.transactionQueueTree_,e);return cP(r,i=>{zf(t,i)}),zf(t,r),z1(r,i=>{zf(t,i)}),n}function zf(t,e){const n=Ks(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Cr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?U1(e,void 0):n.length=s+1,tn(t.eventQueue_,Fa(e),i);for(let o=0;o<r.length;o++)Gs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const $v=function(t,e){const n=zP(t),r=n.namespace;n.domain==="firebase.com"&&Zn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},zP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=UP(t.substring(c,f)));const d=jP(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class Q1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:Bp(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=Pv(this._queryParams),n=Up(e);return n==="{}"?"default":n}get _queryObject(){return Pv(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof mm))return!1;const n=this._repo===e._repo,r=Wp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nx(this._path)}}class On extends mm{constructor(e,n){super(e,n,new Yp,!1)}get parent(){const e=l1(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=ma(this.ref,e);return new Ls(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ls(i,ma(this.ref,r),$e)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ft(t,e){return t=Tt(t),t._checkNotDeleted("ref"),e!==void 0?ma(t._root,e):t._root}function ma(t,e){return t=Tt(t),ie(t._path)===null?_P("child","path",e,!1):B1("child","path",e,!1),new On(t._repo,We(t._path,e))}function Co(t,e){t=Tt(t),wP("set",t._path),gP("set",e,t._path,!1);const n=new Ra;return RP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hv(t,e){yP("update",e,t._path,!1);const n=new Ra;return AP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function VP(t){t=Tt(t);const e=new X1(()=>{}),n=new Mc(e);return NP(t._repo,t,n).then(r=>new Ls(r,new On(t._repo,t._path),t._queryParams.getIndex()))}class Mc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new q1("value",this,new Ls(e.snapshotNode,new On(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Q1(this,e,n):null}matches(e){return e instanceof Mc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Q1(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const r=ma(new On(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new q1(e.type,this,new Ls(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function BP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,f)=>{Wv(t._repo,t,a),l(c,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new X1(n,s||void 0),a=e==="value"?new Mc(o):new gm(e,o);return DP(t._repo,t,a),()=>Wv(t._repo,t,a)}function Uo(t,e,n,r){return BP(t,"value",e,n,r)}function J1(t,...e){let n=Tt(t);for(const r of e)n=r._apply(n);return n}BT(On);YT(On);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="FIREBASE_DATABASE_EMULATOR_HOST",ph={};let $P=!1;function HP(t,e,n,r){t.repoInfo_=new Zw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function GP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$v(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[WP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=$v(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new gs(gs.OWNER):new ix(t.name,t.options,e);EP("Invalid Firebase Database URL",o),le(o.path)||Zn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=KP(a,t,c,new rx(t.name,n));return new qP(f,t)}function YP(t,e){const n=ph[e];(!n||n[t.key]!==t)&&Zn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),MP(t),delete n[t.key]}function KP(t,e,n,r){let i=ph[e.name];i||(i={},ph[e.name]=i);let s=i[t.toURLString()];return s&&Zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new bP(t,$P,n,r),i[t.toURLString()]=s,s}class qP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zn("Cannot call "+e+" on a deleted database.")}}function Z1(t=Lw(),e){const n=Lp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=_I("database");r&&QP(n,...r)}return n}function QP(t,e,n,r={}){t=Tt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new gs(gs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:wI(r.mockUserToken,t.app.options.projectId);s=new gs(o)}HP(i,e,n,s)}/**
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
 */function XP(t){Bb(Hs),Ns(new Ii("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return GP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Fr(dv,hv,t),Fr(dv,hv,"esm2017")}Yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XP();function vm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function eE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=eE,tE=new Aa("auth","Firebase",eE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Dp("@firebase/auth");function ZP(t,...e){Gu.logLevel<=ye.WARN&&Gu.warn(`Auth (${Hs}): ${t}`,...e)}function ql(t,...e){Gu.logLevel<=ye.ERROR&&Gu.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,...e){throw ym(t,...e)}function Pn(t,...e){return ym(t,...e)}function nE(t,e,n){const r=Object.assign(Object.assign({},JP()),{[e]:n});return new Aa("auth","Firebase",r).create(e,{appName:t.name})}function eN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rn(t,"argument-error"),nE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tE.create(t,...e)}function ne(t,e,...n){if(!t)throw ym(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function er(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tN(){return Gv()==="http:"||Gv()==="https:"}function Gv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tN()||EI()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=Op()||Nw()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new ja(3e4,6e4);function iE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function za(t,e,n,r,i={}){return sE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rE.fetch()(oE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iN),e);try{const i=new aN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nE(t,c,u);Rn(t,c)}}catch(i){if(i instanceof Xr)throw i;Rn(t,"network-request-failed",{message:String(i)})}}async function oN(t,e,n,r,i={}){const s=await za(t,e,n,r,i);return"mfaPendingCredential"in s&&Rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_m(t.config,i):`${t.config.apiScheme}://${i}`}class aN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),sN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){return za(t,"POST","/v1/accounts:delete",e)}async function uN(t,e){return za(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),i=wm(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(Vf(i.auth_time)),issuedAtTime:jo(Vf(i.iat)),expirationTime:jo(Vf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vf(t){return Number(t)*1e3}function wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pu(n);return i?JSON.parse(i):(ql("Failed to decode base64 JWT payload"),null)}catch(i){return ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fN(t){const e=wm(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xr&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ga(t,uN(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gN(s.providerUserInfo):[],a=mN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function pN(t){const e=Tt(t);await Yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gN(t){return t.map(e=>{var{providerId:n}=e,r=vm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,e){const n=await sE(t,{},async()=>{const r=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new va;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new va,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ga(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ga(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:E,providerData:T,stsTokenManager:N}=n;ne(g&&N,e,"internal-error");const M=va.fromJSON(this.name,N);ne(typeof g=="string",e,"internal-error"),dr(f,e.name),dr(d,e.name),ne(typeof p=="boolean",e,"internal-error"),ne(typeof E=="boolean",e,"internal-error"),dr(m,e.name),dr(y,e.name),dr(w,e.name),dr(k,e.name),dr(v,e.name),dr(h,e.name);const W=new _i({uid:g,auth:e,email:d,emailVerified:p,displayName:f,isAnonymous:E,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:M,createdAt:v,lastLoginAt:h});return T&&Array.isArray(T)&&(W.providerData=T.map(U=>Object.assign({},U))),k&&(W._redirectEventId=k),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new va;i.updateFromServerResponse(n);const s=new _i({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new Map;function Hn(t){er(t instanceof Function,"Expected a class definition");let e=Yv.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yv.set(t,e),e)}/**
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
 */class lE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lE.type="NONE";const Kv=lE;/**
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
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(Hn(Kv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Hn(Kv);const o=Ql(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=_i._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ys(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ys(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hE(e))return"Blackberry";if(pE(e))return"Webos";if(Em(e))return"Safari";if((e.includes("chrome/")||cE(e))&&!e.includes("edge/"))return"Chrome";if(dE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uE(t=wt()){return/firefox\//i.test(t)}function Em(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cE(t=wt()){return/crios\//i.test(t)}function fE(t=wt()){return/iemobile/i.test(t)}function dE(t=wt()){return/android/i.test(t)}function hE(t=wt()){return/blackberry/i.test(t)}function pE(t=wt()){return/webos/i.test(t)}function Lc(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yN(t=wt()){var e;return Lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _N(){return SI()&&document.documentMode===10}function mE(t=wt()){return Lc(t)||dE(t)||pE(t)||hE(t)||/windows phone/i.test(t)||fE(t)}function wN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t,e=[]){let n;switch(t){case"Browser":n=qv(wt());break;case"Worker":n=`${qv(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${r}`}/**
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
 */class EN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SN(t,e={}){return za(t,"GET","/v2/passwordPolicy",iE(t,e))}/**
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
 */const CN=6;class kN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new EN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Tt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SN(this),n=new kN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fc(t){return Tt(t)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=RI(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bN().appendChild(r)})}function TN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t,e){const n=Lp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ru(s,e??{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function NN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RN(t,e,n){const r=Fc(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vE(e),{host:o,port:a}=AN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ON()}function vE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AN(t){const e=vE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xv(o)}}}function Xv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ON(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return oN(t,"POST","/v1/accounts:signInWithIdp",iE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="http://localhost";class Ni extends yE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:DN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Va extends Sm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Va{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Va{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Va{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _i._fromIdTokenResponse(e,r,i),o=Jv(r);return new Fs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jv(r);return new Fs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Xr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ku(e,n,r,i)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(t,s,e,r):s})}async function MN(t,e,n=!1){const r=await ga(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fs._forOperation(t,"link",r)}/**
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
 */async function LN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ga(t,_E(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=wm(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),Fs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e,n=!1){const r="signIn",i=await _E(t,r,e),s=await Fs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function UN(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function jN(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function wE(t,e,n,r){return Tt(t).onAuthStateChanged(e,n,r)}function zN(t){return Tt(t).signOut()}const qu="__sak";/**
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
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){const t=wt();return Em(t)||Lc(t)}const BN=1e3,WN=10;class SE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VN()&&wN(),this.fallbackToPolling=mE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_N()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}SE.type="LOCAL";const $N=SE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CE.type="SESSION";const kE=CE;/**
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
 */function HN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await HN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function YN(t){Nn().location.href=t}/**
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
 */function IE(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function KN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QN(){return IE()?self:null}/**
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
 */const bE="firebaseLocalStorageDb",XN=1,Qu="firebaseLocalStorage",xE="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([Qu],e?"readwrite":"readonly").objectStore(Qu)}function JN(){const t=indexedDB.deleteDatabase(bE);return new Ba(t).toPromise()}function gh(){const t=indexedDB.open(bE,XN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qu,{keyPath:xE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qu)?e(r):(r.close(),await JN(),e(await gh()))})})}async function Zv(t,e,n){const r=jc(t,!0).put({[xE]:e,value:n});return new Ba(r).toPromise()}async function ZN(t,e){const n=jc(t,!1).get(e),r=await new Ba(n).toPromise();return r===void 0?null:r.value}function ey(t,e){const n=jc(t,!0).delete(e);return new Ba(n).toPromise()}const eR=800,tR=3;class TE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(QN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KN(),!this.activeServiceWorker)return;this.sender=new GN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gh();return await Zv(e,qu,"1"),await ey(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new Ba(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TE.type="LOCAL";const nR=TE;new ja(3e4,6e4);/**
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
 */function PE(t,e){return e?Hn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class km extends yE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rR(t){return FN(t.auth,new km(t),t.bypassAuthState)}function iR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),LN(n,new km(t),t.bypassAuthState)}async function sR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),MN(n,new km(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rR;case"linkViaPopup":case"linkViaRedirect":return sR;case"reauthViaPopup":case"reauthViaRedirect":return iR;default:Rn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new ja(2e3,1e4);async function aR(t,e,n){const r=Fc(t);eN(t,e,Sm);const i=PE(r,n);return new ci(r,"signInViaPopup",e,i).executeNotNull()}class ci extends NE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oR.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="pendingRedirect",Xl=new Map;class uR extends NE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await cR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cR(t,e){const n=hR(e),r=dR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fR(t,e){Xl.set(t._key(),e)}function dR(t){return Hn(t._redirectPersistence)}function hR(t){return Ql(lR,t.config.apiKey,t.name)}async function pR(t,e,n=!1){const r=Fc(t),i=PE(r,e),o=await new uR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=10*60*1e3;class gR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ty(e))}saveEventToCache(e){this.cachedEventUids.add(ty(e)),this.lastProcessedEventTime=Date.now()}}function ty(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e={}){return za(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wR=/^https?/;async function ER(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yR(t);for(const n of e)try{if(SR(n))return}catch{}Rn(t,"unauthorized-domain")}function SR(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wR.test(n))return!1;if(_R.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CR=new ja(3e4,6e4);function ny(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kR(t){return new Promise((e,n)=>{var r,i,s;function o(){ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ny(),n(Pn(t,"network-request-failed"))},timeout:CR.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=TN("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},xN(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function IR(t){return Jl=Jl||kR(t),Jl}/**
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
 */const bR=new ja(5e3,15e3),xR="__/auth/iframe",TR="emulator/auth/iframe",PR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_m(e,TR):`https://${t.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:t.name,v:Hs},i=NR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$s(r).slice(1)}`}async function AR(t){const e=await IR(t),n=Nn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:RR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},bR.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const OR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DR=500,MR=600,LR="_blank",FR="http://localhost";class ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UR(t,e,n,r=DR,i=MR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=wt().toLowerCase();n&&(a=cE(u)?LR:n),uE(u)&&(e=e||FR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(yN(u)&&a!=="_self")return jR(e||"",a),new ry(null);const f=window.open(e||"",a,c);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new ry(f)}function jR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zR="__/auth/handler",VR="emulator/auth/handler",BR=encodeURIComponent("fac");async function iy(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hs,eventId:i};if(e instanceof Sm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Va){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${BR}=${encodeURIComponent(l)}`:"";return`${WR(t)}?${$s(a).slice(1)}${u}`}function WR({config:t}){return t.emulator?_m(t,VR):`https://${t.authDomain}/${zR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="webStorageSupport";class $R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kE,this._completeRedirectFn=pR,this._overrideRedirectResult=fR}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await iy(e,n,r,mh(),i);return UR(e,o,Cm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await iy(e,n,r,mh(),i);return YN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AR(e),r=new gR(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bf,{type:Bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bf];o!==void 0&&n(!!o),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ER(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mE()||Em()||Lc()}}const HR=$R;var sy="@firebase/auth",oy="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KR(t){Ns(new Ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gE(t)},u=new IN(r,i,s,l);return NN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ns(new Ii("auth-internal",e=>{const n=Fc(e.getProvider("auth").getImmediate());return(r=>new GR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fr(sy,oy,YR(t)),Fr(sy,oy,"esm2017")}/**
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
 */const qR=5*60,QR=Pw("authIdTokenMaxAge")||qR;let ay=null;const XR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QR)return;const i=n==null?void 0:n.token;ay!==i&&(ay=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JR(t=Lw()){const e=Lp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PN(t,{popupRedirectResolver:HR,persistence:[nR,$N,kE]}),r=Pw("authTokenSyncURL");if(r){const s=XR(r);jN(n,s,()=>s(n.currentUser)),UN(n,o=>s(o))}const i=xw("auth");return i&&RN(n,`http://${i}`),n}KR("Browser");const ZR={apiKey:"AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",authDomain:"portfoliosettlements.firebaseapp.com",projectId:"portfoliosettlements",storageBucket:"portfoliosettlements.appspot.com",messagingSenderId:"476678319901",appId:"1:476678319901:web:6956f285d3fcd21a937bf4",measurementId:"G-5LS5T94WQZ",databaseURL:"https://portfoliosettlements-default-rtdb.firebaseio.com/"},AE=Mw(ZR),eA=Z1(AE),tA=Ft(Z1()),Kt=eA,Ri=JR(AE);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var qe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qe||(qe={}));const ly="popstate";function nA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ya("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ai(i)}return iA(e,n,null,t)}function ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Us(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rA(){return Math.random().toString(36).substr(2,8)}function uy(t,e){return{usr:t.state,key:t.key,idx:e}}function ya(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sr(e):e,{state:n,key:e&&e.key||r||rA()})}function Ai(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function sr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=qe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=qe.Pop;let k=c(),v=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:v})}function d(k,v){a=qe.Push;let h=ya(w.location,k,v);n&&n(h,k),u=c()+1;let g=uy(h,u),p=w.createHref(h);try{o.pushState(g,"",p)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(p)}s&&l&&l({action:a,location:w.location,delta:1})}function m(k,v){a=qe.Replace;let h=ya(w.location,k,v);n&&n(h,k),u=c();let g=uy(h,u),p=w.createHref(h);o.replaceState(g,"",p),s&&l&&l({action:a,location:w.location,delta:0})}function y(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:Ai(k);return ae(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let w={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ly,f),l=k,()=>{i.removeEventListener(ly,f),l=null}},createHref(k){return e(i,k)},createURL:y,encodeLocation(k){let v=y(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:m,go(k){return o.go(k)}};return w}var Ye;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ye||(Ye={}));const sA=new Set(["lazy","caseSensitive","path","id","index","children"]);function oA(t){return t.index===!0}function vh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ae(i.index!==!0||!i.children,"Cannot specify children on an index route"),ae(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),oA(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=vh(i.children,e,o,r)),l}})}function rs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?sr(e):e,i=qs(r.pathname||"/",n);if(i==null)return null;let s=OE(t);lA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=vA(s[a],wA(i));return o}function aA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function OE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),OE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:mA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of DE(s.path))i(s,o,l)}),e}function DE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=DE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uA=/^:\w+$/,cA=3,fA=2,dA=1,hA=10,pA=-2,cy=t=>t==="*";function mA(t,e){let n=t.split("/"),r=n.length;return n.some(cy)&&(r+=pA),e&&(r+=fA),n.filter(i=>!cy(i)).reduce((i,s)=>i+(uA.test(s)?cA:s===""?dA:hA),r)}function gA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:kA(Kn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function yA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_A(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=EA(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function _A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Us(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function wA(t){try{return decodeURI(t)}catch(e){return Us(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function EA(t,e){try{return decodeURIComponent(t)}catch(n){return Us(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function qs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?sr(t):t;return{pathname:n?n.startsWith("/")?n:CA(n,e):e,search:IA(r),hash:bA(i)}}function CA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Im(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=sr(t):(i=Fe({},t),ae(!i.pathname||!i.pathname.includes("?"),Wf("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Wf("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Wf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=SA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),kA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class bm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ME(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LE=["post","put","patch","delete"],xA=new Set(LE),TA=["get",...LE],PA=new Set(TA),NA=new Set([301,302,303,307,308]),RA=new Set([307,308]),$f={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},AA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},po={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},FE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OA=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function DA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ae(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let S=t.detectErrorBoundary;i=I=>({hasErrorBoundary:S(I)})}else i=OA;let s={},o=vh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,f=new Set,d=null,m=null,y=null,w=t.hydrationData!=null,k=rs(o,t.history.location,l),v=null;if(k==null){let S=$t(404,{pathname:t.history.location.pathname}),{matches:I,route:R}=yy(o);k=I,v={[R.id]:S}}let h=!k.some(S=>S.route.lazy)&&(!k.some(S=>S.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:k,initialized:h,navigation:$f,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},E=qe.Pop,T=!1,N,M=!1,W=!1,U=[],fe=[],G=new Map,Z=0,pe=-1,De=new Map,Ee=new Set,He=new Map,L=new Map,Y=new Map,J=!1;function Se(){return c=t.history.listen(S=>{let{action:I,location:R,delta:V}=S;if(J){J=!1;return}Us(Y.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let te=nl({currentLocation:p.location,nextLocation:R,historyAction:I});if(te&&V!=null){J=!0,t.history.go(V*-1),sn(te,{state:"blocked",location:R,proceed(){sn(te,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),t.history.go(V)},reset(){let ee=new Map(p.blockers);ee.set(te,po),me({blockers:ee})}});return}return rn(I,R)}),p.initialized||rn(qe.Pop,p.location),g}function Me(){c&&c(),f.clear(),N&&N.abort(),p.fetchers.forEach((S,I)=>P(I)),p.blockers.forEach((S,I)=>Re(I))}function ur(S){return f.add(S),()=>f.delete(S)}function me(S){p=Fe({},p,S),f.forEach(I=>I(p))}function nn(S,I){var R,V;let te=p.actionData!=null&&p.navigation.formMethod!=null&&cn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((R=S.state)==null?void 0:R._isRedirect)!==!0,ee;I.actionData?Object.keys(I.actionData).length>0?ee=I.actionData:ee=null:te?ee=p.actionData:ee=null;let re=I.loaderData?vy(p.loaderData,I.loaderData,I.matches||[],I.errors):p.loaderData,Q=p.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((Le,mt)=>Q.set(mt,po)));let q=T===!0||p.navigation.formMethod!=null&&cn(p.navigation.formMethod)&&((V=S.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),M||E===qe.Pop||(E===qe.Push?t.history.push(S,S.state):E===qe.Replace&&t.history.replace(S,S.state)),me(Fe({},I,{actionData:ee,loaderData:re,historyAction:E,location:S,initialized:!0,navigation:$f,revalidation:"idle",restoreScrollPosition:sl(S,I.matches||p.matches),preventScrollReset:q,blockers:Q})),E=qe.Pop,T=!1,M=!1,W=!1,U=[],fe=[]}async function Pt(S,I){if(typeof S=="number"){t.history.go(S);return}let R=yh(p.location,p.matches,l,u.v7_prependBasename,S,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:V,submission:te,error:ee}=fy(u.v7_normalizeFormMethod,!1,R,I),re=p.location,Q=ya(p.location,V,I&&I.state);Q=Fe({},Q,t.history.encodeLocation(Q));let q=I&&I.replace!=null?I.replace:void 0,Le=qe.Push;q===!0?Le=qe.Replace:q===!1||te!=null&&cn(te.formMethod)&&te.formAction===p.location.pathname+p.location.search&&(Le=qe.Replace);let mt=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,de=nl({currentLocation:re,nextLocation:Q,historyAction:Le});if(de){sn(de,{state:"blocked",location:Q,proceed(){sn(de,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),Pt(S,I)},reset(){let we=new Map(p.blockers);we.set(de,po),me({blockers:we})}});return}return await rn(Le,Q,{submission:te,pendingError:ee,preventScrollReset:mt,replace:I&&I.replace})}function Dn(){if(_(),me({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){rn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}rn(E||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function rn(S,I,R){N&&N.abort(),N=null,E=S,M=(R&&R.startUninterruptedRevalidation)===!0,il(p.location,p.matches),T=(R&&R.preventScrollReset)===!0;let V=a||o,te=R&&R.overrideNavigation,ee=rs(V,I,l);if(!ee){let we=$t(404,{pathname:I.pathname}),{matches:Ge,route:ei}=yy(V);Zr(),nn(I,{matches:Ge,loaderData:{},errors:{[ei.id]:we}});return}if(p.initialized&&!W&&jA(p.location,I)&&!(R&&R.submission&&cn(R.submission.formMethod))){nn(I,{matches:ee});return}N=new AbortController;let re=go(t.history,I,N.signal,R&&R.submission),Q,q;if(R&&R.pendingError)q={[is(ee).route.id]:R.pendingError};else if(R&&R.submission&&cn(R.submission.formMethod)){let we=await Xa(re,I,R.submission,ee,{replace:R.replace});if(we.shortCircuited)return;Q=we.pendingActionData,q=we.pendingActionError,te=Hf(I,R.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:Le,loaderData:mt,errors:de}=await Ja(re,I,ee,te,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,Q,q);Le||(N=null,nn(I,Fe({matches:ee},Q?{actionData:Q}:{},{loaderData:mt,errors:de})))}async function Xa(S,I,R,V,te){te===void 0&&(te={}),_();let ee=WA(I,R);me({navigation:ee});let re,Q=wh(V,I);if(!Q.route.action&&!Q.route.lazy)re={type:Ye.error,error:$t(405,{method:S.method,pathname:I.pathname,routeId:Q.route.id})};else if(re=await mo("action",S,Q,V,s,i,l),S.signal.aborted)return{shortCircuited:!0};if(ws(re)){let q;return te&&te.replace!=null?q=te.replace:q=re.location===p.location.pathname+p.location.search,await ji(p,re,{submission:R,replace:q}),{shortCircuited:!0}}if(zo(re)){let q=is(V,Q.route.id);return(te&&te.replace)!==!0&&(E=qe.Push),{pendingActionData:{},pendingActionError:{[q.route.id]:re.error}}}if(fi(re))throw $t(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:re.data}}}async function Ja(S,I,R,V,te,ee,re,Q,q){let Le=V||Hf(I,te),mt=te||ee||Ey(Le),de=a||o,[we,Ge]=dy(t.history,p,R,mt,I,W,U,fe,He,Ee,de,l,Q,q);if(Zr(ve=>!(R&&R.some(on=>on.route.id===ve))||we&&we.some(on=>on.route.id===ve)),pe=++Z,we.length===0&&Ge.length===0){let ve=O();return nn(I,Fe({matches:R,loaderData:{},errors:q||null},Q?{actionData:Q}:{},ve?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!M){Ge.forEach(on=>{let cr=p.fetchers.get(on.key),tf=vo(void 0,cr?cr.data:void 0);p.fetchers.set(on.key,tf)});let ve=Q||p.actionData;me(Fe({navigation:Le},ve?Object.keys(ve).length===0?{actionData:null}:{actionData:ve}:{},Ge.length>0?{fetchers:new Map(p.fetchers)}:{}))}Ge.forEach(ve=>{G.has(ve.key)&&j(ve.key),ve.controller&&G.set(ve.key,ve.controller)});let ei=()=>Ge.forEach(ve=>j(ve.key));N&&N.signal.addEventListener("abort",ei);let{results:ti,loaderResults:Zs,fetcherResults:Xc}=await Qc(p.matches,R,we,Ge,S);if(S.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",ei),Ge.forEach(ve=>G.delete(ve.key));let Mn=_y(ti);if(Mn){if(Mn.idx>=we.length){let ve=Ge[Mn.idx-we.length].key;Ee.add(ve)}return await ji(p,Mn.result,{replace:re}),{shortCircuited:!0}}let{loaderData:Ln,errors:al}=gy(p,R,we,Zs,q,Ge,Xc,L);L.forEach((ve,on)=>{ve.subscribe(cr=>{(cr||ve.done)&&L.delete(on)})});let Jc=O(),Zc=K(pe),ef=Jc||Zc||Ge.length>0;return Fe({loaderData:Ln,errors:al},ef?{fetchers:new Map(p.fetchers)}:{})}function Za(S){return p.fetchers.get(S)||AA}function el(S,I,R,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");G.has(S)&&j(S);let te=a||o,ee=yh(p.location,p.matches,l,u.v7_prependBasename,R,I,V==null?void 0:V.relative),re=rs(te,ee,l);if(!re){C(S,I,$t(404,{pathname:ee}));return}let{path:Q,submission:q,error:Le}=fy(u.v7_normalizeFormMethod,!0,ee,V);if(Le){C(S,I,Le);return}let mt=wh(re,Q);if(T=(V&&V.preventScrollReset)===!0,q&&cn(q.formMethod)){tl(S,I,Q,mt,re,q);return}He.set(S,{routeId:I,path:Q}),Ym(S,I,Q,mt,re,q)}async function tl(S,I,R,V,te,ee){if(_(),He.delete(S),!V.route.action&&!V.route.lazy){let Je=$t(405,{method:ee.formMethod,pathname:R,routeId:I});C(S,I,Je);return}let re=p.fetchers.get(S),Q=$A(ee,re);p.fetchers.set(S,Q),me({fetchers:new Map(p.fetchers)});let q=new AbortController,Le=go(t.history,R,q.signal,ee);G.set(S,q);let mt=Z,de=await mo("action",Le,V,te,s,i,l);if(Le.signal.aborted){G.get(S)===q&&G.delete(S);return}if(ws(de))if(G.delete(S),pe>mt){let Je=Wi(void 0);p.fetchers.set(S,Je),me({fetchers:new Map(p.fetchers)});return}else{Ee.add(S);let Je=vo(ee);return p.fetchers.set(S,Je),me({fetchers:new Map(p.fetchers)}),ji(p,de,{fetcherSubmission:ee})}if(zo(de)){C(S,I,de.error);return}if(fi(de))throw $t(400,{type:"defer-action"});let we=p.navigation.location||p.location,Ge=go(t.history,we,q.signal),ei=a||o,ti=p.navigation.state!=="idle"?rs(ei,p.navigation.location,l):p.matches;ae(ti,"Didn't find any matches after fetcher action");let Zs=++Z;De.set(S,Zs);let Xc=vo(ee,de.data);p.fetchers.set(S,Xc);let[Mn,Ln]=dy(t.history,p,ti,ee,we,W,U,fe,He,Ee,ei,l,{[V.route.id]:de.data},void 0);Ln.filter(Je=>Je.key!==S).forEach(Je=>{let eo=Je.key,Km=p.fetchers.get(eo),FS=vo(void 0,Km?Km.data:void 0);p.fetchers.set(eo,FS),G.has(eo)&&j(eo),Je.controller&&G.set(eo,Je.controller)}),me({fetchers:new Map(p.fetchers)});let al=()=>Ln.forEach(Je=>j(Je.key));q.signal.addEventListener("abort",al);let{results:Jc,loaderResults:Zc,fetcherResults:ef}=await Qc(p.matches,ti,Mn,Ln,Ge);if(q.signal.aborted)return;q.signal.removeEventListener("abort",al),De.delete(S),G.delete(S),Ln.forEach(Je=>G.delete(Je.key));let ve=_y(Jc);if(ve){if(ve.idx>=Mn.length){let Je=Ln[ve.idx-Mn.length].key;Ee.add(Je)}return ji(p,ve.result)}let{loaderData:on,errors:cr}=gy(p,p.matches,Mn,Zc,void 0,Ln,ef,L);if(p.fetchers.has(S)){let Je=Wi(de.data);p.fetchers.set(S,Je)}let tf=K(Zs);p.navigation.state==="loading"&&Zs>pe?(ae(E,"Expected pending action"),N&&N.abort(),nn(p.navigation.location,{matches:ti,loaderData:on,errors:cr,fetchers:new Map(p.fetchers)})):(me(Fe({errors:cr,loaderData:vy(p.loaderData,on,ti,cr)},tf||Ln.length>0?{fetchers:new Map(p.fetchers)}:{})),W=!1)}async function Ym(S,I,R,V,te,ee){let re=p.fetchers.get(S),Q=vo(ee,re?re.data:void 0);p.fetchers.set(S,Q),me({fetchers:new Map(p.fetchers)});let q=new AbortController,Le=go(t.history,R,q.signal);G.set(S,q);let mt=Z,de=await mo("loader",Le,V,te,s,i,l);if(fi(de)&&(de=await zE(de,Le.signal,!0)||de),G.get(S)===q&&G.delete(S),Le.signal.aborted)return;if(ws(de))if(pe>mt){let Ge=Wi(void 0);p.fetchers.set(S,Ge),me({fetchers:new Map(p.fetchers)});return}else{Ee.add(S),await ji(p,de);return}if(zo(de)){let Ge=is(p.matches,I);p.fetchers.delete(S),me({fetchers:new Map(p.fetchers),errors:{[Ge.route.id]:de.error}});return}ae(!fi(de),"Unhandled fetcher deferred data");let we=Wi(de.data);p.fetchers.set(S,we),me({fetchers:new Map(p.fetchers)})}async function ji(S,I,R){let{submission:V,fetcherSubmission:te,replace:ee}=R===void 0?{}:R;I.revalidate&&(W=!0);let re=ya(S.location,I.location,{_isRedirect:!0});if(ae(re,"Expected a location on the redirect navigation"),n){let we=!1;if(I.reloadDocument)we=!0;else if(FE.test(I.location)){const Ge=t.history.createURL(I.location);we=Ge.origin!==e.location.origin||qs(Ge.pathname,l)==null}if(we){ee?e.location.replace(I.location):e.location.assign(I.location);return}}N=null;let Q=ee===!0?qe.Replace:qe.Push,{formMethod:q,formAction:Le,formEncType:mt}=S.navigation;!V&&!te&&q&&Le&&mt&&(V=Ey(S.navigation));let de=V||te;if(RA.has(I.status)&&de&&cn(de.formMethod))await rn(Q,re,{submission:Fe({},de,{formAction:I.location}),preventScrollReset:T});else{let we=Hf(re,V);await rn(Q,re,{overrideNavigation:we,fetcherSubmission:te,preventScrollReset:T})}}async function Qc(S,I,R,V,te){let ee=await Promise.all([...R.map(q=>mo("loader",te,q,I,s,i,l)),...V.map(q=>q.matches&&q.match&&q.controller?mo("loader",go(t.history,q.path,q.controller.signal),q.match,q.matches,s,i,l):{type:Ye.error,error:$t(404,{pathname:q.path})})]),re=ee.slice(0,R.length),Q=ee.slice(R.length);return await Promise.all([wy(S,R,re,re.map(()=>te.signal),!1,p.loaderData),wy(S,V.map(q=>q.match),Q,V.map(q=>q.controller?q.controller.signal:null),!0)]),{results:ee,loaderResults:re,fetcherResults:Q}}function _(){W=!0,U.push(...Zr()),He.forEach((S,I)=>{G.has(I)&&(fe.push(I),j(I))})}function C(S,I,R){let V=is(p.matches,I);P(S),me({errors:{[V.route.id]:R},fetchers:new Map(p.fetchers)})}function P(S){let I=p.fetchers.get(S);G.has(S)&&!(I&&I.state==="loading"&&De.has(S))&&j(S),He.delete(S),De.delete(S),Ee.delete(S),p.fetchers.delete(S)}function j(S){let I=G.get(S);ae(I,"Expected fetch controller: "+S),I.abort(),G.delete(S)}function F(S){for(let I of S){let R=Za(I),V=Wi(R.data);p.fetchers.set(I,V)}}function O(){let S=[],I=!1;for(let R of Ee){let V=p.fetchers.get(R);ae(V,"Expected fetcher: "+R),V.state==="loading"&&(Ee.delete(R),S.push(R),I=!0)}return F(S),I}function K(S){let I=[];for(let[R,V]of De)if(V<S){let te=p.fetchers.get(R);ae(te,"Expected fetcher: "+R),te.state==="loading"&&(j(R),De.delete(R),I.push(R))}return F(I),I.length>0}function Ne(S,I){let R=p.blockers.get(S)||po;return Y.get(S)!==I&&Y.set(S,I),R}function Re(S){p.blockers.delete(S),Y.delete(S)}function sn(S,I){let R=p.blockers.get(S)||po;ae(R.state==="unblocked"&&I.state==="blocked"||R.state==="blocked"&&I.state==="blocked"||R.state==="blocked"&&I.state==="proceeding"||R.state==="blocked"&&I.state==="unblocked"||R.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+I.state);let V=new Map(p.blockers);V.set(S,I),me({blockers:V})}function nl(S){let{currentLocation:I,nextLocation:R,historyAction:V}=S;if(Y.size===0)return;Y.size>1&&Us(!1,"A router only supports one blocker at a time");let te=Array.from(Y.entries()),[ee,re]=te[te.length-1],Q=p.blockers.get(ee);if(!(Q&&Q.state==="proceeding")&&re({currentLocation:I,nextLocation:R,historyAction:V}))return ee}function Zr(S){let I=[];return L.forEach((R,V)=>{(!S||S(V))&&(R.cancel(),I.push(V),L.delete(V))}),I}function Js(S,I,R){if(d=S,y=I,m=R||null,!w&&p.navigation===$f){w=!0;let V=sl(p.location,p.matches);V!=null&&me({restoreScrollPosition:V})}return()=>{d=null,y=null,m=null}}function rl(S,I){return m&&m(S,I.map(V=>aA(V,p.loaderData)))||S.key}function il(S,I){if(d&&y){let R=rl(S,I);d[R]=y()}}function sl(S,I){if(d){let R=rl(S,I),V=d[R];if(typeof V=="number")return V}return null}function ol(S){s={},a=vh(S,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},initialize:Se,subscribe:ur,enableScrollRestoration:Js,navigate:Pt,fetch:el,revalidate:Dn,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:Za,deleteFetcher:P,dispose:Me,getBlocker:Ne,deleteBlocker:Re,_internalFetchControllers:G,_internalActiveDeferreds:L,_internalSetRoutes:ol},g}function MA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function yh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Im(i||".",zc(a).map(c=>c.pathnameBase),qs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!xm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Kn([n,u.pathname])),Ai(u)}function fy(t,e,n,r){if(!r||!MA(r))return{path:n};if(r.formMethod&&!BA(r.formMethod))return{path:n,error:$t(405,{method:r.formMethod})};let i=()=>({path:n,error:$t(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=jE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!cn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[w,k]=y;return""+m+w+"="+k+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!cn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}ae(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=_h(r.formData),u=r.formData;else if(r.body instanceof FormData)l=_h(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=my(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=my(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(cn(c.formMethod))return{path:n,submission:c};let f=sr(n);return e&&f.search&&xm(f.search)&&l.append("index",""),f.search="?"+l,{path:Ai(f),submission:c}}function LA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function dy(t,e,n,r,i,s,o,a,l,u,c,f,d,m){let y=m?Object.values(m)[0]:d?Object.values(d)[0]:void 0,w=t.createURL(e.location),k=t.createURL(i),v=m?Object.keys(m)[0]:void 0,g=LA(n,v).filter((E,T)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(FA(e.loaderData,e.matches[T],E)||o.some(W=>W===E.route.id))return!0;let N=e.matches[T],M=E;return hy(E,Fe({currentUrl:w,currentParams:N.params,nextUrl:k,nextParams:M.params},r,{actionResult:y,defaultShouldRevalidate:s||w.pathname+w.search===k.pathname+k.search||w.search!==k.search||UE(N,M)}))}),p=[];return l.forEach((E,T)=>{if(!n.some(fe=>fe.route.id===E.routeId))return;let N=rs(c,E.path,f);if(!N){p.push({key:T,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let M=e.fetchers.get(T),W=wh(N,E.path),U=!1;u.has(T)?U=!1:a.includes(T)?U=!0:M&&M.state!=="idle"&&M.data===void 0?U=s:U=hy(W,Fe({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:k,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),U&&p.push({key:T,routeId:E.routeId,path:E.path,matches:N,match:W,controller:new AbortController})}),[g,p]}function FA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function UE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function hy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function py(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ae(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Us(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!sA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function mo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,f=y=>{let w,k=new Promise((v,h)=>w=h);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),k])};try{let y=n.route[t];if(n.route.lazy)if(y){let w,k=await Promise.all([f(y).catch(v=>{w=v}),py(n.route,s,i)]);if(w)throw w;u=k[0]}else if(await py(n.route,s,i),y=n.route[t],y)u=await f(y);else if(t==="action"){let w=new URL(e.url),k=w.pathname+w.search;throw $t(405,{method:e.method,pathname:k,routeId:n.route.id})}else return{type:Ye.data,data:void 0};else if(y)u=await f(y);else{let w=new URL(e.url),k=w.pathname+w.search;throw $t(404,{pathname:k})}ae(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Ye.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(VA(u)){let y=u.status;if(NA.has(y)){let v=u.headers.get("Location");if(ae(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!FE.test(v))v=yh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let h=new URL(e.url),g=v.startsWith("//")?new URL(h.protocol+v):new URL(v),p=qs(g.pathname,o)!=null;g.origin===h.origin&&p&&(v=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:Ye.redirect,status:y,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ye.error?Ye.error:Ye.data,response:u};let w,k=u.headers.get("Content-Type");return k&&/\bapplication\/json\b/.test(k)?w=await u.json():w=await u.text(),l===Ye.error?{type:l,error:new bm(y,u.statusText,w),headers:u.headers}:{type:Ye.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Ye.error)return{type:l,error:u};if(zA(u)){var d,m;return{type:Ye.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Ye.data,data:u}}function go(t,e,n,r){let i=t.createURL(jE(e)).toString(),s={signal:n};if(r&&cn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=_h(r.formData):s.body=r.formData}return new Request(i,s)}function _h(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function my(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function UA(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,f)=>{let d=e[f].route.id;if(ae(!ws(c),"Cannot handle redirect results in processLoaderData"),zo(c)){let m=is(t,d),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=y),s[d]=void 0,l||(l=!0,a=ME(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else fi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function gy(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=UA(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:f,match:d,controller:m}=s[c];ae(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(m&&m.signal.aborted))if(zo(y)){let w=is(t.matches,d==null?void 0:d.route.id);u&&u[w.route.id]||(u=Fe({},u,{[w.route.id]:y.error})),t.fetchers.delete(f)}else if(ws(y))ae(!1,"Unhandled fetcher revalidation redirect");else if(fi(y))ae(!1,"Unhandled fetcher deferred data");else{let w=Wi(y.data);t.fetchers.set(f,w)}}return{loaderData:l,errors:u}}function vy(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function is(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function yy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function $t(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new bm(t||500,o,new Error(a),!0)}function _y(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ws(n))return{result:n,idx:e}}}function jE(t){let e=typeof t=="string"?sr(t):t;return Ai(Fe({},e,{hash:""}))}function jA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function fi(t){return t.type===Ye.deferred}function zo(t){return t.type===Ye.error}function ws(t){return(t&&t.type)===Ye.redirect}function zA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function VA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function BA(t){return PA.has(t.toLowerCase())}function cn(t){return xA.has(t.toLowerCase())}async function wy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(f=>f.route.id===l.route.id),c=u!=null&&!UE(u,l)&&(s&&s[l.route.id])!==void 0;if(fi(a)&&(i||c)){let f=r[o];ae(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await zE(a,f,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function zE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ye.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ye.error,error:i}}return{type:Ye.data,data:t.deferredData.data}}}function xm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function wh(t,e){let n=typeof e=="string"?sr(e).search:e.search;if(t[t.length-1].route.index&&xm(n||""))return t[t.length-1];let r=zc(t);return r[r.length-1]}function Ey(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Hf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function WA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function vo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $A(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Wi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xu.apply(this,arguments)}const Vc=x.createContext(null),VE=x.createContext(null),Qs=x.createContext(null),Bc=x.createContext(null),or=x.createContext({outlet:null,matches:[],isDataRoute:!1}),BE=x.createContext(null);function HA(t,e){let{relative:n}=e===void 0?{}:e;Wa()||ae(!1);let{basename:r,navigator:i}=x.useContext(Qs),{hash:s,pathname:o,search:a}=HE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Wa(){return x.useContext(Bc)!=null}function Wc(){return Wa()||ae(!1),x.useContext(Bc).location}function WE(t){x.useContext(Qs).static||x.useLayoutEffect(t)}function Jr(){let{isDataRoute:t}=x.useContext(or);return t?sO():GA()}function GA(){Wa()||ae(!1);let t=x.useContext(Vc),{basename:e,navigator:n}=x.useContext(Qs),{matches:r}=x.useContext(or),{pathname:i}=Wc(),s=JSON.stringify(zc(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return WE(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Im(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const YA=x.createContext(null);function KA(t){let e=x.useContext(or).outlet;return e&&x.createElement(YA.Provider,{value:t},e)}function $E(){let{matches:t}=x.useContext(or),e=t[t.length-1];return e?e.params:{}}function HE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(or),{pathname:i}=Wc(),s=JSON.stringify(zc(r).map(o=>o.pathnameBase));return x.useMemo(()=>Im(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function qA(t,e,n){Wa()||ae(!1);let{navigator:r}=x.useContext(Qs),{matches:i}=x.useContext(or),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Wc(),u;if(e){var c;let w=typeof e=="string"?sr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ae(!1),u=w}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",m=rs(t,{pathname:d}),y=eO(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Kn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Kn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&y?x.createElement(Bc.Provider,{value:{location:Xu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:qe.Pop}},y):y}function QA(){let t=iO(),e=ME(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,s)}const XA=x.createElement(QA,null);class JA extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(or.Provider,{value:this.props.routeContext},x.createElement(BE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZA(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(or.Provider,{value:e},r)}function eO(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ae(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||XA);let d=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=f:l.route.Component?y=x.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,x.createElement(ZA,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(JA,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var GE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GE||{}),Ju=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ju||{});function tO(t){let e=x.useContext(Vc);return e||ae(!1),e}function nO(t){let e=x.useContext(VE);return e||ae(!1),e}function rO(t){let e=x.useContext(or);return e||ae(!1),e}function YE(t){let e=rO(),n=e.matches[e.matches.length-1];return n.route.id||ae(!1),n.route.id}function iO(){var t;let e=x.useContext(BE),n=nO(Ju.UseRouteError),r=YE(Ju.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function sO(){let{router:t}=tO(GE.UseNavigateStable),e=YE(Ju.UseNavigateStable),n=x.useRef(!1);return WE(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xu({fromRouteId:e},s)))},[t,e])}const oO="startTransition",Sy=eC[oO];function aO(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=x.useState(n.state),{v7_startTransition:o}=r||{},a=x.useCallback(f=>{o&&Sy?Sy(()=>s(f)):s(f)},[s,o]);x.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,d,m)=>n.navigate(f,{state:d,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(f,d,m)=>n.navigate(f,{replace:!0,state:d,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),u=n.basename||"/",c=x.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return x.createElement(x.Fragment,null,x.createElement(Vc.Provider,{value:c},x.createElement(VE.Provider,{value:i},x.createElement(cO,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?x.createElement(lO,{routes:n.routes,state:i}):e))),null)}function lO(t){let{routes:e,state:n}=t;return qA(e,void 0,n)}function uO(t){return KA(t.context)}function cO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qe.Pop,navigator:s,static:o=!1}=t;Wa()&&ae(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=sr(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:m="default"}=r,y=x.useMemo(()=>{let w=qs(u,a);return w==null?null:{location:{pathname:w,search:c,hash:f,state:d,key:m},navigationType:i}},[a,u,c,f,d,m,i]);return y==null?null:x.createElement(Qs.Provider,{value:l},x.createElement(Bc.Provider,{children:n,value:y}))}new Promise(()=>{});function fO(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:x.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:x.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_a.apply(this,arguments)}function dO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pO(t,e){return t.button===0&&(!e||e==="_self")&&!hO(t)}const mO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function gO(t,e){return DA({basename:e==null?void 0:e.basename,future:_a({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:nA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||vO(),routes:t,mapRouteProperties:fO}).initialize()}function vO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=_a({},e,{errors:yO(e.errors)})),e}function yO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new bm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const _O=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,EO=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=dO(e,mO),{basename:d}=x.useContext(Qs),m,y=!1;if(typeof u=="string"&&wO.test(u)&&(m=u,_O))try{let h=new URL(window.location.href),g=u.startsWith("//")?new URL(h.protocol+u):new URL(u),p=qs(g.pathname,d);g.origin===h.origin&&p!=null?u=p+g.search+g.hash:y=!0}catch{}let w=HA(u,{relative:i}),k=SO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(h){r&&r(h),h.defaultPrevented||k(h)}return x.createElement("a",_a({},f,{href:m||w,onClick:y||s?r:v,ref:n,target:l}))});var Cy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Cy||(Cy={}));var ky;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ky||(ky={}));function SO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Jr(),l=Wc(),u=HE(t,{relative:o});return x.useCallback(c=>{if(pO(c,n)){c.preventDefault();let f=r!==void 0?r:Ai(l)===Ai(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function kr({onClick:t,children:e,variant:n,type:r="button"}){const[i,s]=x.useState(null),[o,a]=x.useState("shadow-md"),l={cta:"bg-themePrimary text-themeWhite",base:"bg-themeWhite text-themePrimary border border-themeGray",outlined:"bg-themeWhite text-themePrimary"};x.useEffect(()=>{s(l[n])},[i]);function u(){a("shadow-sm"),setTimeout(()=>{a("shadow-md"),t&&t()},200)}return b.jsx("input",{type:r,onClick:()=>u(),value:e,className:`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-4 mb-4 cursor-pointer w-full ${i} ${o} hover:scale-105 transition-transform duration-200`})}function CO({isMenuVisible:t}){const[e,n]=x.useState("animate-menuIn"),[r,i]=x.useState("hidden"),s=Jr();function o(){zN(Ri).then(()=>{s("/login")}).catch(a=>{console.log(a)})}return x.useEffect(()=>{t&&(i("visible"),n("animate-menuIn")),t||(n("animate-menuOut"),setTimeout(()=>{i("hidden")},400))},[t]),b.jsxs("aside",{className:`${e} ${r} absolute right-0 -top-4 w-full h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `,children:[b.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[b.jsx("br",{}),b.jsx("br",{}),b.jsx("br",{})]}),b.jsxs("div",{className:"text-themePrimary w-full p-6 flex flex-col items-end bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-md",children:[b.jsx("p",{children:"Account"}),b.jsx("p",{children:"text2"}),b.jsx(kr,{onClick:o,variant:"cta",children:"Log out"})]}),b.jsxs("div",{className:"text-right bg-transparent rounded-b-2xl w-full h-24",children:[b.jsx("br",{}),b.jsx("br",{}),b.jsx("br",{})]})]})}const $a=x.createContext(void 0),kO="/assets/userIconDefault-0c6f2d29.jpg";function wa({imageUrl:t,size:e="small"}){const[n,r]=x.useState(null),i={small:"w-8",medium:"w-10",large:"w-12"};return x.useEffect(()=>{r(i[e])},[n,e]),b.jsx("img",{className:`${n} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`,src:t||kO})}function IO({handleMenu:t}){const[e,n]=x.useState(!1),r=x.useContext($a);if(r===void 0)return null;function i(){t(),n(!0),setTimeout(()=>{n(!1)},300)}return b.jsx("div",{className:`${e?"animate-pulse":null} z-20 text-2xl grid place-items-center w-8 cursor-pointer`,onClick:i,children:b.jsx(wa,{imageUrl:r==null?void 0:r.photoUrl})})}function bO(){const[t,e]=x.useState(!1);function n(){e(!t)}return b.jsxs("nav",{className:"flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4",children:[b.jsx(EO,{to:"/",children:"Home"}),b.jsx(IO,{handleMenu:n}),b.jsx(CO,{isMenuVisible:t})]})}function xO(){return b.jsx("div",{className:"p-6 flex justify-center items-center bg-themePrimary text-themeWhite h-16 shadow-md rounded-2xl mb-4",children:"© Maciej Tomaszewski 2023"})}const $c=x.createContext(void 0),Hc=x.createContext(void 0),Tm=x.createContext(void 0);function TO({children:t}){const[e,n]=x.useState(),[r,i]=x.useState(),[s,o]=x.useState(void 0),[a,l]=x.useState(void 0);async function u(m){await Uo(Ft(Kt,`/users/${m}`),y=>{if(y.exists()){const w={...y.val(),uid:m};o(w)}})}async function c(){const m=J1(Ft(Kt,"users/"));await Uo(m,y=>{if(y.exists()){const k=Object.entries(y.val()).map(v=>({...v[1],uid:v[0]}));l(k)}else l(void 0)})}async function f(m,y){await Uo(Ft(Kt,`/events/${m}`),w=>{if(w.exists()){let k=function(h,g){if(h===void 0)return[g];if(h!==void 0)return[...h.filter(E=>{if(E.id!==m)return E}),g]};const v=w.val();v.id=m,v.users!==void 0?v.users=Object.keys(v.users):v.users=[],y==="participateEvent"&&i(h=>k(h,v)),y==="ownerEvent"&&n(h=>k(h,v))}})}async function d(m){m.participateOfEvents.forEach(async y=>{f(y,"participateEvent")}),m.ownerOfEvents.forEach(async y=>{f(y,"ownerEvent")})}return x.useEffect(()=>{Ri.currentUser!=null&&(s===void 0&&u(Ri.currentUser.uid),s!==void 0&&d(s),c())},[s]),b.jsx($c.Provider,{value:e,children:b.jsx(Hc.Provider,{value:r,children:b.jsx($a.Provider,{value:s,children:b.jsx(Tm.Provider,{value:a,children:b.jsx(b.Fragment,{children:t})})})})})}function PO(){return b.jsxs("main",{className:"text-themePrimary w-96 grid h-screenIOs grid-rows-AppTemplate pr-4 pl-4",children:[b.jsxs(TO,{children:[b.jsx(bO,{}),b.jsx("main",{className:"pt-6 pb-6 w-full",children:b.jsx(uO,{})})]}),b.jsx(xO,{})]})}async function NO(t){return await VP(ma(tA,`users/${t.uid}`)).then(e=>e.exists()?(console.log("isUserInDB: User exists in DB"),!0):e.exists()?(console.error("isUserInDB: Error with retreiving user from database: snapshot does not exist"),!1):(console.error("isUserInDB: User not found in DB"),!1)).catch(e=>(console.error("isUserInDB Catch"+e),!1))}async function RO({uid:t,displayName:e,email:n,photoURL:r}){await Co(Ft(Kt,`users/${t}`),{displayName:e,email:n,photoUrl:r,participateOfEvents:{0:"Initial"},ownerOfEvents:{0:"Initial"}}).then(()=>{console.log("createNewUserInDB - Data saved successfully")}).catch(i=>{console.log(`createNewUserInDB - Error while creating new user: 

`+i.message)})}var AO={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};function Iy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Iy(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Iy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zu(t){"@babel/helpers - typeof";return Zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zu(t)}function OO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function by(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function DO(t,e,n){return e&&by(t.prototype,e),n&&by(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pm(t,e){return LO(t)||UO(t,e)||KE(t,e)||zO()}function Ha(t){return MO(t)||FO(t)||KE(t)||jO()}function MO(t){if(Array.isArray(t))return Eh(t)}function LO(t){if(Array.isArray(t))return t}function FO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function KE(t,e){if(t){if(typeof t=="string")return Eh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Eh(t,e)}}function Eh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xy=function(){},Nm={},qE={},QE=null,XE={mark:xy,measure:xy};try{typeof window<"u"&&(Nm=window),typeof document<"u"&&(qE=document),typeof MutationObserver<"u"&&(QE=MutationObserver),typeof performance<"u"&&(XE=performance)}catch{}var VO=Nm.navigator||{},Ty=VO.userAgent,Py=Ty===void 0?"":Ty,Hr=Nm,Pe=qE,Ny=QE,Tl=XE;Hr.document;var ar=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",JE=~Py.indexOf("MSIE")||~Py.indexOf("Trident/"),Pl,Nl,Rl,Al,Ol,tr="___FONT_AWESOME___",Sh=16,ZE="fa",eS="svg-inline--fa",Oi="data-fa-i2svg",Ch="data-fa-pseudo-element",BO="data-fa-pseudo-element-pending",Rm="data-prefix",Am="data-icon",Ry="fontawesome-i2svg",WO="async",$O=["HTML","HEAD","STYLE","SCRIPT"],tS=function(){try{return!0}catch{return!1}}(),xe="classic",Be="sharp",Om=[xe,Be];function Ga(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xe]}})}var Ea=Ga((Pl={},rt(Pl,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),rt(Pl,Be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Pl)),Sa=Ga((Nl={},rt(Nl,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(Nl,Be,{solid:"fass",regular:"fasr",light:"fasl"}),Nl)),Ca=Ga((Rl={},rt(Rl,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(Rl,Be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Rl)),HO=Ga((Al={},rt(Al,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(Al,Be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Al)),GO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,nS="fa-layers-text",YO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,KO=Ga((Ol={},rt(Ol,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(Ol,Be,{900:"fass",400:"fasr",300:"fasl"}),Ol)),rS=[1,2,3,4,5,6,7,8,9,10],qO=rS.concat([11,12,13,14,15,16,17,18,19,20]),QO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],di={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=new Set;Object.keys(Sa[xe]).map(ka.add.bind(ka));Object.keys(Sa[Be]).map(ka.add.bind(ka));var XO=[].concat(Om,Ha(ka),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",di.GROUP,di.SWAP_OPACITY,di.PRIMARY,di.SECONDARY]).concat(rS.map(function(t){return"".concat(t,"x")})).concat(qO.map(function(t){return"w-".concat(t)})),Vo=Hr.FontAwesomeConfig||{};function JO(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ZO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Pe&&typeof Pe.querySelector=="function"){var e2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];e2.forEach(function(t){var e=Pm(t,2),n=e[0],r=e[1],i=ZO(JO(n));i!=null&&(Vo[r]=i)})}var iS={styleDefault:"solid",familyDefault:"classic",cssPrefix:ZE,replacementClass:eS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vo.familyPrefix&&(Vo.cssPrefix=Vo.familyPrefix);var js=z(z({},iS),Vo);js.autoReplaceSvg||(js.observeMutations=!1);var H={};Object.keys(iS).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){js[t]=n,Bo.forEach(function(r){return r(H)})},get:function(){return js[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){js.cssPrefix=e,Bo.forEach(function(n){return n(H)})},get:function(){return js.cssPrefix}});Hr.FontAwesomeConfig=H;var Bo=[];function t2(t){return Bo.push(t),function(){Bo.splice(Bo.indexOf(t),1)}}var hr=Sh,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function n2(t){if(!(!t||!ar)){var e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Pe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Pe.head.insertBefore(e,r),t}}var r2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ia(){for(var t=12,e="";t-- >0;)e+=r2[Math.random()*62|0];return e}function Xs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Dm(t){return t.classList?Xs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function sS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(sS(t[n]),'" ')},"").trim()}function Gc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Mm(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function s2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function o2(t){var e=t.transform,n=t.width,r=n===void 0?Sh:n,i=t.height,s=i===void 0?Sh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&JE?l+="translate(".concat(e.x/hr-r/2,"em, ").concat(e.y/hr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/hr,"em), calc(-50% + ").concat(e.y/hr,"em)) "):l+="translate(".concat(e.x/hr,"em, ").concat(e.y/hr,"em) "),l+="scale(".concat(e.size/hr*(e.flipX?-1:1),", ").concat(e.size/hr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var a2=`:root, :host {
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
}`;function oS(){var t=ZE,e=eS,n=H.cssPrefix,r=H.replacementClass,i=a2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ay=!1;function Gf(){H.autoAddCss&&!Ay&&(n2(oS()),Ay=!0)}var l2={mixout:function(){return{dom:{css:oS,insertCss:Gf}}},hooks:function(){return{beforeDOMElementCreation:function(){Gf()},beforeI2svg:function(){Gf()}}}},nr=Hr||{};nr[tr]||(nr[tr]={});nr[tr].styles||(nr[tr].styles={});nr[tr].hooks||(nr[tr].hooks={});nr[tr].shims||(nr[tr].shims=[]);var gn=nr[tr],aS=[],u2=function t(){Pe.removeEventListener("DOMContentLoaded",t),ec=1,aS.map(function(e){return e()})},ec=!1;ar&&(ec=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),ec||Pe.addEventListener("DOMContentLoaded",u2));function c2(t){ar&&(ec?setTimeout(t,0):aS.push(t))}function Ya(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?sS(t):"<".concat(e," ").concat(i2(r),">").concat(s.map(Ya).join(""),"</").concat(e,">")}function Oy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var f2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Yf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?f2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function d2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function kh(t){var e=d2(t);return e.length===1?e[0].toString(16):null}function h2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Dy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ih(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Dy(e);typeof gn.hooks.addPack=="function"&&!i?gn.hooks.addPack(t,Dy(e)):gn.styles[t]=z(z({},gn.styles[t]||{}),s),t==="fas"&&Ih("fa",e)}var Dl,Ml,Ll,ss=gn.styles,p2=gn.shims,m2=(Dl={},rt(Dl,xe,Object.values(Ca[xe])),rt(Dl,Be,Object.values(Ca[Be])),Dl),Lm=null,lS={},uS={},cS={},fS={},dS={},g2=(Ml={},rt(Ml,xe,Object.keys(Ea[xe])),rt(Ml,Be,Object.keys(Ea[Be])),Ml);function v2(t){return~XO.indexOf(t)}function y2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!v2(i)?i:null}var hS=function(){var e=function(s){return Yf(ss,function(o,a,l){return o[l]=Yf(a,s,{}),o},{})};lS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),uS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),dS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ss||H.autoFetchSvg,r=Yf(p2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});cS=r.names,fS=r.unicodes,Lm=Yc(H.styleDefault,{family:H.familyDefault})};t2(function(t){Lm=Yc(t.styleDefault,{family:H.familyDefault})});hS();function Fm(t,e){return(lS[t]||{})[e]}function _2(t,e){return(uS[t]||{})[e]}function hi(t,e){return(dS[t]||{})[e]}function pS(t){return cS[t]||{prefix:null,iconName:null}}function w2(t){var e=fS[t],n=Fm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gr(){return Lm}var Um=function(){return{prefix:null,iconName:null,rest:[]}};function Yc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xe:n,i=Ea[r][t],s=Sa[r][t]||Sa[r][i],o=t in gn.styles?t:null;return s||o||null}var My=(Ll={},rt(Ll,xe,Object.keys(Ca[xe])),rt(Ll,Be,Object.keys(Ca[Be])),Ll);function Kc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},rt(e,xe,"".concat(H.cssPrefix,"-").concat(xe)),rt(e,Be,"".concat(H.cssPrefix,"-").concat(Be)),e),o=null,a=xe;(t.includes(s[xe])||t.some(function(u){return My[xe].includes(u)}))&&(a=xe),(t.includes(s[Be])||t.some(function(u){return My[Be].includes(u)}))&&(a=Be);var l=t.reduce(function(u,c){var f=y2(H.cssPrefix,c);if(ss[c]?(c=m2[a].includes(c)?HO[a][c]:c,o=c,u.prefix=c):g2[a].indexOf(c)>-1?(o=c,u.prefix=Yc(c,{family:a})):f?u.iconName=f:c!==H.replacementClass&&c!==s[xe]&&c!==s[Be]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?pS(u.iconName):{},m=hi(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!ss.far&&ss.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},Um());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Be&&(ss.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=hi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Gr()||"fas"),l}var E2=function(){function t(){OO(this,t),this.definitions={}}return DO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),Ih(a,o[a]);var l=Ca[xe][a];l&&Ih(l,o[a]),hS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Ly=[],os={},Es={},S2=Object.keys(Es);function C2(t,e){var n=e.mixoutsTo;return Ly=t,os={},Object.keys(Es).forEach(function(r){S2.indexOf(r)===-1&&delete Es[r]}),Ly.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){os[o]||(os[o]=[]),os[o].push(s[o])})}r.provides&&r.provides(Es)}),n}function bh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=os[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=os[t]||[];i.forEach(function(s){s.apply(null,n)})}function rr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Es[t]?Es[t].apply(null,e):void 0}function xh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Gr();if(e)return e=hi(n,e)||e,Oy(mS.definitions,n,e)||Oy(gn.styles,n,e)}var mS=new E2,k2=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Di("noAuto")},I2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ar?(Di("beforeI2svg",e),rr("pseudoElements2svg",e),rr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,c2(function(){x2({autoReplaceSvgRoot:n}),Di("watch",e)})}},b2={icon:function(e){if(e===null)return null;if(Zu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Yc(e[0]);return{prefix:r,iconName:hi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(GO))){var i=Kc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gr(),iconName:hi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Gr();return{prefix:s,iconName:hi(s,e)||e}}}},Wt={noAuto:k2,config:H,dom:I2,parse:b2,library:mS,findIconDefinition:xh,toHtml:Ya},x2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Pe:n;(Object.keys(gn.styles).length>0||H.autoFetchSvg)&&ar&&H.autoReplaceSvg&&Wt.dom.i2svg({node:r})};function qc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ya(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ar){var r=Pe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function T2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Mm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Gc(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function P2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function jm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,y=r.found?r:n,w=y.width,k=y.height,v=i==="fak",h=[H.replacementClass,s?"".concat(H.cssPrefix,"-").concat(s):""].filter(function(W){return f.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(f.classes).join(" "),g={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)})},p=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};m&&(g.attributes[Oi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ia())},children:[l]}),delete g.attributes.title);var E=z(z({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},p),f.styles)}),T=r.found&&n.found?rr("generateAbstractMask",E)||{children:[],attributes:{}}:rr("generateAbstractIcon",E)||{children:[],attributes:{}},N=T.children,M=T.attributes;return E.children=N,E.attributes=M,a?P2(E):T2(E)}function Fy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Oi]="");var c=z({},o.styles);Mm(i)&&(c.transform=o2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Gc(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function N2(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Gc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kf=gn.styles;function Th(t){var e=t[0],n=t[1],r=t.slice(4),i=Pm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(di.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(di.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(di.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var R2={found:!1,width:512,height:512};function A2(t,e){!tS&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ph(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=Gr()),new Promise(function(r,i){if(rr("missingIconAbstract"),n==="fa"){var s=pS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Kf[e]&&Kf[e][t]){var o=Kf[e][t];return r(Th(o))}A2(t,e),r(z(z({},R2),{},{icon:H.showMissingIcons&&t?rr("missingIconAbstract")||{}:{}}))})}var Uy=function(){},Nh=H.measurePerformance&&Tl&&Tl.mark&&Tl.measure?Tl:{mark:Uy,measure:Uy},ko='FA "6.4.2"',O2=function(e){return Nh.mark("".concat(ko," ").concat(e," begins")),function(){return gS(e)}},gS=function(e){Nh.mark("".concat(ko," ").concat(e," ends")),Nh.measure("".concat(ko," ").concat(e),"".concat(ko," ").concat(e," begins"),"".concat(ko," ").concat(e," ends"))},zm={begin:O2,end:gS},Zl=function(){};function jy(t){var e=t.getAttribute?t.getAttribute(Oi):null;return typeof e=="string"}function D2(t){var e=t.getAttribute?t.getAttribute(Rm):null,n=t.getAttribute?t.getAttribute(Am):null;return e&&n}function M2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function L2(){if(H.autoReplaceSvg===!0)return eu.replace;var t=eu[H.autoReplaceSvg];return t||eu.replace}function F2(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function U2(t){return Pe.createElement(t)}function vS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?F2:U2:n;if(typeof t=="string")return Pe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(vS(o,{ceFn:r}))}),i}function j2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var eu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(vS(i),n)}),n.getAttribute(Oi)===null&&H.keepOriginalSource){var r=Pe.createComment(j2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Dm(n).indexOf(H.replacementClass))return eu.replace(e);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===H.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ya(a)}).join(`
`);n.setAttribute(Oi,""),n.innerHTML=o}};function zy(t){t()}function yS(t,e){var n=typeof e=="function"?e:Zl;if(t.length===0)n();else{var r=zy;H.mutateApproach===WO&&(r=Hr.requestAnimationFrame||zy),r(function(){var i=L2(),s=zm.begin("mutate");t.map(i),s(),n()})}}var Vm=!1;function _S(){Vm=!0}function Rh(){Vm=!1}var tc=null;function Vy(t){if(Ny&&H.observeMutations){var e=t.treeCallback,n=e===void 0?Zl:e,r=t.nodeCallback,i=r===void 0?Zl:r,s=t.pseudoElementsCallback,o=s===void 0?Zl:s,a=t.observeMutationsRoot,l=a===void 0?Pe:a;tc=new Ny(function(u){if(!Vm){var c=Gr();Xs(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!jy(f.addedNodes[0])&&(H.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&H.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&jy(f.target)&&~QO.indexOf(f.attributeName))if(f.attributeName==="class"&&D2(f.target)){var d=Kc(Dm(f.target)),m=d.prefix,y=d.iconName;f.target.setAttribute(Rm,m||c),y&&f.target.setAttribute(Am,y)}else M2(f.target)&&i(f.target)})}}),ar&&tc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function z2(){tc&&tc.disconnect()}function V2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function B2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Kc(Dm(t));return i.prefix||(i.prefix=Gr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=_2(i.prefix,t.innerText)||Fm(i.prefix,kh(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function W2(t){var e=Xs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Ia()):(e["aria-hidden"]="true",e.focusable="false")),e}function $2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function By(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=B2(t),r=n.iconName,i=n.prefix,s=n.rest,o=W2(t),a=bh("parseNodeAttributes",{},t),l=e.styleParser?V2(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var H2=gn.styles;function wS(t){var e=H.autoReplaceSvg==="nest"?By(t,{styleParser:!1}):By(t);return~e.extra.classes.indexOf(nS)?rr("generateLayersText",t,e):rr("generateSvgReplacementMutation",t,e)}var Yr=new Set;Om.map(function(t){Yr.add("fa-".concat(t))});Object.keys(Ea[xe]).map(Yr.add.bind(Yr));Object.keys(Ea[Be]).map(Yr.add.bind(Yr));Yr=Ha(Yr);function Wy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ar)return Promise.resolve();var n=Pe.documentElement.classList,r=function(f){return n.add("".concat(Ry,"-").concat(f))},i=function(f){return n.remove("".concat(Ry,"-").concat(f))},s=H.autoFetchSvg?Yr:Om.map(function(c){return"fa-".concat(c)}).concat(Object.keys(H2));s.includes("fa")||s.push("fa");var o=[".".concat(nS,":not([").concat(Oi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Oi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Xs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=zm.begin("onTree"),u=a.reduce(function(c,f){try{var d=wS(f);d&&c.push(d)}catch(m){tS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){yS(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function G2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wS(t).then(function(n){n&&yS([n],e)})}function Y2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:xh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:xh(i||{})),t(r,z(z({},n),{},{mask:i}))}}var K2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?In:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,w=n.classes,k=w===void 0?[]:w,v=n.attributes,h=v===void 0?{}:v,g=n.styles,p=g===void 0?{}:g;if(e){var E=e.prefix,T=e.iconName,N=e.icon;return qc(z({type:"icon"},e),function(){return Di("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(d?h["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(y||Ia()):(h["aria-hidden"]="true",h.focusable="false")),jm({icons:{main:Th(N),mask:l?Th(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:T,transform:z(z({},In),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:h,styles:p,classes:k}})})}},q2={mixout:function(){return{icon:Y2(K2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wy,n.nodeCallback=G2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Pe:r,s=n.callback,o=s===void 0?function(){}:s;return Wy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,y){Promise.all([Ph(i,a),c.iconName?Ph(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var k=Pm(w,2),v=k[0],h=k[1];m([n,jm({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Gc(a);l.length>0&&(i.style=l);var u;return Mm(o)&&(u=rr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Q2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return qc({type:"layer"},function(){Di("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(Ha(s)).join(" ")},children:o}]})}}}},X2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return qc({type:"counter",content:n},function(){return Di("beforeDOMElementCreation",{content:n,params:r}),N2({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(Ha(a))}})})}}}},J2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?In:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return qc({type:"text",content:n},function(){return Di("beforeDOMElementCreation",{content:n,params:r}),Fy({content:n,transform:z(z({},In),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(H.cssPrefix,"-layers-text")].concat(Ha(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(JE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return H.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Z2=new RegExp('"',"ug"),$y=[1105920,1112319];function eD(t){var e=t.replace(Z2,""),n=h2(e,0),r=n>=$y[0]&&n<=$y[1],i=e.length===2?e[0]===e[1]:!1;return{value:kh(i?e[0]:e),isSecondary:r||i}}function Hy(t,e){var n="".concat(BO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Xs(t.children),o=s.filter(function(N){return N.getAttribute(Ch)===e})[0],a=Hr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(YO),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Be:xe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sa[d][l[2].toLowerCase()]:KO[d][u],y=eD(f),w=y.value,k=y.isSecondary,v=l[0].startsWith("FontAwesome"),h=Fm(m,w),g=h;if(v){var p=w2(w);p.iconName&&p.prefix&&(h=p.iconName,m=p.prefix)}if(h&&!k&&(!o||o.getAttribute(Rm)!==m||o.getAttribute(Am)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var E=$2(),T=E.extra;T.attributes[Ch]=e,Ph(h,m).then(function(N){var M=jm(z(z({},E),{},{icons:{main:N,mask:Um()},prefix:m,iconName:g,extra:T,watchable:!0})),W=Pe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=M.map(function(U){return Ya(U)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function tD(t){return Promise.all([Hy(t,"::before"),Hy(t,"::after")])}function nD(t){return t.parentNode!==document.head&&!~$O.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ch)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Gy(t){if(ar)return new Promise(function(e,n){var r=Xs(t.querySelectorAll("*")).filter(nD).map(tD),i=zm.begin("searchPseudoElements");_S(),Promise.all(r).then(function(){i(),Rh(),e()}).catch(function(){i(),Rh(),n()})})}var rD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Gy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Pe:r;H.searchPseudoElements&&Gy(i)}}},Yy=!1,iD={mixout:function(){return{dom:{unwatch:function(){_S(),Yy=!0}}}},hooks:function(){return{bootstrap:function(){Vy(bh("mutationObserverCallbacks",{}))},noAuto:function(){z2()},watch:function(n){var r=n.observeMutationsRoot;Yy?Rh():Vy(bh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ky=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},sD={mixout:function(){return{parse:{transform:function(n){return Ky(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ky(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:d};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),m.path)}]}]}}}},qf={x:0,y:0,width:"100%",height:"100%"};function qy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oD(t){return t.tag==="g"?t.children:[t]}var aD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Kc(i.split(" ").map(function(o){return o.trim()})):Um();return s.prefix||(s.prefix=Gr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,m=s2({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:z(z({},qf),{},{fill:"white"})},w=c.children?{children:c.children.map(qy)}:{},k={tag:"g",attributes:z({},m.inner),children:[qy(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},w))]},v={tag:"g",attributes:z({},m.outer),children:[k]},h="mask-".concat(a||Ia()),g="clip-".concat(a||Ia()),p={tag:"mask",attributes:z(z({},qf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:oD(d)},p]};return r.push(E,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},qf)}),{children:r,attributes:i}}}},lD={provides:function(e){var n=!1;Hr.matchMedia&&(n=Hr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},uD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},cD=[l2,q2,Q2,X2,J2,rD,iD,sD,aD,lD,uD];C2(cD,{mixoutsTo:Wt});Wt.noAuto;Wt.config;Wt.library;Wt.dom;var Ah=Wt.parse;Wt.findIconDefinition;Wt.toHtml;var fD=Wt.icon;Wt.layer;Wt.text;Wt.counter;var ES={exports:{}},dD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hD=dD,pD=hD;function SS(){}function CS(){}CS.resetWarningCache=SS;var mD=function(){function t(r,i,s,o,a,l){if(l!==pD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:CS,resetWarningCache:SS};return n.PropTypes=n,n};ES.exports=mD();var gD=ES.exports;const oe=u_(gD);function Qy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qy(Object(n),!0).forEach(function(r){as(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nc(t){"@babel/helpers - typeof";return nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nc(t)}function as(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yD(t,e){if(t==null)return{};var n=vD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Oh(t){return _D(t)||wD(t)||ED(t)||SD()}function _D(t){if(Array.isArray(t))return Dh(t)}function wD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ED(t,e){if(t){if(typeof t=="string")return Dh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dh(t,e)}}function Dh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function SD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,m=t.inverse,y=t.border,w=t.listItem,k=t.flip,v=t.size,h=t.rotation,g=t.pull,p=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},as(e,"fa-".concat(v),typeof v<"u"&&v!==null),as(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),as(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),as(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map(function(E){return p[E]?E:null}).filter(function(E){return E})}function kD(t){return t=t-0,t===t}function kS(t){return kD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ID=["style"];function bD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function xD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=kS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[bD(i)]=s:e[i]=s,e},{})}function IS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return IS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=xD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[kS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=yD(n,ID);return i.attrs.style=Ir(Ir({},i.attrs.style),o),t.apply(void 0,[e.tag,Ir(Ir({},i.attrs),a)].concat(Oh(r)))}var bS=!1;try{bS=!0}catch{}function TD(){if(!bS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Xy(t){if(t&&nc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ah.icon)return Ah.icon(t);if(t===null)return null;if(t&&nc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?as({},t,e):{}}var Ka=qt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Xy(n),c=Qf("classes",[].concat(Oh(CD(t)),Oh(s.split(" ")))),f=Qf("transform",typeof t.transform=="string"?Ah.transform(t.transform):t.transform),d=Qf("mask",Xy(r)),m=fD(u,Ir(Ir(Ir(Ir({},c),f),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return TD("Could not find icon",u),null;var y=m.abstract,w={ref:e};return Object.keys(t).forEach(function(k){Ka.defaultProps.hasOwnProperty(k)||(w[k]=t[k])}),PD(y[0],w)});Ka.displayName="FontAwesomeIcon";Ka.propTypes={beat:oe.bool,border:oe.bool,beatFade:oe.bool,bounce:oe.bool,className:oe.string,fade:oe.bool,flash:oe.bool,mask:oe.oneOfType([oe.object,oe.array,oe.string]),maskId:oe.string,fixedWidth:oe.bool,inverse:oe.bool,flip:oe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:oe.oneOfType([oe.object,oe.array,oe.string]),listItem:oe.bool,pull:oe.oneOf(["right","left"]),pulse:oe.bool,rotation:oe.oneOf([0,90,180,270]),shake:oe.bool,size:oe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:oe.bool,spinPulse:oe.bool,spinReverse:oe.bool,symbol:oe.oneOfType([oe.bool,oe.string]),title:oe.string,titleId:oe.string,transform:oe.oneOfType([oe.string,oe.object]),swapOpacity:oe.bool};Ka.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var PD=IS.bind(null,qt.createElement);function Bm({size:t}){const[e,n]=x.useState("text-2xl");return x.useEffect(()=>{t==="small"&&n("text-2xl"),t==="big"&&n("text-6xl")},[]),b.jsx("div",{className:`${e} w-full grid p-6 place-items-center h-full`,children:b.jsx(Ka,{icon:AO,spin:!0})})}function ND(){const t=Jr(),[e,n]=x.useState(!1);return x.useEffect(function(){wE(Ri,async r=>{if(r){console.log("AUTH: Logged");const i=await NO(r);i&&n(i),i||await RO(r)}else t("/login")})},[]),e?b.jsx(PO,{}):b.jsx("div",{className:"h-screen",children:b.jsx(Bm,{size:"big"})})}function RD(){const t=Jr();x.useEffect(()=>{wE(Ri,n=>{t(n?"/":"/login")})},[]);function e(){const n=new kn;aR(Ri,n).then(r=>{const i=kn.credentialFromResult(r);if(i===null)return;const s=i.accessToken;console.log(s)}).catch(r=>{console.log(r.message)})}return b.jsx("div",{className:"p-6 flex justify-center w-full h-screen items-center",children:b.jsxs("div",{className:"w-96 text-center",children:["You are logged out ",b.jsx("br",{}),b.jsx(kr,{onClick:e,variant:"cta",children:"Sign In With Google"})]})})}function AD({event:t}){const e=Jr(),n=()=>{e(`/event/${t.id}`)};return b.jsxs("div",{onClick:n,className:"border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-105 transition-transform duration-200",children:[b.jsx("p",{className:"text-sm text-themePrimary opacity-40",children:t.date}),b.jsxs("p",{className:"font-bold text-lg",children:[" ",t.name]})]},"bang")}function Jy({title:t,events:e,buttonAddEvent:n}){const r=()=>{if(e===void 0)return b.jsx(Bm,{size:"small"});if(e)return e.map(o=>b.jsx(AD,{event:o},o.id))},i=Jr();function s(){i("/events/create")}return b.jsxs("div",{className:"w-full",children:[b.jsx("p",{className:"font-bold text-xl",children:t}),r(),n?b.jsx(kr,{onClick:s,variant:"cta",children:"Add Event"}):null]})}function OD(){const t=x.useContext($c),e=x.useContext(Hc);return x.useEffect(()=>{},[]),b.jsxs("div",{className:"h-full",children:[b.jsx(Jy,{buttonAddEvent:!0,title:"Your events",events:t}),b.jsx("br",{}),b.jsx(Jy,{buttonAddEvent:!1,title:"Events you participate in",events:e})]})}var qa=t=>t.type==="checkbox",ls=t=>t instanceof Date,St=t=>t==null;const xS=t=>typeof t=="object";var it=t=>!St(t)&&!Array.isArray(t)&&xS(t)&&!ls(t),DD=t=>it(t)&&t.target?qa(t.target)?t.target.checked:t.target.value:t,MD=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,LD=(t,e)=>t.has(MD(e)),FD=t=>{const e=t.constructor&&t.constructor.prototype;return it(e)&&e.hasOwnProperty("isPrototypeOf")},Wm=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Un(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Wm&&(t instanceof Blob||t instanceof FileList))&&(n||it(t)))if(e=n?[]:{},!n&&!FD(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Un(t[r]));else return t;return e}var Qa=t=>Array.isArray(t)?t.filter(Boolean):[],Qe=t=>t===void 0,$=(t,e,n)=>{if(!e||!it(t))return n;const r=Qa(e.split(/[,[\].]+?/)).reduce((i,s)=>St(i)?i:i[s],t);return Qe(r)||r===t?Qe(t[e])?n:t[e]:r},pi=t=>typeof t=="boolean";const Zy={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},hn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Fn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};qt.createContext(null);var UD=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==hn.all&&(e._proxyFormState[o]=!r||hn.all),n&&(n[o]=!0),t[o]}});return i},Ht=t=>it(t)&&!Object.keys(t).length,jD=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Ht(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||hn.all))},Xf=t=>Array.isArray(t)?t:[t];function zD(t){const e=qt.useRef(t);e.current=t,qt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var bn=t=>typeof t=="string",VD=(t,e,n,r,i)=>bn(t)?(r&&e.watch.add(t),$(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),$(n,s))):(r&&(e.watchAll=!0),n),$m=t=>/^\w*$/.test(t),TS=t=>Qa(t.replace(/["|']|\]/g,"").split(/\.|\[/));function Ae(t,e,n){let r=-1;const i=$m(e)?[e]:TS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=it(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var BD=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Mh=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=$(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else it(o)&&Mh(o,e)}}};var e_=t=>({isOnSubmit:!t||t===hn.onSubmit,isOnBlur:t===hn.onBlur,isOnChange:t===hn.onChange,isOnAll:t===hn.all,isOnTouch:t===hn.onTouched}),t_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),WD=(t,e,n)=>{const r=Qa($(t,n));return Ae(r,"root",e[n]),Ae(t,n,r),t},Hm=t=>t.type==="file",br=t=>typeof t=="function",rc=t=>{if(!Wm)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},tu=t=>bn(t),Gm=t=>t.type==="radio",ic=t=>t instanceof RegExp;const n_={value:!1,isValid:!1},r_={value:!0,isValid:!0};var PS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Qe(t[0].attributes.value)?Qe(t[0].value)||t[0].value===""?r_:{value:t[0].value,isValid:!0}:r_:n_}return n_};const i_={isValid:!1,value:null};var NS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,i_):i_;function s_(t,e,n="validate"){if(tu(t)||Array.isArray(t)&&t.every(tu)||pi(t)&&!t)return{type:n,message:tu(t)?t:"",ref:e}}var Bi=t=>it(t)&&!ic(t)?t:{value:t,message:""},o_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:f,pattern:d,validate:m,name:y,valueAsNumber:w,mount:k,disabled:v}=t._f,h=$(e,y);if(!k||v)return{};const g=o?o[0]:s,p=G=>{r&&g.reportValidity&&(g.setCustomValidity(pi(G)?"":G||""),g.reportValidity())},E={},T=Gm(s),N=qa(s),M=T||N,W=(w||Hm(s))&&Qe(s.value)&&Qe(h)||rc(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,U=BD.bind(null,y,n,E),fe=(G,Z,pe,De=Fn.maxLength,Ee=Fn.minLength)=>{const He=G?Z:pe;E[y]={type:G?De:Ee,message:He,ref:s,...U(G?De:Ee,He)}};if(i?!Array.isArray(h)||!h.length:a&&(!M&&(W||St(h))||pi(h)&&!h||N&&!PS(o).isValid||T&&!NS(o).isValid)){const{value:G,message:Z}=tu(a)?{value:!!a,message:a}:Bi(a);if(G&&(E[y]={type:Fn.required,message:Z,ref:g,...U(Fn.required,Z)},!n))return p(Z),E}if(!W&&(!St(c)||!St(f))){let G,Z;const pe=Bi(f),De=Bi(c);if(!St(h)&&!isNaN(h)){const Ee=s.valueAsNumber||h&&+h;St(pe.value)||(G=Ee>pe.value),St(De.value)||(Z=Ee<De.value)}else{const Ee=s.valueAsDate||new Date(h),He=J=>new Date(new Date().toDateString()+" "+J),L=s.type=="time",Y=s.type=="week";bn(pe.value)&&h&&(G=L?He(h)>He(pe.value):Y?h>pe.value:Ee>new Date(pe.value)),bn(De.value)&&h&&(Z=L?He(h)<He(De.value):Y?h<De.value:Ee<new Date(De.value))}if((G||Z)&&(fe(!!G,pe.message,De.message,Fn.max,Fn.min),!n))return p(E[y].message),E}if((l||u)&&!W&&(bn(h)||i&&Array.isArray(h))){const G=Bi(l),Z=Bi(u),pe=!St(G.value)&&h.length>+G.value,De=!St(Z.value)&&h.length<+Z.value;if((pe||De)&&(fe(pe,G.message,Z.message),!n))return p(E[y].message),E}if(d&&!W&&bn(h)){const{value:G,message:Z}=Bi(d);if(ic(G)&&!h.match(G)&&(E[y]={type:Fn.pattern,message:Z,ref:s,...U(Fn.pattern,Z)},!n))return p(Z),E}if(m){if(br(m)){const G=await m(h,e),Z=s_(G,g);if(Z&&(E[y]={...Z,...U(Fn.validate,Z.message)},!n))return p(Z.message),E}else if(it(m)){let G={};for(const Z in m){if(!Ht(G)&&!n)break;const pe=s_(await m[Z](h,e),g,Z);pe&&(G={...pe,...U(Z,pe.message)},p(pe.message),n&&(E[y]=G))}if(!Ht(G)&&(E[y]={ref:g,...G},!n))return E}}return p(!0),E};function $D(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Qe(t)?r++:t[e[r++]];return t}function HD(t){for(const e in t)if(t.hasOwnProperty(e)&&!Qe(t[e]))return!1;return!0}function ut(t,e){const n=Array.isArray(e)?e:$m(e)?[e]:TS(e),r=n.length===1?t:$D(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(it(r)&&Ht(r)||Array.isArray(r)&&HD(r))&&ut(t,n.slice(0,-1)),t}function Jf(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var sc=t=>St(t)||!xS(t);function mi(t,e){if(sc(t)||sc(e))return t===e;if(ls(t)&&ls(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ls(s)&&ls(o)||it(s)&&it(o)||Array.isArray(s)&&Array.isArray(o)?!mi(s,o):s!==o)return!1}}return!0}var RS=t=>t.type==="select-multiple",GD=t=>Gm(t)||qa(t),Zf=t=>rc(t)&&t.isConnected,AS=t=>{for(const e in t)if(br(t[e]))return!0;return!1};function oc(t,e={}){const n=Array.isArray(t);if(it(t)||n)for(const r in t)Array.isArray(t[r])||it(t[r])&&!AS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},oc(t[r],e[r])):St(t[r])||(e[r]=!0);return e}function OS(t,e,n){const r=Array.isArray(t);if(it(t)||r)for(const i in t)Array.isArray(t[i])||it(t[i])&&!AS(t[i])?Qe(e)||sc(n[i])?n[i]=Array.isArray(t[i])?oc(t[i],[]):{...oc(t[i])}:OS(t[i],St(e)?{}:e[i],n[i]):n[i]=!mi(t[i],e[i]);return n}var ed=(t,e)=>OS(t,e,oc(e)),DS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Qe(t)?t:e?t===""?NaN:t&&+t:n&&bn(t)?new Date(t):r?r(t):t;function td(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Hm(e)?e.files:Gm(e)?NS(t.refs).value:RS(e)?[...e.selectedOptions].map(({value:n})=>n):qa(e)?PS(t.refs).value:DS(Qe(e.value)?t.ref.value:e.value,t)}var YD=(t,e,n,r)=>{const i={};for(const s of t){const o=$(e,s);o&&Ae(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},yo=t=>Qe(t)?t:ic(t)?t.source:it(t)?ic(t.value)?t.value.source:t.value:t,KD=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function a_(t,e,n){const r=$(t,n);if(r||$m(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=$(e,s),a=$(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var qD=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,QD=(t,e)=>!Qa($(t,e)).length&&ut(t,e);const XD={mode:hn.onSubmit,reValidateMode:hn.onChange,shouldFocusError:!0};function JD(t={},e){let n={...XD,...t},r={submitCount:0,isDirty:!1,isLoading:br(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=it(n.defaultValues)||it(n.values)?Un(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Un(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:Jf(),array:Jf(),state:Jf()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,y=e_(n.mode),w=e_(n.reValidateMode),k=n.criteriaMode===hn.all,v=_=>C=>{clearTimeout(c),c=setTimeout(_,C)},h=async _=>{if(f.isValid||_){const C=n.resolver?Ht((await W()).errors):await fe(i,!0);C!==r.isValid&&d.state.next({isValid:C})}},g=_=>f.isValidating&&d.state.next({isValidating:_}),p=(_,C=[],P,j,F=!0,O=!0)=>{if(j&&P){if(a.action=!0,O&&Array.isArray($(i,_))){const K=P($(i,_),j.argA,j.argB);F&&Ae(i,_,K)}if(O&&Array.isArray($(r.errors,_))){const K=P($(r.errors,_),j.argA,j.argB);F&&Ae(r.errors,_,K),QD(r.errors,_)}if(f.touchedFields&&O&&Array.isArray($(r.touchedFields,_))){const K=P($(r.touchedFields,_),j.argA,j.argB);F&&Ae(r.touchedFields,_,K)}f.dirtyFields&&(r.dirtyFields=ed(s,o)),d.state.next({name:_,isDirty:Z(_,C),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ae(o,_,C)},E=(_,C)=>{Ae(r.errors,_,C),d.state.next({errors:r.errors})},T=(_,C,P,j)=>{const F=$(i,_);if(F){const O=$(o,_,Qe(P)?$(s,_):P);Qe(O)||j&&j.defaultChecked||C?Ae(o,_,C?O:td(F._f)):Ee(_,O),a.mount&&h()}},N=(_,C,P,j,F)=>{let O=!1,K=!1;const Ne={name:_};if(!P||j){f.isDirty&&(K=r.isDirty,r.isDirty=Ne.isDirty=Z(),O=K!==Ne.isDirty);const Re=mi($(s,_),C);K=$(r.dirtyFields,_),Re?ut(r.dirtyFields,_):Ae(r.dirtyFields,_,!0),Ne.dirtyFields=r.dirtyFields,O=O||f.dirtyFields&&K!==!Re}if(P){const Re=$(r.touchedFields,_);Re||(Ae(r.touchedFields,_,P),Ne.touchedFields=r.touchedFields,O=O||f.touchedFields&&Re!==P)}return O&&F&&d.state.next(Ne),O?Ne:{}},M=(_,C,P,j)=>{const F=$(r.errors,_),O=f.isValid&&pi(C)&&r.isValid!==C;if(t.delayError&&P?(u=v(()=>E(_,P)),u(t.delayError)):(clearTimeout(c),u=null,P?Ae(r.errors,_,P):ut(r.errors,_)),(P?!mi(F,P):F)||!Ht(j)||O){const K={...j,...O&&pi(C)?{isValid:C}:{},errors:r.errors,name:_};r={...r,...K},d.state.next(K)}g(!1)},W=async _=>n.resolver(o,n.context,YD(_||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),U=async _=>{const{errors:C}=await W(_);if(_)for(const P of _){const j=$(C,P);j?Ae(r.errors,P,j):ut(r.errors,P)}else r.errors=C;return C},fe=async(_,C,P={valid:!0})=>{for(const j in _){const F=_[j];if(F){const{_f:O,...K}=F;if(O){const Ne=l.array.has(O.name),Re=await o_(F,o,k,n.shouldUseNativeValidation&&!C,Ne);if(Re[O.name]&&(P.valid=!1,C))break;!C&&($(Re,O.name)?Ne?WD(r.errors,Re,O.name):Ae(r.errors,O.name,Re[O.name]):ut(r.errors,O.name))}K&&await fe(K,C,P)}}return P.valid},G=()=>{for(const _ of l.unMount){const C=$(i,_);C&&(C._f.refs?C._f.refs.every(P=>!Zf(P)):!Zf(C._f.ref))&&Pt(_)}l.unMount=new Set},Z=(_,C)=>(_&&C&&Ae(o,_,C),!mi(Se(),s)),pe=(_,C,P)=>VD(_,l,{...a.mount?o:Qe(C)?s:bn(_)?{[_]:C}:C},P,C),De=_=>Qa($(a.mount?o:s,_,t.shouldUnregister?$(s,_,[]):[])),Ee=(_,C,P={})=>{const j=$(i,_);let F=C;if(j){const O=j._f;O&&(!O.disabled&&Ae(o,_,DS(C,O)),F=rc(O.ref)&&St(C)?"":C,RS(O.ref)?[...O.ref.options].forEach(K=>K.selected=F.includes(K.value)):O.refs?qa(O.ref)?O.refs.length>1?O.refs.forEach(K=>(!K.defaultChecked||!K.disabled)&&(K.checked=Array.isArray(F)?!!F.find(Ne=>Ne===K.value):F===K.value)):O.refs[0]&&(O.refs[0].checked=!!F):O.refs.forEach(K=>K.checked=K.value===F):Hm(O.ref)?O.ref.value="":(O.ref.value=F,O.ref.type||d.values.next({name:_,values:{...o}})))}(P.shouldDirty||P.shouldTouch)&&N(_,F,P.shouldTouch,P.shouldDirty,!0),P.shouldValidate&&J(_)},He=(_,C,P)=>{for(const j in C){const F=C[j],O=`${_}.${j}`,K=$(i,O);(l.array.has(_)||!sc(F)||K&&!K._f)&&!ls(F)?He(O,F,P):Ee(O,F,P)}},L=(_,C,P={})=>{const j=$(i,_),F=l.array.has(_),O=Un(C);Ae(o,_,O),F?(d.array.next({name:_,values:{...o}}),(f.isDirty||f.dirtyFields)&&P.shouldDirty&&d.state.next({name:_,dirtyFields:ed(s,o),isDirty:Z(_,O)})):j&&!j._f&&!St(O)?He(_,O,P):Ee(_,O,P),t_(_,l)&&d.state.next({...r}),d.values.next({name:_,values:{...o}}),!a.mount&&e()},Y=async _=>{const C=_.target;let P=C.name,j=!0;const F=$(i,P),O=()=>C.type?td(F._f):DD(_);if(F){let K,Ne;const Re=O(),sn=_.type===Zy.BLUR||_.type===Zy.FOCUS_OUT,nl=!KD(F._f)&&!n.resolver&&!$(r.errors,P)&&!F._f.deps||qD(sn,$(r.touchedFields,P),r.isSubmitted,w,y),Zr=t_(P,l,sn);Ae(o,P,Re),sn?(F._f.onBlur&&F._f.onBlur(_),u&&u(0)):F._f.onChange&&F._f.onChange(_);const Js=N(P,Re,sn,!1),rl=!Ht(Js)||Zr;if(!sn&&d.values.next({name:P,type:_.type,values:{...o}}),nl)return f.isValid&&h(),rl&&d.state.next({name:P,...Zr?{}:Js});if(!sn&&Zr&&d.state.next({...r}),g(!0),n.resolver){const{errors:il}=await W([P]),sl=a_(r.errors,i,P),ol=a_(il,i,sl.name||P);K=ol.error,P=ol.name,Ne=Ht(il)}else K=(await o_(F,o,k,n.shouldUseNativeValidation))[P],j=Number.isNaN(Re)||Re===$(o,P,Re),j&&(K?Ne=!1:f.isValid&&(Ne=await fe(i,!0)));j&&(F._f.deps&&J(F._f.deps),M(P,Ne,K,Js))}},J=async(_,C={})=>{let P,j;const F=Xf(_);if(g(!0),n.resolver){const O=await U(Qe(_)?_:F);P=Ht(O),j=_?!F.some(K=>$(O,K)):P}else _?(j=(await Promise.all(F.map(async O=>{const K=$(i,O);return await fe(K&&K._f?{[O]:K}:K)}))).every(Boolean),!(!j&&!r.isValid)&&h()):j=P=await fe(i);return d.state.next({...!bn(_)||f.isValid&&P!==r.isValid?{}:{name:_},...n.resolver||!_?{isValid:P}:{},errors:r.errors,isValidating:!1}),C.shouldFocus&&!j&&Mh(i,O=>O&&$(r.errors,O),_?F:l.mount),j},Se=_=>{const C={...s,...a.mount?o:{}};return Qe(_)?C:bn(_)?$(C,_):_.map(P=>$(C,P))},Me=(_,C)=>({invalid:!!$((C||r).errors,_),isDirty:!!$((C||r).dirtyFields,_),isTouched:!!$((C||r).touchedFields,_),error:$((C||r).errors,_)}),ur=_=>{_&&Xf(_).forEach(C=>ut(r.errors,C)),d.state.next({errors:_?r.errors:{}})},me=(_,C,P)=>{const j=($(i,_,{_f:{}})._f||{}).ref;Ae(r.errors,_,{...C,ref:j}),d.state.next({name:_,errors:r.errors,isValid:!1}),P&&P.shouldFocus&&j&&j.focus&&j.focus()},nn=(_,C)=>br(_)?d.values.subscribe({next:P=>_(pe(void 0,C),P)}):pe(_,C,!0),Pt=(_,C={})=>{for(const P of _?Xf(_):l.mount)l.mount.delete(P),l.array.delete(P),C.keepValue||(ut(i,P),ut(o,P)),!C.keepError&&ut(r.errors,P),!C.keepDirty&&ut(r.dirtyFields,P),!C.keepTouched&&ut(r.touchedFields,P),!n.shouldUnregister&&!C.keepDefaultValue&&ut(s,P);d.values.next({values:{...o}}),d.state.next({...r,...C.keepDirty?{isDirty:Z()}:{}}),!C.keepIsValid&&h()},Dn=({disabled:_,name:C,field:P,fields:j})=>{if(pi(_)){const F=_?void 0:$(o,C,td(P?P._f:$(j,C)._f));Ae(o,C,F),N(C,F,!1,!1,!0)}},rn=(_,C={})=>{let P=$(i,_);const j=pi(C.disabled);return Ae(i,_,{...P||{},_f:{...P&&P._f?P._f:{ref:{name:_}},name:_,mount:!0,...C}}),l.mount.add(_),P?Dn({field:P,disabled:C.disabled,name:_}):T(_,!0,C.value),{...j?{disabled:C.disabled}:{},...n.progressive?{required:!!C.required,min:yo(C.min),max:yo(C.max),minLength:yo(C.minLength),maxLength:yo(C.maxLength),pattern:yo(C.pattern)}:{},name:_,onChange:Y,onBlur:Y,ref:F=>{if(F){rn(_,C),P=$(i,_);const O=Qe(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,K=GD(O),Ne=P._f.refs||[];if(K?Ne.find(Re=>Re===O):O===P._f.ref)return;Ae(i,_,{_f:{...P._f,...K?{refs:[...Ne.filter(Zf),O,...Array.isArray($(s,_))?[{}]:[]],ref:{type:O.type,name:_}}:{ref:O}}}),T(_,!1,void 0,O)}else P=$(i,_,{}),P._f&&(P._f.mount=!1),(n.shouldUnregister||C.shouldUnregister)&&!(LD(l.array,_)&&a.action)&&l.unMount.add(_)}}},Xa=()=>n.shouldFocusError&&Mh(i,_=>_&&$(r.errors,_),l.mount),Ja=(_,C)=>async P=>{P&&(P.preventDefault&&P.preventDefault(),P.persist&&P.persist());let j=Un(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:F,values:O}=await W();r.errors=F,j=O}else await fe(i);ut(r.errors,"root"),Ht(r.errors)?(d.state.next({errors:{}}),await _(j,P)):(C&&await C({...r.errors},P),Xa(),setTimeout(Xa)),d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ht(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Za=(_,C={})=>{$(i,_)&&(Qe(C.defaultValue)?L(_,$(s,_)):(L(_,C.defaultValue),Ae(s,_,C.defaultValue)),C.keepTouched||ut(r.touchedFields,_),C.keepDirty||(ut(r.dirtyFields,_),r.isDirty=C.defaultValue?Z(_,$(s,_)):Z()),C.keepError||(ut(r.errors,_),f.isValid&&h()),d.state.next({...r}))},el=(_,C={})=>{const P=_?Un(_):s,j=Un(P),F=_&&!Ht(_)?j:s;if(C.keepDefaultValues||(s=P),!C.keepValues){if(C.keepDirtyValues||m)for(const O of l.mount)$(r.dirtyFields,O)?Ae(F,O,$(o,O)):L(O,$(F,O));else{if(Wm&&Qe(_))for(const O of l.mount){const K=$(i,O);if(K&&K._f){const Ne=Array.isArray(K._f.refs)?K._f.refs[0]:K._f.ref;if(rc(Ne)){const Re=Ne.closest("form");if(Re){Re.reset();break}}}}i={}}o=t.shouldUnregister?C.keepDefaultValues?Un(s):{}:Un(F),d.array.next({values:{...F}}),d.values.next({values:{...F}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!f.isValid||!!C.keepIsValid,a.watch=!!t.shouldUnregister,d.state.next({submitCount:C.keepSubmitCount?r.submitCount:0,isDirty:C.keepDirty?r.isDirty:!!(C.keepDefaultValues&&!mi(_,s)),isSubmitted:C.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:C.keepDirtyValues?r.dirtyFields:C.keepDefaultValues&&_?ed(s,_):{},touchedFields:C.keepTouched?r.touchedFields:{},errors:C.keepErrors?r.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},tl=(_,C)=>el(br(_)?_(o):_,C);return{control:{register:rn,unregister:Pt,getFieldState:Me,handleSubmit:Ja,setError:me,_executeSchema:W,_getWatch:pe,_getDirty:Z,_updateValid:h,_removeUnmounted:G,_updateFieldArray:p,_updateDisabledField:Dn,_getFieldArray:De,_reset:el,_resetDefaultValues:()=>br(n.defaultValues)&&n.defaultValues().then(_=>{tl(_,n.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:_=>{r={...r,..._}},_subjects:d,_proxyFormState:f,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(_){a=_},get _defaultValues(){return s},get _names(){return l},set _names(_){l=_},get _formState(){return r},set _formState(_){r=_},get _options(){return n},set _options(_){n={...n,..._}}},trigger:J,register:rn,handleSubmit:Ja,watch:nn,setValue:L,getValues:Se,reset:tl,resetField:Za,clearErrors:ur,unregister:Pt,setError:me,setFocus:(_,C={})=>{const P=$(i,_),j=P&&P._f;if(j){const F=j.refs?j.refs[0]:j.ref;F.focus&&(F.focus(),C.shouldSelect&&F.select())}},getFieldState:Me}}function ZD(t={}){const e=qt.useRef(),n=qt.useRef(),[r,i]=qt.useState({isDirty:!1,isValidating:!1,isLoading:br(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:br(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...JD(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,zD({subject:s._subjects.state,next:o=>{jD(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),qt.useEffect(()=>{t.values&&!mi(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),qt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=UD(r,s),e.current}const l_=({type:t,placeholder:e,defaultValue:n,register:r,variant:i="base"})=>{const[s,o]=x.useState(null),a={base:"border-themePrimary",danger:"border-themeDanger"};return x.useEffect(()=>{o(a[i])},[s,i]),b.jsx("input",{...r,defaultValue:n,type:t,placeholder:e,className:`${s} h-12 p-2 border-2 rounded-2xl mt-2 mb-2 w-full transition-transform duration-200`})};function eM({usersInput:t,resetField:e,setSelectedUsers:n,selectedUsers:r}){const i=x.useContext(Tm),s=x.useContext($a),[o,a]=x.useState(void 0);function l(f){if(f===void 0){a(void 0);return}if(f.length===0){a(void 0);return}if(f.length>0){const d=i==null?void 0:i.filter(m=>{if(r!==void 0&&r.filter(k=>k===m.uid).length!==0||m.uid===(s==null?void 0:s.uid))return null;const y=m.email.includes(f);if(y===!1)return null;if(y===!0)return!0});a(d)}}function u(f){e("usersInput"),n(d=>d?[...d,f.uid]:[f.uid])}function c(f){const d=r==null?void 0:r.filter(m=>m!==(f==null?void 0:f.uid));n(d)}return x.useEffect(()=>{l(t)},[t,r]),b.jsxs(b.Fragment,{children:[b.jsx("div",{children:r?b.jsx("div",{className:`${r.length===0?"hidden":"visible"} border-themePrimary border-2 rounded-2xl p-2 mb-2`,children:r.map(f=>{const d=i==null?void 0:i.filter(m=>m.uid===f)[0];return d===void 0?b.jsx(b.Fragment,{children:"Error"}):b.jsxs("div",{onClick:()=>c(d),className:"flex gap-2 items-center pt-1 pb-1",children:[b.jsx(wa,{imageUrl:d.photoUrl}),b.jsxs("p",{className:"text-xs",children:[" ",d.email]})]})})}):null}),b.jsx("div",{className:`${o?"h-16 opacity-100 p-2":"h-0 opacity-0 p-0"} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`,children:o!==void 0&&(o==null?void 0:o.length)>0?o.map(f=>b.jsxs("div",{onClick:()=>u(f),className:"flex gap-2 items-center p-1",children:[b.jsx(wa,{imageUrl:f.photoUrl}),b.jsxs("p",{className:"text-xs",children:[" ",f.email]})]})):b.jsx("div",{className:"p-1 text-center grid items-center h-full",children:"User not found"})})]})}let pn="id";const lr=new Date;pn+=lr.getFullYear();pn+=lr.getMonth()+1;pn+=lr.getDate();pn+=lr.getMinutes();pn+=lr.getSeconds();pn+=lr.getMilliseconds();const tM=lr.getFullYear();let nu=`${lr.getMonth()+1}`;Number(nu)<10&&(nu=`0${nu}`);let ru=`${lr.getDate()}`;Number(ru)<10&&(ru=`0${ru}`);function MS({type:t,currentEvent:e}){const n=Jr(),r=x.useContext(Tm),i=x.useContext($a),[s,o]=x.useState(void 0),{register:a,handleSubmit:l,watch:u,formState:{errors:c},resetField:f,setValue:d}=ZD(),m=u("usersInput"),y=h=>{t==="create"&&w(h),t==="edit"&&k(h)},w=h=>{if(i===void 0){n("/login");return}let g={id:pn,date:`${tM}-${nu}-${ru}`,name:h.name,owner:i==null?void 0:i.uid,users:{}};s!==void 0&&s.length>0&&s.map(T=>{Object.defineProperty(g.users,T,{value:T,enumerable:!0}),v(T,pn)}),Co(Ft(Kt,"events/"+pn),g);const p=i==null?void 0:i.ownerOfEvents.length;let E={};Object.defineProperty(E,p,{value:pn,enumerable:!0}),Hv(Ft(Kt,`users/${i.uid}/ownerOfEvents`),E),n("/event/"+pn)},k=h=>{if(e===void 0)return;let g={id:e.id,date:e.date,name:h.name,owner:e.owner,users:{}};s!==void 0&&s.length>0&&s.map(T=>{Object.defineProperty(g.users,T,{value:T,enumerable:!0})}),Co(Ft(Kt,"events/"+e.id),g);const p=s==null?void 0:s.filter(T=>e.users.includes(T)?null:T);p==null||p.forEach(T=>{r==null||r.find(N=>{if(N.uid===T){let M=N.participateOfEvents;M.push(e.id),console.log(M);const W={};M.forEach((U,fe)=>{Object.defineProperty(W,fe,{value:U,enumerable:!0})}),Co(Ft(Kt,`users/${T}/participateOfEvents`),W)}})}),e.users.filter(T=>s!=null&&s.includes(T)?null:T).forEach(T=>{const N=r==null?void 0:r.find(U=>U.uid===T?U:!1),M=N==null?void 0:N.participateOfEvents.filter(U=>U===e.id?null:U),W={};M==null||M.forEach((U,fe)=>{Object.defineProperty(W,fe,{value:U,enumerable:!0})}),Co(Ft(Kt,`users/${T}/participateOfEvents`),W)}),n("/event/"+e.id)};function v(h,g){if(r===void 0)return;const E=r.filter(N=>N.uid===h)[0].participateOfEvents.length,T={};Object.defineProperty(T,E,{value:g,enumerable:!0}),console.log(T),Hv(Ft(Kt,`users/${h}/participateOfEvents/`),T)}return x.useEffect(()=>{t==="edit"&&e!==void 0&&(d("name",e.name),o([...e.users]))},[e]),b.jsxs("form",{onSubmit:l(y),className:"grid h-full grid-rows-EventFormTemplate",children:[b.jsxs("label",{children:[b.jsx(l_,{type:"text",defaultValue:"",register:a("name",{required:!0}),placeholder:"Event name",variant:c.name?"danger":"base"}),c.name&&b.jsx("span",{className:"text-themeDanger",children:"This field is required"})]}),b.jsxs("label",{children:[b.jsx(l_,{type:"text",defaultValue:"",register:a("usersInput"),placeholder:"Add users"}),b.jsx(eM,{usersInput:m,resetField:f,setSelectedUsers:o,selectedUsers:s})]}),b.jsx("div",{className:"self-end",children:b.jsx(kr,{variant:"outlined",type:"submit",children:"Submit"})})]})}function nM(){return console.log(),b.jsxs("div",{className:"bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-md p-4 h-full",children:[b.jsx("p",{className:"text-lg font-bold pb-2",children:"Create new Event"}),b.jsx(MS,{type:"create"})]})}function LS({children:t}){return b.jsxs("div",{className:"w-full mt-6 mb-6 flex gap-2",children:[...t]})}function Lh({children:t,onClick:e}){return b.jsx("div",{onClick:e,className:"p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer",children:t})}function rM(){const t=$E(),e=Jr(),n=x.useContext($c),r=x.useContext(Hc),i=x.useContext($a),[s,o]=x.useState(void 0),[a,l]=x.useState(!1),[u,c]=x.useState([]),[f,d]=x.useState(void 0);function m(){if(i!==void 0){if(t.id===void 0){l("Event not Found");return}if(n){const g=y(n,t.id);g&&(o(g),d(i))}if(r){const g=y(r,t.id);g&&(o(g),w(g.owner))}}}function y(g,p){if(p===void 0)return!1;const E=g.filter(T=>T.id===p?T:null)[0];return E===void 0?!1:E}async function w(g){await Uo(Ft(Kt,`/users/${g}`),p=>{p.exists()&&d(p.val())})}function k(g){const p=J1(Ft(Kt,`users/${g}`));Uo(p,E=>{E.exists()&&c(T=>[...T,E.val()])})}function v(){s==null||s.users.map(g=>{k(g)}),console.log(u)}function h(){e(`/event/${t.id}/edit`)}return x.useEffect(()=>{Ri.currentUser!==null&&(m(),s&&u.length==0&&v())},[s,n,r,u]),s===void 0&&!a?b.jsx(Bm,{size:"big"}):a!==!1?(console.log(a),b.jsx("div",{children:a})):s?b.jsxs("div",{className:"border-2 border-themePrimary p-6 rounded-2xl h-full",children:[b.jsxs("div",{className:"flex justify-between items-center mb-6",children:[b.jsx("span",{className:"font-bold text-2xl",children:s.name}),b.jsx(wa,{imageUrl:f==null?void 0:f.photoUrl,size:"medium"})]}),b.jsx("div",{className:"flex gap-2",children:u.map(g=>b.jsx(wa,{imageUrl:g.photoUrl,size:"medium"}))}),b.jsxs(LS,{children:[b.jsx(Lh,{onClick:h,children:"Edit Event"}),b.jsx(b.Fragment,{})]})]}):b.jsx("div",{children:"Error not found"})}function iM(){return b.jsxs("div",{children:[b.jsx(kr,{variant:"cta",onClick:()=>{},children:"CTA"}),b.jsx(kr,{variant:"outlined",onClick:()=>{},children:"Outlined"}),b.jsx(kr,{variant:"base",onClick:()=>{},children:"Base"}),b.jsx(kr,{variant:"base",onClick:()=>{},children:"Base"}),b.jsx("div",{className:"bg-themePrimary",children:b.jsxs("svg",{width:"281.45000000000005",height:"32.70833206483755",viewBox:"0 0 370.18518518518516 43.020571904496066",children:[b.jsx("defs",{id:"SvgjsDefs2066"}),b.jsx("g",{transform:"matrix(0.0737537678806971,0,0,0.0737537678806971,0,-3.3779225126662675)",fill:"#fef4e8",children:b.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[" ",b.jsx("path",{d:"M587.1,45.8c-52.2,0-103.5,13.8-148.2,40.5c-43.8-25.9-95.1-40.5-147.2-40.5C130.8,45.8,0,176.5,0,337.4         c0,160.9,130.8,291.7,291.7,291.7c52,0,103.1-13.7,147.7-40.2c44.6,26.5,95.7,40.2,147.7,40.2c160.9,0,291.7-130.8,291.7-291.7         C878.8,176.5,748,45.8,587.1,45.8z M439.4,559.9c-46.1-30.9-80.6-74-100.4-123.3l113.7,113.7C448.4,553.6,443.9,556.8,439.4,559.9z          M473.4,532.7L323.8,383.2c-2.6-15-3.9-30.3-3.9-45.8c0-3.6,0.1-7.2,0.2-10.8l178.4,179.1C490.8,515.3,482.4,524.3,473.4,532.7z          M514.7,483.7L323.8,292.1c2.5-14.5,6.1-28.6,10.9-42.3l199.2,199.2C528.3,461,521.9,472.6,514.7,483.7z M544.6,421.5L345.8,222.6         c5.5-11.5,11.8-22.6,18.9-33.3l190.1,190.1C552.5,393.8,549.1,407.9,544.6,421.5z M380.9,167.4c7.9-9.6,16.5-18.7,25.8-27.3         l146.6,146.6c3.1,16.5,4.7,33.4,4.7,50.7c0,2.3,0,4.6-0.1,7L380.9,167.4z M427.6,122.8c3.7-2.8,7.6-5.5,11.5-8.2         c44.6,29.3,78.1,70.3,98,117.6L427.6,122.8z M24.5,337.4C24.5,189.7,144,70.2,291.7,70.2c44.2,0,86.6,10.3,125.1,31         c-76.2,54.6-120.4,142.1-120.4,236.2S341.6,519,416.8,573.6c-38.6,20.7-81.9,31-125.1,31C144,604.7,24.5,485.2,24.5,337.4z          M587.1,604.7c-44.2,0-86.6-10.3-125.1-31c76.2-54.6,120.4-142.1,120.4-236.2S538.2,155.8,462,101.3c38.6-20.7,80.9-31,125.1-31         c147.7,0,267.2,119.5,267.2,267.2C854.4,485.2,734.9,604.7,587.1,604.7z"})]})})]})}),b.jsxs(LS,{children:[b.jsx(Lh,{children:"Pill"}),b.jsx(Lh,{children:"Ale bang"})]})]})}function sM(){const[t,e]=x.useState(),n=x.useContext($c),r=x.useContext(Hc),i=$E(),s=()=>{const o=n==null?void 0:n.filter(l=>l.id===i.id?!0:null),a=r==null?void 0:r.filter(l=>l.id===i.id?!0:null);o!==void 0&&o.length>0&&e(o[0]),a!==void 0&&a.length>0&&e(a[0])};return x.useEffect(()=>{s()},[t,n,r]),b.jsx("div",{className:"bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-md p-4 h-full",children:b.jsx(MS,{type:"edit",currentEvent:t})})}const oM=gO([{path:"/",element:b.jsx(ND,{}),children:[{path:"/",element:b.jsx(OD,{})},{path:"/event/:id",element:b.jsx(rM,{})},{path:"/event/:id/edit",element:b.jsx(sM,{})},{path:"/events/create",element:b.jsx(nM,{})}]},{path:"/login",element:b.jsx(RD,{})},{path:"/testing",element:b.jsx(iM,{})}]);nd.createRoot(document.getElementById("root")).render(b.jsx(qt.StrictMode,{children:b.jsx(aO,{router:oM})}));
