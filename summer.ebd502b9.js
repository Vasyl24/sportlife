function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"hzx9p":"summer.ebd502b9.js","kqMTO":"icon.4fbd1004.svg","b0PBw":"summer.3b3fdbaf.css","kueZ4":"summer.d8171f15.js"}'));var i=o("9ZsJm"),a={};a=function e(t,n,r){function s(i,a){if(!n[i]){if(!t[i]){var c=void 0;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};t[i][0].call(d.exports,(function(e){return s(t[i][1][e]||e)}),d,d.exports,e,t,n,r)}return n[i].exports}for(var o=void 0,i=0;i<r.length;i++)s(r[i]);return s}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},s=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var i=s(o,"IMG"),a=s(o,"VIDEO"),c=s(o,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:i};return a}},{}]},{},[1])(1);var c;function l(e){const n=a.create(`<div class="card-modal">\n    <img src="${e.img}" alt="${e.name}" class="card-modal-img"/>\n    <div class='card-modal-details'>\n        <h2 class="card-modal-title">${e.name}</h2>\n        <h3 class="card-modal-price">${e.price} грн.</h3>\n        <p class="card-modal-text">Якщо є якісь питання, дзвоніть або пишіть😉:</p>\n        <ul class='icon-card-modal-list'>\n        <li>\n            <a href="tel:+11(000)111-11-11" class="auth-nav-link link">+11 (000) 111-11-11</a>\n        </li>\n        <li>\n        <a href="https://www.instagram.com/skylifeprokat/" target="_blank">\n        <svg class='icon-card-modal'><use href="${t(c)}#icon-instagram"></use></svg>\n        </a>\n        </li>\n        <li>\n            <a href="https://t.me/skylifeprokat2012" target="_blank">\n            <svg class='icon-card-modal'><use href="${t(c)}#icon-telegram"></use></svg>\n            </a>\n        </li>\n        </ul>\n    </div>\n    <button class='card-modal-btn js-add' id='js-card-modal-btn'></button>\n    <p class='card-modal-buy'>Вітаємо! Ви додали товар у кошик. Щоб видалити, натисніть кнопку “Видалити з кошику”.</p>\n    <button class='card-modal-close' id='js-card-modal-btn-close'>\n    <svg class='icon-card-modal-close'><use href='${t(c)}#icon-closeCross'></use></svg>\n    </button>\n    </div>`,{handler:null,onShow(e){this.handler=d.bind(e),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}});n.show(),document.addEventListener("click",(e=>{e.target.closest("#js-card-modal-btn-close")&&n.close()}))}function d(e){"Escape"===e.code&&this.close()}c=new URL(o("kyEFX").resolve("kqMTO"),import.meta.url).toString();i=o("9ZsJm");const{men:u,women:m,children:f}=i.bikes,b=[];var h;const v=null!==(h=JSON.parse(localStorage.getItem("products")))&&void 0!==h?h:[];document.querySelector(".js-bikes-list").addEventListener("click",(function(e){const t=e.target;var n;const r=null!==(n=e.target.dataset.id)&&void 0!==n?n:e.target.closest(".js-card").dataset.id,s=(o=Number(r),b.find((({id:e})=>e===o)));var o;t.classList.contains("js-target")&&l(s);const i=document.querySelector("#js-card-modal-btn"),a=document.querySelector(".card-modal-buy"),c=v.some((({id:e})=>e===Number(r)));a.style.display="none",c?(i.addEventListener("click",d),i.classList.remove("js-add"),i.classList.add("js-remove"),a.style.display="block"):(i.addEventListener("click",d),i.classList.add("js-add"),i.classList.remove("js-remove"),a.style.display="none");function d(e){const t=e.target.classList.contains("js-add"),n=v.some((({id:e})=>e===Number(r)));if(t){if(e.target.classList.remove("js-add"),e.target.classList.add("js-remove"),a.style.display="block",n)return;v.push(s),localStorage.setItem("products",JSON.stringify(v))}else e.target.classList.remove("js-remove"),e.target.classList.add("js-add"),a.style.display="none",v.map((e=>{e.id===Number(r)&&(v.splice(v.indexOf(e),1),localStorage.setItem("products",JSON.stringify(v)))}))}})),u.map((e=>b.push(e))),m.map((e=>b.push(e))),f.map((e=>b.push(e)));const{men:p,women:g,children:y}=i.bikes,w=[];p.map((e=>w.push(e))),g.map((e=>w.push(e))),y.map((e=>w.push(e)));const L=document.querySelector(".js-bikes-list");!function(e,t){let n;e.length&&(n=e.map((({id:e,img:t,name:n,price:r})=>`<li data-id="${e}" class="bike-item js-card js-bike-item-summer bike-des js-target">\n            <div>\n                <img src="${t}" alt="${n}" width="296" height="175" class="js-target"/>\n                <h2 class="bike-name js-target">${n}</h2>\n            </div>\n            <h3 class="bike-price js-target">${r} ₴</h3>\n      </li>`)).join("")),t.innerHTML=n}(w,L);
//# sourceMappingURL=summer.ebd502b9.js.map
