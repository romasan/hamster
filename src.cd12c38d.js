parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eAYL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rotate=void 0;var t=function(t,a,e,r,s){var o=e/2,M=r/2,h=s*Math.PI/180;return{x:t+Math.abs(e)/2-(o*Math.cos(h)-M*Math.sin(h)),y:a+Math.abs(r)/2-(M*Math.cos(h)+o*Math.sin(h))}};exports.rotate=t;
},{}],"ygXt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../helpers"),e=function(){function e(t){this.state={},this.setState(t)}return e.prototype.setState=function(t){var e=t.ctx,i=t.image,h=t.left,o=t.top,s=t.position,a=t.degrees,r=t.width,n=t.height,l=t.size,u=t.scale,d="number"==typeof h&&h||"number"==typeof(null==s?void 0:s.x)&&s.x||this.state.left||0,p="number"==typeof o&&o||"number"==typeof(null==s?void 0:s.y)&&s.y||this.state.top||0,y=i||this.state.image,g=r||(null==l?void 0:l.width)||this.state.width||y.width,f=n||(null==l?void 0:l.height)||this.state.height||y.height;return"number"==typeof u&&(g=(null==y?void 0:y.width)*u,f=(null==y?void 0:y.height)*u),this.state={ctx:e||this.state.ctx,image:i||this.state.image,left:d,top:p,width:g,height:f,degrees:"number"==typeof a?a:this.state.degrees},this},e.prototype.getRect=function(){var e=this.state,i=(e.ctx,e.left),h=e.top,o=e.width,s=e.height,a=e.degrees,r=void 0===a?0:a,n=t.rotate(i,h,o,s,r),l=t.rotate(i,h,-o,s,r),u=t.rotate(i,h,-o,-s,r),d=t.rotate(i,h,o,-s,r),p=Math.min(n.x,l.x,u.x,d.x),y=Math.max(n.x,l.x,u.x,d.x),g=Math.min(n.y,l.y,u.y,d.y),f=Math.max(n.y,l.y,u.y,d.y);return{x:p,y:g,width:y-p,height:f-g,top:g,right:y,bottom:f,left:p}},e.prototype.draw=function(t){var e=t||{},i=e.ctx,h=e.image,o=e.left,s=e.top,a=e.position,r=e.degrees,n=e.width,l=e.height,u=e.size,d=e.scale,p=this.state.ctx||i,y=this.state.image||h,g="number"==typeof o&&o||"number"==typeof(null==a?void 0:a.x)&&a.x||this.state.left||0,f="number"==typeof s&&s||"number"==typeof(null==a?void 0:a.y)&&a.y||this.state.top||0,m=n||(null==u?void 0:u.width)||this.state.width||(null==h?void 0:h.width),x=l||(null==u?void 0:u.height)||this.state.height||(null==h?void 0:h.height);"number"==typeof d&&(m=(null==h?void 0:h.width)*d,x=(null==h?void 0:h.height)*d);var v="number"==typeof r?r:this.state.degrees;return"number"==typeof v?(p.save(),p.translate(g+m/2,f+x/2),p.rotate(v*Math.PI/180),p.drawImage(y,-m/2,-x/2,m,x),p.restore()):p.drawImage(y,g,f,m,x),this},e}();exports.default=e;
},{"../helpers":"eAYL"}],"B6dB":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function s(e){try{c(r.next(e))}catch(t){a(t)}}function i(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,i)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("./Cover")),o=function(e){return new Promise(function(t){var n=new Image;n.src=e,n.onload=function(e){t(e.target)}})},a=function(e,t){t||(t=Date.now()),e(Date.now()-t)&&requestAnimationFrame(function(){return a(e,t)})},s=function(){return e(void 0,void 0,void 0,function(){var e,n,s,i,c,u;return t(this,function(t){switch(t.label){case 0:return e=document.body.offsetWidth,n=document.body.offsetHeight,(s=document.querySelector("canvas")).width=e,s.height=n,i=s.getContext("2d"),[4,Promise.all(["/assets/1.jpg","/assets/2.jpg","/assets/3.jpg","/assets/4.jpg","/assets/5.jpg","/assets/6.jpg","/assets/7.png","/assets/8.jpg","/assets/9.jpg","/assets/10.jpg"].map(o))];case 1:return c=t.sent(),u=c.map(function(t){var o,a=Math.random()*e,s=Math.random()*n;return{x:a,y:s,speed:(.01+.01*Math.random())*(o=Math.random()-.5,Math[o>=0?"ceil":"floor"](o)),vector:{x:.2*Math.random()-.1,y:.2*Math.random()-.1},cover:new r.default({ctx:i,image:t,position:{x:a,y:s},scale:.5})}}),i.font="20px Arial",a(function(t){return i.clearRect(0,0,e,n),u.forEach(function(r){var o=t*r.speed%360,a=(r.x+t*r.vector.x)%e,s=(r.y+t*r.vector.y)%n,i=r.cover.setState({degrees:o,left:a,top:s}).draw().getRect();i.right>e&&i.bottom>n&&r.cover.draw({degrees:o,left:a-e,top:s-n}),i.right>e&&r.cover.draw({degrees:o,left:a-e,top:s}),i.bottom>n&&r.cover.draw({degrees:o,left:a,top:s-n})}),t,!0}),[2]}})})},i=function(){s()};document.addEventListener("DOMContentLoaded",i);
},{"./Cover":"ygXt"}]},{},["B6dB"], null)
//# sourceMappingURL=/src.cd12c38d.js.map