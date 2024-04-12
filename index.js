// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).table=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function i(r,e){return null!=r&&o.call(r,e)}var a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"";var c=t()?function(r){var e,t,o;if(null==r)return n.call(r);t=r[u],e=i(r,u);try{r[u]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[u]=t:delete r[u],o}:function(r){return n.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)},l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function g(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(o):y(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=g(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=g(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===d.call(r.specifier)?d.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,A=String.prototype.replace,j=/e\+(\d)$/,O=/e-(\d)$/,E=/^(\d+)$/,I=/^(\d+)e/,S=/\.0$/,k=/\.0*e/,_=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,_,"$1e"),t=A.call(t,k,"e"),t=A.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,j,"e+0$1"),t=A.call(t,O,"e-0$1"),r.alternate&&(t=A.call(t,E,"$1."),t=A.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===m.call(r.specifier)?m.call(t):w.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=String.fromCharCode,U=isNaN,C=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,o,i,a,u,c,f,l,s,p,y;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,U(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(i)?String(n.arg):T(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=g(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,y=void 0,(y=s-l.length)<0?l:l=p?l+F(y):F(y)+l)),a+=n.arg||"",u+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function B(r){var e,t,n,o;for(t=[],o=0,n=V.exec(r);n;)(e=r.slice(o,V.lastIndex-n[0].length)).length&&t.push(e),t.push(M(n)),o=V.lastIndex,n=V.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function $(r){var e,t;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[B(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var R,L=Object.prototype,D=L.toString,W=L.__defineGetter__,G=L.__defineSetter__,H=L.__lookupGetter__,z=L.__lookupSetter__;R=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&W&&W.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};var X=R;function Y(r,e,t){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"number"==typeof r}var J=Number,q=J.prototype.toString;var K=t();function Q(r){return"object"==typeof r&&(r instanceof J||(K?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function rr(r){return Z(r)||Q(r)}Y(rr,"isPrimitive",Z),Y(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,tr=J.NEGATIVE_INFINITY,nr=Math.floor;function or(r){return nr(r)===r}function ir(r){return r<er&&r>tr&&or(r)}function ar(r){return Z(r)&&ir(r)}function ur(r){return Q(r)&&ir(r.valueOf())}function cr(r){return ar(r)||ur(r)}function fr(r){return ar(r)&&r>=0}function lr(r){return ur(r)&&r.valueOf()>=0}function sr(r){return fr(r)||lr(r)}function pr(r){return null!==r&&"object"==typeof r}function yr(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}Y(cr,"isPrimitive",ar),Y(cr,"isObject",ur),Y(sr,"isPrimitive",fr),Y(sr,"isObject",lr),Y(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!f(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var gr=Object,vr=/./;function dr(r){return"boolean"==typeof r}var hr=Boolean,br=Boolean.prototype.toString;var wr=t();function mr(r){return"object"==typeof r&&(r instanceof hr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function Ar(r){return dr(r)||mr(r)}Y(Ar,"isPrimitive",dr),Y(Ar,"isObject",mr);var jr="object"==typeof self?self:null,Or="object"==typeof window?window:null,Er="object"==typeof global?global:null,Ir="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!dr(r))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ir)return Ir;if(jr)return jr;if(Or)return Or;if(Er)return Er;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Sr.document&&Sr.document.childNodes,_r=Int8Array;function xr(){return/^\s*function\s*([^(]*)/i}var Fr=/^\s*function\s*([^(]*)/i;function Tr(r){var e,t,n;if(("Object"===(t=c(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Fr.exec(n.toString()))return e[1]}return yr(r)?"Buffer":t}Y(xr,"REGEXP",Fr);var Ur="function"==typeof vr||"object"==typeof _r||"function"==typeof kr?function(r){return Tr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Tr(r).toLowerCase():e};function Cr(r){return"function"===Ur(r)}var Pr,Nr=Object.getPrototypeOf;Pr=Cr(Object.getPrototypeOf)?Nr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Vr=Pr;function Mr(r){return null==r?null:(r=gr(r),Vr(r))}function Br(r){return"string"==typeof r}var $r=String.prototype.valueOf;var Rr=t();function Lr(r){return"object"==typeof r&&(r instanceof String||(Rr?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function Dr(r){return Br(r)||Lr(r)}function Wr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Gr(r){return r!=r}function Hr(r){return Z(r)&&Gr(r)}function zr(r){return Q(r)&&Gr(r.valueOf())}function Xr(r){return Hr(r)||zr(r)}Y(Dr,"isPrimitive",Br),Y(Dr,"isObject",Lr),Y(Wr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),Y(Xr,"isPrimitive",Hr),Y(Xr,"isObject",zr);var Yr=9007199254740991;function Zr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&or(i.length)&&i.length>=0&&i.length<=Yr||Br(r)))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ar(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Xr(e)){for(;o<n;o++)if(Xr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function Jr(r){return Object.keys(Object(r))}var qr,Kr=void 0!==Object.keys;function Qr(r){return"[object Arguments]"===c(r)}qr=function(){return Qr(arguments)}();var re=qr,ee=Object.prototype.propertyIsEnumerable;var te=!ee.call("beep","0");function ne(r,e){var t;return null!=r&&(!(t=ee.call(r,e))&&te&&Dr(r)?!Hr(e=+e)&&ar(e)&&e>=0&&e<r.length:t)}var oe=4294967295;var ie=re?Qr:function(r){return null!==r&&"object"==typeof r&&!f(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=oe&&i(r,"callee")&&!ne(r,"callee")},ae=Array.prototype.slice;var ue=ne((function(){}),"prototype"),ce=!ne({toString:null},"toString");function fe(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],se="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===Ur(se))return!1;for(r in se)try{-1===Zr(le,r)&&i(se,r)&&null!==se[r]&&"object"===Ur(se[r])&&fe(se[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window;var ge,ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ge=Kr?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return ie(r)?Jr(ae.call(r)):Jr(r)}:Jr:function(r){var e,t,n,o,a,u,c;if(o=[],ie(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!i(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!pr(r))return o;t=ue&&n}for(a in r)t&&"prototype"===a||!i(r,a)||o.push(String(a));if(ce)for(e=function(r){if(!1===ye&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),c=0;c<ve.length;c++)u=ve[c],e&&"constructor"===u||!i(r,u)||o.push(String(u));return o};var de=ge,he=void 0!==Object.getOwnPropertyNames,be=gr.getOwnPropertyNames;var we=he?function(r){return be(gr(r))}:function(r){return de(gr(r))},me=void 0!==Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyDescriptor;var je=me?function(r,e){var t;return null==r||void 0===(t=Ae(r,e))?null:t}:function(r,e){return i(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Oe="function"==typeof Buffer?Buffer:null;var Ee,Ie=r.Buffer;Ee=function(){var r,e;if("function"!=typeof Oe)return!1;try{r=yr(e="function"==typeof Oe.from?Oe.from([1,2,3,4]):new Oe([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Ie:function(){throw new Error("not implemented")};var Se=Ee;var ke=Cr(Se.from)?function(r){if(!yr(r))throw new TypeError($("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Se.from(r)}:function(r){if(!yr(r))throw new TypeError($("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Se(r)},_e="function"==typeof Int8Array;var xe="function"==typeof Int8Array?Int8Array:null;var Fe,Te="function"==typeof Int8Array?Int8Array:void 0;Fe=function(){var r,e,t;if("function"!=typeof xe)return!1;try{e=new xe([1,3.14,-3.14,128]),t=e,r=(_e&&t instanceof Int8Array||"[object Int8Array]"===c(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Te:function(){throw new Error("not implemented")};var Ue=Fe,Ce="function"==typeof Uint8Array;var Pe="function"==typeof Uint8Array?Uint8Array:null;var Ne,Ve="function"==typeof Uint8Array?Uint8Array:void 0;Ne=function(){var r,e,t;if("function"!=typeof Pe)return!1;try{e=new Pe(e=[1,3.14,-3.14,256,257]),t=e,r=(Ce&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ve:function(){throw new Error("not implemented")};var Me=Ne,Be="function"==typeof Uint8ClampedArray;var $e="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Re,Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Re=function(){var r,e,t;if("function"!=typeof $e)return!1;try{e=new $e([-1,0,1,3.14,4.99,255,256]),t=e,r=(Be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===c(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Le:function(){throw new Error("not implemented")};var De=Re,We="function"==typeof Int16Array;var Ge="function"==typeof Int16Array?Int16Array:null;var He,ze="function"==typeof Int16Array?Int16Array:void 0;He=function(){var r,e,t;if("function"!=typeof Ge)return!1;try{e=new Ge([1,3.14,-3.14,32768]),t=e,r=(We&&t instanceof Int16Array||"[object Int16Array]"===c(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?ze:function(){throw new Error("not implemented")};var Xe=He,Ye="function"==typeof Uint16Array;var Ze="function"==typeof Uint16Array?Uint16Array:null;var Je,qe="function"==typeof Uint16Array?Uint16Array:void 0;Je=function(){var r,e,t;if("function"!=typeof Ze)return!1;try{e=new Ze(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ye&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?qe:function(){throw new Error("not implemented")};var Ke=Je,Qe="function"==typeof Int32Array;var rt="function"==typeof Int32Array?Int32Array:null;var et,tt="function"==typeof Int32Array?Int32Array:void 0;et=function(){var r,e,t;if("function"!=typeof rt)return!1;try{e=new rt([1,3.14,-3.14,2147483648]),t=e,r=(Qe&&t instanceof Int32Array||"[object Int32Array]"===c(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?tt:function(){throw new Error("not implemented")};var nt=et,ot="function"==typeof Uint32Array;var it="function"==typeof Uint32Array?Uint32Array:null;var at,ut="function"==typeof Uint32Array?Uint32Array:void 0;at=function(){var r,e,t;if("function"!=typeof it)return!1;try{e=new it(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ot&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ct=at,ft="function"==typeof Float32Array;var lt="function"==typeof Float32Array?Float32Array:null;var st,pt="function"==typeof Float32Array?Float32Array:void 0;st=function(){var r,e,t;if("function"!=typeof lt)return!1;try{e=new lt([1,3.14,-3.14,5e40]),t=e,r=(ft&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===er}catch(e){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var yt=st,gt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var dt,ht="function"==typeof Float64Array?Float64Array:void 0;dt=function(){var r,e,t;if("function"!=typeof vt)return!1;try{e=new vt([1,3.14,-3.14,NaN]),t=e,r=(gt&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ht:function(){throw new Error("not implemented")};var bt=dt;function wt(r){return new Ue(r)}function mt(r){return new Me(r)}function At(r){return new De(r)}function jt(r){return new Xe(r)}function Ot(r){return new Ke(r)}function Et(r){return new nt(r)}function It(r){return new ct(r)}function St(r){return new yt(r)}function kt(r){return new bt(r)}var _t={int8array:wt,uint8array:mt,uint8clampedarray:At,int16array:jt,uint16array:Ot,int32array:Et,uint32array:It,float32array:St,float64array:kt};function xt(r,e,t,n,o){var a,u,l,s,p,y,g,v,d,h;if(o-=1,"object"!=typeof r||null===r)return r;if(yr(r))return ke(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===c(r))return!0;r=Mr(r)}return!1}(r))return function(r){var e,t,n,o,a,u,c=[],l=[];for(a=new r.constructor(r.message),c.push(r),l.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),e=de(r),u=0;u<e.length;u++)o=e[u],i(t=je(r,o),"value")&&(n=f(r[o])?[]:{},t.value=xt(r[o],n,c,l,-1)),X(a,o,t);return a}(r);if("date"===(l=Ur(r)))return new Date(+r);if("regexp"===l)return function(r){if(!Br(r))throw new TypeError($("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===l)return new Set(r);if("map"===l)return new Map(r);if("string"===l||"boolean"===l||"number"===l)return r.valueOf();if(p=_t[l])return p(r);if("array"!==l&&"object"!==l)return"function"==typeof Object.freeze?function(r){var e,t,n,o,a,u,c,l;for(e=[],o=[],c=Object.create(Mr(r)),e.push(r),o.push(c),t=we(r),l=0;l<t.length;l++)n=t[l],i(a=je(r,n),"value")&&(u=f(r[n])?[]:{},a.value=xt(r[n],u,e,o,-1)),X(c,n,a);return Object.isExtensible(r)||Object.preventExtensions(c),Object.isSealed(r)&&Object.seal(c),Object.isFrozen(r)&&Object.freeze(c),c}(r):{};if(u=de(r),o>0)for(a=l,h=0;h<u.length;h++)v=r[y=u[h]],l=Ur(v),"object"!=typeof v||null===v||"array"!==l&&"object"!==l||yr(v)?"object"===a?(i(s=je(r,y),"value")&&(s.value=xt(v)),X(e,y,s)):e[y]=xt(v):-1===(d=Zr(t,v))?(g=f(v)?new Array(v.length):{},t.push(v),n.push(g),"array"===a?e[y]=xt(v,g,t,n,o):(i(s=je(r,y),"value")&&(s.value=xt(v,g,t,n,o)),X(e,y,s))):e[y]=n[d];else if("array"===l)for(h=0;h<u.length;h++)e[y=u[h]]=r[y];else for(h=0;h<u.length;h++)y=u[h],s=je(r,y),X(e,y,s);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}var Ft={Alabama:"Montgomery",Alaska:"Juneau",Arizona:"Phoenix",Arkansas:"Little Rock",California:"Sacramento",Colorado:"Denver",Connecticut:"Hartford",Delaware:"Dover",Florida:"Tallahassee",Georgia:"Atlanta",Hawaii:"Honolulu",Idaho:"Boise",Illinois:"Springfield",Indiana:"Indianapolis",Iowa:"Des Moines",Kansas:"Topeka",Kentucky:"Frankfort",Louisiana:"Baton Rouge",Maine:"Augusta",Maryland:"Annapolis",Massachusetts:"Boston",Michigan:"Lansing",Minnesota:"Saint Paul",Mississippi:"Jackson",Missouri:"Jefferson City",Montana:"Helena",Nebraska:"Lincoln",Nevada:"Carson City","New Hampshire":"Concord","New Jersey":"Trenton","New Mexico":"Santa Fe","New York":"Albany","North Carolina":"Raleigh","North Dakota":"Bismarck",Ohio:"Columbus",Oklahoma:"Oklahoma City",Oregon:"Salem",Pennsylvania:"Harrisburg","Rhode Island":"Providence","South Carolina":"Columbia","South Dakota":"Pierre",Tennessee:"Nashville",Texas:"Austin",Utah:"Salt Lake City",Vermont:"Montpelier",Virginia:"Richmond",Washington:"Olympia","West Virginia":"Charleston",Wisconsin:"Madison",Wyoming:"Cheyenne"};return function(){return function(r,e){var t;if(arguments.length>1){if(!fr(e))throw new TypeError($("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===e)return r}else e=er;return xt(r,t=f(r)?new Array(r.length):{},[r],[t],e)}(Ft)}}));
//# sourceMappingURL=index.js.map
