(this["webpackJsonpbyun-sungwoo-portfolio"]=this["webpackJsonpbyun-sungwoo-portfolio"]||[]).push([[0],{19:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var n=i(4),o=i(6),s=i.n(o),r=i(12),c=i.n(r),a=i(13),l=i(0),u=i(3),d=i(1),h=i(2),j=i(11),b=i.n(j),p=i(7),v=i(22),f=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={color:void 0!==e.color&&null!==e.color?e.color:"#0f1011",action:void 0!==e.action&&null!==e.action?e.action:"flip"},n}return Object(u.a)(i,[{key:"componentDidMount",value:function(){var e=this.state.color,t=this.state.action,i=this.mount.clientWidth,n=this.mount.clientHeight,o=new p.g,s=new p.d(75,i/n,.1,1e3);s.position.z=5;var r=new p.i({antialias:!0});r.setClearColor(this.state.color),r.setSize(i,n),this.mount.appendChild(r.domElement);for(var c=[],a=new p.f,l=new p.h,u=new p.a(1,1,1),d=-20;d<=20;d++)for(var h=void 0,j=void 0,b=-10;b<=10;b++)h=new p.c({color:e}),(j=new p.b(u,h)).position.y=1*b,j.position.x=1*d,j.position.z=-5,c.push(j),o.add(j);var f=new p.e(16777215,1,500);f.position.set(0,0,0),o.add(f),(f=new p.e(16777215,2,500)).position.set(0,0,25),o.add(f),window.addEventListener("mousemove",(function(e){e.preventDefault(),l.x=e.clientX/i*2-1,l.y=-e.clientY/n*2+1,a.setFromCamera(l,s);for(var r=a.intersectObjects(o.children,!0),c=0;c<r.length;c++){var u=new v.b;void 0!==t&&null!==t&&"pull"===t?(u.to(r[c].object.position,1,{z:-4.25,ease:v.a.easeOut}),u.to(r[c].object.position,1,{z:-5,ease:v.a.easeOut})):void 0!==t&&null!==t&&"push"===t?(u.to(r[c].object.position,1,{z:-5.75,ease:v.a.easeOut}),u.to(r[c].object.position,1,{z:-5,ease:v.a.easeOut})):void 0!==t&&null!==t&&"flip-right"===t?(u.to(r[c].object.rotation,1.5,{y:.5*Math.PI,ease:v.a.easeOut}),u.to(r[c].object.rotation,0,{y:0,ease:v.a.easeOut})):(u.to(r[c].object.rotation,1.5,{x:.5*Math.PI,ease:v.a.easeOut}),u.to(r[c].object.rotation,0,{x:0,ease:v.a.easeOut}))}})),window.addEventListener("resize",(function(){s.aspect=i/n,s.updateProjectionMatrix(),r.setSize(i,n)})),function e(){requestAnimationFrame(e),r.render(o,s)}()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{style:{margin:"0",height:"100vh"},ref:function(t){e.mount=t}})}}]),i}(o.Component),w=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).state={sectionsColor:["#0f1011","#0f1011","#0f1011","#0f1011"]},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(n.jsx)(b.a,{scrollingSpeed:1e3,navigation:!0,sectionsColor:this.state.sectionsColor,width:window.innerWidth,height:window.innerHeight,render:function(e){e.state,e.fullpageApi;return Object(n.jsxs)(b.a.Wrapper,{children:[Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)("div",{style:{right:"1em",top:"1em",position:"absolute",color:"#101011",fontSize:"50px"},children:"Push"}),Object(n.jsx)(f,{width:window.innerWidth,action:"push",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)("div",{style:{right:"1em",top:"1em",position:"absolute",color:"#101011",fontSize:"50px"},children:"Flip-Right"}),Object(n.jsx)(f,{action:"flip-right",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)("div",{style:{right:"1em",top:"1em",position:"absolute",color:"#101011",fontSize:"50px"},children:"Pull"}),Object(n.jsx)(f,{action:"pull",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)("div",{style:{right:"1em",top:"1em",position:"absolute",color:"#101011",fontSize:"50px"},children:"Flip-Down"}),Object(n.jsx)(f,{action:"flip",style:{position:"absolute"}})]})})]})}})}}]),i}(o.Component);function O(){var e=s.a.useState({height:window.innerHeight,width:window.innerWidth}),t=Object(a.a)(e,2),i=t[0],o=t[1];return s.a.useEffect((function(){var e=function(e,t){var i,n=arguments,o=this;return function(s){clearTimeout(i),i=setTimeout((function(t){i=null,e.apply(o,n)}),t)}}((function(){o({height:window.innerHeight,width:window.innerWidth})}),1e3);return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}})),Object(n.jsx)(w,{},i.width)}i(19);var m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)("h1",{className:"githubio",align:"center",children:Object(n.jsx)("a",{target:"_blank",rel:"noreferrer",class:"underline",href:"https://github.com/byun-sungwoo",children:"github/byun-sungwoo"})})]})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,23)).then((function(t){var i=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),o(e),s(e),r(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.241ec03e.chunk.js.map