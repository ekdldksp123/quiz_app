(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6229:function(e,t,n){"use strict";function i(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(d){return void n(d)}s.done?t(c):Promise.resolve(c).then(i,r)}n.r(t),n.d(t,{__N_SSG:function(){return q},default:function(){return B}});var r,a=n(7794),o=n.n(a),s=n(1383),c=n(1232);var d=(0,n(917).F4)(r||(r=(0,s.Z)(["\n    0%{background-position:0% 50%}\n    50%{background-position:100% 50%} \n    100%{background-position:0% 50%} \n"]))),u=(0,c.Z)("div",{target:"en8350w9"})("background-size:800% 800%;-webkit-animation:",d," 16s ease infinite;-moz-animation:",d," 16s ease infinite;-o-animation:",d," 16s ease infinite;animation:",d," 16s ease infinite;"),l=(0,c.Z)("div",{target:"en8350w8"})("padding:0;width:100vw;height:100vh;display:flex;justify-content:center;flex-direction:column;box-sizing:border-box;color:#fff;background:linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);background-size:400% 400%;opacity:0.7;animation:",d," 12s ease infinite!important;"),f=(0,c.Z)("div",{target:"en8350w7"})({name:"1uuwes0",styles:"width:100%;display:inline-block;text-align:center;font-family:Helvetica Neue;-webkit-text-stroke:2px rgba(255, 74, 86, 1.0);color:#fff;font-size:2.5rem;font-weight:bold;margin-bottom:30px"}),p=(0,c.Z)("div",{target:"en8350w6"})({name:"vxkfo",styles:"width:100%;display:flex;flex-direction:row;justify-content:space-between;padding-left:8px"}),m=(0,c.Z)("input",{target:"en8350w5"})({name:"z7u6w2",styles:"width:60%;margin-top:8px;text-align:center;font-size:1.625rem;border-radius:8px;border:0 none;outline:0 none"}),h=(0,c.Z)("span",{target:"en8350w4"})({name:"p6qtdd",styles:"cursor:pointer;background:#fff;border-radius:6px;margin-top:3px!important;text-align:center;color:rgba(255, 74, 86, 0.7);font-weight:bold;font-size:1.5em;& .minus{align-self:flex-start!important;}& .plus{align-self:flex-end!important;}"}),g=(0,c.Z)("div",{target:"en8350w3"})({name:"fqukog",styles:"width:100%;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:20px;font-family:Segoe UI"}),b=(0,c.Z)("label",{target:"en8350w2"})({name:"mpbc4i",styles:"position:relative;top:20%;font-weight:bold;font-size:1.35rem;color:rgba(255,74,86, 1.0)"}),w=(0,c.Z)("div",{target:"en8350w1"})({name:"bxz0tu",styles:"border-radius:8px;border:2px solid rgba(255, 74, 86, 0.7);padding-right:8px;width:60%!important;height:50px"}),x=(0,c.Z)("select",{target:"en8350w0"})({name:"9j82q0",styles:"width:100%;height:inherit;background:transparent;border:0 none;outline:0 none;padding-left:10px;z-index:3;font-size:1.3rem;& option{padding:5px 5px 5px 5px;font-size:1.25rem;background:rgba(255, 74, 86, 0.7);color:#fff;}&::-webkit-scrollbar{width:4px;}&::-webkit-scrollbar-track{background-color:rgba(255, 74, 86, 0.7);-webkit-border-radius:10px;border-radius:10px;}&::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#fff;}"}),v=n(7651),y=n(3895),Z=n(7294),k=n(1163),z=n(5944);var _=function(e){var t=e.props,n=t.amount,r=t.categories,a=t.levels,s=t.types,c=(0,Z.useState)(n.count),d=c[0],_=c[1],j=(0,Z.useState)("0"),q=j[0],B=j[1],E=(0,Z.useState)("0"),O=E[0],I=E[1],P=(0,Z.useState)("0"),Q=P[0],T=P[1],F=function(e){e<d&&(alert("\uc120\ud0dd\ud558\uc2e0 \uc8fc\uc81c\uc640 \ub09c\uc774\ub3c4\uc5d0 \uc874\uc7ac\ud558\ub294 \ud034\uc988\uc758 \uc218\ub294 ".concat(e," \uac1c \uc785\ub2c8\ub2e4.")),_(e))},H=function(){var e,t=(e=o().mark((function e(){var t,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://opentdb.com/api.php?amount=".concat(d),"0"!==q&&(t+="&category=".concat(q)),"0"!==O&&(t+="&difficulty=".concat(O)),"0"!==Q&&(t+="&type=".concat(Q)),t+="&encode=url3986",e.next=7,fetch(t);case 7:return n=e.sent,e.next=10,n.json();case 10:i=e.sent,window.localStorage.setItem("quizzes",JSON.stringify(i.results)),window.localStorage.getItem("quizzes"),k.default.push({pathname:"/quiz"});case 14:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),G=function(e){d-1>=1?_(e):alert("\ubb38\uc81c\ub294 1\uac1c \uc774\uc0c1 \ud480\uc5b4\uc8fc\uc138\uc694")};return(0,Z.useEffect)((function(){!function(){var e=r.find((function(e){return e.id===parseInt(q)}));if(e)switch(O){case"0":F(e.total);break;case"easy":F(e.easy);break;case"medium":F(e.medium);break;case"hard":F(e.hard)}}()}),[q,O,d]),(0,z.tZ)(u,{children:(0,z.tZ)(l,{children:(0,z.BX)(v.u_,{css:N,children:[(0,z.BX)(v.fe,{children:[(0,z.tZ)(f,{children:"Hello Quiz"}),(0,z.BX)(g,{children:[(0,z.tZ)(b,{css:S,children:"Number of Quiz"}),(0,z.tZ)(w,{children:(0,z.BX)(p,{children:[(0,z.tZ)(h,{className:"minus",onClick:function(){return G(d-1)},children:"-"}),(0,z.tZ)(m,{css:X,onChange:function(e){return G(parseInt(e.target.value))},type:"number",value:d}),(0,z.tZ)(h,{className:"plus",onClick:function(){return _(d+1)},children:"+"})]})})]}),(0,z.BX)(g,{children:[(0,z.tZ)(b,{css:S,children:"Quiz Category"}),(0,z.tZ)(w,{children:(0,z.tZ)(x,{css:C,onChange:function(e){return B(e.target.selectedOptions[0].value)},children:r.map((function(e,t){return(0,z.tZ)("option",{value:e.id===t?"any":e.id,children:e.name},t)}))})})]}),(0,z.BX)(g,{children:[(0,z.tZ)(b,{css:S,children:"Quiz Level"}),(0,z.tZ)(w,{children:(0,z.tZ)(x,{css:C,onChange:function(e){return I(e.target.selectedOptions[0].value)},children:a.map((function(e,t){return(0,z.tZ)("option",{value:e.id==="".concat(t)?"any":e.id,children:e.name},t)}))})})]}),(0,z.BX)(g,{children:[(0,z.tZ)(b,{css:S,children:"Quiz Type"}),(0,z.tZ)(w,{children:(0,z.tZ)(x,{css:C,onChange:function(e){return T(e.target.selectedOptions[0].value)},children:s.map((function(e,t){return(0,z.tZ)("option",{value:e.id==="".concat(t)?"any":e.id,children:e.name},t)}))})})]})]}),(0,z.tZ)(v.mz,{children:(0,z.tZ)(y.Z7,{children:(0,z.tZ)(y.p0,{onClick:function(){return H()},children:"Start"})})})]})})})},N={name:"feimp3",styles:"@media (max-width: 1200px){width:50vw;}"},S={name:"ofspxt",styles:"@media (max-width: 1200px){font-size:1.25rem;font-size:1.3rem;}"},C={name:"1u9p5l9",styles:"@media (max-width: 1200px){font-size:1.15rem;& option{font-size:1.1rem;}}"},X={name:"16iyuj6",styles:"@media (max-width: 1200px){font-size:1.2rem;margin-top:12px;}"},j=n(5893),q=!0,B=function(e){var t=e.quizProps;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(_,{props:t})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6229)}])}},function(e){e.O(0,[768,884,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);