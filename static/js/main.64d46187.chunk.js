(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t(9),a=t.n(i),s=(t(16),t(8)),d=t(20),r=t(21),c=t(22),l=t(11),u=t.n(l),p="\n# Welcome to my Markdown Previewer!\n\n## Some examples of what you can do are this subheading\n\nYou can use [links](https:/www.freecodecamp.org)\n\n    > You can use blockquotes\n\nYou can do some coding `<div> </div>` between backticks\n    use multiple backticks to do a code block\n    \n```\n// this is multi-line code:\nconst markdown = () => {\n    if (1 + 1 === 2){\n        return true\n    }\n}\n```\nYou can make words **bold**\n \nand you can also use images\n\n![dogImage](https://i.kym-cdn.com/photos/images/facebook/001/457/007/ed5.jpeg)\n\n",h=t(0),m=function(){var e=Object(o.useState)(p),n=Object(s.a)(e,2),t=n[0],i=n[1],a=Object(o.useState)(!1),l=Object(s.a)(a,2),m=l[0],b=l[1];console.log(p);var g=function(e,n){m?(document.getElementById(e).style.height="editor"===e?"200px":"auto",document.getElementById(n).style.display="block",b(!1)):(document.getElementById(e).style.height="editor"===e?"600px":"auto",document.getElementById(n).style.display="none",b(!0))};return Object(h.jsxs)(d.a,{fluid:!0,id:"markdown",style:{width:"70%",margin:"auto",maxWidth:"700px"},children:[Object(h.jsxs)(r.a,{id:"firstBox",style:{marginTop:"20px"},children:[Object(h.jsxs)(c.a,{id:"header",children:["Editor",Object(h.jsx)("i",{onClick:function(){return g("editor","whole")},class:"bi bi-arrows-angle-expand"})]}),Object(h.jsx)("textarea",{onChange:function(e){return i(e.target.value)},id:"editor",children:p})]}),Object(h.jsxs)(r.a,{id:"whole",style:{marginTop:"40px"},children:[Object(h.jsxs)(c.a,{id:"header2",style:{width:"730px",height:"30px"},children:["Previewer",Object(h.jsx)("i",{onClick:function(){return g("preview","firstBox")},class:"bi bi-arrows-angle-expand"})]}),Object(h.jsx)(c.a,{id:"preview",style:{width:"700px",height:"auto",padding:"20px",paddingTop:"5px"},dangerouslySetInnerHTML:{__html:u()(t,{sanitize:!1})}})]})]})};a.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.64d46187.chunk.js.map