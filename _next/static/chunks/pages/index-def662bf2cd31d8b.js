(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4844:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return X},default:function(){return S}});var i,r=n(1383),a=n(1232);var o=(0,n(917).F4)(i||(i=(0,r.Z)(["\n    0%{background-position:0% 50%}\n    50%{background-position:100% 50%} \n    100%{background-position:0% 50%} \n"]))),s=(0,a.Z)("div",{target:"en8350w9"})("background-size:800% 800%;-webkit-animation:",o," 16s ease infinite;-moz-animation:",o," 16s ease infinite;-o-animation:",o," 16s ease infinite;animation:",o," 16s ease infinite;"),c=(0,a.Z)("div",{target:"en8350w8"})("padding:0;width:100vw;height:100vh;display:flex;justify-content:center;flex-direction:column;box-sizing:border-box;color:#fff;background:linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);background-size:400% 400%;opacity:0.7;animation:",o," 12s ease infinite!important;"),d=(0,a.Z)("div",{target:"en8350w7"})({name:"1uuwes0",styles:"width:100%;display:inline-block;text-align:center;font-family:Helvetica Neue;-webkit-text-stroke:2px rgba(255, 74, 86, 1.0);color:#fff;font-size:2.5rem;font-weight:bold;margin-bottom:30px"}),l=(0,a.Z)("div",{target:"en8350w6"})({name:"vxkfo",styles:"width:100%;display:flex;flex-direction:row;justify-content:space-between;padding-left:8px"}),u=(0,a.Z)("input",{target:"en8350w5"})({name:"z7u6w2",styles:"width:60%;margin-top:8px;text-align:center;font-size:1.625rem;border-radius:8px;border:0 none;outline:0 none"}),f=(0,a.Z)("span",{target:"en8350w4"})({name:"p6qtdd",styles:"cursor:pointer;background:#fff;border-radius:6px;margin-top:3px!important;text-align:center;color:rgba(255, 74, 86, 0.7);font-weight:bold;font-size:1.5em;& .minus{align-self:flex-start!important;}& .plus{align-self:flex-end!important;}"}),p=(0,a.Z)("div",{target:"en8350w3"})({name:"fqukog",styles:"width:100%;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:20px;font-family:Segoe UI"}),m=(0,a.Z)("label",{target:"en8350w2"})({name:"mpbc4i",styles:"position:relative;top:20%;font-weight:bold;font-size:1.35rem;color:rgba(255,74,86, 1.0)"}),h=(0,a.Z)("div",{target:"en8350w1"})({name:"bxz0tu",styles:"border-radius:8px;border:2px solid rgba(255, 74, 86, 0.7);padding-right:8px;width:60%!important;height:50px"}),b=(0,a.Z)("select",{target:"en8350w0"})({name:"9j82q0",styles:"width:100%;height:inherit;background:transparent;border:0 none;outline:0 none;padding-left:10px;z-index:3;font-size:1.3rem;& option{padding:5px 5px 5px 5px;font-size:1.25rem;background:rgba(255, 74, 86, 0.7);color:#fff;}&::-webkit-scrollbar{width:4px;}&::-webkit-scrollbar-track{background-color:rgba(255, 74, 86, 0.7);-webkit-border-radius:10px;border-radius:10px;}&::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#fff;}"}),g=n(7651),x=n(3895),w=n(7294),y=n(1163),Z=n(5944);var k=function(e){var t=e.props,n=t.amount,i=t.categories,r=t.levels,a=t.types,o=(0,w.useState)(n.count),k=o[0],N=o[1],X=(0,w.useState)("0"),S=X[0],j=X[1],B=(0,w.useState)("0"),q=B[0],E=B[1],O=(0,w.useState)("0"),Q=O[0],I=O[1],P=function(e){e<k&&(alert("\uc120\ud0dd\ud558\uc2e0 \uc8fc\uc81c\uc640 \ub09c\uc774\ub3c4\uc5d0 \uc874\uc7ac\ud558\ub294 \ud034\uc988\uc758 \uc218\ub294 ".concat(e," \uac1c \uc785\ub2c8\ub2e4.")),N(e))},T=function(e){k-1>=1?N(e):alert("\ubb38\uc81c\ub294 1\uac1c \uc774\uc0c1 \ud480\uc5b4\uc8fc\uc138\uc694")};return(0,w.useEffect)((function(){!function(){var e=i.find((function(e){return e.id===parseInt(S)}));if(e)switch(q){case"0":P(e.total);break;case"easy":P(e.easy);break;case"medium":P(e.medium);break;case"hard":P(e.hard)}}()}),[S,q,k]),(0,Z.tZ)(s,{children:(0,Z.tZ)(c,{children:(0,Z.BX)(g.u_,{css:v,children:[(0,Z.BX)(g.fe,{children:[(0,Z.tZ)(d,{children:"Hello Quiz"}),(0,Z.BX)(p,{children:[(0,Z.tZ)(m,{css:z,children:"Number of Quiz"}),(0,Z.tZ)(h,{children:(0,Z.BX)(l,{children:[(0,Z.tZ)(f,{className:"minus",onClick:function(){return T(k-1)},children:"-"}),(0,Z.tZ)(u,{css:C,onChange:function(e){return T(parseInt(e.target.value))},type:"number",value:k}),(0,Z.tZ)(f,{className:"plus",onClick:function(){return N(k+1)},children:"+"})]})})]}),(0,Z.BX)(p,{children:[(0,Z.tZ)(m,{css:z,children:"Quiz Category"}),(0,Z.tZ)(h,{children:(0,Z.tZ)(b,{css:_,onChange:function(e){return j(e.target.selectedOptions[0].value)},children:i.map((function(e,t){return(0,Z.tZ)("option",{value:e.id===t?"any":e.id,children:e.name},t)}))})})]}),(0,Z.BX)(p,{children:[(0,Z.tZ)(m,{css:z,children:"Quiz Level"}),(0,Z.tZ)(h,{children:(0,Z.tZ)(b,{css:_,onChange:function(e){return E(e.target.selectedOptions[0].value)},children:r.map((function(e,t){return(0,Z.tZ)("option",{value:e.id==="".concat(t)?"any":e.id,children:e.name},t)}))})})]}),(0,Z.BX)(p,{children:[(0,Z.tZ)(m,{css:z,children:"Quiz Type"}),(0,Z.tZ)(h,{children:(0,Z.tZ)(b,{css:_,onChange:function(e){return I(e.target.selectedOptions[0].value)},children:a.map((function(e,t){return(0,Z.tZ)("option",{value:e.id==="".concat(t)?"any":e.id,children:e.name},t)}))})})]})]}),(0,Z.tZ)(g.mz,{children:(0,Z.tZ)(x.Z7,{children:(0,Z.tZ)(x.p0,{onClick:function(){return function(){var e="https://opentdb.com/api.php?amount=".concat(k);"0"!==S&&(e+="&category=".concat(S)),"0"!==q&&(e+="&difficulty=".concat(q)),"0"!==Q&&(e+="&type=".concat(Q)),e+="&encode=url3986",y.default.push({pathname:"/quiz",query:{url:e}})}()},children:"Start"})})})]})})})},v={name:"feimp3",styles:"@media (max-width: 1200px){width:50vw;}"},z={name:"ofspxt",styles:"@media (max-width: 1200px){font-size:1.25rem;font-size:1.3rem;}"},_={name:"1u9p5l9",styles:"@media (max-width: 1200px){font-size:1.15rem;& option{font-size:1.1rem;}}"},C={name:"16iyuj6",styles:"@media (max-width: 1200px){font-size:1.2rem;margin-top:12px;}"},N=n(5893),X=!0,S=function(e){var t=e.quizProps;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(k,{props:t})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4844)}])}},function(e){e.O(0,[768,884,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);