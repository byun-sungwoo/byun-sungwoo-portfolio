(this["webpackJsonpbyun-sungwoo-portfolio"]=this["webpackJsonpbyun-sungwoo-portfolio"]||[]).push([[0],{13:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),a=i.n(s),o=i(18),c=i.n(o),r=i(8),d=i(9),l=i(11),j=i(10),h=i(21),b=i.n(h),u=i(19),x=i.p+"static/media/intro.e96bfce5.png",O=(i(7),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={image1Loaded:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(u.a)(n)),n}return Object(d.a)(i,[{key:"handleImageLoaded",value:function(){this.setState({image1Loaded:!0})}},{key:"render",value:function(){var e=this,t=function(){return Object(n.jsx)("img",{alt:"mountain",id:"mountain",className:"noSelect",onLoad:e.handleImageLoaded,style:{position:"absolute",objectFit:"cover",width:"100%",top:"0"},src:x})};return this.state.image1Loaded?Object(n.jsxs)("div",{style:{position:"absolute",width:"100%",height:"100%",overflow:"hidden"},children:[t(),Object(n.jsxs)("div",{style:{color:"white",position:"absolute"},children:[Object(n.jsx)("div",{style:{marginLeft:"5vh",marginTop:"55vh",fontSize:"8vh",fontFamily:"sans-serif",fontWeight:"bold",zIndex:"100000"},children:Object(n.jsxs)("div",{className:"introText",children:["Hi,",Object(n.jsx)("br",{}),"I'm Daniel Byun",Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{textAlign:"right",fontSize:".5em"},children:"software engineer"}),Object(n.jsx)("br",{})]})}),Object(n.jsxs)("div",{style:{marginLeft:"5vh",marginTop:"-6vh"},children:[Object(n.jsx)("button",{className:"navButton",onClick:function(){return e.props.moveTo(2)},children:"ABOUT ME"}),Object(n.jsx)("button",{className:"navButton",onClick:function(){return e.props.moveTo(4)},children:"PROJECTS"})]})]})]}):Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:t()})]})}}]),i}(s.Component)),m=i(3),g=i(6),f=i.n(g),v=i.p+"static/media/img2.6f4e1ab9.jpg",p=i.p+"static/media/about.5d7b21b6.png",y=(i(13),function(){Object(s.useEffect)((function(){f.a.init({duration:2e3})}),[]);var e=a.a.useState(!1),t=Object(m.a)(e,2),i=t[0],o=t[1],c=a.a.useCallback((function(){return o(!0)}),[]),r=a.a.useState(!1),d=Object(m.a)(r,2),l=d[0],j=d[1],h=a.a.useCallback((function(){return j(!0)}),[]),b=a.a.useState(!1),u=Object(m.a)(b,2),x=u[0],O=u[1],g=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:c,className:"noSelect",style:{marginLeft:"1vw",width:"20vw",maxWidth:"400px",height:"20vw",maxHeight:"400px",borderRadius:"50%",objectFit:"cover"},src:v})},y=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:h,className:"noSelect",style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:p})};if(!i||!l)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:g()}),Object(n.jsx)("div",{hidden:!0,children:y()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[y(),Object(n.jsxs)("div",{style:{marginLeft:"2.25em",marginTop:"0%"},children:[Object(n.jsx)("div",{"data-aos":"fade-right","data-aos-easing":"ease-out","data-aos-duration":"1000",style:{marginTop:"2.25em",position:"absolute"},children:g()}),Object(n.jsx)("div",{style:{marginLeft:"20vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:Object(n.jsx)("div",{"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:Object(n.jsxs)("div",{style:{float:"left",marginRight:"3vh"},children:["About Me",Object(n.jsx)("br",{})]})})})]}),Object(n.jsx)("div",{style:{width:"100%",display:"inline-block",marginTop:".5em",marginLeft:"1em",fontSize:"7vh"},children:Object(n.jsx)("div",{style:{fontSize:".5em"},"data-aos":"fade-in","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:Object(n.jsxs)("table",{style:{opacity:".9",marginLeft:"auto",marginRight:"auto"},"data-aos":"fade-right","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:[Object(n.jsx)("thead",{style:{margin:"1em",fontWeight:"bold"},children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Languages"}),Object(n.jsx)("th",{children:"Frameworks"}),Object(n.jsx)("th",{children:"Databases"})]})}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Java"}),"  ",Object(n.jsx)("td",{children:"React"}),"  ",Object(n.jsx)("td",{children:"PostgreSQL"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"JavaScript"})," ",Object(n.jsx)("td",{children:"Spring"}),"  ",Object(n.jsx)("td",{children:"MySQL"}),"  "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"C"}),"   ",Object(n.jsx)("td",{children:"ASP.NET"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Ruby"}),"  ",Object(n.jsx)("td",{id:"noCursor"}),"  ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Python"}),"  ",Object(n.jsx)("td",{id:"noCursor"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"C#"}),"   ",Object(n.jsx)("td",{id:"noCursor"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"C++"}),"  ",Object(n.jsx)("td",{id:"noCursor"})," ",Object(n.jsx)("td",{id:"noCursor"})," "]})]})})}),Object(n.jsx)("div",{style:{position:"relative",textAlign:"center",margin:".1em"},"data-aos":"fade-in","data-aos-easing":"ease-out-sine","data-aos-duration":2200,children:Object(n.jsx)("div",{style:{display:"inline-block"},children:Object(n.jsx)("div",{style:{float:"left",cursor:"pointer"},onClick:function(){O(!x)},children:Object(n.jsx)("div",{className:"personalToggle",children:x?"click for default bio":"click for personal bio"})})})}),Object(n.jsx)("div",{className:"aboutDescription","data-aos":"fade-in","data-aos-easing":"ease-out-sine","data-aos-duration":2200,children:Object(n.jsx)("div",{className:"aboutDescriptionContent",children:x?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1900,children:["I grew up in a suburb of Chicago in a Korean family. My school days before University were not very productive",Object(n.jsx)("br",{}),"as a lot of the time I should've spent studying were instead devoted towards playing games with friends or playing the cello.",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{marginTop:".5em"},"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:["It wasn't until the end of Junior year that I had realized that I really need to pay attention to my future.",Object(n.jsx)("br",{}),"I studied my brain out for the ACT and pulled myself together for the rest of my time as a high schooler.",Object(n.jsx)("br",{}),"I decided on Computer Science as my future on a whim which could have gone really bad now that I think about it... but it worked out really well.",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{marginTop:".5em"},"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1300,children:["I met some really cool people in University and it was there where my passion for coding and designing was born.",Object(n.jsx)("br",{}),"I got to work on, create, and collaborate in many different projects and learned the most when working with others.",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{marginTop:".5em"},"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1e3,children:["While I do enjoy programming and creating projects in my free time, I still enjoy playing games from time to time",Object(n.jsx)("br",{}),"and have even entered a couple of Tetris tournaments where I won some money.",Object(n.jsx)("br",{}),"Music continues to be a part of my life through University where I learned to play the piano.",Object(n.jsx)("br",{}),"I enjoy learning new pieces and rewriting songs for the piano.",Object(n.jsx)("br",{})]})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:"Major GPA: 3.68 | Cumulative GPA: 3.54"}),Object(n.jsxs)("div",{style:{marginTop:".5em"},"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1300,children:["Senior at Indiana University Bloomington pursuinga B.S. in Computer Science.",Object(n.jsx)("br",{}),"Specializing in Software Engineering and graduating in May 2021."]}),Object(n.jsx)("div",{style:{marginTop:".5em"},"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1e3,children:"Passionite about coding, designing, and learning more efficient ways to solve problems."})]})})})]})}),w=i.p+"static/media/experience.2cbf8af1.png",k=(i(34),function(){Object(s.useEffect)((function(){f.a.init({duration:2e3})}),[]);var e=a.a.useState(!1),t=Object(m.a)(e,2),i=t[0],o=t[1],c=a.a.useCallback((function(){return o(!0)}),[]),r=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:c,className:"noSelect",style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:w})};if(!i)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:r()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[r(),Object(n.jsx)("div",{style:{marginLeft:"2.25em",marginTop:"10vh"},children:Object(n.jsxs)("div",{style:{marginLeft:"10vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:[Object(n.jsxs)("div",{"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["Experience",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{style:{opacity:".9",marginLeft:"0vw",marginTop:"2em",fontSize:"0.25em",fontWeight:"bold",lineHeight:"1.5em"},children:[Object(n.jsxs)("div",{"data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:["Aug 2019 - Present",Object(n.jsx)("br",{}),"Undergraduate Instructor at Indiana University Bloomington",Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Lead groups of students during labs and provide assistance with assignments/projects."}),Object(n.jsx)("li",{children:"Evaluate and grade students\u2019 assignments and provide 1:1 feedback during office hours."}),Object(n.jsx)("li",{children:"Cover lectures in absence of professor."})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{marginLeft:"2vh"},children:Object(n.jsxs)("div",{className:"timeline",children:[Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1200,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Aug 2019 \u2013 Dec 2019 | Software Systems"}),Object(n.jsxs)("div",{className:"text",children:[">"," Operating system interfaces and modern object-oriented programming using Java."]})]})]}),Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1400,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Jan 2020 \u2013 May 2020 | Software Systems Honors"}),Object(n.jsxs)("div",{className:"text",children:[">"," Operating system interfaces and modern object-oriented programming using Java."]})]})]}),Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1600,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Jan 2020 - May 2020 | Mastering the World Wide Web"}),Object(n.jsxs)("div",{className:"text",children:[">"," Maintain a fully functional website primarily using HTML, Perl, Apache, and MySQL."]})]})]}),Object(n.jsxs)("div",{className:"container","data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1800,children:[Object(n.jsx)("div",{className:"button"}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"title",children:"Aug 2020 \u2013 Present | Software Systems"}),Object(n.jsxs)("div",{className:"text",children:[">"," Operating system interfaces and modern object-oriented programming using Java."]})]})]})]})})]})]})})]})}),N=i(22),S=i.p+"static/media/contact.d63af4bc.png",C=i(57),I=i(25),T=i.n(I),L=i(24),A=i.n(L);i(35);function P(e){return Object(n.jsx)(C.a,Object(N.a)(Object(N.a)({},e),{},{children:Object(n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}var z=function(e,t,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return Object(n.jsx)("h1",{className:"hoverAnimation".concat(i),align:"center",children:s?Object(n.jsxs)("a",{rel:"noreferrer",className:"underline",children:[e,Object(n.jsx)(T.a,{style:{marginRight:"2px"},id:"underlineIcon"})]}):Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:t,children:[e,Object(n.jsx)(A.a,{style:{marginRight:"4px"},id:"underlineIcon"})]})})},R=function(e){var t=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",bottom:"0"},children:z("linkedin","https://www.linkedin.com/in/daniel-byun-34a1b2176/",2,!1)}),Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",bottom:"0"},onClick:function(){return e.moveTo(5)},children:z("contact","",3)})]})};Object(s.useEffect)((function(){f.a.init({duration:2e3})}),[]);var i=a.a.useState(!1),o=Object(m.a)(i,2),c=o[0],r=o[1],d=a.a.useCallback((function(){return r(!0)}),[]),l=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:d,className:"noSelect",style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:S})};if(!c)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",top:"2em",right:"2em"},children:Object(n.jsx)("div",{className:"homeIcon",onClick:function(){return e.moveTo(1)},children:Object(n.jsx)(P,{className:"iconImage",style:{color:"white",fontSize:"4vh",padding:"1vh"}})})}),Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:l()}),Object(n.jsx)("div",{style:{position:"absolute",left:"0",margin:"0",height:"100vh",overflow:"hidden"},children:t()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[l(),Object(n.jsx)("div",{style:{position:"fixed",whiteSpace:"nowrap",top:"2em",right:"2em"},children:Object(n.jsx)("div",{className:"homeIcon",onClick:function(){return e.moveTo(1)},children:Object(n.jsx)(P,{className:"iconImage",style:{color:"white",fontSize:"4vh",padding:"1vh"}})})}),Object(n.jsx)("div",{style:{marginLeft:"2.25em",marginTop:"5%"},children:Object(n.jsxs)("div",{style:{marginLeft:"14vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:[Object(n.jsxs)("div",{style:{whiteSpace:"nowrap",textAlign:"center",marginRight:"79.5vh",marginTop:"20vh"},"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["Contact Me",Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{style:{opacity:"80%",textAlign:"center",marginRight:"40vh",marginTop:"2em",fontSize:"0.25em",fontWeight:"bold",lineHeight:"1.5em"},children:Object(n.jsxs)("form",{action:"mailto:dsbyun813@gmail.com",method:"GET",autocomplete:"off",children:[Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1e3,children:Object(n.jsx)("input",{className:"formInput",name:"subject",placeholder:"subject...",type:"text",required:!0})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:Object(n.jsx)("textarea",{className:"formBody",name:"body",placeholder:"body...",required:!0})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{"data-aos":"fade-up","data-aos-easing":"ease-out-sine","data-aos-duration":2e3,children:Object(n.jsx)("input",{className:"formSubmit",type:"submit",value:"Send"})}),Object(n.jsx)("br",{})]})})]})}),Object(n.jsx)("div",{style:{margin:"0",height:"100vh",overflow:"hidden"},children:t()})]})},D=(i(41),i.p+"static/media/projects.08b880f1.png"),F=(i(42),i(4)),B=i.n(F),E=function(){Object(s.useEffect)((function(){f.a.init({duration:2e3})}),[]);var e=a.a.useState(!1),t=Object(m.a)(e,2),i=t[0],o=t[1],c=a.a.useCallback((function(){return o(!0)}),[]),r=a.a.useState(0),d=Object(m.a)(r,2),l=d[0],j=d[1],h=function(){return Object(n.jsx)("img",{alt:"profile",onLoad:c,className:"noSelect",style:{position:"absolute",objectFit:"cover",width:"100%",bottom:"0"},src:D})};if(!i)return Object(n.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#1A1C1E",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{hidden:!0,children:h()})]});return Object(n.jsxs)("div",{style:{overflow:"hidden",position:"absolute",width:"100%",height:"100%",color:"#fff",fontSize:"1em",textDecoration:"none",fontFamily:"Dosis, sans-serif"},children:[h(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{style:{marginLeft:"10vw",marginTop:"1em",fontSize:"8vh",fontWeight:"bold"},children:Object(n.jsxs)("div",{"data-aos":"fade-in","data-aos-easing":"ease-out","data-aos-duration":"5000",children:["Projects",Object(n.jsx)("br",{})]})})}),Object(n.jsxs)("div",{style:{width:"100%",position:"absolute"},children:[Object(n.jsxs)("div",{className:"projects",children:[Object(n.jsx)("div",{className:"project","data-aos":"fade-right","data-aos-easing":"ease-out-sine","data-aos-duration":1200,children:Object(n.jsx)("div",{onClick:function(){return j(0)},className:"title",id:0===l?"selected":"",children:"Quick-Pick"})}),Object(n.jsx)("div",{className:"project","data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1400,children:Object(n.jsx)("div",{onClick:function(){return j(1)},className:"title",id:1===l?"selected":"",children:"Gomoku AI"})}),Object(n.jsx)("div",{className:"project","data-aos":"fade-right","data-aos-easing":"ease-out-sine","data-aos-duration":1300,children:Object(n.jsx)("div",{onClick:function(){return j(2)},className:"title",id:2===l?"selected":"",children:"Library System"})}),Object(n.jsx)("div",{className:"project","data-aos":"fade-left","data-aos-easing":"ease-out-sine","data-aos-duration":1500,children:Object(n.jsx)("div",{onClick:function(){return j(3)},className:"title",id:3===l?"selected":"",children:"Passion Projects"})})]}),Object(n.jsx)("div",{className:"projectContent","data-aos":"fade-in","data-aos-easing":"ease-out-sine","data-aos-duration":2e3,children:function(){switch(l){case 0:return Object(n.jsxs)("div",{style:{fontSize:"2.5vh",lineHeight:"4vh"},children:[Object(n.jsx)("h1",{children:"Quick-Pick | 2020"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Project Overview"})}),Object(n.jsx)("li",{children:"Quick-Pick is a job portal website made for those who need a second job, are unable to work on a fixed schedule, or simply have a limit on their availability."}),Object(n.jsx)("li",{children:"The project was developed using an agile workflow during a 12 week period with 5 sprints."}),Object(n.jsx)("li",{children:"The group consisted of three developers where I worked in both the frontend and backend."}),Object(n.jsx)("br",{}),Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Technologies"})}),Object(n.jsx)("li",{children:"Frontend: React"}),Object(n.jsx)("li",{children:"Backend: Spring Boot"}),Object(n.jsx)("li",{children:"Deployment: Heroku"})]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink",href:"https://github.com/Arjunbhavsar/Quick-Pick/",children:["Quick-Pick Repository",Object(n.jsx)(B.a,{id:"githubIcon"})]})]});case 1:return Object(n.jsxs)("div",{style:{fontSize:"2.5vh",lineHeight:"4vh"},children:[Object(n.jsx)("h1",{children:"Gomoku AI | 2018"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Project Overview"})}),Object(n.jsx)("li",{children:'Developed and trained an AI to play the traditional Japanese boardgame "Gomoku" or "Five in a Row" through linear regression training while utilizing alpha-beta pruning.'}),Object(n.jsx)("li",{children:"The project was developed during a 2 week period."}),Object(n.jsx)("li",{children:"The group consisted of three members where I developed the game logic and trained the AI."}),Object(n.jsx)("br",{}),Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Technologies"})}),Object(n.jsx)("li",{children:"Python"})]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink",href:"https://github.com/byun-sungwoo/GomokuAI",children:["Gomoku AI Repository",Object(n.jsx)(B.a,{id:"githubIcon"})]})]});case 2:return Object(n.jsxs)("div",{style:{fontSize:"2.5vh",lineHeight:"4vh"},children:[Object(n.jsx)("h1",{children:"Library System | 2017"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Project Overview"})}),Object(n.jsx)("li",{children:"Developed a simulation of how a library system may store and load information"}),Object(n.jsx)("li",{children:"The project was developed during a 2 week period."}),Object(n.jsx)("li",{children:"The group consisted of four members where I developed the user management and book storage system."}),Object(n.jsx)("br",{}),Object(n.jsx)("u",{children:Object(n.jsx)("b",{children:"Technologies"})}),Object(n.jsx)("li",{children:"Java"})]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink",href:"https://github.com/byun-sungwoo/LibrarySystem",children:["Library System Repository",Object(n.jsx)(B.a,{id:"githubIcon"})]})]});default:return Object(n.jsxs)("div",{style:{fontSize:"2vh",lineHeight:"3vh"},children:[Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Bytris | 2019"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo/Bytris",children:[Object(n.jsx)(B.a,{id:"githubIcon2"}),"Bytris Repository"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Bytris is modern Tetris developed in C with ncurses that runs in unix terminals."}),Object(n.jsx)("li",{children:"The project was developed by myself during a 2.5 week period."}),Object(n.jsx)("li",{children:"Complete with SRS rotation, lock delay, holding, and a 7 bag system."})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Lineclear | 2020"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo/Lineclear",children:[Object(n.jsx)(B.a,{id:"githubIcon2"}),"Lineclear Repository"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Lineclear is a platformer developed in C# with Unity."}),Object(n.jsx)("li",{children:"The project was developed by myself during a 4 week period."}),Object(n.jsx)("li",{children:"This was my first shot at game development."}),Object(n.jsx)("li",{children:"The game is available on itch.io, try it out!"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Portfolio | 2020"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo/byun-sungwoo-portfolio",children:[Object(n.jsx)(B.a,{id:"githubIcon2"}),"Portfolio Repository"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"The website you are currently on was developed in React."}),Object(n.jsx)("li",{children:"The project was developed by myself during a 2 week period."})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{style:{display:"inline-block",marginRight:"2vh"},children:"Others"}),Object(n.jsx)("div",{style:{display:"inline-block",float:"right"},children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"githubLink2",href:"https://github.com/byun-sungwoo",children:[Object(n.jsx)(B.a,{id:"githubIcon2"}),"My GitHub"]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"I have many more smaller projects that I enjoy working on."}),Object(n.jsx)("li",{children:"Learning new things and creating is something I enjoy very much."})]})]})}}()})]})]})},M=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={sectionsColor:["#0f1011","#0f1011","#0f1011","#0f1011","#0f1011"]},e.pageTwo=a.a.createRef(),e}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return Object(n.jsx)(b.a,{scrollingSpeed:1e3,anchors:["intro","about","experience","projects","contact"],navigation:!0,sectionsColor:this.state.sectionsColor,width:window.innerWidth,height:window.innerHeight,scrollBar:!0,animateAnchor:!1,scrollOverflowOptions:{disablePointer:"true"},disablePointer:!0,render:function(t){t.state;var i=t.fullpageApi;return Object(n.jsxs)(b.a.Wrapper,{children:[Object(n.jsx)("div",{"data-anchor":"intro",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(O,{slideIndex:0,moveTo:function(e){return i.moveTo(e)}}),Object(n.jsx)("div",{style:{overflow:"hidden",margin:"0",height:"100vh"}})]})}),Object(n.jsx)("div",{"data-anchor":"s1",className:"section",ref:e.pageTwo,children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(y,{}),Object(n.jsx)("div",{style:{overflow:"hidden",margin:"0",height:"100vh"}})]})}),Object(n.jsx)("div",{"data-anchor":"s2",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(k,{}),Object(n.jsx)("div",{style:{overflow:"hidden",margin:"0",height:"100vh"}})]})}),Object(n.jsx)("div",{"data-anchor":"s3",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(E,{}),Object(n.jsx)("div",{style:{overflow:"hidden",margin:"0",height:"100vh"}})]})}),Object(n.jsx)("div",{"data-anchor":"s4",className:"section",children:Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)(R,{moveTo:function(e){return i.moveTo(e)}}),Object(n.jsx)("div",{style:{overflow:"hidden",margin:"0",height:"100vh"}})]})})]})}})}}]),i}(s.Component),H=(i(43),i(26)),W=i.n(H),J=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={intro:!0},e}return Object(d.a)(i,[{key:"render",value:function(){var e=this,t=this.state.intro,i=function(e,t,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return Object(n.jsx)("h1",{className:"hoverAnimation".concat(i),align:"center",children:s?Object(n.jsxs)("a",{rel:"noreferrer",className:"underline",children:[e,Object(n.jsx)(B.a,{id:"underlineIcon"})]}):Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:t,children:[e,Object(n.jsx)(B.a,{id:"underlineIcon"})]})})},s=function(){return Object(n.jsxs)("div",{style:{position:"fixed",whiteSpace:"nowrap",bottom:"0"},children:[i("github","https://github.com/byun-sungwoo",1,!1),Object(n.jsxs)("div",{className:"infoIcon",children:[Object(n.jsx)(W.a,{style:{fontSize:"3vh"}}),Object(n.jsxs)("div",{className:"infoText",children:["Created with React using FullPage.",Object(n.jsx)("br",{}),"Hosted by GitHub pages."]})]})]})};return Object(n.jsxs)("div",{style:{width:"100%",height:"100%"},children:[t?Object(n.jsx)(M,{}):Object(n.jsx)("div",{style:{margin:"0",height:"100vh",overflow:"hidden",backgroundColor:"red"},onClick:function(){e.setState({intro:!t})},children:s()}),s()]})}}]),i}(s.Component),G=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,58)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),s(e),a(e),o(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root")),G()},7:function(e,t,i){}},[[45,1,2]]]);
//# sourceMappingURL=main.fba484fb.chunk.js.map