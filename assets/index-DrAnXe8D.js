(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var mc={exports:{}},bo={},gc={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function B_(){if(Sp)return lt;Sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function g(I,ie,be){this.props=I,this.context=ie,this.refs=C,this.updater=be||S}g.prototype.isReactComponent={},g.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},g.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=g.prototype;function U(I,ie,be){this.props=I,this.context=ie,this.refs=C,this.updater=be||S}var P=U.prototype=new _;P.constructor=U,w(P,g.prototype),P.isPureReactComponent=!0;var D=Array.isArray,ee=Object.prototype.hasOwnProperty,B={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function $(I,ie,be){var Y,ue={},ge=null,xe=null;if(ie!=null)for(Y in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(ge=""+ie.key),ie)ee.call(ie,Y)&&!N.hasOwnProperty(Y)&&(ue[Y]=ie[Y]);var Ce=arguments.length-2;if(Ce===1)ue.children=be;else if(1<Ce){for(var Pe=Array(Ce),$e=0;$e<Ce;$e++)Pe[$e]=arguments[$e+2];ue.children=Pe}if(I&&I.defaultProps)for(Y in Ce=I.defaultProps,Ce)ue[Y]===void 0&&(ue[Y]=Ce[Y]);return{$$typeof:s,type:I,key:ge,ref:xe,props:ue,_owner:B.current}}function ye(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function E(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function R(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(be){return ie[be]})}var V=/\/+/g;function G(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?R(""+I.key):ie.toString(36)}function se(I,ie,be,Y,ue){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(ge){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,ue=ue(xe),I=Y===""?"."+G(xe,0):Y,D(ue)?(be="",I!=null&&(be=I.replace(V,"$&/")+"/"),se(ue,ie,be,"",function($e){return $e})):ue!=null&&(E(ue)&&(ue=ye(ue,be+(!ue.key||xe&&xe.key===ue.key?"":(""+ue.key).replace(V,"$&/")+"/")+I)),ie.push(ue)),1;if(xe=0,Y=Y===""?".":Y+":",D(I))for(var Ce=0;Ce<I.length;Ce++){ge=I[Ce];var Pe=Y+G(ge,Ce);xe+=se(ge,ie,be,Pe,ue)}else if(Pe=x(I),typeof Pe=="function")for(I=Pe.call(I),Ce=0;!(ge=I.next()).done;)ge=ge.value,Pe=Y+G(ge,Ce++),xe+=se(ge,ie,be,Pe,ue);else if(ge==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function le(I,ie,be){if(I==null)return I;var Y=[],ue=0;return se(I,Y,"","",function(ge){return ie.call(be,ge,ue++)}),Y}function J(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(be){(I._status===0||I._status===-1)&&(I._status=1,I._result=be)},function(be){(I._status===0||I._status===-1)&&(I._status=2,I._result=be)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ae={current:null},k={transition:null},ce={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function re(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:le,forEach:function(I,ie,be){le(I,function(){ie.apply(this,arguments)},be)},count:function(I){var ie=0;return le(I,function(){ie++}),ie},toArray:function(I){return le(I,function(ie){return ie})||[]},only:function(I){if(!E(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},lt.Component=g,lt.Fragment=n,lt.Profiler=a,lt.PureComponent=U,lt.StrictMode=r,lt.Suspense=p,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,lt.act=re,lt.cloneElement=function(I,ie,be){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Y=w({},I.props),ue=I.key,ge=I.ref,xe=I._owner;if(ie!=null){if(ie.ref!==void 0&&(ge=ie.ref,xe=B.current),ie.key!==void 0&&(ue=""+ie.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Pe in ie)ee.call(ie,Pe)&&!N.hasOwnProperty(Pe)&&(Y[Pe]=ie[Pe]===void 0&&Ce!==void 0?Ce[Pe]:ie[Pe])}var Pe=arguments.length-2;if(Pe===1)Y.children=be;else if(1<Pe){Ce=Array(Pe);for(var $e=0;$e<Pe;$e++)Ce[$e]=arguments[$e+2];Y.children=Ce}return{$$typeof:s,type:I.type,key:ue,ref:ge,props:Y,_owner:xe}},lt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},lt.createElement=$,lt.createFactory=function(I){var ie=$.bind(null,I);return ie.type=I,ie},lt.createRef=function(){return{current:null}},lt.forwardRef=function(I){return{$$typeof:d,render:I}},lt.isValidElement=E,lt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:J}},lt.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},lt.startTransition=function(I){var ie=k.transition;k.transition={};try{I()}finally{k.transition=ie}},lt.unstable_act=re,lt.useCallback=function(I,ie){return ae.current.useCallback(I,ie)},lt.useContext=function(I){return ae.current.useContext(I)},lt.useDebugValue=function(){},lt.useDeferredValue=function(I){return ae.current.useDeferredValue(I)},lt.useEffect=function(I,ie){return ae.current.useEffect(I,ie)},lt.useId=function(){return ae.current.useId()},lt.useImperativeHandle=function(I,ie,be){return ae.current.useImperativeHandle(I,ie,be)},lt.useInsertionEffect=function(I,ie){return ae.current.useInsertionEffect(I,ie)},lt.useLayoutEffect=function(I,ie){return ae.current.useLayoutEffect(I,ie)},lt.useMemo=function(I,ie){return ae.current.useMemo(I,ie)},lt.useReducer=function(I,ie,be){return ae.current.useReducer(I,ie,be)},lt.useRef=function(I){return ae.current.useRef(I)},lt.useState=function(I){return ae.current.useState(I)},lt.useSyncExternalStore=function(I,ie,be){return ae.current.useSyncExternalStore(I,ie,be)},lt.useTransition=function(){return ae.current.useTransition()},lt.version="18.3.1",lt}var Mp;function Hf(){return Mp||(Mp=1,gc.exports=B_()),gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function H_(){if(Ep)return bo;Ep=1;var s=Hf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(y[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return bo.Fragment=n,bo.jsx=f,bo.jsxs=f,bo}var Tp;function V_(){return Tp||(Tp=1,mc.exports=H_()),mc.exports}var ct=V_(),ln=Hf(),qa={},_c={exports:{}},An={},vc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function G_(){return wp||(wp=1,(function(s){function e(k,ce){var re=k.length;k.push(ce);e:for(;0<re;){var I=re-1>>>1,ie=k[I];if(0<a(ie,ce))k[I]=ce,k[re]=ie,re=I;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ce=k[0],re=k.pop();if(re!==ce){k[0]=re;e:for(var I=0,ie=k.length,be=ie>>>1;I<be;){var Y=2*(I+1)-1,ue=k[Y],ge=Y+1,xe=k[ge];if(0>a(ue,re))ge<ie&&0>a(xe,ue)?(k[I]=xe,k[ge]=re,I=ge):(k[I]=ue,k[Y]=re,I=Y);else if(ge<ie&&0>a(xe,re))k[I]=xe,k[ge]=re,I=ge;else break e}}return ce}function a(k,ce){var re=k.sortIndex-ce.sortIndex;return re!==0?re:k.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,y=null,x=3,S=!1,w=!1,C=!1,g=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=k)r(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(m)}}function D(k){if(C=!1,P(k),!w)if(n(p)!==null)w=!0,J(ee);else{var ce=n(m);ce!==null&&ae(D,ce.startTime-k)}}function ee(k,ce){w=!1,C&&(C=!1,_($),$=-1),S=!0;var re=x;try{for(P(ce),y=n(p);y!==null&&(!(y.expirationTime>ce)||k&&!R());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var ie=I(y.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),P(ce)}else r(p);y=n(p)}if(y!==null)var be=!0;else{var Y=n(m);Y!==null&&ae(D,Y.startTime-ce),be=!1}return be}finally{y=null,x=re,S=!1}}var B=!1,N=null,$=-1,ye=5,E=-1;function R(){return!(s.unstable_now()-E<ye)}function V(){if(N!==null){var k=s.unstable_now();E=k;var ce=!0;try{ce=N(!0,k)}finally{ce?G():(B=!1,N=null)}}else B=!1}var G;if(typeof U=="function")G=function(){U(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=V,G=function(){le.postMessage(null)}}else G=function(){g(V,0)};function J(k){N=k,B||(B=!0,G())}function ae(k,ce){$=g(function(){k(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,J(ee))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var re=x;x=ce;try{return k()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ce){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=x;x=k;try{return ce()}finally{x=re}},s.unstable_scheduleCallback=function(k,ce,re){var I=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,k={id:v++,callback:ce,priorityLevel:k,startTime:re,expirationTime:ie,sortIndex:-1},re>I?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(C?(_($),$=-1):C=!0,ae(D,re-I))):(k.sortIndex=ie,e(p,k),w||S||(w=!0,J(ee))),k},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(k){var ce=x;return function(){var re=x;x=ce;try{return k.apply(this,arguments)}finally{x=re}}}})(xc)),xc}var Ap;function W_(){return Ap||(Ap=1,vc.exports=G_()),vc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function X_(){if(Rp)return An;Rp=1;var s=Hf(),e=W_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(t){return p.call(y,t)?!0:p.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,U);g[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,U);g[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,U);g[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var c=g.hasOwnProperty(i)?g[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),B=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),k=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var be=!1;function Y(t,i){if(!t||be)return"";be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var c=ne.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=L);break}}}finally{be=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Y(t.type,!1),t;case 11:return t=Y(t.type.render,!1),t;case 1:return t=Y(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case B:return"Portal";case ye:return"Profiler";case $:return"StrictMode";case G:return"Suspense";case se:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case V:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case J:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(t){var i=Pe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=$e(t))}function ot(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Pe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function O(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xt(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function it(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function at(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function He(t,i){at(t,i);var o=Ce(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ze(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ze(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function yt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ze(t,i,o){(i!=="number"||O(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var b=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function q(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(b(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ce(o)}}function _e(t,i){var o=Ce(i.value),l=Ce(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?je(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,pt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Se(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){et.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function ke(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ft=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(t,i){if(i){if(ft[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Mt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oe=null,he=null,Ae=null;function Ue(t){if(t=mo(t)){if(typeof oe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),oe(t.stateNode,t.type,i))}}function dt(t){he?Ae?Ae.push(t):Ae=[t]:he=t}function Ft(){if(he){var t=he,i=Ae;if(Ae=he=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function sn(t,i){return t(i)}function mt(){}var Qt=!1;function Bn(t,i,o){if(Qt)return t(i,o);Qt=!0;try{return sn(t,i,o)}finally{Qt=!1,(he!==null||Ae!==null)&&(mt(),Ft())}}function Hi(t,i){var o=t.stateNode;if(o===null)return null;var l=ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $r=!1;if(d)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{$r=!1}function Ks(t,i,o,l,c,h,M,L,F){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(me){this.onError(me)}}var Vi=!1,Sr=null,gi=!1,Zr=null,Qr={onError:function(t){Vi=!0,Sr=t}};function Wo(t,i,o,l,c,h,M,L,F){Vi=!1,Sr=null,Ks.apply(Qr,arguments)}function Xo(t,i,o,l,c,h,M,L,F){if(Wo.apply(this,arguments),Vi){if(Vi){var ne=Sr;Vi=!1,Sr=null}else throw Error(n(198));gi||(gi=!0,Zr=ne)}}function _i(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Yo(t){if(_i(t)!==t)throw Error(n(188))}function A(t){var i=t.alternate;if(!i){if(i=_i(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Yo(c),t;if(h===l)return Yo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=h;break}if(L===l){M=!0,l=c,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=c;break}if(L===l){M=!0,l=h,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function W(t){return t=A(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,Ee=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Qe=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,St=e.unstable_LowPriority,At=e.unstable_IdlePriority,Ct=null,It=null;function _t(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ct,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Un,jt=Math.log,vt=Math.LN2;function Un(t){return t>>>=0,t===0?32:31-(jt(t)/vt|0)|0}var $n=64,Jt=4194304;function vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=vi(L):(h&=M,h!==0&&(l=vi(h)))}else M=o&~c,M!==0?l=vi(M):h!==0&&(l=vi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Oe(i),c=1<<o,l|=t[o],i&=~c;return l}function ui(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $s(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Oe(h),L=1<<M,F=c[M];F===-1?((L&o)===0||(L&l)!==0)&&(c[M]=ui(L,i)):F<=i&&(t.expiredLanes|=L),h&=~L}}function un(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jr(){var t=$n;return $n<<=1,($n&4194240)===0&&($n=64),t}function Zs(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Gi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function ag(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Oe(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function kl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Oe(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Tt=0;function Jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ed,zl,td,nd,id,Bl=!1,qo=[],Wi=null,Xi=null,ji=null,Qs=new Map,Js=new Map,Yi=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=mo(i),i!==null&&zl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ug(t,i,o,l,c){switch(i){case"focusin":return Wi=eo(Wi,t,i,o,l,c),!0;case"dragenter":return Xi=eo(Xi,t,i,o,l,c),!0;case"mouseover":return ji=eo(ji,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Qs.set(h,eo(Qs.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Js.set(h,eo(Js.get(h)||null,t,i,o,l,c)),!0}return!1}function sd(t){var i=Mr(t.target);if(i!==null){var o=_i(i);if(o!==null){if(i=o.tag,i===13){if(i=jo(o),i!==null){t.blockedOn=i,id(t.priority,function(){td(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);H=l,o.target.dispatchEvent(l),H=null}else return i=mo(o),i!==null&&zl(i),t.blockedOn=o,!1;i.shift()}return!0}function od(t,i,o){Ko(t)&&o.delete(i)}function cg(){Bl=!1,Wi!==null&&Ko(Wi)&&(Wi=null),Xi!==null&&Ko(Xi)&&(Xi=null),ji!==null&&Ko(ji)&&(ji=null),Qs.forEach(od),Js.forEach(od)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cg)))}function no(t){function i(c){return to(c,t)}if(0<qo.length){to(qo[0],t);for(var o=1;o<qo.length;o++){var l=qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&to(Wi,t),Xi!==null&&to(Xi,t),ji!==null&&to(ji,t),Qs.forEach(i),Js.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)sd(o),o.blockedOn===null&&Yi.shift()}var es=D.ReactCurrentBatchConfig,$o=!0;function fg(t,i,o,l){var c=Tt,h=es.transition;es.transition=null;try{Tt=1,Hl(t,i,o,l)}finally{Tt=c,es.transition=h}}function dg(t,i,o,l){var c=Tt,h=es.transition;es.transition=null;try{Tt=4,Hl(t,i,o,l)}finally{Tt=c,es.transition=h}}function Hl(t,i,o,l){if($o){var c=Vl(t,i,o,l);if(c===null)su(t,i,l,Zo,o),rd(t,l);else if(ug(c,t,i,o,l))l.stopPropagation();else if(rd(t,l),i&4&&-1<lg.indexOf(t)){for(;c!==null;){var h=mo(c);if(h!==null&&ed(h),h=Vl(t,i,o,l),h===null&&su(t,i,l,Zo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else su(t,i,l,null,o)}}var Zo=null;function Vl(t,i,o,l){if(Zo=null,t=Le(l),t=Mr(t),t!==null)if(i=_i(t),i===null)t=null;else if(o=i.tag,o===13){if(t=jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zo=t,null}function ad(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Qe:return 4;case We:case St:return 16;case At:return 536870912;default:return 16}default:return 16}}var qi=null,Gl=null,Qo=null;function ld(){if(Qo)return Qo;var t,i=Gl,o=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Qo=c.slice(t,1<l?1-l:void 0)}function Jo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function ud(){return!1}function In(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ea:ud,this.isPropagationStopped=ud,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=In(ts),io=re({},ts,{view:0,detail:0}),hg=In(io),Xl,jl,ro,ta=re({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Xl=t.screenX-ro.screenX,jl=t.screenY-ro.screenY):jl=Xl=0,ro=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),cd=In(ta),pg=re({},ta,{dataTransfer:0}),mg=In(pg),gg=re({},io,{relatedTarget:0}),Yl=In(gg),_g=re({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),vg=In(_g),xg=re({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yg=In(xg),Sg=re({},ts,{data:0}),fd=In(Sg),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Tg[t])?!!i[t]:!1}function ql(){return wg}var Ag=re({},io,{key:function(t){if(t.key){var i=Mg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Eg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rg=In(Ag),Cg=re({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=In(Cg),Pg=re({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),bg=In(Pg),Lg=re({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=In(Lg),Ug=re({},ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=In(Ug),Ng=[9,13,27,32],Kl=d&&"CompositionEvent"in window,so=null;d&&"documentMode"in document&&(so=document.documentMode);var Fg=d&&"TextEvent"in window&&!so,hd=d&&(!Kl||so&&8<so&&11>=so),pd=" ",md=!1;function gd(t,i){switch(t){case"keyup":return Ng.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Og(t,i){switch(t){case"compositionend":return _d(i);case"keypress":return i.which!==32?null:(md=!0,pd);case"textInput":return t=i.data,t===pd&&md?null:t;default:return null}}function kg(t,i){if(ns)return t==="compositionend"||!Kl&&gd(t,i)?(t=ld(),Qo=Gl=qi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hd&&i.locale!=="ko"?null:i.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!zg[t.type]:i==="textarea"}function xd(t,i,o,l){dt(l),i=oa(i,"onChange"),0<i.length&&(o=new Wl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var oo=null,ao=null;function Bg(t){Od(t,0)}function na(t){var i=as(t);if(ot(i))return t}function Hg(t,i){if(t==="change")return i}var yd=!1;if(d){var $l;if(d){var Zl="oninput"in document;if(!Zl){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Zl=typeof Sd.oninput=="function"}$l=Zl}else $l=!1;yd=$l&&(!document.documentMode||9<document.documentMode)}function Md(){oo&&(oo.detachEvent("onpropertychange",Ed),ao=oo=null)}function Ed(t){if(t.propertyName==="value"&&na(ao)){var i=[];xd(i,ao,t,Le(t)),Bn(Bg,i)}}function Vg(t,i,o){t==="focusin"?(Md(),oo=i,ao=o,oo.attachEvent("onpropertychange",Ed)):t==="focusout"&&Md()}function Gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na(ao)}function Wg(t,i){if(t==="click")return na(i)}function Xg(t,i){if(t==="input"||t==="change")return na(i)}function jg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:jg;function lo(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,i){var o=Td(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Td(o)}}function Ad(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ad(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rd(){for(var t=window,i=O();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=O(t.document)}return i}function Ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Yg(t){var i=Rd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ad(o.ownerDocument.documentElement,o)){if(l!==null&&Ql(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=wd(o,h);var M=wd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=d&&"documentMode"in document&&11>=document.documentMode,is=null,Jl=null,uo=null,eu=!1;function Cd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;eu||is==null||is!==O(l)||(l=is,"selectionStart"in l&&Ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&lo(uo,l)||(uo=l,l=oa(Jl,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function ia(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},tu={},Pd={};d&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function ra(t){if(tu[t])return tu[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Pd)return tu[t]=i[o];return t}var bd=ra("animationend"),Ld=ra("animationiteration"),Dd=ra("animationstart"),Ud=ra("transitionend"),Id=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Id.set(t,i),u(i,[t])}for(var nu=0;nu<Nd.length;nu++){var iu=Nd[nu],Kg=iu.toLowerCase(),$g=iu[0].toUpperCase()+iu.slice(1);Ki(Kg,"on"+$g)}Ki(bd,"onAnimationEnd"),Ki(Ld,"onAnimationIteration"),Ki(Dd,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Ud,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Fd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Xo(l,i,void 0,t),t.currentTarget=null}function Od(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],F=L.instance,ne=L.currentTarget;if(L=L.listener,F!==h&&c.isPropagationStopped())break e;Fd(c,L,ne),h=F}else for(M=0;M<l.length;M++){if(L=l[M],F=L.instance,ne=L.currentTarget,L=L.listener,F!==h&&c.isPropagationStopped())break e;Fd(c,L,ne),h=F}}}if(gi)throw t=Zr,gi=!1,Zr=null,t}function Lt(t,i){var o=i[fu];o===void 0&&(o=i[fu]=new Set);var l=t+"__bubble";o.has(l)||(kd(i,t,2,!1),o.add(l))}function ru(t,i,o){var l=0;i&&(l|=4),kd(o,t,l,i)}var sa="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[sa]){t[sa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Zg.has(o)||ru(o,!1,t),ru(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[sa]||(i[sa]=!0,ru("selectionchange",!1,i))}}function kd(t,i,o,l){switch(ad(i)){case 1:var c=fg;break;case 4:c=dg;break;default:c=Hl}o=c.bind(null,i,o,t),c=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function su(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;L!==null;){if(M=Mr(L),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Bn(function(){var ne=h,me=Le(o),ve=[];e:{var pe=Id.get(t);if(pe!==void 0){var Ie=Wl,Be=t;switch(t){case"keypress":if(Jo(o)===0)break e;case"keydown":case"keyup":Ie=Rg;break;case"focusin":Be="focus",Ie=Yl;break;case"focusout":Be="blur",Ie=Yl;break;case"beforeblur":case"afterblur":Ie=Yl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=bg;break;case bd:case Ld:case Dd:Ie=vg;break;case Ud:Ie=Dg;break;case"scroll":Ie=hg;break;case"wheel":Ie=Ig;break;case"copy":case"cut":case"paste":Ie=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=dd}var Ve=(i&4)!==0,Bt=!Ve&&t==="scroll",j=Ve?pe!==null?pe+"Capture":null:pe;Ve=[];for(var z=ne,K;z!==null;){K=z;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,j!==null&&(Me=Hi(z,j),Me!=null&&Ve.push(ho(z,Me,K)))),Bt)break;z=z.return}0<Ve.length&&(pe=new Ie(pe,Be,null,o,me),ve.push({event:pe,listeners:Ve}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",pe&&o!==H&&(Be=o.relatedTarget||o.fromElement)&&(Mr(Be)||Be[xi]))break e;if((Ie||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ie?(Be=o.relatedTarget||o.toElement,Ie=ne,Be=Be?Mr(Be):null,Be!==null&&(Bt=_i(Be),Be!==Bt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=ne),Ie!==Be)){if(Ve=cd,Me="onMouseLeave",j="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=dd,Me="onPointerLeave",j="onPointerEnter",z="pointer"),Bt=Ie==null?pe:as(Ie),K=Be==null?pe:as(Be),pe=new Ve(Me,z+"leave",Ie,o,me),pe.target=Bt,pe.relatedTarget=K,Me=null,Mr(me)===ne&&(Ve=new Ve(j,z+"enter",Be,o,me),Ve.target=K,Ve.relatedTarget=Bt,Me=Ve),Bt=Me,Ie&&Be)t:{for(Ve=Ie,j=Be,z=0,K=Ve;K;K=ss(K))z++;for(K=0,Me=j;Me;Me=ss(Me))K++;for(;0<z-K;)Ve=ss(Ve),z--;for(;0<K-z;)j=ss(j),K--;for(;z--;){if(Ve===j||j!==null&&Ve===j.alternate)break t;Ve=ss(Ve),j=ss(j)}Ve=null}else Ve=null;Ie!==null&&zd(ve,pe,Ie,Ve,!1),Be!==null&&Bt!==null&&zd(ve,Bt,Be,Ve,!0)}}e:{if(pe=ne?as(ne):window,Ie=pe.nodeName&&pe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&pe.type==="file")var Xe=Hg;else if(vd(pe))if(yd)Xe=Xg;else{Xe=Gg;var Ye=Vg}else(Ie=pe.nodeName)&&Ie.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Xe=Wg);if(Xe&&(Xe=Xe(t,ne))){xd(ve,Xe,o,me);break e}Ye&&Ye(t,pe,ne),t==="focusout"&&(Ye=pe._wrapperState)&&Ye.controlled&&pe.type==="number"&&Ze(pe,"number",pe.value)}switch(Ye=ne?as(ne):window,t){case"focusin":(vd(Ye)||Ye.contentEditable==="true")&&(is=Ye,Jl=ne,uo=null);break;case"focusout":uo=Jl=is=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Cd(ve,o,me);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Cd(ve,o,me)}var qe;if(Kl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ns?gd(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(hd&&o.locale!=="ko"&&(ns||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ns&&(qe=ld()):(qi=me,Gl="value"in qi?qi.value:qi.textContent,ns=!0)),Ye=oa(ne,tt),0<Ye.length&&(tt=new fd(tt,t,null,o,me),ve.push({event:tt,listeners:Ye}),qe?tt.data=qe:(qe=_d(o),qe!==null&&(tt.data=qe)))),(qe=Fg?Og(t,o):kg(t,o))&&(ne=oa(ne,"onBeforeInput"),0<ne.length&&(me=new fd("onBeforeInput","beforeinput",null,o,me),ve.push({event:me,listeners:ne}),me.data=qe))}Od(ve,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function oa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Hi(t,o),h!=null&&l.unshift(ho(t,h,c)),h=Hi(t,i),h!=null&&l.push(ho(t,h,c))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,F=L.alternate,ne=L.stateNode;if(F!==null&&F===l)break;L.tag===5&&ne!==null&&(L=ne,c?(F=Hi(o,h),F!=null&&M.unshift(ho(o,F,L))):c||(F=Hi(o,h),F!=null&&M.push(ho(o,F,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Qg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Jg,"")}function aa(t,i,o){if(i=Bd(i),Bd(t)!==i&&o)throw Error(n(425))}function la(){}var ou=null,au=null;function lu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(t){return Hd.resolve(null).then(t).catch(n_)}:uu;function n_(t){setTimeout(function(){throw t})}function cu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),no(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);no(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Vd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ci="__reactFiber$"+os,po="__reactProps$"+os,xi="__reactContainer$"+os,fu="__reactEvents$"+os,i_="__reactListeners$"+os,r_="__reactHandles$"+os;function Mr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[xi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Vd(t);t!==null;){if(o=t[ci])return o;t=Vd(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[ci]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[po]||null}var du=[],ls=-1;function Zi(t){return{current:t}}function Dt(t){0>ls||(t.current=du[ls],du[ls]=null,ls--)}function bt(t,i){ls++,du[ls]=t.current,t.current=i}var Qi={},cn=Zi(Qi),Sn=Zi(!1),Er=Qi;function us(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Mn(t){return t=t.childContextTypes,t!=null}function ca(){Dt(Sn),Dt(cn)}function Gd(t,i,o){if(cn.current!==Qi)throw Error(n(168));bt(cn,i),bt(Sn,o)}function Wd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,xe(t)||"Unknown",c));return re({},o,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=cn.current,bt(cn,t),bt(Sn,Sn.current),!0}function Xd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Wd(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,Dt(Sn),Dt(cn),bt(cn,t)):Dt(Sn),bt(Sn,o)}var yi=null,da=!1,hu=!1;function jd(t){yi===null?yi=[t]:yi.push(t)}function s_(t){da=!0,jd(t)}function Ji(){if(!hu&&yi!==null){hu=!0;var t=0,i=Tt;try{var o=yi;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}yi=null,da=!1}catch(c){throw yi!==null&&(yi=yi.slice(t+1)),te(Ke,Ji),c}finally{Tt=i,hu=!1}}return null}var cs=[],fs=0,ha=null,pa=0,Hn=[],Vn=0,Tr=null,Si=1,Mi="";function wr(t,i){cs[fs++]=pa,cs[fs++]=ha,ha=t,pa=i}function Yd(t,i,o){Hn[Vn++]=Si,Hn[Vn++]=Mi,Hn[Vn++]=Tr,Tr=t;var l=Si;t=Mi;var c=32-Oe(l)-1;l&=~(1<<c),o+=1;var h=32-Oe(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Si=1<<32-Oe(i)+c|o<<c|l,Mi=h+t}else Si=1<<h|o<<c|l,Mi=t}function pu(t){t.return!==null&&(wr(t,1),Yd(t,1,0))}function mu(t){for(;t===ha;)ha=cs[--fs],cs[fs]=null,pa=cs[--fs],cs[fs]=null;for(;t===Tr;)Tr=Hn[--Vn],Hn[Vn]=null,Mi=Hn[--Vn],Hn[Vn]=null,Si=Hn[--Vn],Hn[Vn]=null}var Nn=null,Fn=null,Nt=!1,Qn=null;function qd(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Kd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Fn=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Tr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Fn=null,!0):!1;default:return!1}}function gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _u(t){if(Nt){var i=Fn;if(i){var o=i;if(!Kd(t,i)){if(gu(t))throw Error(n(418));i=$i(o.nextSibling);var l=Nn;i&&Kd(t,i)?qd(l,o):(t.flags=t.flags&-4097|2,Nt=!1,Nn=t)}}else{if(gu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,Nn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function ma(t){if(t!==Nn)return!1;if(!Nt)return $d(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!lu(t.type,t.memoizedProps)),i&&(i=Fn)){if(gu(t))throw Zd(),Error(n(418));for(;i;)qd(t,i),i=$i(i.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=$i(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Nn?$i(t.stateNode.nextSibling):null;return!0}function Zd(){for(var t=Fn;t;)t=$i(t.nextSibling)}function ds(){Fn=Nn=null,Nt=!1}function vu(t){Qn===null?Qn=[t]:Qn.push(t)}var o_=D.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ga(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Qd(t){var i=t._init;return i(t._payload)}function Jd(t){function i(j,z){if(t){var K=j.deletions;K===null?(j.deletions=[z],j.flags|=16):K.push(z)}}function o(j,z){if(!t)return null;for(;z!==null;)i(j,z),z=z.sibling;return null}function l(j,z){for(j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function c(j,z){return j=ar(j,z),j.index=0,j.sibling=null,j}function h(j,z,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<z?(j.flags|=2,z):K):(j.flags|=2,z)):(j.flags|=1048576,z)}function M(j){return t&&j.alternate===null&&(j.flags|=2),j}function L(j,z,K,Me){return z===null||z.tag!==6?(z=uc(K,j.mode,Me),z.return=j,z):(z=c(z,K),z.return=j,z)}function F(j,z,K,Me){var Xe=K.type;return Xe===N?me(j,z,K.props.children,Me,K.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Qd(Xe)===z.type)?(Me=c(z,K.props),Me.ref=go(j,z,K),Me.return=j,Me):(Me=Ba(K.type,K.key,K.props,null,j.mode,Me),Me.ref=go(j,z,K),Me.return=j,Me)}function ne(j,z,K,Me){return z===null||z.tag!==4||z.stateNode.containerInfo!==K.containerInfo||z.stateNode.implementation!==K.implementation?(z=cc(K,j.mode,Me),z.return=j,z):(z=c(z,K.children||[]),z.return=j,z)}function me(j,z,K,Me,Xe){return z===null||z.tag!==7?(z=Ur(K,j.mode,Me,Xe),z.return=j,z):(z=c(z,K),z.return=j,z)}function ve(j,z,K){if(typeof z=="string"&&z!==""||typeof z=="number")return z=uc(""+z,j.mode,K),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ee:return K=Ba(z.type,z.key,z.props,null,j.mode,K),K.ref=go(j,null,z),K.return=j,K;case B:return z=cc(z,j.mode,K),z.return=j,z;case J:var Me=z._init;return ve(j,Me(z._payload),K)}if(b(z)||ce(z))return z=Ur(z,j.mode,K,null),z.return=j,z;ga(j,z)}return null}function pe(j,z,K,Me){var Xe=z!==null?z.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:L(j,z,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case ee:return K.key===Xe?F(j,z,K,Me):null;case B:return K.key===Xe?ne(j,z,K,Me):null;case J:return Xe=K._init,pe(j,z,Xe(K._payload),Me)}if(b(K)||ce(K))return Xe!==null?null:me(j,z,K,Me,null);ga(j,K)}return null}function Ie(j,z,K,Me,Xe){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(K)||null,L(z,j,""+Me,Xe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case ee:return j=j.get(Me.key===null?K:Me.key)||null,F(z,j,Me,Xe);case B:return j=j.get(Me.key===null?K:Me.key)||null,ne(z,j,Me,Xe);case J:var Ye=Me._init;return Ie(j,z,K,Ye(Me._payload),Xe)}if(b(Me)||ce(Me))return j=j.get(K)||null,me(z,j,Me,Xe,null);ga(z,Me)}return null}function Be(j,z,K,Me){for(var Xe=null,Ye=null,qe=z,tt=z=0,nn=null;qe!==null&&tt<K.length;tt++){qe.index>tt?(nn=qe,qe=null):nn=qe.sibling;var xt=pe(j,qe,K[tt],Me);if(xt===null){qe===null&&(qe=nn);break}t&&qe&&xt.alternate===null&&i(j,qe),z=h(xt,z,tt),Ye===null?Xe=xt:Ye.sibling=xt,Ye=xt,qe=nn}if(tt===K.length)return o(j,qe),Nt&&wr(j,tt),Xe;if(qe===null){for(;tt<K.length;tt++)qe=ve(j,K[tt],Me),qe!==null&&(z=h(qe,z,tt),Ye===null?Xe=qe:Ye.sibling=qe,Ye=qe);return Nt&&wr(j,tt),Xe}for(qe=l(j,qe);tt<K.length;tt++)nn=Ie(qe,j,tt,K[tt],Me),nn!==null&&(t&&nn.alternate!==null&&qe.delete(nn.key===null?tt:nn.key),z=h(nn,z,tt),Ye===null?Xe=nn:Ye.sibling=nn,Ye=nn);return t&&qe.forEach(function(lr){return i(j,lr)}),Nt&&wr(j,tt),Xe}function Ve(j,z,K,Me){var Xe=ce(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ye=Xe=null,qe=z,tt=z=0,nn=null,xt=K.next();qe!==null&&!xt.done;tt++,xt=K.next()){qe.index>tt?(nn=qe,qe=null):nn=qe.sibling;var lr=pe(j,qe,xt.value,Me);if(lr===null){qe===null&&(qe=nn);break}t&&qe&&lr.alternate===null&&i(j,qe),z=h(lr,z,tt),Ye===null?Xe=lr:Ye.sibling=lr,Ye=lr,qe=nn}if(xt.done)return o(j,qe),Nt&&wr(j,tt),Xe;if(qe===null){for(;!xt.done;tt++,xt=K.next())xt=ve(j,xt.value,Me),xt!==null&&(z=h(xt,z,tt),Ye===null?Xe=xt:Ye.sibling=xt,Ye=xt);return Nt&&wr(j,tt),Xe}for(qe=l(j,qe);!xt.done;tt++,xt=K.next())xt=Ie(qe,j,tt,xt.value,Me),xt!==null&&(t&&xt.alternate!==null&&qe.delete(xt.key===null?tt:xt.key),z=h(xt,z,tt),Ye===null?Xe=xt:Ye.sibling=xt,Ye=xt);return t&&qe.forEach(function(z_){return i(j,z_)}),Nt&&wr(j,tt),Xe}function Bt(j,z,K,Me){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case ee:e:{for(var Xe=K.key,Ye=z;Ye!==null;){if(Ye.key===Xe){if(Xe=K.type,Xe===N){if(Ye.tag===7){o(j,Ye.sibling),z=c(Ye,K.props.children),z.return=j,j=z;break e}}else if(Ye.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Qd(Xe)===Ye.type){o(j,Ye.sibling),z=c(Ye,K.props),z.ref=go(j,Ye,K),z.return=j,j=z;break e}o(j,Ye);break}else i(j,Ye);Ye=Ye.sibling}K.type===N?(z=Ur(K.props.children,j.mode,Me,K.key),z.return=j,j=z):(Me=Ba(K.type,K.key,K.props,null,j.mode,Me),Me.ref=go(j,z,K),Me.return=j,j=Me)}return M(j);case B:e:{for(Ye=K.key;z!==null;){if(z.key===Ye)if(z.tag===4&&z.stateNode.containerInfo===K.containerInfo&&z.stateNode.implementation===K.implementation){o(j,z.sibling),z=c(z,K.children||[]),z.return=j,j=z;break e}else{o(j,z);break}else i(j,z);z=z.sibling}z=cc(K,j.mode,Me),z.return=j,j=z}return M(j);case J:return Ye=K._init,Bt(j,z,Ye(K._payload),Me)}if(b(K))return Be(j,z,K,Me);if(ce(K))return Ve(j,z,K,Me);ga(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,z!==null&&z.tag===6?(o(j,z.sibling),z=c(z,K),z.return=j,j=z):(o(j,z),z=uc(K,j.mode,Me),z.return=j,j=z),M(j)):o(j,z)}return Bt}var hs=Jd(!0),eh=Jd(!1),_a=Zi(null),va=null,ps=null,xu=null;function yu(){xu=ps=va=null}function Su(t){var i=_a.current;Dt(_a),t._currentValue=i}function Mu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){va=t,xu=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(En=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(xu!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(va===null)throw Error(n(308));ps=t,va.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Ar=null;function Eu(t){Ar===null?Ar=[t]:Ar.push(t)}function th(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Eu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ei(t,l)}function Ei(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ei(t,o)}return c=l.interleaved,c===null?(i.next=i,Eu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ei(t,o)}function xa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,kl(t,o)}}function ih(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ya(t,i,o,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var F=L,ne=F.next;F.next=null,M===null?h=ne:M.next=ne,M=F;var me=t.alternate;me!==null&&(me=me.updateQueue,L=me.lastBaseUpdate,L!==M&&(L===null?me.firstBaseUpdate=ne:L.next=ne,me.lastBaseUpdate=F))}if(h!==null){var ve=c.baseState;M=0,me=ne=F=null,L=h;do{var pe=L.lane,Ie=L.eventTime;if((l&pe)===pe){me!==null&&(me=me.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,Ve=L;switch(pe=i,Ie=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){ve=Be.call(Ie,ve,pe);break e}ve=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,pe=typeof Be=="function"?Be.call(Ie,ve,pe):Be,pe==null)break e;ve=re({},ve,pe);break e;case 2:er=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,pe=c.effects,pe===null?c.effects=[L]:pe.push(L))}else Ie={eventTime:Ie,lane:pe,tag:L.tag,payload:L.payload,callback:L.callback,next:null},me===null?(ne=me=Ie,F=ve):me=me.next=Ie,M|=pe;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;pe=L,L=pe.next,pe.next=null,c.lastBaseUpdate=pe,c.shared.pending=null}}while(!0);if(me===null&&(F=ve),c.baseState=F,c.firstBaseUpdate=ne,c.lastBaseUpdate=me,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=ve}}function rh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var _o={},fi=Zi(_o),vo=Zi(_o),xo=Zi(_o);function Rr(t){if(t===_o)throw Error(n(174));return t}function wu(t,i){switch(bt(xo,i),bt(vo,t),bt(fi,_o),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:we(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=we(i,t)}Dt(fi),bt(fi,i)}function gs(){Dt(fi),Dt(vo),Dt(xo)}function sh(t){Rr(xo.current);var i=Rr(fi.current),o=we(i,t.type);i!==o&&(bt(vo,t),bt(fi,o))}function Au(t){vo.current===t&&(Dt(fi),Dt(vo))}var Ot=Zi(0);function Sa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ru=[];function Cu(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var Ma=D.ReactCurrentDispatcher,Pu=D.ReactCurrentBatchConfig,Cr=0,kt=null,Yt=null,en=null,Ea=!1,yo=!1,So=0,a_=0;function fn(){throw Error(n(321))}function bu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function Lu(t,i,o,l,c,h){if(Cr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?f_:d_,t=o(l,c),yo){h=0;do{if(yo=!1,So=0,25<=h)throw Error(n(301));h+=1,en=Yt=null,i.updateQueue=null,Ma.current=h_,t=o(l,c)}while(yo)}if(Ma.current=Aa,i=Yt!==null&&Yt.next!==null,Cr=0,en=Yt=kt=null,Ea=!1,i)throw Error(n(300));return t}function Du(){var t=So!==0;return So=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?kt.memoizedState=en=t:en=en.next=t,en}function Wn(){if(Yt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=en===null?kt.memoizedState:en.next;if(i!==null)en=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},en===null?kt.memoizedState=en=t:en=en.next=t}return en}function Mo(t,i){return typeof i=="function"?i(t):i}function Uu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,F=null,ne=h;do{var me=ne.lane;if((Cr&me)===me)F!==null&&(F=F.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var ve={lane:me,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};F===null?(L=F=ve,M=l):F=F.next=ve,kt.lanes|=me,Pr|=me}ne=ne.next}while(ne!==null&&ne!==h);F===null?M=l:F.next=L,Zn(l,i.memoizedState)||(En=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Iu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Zn(h,i.memoizedState)||(En=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function oh(){}function ah(t,i){var o=kt,l=Wn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,En=!0),l=l.queue,Nu(ch.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Eo(9,uh.bind(null,o,l,c,i),void 0,null),tn===null)throw Error(n(349));(Cr&30)!==0||lh(o,i,c)}return c}function lh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function uh(t,i,o,l){i.value=o,i.getSnapshot=l,fh(i)&&dh(t)}function ch(t,i,o){return o(function(){fh(i)&&dh(t)})}function fh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function dh(t){var i=Ei(t,1);i!==null&&ni(i,t,1,-1)}function hh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=c_.bind(null,kt,t),[i.memoizedState,t]}function Eo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function ph(){return Wn().memoizedState}function Ta(t,i,o,l){var c=di();kt.flags|=t,c.memoizedState=Eo(1|i,o,void 0,l===void 0?null:l)}function wa(t,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&bu(l,M.deps)){c.memoizedState=Eo(i,o,h,l);return}}kt.flags|=t,c.memoizedState=Eo(1|i,o,h,l)}function mh(t,i){return Ta(8390656,8,t,i)}function Nu(t,i){return wa(2048,8,t,i)}function gh(t,i){return wa(4,2,t,i)}function _h(t,i){return wa(4,4,t,i)}function vh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xh(t,i,o){return o=o!=null?o.concat([t]):null,wa(4,4,vh.bind(null,i,t),o)}function Fu(){}function yh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&bu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Sh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&bu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Mh(t,i,o){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=o):(Zn(o,i)||(o=Jr(),kt.lanes|=o,Pr|=o,t.baseState=!0),i)}function l_(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Pu.transition;Pu.transition={};try{t(!1),i()}finally{Tt=o,Pu.transition=l}}function Eh(){return Wn().memoizedState}function u_(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Th(t))wh(i,o);else if(o=th(t,i,o,l),o!==null){var c=_n();ni(o,t,l,c),Ah(o,i,l)}}function c_(t,i,o){var l=sr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Th(t))wh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(c.hasEagerState=!0,c.eagerState=L,Zn(L,M)){var F=i.interleaved;F===null?(c.next=c,Eu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=th(t,i,c,l),o!==null&&(c=_n(),ni(o,t,l,c),Ah(o,i,l))}}function Th(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function wh(t,i){yo=Ea=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Ah(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,kl(t,o)}}var Aa={readContext:Gn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},f_={readContext:Gn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:mh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4194308,4,vh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=u_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:hh,useDebugValue:Fu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=hh(!1),i=t[0];return t=l_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=di();if(Nt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),tn===null)throw Error(n(349));(Cr&30)!==0||lh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,mh(ch.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,uh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=tn.identifierPrefix;if(Nt){var o=Mi,l=Si;o=(l&~(1<<32-Oe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=So++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=a_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},d_={readContext:Gn,useCallback:yh,useContext:Gn,useEffect:Nu,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:_h,useMemo:Sh,useReducer:Uu,useRef:ph,useState:function(){return Uu(Mo)},useDebugValue:Fu,useDeferredValue:function(t){var i=Wn();return Mh(i,Yt.memoizedState,t)},useTransition:function(){var t=Uu(Mo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1},h_={readContext:Gn,useCallback:yh,useContext:Gn,useEffect:Nu,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:_h,useMemo:Sh,useReducer:Iu,useRef:ph,useState:function(){return Iu(Mo)},useDebugValue:Fu,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:Mh(i,Yt.memoizedState,t)},useTransition:function(){var t=Iu(Mo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ou(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=_n(),c=sr(t),h=Ti(l,c);h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,c),i!==null&&(ni(i,t,c,l),xa(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=_n(),c=sr(t),h=Ti(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,c),i!==null&&(ni(i,t,c,l),xa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=_n(),l=sr(t),c=Ti(o,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ni(i,t,l,o),xa(i,t,l))}};function Rh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!lo(o,l)||!lo(c,h):!0}function Ch(t,i,o){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=Mn(i)?Er:cn.current,l=i.contextTypes,h=(l=l!=null)?us(t,c):Qi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ph(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function ku(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Tu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=Mn(i)?Er:cn.current,c.context=us(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ou(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ra.enqueueReplaceState(c,c.state,null),ya(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function zu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Bu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function bh(t,i,o){o=Ti(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ia||(Ia=!0,tc=l),Bu(t,i)},o}function Lh(t,i,o){o=Ti(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Bu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Bu(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Dh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new p_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=C_.bind(null,t,i,o),i.then(t,t))}function Uh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ih(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ti(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var m_=D.ReactCurrentOwner,En=!1;function gn(t,i,o,l){i.child=t===null?eh(i,null,o,l):hs(i,t.child,o,l)}function Nh(t,i,o,l,c){o=o.render;var h=i.ref;return ms(i,c),l=Lu(t,i,o,l,h,c),o=Du(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(Nt&&o&&pu(i),i.flags|=1,gn(t,i,l,c),i.child)}function Fh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!lc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Oh(t,i,h,l,c)):(t=Ba(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(M,l)&&t.ref===i.ref)return wi(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Oh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,wi(t,i,c)}return Hu(t,i,o,l,c)}function kh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(xs,On),On|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(xs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,bt(xs,On),On|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,bt(xs,On),On|=l;return gn(t,i,c,o),i.child}function zh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Hu(t,i,o,l,c){var h=Mn(o)?Er:cn.current;return h=us(i,h),ms(i,c),o=Lu(t,i,o,l,h,c),l=Du(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(Nt&&l&&pu(i),i.flags|=1,gn(t,i,o,c),i.child)}function Bh(t,i,o,l,c){if(Mn(o)){var h=!0;fa(i)}else h=!1;if(ms(i,c),i.stateNode===null)Pa(t,i),Ch(i,o,l),ku(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var F=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Gn(ne):(ne=Mn(o)?Er:cn.current,ne=us(i,ne));var me=o.getDerivedStateFromProps,ve=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||F!==ne)&&Ph(i,M,l,ne),er=!1;var pe=i.memoizedState;M.state=pe,ya(i,l,M,c),F=i.memoizedState,L!==l||pe!==F||Sn.current||er?(typeof me=="function"&&(Ou(i,o,me,l),F=i.memoizedState),(L=er||Rh(i,o,L,l,pe,F,ne))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=ne,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,nh(t,i),L=i.memoizedProps,ne=i.type===i.elementType?L:Jn(i.type,L),M.props=ne,ve=i.pendingProps,pe=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Gn(F):(F=Mn(o)?Er:cn.current,F=us(i,F));var Ie=o.getDerivedStateFromProps;(me=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==ve||pe!==F)&&Ph(i,M,l,F),er=!1,pe=i.memoizedState,M.state=pe,ya(i,l,M,c);var Be=i.memoizedState;L!==ve||pe!==Be||Sn.current||er?(typeof Ie=="function"&&(Ou(i,o,Ie,l),Be=i.memoizedState),(ne=er||Rh(i,o,ne,l,pe,Be,F)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=F,l=ne):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return Vu(t,i,o,l,h,c)}function Vu(t,i,o,l,c,h){zh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Xd(i,o,!1),wi(t,i,h);l=i.stateNode,m_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,L,h)):gn(t,i,L,h),i.memoizedState=l.state,c&&Xd(i,o,!0),i.child}function Hh(t){var i=t.stateNode;i.pendingContext?Gd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(t,i.context,!1),wu(t,i.containerInfo)}function Vh(t,i,o,l,c){return ds(),vu(c),i.flags|=256,gn(t,i,o,l),i.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gh(t,i,o){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),bt(Ot,c&1),t===null)return _u(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ha(M,l,0,null),t=Ur(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Wu(o),i.memoizedState=Gu,t):Xu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return g_(t,i,M,l,L,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=ar(c,F),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=ar(L,h):(h=Ur(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Wu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Gu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Xu(t,i){return i=Ha({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ca(t,i,o,l){return l!==null&&vu(l),hs(i,t.child,null,o),t=Xu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=zu(Error(n(422))),Ca(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ha({mode:"visible",children:l.children},c,0,null),h=Ur(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Wu(M),i.memoizedState=Gu,h);if((i.mode&1)===0)return Ca(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=zu(h,l,void 0),Ca(t,i,M,l)}if(L=(M&t.childLanes)!==0,En||L){if(l=tn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ei(t,c),ni(l,t,c,-1))}return ac(),l=zu(Error(n(421))),Ca(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=P_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Fn=$i(c.nextSibling),Nn=i,Nt=!0,Qn=null,t!==null&&(Hn[Vn++]=Si,Hn[Vn++]=Mi,Hn[Vn++]=Tr,Si=t.id,Mi=t.overflow,Tr=i),i=Xu(i,l.children),i.flags|=4096,i)}function Wh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mu(t.return,i,o)}function ju(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Xh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,o,i);else if(t.tag===19)Wh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Sa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),ju(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Sa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ju(i,!0,o,null,h);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function wi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function __(t,i,o){switch(i.tag){case 3:Hh(i),ds();break;case 5:sh(i);break;case 1:Mn(i.type)&&fa(i);break;case 4:wu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;bt(_a,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Gh(t,i,o):(bt(Ot,Ot.current&1),t=wi(t,i,o),t!==null?t.sibling:null);bt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Xh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,kh(t,i,o)}return wi(t,i,o)}var jh,Yu,Yh,qh;jh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Yu=function(){},Yh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(fi.current);var h=null;switch(o){case"input":c=Xt(t,c),l=Xt(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=q(t,c),l=q(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=la)}nt(o,l);var M;o=null;for(ne in c)if(!l.hasOwnProperty(ne)&&c.hasOwnProperty(ne)&&c[ne]!=null)if(ne==="style"){var L=c[ne];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?h||(h=[]):(h=h||[]).push(ne,null));for(ne in l){var F=l[ne];if(L=c!=null?c[ne]:void 0,l.hasOwnProperty(ne)&&F!==L&&(F!=null||L!=null))if(ne==="style")if(L){for(M in L)!L.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&L[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(ne,o)),o=F;else ne==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(h=h||[]).push(ne,F)):ne==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(ne,""+F):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(F!=null&&ne==="onScroll"&&Lt("scroll",t),h||L===F||(h=[])):(h=h||[]).push(ne,F))}o&&(h=h||[]).push("style",o);var ne=h;(i.updateQueue=ne)&&(i.flags|=4)}},qh=function(t,i,o,l){o!==l&&(i.flags|=4)};function To(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function v_(t,i,o){var l=i.pendingProps;switch(mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Mn(i.type)&&ca(),dn(i),null;case 3:return l=i.stateNode,gs(),Dt(Sn),Dt(cn),Cu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(rc(Qn),Qn=null))),Yu(t,i),dn(i),null;case 5:Au(i);var c=Rr(xo.current);if(o=i.type,t!==null&&i.stateNode!=null)Yh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Rr(fi.current),ma(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[po]=h,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(c=0;c<co.length;c++)Lt(co[c],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":it(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":de(l,h),Lt("invalid",l)}nt(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Lt("scroll",l)}switch(o){case"input":ht(l),yt(l,h,!0);break;case"textarea":ht(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=la)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=je(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[po]=l,jh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Mt(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),c=l;break;case"iframe":case"object":case"embed":Lt("load",t),c=l;break;case"video":case"audio":for(c=0;c<co.length;c++)Lt(co[c],t);c=l;break;case"source":Lt("error",t),c=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),c=l;break;case"details":Lt("toggle",t),c=l;break;case"input":it(t,l),c=Xt(t,l),Lt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":de(t,l),c=q(t,l),Lt("invalid",t);break;default:c=l}nt(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var F=L[h];h==="style"?ke(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&pt(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&Se(t,F):typeof F=="number"&&Se(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Lt("scroll",t):F!=null&&P(t,h,F,M))}switch(o){case"input":ht(t),yt(t,l,!1);break;case"textarea":ht(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=la)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)qh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(xo.current),Rr(fi.current),ma(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:aa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return dn(i),null;case 13:if(Dt(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zd(),ds(),i.flags|=98560,h=!1;else if(h=ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Qn!==null&&(rc(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?qt===0&&(qt=3):ac())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return gs(),Yu(t,i),t===null&&fo(i.stateNode.containerInfo),dn(i),null;case 10:return Su(i.type._context),dn(i),null;case 17:return Mn(i.type)&&ca(),dn(i),null;case 19:if(Dt(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)To(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Sa(t),M!==null){for(i.flags|=128,To(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>ys&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=Sa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return dn(i),null}else 2*Te()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=Ot.current,bt(Ot,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return oc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function x_(t,i){switch(mu(i),i.tag){case 1:return Mn(i.type)&&ca(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Dt(Sn),Dt(cn),Cu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Au(i),null;case 13:if(Dt(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Ot),null;case 4:return gs(),null;case 10:return Su(i.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var ba=!1,hn=!1,y_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){zt(t,i,l)}else o.current=null}function qu(t,i,o){try{o()}catch(l){zt(t,i,l)}}var Kh=!1;function S_(t,i){if(ou=$o,t=Rd(),Ql(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,F=-1,ne=0,me=0,ve=t,pe=null;t:for(;;){for(var Ie;ve!==o||c!==0&&ve.nodeType!==3||(L=M+c),ve!==h||l!==0&&ve.nodeType!==3||(F=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ie=ve.firstChild)!==null;)pe=ve,ve=Ie;for(;;){if(ve===t)break t;if(pe===o&&++ne===c&&(L=M),pe===h&&++me===l&&(F=M),(Ie=ve.nextSibling)!==null)break;ve=pe,pe=ve.parentNode}ve=Ie}o=L===-1||F===-1?null:{start:L,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(au={focusedElem:t,selectionRange:o},$o=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Bt=Be.memoizedState,j=i.stateNode,z=j.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Jn(i.type,Ve),Bt);j.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){zt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return Be=Kh,Kh=!1,Be}function wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&qu(i,o,h)}c=c.next}while(c!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Ku(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[po],delete i[fu],delete i[i_],delete i[r_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zh(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(t=t.child,t!==null))for($u(t,i,o),t=t.sibling;t!==null;)$u(t,i,o),t=t.sibling}function Zu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Zu(t,i,o),t=t.sibling;t!==null;)Zu(t,i,o),t=t.sibling}var on=null,ei=!1;function nr(t,i,o){for(o=o.child;o!==null;)Jh(t,i,o),o=o.sibling}function Jh(t,i,o){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ct,o)}catch{}switch(o.tag){case 5:hn||vs(o,i);case 6:var l=on,c=ei;on=null,nr(t,i,o),on=l,ei=c,on!==null&&(ei?(t=on,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):on.removeChild(o.stateNode));break;case 18:on!==null&&(ei?(t=on,o=o.stateNode,t.nodeType===8?cu(t.parentNode,o):t.nodeType===1&&cu(t,o),no(t)):cu(on,o.stateNode));break;case 4:l=on,c=ei,on=o.stateNode.containerInfo,ei=!0,nr(t,i,o),on=l,ei=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&qu(o,i,M),c=c.next}while(c!==l)}nr(t,i,o);break;case 1:if(!hn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){zt(o,i,L)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(hn=(l=hn)||o.memoizedState!==null,nr(t,i,o),hn=l):nr(t,i,o);break;default:nr(t,i,o)}}function ep(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new y_),i.forEach(function(l){var c=b_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:on=L.stateNode,ei=!1;break e;case 3:on=L.stateNode.containerInfo,ei=!0;break e;case 4:on=L.stateNode.containerInfo,ei=!0;break e}L=L.return}if(on===null)throw Error(n(160));Jh(h,M,c),on=null,ei=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(ne){zt(c,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tp(i,t),i=i.sibling}function tp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),hi(t),l&4){try{wo(3,t,t.return),La(3,t)}catch(Ve){zt(t,t.return,Ve)}try{wo(5,t,t.return)}catch(Ve){zt(t,t.return,Ve)}}break;case 1:ti(i,t),hi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ti(i,t),hi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var c=t.stateNode;try{Se(c,"")}catch(Ve){zt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&at(c,h),Mt(L,M);var ne=Mt(L,h);for(M=0;M<F.length;M+=2){var me=F[M],ve=F[M+1];me==="style"?ke(c,ve):me==="dangerouslySetInnerHTML"?pt(c,ve):me==="children"?Se(c,ve):P(c,me,ve,ne)}switch(L){case"input":He(c,h);break;case"textarea":_e(c,h);break;case"select":var pe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?T(c,!!h.multiple,Ie,!1):pe!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[po]=h}catch(Ve){zt(t,t.return,Ve)}}break;case 6:if(ti(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(ti(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(Ve){zt(t,t.return,Ve)}break;case 4:ti(i,t),hi(t);break;case 13:ti(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ec=Te())),l&4&&ep(t);break;case 22:if(me=o!==null&&o.memoizedState!==null,t.mode&1?(hn=(ne=hn)||me,ti(i,t),hn=ne):ti(i,t),hi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!me&&(t.mode&1)!==0)for(ze=t,me=t.child;me!==null;){for(ve=ze=me;ze!==null;){switch(pe=ze,Ie=pe.child,pe.tag){case 0:case 11:case 14:case 15:wo(4,pe,pe.return);break;case 1:vs(pe,pe.return);var Be=pe.stateNode;if(typeof Be.componentWillUnmount=="function"){l=pe,o=pe.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){zt(l,o,Ve)}}break;case 5:vs(pe,pe.return);break;case 22:if(pe.memoizedState!==null){rp(ve);continue}}Ie!==null?(Ie.return=pe,ze=Ie):rp(ve)}me=me.sibling}e:for(me=null,ve=t;;){if(ve.tag===5){if(me===null){me=ve;try{c=ve.stateNode,ne?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=ve.stateNode,F=ve.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=Je("display",M))}catch(Ve){zt(t,t.return,Ve)}}}else if(ve.tag===6){if(me===null)try{ve.stateNode.nodeValue=ne?"":ve.memoizedProps}catch(Ve){zt(t,t.return,Ve)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;me===ve&&(me=null),ve=ve.return}me===ve&&(me=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ti(i,t),hi(t),l&4&&ep(t);break;case 21:break;default:ti(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Zh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Se(c,""),l.flags&=-33);var h=Qh(t);Zu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Qh(t);$u(t,L,M);break;default:throw Error(n(161))}}catch(F){zt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function M_(t,i,o){ze=t,np(t)}function np(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var c=ze,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||ba;if(!M){var L=c.alternate,F=L!==null&&L.memoizedState!==null||hn;L=ba;var ne=hn;if(ba=M,(hn=F)&&!ne)for(ze=c;ze!==null;)M=ze,F=M.child,M.tag===22&&M.memoizedState!==null?sp(c):F!==null?(F.return=M,ze=F):sp(c);for(;h!==null;)ze=h,np(h),h=h.sibling;ze=c,ba=L,hn=ne}ip(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ze=h):ip(t)}}function ip(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&rh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}rh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var me=ne.memoizedState;if(me!==null){var ve=me.dehydrated;ve!==null&&no(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Ku(i)}catch(pe){zt(i,i.return,pe)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function rp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function sp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{La(4,i)}catch(F){zt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){zt(i,c,F)}}var h=i.return;try{Ku(i)}catch(F){zt(i,h,F)}break;case 5:var M=i.return;try{Ku(i)}catch(F){zt(i,M,F)}}}catch(F){zt(i,i.return,F)}if(i===t){ze=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ze=L;break}ze=i.return}}var E_=Math.ceil,Da=D.ReactCurrentDispatcher,Qu=D.ReactCurrentOwner,Xn=D.ReactCurrentBatchConfig,gt=0,tn=null,Gt=null,an=0,On=0,xs=Zi(0),qt=0,Ao=null,Pr=0,Ua=0,Ju=0,Ro=null,Tn=null,ec=0,ys=1/0,Ai=null,Ia=!1,tc=null,ir=null,Na=!1,rr=null,Fa=0,Co=0,nc=null,Oa=-1,ka=0;function _n(){return(gt&6)!==0?Te():Oa!==-1?Oa:Oa=Te()}function sr(t){return(t.mode&1)===0?1:(gt&2)!==0&&an!==0?an&-an:o_.transition!==null?(ka===0&&(ka=Jr()),ka):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:ad(t.type)),t)}function ni(t,i,o,l){if(50<Co)throw Co=0,nc=null,Error(n(185));Gi(t,o,l),((gt&2)===0||t!==tn)&&(t===tn&&((gt&2)===0&&(Ua|=o),qt===4&&or(t,an)),wn(t,l),o===1&&gt===0&&(i.mode&1)===0&&(ys=Te()+500,da&&Ji()))}function wn(t,i){var o=t.callbackNode;$s(t,i);var l=Pt(t,t===tn?an:0);if(l===0)o!==null&&X(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&X(o),i===1)t.tag===0?s_(ap.bind(null,t)):jd(ap.bind(null,t)),t_(function(){(gt&6)===0&&Ji()}),o=null;else{switch(Jf(l)){case 1:o=Ke;break;case 4:o=Qe;break;case 16:o=We;break;case 536870912:o=At;break;default:o=We}o=mp(o,op.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function op(t,i){if(Oa=-1,ka=0,(gt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=Pt(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=za(t,l);else{i=l;var c=gt;gt|=2;var h=up();(tn!==t||an!==i)&&(Ai=null,ys=Te()+500,Lr(t,i));do try{A_();break}catch(L){lp(t,L)}while(!0);yu(),Da.current=h,gt=c,Gt!==null?i=0:(tn=null,an=0,i=qt)}if(i!==0){if(i===2&&(c=un(t),c!==0&&(l=c,i=ic(t,c))),i===1)throw o=Ao,Lr(t,0),or(t,l),wn(t,Te()),o;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!T_(c)&&(i=za(t,l),i===2&&(h=un(t),h!==0&&(l=h,i=ic(t,h))),i===1))throw o=Ao,Lr(t,0),or(t,l),wn(t,Te()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,Tn,Ai);break;case 3:if(or(t,l),(l&130023424)===l&&(i=ec+500-Te(),10<i)){if(Pt(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=uu(Dr.bind(null,t,Tn,Ai),i);break}Dr(t,Tn,Ai);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Oe(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*E_(l/1960))-l,10<l){t.timeoutHandle=uu(Dr.bind(null,t,Tn,Ai),l);break}Dr(t,Tn,Ai);break;case 5:Dr(t,Tn,Ai);break;default:throw Error(n(329))}}}return wn(t,Te()),t.callbackNode===o?op.bind(null,t):null}function ic(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=za(t,i),t!==2&&(i=Tn,Tn=o,i!==null&&rc(i)),t}function rc(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function T_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Ju,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),l=1<<o;t[o]=-1,i&=~l}}function ap(t){if((gt&6)!==0)throw Error(n(327));Ss();var i=Pt(t,0);if((i&1)===0)return wn(t,Te()),null;var o=za(t,i);if(t.tag!==0&&o===2){var l=un(t);l!==0&&(i=l,o=ic(t,l))}if(o===1)throw o=Ao,Lr(t,0),or(t,i),wn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,Tn,Ai),wn(t,Te()),null}function sc(t,i){var o=gt;gt|=1;try{return t(i)}finally{gt=o,gt===0&&(ys=Te()+500,da&&Ji())}}function br(t){rr!==null&&rr.tag===0&&(gt&6)===0&&Ss();var i=gt;gt|=1;var o=Xn.transition,l=Tt;try{if(Xn.transition=null,Tt=1,t)return t()}finally{Tt=l,Xn.transition=o,gt=i,(gt&6)===0&&Ji()}}function oc(){On=xs.current,Dt(xs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,e_(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(mu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ca();break;case 3:gs(),Dt(Sn),Dt(cn),Cu();break;case 5:Au(l);break;case 4:gs();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:Su(l.type._context);break;case 22:case 23:oc()}o=o.return}if(tn=t,Gt=t=ar(t.current,null),an=On=i,qt=0,Ao=null,Ju=Ua=Pr=0,Tn=Ro=null,Ar!==null){for(i=0;i<Ar.length;i++)if(o=Ar[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Ar=null}return t}function lp(t,i){do{var o=Gt;try{if(yu(),Ma.current=Aa,Ea){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ea=!1}if(Cr=0,en=Yt=kt=null,yo=!1,So=0,Qu.current=null,o===null||o.return===null){qt=1,Ao=i,Gt=null;break}e:{var h=t,M=o.return,L=o,F=i;if(i=an,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ne=F,me=L,ve=me.tag;if((me.mode&1)===0&&(ve===0||ve===11||ve===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ie=Uh(M);if(Ie!==null){Ie.flags&=-257,Ih(Ie,M,L,h,i),Ie.mode&1&&Dh(h,ne,i),i=Ie,F=ne;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else Be.add(F);break e}else{if((i&1)===0){Dh(h,ne,i),ac();break e}F=Error(n(426))}}else if(Nt&&L.mode&1){var Bt=Uh(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),Ih(Bt,M,L,h,i),vu(_s(F,L));break e}}h=F=_s(F,L),qt!==4&&(qt=2),Ro===null?Ro=[h]:Ro.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=bh(h,F,i);ih(h,j);break e;case 1:L=F;var z=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ir===null||!ir.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Lh(h,L,i);ih(h,Me);break e}}h=h.return}while(h!==null)}fp(o)}catch(Xe){i=Xe,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function up(){var t=Da.current;return Da.current=Aa,t===null?Aa:t}function ac(){(qt===0||qt===3||qt===2)&&(qt=4),tn===null||(Pr&268435455)===0&&(Ua&268435455)===0||or(tn,an)}function za(t,i){var o=gt;gt|=2;var l=up();(tn!==t||an!==i)&&(Ai=null,Lr(t,i));do try{w_();break}catch(c){lp(t,c)}while(!0);if(yu(),gt=o,Da.current=l,Gt!==null)throw Error(n(261));return tn=null,an=0,qt}function w_(){for(;Gt!==null;)cp(Gt)}function A_(){for(;Gt!==null&&!Ee();)cp(Gt)}function cp(t){var i=pp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?fp(t):Gt=i,Qu.current=null}function fp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=v_(o,i,On),o!==null){Gt=o;return}}else{if(o=x_(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);qt===0&&(qt=5)}function Dr(t,i,o){var l=Tt,c=Xn.transition;try{Xn.transition=null,Tt=1,R_(t,i,o,l)}finally{Xn.transition=c,Tt=l}return null}function R_(t,i,o,l){do Ss();while(rr!==null);if((gt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ag(t,h),t===tn&&(Gt=tn=null,an=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Na||(Na=!0,mp(We,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var M=Tt;Tt=1;var L=gt;gt|=4,Qu.current=null,S_(t,o),tp(o,t),Yg(au),$o=!!ou,au=ou=null,t.current=o,M_(o),De(),gt=L,Tt=M,Xn.transition=h}else t.current=o;if(Na&&(Na=!1,rr=t,Fa=c),h=t.pendingLanes,h===0&&(ir=null),_t(o.stateNode),wn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=tc,tc=null,t;return(Fa&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===nc?Co++:(Co=0,nc=t):Co=0,Ji(),null}function Ss(){if(rr!==null){var t=Jf(Fa),i=Xn.transition,o=Tt;try{if(Xn.transition=null,Tt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Fa=0,(gt&6)!==0)throw Error(n(331));var c=gt;for(gt|=4,ze=t.current;ze!==null;){var h=ze,M=h.child;if((ze.flags&16)!==0){var L=h.deletions;if(L!==null){for(var F=0;F<L.length;F++){var ne=L[F];for(ze=ne;ze!==null;){var me=ze;switch(me.tag){case 0:case 11:case 15:wo(8,me,h)}var ve=me.child;if(ve!==null)ve.return=me,ze=ve;else for(;ze!==null;){me=ze;var pe=me.sibling,Ie=me.return;if($h(me),me===ne){ze=null;break}if(pe!==null){pe.return=Ie,ze=pe;break}ze=Ie}}}var Be=h.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Bt=Ve.sibling;Ve.sibling=null,Ve=Bt}while(Ve!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ze=M;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wo(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,ze=j;break e}ze=h.return}}var z=t.current;for(ze=z;ze!==null;){M=ze;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,ze=K;else e:for(M=z;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:La(9,L)}}catch(Xe){zt(L,L.return,Xe)}if(L===M){ze=null;break e}var Me=L.sibling;if(Me!==null){Me.return=L.return,ze=Me;break e}ze=L.return}}if(gt=c,Ji(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ct,t)}catch{}l=!0}return l}finally{Tt=o,Xn.transition=i}}return!1}function dp(t,i,o){i=_s(o,i),i=bh(t,i,1),t=tr(t,i,1),i=_n(),t!==null&&(Gi(t,1,i),wn(t,i))}function zt(t,i,o){if(t.tag===3)dp(t,t,o);else for(;i!==null;){if(i.tag===3){dp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=_s(o,t),t=Lh(i,t,1),i=tr(i,t,1),t=_n(),i!==null&&(Gi(i,1,t),wn(i,t));break}}i=i.return}}function C_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&o,tn===t&&(an&o)===o&&(qt===4||qt===3&&(an&130023424)===an&&500>Te()-ec?Lr(t,0):Ju|=o),wn(t,i)}function hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var o=_n();t=Ei(t,i),t!==null&&(Gi(t,i,o),wn(t,o))}function P_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),hp(t,o)}function b_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),hp(t,o)}var pp;pp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)En=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return En=!1,__(t,i,o);En=(t.flags&131072)!==0}else En=!1,Nt&&(i.flags&1048576)!==0&&Yd(i,pa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var c=us(i,cn.current);ms(i,o),c=Lu(null,i,l,t,c,o);var h=Du();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Mn(l)?(h=!0,fa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Tu(i),c.updater=Ra,i.stateNode=c,c._reactInternals=i,ku(i,l,t,o),i=Vu(null,i,l,!0,h,o)):(i.tag=0,Nt&&h&&pu(i),gn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=D_(l),t=Jn(l,t),c){case 0:i=Hu(null,i,l,t,o);break e;case 1:i=Bh(null,i,l,t,o);break e;case 11:i=Nh(null,i,l,t,o);break e;case 14:i=Fh(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Hu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Bh(t,i,l,c,o);case 3:e:{if(Hh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,nh(t,i),ya(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=_s(Error(n(423)),i),i=Vh(t,i,l,o,c);break e}else if(l!==c){c=_s(Error(n(424)),i),i=Vh(t,i,l,o,c);break e}else for(Fn=$i(i.stateNode.containerInfo.firstChild),Nn=i,Nt=!0,Qn=null,o=eh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===c){i=wi(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return sh(i),t===null&&_u(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,lu(l,c)?M=null:h!==null&&lu(l,h)&&(i.flags|=32),zh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&_u(i),null;case 13:return Gh(t,i,o);case 4:return wu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Nh(t,i,l,c,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,bt(_a,l._currentValue),l._currentValue=M,h!==null)if(Zn(h.value,M)){if(h.children===c.children&&!Sn.current){i=wi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var F=L.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ti(-1,o&-o),F.tag=2;var ne=h.updateQueue;if(ne!==null){ne=ne.shared;var me=ne.pending;me===null?F.next=F:(F.next=me.next,me.next=F),ne.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Mu(h.return,o,i),L.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Mu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}gn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ms(i,o),c=Gn(c),l=l(c),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Fh(t,i,l,c,o);case 15:return Oh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Pa(t,i),i.tag=1,Mn(l)?(t=!0,fa(i)):t=!1,ms(i,o),Ch(i,l,c),ku(i,l,c,o),Vu(null,i,l,!0,t,o);case 19:return Xh(t,i,o);case 22:return kh(t,i,o)}throw Error(n(156,i.tag))};function mp(t,i){return te(t,i)}function L_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new L_(t,i,o,l)}function lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D_(t){if(typeof t=="function")return lc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V)return 11;if(t===le)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ba(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")lc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Ur(o.children,c,h,i);case $:M=8,c|=8;break;case ye:return t=jn(12,o,i,c|2),t.elementType=ye,t.lanes=h,t;case G:return t=jn(13,o,i,c),t.elementType=G,t.lanes=h,t;case se:return t=jn(19,o,i,c),t.elementType=se,t.lanes=h,t;case ae:return Ha(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case R:M=9;break e;case V:M=11;break e;case le:M=14;break e;case J:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Ha(t,i,o,l){return t=jn(22,t,l,i),t.elementType=ae,t.lanes=o,t.stateNode={isHidden:!1},t}function uc(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function cc(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function U_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function fc(t,i,o,l,c,h,M,L,F){return t=new U_(t,i,o,L,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(h),t}function I_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function gp(t){if(!t)return Qi;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Mn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Mn(o))return Wd(t,o,i)}return i}function _p(t,i,o,l,c,h,M,L,F){return t=fc(o,l,!0,t,c,h,M,L,F),t.context=gp(null),o=t.current,l=_n(),c=sr(o),h=Ti(l,c),h.callback=i??null,tr(o,h,c),t.current.lanes=c,Gi(t,c,l),wn(t,l),t}function Va(t,i,o,l){var c=i.current,h=_n(),M=sr(c);return o=gp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ti(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ni(t,c,M,h),xa(t,c,M)),M}function Ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function dc(t,i){vp(t,i),(t=t.alternate)&&vp(t,i)}function N_(){return null}var xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function hc(t){this._internalRoot=t}Wa.prototype.render=hc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Va(t,i,null,null)},Wa.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Va(null,t,null,null)}),i[xi]=null}};function Wa(t){this._internalRoot=t}Wa.prototype.unstable_scheduleHydration=function(t){if(t){var i=nd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&sd(t)}};function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function F_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ne=Ga(M);h.call(ne)}}var M=_p(i,l,t,0,null,!1,!1,"",yp);return t._reactRootContainer=M,t[xi]=M.current,fo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var ne=Ga(F);L.call(ne)}}var F=fc(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=F,t[xi]=F.current,fo(t.nodeType===8?t.parentNode:t),br(function(){Va(i,F,o,l)}),F}function ja(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var F=Ga(M);L.call(F)}}Va(i,M,t,c)}else M=F_(o,i,t,c,l);return Ga(M)}ed=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=vi(i.pendingLanes);o!==0&&(kl(i,o|1),wn(i,Te()),(gt&6)===0&&(ys=Te()+500,Ji()))}break;case 13:br(function(){var l=Ei(t,1);if(l!==null){var c=_n();ni(l,t,1,c)}}),dc(t,1)}},zl=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var o=_n();ni(i,t,134217728,o)}dc(t,134217728)}},td=function(t){if(t.tag===13){var i=sr(t),o=Ei(t,i);if(o!==null){var l=_n();ni(o,t,i,l)}dc(t,i)}},nd=function(){return Tt},id=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},oe=function(t,i,o){switch(i){case"input":if(He(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=ua(l);if(!c)throw Error(n(90));ot(l),He(l,c)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},sn=sc,mt=br;var O_={usingClientEntryPoint:!1,Events:[mo,as,ua,dt,Ft,sc]},Po={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k_={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Ct=Ya.inject(k_),It=Ya}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_,An.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(i))throw Error(n(200));return I_(t,i,null,o)},An.createRoot=function(t,i){if(!pc(t))throw Error(n(299));var o=!1,l="",c=xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=fc(t,1,!1,null,null,o,!1,l,c),t[xi]=i.current,fo(t.nodeType===8?t.parentNode:t),new hc(i)},An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=W(i),t=t===null?null:t.stateNode,t},An.flushSync=function(t){return br(t)},An.hydrate=function(t,i,o){if(!Xa(i))throw Error(n(200));return ja(null,t,i,!0,o)},An.hydrateRoot=function(t,i,o){if(!pc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=xp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=_p(i,null,t,1,o??null,c,!1,h,M),t[xi]=i.current,fo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Wa(i)},An.render=function(t,i,o){if(!Xa(i))throw Error(n(200));return ja(null,t,i,!1,o)},An.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(br(function(){ja(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1},An.unstable_batchedUpdates=sc,An.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Xa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ja(t,i,o,!1,l)},An.version="18.3.1-next-f1338f8080-20240426",An}var Cp;function j_(){if(Cp)return _c.exports;Cp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_c.exports=X_(),_c.exports}var Pp;function Y_(){if(Pp)return qa;Pp=1;var s=j_();return qa.createRoot=s.createRoot,qa.hydrateRoot=s.hydrateRoot,qa}var q_=Y_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="169",ks={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K_=0,bp=1,$_=2,Cm=1,Z_=2,Di=3,xr=0,Pn=1,Ui=2,_r=0,zs=1,Zc=2,Lp=3,Dp=4,Q_=5,Hr=100,J_=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,ov=203,Qc=204,Jc=205,av=206,lv=207,uv=208,cv=209,fv=210,dv=211,hv=212,pv=213,mv=214,ef=0,tf=1,nf=2,Vs=3,rf=4,sf=5,of=6,af=7,Pm=0,gv=1,_v=2,vr=0,vv=1,xv=2,yv=3,Sv=4,Mv=5,Ev=6,Tv=7,bm=300,Gs=301,Ws=302,lf=303,uf=304,Ul=306,cf=1e3,Gr=1001,ff=1002,Kn=1003,wv=1004,Ka=1005,oi=1006,yc=1007,Wr=1008,Oi=1009,Lm=1010,Dm=1011,ko=1012,Gf=1013,jr=1014,Ii=1015,zo=1016,Wf=1017,Xf=1018,Xs=1020,Um=35902,Im=1021,Nm=1022,li=1023,Fm=1024,Om=1025,Bs=1026,js=1027,km=1028,jf=1029,zm=1030,Yf=1031,qf=1033,yl=33776,Sl=33777,Ml=33778,El=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,Tf=37813,wf=37814,Af=37815,Rf=37816,Cf=37817,Pf=37818,bf=37819,Lf=37820,Df=37821,Tl=36492,Uf=36494,If=36495,Bm=36283,Nf=36284,Ff=36285,Of=36286,Av=3200,Rv=3201,Cv=0,Pv=1,gr="",pi="srgb",yr="srgb-linear",Kf="display-p3",Il="display-p3-linear",Cl="linear",Ut="srgb",Pl="rec709",bl="p3",Ms=7680,Up=519,bv=512,Lv=513,Dv=514,Hm=515,Uv=516,Iv=517,Nv=518,Fv=519,Ip=35044,Np="300 es",Ni=2e3,Ll=2001;class Kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=Math.PI/180,kf=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function xn(s,e,n){return Math.max(e,Math.min(n,s))}function Ov(s,e){return(s%e+e)%e}function Sc(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kv={DEG2RAD:wl};class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],y=r[7],x=r[2],S=r[5],w=r[8],C=a[0],g=a[3],_=a[6],U=a[1],P=a[4],D=a[7],ee=a[2],B=a[5],N=a[8];return u[0]=f*C+d*U+p*ee,u[3]=f*g+d*P+p*B,u[6]=f*_+d*D+p*N,u[1]=m*C+v*U+y*ee,u[4]=m*g+v*P+y*B,u[7]=m*_+v*D+y*N,u[2]=x*C+S*U+w*ee,u[5]=x*g+S*P+w*B,u[8]=x*_+S*D+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=v*f-d*m,x=d*p-v*u,S=m*u-f*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(a*m-v*r)*C,e[2]=(d*r-a*f)*C,e[3]=x*C,e[4]=(v*n-a*p)*C,e[5]=(a*u-d*n)*C,e[6]=S*C,e[7]=(r*p-m*n)*C,e[8]=(f*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new st;function Vm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zv(){const s=Dl("canvas");return s.style.display="block",s}const Fp={};function Al(s){s in Fp||(Fp[s]=!0,console.warn(s))}function Bv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Hv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Op=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[yr]:{transfer:Cl,primaries:Pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[pi]:{transfer:Ut,primaries:Pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Il]:{transfer:Cl,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(kp),fromReference:s=>s.applyMatrix3(Op)},[Kf]:{transfer:Ut,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(kp),fromReference:s=>s.applyMatrix3(Op).convertLinearToSRGB()}},Gv=new Set([yr,Il]),Et={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Gv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Do[e].toReference,a=Do[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Do[s].primaries},getTransfer:function(s){return s===gr?Cl:Do[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Do[e].luminanceCoefficients)}};function Hs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ec(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class Wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Dl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Hs(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hs(n[r]/255)*255):n[r]=Hs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xv=0;class Gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Tc(a[f].image)):u.push(Tc(a[f]))}else u=Tc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Tc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jv=0;class bn extends Kr{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=Gr,a=Gr,u=oi,f=Wr,d=li,p=Oi,m=bn.DEFAULT_ANISOTROPY,v=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Bo(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=bm;bn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],y=p[8],x=p[1],S=p[5],w=p[9],C=p[2],g=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(y-C)<.01&&Math.abs(w-g)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+C)<.1&&Math.abs(w+g)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(S+1)/2,ee=(_+1)/2,B=(v+x)/4,N=(y+C)/4,$=(w+g)/4;return P>D&&P>ee?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=B/r,u=N/r):D>ee?D<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(D),r=B/a,u=$/a):ee<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(ee),r=N/u,a=$/u),this.set(r,a,u,n),this}let U=Math.sqrt((g-w)*(g-w)+(y-C)*(y-C)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(g-w)/U,this.y=(y-C)/U,this.z=(x-v)/U,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yv extends Kr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Gm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Yv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Wm extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qv extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],C=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=C;return}if(y!==C||p!==x||m!==S||v!==w){let g=1-d;const _=p*x+m*S+v*w+y*C,U=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const ee=Math.sqrt(P),B=Math.atan2(ee,_*U);g=Math.sin(g*B)/ee,d=Math.sin(d*B)/ee}const D=d*U;if(p=p*g+x*D,m=m*g+S*D,v=v*g+w*D,y=y*g+C*D,g===1-d){const ee=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=ee,m*=ee,v*=ee,y*=ee}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],y=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+v*y+p*S-m*x,e[n+1]=p*w+v*x+m*y-d*S,e[n+2]=m*w+v*S+d*x-p*y,e[n+3]=v*w-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"YXZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"ZXY":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"ZYX":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"YZX":this._x=x*v*y+m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y-x*S*w;break;case"XZY":this._x=x*v*y-m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(v-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),y=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*v,this.y=r+p*v+d*m-u*y,this.z=a+p*y+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new Z,zp=new qr;class Ho{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ii):ii.fromBufferAttribute(u,f),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$a.copy(r.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Za.subVectors(this.max,Uo),Ts.subVectors(e.a,Uo),ws.subVectors(e.b,Uo),As.subVectors(e.c,Uo),ur.subVectors(ws,Ts),cr.subVectors(As,ws),Ir.subVectors(Ts,As);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!Ac(n,Ts,ws,As,Za)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,Ts,ws,As,Za))?!1:(Qa.crossVectors(ur,cr),n=[Qa.x,Qa.y,Qa.z],Ac(n,Ts,ws,As,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ii=new Z,$a=new Ho,Ts=new Z,ws=new Z,As=new Z,ur=new Z,cr=new Z,Ir=new Z,Uo=new Z,Za=new Z,Qa=new Z,Nr=new Z;function Ac(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Nr.fromArray(s,u);const d=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),v=r.dot(Nr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Kv=new Ho,Io=new Z,Rc=new Z;class Nl{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Kv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Rc)),this.expandByPoint(Io.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new Z,Cc=new Z,Ja=new Z,fr=new Z,Pc=new Z,el=new Z,bc=new Z;class $f{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Cc.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Cc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ja),d=fr.dot(this.direction),p=-fr.dot(Ja),m=fr.lengthSq(),v=Math.abs(1-f*f);let y,x,S,w;if(v>0)if(y=f*p-d,x=f*d-p,w=u*v,y>=0)if(x>=-w)if(x<=w){const C=1/v;y*=C,x*=C,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Cc).addScaledVector(Ja,x),S}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,u){Pc.subVectors(n,e),el.subVectors(r,e),bc.crossVectors(Pc,el);let f=this.direction.dot(bc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const p=d*this.direction.dot(el.crossVectors(fr,el));if(p<0)return null;const m=d*this.direction.dot(Pc.cross(fr));if(m<0||p+m>f)return null;const v=-d*fr.dot(bc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,u,f,d,p,m,v,y,x,S,w,C,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,y,x,S,w,C,g)}set(e,n,r,a,u,f,d,p,m,v,y,x,S,w,C,g){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=S,_[7]=w,_[11]=C,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*v,S=f*y,w=d*v,C=d*y;n[0]=p*v,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-C*m,n[9]=-d*p,n[2]=C-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,S=p*y,w=m*v,C=m*y;n[0]=x+C*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*v,n[9]=-d,n[2]=S*d-w,n[6]=C+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,S=p*y,w=m*v,C=m*y;n[0]=x-C*d,n[4]=-f*y,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*v,n[9]=C-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,S=f*y,w=d*v,C=d*y;n[0]=p*v,n[4]=w*m-S,n[8]=x*m+C,n[1]=p*y,n[5]=C*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,C=d*m;n[0]=p*v,n[4]=C-x*y,n[8]=w*y+S,n[1]=y,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*y+w,n[10]=x-C*y}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,C=d*m;n[0]=p*v,n[4]=-y,n[8]=m*v,n[1]=x*y+C,n[5]=f*v,n[9]=S*y-w,n[2]=w*y-S,n[6]=d*v,n[10]=C*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Zv)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),dr.crossVectors(r,kn),dr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),dr.crossVectors(r,kn)),dr.normalize(),tl.crossVectors(kn,dr),a[0]=dr.x,a[4]=tl.x,a[8]=kn.x,a[1]=dr.y,a[5]=tl.y,a[9]=kn.y,a[2]=dr.z,a[6]=tl.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],y=r[5],x=r[9],S=r[13],w=r[2],C=r[6],g=r[10],_=r[14],U=r[3],P=r[7],D=r[11],ee=r[15],B=a[0],N=a[4],$=a[8],ye=a[12],E=a[1],R=a[5],V=a[9],G=a[13],se=a[2],le=a[6],J=a[10],ae=a[14],k=a[3],ce=a[7],re=a[11],I=a[15];return u[0]=f*B+d*E+p*se+m*k,u[4]=f*N+d*R+p*le+m*ce,u[8]=f*$+d*V+p*J+m*re,u[12]=f*ye+d*G+p*ae+m*I,u[1]=v*B+y*E+x*se+S*k,u[5]=v*N+y*R+x*le+S*ce,u[9]=v*$+y*V+x*J+S*re,u[13]=v*ye+y*G+x*ae+S*I,u[2]=w*B+C*E+g*se+_*k,u[6]=w*N+C*R+g*le+_*ce,u[10]=w*$+C*V+g*J+_*re,u[14]=w*ye+C*G+g*ae+_*I,u[3]=U*B+P*E+D*se+ee*k,u[7]=U*N+P*R+D*le+ee*ce,u[11]=U*$+P*V+D*J+ee*re,u[15]=U*ye+P*G+D*ae+ee*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],y=e[6],x=e[10],S=e[14],w=e[3],C=e[7],g=e[11],_=e[15];return w*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+C*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*v-u*p*v)+g*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*v-r*m*v)+_*(-a*d*v-n*p*y+n*d*x+a*f*y-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=e[9],x=e[10],S=e[11],w=e[12],C=e[13],g=e[14],_=e[15],U=y*g*m-C*x*m+C*p*S-d*g*S-y*p*_+d*x*_,P=w*x*m-v*g*m-w*p*S+f*g*S+v*p*_-f*x*_,D=v*C*m-w*y*m+w*d*S-f*C*S-v*d*_+f*y*_,ee=w*y*p-v*C*p-w*d*x+f*C*x+v*d*g-f*y*g,B=n*U+r*P+a*D+u*ee;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=U*N,e[1]=(C*x*u-y*g*u-C*a*S+r*g*S+y*a*_-r*x*_)*N,e[2]=(d*g*u-C*p*u+C*a*m-r*g*m-d*a*_+r*p*_)*N,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*N,e[4]=P*N,e[5]=(v*g*u-w*x*u+w*a*S-n*g*S-v*a*_+n*x*_)*N,e[6]=(w*p*u-f*g*u-w*a*m+n*g*m+f*a*_-n*p*_)*N,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*S+n*p*S)*N,e[8]=D*N,e[9]=(w*y*u-v*C*u-w*r*S+n*C*S+v*r*_-n*y*_)*N,e[10]=(f*C*u-w*d*u+w*r*m-n*C*m-f*r*_+n*d*_)*N,e[11]=(v*d*u-f*y*u-v*r*m+n*y*m+f*r*S-n*d*S)*N,e[12]=ee*N,e[13]=(v*C*a-w*y*a+w*r*x-n*C*x-v*r*g+n*y*g)*N,e[14]=(w*d*a-f*C*a-w*r*p+n*C*p+f*r*g-n*d*g)*N,e[15]=(f*y*a-v*d*a+v*r*p-n*y*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,y=d+d,x=u*m,S=u*v,w=u*y,C=f*v,g=f*y,_=d*y,U=p*m,P=p*v,D=p*y,ee=r.x,B=r.y,N=r.z;return a[0]=(1-(C+_))*ee,a[1]=(S+D)*ee,a[2]=(w-P)*ee,a[3]=0,a[4]=(S-D)*B,a[5]=(1-(x+_))*B,a[6]=(g+U)*B,a[7]=0,a[8]=(w+P)*N,a[9]=(g-U)*N,a[10]=(1-(x+C))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Rs.set(a[0],a[1],a[2]).length();const f=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,v=1/f,y=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=v,ri.elements[5]*=v,ri.elements[6]*=v,ri.elements[8]*=y,ri.elements[9]*=y,ri.elements[10]*=y,n.setFromRotationMatrix(ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ni){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Ni)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Ll)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ni){const p=this.elements,m=1/(n-e),v=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*v;let w,C;if(d===Ni)w=(f+u)*y,C=-2*y;else if(d===Ll)w=u*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=C,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new Z,ri=new Vt,$v=new Z(0,0,0),Zv=new Z(1,1,1),dr=new Z,tl=new Z,kn=new Z,Bp=new Vt,Hp=new qr;class ki{constructor(e=0,n=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(xn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(xn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qv=0;const Vp=new Z,Cs=new qr,Pi=new Vt,nl=new Z,No=new Z,Jv=new Z,e0=new qr,Gp=new Z(1,0,0),Wp=new Z(0,1,0),Xp=new Z(0,0,1),jp={type:"added"},t0={type:"removed"},Ps={type:"childadded",child:null},Lc={type:"childremoved",child:null};class Ln extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new Z,n=new ki,r=new qr,a=new Z(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new st}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?nl.copy(e):nl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(No,nl,this.up):Pi.lookAt(nl,No,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(t0),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Ln.DEFAULT_UP=new Z(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new Z,bi=new Z,Dc=new Z,Li=new Z,bs=new Z,Ls=new Z,Yp=new Z,Uc=new Z,Ic=new Z,Nc=new Z,Fc=new Ht,Oc=new Ht,kc=new Ht;class ai{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),bi.subVectors(r,n),Dc.subVectors(e,n);const f=si.dot(si),d=si.dot(bi),p=si.dot(Dc),m=bi.dot(bi),v=bi.dot(Dc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*v)*x,w=(f*v-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Fc.setScalar(0),Oc.setScalar(0),kc.setScalar(0),Fc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,r),kc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Fc,u.x),f.addScaledVector(Oc,u.y),f.addScaledVector(kc,u.z),f}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),bi.subVectors(e,n),si.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),si.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;bs.subVectors(a,r),Ls.subVectors(u,r),Uc.subVectors(e,r);const p=bs.dot(Uc),m=Ls.dot(Uc);if(p<=0&&m<=0)return n.copy(r);Ic.subVectors(e,a);const v=bs.dot(Ic),y=Ls.dot(Ic);if(v>=0&&y<=v)return n.copy(a);const x=p*y-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(bs,f);Nc.subVectors(e,u);const S=bs.dot(Nc),w=Ls.dot(Nc);if(w>=0&&S<=w)return n.copy(u);const C=S*m-p*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ls,d);const g=v*w-S*y;if(g<=0&&y-v>=0&&S-w>=0)return Yp.subVectors(u,a),d=(y-v)/(y-v+(S-w)),n.copy(a).addScaledVector(Yp,d);const _=1/(g+C+x);return f=C*_,d=x*_,n.copy(r).addScaledVector(bs,f).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},il={h:0,s:0,l:0};function zc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=Ov(e,1),n=xn(n,0,1),r=xn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=zc(f,u,e+1/3),this.g=zc(f,u,e),this.b=zc(f,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=pi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const r=jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Ec(e.r),this.g=Ec(e.g),this.b=Ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Et.fromWorkingColorSpace(mn.copy(this),e),Math.round(xn(mn.r*255,0,255))*65536+Math.round(xn(mn.g*255,0,255))*256+Math.round(xn(mn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=v<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=pi){Et.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(il);const r=Sc(hr.h,il.h,n),a=Sc(hr.s,il.s,n),u=Sc(hr.l,il.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new wt;wt.NAMES=jm;let n0=0;class Vo extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=zs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Jc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qc&&(r.blendSrc=this.blendSrc),this.blendDst!==Jc&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ym extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new Z,rl=new ut;class yn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ip,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array),u=Rn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}}class qm extends yn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Km extends yn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xr extends yn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let i0=0;const Yn=new Vt,Bc=new Ln,Ds=new Z,zn=new Ho,Fo=new Ho,rn=new Z;class Bi extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?Km:qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(zn.min,Fo.min),zn.expandByPoint(rn),rn.addVectors(zn.max,Fo.max),zn.expandByPoint(rn)):(zn.expandByPoint(Fo.min),zn.expandByPoint(Fo.max))}zn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)rn.fromBufferAttribute(d,m),p&&(Ds.fromBufferAttribute(e,m),rn.add(Ds)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let $=0;$<r.count;$++)d[$]=new Z,p[$]=new Z;const m=new Z,v=new Z,y=new Z,x=new ut,S=new ut,w=new ut,C=new Z,g=new Z;function _($,ye,E){m.fromBufferAttribute(r,$),v.fromBufferAttribute(r,ye),y.fromBufferAttribute(r,E),x.fromBufferAttribute(u,$),S.fromBufferAttribute(u,ye),w.fromBufferAttribute(u,E),v.sub(m),y.sub(m),S.sub(x),w.sub(x);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(R),g.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(R),d[$].add(C),d[ye].add(C),d[E].add(C),p[$].add(g),p[ye].add(g),p[E].add(g))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let $=0,ye=U.length;$<ye;++$){const E=U[$],R=E.start,V=E.count;for(let G=R,se=R+V;G<se;G+=3)_(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new Z,D=new Z,ee=new Z,B=new Z;function N($){ee.fromBufferAttribute(a,$),B.copy(ee);const ye=d[$];P.copy(ye),P.sub(ee.multiplyScalar(ee.dot(ye))).normalize(),D.crossVectors(B,ye);const R=D.dot(p[$])<0?-1:1;f.setXYZW($,P.x,P.y,P.z,R)}for(let $=0,ye=U.length;$<ye;++$){const E=U[$],R=E.start,V=E.count;for(let G=R,se=R+V;G<se;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,u=new Z,f=new Z,d=new Z,p=new Z,m=new Z,v=new Z,y=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),C=e.getX(x+1),g=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,g),v.subVectors(f,u),y.subVectors(a,u),v.cross(y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,g),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),y.subVectors(a,u),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,y=d.normalized,x=new m.constructor(p.length*v);let S=0,w=0;for(let C=0,g=p.length;C<g;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*v;for(let _=0;_<v;_++)x[w++]=m[S++]}return new yn(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,y=m.length;v<y;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],y=u[m];for(let x=0,S=y.length;x<S;x++)v.push(y[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new Vt,Fr=new $f,sl=new Nl,Kp=new Z,ol=new Z,al=new Z,ll=new Z,Hc=new Z,ul=new Z,$p=new Z,cl=new Z;class Fi extends Ln{constructor(e=new Bi,n=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ul.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],y=u[p];v!==0&&(Hc.fromBufferAttribute(y,e),f?ul.addScaledVector(Hc,v):ul.addScaledVector(Hc.sub(n),v))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sl.copy(r.boundingSphere),sl.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(sl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(sl,Kp)===null||Fr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(qp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,C=x.length;w<C;w++){const g=x[w],_=f[g.materialIndex],U=Math.max(g.start,S.start),P=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let D=U,ee=P;D<ee;D+=3){const B=d.getX(D),N=d.getX(D+1),$=d.getX(D+2);a=fl(this,_,e,r,m,v,y,B,N,$),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let g=w,_=C;g<_;g+=3){const U=d.getX(g),P=d.getX(g+1),D=d.getX(g+2);a=fl(this,f,e,r,m,v,y,U,P,D),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,C=x.length;w<C;w++){const g=x[w],_=f[g.materialIndex],U=Math.max(g.start,S.start),P=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let D=U,ee=P;D<ee;D+=3){const B=D,N=D+1,$=D+2;a=fl(this,_,e,r,m,v,y,B,N,$),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let g=w,_=C;g<_;g+=3){const U=g,P=g+1,D=g+2;a=fl(this,f,e,r,m,v,y,U,P,D),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function r0(s,e,n,r,a,u,f,d){let p;if(e.side===Pn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===xr,d),p===null)return null;cl.copy(d),cl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(cl);return m<n.near||m>n.far?null:{distance:m,point:cl.clone(),object:s}}function fl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ol),s.getVertexPosition(p,al),s.getVertexPosition(m,ll);const v=r0(s,e,n,r,ol,al,ll,$p);if(v){const y=new Z;ai.getBarycoord($p,ol,al,ll,y),a&&(v.uv=ai.getInterpolatedAttribute(a,d,p,m,y,new ut)),u&&(v.uv1=ai.getInterpolatedAttribute(u,d,p,m,y,new ut)),f&&(v.normal=ai.getInterpolatedAttribute(f,d,p,m,y,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Z,materialIndex:0};ai.getNormal(ol,al,ll,x.normal),v.face=x,v.barycoord=y}return v}class Go extends Bi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Xr(m,3)),this.setAttribute("normal",new Xr(v,3)),this.setAttribute("uv",new Xr(y,2));function w(C,g,_,U,P,D,ee,B,N,$,ye){const E=D/N,R=ee/$,V=D/2,G=ee/2,se=B/2,le=N+1,J=$+1;let ae=0,k=0;const ce=new Z;for(let re=0;re<J;re++){const I=re*R-G;for(let ie=0;ie<le;ie++){const be=ie*E-V;ce[C]=be*U,ce[g]=I*P,ce[_]=se,m.push(ce.x,ce.y,ce.z),ce[C]=0,ce[g]=0,ce[_]=B>0?1:-1,v.push(ce.x,ce.y,ce.z),y.push(ie/N),y.push(1-re/$),ae+=1}}for(let re=0;re<$;re++)for(let I=0;I<N;I++){const ie=x+I+le*re,be=x+I+le*(re+1),Y=x+(I+1)+le*(re+1),ue=x+(I+1)+le*re;p.push(ie,be,ue),p.push(be,Y,ue),k+=6}d.addGroup(S,k,ye),S+=k,x+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function s0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function $m(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const o0={clone:Ys,merge:vn};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Zm extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new Z,Zp=new ut,Qp=new ut;class qn extends Zm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Is=1;class u0 extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Us,Is,e,n);a.layers=this.layers,this.add(a);const u=new qn(Us,Is,e,n);u.layers=this.layers,this.add(u);const f=new qn(Us,Is,e,n);f.layers=this.layers,this.add(f);const d=new qn(Us,Is,e,n);d.layers=this.layers,this.add(d);const p=new qn(Us,Is,e,n);p.layers=this.layers,this.add(p);const m=new qn(Us,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Qm extends bn{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c0 extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Qm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Go(5,5,5),u=new zi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:_r});u.uniforms.tEquirect.value=n;const f=new Fi(a,u),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=oi),new u0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Vc=new Z,f0=new Z,d0=new st;class mr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Vc.subVectors(r,n).cross(f0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Vc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||d0.getNormalMatrix(e),a=this.coplanarPoint(Vc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Nl,dl=new Z;class Jm{constructor(e=new mr,n=new mr,r=new mr,a=new mr,u=new mr,f=new mr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ni){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],y=a[6],x=a[7],S=a[8],w=a[9],C=a[10],g=a[11],_=a[12],U=a[13],P=a[14],D=a[15];if(r[0].setComponents(p-u,x-m,g-S,D-_).normalize(),r[1].setComponents(p+u,x+m,g+S,D+_).normalize(),r[2].setComponents(p+f,x+v,g+w,D+U).normalize(),r[3].setComponents(p-f,x-v,g-w,D-U).normalize(),r[4].setComponents(p-d,x-y,g-C,D-P).normalize(),n===Ni)r[5].setComponents(p+d,x+y,g+C,D+P).normalize();else if(n===Ll)r[5].setComponents(d,y,C,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function h0(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const v=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,v);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],C=y[S];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++x,y[x]=C)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const C=y[S];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Fl extends Bi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,y=e/d,x=n/p,S=[],w=[],C=[],g=[];for(let _=0;_<v;_++){const U=_*x-f;for(let P=0;P<m;P++){const D=P*y-u;w.push(D,-U,0),C.push(0,0,1),g.push(P/d),g.push(1-_/p)}}for(let _=0;_<p;_++)for(let U=0;U<d;U++){const P=U+m*_,D=U+m*(_+1),ee=U+1+m*(_+1),B=U+1+m*_;S.push(P,D,B),S.push(D,ee,B)}this.setIndex(S),this.setAttribute("position",new Xr(w,3)),this.setAttribute("normal",new Xr(C,3)),this.setAttribute("uv",new Xr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,O0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ex=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,My=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ny=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:_0,alphatest_fragment:v0,alphatest_pars_fragment:x0,aomap_fragment:y0,aomap_pars_fragment:S0,batching_pars_vertex:M0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:U0,color_pars_fragment:I0,color_pars_vertex:N0,color_vertex:F0,common:O0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:z0,displacementmap_pars_vertex:B0,displacementmap_vertex:H0,emissivemap_fragment:V0,emissivemap_pars_fragment:G0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:j0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:q0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:ox,envmap_vertex:$0,fog_vertex:Z0,fog_pars_vertex:Q0,fog_fragment:J0,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:ux,lights_phong_pars_fragment:cx,lights_physical_fragment:fx,lights_physical_pars_fragment:dx,lights_fragment_begin:hx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:xx,map_fragment:yx,map_pars_fragment:Sx,map_particle_fragment:Mx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:wx,morphinstance_vertex:Ax,morphcolor_vertex:Rx,morphnormal_vertex:Cx,morphtarget_pars_vertex:Px,morphtarget_vertex:bx,normal_fragment_begin:Lx,normal_fragment_maps:Dx,normal_pars_fragment:Ux,normal_pars_vertex:Ix,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Bx,opaque_fragment:Hx,packing:Vx,premultiplied_alpha_fragment:Gx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:jx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:$x,shadowmap_vertex:Zx,shadowmask_pars_fragment:Qx,skinbase_vertex:Jx,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:ry,tonemapping_fragment:sy,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:uy,uv_pars_vertex:cy,uv_vertex:fy,worldpos_vertex:dy,background_vert:hy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:_y,cube_frag:vy,depth_vert:xy,depth_frag:yy,distanceRGBA_vert:Sy,distanceRGBA_frag:My,equirect_vert:Ey,equirect_frag:Ty,linedashed_vert:wy,linedashed_frag:Ay,meshbasic_vert:Ry,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:by,meshmatcap_vert:Ly,meshmatcap_frag:Dy,meshnormal_vert:Uy,meshnormal_frag:Iy,meshphong_vert:Ny,meshphong_frag:Fy,meshphysical_vert:Oy,meshphysical_frag:ky,meshtoon_vert:zy,meshtoon_frag:By,points_vert:Hy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:jy},Re={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mi={basic:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:vn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:vn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new wt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:vn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:vn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:vn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:vn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:vn([Re.common,Re.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:vn([Re.lights,Re.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};mi.physical={uniforms:vn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const hl={r:0,b:0,g:0},kr=new ki,Yy=new Vt;function qy(s,e,n,r,a,u,f){const d=new wt(0);let p=u===!0?0:1,m,v,y=null,x=0,S=null;function w(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?n:e).get(P)),P}function C(U){let P=!1;const D=w(U);D===null?_(d,p):D&&D.isColor&&(_(D,1),P=!0);const ee=s.xr.getEnvironmentBlendMode();ee==="additive"?r.buffers.color.setClear(0,0,0,1,f):ee==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(U,P){const D=w(P);D&&(D.isCubeTexture||D.mapping===Ul)?(v===void 0&&(v=new Fi(new Go(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ys(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(ee,B,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),kr.copy(P.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(kr)),v.material.toneMapped=Et.getTransfer(D.colorSpace)!==Ut,(y!==D||x!==D.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,y=D,x=D.version,S=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Fi(new Fl(2,2),new zi({name:"BackgroundMaterial",uniforms:Ys(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(D.colorSpace)!==Ut,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,P){U.getRGB(hl,$m(s)),r.buffers.color.setClear(hl.r,hl.g,hl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(U,P=1){d.set(U),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(d,p)},render:C,addToRenderList:g}}function Ky(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(E,R,V,G,se){let le=!1;const J=y(G,V,R);u!==J&&(u=J,m(u.object)),le=S(E,G,V,se),le&&w(E,G,V,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(le||f)&&(f=!1,D(E,R,V,G),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function v(E){return s.deleteVertexArray(E)}function y(E,R,V){const G=V.wireframe===!0;let se=r[E.id];se===void 0&&(se={},r[E.id]=se);let le=se[R.id];le===void 0&&(le={},se[R.id]=le);let J=le[G];return J===void 0&&(J=x(p()),le[G]=J),J}function x(E){const R=[],V=[],G=[];for(let se=0;se<n;se++)R[se]=0,V[se]=0,G[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:G,object:E,attributes:{},index:null}}function S(E,R,V,G){const se=u.attributes,le=R.attributes;let J=0;const ae=V.getAttributes();for(const k in ae)if(ae[k].location>=0){const re=se[k];let I=le[k];if(I===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(I=E.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;J++}return u.attributesNum!==J||u.index!==G}function w(E,R,V,G){const se={},le=R.attributes;let J=0;const ae=V.getAttributes();for(const k in ae)if(ae[k].location>=0){let re=le[k];re===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),se[k]=I,J++}u.attributes=se,u.attributesNum=J,u.index=G}function C(){const E=u.newAttributes;for(let R=0,V=E.length;R<V;R++)E[R]=0}function g(E){_(E,0)}function _(E,R){const V=u.newAttributes,G=u.enabledAttributes,se=u.attributeDivisors;V[E]=1,G[E]===0&&(s.enableVertexAttribArray(E),G[E]=1),se[E]!==R&&(s.vertexAttribDivisor(E,R),se[E]=R)}function U(){const E=u.newAttributes,R=u.enabledAttributes;for(let V=0,G=R.length;V<G;V++)R[V]!==E[V]&&(s.disableVertexAttribArray(V),R[V]=0)}function P(E,R,V,G,se,le,J){J===!0?s.vertexAttribIPointer(E,R,V,se,le):s.vertexAttribPointer(E,R,V,G,se,le)}function D(E,R,V,G){C();const se=G.attributes,le=V.getAttributes(),J=R.defaultAttributeValues;for(const ae in le){const k=le[ae];if(k.location>=0){let ce=se[ae];if(ce===void 0&&(ae==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),ae==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){const re=ce.normalized,I=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const be=ie.buffer,Y=ie.type,ue=ie.bytesPerElement,ge=Y===s.INT||Y===s.UNSIGNED_INT||ce.gpuType===Gf;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ce=xe.stride,Pe=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let $e=0;$e<k.locationSize;$e++)_(k.location+$e,xe.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let $e=0;$e<k.locationSize;$e++)g(k.location+$e);s.bindBuffer(s.ARRAY_BUFFER,be);for(let $e=0;$e<k.locationSize;$e++)P(k.location+$e,I/k.locationSize,Y,re,Ce*ue,(Pe+I/k.locationSize*$e)*ue,ge)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)_(k.location+xe,ce.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<k.locationSize;xe++)g(k.location+xe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let xe=0;xe<k.locationSize;xe++)P(k.location+xe,I/k.locationSize,Y,re,I*ue,I/k.locationSize*xe*ue,ge)}}else if(J!==void 0){const re=J[ae];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}U()}function ee(){$();for(const E in r){const R=r[E];for(const V in R){const G=R[V];for(const se in G)v(G[se].object),delete G[se];delete R[V]}delete r[E]}}function B(E){if(r[E.id]===void 0)return;const R=r[E.id];for(const V in R){const G=R[V];for(const se in G)v(G[se].object),delete G[se];delete R[V]}delete r[E.id]}function N(E){for(const R in r){const V=r[R];if(V[E.id]===void 0)continue;const G=V[E.id];for(const se in G)v(G[se].object),delete G[se];delete V[E.id]}}function $(){ye(),f=!0,u!==a&&(u=a,m(u.object))}function ye(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:$,resetDefaultState:ye,dispose:ee,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:g,disableUnusedAttributes:U}}function $y(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,y){y!==0&&(s.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function d(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,y);let S=0;for(let w=0;w<y;w++)S+=v[w];n.update(S,r,1)}function p(m,v,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,y);let w=0;for(let C=0;C<y;C++)w+=v[C];for(let C=0;C<x.length;C++)n.update(w,r,x[C])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Zy(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==li&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const $=N===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Oi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ii&&!$)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const N=e.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),ee=w>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:ee,maxSamples:B}}function Qy(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new mr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=v(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,C=y.clipIntersection,g=y.clipShadows,_=s.get(y);if(!a||w===null||w.length===0||u&&!g)u?v(null):m();else{const U=u?0:r,P=U*4;let D=_.clippingState||null;p.value=D,D=v(w,x,P,S);for(let ee=0;ee!==P;++ee)D[ee]=n[ee];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,S,w){const C=y!==null?y.length:0;let g=null;if(C!==0){if(g=p.value,w!==!0||g===null){const _=S+C*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(g===null||g.length<_)&&(g=new Float32Array(_));for(let P=0,D=S;P!==C;++P,D+=4)f.copy(y[P]).applyMatrix4(U,d),f.normal.toArray(g,D),g[D+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,g}}function Jy(s){let e=new WeakMap;function n(f,d){return d===lf?f.mapping=Gs:d===uf&&(f.mapping=Ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===lf||d===uf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new c0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class eS extends Zm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,Jp=[.125,.215,.35,.446,.526,.582],Vr=20,Gc=new eS,em=new wt;let Wc=null,Xc=0,jc=0,Yc=!1;const Br=(1+Math.sqrt(5))/2,Ns=1/Br,tm=[new Z(-Br,Ns,0),new Z(Br,Ns,0),new Z(-Ns,0,Br),new Z(Ns,0,Br),new Z(0,Br,-Ns),new Z(0,Br,Ns),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,jc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:zo,format:li,colorSpace:yr,depthBuffer:!1},a=im(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tS(u)),this._blurMaterial=nS(u,e,n)}return a}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,r,a){const d=new qn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(em),v.toneMapping=vr,v.autoClear=!1;const S=new Ym({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),w=new Fi(new Go,S);let C=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,C=!0):(S.color.copy(em),C=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):U===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const P=this._cubeSize;pl(a,U*P,_>2?P:0,P,P),v.setRenderTarget(a),C&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Gc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=tm[(a-u-1)%tm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Fi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),C=u/w,g=isFinite(u)?1+Math.floor(v*C):Vr;g>Vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vr}`);const _=[];let U=0;for(let N=0;N<Vr;++N){const $=N/C,ye=Math.exp(-$*$/2);_.push(ye),N===0?U+=ye:N<g&&(U+=2*ye)}for(let N=0;N<_.length;N++)_[N]=_[N]/U;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const D=this._sizeLods[a],ee=3*D*(a>P-Os?a-P+Os:0),B=4*(this._cubeSize-D);pl(n,ee,B,3*D,2*D),p.setRenderTarget(n),p.render(y,Gc)}}function tS(s){const e=[],n=[],r=[];let a=s;const u=s-Os+1+Jp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Os?p=Jp[f-s+Os-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,C=3,g=2,_=1,U=new Float32Array(C*w*S),P=new Float32Array(g*w*S),D=new Float32Array(_*w*S);for(let B=0;B<S;B++){const N=B%3*2/3-1,$=B>2?0:-1,ye=[N,$,0,N+2/3,$,0,N+2/3,$+1,0,N,$,0,N+2/3,$+1,0,N,$+1,0];U.set(ye,C*w*B),P.set(x,g*w*B);const E=[B,B,B,B,B,B];D.set(E,_*w*B)}const ee=new Bi;ee.setAttribute("position",new yn(U,C)),ee.setAttribute("uv",new yn(P,g)),ee.setAttribute("faceIndex",new yn(D,_)),e.push(ee),a>Os&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function im(s,e,n){const r=new Yr(s,e,n);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function nS(s,e,n){const r=new Float32Array(Vr),a=new Z(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function rm(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function sm(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Zf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===lf||p===uf,v=p===Gs||p===Ws;if(m||v){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new nm(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new nm(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function rS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Al("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function sS(s,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const C=x.morphAttributes[w];for(let g=0,_=C.length;g<_;g++)e.remove(C[g])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const C=S[w];for(let g=0,_=C.length;g<_;g++)e.update(C[g],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let C=0;if(S!==null){const U=S.array;C=S.version;for(let P=0,D=U.length;P<D;P+=3){const ee=U[P+0],B=U[P+1],N=U[P+2];x.push(ee,B,B,N,N,ee)}}else if(w!==void 0){const U=w.array;C=w.version;for(let P=0,D=U.length/3-1;P<D;P+=3){const ee=P+0,B=P+1,N=P+2;x.push(ee,B,B,N,N,ee)}}else return;const g=new(Vm(x)?Km:qm)(x,1);g.version=C;const _=u.get(y);_&&e.remove(_),u.set(y,g)}function v(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:v}}function oS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function v(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let g=0;for(let _=0;_<w;_++)g+=S[_];n.update(g,r,1)}function y(x,S,w,C){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<x.length;_++)m(x[_]/f,S[_],C[_]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,C,0,w);let _=0;for(let U=0;U<w;U++)_+=S[U];for(let U=0;U<C.length;U++)n.update(_,r,C[U])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function aS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function lS(s,e,n){const r=new WeakMap,a=new Ht;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let E=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),C===!0&&(D=2),g===!0&&(D=3);let ee=d.attributes.position.count*D,B=1;ee>e.maxTextureSize&&(B=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const N=new Float32Array(ee*B*4*y),$=new Wm(N,ee,B,y);$.type=Ii,$.needsUpdate=!0;const ye=D*4;for(let R=0;R<y;R++){const V=_[R],G=U[R],se=P[R],le=ee*B*4*R;for(let J=0;J<V.count;J++){const ae=J*ye;w===!0&&(a.fromBufferAttribute(V,J),N[le+ae+0]=a.x,N[le+ae+1]=a.y,N[le+ae+2]=a.z,N[le+ae+3]=0),C===!0&&(a.fromBufferAttribute(G,J),N[le+ae+4]=a.x,N[le+ae+5]=a.y,N[le+ae+6]=a.z,N[le+ae+7]=0),g===!0&&(a.fromBufferAttribute(se,J),N[le+ae+8]=a.x,N[le+ae+9]=a.y,N[le+ae+10]=a.z,N[le+ae+11]=se.itemSize===4?a.w:1)}}x={count:y,texture:$,size:new ut(ee,B)},r.set(d,x),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const C=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function uS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,y=e.get(p,v);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class tg extends bn{constructor(e,n,r,a,u,f,d,p,m,v=Bs){if(v!==Bs&&v!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Bs&&(r=jr),r===void 0&&v===js&&(r=Xs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Kn,this.minFilter=p!==void 0?p:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new bn,om=new tg(1,1),ig=new Wm,rg=new qv,sg=new Qm,am=[],lm=[],um=new Float32Array(16),cm=new Float32Array(9),fm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=am[a];if(u===void 0&&(u=new Float32Array(a),am[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ol(s,e){let n=lm[e];n===void 0&&(n=new Int32Array(e),lm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function cS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function fS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function dS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function hS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function pS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;fm.set(r),s.uniformMatrix2fv(this.addr,!1,fm),Zt(n,r)}}function mS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;cm.set(r),s.uniformMatrix3fv(this.addr,!1,cm),Zt(n,r)}}function gS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;um.set(r),s.uniformMatrix4fv(this.addr,!1,um),Zt(n,r)}}function _S(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function SS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function wS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(om.compareFunction=Hm,u=om):u=ng,n.setTexture2D(e||u,a)}function AS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||rg,a)}function RS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||sg,a)}function CS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ig,a)}function PS(s){switch(s){case 5126:return cS;case 35664:return fS;case 35665:return dS;case 35666:return hS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return vS;case 35668:case 35672:return xS;case 35669:case 35673:return yS;case 5125:return SS;case 36294:return MS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}function bS(s,e){s.uniform1fv(this.addr,e)}function LS(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function DS(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function US(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function IS(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function NS(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function FS(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function OS(s,e){s.uniform1iv(this.addr,e)}function kS(s,e){s.uniform2iv(this.addr,e)}function zS(s,e){s.uniform3iv(this.addr,e)}function BS(s,e){s.uniform4iv(this.addr,e)}function HS(s,e){s.uniform1uiv(this.addr,e)}function VS(s,e){s.uniform2uiv(this.addr,e)}function GS(s,e){s.uniform3uiv(this.addr,e)}function WS(s,e){s.uniform4uiv(this.addr,e)}function XS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ng,u[f])}function jS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||rg,u[f])}function YS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||sg,u[f])}function qS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ig,u[f])}function KS(s){switch(s){case 5126:return bS;case 35664:return LS;case 35665:return DS;case 35666:return US;case 35674:return IS;case 35675:return NS;case 35676:return FS;case 5124:case 35670:return OS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return BS;case 5125:return HS;case 36294:return VS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}class $S{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=PS(n.type)}}class ZS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KS(n.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function dm(s,e){s.seq.push(e),s.map[e.id]=e}function JS(s,e,n){const r=s.name,a=r.length;for(qc.lastIndex=0;;){const u=qc.exec(r),f=qc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){dm(n,m===void 0?new $S(d,s,e):new ZS(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new QS(d),dm(n,y)),n=y}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);JS(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function hm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const eM=37297;let tM=0;function nM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function iM(s){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(s);let r;switch(e===n?r="":e===bl&&n===Pl?r="LinearDisplayP3ToLinearSRGB":e===Pl&&n===bl&&(r="LinearSRGBToLinearDisplayP3"),s){case yr:case Il:return[r,"LinearTransferOETF"];case pi:case Kf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function pm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+nM(s.getShaderSource(e),f)}else return a}function rM(s,e){const n=iM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function sM(s,e){let n;switch(e){case vv:n="Linear";break;case xv:n="Reinhard";break;case yv:n="Cineon";break;case Sv:n="ACESFilmic";break;case Ev:n="AgX";break;case Tv:n="Neutral";break;case Mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new Z;function oM(){Et.getLuminanceCoefficients(ml);const s=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function lM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function uM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Oo(s){return s!==""}function mm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(s){return s.replace(cM,dM)}const fM=new Map;function dM(s,e){let n=rt[e];if(n===void 0){const r=fM.get(e);if(r!==void 0)n=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zf(n)}const hM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(s){return s.replace(hM,pM)}function pM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function vm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function gM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _M(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function vM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function xM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function yM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=mM(n),m=gM(n),v=_M(n),y=vM(n),x=xM(n),S=aM(n),w=lM(u),C=a.createProgram();let g,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(g=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?rt.tonemapping_pars_fragment:"",n.toneMapping!==vr?sM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,rM("linearToOutputTexel",n.outputColorSpace),oM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=zf(f),f=mm(f,n),f=gm(f,n),d=zf(d),d=mm(d,n),d=gm(d,n),f=_m(f),d=_m(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=U+g+f,D=U+_+d,ee=hm(a,a.VERTEX_SHADER,P),B=hm(a,a.FRAGMENT_SHADER,D);a.attachShader(C,ee),a.attachShader(C,B),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function N(R){if(s.debug.checkShaderErrors){const V=a.getProgramInfoLog(C).trim(),G=a.getShaderInfoLog(ee).trim(),se=a.getShaderInfoLog(B).trim();let le=!0,J=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,ee,B);else{const ae=pm(a,ee,"vertex"),k=pm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+ae+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||se==="")&&(J=!1);J&&(R.diagnostics={runnable:le,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:se,prefix:_}})}a.deleteShader(ee),a.deleteShader(B),$=new Rl(a,C),ye=uM(a,C)}let $;this.getUniforms=function(){return $===void 0&&N(this),$};let ye;this.getAttributes=function(){return ye===void 0&&N(this),ye};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(C,eM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=ee,this.fragmentShader=B,this}let SM=0;class MM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new EM(e),n.set(e,r)),r}}class EM{constructor(e){this.id=SM++,this.code=e,this.usedTimes=0}}function TM(s,e,n,r,a,u,f){const d=new Xm,p=new MM,m=new Set,v=[],y=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,R,V,G,se){const le=G.fog,J=se.geometry,ae=E.isMeshStandardMaterial?G.environment:null,k=(E.isMeshStandardMaterial?n:e).get(E.envMap||ae),ce=k&&k.mapping===Ul?k.image.height:null,re=C[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const I=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ie=I!==void 0?I.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let Y,ue,ge,xe;if(re){const Qt=mi[re];Y=Qt.vertexShader,ue=Qt.fragmentShader}else Y=E.vertexShader,ue=E.fragmentShader,p.update(E),ge=p.getVertexShaderID(E),xe=p.getFragmentShaderID(E);const Ce=s.getRenderTarget(),Pe=se.isInstancedMesh===!0,$e=se.isBatchedMesh===!0,ht=!!E.map,ot=!!E.matcap,O=!!k,Xt=!!E.aoMap,it=!!E.lightMap,at=!!E.bumpMap,He=!!E.normalMap,yt=!!E.displacementMap,Ze=!!E.emissiveMap,b=!!E.metalnessMap,T=!!E.roughnessMap,q=E.anisotropy>0,de=E.clearcoat>0,_e=E.dispersion>0,fe=E.iridescence>0,je=E.sheen>0,we=E.transmission>0,Ne=q&&!!E.anisotropyMap,pt=de&&!!E.clearcoatMap,Se=de&&!!E.clearcoatNormalMap,Fe=de&&!!E.clearcoatRoughnessMap,et=fe&&!!E.iridescenceMap,Je=fe&&!!E.iridescenceThicknessMap,ke=je&&!!E.sheenColorMap,ft=je&&!!E.sheenRoughnessMap,nt=!!E.specularMap,Mt=!!E.specularColorMap,H=!!E.specularIntensityMap,Le=we&&!!E.transmissionMap,oe=we&&!!E.thicknessMap,he=!!E.gradientMap,Ae=!!E.alphaMap,Ue=E.alphaTest>0,dt=!!E.alphaHash,Ft=!!E.extensions;let sn=vr;E.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(sn=s.toneMapping);const mt={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:ue,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:$e,batchingColor:$e&&se._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&se.instanceColor!==null,instancingMorph:Pe&&se.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:ot,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:ce,aoMap:Xt,lightMap:it,bumpMap:at,normalMap:He,displacementMap:S&&yt,emissiveMap:Ze,normalMapObjectSpace:He&&E.normalMapType===Pv,normalMapTangentSpace:He&&E.normalMapType===Cv,metalnessMap:b,roughnessMap:T,anisotropy:q,anisotropyMap:Ne,clearcoat:de,clearcoatMap:pt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Fe,dispersion:_e,iridescence:fe,iridescenceMap:et,iridescenceThicknessMap:Je,sheen:je,sheenColorMap:ke,sheenRoughnessMap:ft,specularMap:nt,specularColorMap:Mt,specularIntensityMap:H,transmission:we,transmissionMap:Le,thicknessMap:oe,gradientMap:he,opaque:E.transparent===!1&&E.blending===zs&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Ue,alphaHash:dt,combine:E.combine,mapUv:ht&&g(E.map.channel),aoMapUv:Xt&&g(E.aoMap.channel),lightMapUv:it&&g(E.lightMap.channel),bumpMapUv:at&&g(E.bumpMap.channel),normalMapUv:He&&g(E.normalMap.channel),displacementMapUv:yt&&g(E.displacementMap.channel),emissiveMapUv:Ze&&g(E.emissiveMap.channel),metalnessMapUv:b&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:Ne&&g(E.anisotropyMap.channel),clearcoatMapUv:pt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(E.sheenRoughnessMap.channel),specularMapUv:nt&&g(E.specularMap.channel),specularColorMapUv:Mt&&g(E.specularColorMap.channel),specularIntensityMapUv:H&&g(E.specularIntensityMap.channel),transmissionMapUv:Le&&g(E.transmissionMap.channel),thicknessMapUv:oe&&g(E.thicknessMap.channel),alphaMapUv:Ae&&g(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(He||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!J.attributes.uv&&(ht||Ae),fog:!!le,useFog:E.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:se.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:sn,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ui,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||$e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=m.has(1),mt.vertexUv2s=m.has(2),mt.vertexUv3s=m.has(3),m.clear(),mt}function U(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)R.push(V),R.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(P(R,E),D(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function D(E,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.alphaToCoverage&&d.enable(20),E.push(d.mask)}function ee(E){const R=C[E.type];let V;if(R){const G=mi[R];V=o0.clone(G.uniforms)}else V=E.uniforms;return V}function B(E,R){let V;for(let G=0,se=v.length;G<se;G++){const le=v[G];if(le.cacheKey===R){V=le,++V.usedTimes;break}}return V===void 0&&(V=new yM(s,R,E,u),v.push(V)),V}function N(E){if(--E.usedTimes===0){const R=v.indexOf(E);v[R]=v[v.length-1],v.pop(),E.destroy()}}function $(E){p.remove(E)}function ye(){p.dispose()}return{getParameters:_,getProgramCacheKey:U,getUniforms:ee,acquireProgram:B,releaseProgram:N,releaseShaderCache:$,programs:v,dispose:ye}}function wM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function AM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,w,C,g){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:C,group:g},s[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=S,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=C,_.group=g),e++,_}function d(y,x,S,w,C,g){const _=f(y,x,S,w,C,g);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function p(y,x,S,w,C,g){const _=f(y,x,S,w,C,g);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||AM),r.length>1&&r.sort(x||xm),a.length>1&&a.sort(x||xm)}function v(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function RM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new ym,s.set(r,[f])):a>=u.length?(f=new ym,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function CM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new wt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function PM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let bM=0;function LM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function DM(s){const e=new CM,n=PM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new Vt,f=new Vt;function d(m){let v=0,y=0,x=0;for(let ye=0;ye<9;ye++)r.probe[ye].set(0,0,0);let S=0,w=0,C=0,g=0,_=0,U=0,P=0,D=0,ee=0,B=0,N=0;m.sort(LM);for(let ye=0,E=m.length;ye<E;ye++){const R=m[ye],V=R.color,G=R.intensity,se=R.distance,le=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)v+=V.r*G,y+=V.g*G,x+=V.b*G;else if(R.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(R.sh.coefficients[J],G);N++}else if(R.isDirectionalLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ae=R.shadow,k=n.get(R);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=R.shadow.matrix,U++}r.directional[S]=J,S++}else if(R.isSpotLight){const J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(V).multiplyScalar(G),J.distance=se,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,r.spot[C]=J;const ae=R.shadow;if(R.map&&(r.spotLightMap[ee]=R.map,ee++,ae.updateMatrices(R),R.castShadow&&B++),r.spotLightMatrix[C]=ae.matrix,R.castShadow){const k=n.get(R);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,r.spotShadow[C]=k,r.spotShadowMap[C]=le,D++}C++}else if(R.isRectAreaLight){const J=e.get(R);J.color.copy(V).multiplyScalar(G),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),r.rectArea[g]=J,g++}else if(R.isPointLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){const ae=R.shadow,k=n.get(R);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,k.shadowCameraNear=ae.camera.near,k.shadowCameraFar=ae.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=le,r.pointShadowMatrix[w]=R.shadow.matrix,P++}r.point[w]=J,w++}else if(R.isHemisphereLight){const J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(G),J.groundColor.copy(R.groundColor).multiplyScalar(G),r.hemi[_]=J,_++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const $=r.hash;($.directionalLength!==S||$.pointLength!==w||$.spotLength!==C||$.rectAreaLength!==g||$.hemiLength!==_||$.numDirectionalShadows!==U||$.numPointShadows!==P||$.numSpotShadows!==D||$.numSpotMaps!==ee||$.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=g,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+ee-B,r.spotLightMap.length=ee,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=N,$.directionalLength=S,$.pointLength=w,$.spotLength=C,$.rectAreaLength=g,$.hemiLength=_,$.numDirectionalShadows=U,$.numPointShadows=P,$.numSpotShadows=D,$.numSpotMaps=ee,$.numLightProbes=N,r.version=bM++)}function p(m,v){let y=0,x=0,S=0,w=0,C=0;const g=v.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const P=m[_];if(P.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),y++}else if(P.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),S++}else if(P.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),f.identity(),u.copy(P.matrixWorld),u.premultiply(g),f.extractRotation(u),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),x++}else if(P.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(g),C++}}}return{setup:d,setupView:p,state:r}}function Sm(s){const e=new DM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function UM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Sm(s),e.set(a,[d])):u>=f.length?(d=new Sm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class IM extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kM(s,e,n){let r=new Jm;const a=new ut,u=new ut,f=new Ht,d=new IM({depthPacking:Rv}),p=new NM,m={},v=n.maxTextureSize,y={[xr]:Pn,[Pn]:xr,[Ui]:Ui},x=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:FM,fragmentShader:OM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Bi;w.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Fi(w,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let _=this.type;this.render=function(B,N,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const ye=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),V=s.state;V.setBlending(_r),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=_!==Di&&this.type===Di,se=_===Di&&this.type!==Di;for(let le=0,J=B.length;le<J;le++){const ae=B[le],k=ae.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ce=k.getFrameExtents();if(a.multiply(ce),u.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/ce.x),a.x=u.x*ce.x,k.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/ce.y),a.y=u.y*ce.y,k.mapSize.y=u.y)),k.map===null||G===!0||se===!0){const I=this.type!==Di?{minFilter:Kn,magFilter:Kn}:{};k.map!==null&&k.map.dispose(),k.map=new Yr(a.x,a.y,I),k.map.texture.name=ae.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let I=0;I<re;I++){const ie=k.getViewport(I);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),V.viewport(f),k.updateMatrices(ae,I),r=k.getFrustum(),D(N,$,k.camera,ae,this.type)}k.isPointLightShadow!==!0&&this.type===Di&&U(k,$),k.needsUpdate=!1}_=this.type,g.needsUpdate=!1,s.setRenderTarget(ye,E,R)};function U(B,N){const $=e.update(C);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Yr(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(N,null,$,x,C,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(N,null,$,S,C,null)}function P(B,N,$,ye){let E=null;const R=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(R!==void 0)E=R;else if(E=$.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const V=E.uuid,G=N.uuid;let se=m[V];se===void 0&&(se={},m[V]=se);let le=se[G];le===void 0&&(le=E.clone(),se[G]=le,N.addEventListener("dispose",ee)),E=le}if(E.visible=N.visible,E.wireframe=N.wireframe,ye===Di?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:y[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,$.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=s.properties.get(E);V.light=$}return E}function D(B,N,$,ye,E){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===Di)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const G=e.update(B),se=B.material;if(Array.isArray(se)){const le=G.groups;for(let J=0,ae=le.length;J<ae;J++){const k=le[J],ce=se[k.materialIndex];if(ce&&ce.visible){const re=P(B,ce,ye,E);B.onBeforeShadow(s,B,N,$,G,re,k),s.renderBufferDirect($,null,G,re,B,k),B.onAfterShadow(s,B,N,$,G,re,k)}}}else if(se.visible){const le=P(B,se,ye,E);B.onBeforeShadow(s,B,N,$,G,le,null),s.renderBufferDirect($,null,G,le,B,null),B.onAfterShadow(s,B,N,$,G,le,null)}}const V=B.children;for(let G=0,se=V.length;G<se;G++)D(V[G],N,$,ye,E)}function ee(B){B.target.removeEventListener("dispose",ee);for(const $ in m){const ye=m[$],E=B.target.uuid;E in ye&&(ye[E].dispose(),delete ye[E])}}}const zM={[ef]:tf,[nf]:of,[rf]:af,[Vs]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:Vs};function BM(s){function e(){let H=!1;const Le=new Ht;let oe=null;const he=new Ht(0,0,0,0);return{setMask:function(Ae){oe!==Ae&&!H&&(s.colorMask(Ae,Ae,Ae,Ae),oe=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,Ue,dt,Ft,sn){sn===!0&&(Ae*=Ft,Ue*=Ft,dt*=Ft),Le.set(Ae,Ue,dt,Ft),he.equals(Le)===!1&&(s.clearColor(Ae,Ue,dt,Ft),he.copy(Le))},reset:function(){H=!1,oe=null,he.set(-1,0,0,0)}}}function n(){let H=!1,Le=!1,oe=null,he=null,Ae=null;return{setReversed:function(Ue){Le=Ue},setTest:function(Ue){Ue?ge(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ue){oe!==Ue&&!H&&(s.depthMask(Ue),oe=Ue)},setFunc:function(Ue){if(Le&&(Ue=zM[Ue]),he!==Ue){switch(Ue){case ef:s.depthFunc(s.NEVER);break;case tf:s.depthFunc(s.ALWAYS);break;case nf:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case rf:s.depthFunc(s.EQUAL);break;case sf:s.depthFunc(s.GEQUAL);break;case of:s.depthFunc(s.GREATER);break;case af:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ue}},setLocked:function(Ue){H=Ue},setClear:function(Ue){Ae!==Ue&&(s.clearDepth(Ue),Ae=Ue)},reset:function(){H=!1,oe=null,he=null,Ae=null}}}function r(){let H=!1,Le=null,oe=null,he=null,Ae=null,Ue=null,dt=null,Ft=null,sn=null;return{setTest:function(mt){H||(mt?ge(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(mt){Le!==mt&&!H&&(s.stencilMask(mt),Le=mt)},setFunc:function(mt,Qt,Bn){(oe!==mt||he!==Qt||Ae!==Bn)&&(s.stencilFunc(mt,Qt,Bn),oe=mt,he=Qt,Ae=Bn)},setOp:function(mt,Qt,Bn){(Ue!==mt||dt!==Qt||Ft!==Bn)&&(s.stencilOp(mt,Qt,Bn),Ue=mt,dt=Qt,Ft=Bn)},setLocked:function(mt){H=mt},setClear:function(mt){sn!==mt&&(s.clearStencil(mt),sn=mt)},reset:function(){H=!1,Le=null,oe=null,he=null,Ae=null,Ue=null,dt=null,Ft=null,sn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,x=[],S=null,w=!1,C=null,g=null,_=null,U=null,P=null,D=null,ee=null,B=new wt(0,0,0),N=0,$=!1,ye=null,E=null,R=null,V=null,G=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,J=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ae)[1]),le=J>=1):ae.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),le=J>=2);let k=null,ce={};const re=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),ie=new Ht().fromArray(re),be=new Ht().fromArray(I);function Y(H,Le,oe,he){const Ae=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(H,Ue),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<oe;dt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Le+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Ue}const ue={};ue[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(Vs),it(!1),at(bp),ge(s.CULL_FACE),O(_r);function ge(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function xe(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function Ce(H,Le){return v[H]!==Le?(s.bindFramebuffer(H,Le),v[H]=Le,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Pe(H,Le){let oe=x,he=!1;if(H){oe=y.get(Le),oe===void 0&&(oe=[],y.set(Le,oe));const Ae=H.textures;if(oe.length!==Ae.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,dt=Ae.length;Ue<dt;Ue++)oe[Ue]=s.COLOR_ATTACHMENT0+Ue;oe.length=Ae.length,he=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,he=!0);he&&s.drawBuffers(oe)}function $e(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const ht={[Hr]:s.FUNC_ADD,[J_]:s.FUNC_SUBTRACT,[ev]:s.FUNC_REVERSE_SUBTRACT};ht[tv]=s.MIN,ht[nv]=s.MAX;const ot={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[Qc]:s.SRC_ALPHA,[fv]:s.SRC_ALPHA_SATURATE,[uv]:s.DST_COLOR,[av]:s.DST_ALPHA,[ov]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[cv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[dv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(H,Le,oe,he,Ae,Ue,dt,Ft,sn,mt){if(H===_r){w===!0&&(xe(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),H!==Q_){if(H!==C||mt!==$){if((g!==Hr||P!==Hr)&&(s.blendEquation(s.FUNC_ADD),g=Hr,P=Hr),mt)switch(H){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zc:s.blendFunc(s.ONE,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,U=null,D=null,ee=null,B.set(0,0,0),N=0,C=H,$=mt}return}Ae=Ae||Le,Ue=Ue||oe,dt=dt||he,(Le!==g||Ae!==P)&&(s.blendEquationSeparate(ht[Le],ht[Ae]),g=Le,P=Ae),(oe!==_||he!==U||Ue!==D||dt!==ee)&&(s.blendFuncSeparate(ot[oe],ot[he],ot[Ue],ot[dt]),_=oe,U=he,D=Ue,ee=dt),(Ft.equals(B)===!1||sn!==N)&&(s.blendColor(Ft.r,Ft.g,Ft.b,sn),B.copy(Ft),N=sn),C=H,$=!1}function Xt(H,Le){H.side===Ui?xe(s.CULL_FACE):ge(s.CULL_FACE);let oe=H.side===Pn;Le&&(oe=!oe),it(oe),H.blending===zs&&H.transparent===!1?O(_r):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const he=H.stencilWrite;f.setTest(he),he&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),yt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(H){ye!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ye=H)}function at(H){H!==K_?(ge(s.CULL_FACE),H!==E&&(H===bp?s.cullFace(s.BACK):H===$_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),E=H}function He(H){H!==R&&(le&&s.lineWidth(H),R=H)}function yt(H,Le,oe){H?(ge(s.POLYGON_OFFSET_FILL),(V!==Le||G!==oe)&&(s.polygonOffset(Le,oe),V=Le,G=oe)):xe(s.POLYGON_OFFSET_FILL)}function Ze(H){H?ge(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+se-1),k!==H&&(s.activeTexture(H),k=H)}function T(H,Le,oe){oe===void 0&&(k===null?oe=s.TEXTURE0+se-1:oe=k);let he=ce[oe];he===void 0&&(he={type:void 0,texture:void 0},ce[oe]=he),(he.type!==H||he.texture!==Le)&&(k!==oe&&(s.activeTexture(oe),k=oe),s.bindTexture(H,Le||ue[H]),he.type=H,he.texture=Le)}function q(){const H=ce[k];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){ie.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function ke(H){be.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function ft(H,Le){let oe=p.get(Le);oe===void 0&&(oe=new WeakMap,p.set(Le,oe));let he=oe.get(H);he===void 0&&(he=s.getUniformBlockIndex(Le,H.name),oe.set(H,he))}function nt(H,Le){const he=p.get(Le).get(H);d.get(Le)!==he&&(s.uniformBlockBinding(Le,he,H.__bindingPointIndex),d.set(Le,he))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},k=null,ce={},v={},y=new WeakMap,x=[],S=null,w=!1,C=null,g=null,_=null,U=null,P=null,D=null,ee=null,B=new wt(0,0,0),N=0,$=!1,ye=null,E=null,R=null,V=null,G=null,ie.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:ge,disable:xe,bindFramebuffer:Ce,drawBuffers:Pe,useProgram:$e,setBlending:O,setMaterial:Xt,setFlipSided:it,setCullFace:at,setLineWidth:He,setPolygonOffset:yt,setScissorTest:Ze,activeTexture:b,bindTexture:T,unbindTexture:q,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:et,updateUBOMapping:ft,uniformBlockBinding:nt,texStorage2D:pt,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:je,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:ke,reset:Mt}}function Mm(s,e,n,r){const a=HM(r);switch(n){case Im:return s*e;case Fm:return s*e;case Om:return s*e*2;case km:return s*e/a.components*a.byteLength;case jf:return s*e/a.components*a.byteLength;case zm:return s*e*2/a.components*a.byteLength;case Yf:return s*e*2/a.components*a.byteLength;case Nm:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case qf:return s*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(s,16)*Math.max(e,8)/4;case df:case pf:return Math.max(s,8)*Math.max(e,8)/2;case gf:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Uf:case If:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bm:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ff:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HM(s){switch(s){case Oi:case Lm:return{byteLength:1,components:1};case ko:case Dm:case zo:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case jr:case Gf:case Ii:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function VM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,v=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,T){return S?new OffscreenCanvas(b,T):Dl("canvas")}function C(b,T,q){let de=1;const _e=Ze(b);if((_e.width>q||_e.height>q)&&(de=q/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const fe=Math.floor(de*_e.width),je=Math.floor(de*_e.height);y===void 0&&(y=w(fe,je));const we=T?w(fe,je):y;return we.width=fe,we.height=je,we.getContext("2d").drawImage(b,0,0,fe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+je+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function g(b){return b.generateMipmaps&&b.minFilter!==Kn&&b.minFilter!==oi}function _(b){s.generateMipmap(b)}function U(b,T,q,de,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=T;if(T===s.RED&&(q===s.FLOAT&&(fe=s.R32F),q===s.HALF_FLOAT&&(fe=s.R16F),q===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.R8UI),q===s.UNSIGNED_SHORT&&(fe=s.R16UI),q===s.UNSIGNED_INT&&(fe=s.R32UI),q===s.BYTE&&(fe=s.R8I),q===s.SHORT&&(fe=s.R16I),q===s.INT&&(fe=s.R32I)),T===s.RG&&(q===s.FLOAT&&(fe=s.RG32F),q===s.HALF_FLOAT&&(fe=s.RG16F),q===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),q===s.UNSIGNED_INT&&(fe=s.RG32UI),q===s.BYTE&&(fe=s.RG8I),q===s.SHORT&&(fe=s.RG16I),q===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),q===s.UNSIGNED_INT&&(fe=s.RGB32UI),q===s.BYTE&&(fe=s.RGB8I),q===s.SHORT&&(fe=s.RGB16I),q===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),q===s.BYTE&&(fe=s.RGBA8I),q===s.SHORT&&(fe=s.RGBA16I),q===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const je=_e?Cl:Et.getTransfer(de);q===s.FLOAT&&(fe=s.RGBA32F),q===s.HALF_FLOAT&&(fe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(fe=je===Ut?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(b,T){let q;return b?T===null||T===jr||T===Xs?q=s.DEPTH24_STENCIL8:T===Ii?q=s.DEPTH32F_STENCIL8:T===ko&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Xs?q=s.DEPTH_COMPONENT24:T===Ii?q=s.DEPTH_COMPONENT32F:T===ko&&(q=s.DEPTH_COMPONENT16),q}function D(b,T){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Kn&&b.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function ee(b){const T=b.target;T.removeEventListener("dispose",ee),N(T),T.isVideoTexture&&v.delete(T)}function B(b){const T=b.target;T.removeEventListener("dispose",B),ye(T)}function N(b){const T=r.get(b);if(T.__webglInit===void 0)return;const q=b.source,de=x.get(q);if(de){const _e=de[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&$(b),Object.keys(de).length===0&&x.delete(q)}r.remove(b)}function $(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const q=b.source,de=x.get(q);delete de[T.__cacheKey],f.memory.textures--}function ye(b){const T=r.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let _e=0;_e<T.__webglFramebuffer[de].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[de][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=b.textures;for(let de=0,_e=q.length;de<_e;de++){const fe=r.get(q[de]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(q[de])}r.remove(b)}let E=0;function R(){E=0}function V(){const b=E;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),E+=1,b}function G(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function se(b,T){const q=r.get(b);if(b.isVideoTexture&&He(b),b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){const de=b.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,b,T);return}}n.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+T)}function le(b,T){const q=r.get(b);if(b.version>0&&q.__version!==b.version){be(q,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+T)}function J(b,T){const q=r.get(b);if(b.version>0&&q.__version!==b.version){be(q,b,T);return}n.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+T)}function ae(b,T){const q=r.get(b);if(b.version>0&&q.__version!==b.version){Y(q,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+T)}const k={[cf]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[ff]:s.MIRRORED_REPEAT},ce={[Kn]:s.NEAREST,[wv]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[oi]:s.LINEAR,[yc]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},re={[bv]:s.NEVER,[Fv]:s.ALWAYS,[Lv]:s.LESS,[Hm]:s.LEQUAL,[Dv]:s.EQUAL,[Nv]:s.GEQUAL,[Uv]:s.GREATER,[Iv]:s.NOTEQUAL};function I(b,T){if(T.type===Ii&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===yc||T.magFilter===Ka||T.magFilter===Wr||T.minFilter===oi||T.minFilter===yc||T.minFilter===Ka||T.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,k[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,k[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,k[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ce[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Kn||T.minFilter!==Ka&&T.minFilter!==Wr||T.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ie(b,T){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",ee));const de=T.source;let _e=x.get(de);_e===void 0&&(_e={},x.set(de,_e));const fe=G(T);if(fe!==b.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),_e[fe].usedTimes++;const je=_e[b.__cacheKey];je!==void 0&&(_e[b.__cacheKey].usedTimes--,je.usedTimes===0&&$(T)),b.__cacheKey=fe,b.__webglTexture=_e[fe].texture}return q}function be(b,T,q){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const _e=ie(b,T),fe=T.source;n.bindTexture(de,b.__webglTexture,s.TEXTURE0+q);const je=r.get(fe);if(fe.version!==je.__version||_e===!0){n.activeTexture(s.TEXTURE0+q);const we=Et.getPrimaries(Et.workingColorSpace),Ne=T.colorSpace===gr?null:Et.getPrimaries(T.colorSpace),pt=T.colorSpace===gr||we===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Se=C(T.image,!1,a.maxTextureSize);Se=yt(T,Se);const Fe=u.convert(T.format,T.colorSpace),et=u.convert(T.type);let Je=U(T.internalFormat,Fe,et,T.colorSpace,T.isVideoTexture);I(de,T);let ke;const ft=T.mipmaps,nt=T.isVideoTexture!==!0,Mt=je.__version===void 0||_e===!0,H=fe.dataReady,Le=D(T,Se);if(T.isDepthTexture)Je=P(T.format===js,T.type),Mt&&(nt?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Fe,et,null));else if(T.isDataTexture)if(ft.length>0){nt&&Mt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ft[0].width,ft[0].height);for(let oe=0,he=ft.length;oe<he;oe++)ke=ft[oe],nt?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Fe,et,ke.data):n.texImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,Fe,et,ke.data);T.generateMipmaps=!1}else nt?(Mt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,Se.width,Se.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,et,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Fe,et,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,ft[0].width,ft[0].height,Se.depth);for(let oe=0,he=ft.length;oe<he;oe++)if(ke=ft[oe],T.format!==li)if(Fe!==null)if(nt){if(H)if(T.layerUpdates.size>0){const Ae=Mm(ke.width,ke.height,T.format,T.type);for(const Ue of T.layerUpdates){const dt=ke.data.subarray(Ue*Ae/ke.data.BYTES_PER_ELEMENT,(Ue+1)*Ae/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Ue,ke.width,ke.height,1,Fe,dt,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Se.depth,Fe,ke.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Je,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Se.depth,Fe,et,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,Je,ke.width,ke.height,Se.depth,0,Fe,et,ke.data)}else{nt&&Mt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ft[0].width,ft[0].height);for(let oe=0,he=ft.length;oe<he;oe++)ke=ft[oe],T.format!==li?Fe!==null?nt?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Fe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Fe,et,ke.data):n.texImage2D(s.TEXTURE_2D,oe,Je,ke.width,ke.height,0,Fe,et,ke.data)}else if(T.isDataArrayTexture)if(nt){if(Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){const oe=Mm(Se.width,Se.height,T.format,T.type);for(const he of T.layerUpdates){const Ae=Se.data.subarray(he*oe/Se.data.BYTES_PER_ELEMENT,(he+1)*oe/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Fe,et,Ae)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(T.isData3DTexture)nt?(Mt&&n.texStorage3D(s.TEXTURE_3D,Le,Je,Se.width,Se.height,Se.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(T.isFramebufferTexture){if(Mt)if(nt)n.texStorage2D(s.TEXTURE_2D,Le,Je,Se.width,Se.height);else{let oe=Se.width,he=Se.height;for(let Ae=0;Ae<Le;Ae++)n.texImage2D(s.TEXTURE_2D,Ae,Je,oe,he,0,Fe,et,null),oe>>=1,he>>=1}}else if(ft.length>0){if(nt&&Mt){const oe=Ze(ft[0]);n.texStorage2D(s.TEXTURE_2D,Le,Je,oe.width,oe.height)}for(let oe=0,he=ft.length;oe<he;oe++)ke=ft[oe],nt?H&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Fe,et,ke):n.texImage2D(s.TEXTURE_2D,oe,Je,Fe,et,ke);T.generateMipmaps=!1}else if(nt){if(Mt){const oe=Ze(Se);n.texStorage2D(s.TEXTURE_2D,Le,Je,oe.width,oe.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,et,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Fe,et,Se);g(T)&&_(de),je.__version=fe.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Y(b,T,q){if(T.image.length!==6)return;const de=ie(b,T),_e=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+q);const fe=r.get(_e);if(_e.version!==fe.__version||de===!0){n.activeTexture(s.TEXTURE0+q);const je=Et.getPrimaries(Et.workingColorSpace),we=T.colorSpace===gr?null:Et.getPrimaries(T.colorSpace),Ne=T.colorSpace===gr||je===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!pt&&!Se?Fe[he]=C(T.image[he],!0,a.maxCubemapSize):Fe[he]=Se?T.image[he].image:T.image[he],Fe[he]=yt(T,Fe[he]);const et=Fe[0],Je=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),ft=U(T.internalFormat,Je,ke,T.colorSpace),nt=T.isVideoTexture!==!0,Mt=fe.__version===void 0||de===!0,H=_e.dataReady;let Le=D(T,et);I(s.TEXTURE_CUBE_MAP,T);let oe;if(pt){nt&&Mt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,et.width,et.height);for(let he=0;he<6;he++){oe=Fe[he].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const Ue=oe[Ae];T.format!==li?Je!==null?nt?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Ue.width,Ue.height,Je,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,ft,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Ue.width,Ue.height,Je,ke,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,ft,Ue.width,Ue.height,0,Je,ke,Ue.data)}}}else{if(oe=T.mipmaps,nt&&Mt){oe.length>0&&Le++;const he=Ze(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Se){nt?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Je,ke,Fe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Fe[he].width,Fe[he].height,0,Je,ke,Fe[he].data);for(let Ae=0;Ae<oe.length;Ae++){const dt=oe[Ae].image[he].image;nt?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,dt.width,dt.height,Je,ke,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,ft,dt.width,dt.height,0,Je,ke,dt.data)}}else{nt?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,ke,Fe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Je,ke,Fe[he]);for(let Ae=0;Ae<oe.length;Ae++){const Ue=oe[Ae];nt?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Je,ke,Ue.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,ft,Je,ke,Ue.image[he])}}}g(T)&&_(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ue(b,T,q,de,_e,fe){const je=u.convert(q.format,q.colorSpace),we=u.convert(q.type),Ne=U(q.internalFormat,je,we,q.colorSpace);if(!r.get(T).__hasExternalTextures){const Se=Math.max(1,T.width>>fe),Fe=Math.max(1,T.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Ne,Se,Fe,T.depth,0,je,we,null):n.texImage2D(_e,fe,Ne,Se,Fe,0,je,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),at(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,_e,r.get(q).__webglTexture,0,it(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,_e,r.get(q).__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(b,T,q){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const de=T.depthTexture,_e=de&&de.isDepthTexture?de.type:null,fe=P(T.stencilBuffer,_e),je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=it(T);at(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,fe,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,b)}else{const de=T.textures;for(let _e=0;_e<de.length;_e++){const fe=de[_e],je=u.convert(fe.format,fe.colorSpace),we=u.convert(fe.type),Ne=U(fe.internalFormat,je,we,fe.colorSpace),pt=it(T);q&&at(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Ne,T.width,T.height):at(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),se(T.depthTexture,0);const de=r.get(T.depthTexture).__webglTexture,_e=it(T);if(T.depthTexture.format===Bs)at(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(T.depthTexture.format===js)at(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ce(b){const T=r.get(b),q=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const de=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=de}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");xe(T.__webglFramebuffer,b)}else if(q){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),ge(T.__webglDepthbuffer[de],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ge(T.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(b,T,q){const de=r.get(b);T!==void 0&&ue(de.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ce(b)}function $e(b){const T=b.texture,q=r.get(b),de=r.get(T);b.addEventListener("dispose",B);const _e=b.textures,fe=b.isWebGLCubeRenderTarget===!0,je=_e.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,f.memory.textures++),fe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)q.__webglFramebuffer[we][Ne]=s.createFramebuffer()}else q.__webglFramebuffer[we]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)q.__webglFramebuffer[we]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(je)for(let we=0,Ne=_e.length;we<Ne;we++){const pt=r.get(_e[we]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&at(b)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const Ne=_e[we];q.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const pt=u.convert(Ne.format,Ne.colorSpace),Se=u.convert(Ne.type),Fe=U(Ne.internalFormat,pt,Se,Ne.colorSpace,b.isXRRenderTarget===!0),et=it(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,q.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(q.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),I(s.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ue(q.__webglFramebuffer[we][Ne],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ue(q.__webglFramebuffer[we],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(T)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let we=0,Ne=_e.length;we<Ne;we++){const pt=_e[we],Se=r.get(pt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),I(s.TEXTURE_2D,pt),ue(q.__webglFramebuffer,b,pt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),g(pt)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,de.__webglTexture),I(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ue(q.__webglFramebuffer[Ne],b,T,s.COLOR_ATTACHMENT0,we,Ne);else ue(q.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,we,0);g(T)&&_(we),n.unbindTexture()}b.depthBuffer&&Ce(b)}function ht(b){const T=b.textures;for(let q=0,de=T.length;q<de;q++){const _e=T[q];if(g(_e)){const fe=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,je=r.get(_e).__webglTexture;n.bindTexture(fe,je),_(fe),n.unbindTexture()}}}const ot=[],O=[];function Xt(b){if(b.samples>0){if(at(b)===!1){const T=b.textures,q=b.width,de=b.height;let _e=s.COLOR_BUFFER_BIT;const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(b),we=T.length>1;if(we)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Ne]);const pt=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,q,de,0,0,q,de,_e,s.NEAREST),p===!0&&(ot.length=0,O.length=0,ot.push(s.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ot.push(fe),O.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,je.__webglColorRenderbuffer[Ne]);const pt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function it(b){return Math.min(a.maxSamples,b.samples)}function at(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function He(b){const T=f.render.frame;v.get(b)!==T&&(v.set(b,T),b.update())}function yt(b,T){const q=b.colorSpace,de=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||q!==yr&&q!==gr&&(Et.getTransfer(q)===Ut?(de!==li||_e!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Ze(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=V,this.resetTextureUnits=R,this.setTexture2D=se,this.setTexture2DArray=le,this.setTexture3D=J,this.setTextureCube=ae,this.rebindTextures=Pe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=at}function GM(s,e){function n(r,a=gr){let u;const f=Et.getTransfer(a);if(r===Oi)return s.UNSIGNED_BYTE;if(r===Wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Lm)return s.BYTE;if(r===Dm)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===Gf)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===Im)return s.ALPHA;if(r===Nm)return s.RGB;if(r===li)return s.RGBA;if(r===Fm)return s.LUMINANCE;if(r===Om)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===km)return s.RED;if(r===jf)return s.RED_INTEGER;if(r===zm)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===yl||r===Sl||r===Ml||r===El)if(f===Ut)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===df)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===_f||r===vf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===gf||r===_f)return f===Ut?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===vf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===xf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ef)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Af)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lf)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Df)return f===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Uf||r===If)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tl)return f===Ut?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===If)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bm||r===Nf||r===Ff||r===Of)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Nf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ff)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class WM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const g=n.getJointPose(C,r),_=this._getHandJoint(m,C);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new gl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new bn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new zi({vertexShader:jM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fi(new Fl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KM extends Kr{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,y=null,x=null,S=null,w=null;const C=new qM,g=n.getContextAttributes();let _=null,U=null;const P=[],D=[],ee=new ut;let B=null;const N=new qn;N.layers.enable(1),N.viewport=new Ht;const $=new qn;$.layers.enable(2),$.viewport=new Ht;const ye=[N,$],E=new WM;E.layers.enable(1),E.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=P[Y];return ue===void 0&&(ue=new Kc,P[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=P[Y];return ue===void 0&&(ue=new Kc,P[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=P[Y];return ue===void 0&&(ue=new Kc,P[Y]=ue),ue.getHandSpace()};function G(Y){const ue=D.indexOf(Y.inputSource);if(ue===-1)return;const ge=P[ue];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,m||f),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function se(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",le);for(let Y=0;Y<P.length;Y++){const ue=D[Y];ue!==null&&(D[Y]=null,P[Y].disconnect(ue))}R=null,V=null,C.reset(),e.setRenderTarget(_),S=null,x=null,y=null,a=null,U=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(ee.width,ee.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",se),a.addEventListener("inputsourceschange",le),g.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(ee),a.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Yr(S.framebufferWidth,S.framebufferHeight,{format:li,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,ge=null,xe=null;g.depth&&(xe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?js:Bs,ge=g.stencil?Xs:jr);const Ce={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Ce),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Yr(x.textureWidth,x.textureHeight,{format:li,type:Oi,depthTexture:new tg(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),be.setContext(a),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function le(Y){for(let ue=0;ue<Y.removed.length;ue++){const ge=Y.removed[ue],xe=D.indexOf(ge);xe>=0&&(D[xe]=null,P[xe].disconnect(ge))}for(let ue=0;ue<Y.added.length;ue++){const ge=Y.added[ue];let xe=D.indexOf(ge);if(xe===-1){for(let Pe=0;Pe<P.length;Pe++)if(Pe>=D.length){D.push(ge),xe=Pe;break}else if(D[Pe]===null){D[Pe]=ge,xe=Pe;break}if(xe===-1)break}const Ce=P[xe];Ce&&Ce.connect(ge)}}const J=new Z,ae=new Z;function k(Y,ue,ge){J.setFromMatrixPosition(ue.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);const xe=J.distanceTo(ae),Ce=ue.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,$e=Ce[14]/(Ce[10]-1),ht=Ce[14]/(Ce[10]+1),ot=(Ce[9]+1)/Ce[5],O=(Ce[9]-1)/Ce[5],Xt=(Ce[8]-1)/Ce[0],it=(Pe[8]+1)/Pe[0],at=$e*Xt,He=$e*it,yt=xe/(-Xt+it),Ze=yt*-Xt;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ze),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const b=$e+yt,T=ht+yt,q=at-Ze,de=He+(xe-Ze),_e=ot*ht/T*b,fe=O*ht/T*b;Y.projectionMatrix.makePerspective(q,de,_e,fe,b,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ue=Y.near,ge=Y.far;C.texture!==null&&(C.depthNear>0&&(ue=C.depthNear),C.depthFar>0&&(ge=C.depthFar)),E.near=$.near=N.near=ue,E.far=$.far=N.far=ge,(R!==E.near||V!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,V=E.far);const xe=Y.parent,Ce=E.cameras;ce(E,xe);for(let Pe=0;Pe<Ce.length;Pe++)ce(Ce[Pe],xe);Ce.length===2?k(E,N,$):E.projectionMatrix.copy(N.projectionMatrix),re(Y,E,xe)};function re(Y,ue,ge){ge===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=kf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(E)};let I=null;function ie(Y,ue){if(v=ue.getViewerPose(m||f),w=ue,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let xe=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,xe=!0);for(let Pe=0;Pe<ge.length;Pe++){const $e=ge[Pe];let ht=null;if(S!==null)ht=S.getViewport($e);else{const O=y.getViewSubImage(x,$e);ht=O.viewport,Pe===0&&(e.setRenderTargetTextures(U,O.colorTexture,x.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(U))}let ot=ye[Pe];ot===void 0&&(ot=new qn,ot.layers.enable(Pe),ot.viewport=new Ht,ye[Pe]=ot),ot.matrix.fromArray($e.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray($e.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ht.x,ht.y,ht.width,ht.height),Pe===0&&(E.matrix.copy(ot.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xe===!0&&E.cameras.push(ot)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Pe=y.getDepthInformation(ge[0]);Pe&&Pe.isValid&&Pe.texture&&C.init(e,Pe,a.renderState)}}for(let ge=0;ge<P.length;ge++){const xe=D[ge],Ce=P[ge];xe!==null&&Ce!==void 0&&Ce.update(xe,ue,m||f)}I&&I(Y,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const be=new eg;be.setAnimationLoop(ie),this.setAnimationLoop=function(Y){I=Y},this.dispose=function(){}}}const zr=new ki,$M=new Vt;function ZM(s,e){function n(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function r(g,_){_.color.getRGB(g.fogColor.value,$m(s)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function a(g,_,U,P,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(g,_):_.isMeshToonMaterial?(u(g,_),y(g,_)):_.isMeshPhongMaterial?(u(g,_),v(g,_)):_.isMeshStandardMaterial?(u(g,_),x(g,_),_.isMeshPhysicalMaterial&&S(g,_,D)):_.isMeshMatcapMaterial?(u(g,_),w(g,_)):_.isMeshDepthMaterial?u(g,_):_.isMeshDistanceMaterial?(u(g,_),C(g,_)):_.isMeshNormalMaterial?u(g,_):_.isLineBasicMaterial?(f(g,_),_.isLineDashedMaterial&&d(g,_)):_.isPointsMaterial?p(g,_,U,P):_.isSpriteMaterial?m(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,n(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Pn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,n(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Pn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,n(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,n(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const U=e.get(_),P=U.envMap,D=U.envMapRotation;P&&(g.envMap.value=P,zr.copy(D),zr.x*=-1,zr.y*=-1,zr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),g.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(zr)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,g.aoMapTransform))}function f(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform))}function d(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function p(g,_,U,P){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*U,g.scale.value=P*.5,_.map&&(g.map.value=_.map,n(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function v(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function y(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function x(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function S(g,_,U){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=U.texture,g.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function C(g,_){const U=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(U.matrixWorld),g.nearDistance.value=U.shadow.camera.near,g.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function QM(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,P){const D=P.program;r.uniformBlockBinding(U,D)}function m(U,P){let D=a[U.id];D===void 0&&(w(U),D=v(U),a[U.id]=D,U.addEventListener("dispose",g));const ee=P.program;r.updateUBOMapping(U,ee);const B=e.render.frame;u[U.id]!==B&&(x(U),u[U.id]=B)}function v(U){const P=y();U.__bindingPointIndex=P;const D=s.createBuffer(),ee=U.__size,B=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,ee,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function y(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const P=a[U.id],D=U.uniforms,ee=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let B=0,N=D.length;B<N;B++){const $=Array.isArray(D[B])?D[B]:[D[B]];for(let ye=0,E=$.length;ye<E;ye++){const R=$[ye];if(S(R,B,ye,ee)===!0){const V=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let se=0;for(let le=0;le<G.length;le++){const J=G[le],ae=C(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,V+se,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,se),se+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,P,D,ee){const B=U.value,N=P+"_"+D;if(ee[N]===void 0)return typeof B=="number"||typeof B=="boolean"?ee[N]=B:ee[N]=B.clone(),!0;{const $=ee[N];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return ee[N]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function w(U){const P=U.uniforms;let D=0;const ee=16;for(let N=0,$=P.length;N<$;N++){const ye=Array.isArray(P[N])?P[N]:[P[N]];for(let E=0,R=ye.length;E<R;E++){const V=ye[E],G=Array.isArray(V.value)?V.value:[V.value];for(let se=0,le=G.length;se<le;se++){const J=G[se],ae=C(J),k=D%ee,ce=k%ae.boundary,re=k+ce;D+=ce,re!==0&&ee-re<ae.storage&&(D+=ee-re),V.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=ae.storage}}}const B=D%ee;return B>0&&(D+=ee-B),U.__size=D,U.__cache={},this}function C(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function g(U){const P=U.target;P.removeEventListener("dispose",g);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function _(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class JM{constructor(e={}){const{canvas:n=zv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),w=new Int32Array(4);let C=null,g=null;const _=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=vr,this.toneMappingExposure=1;const P=this;let D=!1,ee=0,B=0,N=null,$=-1,ye=null;const E=new Ht,R=new Ht;let V=null;const G=new wt(0);let se=0,le=n.width,J=n.height,ae=1,k=null,ce=null;const re=new Ht(0,0,le,J),I=new Ht(0,0,le,J);let ie=!1;const be=new Jm;let Y=!1,ue=!1;const ge=new Vt,xe=new Vt,Ce=new Z,Pe=new Ht,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function ot(){return N===null?ae:1}let O=r;function Xt(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),O===null){const W="webgl2";if(O=Xt(W,A),O===null)throw Xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,at,He,yt,Ze,b,T,q,de,_e,fe,je,we,Ne,pt,Se,Fe,et,Je,ke,ft,nt,Mt,H;function Le(){it=new rS(O),it.init(),nt=new GM(O,it),at=new Zy(O,it,e,nt),He=new BM(O),at.reverseDepthBuffer&&He.buffers.depth.setReversed(!0),yt=new aS(O),Ze=new wM,b=new VM(O,it,He,Ze,at,nt,yt),T=new Jy(P),q=new iS(P),de=new h0(O),Mt=new Ky(O,de),_e=new sS(O,de,yt,Mt),fe=new uS(O,_e,de,yt),Je=new lS(O,at,b),Se=new Qy(Ze),je=new TM(P,T,q,it,at,Mt,Se),we=new ZM(P,Ze),Ne=new RM,pt=new UM(it),et=new qy(P,T,q,He,fe,x,p),Fe=new kM(P,fe,at),H=new QM(O,yt,at,He),ke=new $y(O,it,yt),ft=new oS(O,it,yt),yt.programs=je.programs,P.capabilities=at,P.extensions=it,P.properties=Ze,P.renderLists=Ne,P.shadowMap=Fe,P.state=He,P.info=yt}Le();const oe=new KM(P,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(le,J,!1))},this.getSize=function(A){return A.set(le,J)},this.setSize=function(A,W,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,J=W,n.width=Math.floor(A*ae),n.height=Math.floor(W*ae),Q===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(le*ae,J*ae).floor()},this.setDrawingBufferSize=function(A,W,Q){le=A,J=W,ae=Q,n.width=Math.floor(A*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,W,Q,te){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,W,Q,te),He.viewport(E.copy(re).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(I)},this.setScissor=function(A,W,Q,te){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,W,Q,te),He.scissor(R.copy(I).multiplyScalar(ae).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){He.setScissorTest(ie=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,W=!0,Q=!0){let te=0;if(A){let X=!1;if(N!==null){const Ee=N.texture.format;X=Ee===qf||Ee===Yf||Ee===jf}if(X){const Ee=N.texture.type,De=Ee===Oi||Ee===jr||Ee===ko||Ee===Xs||Ee===Wf||Ee===Xf,Te=et.getClearColor(),Ge=et.getClearAlpha(),Ke=Te.r,Qe=Te.g,We=Te.b;De?(S[0]=Ke,S[1]=Qe,S[2]=We,S[3]=Ge,O.clearBufferuiv(O.COLOR,0,S)):(w[0]=Ke,w[1]=Qe,w[2]=We,w[3]=Ge,O.clearBufferiv(O.COLOR,0,w))}else te|=O.COLOR_BUFFER_BIT}W&&(te|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),Ne.dispose(),pt.dispose(),Ze.dispose(),T.dispose(),q.dispose(),fe.dispose(),Mt.dispose(),H.dispose(),je.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Hi),oe.removeEventListener("sessionend",$r),Dn.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=yt.autoReset,W=Fe.enabled,Q=Fe.autoUpdate,te=Fe.needsUpdate,X=Fe.type;Le(),yt.autoReset=A,Fe.enabled=W,Fe.autoUpdate=Q,Fe.needsUpdate=te,Fe.type=X}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function dt(A){const W=A.target;W.removeEventListener("dispose",dt),Ft(W)}function Ft(A){sn(A),Ze.remove(A)}function sn(A){const W=Ze.get(A).programs;W!==void 0&&(W.forEach(function(Q){je.releaseProgram(Q)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,te,X,Ee){W===null&&(W=$e);const De=X.isMesh&&X.matrixWorld.determinant()<0,Te=_i(A,W,Q,te,X);He.setMaterial(te,De);let Ge=Q.index,Ke=1;if(te.wireframe===!0){if(Ge=_e.getWireframeAttribute(Q),Ge===void 0)return;Ke=2}const Qe=Q.drawRange,We=Q.attributes.position;let St=Qe.start*Ke,At=(Qe.start+Qe.count)*Ke;Ee!==null&&(St=Math.max(St,Ee.start*Ke),At=Math.min(At,(Ee.start+Ee.count)*Ke)),Ge!==null?(St=Math.max(St,0),At=Math.min(At,Ge.count)):We!=null&&(St=Math.max(St,0),At=Math.min(At,We.count));const Ct=At-St;if(Ct<0||Ct===1/0)return;Mt.setup(X,te,Te,Q,Ge);let It,_t=ke;if(Ge!==null&&(It=de.get(Ge),_t=ft,_t.setIndex(It)),X.isMesh)te.wireframe===!0?(He.setLineWidth(te.wireframeLinewidth*ot()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(X.isLine){let Oe=te.linewidth;Oe===void 0&&(Oe=1),He.setLineWidth(Oe*ot()),X.isLineSegments?_t.setMode(O.LINES):X.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else X.isPoints?_t.setMode(O.POINTS):X.isSprite&&_t.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Oe=X._multiDrawStarts,jt=X._multiDrawCounts,vt=X._multiDrawCount,Un=Ge?de.get(Ge).bytesPerElement:1,$n=Ze.get(te).currentProgram.getUniforms();for(let Jt=0;Jt<vt;Jt++)$n.setValue(O,"_gl_DrawID",Jt),_t.render(Oe[Jt]/Un,jt[Jt])}else if(X.isInstancedMesh)_t.renderInstances(St,Ct,X.count);else if(Q.isInstancedBufferGeometry){const Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,jt=Math.min(Q.instanceCount,Oe);_t.renderInstances(St,Ct,jt)}else _t.render(St,Ct)};function mt(A,W,Q){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Qr(A,W,Q),A.side=xr,A.needsUpdate=!0,Qr(A,W,Q),A.side=Ui):Qr(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),g=pt.get(Q),g.init(W),U.push(g),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const te=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Te=Ee[De];mt(Te,Q,X),te.add(Te)}else mt(Ee,Q,X),te.add(Ee)}),U.pop(),g=null,te},this.compileAsync=function(A,W,Q=null){const te=this.compile(A,W,Q);return new Promise(X=>{function Ee(){if(te.forEach(function(De){Ze.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){X(A);return}setTimeout(Ee,10)}it.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Qt=null;function Bn(A){Qt&&Qt(A)}function Hi(){Dn.stop()}function $r(){Dn.start()}const Dn=new eg;Dn.setAnimationLoop(Bn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){Qt=A,oe.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},oe.addEventListener("sessionstart",Hi),oe.addEventListener("sessionend",$r),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,W,N),g=pt.get(A,U.length),g.init(W),U.push(g),xe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),be.setFromProjectionMatrix(xe),ue=this.localClippingEnabled,Y=Se.init(this.clippingPlanes,ue),C=Ne.get(A,_.length),C.init(),_.push(C),oe.enabled===!0&&oe.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Ks(Ee,W,-1/0,P.sortObjects)}Ks(A,W,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(k,ce),ht=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ht&&et.addToRenderList(C,A),this.info.render.frame++,Y===!0&&Se.beginShadows();const Q=g.state.shadowsArray;Fe.render(Q,A,W),Y===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=C.opaque,X=C.transmissive;if(g.setupLights(),W.isArrayCamera){const Ee=W.cameras;if(X.length>0)for(let De=0,Te=Ee.length;De<Te;De++){const Ge=Ee[De];Sr(te,X,A,Ge)}ht&&et.render(A);for(let De=0,Te=Ee.length;De<Te;De++){const Ge=Ee[De];Vi(C,A,Ge,Ge.viewport)}}else X.length>0&&Sr(te,X,A,W),ht&&et.render(A),Vi(C,A,W);N!==null&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(P,A,W),Mt.resetDefaultState(),$=-1,ye=null,U.pop(),U.length>0?(g=U[U.length-1],Y===!0&&Se.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?C=_[_.length-1]:C=null};function Ks(A,W,Q,te){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||be.intersectsSprite(A)){te&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const De=fe.update(A),Te=A.material;Te.visible&&C.push(A,De,Te,Q,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||be.intersectsObject(A))){const De=fe.update(A),Te=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Pe.copy(De.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ge=De.groups;for(let Ke=0,Qe=Ge.length;Ke<Qe;Ke++){const We=Ge[Ke],St=Te[We.materialIndex];St&&St.visible&&C.push(A,De,St,Q,Pe.z,We)}}else Te.visible&&C.push(A,De,Te,Q,Pe.z,null)}}const Ee=A.children;for(let De=0,Te=Ee.length;De<Te;De++)Ks(Ee[De],W,Q,te)}function Vi(A,W,Q,te){const X=A.opaque,Ee=A.transmissive,De=A.transparent;g.setupLightsView(Q),Y===!0&&Se.setGlobalState(P.clippingPlanes,Q),te&&He.viewport(E.copy(te)),X.length>0&&gi(X,W,Q),Ee.length>0&&gi(Ee,W,Q),De.length>0&&gi(De,W,Q),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Sr(A,W,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Yr(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?zo:Oi,minFilter:Wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[te.id],De=te.viewport||E;Ee.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(G),se=P.getClearAlpha(),se<1&&P.setClearColor(16777215,.5),P.clear(),ht&&et.render(Q);const Ge=P.toneMapping;P.toneMapping=vr;const Ke=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),Y===!0&&Se.setGlobalState(P.clippingPlanes,te),gi(A,Q,te),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee),it.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let We=0,St=W.length;We<St;We++){const At=W[We],Ct=At.object,It=At.geometry,_t=At.material,Oe=At.group;if(_t.side===Ui&&Ct.layers.test(te.layers)){const jt=_t.side;_t.side=Pn,_t.needsUpdate=!0,Zr(Ct,Q,te,It,_t,Oe),_t.side=jt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Te),P.setClearColor(G,se),Ke!==void 0&&(te.viewport=Ke),P.toneMapping=Ge}function gi(A,W,Q){const te=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ee=A.length;X<Ee;X++){const De=A[X],Te=De.object,Ge=De.geometry,Ke=te===null?De.material:te,Qe=De.group;Te.layers.test(Q.layers)&&Zr(Te,W,Q,Ge,Ke,Qe)}}function Zr(A,W,Q,te,X,Ee){A.onBeforeRender(P,W,Q,te,X,Ee),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(P,W,Q,te,A,Ee),X.transparent===!0&&X.side===Ui&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,P.renderBufferDirect(Q,W,te,X,A,Ee),X.side=xr,X.needsUpdate=!0,P.renderBufferDirect(Q,W,te,X,A,Ee),X.side=Ui):P.renderBufferDirect(Q,W,te,X,A,Ee),A.onAfterRender(P,W,Q,te,X,Ee)}function Qr(A,W,Q){W.isScene!==!0&&(W=$e);const te=Ze.get(A),X=g.state.lights,Ee=g.state.shadowsArray,De=X.state.version,Te=je.getParameters(A,X.state,Ee,W,Q),Ge=je.getProgramCacheKey(Te);let Ke=te.programs;te.environment=A.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(A.isMeshStandardMaterial?q:T).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",dt),Ke=new Map,te.programs=Ke);let Qe=Ke.get(Ge);if(Qe!==void 0){if(te.currentProgram===Qe&&te.lightsStateVersion===De)return Xo(A,Te),Qe}else Te.uniforms=je.getUniforms(A),A.onBeforeCompile(Te,P),Qe=je.acquireProgram(Te,Ge),Ke.set(Ge,Qe),te.uniforms=Te.uniforms;const We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Se.uniform),Xo(A,Te),te.needsLights=Yo(A),te.lightsStateVersion=De,te.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=Qe,te.uniformsList=null,Qe}function Wo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Xo(A,W){const Q=Ze.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function _i(A,W,Q,te,X){W.isScene!==!0&&(W=$e),b.resetTextureUnits();const Ee=W.fog,De=te.isMeshStandardMaterial?W.environment:null,Te=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:yr,Ge=(te.isMeshStandardMaterial?q:T).get(te.envMap||De),Ke=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let Ct=vr;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ct=P.toneMapping);const It=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=It!==void 0?It.length:0,Oe=Ze.get(te),jt=g.state.lights;if(Y===!0&&(ue===!0||A!==ye)){const un=A===ye&&te.id===$;Se.setState(te,A,un)}let vt=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==jt.state.version||Oe.outputColorSpace!==Te||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Ge||te.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Se.numPlanes||Oe.numIntersection!==Se.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==Qe||Oe.morphTargets!==We||Oe.morphNormals!==St||Oe.morphColors!==At||Oe.toneMapping!==Ct||Oe.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Oe.__version=te.version);let Un=Oe.currentProgram;vt===!0&&(Un=Qr(te,W,X));let $n=!1,Jt=!1,vi=!1;const Pt=Un.getUniforms(),ui=Oe.uniforms;if(He.useProgram(Un.program)&&($n=!0,Jt=!0,vi=!0),te.id!==$&&($=te.id,Jt=!0),$n||ye!==A){at.reverseDepthBuffer?(ge.copy(A.projectionMatrix),Hv(ge),Vv(ge),Pt.setValue(O,"projectionMatrix",ge)):Pt.setValue(O,"projectionMatrix",A.projectionMatrix),Pt.setValue(O,"viewMatrix",A.matrixWorldInverse);const un=Pt.map.cameraPosition;un!==void 0&&un.setValue(O,Ce.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),ye!==A&&(ye=A,Jt=!0,vi=!0)}if(X.isSkinnedMesh){Pt.setOptional(O,X,"bindMatrix"),Pt.setOptional(O,X,"bindMatrixInverse");const un=X.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Pt.setValue(O,"boneTexture",un.boneTexture,b))}X.isBatchedMesh&&(Pt.setOptional(O,X,"batchingTexture"),Pt.setValue(O,"batchingTexture",X._matricesTexture,b),Pt.setOptional(O,X,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",X._indirectTexture,b),Pt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",X._colorsTexture,b));const $s=Q.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Je.update(X,Q,Un),(Jt||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Pt.setValue(O,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ui.envMap.value=Ge,ui.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(ui.envMapIntensity.value=W.environmentIntensity),Jt&&(Pt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&jo(ui,vi),Ee&&te.fog===!0&&we.refreshFogUniforms(ui,Ee),we.refreshMaterialUniforms(ui,te,ae,J,g.state.transmissionRenderTarget[A.id]),Rl.upload(O,Wo(Oe),ui,b)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Rl.upload(O,Wo(Oe),ui,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(O,"center",X.center),Pt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Pt.setValue(O,"normalMatrix",X.normalMatrix),Pt.setValue(O,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const un=te.uniformsGroups;for(let Jr=0,Zs=un.length;Jr<Zs;Jr++){const Gi=un[Jr];H.update(Gi,Un),H.bind(Gi,Un)}}return Un}function jo(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Yo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,W,Q){Ze.get(A.texture).__webglTexture=W,Ze.get(A.depthTexture).__webglTexture=Q;const te=Ze.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Q=Ze.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,Q=0){N=A,ee=W,B=Q;let te=!0,X=null,Ee=!1,De=!1;if(A){const Ge=Ze.get(A);if(Ge.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(Ge.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ge.__hasExternalTextures)b.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Ze.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Qe=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?X=Qe[W][Q]:X=Qe[W],Ee=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?X=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[Q]:X=Qe,E.copy(A.viewport),R.copy(A.scissor),V=A.scissorTest}else E.copy(re).multiplyScalar(ae).floor(),R.copy(I).multiplyScalar(ae).floor(),V=ie;if(He.bindFramebuffer(O.FRAMEBUFFER,X)&&te&&He.drawBuffers(A,X),He.viewport(E),He.scissor(R),He.setScissorTest(V),Ee){const Ge=Ze.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,Q)}else if(De){const Ge=Ze.get(A.texture),Ke=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,Q||0,Ke)}$=-1},this.readRenderTargetPixels=function(A,W,Q,te,X,Ee,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){He.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ge=A.texture,Ke=Ge.format,Qe=Ge.type;if(!at.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-te&&Q>=0&&Q<=A.height-X&&O.readPixels(W,Q,te,X,nt.convert(Ke),nt.convert(Qe),Ee)}finally{const Ge=N!==null?Ze.get(N).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,te,X,Ee,De){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ge=A.texture,Ke=Ge.format,Qe=Ge.type;if(!at.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-te&&Q>=0&&Q<=A.height-X){He.bindFramebuffer(O.FRAMEBUFFER,Te);const We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(W,Q,te,X,nt.convert(Ke),nt.convert(Qe),0);const St=N!==null?Ze.get(N).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,St);const At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Bv(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(We),O.deleteSync(At),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Q=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-Q),X=Math.floor(A.image.width*te),Ee=Math.floor(A.image.height*te),De=W!==null?W.x:0,Te=W!==null?W.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,De,Te,X,Ee),He.unbindTexture()},this.copyTextureToTexture=function(A,W,Q=null,te=null,X=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],W=arguments[2],X=arguments[3]||0,Q=null);let Ee,De,Te,Ge,Ke,Qe;Q!==null?(Ee=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.min.x,Ge=Q.min.y):(Ee=A.image.width,De=A.image.height,Te=0,Ge=0),te!==null?(Ke=te.x,Qe=te.y):(Ke=0,Qe=0);const We=nt.convert(W.format),St=nt.convert(W.type);b.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const At=O.getParameter(O.UNPACK_ROW_LENGTH),Ct=O.getParameter(O.UNPACK_IMAGE_HEIGHT),It=O.getParameter(O.UNPACK_SKIP_PIXELS),_t=O.getParameter(O.UNPACK_SKIP_ROWS),Oe=O.getParameter(O.UNPACK_SKIP_IMAGES),jt=A.isCompressedTexture?A.mipmaps[X]:A.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,jt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,jt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,Ke,Qe,Ee,De,We,St,jt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,Ke,Qe,jt.width,jt.height,We,jt.data):O.texSubImage2D(O.TEXTURE_2D,X,Ke,Qe,Ee,De,We,St,jt),O.pixelStorei(O.UNPACK_ROW_LENGTH,At),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,_t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Q=null,te=null,X=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0);let Ee,De,Te,Ge,Ke,Qe,We,St,At;const Ct=A.isCompressedTexture?A.mipmaps[X]:A.image;Q!==null?(Ee=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.max.z-Q.min.z,Ge=Q.min.x,Ke=Q.min.y,Qe=Q.min.z):(Ee=Ct.width,De=Ct.height,Te=Ct.depth,Ge=0,Ke=0,Qe=0),te!==null?(We=te.x,St=te.y,At=te.z):(We=0,St=0,At=0);const It=nt.convert(W.format),_t=nt.convert(W.type);let Oe;if(W.isData3DTexture)b.setTexture3D(W,0),Oe=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const jt=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Un=O.getParameter(O.UNPACK_SKIP_PIXELS),$n=O.getParameter(O.UNPACK_SKIP_ROWS),Jt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Oe,X,We,St,At,Ee,De,Te,It,_t,Ct.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,X,We,St,At,Ee,De,Te,It,Ct.data):O.texSubImage3D(Oe,X,We,St,At,Ee,De,Te,It,_t,Ct),O.pixelStorei(O.UNPACK_ROW_LENGTH,jt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Un),O.pixelStorei(O.UNPACK_SKIP_ROWS,$n),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt),X===0&&W.generateMipmaps&&O.generateMipmap(Oe),He.unbindTexture()},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),He.unbindTexture()},this.resetState=function(){ee=0,B=0,N=null,He.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kf?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===Il?"display-p3":"srgb"}}class eE extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class tE extends Vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new Vt,Bf=new $f,_l=new Nl,vl=new Z;class nE extends Ln{constructor(e=new Bi,n=new tE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(a),_l.radius+=u,e.ray.intersectsSphere(_l)===!1)return;Em.copy(a).invert(),Bf.copy(e.ray).applyMatrix4(Em);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let w=x,C=S;w<C;w++){const g=m.getX(w);vl.fromBufferAttribute(y,g),Tm(vl,g,p,a,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(y.count,f.start+f.count);for(let w=x,C=S;w<C;w++)vl.fromBufferAttribute(y,w),Tm(vl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Tm(s,e,n,r,a,u,f){const d=Bf.distanceSqToPoint(s);if(d<n){const p=new Z;Bf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class wm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iE extends Kr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);const Am={type:"change"},Qf={type:"start"},og={type:"end"},xl=new $f,Rm=new mr,rE=Math.cos(70*kv.DEG2RAD),Kt=new Z,Cn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$c=1e-6;class sE extends iE{constructor(e,n=null){super(e,n),this.state=Rt.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new qr,this._lastTargetPosition=new Z,this._quat=new qr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wm,this._sphericalDelta=new wm,this._scale=1,this._panOffset=new Z,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new Z,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aE.bind(this),this._onPointerDown=oE.bind(this),this._onPointerUp=lE.bind(this),this._onContextMenu=mE.bind(this),this._onMouseWheel=fE.bind(this),this._onKeyDown=dE.bind(this),this._onTouchStart=hE.bind(this),this._onTouchMove=pE.bind(this),this._onMouseDown=uE.bind(this),this._onMouseMove=cE.bind(this),this._interceptControlDown=gE.bind(this),this._interceptControlUp=_E.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Am),this.update(),this.state=Rt.NONE}update(e=null){const n=this.object.position;Kt.copy(n).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Cn:r>Math.PI&&(r-=Cn),a<-Math.PI?a+=Cn:a>Math.PI&&(a-=Cn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Kt.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<rE?this.object.lookAt(this.target):(Rm.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Rm,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>$c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$c||this._lastTargetPosition.distanceToSquared(this.target)>$c?(this.dispatchEvent(Am),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Kt.setFromMatrixColumn(n,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,n){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(n,1):(Kt.setFromMatrixColumn(n,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Kt.copy(a).sub(this.target);let u=Kt.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,u=n-r.top,f=r.width,d=r.height;this._mouse.x=a/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),u=.5*(e.pageY+r.y);this._rotateEnd.set(a,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,d=(e.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ut,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function oE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function aE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function lE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(og),this.state=Rt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function uE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Rt.DOLLY;break;case ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Rt.ROTATE}break;case ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Qf)}function cE(s){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(s.preventDefault(),this.dispatchEvent(Qf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(og))}function dE(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function hE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Rt.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Rt.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Qf)}function pE(s){switch(this._trackPointer(s),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Rt.NONE}}function mE(s){this.enabled!==!1&&s.preventDefault()}function gE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _E(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function vE(){return(await fetch("data/v2_shared.json")).json()}async function xE(s){const e=await(await fetch(`data/v2_${s}.bin`)).arrayBuffer(),n=new DataView(e);if(new TextDecoder().decode(e.slice(0,4))!=="MVL3")throw new Error("bad magic");const a=n.getUint32(4,!0);let u=8;const f=new Float32Array(e,u,a*3);u+=a*12;const d=new Float32Array(e,u,a);u+=a*4;const p=new Uint8Array(e,u,a);u+=a;const m=new Uint8Array(e,u,a);u+=a;const v=new Uint8Array(e,u,a);u+=a;const y=new Uint32Array(e,u,a),x=await(await fetch(`data/v2_${s}_meta.json`)).json();return{n:a,pos:f,bright:d,cls:p,clu:m,lang:v,wid:y,meta:x}}const yE=`
attribute float aBright; attribute float aCls; attribute float aClu; attribute float aLang;
uniform float uMaxX; uniform float uMode; uniform float uLang; uniform float uMinB; uniform float uScale;
varying vec3 vColor; varying float vAlpha;
vec3 palette(int i) {
  if (i==0) return vec3(0.910,0.475,0.976); if (i==1) return vec3(0.376,0.647,0.980);
  if (i==2) return vec3(0.204,0.827,0.600); if (i==3) return vec3(0.984,0.749,0.141);
  if (i==4) return vec3(0.133,0.827,0.933); if (i==5) return vec3(0.969,0.443,0.443);
  if (i==6) return vec3(0.655,0.545,0.980); if (i==7) return vec3(0.612,0.639,0.686);
  if (i==8) return vec3(0.984,0.573,0.235); return vec3(0.976,0.659,0.831);
}
void main() {
  float hidden = 0.0;
  if (position.x > uMaxX || aBright < uMinB) hidden = 1.0;
  if (uLang > 0.5 && uLang < 1.5 && aLang > 0.5) hidden = 1.0;
  if (uLang > 1.5 && aLang < 0.5) hidden = 1.0;
  float t = clamp(0.15 + 2.2 * aBright, 0.0, 1.0);
  vec3 c; float a;
  if (uMode < 0.5) {
    c = mix(vec3(0.137,0.227,0.369), vec3(0.863,0.925,0.988), t);
    a = 0.10 + 0.55 * t;
    if (aCls > 2.5) { c = vec3(1.0); a = 0.95; }
    else if (aCls > 1.5) { c = vec3(1.0,0.42,0.616); a = 0.9; }
    else if (aCls > 0.5) { c = vec3(1.0,0.823,0.341); a = 0.30 + 0.5 * t; }
  } else {
    if (aClu < 250.0) { c = palette(int(aClu)); a = 0.35 + 0.6 * t; }
    else { c = vec3(0.30,0.32,0.36); a = 0.05 + 0.18 * t; }
  }
  vColor = c; vAlpha = a * (1.0 - hidden);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float size = uScale * (0.12 + 1.1 * sqrt(aBright));
  if (aCls > 2.5) size = max(size, uScale * 0.85);
  else if (aCls > 1.5) size = max(size, uScale * 0.75);
  else if (aCls > 0.5) size = max(size, uScale * 0.38);
  gl_PointSize = size * 300.0 / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,SE=`
varying vec3 vColor; varying float vAlpha;
void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(uv, uv);
  if (r2 > 1.0 || vAlpha <= 0.001) discard;
  float falloff = exp(-2.6 * r2);
  gl_FragColor = vec4(vColor * vAlpha * falloff, vAlpha * falloff);
}`;function ME(s){const e=new Bi;e.setAttribute("position",new yn(s.pos,3)),e.setAttribute("aBright",new yn(s.bright,1)),e.setAttribute("aCls",new yn(Float32Array.from(s.cls),1)),e.setAttribute("aClu",new yn(Float32Array.from(s.clu),1)),e.setAttribute("aLang",new yn(Float32Array.from(s.lang),1));const n=new zi({vertexShader:yE,fragmentShader:SE,transparent:!0,depthWrite:!1,blending:Zc,uniforms:{uMaxX:{value:1e9},uMode:{value:0},uLang:{value:0},uMinB:{value:0},uScale:{value:.9}}});return new nE(e,n)}function EE(){var R;const s=ln.useRef(null),e=ln.useRef({}),[n,r]=ln.useState(null),[a,u]=ln.useState("run1"),[f,d]=ln.useState(null),[p,m]=ln.useState(1),[v,y]=ln.useState(0),[x,S]=ln.useState(0),[w,C]=ln.useState(0),[g,_]=ln.useState(!0),[U,P]=ln.useState(null),[D,ee]=ln.useState(null);ln.useEffect(()=>{vE().then(r)},[]),ln.useEffect(()=>{if(!n||!s.current)return;const V=s.current,G=new JM({antialias:!0});G.setSize(V.clientWidth,V.clientHeight),G.setPixelRatio(window.devicePixelRatio),G.setClearColor(1052695),V.appendChild(G.domElement);const se=new eE,le=new qn(52,V.clientWidth/V.clientHeight,.5,3e3);le.position.set(60,70,160);const J=new sE(le,G.domElement);J.autoRotate=!0,J.autoRotateSpeed=.5,J.addEventListener("start",()=>_(!1));const ae=e.current;Object.assign(ae,{renderer:G,scene:se,camera:le,controls:J,points:null,run:null});const k=()=>{le.aspect=V.clientWidth/V.clientHeight,le.updateProjectionMatrix(),G.setSize(V.clientWidth,V.clientHeight)};window.addEventListener("resize",k);let ce=!0;return(function re(){ce&&(requestAnimationFrame(re),J.update(),G.render(se,le))})(),()=>{ce=!1,window.removeEventListener("resize",k),V.innerHTML=""}},[n]),ln.useEffect(()=>{n&&xE(a).then(V=>{const G=e.current;G.points&&(G.scene.remove(G.points),G.points.geometry.dispose()),G.run=V,G.points=ME(V),G.scene.add(G.points),G.controls.target.set(V.meta.n_positions/2,22,0),d(V.meta),ee(null)})},[n,a]),ln.useEffect(()=>{const V=e.current;if(!V.points||!V.run)return;const G=V.points.material.uniforms;G.uMaxX.value=p*V.run.meta.n_positions,G.uMode.value=v,G.uLang.value=x,G.uMinB.value=w},[p,v,x,w,f]),ln.useEffect(()=>{const V=e.current;V.controls&&(V.controls.autoRotate=g)},[g,f]);function B(V,G){var at;const se=e.current;if(!se.run||!se.camera)return;const le=se.renderer.domElement.getBoundingClientRect(),J=V.clientX-le.left,ae=V.clientY-le.top,k=le.width,ce=le.height,re=p*se.run.meta.n_positions,I=new Z;let ie=-1,be=-1;const{pos:Y,bright:ue,cls:ge,lang:xe,n:Ce}=se.run;for(let He=0;He<Ce;He++){if(Y[He*3]>re)continue;const yt=ue[He];if(yt<Math.max(.03,w)&&ge[He]<1||x===1&&xe[He]>0||x===2&&xe[He]<1||(I.set(Y[He*3],Y[He*3+1],Y[He*3+2]).project(se.camera),I.z>1))continue;const Ze=(I.x*.5+.5)*k,b=(-I.y*.5+.5)*ce,T=(Ze-J)**2+(b-ae)**2;if(T>400)continue;const q=(yt+ge[He]*.3)/(1+T*.01);q>be&&(be=q,ie=He)}if(ie<0){G||P(null);return}const Pe=se.run.wid[ie],$e=n.words[Pe],ht=(at=n.wordGloss)==null?void 0:at[$e.trim()],ot=Math.round(Y[ie*3]),O=Math.round(Y[ie*3+1]/44*100),Xt=ge[ie]>2?"the word it chose at this moment":ge[ie]>1?"a feeling word — never spoken":ge[ie]>0?"spoken elsewhere in the answer":"background thought",it={word:$e,gloss:ht,moment:ot,closeness:O,kind:Xt,cluster:n.wordCluster[Pe]};G?(ee(it),_(!1)):P(it)}const N=V=>{var G;return V!=null&&V<(((G=n==null?void 0:n.clusterLabels)==null?void 0:G.length)||0)?n.clusterLabels[V]:null},$=f&&p!=null?f.tokens.slice(f.n_prompt,Math.max(f.n_prompt,Math.floor(p*f.n_positions))).join(""):"",ye=D&&((R=f==null?void 0:f.phrases)==null?void 0:R[String(D.moment)]),E=(V,G,se)=>ct.jsx("span",{style:{display:"inline-flex",gap:2},children:V.map(([le,J])=>ct.jsx("button",{onClick:()=>se(J),style:{background:G===J?"#3b4252":"#1a1a22",color:"#d8dbe0",border:"1px solid #333",borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:le},le))});return ct.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[ct.jsxs("div",{style:{padding:"8px 14px",display:"flex",gap:14,alignItems:"center",background:"#15151c",borderBottom:"1px solid #26262e",flexWrap:"wrap"},children:[ct.jsx("b",{children:"MindVolume"}),n&&ct.jsx("select",{value:a,onChange:V=>u(V.target.value),style:{background:"#1a1a22",color:"#d8dbe0",border:"1px solid #333",borderRadius:6,padding:"4px 8px",maxWidth:280},children:(n.groups||[...new Set(n.runs.map(V=>V.group||"other"))]).map(V=>ct.jsx("optgroup",{label:V,children:n.runs.filter(G=>(G.group||"other")===V).map(G=>ct.jsx("option",{value:G.id,children:G.title},G.id))},V))}),E([["story",0],["anatomy",1]],v,y),E([["both",0],["english",1],["中文",2]],x,S),ct.jsxs("label",{style:{fontSize:12},children:["drift",ct.jsx("input",{type:"checkbox",checked:g,onChange:V=>_(V.target.checked)})]}),ct.jsxs("label",{style:{fontSize:12},children:["detail",ct.jsx("input",{type:"range",min:"0",max:"0.08",step:"0.002",value:w,onChange:V=>C(+V.target.value)})]})]}),ct.jsxs("div",{style:{flex:1,position:"relative"},children:[ct.jsx("div",{ref:s,style:{position:"absolute",inset:0},onPointerMove:V=>B(V,!1),onClick:V=>B(V,!0)}),U&&ct.jsxs("div",{style:{position:"absolute",top:10,left:10,background:"#000a",padding:"6px 12px",borderRadius:999,fontFamily:"monospace",fontSize:13},children:[U.word.replace(" ","␣"),U.gloss?`  “${U.gloss}”`:""," · ",U.kind," · moment ",U.moment,","," ",U.closeness,"% of the way to being spoken"]}),D&&ct.jsxs("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:320,background:"#000c",padding:16,overflowY:"auto",fontSize:13},children:[ct.jsx("div",{style:{fontSize:22,fontFamily:"monospace",fontWeight:700},children:D.word.replace(" ","␣")}),D.gloss&&ct.jsxs("div",{style:{color:"#8cd9ff",fontStyle:"italic"},children:["“",D.gloss,"”"]}),ct.jsx("div",{style:{color:"#999",margin:"6px 0"},children:D.kind}),N(D.cluster)&&ct.jsxs("div",{children:["family: ",N(D.cluster)]}),ct.jsx("hr",{style:{borderColor:"#333"}}),ye?ct.jsxs(ct.Fragment,{children:[ct.jsx("b",{children:"At this moment, each depth was about to say:"}),[["deep (45%)","L45"],["almost-final (86%)","L55"],["at the door (98%)","L61"]].map(([V,G])=>ct.jsxs("div",{style:{margin:"8px 0"},children:[ct.jsx("div",{style:{fontSize:11,color:"#888"},children:V}),ct.jsxs("div",{style:{fontFamily:"serif"},children:["“",(ye[G]||"—").split("<|")[0].replace(/\n/g," ").trim(),"”"]})]},G)),ct.jsxs("div",{style:{margin:"8px 0"},children:[ct.jsx("div",{style:{fontSize:11,color:"#888"},children:"what it actually said"}),ct.jsxs("div",{style:{fontFamily:"serif",color:"#ffd257"},children:["“",f.tokens.slice(D.moment+1,D.moment+13).join(""),"”"]})]})]}):ct.jsxs("div",{style:{color:"#888"},children:["moment ",D.moment," · ",D.closeness,"% of the way to being spoken"]}),ct.jsx("button",{onClick:()=>ee(null),style:{marginTop:10,background:"#1a1a22",color:"#d8dbe0",border:"1px solid #333",borderRadius:6,padding:"3px 10px"},children:"close"})]}),ct.jsxs("div",{style:{position:"absolute",left:0,right:D?320:0,bottom:0,background:"#000a",padding:"10px 16px"},children:[ct.jsx("div",{style:{color:"#ffd257",fontFamily:"serif",fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:$||"(reading the question…)"}),ct.jsxs("label",{style:{fontSize:12,display:"flex",gap:8,alignItems:"center"},children:["read the conversation",ct.jsx("input",{style:{flex:1},type:"range",min:"0",max:"1",step:"0.002",value:p,onChange:V=>m(+V.target.value)})]})]})]})]})}q_.createRoot(document.getElementById("root")).render(ct.jsx(EE,{}));
