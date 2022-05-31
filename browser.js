// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isMethod=e()}(this,(function(){"use strict";function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e=Object.prototype.hasOwnProperty;var r=function(t,r){return null!=t&&e.call(t,r)},n=/./,o=t(Object.freeze({__proto__:null,default:()=>window}))(),u=o.document&&o.document.childNodes,i=Int8Array,c=n,f=u,a=i;var l=function(){return"function"==typeof c||"object"==typeof a||"function"==typeof f};var p=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return p&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,b=s;var v=function(t){return b.call(t)},d="function"==typeof Symbol?Symbol.toStringTag:"",_=r,j=d,m=s;var g=v,h=function(t){var e,r,n;if(null==t)return m.call(t);r=t[j],e=_(t,j);try{t[j]=void 0}catch(e){return m.call(t)}return n=m.call(t),e?t[j]=r:delete t[j],n},w=y()?h:g,O="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return O({},"x",{}),!0}catch(t){return!1}},E=Object.defineProperty,P=Object.prototype,A=P.toString,T=P.__defineGetter__,k=P.__defineSetter__,x=P.__lookupGetter__,B=P.__lookupSetter__;var G=E,C=function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(x.call(t,e)||B.call(t,e)?(n=t.__proto__,t.__proto__=P,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&T&&T.call(t,e,r.get),i&&k&&k.call(t,e,r.set),t},L=S()?G:C;var M=function(t,e,r){L(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var V=function(){return/^\s*function\s*([^(]*)/i},R=V;M(R,"REGEXP",V());var X=R,z=w;var D=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};var F=function(t){return null!==t&&"object"==typeof t};M(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!D(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(F));var I=F;var N=w,q=X.REGEXP,H=function(t){return I(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var J=function(t){var e,r,n;if(("Object"===(r=N(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=q.exec(n.toString()))return e[1]}return H(t)?"Buffer":r},K=J;var Q=J;var U=function(t){var e;return null===t?"null":"object"===(e=typeof t)?K(t).toLowerCase():e},W=function(t){return Q(t).toLowerCase()},Y=l()?W:U;var Z=r,$=function(t){return"function"===Y(t)};return function(t,e){return Z(t,e)&&$(t[e])}}));
//# sourceMappingURL=browser.js.map
