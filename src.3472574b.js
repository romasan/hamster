parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eAYL":[function(require,module,exports) {
"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},e=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return r.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.emit=exports.on=exports.debounce=exports.calcAge=exports.pick=exports.render=void 0;var t=function(r,e,t){e||(e=Date.now()),t||(t=0),r(Date.now()-e,++t)&&requestAnimationFrame(function(){return(0,exports.render)(r,e,t)})};exports.render=t;var n=function(e,t){return t.reduce(function(t,n){var o;return r(r({},t),((o={})[n]=e[n],o))},{})};exports.pick=n;var o=function(r){return new Date(Date.now()-r).getUTCFullYear()-1970};exports.calcAge=o;var i=function(r,e,t){return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(t),t=setTimeout(function(){return r.apply(void 0,n)},e||100)}};exports.debounce=i;var a={},c=function(r,t){a[r]=e(e([],a[r]||[],!0),[t],!1)};exports.on=c;var u=function(r,e){var t;null===(t=a[r])||void 0===t||t.forEach(function(r){return r(e)})};exports.emit=u;
},{}],"DhgT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.animatedLink=void 0;var e=require("./helpers"),t=80,n=function(n,r){var a=document.querySelector("#canvas"),c=n.getClientRects()[0],o=document.createElement("div");a.appendChild(o),r&&(localStorage.setItem("link",Date.now()),document.location=n.href),o.classList.add(r?"link-cover-second":"link-cover"),setTimeout(function(){o.remove()},2e3),Object.entries((0,e.pick)(c,["left","top","width","height"])).forEach(function(e){var t=e[0],n=e[1];return o.style[t]="".concat(Math.ceil(Number("top"===t?n+a.scrollTop:n)),"px")});var i=[screen.height,screen.width],s=Math.max.apply(Math,i),l=t,p=Math.ceil(s/l),d=o.style.width,h=o.style.height,u=0,m=0,v=0;(0,e.render)(function(e,t){0===m&&(m=e),(v+=e-m)>1&&(v=0,u+=1);var a=u*l;return o.style.transform="translate(-".concat(a,"px, -").concat(a,"px)"),o.style.width="".concat(parseInt(d)+2*a,"px"),o.style.height="".concat(parseInt(h)+2*a,"px"),!(u>=p-1)||(r||(0,exports.animatedLink)(n,!0),!1)})};exports.animatedLink=n;
},{"./helpers":"eAYL"}],"phOH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.send=void 0;var e=require("./helpers"),n=new WebSocket("wss://node.nbauer.ru:9000"),r=function(e,r){1===n.readyState&&n.send(JSON.stringify({event:e,payload:r}))};exports.send=r;var o=null;n.onopen=function(){o=setInterval(function(){n.send(2)},1e3)},n.onmessage=function(n){var r=n.data;try{var o=JSON.parse(r),t=o.event,s=o.payload;t&&(0,e.emit)(t,s)}catch(a){console.log("Error: parse json",a)}},n.onclose=function(){clearInterval(o)};
},{"./helpers":"eAYL"}],"BYQW":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./helpers"),r=require("./ws"),s={dots:{}};(0,t.on)("init",function(e){var t=e.user,r=e.users;s.user=t,s.users=r}),(0,t.on)("add",function(t){var r;s.users=e(e({},s.users),((r={})[t.id]=t,r))}),(0,t.on)("leave",function(e){delete s.users[e]});var n=function(e){var t=e.clientX,s=e.clientY;(0,r.send)("move",{x:t,y:s})};window.addEventListener("mousemove",n),(0,t.on)("move",function(e){s.users[e.id]=e});var o=document.querySelector("#background");(0,t.render)(function(){return s.users&&(Object.entries(s.users).forEach(function(e){var t=e[0],r=e[1];if(r.id!==s.user.id&&r.position){if(!s.dots[t]){var n=document.createElement("div");n.classList.add("dot"),null==o||o.appendChild(n),s.dots[t]=n}s.dots[t].style.top="".concat(r.position.y,"px"),s.dots[t].style.left="".concat(r.position.x,"px")}}),Object.entries(s.dots).forEach(function(e){var t=e[0],r=e[1];s.users[t]||(r.remove(),delete s.dots[t])})),!0});
},{"./helpers":"eAYL","./ws":"phOH"}],"B6dB":[function(require,module,exports) {
"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./helpers"),t=require("./animatedLink");require("./online");var a=[{name:"fake preload",duration:1500,init:function(){return{pattern:"/—\\|",sleep:500}},render:function(n,e,t){var a=parseInt(String(e.msAtStart%t.sleep*t.pattern.length/t.sleep));n.innerText=t.pattern[a]},finish:function(n,e,t){n.innerText=""}},{name:"type text",duration:2e3,init:function(){var n=(0,e.calcAge)(new Date("06 05 1990"));return{text:"Hello, my name is Roman, I'm ".concat(n," and I'm a programmer"),sleep:600}},render:function(n,e,t){var a=parseInt(String(e.msAtStart%t.sleep*2/t.sleep)),i=t.text.slice(0,t.text.length/100*e.percent);n.innerHTML='\n        <div class="cursor-space">\n          '.concat(i,'<span class="cursor" style="display: ').concat(a?"none":"block",'">|</span>\n        <div>\n      ')},finish:function(n,e){n.innerText=e.text}},{name:"sleep",duration:500},{name:"type menu",duration:4e3,init:function(n,e){var t=[{link:"/projects/",label:"my projects"},{link:"https://www.github.com/romasan",label:"github"},{link:"https://www.linkedin.com/in/roman-bauer",label:"linkedin"}],a="\n        <div>\n          ".concat(t.map(function(n,e){return'\n            <a href="'.concat(n.link,'" data-index="').concat(e,'">[').concat(n.label,"]</a>\n          ")}).join(" "),"\n        </div>\n      "),i=document.createElement("div");i.innerHTML=a;var r=i.innerText;return i.innerText="",null==n||n.appendChild(i),{rawHTML:a,text:r,menu:t,sleep:600,canvas:i}},render:function(n,e,t){var a=parseInt(String(e.msAtStart%t.sleep*2/t.sleep)),i=t.text.slice(0,t.text.length/100*e.percent);t.canvas.innerHTML='\n        <div class="cursor-space">\n          '.concat(i,'<span class="cursor" style="display: ').concat(a?"block":"none",'">|</span>\n        <div>\n      ')},finish:function(n,e){e.canvas.innerHTML=e.rawHTML,e.canvas.querySelectorAll("a[data-index]").forEach(function(n){n.addEventListener("click",function(n){n.preventDefault(),(0,t.animatedLink)(n.target)})})}}],i=function(n,e,t){var a=n-t.startTime;return{msAtStart:a,globalMs:n,globalFrame:e,percent:a/(t.duration/100),endTime:t.endTime,duration:t.duration}},r=function(n,e){e.forEach(function(t,a){var r,l,o;t.payload=null===(r=null==t?void 0:t.init)||void 0===r?void 0:r.call(t,n,t.name,e[a-1]),t.inited=!0;var c=i(t.endTime,0,t);null===(l=null==t?void 0:t.render)||void 0===l||l.call(t,n,c,t.payload,t.name),null===(o=null==t?void 0:t.finish)||void 0===o||o.call(t,n,t.payload,t.name),t.cleared=!0})},l=function(n,t){(0,e.render)(function(e,a){return t.forEach(function(r,l){var o,c,d;if(!(e<r.startTime))if(e<=r.endTime)if(r.inited){var s=i(e,a,r);null===(o=null==r?void 0:r.render)||void 0===o||o.call(r,n,s,r.payload,r.name)}else r.payload=null===(c=null==r?void 0:r.init)||void 0===c?void 0:c.call(r,n,r.name,t[l-1]),r.inited=!0;else r.cleared||(null===(d=null==r?void 0:r.finish)||void 0===d||d.call(r,n,r.payload,r.name),r.cleared=!0)}),!(t[t.length-1].endTime<e)})},o=function(){var e=0,t=a.map(function(t){return n(n({},t),{inited:!1,cleared:!1,startTime:e,endTime:e+=t.duration,payload:null})}),i=document.querySelector("#canvas"),o=Number(localStorage.getItem("link"));o&&Date.now()-o<36e5?r(i,t):l(i,t);var c=document.createElement("a");c.classList.add("pinkDot"),c.href="https://romasan.github.io/www.803c.ru/about/",document.body.appendChild(c)};document.addEventListener("DOMContentLoaded",o);
},{"./helpers":"eAYL","./animatedLink":"DhgT","./online":"BYQW"}]},{},["B6dB"], null)
//# sourceMappingURL=/src.3472574b.js.map