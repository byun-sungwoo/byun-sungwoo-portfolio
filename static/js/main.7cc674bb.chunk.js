(this["webpackJsonpbyun-sungwoo-portfolio"]=this["webpackJsonpbyun-sungwoo-portfolio"]||[]).push([[0],{15:function(e,t,i){},17:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(2),a=i.n(s),o=i(19),c=i.n(o),r=i(1),d=i(5),l=i(3),j=i(4),h=i(9),b=i(25),u=i.n(b),O=i(10),x=i(61),f=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={color:void 0!==e.color&&null!==e.color?e.color:"#0f1011",colorStart:void 0!==e.colorStart&&null!==e.colorStart?m(e.colorStart):"15,16,17",colorEnd:void 0!==e.colorEnd&&null!==e.colorEnd?m(e.colorEnd):"15,16,17",action:void 0!==e.action&&null!==e.action?e.action:"flip"},n}return Object(d.a)(i,[{key:"componentDidMount",value:function(){var e=this.state.action,t=this.mount.clientWidth,i=this.mount.clientHeight,n=new O.g,s=new O.d(75,t/i,.1,1e3);s.position.z=5;var a=new O.i({antialias:!0});a.setClearColor(this.state.color),a.setSize(t,i),this.mount.appendChild(a.domElement);for(var o=[],c=new O.f,r=new O.h,d=new O.a(1.1,1,1),l=-20;l<=20;l++)for(var j=void 0,h=void 0,b=g("rgb(".concat(this.state.colorStart,")"),"rgb(".concat(this.state.colorEnd,")"),15),u=-7;u<=7;u++)j=new O.c({color:b[14-(7+u)]}),(h=new O.b(d,j)).position.y=1*u,h.position.x=1*l,h.position.z=-5,o.push(h),n.add(h);var f=new O.e(16777215,1,100);(f=new O.e(16777215,1.5,100)).position.set(0,0,25),n.add(f),window.addEventListener("mousemove",(function(a){a.preventDefault(),r.x=a.clientX/t*2-1,r.y=-a.clientY/i*2+1,c.setFromCamera(r,s);for(var o=c.intersectObjects(n.children,!0),d=0;d<o.length;d++){var l=new x.b;if(void 0!==e&&null!==e&&"pull"===e)l.to(o[d].object.position,1,{z:-4.5,ease:x.a.easeOut}),l.to(o[d].object.position,1,{z:-5,ease:x.a.easeOut});else if(void 0!==e&&null!==e&&"push"===e)l.to(o[d].object.position,1,{z:-5.5,ease:x.a.easeOut}),l.to(o[d].object.position,1,{z:-5,ease:x.a.easeOut});else if(void 0!==e&&null!==e&&"flip-right"===e)l.to(o[d].object.rotation,1.5,{y:.5*Math.PI,ease:x.a.easeOut}),l.to(o[d].object.rotation,0,{y:0,ease:x.a.easeOut});else if(void 0!==e&&null!==e&&"random"===e)switch(Math.floor(4*Math.random())){case 0:l.to(o[d].object.rotation,1.5,{y:.5*Math.PI,ease:x.a.easeOut}),l.to(o[d].object.rotation,0,{y:0,ease:x.a.easeOut});break;case 1:l.to(o[d].object.rotation,1.5,{y:.5*-Math.PI,ease:x.a.easeOut}),l.to(o[d].object.rotation,0,{y:0,ease:x.a.easeOut});break;case 2:l.to(o[d].object.rotation,1.5,{x:.5*Math.PI,ease:x.a.easeOut}),l.to(o[d].object.rotation,0,{x:0,ease:x.a.easeOut});break;default:l.to(o[d].object.rotation,1.5,{x:.5*-Math.PI,ease:x.a.easeOut}),l.to(o[d].object.rotation,0,{x:0,ease:x.a.easeOut})}else l.to(o[d].object.rotation,1.5,{x:.5*Math.PI,ease:x.a.easeOut}),l.to(o[d].object.rotation,0,{x:0,ease:x.a.easeOut})}})),window.addEventListener("resize",(function(){s.aspect=t/i,s.updateProjectionMatrix(),a.setSize(t,i)})),function e(){requestAnimationFrame(e),a.render(n,s)}()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{style:{overflow:"hidden",margin:"0",height:"100vh"},ref:function(t){e.mount=t}})}}]),i}(s.Component);function m(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function v(e,t,i){arguments.length<3&&(i=.5);for(var n=e.slice(),s=0;s<3;s++)n[s]=Math.round(n[s]+i*(t[s]-e[s]));return n}function g(e,t,i){var n=1/(i-1),s=[];e=e.match(/\d+/g).map(Number),t=t.match(/\d+/g).map(Number);for(var a=0;a<i;a++){var o=v(e,t,n*a),c=o[0],r=o[1],d=o[2];s.push("#"+((1<<24)+(c<<16)+(r<<8)+d).toString(16).slice(1))}return s}var p=i(12),y=i.p+"static/media/intro.e96bfce5.png",w=(i(15),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={image1Loaded:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(p.a)(n)),n}return Object(d.a)(i,[{key:"handleImageLoaded",value:function(){this.setState({image1Loaded:!0})}},{key:"render",value:function(){var e=this,t=function(){return Object(n.jsx)("img",{className:"mountain",alt:"mountain",onLoad:e.handleImageLoaded,style:{position:"absolute",objectFit:"cover",width:"100%",top:"0"},src:y})};return this.state.image1Loaded?Object(n.jsxs)("div",{style:{position:"absolute",width:"100%",height:"100%",overflow:"hidden"},children:[t(),Object(n.jsxs)("div",{style:{color:"white",position:"absolute"},children:[Object(n.jsx)("div",{style:{marginLeft:"5vh",marginTop:"55vh",fontSize:"8vh",fontFamily:"sans-serif",fontWeight:"bold",zIndex:"100000"},children:Object(n.jsxs)("div",{className:"introText",children:["Hi,",Object(n.jsx)("br",{}),"I'm Daniel Byun",Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{textAlign:"right",fontSize:".5em"},children:"software engineer"}),Object(n.jsx)("br",{})]})}),Object(n.jsxs)("div",{style:{marginLeft:"5vh",marginTop:"-6vh"},children:[Object(n.jsx)("button",{className:"navButton",onClick:function(){return e.props.moveTo(2)},children:"ABOUT ME"}),Object(n.jsx)("button",{className:"navButton",onClick:function(){return e.props.moveTo(4)},children:"PROJECTS"})]})]})]}):Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:t()})]})}}]),i}(s.Component)),k=i(14),S=i.n(k),N=i.p+"static/media/img1.857c3ed1.png",C=i.p+"static/media/about.457bcb29.png",L=(i(17),function(){Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]);var e=a.a.useState(!1),t=Object(h.a)(e,2),i=t[0],o=t[1],c=a.a.useCallback((function(){return o(!0)}),[]),r=a.a.useState(!1),d=Object(h.a)(r,2),l=d[0],j=d[1],b=a.a.useCallback((function(){return j(!0)}),[]),u=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:c,style:{marginLeft:"1vw",height:"35vh",borderRadius:"50%"},src:N})},O=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:b,style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:C})};if(!i||!l)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:u()}),Object(n.jsx)("div",{hidden:!0,children:O()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[O(),Object(n.jsxs)("div",{style:{marginLeft:"2.25em",marginTop:"5%"},children:[Object(n.jsx)("div",{"data-aos":"fade-right","data-aos-easing":"ease-out","data-aos-duration":"1000",style:{marginTop:"2.25em",position:"absolute"},children:u()}),Object(n.jsxs)("div",{style:{marginLeft:"20vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:[Object(n.jsxs)("div",{"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["About Me",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{opacity:".9",marginLeft:"4vw",marginTop:"2em",fontSize:"0.25em",fontWeight:"bold",lineHeight:"1.5em"},children:[Object(n.jsx)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:"Major GPA: 3.68 | Cumulative GPA: 3.54"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1300,children:["Senior at Indiana University Bloomington pursuing a B.S. in Computer Science.",Object(n.jsx)("br",{}),"Specializing in Software Engineering and graduating in May 2021."]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1e3,children:"Passionate about coding, designing, and learning more efficient ways to solve problems."}),Object(n.jsx)("br",{})]})]})]}),Object(n.jsx)("div",{style:{width:"100%",position:"absolute",marginTop:"1em",fontSize:"8vh"},children:Object(n.jsx)("div",{style:{fontSize:".5em"},children:Object(n.jsxs)("table",{style:{opacity:".9",marginLeft:"auto",marginRight:"auto"},"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:[Object(n.jsx)("thead",{style:{margin:"1em",fontWeight:"bold"},children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Languages"}),Object(n.jsx)("th",{children:"Frameworks"}),Object(n.jsx)("th",{children:"Databases"})]})}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Java"}),"  ",Object(n.jsx)("td",{children:"React"}),"  ",Object(n.jsx)("td",{children:"PostgreSQL"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"JavaScript"})," ",Object(n.jsx)("td",{children:"Spring"}),"  ",Object(n.jsx)("td",{children:"MySQL"}),"  "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Ruby"}),"  ",Object(n.jsx)("td",{children:"Rails"}),"  ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"C"}),"   ",Object(n.jsx)("td",{children:"ASP.NET"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Python"}),"  ",Object(n.jsx)("td",{id:"noCursor"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"C#"}),"   ",Object(n.jsx)("td",{id:"noCursor"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"C++"}),"  ",Object(n.jsx)("td",{id:"noCursor"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]})]})})})]})}),I=i.p+"static/media/experience.c21d6729.png",T=(i(37),function(){Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]);var e=a.a.useState(!1),t=Object(h.a)(e,2),i=t[0],o=t[1],c=a.a.useCallback((function(){return o(!0)}),[]),r=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:c,style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:I})};if(!i)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:r()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[r(),Object(n.jsx)("div",{style:{marginLeft:"2.25em",marginTop:"10vh"},children:Object(n.jsxs)("div",{style:{marginLeft:"10vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:[Object(n.jsxs)("div",{"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["Experience",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{opacity:".9",marginLeft:"0vw",marginTop:"2em",fontSize:"0.25em",fontWeight:"bold",lineHeight:"1.5em"},children:[Object(n.jsxs)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:["Aug 2019 - Present",Object(n.jsx)("br",{}),"Undergraduate Instructor at Indiana University Bloomington",Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Lead groups of students during labs and provide assistance with assignments/projects."}),Object(n.jsx)("li",{children:"Evaluate and grade students\u2019 assignments and provide 1:1 feedback during office hours."}),Object(n.jsx)("li",{children:"Cover lectures in absence of professor."})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{marginLeft:"2vh"},children:Object(n.jsxs)("div",{className:"timeline",children:[Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1200,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Aug 2019 \u2013 Dec 2019 | Software Systems"}),Object(n.jsxs)("div",{className:"text",children:[">"," Operating system interfaces and modern object-oriented programming using Java."]})]})]}),Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1400,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Jan 2020 \u2013 May 2020 | Software Systems Honors"}),Object(n.jsxs)("div",{className:"text",children:[">"," Operating system interfaces and modern object-oriented programming using Java."]})]})]}),Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Jan 2020 - May 2020 | Mastering the World Wide Web"}),Object(n.jsxs)("div",{className:"text",children:[">"," Maintain a fully functional website primarily using HTML, Perl, Apache, and MySQL."]})]})]}),Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1800,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Aug 2020 \u2013 Present | Software Systems"}),Object(n.jsxs)("div",{className:"text",children:[">"," Operating system interfaces and modern object-oriented programming using Java."]})]})]})]})})]})]})})]})}),z=i(26),P=i.p+"static/media/contact.cc0cdea6.png",E=i(62),A=i(27),D=i.n(A);i(38);function M(e){return Object(n.jsx)(E.a,Object(z.a)(Object(z.a)({},e),{},{children:Object(n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}var F=function(e,t,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return Object(n.jsx)("h1",{className:"hoverAnimation".concat(i),align:"center",children:s?Object(n.jsxs)("a",{rel:"noreferrer",className:"underline",children:[e,Object(n.jsx)(D.a,{id:"underlineIcon"})]}):Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:t,children:[e,Object(n.jsx)(D.a,{id:"underlineIcon"})]})})},R=function(e){var t=function(){return Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",bottom:"0"},onClick:function(){return e.moveTo(5)},children:F("contact","",2)})};Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]);var i=a.a.useState(!1),o=Object(h.a)(i,2),c=o[0],r=o[1],d=a.a.useCallback((function(){return r(!0)}),[]),l=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:d,style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:P})};if(!c)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",top:"2em",right:"2em"},children:Object(n.jsx)("div",{className:"homeIcon",onClick:function(){return e.moveTo(1)},children:Object(n.jsx)(M,{className:"iconImage",style:{color:"white",fontSize:"4vh",padding:"1vh"}})})}),Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:l()}),Object(n.jsx)("div",{style:{position:"absolute",left:"0",margin:"0",height:"100vh",overflow:"hidden"},children:t()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[l(),Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",top:"2em",right:"2em"},children:Object(n.jsx)("div",{className:"homeIcon",onClick:function(){return e.moveTo(1)},children:Object(n.jsx)(M,{className:"iconImage",style:{color:"white",fontSize:"4vh",padding:"1vh"}})})}),Object(n.jsx)("div",{style:{marginLeft:"2.25em",marginTop:"5%"},children:Object(n.jsxs)("div",{style:{marginLeft:"14vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:[Object(n.jsxs)("div",{style:{textAlign:"center",marginRight:"79.5vh",marginTop:"20vh"},"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["Contact Me",Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{style:{opacity:"80%",textAlign:"center",marginRight:"40vh",marginTop:"2em",fontSize:"0.25em",fontWeight:"bold",lineHeight:"1.5em"},children:Object(n.jsxs)("form",{action:"mailto:dsbyun813@gmail.com",method:"GET",children:[Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1e3,children:Object(n.jsx)("input",{className:"formInput",name:"subject",placeholder:"subject...",type:"text",required:!0})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:Object(n.jsx)("textarea",{className:"formBody",name:"body",placeholder:"body...",required:!0})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":2e3,children:Object(n.jsx)("input",{className:"formSubmit",type:"submit",value:"Send"})}),Object(n.jsx)("br",{})]})})]})}),Object(n.jsx)("div",{style:{margin:"0",height:"100vh",overflow:"hidden"},children:t()})]})},W=(i(44),i.p+"static/media/projects.e1ebb2f2.png"),B=(i(45),i(13)),H=i.n(B),J=function(){Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]);var e=a.a.useState(!1),t=Object(h.a)(e,2),i=t[0],o=t[1],c=a.a.useCallback((function(){return o(!0)}),[]),r=a.a.useState(0),d=Object(h.a)(r,2),l=d[0],j=d[1],b=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:c,style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:W})};if(!i)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:b()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[b(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{style:{marginLeft:"10vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:Object(n.jsxs)("div",{"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["Projects",Object(n.jsx)("br",{})]})})}),Object(n.jsxs)("div",{style:{width:"100%",position:"absolute"},children:[Object(n.jsxs)("div",{className:"projects",children:[Object(n.jsx)("div",{className:"project","data-aos":"fade-right","data-aos-easing":"ease-out-sine","data-aos-duration":1200,children:Object(n.jsx)("div",{onClick:function(){return j(0)},className:"title",id:0===l?"selected":"",children:"Quick-Pick"})}),Object(n.jsx)("div",{className:"project","data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1400,children:Object(n.jsx)("div",{onClick:function(){return j(1)},className:"title",id:1===l?"selected":"",children:"Gomoku AI"})}),Object(n.jsx)("div",{className:"project","data-aos":"fade-right","data-aos-easing":"ease-out-sine","data-aos-duration":1300,children:Object(n.jsx)("div",{onClick:function(){return j(2)},className:"title",id:2===l?"selected":"",children:"Library System"})}),Object(n.jsx)("div",{className:"project","data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:Object(n.jsx)("div",{onClick:function(){return j(3)},className:"title",id:3===l?"selected":"",children:"Passion Projects"})})]}),Object(n.jsx)("div",{className:"projectContent","data-aos":"fade-in","data-aos-easing":"ease-out-sine","data-aos-duration":2e3,children:function(){switch(l){case 0:return Object(n.jsxs)("div",{style:{fontSize:"2.5vh",lineHeight:"4vh"},children:[Object(n.jsx)("h1",{children:"Quick-Pick | 2020"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Project Overview"})}),Object(n.jsx)("li",{children:"Quick-Pick is a job portal website made for those who need a second job, are unable to work on a fixed schedule, or simply have a limit on their availability."}),Object(n.jsx)("li",{children:"The project was developed using an agile workflow during a 12 week period with 5 sprints."}),Object(n.jsx)("li",{children:"The group consisted of three members where I developed in both the frontend and backend."}),Object(n.jsx)("br",{}),Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Technologies"})}),Object(n.jsx)("li",{children:"Frontend: React"}),Object(n.jsx)("li",{children:"Backend: Spring Boot"}),Object(n.jsx)("li",{children:"Deployment: Heroku"})]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink",href:"https://github.com/Arjunbhavsar/Quick-Pick/",children:["Quick-Pick Repository",Object(n.jsx)(H.a,{id:"githubIcon"})]})]});case 1:return Object(n.jsxs)("div",{style:{fontSize:"2.5vh",lineHeight:"4vh"},children:[Object(n.jsx)("h1",{children:"Gomoku AI | 2018"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Project Overview"})}),Object(n.jsx)("li",{children:'Developed and trained an AI to play the traditional Japanese boardgame "Gomoku" or "Five in a Row" through linear regression training while utilizing alpha-beta pruning.'}),Object(n.jsx)("li",{children:"The project was developed during a 2 week period."}),Object(n.jsx)("li",{children:"The group consisted of three members where I developed the game logic and trained the AI."}),Object(n.jsx)("br",{}),Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Technologies"})}),Object(n.jsx)("li",{children:"Python"})]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink",href:"https://github.com/byun-sungwoo/GomokuAI",children:["Gomoku AI Repository",Object(n.jsx)(H.a,{id:"githubIcon"})]})]});case 2:return Object(n.jsxs)("div",{style:{fontSize:"2.5vh",lineHeight:"4vh"},children:[Object(n.jsx)("h1",{children:"Library System | 2017"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Project Overview"})}),Object(n.jsx)("li",{children:"Developed a simulation of how a library system may store and load information"}),Object(n.jsx)("li",{children:"The project was developed during a 2 week period."}),Object(n.jsx)("li",{children:"The group consisted of four members where I developed the user management and book storage system."}),Object(n.jsx)("br",{}),Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Technologies"})}),Object(n.jsx)("li",{children:"Java"})]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink",href:"https://github.com/byun-sungwoo/LibrarySystem",children:["Library System Repository",Object(n.jsx)(H.a,{id:"githubIcon"})]})]});default:return Object(n.jsxs)("div",{style:{fontSize:"2vh",lineHeight:"3vh"},children:[Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Bytris | 2019"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo/Bytris",children:[Object(n.jsx)(H.a,{id:"githubIcon2"}),"Bytris Repository"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Bytris is modern Tetris developed in C with ncurses that runs in unix terminals."}),Object(n.jsx)("li",{children:"The project was developed by myself during a 2.5 week period."}),Object(n.jsx)("li",{children:"Complete with SRS rotation, lock delay, holding, and a 7 bag system."})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Lineclear | 2020"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo/Lineclear",children:[Object(n.jsx)(H.a,{id:"githubIcon2"}),"Lineclear Repository"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Lineclear is a platformer developed in C# with Unity."}),Object(n.jsx)("li",{children:"The project was developed by myself during a 4 week period."}),Object(n.jsx)("li",{children:"This was my first shot at game development."}),Object(n.jsx)("li",{children:"The game is available on itch.io, try it out!"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Portfolio | 2020"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo/byun-sungwoo-portfolio",children:[Object(n.jsx)(H.a,{id:"githubIcon2"}),"Portfolio Repository"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"The website you are currently on was developed in React."}),Object(n.jsx)("li",{children:"The project was developed by myself during a 2 week period."})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Others"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"I have many more smaller projects that I enjoy working on."}),Object(n.jsx)("li",{children:"Learning new things and creating is something I enjoy very much."})]})]})}}()})]})]})},G=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={sectionsColor:["#0f1011","#0f1011","#0f1011","#0f1011","#0f1011"]},e.pageTwo=a.a.createRef(),e}return Object(d.a)(i,[{key:"render",value:function(){var e=this,t=["#1D1F21","#1D1F21","#1D1F21","#1D1F21","#1D1F21","#1D1F21"];return Object(n.jsx)(u.a,{scrollingSpeed:1e3,anchors:["intro","about","experience","projects","contact"],navigation:!0,sectionsColor:this.state.sectionsColor,width:window.innerWidth,height:window.innerHeight,scrollBar:!0,animateAnchor:!1,scrollOverflowOptions:{disablePointer:"true"},disablePointer:!0,render:function(i){i.state;var s=i.fullpageApi;return Object(n.jsxs)(u.a.Wrapper,{children:[Object(n.jsx)("div",{"data-anchor":"intro",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(w,{slideIndex:0,moveTo:function(e){return s.moveTo(e)}}),Object(n.jsx)("div",{}),Object(n.jsx)(f,{colorStart:t[0],colorEnd:t[1],action:"flip",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{"data-anchor":"s1",className:"section",ref:e.pageTwo,children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(L,{}),Object(n.jsx)(f,{colorStart:t[1],colorEnd:t[2],action:"flip-right",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{"data-anchor":"s2",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(T,{}),Object(n.jsx)(f,{colorStart:t[2],colorEnd:t[3],action:"flip",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{"data-anchor":"s3",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(J,{}),Object(n.jsx)(f,{colorStart:t[3],colorEnd:t[4],action:"flip-right",style:{position:"absolute"}})]})}),Object(n.jsx)("div",{"data-anchor":"s4",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(R,{moveTo:function(e){return s.moveTo(e)}}),Object(n.jsx)(f,{colorStart:t[4],colorEnd:t[5],action:"flip",style:{position:"absolute"}})]})})]})}})}}]),i}(s.Component);function Q(){var e=a.a.useState({height:window.innerHeight,width:window.innerWidth}),t=Object(h.a)(e,2),i=t[0],s=t[1];return a.a.useEffect((function(){var e=function(e,t){var i,n=arguments,s=this;return function(a){clearTimeout(i),i=setTimeout((function(t){i=null,e.apply(s,n)}),t)}}((function(){s({height:window.innerHeight,width:window.innerWidth})}),1e3);return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}})),Object(n.jsx)(G,{},i.width)}i(46);var _=i(29),U=i.n(_),q=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={intro:!0},e}return Object(d.a)(i,[{key:"render",value:function(){var e=this,t=this.state.intro,i=function(e,t,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return Object(n.jsx)("h1",{className:"hoverAnimation".concat(i),align:"center",children:s?Object(n.jsxs)("a",{rel:"noreferrer",className:"underline",children:[e,Object(n.jsx)(H.a,{id:"underlineIcon"})]}):Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:t,children:[e,Object(n.jsx)(H.a,{id:"underlineIcon"})]})})},s=function(){return Object(n.jsxs)("div",{style:{position:"fixed",whiteSpace:"nowrap",bottom:"0"},children:[i("github","https://github.com/byun-sungwoo",1,!1),Object(n.jsxs)("div",{className:"infoIcon",children:[Object(n.jsx)(U.a,{style:{fontSize:"3vh"}}),Object(n.jsxs)("div",{className:"infoText",children:["Created with React using FullPage and Three.",Object(n.jsx)("br",{}),"Hosted by GitHub pages."]})]})]})};return Object(n.jsxs)("div",{style:{width:"100%",height:"100%"},children:[t?Object(n.jsx)(Q,{}):Object(n.jsx)("div",{style:{margin:"0",height:"100vh",overflow:"hidden",backgroundColor:"red"},onClick:function(){e.setState({intro:!t})},children:s()}),s()]})}}]),i}(s.Component),X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,63)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),s(e),a(e),o(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),X()}},[[47,1,2]]]);
//# sourceMappingURL=main.7cc674bb.chunk.js.map