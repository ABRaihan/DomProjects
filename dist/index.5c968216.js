function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequire0f25;function o(e){const t=new DocumentFragment;return e?.forEach((e=>t.append(s(e)))),t}function s({name:e,attrs:t,events:n,child:r}){const a=function(e){return e?.match(/<> <\/>/g)?new DocumentFragment:e?document.createElement(e):!!e&&void 0}(e);if(t&&a)for(let e in t)a.setAttribute(e,t[e]);if(n&&function(e,t){for(let n in e)t.addEventListener(n,e[n])}(n,a),"object"!=typeof r)return a?(a.innerHTML=r||"",a):document.createTextNode(r);const i=Array.isArray(r)?o(r):s(r);return a.append(i),a}null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequire0f25=i),i.register("27Lyk",(function(t,n){var r,a;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"9vqfN":"index.5c968216.js","1kecE":"profile.d8fd3752.jpg"}'));var l,c=()=>({name:"button",attrs:{class:"primary__btn"},child:"DOM Projects"});l=new URL(i("27Lyk").resolve("1kecE"),import.meta.url).toString();var d=()=>o([{name:"section",attrs:{class:"home__page"},child:{name:"div",attrs:{class:"container"},child:{name:"div",attrs:{class:"info__wrapper"},child:[{name:"div",attrs:{class:"info__image__wrapper"},child:{name:"img",attrs:{class:"info__image",src:t(l),alt:"A. B. Raihan"}}},{name:"h1",attrs:{class:"info__heading__text"},child:[{child:"I'm A. B. Raihan"},{name:"br"},{name:"span",attrs:{class:"info__heading__split"},child:"Frontend Web Application Developer"}]},{name:"p",attrs:{class:"info__details__text"},child:"Hey, smile first cause now you are going to know about me. My name is A. B. Raihan. I am studying DIU department of CSE and also a frontend web application developer. I lead my life in the simplest way. I like to play with problems. It makes me active and helps me to think differently."},{name:"<> </>",child:c()}]}}}]);var f=()=>[d()];document.getElementById("root").append(...f());
//# sourceMappingURL=index.5c968216.js.map