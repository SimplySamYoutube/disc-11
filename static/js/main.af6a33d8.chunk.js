(this["webpackJsonpdisc-11-website"]=this["webpackJsonpdisc-11-website"]||[]).push([[0],{13:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(18),c=(n(13),n(19),n(11)),s=n.n(c),i=n(0),a=n(2);n(22);var o=function(){var e=Object(i.useState)({text:"",items:[]}),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){document.getElementById("code").innerHTML="",s()(document.getElementById("code"),{lineNumbers:!0,mode:"javascript",readOnly:!0,value:"function trigger() {\n    var url = [\n".concat(n.items.map((function(e){return'        "'.concat(e,'"')})).join(",\n"),"\n    ];\n    for (var x = 0; x < url.length; x++) {\n        var uri = url[x];\n        try {\n            UrlFetchApp.fetch(uri);\n        } catch (err) {\n            Logger.log(err.message)\n        }\n    }\n}")})})),Object(a.jsxs)("div",{className:"flex items-center justify-center min-w-full h-screen dark:bg-gray-900",children:[Object(a.jsxs)("div",{className:"m-20",children:[Object(a.jsx)("p",{className:"text-xl font-bold dark:text-white",children:"Script Generator"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{id:"url-textbox",onChange:function(e){c({items:n.items,text:e.target.value})},value:n.text,placeholder:"Put URL here"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"p-2 mt-2 transition-colors border rounded border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black",onClick:function(){c({items:n.items.concat([n.text]),text:""})},children:"Add URL"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{id:"code"})]})},d=n(15),l=n(1),b=n(14),x=n.n(b);var j=Object(a.jsx)(d.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(a.jsx)("div",{className:"flex items-center justify-center min-w-full h-screen dark:bg-gray-900",children:Object(a.jsx)("p",{className:"m-32 text-6xl font-bold dark:text-white",children:"Coming soon!"})})}}),Object(a.jsx)(l.a,{path:"/script",component:o})]})});x.a.render(j,document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.af6a33d8.chunk.js.map