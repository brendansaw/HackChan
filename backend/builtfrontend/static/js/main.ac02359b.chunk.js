(this.webpackJsonphc2=this.webpackJsonphc2||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),i=n.n(a),s=(n.p,n(43),n(7)),o=n(57),l=n(50),j=n(56),u=(n(44),n(15)),d=n.n(u),b=n(23),h=n(35),O=n(36),x="http://hackchan.tech/threads",p=new(function(){function e(){Object(h.a)(this,e)}return Object(O.a)(e,[{key:"getThreads",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getCommentsForThread",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("http://hackchan.tech/threads/thread_id")).search=new URLSearchParams(t).toString(),e.next=4,fetch(n);case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createNewThread",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createNewComment",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch(x,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),f=n(4);var m=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),u=i[0],d=i[1],b=Object(c.useState)(!1),h=Object(s.a)(b,2),O=h[0],x=h[1],m=Object(c.useState)(!1),v=Object(s.a)(m,2),g=v[0],y=v[1],w=Object(c.useState)(""),S=Object(s.a)(w,2),k=S[0],C=S[1],T=Object(c.useState)(!1),z=Object(s.a)(T,2),N=z[0],B=z[1],F=Object(c.useState)(!1),H=Object(s.a)(F,2),I=H[0],J=H[1],L=Object(c.useState)(!1),E=Object(s.a)(L,2),P=E[0],_=E[1],A=Object(c.useState)(!1),G=Object(s.a)(A,2),U=G[0],W=G[1],D=n.map((function(e){return Object(f.jsx)("center",{children:Object(f.jsx)("p",{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)(l.a,{variant:"light",size:"lg",active:!0,block:!0,id:e.createdAt,onClick:function(){return function(e,t,n){var c=e.replace(/:/g,"_");console.log(c),d(!0),B(t),_(e),p.getCommentsForThread({thread_time:c}).then((function(e){return J(e.comments.map((function(e){return Object(f.jsxs)("p",{children:["Anon posted: ",e.comment_text," at ",e.comment_time]})})))})),W(n)}(e.createdAt,e.title,e.count)},children:["Thread: ",e.title]})," "]})})})}));return Object(c.useEffect)((function(){p.getThreads().then((function(e){r(e)}))}),[D]),Object(f.jsxs)("div",{id:"mainBodyDiv",children:[D,Object(f.jsxs)(j.a,{size:"xl",show:u,onHide:function(){return d(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(f.jsx)(j.a.Header,{closeButton:!0,children:Object(f.jsxs)(j.a.Title,{id:"example-modal-sizes-title-lg",children:["Thread (",P,"): ",N," [",U," replies]"]})}),Object(f.jsxs)(j.a.Body,{children:[Object(f.jsx)(l.a,{variant:"light",size:"lg",active:!0,block:!0,onClick:function(){return x(!0),void y(Object(f.jsx)(o.a.Group,{children:Object(f.jsx)(o.a.Control,{size:"lg",type:"text",as:"textarea",rows:"5",placeholder:"Enter body here",onInput:function(e){return C(e.target.value)}})}))},children:"Write a comment"}),Object(f.jsx)("h4",{children:"Comments"}),I]})]}),Object(f.jsxs)(j.a,{size:"xl",show:O,onHide:function(){return x(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(f.jsx)(j.a.Header,{closeButton:!0,children:Object(f.jsxs)(j.a.Title,{id:"example-modal-sizes-title-lg",children:["Title of current thread: ",N]})}),Object(f.jsxs)(j.a.Body,{children:["Body of new thread: ",g]}),Object(f.jsx)(j.a.Footer,{children:Object(f.jsx)(l.a,{variant:"primary",onClick:function(){return console.log("submitted data:"+k),p.createNewComment({parentTime:P,text:k}),void x(!1)},children:"Submit"})})]})]})},v=n.p+"static/media/gif2.f3acc5f4.gif",g=n(59),y=n(58);n(51);var w=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),u=i[0],d=i[1],b=Object(c.useState)(!1),h=Object(s.a)(b,2),O=h[0],x=h[1],m=Object(c.useState)(""),w=Object(s.a)(m,2),S=w[0],k=w[1],C=Object(c.useState)(""),T=Object(s.a)(C,2),z=T[0],N=T[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"header",children:Object(f.jsx)(g.a,{bg:"primary",expand:"lg",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(g.a.Brand,{href:"",children:Object(f.jsx)("img",{src:v,alt:"Logo Image"})}),Object(f.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(g.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsx)("ul",{class:"nav navbar-nav navbar-center",children:Object(f.jsx)("li",{children:Object(f.jsx)("h1",{children:"Welcome to HackChan"})})}),Object(f.jsx)(y.a,{className:"ml-auto",children:Object(f.jsx)(y.a.Link,{href:"",onClick:function(){return console.log("New topic clicked"),r(!0),d(Object(f.jsx)(o.a.Group,{children:Object(f.jsx)(o.a.Control,{size:"lg",type:"text",placeholder:"Enter title here",onInput:function(e){return k(e.target.value)}})})),void x(Object(f.jsx)(o.a.Group,{children:Object(f.jsx)(o.a.Control,{size:"lg",type:"text",as:"textarea",rows:"5",placeholder:"Enter body here",onInput:function(e){return N(e.target.value)}})}))},children:Object(f.jsx)("h1",{children:"New Topic"})})})]})]})})}),Object(f.jsxs)(j.a,{size:"xl",show:n,onHide:function(){return r(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(f.jsx)(j.a.Header,{closeButton:!0,children:Object(f.jsxs)(j.a.Title,{id:"example-modal-sizes-title-lg",children:["Create a new thread: ",u]})}),Object(f.jsxs)(j.a.Body,{children:["Write the first comment for the thread:",O]}),Object(f.jsx)(j.a.Footer,{children:Object(f.jsx)(l.a,{variant:"primary",onClick:function(){return console.log("submitted data:"+S+", "+z),p.createNewThread({title:S,text:z}),void r(!1)},children:"Submit"})})]})]})},S=(n(52),function(){return Object(f.jsx)("div",{className:"Footer",children:Object(f.jsx)("p",{children:"\xa9 HackChan 2021 - Oliver Xie, Brendan Saw, Samuel Jen, Jacob He"})})});var k=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{id:"wrap",children:[Object(f.jsx)(w,{}),Object(f.jsx)(m,{})]}),Object(f.jsx)(S,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(53);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),C()}},[[54,1,2]]]);
//# sourceMappingURL=main.ac02359b.chunk.js.map