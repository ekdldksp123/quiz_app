(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{1794:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var r=n(1163),o=n(7294),a=n(9045),i=n(7651),u=n(576),c=n(1771);var d,s=(0,c.Z)("div",{target:"ebubdln1"})({name:"11y1sq8",styles:"padding:0;margin:0;width:100% important;height:auto;display:flex;flex-direction:column;justify-content:center"}),l=(0,c.Z)("div",{target:"ebubdln0"})({name:"1kxel9p",styles:"padding:15px;margin-bottom:40px;width:100%;display:inline-block;text-align:center;font-weight:bold;font-size:2.5rem;color:rgba(255,74,86, 1.0);border-top:2px solid rgba(255,74,86, 1.0);border-bottom:2px solid rgba(255,74,86, 1.0)"}),f=n(8278),x=n(3328),h=n(3895),g=n(2595),p=n(5944);x.kL.register(x.qi),x.kL.register(f.Z);var v=function(t){var e=t.time,n=t.category,c=t.level,f=t.right,x=t.wrong,v=function(t){var e=(0,o.useState)(t?"loading":"idle"),n=e[0],r=e[1];return(0,o.useEffect)((function(){if(t){var e=document.querySelector('script[src="'.concat(t,'"]'));if(e)r(e.getAttribute("data-status"));else{(e=document.createElement("script")).src=t,e.async=!0,e.setAttribute("data-status","loading"),document.body.appendChild(e);var n=function(t){e.setAttribute("data-status","load"===t.type?"ready":"error")};e.addEventListener("load",n),e.addEventListener("error",n)}var o=function(t){r("load"===t.type?"ready":"error")};return e.addEventListener("load",o),e.addEventListener("error",o),function(){e&&(e.removeEventListener("load",o),e.removeEventListener("error",o))}}r("idle")}),[t]),n}("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"),y=function(){var t=function(t,e,n,r){return{type:"doughnut",data:{labels:["Correct","Wrong"],datasets:[{backgroundColor:["rgb(54, 162, 235)","rgb(255, 99, 132)"],data:[n,r]}]},options:{title:{display:!0,text:"[ Category ] ".concat((0,g.Jx)(t)," | [ Level ] ").concat((0,g.Jx)(e).toUpperCase())}}}}(n,c,f,x);!function(t){d&&d.destroy();var e=document.getElementById("myChart").getContext("2d");d=new Chart(e,t)}(t)};return(0,o.useEffect)((function(){"ready"===v&&y()}),[v]),(0,p.tZ)(a.im,{children:(0,p.BX)(a.W2,{children:[(0,p.tZ)(u.rU,{onClick:function(){return window.localStorage.removeItem("quizzes"),void r.default.push({pathname:"/quiz_app/"})},children:"Quiz Home"}),(0,p.BX)(i.$l,{css:b,children:[(0,p.tZ)(u.Dx,{children:"Quiz Result"}),(0,p.tZ)(l,{children:e}),(0,p.tZ)(s,{children:(0,p.tZ)("canvas",{id:"myChart",css:m})}),(0,p.tZ)(i.mz,{children:(0,p.BX)(h.vV,{children:[(0,p.tZ)(h.a5,{}),(0,p.tZ)(h.VK,{})]})})]})]})})},m={name:"q4dzvk",styles:"width:100%;height:auto"},b={name:"1ify6jn",styles:"@media (max-width: 1200px){width:70vw;height:65vh;}@media (max-width: 800px){width:80vw;height:60vh;}"},y=n(5617);var w=n(6264),k=n(5893),C=function(){var t,e=(t="count",(0,y.v9)((function(e){return e.timer[t]}))),n=(0,w.Z)(),a=(0,o.useState)(""),i=a[0],u=a[1],c=(0,r.useRouter)().query,d=c.category,s=c.level,l=c.right,f=c.wrong;return(0,o.useEffect)((function(){n.onPause();var t=e;u((0,g.j0)(t)),n.onStop()}),[]),(0,k.jsx)(v,{time:i,category:d,level:s,right:parseInt(l),wrong:parseInt(f)})}},7651:function(t,e,n){"use strict";n.d(e,{u_:function(){return o},$l:function(){return a},fe:function(){return i},mz:function(){return u}});var r=n(1771);var o=(0,r.Z)("div",{target:"e15lb6dh3"})({name:"1xg6x14",styles:"position:relative;margin:0 auto;width:30vw;height:55vh;border-radius:1.5rem;display:flex;flex-direction:column;background-color:#fff;transition:.8s;&:hover{transform:scale(1.01);}box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px"}),a=(0,r.Z)("div",{target:"e15lb6dh2"})({name:"ztxxyf",styles:"position:relative;margin:0 auto;padding-top:20px;width:50vw;height:80vh;border-radius:1.5rem;display:flex;flex-direction:column;background-color:#fff;transition:.8s;&:hover{transform:scale(1.01);}box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px"}),i=(0,r.Z)("div",{target:"e15lb6dh1"})({name:"n8lgux",styles:"position:absolute;padding:2em 2em 2em 2em;top:0;left:0;right:0;height:80%;overflow-y:auto;&::-webkit-scrollbar{display:none;}"}),u=(0,r.Z)("div",{target:"e15lb6dh0"})({name:"51l2f1",styles:"position:absolute;bottom:0;left:0;right:0"})},2595:function(t,e,n){"use strict";n.d(e,{Jx:function(){return o},k$:function(){return a},c:function(){return i},TV:function(){return u},j0:function(){return c}});var r=n(7673),o=function(t){try{return decodeURIComponent(decodeURI(t))}catch(e){return console.log(e,t),(0,r.unescape)(decodeURI(t))}},a=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},i=function(t){return t>9?"".concat(t):"0".concat(t)},u=function(t){return t.sort((function(){return Math.random()-.5}))},c=function(t){var e=function(t){return t<10?"0".concat(t):String(t)},n=t,r=Math.floor(n/3600),o=Math.floor((n-3600*r)/60),a=n-3600*r-60*o;return"".concat(e(r),":").concat(e(o),":").concat(e(a))}},6264:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(5617),o=n(7294),a=n(8473);function i(){var t=(0,r.I0)(),e=(0,o.useCallback)((function(){return t(a.Nw.start())}),[t]),n=(0,o.useCallback)((function(){return t(a.Nw.stop())}),[t]);return{onStart:e,onPause:(0,o.useCallback)((function(){return t(a.Nw.pause())}),[t]),onStop:n}}},6607:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/result",function(){return n(1794)}])}},function(t){t.O(0,[570,470,316,895,666,774,888,179],(function(){return e=6607,t(t.s=e);var e}));var e=t.O();_N_E=e}]);