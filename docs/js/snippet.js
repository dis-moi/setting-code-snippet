window.lmem=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(o){return t.exports=n="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},n(o)}t.exports=n},function(t,e,n){"use strict";function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function r(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?o(e,!0).forEach(function(n){f()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))});return t}function u(t){!function(t,e){var n=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];return function o(r){t({type:"FETCH_INSTALLATION_DETAILS"},function(t,u){t?(n&&console.error(t),setTimeout(function(){return o(r)},e)):(n&&console.log("Successful Installation!"),"function"==typeof r&&r(u))})}}(a,b,s)(t)}function c(t,e){!function(t,e){var n=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];return function o(r,u){t(r,function(t,c){t?(n&&console.error(t),setTimeout(function(){return o(r,u)},e)):(n&&console.log("Successful Setup!"),"function"==typeof u&&u(c))})}}(a,b,s)({type:"SETUP",payload:r({},t)},e)}n.r(e);var i=n(0),f=n.n(i),l=n(1),p=n.n(l),y="undefined"==typeof chrome?browser:chrome;n.d(e,"onInstall",function(){return u}),n.d(e,"pushSettings",function(){return c});var b="1000",s=!0,a=function(t,e){try{y.runtime.sendMessage("fpjlnlnbacohacebkadbbjebbipcknbg",t&&"object"===p()(t)?t:{},function(t){e(y.runtime.lastError||void 0,t)})}catch(t){e(t)}}}]);