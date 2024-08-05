parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eAYL":[function(require,module,exports) {
"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},e=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.emit=exports.on=exports.debounce=exports.calcAge=exports.pick=exports.render=void 0;var t=function(r,e,t){e||(e=Date.now()),t||(t=0),r(Date.now()-e,++t)&&requestAnimationFrame(function(){return(0,exports.render)(r,e,t)})};exports.render=t;var n=function(e,t){return t.reduce(function(t,n){var o;return r(r({},t),((o={})[n]=e[n],o))},{})};exports.pick=n;var o=function(r){return new Date(Date.now()-r).getUTCFullYear()-1970};exports.calcAge=o;var i=function(r,e,t){return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(t),t=setTimeout(function(){return r.apply(void 0,n)},e||100)}};exports.debounce=i;var a={},c=function(r,t){a[r]=e(e([],a[r]||[],!0),[t],!1)};exports.on=c;var u=function(r,e){var t;null===(t=a[r])||void 0===t||t.forEach(function(r){return r(e)})};exports.emit=u;
},{}],"DhgT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.animatedLink=void 0;var e=require("./helpers"),t=80,n=function(n,r){var a=document.querySelector("#canvas"),c=n.getClientRects()[0],o=document.createElement("div");a.appendChild(o),r&&(localStorage.setItem("link",Date.now()),document.location=n.href),o.classList.add(r?"link-cover-second":"link-cover"),setTimeout(function(){o.remove()},2e3),Object.entries((0,e.pick)(c,["left","top","width","height"])).forEach(function(e){var t=e[0],n=e[1];return o.style[t]="".concat(Math.ceil(Number("top"===t?n+a.scrollTop:n)),"px")});var i=[screen.height,screen.width],s=Math.max.apply(Math,i),l=t,p=Math.ceil(s/l),d=o.style.width,h=o.style.height,u=0,m=0,v=0;(0,e.render)(function(e,t){0===m&&(m=e),(v+=e-m)>1&&(v=0,u+=1);var a=u*l;return o.style.transform="translate(-".concat(a,"px, -").concat(a,"px)"),o.style.width="".concat(parseInt(d)+2*a,"px"),o.style.height="".concat(parseInt(h)+2*a,"px"),!(u>=p-1)||(r||(0,exports.animatedLink)(n,!0),!1)})};exports.animatedLink=n;
},{"./helpers":"eAYL"}],"phOH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.send=void 0;var e=require("./helpers"),n=new WebSocket("wss://node.nbauer.ru:9000"),r=function(e,r){1===n.readyState&&n.send(JSON.stringify({event:e,payload:r}))};exports.send=r;var o=null;n.onopen=function(){o=setInterval(function(){n.send(2)},1e3)},n.onmessage=function(n){var r=n.data;try{var o=JSON.parse(r),t=o.event,s=o.payload;t&&(0,e.emit)(t,s)}catch(a){console.log("Error: parse json",a)}},n.onclose=function(){clearInterval(o)};
},{"./helpers":"eAYL"}],"BYQW":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./helpers"),r=require("./ws"),s={dots:{}};(0,t.on)("init",function(e){var t=e.user,r=e.users;s.user=t,s.users=r}),(0,t.on)("add",function(t){var r;s.users=e(e({},s.users),((r={})[t.id]=t,r))}),(0,t.on)("leave",function(e){delete s.users[e]});var n=function(e){var t=e.clientX,s=e.clientY;(0,r.send)("move",{x:t,y:s})};window.addEventListener("mousemove",n),(0,t.on)("move",function(e){s.users[e.id]=e});var o=document.querySelector("#background");(0,t.render)(function(){return s.users&&(Object.entries(s.users).forEach(function(e){var t=e[0],r=e[1];if(r.id!==s.user.id&&r.position){if(!s.dots[t]){var n=document.createElement("div");n.classList.add("dot"),null==o||o.appendChild(n),s.dots[t]=n}s.dots[t].style.top="".concat(r.position.y,"px"),s.dots[t].style.left="".concat(r.position.x,"px")}}),Object.entries(s.dots).forEach(function(e){var t=e[0],r=e[1];s.users[t]||(r.remove(),delete s.dots[t])})),!0});
},{"./helpers":"eAYL","./ws":"phOH"}],"B6dB":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var n,e=1,a=arguments.length;e<a;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./helpers"),e=require("./animatedLink");require("./online");var a=[{name:"fake preload",duration:1500,init:function(){return{pattern:"/—\\|",sleep:500}},render:function(t,n,e){var a=parseInt(String(n.msAtStart%e.sleep*e.pattern.length/e.sleep));t.innerText=e.pattern[a]},finish:function(t,n,e){t.innerText=""}},{name:"type text",duration:2e3,init:function(){var t=(0,n.calcAge)(new Date("06/05/1990"));return{text:"Hello, my name is Roman, I'm ".concat(t," and I'm a programmer"),sleep:600}},render:function(t,n,e){var a=parseInt(String(n.msAtStart%e.sleep*2/e.sleep)),i=e.text.slice(0,e.text.length/100*n.percent);t.innerHTML='\n\t\t\t\t<div class="cursor-space">\n\t\t\t\t\t'.concat(i,'<span class="cursor" style="display: ').concat(a?"none":"block",'">|</span>\n\t\t\t\t<div>\n\t\t\t')},finish:function(t,n){t.innerText=n.text}},{name:"sleep",duration:500},{name:"type menu",duration:4e3,init:function(t,n){var e=[{link:"/projects/",label:"my projects"},{link:"https://www.github.com/romasan",label:"github"},{link:"https://www.linkedin.com/in/roman-bauer",label:"linkedin"}],a="\n\t\t\t\t<div>\n\t\t\t\t\t".concat(e.map(function(t,n){return'\n\t\t\t\t\t\t<a href="'.concat(t.link,'" data-index="').concat(n,'">[').concat(t.label,"]</a>\n\t\t\t\t\t")}).join(" "),"\n\t\t\t\t</div>\n\t\t\t"),i=document.createElement("div");i.innerHTML=a;var r=i.innerText;return i.innerText="",null==t||t.appendChild(i),{rawHTML:a,text:r,menu:e,sleep:600,canvas:i}},render:function(t,n,e){var a=parseInt(String(n.msAtStart%e.sleep*2/e.sleep)),i=e.text.slice(0,e.text.length/100*n.percent);e.canvas.innerHTML='\n\t\t\t\t<div class="cursor-space">\n\t\t\t\t\t'.concat(i,'<span class="cursor" style="display: ').concat(a?"block":"none",'">|</span>\n\t\t\t\t<div>\n\t\t\t')},finish:function(t,n){n.canvas.innerHTML=n.rawHTML,n.canvas.querySelectorAll("a[data-index]").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),(0,e.animatedLink)(t.target)})})}}],i=function(t,n,e){var a=t-e.startTime;return{msAtStart:a,globalMs:t,globalFrame:n,percent:a/(e.duration/100),endTime:e.endTime,duration:e.duration}},r=function(t,n){n.forEach(function(e,a){var r,l,o;e.payload=null===(r=null==e?void 0:e.init)||void 0===r?void 0:r.call(e,t,e.name,n[a-1]),e.inited=!0;var c=i(e.endTime,0,e);null===(l=null==e?void 0:e.render)||void 0===l||l.call(e,t,c,e.payload,e.name),null===(o=null==e?void 0:e.finish)||void 0===o||o.call(e,t,e.payload,e.name),e.cleared=!0})},l=function(t,e){(0,n.render)(function(n,a){return e.forEach(function(r,l){var o,c,d;if(!(n<r.startTime))if(n<=r.endTime)if(r.inited){var s=i(n,a,r);null===(o=null==r?void 0:r.render)||void 0===o||o.call(r,t,s,r.payload,r.name)}else r.payload=null===(c=null==r?void 0:r.init)||void 0===c?void 0:c.call(r,t,r.name,e[l-1]),r.inited=!0;else r.cleared||(null===(d=null==r?void 0:r.finish)||void 0===d||d.call(r,t,r.payload,r.name),r.cleared=!0)}),!(e[e.length-1].endTime<n)})},o=function(){var n=0,e=a.map(function(e){return t(t({},e),{inited:!1,cleared:!1,startTime:n,endTime:n+=e.duration,payload:null})}),i=document.querySelector("#canvas"),o=Number(localStorage.getItem("link"));o&&Date.now()-o<36e5?r(i,e):l(i,e);var c=document.createElement("a");c.classList.add("pinkDot"),c.href="https://romasan.github.io/www.803c.ru/about/",document.body.appendChild(c)};document.addEventListener("DOMContentLoaded",o);
},{"./helpers":"eAYL","./animatedLink":"DhgT","./online":"BYQW"}]},{},["B6dB"], null)
//# sourceMappingURL=/src.6627ffd3.js.map