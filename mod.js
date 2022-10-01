// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Object.prototype.hasOwnProperty;function r(r,e){return null!=r&&t.call(r,e)}var e=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,c=i.toString,f=i.__defineGetter__,l=i.__defineSetter__,a=i.__lookupGetter__,y=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?u:function(t,r,e){var n,o,u,p;if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===c.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(a.call(t,r)||y.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,p="set"in e,o&&(u||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&f&&f.call(t,r,e.get),p&&l&&l.call(t,r,e.set),t};var p=o;function s(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function b(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(t){var e,n,o;if(null==t)return _.call(t);n=t[w],e=r(t,w);try{t[w]=void 0}catch(r){return _.call(t)}return o=_.call(t),e?t[w]=n:delete t[w],o}:function(t){return _.call(t)},g=Boolean.prototype.toString;var m=d();function h(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return b(t)||h(t)}function O(){return new Function("return this;")()}s(S,"isPrimitive",b),s(S,"isObject",h);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var T=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(A)return A;if(E)return E;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),x=T.document&&T.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;s(k,"REGEXP",C);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function L(t){return null!==t&&"object"==typeof t}function F(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!G(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(L));var M="function"==typeof e||"object"==typeof V||"function"==typeof x?function(t){return F(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?F(t).toLowerCase():r};function I(t,e){return r(t,e)&&function(t){return"function"===M(t)}(t[e])}export{I as default};
//# sourceMappingURL=mod.js.map
