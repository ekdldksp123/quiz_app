(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6229:function(e,t,n){"use strict";function i(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(i,r)}n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return C}});var r=n(7794),a=n.n(r),o=n(1771);var s=(0,o.Z)("div",{target:"en8350w5"})({name:"vxkfo",styles:"width:100%;display:flex;flex-direction:row;justify-content:space-between;padding-left:8px"}),c=(0,o.Z)("input",{target:"en8350w4"})({name:"z7u6w2",styles:"width:60%;margin-top:8px;text-align:center;font-size:1.625rem;border-radius:8px;border:0 none;outline:0 none"}),u=(0,o.Z)("span",{target:"en8350w3"})({name:"p6qtdd",styles:"cursor:pointer;background:#fff;border-radius:6px;margin-top:3px!important;text-align:center;color:rgba(255, 74, 86, 0.7);font-weight:bold;font-size:1.5em;& .minus{align-self:flex-start!important;}& .plus{align-self:flex-end!important;}"}),d=(0,o.Z)("div",{target:"en8350w2"})({name:"fqukog",styles:"width:100%;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:20px;font-family:Segoe UI"}),l=(0,o.Z)("div",{target:"en8350w1"})({name:"bxz0tu",styles:"border-radius:8px;border:2px solid rgba(255, 74, 86, 0.7);padding-right:8px;width:60%!important;height:50px"}),f=(0,o.Z)("select",{target:"en8350w0"})({name:"9j82q0",styles:"width:100%;height:inherit;background:transparent;border:0 none;outline:0 none;padding-left:10px;z-index:3;font-size:1.3rem;& option{padding:5px 5px 5px 5px;font-size:1.25rem;background:rgba(255, 74, 86, 0.7);color:#fff;}&::-webkit-scrollbar{width:4px;}&::-webkit-scrollbar-track{background-color:rgba(255, 74, 86, 0.7);-webkit-border-radius:10px;border-radius:10px;}&::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#fff;}"}),p=n(576),m=n(9045),h=n(7651),b=n(3895),g=n(7294),x=n(1163),w=n(5944);var v=function(e){var t=e.props,n=t.amount,r=t.categories,o=t.levels,v=t.types,_=(0,g.useState)(n.count),N=_[0],C=_[1],S=(0,g.useState)("0"),X=S[0],j=S[1],q=(0,g.useState)("0"),B=q[0],E=q[1],O=(0,g.useState)("0"),P=O[0],Q=O[1],I=function(e){e<N&&(alert("\uc120\ud0dd\ud558\uc2e0 \uc8fc\uc81c\uc640 \ub09c\uc774\ub3c4\uc5d0 \uc874\uc7ac\ud558\ub294 \ud034\uc988\uc758 \uc218\ub294 ".concat(e," \uac1c \uc785\ub2c8\ub2e4.")),C(e))},T=function(){var e,t=(e=a().mark((function e(){var t,n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://opentdb.com/api.php?amount=".concat(N),"0"!==X&&(t+="&category=".concat(X)),"0"!==B&&(t+="&difficulty=".concat(B)),"0"!==P&&(t+="&type=".concat(P)),t+="&encode=url3986",e.next=7,fetch(t);case 7:return n=e.sent,e.next=10,n.json();case 10:i=e.sent,window.localStorage.setItem("quizzes",JSON.stringify(i.results)),x.default.push({pathname:"/quiz"});case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),D=function(e){N-1>=1?C(e):(alert("\ubb38\uc81c\ub294 1\uac1c \uc774\uc0c1 \ud480\uc5b4\uc8fc\uc138\uc694"),C(1))};return(0,g.useEffect)((function(){!function(){var e=r.find((function(e){return e.id===parseInt(X)}));if(e)switch(B){case"0":I(e.total);break;case"easy":I(e.easy);break;case"medium":I(e.medium);break;case"hard":I(e.hard)}}()}),[X,B,N]),(0,w.tZ)(m.im,{children:(0,w.tZ)(m.W2,{children:(0,w.BX)(h.u_,{css:y,children:[(0,w.BX)(h.fe,{children:[(0,w.tZ)(p.D,{children:"Hello Quiz"}),(0,w.BX)(d,{children:[(0,w.tZ)(p._,{css:k,children:"Number of Quiz"}),(0,w.tZ)(l,{children:(0,w.BX)(s,{children:[(0,w.tZ)(u,{className:"minus",onClick:function(){return D(N-1)},children:"-"}),(0,w.tZ)(c,{css:z,onChange:function(e){return D(parseInt(e.target.value))},type:"number",value:N}),(0,w.tZ)(u,{className:"plus",onClick:function(){return C(N+1)},children:"+"})]})})]}),(0,w.BX)(d,{children:[(0,w.tZ)(p._,{css:k,children:"Quiz Category"}),(0,w.tZ)(l,{children:(0,w.tZ)(f,{css:Z,onChange:function(e){return j(e.target.selectedOptions[0].value)},children:r.map((function(e,t){return(0,w.tZ)("option",{value:e.id===t?"any":e.id,children:e.name},t)}))})})]}),(0,w.BX)(d,{children:[(0,w.tZ)(p._,{css:k,children:"Quiz Level"}),(0,w.tZ)(l,{children:(0,w.tZ)(f,{css:Z,onChange:function(e){return E(e.target.selectedOptions[0].value)},children:o.map((function(e,t){return(0,w.tZ)("option",{value:e.id==="".concat(t)?"any":e.id,children:e.name},t)}))})})]}),(0,w.BX)(d,{children:[(0,w.tZ)(p._,{css:k,children:"Quiz Type"}),(0,w.tZ)(l,{children:(0,w.tZ)(f,{css:Z,onChange:function(e){return Q(e.target.selectedOptions[0].value)},children:v.map((function(e,t){return(0,w.tZ)("option",{value:e.id==="".concat(t)?"any":e.id,children:e.name},t)}))})})]})]}),(0,w.tZ)(h.mz,{children:(0,w.tZ)(b.Z7,{children:(0,w.tZ)(b.p0,{onClick:function(){return T()},children:"Start"})})})]})})})},y={name:"feimp3",styles:"@media (max-width: 1200px){width:50vw;}"},k={name:"ofspxt",styles:"@media (max-width: 1200px){font-size:1.25rem;font-size:1.3rem;}"},Z={name:"1u9p5l9",styles:"@media (max-width: 1200px){font-size:1.15rem;& option{font-size:1.1rem;}}"},z={name:"16iyuj6",styles:"@media (max-width: 1200px){font-size:1.2rem;margin-top:12px;}"},_=n(5893),N=!0,C=function(e){var t=e.quizProps;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(v,{props:t})})}},9045:function(e,t,n){"use strict";n.d(t,{im:function(){return s},W2:function(){return c}});var i,r=n(1383),a=n(1771),o=(0,n(917).F4)(i||(i=(0,r.Z)(["\n    0%{background-position:0% 50%}\n    50%{background-position:100% 50%} \n    100%{background-position:0% 50%} \n"]))),s=(0,a.Z)("div",{target:"e18abc5s1"})("background-size:800% 800%;-webkit-animation:",o," 16s ease infinite;-moz-animation:",o," 16s ease infinite;-o-animation:",o," 16s ease infinite;animation:",o," 16s ease infinite;"),c=(0,a.Z)("div",{target:"e18abc5s0"})("padding:0;width:100vw;height:100vh;display:flex;justify-content:center;flex-direction:column;box-sizing:border-box;color:#fff;background:linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);background-size:400% 400%;opacity:0.7;animation:",o," 12s ease infinite!important;")},576:function(e,t,n){"use strict";n.d(t,{D:function(){return r},_:function(){return a}});var i=n(1771);var r=(0,i.Z)("div",{target:"e15boqrk1"})({name:"1uuwes0",styles:"width:100%;display:inline-block;text-align:center;font-family:Helvetica Neue;-webkit-text-stroke:2px rgba(255, 74, 86, 1.0);color:#fff;font-size:2.5rem;font-weight:bold;margin-bottom:30px"}),a=(0,i.Z)("label",{target:"e15boqrk0"})({name:"mpbc4i",styles:"position:relative;top:20%;font-weight:bold;font-size:1.35rem;color:rgba(255,74,86, 1.0)"})},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6229)}])}},function(e){e.O(0,[614,884,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);