var e,t,r,n,i,a,o,s,c,u,l,p,d,f,h,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},_={},b=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
b("object"==typeof self&&self)||b("object"==typeof g&&g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||_||Function("return this")();var w={},k={};// Detect IE8's incomplete defineProperty implementation
w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var j={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!j.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:j;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},T={},M=Function.prototype,H=M.call,I=S&&M.bind.bind(H,H),q={},F=(T=S?I:function(e){return function(){return H.apply(e,arguments)}})({}.toString),A=T("".slice);q=function(e){return A(F(e),8,-1)};var N=Object,C=T("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
x=k(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?C(e,""):N(e)}:N;var R={},D={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
D=function(e){return null==e};var W=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
R=function(e){if(D(e))throw new W("Can't call method on "+e);return e},P=function(e){return x(R(e))};var B={},G={},U={},z={},Y={},J="object"==typeof document&&document.all,Q=(Y={all:J,IS_HTMLDDA:void 0===J&&void 0!==J}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
z=Y.IS_HTMLDDA?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e};var V=Y.all;U=Y.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:z(e)||e===V}:function(e){return"object"==typeof e?null!==e:z(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=_[e],z(r)?r:void 0):_[e]&&_[e][t]};var Z={};Z=T({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=_.process,ea=_.Deno,eo=ei&&ei.versions||ea&&ea.version,es=eo&&eo.v8;es&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(i=es.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&en&&(!(i=en.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=en.match(/Chrome\/(\d+)/))&&(a=+i[1]),er=a;var ec=_.String;ee=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(et=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ec(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return z(t)&&Z(t.prototype,eu(e))};var el={},ep={},ed={},ef=String;ed=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;// `Assert: IsCallable(argument) is true`
ep=function(e){if(z(e))return e;throw new eh(ed(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
el=function(e,t){var r=e[t];return D(r)?void 0:ep(r)};var ev={},eg=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ev=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!U(n=E(r,e))||z(r=e.valueOf)&&!U(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!U(n=E(r,e)))return n;throw new eg("Can't convert object to primitive value")};var ey={},em={};em=!1;var e_={},eb={},ew=Object.defineProperty;eb=function(e,t){try{ew(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var ek="__core-js_shared__";e_=_[ek]||eb(ek,{}),(ey=function(e,t){return e_[e]||(e_[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.2",mode:em?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},e$=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eS=function(e){return e$(R(e))};var ej=T({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eE=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eL={},eO=0,eP=Math.random(),ex=T(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eO+eP,36)};var eT=_.Symbol,eM=ey("wks"),eH=ee?eT.for||eT:eT&&eT.withoutSetter||eL,eI=TypeError,eq=(eE(eM,e="toPrimitive")||(eM[e]=et&&eE(eT,e)?eT[e]:eH("Symbol."+e)),eM[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
G=function(e,t){if(!U(e)||K(e))return e;var r,n=el(e,eq);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!U(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
B=function(e){var t=G(e,"string");return K(t)?t:t+""};var eF={},eA={},eN=_.document,eC=U(eN)&&U(eN.createElement);eA=function(e){return eC?eN.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eF=!w&&!k(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eR=Object.getOwnPropertyDescriptor;r=w?eR:function(e,t){if(e=P(e),t=B(t),eF)try{return eR(e,t)}catch(e){}if(eE(e,t))return O(!E(n,e,t),e[t])};var eD={},eW={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eW=w&&k(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eG=String,eU=TypeError;// `Assert: Type(argument) is Object`
eB=function(e){if(U(e))return e;throw new eU(eG(e)+" is not an object")};var ez=TypeError,eY=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";o=w?eW?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eJ(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eB(e),t=B(t),eB(r),eF)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=w?function(e,t,r){return o(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e9=eE(e0,"name")&&(!w||w&&e1(e0,"name").configurable),e2={},e3=T(Function.toString);z(e_.inspectSource)||(e_.inspectSource=function(e){return e3(e)}),e2=e_.inspectSource;var e4={},e7={},e8=_.WeakMap;e7=z(e8)&&/native code/.test(String(e8));var e5={},e6=ey("keys");e5=function(e){return e6[e]||(e6[e]=eL(e))};var te={};te={};var tt="Object already initialized",tr=_.TypeError,tn=_.WeakMap;if(e7||e_.state){var ti=e_.state||(e_.state=new tn);/* eslint-disable no-self-assign -- prototype methods protection */ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},c=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var ta=e5("state");te[ta]=!0,s=function(e,t){if(eE(e,ta))throw new tr(tt);return t.facade=e,eD(e,ta,t),t},c=function(e){return eE(e,ta)?e[ta]:{}},u=function(e){return eE(e,ta)}}var to=(e4={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=c(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e4.get,tc=String,tu=Object.defineProperty,tl=T("".slice),tp=T("".replace),td=T([].join),tf=w&&!k(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tp(tc(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e9&&e.name!==t)&&(w?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?w&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=to(e);return eE(n,"source")||(n.source=td(th,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tv(function(){return z(this)&&ts(this).source||e2(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(z(r)&&eZ(r,a,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},ty={},tm={},t_={},tb={},tw={},tk=Math.ceil,tE=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tb=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tw(t)};var tS=Math.max,t$=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t_=function(e,t){var r=tb(e);return r<0?tS(r+t,0):t$(r,t)};var tj={},tL={},tO=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tL=function(e){return e>0?tO(tb(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tj=function(e){return tL(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tP=function(e){return function(t,r,n){var i,a=P(t),o=tj(a),s=t_(n,o);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;o>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=a[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tx={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tP(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tP(!1)}.indexOf,tT=T([].push);tm=function(e,t){var r,n=P(e),i=0,a=[];for(r in n)!eE(te,r)&&eE(n,r)&&tT(a,r);// Don't enum bug & hidden keys
for(;t.length>i;)eE(n,r=t[i++])&&(~tx(a,r)||tT(a,r));return a};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,tM)},p=Object.getOwnPropertySymbols;var tH=T([].concat);// all object keys, includes non-enumerable and symbols
ty=X("Reflect","ownKeys")||function(e){var t=l(eB(e));return p?tH(t,p(e)):t},tg=function(e,t,n){for(var i=ty(t),a=0;a<i.length;a++){var s=i[a];eE(e,s)||n&&eE(n,s)||o(e,s,r(t,s))}};var tI={},tq=/#|\.prototype\./,tF=function(e,t){var r=tN[tA(e)];return r===tR||r!==tC&&(z(t)?k(t):!!t)},tA=tF.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tN=tF.data={},tC=tF.NATIVE="N",tR=tF.POLYFILL="P";tI=tF,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/m=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?_:l?_[c]||eb(c,{}):(_[c]||{}).prototype)for(i in t){// contained in target
if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tI(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tg(o,a)}(e.sham||a&&a.sham)&&eD(o,"sham",!0),eX(n,i,o,e)}};var tD={},tW={},tB=Function.prototype,tG=tB.apply,tU=tB.call;// eslint-disable-next-line es/no-reflect -- safe
tW="object"==typeof Reflect&&Reflect.apply||(S?tU.bind(tG):function(){return tU.apply(tG,arguments)});var tz={},tY={},tJ=(tY=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===q(e))return T(e)})(tY.bind);// optional / simple context binding
tz=function(e,t){return ep(e),void 0===t?e:S?tJ(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=X("document","documentElement");var tV={};tV=T([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};// eslint-disable-next-line redos/no-vulnerable -- safe
tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t0={};t0="process"===q(_.process);var t1=_.setImmediate,t9=_.clearImmediate,t2=_.process,t3=_.Dispatch,t4=_.Function,t7=_.MessageChannel,t8=_.String,t5=0,t6={},re="onreadystatechange";k(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
d=_.location});var rt=function(e){if(eE(t6,e)){var t=t6[e];delete t6[e],t()}},rr=function(e){return function(){rt(e)}},rn=function(e){rt(e.data)},ri=function(e){// old engines have not location.origin
_.postMessage(t8(e),d.protocol+"//"+d.host)};t1&&t9||(t1=function(e){tK(arguments.length,1);var t=z(e)?e:t4(e),r=tV(arguments,1);return t6[++t5]=function(){tW(t,void 0,r)},f(t5),t5},t9=function(e){delete t6[e]},t0?f=function(e){t2.nextTick(rr(e))}:t3&&t3.now?f=function(e){t3.now(rr(e))}:t7&&!tZ?(v=(h=new t7).port2,h.port1.onmessage=rn,f=tz(v.postMessage,v)):_.addEventListener&&z(_.postMessage)&&!_.importScripts&&d&&"file:"!==d.protocol&&!k(ri)?(f=ri,_.addEventListener("message",rn,!1)):f=re in eA("script")?function(e){tQ.appendChild(eA("script"))[re]=function(){tQ.removeChild(this),rt(e)}}:function(e){setTimeout(rr(e),0)});var ra=(tD={set:t1,clear:t9}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
m({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==ra},{clearImmediate:ra});var ro=tD.set,rs={},rc={};/* global Bun -- Deno case */rc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=_.Function,rl=/MSIE .\./.test(en)||rc&&((t=_.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rs=function(e,t){var r=t?2:1;return rl?function(n,i/* , ...arguments */){var a=tK(arguments.length,1)>r,o=z(n)?n:ru(n),s=a?tV(arguments,r):[],c=a?function(){tW(o,this,s)}:o;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rp=_.setImmediate?rs(ro,!1):ro;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
m({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==rp},{setImmediate:rp});// This will contain: Business logic / State / HTTP Library
// Many real world applications have 2 special modules that are completely independent of the rest of the architecture. These are: a module for the project configuration and also a module for some general helper functions that are gonna be useful across the entire project.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this file, we will put all the variables that should be constants and should be reused across the project
// The only variables that we want on this file are the ones that are responsible for defining some important data about the application itself
// An example of that is the API URL. Because it will be resued in multiple places across the project. For example, getting search data and also uploading a recipe to the server
// So since it's used in mulitple places, if we want, someday, to change the URL, we will only change it once (here) and won't have to change it everywhere
// Remember, since all the variables that we will add here are constants, we will name them using upper case
const rd="https://forkify-api.herokuapp.com/api/v2/recipes/",rf="c3daf09d-98e1-41f8-b44f-4bf3cf6ae516",rh=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})};async function rv(e){try{let t=await Promise.race([fetch(e),rh(8)]),r=await t.json();// if timeout wins the race, we will automatically be directed to the catch
if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e;// this will reject and throw another error which we will handle in the model.js
}}function rg(e){return Object.keys(e).forEach(t=>{t.includes("_")&&(e[t.split("_").map((e,t)=>0===t?e:e[0].toLocaleUpperCase()+e.slice(1)).join("")]=e[t],delete e[t])}),e}async function ry(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rh(8)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}}const rm={recipe:{},search:{query:void 0,results:[],page:1,resultsPerPage:10},bookmarks:[]};async function r_(e){try{let t=await rv(`${rd}${e}`);rm.recipe=t.data.recipe,// let's check if there is a recipe in the bookmarks that matches the recipe that we just stored in the state
// so if there is, we'll add the property bookmark to the recipe
rm.bookmarks.some(t=>{t.id===e&&(rm.recipe.bookmarked=!0)})}catch(e){/* console.error(err); */// the reason why we used error handling here too is because when data is gonna get rejected, we won't go to the next line and we will throw the error instead. This way, we won't be getting any other errors in the code like undefined
throw e;// for the renderError to work in the controller
}}async function rb(e){try{let t=await rv(`${rd}?search=${e}&key=${rf}`);rm.search.query=e,t.data.recipes.forEach(e=>{rm.search.results.push(rg(e));// this will push the object after it's modified (camel case) because trnTOcamelCase returns an object
})}catch(e){throw e}}function rw(e=rm.search.page){rm.search.page=e;let t=(e-1)*rm.search.resultsPerPage,r=e*rm.search.resultsPerPage;// 0
return rm.search.results.slice(t,r)}function rk(e){// Add bookmark
rm.bookmarks.push(e),e.id===rm.recipe.id&&(rm.recipe.bookmarked=!0),/* state.recipe.bookmarked = true; */// storage
rE()}////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Local Storage: We'll put it here because it's all about data and modej.js takes care of all our data
// That's why it will be easier to do it now
// We need to store data in two cases. When adding bookmarks and when deleting them (bookmarks are the only thing that needs to be stored right now)
function rE(){// 1: We set an item, we name it and we turn the object that we pass into a string (in our case it's the bookmarks array stored in the state)
localStorage.setItem("bookmarks",JSON.stringify(rm.bookmarks));// 2: We call the function in both addBookmark and deleteBookmark because those are the only places where we need to store data (bookmarks)
// So when we add or remove, we get the new bookmarks array and we store data that it has
}async function rS(e){try{// we want to put the ingredients in an array and each ingredient should be in an object with keys and values
let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{// let's take the second element in the array which contains the ingredients' quantity, unit and description and save them into variables and then turn then store them in a new object
let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format. Please use the correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i};// let's modify the quantity so that if there is quantity, we convert it into a number (because it's a string) and if there is no quantity, we return null
}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await ry(`${rd}?key=${rf}`,r);rg(n.data.recipe),rm.recipe=n.data.recipe,// Let's push the uploaded recipe to the bookmarks
rk(rm.recipe),console.log(rm.recipe)}catch(e){throw e;// we used throw so we'd handle in the controller
}}!// We call it at the beginning when the page loads so we can restore the bookmarks
// Now that we stored the data, we need to take that data in the local storage in order to use it (in order to render the bookmarks view)
function(){// 1: We get the item we stored (bookmarks) and we store it in a variable (remember, it's a string)
let e=localStorage.getItem("bookmarks");// of course, we will only use it if there is an actual data stored, so we will do an if statement
e&&(rm.bookmarks=JSON.parse(e));// JSON.parse only returns the string back to an object
}();/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r$=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new L(a||[]),s=d,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var o=p(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(a,o);if(c){if(c===v)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===d)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=p(e,n,o);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o.method="throw",o.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var _={};u(_,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&n.call(w,o)&&// of the polyfill.
(_=w);var k=m.prototype=g.prototype=Object.create(_);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=p(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,o(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,o,s)})}}(i,a,r,o)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(o,// invocations of the iterator.
o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=r$}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=r$:Function("r","regeneratorRuntime = r")(r$)}// we add here anything related to the view and interactions with users like listening to events
// PS: We listen to events here but we handle them in the controller
// The way we implement this is by using: Publisher-Subscriber pattern (look at the theory pdf)
var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();var rL={};//FRACTY REDUCES THE FRACTION.
function rO(e,t,r,n,i){var a,o,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,p=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&p%c[u]==0?(c[u],l/=c[u],p/=c[u]):u++;return a=p,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rL=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return rO(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,a,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,a));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rO(u,(c-1)*o,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,a,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class rP{/* _data; *///public method render
render(e){this._data=e;let t=this._generateMarkup();// this here refers to the instance we're calling the method for
this._clearParent(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e,t="all"){this._data=e;let r=this._generateMarkup(),n=document.createRange().createContextualFragment(r),i=Array.from(n.querySelectorAll("*")),a=Array.from(this._parentElement.querySelectorAll("*"));// this only returns a string by the way
i.forEach((e,r)=>{let n=a[r];// update add bookmark
if("servings"!==t||e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textContent=e.textContent),!e.isEqualNode(n)&&e.hasAttribute("data-updateto")&&n.setAttribute("data-updateto",e.dataset.updateto),!e.isEqualNode(n)&&e.classList.contains("preview__link")&&(// Remove active class from all links
a.forEach(e=>{e.classList.contains("preview__link--active")&&e.classList.remove("preview__link--active")}),// Add active class to the clicked link
n.classList.add("preview__link--active")),"bookmarks"===t&&n.classList.contains("btn--bookmark")){let e=n.querySelector("use"),t=e.getAttribute("href");if(t.includes("-fill")){let r=t.replace("-fill","");e.setAttribute("href",r)}else e.setAttribute("href",`${t}-fill`)}})}_clearParent(){this._parentElement.innerHTML=""}displaySpinner(){// this function is public so we can call it outside the class
let e=`
    <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/y(rj)}#icon-loader"></use>
      </svg>
    </div>
    `;this._clearParent(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(){this._clearParent();let e=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>We could not find that recipe. Please try another one!</p>
      </div>
    `;this._parentElement.insertAdjacentHTML("afterbegin",e)}}////////////////////////////////////////////////////////////////////////////////////////////////////////////
class rx extends rP{// here we made recipeView the child of the class View and inherited all its methods
_parentElement=document.querySelector(".recipe");/// Handling events
// add HandlerRener is the publisher and the argument is the subscriber
addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateto;n>=1&&e(n);// this condition is added so the number of servings can't be less than 1
})}addHandlerBookmarks(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){// this is private because we only need to use it inside the class
return`
    <figure class="recipe__fig">
        <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
        <span>${this._data.title}</span>
        </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-updateto = "${this._data.servings-1}">
            <svg>
                <use class="subtract" href="${/*@__PURE__*/y(rj)}#icon-minus-circle"></use>
            </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-updateto = "${this._data.servings+1}">
            <svg>
                <use class = "add" href="${/*@__PURE__*/y(rj)}#icon-plus-circle"></use>
            </svg>
            </button>
        </div>
        </div>
        <div class="recipe__user-generated">
        ${this._data.key?`
              <svg>
                <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
              </svg>
            `:""}
        </div>
        <button class="btn--round btn--bookmark">
        <svg>
            <use class="bookmark" href="${/*@__PURE__*/y(rj)}#icon-bookmark"></use>
        </svg>
        </button>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">

        ${this._data.ingredients.map(e=>`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?/*@__PURE__*/y(rL)(e.quantity).toString():""}</div>
            <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
            </div>
        </li>
            `).join("")}

        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
        >
        <span>Directions</span>
        <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
        </svg>
        </a>
    </div>
    `}}var rT// this will be the only thing exported from this file
=new rx;//////////////////////////////////////////////////////////////////////////////////////////////////////////
class rM extends rP{_parentElement=document.querySelector(".search");_searchButton=document.querySelector(".search__btn");// let's get the query
getQuery(){return this._parentElement.querySelector(".search__field").value}// add searchHandler event listener
addSearchHandler(e){this._searchButton.addEventListener("click",function(t){t.preventDefault(),e()})}// let's clear the input after submitting the query
clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rH=new rM;//////////////////////////////////////////////////////////////////////////////////////////////////////////
class rI extends rP{_parentElement=document.querySelector(".results");_data;_generateMarkup(){let e=window.location.hash.slice(1);return this._data.map(t=>`
      <li class="preview">
        <a class="preview__link${t.id===e?" preview__link--active":""}" href="#${t.id}">
          <figure class="preview__fig">
            <img src="${t.imageUrl}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
          </div>
          ${t.key?`
              <div class="preview__user-generated">
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
                </svg>
              </div>
              `:""}
        </a>
      </li>
    `).join("")}}var rq=new rI;//////////////////////////////////////////////////////////////////////////////////////////////////////////
class rF extends rP{_parentElement=document.querySelector(".pagination");_generateMarkup(){// Let's see how many pages we'll have
let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1 and there are other pages
1===this._data.page&&e>1?`
            <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page+1}</span>
                <svg class="search__icon">
                <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
                </svg>
            </button> 
        `:1===this._data.page&&1===e?"":this._data.page===e?`
            <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${/*@__PURE__*/y(rj)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page-1}</span>
            </button>
        `:this._data.page!==e&&1!==this._data.page?`
        <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page-1}</span>
        </button>
        <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
            </svg>
        </button> 
        `:void 0)}addPaginationHandler(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline"),n=+r.dataset.goto;r&&e(n)})}}var rA=new rF;//////////////////////////////////////////////////////////////////////////////////////////////////////////
class rN extends rP{_parentElement=document.querySelector(".bookmarks__list");_data;_generateMarkup(){return(// if there is no bookmarks, add this
0===this._data.length?`
      <div class="message">
        <div>
          <svg>
            <use href="/icons.21bad73c.svg#icon-smile"></use>
          </svg>
        </div>
        <p>
          No bookmarks yet. Find a nice recipe and bookmark it :)
        </p>
      </div>
      `:this._data.map(e=>`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.imageUrl}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
          ${e.key?`
              <div class="preview__user-generated">
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
                </svg>
              </div>
              `:""}
        </a>
      </li>
    `).join(""))}}var rC=new rN;//////////////////////////////////////////////////////////////////////////////////////////////////////////
class rR extends rP{_parentElement=document.querySelector(".upload");_uploadButton=document.querySelector(".upload__button");_addRecipeButton=document.querySelector(".nav__btn--add-recipe");_closeWindow=document.querySelector(".btn--close-modal");_overlay=document.querySelector(".overlay");_addRecipeWindow=document.querySelector(".add-recipe-window");// Let's add a constructor function and use the button handlers there so we leave the controller alone (because the buttons have nothing to do with the controller)
constructor(){// so here when the new instance is created, it autumatically runs these to functions and therefore setup the event listeners. This way, we won't have to call them in the controller, we simply need to import the instance
super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}_addHandlerShowWindow(){this._addRecipeButton.addEventListener("click",this.openHelper.bind(this)// we use bind here so this will refer to the object and not the element in which we used the event listener
)}_addHandlerCloseWindow(){this._closeWindow.addEventListener("click",this.closeHelper.bind(this)),this._overlay.addEventListener("click",this.closeHelper.bind(this))}openHelper(){this._overlay.classList.remove("hidden"),this._addRecipeWindow.classList.remove("hidden")}closeHelper(){this._overlay.classList.add("hidden"),this._addRecipeWindow.classList.add("hidden")}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();// now let's get the data using the API FormData(). Inside it we pass and element that is a form
let r=[...new FormData(this)],n=Object.fromEntries(r);// this here refers to the parentElement of course. We then spread the object it returns into an array
e(n)})}renderError(){this._clearParent();let e=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>Wrong ingredient format. Please use the correct format</p>
      </div>
    `;this._parentElement.insertAdjacentHTML("afterbegin",e)}renderSuccessMessage(){this._clearParent();let e=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>Recipe successfully added</p>
      </div>
    `;this._parentElement.insertAdjacentHTML("afterbegin",e)}}var rD=new rR;///////////////////////////////////////////////////////////////////////////////////////////////////////
async function rW(){try{let e=window.location.hash.slice(1);if(""===e)return;rT.displaySpinner(),rq.update(rw()),//
await r_(e);let t=rm.recipe;if(rg(t),0===Object.keys(t).length)return;rT.render(t),rm.recipe?.bookmarked===!0&&rT.update(rm.recipe,"bookmarks")}catch(e){console.error(e),rT.renderError()}}/////////////////////////////////////////////////////////////////////////////////////////////////////
async function rB(){try{// to reset the value of results to empty array so the next query would only contain the results of that query
rm.search.results=[];let e=rH.getQuery();if(rH.clearInput(),!e)return;// if there is no query (if the user clicks on enter without entering any query)
rq.displaySpinner(),await rb(e);let t=rm.search;/* console.log(searchResult); */if(0===t.results.length)throw error;// if there is no search results for the query, error out
rq.render(rw(1)),rA.render(rm.search)}catch(e){rq.renderError()}}/////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function rG(e){try{// Upload the new recipe data
await rS(e),rT.render(rm.recipe),rT.update(rm.recipe,"bookmarks"),rC.render(rm.bookmarks),window.history.pushState(null,"",`#${rm.recipe.id}`),setTimeout(function(){rD.closeHelper()},2500)}catch(e){console.error(e),rD.renderError()}}//# sourceMappingURL=index.fca4faf6.js.map
rD.addHandlerUpload(rG),rC.render(rm.bookmarks),rT.addHandlerRender(rW),rT.addHandlerServings(/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function(e){rm.recipe.ingredients.forEach(t=>{// formula = oldQuantity * newServings / oldServings
t.quantity=t.quantity*e/rm.recipe.servings}),// Then let's put the new servings in the state
rm.recipe.servings=e,rT.update(rm.recipe,"servings")}),rT.addHandlerBookmarks(/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function(){rm.recipe.bookmarked?function(e){// Delete bookmark from bookmarks
let t=rm.bookmarks.findIndex(t=>t.id===e.id);rm.bookmarks.splice(t,1),rm.recipe.id===e.id&&(rm.recipe.bookmarked=!1),// storage
rE()}(rm.recipe):rk(rm.recipe),rT.update(rm.recipe,"bookmarks"),rC.render(rm.bookmarks)}),rH.addSearchHandler(rB),rA.addPaginationHandler(/* if (module.hot) {
  // this will make it so when we save here, the page content doesn't get deleted
  module.hot.accept();
} *////////////////////////////////////////////////////////////////////////////////////////////////////////
// Control pagination
function(e){rq.render(rw(e)),rA.render(rm.search)});
//# sourceMappingURL=index.fca4faf6.js.map
