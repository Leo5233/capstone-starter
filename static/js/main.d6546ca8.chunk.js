(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{28:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(33),i=a.n(n),r=(a(42),a(43),a(10)),l=a(3),o=a(4),d=(a(28),a(0));function j(e){var t=e.width;return Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/alpha-logo.png",alt:"logo",width:t})}var m=function(e){var t=e.photoId,a=e.handleClickArrowMinus,c=e.handleClickArrowPlus,s=e.handleClickBar;return Object(d.jsxs)("div",{className:"slide-show",style:{backgroundImage:"url('https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/cover".concat(t,".png')")},children:[Object(d.jsx)("div",{className:"previous-slide",onClick:a,children:"\u300a"}),Object(d.jsx)("div",{className:"next-slide",onClick:c,children:"\u300b"}),Object(d.jsxs)("div",{className:"slide-bars",onClick:s,children:[Object(d.jsx)("div",{className:"slide-bar","data-id":"1"}),Object(d.jsx)("div",{className:"slide-bar","data-id":"2"}),Object(d.jsx)("div",{className:"slide-bar","data-id":"3"})]})]})},b=function(e){var t=e.type,a=e.label,c=e.value,s=e.placeholder,n=e.onChange;return Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)("label",{className:"input-label",children:a}),Object(d.jsx)("input",{className:"auth-input",type:t||"text",placeholder:s,value:c,onChange:function(e){return n(e.target.value)}})]})},u=function(){var e=Object(l.l)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),s=(a[0],a[1]),n=Object(c.useState)(""),i=Object(o.a)(n,2),r=(i[0],i[1]),u=Object(c.useState)(1),h=Object(o.a)(u,2),g=h[0],p=h[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"entrance-container",children:[Object(d.jsx)("div",{className:"entrance-left-contentbox",children:Object(d.jsxs)("div",{className:"entrance-left-content",children:[Object(d.jsx)(j,{width:"300px"}),Object(d.jsx)(b,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",onChange:function(e){return s(e)}}),Object(d.jsx)(b,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",onChange:function(e){return r(e)}}),Object(d.jsx)("button",{className:"login-btn",onClick:function(){return e("/main")},children:"\u767b\u5165"}),Object(d.jsxs)("h6",{className:"signup-text",children:["\u6c92\u6709\u5e33\u865f\u55ce\uff1f",Object(d.jsx)("a",{href:"/signup",children:"\u8a3b\u518a\u5e33\u865f"})]})]})}),Object(d.jsx)("div",{className:"entrance-right-contentbox",children:Object(d.jsx)(m,{photoId:g,handleClickArrowMinus:function(){g>1&&p(Number(g)-1)},handleClickArrowPlus:function(){var e=document.querySelectorAll(".slide-bar");console.log(e.length),g<e.length&&p(Number(g)+1)},handleClickBar:function(e){p(e.target.dataset.id)}})})]})})},h=(a(45),function(){var e=Object(l.l)(),t=Object(c.useState)(1),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"entrance-container",children:[Object(d.jsx)("div",{className:"entrance-left-contentbox",children:Object(d.jsxs)("div",{className:"entrance-left-content",children:[Object(d.jsx)(j,{width:"300px"}),Object(d.jsx)("h5",{className:"entrance-logo-title",children:"Connecting Stories That Matter"}),Object(d.jsx)("button",{className:"login-btn",onClick:function(){return e("login")},children:"\u4f7f\u7528SPOTIFY\u5e33\u865f\u767b\u5165"}),Object(d.jsxs)("h6",{className:"signup-text",children:["\u6c92\u6709\u5e33\u865f\u55ce\uff1f",Object(d.jsx)("a",{href:"signup",children:"\u8a3b\u518a\u5e33\u865f"})]})]})}),Object(d.jsx)("div",{className:"entrance-right-contentbox",children:Object(d.jsx)(m,{photoId:s,handleClickArrowMinus:function(){s>1&&n(Number(s)-1)},handleClickArrowPlus:function(){var e=document.querySelectorAll(".slide-bar");console.log(e.length),s<e.length&&n(Number(s)+1)},handleClickBar:function(e){n(e.target.dataset.id)}})})]})})}),g=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=(t[0],t[1]),s=Object(c.useState)(""),n=Object(o.a)(s,2),i=(n[0],n[1]),r=Object(c.useState)(""),l=Object(o.a)(r,2),u=(l[0],l[1]),h=Object(c.useState)(""),g=Object(o.a)(h,2),p=(g[0],g[1]),O=Object(c.useState)(1),x=Object(o.a)(O,2),v=x[0],f=x[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"entrance-container",children:[Object(d.jsx)("div",{className:"entrance-left-contentbox",children:Object(d.jsxs)("div",{className:"entrance-left-content",children:[Object(d.jsx)(j,{width:"300px"}),Object(d.jsx)(b,{label:"\u66b1\u7a31",placeholder:"\u8acb\u8f38\u5165\u66b1\u7a31",onChange:function(e){return a(e)}}),Object(d.jsx)(b,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",onChange:function(e){return i(e)}}),Object(d.jsx)(b,{label:"\u4fe1\u7bb1",placeholder:"\u8acb\u8f38\u5165\u4fe1\u7bb1",onChange:function(e){return p(e)}}),Object(d.jsx)(b,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",onChange:function(e){return u(e)}}),Object(d.jsx)("button",{className:"login-btn",children:"\u8a3b\u518a"}),Object(d.jsxs)("h6",{className:"signup-text",children:["\u5df2\u7d93\u6709\u5e33\u865f\u55ce\uff1f",Object(d.jsx)("a",{href:"/login",children:"\u9ede\u6b64\u767b\u5165"})]})]})}),Object(d.jsx)("div",{className:"entrance-right-contentbox",children:Object(d.jsx)(m,{photoId:v,handleClickArrowMinus:function(){v>1&&f(Number(v)-1)},handleClickArrowPlus:function(){var e=document.querySelectorAll(".slide-bar");console.log(e.length),v<e.length&&f(Number(v)+1)},handleClickBar:function(e){f(e.target.dataset.id)}})})]})})},p=a(7),O=a(16),x=a(5),v=a(8),f=function(e){var t=e.id,a=e.src,c=e.title,s=e.onClick,n=e.active,i=e.onClickToggle;return Object(d.jsxs)("div",{className:n?"category active":"category",children:[Object(d.jsxs)("div",{className:"category-item",children:[Object(d.jsx)("img",{src:a,alt:".",className:"category-icon"}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("div",{className:"action-scope",onClick:s,"data-id":t,"data-title":c})]}),Object(d.jsx)("div",{className:"category-item-selection",children:Object(d.jsx)("div",{className:"dot",children:Object(d.jsx)("div",{className:"panel-action-scope",onClick:i,"data-id":t,"data-title":c})})})]})},N=function(e){var t=e.categories,a=e.onClick,c=e.onClickToggle,s=localStorage.getItem("nowCategoryId");return t.map((function(e){return Object(d.jsx)(f,{id:e.id,src:e.src,title:e.title,active:e.id===Number(s),onClick:a,onClickToggle:c},e.id)}))},y=function(e){var t=e.searchResult,a=e.onClick;return t?t.map((function(e){return Object(d.jsxs)("div",{className:"result-card",onClick:a,"data-id":e.id,"data-img":e.images[1].url,"data-title":e.name,"data-name":e.artists[0].name,children:[Object(d.jsx)("img",{src:e.images[1].url,alt:e.name,className:"album-icon"}),Object(d.jsx)("p",{className:"album-name",children:e.name}),Object(d.jsx)("p",{className:"artist-name",children:e.artists[0].name}),Object(d.jsx)("div",{className:"search-select",children:Object(d.jsx)("div",{className:"search-select-action"})})]},e.id)})):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:"no result"})})},S=(a(46),a(23)),C=a.n(S),k=function(){var e=new C.a,t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),m=r[0],b=r[1],u=Object(c.useState)([]),h=Object(o.a)(u,2),g=h[0],f=h[1],S=Object(l.l)();function k(){return w.apply(this,arguments)}function w(){return(w=Object(v.a)(Object(x.a)().mark((function t(){var a,c,s;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="d7ae00490ab7405da79f4c323a438f40",c="a52a6f2d51e444a1976893df33907fd8",s={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(a+":"+c)},body:"grant_type=client_credentials&client_id="+a+"&client_secret="+c},console.log("Trying to get token"),t.next=6,fetch("https://accounts.spotify.com/api/token",s).then((function(e){return e.json()})).then((function(e){return b(e.access_token)}));case 6:console.log(m),e.setAccessToken(m);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(c.useEffect)((function(){k()}),[]);var I=function(){var t=Object(v.a)(Object(x.a)().mark((function t(a){return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(a.target.value),t.next=3,e.search(s,["album","show"],{limit:20}).then((function(e){console.log("search result",e.albums.items),f(e.albums.items)}),(function(e){f([]),k(),console.error(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"entrance-container",children:[Object(d.jsxs)("div",{className:"main-left",children:[Object(d.jsx)(j,{width:"150px"}),Object(d.jsx)("hr",{}),Object(d.jsx)(N,{categories:[{id:1,title:"\u901a\u52e4\u6e05\u55ae",src:"src/assets/commute.png",content:[]},{id:2,title:"\u8b80\u66f8\u6e05\u55ae",src:"src/assets/study.png",content:[]},{id:3,title:"\u7761\u524d\u6e05\u55ae",src:"src/assets/sleep.png",content:[]},{id:4,title:"\u6211\u7684Podcast",src:"src/assets/home.png",content:[]},{id:5,title:"\u5df2\u6536\u85cf",src:"src/assets/heart.png",content:[]}]}),Object(d.jsx)("div",{className:"add-category",children:"+ \xa0\u65b0\u589e\u5206\u985e"})]}),Object(d.jsxs)("div",{className:"main-center",children:[Object(d.jsx)("h2",{children:"\u65e9\u5b89"}),Object(d.jsx)("div",{className:"podcast-panel"})]}),Object(d.jsxs)("div",{className:"main-right",children:[Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)("img",{src:"https://randomuser.me/api/portraits/men/17.jpg",alt:"",className:"avatar"}),Object(d.jsx)("h3",{className:"username",children:"John Don"})]}),Object(d.jsxs)("div",{className:"playitem-panel",children:[Object(d.jsx)("h2",{children:"\u6b63\u5728\u64ad\u653e"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"play-theme",children:[Object(d.jsx)("img",{src:"src/assets/cover2.png",alt:"",className:"thumbnail"}),Object(d.jsx)("div",{className:"theme-text",children:Object(d.jsx)("p",{children:"Starting Your Own Podcast: Tips, Tricks and Advice From Anchor..."})})]}),Object(d.jsxs)("div",{className:"play-text",children:[Object(d.jsx)("p",{className:"play-text-title",children:"Seinobo Sey"}),Object(d.jsx)("p",{className:"play-text-date",children:"2023-04-08.1\u5c0f\u664220\u5206"}),Object(d.jsx)("p",{className:"play-text-detail",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "})]}),Object(d.jsx)("div",{className:"player",children:Object(d.jsxs)("audio",{controls:!0,children:[Object(d.jsx)("source",{src:"https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",type:"audio/mpeg"}),"Your browser does not support the audio element."]})})]})]})]}),Object(d.jsx)("div",{className:"blur-cover "}),Object(d.jsxs)("div",{className:"search-modal search-panel",children:[Object(d.jsxs)("div",{className:"modal-title",children:[Object(d.jsx)("h3",{children:"\u65b0\u589epodcast"}),Object(d.jsx)("div",{onClick:function(){S("/main")},children:"x"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{placeholder:"\u958b\u59cb\u641c\u5c0b",className:"search-input",onChange:I}),Object(d.jsxs)("div",{className:"yes-no",children:[Object(d.jsx)("div",{className:"search-result",children:Object(d.jsx)(y,{searchResult:g,onClick:function(e){var t=document.querySelector(".search-active");t&&t.classList.remove("search-active"),e.target.parentElement.parentElement.classList.toggle("search-active")}})}),Object(d.jsxs)("div",{className:"yes-no-panel",children:[Object(d.jsx)("div",{className:"cancel",onClick:function(){S("/main")},children:"\u53d6\u6d88"}),Object(d.jsx)("div",{className:"yes",onClick:function(){var e=document.querySelector(".result-card.search-active"),t=localStorage.getItem("nowCategoryId"),a=JSON.parse(localStorage.getItem("Categories")).map((function(a){return a.id===Number(t)?Object(O.a)(Object(O.a)({},a),{},{content:[].concat(Object(p.a)(a.content),[{id:e.dataset.id,image:e.dataset.img,artist:e.dataset.name,title:e.dataset.title}])}):a}));localStorage.setItem("Categories",JSON.stringify(a))},children:"\u78ba\u8a8d\u65b0\u589e"})]})]})]})]})},w=(a(47),function(e){var t=e.content,a=e.onClick,c=t.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:e.image,className:"card-img-top",alt:e.title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.title}),Object(d.jsx)("p",{className:"card-text",children:e.artist}),Object(d.jsx)("div",{className:"more-btn","data-id":e.id,"data-url":e.image,onClick:a,children:"\u66f4\u591a"}),Object(d.jsx)("br",{})]})]},e.id)}));return Object(d.jsx)("div",{className:"podcast-panel",children:c})}),I=function(e){e.dummyCategory;var t=e.onClickMore,a=e.onClickPlay,c=e.onClickSubscribe,s=Object(l.l)(),n=localStorage.getItem("nowCategoryId"),i=JSON.parse(localStorage.getItem("Categories")),r={content:[]};if("99"!==n&&(r=i[Number(n)-1]),"99"!==n&&r.content.length>0)return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{content:r.content,onClick:t}),Object(d.jsx)("div",{className:"podcast-panel",children:Object(d.jsxs)("div",{className:"podcast-panel-add",children:[Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/search.png",alt:"",className:"podcast-panel-add-img"}),Object(d.jsx)("p",{children:"\u9ede\u64ca\u4e0b\u65b9\u6309\u9215\u65b0\u589e\uff01"}),Object(d.jsx)("div",{className:"add-btn",onClick:function(){return s("/search")},children:"\u65b0\u589e Album"})]})})]});if("99"!==n&&0===r.content.length)return Object(d.jsx)("div",{className:"podcast-panel",children:Object(d.jsxs)("div",{className:"podcast-panel-add",children:[Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/search.png",alt:"",className:"podcast-panel-add-img"}),Object(d.jsx)("p",{children:"\u60a8\u5c1a\u672a\u52a0\u5165\u4efb\u4f55album\uff0c\u53ef\u4ee5\u9ede\u64ca\u4e0b\u65b9\u6309\u9215\u65b0\u589e\uff01"}),Object(d.jsx)("div",{className:"add-btn",onClick:function(){return s("/search")},children:"\u65b0\u589e Album"})]})});if("99"===n){var o=JSON.parse(localStorage.getItem("subscribed")),j=[];return o&&(j=o.map((function(e){return Object(d.jsxs)("div",{className:"track-card",children:[Object(d.jsx)("img",{src:e.image,alt:"",className:"track-icon"}),Object(d.jsxs)("div",{className:"track-info",children:[Object(d.jsxs)("div",{className:"track-title",children:[e.title,Object(d.jsx)("div",{className:"subscribe-tag subscribed",onClick:c,"data-id":e.id,"data-url":e.audio,"data-name":e.artist,"data-time":e.duration,"data-title":e.title,"data-img":e.image})]}),Object(d.jsx)("div",{className:"track-description",children:e.artist}),Object(d.jsxs)("div",{className:"play-btn-panel",children:[Object(d.jsx)("div",{className:"play-btn","data-url":e.audio,onClick:a,"data-time":e.duration,"data-title":e.title,"data-img":e.image,"data-name":e.artist}),Object(d.jsx)("div",{className:"track-date-duration",children:Math.round(Number(e.duration)/6e4)+" \u5206"+Math.round(Number(e.duration)/1e3)%60+" \u79d2"})]})]})]},e.id)}))),j}},L=function(e){var t=e.nowPlayItemInfo;return Object(d.jsxs)("div",{className:"playitem-panel",children:[Object(d.jsx)("h2",{children:"\u6b63\u5728\u64ad\u653e"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"play-theme",children:[Object(d.jsx)("img",{src:t.image,alt:"",className:"thumbnail"}),Object(d.jsx)("div",{className:"theme-text",children:Object(d.jsx)("p",{children:t.title})})]}),Object(d.jsxs)("div",{className:"play-text",children:[Object(d.jsx)("p",{className:"play-text-title",children:t.artist}),Object(d.jsxs)("p",{className:"play-text-date",children:["2023-04-08.",function(e){var t=Number(e)/1e3;return t>3600?Math.floor(t/3600)+"\u5c0f\u6642"+Math.floor(t/60)%60+"\u5206"+Math.floor(t%60)+"\u79d2":Math.floor(t/60)%60+"\u5206"+Math.floor(t%60)+"\u79d2"}(t.duration)]}),Object(d.jsx)("p",{className:"play-text-detail",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. "})]}),Object(d.jsxs)("div",{className:"player",children:[Object(d.jsxs)("audio",{controls:!0,className:"nowPlayer",children:[Object(d.jsx)("source",{src:"https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",type:"audio/mpeg"}),"Your browser does not support the audio element."]}),Object(d.jsx)("div",{className:"play-btn",onClick:function(e){var t=Object(p.a)(e.target.classList),a=document.querySelector(".nowPlayer");e.target.classList.toggle("play-active"),t.includes("play-active")?a.pause():a.play()}})]})]})},A=a(17),T=a.n(A),P=[{id:1,title:"\u901a\u52e4\u6e05\u55ae",src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/commute.png",content:[]},{id:2,title:"\u8b80\u66f8\u6e05\u55ae",src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/study.png",content:[]},{id:3,title:"\u7761\u524d\u6e05\u55ae",src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/sleep.png",content:[]},{id:4,title:"\u6211\u7684Podcast",src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/home.png",content:[]},{id:99,title:"\u5df2\u6536\u85cf",src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/heart.png",content:[]}];var J=function(){var e=Object(c.useState)(99),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],m=i[1],b=Object(c.useState)(JSON.parse(localStorage.getItem("Categories"))),u=Object(o.a)(b,2),h=u[0],g=u[1],x=Object(c.useState)({title:"Starting Your Own Podcast: Tips, Tricks and Advice From Anchor...",name:"Seinobo Sey",image:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/cover2.png",duration:"4800000"}),v=Object(o.a)(x,2),f=v[0],y=v[1],S=Object(c.useState)(""),C=Object(o.a)(S,2),k=C[0],w=C[1],A=Object(l.l)(),J=JSON.parse(localStorage.getItem("Categories")),q=localStorage.getItem("nowCategoryId");J||localStorage.setItem("Categories",JSON.stringify(P)),q||localStorage.setItem("nowCategoryId",99);var F=function(e){var t=document.querySelector(".blur-cover"),a=document.querySelector(".edit-panel"),c=e.target.className.split("-")[0],s=document.querySelector(".".concat(c,"-modal"));t.classList.toggle("d-none"),a.classList.add("d-none"),s.classList.toggle("d-none")},M=function(){var e=document.querySelector(".blur-cover");document.querySelectorAll(".modal-panel").forEach((function(e){e.classList.add("d-none")})),e.classList.toggle("d-none")},_=function(e){m(e.target.value)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"entrance-container",children:[Object(d.jsxs)("div",{className:"main-left",children:[Object(d.jsx)(j,{width:"150px"}),Object(d.jsx)("hr",{}),Object(d.jsx)(N,{categories:h,onClick:function(e){if("action-scope"===e.target.className){var t=document.querySelector(".category.active");t&&t.classList.remove("active"),e.target.parentElement.parentElement.classList.add("active"),w(e.target.dataset.title),s(Number(e.target.dataset.id)),localStorage.setItem("nowCategoryId",Number(e.target.dataset.id))}},onClickToggle:function(e){if("panel-action-scope"===e.target.className){var t=document.querySelector(".edit-panel");t.classList.toggle("d-none");var a=function(e){for(var t=0,a=0;e;)t+=e.offsetLeft-e.scrollLeft+e.clientLeft,a+=e.offsetTop-e.scrollLeft+e.clientTop,e=e.offsetParent;return{x:t,y:a}}(e.target);t.style.top=a.y+"px",t.style.left=a.x+20+"px",document.querySelector(".category.active").classList.remove("active"),e.target.parentElement.parentElement.parentElement.classList.add("active"),w(e.target.dataset.title),s(Number(e.target.dataset.id)),localStorage.setItem("nowCategoryId",Number(e.target.dataset.id))}}}),Object(d.jsx)("div",{className:"add-category",onClick:F,children:"+ \xa0\u65b0\u589e\u5206\u985e"})]}),Object(d.jsxs)("div",{className:"main-center",children:[Object(d.jsx)("h2",{children:"\u65e9\u5b89"}),Object(d.jsx)(I,{dummyCategory:P,onClickMore:function(e){localStorage.removeItem("albumId"),localStorage.removeItem("albumIcon"),localStorage.setItem("albumId",e.target.dataset.id),localStorage.setItem("albumIcon",e.target.dataset.url),A("/track")},onClickPlay:function(e){var t=document.querySelector(".play-active"),a=document.querySelector(".nowPlayer"),c=e.target.dataset.url;t&&t!==e.target&&t.classList.remove("play-active"),c&&e.target.classList.toggle("play-active"),t&&t!==e.target&&(a.pause(),a.src=c,a.load(),a.play()),t&&t===e.target&&a.pause(),t||(a.src=c,a.load(),a.play()),y({title:e.target.dataset.title,artist:e.target.dataset.name,image:e.target.dataset.img,duration:e.target.dataset.time});var s=document.querySelector(".active");s&&s.classList.remove("active"),e.target.parentElement.parentElement.parentElement.classList.add("active")},onClickSubscribe:function(e){var t=Object(p.a)(e.target.classList),a=JSON.parse(localStorage.getItem("subscribed")),c=[];if(t.includes("subscribed"))c=a.filter((function(t){return t.id!==e.target.dataset.id})),T.a.fire({imageUrl:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/success_remove.png",imageWidth:150,imageHeight:50,imageAlt:"success remove",timer:1e3,position:"bottom-end",showConfirmButton:!1,padding:"0rem",width:250});else{var s={id:e.target.dataset.id,title:e.target.dataset.title,artist:e.target.dataset.name,duration:e.target.dataset.time,audio:e.target.dataset.url,image:e.target.dataset.img};c=a?[].concat(Object(p.a)(a),[s]):[s],T.a.fire({imageUrl:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/success.png",imageWidth:150,imageHeight:50,imageAlt:"success add",timer:1e3,position:"bottom-end",width:250,padding:"0rem",showConfirmButton:!1})}localStorage.setItem("subscribed",JSON.stringify(c)),e.target.classList.toggle("subscribed")}})]}),Object(d.jsxs)("div",{className:"main-right",children:[Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)("img",{src:"https://randomuser.me/api/portraits/men/17.jpg",alt:"",className:"avatar"}),Object(d.jsx)("h3",{className:"username",children:"John Don"})]}),Object(d.jsx)("div",{className:"logout",onClick:function(){localStorage.setItem("nowCategoryId",99),A("/login")},children:"\u767b\u51fa"}),Object(d.jsx)(L,{nowPlayItemInfo:f})]})]}),Object(d.jsxs)("div",{className:"edit-panel d-none",children:[Object(d.jsx)("div",{className:"edit-category",onClick:F,children:"\u7de8\u8f2f\u5206\u985e"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"delete-category",onClick:F,children:"\u522a\u9664\u5206\u985e"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"add-item",onClick:F,children:"\u65b0\u589epodcast"})]}),Object(d.jsx)("div",{className:"blur-cover d-none"}),Object(d.jsxs)("div",{className:"edit-modal modal-panel d-none",children:[Object(d.jsxs)("div",{className:"modal-title",children:[Object(d.jsx)("h3",{children:"\u7de8\u8f2f\u5206\u985e"}),Object(d.jsx)("div",{onClick:M,children:"x"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{placeholder:"\u6211\u7684Podcast",className:"edit-input",onChange:_}),Object(d.jsxs)("div",{className:"yes-no",children:[Object(d.jsx)("div",{className:"cancel",onClick:M,children:"\u53d6\u6d88"}),Object(d.jsx)("div",{className:"yes",onClick:function(){var e=h.map((function(e){return e.id===a?Object(O.a)(Object(O.a)({},e),{},{title:r}):e}));localStorage.setItem("Categories",JSON.stringify(e)),g(e),M()},children:"\u5132\u5b58"})]})]}),Object(d.jsxs)("div",{className:"delete-modal modal-panel d-none",children:[Object(d.jsxs)("div",{className:"modal-title",children:[Object(d.jsx)("h3",{children:"\u522a\u9664\u5206\u985e"}),Object(d.jsx)("div",{onClick:M,children:"x"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{children:['\u662f\u5426\u78ba\u5b9a\u522a\u9664"',k,'"\u5206\u985e\uff1f']}),Object(d.jsxs)("div",{className:"yes-no",children:[Object(d.jsx)("div",{className:"cancel",onClick:M,children:"\u53d6\u6d88"}),Object(d.jsx)("div",{className:"yes",onClick:function(){if(99!==a){var e=h.filter((function(e){return e.id!==a}));localStorage.setItem("Categories",JSON.stringify(e)),g(e),w("\u5df2\u6536\u85cf"),s(99),localStorage.setItem("nowCategoryId",99),M()}else alert("\u6b64\u985e\u5225\u4e0d\u53ef\u522a\u9664")},children:"\u522a\u9664"})]})]}),Object(d.jsxs)("div",{className:"add-modal modal-panel d-none",children:[Object(d.jsxs)("div",{className:"modal-title",children:[Object(d.jsx)("h3",{children:"\u65b0\u589e\u5206\u985e"}),Object(d.jsx)("div",{onClick:M,children:"x"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{placeholder:"\u8acb\u8f38\u5165\u540d\u7a31",className:"edit-input",onChange:_}),Object(d.jsxs)("div",{className:"yes-no",children:[Object(d.jsx)("div",{className:"cancel",onClick:M,children:"\u53d6\u6d88"}),Object(d.jsx)("div",{className:"yes",onClick:function(){var e=[].concat(Object(p.a)(h),[{id:h.length+1,title:r,src:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/home.png",content:[]}]);localStorage.setItem("Categories",JSON.stringify(e)),g(e),M()},children:"\u5132\u5b58"})]})]})]})},q=(a(67),function(){var e=new C.a,t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),m=r[0],b=r[1],u=Object(c.useState)(0),h=Object(o.a)(u,2),g=h[0],O=h[1],x=Object(c.useState)("https://p.scdn.co/mp3-preview/0bfd163c75bc37c20d9e8598a055a4465a4836bd?cid=d7ae00490ab7405da79f4c323a438f40"),v=Object(o.a)(x,2),f=v[0],y=(v[1],Object(l.l)());function S(){var t="d7ae00490ab7405da79f4c323a438f40",a="a52a6f2d51e444a1976893df33907fd8",c={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(t+":"+a)},body:"grant_type=client_credentials&client_id="+t+"&client_secret="+a};console.log("Trying to get token"),fetch("https://accounts.spotify.com/api/token",c).then((function(e){return e.json()})).then((function(e){return n(e.access_token)})),console.log(s),e.setAccessToken(s)}var k=function(e){var t=document.querySelector(".play-active"),a=document.querySelector(".nowPlayer"),c=e.target.dataset.url;t&&t!==e.target&&t.classList.remove("play-active"),c&&e.target.classList.toggle("play-active"),t&&t!==e.target&&(a.pause(),a.src=c,a.load(),a.play()),t&&t===e.target&&a.pause(),t||(a.src=c,a.load(),a.play())},w=function(e){var t=Object(p.a)(e.target.classList),a=JSON.parse(localStorage.getItem("subscribed")),c=[];if(t.includes("subscribed"))c=a.filter((function(t){return t.id!==e.target.dataset.id})),T.a.fire({imageUrl:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/success_remove.png",imageWidth:150,imageHeight:50,imageAlt:"success remove",timer:1e3,position:"bottom-end",showConfirmButton:!1,padding:"0rem",width:250});else{var s={id:e.target.dataset.id,title:e.target.dataset.title,artist:e.target.dataset.name,duration:e.target.dataset.time,audio:e.target.dataset.url,image:e.target.dataset.img};c=a?[].concat(Object(p.a)(a),[s]):[s],T.a.fire({imageUrl:"https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/success.png",imageWidth:150,imageHeight:50,imageAlt:"success add",timer:1e3,position:"bottom-end",width:250,padding:"0rem",showConfirmButton:!1})}localStorage.setItem("subscribed",JSON.stringify(c)),e.target.classList.toggle("subscribed")};return Object(c.useEffect)((function(){S()}),[]),0===g&&function(){var t=localStorage.getItem("albumId"),a=localStorage.getItem("albumIcon"),c=JSON.parse(localStorage.getItem("subscribed")),s=[];c&&(s=c.map((function(e){return e.id}))),e.getAlbumTracks(t,{limit:20}).then((function(e){console.log("search tracks",e.items),O(g+1),b(e.items.map((function(e){return Object(d.jsxs)("div",{className:"track-card",children:[Object(d.jsx)("img",{src:a,alt:"",className:"track-icon"}),Object(d.jsxs)("div",{className:"track-info",children:[Object(d.jsxs)("div",{className:"track-title",children:[e.name,Object(d.jsx)("div",{className:s.includes(e.id)?"subscribe-tag subscribed":"subscribe-tag",onClick:w,"data-id":e.id,"data-url":e.preview_url,"data-name":e.artists[0].name,"data-time":e.duration_ms,"data-title":e.name,"data-img":a})]}),Object(d.jsx)("div",{className:"track-description",children:e.artists[0].name}),Object(d.jsxs)("div",{className:"play-btn-panel",children:[Object(d.jsx)("div",{className:"play-btn",onClick:k,"data-url":e.preview_url}),Object(d.jsx)("div",{className:"track-date-duration",children:Math.round(Number(e.duration_ms)/6e4)+" \u5206"+Math.round(Number(e.duration_ms)/1e3)%60+" \u79d2"})]})]})]},e.id)})))}),(function(e){S(),console.error(e)}))}(),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"entrance-container",children:[Object(d.jsxs)("div",{className:"main-left",children:[Object(d.jsx)(j,{width:"150px"}),Object(d.jsx)("hr",{}),Object(d.jsx)(N,{categories:[{id:1,title:"\u901a\u52e4\u6e05\u55ae",src:"src/assets/commute.png",content:[]},{id:2,title:"\u8b80\u66f8\u6e05\u55ae",src:"src/assets/study.png",content:[]},{id:3,title:"\u7761\u524d\u6e05\u55ae",src:"src/assets/sleep.png",content:[]},{id:4,title:"\u6211\u7684Podcast",src:"src/assets/home.png",content:[]},{id:5,title:"\u5df2\u6536\u85cf",src:"src/assets/heart.png",content:[]}]}),Object(d.jsx)("div",{className:"add-category",children:"+ \xa0\u65b0\u589e\u5206\u985e"})]}),Object(d.jsxs)("div",{className:"main-center",children:[Object(d.jsx)("h2",{children:"\u65e9\u5b89"}),Object(d.jsx)("div",{className:"podcast-panel"})]}),Object(d.jsxs)("div",{className:"main-right",children:[Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)("img",{src:"https://randomuser.me/api/portraits/men/17.jpg",alt:"",className:"avatar"}),Object(d.jsx)("h3",{className:"username",children:"John Don"})]}),Object(d.jsxs)("div",{className:"playitem-panel",children:[Object(d.jsx)("h2",{children:"\u6b63\u5728\u64ad\u653e"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"play-theme",children:[Object(d.jsx)("img",{src:"src/assets/cover2.png",alt:"",className:"thumbnail"}),Object(d.jsx)("div",{className:"theme-text",children:Object(d.jsx)("p",{children:"Starting Your Own Podcast: Tips, Tricks and Advice From Anchor..."})})]}),Object(d.jsxs)("div",{className:"play-text",children:[Object(d.jsx)("p",{className:"play-text-title",children:"Seinobo Sey"}),Object(d.jsx)("p",{className:"play-text-date",children:"2023-04-08.1\u5c0f\u664220\u5206"}),Object(d.jsx)("p",{className:"play-text-detail",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. "})]}),Object(d.jsx)("div",{className:"player",children:Object(d.jsxs)("audio",{controls:!0,className:"nowPlayer",children:[Object(d.jsx)("source",{src:f,type:"audio/mpeg"}),"Your browser does not support the audio element."]})})]})]})]}),Object(d.jsx)("div",{className:"blur-cover "}),Object(d.jsxs)("div",{className:"track-modal search-panel",children:[Object(d.jsxs)("div",{className:"modal-title",children:[Object(d.jsx)("h3",{children:"\u66f2\u76ee"}),Object(d.jsx)("div",{onClick:function(){y("/main")},children:"x"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"tracks-container",children:m})]})]})});var F=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"login",element:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{path:"signup",element:Object(d.jsx)(g,{})}),Object(d.jsx)(l.a,{path:"entrance",element:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"main",element:Object(d.jsx)(J,{})}),Object(d.jsx)(l.a,{path:"search",element:Object(d.jsx)(k,{})}),Object(d.jsx)(l.a,{path:"track",element:Object(d.jsx)(q,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(h,{})})]})})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(F,{})})),M()}},[[68,1,2]]]);
//# sourceMappingURL=main.d6546ca8.chunk.js.map