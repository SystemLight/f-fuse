!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("fFuse",[],n):"object"==typeof exports?exports.fFuse=n():t.fFuse=n()}(this,(function(){return function(){var t={9836:function(t,n,r){var e=r(5891);t.exports=e},5102:function(t,n,r){var e=r(4913);t.exports=e},3065:function(t,n,r){r(7675);var e=r(1723);t.exports=e("Function").bind},4958:function(t,n,r){var e=r(757),o=r(3065),i=Function.prototype;t.exports=function(t){var n=t.bind;return t===i||e(i,t)&&n===i.bind?o:n}},6597:function(t,n,r){r(183);var e=r(1179).Object,o=t.exports=function(t,n,r){return e.defineProperty(t,n,r)};e.defineProperty.sham&&(o.sham=!0)},9824:function(t,n,r){t.exports=r(612)},9418:function(t,n,r){t.exports=r(9212)},612:function(t,n,r){var e=r(9836);t.exports=e},9212:function(t,n,r){var e=r(5102);t.exports=e},3525:function(t,n,r){var e=r(3884),o=r(489),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},231:function(t,n,r){var e=r(5876),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},6631:function(t,n,r){var e=r(5135);t.exports=e([].slice)},151:function(t,n,r){var e=r(5135),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},332:function(t,n,r){var e=r(6024),o=r(9099),i=r(2029);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},2029:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},5442:function(t,n,r){var e=r(4824),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},6024:function(t,n,r){var e=r(3019);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8947:function(t,n,r){var e=r(4824),o=r(5876),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},1887:function(t,n,r){var e=r(7988);t.exports=e("navigator","userAgent")||""},2224:function(t,n,r){var e,o,i=r(4824),u=r(1887),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,p=a&&a.v8;p&&(o=(e=p.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},1723:function(t,n,r){var e=r(1179);t.exports=function(t){return e[t+"Prototype"]}},2483:function(t,n,r){"use strict";var e=r(4824),o=r(7350),i=r(5135),u=r(3884),c=r(7909).f,f=r(4284),a=r(1179),p=r(6018),s=r(332),l=r(7099),v=function(t){var n=function(r,e,i){if(this instanceof n){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,i)}return o(t,this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,o,y,b,h,d,x,m,g=t.target,w=t.global,j=t.stat,O=t.proto,P=w?e:j?e[g]:(e[g]||{}).prototype,S=w?a:a[g]||s(a,g,{})[g],k=S.prototype;for(y in n)r=!f(w?y:g+(j?".":"#")+y,t.forced)&&P&&l(P,y),h=S[y],r&&(d=t.dontCallGetSet?(m=c(P,y))&&m.value:P[y]),b=r&&d?d:n[y],r&&typeof h==typeof b||(x=t.bind&&r?p(b,e):t.wrap&&r?v(b):O&&u(b)?i(b):b,(t.sham||b&&b.sham||h&&h.sham)&&s(x,"sham",!0),s(S,y,x),O&&(l(a,o=g+"Prototype")||s(a,o,{}),s(a[o],y,b),t.real&&k&&!k[y]&&s(k,y,b)))}},3019:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7350:function(t,n,r){var e=r(3424),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(e?u.bind(i):function(){return u.apply(i,arguments)})},6018:function(t,n,r){var e=r(5135),o=r(3525),i=r(3424),u=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?u(t,n):function(){return t.apply(n,arguments)}}},3424:function(t,n,r){var e=r(3019);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2620:function(t,n,r){"use strict";var e=r(5135),o=r(3525),i=r(5876),u=r(7099),c=r(6631),f=r(3424),a=Function,p=e([].concat),s=e([].join),l={},v=function(t,n,r){if(!u(l,n)){for(var e=[],o=0;o<n;o++)e[o]="a["+o+"]";l[n]=a("C,a","return new C("+s(e,",")+")")}return l[n](t,r)};t.exports=f?a.bind:function(t){var n=o(this),r=n.prototype,e=c(arguments,1),u=function(){var r=p(e,c(arguments));return this instanceof u?v(n,r.length,r):n.apply(t,r)};return i(r)&&(u.prototype=r),u}},2161:function(t,n,r){var e=r(3424),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},5135:function(t,n,r){var e=r(3424),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},7988:function(t,n,r){var e=r(1179),o=r(4824),i=r(3884),u=function(t){return i(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},5903:function(t,n,r){var e=r(3525);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},4824:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},7099:function(t,n,r){var e=r(5135),o=r(919),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},436:function(t,n,r){var e=r(6024),o=r(3019),i=r(8947);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},3787:function(t,n,r){var e=r(5135),o=r(3019),i=r(151),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},3884:function(t){t.exports=function(t){return"function"==typeof t}},4284:function(t,n,r){var e=r(3019),o=r(3884),i=/#|\.prototype\./,u=function(t,n){var r=f[c(t)];return r==p||r!=a&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},f=u.data={},a=u.NATIVE="N",p=u.POLYFILL="P";t.exports=u},5876:function(t,n,r){var e=r(3884);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},2235:function(t){t.exports=!0},2448:function(t,n,r){var e=r(7988),o=r(3884),i=r(757),u=r(6659),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},9989:function(t,n,r){var e=r(2224),o=r(3019);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},9099:function(t,n,r){var e=r(6024),o=r(436),i=r(2515),u=r(231),c=r(1046),f=TypeError,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,s="enumerable",l="configurable",v="writable";n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&v in r&&!r.writable){var e=p(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:l in r?r.configurable:e.configurable,enumerable:s in r?r.enumerable:e.enumerable,writable:!1})}return a(t,n,r)}:a:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7909:function(t,n,r){var e=r(6024),o=r(2161),i=r(7361),u=r(2029),c=r(875),f=r(1046),a=r(7099),p=r(436),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=f(n),p)try{return s(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},757:function(t,n,r){var e=r(5135);t.exports=e({}.isPrototypeOf)},7361:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},5147:function(t,n,r){var e=r(2161),o=r(3884),i=r(5876),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw u("Can't convert object to primitive value")}},1179:function(t){t.exports={}},7526:function(t){var n=TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},474:function(t,n,r){var e=r(4824),o=r(5442),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},1199:function(t,n,r){var e=r(2235),o=r(474);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.23.3",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"})},875:function(t,n,r){var e=r(3787),o=r(7526);t.exports=function(t){return e(o(t))}},919:function(t,n,r){var e=r(7526),o=Object;t.exports=function(t){return o(e(t))}},4922:function(t,n,r){var e=r(2161),o=r(5876),i=r(2448),u=r(5903),c=r(5147),f=r(2690),a=TypeError,p=f("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,f=u(t,p);if(f){if(void 0===n&&(n="default"),r=e(f,t,n),!o(r)||i(r))return r;throw a("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},1046:function(t,n,r){var e=r(4922),o=r(2448);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},489:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},6343:function(t,n,r){var e=r(5135),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},6659:function(t,n,r){var e=r(9989);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},2515:function(t,n,r){var e=r(6024),o=r(3019);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2690:function(t,n,r){var e=r(4824),o=r(1199),i=r(7099),u=r(6343),c=r(9989),f=r(6659),a=o("wks"),p=e.Symbol,s=p&&p.for,l=f?p:p&&p.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&i(p,t)?a[t]=p[t]:a[t]=f&&s?s(n):l(n)}return a[t]}},7675:function(t,n,r){var e=r(2483),o=r(2620);e({target:"Function",proto:!0,forced:Function.bind!==o},{bind:o})},183:function(t,n,r){var e=r(2483),o=r(6024),i=r(9099).f;e({target:"Object",stat:!0,forced:Object.defineProperty!==i,sham:!o},{defineProperty:i})},5891:function(t,n,r){var e=r(4958);t.exports=e},4913:function(t,n,r){var e=r(6597);t.exports=e},3763:function(t,n,r){t.exports=r(9824)},6728:function(t,n,r){t.exports=r(9418)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)};var e={};return function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(e,{default:function(){return f}});var n=r(6728);function o(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(t,o.key,o)}}function i(t,r,e){return r in t?n(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var u=r(3763),c=r.n(u),f=function(){function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,r),i(this,"opt",void 0),i(this,"isBroken",void 0),i(this,"when",void 0),i(this,"result",void 0),i(this,"closure_arg",void 0),this.opt=n,this.isBroken=!!this.opt.manual,this.when=this.__when}var e,u,f;return e=r,u=[{key:"weld",value:function(){this.isBroken=!1}},{key:"cut",value:function(){this.isBroken=!0}},{key:"__when",value:function(){return!0}},{key:"on",value:function(t){this.when=c()(t).call(t,this)}},{key:"callComplete",value:function(){}},{key:"closure",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.closure_arg=n}},{key:"def",value:function(t){var n=this,r=this.opt,e=r.manual,o=r.memory;return function(){return n.isBroken&&o?n.result:!n.isBroken&&n.when.apply(n,arguments)?(n.result=t.apply(void 0,arguments),!e&&n.cut(),n.callComplete(),n.callComplete=function(){},n.result):void 0}}}],u&&o(e.prototype,u),f&&o(e,f),n(e,"prototype",{writable:!1}),r}()}(),e=e.default}()}));